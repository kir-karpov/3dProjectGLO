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

/***/ "./Modules/calc.js":
/*!*************************!*\
  !*** ./Modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 3000) => {\r\n  const calcBlock = document.querySelector('.calc-block');\r\n  const calcType = document.querySelector('.calc-type')\r\n    const calcSquare = document.querySelector('.calc-square')\r\n      const calcCount = document.querySelector('.calc-count')\r\n        const calcDay = document.querySelector('.calc-day')\r\n      const total = document.getElementById('total')\r\n\r\n      const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value\r\n\r\n        let calcCountValue = 1\r\n        let totalValue = 0\r\n        let calcDayValue = 1\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2\r\n        } else if (calcDay.value && calcDay.value < 10){\r\n          calcDayValue = 1.5\r\n        } \r\n\r\n        if (calcCount.value > 1) {\r\n          calcCountValue += +calcCount.value / 10\r\n        }\r\n\r\n          if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue\r\n            * calcDayValue\r\n          } else {\r\n            totalValue = 0\r\n      }\r\n                total.textContent = totalValue\r\n    }\r\n      calcBlock.addEventListener('input', (e) => {\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n          e.target === calcCount || e.target === calcDay) {\r\n        countCalc()\r\n          }\r\n\r\n      })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./Modules/calc.js?");

/***/ }),

/***/ "./Modules/calculator.js":
/*!*******************************!*\
  !*** ./Modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\nconst calcSquareInput = document.querySelector('.calc-square');\r\nconst calcCountInput = document.querySelector('.calc-count');\r\nconst calcDayInput = document.querySelector('.calc-day');\r\nconst calcTypeSelect = document.querySelector('.calc-type');\r\n\r\ncalcSquareInput.addEventListener('input', restrictToNumbers);\r\ncalcCountInput.addEventListener('input', restrictToNumbers);\r\ncalcDayInput.addEventListener('input', restrictToNumbers);\r\n\r\nfunction restrictToNumbers(event) {\r\n  const input = event.target;\r\n  input.value = input.value.replace(/\\D/g, ''); // Удаляем все, кроме цифр\r\n}\r\n\r\ncalcTypeSelect.addEventListener('change', showSelectedOption);\r\n\r\nfunction showSelectedOption() {\r\n  const selectedOption = calcTypeSelect.options[calcTypeSelect.selectedIndex].text;\r\n  console.log(selectedOption);\r\n}\r\n\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\n\n//# sourceURL=webpack:///./Modules/calculator.js?");

/***/ }),

/***/ "./Modules/helperOne.js":
/*!******************************!*\
  !*** ./Modules/helperOne.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./Modules/helpers.js\");\n\r\n\r\n\r\nconst helperOne = () => {\r\n\r\n  const text = \"Это рыбный текст для проверки функции slicer \"\r\n\r\nconsole.log((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.slicer)(text, 20));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helperOne);\r\n\n\n//# sourceURL=webpack:///./Modules/helperOne.js?");

/***/ }),

/***/ "./Modules/helpers.js":
/*!****************************!*\
  !*** ./Modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate),\n/* harmony export */   slicer: () => (/* binding */ slicer)\n/* harmony export */ });\nconst slicer = (str , num) => {\r\n  return str.trim().length > num ?\r\n   str.trim().substring(0,num).trim() + '...' :  \r\n  str.trim() \r\n}\r\n\r\n\r\n    const animate = ({timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./Modules/helpers.js?");

/***/ }),

/***/ "./Modules/menu.js":
/*!*************************!*\
  !*** ./Modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./Modules/helpers.js\");\n\r\n\r\n\r\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menuElement = document.querySelector(\"menu\");\r\n  const closeBtn = menuElement.querySelector(\".close-btn\");\r\n  const menuItems = menuElement.querySelectorAll(\"ul>li>a\");\r\n\r\n(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n  duration: 800,\r\n  timing(timeFraction) {\r\n    return timeFraction;\r\n  },\r\n  \r\n  draw(progress) {\r\n    menuElement.style.width = progress * 50 + '%';\r\n  }\r\n  \r\n});\r\n\r\n  const handleMenu = () => {\r\n    menuElement.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  menuItems.forEach((menuItem) =>\r\n    menuItem.addEventListener(\"click\", handleMenu)\r\n  );\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./Modules/menu.js?");

/***/ }),

