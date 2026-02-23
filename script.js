// Variables
let firstNumber = "";
let operator = null;
let secondNumber = "";
shouldResetDisplay = false;

// Display
const display = document.getElementById("display")

// Math Functions
function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
	return a * b
};

function divide(a, b) {
	if (b === 0) return "Nice try. Division by 0? 😏";
	return a / b;
};

// Operate Function
function operate(operator, a, b) {
	if (operator === "+") return add(a, b);
  	if (operator === "-") return subtract(a, b);
  	if (operator === "*") return multiply(a, b);
 	if (operator === "/") return divide(a, b);

	if (typeof result === "number") {
    	return Math.round(result * 100000) / 100000; // round to 5 decimals
  }
}

// Digit Button Logic
function appendDigit(digit) {
	if (shouldResetDisplay) {
		clearDisplay();
		shouldResetDisplay = false;
	}

	if (operator === null) {
		firstNumber += digit;
		display.value = firstNumber;
	} else {
		secondNumber += digit;
		display.value = secondNumber;
	}
};

// Operator Button Logic
function setOperator(op) {

  // If no first number, do nothing
  if (firstNumber === "") return;

  // If operator already exists but no second number,
  // just replace the operator (NO evaluation)
  if (operator !== null && secondNumber === "") {
    operator = op;
    return;
  }

  // If we have full equation, evaluate first
  if (operator !== null && secondNumber !== "") {
    calculate();
  }

  operator = op;
}

// Equal Button Logic
function calculate() {
	if (firstNumber === "" || operator === null || secondNumber === "") {
		return;
	}

	let a = Number(firstNumber);
	let b = Number(secondNumber);

	let result = operate(operator, a, b);

	display.value = result;

	// Reset
	firstNumber = result.toString();
	secondNumber = ""
	operator = null;
	shouldResetDisplay = true;
}

function clearDisplay() {
	firstNumber = "";
	operator = null;
	secondNumber = "";
	shouldResetDisplay = false;
	display.value = "";
}