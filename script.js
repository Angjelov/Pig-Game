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
const player0El = document.querySelector('.player--0'); // selektiranje na prviot igrac
const player1El = document.querySelector('.player--1'); // selektiranje na vtoriot igrac

// Pocetni vrednosti
score0El.textContent = 0; // postavuvanje na score 0
score1El.textContent = 0; // postavuvanje na score 0
diceEl.classList.add('hidden'); // sokrivanje na  dice elementot


let scores; // poceten score za dvata igraci
let currentScore; // momentalen score
let activePlayer;
let playing;


const init = function(){

     scores = [0, 0]; // poceten score za dvata igraci
     currentScore = 0; // momentalen score
     activePlayer = 0;
     playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;

    diceEl.classList.add('hidden');

    current0El.textContent = 0;
    current0El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();    


const swithPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0; // postavi go momentalniot score na 0
    currentScore = 0; // resetiraj go momentalniot score
    activePlayer = activePlayer === 0 ? 1 : 0; // smeni go igracot so terminal operator

    player0El.classList.toggle('player--active'); // smeni go igracot so toggle
    player1El.classList.toggle('player--active'); // smeni go igracot so toggle
}
// Rolaj kocka funkcija
btnRollEl.addEventListener('click', function(){
    if(playing){

        // 1. Generiraj random broj od 1 do 6

        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Prikazi kockata na ekranot

        diceEl.classList.remove('hidden'); // otstrani ja hidden klasata od dice elementot

        diceEl.src = `dice-${dice}.png`; // postavi src na dice elementot so slika od kockata
        
        // 3. Proveri dali kockata e 1
        if(dice != 1){
            // dodaj go momentalniot score
            currentScore += dice; // dodaj go momentalniot score so vrednosta na kockata
            document.getElementById(`current--${activePlayer}`).textContent = currentScore; // postavi go momentalniot score na ekranot
        }
        // ako e 1, smeni go igracot
        else{
            swithPlayer();
        }
    }

})

btnHoldEl.addEventListener('click', function(){

    if(playing){

         //1. Dodaj go momentalniot score na globalniot score

    scores[activePlayer] += currentScore; // dodaj go momentalniot score na globalniot score

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2. proveri dali score e >= 100
    if(scores[activePlayer] >= 100){
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
        
    }
    //3. Promeni na sledniot igrac
    else{
    
        swithPlayer();
    }
    }

})

btnNewEl.addEventListener('click', init)