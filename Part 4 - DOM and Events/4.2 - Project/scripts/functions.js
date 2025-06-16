import {
    player0El,
    player1El,
    score0El,
    score1El,
    current0El,
    current1El,
    diceEl
} from "./dom.js";

import { state } from "./state.js";

export const initGame = () => {
    state.scores = [0, 0];
    state.currentScore = 0;
    state.activePlayer = 0;
    state.isPlaying = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

export const switchPlayer = () => {
    document.getElementById(`current--${state.activePlayer}`).textContent = 0;
    state.currentScore = 0;
    state.activePlayer = state.activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
