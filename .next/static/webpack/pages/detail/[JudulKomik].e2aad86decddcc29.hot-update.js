"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail/[JudulKomik]",{

/***/ "./pages/detail/[JudulKomik].js":
/*!**************************************!*\
  !*** ./pages/detail/[JudulKomik].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Detail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/detailPage.module.css */ \"./styles/detailPage.module.css\");\n/* harmony import */ var _styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Tombol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Tombol */ \"./components/Tombol.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Detail() {\n    _s();\n    var switch1, switch2;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var JudulKomik = router.query.JudulKomik;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"chapter\"), menuSelection = ref[0], setMenuSelection = ref[1];\n    var handleTombolSinopsis = function() {\n        if (menuSelection != \"sinopsis\") {\n            setMenuSelection(\"sinopsis\");\n            switch1 = (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().tombolAktif);\n            switch2 = \"\";\n        }\n    };\n    var handleTombolChapter = function() {\n        return menuSelection != \"chapter\" && setMenuSelection(\"chapter\");\n    };\n    console.log(menuSelection);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"KomikOI | Baca Manga, Manhua, Manhwa Bahasa Indonesia\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Banner, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().menu),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().tombolMenu), \" \").concat(switch1, \" no-select\"),\n                                onClick: handleTombolSinopsis,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().textTombol),\n                                    children: \"Sinopsis\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().tombolMenu), \" \").concat(switch2, \" no-select\"),\n                                onClick: handleTombolChapter,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().textTombol),\n                                    children: \"Chapter\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Detail, \"lzkkdyjXmEKD2sMs5z3NeiS99Eg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Detail;\nfunction Banner() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().banner),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerImage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/images/cover.jpg\",\n                    layout: \"fill\",\n                    objectFit: \"cover\",\n                    alt: \"yuanzun\",\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().infoKonten),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().infoJudul),\n                        children: \"Spare, Me Great Lord\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().infoGenre),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tombol__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().genreBox),\n                                children: \"Aksi\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tombol__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().genreBox),\n                                children: \"Fantasi\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tombol__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().genreBox),\n                                children: \"Kultivasi\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this));\n}\n_c1 = Banner;\nvar _c, _c1;\n$RefreshReg$(_c, \"Detail\");\n$RefreshReg$(_c1, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQUN3QixTQUFTLEVBQUV6QiwrRUFBZTswQ0FBRSxDQUFJOzs7Ozs7d0dBQ3ZDQywwREFBTTtnQ0FBQ3dCLFNBQVMsRUFBRXpCLCtFQUFlOzBDQUFFLENBQU87Ozs7Ozt3R0FDMUNDLDBEQUFNO2dDQUFDd0IsU0FBUyxFQUFFekIsK0VBQWU7MENBQUUsQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZELENBQUM7TUF0QlF1QixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RldGFpbC9bSnVkdWxLb21pa10uanM/ZDZmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2RldGFpbFBhZ2UubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IFRvbWJvbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Ub21ib2xcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbCgpIHtcclxuICBjb25zdCBzd2l0Y2gxLHN3aXRjaDI7IFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgSnVkdWxLb21payB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFttZW51U2VsZWN0aW9uLCBzZXRNZW51U2VsZWN0aW9uXSA9IHVzZVN0YXRlKFwiY2hhcHRlclwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9tYm9sU2lub3BzaXMgPSAoKSA9PiB7XHJcbiAgaWYobWVudVNlbGVjdGlvbiAhPSBcInNpbm9wc2lzXCIpIHtcclxuICAgICAgIHNldE1lbnVTZWxlY3Rpb24oXCJzaW5vcHNpc1wiKVxyXG4gICAgICAgc3dpdGNoMSA9IHN0eWxlcy50b21ib2xBa3RpZjtcclxuICAgICAgIHN3aXRjaDIgPSBcIlwiO1xyXG4gICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlVG9tYm9sQ2hhcHRlciA9ICgpID0+XHJcbiAgICBtZW51U2VsZWN0aW9uICE9IFwiY2hhcHRlclwiICYmIHNldE1lbnVTZWxlY3Rpb24oXCJjaGFwdGVyXCIpO1xyXG5cclxuXHJcbiAgY29uc29sZS5sb2cobWVudVNlbGVjdGlvbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+S29taWtPSSB8IEJhY2EgTWFuZ2EsIE1hbmh1YSwgTWFuaHdhIEJhaGFzYSBJbmRvbmVzaWE8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudG9tYm9sTWVudX0gJHtzd2l0Y2gxfSBuby1zZWxlY3RgfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb21ib2xTaW5vcHNpc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dFRvbWJvbH0+U2lub3BzaXM8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudG9tYm9sTWVudX0gJHtzd2l0Y2gyfSBuby1zZWxlY3RgfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb21ib2xDaGFwdGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0VG9tYm9sfT5DaGFwdGVyPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+PC9zZWN0aW9uPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJhbm5lcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYW5uZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbm5lckltYWdlfT5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17YC9pbWFnZXMvY292ZXIuanBnYH1cclxuICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgYWx0PVwieXVhbnp1blwiXHJcbiAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvS29udGVufT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb0p1ZHVsfT5TcGFyZSwgTWUgR3JlYXQgTG9yZDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvR2VucmV9PlxyXG4gICAgICAgICAgPFRvbWJvbCBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZUJveH0+QWtzaTwvVG9tYm9sPlxyXG4gICAgICAgICAgPFRvbWJvbCBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZUJveH0+RmFudGFzaTwvVG9tYm9sPlxyXG4gICAgICAgICAgPFRvbWJvbCBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZUJveH0+S3VsdGl2YXNpPC9Ub21ib2w+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhlYWQiLCJzdHlsZXMiLCJUb21ib2wiLCJMYXlvdXQiLCJEZXRhaWwiLCJzd2l0Y2gxIiwic3dpdGNoMiIsInJvdXRlciIsIkp1ZHVsS29taWsiLCJxdWVyeSIsIm1lbnVTZWxlY3Rpb24iLCJzZXRNZW51U2VsZWN0aW9uIiwiaGFuZGxlVG9tYm9sU2lub3BzaXMiLCJ0b21ib2xBa3RpZiIsImhhbmRsZVRvbWJvbENoYXB0ZXIiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIkJhbm5lciIsImRpdiIsImNsYXNzTmFtZSIsIm1lbnUiLCJ0b21ib2xNZW51Iiwib25DbGljayIsInNwYW4iLCJ0ZXh0VG9tYm9sIiwic2VjdGlvbiIsImJhbm5lciIsImJhbm5lckltYWdlIiwic3JjIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiYWx0IiwicHJpb3JpdHkiLCJpbmZvS29udGVuIiwiaDIiLCJpbmZvSnVkdWwiLCJpbmZvR2VucmUiLCJnZW5yZUJveCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail/[JudulKomik].js\n");

/***/ })

});