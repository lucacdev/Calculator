let display = document.getElementById('result');
let currentInput = '';
let currentOperator = '';
let previousInput = '';

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => handleButton(button.dataset.value));
});

function handleButton(value) {
    if (value >= '0' && value <= '9' || value === '.') {
        currentInput += value;
        updateDisplay();
    } else if (value === 'C') {
        clear();
    } else if (value === 'backspace') {
        handleBackspace();
    } else if (value === '=') {
        calculate();
    } else {
        handleOperator(value);
    }
}

function handleOperator(operator) {
    if (currentInput === '' && previousInput === '') return;

    if (currentInput === '') {
        currentOperator = operator;
        return;
    }

    if (previousInput === '') {
        previousInput = currentInput;
        currentInput = '';
        currentOperator = operator;
        updateDisplay();
    } else {
        calculate();
        currentOperator = operator;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculate() {
    if (currentInput === '' || previousInput === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        case '^':
            result = Math.pow(prev, current);
            break;
        case 'sqrt':
            result = Math.sqrt(current);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    currentOperator = '';
    updateDisplay();
}

function clear() {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    updateDisplay();
}

function updateDisplay() {
    let displayValue = '';

    if (previousInput !== '') {
        displayValue += previousInput;
        if (currentOperator !== '') {
            let operatorSymbol = currentOperator;
            switch (currentOperator) {
                case '*': operatorSymbol = '×'; break;
                case '/': operatorSymbol = '÷'; break;
                case 'sqrt': operatorSymbol = '√'; break;
            }
            displayValue += ' ' + operatorSymbol + ' ';
        }
    }

    displayValue += currentInput;
    display.value = displayValue || '0';
}

function handleBackspace() {
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1);
    } else if (currentOperator !== '') {
        currentOperator = '';
        currentInput = previousInput;
        previousInput = '';
    } else if (previousInput !== '') {
        previousInput = previousInput.slice(0, -1);
    }
    updateDisplay();
}
