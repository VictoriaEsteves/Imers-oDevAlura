var arrayFilmes = []

function adicionarFilme() {
    var valorFilme = document.getElementById('filme').value

    if(valorFilme.endsWith('jpg') || valorFilme.endsWith('JPG')) {
        arrayFilmes.push(valorFilme)
        document.getElementById('filme').value = ''

        carregarFilmes()
    }

}

function carregarFilmes() {
    var espacoFilmes = document.getElementById('listaFilmes')
    for(var i = 0; i < arrayFilmes.length; i++) {
        var filme = arrayFilmes[i]
        var imgFilme = document.createElement('img');
        imgFilme.src = filme;
        espacoFilmes.appendChild(imgFilme);
    }
}