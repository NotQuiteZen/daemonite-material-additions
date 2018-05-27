/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/dev.js":
/*!********************!*\
  !*** ./dev/dev.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_daemonite_material_additions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/daemonite-material-additions */ "./lib/daemonite-material-additions.js");
/* harmony import */ var _lib_daemonite_material_additions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_daemonite_material_additions__WEBPACK_IMPORTED_MODULE_0__);


_lib_daemonite_material_additions__WEBPACK_IMPORTED_MODULE_0__["Snackbar"].render({
    html: 'Woooop'
});

/***/ }),

/***/ "./lib/daemonite-material-additions.js":
/*!*********************************************!*\
  !*** ./lib/daemonite-material-additions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t,n,o){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=document.createElement(t),n&&(this.el.innerHTML=n),"object"===(void 0===o?"undefined":r(o)))for(var i in o)o.hasOwnProperty(i)&&this.el.setAttribute(i,o[i]);return this}return o(e,[{key:"appendTo",value:function(t){var n=this;return t.constructor===HTMLBodyElement||t.constructor===HTMLDivElement?(t.appendChild(this.el),this):t instanceof e?(t.get().appendChild(this.el),this):(document.querySelectorAll(t).foreach(function(e){return e.appendChild(n.el)}),this)}},{key:"prependTo",value:function(t){var n=this;t instanceof e?t.get().insertBefore(this.el,this.el.firstChild):document.querySelectorAll(t).foreach(function(e){return e.insertBefore(n.el,e.firstChild)});return this}},{key:"addClass",value:function(e){var t=this;return"object"===(void 0===e?"undefined":r(e))?(console.error("Cannot use Element.addClass with an object as classname"),this):("string"==typeof e&&(e=e.split(" ")),e.forEach(function(e){return t.el.classList.add(e)}),this)}},{key:"removeClass",value:function(e){var t=this;return"object"===(void 0===e?"undefined":r(e))?(console.error("Cannot use Element.removeClass with an object as classname"),this):("string"==typeof e&&(e=e.split(" ")),e.forEach(function(e){return t.el.classList.remove(e)}),this)}},{key:"html",value:function(e){return e?(this.el.innerHTML=e,this):this.el.innerHTML}},{key:"appendHtml",value:function(e){return this.el.innerHTML+=e,this}},{key:"prependHtml",value:function(e){var t=this.html();this.el.innerHTML=e+t}},{key:"remove",value:function(){return this.el.remove(),this}},{key:"get",value:function(){return this.el}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),u=(r=i)&&r.__esModule?r:{default:r};var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"render",value:function(e){var t=Object.assign({},{timeout:4e3,html:""},e),n=this.generateSnackbarComponent(t);n.appendTo(document.body),setTimeout(function(){n.addClass("show")},1),"Infinity"===t.timeout||isNaN(t.timeout)||setTimeout(function(){n.removeClass("show"),setTimeout(function(){return n.remove()},200)},t.timeout)}},{key:"generateSnackbarComponent",value:function(e){var t=new u.default("div",null,{class:"snackbar"}),n=new u.default("div",e.html,{class:"snackbar-body"});return e.classes&&t.addClass(e.classes),n.appendTo(t),e.button&&t.appendHtml(e.button),t}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Element=t.Snackbar=void 0;var r=i(n(1)),o=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}t.Snackbar=r.default,t.Element=o.default}])});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map