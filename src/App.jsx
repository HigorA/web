
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Exemplo1 from './components/Exemplo1';
import Menu from './components/Menu';
import Page1 from "./components/Page1";

export default function App() {

    

    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<Page1/>}/>
                <Route path='/Exemplo' element={<Exemplo1/>}/>
            </Routes> 
        </BrowserRouter>
    )
}

/**
 * 
 *const nome = 'higor'
 *const [numero, setNumero] = useState(0)
 *
 *<h1>Revisão - CP2</h1>
 *<Exemplo1 nome={nome} numero={numero} setNumero={setNumero}>
 *<p>Elemento passado do children</p>
 *</Exemplo1>
 */