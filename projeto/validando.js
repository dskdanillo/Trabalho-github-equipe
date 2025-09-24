document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    // Evita o envio do formulário até as validações serem feitas
    event.preventDefault();

    // Limpa mensagens de erro anteriores
    clearErrors();

    // Chama a função de validação
    let isValid = true;

    // Validação do nome
    const nome = document.getElementById("nome").value.trim();
    if (nome === "") {
        showError("nome", "O nome completo é obrigatório.");
        isValid = false;
    }

    // Validação do CPF
    const cpf = document.getElementById("cpf").value.trim();
    if (!isValidCPF(cpf)) {
        showError("cpf", "CPF inválido. O formato deve ser XXX.XXX.XXX-XX.");
        isValid = false;
    }

    // Validação do e-mail
    const email = document.getElementById("email").value.trim();
    if (!isValidEmail(email)) {
        showError("email", "E-mail inválido.");
        isValid = false;
    }

    // Validação da data de nascimento
    const dataNascimento = document.getElementById("dataNascimento").value;
    if (!dataNascimento) {
        showError("dataNascimento", "A data de nascimento é obrigatória.");
        isValid = false;
    }

    // Se tudo estiver válido, envia o formulário
    if (isValid) {
        alert("Cadastro realizado com sucesso!");
        document.getElementById("cadastroForm").submit();
    }
});

// Função para exibir mensagens de erro
function showError(inputId, message) {
    document.getElementById(`${inputId}Error`).textContent = message;
}

// Função para limpar mensagens de erro
function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => {
        element.textContent = "";
    });
}

// Função de validação do CPF (apenas para fins de exemplo)
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11) return false;

    // Validação simples de CPF
    let sum = 0;
    let remainder;

    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;

    return true;
}

// Função de validação de e-mail
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
