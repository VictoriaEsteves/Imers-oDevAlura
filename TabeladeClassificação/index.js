var victoria = {
    nome: 'Victoria',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var lucas = {
    nome: 'Lucas',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var elementoTabela = document.getElementById('tabelaJogadores')
elementoTabela.innerHTML = `
<tr>
<td>${victoria.nome}</td>
<td>${victoria.vitoria}</td>
<td>${victoria.empate}</td>
<td>${victoria.derrota}</td>
<td>${victoria.pontos}</td>
<td><button onClick="adicionarVitoria(victoria)">Vitória</button></td>
<td><button onClick="adicionarEmpate(victoria)">Empate</button></td>
<td><button onClick="adicionarDerrota(victoria)">Derrota</button></td>
</tr>
`

function adicionarVitoria(jogador) {

}

function adicionarEmpate() {

}

function adicionarDerrota() {

}