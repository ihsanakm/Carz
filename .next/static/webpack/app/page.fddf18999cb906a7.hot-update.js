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

/***/ "(app-pages-browser)/./Components/Searchbar.tsx":
/*!**********************************!*\
  !*** ./Components/Searchbar.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"(app-pages-browser)/./Components/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Searchbar = ()=>{\n    _s();\n    const [manufacturer, setManufacturer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [model, setModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSearch = (e)=>{};\n    const SearchButton = (param)=>{\n        let { otherClasses } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"submit\",\n            className: \"-ml-12 z-10 \".concat(otherClasses),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                src: \"/magnifying-glass.svg\",\n                alt: \"magifying glass\",\n                width: 40,\n                height: 40,\n                className: \"object-contain\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"searchbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"searchbar__item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.SearchManufacturer, {\n                        manufacturer: manufacturer,\n                        setManufacturer: setManufacturer\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchButton, {\n                        otherClasses: \"sm:hidden\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"searchbar__item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"/model-icon.png\",\n                        width: 40,\n                        height: 40,\n                        className: \"absolute w-[20px] h-[20px] ml-4\",\n                        alt: \"car model icon\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"model\",\n                        type: \"text\",\n                        value: model,\n                        placeholder: \"Tiquan\",\n                        className: \"searchbar__input\",\n                        onChange: (e)=>setModel(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchButton, {\n                        otherClasses: \"sm:hidden\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchButton, {\n                otherClasses: \"max-sm:hidden\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Searchbar, \"xk9SZL7Kq9mx1kmeYHC1XIGnzvQ=\");\n_c = Searchbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Searchbar);\nvar _c;\n$RefreshReg$(_c, \"Searchbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvU2VhcmNoYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUV1RDtBQUd4QjtBQUVRO0FBRXZDLE1BQU1JLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNUSxlQUFlLENBQUNDLEtBQWlCO0lBRXZDLE1BQU1DLGVBQWU7WUFBQyxFQUFFQyxZQUFZLEVBQTRCOzZCQUM5RCw4REFBQ0M7WUFBT0MsTUFBSztZQUFTQyxXQUFXLGVBQTRCLE9BQWJIO3NCQUM5Qyw0RUFBQ1Ysa0RBQUtBO2dCQUNKYyxLQUFJO2dCQUNKQyxLQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSSixXQUFVOzs7Ozs7Ozs7Ozs7SUFLaEIscUJBQ0UsOERBQUNLO1FBQUtMLFdBQVU7OzBCQUVkLDhEQUFDTTtnQkFBSU4sV0FBVTs7a0NBQ2IsOERBQUNaLGlEQUFrQkE7d0JBQ2pCRSxjQUFjQTt3QkFDZEMsaUJBQWlCQTs7Ozs7O2tDQUduQiw4REFBQ0s7d0JBQWFDLGNBQWE7Ozs7Ozs7Ozs7OzswQkFFN0IsOERBQUNTO2dCQUFJTixXQUFVOztrQ0FDYiw4REFBQ2Isa0RBQUtBO3dCQUNKYyxLQUFJO3dCQUNKRSxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSSixXQUFVO3dCQUNWRSxLQUFJOzs7Ozs7a0NBR04sOERBQUNLO3dCQUNDQyxNQUFLO3dCQUNMVCxNQUFLO3dCQUNMVSxPQUFPakI7d0JBQ1BrQixhQUFZO3dCQUNaVixXQUFVO3dCQUNWVyxVQUFVLENBQUNoQixJQUFNRixTQUFTRSxFQUFFaUIsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRzFDLDhEQUFDYjt3QkFBYUMsY0FBYTs7Ozs7Ozs7Ozs7OzBCQUU3Qiw4REFBQ0Q7Z0JBQWFDLGNBQWE7Ozs7Ozs7Ozs7OztBQUdqQztHQXBETVI7S0FBQUE7QUFzRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TZWFyY2hiYXIudHN4Pzc3MjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VhcmNoTWFudWZhY3R1cmVyUHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xyXG5pbXBvcnQgeyBDb21ib2JveCB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgbWFudWZhY3R1cmVycyB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hNYW51ZmFjdHVyZXIgfSBmcm9tIFwiLlwiO1xyXG5cclxuY29uc3QgU2VhcmNoYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttYW51ZmFjdHVyZXIsIHNldE1hbnVmYWN0dXJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW9kZWwsIHNldE1vZGVsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZTogUmVhY3QuZm9ybSk9Pnt9XHJcblxyXG4gIGNvbnN0IFNlYXJjaEJ1dHRvbiA9ICh7IG90aGVyQ2xhc3NlcyB9OiB7IG90aGVyQ2xhc3Nlczogc3RyaW5nIH0pID0+IChcclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17YC1tbC0xMiB6LTEwICR7b3RoZXJDbGFzc2VzfWB9PlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9XCIvbWFnbmlmeWluZy1nbGFzcy5zdmdcIlxyXG4gICAgICAgIGFsdD1cIm1hZ2lmeWluZyBnbGFzc1wiXHJcbiAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIlxyXG4gICAgICAvPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaGJhclwiPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hiYXJfX2l0ZW1cIj5cclxuICAgICAgICA8U2VhcmNoTWFudWZhY3R1cmVyXHJcbiAgICAgICAgICBtYW51ZmFjdHVyZXI9e21hbnVmYWN0dXJlcn1cclxuICAgICAgICAgIHNldE1hbnVmYWN0dXJlcj17c2V0TWFudWZhY3R1cmVyfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxTZWFyY2hCdXR0b24gb3RoZXJDbGFzc2VzPVwic206aGlkZGVuXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYmFyX19pdGVtXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCIvbW9kZWwtaWNvbi5wbmdcIlxyXG4gICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctWzIwcHhdIGgtWzIwcHhdIG1sLTRcIlxyXG4gICAgICAgICAgYWx0PVwiY2FyIG1vZGVsIGljb25cIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgbmFtZT1cIm1vZGVsXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXttb2RlbH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGlxdWFuXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaGJhcl9faW5wdXRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNb2RlbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFNlYXJjaEJ1dHRvbiBvdGhlckNsYXNzZXM9XCJzbTpoaWRkZW5cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNlYXJjaEJ1dHRvbiBvdGhlckNsYXNzZXM9XCJtYXgtc206aGlkZGVuXCIgLz5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiU2VhcmNoTWFudWZhY3R1cmVyIiwiU2VhcmNoYmFyIiwibWFudWZhY3R1cmVyIiwic2V0TWFudWZhY3R1cmVyIiwibW9kZWwiLCJzZXRNb2RlbCIsImhhbmRsZVNlYXJjaCIsImUiLCJTZWFyY2hCdXR0b24iLCJvdGhlckNsYXNzZXMiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb3JtIiwiZGl2IiwiaW5wdXQiLCJuYW1lIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Searchbar.tsx\n"));

/***/ })

});