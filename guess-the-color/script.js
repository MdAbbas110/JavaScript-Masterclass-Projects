const colorCodeContainer = document.getElementById('color-code');
const optionsContainer = document.getElementById('options-container');
const scoreContainer = document.getElementById('score');
let randomColor = null;
let score = 0;

function generateRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min) + 1);
}

function generateRandomColorRGB() {
  const red = generateRandomNumber(0, 255);
  const green = generateRandomNumber(0, 255);
  const blue = generateRandomNumber(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore() {
  score += 1;
  scoreContainer.innerText = score;
}

function validateResult(el) {
  const selected = el.target.style.backgroundColor;
  if (randomColor === selected) {
    incrementScore();
  } else {
    score = 0;
  }

  window.localStorage.setItem('score', score);
  startGame();
}

function startGame() {
  score = Number(window.localStorage.getItem('score') ?? 0);
  scoreContainer.innerText = score;
  optionsContainer.innerHTML = null;
  randomColor = generateRandomColorRGB();
  colorCodeContainer.innerText = randomColor;

  const ansIndex = generateRandomNumber(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement('div');
    div.addEventListener('click', validateResult);

    div.style.backgroundColor =
      i === ansIndex ? randomColor : generateRandomColorRGB();
    optionsContainer.appendChild(div);
  }
}

window.addEventListener('load', () => startGame());
