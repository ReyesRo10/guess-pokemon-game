"use strict";

//Selecting elements
const btnStart = document.querySelector(".start");
const btnContinue = document.querySelector(".continue");
const btnReset = document.querySelector(".reset");
const btnCheck = document.querySelector(".check");
const pokemonImage = document.querySelector(".pokemon");

//Pokemon list values
const pokemonList = [
  "eevee",
  "pikachu",
  "squirtle",
  "umbreon",
  "bulbasaur",
  "charmander",
];

let answer = "";
let score = 0;
let attempts = 0;

//Change the .message text
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Start botton funcionality
btnStart.addEventListener("click", function () {
  //Generate a random pokemon name

  const randomName = Math.floor(Math.random() * pokemonList.length);
  answer = pokemonList[randomName];

  //Display pokemon image
  pokemonImage.src = `img/${pokemonList[randomName]}.png`;
});

//Check botton funcionality
btnCheck.addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  //When is no input
  if (!guess) {
    displayMessage("No input!");
  }

  //When input is correct
  else if (guess === answer) {
    displayMessage("Correct");
    score++;
    document.querySelector(".score").textContent = score;
    if (score === 3) displayMessage("Congrats you won!");

    //when input is not correct
  } else {
    displayMessage("Ops! Is not correct. Try again");
    attempts++;
    document.querySelector(".attempts").textContent = attempts;
    if (attempts === 3) displayMessage("Sorry :( you lost!");
  }
});

//Reset botton funcionality
btnReset.addEventListener("click", function () {
  document.querySelector(".score").textContent = 0;
  document.querySelector(".attempts").textContent = 0;
  pokemonImage.src = `img/shadow.png`;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});
