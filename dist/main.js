/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_partners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/partners */ \"./src/modules/partners.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_partners__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ1E7QUFDMUM7QUFDQSx5REFBSTtBQUNKLDhEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRGVsaXZlcnlfRm9vZC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gXCIuL21vZHVsZXMvYXV0aFwiO1xyXG5pbXBvcnQgcGFydG5lcnMgZnJvbSBcIi4vbW9kdWxlcy9wYXJ0bmVyc1wiO1xyXG5cclxuYXV0aCgpXHJcbnBhcnRuZXJzKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    const buttonAuth = document.querySelector('.button-auth')\r\n    const modalAuth = document.querySelector('.modal-auth')\r\n    const buttonOut = document.querySelector('.button-out')\r\n    const userName = document.querySelector('.user-name')\r\n    const closeAuth = document.querySelector('.close-auth')\r\n    const logInForm = document.getElementById('logInForm')\r\n    const inputLogin = document.getElementById('login')\r\n    const inputPassword = document.getElementById('password')\r\n\r\n    const login = (user) => {\r\n        buttonAuth.style.display = 'none'\r\n        buttonOut.style.display = 'flex'\r\n        userName.style.display = 'flex'\r\n        userName.textContent = user.login\r\n        modalAuth.style.display = 'none'\r\n    }\r\n\r\n    const logout = () => {\r\n        buttonAuth.style.display = 'flex'\r\n        buttonOut.style.display = 'none'\r\n        userName.style.display = 'none'\r\n        userName.textContent = ''\r\n\r\n        localStorage.removeItem('user')\r\n    }\r\n\r\n\r\n    buttonAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'flex';\r\n    })\r\n\r\n\r\n    closeAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'none';\r\n    })\r\n\r\n\r\n    buttonOut.addEventListener('click', () => {\r\n        logout();\r\n    })\r\n\r\n\r\n    logInForm.addEventListener('submit', (event) => {\r\n        event.preventDefault()\r\n        \r\n        const user = {\r\n            login: inputLogin.value,\r\n            password: inputPassword.value\r\n        }\r\n\r\n        localStorage.setItem('user', JSON.stringify(user))\r\n        login(user);\r\n    })\r\n\r\n\r\n    if (localStorage.getItem('user')) {\r\n        login(JSON.parse(localStorage.getItem('user')));\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EZWxpdmVyeV9Gb29kLy4vc3JjL21vZHVsZXMvYXV0aC5qcz9lN2IxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF1dGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b25BdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1hdXRoJylcclxuICAgIGNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdXRoJylcclxuICAgIGNvbnN0IGJ1dHRvbk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tb3V0JylcclxuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpXHJcbiAgICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXV0aCcpXHJcbiAgICBjb25zdCBsb2dJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nSW5Gb3JtJylcclxuICAgIGNvbnN0IGlucHV0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKVxyXG4gICAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpXHJcblxyXG4gICAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpblxyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJydcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBidXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgY2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgYnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvZ291dCgpO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgICAgICBsb2dpbjogaW5wdXRMb2dpbi52YWx1ZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGlucHV0UGFzc3dvcmQudmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICAgICAgbG9naW4odXNlcik7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xyXG4gICAgICAgIGxvZ2luKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/partners.js":
/*!*********************************!*\
  !*** ./src/modules/partners.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst partners = () => {\r\n    const cardsRestaurants = document.querySelector('.cards-restaurants')\r\n    \r\n    const renderItems = (data) => {\r\n        data.forEach((item) => {\r\n            const { image, kitchen, name, price, products, stars, time_of_delivery } = item\r\n            const a = document.createElement('a')\r\n            \r\n            a.setAttribute('href', '/restaurant.html')\r\n            a.classList.add('card')\r\n            a.classList.add('card-restaurant')\r\n\r\n            a.dataset.products = products\r\n\r\n            a.innerHTML = `\r\n                <img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n                <div class=\"card-text\">\r\n                    <div class=\"card-heading\">\r\n                        <h3 class=\"card-title\">${name}</h3>\r\n                        <span class=\"card-tag tag\">${time_of_delivery} мин</span>\r\n                    </div>\r\n                    <div class=\"card-info\">\r\n                        <div class=\"rating\">\r\n                            ${stars}\r\n                        </div>\r\n                        <div class=\"price\">От ${price} ₽</div>\r\n                        <div class=\"category\">${kitchen}</div>\r\n                    </div>\r\n                </div>\r\n            `\r\n\r\n            a.addEventListener('click', (e) => {\r\n                e.preventDefault()\r\n                localStorage.setItem('restaurant', JSON.stringify(item))\r\n                window.location.href = '/restaurant.html'\r\n            })\r\n\r\n            cardsRestaurants.append(a)\r\n        });\r\n    }\r\n    \r\n    fetch('https://delivery-food-61298-default-rtdb.firebaseio.com/db/partners.json')\r\n        .then((response) => response.json())\r\n        .then((data) => {\r\n            renderItems(data);\r\n        })\r\n        .catch((error) => {\r\n            console.log(error);\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (partners);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9wYXJ0bmVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRUFBaUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU0sU0FBUyxLQUFLO0FBQ2hEO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RCxxREFBcUQsa0JBQWtCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZELGdEQUFnRCxRQUFRO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EZWxpdmVyeV9Gb29kLy4vc3JjL21vZHVsZXMvcGFydG5lcnMuanM/MDg1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXJ0bmVycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhcmRzUmVzdGF1cmFudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtcmVzdGF1cmFudHMnKVxyXG4gICAgXHJcbiAgICBjb25zdCByZW5kZXJJdGVtcyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaW1hZ2UsIGtpdGNoZW4sIG5hbWUsIHByaWNlLCBwcm9kdWN0cywgc3RhcnMsIHRpbWVfb2ZfZGVsaXZlcnkgfSA9IGl0ZW1cclxuICAgICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnL3Jlc3RhdXJhbnQuaHRtbCcpXHJcbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXHJcbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnY2FyZC1yZXN0YXVyYW50JylcclxuXHJcbiAgICAgICAgICAgIGEuZGF0YXNldC5wcm9kdWN0cyA9IHByb2R1Y3RzXHJcblxyXG4gICAgICAgICAgICBhLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCIke25hbWV9XCIgY2xhc3M9XCJjYXJkLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkLXRhZyB0YWdcIj4ke3RpbWVfb2ZfZGVsaXZlcnl9INC80LjQvTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3RhcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2VcIj7QntGCICR7cHJpY2V9IOKCvTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj4ke2tpdGNoZW59PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZXN0YXVyYW50JywgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcmVzdGF1cmFudC5odG1sJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY2FyZHNSZXN0YXVyYW50cy5hcHBlbmQoYSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmV0Y2goJ2h0dHBzOi8vZGVsaXZlcnktZm9vZC02MTI5OC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZGIvcGFydG5lcnMuanNvbicpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmVuZGVySXRlbXMoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXJ0bmVycyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/partners.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;