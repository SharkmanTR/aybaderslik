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
exports.id = "pages/karsilastir";
exports.ids = ["pages/karsilastir"];
exports.modules = {

/***/ "./pages/karsilastir.js":
/*!******************************!*\
  !*** ./pages/karsilastir.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Karsilastir),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/sharkman/NextProjects/AybaWeb/aybaweb/pages/karsilastir.js\";\n\nfunction Karsilastir({\n  bes\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n      id: \"slc\",\n      children: bes.map(b => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n        children: b.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 21\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, this);\n}\nasync function getStaticProps() {\n  const res = await fetch('https://api.nal.usda.gov/fdc/v1/foods/list?api_key=DEMO_KEY', {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  });\n  const bes = await res.json();\n  console.log(bes.map(b => b.description));\n  console.log(\"bitti\");\n  return {\n    props: {\n      bes\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9rYXJzaWxhc3Rpci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZSxTQUFTQSxXQUFULENBQXFCO0FBQUNDLEVBQUFBO0FBQUQsQ0FBckIsRUFBMkI7QUFDdEMsc0JBQ0k7QUFBQSwyQkFDSTtBQUFRLFFBQUUsRUFBQyxLQUFYO0FBQUEsZ0JBQ0tBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxDQUFDLGlCQUNOO0FBQUEsa0JBQVNBLENBQUMsQ0FBQ0M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7QUFDTSxlQUFlQyxjQUFmLEdBQWdDO0FBQ25DLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsNkRBQUQsRUFBK0Q7QUFDbEZDLElBQUFBLE1BQU0sRUFBQyxLQUQyRTtBQUVsRkMsSUFBQUEsT0FBTyxFQUFDO0FBQUMsc0JBQWU7QUFBaEI7QUFGMEUsR0FBL0QsQ0FBdkI7QUFJQSxRQUFNUixHQUFHLEdBQUcsTUFBTUssR0FBRyxDQUFDSSxJQUFKLEVBQWxCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxHQUFHLENBQUNDLEdBQUosQ0FBUUMsQ0FBQyxJQUFFQSxDQUFDLENBQUNDLFdBQWIsQ0FBWjtBQUNBTyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsU0FBTTtBQUNGQyxJQUFBQSxLQUFLLEVBQUM7QUFBQ1osTUFBQUE7QUFBRDtBQURKLEdBQU47QUFJSCIsInNvdXJjZXMiOlsid2VicGFjazovL2F5YmF3ZWIvLi9wYWdlcy9rYXJzaWxhc3Rpci5qcz9iMjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEthcnNpbGFzdGlyKHtiZXN9KXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwic2xjXCI+XG4gICAgICAgICAgICAgICAge2Jlcy5tYXAoYj0+KFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPntiLmRlc2NyaXB0aW9ufTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubmFsLnVzZGEuZ292L2ZkYy92MS9mb29kcy9saXN0P2FwaV9rZXk9REVNT19LRVknLHtcbiAgICAgICAgbWV0aG9kOidHRVQnLFxuICAgICAgICBoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9XG4gICAgfSk7XG4gICAgY29uc3QgYmVzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhiZXMubWFwKGI9PmIuZGVzY3JpcHRpb24pKTtcbiAgICBjb25zb2xlLmxvZyhcImJpdHRpXCIpO1xuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6e2Jlc31cbiAgICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJLYXJzaWxhc3RpciIsImJlcyIsIm1hcCIsImIiLCJkZXNjcmlwdGlvbiIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/karsilastir.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/karsilastir.js"));
module.exports = __webpack_exports__;

})();