/***/ "./Modules/modal.js":
/*!**************************!*\
  !*** ./Modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./Modules/helpers.js\");\n\r\n\r\n\r\nconst modal = () => {\r\n  const modalPopup = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const closeBtn = modalPopup.querySelector(\".popup-close\");\r\n\r\n  const isMobile = window.innerWidth < 768;\r\n\r\n\r\n(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n  duration: 3000,\r\n  timing(timeFraction,) {\r\n    return timeFraction;\r\n  },\r\n  draw(progress) {\r\n    modalPopup.style.width = progress * 300 + '%';\r\n  }\r\n});\r\n\r\n\r\n  const showModal = () => {\r\n    modalPopup.style.display = \"block\";\r\n    if (!isMobile) {\r\n      animateModal(0, 1);\r\n    }\r\n  };\r\n\r\n  const hideModal = () => {\r\n    if (!isMobile) {\r\n      animateModal(1, 0, () => {\r\n        modalPopup.style.display = \"none\";\r\n      });\r\n    } else {\r\n      modalPopup.style.display = \"none\";\r\n    }\r\n  };\r\n\r\n  const animateModal = (start, end, callback) => {\r\n    const duration = 500;\r\n    const startTime = performance.now();\r\n\r\n    const animate = (currentTime) => {\r\n      const elapsedTime = currentTime - startTime;\r\n      const progress = Math.min(elapsedTime / duration, 1);\r\n      const opacity = start + (end - start) * progress;\r\n\r\n      modalPopup.style.opacity = opacity;\r\n\r\n      if (progress < 1) {\r\n        requestAnimationFrame(animate);\r\n      } else {\r\n        if (typeof callback === \"function\") {\r\n          callback();\r\n        }\r\n      }\r\n    };\r\n\r\n    requestAnimationFrame(animate);\r\n  };\r\n\r\n  document.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".popup-btn\")) {\r\n      showModal();\r\n    } else if (e.target === closeBtn || !e.target.closest(\".popup-content\")) {\r\n      hideModal();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./Modules/modal.js?");

/***/ }),

/***/ "./Modules/sendForm.js":
/*!*****************************!*\
  !*** ./Modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = (idForm) => {\r\n  const form = document.getElementById(idForm)\r\n  form.addEventListener('sumbit', (event) => {\r\n\r\n  event.preventDefault()\r\n\r\n    console.log('submit');\r\n})\r\n\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./Modules/sendForm.js?");

/***/ }),

/***/ "./Modules/slider.js":
/*!***************************!*\
  !*** ./Modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector('.portfolio-content');\r\n  const slides = document.querySelectorAll('.portfolio-item');\r\n  const dots = document.querySelectorAll('.dot');\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    if (elems[index]) {\r\n      elems[index].classList.remove(strClass);\r\n    }\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    if (elems[index]) {\r\n      elems[index].classList.add(strClass);\r\n    }\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  };\r\n\r\n  const startSlide = () => {\r\n    interval = setInterval(autoSlide, 2000);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches('.dot, .portfolio-btn')) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++;\r\n    } else if (e.target.matches('#arrow-left')) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains('dot')) {\r\n      currentSlide = Array.from(dots).indexOf(e.target); // Получаем индекс нажатой точки\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  });\r\n\r\n  sliderBlock.addEventListener('mouseenter', (e) => {\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      stopSlide();\r\n    }\r\n  }, true);\r\n\r\n  sliderBlock.addEventListener('mouseleave', (e) => {\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      startSlide();\r\n    }\r\n  }, true);\r\n\r\n  startSlide();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./Modules/slider.js?");

/***/ }),

/***/ "./Modules/tabs.js":
/*!*************************!*\
  !*** ./Modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n\r\n  tabPanel.addEventListener('click' , (e) => {\r\n      if (e.target.closest('.service-header-tab')) {\r\n        const tabBtn = e.target.closest('.service-header-tab')\r\n\r\n        tabs.forEach((tab,index ) => {\r\n          if (tab === tabBtn) {\r\n          tab.classList.add('active')\r\n          tabContent[index].classList.remove('d-none')\r\n          } else {\r\n            tab.classList.remove('active')\r\n            tabContent[index].classList.add('d-none')\r\n\r\n          }\r\n        })\r\n\r\n      }\r\n  })\r\n\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./Modules/tabs.js?");

/***/ }),

/***/ "./Modules/timer.js":
/*!**************************!*\
  !*** ./Modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  console.log(deadline);\r\n  const timeHours = document.getElementById(\"timer-hours\")\r\n  const timeMinutes = document.getElementById(\"timer-minutes\")\r\n  const timeSeconds = document.getElementById(\"timer-seconds\")\r\n\r\n  const getTimeRemaining = () => {\r\n  let dateStop = new Date(deadline).getTime()\r\n  let dateNow = new Date().getTime()\r\n  let timeRemaining = (dateStop - dateNow) / 1000\r\n  let hours = Math.floor(timeRemaining / 60 / 60)\r\n  let minutes = Math.floor((timeRemaining / 60) % 60)\r\n  let seconds = Math.floor(timeRemaining % 60)\r\n\r\n  if (timeRemaining <= 0) {\r\n      hours = \"00\";\r\n      minutes = \"00\";\r\n      seconds = \"00\";\r\n    } else {\r\n\r\n      hours = hours < 10 ? \"0\" + hours : hours;\r\n      minutes = minutes < 10 ? \"0\" + minutes : minutes;\r\n      seconds = seconds < 10 ? \"0\" + seconds : seconds;\r\n    }\r\n    return {\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n      timeRemaining\r\n    }\r\n    \r\n  }\r\n    const updateClock = () => {\r\n      let getTime = getTimeRemaining()\r\n      \r\n  timeHours.textContent = getTime.hours\r\n  timeMinutes.textContent = getTime.minutes\r\n  timeSeconds.textContent = getTime.seconds\r\n      if(getTime.timeRemaining > 0 ) {\r\n        setTimeout (updateClock, 1000)\r\n      }\r\n    }\r\n\r\n  updateClock()\r\n\r\n\r\n  } \r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./Modules/timer.js?");

/***/ }),

