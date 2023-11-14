
var numSorteado = parseInt(Math.random() * 1000) + 1 
var tentaRestantes = 10

while(tentaRestantes > 0) {
    var chute = prompt(`Digite um numero de 1 a 1000. Você tem ${tentaRestantes} tentativas!`)

    if(chute > 1000) {
        alert(`Por Favor digite um numero valido!`)
    } else if (chute < numSorteado) {
        alert(`O numero secreto é maior que ${chute}, voce ainda tem ${tentaRestantes} Tentativas!!`)
    } else if (chute > numSorteado) {
        alert(`O numero secreto é menor que ${chute}, voce ainda te ${tentaRestantes} Tentativas!!`)
    } else {
        alert(`Parabens!! Voce acertou!`)
    }

    tentaRestantes--
}

if(tentaRestantes === 0){
    alert(`Você perdeu!! o numero correto era ${numSorteado}`)
}