import { Button, TextField } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

export default function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({ senha: { valido: false, texto: "" } });
    const validacoes = useContext(ValidacoesCadastro);

    //FUNÇÃO PARA VALIDAR CAMPOS
    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    //FUNÇÃO PARA VERIFICAR SE PODE ENVIAR
    function possoEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return true;
            }
        }
        return false;
    }
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ email, senha });
                }
            }}
        >
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
                name="email"
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
                onBlur={validarCampos}
                error={erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}
