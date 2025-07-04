let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function checkGuess() {
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');

  if (!guess) {
    message.textContent = 'No number!';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct!';
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.getElementById('highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.getElementById('score').textContent = score;
    } else {
      message.textContent = 'You lost!';
      document.getElementById('score').textContent = 0;
    }
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.getElementById('score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
}