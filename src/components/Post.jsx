import { useParams , useNavigate } from "react-router-dom";

const Post =() => {

    const {id} = useParams();
    const navigate = useNavigate();

    const home = () => {
        navigate("/")
    }
    return (
        <>
        Article n°{id}

        <button onClick={home}>Retourner sur la home</button>
        </>
    )
}

export default Post;
