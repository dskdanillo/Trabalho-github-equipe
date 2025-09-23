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
    
    var fone = document.getElementById("fone").value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

    if (!expRegFone.test(fone)){
        alert("Preencha o campo telefone corretamente");
        document.getElementById('fone').focus();
        return false

    }
    
    var email = document.getElementById("email").value;
    var expRegEmail = new RegExp("/^[\w.-]+@[\w.-]+\.\w{2,}$/g");

    if (!expRegemail.test(email)){
        alert("Preencha o campo email corretamente");
        document.getElementById("email").focus();
        return false
    }
    
    
    }
    