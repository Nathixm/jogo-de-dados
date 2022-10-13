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
    var sorteado = rolarDado();
    var palpite = buscaPalpite();
    var mensagem = verificaAcerto(sorteado, palpite);
    exibirResultado(mensagem);
}

function exibirResultado(mensagem) {
    var campo = document.querySelector("div");
    campo.innerHTML = mensagem;
}
