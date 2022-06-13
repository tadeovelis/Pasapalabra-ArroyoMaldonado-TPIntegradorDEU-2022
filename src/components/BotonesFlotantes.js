import { Button } from "@mui/material"
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export const BotonesFlotantes = ({ texto, color }) => {

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
                    ml: 2,
                }}
                onClick={() => navigate(-1)}
            >
                {texto}
            </Button>
        </div>
    )
}
