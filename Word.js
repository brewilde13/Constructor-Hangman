// require Letter.js file
var letterFile = require('./Letter.js');

// create Words constructor to create an object that represent the current word being guessed
function Words (word) {
    // array of new Letter objects representing the letters of the underlying word
    this.wordArray = word.split('').map(x => new Letter(x)),
    // function that returns the string representing the word that calls on the returnGuess in Letter.js using concatenate
    this.displayWord = function() {
        var displayWord = [];
        this.wordArray.forEach(function(element) {
            displayWord.push(element.show());
        })
        console.log(`${displayWord.join(" ")}\n`);
    }
    // function that takes a character as an argument and calls the updateLetterGuessed in Letter.js
    this.checkGuess = function (userInput){
        var wordGuessed = false;
        this.wordArray.forEach(function(element){
            if (userInput === element.letter) {
                //change value of property to display letter not _
                element.letterGuessed = true
                //change wordguessed to true to alert that a letter was guessed
                wordGuessed = true
            }
        })
        if (wordGuessed === true) {
            //update display
            this.displayWord();
            return true
        }   
        if (wordGuessed === false) {
             //update display
            this.displayWord();
            return false
        }
    }
}

module.exports = {
    Words: Words,
}