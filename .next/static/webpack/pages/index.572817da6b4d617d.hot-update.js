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

/***/ "./src/components/Chatlist/ChatListHeader.tsx":
/*!****************************************************!*\
  !*** ./src/components/Chatlist/ChatListHeader.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChatListHeader\": function() { return /* binding */ ChatListHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/UI/Avatar */ \"./src/components/UI/Avatar.tsx\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useActions */ \"./src/hooks/useActions.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/user/user.selector */ \"./src/store/user/user.selector.ts\");\n/* harmony import */ var _UI_DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/UI/DropDown */ \"./src/components/UI/DropDown.tsx\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatListHeader() {\n    _s();\n    const { toggleChatPage  } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions)();\n    const [openMenu, _, openMenuFn] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__.useToggle)();\n    const userImage = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__.getUserImage);\n    const handleOpenChatList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>toggleChatPage(false), [\n        toggleChatPage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex justify-between items-center  h-20 p-7 border-r-2 border-gray-400\",\n        children: [\n            userImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                type: \"sm\",\n                value: userImage,\n                className: \"hover:opacity-70\"\n            }, void 0, false, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chatlist/ChatListHeader.tsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"flex items-center gap-4 cursor-pointer text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleOpenChatList,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsFillChatLeftTextFill, {\n                            className: \"h-6 w-6 hover:opacity-70\",\n                            title: \"Chat\"\n                        }, void 0, false, {\n                            fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chatlist/ChatListHeader.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chatlist/ChatListHeader.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_DropDown__WEBPACK_IMPORTED_MODULE_6__.DropDown, {\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsThreeDotsVertical, {\n                                    className: \"h-6 w-6 hover:opacity-70\",\n                                    title: \"Options\",\n                                    onClick: openMenuFn\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                            toggle: openMenu,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"logout\"\n                            }, void 0, false, {\n                                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chatlist/ChatListHeader.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chatlist/ChatListHeader.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chatlist/ChatListHeader.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chatlist/ChatListHeader.tsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chatlist/ChatListHeader.tsx\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, this);\n}\n_s(ChatListHeader, \"6LWeuJdhZh+7BeK3zVb28yPmwhU=\", false, function() {\n    return [\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions,\n        _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__.useToggle,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = ChatListHeader;\nvar _c;\n$RefreshReg$(_c, \"ChatListHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TGlzdEhlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDd0M7QUFDN0I7QUFDWjtBQUNNO0FBQ2dCO0FBQ2pCO0FBQ0s7QUFFdEMsU0FBU1MsaUJBQWlCOztJQUNoQyxNQUFNLEVBQUVDLGVBQWMsRUFBRSxHQUFHUCw2REFBVUE7SUFDckMsTUFBTSxDQUFDUSxVQUFVQyxHQUFHQyxXQUFXLEdBQUdMLDJEQUFTQTtJQUMzQyxNQUFNTSxZQUFZVCx3REFBV0EsQ0FBQ0MsbUVBQVlBO0lBQzFDLE1BQU1TLHFCQUFxQlgsa0RBQVdBLENBQ3JDLElBQU1NLGVBQWUsS0FBSyxHQUMxQjtRQUFDQTtLQUFlO0lBRWpCLHFCQUNDLDhEQUFDTTtRQUFRQyxXQUFVOztZQUNqQkgsMkJBQ0EsOERBQUNkLDhDQUFNQTtnQkFBQ2tCLE1BQU07Z0JBQU1DLE9BQU9MO2dCQUFXRyxXQUFVOzs7Ozs7MEJBRWpELDhEQUFDRztnQkFBS0gsV0FBVTs7a0NBQ2YsOERBQUNJO3dCQUFPQyxTQUFTUDtrQ0FDaEIsNEVBQUNkLGtFQUFzQkE7NEJBQ3RCZ0IsV0FBVTs0QkFDVk0sT0FBTTs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNDO2tDQUNBLDRFQUFDakIsa0RBQVFBOzRCQUNSZ0IscUJBQ0MsOERBQUNGOzBDQUNBLDRFQUFDbkIsK0RBQW1CQTtvQ0FDbkJlLFdBQVU7b0NBQ1ZNLE9BQU07b0NBQ05ELFNBQVNUOzs7NEJBSVpZLFFBQVFkO3NDQUVSLDRFQUFDYTswQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1YLENBQUM7R0F2Q2VmOztRQUNZTix5REFBVUE7UUFDSEssdURBQVNBO1FBQ3pCSCxvREFBV0E7OztLQUhkSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TGlzdEhlYWRlci50c3g/MDY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAL1VJL0F2YXRhcidcbmltcG9ydCB7IEJzRmlsbENoYXRMZWZ0VGV4dEZpbGwsIEJzVGhyZWVEb3RzVmVydGljYWwgfSBmcm9tICdyZWFjdC1pY29ucy9icydcbmltcG9ydCB7IHVzZUFjdGlvbnMgfSBmcm9tICdAL2hvb2tzL3VzZUFjdGlvbnMnXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGdldFVzZXJJbWFnZSB9IGZyb20gJ0Avc3RvcmUvdXNlci91c2VyLnNlbGVjdG9yJ1xuaW1wb3J0IHsgRHJvcERvd24gfSBmcm9tICdAL1VJL0Ryb3BEb3duJ1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSAnQC9ob29rcy91c2VUb2dnbGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBDaGF0TGlzdEhlYWRlcigpIHtcblx0Y29uc3QgeyB0b2dnbGVDaGF0UGFnZSB9ID0gdXNlQWN0aW9ucygpXG5cdGNvbnN0IFtvcGVuTWVudSwgXywgb3Blbk1lbnVGbl0gPSB1c2VUb2dnbGUoKVxuXHRjb25zdCB1c2VySW1hZ2UgPSB1c2VTZWxlY3RvcihnZXRVc2VySW1hZ2UpXG5cdGNvbnN0IGhhbmRsZU9wZW5DaGF0TGlzdCA9IHVzZUNhbGxiYWNrKFxuXHRcdCgpID0+IHRvZ2dsZUNoYXRQYWdlKGZhbHNlKSxcblx0XHRbdG9nZ2xlQ2hhdFBhZ2VdXG5cdClcblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciAgaC0yMCBwLTcgYm9yZGVyLXItMiBib3JkZXItZ3JheS00MDAnPlxuXHRcdFx0e3VzZXJJbWFnZSAmJiAoXG5cdFx0XHRcdDxBdmF0YXIgdHlwZT17J3NtJ30gdmFsdWU9e3VzZXJJbWFnZX0gY2xhc3NOYW1lPSdob3ZlcjpvcGFjaXR5LTcwJyAvPlxuXHRcdFx0KX1cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgY3Vyc29yLXBvaW50ZXIgdGV4dC13aGl0ZSc+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlT3BlbkNoYXRMaXN0fT5cblx0XHRcdFx0XHQ8QnNGaWxsQ2hhdExlZnRUZXh0RmlsbFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTYgdy02IGhvdmVyOm9wYWNpdHktNzAnXG5cdFx0XHRcdFx0XHR0aXRsZT0nQ2hhdCdcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8RHJvcERvd25cblx0XHRcdFx0XHRcdHRpdGxlPXtcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8QnNUaHJlZURvdHNWZXJ0aWNhbFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTYgdy02IGhvdmVyOm9wYWNpdHktNzAnXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT0nT3B0aW9ucydcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29wZW5NZW51Rm59XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0b2dnbGU9e29wZW5NZW51fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXY+bG9nb3V0PC9kaXY+XG5cdFx0XHRcdFx0PC9Ecm9wRG93bj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9hcnRpY2xlPlxuXHQpXG59XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiQnNGaWxsQ2hhdExlZnRUZXh0RmlsbCIsIkJzVGhyZWVEb3RzVmVydGljYWwiLCJ1c2VBY3Rpb25zIiwidXNlQ2FsbGJhY2siLCJ1c2VTZWxlY3RvciIsImdldFVzZXJJbWFnZSIsIkRyb3BEb3duIiwidXNlVG9nZ2xlIiwiQ2hhdExpc3RIZWFkZXIiLCJ0b2dnbGVDaGF0UGFnZSIsIm9wZW5NZW51IiwiXyIsIm9wZW5NZW51Rm4iLCJ1c2VySW1hZ2UiLCJoYW5kbGVPcGVuQ2hhdExpc3QiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwidHlwZSIsInZhbHVlIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0aXRsZSIsImRpdiIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatListHeader.tsx\n"));

/***/ })

});