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
import { ThemeProvider, createTheme } from '@mui/material/styles'

import RowdiesFont from './fonts/Rowdies-Regular.ttf'
import { CssBaseline } from '@mui/material'

// Cambiar theme global de la app
const theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: 'Rowdies, Roboto',
    h1: {
      fontSize: 30
    },
    h3: {
      fontSize: 20,
      textTransform: 'uppercase'
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 15
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Rowdies';
          src: url(${RowdiesFont}) format('woff2');
        }
      `,
    },
  },
})


function App() {
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
      </div>
    </ThemeProvider>
  );
}

export default App;
