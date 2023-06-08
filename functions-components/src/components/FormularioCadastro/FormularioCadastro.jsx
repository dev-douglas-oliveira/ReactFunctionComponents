import React, { Fragment, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(1);
    return <Fragment>{formularioAtual(etapaAtual)}</Fragment>;

    function formularioAtual(etapa) {
        switch (etapa) {
            case 0:
                return <DadosUsuario />;
            case 1:
                return (
                    <DadosPessoais
                        aoEnviar={aoEnviar}
                        validarCPF={validarCPF}
                    />
                );
            case 2:
                return <DadosEntrega />;
            default:
                return <DadosUsuario />;
        }
    }
}
