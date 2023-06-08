import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function DadosUsuario({ aoEnviar }) {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar();
            }}
        >
            <TextField
                id="email"
                label="email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
            />
            <TextField
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
