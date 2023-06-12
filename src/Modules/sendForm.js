const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка'
  const successText = 'Данные отправились! Ожидайте ответа от менеджера!'

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

     console.log("submit");

     sendData(formBody).then((data) => {
       statusBlock.textContent = successText;
       console.log(data);
     });
  }

  try { 
    if(!form) {
      throw new Error('Верните форму на место')
    }
      form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm()
      })
  } catch (error) {
    console.log(error.message);
  }
   
  };


export default sendForm;
