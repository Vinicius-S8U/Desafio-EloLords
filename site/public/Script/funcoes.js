// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var quest = sessionStorage.Quest1;

    if (email != null && nome != null) {
    } else {
        window.location = "../login.html";
    }

    if(quest != 'null'){
        alert("Você já fez o questionário")

        window.location = "../Dashboard.html"
    }
    else{
        


    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
}
