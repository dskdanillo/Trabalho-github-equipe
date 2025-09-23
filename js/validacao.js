function validaFormulario(){

    if(document.frmcadastro.txtnome.value==""){

        alert("Preencha o campo Nome");
       document.frmcadastro.txtnome.focus();

    }else if(document.frmcadastro.txtnumero.value==""){

        lert("Preencha o campo Telefone");
            document.frmcadastro.txtnumero.focus();
            return false;

    }else if(document.frmcadastro.txtemail.value==""){
            alert("Preencha o campo E-mail");
            document.frmcadastro.txtcomplemento.focus();
            return false;
        }

    
}