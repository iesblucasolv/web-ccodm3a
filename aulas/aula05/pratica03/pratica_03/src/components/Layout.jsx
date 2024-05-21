import Navbar from './Navbar.jsx'
import { Outlet } from 'react-router-dom'

function Navbar(){
    return(
        <>
           <header>
                <h1>@Contatinhos</h1>
                <Navbar/>
           </header>
           <main>
                <Outlet/>
           </main>
           <footer>
            <p>Copyright 2023</p>
           </footer>
        </>
    )
}

export default Navbar