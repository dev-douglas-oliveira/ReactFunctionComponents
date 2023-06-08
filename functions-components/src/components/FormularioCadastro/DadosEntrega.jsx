import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ cep, endereco, numero, estado, cidade });
            }}
        >
            <TextField
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
                }}
                id="cep"
                label="cep"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value);
                }}
                id="endereco"
                label="endereco"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value);
                }}
                id="numero"
                label="numero"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="estado"
                label="estado"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="cidade"
                label="cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    );
}
