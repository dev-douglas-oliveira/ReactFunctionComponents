import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">
                Formulário de Cadastro
            </Typography>
            <FormularioCadastro
                aoEnviar={aoEnviarForm}
                validarCPF={validarCPF}
            />
        </Container>
    );
}

function aoEnviarForm(dados) {
    console.log(dados);
}

//Função para validar CPF
function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: true, texto: "CPF deve ter 11 dígitos" };
    } else {
        return { valido: false, texto: "" };
    }
}
export default App;
