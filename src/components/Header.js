import { Box } from "@mui/system"
import { Grid } from "@mui/material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

import '../App.css'
import styled from "@emotion/styled";

const HeaderButton = styled(Button)({
    fontSize: 20,
    padding: '15px 35px',
    borderRadius: '0 0 10px 10px'
});

const espacioIconos = 1;

export default function Header() {
    return (
        <div>
            <Grid
                container
                spacing={5}
                justifyContent="center"
            >
                <Grid item>
                    <HeaderButton
                        component={Link}
                        variant="contained"
                        to="/como-jugar"
                        size="large"
                        startIcon={<HelpOutlineIcon sx={{ mr: espacioIconos }}/>}
                    >
                        ¿Cómo jugar?
                    </HeaderButton>
                </Grid>
                <Grid item>
                    <HeaderButton
                        component={Link}
                        size="large"
                        variant="contained"
                        to="/glosario"
                        startIcon={<ImportContactsIcon sx={{ mr: espacioIconos }}/>}
                    >
                        Glosario
                    </HeaderButton>
                </Grid>
                <Grid item>
                    <HeaderButton
                        component={Link}
                        variant="contained"
                        size="large"
                        to="/acerca-de-la-app"
                        startIcon={<PeopleOutlineIcon sx={{ mr: espacioIconos }}/>}
                    >
                        Acerca de la app
                    </HeaderButton>
                </Grid>
            </Grid>
        </div>
    )
}