

var numSecreto = parseInt(Math.random() * 1001)
var tentativas = 1

while(chute != numSecreto){

    var chute = prompt("Digite um numero de 1 a 1000")

    if(chute == numSecreto) {
        alert(`Parabens voce acertou!! Foram ${tentativas} tentativas!!`)
    } else if (chute < numSecreto) {
        alert(`Você errou... o numero secreto é maior, ate agora foram ${tentativas} tentativas!!`)
    } else {
        alert(`Você errou... O numero secreto é menor, ate agora foram ${tentativas} tentativas!!`)
    }
  tentativas++;
}


