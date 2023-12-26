let currentPlayer = 'X';
let array = Array(9).fill(null);

function handleClick(el) {
  const id = Number(el.id);
  array[id] = currentPlayer;
  el.innerText = currentPlayer;
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
