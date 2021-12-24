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
exports.id = "pages/api/defget";
exports.ids = ["pages/api/defget"];
exports.modules = {

/***/ "./pages/api/defget.ts":
/*!*****************************!*\
  !*** ./pages/api/defget.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method == \"POST\") {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    const {\n      xuni,\n      xono\n    } = await req.body;\n    let dosdata;\n    dosdata = {\n      uni: xuni,\n      ono: xono\n    };\n    const def = await prisma.aybaDefter.findMany({\n      orderBy: {\n        id: 'desc'\n      },\n      where: dosdata\n    });\n    res.json(def);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGVmZ2V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0EsNkJBQWUsMENBQWdCQyxHQUFoQixFQUFvQ0MsR0FBcEMsRUFBeUQ7QUFDcEUsTUFBR0QsR0FBRyxDQUFDRSxNQUFKLElBQVksTUFBZixFQUFzQjtBQUNsQixVQUFNQyxNQUFNLEdBQUcsSUFBSUosd0RBQUosRUFBZjtBQUNBLFVBQU07QUFBQ0ssTUFBQUEsSUFBRDtBQUFNQyxNQUFBQTtBQUFOLFFBQWEsTUFBTUwsR0FBRyxDQUFDTSxJQUE3QjtBQUNBLFFBQUlDLE9BQUo7QUFDQUEsSUFBQUEsT0FBTyxHQUFDO0FBQUNDLE1BQUFBLEdBQUcsRUFBQ0osSUFBTDtBQUFVSyxNQUFBQSxHQUFHLEVBQUNKO0FBQWQsS0FBUjtBQUNBLFVBQU1LLEdBQUcsR0FBRyxNQUFNUCxNQUFNLENBQUNRLFVBQVAsQ0FBa0JDLFFBQWxCLENBQTJCO0FBQ3pDQyxNQUFBQSxPQUFPLEVBQUM7QUFBQ0MsUUFBQUEsRUFBRSxFQUFDO0FBQUosT0FEaUM7QUFFekNDLE1BQUFBLEtBQUssRUFBQ1I7QUFGbUMsS0FBM0IsQ0FBbEI7QUFJQU4sSUFBQUEsR0FBRyxDQUFDZSxJQUFKLENBQVNOLEdBQVQ7QUFDSDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXliYXdlYi8uL3BhZ2VzL2FwaS9kZWZnZXQudHM/MjUzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2V9IGZyb20gJ25leHQnO1xuaW1wb3J0IHtQcmlzbWFDbGllbnQsIFByaXNtYX0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTpOZXh0QXBpUmVxdWVzdCwgcmVzOk5leHRBcGlSZXNwb25zZSkge1xuICAgIGlmKHJlcS5tZXRob2Q9PVwiUE9TVFwiKXtcbiAgICAgICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgICAgICBjb25zdCB7eHVuaSx4b25vfT0gYXdhaXQgcmVxLmJvZHk7XG4gICAgICAgIGxldCBkb3NkYXRhOlByaXNtYS5BeWJhRGVmdGVyV2hlcmVJbnB1dDtcbiAgICAgICAgZG9zZGF0YT17dW5pOnh1bmksb25vOnhvbm99O1xuICAgICAgICBjb25zdCBkZWYgPSBhd2FpdCBwcmlzbWEuYXliYURlZnRlci5maW5kTWFueSh7XG4gICAgICAgICAgICBvcmRlckJ5OntpZDonZGVzYyd9LFxuICAgICAgICAgICAgd2hlcmU6ZG9zZGF0YVxuICAgICAgICB9KTtcbiAgICAgICAgcmVzLmpzb24oZGVmKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInByaXNtYSIsInh1bmkiLCJ4b25vIiwiYm9keSIsImRvc2RhdGEiLCJ1bmkiLCJvbm8iLCJkZWYiLCJheWJhRGVmdGVyIiwiZmluZE1hbnkiLCJvcmRlckJ5IiwiaWQiLCJ3aGVyZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/defget.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/defget.ts"));
module.exports = __webpack_exports__;

})();