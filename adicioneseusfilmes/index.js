
function adicionarFilme() {
    var fvFilmes = document.getElementById('filme').value
    var elementoListaFilmes = document.getElementById('listaFilmes')

    elementoListaFilmes.innerHTML = '<img src=' + fvFilmes + '>'
    document.getElementById('filme').value = ''

}

// https://media.fstatic.com/bLKtCUACQ_O0jTzgDJKK8Iq_xdE=/322x478/smart/filters:format(webp)/media/movies/covers/2017/07/IMG_0857.JPG (shadowhunter Link)