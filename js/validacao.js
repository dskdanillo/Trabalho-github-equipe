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

        
    
}