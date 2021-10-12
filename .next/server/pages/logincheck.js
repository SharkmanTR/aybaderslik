"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/logincheck";
exports.ids = ["pages/logincheck"];
exports.modules = {

/***/ "./pages/logincheck.js":
/*!*****************************!*\
  !*** ./pages/logincheck.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginCheck),\n/* harmony export */   \"gerServerSideProps\": () => (/* binding */ gerServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/sharkman/NextProjects/AybaWeb/aybaweb/pages/logincheck.js\";\n\n\n\nfunction LoginCheck({\n  user\n}) {\n  console.log(user);\n  console.log(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get(\"xemail\"));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: user\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\nasync function gerServerSideProps() {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  const uemail = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get(\"xemail\");\n  const user = await prisma.aybaUsers.findMany({\n    where: {\n      email: uemail\n    }\n  });\n  return {\n    props: {\n      user\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbmNoZWNrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsU0FBU0UsVUFBVCxDQUFvQjtBQUFDQyxFQUFBQTtBQUFELENBQXBCLEVBQTJCO0FBQ3RDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosb0RBQUEsQ0FBWSxRQUFaLENBQVo7QUFDQSxzQkFDSTtBQUFBLGNBQ0tFO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7QUFDTSxlQUFlSSxrQkFBZixHQUFvQztBQUN2QyxRQUFNQyxNQUFNLEdBQUcsSUFBSVIsd0RBQUosRUFBZjtBQUNBLFFBQU1TLE1BQU0sR0FBQ1Isb0RBQUEsQ0FBWSxRQUFaLENBQWI7QUFDQSxRQUFNRSxJQUFJLEdBQUcsTUFBTUssTUFBTSxDQUFDRSxTQUFQLENBQWlCQyxRQUFqQixDQUEwQjtBQUN6Q0MsSUFBQUEsS0FBSyxFQUFDO0FBQ0ZDLE1BQUFBLEtBQUssRUFBQ0o7QUFESjtBQURtQyxHQUExQixDQUFuQjtBQUtBLFNBQU07QUFDRkssSUFBQUEsS0FBSyxFQUFDO0FBQUNYLE1BQUFBO0FBQUQ7QUFESixHQUFOO0FBR0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heWJhd2ViLy4vcGFnZXMvbG9naW5jaGVjay5qcz84NDhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJpc21hQ2xpZW50fSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkNoZWNrKHt1c2VyfSl7XG4gICAgY29uc29sZS5sb2codXNlcik7XG4gICAgY29uc29sZS5sb2coY29va2llcy5nZXQoXCJ4ZW1haWxcIikpO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1c2VyfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXJTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgIGNvbnN0IHVlbWFpbD1jb29raWVzLmdldChcInhlbWFpbFwiKTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLmF5YmFVc2Vycy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOntcbiAgICAgICAgICAgIGVtYWlsOnVlbWFpbFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm57XG4gICAgICAgIHByb3BzOnt1c2VyfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY29va2llcyIsIkxvZ2luQ2hlY2siLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImdldCIsImdlclNlcnZlclNpZGVQcm9wcyIsInByaXNtYSIsInVlbWFpbCIsImF5YmFVc2VycyIsImZpbmRNYW55Iiwid2hlcmUiLCJlbWFpbCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/logincheck.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/logincheck.js"));
module.exports = __webpack_exports__;

})();