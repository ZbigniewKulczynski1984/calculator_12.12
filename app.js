const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const remove = document.querySelector('.delete');
const equality = document.querySelector('.equality');
const previousResult = document.querySelector('.previous-operation');
const currentResult = document.querySelector('.current-operation');

const calculator = new Calculator(previousResult, currentResult);

numbers.forEach((number) => {
	number.addEventListener('click', () => {
		calculator.addNumber(number.innerText);
		calculator.updateResult();
	});
});

operators.forEach((operator) => {
	operator.addEventListener('click', () => {
		calculator.chooseOperation(operator.innerText);
		calculator.updateResult();
	});
});

equality.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateResult();
  })
  
  remove.addEventListener('click', () => {
    calculator.deleteNumber();
    calculator.updateResult();
  })
  
  clear.addEventListener('click', () => {
    calculator.clearResult();
    calculator.updateResult();
  })

  class Calculator {
    constructor(previousResult, currentResult) {
      this.previousResult = previousResult
      this.currentResult = currentResult
      this.clearResult()
    }
    clearResult = () => {
      this.currentOperation = "";
      this.operation = undefined;
      this.previousOperation = "";
    }
  
    addNumber = (number) => {
        if (number === "•") {
          if (this.currentOperation.includes(".")) {
            return;
          }
    
          number = ".";
        }
        this.currentOperation = this.currentOperation.toString() + number.toString();
      };

      