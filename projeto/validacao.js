function validaFormulario(){

    if(document.getElementById('nome').value==""){

        alert("Preencha o campo Nome");
       document.frmcadastro.txtnome.focus();
       return false;

    }else if(document.getElementById('numero').value==""){

        alert("Preencha o campo numero");
            document.frmcadastro.txtnumero.focus();
            return false;

    }else if(document.getElementById('cep').value==""){
            alert("Preencha o campo Cep");
            document.frmcadastro.txtcep.focus();
            return false;
        
        }else if(document.getElementById('complemento').value==""){
            alert("Preencha o campo complemento");
            document.frmcadastro.txtcomplemento.focus();
            return false;
        
        }

        
        var nome = document.frmcadastro.txtnome.value;
        var expRegNome = new RegExp("\\b(Rua|Avenida|Av|Travessa|Rodovia|Alameda|Estrada)\\s+([A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-zA-ZáéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇ\\s\\-]*)");

        if (!expRegNome.test(nome)){
        alert("Preencha o campo Nome da rua corretamente.");
        document.frmcadastro.txtnome.focus();
        return false;
        }


        var numero = document.frmcadastro.txtnumero.value;
        var expRegNumero = new RegExp("^\\d+$");

        if (!expRegNumero.test(numero)) {
        alert("Preencha o campo numero corretamente.");
        document.frmcadastro.txtnumero.focus();
        return false;
        }
        
        
        var cep = document.frmcadastro.txtcep.value;
        var expRegcep = new RegExp("^\\d{5}-?\\d{3}$");

        if (!expRegcep.test(cep)) {
        alert("Preencha o campo CEP corretamente.");
        document.frmcadastro.txtcep.focus();
        return false;
        }

}