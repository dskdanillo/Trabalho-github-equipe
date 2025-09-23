function procFormulario(){

    if(document.fmrfaleconosco.txtnome.value==""){
    
        alert("Preencha o campo nome");
        document.fmrfaleconosco.txtnome.focus();
        return false;
    }
    else if (document.fmrfaleconosco.txtcnpj.value==""){
            alert("Preencha o campo CNPJ");
            document.fmrfaleconosco.txtcnpj.focus();
            return false;
    }
    else if (document.fmrfaleconosco.txtcargo.value==""){
            alert("Preencha o campo Cargo");
            document.fmrfaleconosco.txtcargo.focus();
            return false;
    }else if (document.fmrfaleconosco.txtfone.value==""){
        alert("Preencha o campo Telefone");
        document.fmrfaleconosco.txtfone.focus();
        return false;
}
    
    
    
    var nome = document.getElementById('nome').value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    
    if (!expRegNome.test(nome)){
        alert("Preencha o campo Nome Corretamente.");
        document.getElementById('nome').focus();
        return false;
    }
    
    var cnpj = document.getElementById("cnpj").value;
    var expRegcnpj = new RegExp("/^(\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}|\d{14})$/");

    if (!expRegcnpj.test(cnpj)){
        alert("Preencha o campo CNPJ corretamente");
        document.getElementById('cnpj').focus();
        return false

    }
    
    var cargo = document.getElementById('cargo').value;
    var expRegcargo = new RegExp("^[A-zÀ-ü]{3,}([]{1}[A-zÀ-ü]{2,})+$");
    
    if (!expRegNome.test(cargo)){
        alert("Preencha o campo Cargo Corretamente.");
        document.getElementById('cargo').focus();
        return false;
    }
    
    
    }
    