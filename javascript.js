const textocabecalho = document.querySelector("a") 
const contato = document.getElementById("contato")
const escuro = document.getElementById("escuro")       
const claro = document.getElementById("claro")                                              


function modoEscuro() {
    document.body.style.backgroundColor = "black";
    textocabecalho.style.color = "white";
    contato.style.color = "white";
    claro.style.display = "block";
    escuro.style.display = "none";
}

function modoClaro() {
    document.body.style.backgroundColor = "#fceeb6";
    textocabecalho.style.color = "black";
    contato.style.color = "black"
    claro.style.display = "none";
    escuro.style.display = "block";
}

