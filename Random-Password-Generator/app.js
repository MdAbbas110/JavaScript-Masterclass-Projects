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
    console.log(characterSet[randomIndex]);
    password += characterSet[randomIndex];
  }
  document.getElementById('password').value = password;
}
