import { NavLink } from 'react-router-dom'
import Navbar from './Navbar.css'

function Navbar(){
    return(
        <>
            <ul>
                <li><NavLink to="/">Meus contatos</NavLink></li>
                <li><NavLink to="/novo">Novo contato</NavLink></li>
            </ul>
        </>
    )
}

export default Navbar