"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Loader/index.js":
/*!****************************************!*\
  !*** ./app/components/Loader/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-pages-browser)/./app/components/Loader/data.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.module.scss */ \"(app-pages-browser)/./app/components/Loader/Loader.module.scss\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Loader = ()=>{\n    _s();\n    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const loaderProgressNumberRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wordsGroupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(wordsGroupRef.current, {\n            yPercent: -80,\n            duration: 5,\n            ease: \"expo.inOut\"\n        }); // access object by using .current\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(progressRef.current, {\n            scale: 1,\n            duration: 5,\n            ease: \"expo.inOut\"\n        });\n    }, []); // empty dependency array, run once on load\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wrapper),\n        ref: wrapperRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progress),\n                        ref: progressRef\n                    }, void 0, false, {\n                        fileName: \"/Users/stef/Documents/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressNumber),\n                        ref: loaderProgressNumberRef,\n                        children: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stef/Documents/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stef/Documents/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__words),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__overlay)\n                        }, void 0, false, {\n                            fileName: \"/Users/stef/Documents/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wordsGroup),\n                            ref: wordsGroupRef,\n                            children: _data__WEBPACK_IMPORTED_MODULE_2__.words.map((word, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__word),\n                                    children: word\n                                }, index, false, {\n                                    fileName: \"/Users/stef/Documents/ultra-starter/app/components/Loader/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/stef/Documents/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stef/Documents/ultra-starter/app/components/Loader/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/stef/Documents/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stef/Documents/ultra-starter/app/components/Loader/index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"SWrnAIbDH947b3ByilRdQBYpFOg=\");\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0xvYWRlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ2xCO0FBQ0g7QUFFYztBQUUxQyxNQUFNTSxTQUFTOztJQUNiLE1BQU1DLGFBQWFMLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU1NLGNBQWNOLDZDQUFNQSxDQUFDO0lBQzNCLE1BQU1PLDBCQUEwQlAsNkNBQU1BLENBQUM7SUFDdkMsTUFBTVEsZ0JBQWdCUiw2Q0FBTUEsQ0FBQztJQUU3QkQsZ0RBQVNBLENBQUM7UUFDUkcsc0NBQUlBLENBQUNPLEVBQUUsQ0FBQ0QsY0FBY0UsT0FBTyxFQUFFO1lBQzdCQyxVQUFVLENBQUM7WUFDWEMsVUFBVTtZQUNWQyxNQUFNO1FBQ1IsSUFBSSxrQ0FBa0M7UUFFdENYLHNDQUFJQSxDQUFDTyxFQUFFLENBQUNILFlBQVlJLE9BQU8sRUFBRTtZQUMzQkksT0FBTztZQUNQRixVQUFVO1lBQ1ZDLE1BQU07UUFDUjtJQUNGLEdBQUcsRUFBRSxHQUFHLDJDQUEyQztJQUVuRCxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBV2IsNEVBQXNCO1FBQUVlLEtBQUtiOzswQkFFM0MsOERBQUNVO2dCQUFJQyxXQUFXYixvRkFBOEI7O2tDQUM1Qyw4REFBQ1k7d0JBQUlDLFdBQVdiLDZFQUF1Qjt3QkFBRWUsS0FBS1o7Ozs7OztrQ0FDOUMsOERBQUNlO3dCQUNDTCxXQUFXYixtRkFBNkI7d0JBQ3hDZSxLQUFLWDtrQ0FDTjs7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDUTtnQkFBSUMsV0FBV2IsbUVBQWE7MEJBQzNCLDRFQUFDWTtvQkFBSUMsV0FBV2IsMEVBQW9COztzQ0FDbEMsOERBQUNZOzRCQUFJQyxXQUFXYiw0RUFBc0I7Ozs7OztzQ0FDdEMsOERBQUNZOzRCQUFJQyxXQUFXYiwrRUFBeUI7NEJBQUVlLEtBQUtWO3NDQUM3Q1Asd0NBQUtBLENBQUMwQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7Z0NBQ2hCLHFCQUNFLDhEQUFDUjtvQ0FBaUJMLFdBQVdiLHlFQUFtQjs4Q0FDN0N5QjttQ0FEUUM7Ozs7OzRCQUlmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBaERNekI7S0FBQUE7QUFrRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzPzFmYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3b3JkcyB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xvYWRlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHByb2dyZXNzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBsb2FkZXJQcm9ncmVzc051bWJlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgd29yZHNHcm91cFJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdzYXAudG8od29yZHNHcm91cFJlZi5jdXJyZW50LCB7XG4gICAgICB5UGVyY2VudDogLTgwLFxuICAgICAgZHVyYXRpb246IDUsXG4gICAgICBlYXNlOiBcImV4cG8uaW5PdXRcIixcbiAgICB9KTsgLy8gYWNjZXNzIG9iamVjdCBieSB1c2luZyAuY3VycmVudFxuXG4gICAgZ3NhcC50byhwcm9ncmVzc1JlZi5jdXJyZW50LCB7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIGR1cmF0aW9uOiA1LFxuICAgICAgZWFzZTogXCJleHBvLmluT3V0XCIsXG4gICAgfSk7XG4gIH0sIFtdKTsgLy8gZW1wdHkgZGVwZW5kZW5jeSBhcnJheSwgcnVuIG9uY2Ugb24gbG9hZFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3dyYXBwZXJ9IHJlZj17d3JhcHBlclJlZn0+XG4gICAgICB7LyogdGFyZ2V0cyB1c2luZyByZWYgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fcHJvZ3Jlc3NXcmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3Byb2dyZXNzfSByZWY9e3Byb2dyZXNzUmVmfT48L2Rpdj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3Byb2dyZXNzTnVtYmVyfVxuICAgICAgICAgIHJlZj17bG9hZGVyUHJvZ3Jlc3NOdW1iZXJSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICAwXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19vdmVybGF5fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHNHcm91cH0gcmVmPXt3b3Jkc0dyb3VwUmVmfT5cbiAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHdvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193b3JkfT5cbiAgICAgICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwid29yZHMiLCJnc2FwIiwic3R5bGVzIiwiTG9hZGVyIiwid3JhcHBlclJlZiIsInByb2dyZXNzUmVmIiwibG9hZGVyUHJvZ3Jlc3NOdW1iZXJSZWYiLCJ3b3Jkc0dyb3VwUmVmIiwidG8iLCJjdXJyZW50IiwieVBlcmNlbnQiLCJkdXJhdGlvbiIsImVhc2UiLCJzY2FsZSIsImRpdiIsImNsYXNzTmFtZSIsImxvYWRlcl9fd3JhcHBlciIsInJlZiIsImxvYWRlcl9fcHJvZ3Jlc3NXcmFwcGVyIiwibG9hZGVyX19wcm9ncmVzcyIsInNwYW4iLCJsb2FkZXJfX3Byb2dyZXNzTnVtYmVyIiwibG9hZGVyIiwibG9hZGVyX193b3JkcyIsImxvYWRlcl9fb3ZlcmxheSIsImxvYWRlcl9fd29yZHNHcm91cCIsIm1hcCIsIndvcmQiLCJpbmRleCIsImxvYWRlcl9fd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Loader/index.js\n"));

/***/ })

});