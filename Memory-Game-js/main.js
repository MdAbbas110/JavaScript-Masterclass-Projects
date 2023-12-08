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
  element.setAttribute('data-revealed', false);

  element.addEventListener('click', () => {
    const reveled = element.getAttribute('data-revealed');

    // check that not to reveal tile on wrong select
    if (awaitingEndOfMove || reveled === 'true' || element === activeTile) {
      return;
    }

    element.style.backgroundColor = color;

    if (!activeTile) {
      activeTile = element;
      return;
    }

    //* Logic to match the same colors

    const colorToMatch = activeTile.getAttribute('data-color');

    if (colorToMatch === color) {
      activeTile.setAttribute('data-revealed', true);
      element.setAttribute('data-reveled', true);

      awaitingEndOfMove = false;
      activeTile = null;
      revealedCount += 2;

      if (revealedCount === tileCount) {
        alert('You Win! Refresh to play again');
      }
      return;
    }

    // Down here
    awaitingEndOfMove = true;

    setTimeout(() => {
      element.style.backgroundColor = null;
      activeTile.style.backgroundColor = null;

      awaitingEndOfMove = false;
      activeTile = null;
    }, 1000);
  });

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
