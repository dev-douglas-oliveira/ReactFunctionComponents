import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function FormularioCadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobreNome] = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log(nome, sobrenome);
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    // variavel tempNome adicionada para resolver o problema de não permitir excluir o texto digitado
                    let tempNome = event.target.value;
                    if (tempNome.length >= 7) {
                        tempNome = tempNome.substring(0, 7);
                    }
                    setNome(tempNome);
                }}
                id="nome"
                label="Nome"
                color="secondary"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobreNome(event.target.value);
                }}
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
