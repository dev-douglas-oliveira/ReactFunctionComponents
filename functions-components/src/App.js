import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { validarCPF, validarSenha } from "./models/Cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">
                Formulário de Cadastro
            </Typography>
            <ValidacoesCadastro.Provider
                value={{
                    cpf: validarCPF,
                    senha: validarSenha,
                    nome: validarSenha,
                }}
            ></ValidacoesCadastro.Provider>
            <FormularioCadastro aoEnviar={aoEnviarForm} />
        </Container>
    );
}

function aoEnviarForm(dados) {
    console.log(dados);
}

export default App;
