let a = 0;
let operator = '';
let b = null;

let isAC = true;
let isOperatorPressed = false;

window.addEventListener('mousedown', (event) => {
  event.preventDefault();
  aMonitor.textContent = `a = ${a}`;
  oMonitor.textContent = `o = ${operator}`;
  bMonitor.textContent = `b = ${b}`;
});
const number = document.querySelectorAll('.number');
const display = document.querySelector('#display');
number.forEach(each => {
  each.addEventListener('click', () => {
    if (isOperatorPressed || display.textContent === '0'){
      display.textContent = each.firstChild.textContent;
    }
    else {
      display.textContent += each.firstChild.textContent;
    }
    isOperatorPressed = false;
  });
})

const operators = document.querySelectorAll('.operator');
operators.forEach(each => {
  each.addEventListener('click', () => {
    a = +display.textContent;
    operator = each.textContent;
    isOperatorPressed = true;
    if (each.textContent === '÷') operator = '/';
  })
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
  display.textContent=''+operate(a, operator, b);
});


const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  if (isAC)
  display.textContent = '0';
});
const AC = document.querySelector('#AC');










const aMonitor = document.querySelector('#a');
const oMonitor = document.querySelector('#operator');
const bMonitor = document.querySelector('#b');


window.addEventListener('load', () => {
  aMonitor.textContent = `a = ${a}`;
  oMonitor.textContent = `o = ${operator}`;
  bMonitor.textContent = `b = ${b}`;
});



























function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(a, b) {
  return +a * +b;
}

function divide(a, b) {
  return +a / +b;
}

function operate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}
