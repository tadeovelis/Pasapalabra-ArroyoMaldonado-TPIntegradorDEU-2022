import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export default function BotonesFlotantes() {

    const navigate = useNavigate();

    return (
        <div>
            <Button
                variant="contained"
                component={Link}
                sx={{
                    position: 'fixed',
                    fontWeight: '500',
                    left: 0,
                    top: 0,
                    mt: 10,
                    ml: 2,
                    borderRadius: 100
                }}
                to="/rosco"   
            >
                <ArrowBackIosNewIcon fontSize="large" />
            </Button>
        </div>
    )
}