"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ustmenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/ustmenu.js */ \"./components/ustmenu.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_ingilizce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ingilizce */ \"./components/ingilizce.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/sharkman/NextProjects/AybaWeb/aybaweb/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar tema = js_cookie__WEBPACK_IMPORTED_MODULE_3__.default.get(\"tema\" || 0);\nvar tc;\n\nif (tema == \"Default\") {\n  tc = \"#dadada\";\n} else if (tema == \"DefaultDark\") {\n  tc = \"#1a1a1a\";\n} else if (tema == \"SlateBlue\") {\n  tc = \"lightsteelblue\";\n} else if (tema == \"DarkSlateBlue\") {\n  tc = \"darkslateblue\";\n} else if (tema == \"Wisteria\") {\n  tc = \"#f6eafa\";\n} else if (tema == \"DarkWisteria\") {\n  tc = \"#551868 \";\n} else if (tema == \"Nar\") {\n  tc = \"#FFBABA\";\n} else if (tema == \"DarkNar\") {\n  tc = \"#8b0000\";\n} else if (tema == \"Night\") {\n  tc = \"#1a1a1a\";\n} else if (tema == \"Day\") {\n  tc = \"#EDF6F5\";\n} else {\n  tc = \"#dadada\";\n}\n\nfunction Home() {\n  _s();\n\n  var l = js_cookie__WEBPACK_IMPORTED_MODULE_3__.default.get(\"login\") || \"0\";\n  var d = js_cookie__WEBPACK_IMPORTED_MODULE_3__.default.get(\"durum\");\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    if (l == \"0\") {\n      window.location.href = '/girisyap';\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([[\"3466716620\", [tc]]]),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {\n      id: \"3466716620\",\n      dynamic: [tc],\n      children: \"body{background-color:\".concat(tc, \";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYXJrbWFuL05leHRQcm9qZWN0cy9BeWJhV2ViL2F5YmF3ZWIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NPLEFBRTBELDhDQUFDIiwiZmlsZSI6Ii9ob21lL3NoYXJrbWFuL05leHRQcm9qZWN0cy9BeWJhV2ViL2F5YmF3ZWIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFVzdE1lbnUgZnJvbSAnL2NvbXBvbmVudHMvdXN0bWVudS5qcyc7XG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IEluZ2lsaXpjZSBmcm9tICcuLi9jb21wb25lbnRzL2luZ2lsaXpjZSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcGFkZGluZyB9IGZyb20gJ0BtdWkvc3lzdGVtJztcblxuXG5cbnZhciB0ZW1hID0gY29va2llcy5nZXQoXCJ0ZW1hXCJ8fFwiRGVmYXVsdFwiKTtcbmxldCB0YztcbmlmKHRlbWE9PVwiRGVmYXVsdFwiKXtcbiAgICB0Yz1cIiNkYWRhZGFcIjtcbn1lbHNlIGlmICh0ZW1hPT1cIkRlZmF1bHREYXJrXCIpe1xuICAgIHRjPVwiIzFhMWExYVwiO1xufWVsc2UgaWYgKHRlbWE9PVwiU2xhdGVCbHVlXCIpe1xuICAgIHRjPVwibGlnaHRzdGVlbGJsdWVcIjtcbn1lbHNlIGlmKHRlbWE9PVwiRGFya1NsYXRlQmx1ZVwiKXtcbiAgdGM9XCJkYXJrc2xhdGVibHVlXCJcbn1lbHNlIGlmICh0ZW1hPT1cIldpc3RlcmlhXCIpe1xuICB0Yz1cIiNmNmVhZmFcIjtcbn1lbHNlIGlmICh0ZW1hPT1cIkRhcmtXaXN0ZXJpYVwiKXtcbiAgdGM9XCIjNTUxODY4IFwiO1xufWVsc2UgaWYgKHRlbWE9PVwiTmFyXCIpe1xuICB0Yz1cIiNGRkJBQkFcIjtcbn1lbHNlIGlmICh0ZW1hPT1cIkRhcmtOYXJcIil7XG4gIHRjPVwiIzhiMDAwMFwiO1xufWVsc2UgaWYgKHRlbWE9PVwiTmlnaHRcIil7XG4gIHRjPVwiIzFhMWExYVwiO1xufWVsc2UgaWYgKHRlbWE9PVwiRGF5XCIpe1xuICB0Yz1cIiNFREY2RjVcIjtcbn1lbHNlIHtcbiAgdGM9XCIjZGFkYWRhXCI7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBsID0gY29va2llcy5nZXQoXCJsb2dpblwiKXx8XCIwXCI7XG4gIGNvbnN0IGQ9IGNvb2tpZXMuZ2V0KFwiZHVydW1cIik7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmKGw9PVwiMFwiKXtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPScvZ2lyaXN5YXAnO1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4oXG5cbiAgICA8ZGl2ICA+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICB7YFxuICAgICAgYm9keXtiYWNrZ3JvdW5kLWNvbG9yOiAke3RjfSA7fVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BWUJBIERlcnNsaWs8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJzaG91cnRjdXQgaWNvblwiIGhyZWY9e2AvaWNvLyR7dGVtYX0uaWNvYH0+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFVzdE1lbnVcbiAgICAgICAgcHJlZj17XCJcIn1cbiAgICAgICAgPjwvVXN0TWVudT5cbiAgICAgICAge2Q9PVwiMlwiJiZcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICAgIHBhZGRpbmc6XCIyMHB4XCIsXG4gICAgICAgICAgb2JqZWN0UG9zaXRpb246XCJjZW50ZXJcIlxuICAgICAgICB9fT5cbiAgICAgICAgICA8cCBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6XCJyZWRcIixcbiAgICAgICAgICAgIGZvbnRTaXplOlwibWVkaXVtXCJcbiAgICAgICAgICB9fT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJScsaGVpZ2h0Oic1MDBweCcsbWFyZ2luVG9wOic1MHB4J319PlxuICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiL2ltZy9wdXp6bGUucG5nXCIgb25DbGljaz17YmNsaWNrfSBzdHlsZT17e1xuICAgICAgICAgICAgb2JqZWN0Rml0Oidjb250YWluJyxcbiAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uOidjZW50ZXInLFxuICAgICAgICAgICAgd2lkdGg6JzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OicxMDAlJyxcbiAgICAgICAgICAgIGN1cnNvcjoncG9pbnRlcidcbiAgICAgICAgICAgIFxuICAgICAgICAgIH19PjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJyxoZWlnaHQ6JzUwMHB4JyxtYXJnaW5Ub3A6JzUwcHgnfX0+XG4gICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIvZGVyZ2kvMS5wbmdcIiBzdHlsZT17e1xuICAgICAgICAgICAgb2JqZWN0Rml0Oidjb250YWluJyxcbiAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uOidjZW50ZXInLFxuICAgICAgICAgICAgd2lkdGg6JzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OicxMDAlJyxcbiAgICAgICAgICAgIGN1cnNvcjoncG9pbnRlcidcbiAgICAgICAgICAgIFxuICAgICAgICAgIH19IG9uQ2xpY2s9e2RlcmdpY30+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxJbmdpbGl6Y2UgPjwvSW5naWxpemNlPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgKVxuICBmdW5jdGlvbiBkZXJnaWMoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCIvRGlldHNUYWxrc1wiO1xuICB9XG4gIGZ1bmN0aW9uIGJjbGljaygpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9idWxtYWNhXCJcbiAgfVxuXG59XG5cbiJdfQ== */\\n/*@ sourceURL=/home/sharkman/NextProjects/AybaWeb/aybaweb/pages/index.js */\")\n    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"title\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([[\"3466716620\", [tc]]]),\n        children: \"AYBA Derslik\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"link\", {\n        rel: \"shourtcut icon\",\n        href: \"/ico/\".concat(tema, \".ico\"),\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([[\"3466716620\", [tc]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([[\"3466716620\", [tc]]]),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_ustmenu_js__WEBPACK_IMPORTED_MODULE_2__.default, {\n        pref: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), d == \"2\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        style: {\n          width: \"100%\",\n          padding: \"20px\",\n          objectPosition: \"center\"\n        },\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([[\"3466716620\", [tc]]]),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n          style: {\n            color: \"red\",\n            fontSize: \"medium\"\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([[\"3466716620\", [tc]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        style: {\n          width: '100%',\n          height: '500px',\n          marginTop: '50px'\n        },\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([[\"3466716620\", [tc]]]),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          alt: \"\",\n          src: \"/img/puzzle.png\",\n          onClick: bclick,\n          style: {\n            objectFit: 'contain',\n            objectPosition: 'center',\n            width: '100%',\n            height: '100%',\n            cursor: 'pointer'\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([[\"3466716620\", [tc]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        style: {\n          width: '100%',\n          height: '500px',\n          marginTop: '50px'\n        },\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([[\"3466716620\", [tc]]]),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          alt: \"\",\n          src: \"/dergi/1.png\",\n          style: {\n            objectFit: 'contain',\n            objectPosition: 'center',\n            width: '100%',\n            height: '100%',\n            cursor: 'pointer'\n          },\n          onClick: dergic,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([[\"3466716620\", [tc]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_ingilizce__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n\n  function dergic() {\n    window.location.href = \"/DietsTalks\";\n  }\n\n  function bclick() {\n    window.location.href = \"/bulmaca\";\n  }\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFQWtDckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRixlQXFDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGOztBQXVEQSxXQUFTZ0IsTUFBVCxHQUFrQjtBQUNoQlosSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUFxQixhQUFyQjtBQUNEOztBQUNELFdBQVNPLE1BQVQsR0FBa0I7QUFDaEJULElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBcUIsVUFBckI7QUFDRDtBQUVGOztHQXZFdUJMOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgVXN0TWVudSBmcm9tICcvY29tcG9uZW50cy91c3RtZW51LmpzJztcbmltcG9ydCBjb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgSW5naWxpemNlIGZyb20gJy4uL2NvbXBvbmVudHMvaW5naWxpemNlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwYWRkaW5nIH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xuXG5cblxudmFyIHRlbWEgPSBjb29raWVzLmdldChcInRlbWFcInx8XCJEZWZhdWx0XCIpO1xubGV0IHRjO1xuaWYodGVtYT09XCJEZWZhdWx0XCIpe1xuICAgIHRjPVwiI2RhZGFkYVwiO1xufWVsc2UgaWYgKHRlbWE9PVwiRGVmYXVsdERhcmtcIil7XG4gICAgdGM9XCIjMWExYTFhXCI7XG59ZWxzZSBpZiAodGVtYT09XCJTbGF0ZUJsdWVcIil7XG4gICAgdGM9XCJsaWdodHN0ZWVsYmx1ZVwiO1xufWVsc2UgaWYodGVtYT09XCJEYXJrU2xhdGVCbHVlXCIpe1xuICB0Yz1cImRhcmtzbGF0ZWJsdWVcIlxufWVsc2UgaWYgKHRlbWE9PVwiV2lzdGVyaWFcIil7XG4gIHRjPVwiI2Y2ZWFmYVwiO1xufWVsc2UgaWYgKHRlbWE9PVwiRGFya1dpc3RlcmlhXCIpe1xuICB0Yz1cIiM1NTE4NjggXCI7XG59ZWxzZSBpZiAodGVtYT09XCJOYXJcIil7XG4gIHRjPVwiI0ZGQkFCQVwiO1xufWVsc2UgaWYgKHRlbWE9PVwiRGFya05hclwiKXtcbiAgdGM9XCIjOGIwMDAwXCI7XG59ZWxzZSBpZiAodGVtYT09XCJOaWdodFwiKXtcbiAgdGM9XCIjMWExYTFhXCI7XG59ZWxzZSBpZiAodGVtYT09XCJEYXlcIil7XG4gIHRjPVwiI0VERjZGNVwiO1xufWVsc2Uge1xuICB0Yz1cIiNkYWRhZGFcIjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGwgPSBjb29raWVzLmdldChcImxvZ2luXCIpfHxcIjBcIjtcbiAgY29uc3QgZD0gY29va2llcy5nZXQoXCJkdXJ1bVwiKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYobD09XCIwXCIpe1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9Jy9naXJpc3lhcCc7XG4gICAgfVxuICB9KVxuXG4gIHJldHVybihcblxuICAgIDxkaXYgID5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICBib2R5e2JhY2tncm91bmQtY29sb3I6ICR7dGN9IDt9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFZQkEgRGVyc2xpazwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3VydGN1dCBpY29uXCIgaHJlZj17YC9pY28vJHt0ZW1hfS5pY29gfT48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8VXN0TWVudVxuICAgICAgICBwcmVmPXtcIlwifVxuICAgICAgICA+PC9Vc3RNZW51PlxuICAgICAgICB7ZD09XCIyXCImJlxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgcGFkZGluZzpcIjIwcHhcIixcbiAgICAgICAgICBvYmplY3RQb3NpdGlvbjpcImNlbnRlclwiXG4gICAgICAgIH19PlxuICAgICAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjpcInJlZFwiLFxuICAgICAgICAgICAgZm9udFNpemU6XCJtZWRpdW1cIlxuICAgICAgICAgIH19PjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJyxoZWlnaHQ6JzUwMHB4JyxtYXJnaW5Ub3A6JzUwcHgnfX0+XG4gICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIvaW1nL3B1enpsZS5wbmdcIiBvbkNsaWNrPXtiY2xpY2t9IHN0eWxlPXt7XG4gICAgICAgICAgICBvYmplY3RGaXQ6J2NvbnRhaW4nLFxuICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246J2NlbnRlcicsXG4gICAgICAgICAgICB3aWR0aDonMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6JzEwMCUnLFxuICAgICAgICAgICAgY3Vyc29yOidwb2ludGVyJ1xuICAgICAgICAgICAgXG4gICAgICAgICAgfX0+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnLGhlaWdodDonNTAwcHgnLG1hcmdpblRvcDonNTBweCd9fT5cbiAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz1cIi9kZXJnaS8xLnBuZ1wiIHN0eWxlPXt7XG4gICAgICAgICAgICBvYmplY3RGaXQ6J2NvbnRhaW4nLFxuICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246J2NlbnRlcicsXG4gICAgICAgICAgICB3aWR0aDonMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6JzEwMCUnLFxuICAgICAgICAgICAgY3Vyc29yOidwb2ludGVyJ1xuICAgICAgICAgICAgXG4gICAgICAgICAgfX0gb25DbGljaz17ZGVyZ2ljfT48L2ltZz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEluZ2lsaXpjZSA+PC9JbmdpbGl6Y2U+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICApXG4gIGZ1bmN0aW9uIGRlcmdpYygpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9EaWV0c1RhbGtzXCI7XG4gIH1cbiAgZnVuY3Rpb24gYmNsaWNrKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL2J1bG1hY2FcIlxuICB9XG5cbn1cblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJVc3RNZW51IiwiY29va2llcyIsIkluZ2lsaXpjZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGFkZGluZyIsInRlbWEiLCJnZXQiLCJ0YyIsIkhvbWUiLCJsIiwiZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIndpZHRoIiwib2JqZWN0UG9zaXRpb24iLCJjb2xvciIsImZvbnRTaXplIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwiYmNsaWNrIiwib2JqZWN0Rml0IiwiY3Vyc29yIiwiZGVyZ2ljIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});