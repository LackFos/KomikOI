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

/***/ "./components/DetailPage/Chapter.js":
/*!******************************************!*\
  !*** ./components/DetailPage/Chapter.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chapter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_menu_Filltext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu/Filltext */ \"./components/menu/Filltext.js\");\n/* harmony import */ var _styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/DetailPage/Chapter.module.css */ \"./styles/DetailPage/Chapter.module.css\");\n/* harmony import */ var _styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _libs_singleSelectionMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/singleSelectionMenu */ \"./libs/singleSelectionMenu.js\");\n/* harmony import */ var _pages_detail_JudulKomik___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/detail/[JudulKomik] */ \"./pages/detail/[JudulKomik].js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Chapter() {\n    var _this = this;\n    _s();\n    var chapterBoxRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var DataChapter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_detail_JudulKomik___WEBPACK_IMPORTED_MODULE_4__.DetailContext).DataChapter;\n    var handleChange = function(value) {\n        chapterBoxRef.current.classList.remove(\"Turun\");\n        chapterBoxRef.current.classList.remove(\"Naik\");\n        chapterBoxRef.current.classList.add(value);\n    };\n    var ElemenItems = DataChapter.map(function(value, index) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: (_styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5___default().Items),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5___default().chapter),\n                    children: value.judul\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\components\\\\DetailPage\\\\Chapter.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5___default().tanggalRilis),\n                    children: value.tanggal\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\components\\\\DetailPage\\\\Chapter.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, index, true, {\n            fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\components\\\\DetailPage\\\\Chapter.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this));\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5___default().Sort),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5___default().totalChapter),\n                        children: [\n                            \"Total \",\n                            DataChapter.length,\n                            \" Chapter\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\components\\\\DetailPage\\\\Chapter.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_libs_singleSelectionMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        indexKey: 1,\n                        activeIndex: 2,\n                        customOnChange: handleChange,\n                        classTambahan: (_styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5___default().sortMenu),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu_Filltext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Naik\",\n                                classTambahan: (_styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5___default().tombolSort)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\components\\\\DetailPage\\\\Chapter.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hr\",\n                                exclude: 1\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\components\\\\DetailPage\\\\Chapter.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu_Filltext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Turun\",\n                                classTambahan: (_styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5___default().tombolSort)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\components\\\\DetailPage\\\\Chapter.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\components\\\\DetailPage\\\\Chapter.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\components\\\\DetailPage\\\\Chapter.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\".concat((_styles_DetailPage_Chapter_module_css__WEBPACK_IMPORTED_MODULE_5___default().chapterList), \" Turun\"),\n                ref: chapterBoxRef,\n                children: ElemenItems\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\components\\\\DetailPage\\\\Chapter.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\components\\\\DetailPage\\\\Chapter.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n};\n_s(Chapter, \"mzwtTcm7PKIxyOIV+7/2hMFtSQw=\");\n_c = Chapter;\nvar _c;\n$RefreshReg$(_c, \"Chapter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RldGFpbFBhZ2UvQ2hhcHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNXO0FBQ1E7QUFDRTtBQUNDO0FBQ0Q7O0FBRWhELFFBQVEsQ0FBQ08sT0FBTyxHQUFHLENBQUM7OztJQUNqQyxHQUFLLENBQUNDLGFBQWEsR0FBR1IsNkNBQU07SUFDNUIsR0FBSyxDQUFDUyxXQUFXLEdBQUdSLGlEQUFVLENBQUNLLG9FQUFhLEVBQUVHLFdBQVc7SUFFekQsR0FBSyxDQUFDQyxZQUFZLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztRQUMvQkgsYUFBYSxDQUFDSSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLENBQU87UUFDOUNOLGFBQWEsQ0FBQ0ksT0FBTyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFNO1FBQzdDTixhQUFhLENBQUNJLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDRSxHQUFHLENBQUNKLEtBQUs7SUFDM0MsQ0FBQztJQUVELEdBQUssQ0FBQ0ssV0FBVyxHQUFHUCxXQUFXLENBQUNRLEdBQUcsQ0FBQyxRQUFRQyxDQUFQUCxLQUFLLEVBQUVPLEtBQUssRUFBSyxDQUFDO1FBQ3JELE1BQU0sNkVBQ0hDLENBQUU7WUFBQ0MsU0FBUyxFQUFFaEIsb0ZBQVk7OzRGQUN4QmtCLENBQUc7b0JBQUNGLFNBQVMsRUFBRWhCLHNGQUFjOzhCQUFHTyxLQUFLLENBQUNhLEtBQUs7Ozs7Ozs0RkFDM0NGLENBQUc7b0JBQUNGLFNBQVMsRUFBRWhCLDJGQUFtQjs4QkFBR08sS0FBSyxDQUFDZSxPQUFPOzs7Ozs7O1dBRm5CUixLQUFLOzs7OztJQUszQyxDQUFDO0lBRUQsTUFBTSw2RUFDSEksQ0FBRztRQUFDRixTQUFTLEVBQUVoQixtRkFBVzs7d0ZBQ3hCa0IsQ0FBRztnQkFBQ0YsU0FBUyxFQUFFaEIsbUZBQVc7O2dHQUN4QmtCLENBQUc7d0JBQUNGLFNBQVMsRUFBRWhCLDJGQUFtQjs7NEJBQUUsQ0FDN0I7NEJBQUNLLFdBQVcsQ0FBQ3FCLE1BQU07NEJBQUMsQ0FDNUI7Ozs7Ozs7Z0dBQ0N6QixpRUFBbUI7d0JBQ2xCMEIsUUFBUSxFQUFFLENBQUM7d0JBQ1hDLFdBQVcsRUFBRSxDQUFDO3dCQUNkQyxjQUFjLEVBQUV2QixZQUFZO3dCQUM1QndCLGFBQWEsRUFBRTlCLHVGQUFlOzt3R0FFN0JGLGlFQUFRO2dDQUFDa0MsSUFBSSxFQUFDLENBQU07Z0NBQUNGLGFBQWEsRUFBRTlCLHlGQUFpQjs7Ozs7O3dHQUNyRGtCLENBQUc7Z0NBQUNGLFNBQVMsRUFBQyxDQUFJO2dDQUFDa0IsT0FBTyxFQUFFLENBQUM7Ozs7Ozt3R0FDN0JwQyxpRUFBUTtnQ0FBQ2tDLElBQUksRUFBQyxDQUFPO2dDQUFDRixhQUFhLEVBQUU5Qix5RkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHMURtQyxDQUFFO2dCQUFDbkIsU0FBUyxFQUFHLEdBQXFCLE1BQU0sQ0FBekJoQiwwRkFBa0IsRUFBQyxDQUFNO2dCQUFHcUMsR0FBRyxFQUFFakMsYUFBYTswQkFDN0RRLFdBQVc7Ozs7Ozs7Ozs7OztBQUlwQixDQUFDO0dBekN1QlQsT0FBTztLQUFQQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGV0YWlsUGFnZS9DaGFwdGVyLmpzPzcwYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGaWxsVGV4dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZW51L0ZpbGx0ZXh0XCI7XHJcbmltcG9ydCBzdHlsZXNEZXRhaWwgZnJvbSBcIi4uLy4uL3N0eWxlcy9kZXRhaWxQYWdlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0RldGFpbFBhZ2UvQ2hhcHRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb25NZW51IGZyb20gXCIuLi8uLi9saWJzL3NpbmdsZVNlbGVjdGlvbk1lbnVcIjtcclxuaW1wb3J0IHsgRGV0YWlsQ29udGV4dCB9IGZyb20gXCIuLi8uLi9wYWdlcy9kZXRhaWwvW0p1ZHVsS29taWtdXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFwdGVyKCkge1xyXG4gIGNvbnN0IGNoYXB0ZXJCb3hSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBEYXRhQ2hhcHRlciA9IHVzZUNvbnRleHQoRGV0YWlsQ29udGV4dCkuRGF0YUNoYXB0ZXI7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY2hhcHRlckJveFJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJUdXJ1blwiKTtcclxuICAgIGNoYXB0ZXJCb3hSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiTmFpa1wiKTtcclxuICAgIGNoYXB0ZXJCb3hSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBFbGVtZW5JdGVtcyA9IERhdGFDaGFwdGVyLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuSXRlbXN9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcHRlcn0+e3ZhbHVlLmp1ZHVsfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFuZ2dhbFJpbGlzfT57dmFsdWUudGFuZ2dhbH08L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNvcnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxDaGFwdGVyfT5cclxuICAgICAgICAgIFRvdGFsIHtEYXRhQ2hhcHRlci5sZW5ndGh9IENoYXB0ZXJcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2luZ2xlU2VsZWN0aW9uTWVudVxyXG4gICAgICAgICAgaW5kZXhLZXk9ezF9XHJcbiAgICAgICAgICBhY3RpdmVJbmRleD17Mn1cclxuICAgICAgICAgIGN1c3RvbU9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc1RhbWJhaGFuPXtzdHlsZXMuc29ydE1lbnV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZpbGxUZXh0IHRleHQ9XCJOYWlrXCIgY2xhc3NUYW1iYWhhbj17c3R5bGVzLnRvbWJvbFNvcnR9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhyXCIgZXhjbHVkZT17MX0gLz5cclxuICAgICAgICAgIDxGaWxsVGV4dCB0ZXh0PVwiVHVydW5cIiBjbGFzc1RhbWJhaGFuPXtzdHlsZXMudG9tYm9sU29ydH0gLz5cclxuICAgICAgICA8L1NpbmdsZVNlbGVjdGlvbk1lbnU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2hhcHRlckxpc3R9IFR1cnVuYH0gcmVmPXtjaGFwdGVyQm94UmVmfT5cclxuICAgICAgICB7RWxlbWVuSXRlbXN9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwiRmlsbFRleHQiLCJzdHlsZXNEZXRhaWwiLCJzdHlsZXMiLCJTaW5nbGVTZWxlY3Rpb25NZW51IiwiRGV0YWlsQ29udGV4dCIsIkNoYXB0ZXIiLCJjaGFwdGVyQm94UmVmIiwiRGF0YUNoYXB0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJFbGVtZW5JdGVtcyIsIm1hcCIsImluZGV4IiwibGkiLCJjbGFzc05hbWUiLCJJdGVtcyIsImRpdiIsImNoYXB0ZXIiLCJqdWR1bCIsInRhbmdnYWxSaWxpcyIsInRhbmdnYWwiLCJtYWluIiwiU29ydCIsInRvdGFsQ2hhcHRlciIsImxlbmd0aCIsImluZGV4S2V5IiwiYWN0aXZlSW5kZXgiLCJjdXN0b21PbkNoYW5nZSIsImNsYXNzVGFtYmFoYW4iLCJzb3J0TWVudSIsInRleHQiLCJ0b21ib2xTb3J0IiwiZXhjbHVkZSIsInVsIiwiY2hhcHRlckxpc3QiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DetailPage/Chapter.js\n");

/***/ })

});