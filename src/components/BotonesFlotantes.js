import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export default function BotonesFlotantes() {

    const navigate = useNavigate();

    return (
        <div>
            <Button
                variant="contained"
                sx={{
                    position: 'fixed',
                    fontWeight: '500',
                    left: 0,
                    top: 0,
                    mt: 10,
                    ml: 2
                }}
                onClick={() => navigate(-1)}   
            >
                Atrás
            </Button>
        </div>
    )
}