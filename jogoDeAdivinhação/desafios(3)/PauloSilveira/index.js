

var numSecreto = parseInt(Math.random() * 1001)
var tentativas = 1

while (chute != numSecreto) {
    
    var chute = prompt("Digite um numero de 1 a 1000");

    if (chute == numSecreto) {
        alert(`Parabens voce acertou em ${tentativas} tentativas!!`);
    } else if (chute < numSecreto) {
        alert(`Você errou... o numero é maior que o numero digitado!`);
    } else if (chute > numSecreto) {
        alert(`Você errou... O numero é menor que o numero digitado!`);
    } else {
        alert(`Digite um numero valido!`);
    }
  tentativas++;
}


