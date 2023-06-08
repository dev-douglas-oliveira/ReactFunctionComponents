//Função para validar CPF
function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: true, texto: "CPF deve ter 11 dígitos" };
    } else {
        return { valido: false, texto: "" };
    }
}

//Função para validar SENHA
function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
        return { valido: true, texto: "A senha de ter entre 4 e 72 dígitos" };
    } else {
        return { valido: false, texto: "" };
    }
}

export { validarCPF, validarSenha };
