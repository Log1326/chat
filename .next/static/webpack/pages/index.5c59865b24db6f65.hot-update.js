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

/***/ "./src/components/Chat/ChatHeader.tsx":
/*!********************************************!*\
  !*** ./src/components/Chat/ChatHeader.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChatHeader\": function() { return /* binding */ ChatHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/UI/Avatar */ \"./src/components/UI/Avatar.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_user_user_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/user/user.selector */ \"./src/store/user/user.selector.ts\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useActions */ \"./src/hooks/useActions.ts\");\n/* harmony import */ var _store_message_message_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/message/message.selectors */ \"./src/store/message/message.selectors.ts\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.ts\");\n/* harmony import */ var _UI_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/UI/DropDown */ \"./src/components/UI/DropDown.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction ChatHeader() {\n    _s();\n    const { setSelectUser , changeIsSearchMessage  } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_4__.useActions)();\n    const [openMenu, setOpenMenu, openMenuFn] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__.useToggle)();\n    const selectUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_3__.getSelectUser);\n    const onlineUsers = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_message_message_selectors__WEBPACK_IMPORTED_MODULE_5__.getStateMessageOnlineUsers);\n    const isOnline = onlineUsers === null || onlineUsers === void 0 ? void 0 : onlineUsers.some((user)=>{\n        return user === (selectUser === null || selectUser === void 0 ? void 0 : selectUser.id);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"bg-input-background h-20 p-2 flex justify-between items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-4 pl-4\",\n                children: [\n                    selectUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                        type: \"sm\",\n                        value: selectUser === null || selectUser === void 0 ? void 0 : selectUser.image,\n                        className: \"hover:opacity-70\"\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 6\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                        type: \"lg\",\n                        value: \"/default_avatar.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: \"text-white cursor-default\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: selectUser === null || selectUser === void 0 ? void 0 : selectUser.name\n                            }, void 0, false, {\n                                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: isOnline ? \"online\" : \"offline\"\n                            }, void 0, false, {\n                                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                lineNumber: 21,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"inline-flex gap-4 pr-4 text-white cursor-pointer relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__.BiSearchAlt2, {\n                        className: \"h-6 w-6 hover:text-gray-900\",\n                        onClick: ()=>changeIsSearchMessage(true)\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdCall, {\n                        className: \"h-6 w-6 hover:text-gray-900\",\n                        title: \"audio\"\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_10__.IoVideocam, {\n                        className: \"h-6 w-6 hover:text-gray-900\",\n                        title: \"video\"\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute right-0 top-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDown, {\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsThreeDotsVertical, {\n                                className: \"h-6 w-6 hover:text-gray-900\",\n                                title: \"options\",\n                                onClick: openMenuFn\n                            }, void 0, false, void 0, void 0),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                onClick: ()=>setSelectUser(undefined),\n                                children: \"close\"\n                            }, void 0, false, {\n                                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, this);\n}\n_s(ChatHeader, \"13QTrLQouw70inUJvmiWnyrlD+c=\", false, function() {\n    return [\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_4__.useActions,\n        _hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__.useToggle,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = ChatHeader;\nvar _c;\n$RefreshReg$(_c, \"ChatHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRIZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDSztBQUNpQjtBQUNuQjtBQUNLO0FBQ0M7QUFDTztBQUNMO0FBQytCO0FBQ2pDO0FBQ0w7QUFFakMsU0FBU1csYUFBYTs7SUFDNUIsTUFBTSxFQUFFQyxjQUFhLEVBQUVDLHNCQUFxQixFQUFFLEdBQUdOLDZEQUFVQTtJQUMzRCxNQUFNLENBQUNPLFVBQVVDLGFBQWFDLFdBQVcsR0FBR1AsMkRBQVNBO0lBQ3JELE1BQU1RLGFBQWFoQix3REFBV0EsQ0FBQ0Msb0VBQWFBO0lBQzVDLE1BQU1nQixjQUFjakIsd0RBQVdBLENBQUNPLHdGQUEwQkE7SUFDMUQsTUFBTVcsV0FBV0Qsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhRSxJQUFJLENBQUNDLENBQUFBO1FBQVFBLE9BQUFBLFNBQVNKLENBQUFBLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUssRUFBRTs7SUFDbEUscUJBQ0MsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNsQiw4REFBQ0M7Z0JBQUlELFdBQVU7O29CQUNiUCwyQkFDQSw4REFBQ2pCLDhDQUFNQTt3QkFDTjBCLE1BQUs7d0JBQ0xDLE9BQU9WLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWVcsS0FBSzt3QkFDeEJKLFdBQVc7Ozs7OzZDQUdaLDhEQUFDeEIsOENBQU1BO3dCQUFDMEIsTUFBSzt3QkFBS0MsT0FBTzs7Ozs7NEJBQ3pCO2tDQUNELDhEQUFDSjt3QkFBUUMsV0FBVTs7MENBQ2xCLDhEQUFDSzswQ0FBR1osdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZYSxJQUFJOzs7Ozs7MENBQ3BCLDhEQUFDRDswQ0FBR1YsV0FBVyxXQUFXLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHckMsOERBQUNJO2dCQUFRQyxXQUFVOztrQ0FDbEIsOERBQUNuQix3REFBWUE7d0JBQ1ptQixXQUFVO3dCQUNWTyxTQUFTLElBQU1sQixzQkFBc0IsSUFBSTs7Ozs7O2tDQUUxQyw4REFBQ1Ysa0RBQU1BO3dCQUFDcUIsV0FBVTt3QkFBOEJRLE9BQU07Ozs7OztrQ0FDdEQsOERBQUM1Qix3REFBVUE7d0JBQUNvQixXQUFVO3dCQUE4QlEsT0FBTTs7Ozs7O2tDQUUxRCw4REFBQ1A7d0JBQUlELFdBQVU7a0NBQ2QsNEVBQUNkLGtEQUFRQTs0QkFDUnNCLHFCQUNDLDhEQUFDMUIsZ0VBQW1CQTtnQ0FDbkJrQixXQUFVO2dDQUNWUSxPQUFNO2dDQUNORCxTQUFTZjs7c0NBSVgsNEVBQUNhO2dDQUFFRSxTQUFTLElBQU1uQixjQUFjcUI7MENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEQsQ0FBQztHQS9DZXRCOztRQUNrQ0oseURBQVVBO1FBQ2ZFLHVEQUFTQTtRQUNsQ1Isb0RBQVdBO1FBQ1ZBLG9EQUFXQTs7O0tBSmhCVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRIZWFkZXIudHN4PzUwODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQC9VSS9BdmF0YXInXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0U2VsZWN0VXNlciB9IGZyb20gJ0Avc3RvcmUvdXNlci91c2VyLnNlbGVjdG9yJ1xuaW1wb3J0IHsgTWRDYWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXG5pbXBvcnQgeyBJb1ZpZGVvY2FtIH0gZnJvbSAncmVhY3QtaWNvbnMvaW81J1xuaW1wb3J0IHsgQmlTZWFyY2hBbHQyIH0gZnJvbSAncmVhY3QtaWNvbnMvYmknXG5pbXBvcnQgeyBCc1RocmVlRG90c1ZlcnRpY2FsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5pbXBvcnQgeyB1c2VBY3Rpb25zIH0gZnJvbSAnQC9ob29rcy91c2VBY3Rpb25zJ1xuaW1wb3J0IHsgZ2V0U3RhdGVNZXNzYWdlT25saW5lVXNlcnMgfSBmcm9tICdAL3N0b3JlL21lc3NhZ2UvbWVzc2FnZS5zZWxlY3RvcnMnXG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tICdAL2hvb2tzL3VzZVRvZ2dsZSdcbmltcG9ydCB7IERyb3BEb3duIH0gZnJvbSAnQC9VSS9Ecm9wRG93bidcblxuZXhwb3J0IGZ1bmN0aW9uIENoYXRIZWFkZXIoKSB7XG5cdGNvbnN0IHsgc2V0U2VsZWN0VXNlciwgY2hhbmdlSXNTZWFyY2hNZXNzYWdlIH0gPSB1c2VBY3Rpb25zKClcblx0Y29uc3QgW29wZW5NZW51LCBzZXRPcGVuTWVudSwgb3Blbk1lbnVGbl0gPSB1c2VUb2dnbGUoKVxuXHRjb25zdCBzZWxlY3RVc2VyID0gdXNlU2VsZWN0b3IoZ2V0U2VsZWN0VXNlcilcblx0Y29uc3Qgb25saW5lVXNlcnMgPSB1c2VTZWxlY3RvcihnZXRTdGF0ZU1lc3NhZ2VPbmxpbmVVc2Vycylcblx0Y29uc3QgaXNPbmxpbmUgPSBvbmxpbmVVc2Vycz8uc29tZSh1c2VyID0+IHVzZXIgPT09IHNlbGVjdFVzZXI/LmlkKVxuXHRyZXR1cm4gKFxuXHRcdDxhcnRpY2xlIGNsYXNzTmFtZT0nYmctaW5wdXQtYmFja2dyb3VuZCBoLTIwIHAtMiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHBsLTQnPlxuXHRcdFx0XHR7c2VsZWN0VXNlciA/IChcblx0XHRcdFx0XHQ8QXZhdGFyXG5cdFx0XHRcdFx0XHR0eXBlPSdzbSdcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RVc2VyPy5pbWFnZX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17J2hvdmVyOm9wYWNpdHktNzAnfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PEF2YXRhciB0eXBlPSdsZycgdmFsdWU9eycvZGVmYXVsdF9hdmF0YXIucG5nJ30gLz5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGN1cnNvci1kZWZhdWx0Jz5cblx0XHRcdFx0XHQ8cD57c2VsZWN0VXNlcj8ubmFtZX08L3A+XG5cdFx0XHRcdFx0PHA+e2lzT25saW5lID8gJ29ubGluZScgOiAnb2ZmbGluZSd9PC9wPlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxhcnRpY2xlIGNsYXNzTmFtZT0naW5saW5lLWZsZXggZ2FwLTQgcHItNCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIHJlbGF0aXZlJz5cblx0XHRcdFx0PEJpU2VhcmNoQWx0MlxuXHRcdFx0XHRcdGNsYXNzTmFtZT0naC02IHctNiBob3Zlcjp0ZXh0LWdyYXktOTAwJ1xuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGNoYW5nZUlzU2VhcmNoTWVzc2FnZSh0cnVlKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PE1kQ2FsbCBjbGFzc05hbWU9J2gtNiB3LTYgaG92ZXI6dGV4dC1ncmF5LTkwMCcgdGl0bGU9J2F1ZGlvJyAvPlxuXHRcdFx0XHQ8SW9WaWRlb2NhbSBjbGFzc05hbWU9J2gtNiB3LTYgaG92ZXI6dGV4dC1ncmF5LTkwMCcgdGl0bGU9J3ZpZGVvJyAvPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC0wIHRvcC00Jz5cblx0XHRcdFx0XHQ8RHJvcERvd25cblx0XHRcdFx0XHRcdHRpdGxlPXtcblx0XHRcdFx0XHRcdFx0PEJzVGhyZWVEb3RzVmVydGljYWxcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2gtNiB3LTYgaG92ZXI6dGV4dC1ncmF5LTkwMCdcblx0XHRcdFx0XHRcdFx0XHR0aXRsZT0nb3B0aW9ucydcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvcGVuTWVudUZufVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxwIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdFVzZXIodW5kZWZpbmVkKX0+Y2xvc2U8L3A+XG5cdFx0XHRcdFx0PC9Ecm9wRG93bj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2FydGljbGU+XG5cdFx0PC9hcnRpY2xlPlxuXHQpXG59XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwidXNlU2VsZWN0b3IiLCJnZXRTZWxlY3RVc2VyIiwiTWRDYWxsIiwiSW9WaWRlb2NhbSIsIkJpU2VhcmNoQWx0MiIsIkJzVGhyZWVEb3RzVmVydGljYWwiLCJ1c2VBY3Rpb25zIiwiZ2V0U3RhdGVNZXNzYWdlT25saW5lVXNlcnMiLCJ1c2VUb2dnbGUiLCJEcm9wRG93biIsIkNoYXRIZWFkZXIiLCJzZXRTZWxlY3RVc2VyIiwiY2hhbmdlSXNTZWFyY2hNZXNzYWdlIiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsIm9wZW5NZW51Rm4iLCJzZWxlY3RVc2VyIiwib25saW5lVXNlcnMiLCJpc09ubGluZSIsInNvbWUiLCJ1c2VyIiwiaWQiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiZGl2IiwidHlwZSIsInZhbHVlIiwiaW1hZ2UiLCJwIiwibmFtZSIsIm9uQ2xpY2siLCJ0aXRsZSIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatHeader.tsx\n"));

/***/ })

});