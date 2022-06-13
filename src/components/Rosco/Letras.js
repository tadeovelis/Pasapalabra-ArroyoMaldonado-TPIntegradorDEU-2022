import Letra from "./Letra";
import style from 'styled-components'

const Pasapalabra = style.div`
    background-color: yellow;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: black;
    cursor: pointer;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    &:hover {
        background-color: #ffd700;
    }
`

const Bien = style.div`
    background-color: green;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    
    color: black;
    cursor: pointer;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    &:hover {
        background-color: #00ff00;
    }
`

const Mal = style.div`
    background-color: red;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: black;
    cursor: pointer;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    &:hover {
        background-color: #8f1108;
    }
`
// espera div
const Espera = style.div`
    //light blue
    background-color: #2d8bd2;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: black;
    cursor: pointer;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    &:hover {
        background-color: #0a5289;
    }
`











export default function Letras(props) {

    const palabras = props.palabras;

    return (<>

        <Pasapalabra>A</Pasapalabra>

        <Bien>B</Bien>

        <Mal>C</Mal>

        <Espera>D</Espera>

        <div>
            <h4>
                {palabras.map(p =>
                    <Letra
                        key={p.letra}
                        palabra={p}
                    />
                )}
            </h4>
        </div>





    </>)
}

