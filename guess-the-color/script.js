const colorCodeContainer = document.getElementById('color-code');
const optionsContainer = document.getElementById('options-container');
let randomColor = null;

function generateRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min) + 1);
}

function generateRandomColorRGB() {
  const red = generateRandomNumber(0, 255);
  const green = generateRandomNumber(0, 255);
  const blue = generateRandomNumber(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function validateResult(el) {
  const selected = el.target.style.backgroundColor;
  console.log(randomColor === selected);
}

function startGame() {
  randomColor = generateRandomColorRGB();
  colorCodeContainer.innerText = randomColor;

  const ansIndex = generateRandomNumber(0, 5);

  for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.addEventListener('click', validateResult);

    div.style.backgroundColor =
      i === ansIndex ? randomColor : generateRandomColorRGB();
    optionsContainer.appendChild(div);
  }
}

window.addEventListener('load', () => startGame());
