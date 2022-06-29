import './App.css'
import Home from './components/Home'
import Juego from './components/Juego'
import ComoJugar from './components/SeccionesComplementarias/ComoJugar'
import Glosario from './components/SeccionesComplementarias/Glosario'
import AcercaDeLaApp from './components/SeccionesComplementarias/AcercaDeLaApp'
import Configuracion from './components/SeccionesComplementarias/Configuracion'
import Resultado from './components/Rosco/ResultadoNuevo'

import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { CssBaseline } from '@mui/material'
import { useEffect, useState } from 'react'

import crearTema from './helpers/theming';

import configuracionPredeterminada from './data/configuracion.json'
import PreJuego from './components/PreJuego'

function App() {

  // Ajustes de configuración
  const [musica, setMusica] = useState(true);
  const [escucharDefiniciones, setEscucharDefiniciones] = useState(false);
  const [contrasteColores, setContrasteColores] = useState(false);
  const [modoDaltonico, setModoDaltonico] = useState(false);
  const [tamañoLetra, setTamañoLetra] = useState(configuracionPredeterminada.tamañoLetraPredeterminado);
  const [efectosSonidos, setEfectosSonidos] = useState(false);
  const [respuestaPorVoz, setRespuestaPorVoz] = useState(false);
  const [tema, setTema] = useState("claro");

  const [theme, setTheme] = useState(createTheme(crearTema(tamañoLetra)));

  // Crea y asigna un nuevo tema basado en las configuraciones seteadas en el panel de configuración
  const cambiarTema = () => {
    setTheme(createTheme(crearTema({
      'contrasteColores': contrasteColores,
      'tamañoLetra': tamañoLetra,
      'tema': tema
    })));
  }

  // Cuando se cambia alguno, aplico los cambios (excepto el tamaño de letra que es manual con "Aplicar")
  useEffect(() => {
    aplicarConfiguraciones();
  }, [musica, tema, escucharDefiniciones, contrasteColores, efectosSonidos, respuestaPorVoz])

  const aplicarConfiguraciones = () => {
    cambiarTema()
  }

  // Lo ejecuta el botón "Aplicar" de Configuración
  const aplicarCambioTamañoLetra = () => {
    aplicarConfiguraciones();
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
            <Route path='/preparacion' element={<PreJuego />} />
            <Route path="/rosco" element={<Juego />} />
            <Route path="/rosco/resultado" element={<Resultado />} />
            <Route path="/como-jugar" element={<ComoJugar />} />
            <Route path="/glosario" element={<Glosario />} />
            <Route path="/acerca-de-la-app" element={<AcercaDeLaApp />} />
            <Route path="/configuracion" element={
              <Configuracion
                cambiarTema={cambiarTema}
                configuraciones={{
                  'musica': musica,
                  'escucharDefiniciones': escucharDefiniciones,
                  'contrasteColores': contrasteColores,
                  'tamañoLetra': tamañoLetra,
                  'efectosSonidos': efectosSonidos,
                  'respuestaPorVoz': respuestaPorVoz,
                  'tema': tema
                }}
                settersConfiguraciones={{
                  'musica': setMusica,
                  'escucharDefiniciones': setEscucharDefiniciones,
                  'contrasteColores': setContrasteColores,
                  'tamañoLetra': setTamañoLetra,
                  'efectosSonidos': setEfectosSonidos,
                  'respuestaPorVoz': setRespuestaPorVoz,
                  'tema': setTema
                }}
                aplicarCambioTamañoLetra={aplicarCambioTamañoLetra}
              />
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
