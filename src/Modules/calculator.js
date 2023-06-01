const calculator = () => {
const calcSquareInput = document.querySelector('.calc-square');
const calcCountInput = document.querySelector('.calc-count');
const calcDayInput = document.querySelector('.calc-day');
const calcTypeSelect = document.querySelector('.calc-type');

calcSquareInput.addEventListener('input', restrictToNumbers);
calcCountInput.addEventListener('input', restrictToNumbers);
calcDayInput.addEventListener('input', restrictToNumbers);

function restrictToNumbers(event) {
  const input = event.target;
  input.value = input.value.replace(/\D/g, ''); // Удаляем все, кроме цифр
}

calcTypeSelect.addEventListener('change', showSelectedOption);

function showSelectedOption() {
  const selectedOption = calcTypeSelect.options[calcTypeSelect.selectedIndex].text;
  console.log(selectedOption);
}



};

export default calculator;
