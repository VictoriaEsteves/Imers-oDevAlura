
var numSecreto = parseInt(Math.random() * 1001) + 1

while(chute != numSecreto){

    var chute = prompt("Digite um numero de 1 a 1000")

    if(chute == numSecreto) {
        alert("Parabens voce acertou!!")
    } else if (chute < numSecreto) {
        alert(`Você errou... o numero é maior que o numero digitado!`)
    } else if (chute > numSecreto) {
        alert(`Digite um numero valido!`)
    } else {
        alert(`Você errou... O numero é menor que o numero digitado!`)
    }
}

