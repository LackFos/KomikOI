"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/genres",{

/***/ "./libs/singleSelectionMenu.js":
/*!*************************************!*\
  !*** ./libs/singleSelectionMenu.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleMenuSelection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SingleMenuSelection(param) {\n    var children = param.children, activeIndex = param.activeIndex, _indexKey = param.indexKey, indexKey = _indexKey === void 0 ? 0 : _indexKey, setState = param.setState, customOnChange = param.customOnChange, _classTambahan = param.classTambahan, classTambahan1 = _classTambahan === void 0 ? \"\" : _classTambahan;\n    var _this = this;\n    var handleChange = function(event, value) {\n        setState != undefined && setState(value);\n        customOnChange != undefined && customOnChange(value);\n    };\n    // Inject / Menambahkan Element Tambahan\n    var childElement = children.map(function(value, index) {\n        var classTambahan = value.props.classTambahan != undefined ? value.props.classTambahan : \"\";\n        var filterElemenBukanChild = value.props.exclude == 0 || undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"child \".concat(classTambahan, \" no-select\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"selectionMenu_checkbox\",\n                    type: \"radio\",\n                    name: \"selectionMenuRadio \".concat(indexKey),\n                    defaultChecked: index == activeIndex,\n                    onChange: function(event) {\n                        return handleChange(event, value.props.text);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\libs\\\\singleSelectionMenu.js\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, _this),\n                value\n            ]\n        }, index, true, {\n            fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\libs\\\\singleSelectionMenu.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, _this) : value;\n        return filterElemenBukanChild;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"singleMenuSelection \".concat(classTambahan1),\n        children: childElement\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\libs\\\\singleSelectionMenu.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this));\n};\n_c = SingleMenuSelection;\nvar _c;\n$RefreshReg$(_c, \"SingleMenuSelection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3NpbmdsZVNlbGVjdGlvbk1lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFFBQVEsQ0FBQ0EsbUJBQW1CLENBQUMsS0FPM0MsRUFBRSxDQUFDO1FBTkZDLFFBQVEsR0FEa0MsS0FPM0MsQ0FOQ0EsUUFBUSxFQUNSQyxXQUFXLEdBRitCLEtBTzNDLENBTENBLFdBQVcsY0FGK0IsS0FPM0MsQ0FKQ0MsUUFBUSxFQUFSQSxRQUFRLDBCQUFHLENBQUMsY0FDWkMsUUFBUSxHQUprQyxLQU8zQyxDQUhDQSxRQUFRLEVBQ1JDLGNBQWMsR0FMNEIsS0FPM0MsQ0FGQ0EsY0FBYyxtQkFMNEIsS0FPM0MsQ0FEQ0MsYUFBYSxFQUFiQSxjQUFhLCtCQUFHLENBQUU7O0lBRWxCLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsS0FBSyxFQUFLLENBQUM7UUFDcENKLFFBQVEsSUFBSU0sU0FBUyxJQUFJTixRQUFRLENBQUNJLEtBQUs7UUFDdkNILGNBQWMsSUFBSUssU0FBUyxJQUFJTCxjQUFjLENBQUNHLEtBQUs7SUFDckQsQ0FBQztJQUVELEVBQXdDO0lBQ3hDLEdBQUssQ0FBQ0csWUFBWSxHQUFHVixRQUFRLENBQUNXLEdBQUcsQ0FBQyxRQUFRQyxDQUFQTCxLQUFLLEVBQUVLLEtBQUssRUFBSyxDQUFDO1FBQ25ELEdBQUssQ0FBQ1AsYUFBYSxHQUNqQkUsS0FBSyxDQUFDTSxLQUFLLENBQUNSLGFBQWEsSUFBSUksU0FBUyxHQUFHRixLQUFLLENBQUNNLEtBQUssQ0FBQ1IsYUFBYSxHQUFHLENBQUU7UUFFekUsR0FBSyxDQUFDUyxzQkFBc0IsR0FDMUJQLEtBQUssQ0FBQ00sS0FBSyxDQUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJTixTQUFTLCtFQUNsQ08sQ0FBRztZQUFDQyxTQUFTLEVBQUcsQ0FBTSxRQUFnQixNQUFVLENBQXhCWixhQUFhLEVBQUMsQ0FBVTs7NEZBQzlDYSxDQUFLO29CQUNKRCxTQUFTLEVBQUMsQ0FBd0I7b0JBQ2xDRSxJQUFJLEVBQUMsQ0FBTztvQkFDWkMsSUFBSSxFQUFHLENBQW1CLHFCQUFXLE9BQVRsQixRQUFRO29CQUNwQ21CLGNBQWMsRUFBRVQsS0FBSyxJQUFJWCxXQUFXO29CQUNwQ3FCLFFBQVEsRUFBRSxRQUFRLENBQVBkLEtBQUs7d0JBQUtGLE1BQU0sQ0FBTkEsWUFBWSxDQUFDRSxLQUFLLEVBQUVELEtBQUssQ0FBQ00sS0FBSyxDQUFDVSxJQUFJOzs7Ozs7O2dCQUUxRGhCLEtBQUs7O1dBUmlESyxLQUFLOzs7O29CQVc5REwsS0FBSztRQUdULE1BQU0sQ0FBQ08sc0JBQXNCO0lBQy9CLENBQUM7SUFFRCxNQUFNLDZFQUNIRSxDQUFHO1FBQUNDLFNBQVMsRUFBRyxDQUFvQixzQkFBZ0IsT0FBZFosY0FBYTtrQkFBS0ssWUFBWTs7Ozs7O0FBRXpFLENBQUM7S0F4Q3VCWCxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9zaW5nbGVTZWxlY3Rpb25NZW51LmpzPzA4YTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlTWVudVNlbGVjdGlvbih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgYWN0aXZlSW5kZXgsXHJcbiAgaW5kZXhLZXkgPSAwLFxyXG4gIHNldFN0YXRlLFxyXG4gIGN1c3RvbU9uQ2hhbmdlLFxyXG4gIGNsYXNzVGFtYmFoYW4gPSBcIlwiLFxyXG59KSB7XHJcbiAgbGV0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcclxuICAgIHNldFN0YXRlICE9IHVuZGVmaW5lZCAmJiBzZXRTdGF0ZSh2YWx1ZSk7XHJcbiAgICBjdXN0b21PbkNoYW5nZSAhPSB1bmRlZmluZWQgJiYgY3VzdG9tT25DaGFuZ2UodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIEluamVjdCAvIE1lbmFtYmFoa2FuIEVsZW1lbnQgVGFtYmFoYW5cclxuICBjb25zdCBjaGlsZEVsZW1lbnQgPSBjaGlsZHJlbi5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NUYW1iYWhhbiA9XHJcbiAgICAgIHZhbHVlLnByb3BzLmNsYXNzVGFtYmFoYW4gIT0gdW5kZWZpbmVkID8gdmFsdWUucHJvcHMuY2xhc3NUYW1iYWhhbiA6IFwiXCI7XHJcblxyXG4gICAgY29uc3QgZmlsdGVyRWxlbWVuQnVrYW5DaGlsZCA9XHJcbiAgICAgIHZhbHVlLnByb3BzLmV4Y2x1ZGUgPT0gMCB8fCB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjaGlsZCAke2NsYXNzVGFtYmFoYW59IG5vLXNlbGVjdGB9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGlvbk1lbnVfY2hlY2tib3hcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBuYW1lPXtgc2VsZWN0aW9uTWVudVJhZGlvICR7aW5kZXhLZXl9YH1cclxuICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2luZGV4ID09IGFjdGl2ZUluZGV4fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHZhbHVlLnByb3BzLnRleHQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICApO1xyXG5cclxuICAgIHJldHVybiBmaWx0ZXJFbGVtZW5CdWthbkNoaWxkO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzaW5nbGVNZW51U2VsZWN0aW9uICR7Y2xhc3NUYW1iYWhhbn1gfT57Y2hpbGRFbGVtZW50fTwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlNpbmdsZU1lbnVTZWxlY3Rpb24iLCJjaGlsZHJlbiIsImFjdGl2ZUluZGV4IiwiaW5kZXhLZXkiLCJzZXRTdGF0ZSIsImN1c3RvbU9uQ2hhbmdlIiwiY2xhc3NUYW1iYWhhbiIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwiZXZlbnQiLCJ1bmRlZmluZWQiLCJjaGlsZEVsZW1lbnQiLCJtYXAiLCJpbmRleCIsInByb3BzIiwiZmlsdGVyRWxlbWVuQnVrYW5DaGlsZCIsImV4Y2x1ZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiZGVmYXVsdENoZWNrZWQiLCJvbkNoYW5nZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/singleSelectionMenu.js\n");

/***/ })

});