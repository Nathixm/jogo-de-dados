function verificaAcerto(sorteado, escolhido) {
    if (sorteado == escolhido) {
        return "Parabéns! Você acertou";
    }
    else {
        return "Que pena, você errou";
    }
}

function buscaPalpite() {
    var campo = document.querySelector("input");
    return campo.value;
}