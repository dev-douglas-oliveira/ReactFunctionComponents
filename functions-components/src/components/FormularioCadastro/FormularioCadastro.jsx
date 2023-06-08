import React, { Fragment, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);

    //FUNÇÃO QUE AVANÇA PARA A PRÓXIMA ETAPA
    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    //FUNÇÃO QUE PERMITE ALTERAR O FORMULÁRIO ATUAL
    function formularioAtual(etapa) {
        switch (etapa) {
            case 0:
                return <DadosUsuario aoEnviar={proximo} />;
            case 1:
                return (
                    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />
                );
            case 2:
                return <DadosEntrega aoEnviar={aoEnviar} />;
            default:
                return <DadosUsuario />;
        }
    }
    return <Fragment>{formularioAtual(etapaAtual)}</Fragment>;
}
