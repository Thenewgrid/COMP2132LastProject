// To use listOfWords, the mylist.js file must be open
// All my IDs
const gameBox         = document.getElementById("gameHolder");
const popUpBox        = document.getElementById("popUpBox");
const answerInPopUp   = document.getElementById("hiddenWord");
const playAgainButton = document.getElementById("playAgainButton");
const hangmanSection  = document.getElementById("hangImageHolder");
const hangmanImage    = document.getElementById("hangImage");
const wordToGuess     = document.getElementById("wordToGuess"); // same value as answerInPopUp
const hintDisplay     = document.getElementById("hintDisplay");
const wrongGuesses    = document.getElementById("wrongGuesses"); // use innerHTML to display
const keyBoard        = document.getElementById("keyBoardMap"); // letters will go here

const hangImagePath   = `images/hangman`;
const winImage        = `images/trophy.png`;
const loseImage       = `images/hollow_thumb.png`;
const maxGuess        = 6;

// reset function


// this function is just a dummy tester but very helpful for how the pop up should work
let count = 0;

hangmanImage.addEventListener('click', function(){
    if(count < 6){
        count++
        hangmanImage.src = `${hangImagePath}-${count}.svg`;
    } else if(count === 6){
        hangmanImage.src = `${hangImagePath}-${count}.svg`;
        popUpBox.style.display = 'block';
        gameBox.style.opacity = 0.3;
    }
})

//play again feature
playAgainButton.addEventListener('click', function(){
    popUpBox.style.display = 'none';
    gameBox.style.opacity = 1;
    hangmanImage.src = `${hangImagePath}-0.svg`;
    count = 0;
    wrongGuessCount = 0;
    wrongGuesses.innerHTML = `${wrongGuessCount} / ${maxGuess}`;
    wrongGuesses.style.color = "#ffffff";
})

// wrong guess count
let wrongGuessCount = 0;
wrongGuesses.innerHTML = `${wrongGuessCount} / ${maxGuess}`;

hangmanImage.addEventListener('click', function(){
    if(wrongGuessCount < maxGuess){
        wrongGuessCount++
        wrongGuesses.innerHTML = `${wrongGuessCount} / ${maxGuess}`;
    } else if(wrongGuessCount === maxGuess){
        wrongGuesses.style.color = "red";
    }
    
})
