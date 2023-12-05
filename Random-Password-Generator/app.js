// document.getElementById('length').addEventListener('input', (event) => {
//   document.getElementById('lengthValue').innerText = event.target.value;
// });

document.getElementById('length').addEventListener('input', (event) => {
  document.getElementById('lengthValue').innerText = event.target.value;
});

function generatePassword() {
  // +document work is to convert the range number return value to string
  const length = +document.getElementById('length').value;
  const includeUppercase = document.getElementById('uppercase').checked; //checked property return true or false based on that
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeNumber = document.getElementById('number').checked;
  const includeSpecial = document.getElementById('special').checked;

  let characterSet = '';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+={}[]|;:,.<>?';

  if (includeLowercase) characterSet = characterSet + lowercaseChars;
  if (includeUppercase) characterSet += uppercaseChars;
  if (includeNumber) characterSet += numberChars;
  if (includeSpecial) characterSet += specialChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }
  document.getElementById('password').value = password;
}

function copyToClipboard() {
  const passwordField = document.getElementById('password');
  passwordField.select();
  document.execCommand('copy');

  const tooltip = document.getElementById('copyTooltip');
  tooltip.style.display = 'block';

  setTimeout(() => {
    tooltip.style.display = 'none';
  }, 2000);
}

function saveToHistory(password, history) {
  //fetch the current history from localStorage

  let history = JSON.parse(localStorage.getItem('passwordHistory' || '[]'));

  if (!password.includes(password)) {
    history.push(password);
    //? save the updated history the local storage

    localStorage.setItem('passwordHistory', JSON.stringify(history));
  }
}

function displayHistory() {
  const historyElement = document.getElementById('passwordHistory');
  //clear the current history
  historyElement.innerHTML = '';

  //Append every single password to the history

  historyElement.forEach((password) => {
    const li = document.createElement('li');
    li.textContent = password;
    historyElement.appendChild(li);
  });
}

window.onload = displayHistory;
