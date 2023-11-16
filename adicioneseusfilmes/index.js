
var arrayFilmes = [];

function adicionarFilme() {
    var fvFilmes = document.getElementById('filmes').value;
    var divListaFilmes = document.getElementById('listaFilmes');

    arrayFilmes.push(fvFilmes);

    // Limpa o conteúdo anterior da div
    divListaFilmes.innerHTML = '';

    // Itera sobre o array e adiciona as imagens à div
    for (var i = 0; i < arrayFilmes.length; i++) {
        var imgElement = document.createElement('img');
        imgElement.src = arrayFilmes[i];
        divListaFilmes.appendChild(imgElement);
    }
}


/*
var arrayFilmes = []

function adicionarFilme() {
    var fvFilmes = document.getElementById('filmes').value
    var divListaFilmes = document.getElementById('listaFilmes')

    arrayFilmes.push(fvFilmes)

    for(i=0; i < arrayFilmes; i++) {
        divListaFilmes.innerHTML = '<img src=' + arrayFilmes + '>'
    }
} */


// https://media.fstatic.com/bLKtCUACQ_O0jTzgDJKK8Iq_xdE=/322x478/smart/filters:format(webp)/media/movies/covers/2017/07/IMG_0857.JPG (shadowhunter Link)

/*
function adicionarFilme() {
    var fvFilmes = document.getElementById('filme').value
    var elementoListaFilmes = document.getElementById('listaFilmes')

    elementoListaFilmes.innerHTML = '<img src=' + fvFilmes + '>'
    document.getElementById('filme').value = ''

}

*/ 