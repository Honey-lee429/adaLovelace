let botao = document.querySelector('#botao')

botao.addEventListener("click", validaFormulario);

function validaFormulario() {
    if (document.getElementById("post-nome").value != "" && 
        document.getElementById("post-email").value != "" &&
        document.getElementById("telefone").value != "") {
        alert ('Dados enviados com sucesso');
    } else {
        alert ('Por favor, preencha todos os campos');
    }
}

