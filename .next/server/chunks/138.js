exports.id = 138;
exports.ids = [138];
exports.modules = {

/***/ 4814:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "borderBottom_main___lyAM",
	"text": "borderBottom_text__1JZ6d"
};


/***/ }),

/***/ 1575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BorderBottom)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_borderBottom_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4814);
/* harmony import */ var _styles_borderBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_borderBottom_module_css__WEBPACK_IMPORTED_MODULE_1__);


function BorderBottom({ text , onClick  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_borderBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().main),
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_borderBottom_module_css__WEBPACK_IMPORTED_MODULE_1___default().text),
            children: text
        })
    }));
};


/***/ }),

/***/ 4541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SingleSelectionMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__]);
swiper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function SingleSelectionMenu({ children , activeIndex =0 , useref =(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)() ,  }) {
    const handleClick = (event)=>{
        for (let element of useref.current.children){
            element.classList.remove("aktif");
        }
        event.target.parentElement.classList.add("aktif");
    };
    const childElement = children.map((value, index)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${index == activeIndex ? "aktif" : ""} no-select`,
            onClick: handleClick,
            children: value
        }, index));
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: useref,
        className: "singleMenuSelection",
        children: childElement
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;