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

/***/ "./src/components/Main.tsx":
/*!*********************************!*\
  !*** ./src/components/Main.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useActions */ \"./src/hooks/useActions.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/user/user.selector */ \"./src/store/user/user.selector.ts\");\n/* harmony import */ var _components_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.tsx\");\n/* harmony import */ var _components_Chat_Chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Chat/Chat */ \"./src/components/Chat/Chat.tsx\");\n/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Empty */ \"./src/components/Empty.tsx\");\n/* harmony import */ var _service_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/service/const */ \"./src/service/const.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\n/* harmony import */ var _UI_IncomingVideoCall__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/UI/IncomingVideoCall */ \"./src/components/UI/IncomingVideoCall.tsx\");\n/* harmony import */ var _UI_IncomingVoiceCall__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/UI/IncomingVoiceCall */ \"./src/components/UI/IncomingVoiceCall.tsx\");\n/* harmony import */ var _store_call_call_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/store/call/call.selectors */ \"./src/store/call/call.selectors.ts\");\n/* harmony import */ var _components_Call_VoiceCall__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Call/VoiceCall */ \"./src/components/Call/VoiceCall.tsx\");\n/* harmony import */ var _components_Call_VideoCall__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/Call/VideoCall */ \"./src/components/Call/VideoCall.tsx\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/hooks/useAuth */ \"./src/hooks/useAuth.ts\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tailwind-merge */ \"./node_modules/tailwind-merge/dist/tailwind-merge.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    var _user, _user1;\n    _s();\n    (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__.useAuth)();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__.getUser);\n    const selectChatUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_5__.getSelectUser);\n    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const isVideoCall = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_call_call_selectors__WEBPACK_IMPORTED_MODULE_13__.getIsVideoCall);\n    const incomingVideoCall = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_call_call_selectors__WEBPACK_IMPORTED_MODULE_13__.getIncomingVideoCall);\n    const isVoiceCall = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_call_call_selectors__WEBPACK_IMPORTED_MODULE_13__.getIsVoiceCall);\n    const incomingVoiceCall = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_call_call_selectors__WEBPACK_IMPORTED_MODULE_13__.getIncomingVoiceCall);\n    const { setSocketState, setIncomingVoiceCall, setIncomingVideoCall, setEndCall } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_3__.useActions)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _user;\n        if ((_user = user) === null || _user === void 0 ? void 0 : _user.id) {\n            var _socketRef_current;\n            const api = _service_const__WEBPACK_IMPORTED_MODULE_9__.HOST;\n            if (api) socketRef.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(api);\n            (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit(_utils_constants__WEBPACK_IMPORTED_MODULE_10__.ADD_USER, user.id);\n            setSocketState(socketRef.current);\n        }\n        return ()=>{\n            var _user, _socketRef_current;\n            (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit(_utils_constants__WEBPACK_IMPORTED_MODULE_10__.DISCONNECTED, (_user = user) === null || _user === void 0 ? void 0 : _user.id);\n            socketRef.current = undefined;\n            setSocketState(undefined);\n        };\n    }, [\n        (_user = user) === null || _user === void 0 ? void 0 : _user.id\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _socketRef_current, _socketRef, _socketRef_current1, _socketRef1, _socketRef_current2, _socketRef2, _socketRef_current3, _socketRef3;\n        (_socketRef = socketRef) === null || _socketRef === void 0 ? void 0 : (_socketRef_current = _socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.on(_utils_constants__WEBPACK_IMPORTED_MODULE_10__.INCOMING_VOICE_CALL, (param)=>{\n            let { from, roomId, callType, type } = param;\n            setIncomingVoiceCall({\n                user: from,\n                roomId,\n                callType,\n                type\n            });\n        });\n        (_socketRef1 = socketRef) === null || _socketRef1 === void 0 ? void 0 : (_socketRef_current1 = _socketRef1.current) === null || _socketRef_current1 === void 0 ? void 0 : _socketRef_current1.on(_utils_constants__WEBPACK_IMPORTED_MODULE_10__.INCOMING_VIDEO_CALL, (param)=>{\n            let { from, roomId, callType, type } = param;\n            setIncomingVideoCall({\n                user: from,\n                roomId,\n                callType,\n                type\n            });\n        });\n        (_socketRef2 = socketRef) === null || _socketRef2 === void 0 ? void 0 : (_socketRef_current2 = _socketRef2.current) === null || _socketRef_current2 === void 0 ? void 0 : _socketRef_current2.on(_utils_constants__WEBPACK_IMPORTED_MODULE_10__.REJECTED_VIDEO_CALL, ()=>{\n            setEndCall();\n        });\n        (_socketRef3 = socketRef) === null || _socketRef3 === void 0 ? void 0 : (_socketRef_current3 = _socketRef3.current) === null || _socketRef_current3 === void 0 ? void 0 : _socketRef_current3.on(_utils_constants__WEBPACK_IMPORTED_MODULE_10__.REJECTED_VOICE_CALL, ()=>{\n            setEndCall();\n        });\n    }, [\n        socketRef.current\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"grid h-screen grid-cols-5 overflow-hidden\",\n        \"data-testid\": \"mainPage\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-2 largePhone:hidden tablet:col-span-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_6__.ChatList, {}, void 0, false, {\n                    fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Main.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Main.tsx\",\n                lineNumber: 84,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_17__.twMerge)(\"relative col-span-4 grid h-full overflow-hidden bg-panel-header-background\", \" largePhone:col-span-full tablet:col-span-4\"),\n                children: [\n                    selectChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chat_Chat__WEBPACK_IMPORTED_MODULE_7__.Chat, {\n                        socketRef: socketRef,\n                        userId: (_user1 = user) === null || _user1 === void 0 ? void 0 : _user1.id,\n                        selectChatUserId: selectChatUser.id\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Main.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 6\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Empty__WEBPACK_IMPORTED_MODULE_8__.Empty, {}, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Main.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 6\n                    }, this),\n                    isVoiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Call_VoiceCall__WEBPACK_IMPORTED_MODULE_14__.VoiceCall, {}, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Main.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 21\n                    }, this),\n                    incomingVoiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_IncomingVoiceCall__WEBPACK_IMPORTED_MODULE_12__.IncomingVoiceCall, {}, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Main.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 27\n                    }, this),\n                    isVideoCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Call_VideoCall__WEBPACK_IMPORTED_MODULE_15__.VideoCall, {}, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Main.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 21\n                    }, this),\n                    incomingVideoCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_IncomingVideoCall__WEBPACK_IMPORTED_MODULE_11__.IncomingVideoCall, {}, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Main.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 27\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Main.tsx\",\n                lineNumber: 87,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/Main.tsx\",\n        lineNumber: 80,\n        columnNumber: 3\n    }, this);\n}\n_s(Main, \"IoFuox89RNI40cNj7AuV9kgXYI4=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__.useAuth,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_3__.useActions\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixxQkFDQyw4REFBQ1E7UUFDQUMsV0FBVTtRQUNWQyxlQUFZOzswQkFFWiw4REFBQ0M7Z0JBQUlGLFdBQVU7MEJBQ2QsNEVBQUMzQyxtRUFBUUE7Ozs7Ozs7Ozs7MEJBRVYsOERBQUM4QztnQkFBUUgsV0FBV3hCLHdEQUFPQSxDQUFDLDhFQUE2RTs7b0JBQ3ZHRywrQkFDQSw4REFBQ3JCLHVEQUFJQTt3QkFDSnNCLFdBQVdBO3dCQUNYd0IsTUFBTSxHQUFFMUIsU0FBQUEsa0JBQUFBLDZCQUFBQSxPQUFNVyxFQUFFO3dCQUNoQmdCLGtCQUFrQjFCLGVBQWVVLEVBQUU7Ozs7OzZDQUdwQyw4REFBQzlCLG9EQUFLQTs7Ozs7b0JBRU53Qiw2QkFBZSw4REFBQ1Ysa0VBQVNBOzs7OztvQkFDekJXLG1DQUFxQiw4REFBQ2hCLHFFQUFpQkE7Ozs7O29CQUN2Q2EsNkJBQWUsOERBQUNQLGtFQUFTQTs7Ozs7b0JBQ3pCUSxtQ0FBcUIsOERBQUNmLHFFQUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVDO0dBekVnQlU7O1FBQ2ZGLG9EQUFPQTtRQUNNckIsb0RBQVdBO1FBQ0RBLG9EQUFXQTtRQUVkQSxvREFBV0E7UUFDTEEsb0RBQVdBO1FBQ2pCQSxvREFBV0E7UUFDTEEsb0RBQVdBO1FBTWpDRCx5REFBVUE7OztLQWRDd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi50c3g/MzBhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaW8sIFNvY2tldCB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgeyB1c2VBY3Rpb25zIH0gZnJvbSAnQC9ob29rcy91c2VBY3Rpb25zJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGdldFNlbGVjdFVzZXIsIGdldFVzZXIgfSBmcm9tICdAL3N0b3JlL3VzZXIvdXNlci5zZWxlY3RvcidcbmltcG9ydCB7IENoYXRMaXN0IH0gZnJvbSAnQC9jb21wb25lbnRzL0NoYXRsaXN0L0NoYXRMaXN0J1xuaW1wb3J0IHsgQ2hhdCB9IGZyb20gJ0AvY29tcG9uZW50cy9DaGF0L0NoYXQnXG5pbXBvcnQgeyBFbXB0eSB9IGZyb20gJ0AvY29tcG9uZW50cy9FbXB0eSdcbmltcG9ydCB7IEhPU1QgfSBmcm9tICdAL3NlcnZpY2UvY29uc3QnXG5pbXBvcnQge1xuXHRBRERfVVNFUixcblx0RElTQ09OTkVDVEVELFxuXHRJTkNPTUlOR19WSURFT19DQUxMLFxuXHRJTkNPTUlOR19WT0lDRV9DQUxMLFxuXHRSRUpFQ1RFRF9WSURFT19DQUxMLFxuXHRSRUpFQ1RFRF9WT0lDRV9DQUxMXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHsgSW5jb21pbmdWaWRlb0NhbGwgfSBmcm9tICdAL1VJL0luY29taW5nVmlkZW9DYWxsJ1xuaW1wb3J0IHsgSW5jb21pbmdWb2ljZUNhbGwgfSBmcm9tICdAL1VJL0luY29taW5nVm9pY2VDYWxsJ1xuaW1wb3J0IHtcblx0Z2V0SW5jb21pbmdWaWRlb0NhbGwsXG5cdGdldEluY29taW5nVm9pY2VDYWxsLFxuXHRnZXRJc1ZpZGVvQ2FsbCxcblx0Z2V0SXNWb2ljZUNhbGxcbn0gZnJvbSAnQC9zdG9yZS9jYWxsL2NhbGwuc2VsZWN0b3JzJ1xuaW1wb3J0IHsgVm9pY2VDYWxsIH0gZnJvbSAnQC9jb21wb25lbnRzL0NhbGwvVm9pY2VDYWxsJ1xuaW1wb3J0IHsgVmlkZW9DYWxsIH0gZnJvbSAnQC9jb21wb25lbnRzL0NhbGwvVmlkZW9DYWxsJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvaG9va3MvdXNlQXV0aCdcbmltcG9ydCB7IHR3TWVyZ2UgfSBmcm9tIFwidGFpbHdpbmQtbWVyZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE1haW4oKSB7XG5cdHVzZUF1dGgoKVxuXHRjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoZ2V0VXNlcilcblx0Y29uc3Qgc2VsZWN0Q2hhdFVzZXIgPSB1c2VTZWxlY3RvcihnZXRTZWxlY3RVc2VyKVxuXHRjb25zdCBzb2NrZXRSZWY6IE11dGFibGVSZWZPYmplY3Q8U29ja2V0IHwgdW5kZWZpbmVkPiA9IHVzZVJlZigpXG5cdGNvbnN0IGlzVmlkZW9DYWxsID0gdXNlU2VsZWN0b3IoZ2V0SXNWaWRlb0NhbGwpXG5cdGNvbnN0IGluY29taW5nVmlkZW9DYWxsID0gdXNlU2VsZWN0b3IoZ2V0SW5jb21pbmdWaWRlb0NhbGwpXG5cdGNvbnN0IGlzVm9pY2VDYWxsID0gdXNlU2VsZWN0b3IoZ2V0SXNWb2ljZUNhbGwpXG5cdGNvbnN0IGluY29taW5nVm9pY2VDYWxsID0gdXNlU2VsZWN0b3IoZ2V0SW5jb21pbmdWb2ljZUNhbGwpXG5cdGNvbnN0IHtcblx0XHRzZXRTb2NrZXRTdGF0ZSxcblx0XHRzZXRJbmNvbWluZ1ZvaWNlQ2FsbCxcblx0XHRzZXRJbmNvbWluZ1ZpZGVvQ2FsbCxcblx0XHRzZXRFbmRDYWxsXG5cdH0gPSB1c2VBY3Rpb25zKClcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAodXNlcj8uaWQpIHtcblx0XHRcdGNvbnN0IGFwaSA9IEhPU1Rcblx0XHRcdGlmIChhcGkpIHNvY2tldFJlZi5jdXJyZW50ID0gaW8oYXBpKVxuXHRcdFx0c29ja2V0UmVmLmN1cnJlbnQ/LmVtaXQoQUREX1VTRVIsIHVzZXIuaWQpXG5cdFx0XHRzZXRTb2NrZXRTdGF0ZShzb2NrZXRSZWYuY3VycmVudClcblx0XHR9XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHNvY2tldFJlZi5jdXJyZW50Py5lbWl0KERJU0NPTk5FQ1RFRCwgdXNlcj8uaWQpXG5cdFx0XHRzb2NrZXRSZWYuY3VycmVudCA9IHVuZGVmaW5lZFxuXHRcdFx0c2V0U29ja2V0U3RhdGUodW5kZWZpbmVkKVxuXHRcdH1cblx0fSwgW3VzZXI/LmlkXSlcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzb2NrZXRSZWY/LmN1cnJlbnQ/Lm9uKFxuXHRcdFx0SU5DT01JTkdfVk9JQ0VfQ0FMTCxcblx0XHRcdCh7IGZyb20sIHJvb21JZCwgY2FsbFR5cGUsIHR5cGUgfSkgPT4ge1xuXHRcdFx0XHRzZXRJbmNvbWluZ1ZvaWNlQ2FsbCh7IHVzZXI6IGZyb20sIHJvb21JZCwgY2FsbFR5cGUsIHR5cGUgfSlcblx0XHRcdH1cblx0XHQpXG5cdFx0c29ja2V0UmVmPy5jdXJyZW50Py5vbihcblx0XHRcdElOQ09NSU5HX1ZJREVPX0NBTEwsXG5cdFx0XHQoeyBmcm9tLCByb29tSWQsIGNhbGxUeXBlLCB0eXBlIH0pID0+IHtcblx0XHRcdFx0c2V0SW5jb21pbmdWaWRlb0NhbGwoeyB1c2VyOiBmcm9tLCByb29tSWQsIGNhbGxUeXBlLCB0eXBlIH0pXG5cdFx0XHR9XG5cdFx0KVxuXHRcdHNvY2tldFJlZj8uY3VycmVudD8ub24oUkVKRUNURURfVklERU9fQ0FMTCwgKCkgPT4ge1xuXHRcdFx0c2V0RW5kQ2FsbCgpXG5cdFx0fSlcblx0XHRzb2NrZXRSZWY/LmN1cnJlbnQ/Lm9uKFJFSkVDVEVEX1ZPSUNFX0NBTEwsICgpID0+IHtcblx0XHRcdHNldEVuZENhbGwoKVxuXHRcdH0pXG5cdH0sIFtzb2NrZXRSZWYuY3VycmVudF0pXG5cdHJldHVybiAoXG5cdFx0PG1haW5cblx0XHRcdGNsYXNzTmFtZT0nZ3JpZCBoLXNjcmVlbiBncmlkLWNvbHMtNSBvdmVyZmxvdy1oaWRkZW4nXG5cdFx0XHRkYXRhLXRlc3RpZD0nbWFpblBhZ2UnXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTIgbGFyZ2VQaG9uZTpoaWRkZW4gdGFibGV0OmNvbC1zcGFuLTEnPlxuXHRcdFx0XHQ8Q2hhdExpc3QgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXt0d01lcmdlKCdyZWxhdGl2ZSBjb2wtc3Bhbi00IGdyaWQgaC1mdWxsIG92ZXJmbG93LWhpZGRlbiBiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZCcsJyBsYXJnZVBob25lOmNvbC1zcGFuLWZ1bGwgdGFibGV0OmNvbC1zcGFuLTQnKX0+XG5cdFx0XHRcdHtzZWxlY3RDaGF0VXNlciA/IChcblx0XHRcdFx0XHQ8Q2hhdFxuXHRcdFx0XHRcdFx0c29ja2V0UmVmPXtzb2NrZXRSZWZ9XG5cdFx0XHRcdFx0XHR1c2VySWQ9e3VzZXI/LmlkfVxuXHRcdFx0XHRcdFx0c2VsZWN0Q2hhdFVzZXJJZD17c2VsZWN0Q2hhdFVzZXIuaWR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8RW1wdHkgLz5cblx0XHRcdFx0KX1cblx0XHRcdFx0e2lzVm9pY2VDYWxsICYmIDxWb2ljZUNhbGwgLz59XG5cdFx0XHRcdHtpbmNvbWluZ1ZvaWNlQ2FsbCAmJiA8SW5jb21pbmdWb2ljZUNhbGwgLz59XG5cdFx0XHRcdHtpc1ZpZGVvQ2FsbCAmJiA8VmlkZW9DYWxsIC8+fVxuXHRcdFx0XHR7aW5jb21pbmdWaWRlb0NhbGwgJiYgPEluY29taW5nVmlkZW9DYWxsIC8+fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvbWFpbj5cblx0KVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsImlvIiwidXNlQWN0aW9ucyIsInVzZVNlbGVjdG9yIiwiZ2V0U2VsZWN0VXNlciIsImdldFVzZXIiLCJDaGF0TGlzdCIsIkNoYXQiLCJFbXB0eSIsIkhPU1QiLCJBRERfVVNFUiIsIkRJU0NPTk5FQ1RFRCIsIklOQ09NSU5HX1ZJREVPX0NBTEwiLCJJTkNPTUlOR19WT0lDRV9DQUxMIiwiUkVKRUNURURfVklERU9fQ0FMTCIsIlJFSkVDVEVEX1ZPSUNFX0NBTEwiLCJJbmNvbWluZ1ZpZGVvQ2FsbCIsIkluY29taW5nVm9pY2VDYWxsIiwiZ2V0SW5jb21pbmdWaWRlb0NhbGwiLCJnZXRJbmNvbWluZ1ZvaWNlQ2FsbCIsImdldElzVmlkZW9DYWxsIiwiZ2V0SXNWb2ljZUNhbGwiLCJWb2ljZUNhbGwiLCJWaWRlb0NhbGwiLCJ1c2VBdXRoIiwidHdNZXJnZSIsIk1haW4iLCJ1c2VyIiwic2VsZWN0Q2hhdFVzZXIiLCJzb2NrZXRSZWYiLCJpc1ZpZGVvQ2FsbCIsImluY29taW5nVmlkZW9DYWxsIiwiaXNWb2ljZUNhbGwiLCJpbmNvbWluZ1ZvaWNlQ2FsbCIsInNldFNvY2tldFN0YXRlIiwic2V0SW5jb21pbmdWb2ljZUNhbGwiLCJzZXRJbmNvbWluZ1ZpZGVvQ2FsbCIsInNldEVuZENhbGwiLCJpZCIsImFwaSIsImN1cnJlbnQiLCJlbWl0IiwidW5kZWZpbmVkIiwib24iLCJmcm9tIiwicm9vbUlkIiwiY2FsbFR5cGUiLCJ0eXBlIiwibWFpbiIsImNsYXNzTmFtZSIsImRhdGEtdGVzdGlkIiwiZGl2Iiwic2VjdGlvbiIsInVzZXJJZCIsInNlbGVjdENoYXRVc2VySWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main.tsx\n"));

/***/ })

});