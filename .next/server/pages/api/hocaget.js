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
exports.id = "pages/api/hocaget";
exports.ids = ["pages/api/hocaget"];
exports.modules = {

/***/ "./pages/api/hocaget.ts":
/*!******************************!*\
  !*** ./pages/api/hocaget.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method == \"POST\") {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    const {\n      xuni\n    } = await req.body;\n    let hocdata;\n    hocdata = {\n      uni: xuni,\n      hoca: \"1\"\n    };\n    const hocalar = await prisma.aybaUsers.findMany({\n      where: hocdata\n    });\n    res.json(hocalar);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaG9jYWdldC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBb0NDLEdBQXBDLEVBQXlEO0FBQ3BFLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixJQUFZLE1BQWYsRUFBc0I7QUFDbEIsVUFBTUMsTUFBTSxHQUFHLElBQUlKLHdEQUFKLEVBQWY7QUFDQSxVQUFNO0FBQUNLLE1BQUFBO0FBQUQsUUFBUSxNQUFNSixHQUFHLENBQUNLLElBQXhCO0FBQ0EsUUFBSUMsT0FBSjtBQUNBQSxJQUFBQSxPQUFPLEdBQUM7QUFBQ0MsTUFBQUEsR0FBRyxFQUFDSCxJQUFMO0FBQVdJLE1BQUFBLElBQUksRUFBQztBQUFoQixLQUFSO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLE1BQU1OLE1BQU0sQ0FBQ08sU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEI7QUFDNUNDLE1BQUFBLEtBQUssRUFBQ047QUFEc0MsS0FBMUIsQ0FBdEI7QUFHQUwsSUFBQUEsR0FBRyxDQUFDWSxJQUFKLENBQVNKLE9BQVQ7QUFDSDtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXliYXdlYi8uL3BhZ2VzL2FwaS9ob2NhZ2V0LnRzPzJjYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlfSBmcm9tICduZXh0JztcbmltcG9ydCB7UHJpc21hQ2xpZW50LCBQcmlzbWF9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6TmV4dEFwaVJlcXVlc3QsIHJlczpOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBpZihyZXEubWV0aG9kPT1cIlBPU1RcIil7XG4gICAgICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICAgICAgY29uc3Qge3h1bml9PSBhd2FpdCByZXEuYm9keTtcbiAgICAgICAgbGV0IGhvY2RhdGE6UHJpc21hLkF5YmFVc2Vyc1doZXJlSW5wdXQ7XG4gICAgICAgIGhvY2RhdGE9e3VuaTp4dW5pLCBob2NhOlwiMVwifTtcbiAgICAgICAgY29uc3QgaG9jYWxhciA9IGF3YWl0IHByaXNtYS5heWJhVXNlcnMuZmluZE1hbnkoe1xuICAgICAgICAgICAgd2hlcmU6aG9jZGF0YVxuICAgICAgICB9KTtcbiAgICAgICAgcmVzLmpzb24oaG9jYWxhcik7XG4gICAgfVxuICAgIFxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwcmlzbWEiLCJ4dW5pIiwiYm9keSIsImhvY2RhdGEiLCJ1bmkiLCJob2NhIiwiaG9jYWxhciIsImF5YmFVc2VycyIsImZpbmRNYW55Iiwid2hlcmUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/hocaget.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/hocaget.ts"));
module.exports = __webpack_exports__;

})();