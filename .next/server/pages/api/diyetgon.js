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
exports.id = "pages/api/diyetgon";
exports.ids = ["pages/api/diyetgon"];
exports.modules = {

/***/ "./pages/api/diyetgon.ts":
/*!*******************************!*\
  !*** ./pages/api/diyetgon.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method == \"POST\") {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    let dytdata;\n    const {\n      uni1,\n      adsoyad1,\n      hoca1,\n      dsut1,\n      dyysut1,\n      dyssut1,\n      det1,\n      dekm1,\n      dkbak1,\n      dseb1,\n      dmey1,\n      dyag1,\n      dytoh1,\n      gcho1,\n      gpro1,\n      gyag1,\n      topkcal1,\n      kcho1,\n      kpro1,\n      kyag1,\n      ycho1,\n      ypro1,\n      yyag1,\n      osabah1,\n      oara11,\n      oogle1,\n      oara21,\n      oaksam1,\n      oara31,\n      ekcho1,\n      ekpro1,\n      ekyag1\n    } = req.body;\n    dytdata = {\n      uni: uni1,\n      adsoyad: adsoyad1,\n      hoca: hoca1,\n      dsut: dsut1,\n      dyysut: dyysut1,\n      dyssut: dyssut1,\n      det: det1,\n      dekm: dekm1,\n      dkbak: dkbak1,\n      dseb: dseb1,\n      dmey: dmey1,\n      dyag: dyag1,\n      dytoh: dytoh1,\n      gcho: gcho1,\n      gpro: gpro1,\n      gyag: gyag1,\n      topkcal: topkcal1,\n      kcho: kcho1,\n      kpro: kpro1,\n      kyag: kyag1,\n      ycho: ycho1,\n      ypro: ypro1,\n      yyag: yyag1,\n      osabah: osabah1,\n      oara1: oara11,\n      oogle: oogle1,\n      oara2: oara21,\n      oaksam: oaksam1,\n      oara3: oara31,\n      ekcho: ekcho1,\n      ekpro: ekpro1,\n      ekyag: ekyag1,\n      fav: \"0\",\n      info: \"\",\n      gun: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD'),\n      ay: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('MM'),\n      yil: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY')\n    };\n    const dyt = await prisma.aybaDiyetler.create({\n      data: dytdata\n    });\n    res.json(dyt);\n    return {\n      props: {\n        dyt\n      }\n    };\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGl5ZXRnb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUEsNkJBQWUsMENBQWVFLEdBQWYsRUFBbUNDLEdBQW5DLEVBQXdEO0FBQ25FLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixJQUFZLE1BQWYsRUFBc0I7QUFDbEIsVUFBTUMsTUFBTSxHQUFDLElBQUlMLHdEQUFKLEVBQWI7QUFDQSxRQUFJTSxPQUFKO0FBQ0EsVUFBTTtBQUNGQyxNQUFBQSxJQURFO0FBRUZDLE1BQUFBLFFBRkU7QUFHRkMsTUFBQUEsS0FIRTtBQUlGQyxNQUFBQSxLQUpFO0FBS0ZDLE1BQUFBLE9BTEU7QUFNRkMsTUFBQUEsT0FORTtBQU9GQyxNQUFBQSxJQVBFO0FBUUZDLE1BQUFBLEtBUkU7QUFTRkMsTUFBQUEsTUFURTtBQVVGQyxNQUFBQSxLQVZFO0FBV0ZDLE1BQUFBLEtBWEU7QUFZRkMsTUFBQUEsS0FaRTtBQWFGQyxNQUFBQSxNQWJFO0FBY0ZDLE1BQUFBLEtBZEU7QUFlRkMsTUFBQUEsS0FmRTtBQWdCRkMsTUFBQUEsS0FoQkU7QUFpQkZDLE1BQUFBLFFBakJFO0FBa0JGQyxNQUFBQSxLQWxCRTtBQW1CRkMsTUFBQUEsS0FuQkU7QUFvQkZDLE1BQUFBLEtBcEJFO0FBcUJGQyxNQUFBQSxLQXJCRTtBQXNCRkMsTUFBQUEsS0F0QkU7QUF1QkZDLE1BQUFBLEtBdkJFO0FBd0JGQyxNQUFBQSxPQXhCRTtBQXlCRkMsTUFBQUEsTUF6QkU7QUEwQkZDLE1BQUFBLE1BMUJFO0FBMkJGQyxNQUFBQSxNQTNCRTtBQTRCRkMsTUFBQUEsT0E1QkU7QUE2QkZDLE1BQUFBLE1BN0JFO0FBOEJGQyxNQUFBQSxNQTlCRTtBQStCRkMsTUFBQUEsTUEvQkU7QUFnQ0ZDLE1BQUFBO0FBaENFLFFBaUNKcEMsR0FBRyxDQUFDcUMsSUFqQ047QUFrQ0FqQyxJQUFBQSxPQUFPLEdBQUM7QUFDSmtDLE1BQUFBLEdBQUcsRUFBQ2pDLElBREE7QUFFSmtDLE1BQUFBLE9BQU8sRUFBQ2pDLFFBRko7QUFHSmtDLE1BQUFBLElBQUksRUFBQ2pDLEtBSEQ7QUFJSmtDLE1BQUFBLElBQUksRUFBQ2pDLEtBSkQ7QUFLSmtDLE1BQUFBLE1BQU0sRUFBQ2pDLE9BTEg7QUFNSmtDLE1BQUFBLE1BQU0sRUFBQ2pDLE9BTkg7QUFPSmtDLE1BQUFBLEdBQUcsRUFBQ2pDLElBUEE7QUFRSmtDLE1BQUFBLElBQUksRUFBQ2pDLEtBUkQ7QUFTSmtDLE1BQUFBLEtBQUssRUFBQ2pDLE1BVEY7QUFVSmtDLE1BQUFBLElBQUksRUFBQ2pDLEtBVkQ7QUFXSmtDLE1BQUFBLElBQUksRUFBQ2pDLEtBWEQ7QUFZSmtDLE1BQUFBLElBQUksRUFBQ2pDLEtBWkQ7QUFhSmtDLE1BQUFBLEtBQUssRUFBQ2pDLE1BYkY7QUFjSmtDLE1BQUFBLElBQUksRUFBQ2pDLEtBZEQ7QUFlSmtDLE1BQUFBLElBQUksRUFBQ2pDLEtBZkQ7QUFnQkprQyxNQUFBQSxJQUFJLEVBQUNqQyxLQWhCRDtBQWlCSmtDLE1BQUFBLE9BQU8sRUFBQ2pDLFFBakJKO0FBa0JKa0MsTUFBQUEsSUFBSSxFQUFDakMsS0FsQkQ7QUFtQkprQyxNQUFBQSxJQUFJLEVBQUNqQyxLQW5CRDtBQW9CSmtDLE1BQUFBLElBQUksRUFBQ2pDLEtBcEJEO0FBcUJKa0MsTUFBQUEsSUFBSSxFQUFDakMsS0FyQkQ7QUFzQkprQyxNQUFBQSxJQUFJLEVBQUNqQyxLQXRCRDtBQXVCSmtDLE1BQUFBLElBQUksRUFBQ2pDLEtBdkJEO0FBd0JKa0MsTUFBQUEsTUFBTSxFQUFDakMsT0F4Qkg7QUF5QkprQyxNQUFBQSxLQUFLLEVBQUNqQyxNQXpCRjtBQTBCSmtDLE1BQUFBLEtBQUssRUFBQ2pDLE1BMUJGO0FBMkJKa0MsTUFBQUEsS0FBSyxFQUFDakMsTUEzQkY7QUE0QkprQyxNQUFBQSxNQUFNLEVBQUNqQyxPQTVCSDtBQTZCSmtDLE1BQUFBLEtBQUssRUFBQ2pDLE1BN0JGO0FBOEJKa0MsTUFBQUEsS0FBSyxFQUFDakMsTUE5QkY7QUErQkprQyxNQUFBQSxLQUFLLEVBQUNqQyxNQS9CRjtBQWdDSmtDLE1BQUFBLEtBQUssRUFBQ2pDLE1BaENGO0FBaUNKa0MsTUFBQUEsR0FBRyxFQUFDLEdBakNBO0FBa0NKQyxNQUFBQSxJQUFJLEVBQUMsRUFsQ0Q7QUFtQ0pDLE1BQUFBLEdBQUcsRUFBQ3pFLDZDQUFNLEdBQUcwRSxNQUFULENBQWdCLElBQWhCLENBbkNBO0FBb0NKQyxNQUFBQSxFQUFFLEVBQUMzRSw2Q0FBTSxHQUFHMEUsTUFBVCxDQUFnQixJQUFoQixDQXBDQztBQXFDSkUsTUFBQUEsR0FBRyxFQUFDNUUsNkNBQU0sR0FBRzBFLE1BQVQsQ0FBZ0IsTUFBaEI7QUFyQ0EsS0FBUjtBQXVDQSxVQUFNRyxHQUFHLEdBQUUsTUFBTXpFLE1BQU0sQ0FBQzBFLFlBQVAsQ0FBb0JDLE1BQXBCLENBQTJCO0FBQ3hDQyxNQUFBQSxJQUFJLEVBQUMzRTtBQURtQyxLQUEzQixDQUFqQjtBQUdBSCxJQUFBQSxHQUFHLENBQUMrRSxJQUFKLENBQVNKLEdBQVQ7QUFFSixXQUFNO0FBQ0ZLLE1BQUFBLEtBQUssRUFBQztBQUNGTCxRQUFBQTtBQURFO0FBREosS0FBTjtBQUtDO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heWJhd2ViLy4vcGFnZXMvYXBpL2RpeWV0Z29uLnRzPzA3YzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7UHJpc21hQ2xpZW50LFByaXNtYX0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHJlcTogTmV4dEFwaVJlcXVlc3QscmVzOiBOZXh0QXBpUmVzcG9uc2Upe1xuICAgIGlmKHJlcS5tZXRob2Q9PVwiUE9TVFwiKXtcbiAgICAgICAgY29uc3QgcHJpc21hPW5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICAgICAgbGV0IGR5dGRhdGEgOiBQcmlzbWEuQXliYURpeWV0bGVyQ3JlYXRlSW5wdXRcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdW5pMSxcbiAgICAgICAgICAgIGFkc295YWQxLFxuICAgICAgICAgICAgaG9jYTEsXG4gICAgICAgICAgICBkc3V0MSxcbiAgICAgICAgICAgIGR5eXN1dDEsXG4gICAgICAgICAgICBkeXNzdXQxLFxuICAgICAgICAgICAgZGV0MSxcbiAgICAgICAgICAgIGRla20xLFxuICAgICAgICAgICAgZGtiYWsxLFxuICAgICAgICAgICAgZHNlYjEsXG4gICAgICAgICAgICBkbWV5MSxcbiAgICAgICAgICAgIGR5YWcxLFxuICAgICAgICAgICAgZHl0b2gxLFxuICAgICAgICAgICAgZ2NobzEsXG4gICAgICAgICAgICBncHJvMSxcbiAgICAgICAgICAgIGd5YWcxLFxuICAgICAgICAgICAgdG9wa2NhbDEsXG4gICAgICAgICAgICBrY2hvMSxcbiAgICAgICAgICAgIGtwcm8xLFxuICAgICAgICAgICAga3lhZzEsXG4gICAgICAgICAgICB5Y2hvMSxcbiAgICAgICAgICAgIHlwcm8xLFxuICAgICAgICAgICAgeXlhZzEsXG4gICAgICAgICAgICBvc2FiYWgxLFxuICAgICAgICAgICAgb2FyYTExLFxuICAgICAgICAgICAgb29nbGUxLFxuICAgICAgICAgICAgb2FyYTIxLFxuICAgICAgICAgICAgb2Frc2FtMSxcbiAgICAgICAgICAgIG9hcmEzMSxcbiAgICAgICAgICAgIGVrY2hvMSxcbiAgICAgICAgICAgIGVrcHJvMSxcbiAgICAgICAgICAgIGVreWFnMVxuICAgICAgICB9PXJlcS5ib2R5O1xuICAgICAgICBkeXRkYXRhPXtcbiAgICAgICAgICAgIHVuaTp1bmkxLFxuICAgICAgICAgICAgYWRzb3lhZDphZHNveWFkMSxcbiAgICAgICAgICAgIGhvY2E6aG9jYTEsXG4gICAgICAgICAgICBkc3V0OmRzdXQxLFxuICAgICAgICAgICAgZHl5c3V0OmR5eXN1dDEsXG4gICAgICAgICAgICBkeXNzdXQ6ZHlzc3V0MSxcbiAgICAgICAgICAgIGRldDpkZXQxLFxuICAgICAgICAgICAgZGVrbTpkZWttMSxcbiAgICAgICAgICAgIGRrYmFrOmRrYmFrMSxcbiAgICAgICAgICAgIGRzZWI6ZHNlYjEsXG4gICAgICAgICAgICBkbWV5OmRtZXkxLFxuICAgICAgICAgICAgZHlhZzpkeWFnMSxcbiAgICAgICAgICAgIGR5dG9oOmR5dG9oMSxcbiAgICAgICAgICAgIGdjaG86Z2NobzEsXG4gICAgICAgICAgICBncHJvOmdwcm8xLFxuICAgICAgICAgICAgZ3lhZzpneWFnMSxcbiAgICAgICAgICAgIHRvcGtjYWw6dG9wa2NhbDEsXG4gICAgICAgICAgICBrY2hvOmtjaG8xLFxuICAgICAgICAgICAga3BybzprcHJvMSxcbiAgICAgICAgICAgIGt5YWc6a3lhZzEsXG4gICAgICAgICAgICB5Y2hvOnljaG8xLFxuICAgICAgICAgICAgeXBybzp5cHJvMSxcbiAgICAgICAgICAgIHl5YWc6eXlhZzEsXG4gICAgICAgICAgICBvc2FiYWg6b3NhYmFoMSxcbiAgICAgICAgICAgIG9hcmExOm9hcmExMSxcbiAgICAgICAgICAgIG9vZ2xlOm9vZ2xlMSxcbiAgICAgICAgICAgIG9hcmEyOm9hcmEyMSxcbiAgICAgICAgICAgIG9ha3NhbTpvYWtzYW0xLFxuICAgICAgICAgICAgb2FyYTM6b2FyYTMxLFxuICAgICAgICAgICAgZWtjaG86ZWtjaG8xLFxuICAgICAgICAgICAgZWtwcm86ZWtwcm8xLFxuICAgICAgICAgICAgZWt5YWc6ZWt5YWcxLFxuICAgICAgICAgICAgZmF2OlwiMFwiLFxuICAgICAgICAgICAgaW5mbzpcIlwiLFxuICAgICAgICAgICAgZ3VuOm1vbWVudCgpLmZvcm1hdCgnREQnKSxcbiAgICAgICAgICAgIGF5Om1vbWVudCgpLmZvcm1hdCgnTU0nKSxcbiAgICAgICAgICAgIHlpbDptb21lbnQoKS5mb3JtYXQoJ1lZWVknKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGR5dD0gYXdhaXQgcHJpc21hLmF5YmFEaXlldGxlci5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YTpkeXRkYXRhLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzLmpzb24oZHl0KTtcbiAgICAgICAgXG4gICAgcmV0dXJue1xuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICBkeXQsXG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJtb21lbnQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwcmlzbWEiLCJkeXRkYXRhIiwidW5pMSIsImFkc295YWQxIiwiaG9jYTEiLCJkc3V0MSIsImR5eXN1dDEiLCJkeXNzdXQxIiwiZGV0MSIsImRla20xIiwiZGtiYWsxIiwiZHNlYjEiLCJkbWV5MSIsImR5YWcxIiwiZHl0b2gxIiwiZ2NobzEiLCJncHJvMSIsImd5YWcxIiwidG9wa2NhbDEiLCJrY2hvMSIsImtwcm8xIiwia3lhZzEiLCJ5Y2hvMSIsInlwcm8xIiwieXlhZzEiLCJvc2FiYWgxIiwib2FyYTExIiwib29nbGUxIiwib2FyYTIxIiwib2Frc2FtMSIsIm9hcmEzMSIsImVrY2hvMSIsImVrcHJvMSIsImVreWFnMSIsImJvZHkiLCJ1bmkiLCJhZHNveWFkIiwiaG9jYSIsImRzdXQiLCJkeXlzdXQiLCJkeXNzdXQiLCJkZXQiLCJkZWttIiwiZGtiYWsiLCJkc2ViIiwiZG1leSIsImR5YWciLCJkeXRvaCIsImdjaG8iLCJncHJvIiwiZ3lhZyIsInRvcGtjYWwiLCJrY2hvIiwia3BybyIsImt5YWciLCJ5Y2hvIiwieXBybyIsInl5YWciLCJvc2FiYWgiLCJvYXJhMSIsIm9vZ2xlIiwib2FyYTIiLCJvYWtzYW0iLCJvYXJhMyIsImVrY2hvIiwiZWtwcm8iLCJla3lhZyIsImZhdiIsImluZm8iLCJndW4iLCJmb3JtYXQiLCJheSIsInlpbCIsImR5dCIsImF5YmFEaXlldGxlciIsImNyZWF0ZSIsImRhdGEiLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/diyetgon.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/diyetgon.ts"));
module.exports = __webpack_exports__;

})();