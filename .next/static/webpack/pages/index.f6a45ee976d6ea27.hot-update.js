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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatContainer: function() { return /* binding */ ChatContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_message_message_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/message/message.selectors */ \"./src/store/message/message.selectors.ts\");\n/* harmony import */ var _components_Chat_ChatTypeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Chat/ChatTypeMessage */ \"./src/components/Chat/ChatTypeMessage.tsx\");\n/* harmony import */ var _store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/user/user.selector */ \"./src/store/user/user.selector.ts\");\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useActions */ \"./src/hooks/useActions.ts\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.ts\");\n/* harmony import */ var _UI_ContextMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/UI/ContextMenu */ \"./src/components/UI/ContextMenu.tsx\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/constants/constants */ \"./src/constants/constants.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ChatContainer() {\n    var _messages;\n    _s();\n    const [openMenu, setOpenMenu] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__.useToggle)(false);\n    const [findId, setFindId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const messages = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_message_message_selectors__WEBPACK_IMPORTED_MODULE_3__.getAllMessagesState);\n    const coordinates = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__.getCoordinates);\n    var _useSelector;\n    const modeBg = (_useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__.getChatImage)) !== null && _useSelector !== void 0 ? _useSelector : \"bg-chat-background-teal\";\n    const selectChatUserId = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__.getSelectUserId);\n    const { removeMessageIdAsync, updateMessageIdAsync, setCoordinates } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_6__.useActions)();\n    const handleDoubleClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{\n        e.preventDefault();\n        setCoordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setOpenMenu(true);\n    }, [\n        setCoordinates,\n        setOpenMenu\n    ]);\n    const contextMenu = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[\n            {\n                name: \"remove message\",\n                callback: ()=>removeMessageIdAsync(Number(findId))\n            },\n            {\n                name: \"change message\",\n                callback: ()=>updateMessageIdAsync(Number(findId))\n            }\n        ], [\n        findId,\n        removeMessageIdAsync,\n        updateMessageIdAsync\n    ]);\n    const positionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _positionRef_current;\n        if (positionRef.current) (_positionRef_current = positionRef.current) === null || _positionRef_current === void 0 ? void 0 : _positionRef_current.scrollIntoView({\n            behavior: \"smooth\",\n            block: \"end\"\n        });\n    }, [\n        messages\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"custom-scrollbar h-[calc(100vh-10rem)] overflow-y-auto text-white relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(modeBg, \" bg-auto bg-center w-full z-10 absolute\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-white z-50 relative\",\n                    children: [\n                        openMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ContextMenu__WEBPACK_IMPORTED_MODULE_8__.ContextMenu, {\n                            item: {\n                                options: contextMenu,\n                                setContextMenu: setOpenMenu,\n                                coordinates: coordinates,\n                                contextMenu: openMenu\n                            },\n                            idElement: _constants_constants__WEBPACK_IMPORTED_MODULE_9__.MENU_MESSAGE_WINDOW\n                        }, void 0, false, {\n                            fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 7\n                        }, this),\n                        (_messages = messages) === null || _messages === void 0 ? void 0 : _messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                onDoubleClick: handleDoubleClick,\n                                onClick: ()=>setFindId(message.id),\n                                className: \"text-white px-10 text-2xl flex hover:cursor-pointer hover:opacity-80 \".concat(message.senderId === selectChatUserId ? \"justify-start \" : \"justify-end \"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chat_ChatTypeMessage__WEBPACK_IMPORTED_MODULE_4__.ChatTypeMessage, {\n                                    message: message\n                                }, message.id, false, {\n                                    fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 8\n                                }, this)\n                            }, message.id, false, {\n                                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 7\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    ref: positionRef\n                }, void 0, false, {\n                    fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n            lineNumber: 64,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n        lineNumber: 63,\n        columnNumber: 3\n    }, this);\n}\n_s(ChatContainer, \"AVU82jgmyaSoPLX0xFYI/zWZgoY=\", false, function() {\n    return [\n        _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__.useToggle,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_6__.useActions\n    ];\n});\n_c = ChatContainer;\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRDb250YWluZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQVEzQjtBQUc0QjtBQUN5QjtBQUtoQztBQUNZO0FBQ0Y7QUFDQztBQUNhO0FBRXBELFNBQVNnQjtRQXdEVkM7O0lBdkRMLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwyREFBU0EsQ0FBQztJQUMxQyxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR2YsK0NBQVFBO0lBQ3BDLE1BQU1XLFdBQVdqQix3REFBV0EsQ0FBQ08saUZBQW1CQTtJQUNoRCxNQUFNZSxjQUFjdEIsd0RBQVdBLENBQUNVLHFFQUFjQTtRQUMvQlY7SUFBZixNQUFNdUIsU0FBU3ZCLENBQUFBLGVBQUFBLHdEQUFXQSxDQUFDUyxtRUFBWUEsZUFBeEJULDBCQUFBQSxlQUE2QjtJQUM1QyxNQUFNd0IsbUJBQW1CeEIsd0RBQVdBLENBQUNXLHNFQUFlQTtJQUNwRCxNQUFNLEVBQUVjLG9CQUFvQixFQUFFQyxvQkFBb0IsRUFBRUMsY0FBYyxFQUFFLEdBQ25FZiw2REFBVUE7SUFDWCxNQUFNZ0Isb0JBQW9CMUIsa0RBQVdBLENBQ3BDLENBQUMyQjtRQUNBQSxFQUFFQyxjQUFjO1FBQ2hCSCxlQUFlO1lBQUVJLEdBQUdGLEVBQUVHLEtBQUs7WUFBRUMsR0FBR0osRUFBRUssS0FBSztRQUFDO1FBQ3hDZixZQUFZO0lBQ2IsR0FDQTtRQUFDUTtRQUFnQlI7S0FBWTtJQUU5QixNQUFNZ0IsY0FBYy9CLDhDQUFPQSxDQUMxQixJQUFNO1lBQ0w7Z0JBQ0NnQyxNQUFNO2dCQUNOQyxVQUFVLElBQU1aLHFCQUFxQmEsT0FBT2xCO1lBQzdDO1lBQ0E7Z0JBQ0NnQixNQUFNO2dCQUNOQyxVQUFVLElBQU1YLHFCQUFxQlksT0FBT2xCO1lBQzdDO1NBQ0EsRUFDRDtRQUFDQTtRQUFRSztRQUFzQkM7S0FBcUI7SUFFckQsTUFBTWEsY0FBMENsQyw2Q0FBTUEsQ0FBQztJQUN2REYsZ0RBQVNBLENBQUM7WUFFUm9DO1FBREQsSUFBSUEsWUFBWUMsT0FBTyxHQUN0QkQsdUJBQUFBLFlBQVlDLE9BQU8sY0FBbkJELDJDQUFBQSxxQkFBcUJFLGNBQWMsQ0FBQztZQUNuQ0MsVUFBVTtZQUNWQyxPQUFPO1FBQ1I7SUFDRixHQUFHO1FBQUMxQjtLQUFTO0lBQ2IscUJBQ0MsOERBQUMyQjtRQUFRQyxXQUFVO2tCQUNsQiw0RUFBQ0M7WUFDQUQsV0FBVyxHQUFVLE9BQVB0QixRQUFPOzs4QkFHckIsOERBQUN1QjtvQkFBSUQsV0FBVTs7d0JBQ2IzQiwwQkFDQSw4REFBQ0osd0RBQVdBOzRCQUNYaUMsTUFBTTtnQ0FDTEMsU0FBU2I7Z0NBQ1RjLGdCQUFnQjlCO2dDQUNoQkcsYUFBYUE7Z0NBQ2JhLGFBQWFqQjs0QkFDZDs0QkFDQWdDLFdBQVduQyxxRUFBbUJBOzs7Ozs7eUJBRy9CRSxZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVVrQyxHQUFHLENBQUNDLENBQUFBLHdCQUNkLDhEQUFDUjtnQ0FDQVMsZUFBZXpCO2dDQUNmMEIsU0FBUyxJQUFNakMsVUFBVStCLFFBQVFHLEVBQUU7Z0NBRW5DVixXQUFXLHdFQUlWLE9BSEFPLFFBQVFJLFFBQVEsS0FBS2hDLG1CQUNsQixtQkFDQTswQ0FHSiw0RUFBQ2hCLDZFQUFlQTtvQ0FDZjRDLFNBQVNBO21DQUNKQSxRQUFRRyxFQUFFOzs7OzsrQkFUWEgsUUFBUUcsRUFBRTs7Ozs7Ozs7Ozs7OEJBY2xCLDhEQUFDRTtvQkFBS0MsS0FBS25COzs7Ozs7Ozs7Ozs7Ozs7OztBQUlmO0dBOUVnQnZCOztRQUNpQkgsdURBQVNBO1FBRXhCYixvREFBV0E7UUFDUkEsb0RBQVdBO1FBQ2hCQSxvREFBV0E7UUFDREEsb0RBQVdBO1FBRW5DWSx5REFBVUE7OztLQVJJSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRDb250YWluZXIudHN4Pzk0YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdCwge1xuXHRSZWZPYmplY3QsXG5cdHVzZUNhbGxiYWNrLFxuXHR1c2VFZmZlY3QsXG5cdHVzZU1lbW8sXG5cdHVzZVJlZixcblx0dXNlU3RhdGVcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuXHRnZXRBbGxNZXNzYWdlc1N0YXRlLFxufSBmcm9tICdAL3N0b3JlL21lc3NhZ2UvbWVzc2FnZS5zZWxlY3RvcnMnXG5pbXBvcnQgeyBDaGF0VHlwZU1lc3NhZ2UgfSBmcm9tICdAL2NvbXBvbmVudHMvQ2hhdC9DaGF0VHlwZU1lc3NhZ2UnXG5pbXBvcnQge1xuXHRnZXRDaGF0SW1hZ2UsXG5cdGdldENvb3JkaW5hdGVzLFxuXHRnZXRTZWxlY3RVc2VySWRcbn0gZnJvbSAnQC9zdG9yZS91c2VyL3VzZXIuc2VsZWN0b3InXG5pbXBvcnQgeyB1c2VBY3Rpb25zIH0gZnJvbSAnQC9ob29rcy91c2VBY3Rpb25zJ1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSAnQC9ob29rcy91c2VUb2dnbGUnXG5pbXBvcnQgeyBDb250ZXh0TWVudSB9IGZyb20gJ0AvVUkvQ29udGV4dE1lbnUnXG5pbXBvcnQgeyBNRU5VX01FU1NBR0VfV0lORE9XIH0gZnJvbSAnQC9jb25zdGFudHMvY29uc3RhbnRzJ1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhdENvbnRhaW5lcigpIHtcblx0Y29uc3QgW29wZW5NZW51LCBzZXRPcGVuTWVudV0gPSB1c2VUb2dnbGUoZmFsc2UpXG5cdGNvbnN0IFtmaW5kSWQsIHNldEZpbmRJZF0gPSB1c2VTdGF0ZTxudW1iZXI+KClcblx0Y29uc3QgbWVzc2FnZXMgPSB1c2VTZWxlY3RvcihnZXRBbGxNZXNzYWdlc1N0YXRlKVxuXHRjb25zdCBjb29yZGluYXRlcyA9IHVzZVNlbGVjdG9yKGdldENvb3JkaW5hdGVzKVxuXHRjb25zdCBtb2RlQmcgPSB1c2VTZWxlY3RvcihnZXRDaGF0SW1hZ2UpID8/ICdiZy1jaGF0LWJhY2tncm91bmQtdGVhbCdcblx0Y29uc3Qgc2VsZWN0Q2hhdFVzZXJJZCA9IHVzZVNlbGVjdG9yKGdldFNlbGVjdFVzZXJJZClcblx0Y29uc3QgeyByZW1vdmVNZXNzYWdlSWRBc3luYywgdXBkYXRlTWVzc2FnZUlkQXN5bmMsIHNldENvb3JkaW5hdGVzIH0gPVxuXHRcdHVzZUFjdGlvbnMoKVxuXHRjb25zdCBoYW5kbGVEb3VibGVDbGljayA9IHVzZUNhbGxiYWNrKFxuXHRcdChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRzZXRDb29yZGluYXRlcyh7IHg6IGUucGFnZVgsIHk6IGUucGFnZVkgfSlcblx0XHRcdHNldE9wZW5NZW51KHRydWUpXG5cdFx0fSxcblx0XHRbc2V0Q29vcmRpbmF0ZXMsIHNldE9wZW5NZW51XVxuXHQpXG5cdGNvbnN0IGNvbnRleHRNZW51ID0gdXNlTWVtbyhcblx0XHQoKSA9PiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdyZW1vdmUgbWVzc2FnZScsXG5cdFx0XHRcdGNhbGxiYWNrOiAoKSA9PiByZW1vdmVNZXNzYWdlSWRBc3luYyhOdW1iZXIoZmluZElkKSlcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdjaGFuZ2UgbWVzc2FnZScsXG5cdFx0XHRcdGNhbGxiYWNrOiAoKSA9PiB1cGRhdGVNZXNzYWdlSWRBc3luYyhOdW1iZXIoZmluZElkKSwgKVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0W2ZpbmRJZCwgcmVtb3ZlTWVzc2FnZUlkQXN5bmMsIHVwZGF0ZU1lc3NhZ2VJZEFzeW5jXVxuXHQpXG5cdGNvbnN0IHBvc2l0aW9uUmVmOiBSZWZPYmplY3Q8SFRNTFNwYW5FbGVtZW50PiA9IHVzZVJlZihudWxsKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChwb3NpdGlvblJlZi5jdXJyZW50KVxuXHRcdFx0cG9zaXRpb25SZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0XHRcdGJsb2NrOiAnZW5kJ1xuXHRcdFx0fSlcblx0fSwgW21lc3NhZ2VzXSlcblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9J2N1c3RvbS1zY3JvbGxiYXIgaC1bY2FsYygxMDB2aC0xMHJlbSldIG92ZXJmbG93LXktYXV0byB0ZXh0LXdoaXRlIHJlbGF0aXZlJz5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtgJHttb2RlQmd9IGJnLWF1dG8gYmctY2VudGVyIHctZnVsbCB6LTEwIGFic29sdXRlYH1cblx0XHRcdFx0Ly8gcmVmPXtlbGVtZW50UmVmfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB6LTUwIHJlbGF0aXZlJz5cblx0XHRcdFx0XHR7b3Blbk1lbnUgJiYgKFxuXHRcdFx0XHRcdFx0PENvbnRleHRNZW51XG5cdFx0XHRcdFx0XHRcdGl0ZW09e3tcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiBjb250ZXh0TWVudSxcblx0XHRcdFx0XHRcdFx0XHRzZXRDb250ZXh0TWVudTogc2V0T3Blbk1lbnUsXG5cdFx0XHRcdFx0XHRcdFx0Y29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRleHRNZW51OiBvcGVuTWVudVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRpZEVsZW1lbnQ9e01FTlVfTUVTU0FHRV9XSU5ET1d9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0e21lc3NhZ2VzPy5tYXAobWVzc2FnZSA9PiAoXG5cdFx0XHRcdFx0XHQ8YXJ0aWNsZVxuXHRcdFx0XHRcdFx0XHRvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja31cblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0RmluZElkKG1lc3NhZ2UuaWQpfVxuXHRcdFx0XHRcdFx0XHRrZXk9e21lc3NhZ2UuaWR9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHRleHQtd2hpdGUgcHgtMTAgdGV4dC0yeGwgZmxleCBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwICR7XG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZS5zZW5kZXJJZCA9PT0gc2VsZWN0Q2hhdFVzZXJJZFxuXHRcdFx0XHRcdFx0XHRcdFx0PyAnanVzdGlmeS1zdGFydCAnXG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICdqdXN0aWZ5LWVuZCAnXG5cdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8Q2hhdFR5cGVNZXNzYWdlXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZT17bWVzc2FnZX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e21lc3NhZ2UuaWR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3BhbiByZWY9e3Bvc2l0aW9uUmVmfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9hcnRpY2xlPlxuXHQpXG59XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwiZ2V0QWxsTWVzc2FnZXNTdGF0ZSIsIkNoYXRUeXBlTWVzc2FnZSIsImdldENoYXRJbWFnZSIsImdldENvb3JkaW5hdGVzIiwiZ2V0U2VsZWN0VXNlcklkIiwidXNlQWN0aW9ucyIsInVzZVRvZ2dsZSIsIkNvbnRleHRNZW51IiwiTUVOVV9NRVNTQUdFX1dJTkRPVyIsIkNoYXRDb250YWluZXIiLCJtZXNzYWdlcyIsIm9wZW5NZW51Iiwic2V0T3Blbk1lbnUiLCJmaW5kSWQiLCJzZXRGaW5kSWQiLCJjb29yZGluYXRlcyIsIm1vZGVCZyIsInNlbGVjdENoYXRVc2VySWQiLCJyZW1vdmVNZXNzYWdlSWRBc3luYyIsInVwZGF0ZU1lc3NhZ2VJZEFzeW5jIiwic2V0Q29vcmRpbmF0ZXMiLCJoYW5kbGVEb3VibGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIngiLCJwYWdlWCIsInkiLCJwYWdlWSIsImNvbnRleHRNZW51IiwibmFtZSIsImNhbGxiYWNrIiwiTnVtYmVyIiwicG9zaXRpb25SZWYiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImRpdiIsIml0ZW0iLCJvcHRpb25zIiwic2V0Q29udGV4dE1lbnUiLCJpZEVsZW1lbnQiLCJtYXAiLCJtZXNzYWdlIiwib25Eb3VibGVDbGljayIsIm9uQ2xpY2siLCJpZCIsInNlbmRlcklkIiwic3BhbiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatContainer.tsx\n"));

/***/ })

});