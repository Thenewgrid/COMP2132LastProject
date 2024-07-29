// To use listOfWords, the mylist.js file must be open
// All my IDs
const popUpBox        = document.getElementById("popUpBox");
const answerInPopUp   = document.getElementById("hiddenWord");
const playAgainButton = document.getElementById("playAgainButton");
const hangmanSection  = document.getElementById("hangImageHolder");
const hangmanImage    = document.getElementById("hangImage");
const wordToGuess     = document.getElementById("wordToGuess"); // same value as answerInPopUp
const hintDisplay     = document.getElementById("hintDisplay");
const wrongGuesses    = document.getElementById("wrongGuesses"); // use innerHTML to display
const keyBoard        = document.getElementById("keyBoardMap"); // letters will go here
