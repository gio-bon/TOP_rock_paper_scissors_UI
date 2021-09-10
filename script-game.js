
let playerSelection;
let computerSelection;

//cria a escolha aleatória do adversário computador
function computerPlay(){
    possibilidades = ['', 'Pedra', 'Tesoura', 'Papel'];
    numeroAleatorio = Math.floor(Math.random()*3) + 1;
    return possibilidades[numeroAleatorio];
}

//define o resultado do jogo e retorna o resultado
function round(playerSelection, computerSelection){
    if(computerSelection === 'Pedra' && playerSelection === 'Tesoura'){
        return 'Lose'
    }
    if(computerSelection === 'Tesoura' && playerSelection === 'Papel'){
        return 'Lose'
    }
    if(computerSelection === 'Papel' && playerSelection === 'Pedra'){
        return 'Lose'
    }
    if(playerSelection === 'Pedra' && computerSelection === 'Tesoura'){
        return 'Win'
    }
    if(playerSelection === 'Tesoura' && computerSelection === 'Papel'){
        return 'Win'
    }
    if(playerSelection === 'Papel' && computerSelection === 'Pedra'){
        return 'Win'
    }
    else if(playerSelection === computerSelection){
        return 'Empate!'
}};

//manipulador de eventos inline que seleciona o conteúdo do button selecionado
const choiceButton = (item) => {
    let button = document.getElementById(item);
    let contentButton = button.textContent;
    playerSelection = contentButton; //escolha do jogador igual ao conteúdo do button
    console.log('VOCE :', playerSelection);
    rodada(playerSelection);
};

//faz a rodada de 5x e mostra quem ganhou ou perdeu
function rodada(playerSelection){
    computerSelection = computerPlay();
    let lose = 0, win = 0;
    let divResul = document.getElementById('result');
    for(let i = 0; i <=4; i++){
        console.log('PC :', computerSelection);
        let roundResult = round(playerSelection, computerSelection);
        //mostra os resultados na div
        let paragrafoAdd = document.createElement('p');
        paragrafoAdd.textContent = `${roundResult}`;
        divResul.appendChild(paragrafoAdd);
        //---
        if(roundResult == "Lose"){
            lose++
        }else if(roundResult == 'Win'){
            win++
        }
        computerSelection = computerPlay();
}
    if(win > lose){
        let paragrafoWin = document.createElement('p');
        paragrafoWin.textContent = "Você GANHOU a rodada";
        divResul.appendChild(paragrafoWin);
    }else if(win < lose){
        let paragrafoLose = document.createElement('p');
        paragrafoLose.textContent = "Você PERDEU a rodada";
        divResul.appendChild(paragrafoLose);
    }else{
        let paragrafoLose = document.createElement('p');
        paragrafoLose.textContent = "EMPATOU essa rodada";
        divResul.appendChild(paragrafoLose);
    }
};
//apaga resultados da rodada
function erase(){
    let divResul = document.getElementById('result');
    for(let i = 0; i <= 5;i++){
        divResul.removeChild(divResul.lastElementChild);
    }
};