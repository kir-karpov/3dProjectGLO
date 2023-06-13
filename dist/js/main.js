/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Modules/sendForm.js":
/*!*****************************!*\
  !*** ./Modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\n  const form = document.getElementById(formId);\n  const statusBlock = document.createElement('div')\n  const loadText = 'Загрузка'\n  const successText = 'Данные отправились! Ожидайте ответа от менеджера!'\n\n  const sendData = async (data) => {\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n      method: \"POST\",\n      body: JSON.stringify(data),\n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n    });\n    return await res.json();\n  };\n\n  const submitForm = () => {\n     const formData = new FormData(form);\n     const formBody = {};\n\n     statusBlock.textContent = loadText;\n     form.append(statusBlock);\n\n     formData.forEach((val, key) => {\n       formBody[key] = val;\n     });\n\n     someElem.forEach((elem) => {\n       const element = document.getElementById(elem.id);\n\n       if (elem.type === \"block\") {\n         formBody[elem.id] = element.textContent;\n       } else if (elem.type === \"input\") {\n         formBody[elem.id] = element.value;\n       }\n     });\n\n     console.log(\"submit\");\n\n     sendData(formBody).then((data) => {\n       statusBlock.textContent = successText;\n       console.log(data);\n     });\n  }\n\n  try { \n    if(!form) {\n      throw new Error('Верните форму на место')\n    }\n      form.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    submitForm()\n      })\n  } catch (error) {\n    console.log(error.message);\n  }\n   \n  };\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n\n//# sourceURL=webpack:///./Modules/sendForm.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _Modules_sendForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/sendForm */ \"./Modules/sendForm.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_validationForms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validationForms */ \"./modules/validationForms.js\");\n/* harmony import */ var _modules_validationEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validationEmail */ \"./modules/validationEmail.js\");\n/* harmony import */ var _modules_validationPhone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/validationPhone */ \"./modules/validationPhone.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/maskPhone */ \"./modules/maskPhone.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_helperOne__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/helperOne */ \"./modules/helperOne.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_Modules_sendForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({formId:'form1', someElem: [{type:'block',id:'total' }] });\r\n(0,_modules_helperOne__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\r\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(3000);\r\n(0,_modules_validationForms__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_validationPhone__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_validationEmail__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"5 june 2023\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 3000) => {\r\n  const calcBlock = document.querySelector('.calc-block');\r\n  const calcType = document.querySelector('.calc-type')\r\n    const calcSquare = document.querySelector('.calc-square')\r\n      const calcCount = document.querySelector('.calc-count')\r\n        const calcDay = document.querySelector('.calc-day')\r\n      const total = document.getElementById('total')\r\n\r\n      const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value\r\n\r\n        let calcCountValue = 1\r\n        let totalValue = 0\r\n        let calcDayValue = 1\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2\r\n        } else if (calcDay.value && calcDay.value < 10){\r\n          calcDayValue = 1.5\r\n        } \r\n\r\n        if (calcCount.value > 1) {\r\n          calcCountValue += +calcCount.value / 10\r\n        }\r\n\r\n          if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue\r\n            * calcDayValue\r\n          } else {\r\n            totalValue = 0\r\n      }\r\n                total.textContent = totalValue\r\n    }\r\n      calcBlock.addEventListener('input', (e) => {\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n          e.target === calcCount || e.target === calcDay) {\r\n        countCalc()\r\n          }\r\n\r\n      })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\nconst calcSquareInput = document.querySelector('.calc-square');\r\nconst calcCountInput = document.querySelector('.calc-count');\r\nconst calcDayInput = document.querySelector('.calc-day');\r\nconst calcTypeSelect = document.querySelector('.calc-type');\r\n\r\ncalcSquareInput.addEventListener('input', restrictToNumbers);\r\ncalcCountInput.addEventListener('input', restrictToNumbers);\r\ncalcDayInput.addEventListener('input', restrictToNumbers);\r\n\r\nfunction restrictToNumbers(event) {\r\n  const input = event.target;\r\n  input.value = input.value.replace(/\\D/g, ''); // Удаляем все, кроме цифр\r\n}\r\n\r\ncalcTypeSelect.addEventListener('change', showSelectedOption);\r\n\r\nfunction showSelectedOption() {\r\n  const selectedOption = calcTypeSelect.options[calcTypeSelect.selectedIndex].text;\r\n  console.log(selectedOption);\r\n}\r\n\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/helperOne.js":
/*!******************************!*\
  !*** ./modules/helperOne.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\nconst helperOne = () => {\r\n\r\n  const text = \"Это рыбный текст для проверки функции slicer \"\r\n\r\nconsole.log((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.slicer)(text, 20));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helperOne);\r\n\n\n//# sourceURL=webpack:///./modules/helperOne.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate),\n/* harmony export */   slicer: () => (/* binding */ slicer)\n/* harmony export */ });\nconst slicer = (str , num) => {\r\n  return str.trim().length > num ?\r\n   str.trim().substring(0,num).trim() + '...' :  \r\n  str.trim() \r\n}\r\n\r\n\r\n    const animate = ({timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/maskPhone.js":
/*!******************************!*\
  !*** ./modules/maskPhone.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskPhone = () => {\n  /* Создаем префикс +7, даже если вводят 8 или 9 */\n  const prefixNumber = (str) => {\n    /* если вводят семерку, добавляем ей скобку */\n    if (str === \"7\") {\n      return \"7 (\";\n    }\n    /* если вводят восьмерку, ставим вместо нее +7 ( */\n    if (str === \"8\") {\n      return \"+7 (\";\n    }\n    /* если пишут девятку, заменяем на +7 (9  */\n    if (str === \"9\") {\n      return \"7 (9\";\n    }\n    /* в других случаях просто 7 (  */\n    return \"7 (\";\n  }; /* профикс в любом раскладе будет +7 () */\n\n  /* Ловим события ввода в любом поле */\n  document.addEventListener(\"input\", (e) => {\n    /* Проверяем, что это поле имеет класс phone-mask */\n    if (e.target.classList.contains(\"phone-mask\")) {\n      /* поле с телефоном помещаем в переменную input */\n      const input = e.target;\n      /* вставляем плюс в начале номера */\n      const value = input.value.replace(/\\D+/g, \"\");\n      /* длинна номера 11 символов */\n      const numberLength = 11;\n\n      /* Создаем переменную, куда будем записывать номер */\n      let result;\n      /* Если пользователь ввел 8... */\n      if (input.value.includes(\"+8\") || input.value[0] === \"8\") {\n        /* Стираем восьмерку */\n        result = \"\";\n      } else {\n        /* Оставляем плюсик в поле */\n        result = \"+\";\n      }\n\n      /* Запускаем цикл, где переберем каждую цифру от 0 до 11 */\n      for (let i = 0; i < value.length && i < numberLength; i++) {\n        switch (i) {\n          case 0:\n            /* в самом начале ставим префикс +7 ( */\n            result += prefixNumber(value[i]);\n            continue;\n          case 4:\n            /* добавляем после \"+7 (\" круглую скобку \")\" */\n            result += \") \";\n            break;\n          case 7:\n            /* дефис после 7 символа */\n            result += \"-\";\n            break;\n          case 9:\n            /* еще дефис  */\n            result += \"-\";\n            break;\n          default:\n            break;\n        }\n        /* на каждом шаге цикла добавляем новую цифру к номеру */\n        result += value[i];\n      }\n      /* итог: номер в формате +7 (999) 123-45-67 */\n      input.value = result;\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack:///./modules/maskPhone.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\n\nconst menu = () => {\n  const menuBtn = document.querySelector(\".menu\");\n  const menuElement = document.querySelector(\"menu\");\n  const closeBtn = menuElement.querySelector(\".close-btn\");\n  const menuItems = menuElement.querySelectorAll(\"ul>li>a\");\n\n(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n  duration: 800,\n  timing(timeFraction) {\n    return timeFraction;\n  },\n  \n  draw(progress) {\n    menuElement.style.width = progress * 50 + '%';\n  }\n  \n});\n\n  const handleMenu = () => {\n    menuElement.classList.toggle(\"active-menu\");\n  };\n\n  menuBtn.addEventListener(\"click\", handleMenu);\n\n  closeBtn.addEventListener(\"click\", handleMenu);\n\n  menuItems.forEach((menuItem) =>\n    menuItem.addEventListener(\"click\", handleMenu)\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\n\nconst modal = () => {\n  const modalPopup = document.querySelector(\".popup\");\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  const closeBtn = modalPopup.querySelector(\".popup-close\");\n\n  const isMobile = window.innerWidth < 768;\n\n\n(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n  duration: 3000,\n  timing(timeFraction,) {\n    return timeFraction;\n  },\n  draw(progress) {\n    modalPopup.style.width = progress * 300 + '%';\n  }\n});\n\n\n  const showModal = () => {\n    modalPopup.style.display = \"block\";\n    if (!isMobile) {\n      animateModal(0, 1);\n    }\n  };\n\n  const hideModal = () => {\n    if (!isMobile) {\n      animateModal(1, 0, () => {\n        modalPopup.style.display = \"none\";\n      });\n    } else {\n      modalPopup.style.display = \"none\";\n    }\n  };\n\n  const animateModal = (start, end, callback) => {\n    const duration = 500;\n    const startTime = performance.now();\n\n    const animate = (currentTime) => {\n      const elapsedTime = currentTime - startTime;\n      const progress = Math.min(elapsedTime / duration, 1);\n      const opacity = start + (end - start) * progress;\n\n      modalPopup.style.opacity = opacity;\n\n      if (progress < 1) {\n        requestAnimationFrame(animate);\n      } else {\n        if (typeof callback === \"function\") {\n          callback();\n        }\n      }\n    };\n\n    requestAnimationFrame(animate);\n  };\n\n  document.addEventListener(\"click\", (e) => {\n    if (e.target.closest(\".popup-btn\")) {\n      showModal();\n    } else if (e.target === closeBtn || !e.target.closest(\".popup-content\")) {\n      hideModal();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector('.portfolio-content');\r\n  const slides = document.querySelectorAll('.portfolio-item');\r\n  const dots = document.querySelectorAll('.dot');\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    if (elems[index]) {\r\n      elems[index].classList.remove(strClass);\r\n    }\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    if (elems[index]) {\r\n      elems[index].classList.add(strClass);\r\n    }\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  };\r\n\r\n  const startSlide = () => {\r\n    interval = setInterval(autoSlide, 2000);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches('.dot, .portfolio-btn')) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++;\r\n    } else if (e.target.matches('#arrow-left')) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains('dot')) {\r\n      currentSlide = Array.from(dots).indexOf(e.target); // Получаем индекс нажатой точки\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  });\r\n\r\n  sliderBlock.addEventListener('mouseenter', (e) => {\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      stopSlide();\r\n    }\r\n  }, true);\r\n\r\n  sliderBlock.addEventListener('mouseleave', (e) => {\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      startSlide();\r\n    }\r\n  }, true);\r\n\r\n  startSlide();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n\r\n  tabPanel.addEventListener('click' , (e) => {\r\n      if (e.target.closest('.service-header-tab')) {\r\n        const tabBtn = e.target.closest('.service-header-tab')\r\n\r\n        tabs.forEach((tab,index ) => {\r\n          if (tab === tabBtn) {\r\n          tab.classList.add('active')\r\n          tabContent[index].classList.remove('d-none')\r\n          } else {\r\n            tab.classList.remove('active')\r\n            tabContent[index].classList.add('d-none')\r\n\r\n          }\r\n        })\r\n\r\n      }\r\n  })\r\n\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  console.log(deadline);\r\n  const timeHours = document.getElementById(\"timer-hours\")\r\n  const timeMinutes = document.getElementById(\"timer-minutes\")\r\n  const timeSeconds = document.getElementById(\"timer-seconds\")\r\n\r\n  const getTimeRemaining = () => {\r\n  let dateStop = new Date(deadline).getTime()\r\n  let dateNow = new Date().getTime()\r\n  let timeRemaining = (dateStop - dateNow) / 1000\r\n  let hours = Math.floor(timeRemaining / 60 / 60)\r\n  let minutes = Math.floor((timeRemaining / 60) % 60)\r\n  let seconds = Math.floor(timeRemaining % 60)\r\n\r\n  if (timeRemaining <= 0) {\r\n      hours = \"00\";\r\n      minutes = \"00\";\r\n      seconds = \"00\";\r\n    } else {\r\n\r\n      hours = hours < 10 ? \"0\" + hours : hours;\r\n      minutes = minutes < 10 ? \"0\" + minutes : minutes;\r\n      seconds = seconds < 10 ? \"0\" + seconds : seconds;\r\n    }\r\n    return {\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n      timeRemaining\r\n    }\r\n    \r\n  }\r\n    const updateClock = () => {\r\n      let getTime = getTimeRemaining()\r\n      \r\n  timeHours.textContent = getTime.hours\r\n  timeMinutes.textContent = getTime.minutes\r\n  timeSeconds.textContent = getTime.seconds\r\n      if(getTime.timeRemaining > 0 ) {\r\n        setTimeout (updateClock, 1000)\r\n      }\r\n    }\r\n\r\n  updateClock()\r\n\r\n\r\n  } \r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validationEmail.js":
/*!************************************!*\
  !*** ./modules/validationEmail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validationEmail = () => {\r\n\r\nconst emailInput = document.querySelector('.form-email');\r\n\r\nemailInput.addEventListener('input', validateInput);\r\n\r\nfunction validateInput(event) {\r\n  const input = event.target;\r\n  const inputValue = input.value;\r\n\r\n  const regex = /^[a-zA-Z0-9@\\-_.!~*'`]+$/;\r\n\r\n  if (!regex.test(inputValue)) {\r\n    input.value = inputValue.replace(/[^a-zA-Z0-9@\\-_.!~*'`]/g, '');\r\n  }\r\n}\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationEmail);\r\n\n\n//# sourceURL=webpack:///./modules/validationEmail.js?");

/***/ }),

/***/ "./modules/validationForms.js":
/*!************************************!*\
  !*** ./modules/validationForms.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validationForms = () => {\r\n\r\nconst messageInput = document.querySelector('.mess');\r\n\r\nmessageInput.addEventListener('input', validateInput);\r\n\r\nfunction validateInput(event) {\r\n  const input = event.target;\r\n  const inputValue = input.value;\r\n\r\n  const regex = /^[а-яА-ЯёЁ\\s-]*$/u;\r\n\r\n  if (!regex.test(inputValue)) {\r\n    input.value = inputValue.replace(/[^а-яА-ЯёЁ\\s-]/g, '');\r\n  }\r\n}\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationForms);\r\n\n\n//# sourceURL=webpack:///./modules/validationForms.js?");

/***/ }),

/***/ "./modules/validationPhone.js":
/*!************************************!*\
  !*** ./modules/validationPhone.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validationPhone = () => {\r\nconst phoneInputs = document.querySelectorAll('.form-phone');\r\n\r\nphoneInputs.forEach((input) => {\r\n  input.addEventListener('input', validateInput);\r\n});\r\n\r\nfunction validateInput(event) {\r\n  const input = event.target;\r\n  const inputValue = input.value;\r\n\r\n  const regex = /^[\\d()\\s-]+$/;\r\n\r\n  if (!regex.test(inputValue)) {\r\n    input.value = inputValue.replace(/[^()\\d\\s-]/g, '');\r\n  }\r\n}\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationPhone);\r\n\n\n//# sourceURL=webpack:///./modules/validationPhone.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;