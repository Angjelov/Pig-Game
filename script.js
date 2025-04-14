'use strict';

// Selektiraj elementi od DOM
const score0El = document.querySelector('#score--0'); // selektiranje na prviot score
const score1El = document.getElementById('score--1'); // selektiranje na vtorot score
const diceEl = document.querySelector('.dice'); // selektiranje na dice elementot
const btnNewEl = document.querySelector('.btn--new'); // selektiranje na kopceto za nova igra
const btnRollEl = document.querySelector('.btn--roll'); // selektiranje na kopceto za rolanje
const btnHoldEl = document.querySelector('.btn--hold'); // selektiranje na kopceto za drzenje
const current0El = document.getElementById('current--0'); // selektiranje na momentalniot score za prviot igrac
const current1El = document.getElementById('current--1'); // selektiranje na momentalniot score za vtoriot igrac

// Pocetni vrednosti
score0El.textContent = 0; // postavuvanje na score 0
score1El.textContent = 0; // postavuvanje na score 0
diceEl.classList.add('hidden'); // sokrivanje na  dice elementot


let currentScore = 0; // momentalen score

// Rolaj kocka funkcija

btnRollEl.addEventListener('click', function(){

    // 1. Generiraj random broj od 1 do 6

    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Prikazi kockata na ekranot

    diceEl.classList.remove('hidden'); // otstrani ja hidden klasata od dice elementot

    diceEl.src = `dice-${dice}.png`; // postavi src na dice elementot so slika od kockata
    
    // 3. Proveri dali kockata e 1
    if(dice != 1){
        // dodaj go momentalniot score

        currentScore += dice; // dodaj go momentalniot score so vrednosta na kockata
        current0El.textContent = currentScore; // postavi go momentalniot score na ekranot
    }
    // ako e 1, smeni go igracot
    else{

    }
})