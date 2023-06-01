const validationEmail = () => {

const emailInput = document.querySelector('.form-email');

emailInput.addEventListener('input', validateInput);

function validateInput(event) {
  const input = event.target;
  const inputValue = input.value;

  const regex = /^[a-zA-Z0-9@\-_.!~*'`]+$/;

  if (!regex.test(inputValue)) {
    input.value = inputValue.replace(/[^a-zA-Z0-9@\-_.!~*'`]/g, '');
  }
}


};

export default validationEmail;
