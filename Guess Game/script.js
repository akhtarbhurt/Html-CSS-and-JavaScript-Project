let computerGuess;
let userGuess=[];
let userNumberUpdate = document.getElementById('textOutput')
let userGuessUpdate= document.getElementById('inputBox')

const init = ()=>{
    computerGuess= Math.floor(Math.random()*100)
    document.getElementById('newGameButton').style.display='none';
    document.getElementById('gameArea').style.display='none';
}

const startGame = ()=>{
    document.getElementById('welcomeScreen').style.display='none';
    document.getElementById('gameArea').style.display='block';
}
const newGameBegin = ()=>{
    window.location.reload();
}

const startNewGame = ()=>{
    document.getElementById('newGameButton').style.display='inline';
    userGuessUpdate.setAttribute('disabled', true)
}

const compareGuess = ()=>{
    const userNumber = Number(document.getElementById('inputBox').value)
    userGuess = [...userGuess, userNumber]
    document.getElementById('guesses').innerHTML=userGuess;
    if(userGuess.length<maxGuess){
        if(userNumber > computerGuess){
            userNumberUpdate.innerHTML="Your Guess is High";
            userGuessUpdate.value="";
        } else if(userNumber < computerGuess){
            userNumberUpdate.innerHTML='your guess is low';
            userGuessUpdate.value="";
        } else{
            userNumberUpdate.innerHTML='You Won!';
            userGuessUpdate.value="";
            startNewGame();
        }
    } else{
        if(userNumber > computerGuess){
            userNumberUpdate.innerHTML=`you loose correct number was ${computerGuess}`;
            userGuessUpdate.value="";
            startNewGame();
        } else if(userNumber < computerGuess){
            userNumberUpdate.innerHTML=`you loose correct number was ${computerGuess}`;
            userGuessUpdate.value="";
            startNewGame();
        } else{
            userNumberUpdate.innerHTML=`you loose correct number was ${computerGuess}`;
            userGuessUpdate.value="";
            startNewGame();
        }
    }

    document.getElementById('attempts').innerHTML=userGuess.length;
}

const easyMode =()=>{
    maxGuess=10
    startGame()
}

const hardMode =()=>{
    maxGuess=5
    startGame()
}
