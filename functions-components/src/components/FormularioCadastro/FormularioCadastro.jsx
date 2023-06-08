import React, { Fragment, useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        console.log(dadosColetados);
    });

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={coletarDados} />,
    ];

    //FUNÇÃO PARA COLETAR DADOS
    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo();
    }

    //FUNÇÃO QUE AVANÇA PARA A PRÓXIMA ETAPA
    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return <Fragment>{formularios[etapaAtual]}</Fragment>;
}
