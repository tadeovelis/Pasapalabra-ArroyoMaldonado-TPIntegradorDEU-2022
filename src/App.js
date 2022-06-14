import './App.css'
import Home from './components/Home'
import Juego from './components/Juego'
import ComoJugar from './components/SeccionesComplementarias/ComoJugar'
import Glosario from './components/SeccionesComplementarias/Glosario'
import AcercaDeLaApp from './components/SeccionesComplementarias/AcercaDeLaApp'
import Configuracion from './components/SeccionesComplementarias/Configuracion'

import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'

import { CssBaseline, GlobalStyles, Slider } from '@mui/material'
import { useEffect, useState } from 'react'

import crearTema from './helpers/theming';

import configuracion from './data/configuracion.json'

function App() {

  const [tamañoLetra, setTamañoLetra] = useState(configuracion.tamañoLetraPredeterminado);

  const [theme, setTheme] = useState(createTheme(crearTema(tamañoLetra)));

  // Crea y asigna un nuevo tema basado en las configuraciones que recibe como parámetro
  // del componente Configuracion.js
  const cambiarTema = (configuraciones) => {
    setTheme(createTheme(crearTema(configuraciones)));
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header>
        </header>
        <BrowserRouter>
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path="/rosco" element={<Juego />} />
            <Route path="/como-jugar" element={<ComoJugar />} />
            <Route path="/glosario" element={<Glosario />} />
            <Route path="/acerca-de-la-app" element={<AcercaDeLaApp />} />
            <Route path="/configuracion" element={<Configuracion cambiarTema={cambiarTema} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
