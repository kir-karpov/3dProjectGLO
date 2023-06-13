const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка';
  const successText = 'Данные отправились! Ожидайте ответа от менеджера!';
  let statusTimeout = null;

  const sendData = async (data) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  };

  const hideStatus = () => {
    statusBlock.style.display = 'none';
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    sendData(formBody).then((data) => {
      statusBlock.textContent = successText;

      if (statusTimeout) {
        clearTimeout(statusTimeout);
      }

      console.log(data);

      // Устанавливаем таймер для скрытия сообщения через 5 секунд
      statusTimeout = setTimeout(hideStatus, 5000);
    });
  };

  try {
    if (!form) {
      throw new Error('Верните форму на место');
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
