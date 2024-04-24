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
            slideDots[0].classList.add('.large');
            slideDots[0].classList.remove('.small');

            slideDots[1].classList.remove('.large');
            slideDots[1].classList.add('.small');
    } else {
        //if pos = the corresponding number, that slide toggles larger and previoius slide toggles smaller
        for(let i = 0; i < slideDots.length; i++) {
            if (slidePos == 75 * i) {
                slideDots[i].classList.add('.large');
                slideDots[i - 1].classList.remove('.large');
                slideDots[i + 1].classList.remove('.large');

                slideDots[i].classList.remove('.small');
                slideDots[i - 1].classList.add('.small');
                slideDots[i + 1].classList.add('.small');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguY2ZmZDE4ODkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDTDtBQUNHOztBQUVuQztBQUNBOzs7QUFHQSxvREFBVTs7QUFFVix3REFBUTs7QUFFUjtBQUNBO0FBQ0EsSUFBSSxzREFBSztBQUNULElBQUksb0RBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLHNEQUFLO0FBQ1QsSUFBSSxvREFBVTtBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVpLy4vc3JjL2RvdHMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS8uL3NyYy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLy4vc3JjL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bmFtaWMtdWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2R5bmFtaWMtdWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keW5hbWljLXVpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VEb3RzKCkge1xuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXMnKTtcbiAgICBjb25zdCBzbGlkZURvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUtZG90Jyk7XG4gICAgbGV0IHNsaWRlUG9zID0gcGFyc2VJbnQoc2xpZGVzLnN0eWxlLnJpZ2h0KTtcblxuICAgIC8vaWYgcG9zIGlzIE5BTiwgZmlyc3QgZG90IGlzIGxhcmdlclxuICAgIGlmIChpc05hTihzbGlkZVBvcykpIHtcbiAgICAgICAgICAgIHNsaWRlRG90c1swXS5jbGFzc0xpc3QuYWRkKCcubGFyZ2UnKTtcbiAgICAgICAgICAgIHNsaWRlRG90c1swXS5jbGFzc0xpc3QucmVtb3ZlKCcuc21hbGwnKTtcblxuICAgICAgICAgICAgc2xpZGVEb3RzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJy5sYXJnZScpO1xuICAgICAgICAgICAgc2xpZGVEb3RzWzFdLmNsYXNzTGlzdC5hZGQoJy5zbWFsbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaWYgcG9zID0gdGhlIGNvcnJlc3BvbmRpbmcgbnVtYmVyLCB0aGF0IHNsaWRlIHRvZ2dsZXMgbGFyZ2VyIGFuZCBwcmV2aW9pdXMgc2xpZGUgdG9nZ2xlcyBzbWFsbGVyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzbGlkZURvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzbGlkZVBvcyA9PSA3NSAqIGkpIHtcbiAgICAgICAgICAgICAgICBzbGlkZURvdHNbaV0uY2xhc3NMaXN0LmFkZCgnLmxhcmdlJyk7XG4gICAgICAgICAgICAgICAgc2xpZGVEb3RzW2kgLSAxXS5jbGFzc0xpc3QucmVtb3ZlKCcubGFyZ2UnKTtcbiAgICAgICAgICAgICAgICBzbGlkZURvdHNbaSArIDFdLmNsYXNzTGlzdC5yZW1vdmUoJy5sYXJnZScpO1xuXG4gICAgICAgICAgICAgICAgc2xpZGVEb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJy5zbWFsbCcpO1xuICAgICAgICAgICAgICAgIHNsaWRlRG90c1tpIC0gMV0uY2xhc3NMaXN0LmFkZCgnLnNtYWxsJyk7XG4gICAgICAgICAgICAgICAgc2xpZGVEb3RzW2kgKyAxXS5jbGFzc0xpc3QuYWRkKCcuc21hbGwnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJvcGRvd24oZWxlbWVudCwgc2VsZWN0b3JPbmUsIHNlbGVjdG9yVHdvKXtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdG9yT25lKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdG9yVHdvKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoc2VsZWN0b3JPbmUpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3RvclR3byk7XG4gICAgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlKGVsZW1lbnQsIGRpcmVjdGlvbil7XG4gICAgbGV0IHBvc2l0aW9uID0gcGFyc2VJbnQoZWxlbWVudC5zdHlsZS5yaWdodClcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uID4gMCkge1xuICAgICAgICAgICAgbGV0IHByZXZQb3NpdGlvbiA9IHBvc2l0aW9uIC0gNzVcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSBwcmV2UG9zaXRpb24gKyBcInZoXCJcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNOYU4ocG9zaXRpb24pKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gXCI3NXZoXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPCAzMDApIHtcbiAgICAgICAgICAgIGxldCBuZXh0UG9zaXRpb24gPSBwb3NpdGlvbiArIDc1XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gbmV4dFBvc2l0aW9uICsgXCJ2aFwiXG4gICAgICAgIH07XG4gICAgfTsgXG59O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkcm9wZG93biBmcm9tICcuL2Ryb3Bkb3duLmpzJztcbmltcG9ydCBzbGlkZSBmcm9tICcuL3NsaWRlci5qcyc7XG5pbXBvcnQgY2hhbmdlRG90cyBmcm9tICcuL2RvdHMuanMnO1xuXG5jb25zdCBkcm9wTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYnKTtcbmNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXMnKTtcblxuXG5jaGFuZ2VEb3RzKCk7XG5cbmRyb3Bkb3duKGRyb3BNZW51LCBcImRyb3AtZG93blwiLCBcImNvbGxhcHNlZFwiKTtcblxuY29uc3QgcHJldkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aW91cycpO1xucHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzbGlkZShzbGlkZXMsICdwcmV2Jyk7XG4gICAgY2hhbmdlRG90cygpO1xufSk7XG5cbmNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV4dCcpO1xubmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzbGlkZShzbGlkZXMsICduZXh0Jyk7XG4gICAgY2hhbmdlRG90cygpO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==