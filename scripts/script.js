// To use listOfWords, the mylist.js file must be open
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
const letterHolder    = document.getElementById("keyBoardLetterHolder");
const endGameMessage  = document.getElementById("endGame");
const wordHolder      = document.getElementById("wordHolder");

const hangImagePath   = `images/hangman`;
const winImage        = `images/trophy.png`;
const loseImage       = `images/hollow_thumb.png`;
const maxGuess        = 6;

//keyboard
for(let i = 97; i <= 122; i++){
    btn = document.createElement("li");
    btn.innerText = String.fromCharCode(i);
    letterHolder.appendChild(btn);
}

//get random word and hint
function getRandomWord(){
    const { word, hint} = listOfWords[Math.floor(Math.random() * listOfWords.length)];
    console.log(word, hint);
    hintDisplay.innerText = hint;
    wordHolder.innerHTML = word.split("").map( function(){ return `<li class="wordLetter"></li>`}).join("");
}

getRandomWord();

// reset function
function resetGame(){
    popUpBox.style.display = 'none';
    hangmanImage.src = `${hangImagePath}-0.svg`;
    wrongGuessCount = 0;
    wrongGuesses.innerHTML = ``;
    wrongGuesses.style.color = "#ffffff";
    count = 0;
    gameBox.style.opacity = 1;
}

//play again feature
playAgainButton.addEventListener('click', function(){
    resetGame();
})

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

// wrong guess count
let wrongGuessCount = 0;

hangmanImage.addEventListener('click', function(){
    if(wrongGuessCount < maxGuess){
        wrongGuessCount++
        wrongGuesses.innerHTML = `${wrongGuessCount} / ${maxGuess}`;
    } else if(wrongGuessCount === maxGuess){
        wrongGuesses.style.color = "red";
    }
    
})