/***/ "./Modules/validationEmail.js":
/*!************************************!*\
  !*** ./Modules/validationEmail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validationEmail = () => {\r\n\r\nconst emailInput = document.querySelector('.form-email');\r\n\r\nemailInput.addEventListener('input', validateInput);\r\n\r\nfunction validateInput(event) {\r\n  const input = event.target;\r\n  const inputValue = input.value;\r\n\r\n  const regex = /^[a-zA-Z0-9@\\-_.!~*'`]+$/;\r\n\r\n  if (!regex.test(inputValue)) {\r\n    input.value = inputValue.replace(/[^a-zA-Z0-9@\\-_.!~*'`]/g, '');\r\n  }\r\n}\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationEmail);\r\n\n\n//# sourceURL=webpack:///./Modules/validationEmail.js?");

/***/ }),

/***/ "./Modules/validationForms.js":
/*!************************************!*\
  !*** ./Modules/validationForms.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validationForms = () => {\r\n\r\nconst messageInput = document.querySelector('.mess');\r\n\r\nmessageInput.addEventListener('input', validateInput);\r\n\r\nfunction validateInput(event) {\r\n  const input = event.target;\r\n  const inputValue = input.value;\r\n\r\n  const regex = /^[а-яА-ЯёЁ\\s-]*$/u;\r\n\r\n  if (!regex.test(inputValue)) {\r\n    input.value = inputValue.replace(/[^а-яА-ЯёЁ\\s-]/g, '');\r\n  }\r\n}\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationForms);\r\n\n\n//# sourceURL=webpack:///./Modules/validationForms.js?");

/***/ }),

/***/ "./Modules/validationPhone.js":
/*!************************************!*\
  !*** ./Modules/validationPhone.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validationPhone = () => {\r\nconst phoneInputs = document.querySelectorAll('.form-phone');\r\n\r\nphoneInputs.forEach((input) => {\r\n  input.addEventListener('input', validateInput);\r\n});\r\n\r\nfunction validateInput(event) {\r\n  const input = event.target;\r\n  const inputValue = input.value;\r\n\r\n  const regex = /^[\\d()\\s-]+$/;\r\n\r\n  if (!regex.test(inputValue)) {\r\n    input.value = inputValue.replace(/[^()\\d\\s-]/g, '');\r\n  }\r\n}\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationPhone);\r\n\n\n//# sourceURL=webpack:///./Modules/validationPhone.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/timer */ \"./Modules/timer.js\");\n/* harmony import */ var _Modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/menu */ \"./Modules/menu.js\");\n/* harmony import */ var _Modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/modal */ \"./Modules/modal.js\");\n/* harmony import */ var _Modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/calculator */ \"./Modules/calculator.js\");\n/* harmony import */ var _Modules_validationForms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/validationForms */ \"./Modules/validationForms.js\");\n/* harmony import */ var _Modules_validationEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/validationEmail */ \"./Modules/validationEmail.js\");\n/* harmony import */ var _Modules_validationPhone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/validationPhone */ \"./Modules/validationPhone.js\");\n/* harmony import */ var _Modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/slider */ \"./Modules/slider.js\");\n/* harmony import */ var _Modules_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/tabs */ \"./Modules/tabs.js\");\n/* harmony import */ var _Modules_calc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modules/calc */ \"./Modules/calc.js\");\n/* harmony import */ var _Modules_helperOne__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modules/helperOne */ \"./Modules/helperOne.js\");\n/* harmony import */ var _Modules_sendForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modules/sendForm */ \"./Modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_Modules_sendForm__WEBPACK_IMPORTED_MODULE_11__[\"default\"])('form1');\r\n(0,_Modules_helperOne__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n(0,_Modules_calc__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(3000);\r\n(0,_Modules_validationForms__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_Modules_tabs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_Modules_validationPhone__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_Modules_validationEmail__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_Modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_Modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_Modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"5 june 2023\");\r\n(0,_Modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_Modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

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