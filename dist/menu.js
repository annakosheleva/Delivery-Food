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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0osMERBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EZWxpdmVyeV9Gb29kLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aCBmcm9tIFwiLi9tb2R1bGVzL2F1dGhcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcblxyXG5hdXRoKClcclxubWVudSgpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    const buttonAuth = document.querySelector('.button-auth')\r\n    const modalAuth = document.querySelector('.modal-auth')\r\n    const buttonOut = document.querySelector('.button-out')\r\n    const userName = document.querySelector('.user-name')\r\n    const closeAuth = document.querySelector('.close-auth')\r\n    const logInForm = document.getElementById('logInForm')\r\n    const inputLogin = document.getElementById('login')\r\n    const inputPassword = document.getElementById('password')\r\n\r\n    const login = (user) => {\r\n        buttonAuth.style.display = 'none'\r\n        buttonOut.style.display = 'flex'\r\n        userName.style.display = 'flex'\r\n        userName.textContent = user.login\r\n        modalAuth.style.display = 'none'\r\n    }\r\n\r\n    const logout = () => {\r\n        buttonAuth.style.display = 'flex'\r\n        buttonOut.style.display = 'none'\r\n        userName.style.display = 'none'\r\n        userName.textContent = ''\r\n\r\n        localStorage.removeItem('user')\r\n    }\r\n\r\n\r\n    buttonAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'flex';\r\n    })\r\n\r\n\r\n    closeAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'none';\r\n    })\r\n\r\n\r\n    buttonOut.addEventListener('click', () => {\r\n        logout();\r\n    })\r\n\r\n\r\n    logInForm.addEventListener('submit', (event) => {\r\n        event.preventDefault()\r\n        \r\n        const user = {\r\n            login: inputLogin.value,\r\n            password: inputPassword.value\r\n        }\r\n\r\n        localStorage.setItem('user', JSON.stringify(user))\r\n        login(user);\r\n    })\r\n\r\n\r\n    if (localStorage.getItem('user')) {\r\n        login(JSON.parse(localStorage.getItem('user')));\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EZWxpdmVyeV9Gb29kLy4vc3JjL21vZHVsZXMvYXV0aC5qcz9lN2IxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF1dGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b25BdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1hdXRoJylcclxuICAgIGNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdXRoJylcclxuICAgIGNvbnN0IGJ1dHRvbk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tb3V0JylcclxuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpXHJcbiAgICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXV0aCcpXHJcbiAgICBjb25zdCBsb2dJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nSW5Gb3JtJylcclxuICAgIGNvbnN0IGlucHV0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKVxyXG4gICAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpXHJcblxyXG4gICAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpblxyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJydcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBidXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgY2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgYnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvZ291dCgpO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgICAgICBsb2dpbjogaW5wdXRMb2dpbi52YWx1ZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGlucHV0UGFzc3dvcmQudmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICAgICAgbG9naW4odXNlcik7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xyXG4gICAgICAgIGxvZ2luKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n    const cardsMenu = document.querySelector('.cards-menu')\r\n\r\n    const changeTitle = (restaurant) => {\r\n        const restaurantTitle = document.querySelector('.restaurant-title')\r\n        \r\n        restaurantTitle.textContent = restaurant.name\r\n    }\r\n\r\n    const renderItems = (data) => {\r\n        data.forEach(({ description, id, image, name, price }) => {\r\n            const card = document.createElement('div')\r\n           \r\n            card.classList.add('card')\r\n\r\n            card.innerHTML = `\r\n                <img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n                <div class=\"card-text\">\r\n                    <div class=\"card-heading\">\r\n                        <h3 class=\"card-title card-title-reg\">${name}</h3>\r\n                    </div>\r\n                    <div class=\"card-info\">\r\n                        <div class=\"ingredients\">\r\n                            ${description}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-buttons\">\r\n                        <button class=\"button button-primary button-add-cart\">\r\n                            <span class=\"button-card-text\">В корзину</span>\r\n                            <span class=\"button-cart-svg\"></span>\r\n                        </button>\r\n                        <strong class=\"card-price-bold\">${price} ₽</strong>\r\n                    </div>\r\n                </div>\r\n            `\r\n            cardsMenu.append(card)\r\n        });\r\n    }\r\n\r\n    if (localStorage.getItem('restaurant')) {\r\n        const restaurant = JSON.parse(localStorage.getItem('restaurant'))\r\n\r\n        changeTitle(restaurant)\r\n\r\n        fetch(`./db/${restaurant.products}`)\r\n            .then((response) => response.json())\r\n            .then((data) => {\r\n                renderItems(data);\r\n            })\r\n            .catch((error) => {\r\n                console.log(error);\r\n            })\r\n    } else {\r\n        window.location.href = '/'\r\n    }  \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU0sU0FBUyxLQUFLO0FBQ2hEO0FBQ0E7QUFDQSxnRUFBZ0UsS0FBSztBQUNyRTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsT0FBTztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQkFBb0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EZWxpdmVyeV9Gb29kLy4vc3JjL21vZHVsZXMvbWVudS5qcz8yZmFkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2FyZHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLW1lbnUnKVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gKHJlc3RhdXJhbnQpID0+IHtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGF1cmFudC10aXRsZScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5uYW1lXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoeyBkZXNjcmlwdGlvbiwgaWQsIGltYWdlLCBuYW1lLCBwcmljZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxyXG5cclxuICAgICAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgYWx0PVwiJHtuYW1lfVwiIGNsYXNzPVwiY2FyZC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtcmVnXCI+JHtuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBidXR0b24tYWRkLWNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcmQtdGV4dFwiPtCSINC60L7RgNC30LjQvdGDPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tY2FydC1zdmdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiY2FyZC1wcmljZS1ib2xkXCI+JHtwcmljZX0g4oK9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBjYXJkc01lbnUuYXBwZW5kKGNhcmQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN0YXVyYW50JykpIHtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzdGF1cmFudCcpKVxyXG5cclxuICAgICAgICBjaGFuZ2VUaXRsZShyZXN0YXVyYW50KVxyXG5cclxuICAgICAgICBmZXRjaChgLi9kYi8ke3Jlc3RhdXJhbnQucHJvZHVjdHN9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtcyhkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xyXG4gICAgfSAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;