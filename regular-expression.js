/*
const form = document.querySelector('#form');
const input = document.querySelector('#phone');
const output = document.querySelector('#output');

const re = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;

function testInfo(phoneInput) {
  const ok = re.exec(phoneInput.value);

  if (!ok) {
    output.textContent = `${phoneInput.value} isn't a phone number with area code!`;
  } else {
    output.textContent = `Thanks, your phone number is ${ok[0]}`;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  testInfo(input);
});
*/

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const result = document.querySelector('#result');

const ex = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;

function testInfo(emailInput) {
  const ok = ex.exec(emailInput.value)
  console.log(ok);

  if (!ok) {
    result.textContent = `${emailInput.value} isn't a email! please re-write.`
  }
  else {
    result.textContent = `Thanks, your email is ${ok}`;
  }
}

form.addEventListener('submit', (Event) => {
  Event.preventDefault();
  testInfo(email);
});