'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

let playing, activePlayer, currentScore, scores;

const init = function () {
  playing = true;
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.add('player-active');
  player1El.classList.remove('player-active');
  player0El.classList.remove('player-winner');
  player1El.classList.remove('player-winner');

  diceEl.classList.add('hidden');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRollEl.addEventListener('click', function () {
  if (playing) {
    // Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // If dice is not equal to 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // Switch to next player: if dice = 1
    } else {
      switchPlayer();
    }
  }
});

btnHoldEl.addEventListener('click', function () {
  if (playing) {
    // Add current score to total score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if score is at least 100: Active player wins
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
      // Switch player
    } else {
      switchPlayer();
    }
  }
});

btnNewEl.addEventListener('click', init);
