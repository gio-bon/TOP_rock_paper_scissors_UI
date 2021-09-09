
playerSelection = prompt('Escolha Uma das opções: Pedra, Tesoura ou Papael: ');

computerSelection = computerPlay();

playerSelection2 = capitalize(playerSelection);

//converte qualquer entrada do usuário no formato padrão capitalizado
function capitalize(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    let capital = playerSelection.charAt(0).toUpperCase();
    playerSelection = capital.concat(playerSelection.slice(1,playerSelection.length))
    return playerSelection
}

//cria a escolha aleatória do adversário computador
function computerPlay(){
    possibilidades = ['', 'Pedra', 'Tesoura', 'Papel'];
    numeroAleatorio = Math.floor(Math.random()*3) + 1;
    return possibilidades[numeroAleatorio];
}

//define o resultado do jogo e retorna o resultado
function round(playerSelection2, computerSelection){
    if(computerSelection === 'Pedra' && playerSelection2 === 'Tesoura'){
        return 'Você Perdeu, Pedra quebra Tesoura.'
    }
    if(computerSelection === 'Tesoura' && playerSelection2 === 'Papel'){
        return 'Você Perdeu, Tesoura corta Papel.'
    }
    if(computerSelection === 'Papel' && playerSelection2 === 'Pedra'){
        return 'Você Perdeu, Papel cobre Pedra.'
    }
    if(playerSelection2 === 'Pedra' && computerSelection === 'Tesoura'){
        return 'Você Ganhou, Pedra quebra Tesoura.'
    }
    if(playerSelection2 === 'Tesoura' && computerSelection === 'Papel'){
        return 'Você Ganhou, Tesoura corta Papel.'
    }
    if(playerSelection2 === 'Papel' && computerSelection === 'Pedra'){
        return 'Você Ganhou, Papel cobre Pedra.'
    }
    else if(playerSelection2 === computerSelection){
        return 'Empate!'
    } else{
        return 'Você escolheu uma opção INVÁLIDA!'
    }
}

//cria 5 partidas e reinicializa a escolha do computador
function game() {
    for(let i = 0; i <= 5; i++){
        let result = round(playerSelection2, computerSelection);
        console.log(`${result} Você escolheu ${playerSelection2} e o computador ${computerSelection}`);
        computerSelection = computerPlay();
    }
}

game();