import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Novo from './pages/Novo'
import Erro404 from './pages/Erro404'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/novo' element={<Novo/>}></Route>
          <Route path='*' element={<Erro404/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
  }

  export default App