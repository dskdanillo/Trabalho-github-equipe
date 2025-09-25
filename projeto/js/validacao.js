// validacao.js

// Função para validar o formulário
function validaFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const cep = document.getElementById("cep").value.trim();

  if (nome === "") {
    alert("Preencha o campo Nome");
    document.getElementById("nome").focus();
    return false;
  }

  if (numero === "") {
    alert("Preencha o campo Número");
    document.getElementById("numero").focus();
    return false;
  }

  if (cep === "") {
    alert("Preencha o campo CEP");
    document.getElementById("cep").focus();
    return false;
  }

  // Regex para nome da rua (inicial maiúscula, prefixo obrigatório)
  const expRegNome = /\b(Rua|Avenida|Av|Travessa|Rodovia|Alameda|Estrada)\s+([A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-zA-ZáéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇ\s\-]*)/;

  if (!expRegNome.test(nome)) {
    alert("Preencha o campo Nome da rua corretamente.");
    document.getElementById("nome").focus();
    return false;
  }

  // Regex para número (somente dígitos)
  const expRegNumero = /^\d+$/;

  if (!expRegNumero.test(numero)) {
    alert("Preencha o campo Número corretamente.");
    document.getElementById("numero").focus();
    return false;
  }

  // Regex para CEP (formato 00000-000 ou 00000000)
  const expRegCep = /^\d{5}-?\d{3}$/;

  if (!expRegCep.test(cep)) {
    alert("Preencha o campo CEP corretamente.");
    document.getElementById("cep").focus();
    return false;
  }

  return true;
}

// Botão voltar sem validação, só redireciona
document.addEventListener("DOMContentLoaded", () => {
  const btnVoltar = document.getElementById("btnVoltar");
  btnVoltar.addEventListener("click", () => {
    // Exemplo: volta para a página inicial index.html
    window.location.href = "index.html";
  });
});
