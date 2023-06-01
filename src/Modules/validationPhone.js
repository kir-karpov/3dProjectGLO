const validationPhone = () => {
const phoneInputs = document.querySelectorAll('.form-phone');

phoneInputs.forEach((input) => {
  input.addEventListener('input', validateInput);
});

function validateInput(event) {
  const input = event.target;
  const inputValue = input.value;

  const regex = /^[\d()\s-]+$/;

  if (!regex.test(inputValue)) {
    input.value = inputValue.replace(/[^()\d\s-]/g, '');
  }
}


};

export default validationPhone;
