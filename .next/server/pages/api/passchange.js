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
exports.id = "pages/api/passchange";
exports.ids = ["pages/api/passchange"];
exports.modules = {

/***/ "./pages/api/passchange.ts":
/*!*********************************!*\
  !*** ./pages/api/passchange.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method == \"POST\") {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    const {\n      uemail,\n      uid,\n      epass,\n      npass\n    } = req.body;\n    var xid = parseInt(uid);\n    const gun = prisma.aybaUsers.update({\n      where: {\n        id: xid\n      },\n      data: {\n        sifre: npass\n      }\n    });\n    res.json(gun);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGFzc2NoYW5nZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUdBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBbUNDLEdBQW5DLEVBQXdEO0FBQ25FLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixJQUFZLE1BQWYsRUFBc0I7QUFDbEIsVUFBTUMsTUFBTSxHQUFHLElBQUlKLHdEQUFKLEVBQWY7QUFDQSxVQUFNO0FBQUNLLE1BQUFBLE1BQUQ7QUFBUUMsTUFBQUEsR0FBUjtBQUFZQyxNQUFBQSxLQUFaO0FBQWtCQyxNQUFBQTtBQUFsQixRQUF5QlAsR0FBRyxDQUFDUSxJQUFuQztBQUNBLFFBQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDTCxHQUFELENBQWxCO0FBQ0EsVUFBTU0sR0FBRyxHQUFHUixNQUFNLENBQUNTLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCO0FBQ2hDQyxNQUFBQSxLQUFLLEVBQUM7QUFBQ0MsUUFBQUEsRUFBRSxFQUFDTjtBQUFKLE9BRDBCO0FBRWhDTyxNQUFBQSxJQUFJLEVBQUM7QUFBQ0MsUUFBQUEsS0FBSyxFQUFDVjtBQUFQO0FBRjJCLEtBQXhCLENBQVo7QUFJQU4sSUFBQUEsR0FBRyxDQUFDaUIsSUFBSixDQUFTUCxHQUFUO0FBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2F5YmF3ZWIvLi9wYWdlcy9hcGkvcGFzc2NoYW5nZS50cz8xM2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQsIFByaXNtYSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6TmV4dEFwaVJlcXVlc3QscmVzOk5leHRBcGlSZXNwb25zZSkge1xuICAgIGlmKHJlcS5tZXRob2Q9PVwiUE9TVFwiKXtcbiAgICAgICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgICAgICBjb25zdCB7dWVtYWlsLHVpZCxlcGFzcyxucGFzc309cmVxLmJvZHk7XG4gICAgICAgIHZhciB4aWQgPSBwYXJzZUludCh1aWQpO1xuICAgICAgICBjb25zdCBndW4gPSBwcmlzbWEuYXliYVVzZXJzLnVwZGF0ZSh7XG4gICAgICAgICAgICB3aGVyZTp7aWQ6eGlkfSxcbiAgICAgICAgICAgIGRhdGE6e3NpZnJlOm5wYXNzfVxuICAgICAgICB9KVxuICAgICAgICByZXMuanNvbihndW4pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwibWV0aG9kIiwicHJpc21hIiwidWVtYWlsIiwidWlkIiwiZXBhc3MiLCJucGFzcyIsImJvZHkiLCJ4aWQiLCJwYXJzZUludCIsImd1biIsImF5YmFVc2VycyIsInVwZGF0ZSIsIndoZXJlIiwiaWQiLCJkYXRhIiwic2lmcmUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/passchange.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/passchange.ts"));
module.exports = __webpack_exports__;

})();