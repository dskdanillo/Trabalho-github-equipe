function validaFormulario(){

    if(document.frmcadastro.txtnome.value==""){

        alert("Preencha o campo Nome");
       document.frmcadastro.txtnome.focus();
       return false;

    }else if(document.frmcadastro.txtnumero.value==""){

        alert("Preencha o campo Telefone");
            document.frmcadastro.txtnumero.focus();
            return false;

    }else if(document.frmcadastro.txtcomplemento.value==""){
            alert("Preencha o campo E-mail");
            document.frmcadastro.txtcomplemento.focus();
            return false;
        }

        
        var nome = document.frmcadastro.txtnome.value;
        var expRegNome = new RegExp("(?i)\brua\s+[a-zà-ú0-9\s\.]+");

        if (!expRegNome.test(nome)){
        alert("Preencha o campo Nome da rua corretamente.");
        document.frmcadastro.txtnome.focus();
        return false;
        }
    
}