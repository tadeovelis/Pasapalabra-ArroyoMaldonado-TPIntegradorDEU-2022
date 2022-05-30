import './App.css'
import Home from './components/Home'
import Juego from './components/Juego'
import ComoJugar from './components/ComoJugar'
import Glosario from './components/Glosario'
import AcercaDeLaApp from './components/AcercaDeLaApp'
import Configuracion from './components/Configuracion'

import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' index element={<Home />} />
            <Route path="/rosco" element={<Juego/>} />
            <Route path="/como-jugar" element={<ComoJugar/>} />
            <Route path="/glosario" element={<Glosario/>} />
            <Route path="/acerca-de-la-app" element={<AcercaDeLaApp/>} />
            <Route path="/configuracion" element={<Configuracion/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
