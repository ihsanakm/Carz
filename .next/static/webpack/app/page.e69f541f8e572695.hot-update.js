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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"(app-pages-browser)/./Components/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Searchbar = ()=>{\n    _s();\n    const [manufacturer, setManufacturer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [model, setModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSearch = (e)=>{\n        e.preventDefault();\n        if (manufacturer === \"\" && model === \"\") {\n            return alert(\"Please Fill Search Bar\");\n        }\n    };\n    const updateSearchParams = (model, manufacturer)=>{\n        const searchParam = new URLSearchParams(window.location.search);\n        if (model) {\n            searchParam.set(\"model\", model);\n        } else {\n            searchParam.delete;\n        }\n    };\n    const SearchButton = (param)=>{\n        let { otherClasses } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"submit\",\n            className: \"-ml-12 z-10 \".concat(otherClasses),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                src: \"/magnifying-glass.svg\",\n                alt: \"magifying glass\",\n                width: 40,\n                height: 40,\n                className: \"object-contain\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n            lineNumber: 36,\n            columnNumber: 5\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"searchbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"searchbar__item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.SearchManufacturer, {\n                        manufacturer: manufacturer,\n                        setManufacturer: setManufacturer\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchButton, {\n                        otherClasses: \"sm:hidden\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"searchbar__item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"/model-icon.png\",\n                        width: 40,\n                        height: 40,\n                        className: \"absolute w-[20px] h-[20px] ml-4\",\n                        alt: \"car model icon\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"model\",\n                        type: \"text\",\n                        value: model,\n                        placeholder: \"Tiquan\",\n                        className: \"searchbar__input\",\n                        onChange: (e)=>setModel(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchButton, {\n                        otherClasses: \"sm:hidden\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchButton, {\n                otherClasses: \"max-sm:hidden\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Web Development\\\\Full Stack Projects\\\\Carz\\\\frontend\\\\Components\\\\Searchbar.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Searchbar, \"xk9SZL7Kq9mx1kmeYHC1XIGnzvQ=\");\n_c = Searchbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Searchbar);\nvar _c;\n$RefreshReg$(_c, \"Searchbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvU2VhcmNoYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUV1RDtBQUd4QjtBQUVRO0FBRXZDLE1BQU1JLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNUSxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBRWhCLElBQUdOLGlCQUFlLE1BQU1FLFVBQVEsSUFBRztZQUNqQyxPQUFPSyxNQUFNO1FBQ2Y7SUFDRjtJQUVBLE1BQU1DLHFCQUFxQixDQUFDTixPQUFjRjtRQUV4QyxNQUFNUyxjQUFjLElBQUlDLGdCQUFnQkMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1FBRTlELElBQUdYLE9BQU07WUFDUE8sWUFBWUssR0FBRyxDQUFDLFNBQVFaO1FBQzFCLE9BQ0E7WUFDRU8sWUFBWU0sTUFBTTtRQUNwQjtJQUVBO0lBRUYsTUFBTUMsZUFBZTtZQUFDLEVBQUVDLFlBQVksRUFBNEI7NkJBQzlELDhEQUFDQztZQUFPQyxNQUFLO1lBQVNDLFdBQVcsZUFBNEIsT0FBYkg7c0JBQzlDLDRFQUFDcEIsa0RBQUtBO2dCQUNKd0IsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkosV0FBVTs7Ozs7Ozs7Ozs7O0lBS2hCLHFCQUNFLDhEQUFDSztRQUFLTCxXQUFVOzswQkFFZCw4REFBQ007Z0JBQUlOLFdBQVU7O2tDQUNiLDhEQUFDdEIsaURBQWtCQTt3QkFDakJFLGNBQWNBO3dCQUNkQyxpQkFBaUJBOzs7Ozs7a0NBR25CLDhEQUFDZTt3QkFBYUMsY0FBYTs7Ozs7Ozs7Ozs7OzBCQUU3Qiw4REFBQ1M7Z0JBQUlOLFdBQVU7O2tDQUNiLDhEQUFDdkIsa0RBQUtBO3dCQUNKd0IsS0FBSTt3QkFDSkUsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkosV0FBVTt3QkFDVkUsS0FBSTs7Ozs7O2tDQUdOLDhEQUFDSzt3QkFDQ0MsTUFBSzt3QkFDTFQsTUFBSzt3QkFDTFUsT0FBTzNCO3dCQUNQNEIsYUFBWTt3QkFDWlYsV0FBVTt3QkFDVlcsVUFBVSxDQUFDMUIsSUFBTUYsU0FBU0UsRUFBRTJCLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUcxQyw4REFBQ2I7d0JBQWFDLGNBQWE7Ozs7Ozs7Ozs7OzswQkFFN0IsOERBQUNEO2dCQUFhQyxjQUFhOzs7Ozs7Ozs7Ozs7QUFHakM7R0F2RU1sQjtLQUFBQTtBQXlFTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL1NlYXJjaGJhci50c3g/NzcyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hNYW51ZmFjdHVyZXJQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XHJcbmltcG9ydCB7IENvbWJvYm94IH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBtYW51ZmFjdHVyZXJzIH0gZnJvbSBcIkAvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFNlYXJjaE1hbnVmYWN0dXJlciB9IGZyb20gXCIuXCI7XHJcblxyXG5jb25zdCBTZWFyY2hiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21hbnVmYWN0dXJlciwgc2V0TWFudWZhY3R1cmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttb2RlbCwgc2V0TW9kZWxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZihtYW51ZmFjdHVyZXI9PT0nJyAmJiBtb2RlbD09PScnKXtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCdQbGVhc2UgRmlsbCBTZWFyY2ggQmFyJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaFBhcmFtcyA9IChtb2RlbDpzdHJpbmcsIG1hbnVmYWN0dXJlcjpzdHJpbmcpPT5cclxuICB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcclxuICAgIFxyXG4gICAgaWYobW9kZWwpe1xyXG4gICAgICBzZWFyY2hQYXJhbS5zZXQoJ21vZGVsJyxtb2RlbClcclxuICAgIH1lbHNlXHJcbiAgICB7XHJcbiAgICAgIHNlYXJjaFBhcmFtLmRlbGV0ZVxyXG4gICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgY29uc3QgU2VhcmNoQnV0dG9uID0gKHsgb3RoZXJDbGFzc2VzIH06IHsgb3RoZXJDbGFzc2VzOiBzdHJpbmcgfSkgPT4gKFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtgLW1sLTEyIHotMTAgJHtvdGhlckNsYXNzZXN9YH0+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz1cIi9tYWduaWZ5aW5nLWdsYXNzLnN2Z1wiXHJcbiAgICAgICAgYWx0PVwibWFnaWZ5aW5nIGdsYXNzXCJcclxuICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoYmFyXCI+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGJhcl9faXRlbVwiPlxyXG4gICAgICAgIDxTZWFyY2hNYW51ZmFjdHVyZXJcclxuICAgICAgICAgIG1hbnVmYWN0dXJlcj17bWFudWZhY3R1cmVyfVxyXG4gICAgICAgICAgc2V0TWFudWZhY3R1cmVyPXtzZXRNYW51ZmFjdHVyZXJ9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFNlYXJjaEJ1dHRvbiBvdGhlckNsYXNzZXM9XCJzbTpoaWRkZW5cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hiYXJfX2l0ZW1cIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cIi9tb2RlbC1pY29uLnBuZ1wiXHJcbiAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1bMjBweF0gaC1bMjBweF0gbWwtNFwiXHJcbiAgICAgICAgICBhbHQ9XCJjYXIgbW9kZWwgaWNvblwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBuYW1lPVwibW9kZWxcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e21vZGVsfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXF1YW5cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoYmFyX19pbnB1dFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1vZGVsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8U2VhcmNoQnV0dG9uIG90aGVyQ2xhc3Nlcz1cInNtOmhpZGRlblwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2VhcmNoQnV0dG9uIG90aGVyQ2xhc3Nlcz1cIm1heC1zbTpoaWRkZW5cIiAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hiYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJTZWFyY2hNYW51ZmFjdHVyZXIiLCJTZWFyY2hiYXIiLCJtYW51ZmFjdHVyZXIiLCJzZXRNYW51ZmFjdHVyZXIiLCJtb2RlbCIsInNldE1vZGVsIiwiaGFuZGxlU2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJ1cGRhdGVTZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbSIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0IiwiZGVsZXRlIiwiU2VhcmNoQnV0dG9uIiwib3RoZXJDbGFzc2VzIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9ybSIsImRpdiIsImlucHV0IiwibmFtZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Searchbar.tsx\n"));

/***/ })

});