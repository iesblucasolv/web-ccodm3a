import Titulo from '../components/Titulo';
import Conteiner from '../components/Conteiner'
import InputMatricula from '../components/Input'

function Login(props){
    return (
    <>
        <Conteiner>
            <Titulo text="Login"/>
            <InputMatricula></InputMatricula>
            <button onClick={props.onLogar}>Entrar</button>
        </Conteiner>
    </>
    );
}

export default Login;