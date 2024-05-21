import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {Link, useNavigate} from 'react-router-dom'

function Login(){
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleClick(event){
        login("jose@email.com","abcd134")
        navigate('/')
    }

    return (
        <>
            <h1>Login</h1>
            <button onClick={handleClick}>Entrar</button>
        </>);
}

export default Login;