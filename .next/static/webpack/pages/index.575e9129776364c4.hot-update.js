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

/***/ "./src/components/Chat/ChatContainer.tsx":
/*!***********************************************!*\
  !*** ./src/components/Chat/ChatContainer.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatContainer: function() { return /* binding */ ChatContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_message_message_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/message/message.selectors */ \"./src/store/message/message.selectors.ts\");\n/* harmony import */ var _components_Chat_ChatTypeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Chat/ChatTypeMessage */ \"./src/components/Chat/ChatTypeMessage.tsx\");\n/* harmony import */ var _store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/user/user.selector */ \"./src/store/user/user.selector.ts\");\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useActions */ \"./src/hooks/useActions.ts\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.ts\");\n/* harmony import */ var _UI_ContextMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/UI/ContextMenu */ \"./src/components/UI/ContextMenu.tsx\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/constants/constants */ \"./src/constants/constants.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst initialContextMenuCoordinates = {\n    x: 0,\n    y: 0\n};\nfunction ChatContainer() {\n    var _messages;\n    _s();\n    const messages = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_message_message_selectors__WEBPACK_IMPORTED_MODULE_3__.getAllMessagesState);\n    const [openMenu, setOpenMenu] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__.useToggle)(false);\n    var _useSelector;\n    const modeBg = (_useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__.getChatImage)) !== null && _useSelector !== void 0 ? _useSelector : \"bg-chat-background-teal\";\n    const selectChatUserId = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__.getSelectUserId);\n    const { removeMessageIdAsync } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_6__.useActions)();\n    const [contextMenuCoordinates, setContextMenuCoordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialContextMenuCoordinates);\n    const showContextVisible = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{\n        e.preventDefault();\n        setContextMenuCoordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setOpenMenu(true);\n    }, [\n        setOpenMenu\n    ]);\n    const contextMenu = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[\n            {\n                name: \"remove message\",\n                callback: (id)=>alert(\"remove\" + id)\n            },\n            {\n                name: \"change message\",\n                callback: (id)=>alert(\"change\" + id)\n            }\n        ], []);\n    const positionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _positionRef_current;\n        if (positionRef.current) (_positionRef_current = positionRef.current) === null || _positionRef_current === void 0 ? void 0 : _positionRef_current.scrollIntoView({\n            behavior: \"smooth\",\n            block: \"end\"\n        });\n    }, [\n        messages\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"custom-scrollbar h-[calc(100vh-10rem)] overflow-y-auto text-white relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(modeBg, \" bg-auto bg-center w-full z-10 absolute\"),\n            children: [\n                openMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ContextMenu__WEBPACK_IMPORTED_MODULE_8__.ContextMenu, {\n                    item: {\n                        options: contextMenu,\n                        setContextMenu: setOpenMenu,\n                        coordinates: contextMenuCoordinates,\n                        contextMenu: openMenu\n                    },\n                    idElement: _constants_constants__WEBPACK_IMPORTED_MODULE_9__.MENU_MESSAGE_WINDOW\n                }, void 0, false, {\n                    fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 6\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-white z-50 \",\n                    onClick: (e)=>showContextVisible(e),\n                    children: (_messages = messages) === null || _messages === void 0 ? void 0 : _messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            onDoubleClick: ()=>setOpenMenu(true),\n                            className: \"text-white px-10 text-2xl flex hover:cursor-pointer hover:opacity-75 \".concat(message.senderId === selectChatUserId ? \"justify-start \" : \"justify-end \"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chat_ChatTypeMessage__WEBPACK_IMPORTED_MODULE_4__.ChatTypeMessage, {\n                                menu: {\n                                    toggle: openMenu,\n                                    setToggle: setOpenMenu\n                                },\n                                message: message\n                            }, message.id, false, {\n                                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 8\n                            }, this)\n                        }, message.id, false, {\n                            fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 7\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    ref: positionRef\n                }, void 0, false, {\n                    fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n            lineNumber: 62,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n        lineNumber: 61,\n        columnNumber: 3\n    }, this);\n}\n_s(ChatContainer, \"FdDXT+eOtUYFlMg5JUsGfJfErIs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__.useToggle,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_6__.useActions\n    ];\n});\n_c = ChatContainer;\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRDb250YWluZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQVEzQjtBQUN5RDtBQUNKO0FBQ087QUFDM0I7QUFDRjtBQUNDO0FBQ2E7QUFHM0QsTUFBTWUsZ0NBQWdDO0lBQ3JDQyxHQUFHO0lBQ0hDLEdBQUc7QUFDSjtBQUNPLFNBQVNDO1FBMERWQzs7SUF6REwsTUFBTUEsV0FBV25CLHdEQUFXQSxDQUFDTyxpRkFBbUJBO0lBQ2hELE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHVCwyREFBU0EsQ0FBQztRQUMzQlo7SUFBZixNQUFNc0IsU0FBU3RCLENBQUFBLGVBQUFBLHdEQUFXQSxDQUFDUyxtRUFBWUEsZUFBeEJULDBCQUFBQSxlQUE2QjtJQUM1QyxNQUFNdUIsbUJBQW1CdkIsd0RBQVdBLENBQUNVLHNFQUFlQTtJQUNwRCxNQUFNLEVBQUVjLG9CQUFvQixFQUFFLEdBQUdiLDZEQUFVQTtJQUMzQyxNQUFNLENBQUNjLHdCQUF3QkMsMEJBQTBCLEdBQ3hEcEIsK0NBQVFBLENBQXlCUztJQUNsQyxNQUFNWSxxQkFBcUJ6QixrREFBV0EsQ0FDckMsQ0FBQzBCO1FBQ0FBLEVBQUVDLGNBQWM7UUFDaEJILDBCQUEwQjtZQUFFVixHQUFHWSxFQUFFRSxLQUFLO1lBQUViLEdBQUdXLEVBQUVHLEtBQUs7UUFBQztRQUNuRFYsWUFBWTtJQUNiLEdBQ0E7UUFBQ0E7S0FBWTtJQUVkLE1BQU1XLGNBQWM1Qiw4Q0FBT0EsQ0FDMUIsSUFBTTtZQUNMO2dCQUNDNkIsTUFBTTtnQkFDTkMsVUFBVUMsQ0FBQUEsS0FBTUMsTUFBTSxXQUFXRDtZQUNsQztZQUNBO2dCQUNDRixNQUFNO2dCQUNOQyxVQUFVQyxDQUFBQSxLQUFNQyxNQUFNLFdBQVdEO1lBQ2xDO1NBQ0EsRUFDRCxFQUFFO0lBRUgsTUFBTUUsY0FBMENoQyw2Q0FBTUEsQ0FBQztJQUN2REYsZ0RBQVNBLENBQUM7WUFFUmtDO1FBREQsSUFBSUEsWUFBWUMsT0FBTyxHQUN0QkQsdUJBQUFBLFlBQVlDLE9BQU8sY0FBbkJELDJDQUFBQSxxQkFBcUJFLGNBQWMsQ0FBQztZQUNuQ0MsVUFBVTtZQUNWQyxPQUFPO1FBQ1I7SUFDRixHQUFHO1FBQUN0QjtLQUFTO0lBQ2IscUJBQ0MsOERBQUN1QjtRQUFRQyxXQUFVO2tCQUNsQiw0RUFBQ0M7WUFDQUQsV0FBVyxHQUFVLE9BQVByQixRQUFPOztnQkFHcEJGLDBCQUNBLDhEQUFDUCx3REFBV0E7b0JBQ1hnQyxNQUFNO3dCQUNMQyxTQUFTZDt3QkFDVGUsZ0JBQWdCMUI7d0JBQ2hCMkIsYUFBYXZCO3dCQUNiTyxhQUFhWjtvQkFDZDtvQkFDQTZCLFdBQVduQyxxRUFBbUJBOzs7Ozs7OEJBR2hDLDhEQUFDOEI7b0JBQ0FELFdBQVU7b0JBQ1ZPLFNBQVN0QixDQUFBQSxJQUFLRCxtQkFBbUJDOytCQUVoQ1QsWUFBQUEsc0JBQUFBLGdDQUFBQSxVQUFVZ0MsR0FBRyxDQUFDQyxDQUFBQSx3QkFDZCw4REFBQ1Y7NEJBQ0FXLGVBQWUsSUFBTWhDLFlBQVk7NEJBRWpDc0IsV0FBVyx3RUFJVixPQUhBUyxRQUFRRSxRQUFRLEtBQUsvQixtQkFDbEIsbUJBQ0E7c0NBR0osNEVBQUNmLDZFQUFlQTtnQ0FDZitDLE1BQU07b0NBQ0xDLFFBQVFwQztvQ0FDUnFDLFdBQVdwQztnQ0FDWjtnQ0FDQStCLFNBQVNBOytCQUNKQSxRQUFRakIsRUFBRTs7Ozs7MkJBYlhpQixRQUFRakIsRUFBRTs7Ozs7Ozs7Ozs4QkFrQmxCLDhEQUFDdUI7b0JBQUtDLEtBQUt0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjtHQW5GZ0JuQjs7UUFDRWxCLG9EQUFXQTtRQUNJWSx1REFBU0E7UUFDMUJaLG9EQUFXQTtRQUNEQSxvREFBV0E7UUFDSFcseURBQVVBOzs7S0FMNUJPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXQvQ2hhdENvbnRhaW5lci50c3g/OTRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlYWN0LCB7XG5cdFJlZk9iamVjdCxcblx0dXNlQ2FsbGJhY2ssXG5cdHVzZUVmZmVjdCxcblx0dXNlTWVtbyxcblx0dXNlUmVmLFxuXHR1c2VTdGF0ZVxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldEFsbE1lc3NhZ2VzU3RhdGUgfSBmcm9tICdAL3N0b3JlL21lc3NhZ2UvbWVzc2FnZS5zZWxlY3RvcnMnXG5pbXBvcnQgeyBDaGF0VHlwZU1lc3NhZ2UgfSBmcm9tICdAL2NvbXBvbmVudHMvQ2hhdC9DaGF0VHlwZU1lc3NhZ2UnXG5pbXBvcnQgeyBnZXRDaGF0SW1hZ2UsIGdldFNlbGVjdFVzZXJJZCB9IGZyb20gJ0Avc3RvcmUvdXNlci91c2VyLnNlbGVjdG9yJ1xuaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gJ0AvaG9va3MvdXNlQWN0aW9ucydcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gJ0AvaG9va3MvdXNlVG9nZ2xlJ1xuaW1wb3J0IHsgQ29udGV4dE1lbnUgfSBmcm9tICdAL1VJL0NvbnRleHRNZW51J1xuaW1wb3J0IHsgTUVOVV9NRVNTQUdFX1dJTkRPVyB9IGZyb20gJ0AvY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCB7IFR5cGVDb250ZXh0Q29vcmRpbmF0ZXMgfSBmcm9tICdAL3R5cGVzL2NvbnRleHRUeXBlcydcblxuY29uc3QgaW5pdGlhbENvbnRleHRNZW51Q29vcmRpbmF0ZXMgPSB7XG5cdHg6IDAsXG5cdHk6IDBcbn1cbmV4cG9ydCBmdW5jdGlvbiBDaGF0Q29udGFpbmVyKCkge1xuXHRjb25zdCBtZXNzYWdlcyA9IHVzZVNlbGVjdG9yKGdldEFsbE1lc3NhZ2VzU3RhdGUpXG5cdGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlVG9nZ2xlKGZhbHNlKVxuXHRjb25zdCBtb2RlQmcgPSB1c2VTZWxlY3RvcihnZXRDaGF0SW1hZ2UpID8/ICdiZy1jaGF0LWJhY2tncm91bmQtdGVhbCdcblx0Y29uc3Qgc2VsZWN0Q2hhdFVzZXJJZCA9IHVzZVNlbGVjdG9yKGdldFNlbGVjdFVzZXJJZClcblx0Y29uc3QgeyByZW1vdmVNZXNzYWdlSWRBc3luYyB9ID0gdXNlQWN0aW9ucygpXG5cdGNvbnN0IFtjb250ZXh0TWVudUNvb3JkaW5hdGVzLCBzZXRDb250ZXh0TWVudUNvb3JkaW5hdGVzXSA9XG5cdFx0dXNlU3RhdGU8VHlwZUNvbnRleHRDb29yZGluYXRlcz4oaW5pdGlhbENvbnRleHRNZW51Q29vcmRpbmF0ZXMpXG5cdGNvbnN0IHNob3dDb250ZXh0VmlzaWJsZSA9IHVzZUNhbGxiYWNrKFxuXHRcdChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRzZXRDb250ZXh0TWVudUNvb3JkaW5hdGVzKHsgeDogZS5wYWdlWCwgeTogZS5wYWdlWSB9KVxuXHRcdFx0c2V0T3Blbk1lbnUodHJ1ZSlcblx0XHR9LFxuXHRcdFtzZXRPcGVuTWVudV1cblx0KVxuXHRjb25zdCBjb250ZXh0TWVudSA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAncmVtb3ZlIG1lc3NhZ2UnLFxuXHRcdFx0XHRjYWxsYmFjazogaWQgPT4gYWxlcnQoJ3JlbW92ZScgKyBpZClcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdjaGFuZ2UgbWVzc2FnZScsXG5cdFx0XHRcdGNhbGxiYWNrOiBpZCA9PiBhbGVydCgnY2hhbmdlJyArIGlkKVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0W11cblx0KVxuXHRjb25zdCBwb3NpdGlvblJlZjogUmVmT2JqZWN0PEhUTUxTcGFuRWxlbWVudD4gPSB1c2VSZWYobnVsbClcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAocG9zaXRpb25SZWYuY3VycmVudClcblx0XHRcdHBvc2l0aW9uUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHtcblx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdFx0XHRibG9jazogJ2VuZCdcblx0XHRcdH0pXG5cdH0sIFttZXNzYWdlc10pXG5cdHJldHVybiAoXG5cdFx0PGFydGljbGUgY2xhc3NOYW1lPSdjdXN0b20tc2Nyb2xsYmFyIGgtW2NhbGMoMTAwdmgtMTByZW0pXSBvdmVyZmxvdy15LWF1dG8gdGV4dC13aGl0ZSByZWxhdGl2ZSc+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17YCR7bW9kZUJnfSBiZy1hdXRvIGJnLWNlbnRlciB3LWZ1bGwgei0xMCBhYnNvbHV0ZWB9XG5cdFx0XHRcdC8vIHJlZj17ZWxlbWVudFJlZn1cblx0XHRcdD5cblx0XHRcdFx0e29wZW5NZW51ICYmIChcblx0XHRcdFx0XHQ8Q29udGV4dE1lbnVcblx0XHRcdFx0XHRcdGl0ZW09e3tcblx0XHRcdFx0XHRcdFx0b3B0aW9uczogY29udGV4dE1lbnUsXG5cdFx0XHRcdFx0XHRcdHNldENvbnRleHRNZW51OiBzZXRPcGVuTWVudSxcblx0XHRcdFx0XHRcdFx0Y29vcmRpbmF0ZXM6IGNvbnRleHRNZW51Q29vcmRpbmF0ZXMsXG5cdFx0XHRcdFx0XHRcdGNvbnRleHRNZW51OiBvcGVuTWVudVxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGlkRWxlbWVudD17TUVOVV9NRVNTQUdFX1dJTkRPV31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHotNTAgJ1xuXHRcdFx0XHRcdG9uQ2xpY2s9e2UgPT4gc2hvd0NvbnRleHRWaXNpYmxlKGUpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e21lc3NhZ2VzPy5tYXAobWVzc2FnZSA9PiAoXG5cdFx0XHRcdFx0XHQ8YXJ0aWNsZVxuXHRcdFx0XHRcdFx0XHRvbkRvdWJsZUNsaWNrPXsoKSA9PiBzZXRPcGVuTWVudSh0cnVlKX1cblx0XHRcdFx0XHRcdFx0a2V5PXttZXNzYWdlLmlkfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIHB4LTEwIHRleHQtMnhsIGZsZXggaG92ZXI6Y3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS03NSAke1xuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2Uuc2VuZGVySWQgPT09IHNlbGVjdENoYXRVc2VySWRcblx0XHRcdFx0XHRcdFx0XHRcdD8gJ2p1c3RpZnktc3RhcnQgJ1xuXHRcdFx0XHRcdFx0XHRcdFx0OiAnanVzdGlmeS1lbmQgJ1xuXHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PENoYXRUeXBlTWVzc2FnZVxuXHRcdFx0XHRcdFx0XHRcdG1lbnU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHRvZ2dsZTogb3Blbk1lbnUsXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2dnbGU6IHNldE9wZW5NZW51XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlPXttZXNzYWdlfVxuXHRcdFx0XHRcdFx0XHRcdGtleT17bWVzc2FnZS5pZH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzcGFuIHJlZj17cG9zaXRpb25SZWZ9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2FydGljbGU+XG5cdClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJnZXRBbGxNZXNzYWdlc1N0YXRlIiwiQ2hhdFR5cGVNZXNzYWdlIiwiZ2V0Q2hhdEltYWdlIiwiZ2V0U2VsZWN0VXNlcklkIiwidXNlQWN0aW9ucyIsInVzZVRvZ2dsZSIsIkNvbnRleHRNZW51IiwiTUVOVV9NRVNTQUdFX1dJTkRPVyIsImluaXRpYWxDb250ZXh0TWVudUNvb3JkaW5hdGVzIiwieCIsInkiLCJDaGF0Q29udGFpbmVyIiwibWVzc2FnZXMiLCJvcGVuTWVudSIsInNldE9wZW5NZW51IiwibW9kZUJnIiwic2VsZWN0Q2hhdFVzZXJJZCIsInJlbW92ZU1lc3NhZ2VJZEFzeW5jIiwiY29udGV4dE1lbnVDb29yZGluYXRlcyIsInNldENvbnRleHRNZW51Q29vcmRpbmF0ZXMiLCJzaG93Q29udGV4dFZpc2libGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYWdlWCIsInBhZ2VZIiwiY29udGV4dE1lbnUiLCJuYW1lIiwiY2FsbGJhY2siLCJpZCIsImFsZXJ0IiwicG9zaXRpb25SZWYiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImRpdiIsIml0ZW0iLCJvcHRpb25zIiwic2V0Q29udGV4dE1lbnUiLCJjb29yZGluYXRlcyIsImlkRWxlbWVudCIsIm9uQ2xpY2siLCJtYXAiLCJtZXNzYWdlIiwib25Eb3VibGVDbGljayIsInNlbmRlcklkIiwibWVudSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInNwYW4iLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatContainer.tsx\n"));

/***/ })

});