import './App.css';
import {useState} from 'react';
//import Titulo from './components/Titulo';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [logado,setLogado] = useState(false);

  function onLogar(){
    setLogado(true);
  }

  return (
    <>
    {logado ? <Home/> : <Login onLogar={onLogar}/>}
    </>
  );
}

export default App
