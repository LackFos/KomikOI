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

/***/ "./contexts/singleSelectionMenu.js":
/*!*****************************************!*\
  !*** ./contexts/singleSelectionMenu.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleSelectionMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\n\n\nfunction SingleSelectionMenu(param) {\n    var children = param.children, _activeIndex = param.activeIndex, activeIndex = _activeIndex === void 0 ? 0 : _activeIndex, _useref = param.useref, useref = _useref === void 0 ? (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)() : _useref;\n    var _this = this;\n    var handleClick = function(event) {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = useref.current.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var element = _step.value;\n                element.classList.remove(\"aktif\");\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        event.target.parentElement.classList.add(\"aktif\");\n    };\n    console.log(\"Active\");\n    var childElement = children.map(function(value, index) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(index == activeIndex ? \"aktif\" : \"\", \" no-select\"),\n            onClick: handleClick,\n            children: value\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\contexts\\\\singleSelectionMenu.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, _this));\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: useref,\n        className: \"singleMenuSelection\",\n        children: childElement\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LackFos\\\\Documents\\\\GitHub\\\\KomikOI\\\\contexts\\\\singleSelectionMenu.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this));\n};\n_c = SingleSelectionMenu;\nvar _c;\n$RefreshReg$(_c, \"SingleSelectionMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9zaW5nbGVTZWxlY3Rpb25NZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDSztBQUVwQixRQUFRLENBQUNFLG1CQUFtQixDQUFDLEtBSTNDLEVBQUUsQ0FBQztRQUhGQyxRQUFRLEdBRGtDLEtBSTNDLENBSENBLFFBQVEsaUJBRGtDLEtBSTNDLENBRkNDLFdBQVcsRUFBWEEsV0FBVyw2QkFBRyxDQUFDLDJCQUYyQixLQUkzQyxDQURDQyxNQUFNLEVBQU5BLE1BQU0sd0JBQUdMLDZDQUFNOztJQUVmLEdBQUssQ0FBQ00sV0FBVyxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7WUFDekIseUJBQVcsU0FBWCxpQkFBVyxVQUFYLGNBQVc7O1lBQWhCLEdBQUcsS0FBRSxTQUFXLEdBQUlGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDTCxRQUFRLHFCQUF0QyxLQUFXLElBQVgseUJBQVcsSUFBWCxLQUFXLEdBQVgsU0FBVyxnQkFBWCx5QkFBVyxRQUE2QixDQUFDO2dCQUF6QyxHQUFHLENBQUNNLE9BQU8sR0FBWCxLQUFXO2dCQUNkQSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLENBQU87WUFDbEMsQ0FBQzs7WUFGSSxpQkFBVztZQUFYLGNBQVc7OztxQkFBWCx5QkFBVyxJQUFYLFNBQVc7b0JBQVgsU0FBVzs7O29CQUFYLGlCQUFXOzBCQUFYLGNBQVc7Ozs7UUFHaEJKLEtBQUssQ0FBQ0ssTUFBTSxDQUFDQyxhQUFhLENBQUNILFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLENBQU87SUFDbEQsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFRO0lBQ3BCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHZCxRQUFRLENBQUNlLEdBQUcsQ0FBQyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELEtBQUssRUFBSyxDQUFDO1FBQ25ELE1BQU0sNkVBQ0hFLENBQUc7WUFDRkMsU0FBUyxFQUFHLEdBQXNDLE1BQVUsQ0FBOUNILEtBQUssSUFBSWYsV0FBVyxHQUFHLENBQU8sU0FBRyxDQUFFLEdBQUMsQ0FBVTtZQUM1RG1CLE9BQU8sRUFBRWpCLFdBQVc7c0JBR25CYyxLQUFLO1dBRkRELEtBQUs7Ozs7O0lBS2hCLENBQUM7SUFFRCxNQUFNLDZFQUNIRSxDQUFHO1FBQUNHLEdBQUcsRUFBRW5CLE1BQU07UUFBRWlCLFNBQVMsRUFBQyxDQUFxQjtrQkFDOUNMLFlBQVk7Ozs7OztBQUduQixDQUFDO0tBN0J1QmYsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHRzL3NpbmdsZVNlbGVjdGlvbk1lbnUuanM/OGU0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRWZmZWN0Q3ViZSB9IGZyb20gXCJzd2lwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZVNlbGVjdGlvbk1lbnUoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGFjdGl2ZUluZGV4ID0gMCxcclxuICB1c2VyZWYgPSB1c2VSZWYoKSxcclxufSkge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIHVzZXJlZi5jdXJyZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFrdGlmXCIpO1xyXG4gICAgfVxyXG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFrdGlmXCIpO1xyXG4gIH07XHJcbiAgY29uc29sZS5sb2coXCJBY3RpdmVcIik7XHJcbiAgY29uc3QgY2hpbGRFbGVtZW50ID0gY2hpbGRyZW4ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake2luZGV4ID09IGFjdGl2ZUluZGV4ID8gXCJha3RpZlwiIDogXCJcIn0gbm8tc2VsZWN0YH1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICA+XHJcbiAgICAgICAge3ZhbHVlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17dXNlcmVmfSBjbGFzc05hbWU9XCJzaW5nbGVNZW51U2VsZWN0aW9uXCI+XHJcbiAgICAgIHtjaGlsZEVsZW1lbnR9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJFZmZlY3RDdWJlIiwiU2luZ2xlU2VsZWN0aW9uTWVudSIsImNoaWxkcmVuIiwiYWN0aXZlSW5kZXgiLCJ1c2VyZWYiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiYWRkIiwiY29uc29sZSIsImxvZyIsImNoaWxkRWxlbWVudCIsIm1hcCIsImluZGV4IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/singleSelectionMenu.js\n");

/***/ })

});