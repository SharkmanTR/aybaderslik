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
exports.id = "pages/api/sifreunuttum1";
exports.ids = ["pages/api/sifreunuttum1"];
exports.modules = {

/***/ "./pages/api/sifreunuttum1.ts":
/*!************************************!*\
  !*** ./pages/api/sifreunuttum1.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method == \"POST\") {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    const {\n      uemail\n    } = await req.body;\n    let userdata;\n    userdata = {\n      email: uemail\n    };\n    const users = await prisma.aybaUsers.findMany({\n      where: userdata\n    });\n    res.json(users);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2lmcmV1bnV0dHVtMS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUVBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBb0NDLEdBQXBDLEVBQXdEO0FBQ25FLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixJQUFZLE1BQWYsRUFBc0I7QUFDbEIsVUFBTUMsTUFBTSxHQUFDLElBQUlKLHdEQUFKLEVBQWI7QUFDQSxVQUFNO0FBQUNLLE1BQUFBO0FBQUQsUUFBUyxNQUFNSixHQUFHLENBQUNLLElBQXpCO0FBQ0EsUUFBSUMsUUFBSjtBQUNBQSxJQUFBQSxRQUFRLEdBQUM7QUFBQ0MsTUFBQUEsS0FBSyxFQUFDSDtBQUFQLEtBQVQ7QUFDQSxVQUFNSSxLQUFLLEdBQUcsTUFBTUwsTUFBTSxDQUFDTSxTQUFQLENBQWlCQyxRQUFqQixDQUEwQjtBQUMxQ0MsTUFBQUEsS0FBSyxFQUFDTDtBQURvQyxLQUExQixDQUFwQjtBQUlBTCxJQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBU0osS0FBVDtBQUNIO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heWJhd2ViLy4vcGFnZXMvYXBpL3NpZnJldW51dHR1bTEudHM/YWVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2V9IGZyb20gJ25leHQnO1xuaW1wb3J0IHtQcmlzbWFDbGllbnQsIFByaXNtYX0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOk5leHRBcGlSZXF1ZXN0LCByZXM6TmV4dEFwaVJlc3BvbnNlKXtcbiAgICBpZihyZXEubWV0aG9kPT1cIlBPU1RcIil7XG4gICAgICAgIGNvbnN0IHByaXNtYT1uZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgICAgIGNvbnN0IHt1ZW1haWx9PWF3YWl0IHJlcS5ib2R5O1xuICAgICAgICBsZXQgdXNlcmRhdGE6UHJpc21hLkF5YmFVc2Vyc1doZXJlSW5wdXQ7XG4gICAgICAgIHVzZXJkYXRhPXtlbWFpbDp1ZW1haWx9O1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS5heWJhVXNlcnMuZmluZE1hbnkoe1xuICAgICAgICAgICAgd2hlcmU6dXNlcmRhdGEsXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5qc29uKHVzZXJzKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInByaXNtYSIsInVlbWFpbCIsImJvZHkiLCJ1c2VyZGF0YSIsImVtYWlsIiwidXNlcnMiLCJheWJhVXNlcnMiLCJmaW5kTWFueSIsIndoZXJlIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/sifreunuttum1.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/sifreunuttum1.ts"));
module.exports = __webpack_exports__;

})();