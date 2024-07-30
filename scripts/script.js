// All my IDs
const gameBox         = document.getElementById("gameHolder");
const popUpBox        = document.getElementById("popUpBox");
const answerInPopUp   = document.getElementById("hiddenWord");
const playAgainButton = document.getElementById("playAgainButton");
const hangmanSection  = document.getElementById("hangImageHolder");
const hangmanImage    = document.getElementById("hangImage");
const hintDisplay     = document.getElementById("hintDisplay");
const wrongGuesses    = document.getElementById("wrongGuesses"); // use innerHTML to display
const keyBoard        = document.getElementById("keyBoardMap"); // letters will go here
const endGameMessage  = document.getElementById("endGame");
const wordHolder      = document.getElementById("wordHolder");

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
    console.log(word, hint); // remove later (before submission)
    hintDisplay.innerText = hint;
    wordHolder.innerHTML = word.split("").map( function(){ return `<li class="wordLetter"></li>`}).join("");
}

getRandomWord();

//
let correctLetters = [];

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
    if(correctLetters.length === currentWord.length) return gameEnd(true); // 31:05
}

//game over logic complete


// wrong guess count
let wrongGuessCount = 0; // use red color when 6 is reached

// reset function
function resetGame(){
    popUpBox.style.display = 'none';
    hangmanImage.src = `${hangImagePath}-0.svg`;
    wrongGuessCount = 0;
    wrongGuesses.innerHTML = ``;
    wrongGuesses.style.color = "#ffffff";
    gameBox.style.opacity = 1;
}

//play again feature
playAgainButton.addEventListener('click', function(){
    resetGame();
})

