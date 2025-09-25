document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // bloqueia envio até validar
    clearErrors();
    let isValid = true;

    // Validação do nome: pelo menos 3 letras
    const nome = document.getElementById("nome").value.trim();
    const letrasNoNome = nome.replace(/[^a-zA-Z]/g, "");
    if (letrasNoNome.length < 3) {
        showError("nome", "O nome deve conter pelo menos 3 letras.");
        isValid = false;
    }

    // Validação CPF: deve ter exatamente 11 números
    const cpf = document.getElementById("cpf").value.trim();
    const somenteNumerosCPF = cpf.replace(/\D/g, "");
    if (somenteNumerosCPF.length < 11) {
        showError("cpf", "CPF deve conter 11 números.");
        isValid = false;
    } else if (somenteNumerosCPF.length > 11) {
        showError("cpf", "CPF deve conter exatamente 11 números.");
        isValid = false;
    }

    // Validação e-mail
    const email = document.getElementById("email").value.trim();
    if (!isValidEmail(email)) {
        showError("email", "E-mail inválido.");
        isValid = false;
    }

    // Validação data nascimento
    const dataNascimento = document.getElementById("dataNascimento").value;
    if (!dataNascimento) {
        showError("dataNascimento", "A data de nascimento é obrigatória.");
        isValid = false;
    } else if (!isValidDate(dataNascimento)) {
        showError("dataNascimento", "Data inválida ou futura.");
        isValid = false;
    }

    if (isValid) {
        alert("Cadastro realizado com sucesso!");
        this.submit();
    }
});

function showError(inputId, message) {
    document.getElementById(`${inputId}Error`).textContent = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isValidDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    if (isNaN(date.getTime())) return false;
    if (date > now) return false;
    return true;
}
