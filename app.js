const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const remove = document.querySelector('.delete')
const equality = document.querySelector('.equality');
const previousResult = document.querySelector('.previous-operation')
const currentResult = document.querySelector('.current-operation')

const calculator = new Calculator(previousResult, currentResult)
