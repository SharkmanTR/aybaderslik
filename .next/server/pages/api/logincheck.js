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
exports.id = "pages/api/logincheck";
exports.ids = ["pages/api/logincheck"];
exports.modules = {

/***/ "./pages/api/logincheck.ts":
/*!*********************************!*\
  !*** ./pages/api/logincheck.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method == \"POST\") {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    const {\n      uemail,\n      upass\n    } = await req.body;\n    let userdata;\n    userdata = {\n      email: uemail,\n      sifre: upass\n    };\n    const users = await prisma.aybaUsers.findMany({\n      where: userdata\n    });\n    res.json(users);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9naW5jaGVjay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBbUNDLEdBQW5DLEVBQXVEO0FBQ2xFLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixJQUFZLE1BQWYsRUFBc0I7QUFDbEIsVUFBTUMsTUFBTSxHQUFHLElBQUlKLHdEQUFKLEVBQWY7QUFDQSxVQUFNO0FBQUNLLE1BQUFBLE1BQUQ7QUFBUUMsTUFBQUE7QUFBUixRQUFlLE1BQU1MLEdBQUcsQ0FBQ00sSUFBL0I7QUFDQSxRQUFJQyxRQUFKO0FBQ0FBLElBQUFBLFFBQVEsR0FBQztBQUFDQyxNQUFBQSxLQUFLLEVBQUNKLE1BQVA7QUFDVEssTUFBQUEsS0FBSyxFQUFDSjtBQURHLEtBQVQ7QUFFQSxVQUFNSyxLQUFLLEdBQUcsTUFBTVAsTUFBTSxDQUFDUSxTQUFQLENBQWlCQyxRQUFqQixDQUEwQjtBQUMxQ0MsTUFBQUEsS0FBSyxFQUFDTjtBQURvQyxLQUExQixDQUFwQjtBQUlBTixJQUFBQSxHQUFHLENBQUNhLElBQUosQ0FBU0osS0FBVDtBQUNIO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heWJhd2ViLy4vcGFnZXMvYXBpL2xvZ2luY2hlY2sudHM/NDkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7UHJpc21hQ2xpZW50LFByaXNtYX0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTpOZXh0QXBpUmVxdWVzdCxyZXM6TmV4dEFwaVJlc3BvbnNlKXtcbiAgICBpZihyZXEubWV0aG9kPT1cIlBPU1RcIil7XG4gICAgICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICAgICAgY29uc3Qge3VlbWFpbCx1cGFzc309YXdhaXQgcmVxLmJvZHk7XG4gICAgICAgIGxldCB1c2VyZGF0YTpQcmlzbWEuQXliYVVzZXJzV2hlcmVJbnB1dFxuICAgICAgICB1c2VyZGF0YT17ZW1haWw6dWVtYWlsLFxuICAgICAgICBzaWZyZTp1cGFzc307XG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcHJpc21hLmF5YmFVc2Vycy5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTp1c2VyZGF0YVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICByZXMuanNvbih1c2Vycyk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwcmlzbWEiLCJ1ZW1haWwiLCJ1cGFzcyIsImJvZHkiLCJ1c2VyZGF0YSIsImVtYWlsIiwic2lmcmUiLCJ1c2VycyIsImF5YmFVc2VycyIsImZpbmRNYW55Iiwid2hlcmUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/logincheck.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/logincheck.ts"));
module.exports = __webpack_exports__;

})();