'use strict';

// TODO: Selcting elements an storing them in their own variable to make code more dry

// there are two ways to select an element by id, on is using the query selector and add #idName
const score0El = document.querySelector('#score--0');
//  the second way is to use the getElementById method, bth methods achieve the same thing but this second method is faster
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const curent0El = document.getElementById('current--0');
const curent1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


// global variable
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true; // state variable 

// TODO: switch player function
const switchPlayer = function () {
  currentScore = 0; // reset score in the program
  document.getElementById(`current--${activePlayer}`).textContent = 0; // rest score in the user interface
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0; //conditional statement to change active player value 
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
};

// Todo: adding event listener to roll dice btn
btnRoll.addEventListener('click', function () {

  if(playing){
    // TODO: generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // TODO: dice to diplay randomly generated between 1-6
    diceEl.classList.remove('hidden'); // remove hidden class to display the dice img
    diceEl.src = `dice-${dice}.png`;

    // TODO: check if dice rolled 1, if true switch players

    if (dice !== 1) {
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // todo: switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; // add current score to the player score on the interface

    if (scores[activePlayer] >= 20) {
      playing = false; //change state of the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

// TODO: start new game, initializing all states 
btnNew.addEventListener('click', function () {
  playing=true
  currentScore = 0;
  activePlayer = 0;
  scores=[0,0];
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  score1El.textContent = currentScore;
  score0El.textContent = currentScore;
  curent0El.textContent = currentScore;
  curent1El.textContent = currentScore;
  diceEl.classList.add('hidden');
});

