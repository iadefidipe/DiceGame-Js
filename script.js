'use strict';


// Selcting elements



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
score0El.textContent= 0;
score1El.textContent =0;
diceEl.classList.add('hidden');

// global variable
const scores = [0,0];
let currentScore =0;
let activePlayer =0;


// switch player function
const switchPlayer = function(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
};


// addeing event listener to roll dice btn
btnRoll.addEventListener('click', function(){

    
    // block variable to generate random dice roll number
    const dice= Math.trunc(Math.random()*6)+1;

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check if dice = 1

    if (dice !==1){
        currentScore += dice;

        document.getElementById(`current--${activePlayer}`).textContent=currentScore
        
    }else{
        // switch to next player
        switchPlayer();
        
        
    }


})

btnHold.addEventListener('click', function(){
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    if (scores[activePlayer] >=100){
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--winner' );
        
    }else{
        switchPlayer();


    }


})

// start new game 
btnNew.addEventListener('click', function(){
    currentScore = 0;
    activePlayer = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    score1El.textContent =currentScore;
    score0El.textContent = currentScore;
    curent0El.textContent=currentScore;
    curent1El.textContent = currentScore;

})




