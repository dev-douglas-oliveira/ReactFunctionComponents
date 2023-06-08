import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ email, senha });
            }}
        >
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
                label="email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
            />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                id="senha"
                label="senha"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}
