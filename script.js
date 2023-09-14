'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎉';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let theNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Change Background
const changeBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('🙅 No Number!');
  }
  //When player wins
  else if (guess === theNumber) {
    displayMessage('🎉 Yayy! Correct Number.');
    document.querySelector('.number').textContent = theNumber;
    changeBackground('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //Guess is not correct
  else if (guess !== theNumber) {
    if (score > 1) {
      displayMessage(
        guess > theNumber ? '⬆️ Number is too high!' : '⬇️ Number is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🙊👎 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Play Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  theNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  displayMessage('Start guessing...💭');
  document.querySelector('.guess').textContent = '';
  changeBackground('#222');
});
