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
exports.id = "pages/api/defgon";
exports.ids = ["pages/api/defgon"];
exports.modules = {

/***/ "./pages/api/defgon.ts":
/*!*****************************!*\
  !*** ./pages/api/defgon.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method == \"POST\") {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    let dytdata;\n    const {\n      adsoyad1,\n      uni1,\n      ono1,\n      dsut1,\n      dyysut1,\n      dyssut1,\n      det1,\n      dekm1,\n      dkbak1,\n      dseb1,\n      dmey1,\n      dyag1,\n      dytoh1,\n      ekcho1,\n      ekpro1,\n      ekyag1,\n      gcho1,\n      gpro1,\n      gyag1,\n      topkcal1,\n      kcho1,\n      kpro1,\n      kyag1,\n      ycho1,\n      ypro1,\n      yyag1,\n      osabah1,\n      oara11,\n      oogle1,\n      oara21,\n      oaksam1,\n      oara31,\n      vakaadi1,\n      hastaliklar1,\n      ilaclar1,\n      bulgular1,\n      servis1,\n      info1\n    } = req.body;\n    dytdata = {\n      adsoyad: adsoyad1,\n      ono: ono1,\n      uni: uni1,\n      dsut: dsut1,\n      dyysut: dyysut1,\n      dyssut: dyssut1,\n      det: det1,\n      dekm: dekm1,\n      dkbak: dkbak1,\n      dseb: dseb1,\n      dmey: dmey1,\n      dyag: dyag1,\n      dytoh: dytoh1,\n      ekcho: ekcho1,\n      ekpro: ekpro1,\n      ekyag: ekyag1,\n      gcho: gcho1,\n      gpro: gpro1,\n      gyag: gyag1,\n      topkcal: topkcal1,\n      kcho: kcho1,\n      kpro: kpro1,\n      kyag: kyag1,\n      ycho: ycho1,\n      ypro: ypro1,\n      yyag: yyag1,\n      osabah: osabah1,\n      oara1: oara11,\n      oogle: oogle1,\n      oara2: oara21,\n      oaksam: oaksam1,\n      oara3: oara31,\n      vakaadi: vakaadi1,\n      hastaliklar: hastaliklar1,\n      ilaclar: ilaclar1,\n      bulgular: bulgular1,\n      servis: servis1,\n      info: info1,\n      gun: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD'),\n      ay: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('MM'),\n      yil: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY')\n    };\n    const dyt = await prisma.aybaDefter.create({\n      data: dytdata\n    });\n    res.json(dyt);\n    return {\n      props: {\n        dyt\n      }\n    };\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGVmZ29uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBLDZCQUFlLDBDQUFnQkUsR0FBaEIsRUFBbUNDLEdBQW5DLEVBQXdEO0FBQ25FLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixJQUFZLE1BQWYsRUFBc0I7QUFDbEIsVUFBTUMsTUFBTSxHQUFHLElBQUlMLHdEQUFKLEVBQWY7QUFDQSxRQUFJTSxPQUFKO0FBQ0EsVUFBTTtBQUNGQyxNQUFBQSxRQURFO0FBRUZDLE1BQUFBLElBRkU7QUFHRkMsTUFBQUEsSUFIRTtBQUlGQyxNQUFBQSxLQUpFO0FBS0ZDLE1BQUFBLE9BTEU7QUFNRkMsTUFBQUEsT0FORTtBQU9GQyxNQUFBQSxJQVBFO0FBUUZDLE1BQUFBLEtBUkU7QUFTRkMsTUFBQUEsTUFURTtBQVVGQyxNQUFBQSxLQVZFO0FBV0ZDLE1BQUFBLEtBWEU7QUFZRkMsTUFBQUEsS0FaRTtBQWFGQyxNQUFBQSxNQWJFO0FBY0ZDLE1BQUFBLE1BZEU7QUFlRkMsTUFBQUEsTUFmRTtBQWdCRkMsTUFBQUEsTUFoQkU7QUFpQkZDLE1BQUFBLEtBakJFO0FBa0JGQyxNQUFBQSxLQWxCRTtBQW1CRkMsTUFBQUEsS0FuQkU7QUFvQkZDLE1BQUFBLFFBcEJFO0FBcUJGQyxNQUFBQSxLQXJCRTtBQXNCRkMsTUFBQUEsS0F0QkU7QUF1QkZDLE1BQUFBLEtBdkJFO0FBd0JGQyxNQUFBQSxLQXhCRTtBQXlCRkMsTUFBQUEsS0F6QkU7QUEwQkZDLE1BQUFBLEtBMUJFO0FBMkJGQyxNQUFBQSxPQTNCRTtBQTRCRkMsTUFBQUEsTUE1QkU7QUE2QkZDLE1BQUFBLE1BN0JFO0FBOEJGQyxNQUFBQSxNQTlCRTtBQStCRkMsTUFBQUEsT0EvQkU7QUFnQ0ZDLE1BQUFBLE1BaENFO0FBaUNGQyxNQUFBQSxRQWpDRTtBQWtDRkMsTUFBQUEsWUFsQ0U7QUFtQ0ZDLE1BQUFBLFFBbkNFO0FBb0NGQyxNQUFBQSxTQXBDRTtBQXFDRkMsTUFBQUEsT0FyQ0U7QUFzQ0ZDLE1BQUFBO0FBdENFLFFBdUNKMUMsR0FBRyxDQUFDMkMsSUF2Q047QUF3Q0F2QyxJQUFBQSxPQUFPLEdBQUM7QUFDSndDLE1BQUFBLE9BQU8sRUFBQ3ZDLFFBREo7QUFFSndDLE1BQUFBLEdBQUcsRUFBQ3RDLElBRkE7QUFHSnVDLE1BQUFBLEdBQUcsRUFBQ3hDLElBSEE7QUFJSnlDLE1BQUFBLElBQUksRUFBQ3ZDLEtBSkQ7QUFLSndDLE1BQUFBLE1BQU0sRUFBQ3ZDLE9BTEg7QUFNSndDLE1BQUFBLE1BQU0sRUFBQ3ZDLE9BTkg7QUFPSndDLE1BQUFBLEdBQUcsRUFBQ3ZDLElBUEE7QUFRSndDLE1BQUFBLElBQUksRUFBQ3ZDLEtBUkQ7QUFTSndDLE1BQUFBLEtBQUssRUFBQ3ZDLE1BVEY7QUFVSndDLE1BQUFBLElBQUksRUFBQ3ZDLEtBVkQ7QUFXSndDLE1BQUFBLElBQUksRUFBQ3ZDLEtBWEQ7QUFZSndDLE1BQUFBLElBQUksRUFBQ3ZDLEtBWkQ7QUFhSndDLE1BQUFBLEtBQUssRUFBQ3ZDLE1BYkY7QUFjSndDLE1BQUFBLEtBQUssRUFBQ3ZDLE1BZEY7QUFlSndDLE1BQUFBLEtBQUssRUFBQ3ZDLE1BZkY7QUFnQkp3QyxNQUFBQSxLQUFLLEVBQUN2QyxNQWhCRjtBQWlCSndDLE1BQUFBLElBQUksRUFBQ3ZDLEtBakJEO0FBa0JKd0MsTUFBQUEsSUFBSSxFQUFDdkMsS0FsQkQ7QUFtQkp3QyxNQUFBQSxJQUFJLEVBQUN2QyxLQW5CRDtBQW9CSndDLE1BQUFBLE9BQU8sRUFBQ3ZDLFFBcEJKO0FBcUJKd0MsTUFBQUEsSUFBSSxFQUFDdkMsS0FyQkQ7QUFzQkp3QyxNQUFBQSxJQUFJLEVBQUN2QyxLQXRCRDtBQXVCSndDLE1BQUFBLElBQUksRUFBQ3ZDLEtBdkJEO0FBd0JKd0MsTUFBQUEsSUFBSSxFQUFDdkMsS0F4QkQ7QUF5Qkp3QyxNQUFBQSxJQUFJLEVBQUN2QyxLQXpCRDtBQTBCSndDLE1BQUFBLElBQUksRUFBQ3ZDLEtBMUJEO0FBMkJKd0MsTUFBQUEsTUFBTSxFQUFDdkMsT0EzQkg7QUE0Qkp3QyxNQUFBQSxLQUFLLEVBQUN2QyxNQTVCRjtBQTZCSndDLE1BQUFBLEtBQUssRUFBQ3ZDLE1BN0JGO0FBOEJKd0MsTUFBQUEsS0FBSyxFQUFDdkMsTUE5QkY7QUErQkp3QyxNQUFBQSxNQUFNLEVBQUN2QyxPQS9CSDtBQWdDSndDLE1BQUFBLEtBQUssRUFBQ3ZDLE1BaENGO0FBaUNKd0MsTUFBQUEsT0FBTyxFQUFDdkMsUUFqQ0o7QUFrQ0p3QyxNQUFBQSxXQUFXLEVBQUN2QyxZQWxDUjtBQW1DSndDLE1BQUFBLE9BQU8sRUFBQ3ZDLFFBbkNKO0FBb0NKd0MsTUFBQUEsUUFBUSxFQUFDdkMsU0FwQ0w7QUFxQ0p3QyxNQUFBQSxNQUFNLEVBQUN2QyxPQXJDSDtBQXNDSndDLE1BQUFBLElBQUksRUFBQ3ZDLEtBdENEO0FBdUNKd0MsTUFBQUEsR0FBRyxFQUFDbkYsNkNBQU0sR0FBR29GLE1BQVQsQ0FBZ0IsSUFBaEIsQ0F2Q0E7QUF3Q0pDLE1BQUFBLEVBQUUsRUFBQ3JGLDZDQUFNLEdBQUdvRixNQUFULENBQWdCLElBQWhCLENBeENDO0FBeUNKRSxNQUFBQSxHQUFHLEVBQUN0Riw2Q0FBTSxHQUFHb0YsTUFBVCxDQUFnQixNQUFoQjtBQXpDQSxLQUFSO0FBMkNBLFVBQU1HLEdBQUcsR0FBRyxNQUFNbkYsTUFBTSxDQUFDb0YsVUFBUCxDQUFrQkMsTUFBbEIsQ0FBeUI7QUFDdkNDLE1BQUFBLElBQUksRUFBQ3JGO0FBRGtDLEtBQXpCLENBQWxCO0FBR0FILElBQUFBLEdBQUcsQ0FBQ3lGLElBQUosQ0FBU0osR0FBVDtBQUNBLFdBQU07QUFDRkssTUFBQUEsS0FBSyxFQUFDO0FBQUNMLFFBQUFBO0FBQUQ7QUFESixLQUFOO0FBR0g7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2F5YmF3ZWIvLi9wYWdlcy9hcGkvZGVmZ29uLnRzPzRkODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlfSBmcm9tICduZXh0JztcbmltcG9ydCB7UHJpc21hQ2xpZW50LFByaXNtYX0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTpOZXh0QXBpUmVxdWVzdCxyZXM6TmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgaWYocmVxLm1ldGhvZD09XCJQT1NUXCIpe1xuICAgICAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgICAgIGxldCBkeXRkYXRhOlByaXNtYS5BeWJhRGVmdGVyQ3JlYXRlSW5wdXRcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWRzb3lhZDEsXG4gICAgICAgICAgICB1bmkxLFxuICAgICAgICAgICAgb25vMSxcbiAgICAgICAgICAgIGRzdXQxLFxuICAgICAgICAgICAgZHl5c3V0MSxcbiAgICAgICAgICAgIGR5c3N1dDEsXG4gICAgICAgICAgICBkZXQxLFxuICAgICAgICAgICAgZGVrbTEsXG4gICAgICAgICAgICBka2JhazEsXG4gICAgICAgICAgICBkc2ViMSxcbiAgICAgICAgICAgIGRtZXkxLFxuICAgICAgICAgICAgZHlhZzEsXG4gICAgICAgICAgICBkeXRvaDEsXG4gICAgICAgICAgICBla2NobzEsXG4gICAgICAgICAgICBla3BybzEsXG4gICAgICAgICAgICBla3lhZzEsXG4gICAgICAgICAgICBnY2hvMSxcbiAgICAgICAgICAgIGdwcm8xLFxuICAgICAgICAgICAgZ3lhZzEsXG4gICAgICAgICAgICB0b3BrY2FsMSxcbiAgICAgICAgICAgIGtjaG8xLFxuICAgICAgICAgICAga3BybzEsXG4gICAgICAgICAgICBreWFnMSxcbiAgICAgICAgICAgIHljaG8xLFxuICAgICAgICAgICAgeXBybzEsXG4gICAgICAgICAgICB5eWFnMSxcbiAgICAgICAgICAgIG9zYWJhaDEsXG4gICAgICAgICAgICBvYXJhMTEsXG4gICAgICAgICAgICBvb2dsZTEsXG4gICAgICAgICAgICBvYXJhMjEsXG4gICAgICAgICAgICBvYWtzYW0xLFxuICAgICAgICAgICAgb2FyYTMxLFxuICAgICAgICAgICAgdmFrYWFkaTEsXG4gICAgICAgICAgICBoYXN0YWxpa2xhcjEsXG4gICAgICAgICAgICBpbGFjbGFyMSxcbiAgICAgICAgICAgIGJ1bGd1bGFyMSxcbiAgICAgICAgICAgIHNlcnZpczEsXG4gICAgICAgICAgICBpbmZvMVxuICAgICAgICB9PXJlcS5ib2R5O1xuICAgICAgICBkeXRkYXRhPXtcbiAgICAgICAgICAgIGFkc295YWQ6YWRzb3lhZDEsXG4gICAgICAgICAgICBvbm86b25vMSxcbiAgICAgICAgICAgIHVuaTp1bmkxLFxuICAgICAgICAgICAgZHN1dDpkc3V0MSxcbiAgICAgICAgICAgIGR5eXN1dDpkeXlzdXQxLFxuICAgICAgICAgICAgZHlzc3V0OmR5c3N1dDEsXG4gICAgICAgICAgICBkZXQ6ZGV0MSxcbiAgICAgICAgICAgIGRla206ZGVrbTEsXG4gICAgICAgICAgICBka2Jhazpka2JhazEsXG4gICAgICAgICAgICBkc2ViOmRzZWIxLFxuICAgICAgICAgICAgZG1leTpkbWV5MSxcbiAgICAgICAgICAgIGR5YWc6ZHlhZzEsXG4gICAgICAgICAgICBkeXRvaDpkeXRvaDEsXG4gICAgICAgICAgICBla2Nobzpla2NobzEsXG4gICAgICAgICAgICBla3Bybzpla3BybzEsXG4gICAgICAgICAgICBla3lhZzpla3lhZzEsXG4gICAgICAgICAgICBnY2hvOmdjaG8xLFxuICAgICAgICAgICAgZ3BybzpncHJvMSxcbiAgICAgICAgICAgIGd5YWc6Z3lhZzEsXG4gICAgICAgICAgICB0b3BrY2FsOnRvcGtjYWwxLFxuICAgICAgICAgICAga2NobzprY2hvMSxcbiAgICAgICAgICAgIGtwcm86a3BybzEsXG4gICAgICAgICAgICBreWFnOmt5YWcxLFxuICAgICAgICAgICAgeWNobzp5Y2hvMSxcbiAgICAgICAgICAgIHlwcm86eXBybzEsXG4gICAgICAgICAgICB5eWFnOnl5YWcxLFxuICAgICAgICAgICAgb3NhYmFoOm9zYWJhaDEsXG4gICAgICAgICAgICBvYXJhMTpvYXJhMTEsXG4gICAgICAgICAgICBvb2dsZTpvb2dsZTEsXG4gICAgICAgICAgICBvYXJhMjpvYXJhMjEsXG4gICAgICAgICAgICBvYWtzYW06b2Frc2FtMSxcbiAgICAgICAgICAgIG9hcmEzOm9hcmEzMSxcbiAgICAgICAgICAgIHZha2FhZGk6dmFrYWFkaTEsXG4gICAgICAgICAgICBoYXN0YWxpa2xhcjpoYXN0YWxpa2xhcjEsXG4gICAgICAgICAgICBpbGFjbGFyOmlsYWNsYXIxLFxuICAgICAgICAgICAgYnVsZ3VsYXI6YnVsZ3VsYXIxLFxuICAgICAgICAgICAgc2VydmlzOnNlcnZpczEsXG4gICAgICAgICAgICBpbmZvOmluZm8xLFxuICAgICAgICAgICAgZ3VuOm1vbWVudCgpLmZvcm1hdCgnREQnKSxcbiAgICAgICAgICAgIGF5Om1vbWVudCgpLmZvcm1hdCgnTU0nKSxcbiAgICAgICAgICAgIHlpbDptb21lbnQoKS5mb3JtYXQoJ1lZWVknKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGR5dCA9IGF3YWl0IHByaXNtYS5heWJhRGVmdGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOmR5dGRhdGEsXG4gICAgICAgIH0pO1xuICAgICAgICByZXMuanNvbihkeXQpO1xuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICBwcm9wczp7ZHl0fVxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwibW9tZW50IiwicmVxIiwicmVzIiwibWV0aG9kIiwicHJpc21hIiwiZHl0ZGF0YSIsImFkc295YWQxIiwidW5pMSIsIm9ubzEiLCJkc3V0MSIsImR5eXN1dDEiLCJkeXNzdXQxIiwiZGV0MSIsImRla20xIiwiZGtiYWsxIiwiZHNlYjEiLCJkbWV5MSIsImR5YWcxIiwiZHl0b2gxIiwiZWtjaG8xIiwiZWtwcm8xIiwiZWt5YWcxIiwiZ2NobzEiLCJncHJvMSIsImd5YWcxIiwidG9wa2NhbDEiLCJrY2hvMSIsImtwcm8xIiwia3lhZzEiLCJ5Y2hvMSIsInlwcm8xIiwieXlhZzEiLCJvc2FiYWgxIiwib2FyYTExIiwib29nbGUxIiwib2FyYTIxIiwib2Frc2FtMSIsIm9hcmEzMSIsInZha2FhZGkxIiwiaGFzdGFsaWtsYXIxIiwiaWxhY2xhcjEiLCJidWxndWxhcjEiLCJzZXJ2aXMxIiwiaW5mbzEiLCJib2R5IiwiYWRzb3lhZCIsIm9ubyIsInVuaSIsImRzdXQiLCJkeXlzdXQiLCJkeXNzdXQiLCJkZXQiLCJkZWttIiwiZGtiYWsiLCJkc2ViIiwiZG1leSIsImR5YWciLCJkeXRvaCIsImVrY2hvIiwiZWtwcm8iLCJla3lhZyIsImdjaG8iLCJncHJvIiwiZ3lhZyIsInRvcGtjYWwiLCJrY2hvIiwia3BybyIsImt5YWciLCJ5Y2hvIiwieXBybyIsInl5YWciLCJvc2FiYWgiLCJvYXJhMSIsIm9vZ2xlIiwib2FyYTIiLCJvYWtzYW0iLCJvYXJhMyIsInZha2FhZGkiLCJoYXN0YWxpa2xhciIsImlsYWNsYXIiLCJidWxndWxhciIsInNlcnZpcyIsImluZm8iLCJndW4iLCJmb3JtYXQiLCJheSIsInlpbCIsImR5dCIsImF5YmFEZWZ0ZXIiLCJjcmVhdGUiLCJkYXRhIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/defgon.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/defgon.ts"));
module.exports = __webpack_exports__;

})();