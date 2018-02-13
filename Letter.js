// store the user input into a variable
var userInput = process.argv[2];

// create constructor Letter
function Letter (letter) {
    // string value to store underlaying character for letter
    this.letter = letter;
    // boolean value that stores whether that letter has been guessed yet
    this.letterGuessed = false;
    // function that returns the underlying character if the letter has been guessed, or a placeholder 
    // (like an underscore) if the letter has not been guessed
    this.returnGuess = function () {
      if (userInput === this.letter) {
        console.log(this.letter);
        return this.letter;
      }
      else {
        console.log("_");
        return "_";
      }
    }
    // function that takes a character as an argument and checks it against the underlying character, 
    // updating the stored boolean value to true if it was guessed correctly
    this.updateLetterGuessed = function (userInput) {
      if (userInput === this.letter) {
        this.letterGuessed = true;
        console.log(this.letterGuessed);
      }
      else {
        this.letterGuessed = false;
        console.log(this.letterGuessed);
      }
    }
  } // end constructor

module.exports = Letter;