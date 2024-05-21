import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Layout(){
    const {logout} = useContext(AuthContext)

    const navigate = useNavigate()

    function handleClick(event){
        logout();
        navigate('/login')
    }

    return(
        <>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/perfil/27">Perfil</NavLink></li>
        <li><button onClick={handleClick}>Sair</button></li>
    </ul>
    <main>
        <Outlet/>
    </main>
    </>
    )
}

export default Layout;