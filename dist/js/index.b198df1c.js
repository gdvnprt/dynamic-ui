/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slide)
/* harmony export */ });
function slide(element, direction){
    let position = parseInt(element.style.right)
    if (direction === 'prev') {
        if (position > 0) {
            let prevPosition = position - 75
            element.style.right = prevPosition + "vh"
        };
    } else {
        if (isNaN(position)) {
            element.style.right = "75vh";
        } else if (position < 300) {
            let nextPosition = position + 75
            element.style.right = nextPosition + "vh"
        };
    }; 
};



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.js */ "./src/dropdown.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ "./src/slider.js");



const dropMenu = document.querySelector('#nav');
const slides = document.querySelector('#slides');

(0,_dropdown_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dropMenu, "drop-down", "collapsed");

const prevButton = document.querySelector('#previous');
prevButton.addEventListener('click', () => {
    (0,_slider_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slides, 'prev');
});

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', () => {
    (0,_slider_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slides, 'next');
});

let slideDots = document.querySelectorAll('.slide-dot');
let pos = parseInt(slides.style.right);

//if pos is NAN, first dot is larger
if (isNaN(pos)) {
        slideDots[0].classList.add('.large');
        slideDots[1].classList.remove('.large');
} else {
    //if pos = the corresponding number, that slide toggles larger and previoius slide toggles smaller
    if (pos == 75 * i) {
        slideDots[i].classList.add('.large');
        slideDots[i - 1].classList.remove('.large');
        slideDots[i + 1].classList.remove('.large');
    };
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguYjE5OGRmMWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0w7O0FBRWhDO0FBQ0E7O0FBRUEsd0RBQVE7O0FBRVI7QUFDQTtBQUNBLElBQUksc0RBQUs7QUFDVCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLHNEQUFLO0FBQ1QsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVpLy4vc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWkvLi9zcmMvc2xpZGVyLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2R5bmFtaWMtdWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9keW5hbWljLXVpLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyb3Bkb3duKGVsZW1lbnQsIHNlbGVjdG9yT25lLCBzZWxlY3RvclR3byl7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3Rvck9uZSk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3RvclR3byk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdG9yT25lKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoc2VsZWN0b3JUd28pO1xuICAgIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZShlbGVtZW50LCBkaXJlY3Rpb24pe1xuICAgIGxldCBwb3NpdGlvbiA9IHBhcnNlSW50KGVsZW1lbnQuc3R5bGUucmlnaHQpXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGxldCBwcmV2UG9zaXRpb24gPSBwb3NpdGlvbiAtIDc1XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gcHJldlBvc2l0aW9uICsgXCJ2aFwiXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzTmFOKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9IFwiNzV2aFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uIDwgMzAwKSB7XG4gICAgICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gcG9zaXRpb24gKyA3NVxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9IG5leHRQb3NpdGlvbiArIFwidmhcIlxuICAgICAgICB9O1xuICAgIH07IFxufTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bi5qcyc7XG5pbXBvcnQgc2xpZGUgZnJvbSAnLi9zbGlkZXIuanMnO1xuXG5jb25zdCBkcm9wTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYnKTtcbmNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXMnKTtcblxuZHJvcGRvd24oZHJvcE1lbnUsIFwiZHJvcC1kb3duXCIsIFwiY29sbGFwc2VkXCIpO1xuXG5jb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpb3VzJyk7XG5wcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNsaWRlKHNsaWRlcywgJ3ByZXYnKTtcbn0pO1xuXG5jb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHQnKTtcbm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2xpZGUoc2xpZGVzLCAnbmV4dCcpO1xufSk7XG5cbmxldCBzbGlkZURvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUtZG90Jyk7XG5sZXQgcG9zID0gcGFyc2VJbnQoc2xpZGVzLnN0eWxlLnJpZ2h0KTtcblxuLy9pZiBwb3MgaXMgTkFOLCBmaXJzdCBkb3QgaXMgbGFyZ2VyXG5pZiAoaXNOYU4ocG9zKSkge1xuICAgICAgICBzbGlkZURvdHNbMF0uY2xhc3NMaXN0LmFkZCgnLmxhcmdlJyk7XG4gICAgICAgIHNsaWRlRG90c1sxXS5jbGFzc0xpc3QucmVtb3ZlKCcubGFyZ2UnKTtcbn0gZWxzZSB7XG4gICAgLy9pZiBwb3MgPSB0aGUgY29ycmVzcG9uZGluZyBudW1iZXIsIHRoYXQgc2xpZGUgdG9nZ2xlcyBsYXJnZXIgYW5kIHByZXZpb2l1cyBzbGlkZSB0b2dnbGVzIHNtYWxsZXJcbiAgICBpZiAocG9zID09IDc1ICogaSkge1xuICAgICAgICBzbGlkZURvdHNbaV0uY2xhc3NMaXN0LmFkZCgnLmxhcmdlJyk7XG4gICAgICAgIHNsaWRlRG90c1tpIC0gMV0uY2xhc3NMaXN0LnJlbW92ZSgnLmxhcmdlJyk7XG4gICAgICAgIHNsaWRlRG90c1tpICsgMV0uY2xhc3NMaXN0LnJlbW92ZSgnLmxhcmdlJyk7XG4gICAgfTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9