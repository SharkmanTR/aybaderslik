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
exports.id = "pages/api/profcheck";
exports.ids = ["pages/api/profcheck"];
exports.modules = {

/***/ "./pages/api/profcheck.ts":
/*!********************************!*\
  !*** ./pages/api/profcheck.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method == \"POST\") {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    const {\n      uid,\n      uemail,\n      usifre\n    } = req.body;\n    let userdata;\n    userdata = {\n      email: uemail,\n      sifre: usifre,\n      id: parseInt(uid)\n    };\n    const user = await prisma.aybaUsers.findMany({\n      where: userdata\n    });\n    res.json(user);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZmNoZWNrLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBRUEsNkJBQWUsMENBQWdCQyxHQUFoQixFQUFtQ0MsR0FBbkMsRUFBd0Q7QUFDbkUsTUFBR0QsR0FBRyxDQUFDRSxNQUFKLElBQVksTUFBZixFQUFzQjtBQUNsQixVQUFNQyxNQUFNLEdBQUcsSUFBSUosd0RBQUosRUFBZjtBQUNBLFVBQU07QUFBQ0ssTUFBQUEsR0FBRDtBQUFLQyxNQUFBQSxNQUFMO0FBQVlDLE1BQUFBO0FBQVosUUFBb0JOLEdBQUcsQ0FBQ08sSUFBOUI7QUFDQSxRQUFJQyxRQUFKO0FBQ0FBLElBQUFBLFFBQVEsR0FBQztBQUFDQyxNQUFBQSxLQUFLLEVBQUNKLE1BQVA7QUFDVEssTUFBQUEsS0FBSyxFQUFDSixNQURHO0FBRVRLLE1BQUFBLEVBQUUsRUFBQ0MsUUFBUSxDQUFDUixHQUFEO0FBRkYsS0FBVDtBQUlBLFVBQU1TLElBQUksR0FBRyxNQUFNVixNQUFNLENBQUNXLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCO0FBQ3pDQyxNQUFBQSxLQUFLLEVBQUNSO0FBRG1DLEtBQTFCLENBQW5CO0FBR0FQLElBQUFBLEdBQUcsQ0FBQ2dCLElBQUosQ0FBU0osSUFBVDtBQUVIO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heWJhd2ViLy4vcGFnZXMvYXBpL3Byb2ZjaGVjay50cz81ZjMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQge1ByaXNtYUNsaWVudCxQcmlzbWF9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTpOZXh0QXBpUmVxdWVzdCxyZXM6TmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgaWYocmVxLm1ldGhvZD09XCJQT1NUXCIpe1xuICAgICAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgICAgIGNvbnN0IHt1aWQsdWVtYWlsLHVzaWZyZX09cmVxLmJvZHk7XG4gICAgICAgIGxldCB1c2VyZGF0YTpQcmlzbWEuQXliYVVzZXJzV2hlcmVJbnB1dDtcbiAgICAgICAgdXNlcmRhdGE9e2VtYWlsOnVlbWFpbCxcbiAgICAgICAgc2lmcmU6dXNpZnJlLFxuICAgICAgICBpZDpwYXJzZUludCh1aWQpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS5heWJhVXNlcnMuZmluZE1hbnkoe1xuICAgICAgICAgICAgd2hlcmU6dXNlcmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgcmVzLmpzb24odXNlcik7XG4gICAgICAgIFxuICAgIH1cbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwibWV0aG9kIiwicHJpc21hIiwidWlkIiwidWVtYWlsIiwidXNpZnJlIiwiYm9keSIsInVzZXJkYXRhIiwiZW1haWwiLCJzaWZyZSIsImlkIiwicGFyc2VJbnQiLCJ1c2VyIiwiYXliYVVzZXJzIiwiZmluZE1hbnkiLCJ3aGVyZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/profcheck.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/profcheck.ts"));
module.exports = __webpack_exports__;

})();