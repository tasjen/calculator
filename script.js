let x = '0';
let operator = '+';
let y = null;

let isOperatorPressed = false;
let isEqualing = false;

const number = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const operators = document.querySelectorAll('.op');



number.forEach(each => {
  each.addEventListener('click', () => {
    if (isOperatorPressed || display.textContent === '0'){
      display.textContent = each.firstChild.textContent;
    }
    else display.textContent += each.firstChild.textContent;
    
    isOperatorPressed = false;
  });
})


operators.forEach(each => {
  each.addEventListener('click', () => {
    
    if (isEqualing){
      x = display.textContent;
      isEqualing = false;
      operator = each.textContent;
      isOperatorPressed = true;
      return;
    }
    if (isOperatorPressed){
      operator = each.textContent;
      return;
    }
    else {
      y = display.textContent;
      display.textContent = operate(x, operator, y);
      operator = each.textContent;
    }
    x = display.textContent;
    isOperatorPressed = true;


  })
})


const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
  isOperatorPressed = false;
  if (y === null){
    isEqualing = false;
    return;
  }
  if (!isEqualing){
    y = display.textContent;
    display.textContent = operate(x, operator, y);
    isEqualing = true;
  }
  else if (isOperatorPressed){
    display.textContent = operate(display.textContent, operator, display.textContent);
  }
  else {
    display.textContent = operate(display.textContent, operator, y);
  }
});










const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  display.textContent = '0';
  x='0';
  operator = '+';
  y=null;
  isOperatorPressed = false;
  isEqualing = false;
});

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
      return Math.round(add(a, b) * 10 ** 8) / 10**8;
    case "–":
      return Math.round(subtract(a, b) * 10 ** 8) / 10**8;
    case "x":
      return Math.round(multiply(a, b) * 10 ** 8) / 10**8;
    case "÷":
      return Math.round(divide(a, b) * 10 ** 8) / 10**8;
  }
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
