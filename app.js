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
