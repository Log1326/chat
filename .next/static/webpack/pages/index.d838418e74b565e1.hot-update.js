"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/UI/Avatar.tsx":
/*!**************************************!*\
  !*** ./src/components/UI/Avatar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Avatar: function() { return /* binding */ Avatar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_CustomAvatarMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/UI/CustomAvatarMenu */ \"./src/components/UI/CustomAvatarMenu.tsx\");\n/* harmony import */ var _UI_ImageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/UI/ImageView */ \"./src/components/UI/ImageView.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _UI_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/UI/Icon */ \"./src/components/UI/Icon.tsx\");\n\n\n\n\n\n\nconst TypeAndSize = {\n    sm: {\n        height: 30,\n        width: 30\n    },\n    md: {\n        height: 50,\n        width: 50\n    },\n    lg: {\n        height: 80,\n        width: 80\n    },\n    xl: {\n        height: 100,\n        width: 100\n    },\n    xxl: {\n        height: 150,\n        width: 150\n    }\n};\nconst SizeAvatar = {\n    sm: _UI_ImageView__WEBPACK_IMPORTED_MODULE_2__.ImageView,\n    md: _UI_ImageView__WEBPACK_IMPORTED_MODULE_2__.ImageView,\n    lg: _UI_ImageView__WEBPACK_IMPORTED_MODULE_2__.ImageView,\n    xl: _UI_ImageView__WEBPACK_IMPORTED_MODULE_2__.ImageView,\n    xxl: _UI_CustomAvatarMenu__WEBPACK_IMPORTED_MODULE_1__.CustomAvatarMenu\n};\nconst Avatar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = function Avatar(props) {\n    const size = TypeAndSize[props.type];\n    const View = SizeAvatar[props.type];\n    if (!props.src) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n        Svg: react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineLoading,\n        className: \"animate-spin\"\n    }, void 0, false, {\n        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/Avatar.tsx\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(View, {\n        ...size,\n        ...props\n    }, void 0, false, {\n        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/Avatar.tsx\",\n        lineNumber: 36,\n        columnNumber: 4\n    }, this);\n});\n_c1 = Avatar;\nvar _c, _c1;\n$RefreshReg$(_c, \"Avatar$memo\");\n$RefreshReg$(_c1, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9BdmF0YXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDZDtBQUNkO0FBQ3FCO0FBQ2pCO0FBR2hDLE1BQU1LLGNBQXFFO0lBQzFFQyxJQUFJO1FBQUVDLFFBQVE7UUFBSUMsT0FBTztJQUFHO0lBQzVCQyxJQUFJO1FBQUVGLFFBQVE7UUFBSUMsT0FBTztJQUFHO0lBQzVCRSxJQUFJO1FBQUVILFFBQVE7UUFBSUMsT0FBTztJQUFHO0lBQzVCRyxJQUFJO1FBQUVKLFFBQVE7UUFBS0MsT0FBTztJQUFJO0lBQzlCSSxLQUFLO1FBQUVMLFFBQVE7UUFBS0MsT0FBTztJQUFJO0FBQ2hDO0FBU0EsTUFBTUssYUFBd0Q7SUFDN0RQLElBQUlMLG9EQUFTQTtJQUNiUSxJQUFJUixvREFBU0E7SUFDYlMsSUFBSVQsb0RBQVNBO0lBQ2JVLElBQUlWLG9EQUFTQTtJQUNiVyxLQUFLWixrRUFBZ0JBO0FBQ3RCO0FBQ08sTUFBTWMsdUJBQVNaLDJDQUFJQSxNQUFDLFNBQVNZLE9BQU9DLEtBQWtCO0lBQzVELE1BQU1DLE9BQU9YLFdBQVcsQ0FBQ1UsTUFBTUUsSUFBSSxDQUFDO0lBQ3BDLE1BQU1DLE9BQU9MLFVBQVUsQ0FBQ0UsTUFBTUUsSUFBSSxDQUFDO0lBQ25DLElBQUksQ0FBQ0YsTUFBTUksR0FBRyxFQUNiLHFCQUFPLDhEQUFDZiwwQ0FBSUE7UUFBQ2dCLEtBQUtqQiw0REFBZ0JBO1FBQUVrQixXQUFVOzs7Ozs7SUFDL0MscUJBQ0UsOERBQUNIO1FBQU0sR0FBR0YsSUFBSTtRQUFHLEdBQUdELEtBQUs7Ozs7OztBQUU1QixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VJL0F2YXRhci50c3g/MTY1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21BdmF0YXJNZW51IH0gZnJvbSAnQC9VSS9DdXN0b21BdmF0YXJNZW51J1xuaW1wb3J0IHsgSW1hZ2VWaWV3IH0gZnJvbSAnQC9VSS9JbWFnZVZpZXcnXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBaU91dGxpbmVMb2FkaW5nIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQC9VSS9JY29uJ1xuXG50eXBlIFR5cGVBdmF0YXIgPSAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCdcbmNvbnN0IFR5cGVBbmRTaXplOiBSZWNvcmQ8VHlwZUF2YXRhciwgeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9PiA9IHtcblx0c206IHsgaGVpZ2h0OiAzMCwgd2lkdGg6IDMwIH0sXG5cdG1kOiB7IGhlaWdodDogNTAsIHdpZHRoOiA1MCB9LFxuXHRsZzogeyBoZWlnaHQ6IDgwLCB3aWR0aDogODAgfSxcblx0eGw6IHsgaGVpZ2h0OiAxMDAsIHdpZHRoOiAxMDAgfSxcblx0eHhsOiB7IGhlaWdodDogMTUwLCB3aWR0aDogMTUwIH1cbn1cbmludGVyZmFjZSBBdmF0YXJQcm9wcyB7XG5cdHR5cGU6IFR5cGVBdmF0YXJcblx0c3JjOiBzdHJpbmdcblx0YWx0OiBzdHJpbmdcblx0Y2xhc3NOYW1lPzogc3RyaW5nXG5cdHRpdGxlPzogc3RyaW5nXG5cdHByaW9yaXR5PzogYm9vbGVhblxufVxuY29uc3QgU2l6ZUF2YXRhcjogUmVjb3JkPFR5cGVBdmF0YXIsIFJlYWN0LkZDPEF2YXRhclByb3BzPj4gPSB7XG5cdHNtOiBJbWFnZVZpZXcsXG5cdG1kOiBJbWFnZVZpZXcsXG5cdGxnOiBJbWFnZVZpZXcsXG5cdHhsOiBJbWFnZVZpZXcsXG5cdHh4bDogQ3VzdG9tQXZhdGFyTWVudVxufVxuZXhwb3J0IGNvbnN0IEF2YXRhciA9IG1lbW8oZnVuY3Rpb24gQXZhdGFyKHByb3BzOiBBdmF0YXJQcm9wcykge1xuXHRjb25zdCBzaXplID0gVHlwZUFuZFNpemVbcHJvcHMudHlwZV1cblx0Y29uc3QgVmlldyA9IFNpemVBdmF0YXJbcHJvcHMudHlwZV1cblx0aWYgKCFwcm9wcy5zcmMpXG5cdFx0cmV0dXJuIDxJY29uIFN2Zz17QWlPdXRsaW5lTG9hZGluZ30gY2xhc3NOYW1lPSdhbmltYXRlLXNwaW4nIC8+XG5cdHJldHVybiAoXG5cdFx0XHQ8VmlldyB7Li4uc2l6ZX0gey4uLnByb3BzfSAvPlxuXHQpXG59KVxuIl0sIm5hbWVzIjpbIkN1c3RvbUF2YXRhck1lbnUiLCJJbWFnZVZpZXciLCJtZW1vIiwiQWlPdXRsaW5lTG9hZGluZyIsIkljb24iLCJUeXBlQW5kU2l6ZSIsInNtIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZCIsImxnIiwieGwiLCJ4eGwiLCJTaXplQXZhdGFyIiwiQXZhdGFyIiwicHJvcHMiLCJzaXplIiwidHlwZSIsIlZpZXciLCJzcmMiLCJTdmciLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UI/Avatar.tsx\n"));

/***/ })

});