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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatContainer: function() { return /* binding */ ChatContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_message_message_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/message/message.selectors */ \"./src/store/message/message.selectors.ts\");\n/* harmony import */ var _components_Chat_ChatTypeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Chat/ChatTypeMessage */ \"./src/components/Chat/ChatTypeMessage.tsx\");\n/* harmony import */ var _store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/user/user.selector */ \"./src/store/user/user.selector.ts\");\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useActions */ \"./src/hooks/useActions.ts\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.ts\");\n/* harmony import */ var _UI_ContextMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/UI/ContextMenu */ \"./src/components/UI/ContextMenu.tsx\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/constants/constants */ \"./src/constants/constants.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ChatContainer() {\n    var _messages;\n    _s();\n    const [openMenu, setOpenMenu] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__.useToggle)(false);\n    const messages = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_message_message_selectors__WEBPACK_IMPORTED_MODULE_3__.getAllMessagesState);\n    const coordinates = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__.getCoordinates);\n    var _useSelector;\n    const modeBg = (_useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__.getChatImage)) !== null && _useSelector !== void 0 ? _useSelector : \"bg-chat-background-teal\";\n    const selectChatUserId = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__.getSelectUserId);\n    const { removeMessageIdAsync, setCoordinates } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_6__.useActions)();\n    const handleDoubleClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{\n        e.preventDefault();\n        setCoordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setOpenMenu(true);\n    }, [\n        setCoordinates,\n        setOpenMenu\n    ]);\n    const contextMenu = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[\n            {\n                name: \"remove message\",\n                callback: (id)=>alert(\"remove\" + id)\n            },\n            {\n                name: \"change message\",\n                callback: (id)=>alert(\"change\" + id)\n            }\n        ], []);\n    const positionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _positionRef_current;\n        if (positionRef.current) (_positionRef_current = positionRef.current) === null || _positionRef_current === void 0 ? void 0 : _positionRef_current.scrollIntoView({\n            behavior: \"smooth\",\n            block: \"end\"\n        });\n    }, [\n        messages\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"custom-scrollbar h-[calc(100vh-10rem)] overflow-y-auto text-white relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(modeBg, \" bg-auto bg-center w-full z-10 absolute\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-white z-50 relative\",\n                    children: [\n                        openMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ContextMenu__WEBPACK_IMPORTED_MODULE_8__.ContextMenu, {\n                            item: {\n                                options: contextMenu,\n                                setContextMenu: setOpenMenu,\n                                coordinates: coordinates,\n                                contextMenu: openMenu\n                            },\n                            idElement: _constants_constants__WEBPACK_IMPORTED_MODULE_9__.MENU_MESSAGE_WINDOW\n                        }, void 0, false, {\n                            fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 7\n                        }, this),\n                        (_messages = messages) === null || _messages === void 0 ? void 0 : _messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                onDoubleClick: handleDoubleClick,\n                                className: \"text-white px-10 text-2xl flex hover:cursor-pointer hover:opacity-80 \".concat(message.senderId === selectChatUserId ? \"justify-start \" : \"justify-end \"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chat_ChatTypeMessage__WEBPACK_IMPORTED_MODULE_4__.ChatTypeMessage, {\n                                    message: message\n                                }, message.id, false, {\n                                    fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 8\n                                }, this)\n                            }, message.id, false, {\n                                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 7\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    ref: positionRef\n                }, void 0, false, {\n                    fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n            lineNumber: 59,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Chat/ChatContainer.tsx\",\n        lineNumber: 58,\n        columnNumber: 3\n    }, this);\n}\n_s(ChatContainer, \"1gf/frl9PexeqdJ85nkkNMsayaI=\", false, function() {\n    return [\n        _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__.useToggle,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_6__.useActions\n    ];\n});\n_c = ChatContainer;\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRDb250YWluZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQU8zQjtBQUN5RDtBQUNKO0FBS2hDO0FBQ1k7QUFDRjtBQUNDO0FBQ2E7QUFFcEQsU0FBU2U7UUFzRFZDOztJQXJETCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sMkRBQVNBLENBQUM7SUFDMUMsTUFBTUksV0FBV2hCLHdEQUFXQSxDQUFDTSxpRkFBbUJBO0lBQ2hELE1BQU1hLGNBQWNuQix3REFBV0EsQ0FBQ1MscUVBQWNBO1FBQy9CVDtJQUFmLE1BQU1vQixTQUFTcEIsQ0FBQUEsZUFBQUEsd0RBQVdBLENBQUNRLG1FQUFZQSxlQUF4QlIsMEJBQUFBLGVBQTZCO0lBQzVDLE1BQU1xQixtQkFBbUJyQix3REFBV0EsQ0FBQ1Usc0VBQWVBO0lBQ3BELE1BQU0sRUFBRVksb0JBQW9CLEVBQUVDLGNBQWMsRUFBRSxHQUFHWiw2REFBVUE7SUFDM0QsTUFBTWEsb0JBQW9CdEIsa0RBQVdBLENBQ3BDLENBQUN1QjtRQUNBQSxFQUFFQyxjQUFjO1FBQ2hCSCxlQUFlO1lBQUVJLEdBQUdGLEVBQUVHLEtBQUs7WUFBRUMsR0FBR0osRUFBRUssS0FBSztRQUFDO1FBQ3hDWixZQUFZO0lBQ2IsR0FDQTtRQUFDSztRQUFnQkw7S0FBWTtJQUU5QixNQUFNYSxjQUFjM0IsOENBQU9BLENBQzFCLElBQU07WUFDTDtnQkFDQzRCLE1BQU07Z0JBQ05DLFVBQVVDLENBQUFBLEtBQU1DLE1BQU0sV0FBV0Q7WUFDbEM7WUFDQTtnQkFDQ0YsTUFBTTtnQkFDTkMsVUFBVUMsQ0FBQUEsS0FBTUMsTUFBTSxXQUFXRDtZQUNsQztTQUNBLEVBQ0QsRUFBRTtJQUVILE1BQU1FLGNBQTBDL0IsNkNBQU1BLENBQUM7SUFDdkRGLGdEQUFTQSxDQUFDO1lBRVJpQztRQURELElBQUlBLFlBQVlDLE9BQU8sR0FDdEJELHVCQUFBQSxZQUFZQyxPQUFPLGNBQW5CRCwyQ0FBQUEscUJBQXFCRSxjQUFjLENBQUM7WUFDbkNDLFVBQVU7WUFDVkMsT0FBTztRQUNSO0lBQ0YsR0FBRztRQUFDeEI7S0FBUztJQUNiLHFCQUNDLDhEQUFDeUI7UUFBUUMsV0FBVTtrQkFDbEIsNEVBQUNDO1lBQ0FELFdBQVcsR0FBVSxPQUFQdEIsUUFBTzs7OEJBR3JCLDhEQUFDdUI7b0JBQUlELFdBQVU7O3dCQUNiekIsMEJBQ0EsOERBQUNKLHdEQUFXQTs0QkFDWCtCLE1BQU07Z0NBQ0xDLFNBQVNkO2dDQUNUZSxnQkFBZ0I1QjtnQ0FDaEJDLGFBQWFBO2dDQUNiWSxhQUFhZDs0QkFDZDs0QkFDQThCLFdBQVdqQyxxRUFBbUJBOzs7Ozs7eUJBRy9CRSxZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVVnQyxHQUFHLENBQUNDLENBQUFBLHdCQUNkLDhEQUFDUjtnQ0FDQVMsZUFBZTFCO2dDQUVma0IsV0FBVyx3RUFJVixPQUhBTyxRQUFRRSxRQUFRLEtBQUs5QixtQkFDbEIsbUJBQ0E7MENBR0osNEVBQUNkLDZFQUFlQTtvQ0FDZjBDLFNBQVNBO21DQUNKQSxRQUFRZixFQUFFOzs7OzsrQkFUWGUsUUFBUWYsRUFBRTs7Ozs7Ozs7Ozs7OEJBY2xCLDhEQUFDa0I7b0JBQUtDLEtBQUtqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjtHQTNFZ0JyQjs7UUFDaUJILHVEQUFTQTtRQUN4Qlosb0RBQVdBO1FBQ1JBLG9EQUFXQTtRQUNoQkEsb0RBQVdBO1FBQ0RBLG9EQUFXQTtRQUNhVyx5REFBVUE7OztLQU41Q0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9DaGF0Q29udGFpbmVyLnRzeD85NGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHtcblx0UmVmT2JqZWN0LFxuXHR1c2VDYWxsYmFjayxcblx0dXNlRWZmZWN0LFxuXHR1c2VNZW1vLFxuXHR1c2VSZWZcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRBbGxNZXNzYWdlc1N0YXRlIH0gZnJvbSAnQC9zdG9yZS9tZXNzYWdlL21lc3NhZ2Uuc2VsZWN0b3JzJ1xuaW1wb3J0IHsgQ2hhdFR5cGVNZXNzYWdlIH0gZnJvbSAnQC9jb21wb25lbnRzL0NoYXQvQ2hhdFR5cGVNZXNzYWdlJ1xuaW1wb3J0IHtcblx0Z2V0Q2hhdEltYWdlLFxuXHRnZXRDb29yZGluYXRlcyxcblx0Z2V0U2VsZWN0VXNlcklkXG59IGZyb20gJ0Avc3RvcmUvdXNlci91c2VyLnNlbGVjdG9yJ1xuaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gJ0AvaG9va3MvdXNlQWN0aW9ucydcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gJ0AvaG9va3MvdXNlVG9nZ2xlJ1xuaW1wb3J0IHsgQ29udGV4dE1lbnUgfSBmcm9tICdAL1VJL0NvbnRleHRNZW51J1xuaW1wb3J0IHsgTUVOVV9NRVNTQUdFX1dJTkRPVyB9IGZyb20gJ0AvY29uc3RhbnRzL2NvbnN0YW50cydcblxuZXhwb3J0IGZ1bmN0aW9uIENoYXRDb250YWluZXIoKSB7XG5cdGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlVG9nZ2xlKGZhbHNlKVxuXHRjb25zdCBtZXNzYWdlcyA9IHVzZVNlbGVjdG9yKGdldEFsbE1lc3NhZ2VzU3RhdGUpXG5cdGNvbnN0IGNvb3JkaW5hdGVzID0gdXNlU2VsZWN0b3IoZ2V0Q29vcmRpbmF0ZXMpXG5cdGNvbnN0IG1vZGVCZyA9IHVzZVNlbGVjdG9yKGdldENoYXRJbWFnZSkgPz8gJ2JnLWNoYXQtYmFja2dyb3VuZC10ZWFsJ1xuXHRjb25zdCBzZWxlY3RDaGF0VXNlcklkID0gdXNlU2VsZWN0b3IoZ2V0U2VsZWN0VXNlcklkKVxuXHRjb25zdCB7IHJlbW92ZU1lc3NhZ2VJZEFzeW5jLCBzZXRDb29yZGluYXRlcyB9ID0gdXNlQWN0aW9ucygpXG5cdGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gdXNlQ2FsbGJhY2soXG5cdFx0KGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHNldENvb3JkaW5hdGVzKHsgeDogZS5wYWdlWCwgeTogZS5wYWdlWSB9KVxuXHRcdFx0c2V0T3Blbk1lbnUodHJ1ZSlcblx0XHR9LFxuXHRcdFtzZXRDb29yZGluYXRlcywgc2V0T3Blbk1lbnVdXG5cdClcblx0Y29uc3QgY29udGV4dE1lbnUgPSB1c2VNZW1vKFxuXHRcdCgpID0+IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ3JlbW92ZSBtZXNzYWdlJyxcblx0XHRcdFx0Y2FsbGJhY2s6IGlkID0+IGFsZXJ0KCdyZW1vdmUnICsgaWQpXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnY2hhbmdlIG1lc3NhZ2UnLFxuXHRcdFx0XHRjYWxsYmFjazogaWQgPT4gYWxlcnQoJ2NoYW5nZScgKyBpZClcblx0XHRcdH1cblx0XHRdLFxuXHRcdFtdXG5cdClcblx0Y29uc3QgcG9zaXRpb25SZWY6IFJlZk9iamVjdDxIVE1MU3BhbkVsZW1lbnQ+ID0gdXNlUmVmKG51bGwpXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHBvc2l0aW9uUmVmLmN1cnJlbnQpXG5cdFx0XHRwb3NpdGlvblJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHRcdFx0YmxvY2s6ICdlbmQnXG5cdFx0XHR9KVxuXHR9LCBbbWVzc2FnZXNdKVxuXHRyZXR1cm4gKFxuXHRcdDxhcnRpY2xlIGNsYXNzTmFtZT0nY3VzdG9tLXNjcm9sbGJhciBoLVtjYWxjKDEwMHZoLTEwcmVtKV0gb3ZlcmZsb3cteS1hdXRvIHRleHQtd2hpdGUgcmVsYXRpdmUnPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e2Ake21vZGVCZ30gYmctYXV0byBiZy1jZW50ZXIgdy1mdWxsIHotMTAgYWJzb2x1dGVgfVxuXHRcdFx0XHQvLyByZWY9e2VsZW1lbnRSZWZ9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHotNTAgcmVsYXRpdmUnPlxuXHRcdFx0XHRcdHtvcGVuTWVudSAmJiAoXG5cdFx0XHRcdFx0XHQ8Q29udGV4dE1lbnVcblx0XHRcdFx0XHRcdFx0aXRlbT17e1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IGNvbnRleHRNZW51LFxuXHRcdFx0XHRcdFx0XHRcdHNldENvbnRleHRNZW51OiBzZXRPcGVuTWVudSxcblx0XHRcdFx0XHRcdFx0XHRjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGV4dE1lbnU6IG9wZW5NZW51XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGlkRWxlbWVudD17TUVOVV9NRVNTQUdFX1dJTkRPV31cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7bWVzc2FnZXM/Lm1hcChtZXNzYWdlID0+IChcblx0XHRcdFx0XHRcdDxhcnRpY2xlXG5cdFx0XHRcdFx0XHRcdG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfVxuXHRcdFx0XHRcdFx0XHRrZXk9e21lc3NhZ2UuaWR9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHRleHQtd2hpdGUgcHgtMTAgdGV4dC0yeGwgZmxleCBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwICR7XG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZS5zZW5kZXJJZCA9PT0gc2VsZWN0Q2hhdFVzZXJJZFxuXHRcdFx0XHRcdFx0XHRcdFx0PyAnanVzdGlmeS1zdGFydCAnXG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICdqdXN0aWZ5LWVuZCAnXG5cdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8Q2hhdFR5cGVNZXNzYWdlXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZT17bWVzc2FnZX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e21lc3NhZ2UuaWR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3BhbiByZWY9e3Bvc2l0aW9uUmVmfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9hcnRpY2xlPlxuXHQpXG59XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZiIsImdldEFsbE1lc3NhZ2VzU3RhdGUiLCJDaGF0VHlwZU1lc3NhZ2UiLCJnZXRDaGF0SW1hZ2UiLCJnZXRDb29yZGluYXRlcyIsImdldFNlbGVjdFVzZXJJZCIsInVzZUFjdGlvbnMiLCJ1c2VUb2dnbGUiLCJDb250ZXh0TWVudSIsIk1FTlVfTUVTU0FHRV9XSU5ET1ciLCJDaGF0Q29udGFpbmVyIiwibWVzc2FnZXMiLCJvcGVuTWVudSIsInNldE9wZW5NZW51IiwiY29vcmRpbmF0ZXMiLCJtb2RlQmciLCJzZWxlY3RDaGF0VXNlcklkIiwicmVtb3ZlTWVzc2FnZUlkQXN5bmMiLCJzZXRDb29yZGluYXRlcyIsImhhbmRsZURvdWJsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiY29udGV4dE1lbnUiLCJuYW1lIiwiY2FsbGJhY2siLCJpZCIsImFsZXJ0IiwicG9zaXRpb25SZWYiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImRpdiIsIml0ZW0iLCJvcHRpb25zIiwic2V0Q29udGV4dE1lbnUiLCJpZEVsZW1lbnQiLCJtYXAiLCJtZXNzYWdlIiwib25Eb3VibGVDbGljayIsInNlbmRlcklkIiwic3BhbiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatContainer.tsx\n"));

/***/ })

});