import './App.css'
import Home from './components/Home'
import Juego from './components/Juego'
import ComoJugar from './components/SeccionesComplementarias/ComoJugar'
import Glosario from './components/SeccionesComplementarias/Glosario'
import AcercaDeLaApp from './components/SeccionesComplementarias/AcercaDeLaApp'
import Configuracion from './components/Configuracion'

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
  const cambiarTamañoLetra = (e) => {
    setTamañoLetra(e.target.value);
    setTheme(createTheme(crearTema(tamañoLetra)));
  };

  const [theme, setTheme] = useState(createTheme(crearTema(tamañoLetra)));


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
            <Route path="/configuracion" element={<Configuracion />} />
          </Routes>
        </BrowserRouter>

        {/* Slider de tamaño de letra */}
        <Slider
          aria-label="Tamaño letra"
          value={tamañoLetra}
          onChange={cambiarTamañoLetra}
          max={configuracion.tamañoLetraMaximo}
          min={configuracion.tamañoLetraMinimo}
          step={3}
          marks={true}
          sx={{
            position: 'fixed',
            bottom: 20,
            maxWidth: 50,
            left: 0,
            mt: 10,
            ml: 2,
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
