var filmeFavorito = []
var trailerFavorito = []

function adicionarFilme() {
    var valorFilme = document.getElementById('filme').value
    var valorTrailer = document.getElementById('trailer').value

    if(valorFilme.endsWith('jpg') || valorFilme.endsWith('JPG')) {
        filmeFavorito.push(valorFilme)
        trailerFavorito.push(valorTrailer)
        document.getElementById('filme').value = ''
        document.getElementById('trailer').value = ''

        carregarCartaz()
    }
}

function carregarCartaz() {
    var espaçoCartaz = document.getElementById('listaCartaz')
    espaçoCartaz.innerHTML = ''

    for(var i = 0; i < filmeFavorito.length; i++) {
        espaçoCartaz.innerHTML += `<a href="${trailerFavorito[i]}"><img src="${filmeFavorito[i]}"></a>`
    }

}
