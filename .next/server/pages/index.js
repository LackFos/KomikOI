(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7122:
/***/ ((module) => {

// Exports
module.exports = {
	"tombolPrev": "SlideShow_tombolPrev__m91L_",
	"tombolNext": "SlideShow_tombolNext__HwCMN",
	"slide": "SlideShow_slide__T43ve",
	"bgImage": "SlideShow_bgImage__plM3n",
	"imageOverlay": "SlideShow_imageOverlay__dO3CV",
	"imageBrightness": "SlideShow_imageBrightness__1OT_B",
	"kontenSlide": "SlideShow_kontenSlide__n4_pz",
	"fotoKonten": "SlideShow_fotoKonten__K7bON",
	"kontenInfo": "SlideShow_kontenInfo__ekro4",
	"infoJudul": "SlideShow_infoJudul__U8Nxa",
	"infoTipe": "SlideShow_infoTipe__bHUEK",
	"infoDeskripsi": "SlideShow_infoDeskripsi__iu_tv",
	"main": "SlideShow_main__bVpFD"
};


/***/ }),

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"KontenBox": "Home_KontenBox__TchZv",
	"header": "Home_header__GCVRv",
	"tombolLagi": "Home_tombolLagi__lRFLm",
	"thumbnailList": "Home_thumbnailList__XorPd",
	"thumbnail": "Home_thumbnail__xs1Hd",
	"thumbnailImageBox": "Home_thumbnailImageBox__FPhWi",
	"thumbnailImage": "Home_thumbnailImage__kCwJ0",
	"description": "Home_description__41Owk",
	"infoTitle": "Home_infoTitle__Htu2Y"
};


/***/ }),

/***/ 14:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ slideshow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7122);
/* harmony import */ var _styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8952);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__]);
([swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// Swipper




function slideshow(props) {
    const Data = props.DataSlideshow;
    const { SlideshowConfig  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
                swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination
            ],
            loop: true,
            centeredSlides: true,
            slidesPerView: SlideshowConfig.slidesPerView,
            pagination: {
                clickable: true
            },
            navigation: SlideshowConfig.navigation && {
                prevEl: `.${(_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().tombolPrev)}`,
                nextEl: `.${(_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().tombolNext)}`
            },
            children: [
                Data.map((data, index)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: `/detail/${data.link}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(KontenSlide, {
                                    data: data
                                })
                            })
                        }, index)
                    }, data.judul));
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().tombolPrev),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* .Chevron */ .Tt, {
                        direction: "left",
                        color: "var(--main)"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().tombolNext),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* .Chevron */ .Tt, {
                        direction: "right",
                        color: "var(--main)"
                    })
                })
            ]
        })
    }));
};
function KontenSlide({ data  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().slide),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().bgImage),
                src: `/images/${data.foto}`,
                layout: "fill",
                objectFit: "cover",
                alt: data.judul,
                priority: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().imageBrightness)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().imageOverlay)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().kontenSlide),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().fotoKonten),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            src: `/images/${data.foto}`,
                            layout: "fill",
                            alt: "yuanzun"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().kontenInfo),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().infoJudul),
                                children: data.judul
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().infoTipe),
                                children: "Manhua"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_SlideShow_module_css__WEBPACK_IMPORTED_MODULE_6___default().infoDeskripsi),
                                children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates iusto illo consectetur praesentium, nostrum earum!"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMediaQuery(query) {
    const { 0: matches , 1: setMatches  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = ()=>{
            setMatches(media.matches);
        };
        media.addListener(listener);
        return ()=>media.removeListener(listener)
        ;
    }, [
        matches,
        query
    ]);
    return matches;
};


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _components_SlideShow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8023);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8952);
/* harmony import */ var _contexts_mediaquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(308);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SlideShow__WEBPACK_IMPORTED_MODULE_4__]);
_components_SlideShow__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









async function getServerSideProps() {
    return {
        props: {
            Data: [
                {
                    judul: "Spare Me, Great Lord !",
                    foto: "cover.jpg",
                    link: "spare-me-great-lord"
                },
                {
                    judul: "Yuan Zun",
                    foto: "cover2.jpg",
                    link: "yuan-zun"
                },
                {
                    judul: "Wo Shi Da Shen Xian",
                    foto: "cover3.jpg",
                    link: "wo-shi-da-shen-xian"
                }, 
            ],
            DataSlideshow: [
                {
                    judul: "Spare Me, Great Lord !",
                    foto: "cover.jpg",
                    link: "spare-me-great-lord"
                },
                {
                    judul: "Yuan Zun",
                    foto: "cover2.jpg",
                    link: "yuan-zun"
                },
                {
                    judul: "Wo Shi Da Shen Xian",
                    foto: "cover3.jpg",
                    link: "wo-shi-da-shen-xian"
                }, 
            ]
        }
    };
}
function Home({ Data , DataSlideshow  }) {
    const isTablet = (0,_contexts_mediaquery__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("(min-width: 768px)");
    let SlideshowConfig = {
        slidesPerView: 1,
        navigation: false
    };
    isTablet && (SlideshowConfig = {
        slidesPerView: 1.5,
        navigation: true
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "KomikOI | Baca Manga, Manhua, Manhwa Bahasa Indonesia"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SlideShow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        DataSlideshow: DataSlideshow,
                        SlideshowConfig: SlideshowConfig
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().KontenBox),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThumbnailList, {
                                data: Data
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
function Header() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Komik Populer"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().tombolLagi),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Lagi"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_6__/* .Chevron */ .Tt, {
                            width: 10,
                            viewBox: "1 4 15 15"
                        })
                    ]
                })
            })
        ]
    }));
}
function ThumbnailList({ data  }) {
    const card = data.map((value)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: `/detail/${value.link}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().thumbnail),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().thumbnailImageBox),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().thumbnailImage),
                            src: `/images/${value.foto}`,
                            layout: "fill",
                            alt: "yuanzun"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().infoTitle),
                            children: value.judul
                        })
                    })
                ]
            })
        }, value.judul));
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().thumbnailList),
        children: card
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,23], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();