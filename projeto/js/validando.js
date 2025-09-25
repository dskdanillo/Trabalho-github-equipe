document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede envio imediato
    clearErrors();
    let isValid = true;

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value;

    // Validação Nome
    const letrasNoNome = nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    if (letrasNoNome.length < 3) {
        showError("nome", "O nome deve conter pelo menos 3 letras.");
        isValid = false;
    }

    // Validação CPF
    const somenteNumerosCPF = cpf.replace(/\D/g, "");
    if (somenteNumerosCPF.length !== 11) {
        showError("cpf", "CPF deve conter exatamente 11 números.");
        isValid = false;
    }

    // Validação E-mail
    if (!isValidEmail(email)) {
        showError("email", "E-mail inválido.");
        isValid = false;
    }

    // Validação Data de Nascimento
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

function showError(id, message) {
    const errorSpan = document.getElementById(id + "Error");
    errorSpan.textContent = message;
    document.getElementById(id).classList.add("error-field");
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input").forEach(input => input.classList.remove("error-field"));
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isValidDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    return !isNaN(date.getTime()) && date <= now;
}
