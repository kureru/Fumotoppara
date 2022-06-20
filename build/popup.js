/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup.css":
/*!***********************!*\
  !*** ./src/popup.css ***!
  \***********************/
/***/ (() => {

// extracted by mini-css-extract-plugin

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.css */ "./src/popup.css");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_popup_css__WEBPACK_IMPORTED_MODULE_0__);




(function () {
  const extensionFields =
    ['LastName', 'FirstName', 'phonetic', 'Phone', 'Password',
      'Email', 'MailingPostalcode', 'MailingState', 'MailingCity',
      'MailingStreet', 'EmeRelationship1', 'EmeTell'];

  document.querySelector("#set_reserve").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
      let inputValues = getInputValuesFromForm();

      chrome.scripting.executeScript({
        target: { tabId: activeTabs[0].id },
        function: function (extensionFields, inputValues) {
          extensionFields.forEach(function(name){
            document.querySelector('[name=' + name + ']').value = inputValues['fumotoppara_' + name];
          });

          document.querySelector('[name=ReservationDateE]').value = "2";
          document.querySelector('#carNum_rd2').checked = true;
          document.querySelector('[name=peopleNum1_01]').value = "1";
          document.querySelector('[name=Method1]').value = "1";
        },
        args: [extensionFields, inputValues]
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    let inputValues = JSON.parse(localStorage.getItem('inputValues'));

    extensionFields.forEach(function (name) {
      if (inputValues['fumotoppara_' + name]) {
        document.querySelector('[name=' + name + ']').value = inputValues['fumotoppara_' + name];
      }
    });
  });


  extensionFields.forEach(function (name) {
    console.log(name);
    document.querySelector('[name=' + name + ']').addEventListener("change", function () {
      localStorage.setItem('inputValues', JSON.stringify(getInputValuesFromForm()));
    });
  });

  function getInputValuesFromForm() {
    let inputValues = {};
    extensionFields.forEach(function (name) {
      inputValues['fumotoppara_' + name] = document.querySelector('[name=' + name + ']').value;
    });
    return inputValues;
  }

})();

})();

/******/ })()
;
//# sourceMappingURL=popup.js.map