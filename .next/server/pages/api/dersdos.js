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
exports.id = "pages/api/dersdos";
exports.ids = ["pages/api/dersdos"];
exports.modules = {

/***/ "./pages/api/dersdos.ts":
/*!******************************!*\
  !*** ./pages/api/dersdos.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method == 'POST') {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    const {\n      xuni\n    } = await req.body;\n    let dosdata;\n    dosdata = {\n      uni: xuni\n    };\n    const def = await prisma.aybaDersDosyalari.findMany({\n      orderBy: {\n        ders: 'asc'\n      },\n      where: dosdata\n    });\n    res.json(def);\n  }\n\n  ;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGVyc2Rvcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBbUNDLEdBQW5DLEVBQXdEO0FBQ25FLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixJQUFZLE1BQWYsRUFBc0I7QUFDbEIsVUFBTUMsTUFBTSxHQUFHLElBQUlKLHdEQUFKLEVBQWY7QUFDQSxVQUFNO0FBQUNLLE1BQUFBO0FBQUQsUUFBUSxNQUFNSixHQUFHLENBQUNLLElBQXhCO0FBQ0EsUUFBSUMsT0FBSjtBQUNBQSxJQUFBQSxPQUFPLEdBQUM7QUFBQ0MsTUFBQUEsR0FBRyxFQUFDSDtBQUFMLEtBQVI7QUFDQSxVQUFNSSxHQUFHLEdBQUcsTUFBTUwsTUFBTSxDQUFDTSxpQkFBUCxDQUF5QkMsUUFBekIsQ0FBa0M7QUFDaERDLE1BQUFBLE9BQU8sRUFBQztBQUFDQyxRQUFBQSxJQUFJLEVBQUM7QUFBTixPQUR3QztBQUVoREMsTUFBQUEsS0FBSyxFQUFDUDtBQUYwQyxLQUFsQyxDQUFsQjtBQUlBTCxJQUFBQSxHQUFHLENBQUNhLElBQUosQ0FBU04sR0FBVDtBQUNIOztBQUFBO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heWJhd2ViLy4vcGFnZXMvYXBpL2RlcnNkb3MudHM/NzQwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2V9IGZyb20gJ25leHQnO1xuaW1wb3J0IHtQcmlzbWFDbGllbnQsIFByaXNtYX0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTpOZXh0QXBpUmVxdWVzdCxyZXM6TmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgaWYocmVxLm1ldGhvZD09J1BPU1QnKXtcbiAgICAgICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgICAgICBjb25zdCB7eHVuaX09IGF3YWl0IHJlcS5ib2R5O1xuICAgICAgICBsZXQgZG9zZGF0YTpQcmlzbWEuQXliYURlcnNEb3N5YWxhcmlXaGVyZUlucHV0O1xuICAgICAgICBkb3NkYXRhPXt1bmk6eHVuaX07XG4gICAgICAgIGNvbnN0IGRlZiA9IGF3YWl0IHByaXNtYS5heWJhRGVyc0Rvc3lhbGFyaS5maW5kTWFueSh7XG4gICAgICAgICAgICBvcmRlckJ5OntkZXJzOidhc2MnfSxcbiAgICAgICAgICAgIHdoZXJlOmRvc2RhdGFcbiAgICAgICAgfSlcbiAgICAgICAgcmVzLmpzb24oZGVmKTtcbiAgICB9O1xuICAgIFxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwcmlzbWEiLCJ4dW5pIiwiYm9keSIsImRvc2RhdGEiLCJ1bmkiLCJkZWYiLCJheWJhRGVyc0Rvc3lhbGFyaSIsImZpbmRNYW55Iiwib3JkZXJCeSIsImRlcnMiLCJ3aGVyZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/dersdos.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/dersdos.ts"));
module.exports = __webpack_exports__;

})();