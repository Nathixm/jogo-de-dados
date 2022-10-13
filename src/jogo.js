function verificaAcerto(sorteado, escolhido) {
    if (sorteado == escolhido) {
        return "Parabéns! Você acertou, o número sorteado foi o " + sorteado;
    }
    else {
        return "Que pena, você errou, o número sorteado foi " + sorteado + " mas você escolheu o " + escolhido;
    }
}

function buscaPalpite() {
    var campo = document.querySelector("input");
    return campo.value;
}

function sortear() {
    var palpite = buscaPalpite();  
    if (validaPalpite(palpite)== true){  
        var sorteado = rolarDado();
        var mensagem = verificaAcerto(sorteado, palpite);
        exibirResultado(mensagem);
    }
    else {
        exibirResultado("Você deve digitar um número de 1 a 6");
    }
}

function exibirResultado(mensagem) {
    var campo = document.querySelector("div");
    campo.innerHTML = mensagem;
}

function validaPalpite(palpite){
    if (palpite == "1"){
        return true;
    }
    if (palpite == "2"){
        return true;
    }   
    if (palpite == "3"){
        return true;
    }
    if (palpite == "4"){
        return true;
    }
    if (palpite == "5"){
        return true;
    }   
    if (palpite == "6"){
        return true;
    }
    else {
        return false;
    }
}