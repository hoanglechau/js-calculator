let display = document.getElementById("display");
let num1 = "";
let num2 = "";
let currentNumber1 = "";
let currentNumber2 = "";
let operator = null;
let lastButton = null;
let result = 0;

const addNumber = (num) => {
  if (lastButton === "equal") {
    clearCalc();
  }

  if (operator === null) {
    num1 = currentNumber1;
    num1 += num;
    currentNumber1 = num1;
    display.innerHTML = num1;
  } else {
    num2 = currentNumber2;
    num2 += num;
    currentNumber2 = num2;
    display.innerHTML = num2;
  }
};

const del = () => {
  let temp = display.innerHTML;
  temp = temp.substring(0, temp.length - 1);
  if (operator === null) {
    currentNumber1 = temp;
  } else {
    currentNumber2 = temp;
  }
  display.innerHTML = temp;
};

const add = () => {
  operator = "add";
};

const subtract = () => {
  operator = "subtract";
};

const divide = () => {
  operator = "divide";
};

const multiply = () => {
  operator = "multiply";
};

const equal = () => {
  lastButton = "equal";
  let value1 = parseFloat(currentNumber1);
  let value2 = parseFloat(currentNumber2);
  switch (operator) {
    case "add":
      result = value1 + value2;
      break;
    case "subtract":
      result = value1 - value2;
      break;
    case "divide":
      result = value1 / value2;
      break;
    case "multiply":
      result = value1 * value2;
  }
  display.innerHTML = result;
};

const clearCalc = () => {
  operator = null;
  lastButton = null;
  num1 = "";
  num2 = "";
  currentNumber1 = "";
  currentNumber2 = "";
  display.innerHTML = "";
};
