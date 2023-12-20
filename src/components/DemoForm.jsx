import { useState } from "react"

const DemoForm = () => {

        const[prenom, setPrenom] = useState("")
        const[message, setMessage] = useState("")

        const onSubmit = (e) => {
            alert(`Bonjour ${prenom}`)
            alert(`Votre message : ${message}`)
        }

  return (
        <>
        <form onSubmit={onSubmit}>
            <p>
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
            </p>
            <p>
                <label htmlFor="message">Message</label>
                <textarea id="prenom" value={message} onChange={(e) => setMessage(e.target.value)}/>
            </p>
            <p>
                <label htmlFor="pays">Ou est tu né</label>
                <select value={pays} onChange={(e) => setPays(e.target.value)}>
                    <option value="france">France</option>
                    <option value="espagne">Espagne</option>
                    <option value="italie">Italie</option>
                    <option value="allemagne">Allemagne</option>
                </select>
            </p>
        </form>
        </>
  )
}

export default DemoForm
