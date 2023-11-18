var listaDeJogadores = []


function adicionarPlayer() {
    var nomeJgr = document.getElementById('players').value;
    
    var novoJogador = {
      nome: nomeJgr,
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    };
    
    listaDeJogadores.push(novoJogador);
    
    exibirNaTela();
  }


function exibirNaTela() {
    tabelaJogadores.innerHTML = '';

    for(var i = 0; i < listaDeJogadores.length; i++) {
        var jogador = listaDeJogadores[i]

        tabelaJogadores.innerHTML += `<tr>
        <td>${jogador.nome}</td>
        <td>${jogador.vitoria}</td>
        <td>${jogador.empate}</td>
        <td>${jogador.derrota}</td>
        <td>${jogador.pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        <td><button onClick="removerJogador(${i})">Remover</button></td>
        </tr>`
    }

}

    function adicionarVitoria(index) {
        var  jogador = listaDeJogadores[index]

        jogador.vitoria++;
        jogador.pontos += 3;

        exibirNaTela()
    }

    function adicionarEmpate(index) {
        var  jogador = listaDeJogadores[index]

        jogador.empate++;
        jogador.pontos++;

        exibirNaTela()
    }

    function adicionarDerrota(index) {
        var  jogador = listaDeJogadores[index]

        jogador.derrota++;

        exibirNaTela()
    }

    function removerJogador(index) {
        listaDeJogadores.splice(index, 1)
        exibirNaTela()
    }