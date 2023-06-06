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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_validationForms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validationForms */ \"./modules/validationForms.js\");\n/* harmony import */ var _modules_validationEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validationEmail */ \"./modules/validationEmail.js\");\n/* harmony import */ var _modules_validationPhone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validationPhone */ \"./modules/validationPhone.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_validationForms__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_validationPhone__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_validationEmail__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"5 june 2023\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\nconst calcSquareInput = document.querySelector('.calc-square');\r\nconst calcCountInput = document.querySelector('.calc-count');\r\nconst calcDayInput = document.querySelector('.calc-day');\r\nconst calcTypeSelect = document.querySelector('.calc-type');\r\n\r\ncalcSquareInput.addEventListener('input', restrictToNumbers);\r\ncalcCountInput.addEventListener('input', restrictToNumbers);\r\ncalcDayInput.addEventListener('input', restrictToNumbers);\r\n\r\nfunction restrictToNumbers(event) {\r\n  const input = event.target;\r\n  input.value = input.value.replace(/\\D/g, ''); // Удаляем все, кроме цифр\r\n}\r\n\r\ncalcTypeSelect.addEventListener('change', showSelectedOption);\r\n\r\nfunction showSelectedOption() {\r\n  const selectedOption = calcTypeSelect.options[calcTypeSelect.selectedIndex].text;\r\n  console.log(selectedOption);\r\n}\r\n\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuBtn = document.querySelector(\".menu\");\n  const menuElement = document.querySelector(\"menu\");\n  const closeBtn = menuElement.querySelector(\".close-btn\");\n  const menuItems = menuElement.querySelectorAll(\"ul>li>a\");\n\n  const handleMenu = () => {\n    menuElement.classList.toggle(\"active-menu\");\n  };\n\n  menuBtn.addEventListener(\"click\", handleMenu);\n\n  closeBtn.addEventListener(\"click\", handleMenu);\n\n  menuItems.forEach((menuItem) =>\n    menuItem.addEventListener(\"click\", handleMenu)\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const modalPopup = document.querySelector(\".popup\");\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  const closeBtn = modalPopup.querySelector(\".popup-close\");\n\n  const isMobile = window.innerWidth < 768;\n\n  const showModal = () => {\n    modalPopup.style.display = \"block\";\n    if (!isMobile) {\n      animateModal(0, 1);\n    }\n  };\n\n  const hideModal = () => {\n    if (!isMobile) {\n      animateModal(1, 0, () => {\n        modalPopup.style.display = \"none\";\n      });\n    } else {\n      modalPopup.style.display = \"none\";\n    }\n  };\n\n  const animateModal = (start, end, callback) => {\n    const duration = 500;\n    const startTime = performance.now();\n\n    const animate = (currentTime) => {\n      const elapsedTime = currentTime - startTime;\n      const progress = Math.min(elapsedTime / duration, 1);\n      const opacity = start + (end - start) * progress;\n\n      modalPopup.style.opacity = opacity;\n\n      if (progress < 1) {\n        requestAnimationFrame(animate);\n      } else {\n        if (typeof callback === \"function\") {\n          callback();\n        }\n      }\n    };\n\n    requestAnimationFrame(animate);\n  };\n\n  document.addEventListener(\"click\", (e) => {\n    if (e.target.closest(\".popup-btn\")) {\n      showModal();\n    } else if (e.target === closeBtn || !e.target.closest(\".popup-content\")) {\n      hideModal();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n\r\n  const sliderBlock = document.querySelector('.portfolio-content')\r\n  const slides = document.querySelectorAll('.portfolio-item')\r\n  const dots = document.querySelectorAll('.dot')\r\n  let currentSlide = 0 \r\n  let interval\r\n\r\n  for (let i = 0; i < slides.length; i++) {\r\n  const dot = document.createElement('li');\r\n  dot.classList.add('dot');\r\n  sliderBlock.querySelector('.portfolio-dots').appendChild(dot);\r\n}\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass)\r\n\r\n  }\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n  elems[index].classList.add(strClass)\r\n  }\r\n\r\n    function autoSlide() {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n    currentSlide++\r\n\r\n    if (currentSlide >= slides.length) {\r\n    currentSlide = 0\r\n    }\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n    nextSlide(dots, currentSlide, 'dot-active')\r\n  }\r\n\r\n      const startSlide = () => {\r\n        interval = setInterval(autoSlide, 2000)\r\n      }\r\n\r\n      const stopSlide = () => {\r\n        clearInterval(interval)\r\n      }\r\n\r\n      sliderBlock.addEventListener('click' , (e) => {\r\n        e.preventDefault()\r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n          return\r\n        }\r\n\r\n prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n\r\n          if (e.target.matches('#arrow-right')) {\r\n    currentSlide++\r\n\r\n          } else if (e.target.matches('#arrow-left')) {\r\n    currentSlide--\r\n\r\n          } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n              if (e.target == dot ) {\r\n                currentSlide = index\r\n              }\r\n            })\r\n          }\r\n\r\n    if (currentSlide >= slides.length) {\r\n    currentSlide = 0\r\n    }\r\n    if (currentSlide < 0 ) {\r\n    currentSlide = slides.length - 1\r\n    }\r\n\r\n      nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n      nextSlide(dots, currentSlide, 'dot-active')\r\n      })\r\n\r\n\r\n      sliderBlock.addEventListener('mouseenter', (e) => {\r\n      if (e.target.matches('.dot, .portfolio-btn')) {\r\n        stopSlide()\r\n        }\r\n      } , true)\r\n\r\n      sliderBlock.addEventListener('mouseleave', (e) => {\r\n              if (e.target.matches('.dot, .portfolio-btn')) {\r\n                startSlide()\r\n        }\r\n      }, true)\r\n        startSlide()\r\n        slider();\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

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