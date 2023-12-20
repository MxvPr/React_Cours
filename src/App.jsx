
import './App.css'
import Hello from './components/Hello'
import Clock from './components/Clock'
import Slider from './components/Slider'
import DemoEvent from './components/DemoEvent'
import DemoForm from './components/DemoForm'

function App() {

  let prenom = 'Maxence'
  let liste = ['Pizza' , 'Risotto' , 'Magret' , 'Mcdo' , 'Dimitri' , 'Poulet' , 'Pâtes']


  return (
    <>
    <DemoForm />
    <DemoEvent />
    <Slider />
    <Clock />
      <h1>Hello {prenom} !</h1>
      <p className='red'>Lorem ipsum dolor sit,m numquam ducimus id consequuntur. Harum in molestias non magni, sunt praesentium minus adipisci debitis, quidem nam natus laudantium beatae. Deserunt!</p>
      <ul>
        {liste.map((element, i) => <li key={i}>{element}</li>)}
      </ul>
      <p>
        {
          liste.map((element, i ) => {
            return (
              <>
              <strong>{i} </strong><span>{element} </span>
              </>
            )
          })
        }
      </p>
      <Hello firstname="Dimitri"/>
      <Hello firstname="Maxime"/>
      <Hello firstname="Lucas"/>
      <Hello><strong>Coucou</strong></Hello>
    </>
  )
}

export default App
