import { Button, Grid, LinearProgress, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const steps = [
    "Armando escenario",
    "Seleccionando palabras",
    "Ultimando detalles"
];

const tiempo = 5;

export default function PreJuego(props) {

    const [activeStep, setActiveStep] = useState(0);
    const [termino, setTermino] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(tiempo);

    // Tiempo para el stepper
    useEffect(() => {
        if (!termino) {
            const timer = tiempoRestante > 0 && setInterval(() => setTiempoRestante(tiempoRestante - 1), 1000);

            switch (tiempoRestante) {
                case 0: {
                    setTermino(true);
                    setActiveStep(steps.length + 1);
                    break;
                }
                case (tiempo * 0.6): {
                    setActiveStep(1)
                    break;
                }
                case (tiempo * 0.3): {
                    setActiveStep(2);
                    break;
                }
            }

            return () => clearInterval(timer);
        }
    }, [tiempoRestante, termino]);

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            spacing={4}
            sx={{
                minHeight: '100vh',
                color: 'primary.contrastText'
            }}
        >
            <Grid item container spacing={2}>
                <Grid item xs={12} sx={{ mb: 4 }}>
                    <Typography variant="h2">¡Estamos preparando el rosco!</Typography>
                </Grid>

                <Grid item xs={12} sx={{ mx: 15, my: 4 }}>
                    <Stepper
                        activeStep={activeStep}
                        alternativeLabel
                        sx={{
                            fontSize: '1.3em'
                        }}>
                        {steps.map((label) => {
                            return (
                                <Step key={label}>
                                    <StepLabel
                                        sx={{
                                            '& .MuiStepLabel-label': {
                                                color: '#bbbbbb',
                                                fontSize: 'inherit',
                                            },
                                            '& .MuiStepLabel-label.Mui-completed': {
                                                color: 'primary.contrastText',
                                            },
                                            '& .MuiStepLabel-label.Mui-active': {
                                                color: 'primary.contrastText'
                                            },
                                            '& .MuiStepLabel-iconContainer': {
                                                transform: 'scale(1.3)'
                                            },
                                            '& .MuiStepIcon-root.Mui-completed': {
                                                transform: 'scale(1.33)',
                                            }

                                        }}>{label}</StepLabel>
                                </Step>
                            )
                        })}
                    </Stepper>
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/rosco"
                        disabled={!termino}
                        sx={{
                            fontSize: '1.3em',
                            px: 5
                        }}
                    >
                        Jugar
                    </Button>
                </Grid>
            </Grid>

            {/*
            <Grid item container>
                <Grid item xs={12}>
                    <Typography variant="h3">Tips</Typography>
                </Grid>
            </Grid>
            */}

        </Grid>
    )
}