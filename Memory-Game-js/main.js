const tilesContainer = document.querySelector('.tiles');
const colors = [
  'aqua',
  'aquamarine',
  'crimson',
  'blue',
  'dodgerblue',
  'gold',
  'greenyellow',
  'teal',
];

const colorsPickList = [...colors, ...colors];
const tileCount = colorsPickList.length;

// Game State
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
  const element = document.createElement('div');
  element.classList.add('tile');
  element.setAttribute('data-color', color);
  return element;
}

// Build up the tiles using dom method
for (let i = 0; i < tileCount; i++) {
  const randomIndex = Math.floor(Math.random() * colorsPickList.length);
  const color = colorsPickList[randomIndex];
  const tile = buildTile(color);

  colorsPickList.splice(randomIndex, 1);
  tilesContainer.appendChild(tile);
}
