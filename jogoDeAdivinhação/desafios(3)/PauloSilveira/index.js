

var numSecreto = 666
var tentativas = 1

while(chute != numSecreto){

    var chute = prompt("Digite um numero de 1 a 1000")

    if(chute == numSecreto) {
        alert(`Parabens voce acertou!! Foram ${tentativas} tentativas!!`)
    } else if (chute < numSecreto) {
        alert(`Você errou... o numero secreto é maior, ate agora foram ${tentativas} tentativas!!`)
    } else if (chute > numSecreto) {
        alert(`Digite um numero valido!`)
    } else {
        alert(`Você errou... O numero secreto é menor, ate agora foram ${tentativas} tentativas!!`)
    }
  tentativas++;
}


