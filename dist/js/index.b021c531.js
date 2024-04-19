/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css?acaf":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

/* extracted by HTMLBundler CSSLoader */

/***/ }),

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dropdown)
/* harmony export */ });
function dropdown(element, selectorOne, selectorTwo){
    element.addEventListener('mouseover', () => {
        element.classList.toggle(selectorOne);
    });
    element.addEventListener('mouseover', () => {
        element.classList.toggle(selectorTwo);
    });
    element.addEventListener('mouseout', () => {
        element.classList.toggle(selectorOne);
    });
    element.addEventListener('mouseout', () => {
        element.classList.toggle(selectorTwo);
    });
};

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ previous)
/* harmony export */ });
function previous(element, direction){
    let position = parseInt(element.style.right)
    if (direction === 'prev') {
        if (position = 0) {
            let prevPosition = position - 75
            element.style.right = prevPosition + "vh"
        };
    } else {
        if (position <= 375) {
            let nextPosition = position + 75
            element.style.right = nextPosition + "vh"
        };
    }; 
};

/***/ }),

/***/ "./src/img/01.jpg":
/*!************************!*\
  !*** ./src/img/01.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/01.80a66b4f.jpg";

/***/ }),

/***/ "./src/img/02.jpg":
/*!************************!*\
  !*** ./src/img/02.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/02.7fbe1158.jpg";

/***/ }),

/***/ "./src/img/03.jpg":
/*!************************!*\
  !*** ./src/img/03.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/03.acd77533.jpg";

/***/ }),

/***/ "./src/img/04.jpg":
/*!************************!*\
  !*** ./src/img/04.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/04.15d49cfd.jpg";

/***/ }),

/***/ "./src/img/05.jpg":
/*!************************!*\
  !*** ./src/img/05.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/05.88e5da54.jpg";

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.js */ "./src/dropdown.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ "./src/slider.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css?acaf");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_01_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/01.jpg */ "./src/img/01.jpg");
/* harmony import */ var _img_02_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/02.jpg */ "./src/img/02.jpg");
/* harmony import */ var _img_03_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/03.jpg */ "./src/img/03.jpg");
/* harmony import */ var _img_04_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/04.jpg */ "./src/img/04.jpg");
/* harmony import */ var _img_05_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/05.jpg */ "./src/img/05.jpg");










const dropMenu = document.querySelector('#nav');

(0,_dropdown_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dropMenu, "drop-down", "collapsed");
const slides = document.querySelector('#images');

const prevButton = document.querySelector('#previous');
prevButton.addEventListener('click', () => {
    (0,_slider_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slides);
});

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', () => {
    (0,_slider_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slides);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguYjAyMWM1MzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FlO0FBQ2Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQztBQUNEO0FBQ0w7QUFDVjtBQUNlO0FBQ0E7QUFDRTtBQUNEO0FBQ0E7O0FBRXJDOztBQUVBLHdEQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBLElBQUksc0RBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLHNEQUFJO0FBQ1IsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11aS8uL3NyYy9zdHlsZS5jc3M/YWNhZiIsIndlYnBhY2s6Ly9keW5hbWljLXVpLy4vc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWkvLi9zcmMvc2xpZGVyLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9keW5hbWljLXVpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keW5hbWljLXVpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2R5bmFtaWMtdWkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBleHRyYWN0ZWQgYnkgSFRNTEJ1bmRsZXIgQ1NTTG9hZGVyICovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJvcGRvd24oZWxlbWVudCwgc2VsZWN0b3JPbmUsIHNlbGVjdG9yVHdvKXtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdG9yT25lKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdG9yVHdvKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoc2VsZWN0b3JPbmUpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3RvclR3byk7XG4gICAgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZpb3VzKGVsZW1lbnQsIGRpcmVjdGlvbil7XG4gICAgbGV0IHBvc2l0aW9uID0gcGFyc2VJbnQoZWxlbWVudC5zdHlsZS5yaWdodClcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uID0gMCkge1xuICAgICAgICAgICAgbGV0IHByZXZQb3NpdGlvbiA9IHBvc2l0aW9uIC0gNzVcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSBwcmV2UG9zaXRpb24gKyBcInZoXCJcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocG9zaXRpb24gPD0gMzc1KSB7XG4gICAgICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gcG9zaXRpb24gKyA3NVxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9IG5leHRQb3NpdGlvbiArIFwidmhcIlxuICAgICAgICB9O1xuICAgIH07IFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgZHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bi5qcyc7XG5pbXBvcnQgIHByZXZpb3VzIGZyb20gJy4vc2xpZGVyLmpzJztcbmltcG9ydCBuZXh0IGZyb20gJy4vc2xpZGVyLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGltYWdlT25lIGZyb20gJy4vaW1nLzAxLmpwZyc7XG5pbXBvcnQgaW1hZ2VUd28gZnJvbSAnLi9pbWcvMDIuanBnJztcbmltcG9ydCBpbWFnZVRocmVlIGZyb20gJy4vaW1nLzAzLmpwZyc7XG5pbXBvcnQgaW1hZ2VGb3VyIGZyb20gJy4vaW1nLzA0LmpwZyc7XG5pbXBvcnQgaW1hZ2VGaXZlIGZyb20gJy4vaW1nLzA1LmpwZyc7XG5cbmNvbnN0IGRyb3BNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpO1xuXG5kcm9wZG93bihkcm9wTWVudSwgXCJkcm9wLWRvd25cIiwgXCJjb2xsYXBzZWRcIik7XG5jb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJyk7XG5cbmNvbnN0IHByZXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlvdXMnKTtcbnByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJldmlvdXMoc2xpZGVzKTtcbn0pO1xuXG5jb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHQnKTtcbm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV4dChzbGlkZXMpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9