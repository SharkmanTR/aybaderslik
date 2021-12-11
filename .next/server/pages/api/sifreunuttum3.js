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
exports.id = "pages/api/sifreunuttum3";
exports.ids = ["pages/api/sifreunuttum3"];
exports.modules = {

/***/ "./pages/api/sifreunuttum3.ts":
/*!************************************!*\
  !*** ./pages/api/sifreunuttum3.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method == \"POST\") {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    const {\n      uid,\n      usifre\n    } = req.body;\n    const up = await prisma.aybaUsers.update({\n      where: {\n        id: parseInt(uid)\n      },\n      data: {\n        sifre: usifre\n      }\n    });\n    res.json(up);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2lmcmV1bnV0dHVtMy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUVBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBbUNDLEdBQW5DLEVBQXdEO0FBQ25FLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixJQUFZLE1BQWYsRUFBc0I7QUFDbEIsVUFBTUMsTUFBTSxHQUFFLElBQUlKLHdEQUFKLEVBQWQ7QUFDQSxVQUFNO0FBQUNLLE1BQUFBLEdBQUQ7QUFBS0MsTUFBQUE7QUFBTCxRQUFhTCxHQUFHLENBQUNNLElBQXZCO0FBQ0EsVUFBTUMsRUFBRSxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0I7QUFDckNDLE1BQUFBLEtBQUssRUFBQztBQUNGQyxRQUFBQSxFQUFFLEVBQUNDLFFBQVEsQ0FBQ1IsR0FBRDtBQURULE9BRCtCO0FBSXJDUyxNQUFBQSxJQUFJLEVBQUM7QUFDREMsUUFBQUEsS0FBSyxFQUFDVDtBQURMO0FBSmdDLEtBQXhCLENBQWpCO0FBUUFKLElBQUFBLEdBQUcsQ0FBQ2MsSUFBSixDQUFTUixFQUFUO0FBQ0g7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2F5YmF3ZWIvLi9wYWdlcy9hcGkvc2lmcmV1bnV0dHVtMy50cz80ZTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHtQcmlzbWFDbGllbnQsIFByaXNtYX0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOk5leHRBcGlSZXF1ZXN0LHJlczpOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBpZihyZXEubWV0aG9kPT1cIlBPU1RcIil7XG4gICAgICAgIGNvbnN0IHByaXNtYT0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgICAgICBjb25zdCB7dWlkLHVzaWZyZX09cmVxLmJvZHk7XG4gICAgICAgIGNvbnN0IHVwID0gYXdhaXQgcHJpc21hLmF5YmFVc2Vycy51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6e1xuICAgICAgICAgICAgICAgIGlkOnBhcnNlSW50KHVpZClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICBzaWZyZTp1c2lmcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5qc29uKHVwKTtcbiAgICB9XG4gICAgXG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInByaXNtYSIsInVpZCIsInVzaWZyZSIsImJvZHkiLCJ1cCIsImF5YmFVc2VycyIsInVwZGF0ZSIsIndoZXJlIiwiaWQiLCJwYXJzZUludCIsImRhdGEiLCJzaWZyZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/sifreunuttum3.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/sifreunuttum3.ts"));
module.exports = __webpack_exports__;

})();