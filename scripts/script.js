const gameBox         = document.getElementById("gameHolder");
const popUpBox        = document.getElementById("popUpBox");
const answerInPopUp   = document.getElementById("hiddenWord");
const playAgainButton = document.getElementById("playAgainButton");
const hangmanImage    = document.getElementById("hangImage");
const hintDisplay     = document.getElementById("hintDisplay");
const wrongGuesses    = document.getElementById("wrongGuesses");
const keyBoard        = document.getElementById("keyBoardMap"); // letters will go here
const endGameMessage  = document.getElementById("endGame");
const endImage        = document.getElementById("gameOverImage");
const wordHolder      = document.getElementById("wordHolder");
const popUpText       = document.getElementById("popUpText");

const hangImagePath   = `images/hangman`;
const winImage        = `images/trophy.png`;
const loseImage       = `images/hollow_thumb.png`;
const maxGuess        = 6;
// the word right now
let currentWord;
//keyboard
for(let i = 97; i <= 122; i++){
    btn = document.createElement("button");
    btn.innerText = String.fromCharCode(i);
    keyBoard.appendChild(btn);
    //event listener for button clicks
    btn.addEventListener('click', function(event){ return initGame(event.target, String.fromCharCode(i))});
}
//get random word and hint
function getRandomWord(){
    const { word, hint} = listOfWords[Math.floor(Math.random() * listOfWords.length)];
    currentWord = word;
    hintDisplay.innerText = hint;
    wordHolder.innerHTML = word.split("").map( function(){ return `<li class="wordLetter"></li>`}).join("");
}

getRandomWord();
//game over logic complete
const gameEnd = function(isVictory){
    setTimeout( function(){
        popUpText.innerText = isVictory ? `You Found:` : `Correct word was:`;
        endImage.src = isVictory ? winImage : loseImage;
        endGameMessage.innerText = `${isVictory ? 'Well done!' : 'Game over!'}`;
        answerInPopUp.innerText = `${currentWord}`;
        popUpBox.style.display = 'block';
        keyBoard.querySelectorAll("button").forEach(btn => btn.disabled = true);
        gameBox.style.opacity = 0.4;
        gameBox.style.transition = 'opacity 0.4s ease';
    }, 300)
}
// list of correctly guessed letters
let correctLetters = [];
// wrong guess count
let wrongGuessCount = 0;
wrongGuesses.innerHTML = `${wrongGuessCount} / ${maxGuess}`;
//checking if letter exists in word
const initGame = function(button, selectedLetter){
    if(currentWord.includes(selectedLetter)){
        //finding letters in the word
        [...currentWord].forEach((letter,index) => {
            if(letter === selectedLetter){
                correctLetters.push(letter);
                wordHolder.querySelectorAll("li")[index].innerText = letter;
                wordHolder.querySelectorAll("li")[index].classList.add("letterFound");
            }
        })
    }else{
        wrongGuessCount++
        hangmanImage.src = `${hangImagePath}-${wrongGuessCount}.svg`;
    }
    // updating the guesses and button
    wrongGuesses.innerHTML = `${wrongGuessCount} / ${maxGuess}`;
    button.disabled = true;
    //game over logic statements
    if(wrongGuessCount === maxGuess) return gameEnd(false);
    if(correctLetters.length === currentWord.length) return gameEnd(true);
}
// reset function
function resetGame(){
    popUpBox.style.display = 'none';
    wrongGuessCount = 0;
    wrongGuesses.innerHTML = `${wrongGuessCount} / ${maxGuess}`;
    hangmanImage.src = `${hangImagePath}-${wrongGuessCount}.svg`;
    correctLetters = [];
    keyBoard.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameBox.style.opacity = 1;
    getRandomWord();
}
//play again feature
playAgainButton.addEventListener('click', function(){
    resetGame();
})
