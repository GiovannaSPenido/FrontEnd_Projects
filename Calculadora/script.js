let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function appendToDisplay(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
