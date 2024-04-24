/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dots.js":
/*!*********************!*\
  !*** ./src/dots.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeDots)
/* harmony export */ });
function changeDots() {
    const slides = document.querySelector('#slides');
    const slideDots = document.querySelectorAll('.slide-dot');
    let slidePos = parseInt(slides.style.right);

    //if pos is NAN, first dot is larger
    if (isNaN(slidePos)) {
            slideDots[0].classList.add('large');
            slideDots[0].classList.remove('small');

            slideDots[1].classList.remove('large');
            slideDots[1].classList.add('small');
    } else {
        //if pos = the corresponding number, that slide toggles larger and previoius slide toggles smaller
        for(let i = 0; i < slideDots.length; i++) {
            if (slidePos == 75 * i) {    
                slideDots.classList.add('small');
                slideDots.classList.remove('large');
                
                slideDots[i].classList.add('large');
            };
        };
    };
};

/***/ }),

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
/* harmony import */ var _dots_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dots.js */ "./src/dots.js");




const dropMenu = document.querySelector('#nav');
const slides = document.querySelector('#slides');


(0,_dots_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

(0,_dropdown_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dropMenu, "drop-down", "collapsed");

const prevButton = document.querySelector('#previous');
prevButton.addEventListener('click', () => {
    (0,_slider_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slides, 'prev');
    (0,_dots_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', () => {
    (0,_slider_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slides, 'next');
    (0,_dots_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguNTNkZjEwZjkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkJlO0FBQ2Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0w7QUFDRzs7QUFFbkM7QUFDQTs7O0FBR0Esb0RBQVU7O0FBRVYsd0RBQVE7O0FBRVI7QUFDQTtBQUNBLElBQUksc0RBQUs7QUFDVCxJQUFJLG9EQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxzREFBSztBQUNULElBQUksb0RBQVU7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11aS8uL3NyYy9kb3RzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWkvLi9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS8uL3NyYy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9keW5hbWljLXVpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keW5hbWljLXVpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2R5bmFtaWMtdWkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlRG90cygpIHtcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGVzJyk7XG4gICAgY29uc3Qgc2xpZGVEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlLWRvdCcpO1xuICAgIGxldCBzbGlkZVBvcyA9IHBhcnNlSW50KHNsaWRlcy5zdHlsZS5yaWdodCk7XG5cbiAgICAvL2lmIHBvcyBpcyBOQU4sIGZpcnN0IGRvdCBpcyBsYXJnZXJcbiAgICBpZiAoaXNOYU4oc2xpZGVQb3MpKSB7XG4gICAgICAgICAgICBzbGlkZURvdHNbMF0uY2xhc3NMaXN0LmFkZCgnbGFyZ2UnKTtcbiAgICAgICAgICAgIHNsaWRlRG90c1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzbWFsbCcpO1xuXG4gICAgICAgICAgICBzbGlkZURvdHNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2UnKTtcbiAgICAgICAgICAgIHNsaWRlRG90c1sxXS5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaWYgcG9zID0gdGhlIGNvcnJlc3BvbmRpbmcgbnVtYmVyLCB0aGF0IHNsaWRlIHRvZ2dsZXMgbGFyZ2VyIGFuZCBwcmV2aW9pdXMgc2xpZGUgdG9nZ2xlcyBzbWFsbGVyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzbGlkZURvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzbGlkZVBvcyA9PSA3NSAqIGkpIHsgICAgXG4gICAgICAgICAgICAgICAgc2xpZGVEb3RzLmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XG4gICAgICAgICAgICAgICAgc2xpZGVEb3RzLmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2xpZGVEb3RzW2ldLmNsYXNzTGlzdC5hZGQoJ2xhcmdlJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyb3Bkb3duKGVsZW1lbnQsIHNlbGVjdG9yT25lLCBzZWxlY3RvclR3byl7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3Rvck9uZSk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3RvclR3byk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdG9yT25lKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoc2VsZWN0b3JUd28pO1xuICAgIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZShlbGVtZW50LCBkaXJlY3Rpb24pe1xuICAgIGxldCBwb3NpdGlvbiA9IHBhcnNlSW50KGVsZW1lbnQuc3R5bGUucmlnaHQpXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGxldCBwcmV2UG9zaXRpb24gPSBwb3NpdGlvbiAtIDc1XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gcHJldlBvc2l0aW9uICsgXCJ2aFwiXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzTmFOKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9IFwiNzV2aFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uIDwgMzAwKSB7XG4gICAgICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gcG9zaXRpb24gKyA3NVxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9IG5leHRQb3NpdGlvbiArIFwidmhcIlxuICAgICAgICB9O1xuICAgIH07IFxufTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bi5qcyc7XG5pbXBvcnQgc2xpZGUgZnJvbSAnLi9zbGlkZXIuanMnO1xuaW1wb3J0IGNoYW5nZURvdHMgZnJvbSAnLi9kb3RzLmpzJztcblxuY29uc3QgZHJvcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2Jyk7XG5jb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGVzJyk7XG5cblxuY2hhbmdlRG90cygpO1xuXG5kcm9wZG93bihkcm9wTWVudSwgXCJkcm9wLWRvd25cIiwgXCJjb2xsYXBzZWRcIik7XG5cbmNvbnN0IHByZXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlvdXMnKTtcbnByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2xpZGUoc2xpZGVzLCAncHJldicpO1xuICAgIGNoYW5nZURvdHMoKTtcbn0pO1xuXG5jb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHQnKTtcbm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2xpZGUoc2xpZGVzLCAnbmV4dCcpO1xuICAgIGNoYW5nZURvdHMoKTtcbn0pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=