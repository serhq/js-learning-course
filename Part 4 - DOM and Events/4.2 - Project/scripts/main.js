`use strict`;

import { state } from "./state.js";

import {
    diceEl, btnHold, btnRoll, btnNew
} from "./dom.js";

import { 
    initGame, switchPlayer 
} from "./functions.js";


initGame();

const WINNING_SCORE = 100;

// Rolling dice functionality
btnRoll.addEventListener('click', () =>  {
    if(state.isPlaying) {
        // 1. Generating a random dice roll
        let dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `assets/images/dice-${dice}.png`;

        // 3. Check for rolled 1
        if (dice !== 1) {
            state.currentScore += dice;
            document.getElementById(`current--${state.activePlayer}`).textContent = state.currentScore;
        } else {
            switchPlayer();
        }
    }
});

// Holding the score
btnHold.addEventListener('click', () => {
    if (state.isPlaying) {
        let currentPlayerScore = document.getElementById(`score--${state.activePlayer}`).textContent = state.scores[state.activePlayer] += state.currentScore;

        if (currentPlayerScore >= WINNING_SCORE) {
            state.isPlaying = false;
            document.querySelector(`.player--${state.activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${state.activePlayer}`).classList.remove('player--active');
            document.getElementById(`current--${state.activePlayer}`).textContent = 0;
            state.currentScore = 0;
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', initGame);