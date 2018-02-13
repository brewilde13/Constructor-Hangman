// require Word.js file and inquirer
var wordFile = require("./Word.js");
var inquirer = require("inquirer");

// create array of random words
var wordChoices = ["Soccer", "Basketball", "Tennis", "Golf", "Football"];
// randomly select from the above array
var randomWord = Math.floor(Math.random() * wordChoices.length);
console.log(randomWord);
// return the string of the word versus the index
var randomArray = wordChoices[randomWord];
console.log(randomArray);

inquirer
.prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },