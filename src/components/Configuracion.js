import styled from 'styled-components'
import { useState } from 'react';
import Paper from '@mui/material/Paper'
import { Container } from '@mui/system'
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import { Switch } from 'antd';
import { BotonesFlotantes } from "./BotonesFlotantes"

import { Box } from "@mui/system"
import { Typography } from "@mui/material"


const Div = styled.div`
    margin-top: 75px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 50px;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    height: 100%;

    font-size: 40px;
    color: white;
    cursor: pointer;


`
const DivContenedor = styled.div`
    margin-top: 20px;
    aling-items: left;
`
const Label = styled.label`
    margin-top: 30px; 

    `

export default function Configuracion() {

    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => { setIsOn(prev => !prev) };
    return (<>
        <BotonesFlotantes texto='Atrás' />

        <Container maxWidth={false}
            sx={{
                background: "#08274a",
                minHeight: "100vh"
            }}
        >

            <Paper
                sx={{
                    m: 5,
                    p: 10
                }}
            >

                <Box class="header-seccion-texto">
                    <Typography variant="h1" color="white"
                        sx={{
                            textAlign: 'left',
                            //subrayado
                            textDecoration: 'underline',
                            padding: "10px",
                            textTransform: 'uppercase',


                        }}
                    >

                        Configuracion
                    </Typography>
                    
                        <Div>
                            <Label > Música </Label>
                            <Switch checkedChildren="Activado" unCheckedChildren="Desactivado" defaultChecked />

                            <Label > Efectos </Label>
                            <Switch checkedChildren="Activado" unCheckedChildren="Desactivado" defaultChecked />

                        </Div>
                        <Div>
                            <Label > Lectura de preguntas </Label>
                            <Switch checkedChildren="Activado" unCheckedChildren="Desactivado" defaultChecked />
                            <Label > Respuesta por voz </Label>
                            <Switch checkedChildren="Activado" unCheckedChildren="Desactivado" defaultChecked />
                        </Div>
                        <Div>
                            <Label > Modo contraste de colores  </Label>
                            <Switch checkedChildren="Activado" unCheckedChildren="Desactivado" defaultChecked />
                            <Label > Tamaño de letra </Label>
                            <Switch checkedChildren="Activado" unCheckedChildren="Desactivado" defaultChecked />
                        </Div>
                        
                </Box>




            </Paper>
        </Container >
    </>
    )
}