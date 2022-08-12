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

//Change the .message text
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Start botton funcionality
btnStart.addEventListener("click", function () {
  //Generate a random pokemon name
  const randomName = Math.floor(Math.random() * pokemonList.length);
  console.log(pokemonList[randomName]);

  //Display pokemon image
  pokemonImage.src = `img/${pokemonList[randomName]}.png`;
});

//Check botton funcionality
btnCheck.addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (!guess) displayMessage("No input!");
  if (guess === pokemonList[pokemonList[randomName]]) displayMessage("Correct");
});
