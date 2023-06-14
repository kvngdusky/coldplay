'use strict';

// Created variables for elements that will be manipilated
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const messageEl = document.querySelector('.message');
const btnAgainEl = document.querySelector('.again');
const btnCheckEL = document.querySelector('.check');
const bodyEl = document.querySelector('body');

// Declare fuctions to avoid repitions
const getRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  return (messageEl.textContent = message);
};

const displayScore = function (score) {
  return (scoreEl.textContent = score);
};

// Variables that will guide the the game
let score = 20;
let highscore = 0;
let secretNumber = getRandomNumber();

btnCheckEL.addEventListener('click', function () {
  // Created a variable that takes the value of the user's guessed value
  const guess = Number(guessEl.value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    numberEl.textContent = secretNumber;
    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    // Setting the highscore
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

// Resets the game
btnAgainEl.addEventListener('click', function () {
  score = 20;
  bodyEl.style.backgroundColor = '#222';
  numberEl.textContent = '?';
  numberEl.style.width = '15rem';
  guessEl.value = '';
  displayMessage('Start guessing...');
  displayScore(score);
});
