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

/***/ "./src/components/UI/DropDown.tsx":
/*!****************************************!*\
  !*** ./src/components/UI/DropDown.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DropDown: function() { return /* binding */ DropDown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DropDown = (props)=>{\n    const { title, children, toggle, classname } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-testid\": \"dropdown\",\n        className: \"relative inline-block text-left z-50\",\n        children: [\n            title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"inline-flex w-full justify-center\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/DropDown.tsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, undefined),\n            toggle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                \"data-testid\": \"dropdown-button\",\n                className: \"\".concat(classname, \" text-white flex px-4 py-2 text-sm z-10 mt-10 rounded-md bg-panel-header-background\"),\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/DropDown.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/DropDown.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n};\n_c = DropDown;\nvar _c;\n$RefreshReg$(_c, \"DropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9Ecm9wRG93bi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdEO0FBUXpDLE1BQU1DLFdBQVcsQ0FBQ0M7SUFDeEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0o7SUFDL0MscUJBQ0MsOERBQUNLO1FBQ0FDLGVBQVk7UUFDWkMsV0FBVTs7WUFFVE4sdUJBQ0EsOERBQUNPO2dCQUFPRCxXQUFVOzBCQUNoQk47Ozs7OztZQUdGRSx3QkFDQSw4REFBQ0s7Z0JBQ0FGLGVBQVk7Z0JBQ1pDLFdBQVcsR0FBYSxPQUFWSCxXQUFVOzBCQUV2QkY7Ozs7Ozs7Ozs7OztBQUtOLEVBQUM7S0F0QllIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VJL0Ryb3BEb3duLnRzeD9mNGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBKU1gsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgRHJvcERvd25Qcm9wcyB7XG5cdHRpdGxlPzogc3RyaW5nIHwgUmVhY3RFbGVtZW50XG5cdGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W11cblx0dG9nZ2xlOiBib29sZWFuXG5cdGNsYXNzbmFtZT86IHN0cmluZ1xufVxuZXhwb3J0IGNvbnN0IERyb3BEb3duID0gKHByb3BzOiBEcm9wRG93blByb3BzKSA9PiB7XG5cdGNvbnN0IHsgdGl0bGUsIGNoaWxkcmVuLCB0b2dnbGUsIGNsYXNzbmFtZSB9ID0gcHJvcHNcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRkYXRhLXRlc3RpZD0nZHJvcGRvd24nXG5cdFx0XHRjbGFzc05hbWU9J3JlbGF0aXZlIGlubGluZS1ibG9jayB0ZXh0LWxlZnQgei01MCdcblx0XHQ+XG5cdFx0XHR7dGl0bGUgJiYgKFxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0naW5saW5lLWZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyJz5cblx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0KX1cblx0XHRcdHt0b2dnbGUgJiYgKFxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0ZGF0YS10ZXN0aWQ9J2Ryb3Bkb3duLWJ1dHRvbidcblx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake2NsYXNzbmFtZX0gdGV4dC13aGl0ZSBmbGV4IHB4LTQgcHktMiB0ZXh0LXNtIHotMTAgbXQtMTAgcm91bmRlZC1tZCBiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZGB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRHJvcERvd24iLCJwcm9wcyIsInRpdGxlIiwiY2hpbGRyZW4iLCJ0b2dnbGUiLCJjbGFzc25hbWUiLCJkaXYiLCJkYXRhLXRlc3RpZCIsImNsYXNzTmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UI/DropDown.tsx\n"));

/***/ })

});