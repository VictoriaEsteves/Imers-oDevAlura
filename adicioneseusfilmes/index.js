
function adicionarFilme() {
    var fvFilmes = document.getElementById('filme').value
    var elementoListaFilmes = document.getElementById('listaFilmes')

    elementoListaFilmes.innerHTML = '<img src=' + fvFilmes + '>'
    document.getElementById('filme').value = ''

}

