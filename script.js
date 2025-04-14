'use strict';

// Selektiraj elementi od DOM
const score0El = document.querySelector('#score--0'); // selektiranje na prviot score
const score1El = document.getElementById('score--1'); // selektiranje na vtorot score
const diceEl = document.querySelector('.dice'); // selektiranje na dice elementot


// Pocetni vrednosti

score0El.textContent = 0; // postavuvanje na score 0
score1El.textContent = 0; // postavuvanje na score 0
diceEl.classList.add('hidden'); // sokrivanje na  dice elementot
