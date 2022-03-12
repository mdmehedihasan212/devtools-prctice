const form = document.querySelector('#form');
const input = document.querySelector('#phone');
const result = document.querySelector('#output');

const re = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;

function testInfo(phoneInput) {
    const ok = re.test(phoneInput.value);
    console.log(ok);

    if (ok) {
        result.textContent = `Thanks, your phone number is ${ok[0]}`;

    }
    else {
        result.textContent = `${phoneInput.value} isn't a phone number with area code!`;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    testInfo(input);
});