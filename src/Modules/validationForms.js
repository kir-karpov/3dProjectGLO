const validationForms = () => {

const messageInput = document.querySelector('.mess');

messageInput.addEventListener('input', validateInput);

function validateInput(event) {
  const input = event.target;
  const inputValue = input.value;

  const regex = /^[а-яА-ЯёЁ\s-]*$/u;

  if (!regex.test(inputValue)) {
    input.value = inputValue.replace(/[^а-яА-ЯёЁ\s-]/g, '');
  }
}


};

export default validationForms;
