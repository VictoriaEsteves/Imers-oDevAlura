
var time = []

function adicionarPlayer() {
    var nick = document.getElementById('players').value;

    var novoJogador = {
        nome: nick,
        ganhas: 0,
        empate: 0,
        perdidas: 0,
        PdL: 0,
    }

    time.push(novoJogador);
    document.getElementById('players').value = '';

    exibirNaTela()
}

    function exibirNaTela() {
        tabelaJogadores.innerHTML = '';

        for(i=0;i < time.length; i++) {
            var jogador = time[i]

            tabelaJogadores.innerHTML += `<tr>
            <td>${jogador.nome}</td>
            <td>${jogador.ganhas}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.perdidas}</td>
            <td>${jogador.PdL}</td>
            <td><button onClick="adicionarGanhas(${i})">Ganhas</button></td>
            <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
            <td><button onClick="adicionarPerdidas(${i})">Perdidas</button></td>
            <td><button onClick="adicionarPdL(${i})">PdL Ganho</button></td>
            <td><button onClick="removerJogador(${i})">Remover</button></td>
            </tr>`
        }
    }

    function adicionarGanhas(index) {
        var jogador = time[index]

        jogador.ganhas++;

        exibirNaTela()

    }

    function adicionarEmpate(index) {
        var jogador = time[index]

        jogador.empate++

        exibirNaTela()
    }

    function adicionarPerdidas(index) {
        var jogador = time[index]

        jogador.perdidas++

        exibirNaTela()
    }

    function adicionarPdL(index) {
        var jogador = time[index]

        jogador.PdL++;

        exibirNaTela()
    }

    function removerJogador(index) {

        listaDeJogadores.splice(index, 1)
        exibirNaTela()
    }
