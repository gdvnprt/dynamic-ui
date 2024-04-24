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
                slideDots[i].classList.add('large');
                slideDots[i - 1].classList.remove('large');
                slideDots[i + 1].classList.remove('large');

                slideDots[i].classList.remove('small');
                slideDots[i - 1].classList.add('small');
                slideDots[i + 1].classList.add('small');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguZDFkOGZhNzcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDTDtBQUNHOztBQUVuQztBQUNBOzs7QUFHQSxvREFBVTs7QUFFVix3REFBUTs7QUFFUjtBQUNBO0FBQ0EsSUFBSSxzREFBSztBQUNULElBQUksb0RBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLHNEQUFLO0FBQ1QsSUFBSSxvREFBVTtBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVpLy4vc3JjL2RvdHMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS8uL3NyYy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLy4vc3JjL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bmFtaWMtdWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2R5bmFtaWMtdWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keW5hbWljLXVpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VEb3RzKCkge1xuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXMnKTtcbiAgICBjb25zdCBzbGlkZURvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUtZG90Jyk7XG4gICAgbGV0IHNsaWRlUG9zID0gcGFyc2VJbnQoc2xpZGVzLnN0eWxlLnJpZ2h0KTtcblxuICAgIC8vaWYgcG9zIGlzIE5BTiwgZmlyc3QgZG90IGlzIGxhcmdlclxuICAgIGlmIChpc05hTihzbGlkZVBvcykpIHtcbiAgICAgICAgICAgIHNsaWRlRG90c1swXS5jbGFzc0xpc3QuYWRkKCdsYXJnZScpO1xuICAgICAgICAgICAgc2xpZGVEb3RzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NtYWxsJyk7XG5cbiAgICAgICAgICAgIHNsaWRlRG90c1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdsYXJnZScpO1xuICAgICAgICAgICAgc2xpZGVEb3RzWzFdLmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy9pZiBwb3MgPSB0aGUgY29ycmVzcG9uZGluZyBudW1iZXIsIHRoYXQgc2xpZGUgdG9nZ2xlcyBsYXJnZXIgYW5kIHByZXZpb2l1cyBzbGlkZSB0b2dnbGVzIHNtYWxsZXJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNsaWRlRG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNsaWRlUG9zID09IDc1ICogaSkge1xuICAgICAgICAgICAgICAgIHNsaWRlRG90c1tpXS5jbGFzc0xpc3QuYWRkKCdsYXJnZScpO1xuICAgICAgICAgICAgICAgIHNsaWRlRG90c1tpIC0gMV0uY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2UnKTtcbiAgICAgICAgICAgICAgICBzbGlkZURvdHNbaSArIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlJyk7XG5cbiAgICAgICAgICAgICAgICBzbGlkZURvdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc21hbGwnKTtcbiAgICAgICAgICAgICAgICBzbGlkZURvdHNbaSAtIDFdLmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XG4gICAgICAgICAgICAgICAgc2xpZGVEb3RzW2kgKyAxXS5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcm9wZG93bihlbGVtZW50LCBzZWxlY3Rvck9uZSwgc2VsZWN0b3JUd28pe1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoc2VsZWN0b3JPbmUpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoc2VsZWN0b3JUd28pO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3Rvck9uZSk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdG9yVHdvKTtcbiAgICB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGUoZWxlbWVudCwgZGlyZWN0aW9uKXtcbiAgICBsZXQgcG9zaXRpb24gPSBwYXJzZUludChlbGVtZW50LnN0eWxlLnJpZ2h0KVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICBpZiAocG9zaXRpb24gPiAwKSB7XG4gICAgICAgICAgICBsZXQgcHJldlBvc2l0aW9uID0gcG9zaXRpb24gLSA3NVxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9IHByZXZQb3NpdGlvbiArIFwidmhcIlxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc05hTihwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSBcIjc1dmhcIjtcbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA8IDMwMCkge1xuICAgICAgICAgICAgbGV0IG5leHRQb3NpdGlvbiA9IHBvc2l0aW9uICsgNzVcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSBuZXh0UG9zaXRpb24gKyBcInZoXCJcbiAgICAgICAgfTtcbiAgICB9OyBcbn07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24uanMnO1xuaW1wb3J0IHNsaWRlIGZyb20gJy4vc2xpZGVyLmpzJztcbmltcG9ydCBjaGFuZ2VEb3RzIGZyb20gJy4vZG90cy5qcyc7XG5cbmNvbnN0IGRyb3BNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpO1xuY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsaWRlcycpO1xuXG5cbmNoYW5nZURvdHMoKTtcblxuZHJvcGRvd24oZHJvcE1lbnUsIFwiZHJvcC1kb3duXCIsIFwiY29sbGFwc2VkXCIpO1xuXG5jb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXZpb3VzJyk7XG5wcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNsaWRlKHNsaWRlcywgJ3ByZXYnKTtcbiAgICBjaGFuZ2VEb3RzKCk7XG59KTtcblxuY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0Jyk7XG5uZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNsaWRlKHNsaWRlcywgJ25leHQnKTtcbiAgICBjaGFuZ2VEb3RzKCk7XG59KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9