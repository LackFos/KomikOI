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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Detail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/detailPage.module.css */ \"./styles/detailPage.module.css\");\n/* harmony import */ var _styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Tombol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Tombol */ \"./components/Tombol.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Detail() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var JudulKomik = router.query.JudulKomik;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"chapter\"), menuSelection = ref[0], setMenuSelection = ref[1];\n    var activeMenu_Chapter = menuSelection == \"chapter\";\n    var handleTombolChapter = function() {\n        return !activeMenu_Chapter && setMenuSelection(\"chapter\");\n    };\n    var handleTombolSinopsis = function() {\n        return activeMenu_Chapter && setMenuSelection(\"sinopsis\");\n    };\n    console.log(menuSelection);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"KomikOI | Baca Manga, Manhua, Manhwa Bahasa Indonesia\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Banner, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().menu),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().tombolMenu), \" \").concat(!activeMenu_Chapter && (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().tombolAktif), \" no-select\"),\n                                onClick: handleTombolSinopsis,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().textTombol),\n                                    children: \"Sinopsis\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().tombolMenu), \" \").concat(activeMenu_Chapter && (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().tombolAktif), \" no-select\"),\n                                onClick: handleTombolChapter,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().textTombol),\n                                    children: \"Chapter\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Detail, \"lzkkdyjXmEKD2sMs5z3NeiS99Eg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Detail;\nfunction Banner() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().banner),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().bannerImage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/images/cover.jpg\",\n                    layout: \"fill\",\n                    objectFit: \"cover\",\n                    alt: \"yuanzun\",\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().infoKonten),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().infoJudul),\n                        children: \"Spare, Me Great Lord\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().infoGenre),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tombol__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().genreBox),\n                                children: \"Aksi\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tombol__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().genreBox),\n                                children: \"Fantasi\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tombol__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: (_styles_detailPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().genreBox),\n                                children: \"Kultivasi\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\pages\\\\detail\\\\[JudulKomik].js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this));\n}\n_c1 = Banner;\nvar _c, _c1;\n$RefreshReg$(_c, \"Detail\");\n$RefreshReg$(_c1, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvW0p1ZHVsS29taWtdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDRTtBQUNPO0FBQ1g7QUFDMkI7QUFFWDtBQUNBOztBQUU3QixRQUFRLENBQUNPLE1BQU0sR0FBRyxDQUFDOztJQUNoQyxHQUFLLENBQUNDLE1BQU0sR0FBR04sc0RBQVM7SUFDeEIsR0FBSyxDQUFHTyxVQUFVLEdBQUtELE1BQU0sQ0FBQ0UsS0FBSyxDQUEzQkQsVUFBVTtJQUVsQixHQUFLLENBQXFDUixHQUFtQixHQUFuQkEsK0NBQVEsQ0FBQyxDQUFTLFdBQXJEVSxhQUFhLEdBQXNCVixHQUFtQixLQUF2Q1csZ0JBQWdCLEdBQUlYLEdBQW1CO0lBQzdELEdBQUssQ0FBQ1ksa0JBQWtCLEdBQUdGLGFBQWEsSUFBSSxDQUFTO0lBRXJELEdBQUssQ0FBQ0csbUJBQW1CLEdBQUcsUUFDN0I7UUFBRyxNQUFNLEVBQUxELGtCQUFrQixJQUFJRCxnQkFBZ0IsQ0FBQyxDQUFTOztJQUVuRCxHQUFLLENBQUNHLG9CQUFvQixHQUFHLFFBQzlCO1FBQUdGLE1BQU0sQ0FBTkEsa0JBQWtCLElBQUlELGdCQUFnQixDQUFDLENBQVU7O0lBRW5ESSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sYUFBYTtJQUV6QixNQUFNOzt3RkFFRFIsa0RBQUk7O2dHQUNGZSxDQUFLO2tDQUFDLENBQXFEOzs7Ozs7Z0dBQzNEQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYTt3QkFBQ0MsT0FBTyxFQUFDLENBQThCOzs7Ozs7Z0dBQzlEQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7Ozt3RkFFckNsQiwwREFBTTs7Z0dBQ0ptQixNQUFNOzs7OztnR0FDTkMsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFdkIsMkVBQVc7O3dHQUN4QnNCLENBQUc7Z0NBQ0ZDLFNBQVMsRUFBRyxHQUNWLE1BQXlDLENBRDdCdkIsaUZBQWlCLEVBQUMsQ0FBQyxJQUVoQyxNQUFVLEVBRFJTLGtCQUFrQixJQUFJVCxrRkFBa0IsRUFDMUMsQ0FBVTtnQ0FDWDJCLE9BQU8sRUFBRWhCLG9CQUFvQjtzSEFFNUJpQixDQUFJO29DQUFDTCxTQUFTLEVBQUV2QixpRkFBaUI7OENBQUUsQ0FBUTs7Ozs7Ozs7Ozs7d0dBRTdDc0IsQ0FBRztnQ0FDRkMsU0FBUyxFQUFHLEdBQ1ZkLE1BQXdDLENBRDVCVCxpRkFBaUIsRUFBQyxDQUFDLElBRWhDLE1BQVUsQ0FEVFMsa0JBQWtCLElBQUlULGtGQUFrQixFQUN6QyxDQUFVO2dDQUNYMkIsT0FBTyxFQUFFakIsbUJBQW1CO3NIQUUzQmtCLENBQUk7b0NBQUNMLFNBQVMsRUFBRXZCLGlGQUFpQjs4Q0FBRSxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztnR0FHOUM4QixDQUFPOzs7Ozs7Ozs7Ozs7O0FBSWhCLENBQUM7R0E5Q3VCM0IsTUFBTTs7UUFDYkwsa0RBQVM7OztLQURGSyxNQUFNO1NBZ0RyQmtCLE1BQU0sR0FBRyxDQUFDO0lBQ2pCLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFFdkIsNkVBQWE7O3dGQUMxQnNCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRXZCLGtGQUFrQjtzR0FDL0JKLG1EQUFLO29CQUNKcUMsR0FBRyxFQUFHLENBQWlCO29CQUN2QkMsTUFBTSxFQUFDLENBQU07b0JBQ2JDLFNBQVMsRUFBQyxDQUFPO29CQUNqQkMsR0FBRyxFQUFDLENBQVM7b0JBQ2JDLFFBQVEsRUFBRSxJQUFJOzs7Ozs7Ozs7Ozt3RkFHakJmLENBQUc7Z0JBQUNDLFNBQVMsRUFBRXZCLGlGQUFpQjs7Z0dBQzlCdUMsQ0FBRTt3QkFBQ2hCLFNBQVMsRUFBRXZCLGdGQUFnQjtrQ0FBRSxDQUFvQjs7Ozs7O2dHQUNwRHNCLENBQUc7d0JBQUNDLFNBQVMsRUFBRXZCLGdGQUFnQjs7d0dBQzdCQywwREFBTTtnQ0FBQ3NCLFNBQVMsRUFBRXZCLCtFQUFlOzBDQUFFLENBQUk7Ozs7Ozt3R0FDdkNDLDBEQUFNO2dDQUFDc0IsU0FBUyxFQUFFdkIsK0VBQWU7MENBQUUsQ0FBTzs7Ozs7O3dHQUMxQ0MsMERBQU07Z0NBQUNzQixTQUFTLEVBQUV2QiwrRUFBZTswQ0FBRSxDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkQsQ0FBQztNQXRCUXFCLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1tKdWR1bEtvbWlrXS5qcz9kNmZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZGV0YWlsUGFnZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgVG9tYm9sIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RvbWJvbFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgSnVkdWxLb21payB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBbbWVudVNlbGVjdGlvbiwgc2V0TWVudVNlbGVjdGlvbl0gPSB1c2VTdGF0ZShcImNoYXB0ZXJcIik7XHJcbiAgY29uc3QgYWN0aXZlTWVudV9DaGFwdGVyID0gbWVudVNlbGVjdGlvbiA9PSBcImNoYXB0ZXJcIjtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9tYm9sQ2hhcHRlciA9ICgpID0+XHJcbiAgICAhYWN0aXZlTWVudV9DaGFwdGVyICYmIHNldE1lbnVTZWxlY3Rpb24oXCJjaGFwdGVyXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVUb21ib2xTaW5vcHNpcyA9ICgpID0+XHJcbiAgICBhY3RpdmVNZW51X0NoYXB0ZXIgJiYgc2V0TWVudVNlbGVjdGlvbihcInNpbm9wc2lzXCIpO1xyXG5cclxuICBjb25zb2xlLmxvZyhtZW51U2VsZWN0aW9uKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Lb21pa09JIHwgQmFjYSBNYW5nYSwgTWFuaHVhLCBNYW5od2EgQmFoYXNhIEluZG9uZXNpYTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy50b21ib2xNZW51fSAke1xyXG4gICAgICAgICAgICAgICFhY3RpdmVNZW51X0NoYXB0ZXIgJiYgc3R5bGVzLnRvbWJvbEFrdGlmXHJcbiAgICAgICAgICAgIH0gbm8tc2VsZWN0YH1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9tYm9sU2lub3BzaXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRleHRUb21ib2x9PlNpbm9wc2lzPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRvbWJvbE1lbnV9ICR7XHJcbiAgICAgICAgICAgICAgYWN0aXZlTWVudV9DaGFwdGVyICYmIHN0eWxlcy50b21ib2xBa3RpZlxyXG4gICAgICAgICAgICB9IG5vLXNlbGVjdGB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvbWJvbENoYXB0ZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRleHRUb21ib2x9PkNoYXB0ZXI8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c2VjdGlvbj48L3NlY3Rpb24+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQmFubmVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbm5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVySW1hZ2V9PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtgL2ltYWdlcy9jb3Zlci5qcGdgfVxyXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICBhbHQ9XCJ5dWFuenVuXCJcclxuICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9Lb250ZW59PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvSnVkdWx9PlNwYXJlLCBNZSBHcmVhdCBMb3JkPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9HZW5yZX0+XHJcbiAgICAgICAgICA8VG9tYm9sIGNsYXNzTmFtZT17c3R5bGVzLmdlbnJlQm94fT5Ba3NpPC9Ub21ib2w+XHJcbiAgICAgICAgICA8VG9tYm9sIGNsYXNzTmFtZT17c3R5bGVzLmdlbnJlQm94fT5GYW50YXNpPC9Ub21ib2w+XHJcbiAgICAgICAgICA8VG9tYm9sIGNsYXNzTmFtZT17c3R5bGVzLmdlbnJlQm94fT5LdWx0aXZhc2k8L1RvbWJvbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSGVhZCIsInN0eWxlcyIsIlRvbWJvbCIsIkxheW91dCIsIkRldGFpbCIsInJvdXRlciIsIkp1ZHVsS29taWsiLCJxdWVyeSIsIm1lbnVTZWxlY3Rpb24iLCJzZXRNZW51U2VsZWN0aW9uIiwiYWN0aXZlTWVudV9DaGFwdGVyIiwiaGFuZGxlVG9tYm9sQ2hhcHRlciIsImhhbmRsZVRvbWJvbFNpbm9wc2lzIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJCYW5uZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtZW51IiwidG9tYm9sTWVudSIsInRvbWJvbEFrdGlmIiwib25DbGljayIsInNwYW4iLCJ0ZXh0VG9tYm9sIiwic2VjdGlvbiIsImJhbm5lciIsImJhbm5lckltYWdlIiwic3JjIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiYWx0IiwicHJpb3JpdHkiLCJpbmZvS29udGVuIiwiaDIiLCJpbmZvSnVkdWwiLCJpbmZvR2VucmUiLCJnZW5yZUJveCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail/[JudulKomik].js\n");

/***/ })

});