let jogador = 1 //Usado apenas para determinar o jogador
let jogador1 = []
let jogador2 = []

function marcaBotao(idElemento){
    let pegaBotao = document.getElementById(idElemento)

    //Varia entre "x" e "o" a cada clique
    if (jogador == 0){
        pegaBotao.innerText = 'o'
        jogador2.push(pegaBotao.id) //Armazena o local do clique - jogador2
        jogador = 1

    } else {
        pegaBotao.innerText = 'x'
        jogador1.push(pegaBotao.id) //Armazena o local do clique - jogador1
        jogador = 0
    }


    pegaBotao.style.color = 'black'
}
