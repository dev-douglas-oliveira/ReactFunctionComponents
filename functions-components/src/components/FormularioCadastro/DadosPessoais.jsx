import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

export default function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobreNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidade] = useState(false);
    const [erros, setErros] = useState({ cpf: { valido: false, texto: "" } });

    const validacoes = useContext(ValidacoesCadastro);

    //FUNÇÃO PARA VALIDAR OS CAMPOS
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
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
                }
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
                name="nome"
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
                name="sobrenome"
                label="Sobrenome"
                color="secondary"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                error={erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                name="cpf"
                label="CPF"
                color="secondary"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        name="promocoes"
                        color="primary"
                    ></Switch>
                }
                label="Promoções"
            ></FormControlLabel>

            <FormControlLabel
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidade(event.target.checked);
                        }}
                        name="novidades"
                        color="primary"
                    ></Switch>
                }
                label="Novidades"
            ></FormControlLabel>

            <Button variant="contained" color="primary" type="submit">
                Próximo
            </Button>
        </form>
    );
}
