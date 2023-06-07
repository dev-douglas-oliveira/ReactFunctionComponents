import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function FormularioCadastro() {
    let nome = "";
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log(nome);
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    console.log(event.target.value);
                    nome = event.target.value;
                    if (nome.length > 3) {
                        nome = nome.substring(0, 3);
                    }
                }}
                id="nome"
                label="Nome"
                color="secondary"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                id="sobrenome"
                label="Sobrenome"
                color="secondary"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                id="CPF"
                label="CPF"
                color="secondary"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <FormControlLabel
                control={
                    <Switch
                        name="promocoes"
                        defaultChecked
                        color="primary"
                    ></Switch>
                }
                label="Promoções"
            ></FormControlLabel>

            <FormControlLabel
                control={
                    <Switch
                        name="novidades"
                        defaultChecked
                        color="primary"
                    ></Switch>
                }
                label="Novidades"
            ></FormControlLabel>

            <Button variant="contained" type="submit">
                Cadastrar
            </Button>
        </form>
    );
}
