import { useParams } from "react-router-dom";

function Perfil(){
    const {id} = useParams()
    return (
        <>
            <h1>Perfil</h1>
            <span>ID: {id}</span>
        </>);
}

export default Perfil;