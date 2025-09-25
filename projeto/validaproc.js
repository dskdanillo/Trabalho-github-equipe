function procFormulario() {
    if (document.fmrfaleconosco.txtnome.value === "") {
        alert("Preencha o campo Nome da Empresa");
        document.fmrfaleconosco.txtnome.focus();
        return false;
    }

    if (document.fmrfaleconosco.txtcnpj.value === "") {
        alert("Preencha o campo CNPJ");
        document.fmrfaleconosco.txtcnpj.focus();
        return false;
    }

    if (document.fmrfaleconosco.txtcargo.value === "") {
        alert("Preencha o campo Cargo");
        document.fmrfaleconosco.txtcargo.focus();
        return false;
    }

    if (document.fmrfaleconosco.txtfone.value === "") {
        alert("Preencha o campo Telefone");
        document.fmrfaleconosco.txtfone.focus();
        return false;
    }

    // Regex para validações
    const nome = document.getElementById('nome').value;
    const cnpj = document.getElementById('cnpj').value;
    const cargo = document.getElementById('cargo').value;
    const fone = document.getElementById('fone').value;

    const expRegNome = /^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$/;
    const expRegCNPJ = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/;
    const expRegCargo = /^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$/;
    const expRegFone = /^\(?[1-9]{2}\)?\s?[0-9]{4,5}-?[0-9]{4}$/;

    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome corretamente.");
        document.getElementById('nome').focus();
        return false;
    }

    if (!expRegCNPJ.test(cnpj)) {
        alert("Preencha o campo CNPJ corretamente.");
        document.getElementById('cnpj').focus();
        return false;
    }

    if (!expRegCargo.test(cargo)) {
        alert("Preencha o campo Cargo corretamente.");
        document.getElementById('cargo').focus();
        return false;
    }

    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone corretamente.");
        document.getElementById('fone').focus();
        return false;
    }

    return true;
}
