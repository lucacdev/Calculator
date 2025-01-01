let operation = '';
let hasParentheses = false;

const getLastCharacter = () => {
    return operation.charAt(operation.length - 1);
}

function btn(inputValue) {
    if (inputValue == '(' && hasParentheses == true) {
        inputValue = ')';
        hasParentheses = false;
    };
    if (inputValue == 'Math.sqrt(') {
        hasParentheses = true;
    }
    if (inputValue == '.' && (getLastCharacter() == '' || getLastCharacter() == '+' || getLastCharacter() == '-' || getLastCharacter() == '*' || getLastCharacter() == '/' || getLastCharacter() == '%')) {
        inputValue = '0.';
    };
    var result = document.querySelector(".result");
    result.innerHTML = "";
    var div = document.createElement("div");
    div.innerHTML = (operation + inputValue);
    result.appendChild(div);
    operation += inputValue;
    if (inputValue == '(') {
        hasParentheses = true;
    };
};

function deleteLastCharacter() {
    operation = String(operation);
    if (getLastCharacter() == '(') { hasParentheses = false } else if (getLastCharacter() == ')') { hasParentheses = true };
    operation = operation.slice(0, -1);
    var result = document.querySelector(".result");
    result.innerHTML = "";
    var div = document.createElement("div");
    if (operation == '') {
        div.innerHTML = ('...');
    } else {
        div.innerHTML = (operation);
    }
    result.appendChild(div);
};

function calculateResult() {
    operation = String(operation);

    var result = document.querySelector(".result");
    result.innerHTML = "";
    var div = document.createElement("div");
    var resultado = (eval(operation));
    div.innerHTML = resultado;
    result.appendChild(div);

    operation = resultado;
    operation = String(operation);
};

function c() {
    hasParentheses = false;
    operation = '';
    var result = document.querySelector(".result");
    result.innerHTML = "";
    var div = document.createElement("div");
    div.innerHTML = ('...');
    result.appendChild(div);

}

activateButtons();
function activateButtons() {
    var btns = document.querySelectorAll('.btn');
    for (let i = 0; i < btns.length; i++) {
        var btn = btns[i];
        btn.addEventListener('mouseover', onButtonHover);
        btn.addEventListener('mouseout', onButtonLeave);
        btn.addEventListener('click', onButtonClick);
    };
};

activateDeleteButtons();
function activateDeleteButtons() {
    var dels = document.querySelectorAll('.del');
    for (let i = 0; i < dels.length; i++) {
        var del = dels[i];
        del.addEventListener('mouseover', onDeleteButtonHover);
        del.addEventListener('mouseout', onDeleteButtonLeave);
        del.addEventListener('click', onDeleteButtonClick);
    };
};

activateOperatorButtons();
function activateOperatorButtons() {
    var ops = document.querySelectorAll('.op');
    for (let i = 0; i < ops.length; i++) {
        var op = ops[i];
        op.addEventListener('mouseover', onOperatorHover);
        op.addEventListener('mouseout', onOperatorLeave);
        op.addEventListener('click', onOperatorClick);
    };
};

activateEqualButtons();
function activateEqualButtons() {
    var eqs = document.querySelectorAll('.eq');
    for (let i = 0; i < eqs.length; i++) {
        var eq = eqs[i];
        eq.addEventListener('mouseover', onEqualHover);
        eq.addEventListener('mouseout', onEqualLeave);
        eq.addEventListener('click', onEqualClick);
    };
};

function onButtonHover() {
    this.classList.add('onmouseover');
};

function onButtonLeave() {
    this.classList.remove('onmouseover');
    this.classList.remove('click');
};

function onButtonClick() {
    this.classList.add('click');
};

function onDeleteButtonHover() {
    this.classList.add('onmouseover');
};

function onDeleteButtonLeave() {
    this.classList.remove('onmouseover');
    this.classList.remove('click');
};

function onDeleteButtonClick() {
    this.classList.add('click');
};

function onOperatorHover() {
    this.classList.add('onmouseover');
};

function onOperatorLeave() {
    this.classList.remove('onmouseover');
    this.classList.remove('click');
};

function onOperatorClick() {
    this.classList.add('click');
};

function onEqualHover() {
    this.classList.add('onmouseover');
};

function onEqualLeave() {
    this.classList.remove('onmouseover');
    this.classList.remove('click');
};

function onEqualClick() {
    this.classList.add('click');
};