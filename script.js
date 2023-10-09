let x = '0';
let operator = '+';
let y = null;

let result = 0;

let isOperatorPressed = false;
let isEqualing = false;
let isChangingX = false;

const number = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const operators = document.querySelectorAll('.op');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const reset = () => {
  display.textContent = '0';
  x='0';
  operator = '+';
  y=null;
  isOperatorPressed = false;
  isEqualing = false;
  isChangingX = false;
}


number.forEach(each => {
  each.addEventListener('click', () => {
    if (isEqualing || isOperatorPressed || display.textContent === '0'){
      display.textContent = each.firstChild.textContent;
      if (isEqualing) isChangingX = true;
      isEqualing = false;
    }
    else display.textContent += each.firstChild.textContent;
    isOperatorPressed = false;
  });
})


operators.forEach(each => {
  each.addEventListener('click', () => {
    
    if (isEqualing){
      isEqualing = false;
    }
    else if (!isOperatorPressed) {
      y = display.textContent;
      display.textContent = operate(x, operator, y);
    }
    operator = each.textContent;
    x = display.textContent;
    isOperatorPressed = true;
  })
})


equal.addEventListener('click', () => {
  isOperatorPressed = false;

  if (isChangingX){
    x = display.textContent;
    display.textContent = operate(x, operator, y);
    isChangingX = false;
    isEqualing = true;
  }

  else if (y === null){
    isEqualing = false;
  }
  else if (!isEqualing){
    y = display.textContent;
    display.textContent = operate(x, operator, y);
    isEqualing = true;
  }
  // else if (isOperatorPressed){
  //   display.textContent = operate(display.textContent, operator, display.textContent);
  // }
  else {
    display.textContent = operate(display.textContent, operator, y);
  }
});

dot.addEventListener('click', () => {
  if (isOperatorPressed) {
    display.textContent;
  }
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', reset);

const sign = document.querySelector('#sign');
sign.addEventListener('click', () => {
  if (isOperatorPressed){
    display.textContent = display.textContent === '-0' ? '0' : '-0';
  }
  else display.textContent = display.textContent === '0' ? '-0' : -display.textContent;
})




































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
    case "–":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
  }
}

function digitControl(number){
  number = number.toString();
  number = number.slice(number.find('.'));
}



const aMonitor = document.querySelector('#a');
const oMonitor = document.querySelector('#operator');
const bMonitor = document.querySelector('#b');
const eMonitor = document.querySelector('#e');
const operatorPress = document.querySelector('#isOperatorPressed');
window.addEventListener('click', () => {
  aMonitor.textContent = `x = ${x}`;
  oMonitor.textContent = `o = ${operator}`;
  bMonitor.textContent = `y = ${y}`;
  operatorPress.textContent = `isOperatorPressed = ${isOperatorPressed}`;
  eMonitor.textContent = `isEqualing = ${isEqualing}`;

});
window.addEventListener('load', () => {
  aMonitor.textContent = `x = ${x}`;
  oMonitor.textContent = `o = ${operator}`;
  bMonitor.textContent = `y = ${y}`;
  operatorPress.textContent = `isOperatorPressed = ${isOperatorPressed}`;
  eMonitor.textContent = `isEqualing = ${isEqualing}`;
});
