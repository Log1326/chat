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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChatHeader\": function() { return /* binding */ ChatHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/UI/Avatar */ \"./src/components/UI/Avatar.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_user_user_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/user/user.selector */ \"./src/store/user/user.selector.ts\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useActions */ \"./src/hooks/useActions.ts\");\n/* harmony import */ var _store_message_message_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/message/message.selectors */ \"./src/store/message/message.selectors.ts\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.ts\");\n/* harmony import */ var _UI_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/UI/DropDown */ \"./src/components/UI/DropDown.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _UI_ContextMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/UI/ContextMenu */ \"./src/components/UI/ContextMenu.tsx\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/constants/constants */ \"./src/constants/constants.ts\");\n/* harmony import */ var _UI_PhotoLibrary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/UI/PhotoLibrary */ \"./src/components/UI/PhotoLibrary.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst images = [\n    {\n        name: \"bg-chat-background-color\",\n        value: \"/bg-image/image-bg-color.jpg\"\n    },\n    {\n        name: \"bg-chat-background-white\",\n        value: \"/bg-image/image-bg-white.jpg\"\n    },\n    {\n        name: \"bg-chat-background-pale\",\n        value: \"/bg-image/image-bg-grey.png\"\n    },\n    {\n        name: \"bg-chat-background-teal\",\n        value: \"/bg-image/image-bg-teal.jpg\"\n    },\n    {\n        name: \"bg-chat-background-space\",\n        value: \"/bg-image/image-bg-space.jpg\"\n    }\n];\nfunction ChatHeader() {\n    _s();\n    const selectUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_3__.getSelectUser);\n    const onlineUsers = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_message_message_selectors__WEBPACK_IMPORTED_MODULE_5__.getStateMessageOnlineUsers);\n    const { setSelectUser , changeIsSearchMessage , changeBackgroundChat , videoCall , videoCallOpenWindow , voiceCall , voiceCallOpenWindow  } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_4__.useActions)();\n    const [openMenu, setOpenMenu, openMenuFn] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__.useToggle)();\n    const [openModal, setOpenModal] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__.useToggle)();\n    const isOnline = onlineUsers === null || onlineUsers === void 0 ? void 0 : onlineUsers.some((user)=>{\n        return user === (selectUser === null || selectUser === void 0 ? void 0 : selectUser.id);\n    });\n    const handleCallVoice = ()=>{\n        voiceCallOpenWindow(true);\n        voiceCall({\n            id: String(selectUser === null || selectUser === void 0 ? void 0 : selectUser.id),\n            user: {\n                id: selectUser === null || selectUser === void 0 ? void 0 : selectUser.id,\n                image: String(selectUser === null || selectUser === void 0 ? void 0 : selectUser.image),\n                name: String(selectUser === null || selectUser === void 0 ? void 0 : selectUser.name)\n            },\n            callType: \"audio\",\n            type: \"outgoing\",\n            roomId: Date.now()\n        });\n    };\n    const handleCallVideo = ()=>{\n        videoCallOpenWindow(true);\n        videoCall({\n            id: String(selectUser === null || selectUser === void 0 ? void 0 : selectUser.id),\n            user: {\n                id: selectUser === null || selectUser === void 0 ? void 0 : selectUser.id,\n                image: String(selectUser === null || selectUser === void 0 ? void 0 : selectUser.image),\n                name: String(selectUser === null || selectUser === void 0 ? void 0 : selectUser.name)\n            },\n            callType: \"video\",\n            type: \"outgoing\",\n            roomId: Date.now()\n        });\n    };\n    const contextMenu = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(()=>[\n            {\n                name: \"close chat\",\n                callback: ()=>setSelectUser(undefined)\n            },\n            {\n                name: \"change bg\",\n                callback: ()=>setOpenModal(true)\n            }\n        ], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"bg-input-background h-20 p-2 flex justify-between items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-4 pl-4\",\n                children: [\n                    selectUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                        type: \"sm\",\n                        value: selectUser === null || selectUser === void 0 ? void 0 : selectUser.image,\n                        className: \"hover:opacity-70\"\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 6\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                        type: \"lg\",\n                        value: \"/default_avatar.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: \"text-white cursor-default\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: selectUser === null || selectUser === void 0 ? void 0 : selectUser.name\n                            }, void 0, false, {\n                                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: isOnline ? \"online\" : \"offline\"\n                            }, void 0, false, {\n                                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                lineNumber: 89,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"inline-flex gap-4 pr-4 text-white cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_12__.BiSearchAlt2, {\n                        className: \"h-6 w-6 hover:text-gray-900\",\n                        onClick: ()=>changeIsSearchMessage(true)\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_13__.MdCall, {\n                        onClick: handleCallVoice,\n                        className: \"h-6 w-6 hover:text-gray-900 \",\n                        title: \"audio\"\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_14__.IoVideocam, {\n                        onClick: handleCallVideo,\n                        className: \"h-6 w-6 hover:text-gray-900\",\n                        title: \"video\",\n                        id: _constants_constants__WEBPACK_IMPORTED_MODULE_10__.VIDEO_CALL_REF\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDown, {\n                        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_15__.BsThreeDotsVertical, {\n                            className: \"h-6 w-6 hover:text-gray-900\",\n                            title: \"options\",\n                            onClick: openMenuFn,\n                            id: _constants_constants__WEBPACK_IMPORTED_MODULE_10__.CHANGE_BG_IMAGE\n                        }, void 0, false, void 0, void 0),\n                        toggle: openMenu,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ContextMenu__WEBPACK_IMPORTED_MODULE_9__.ContextMenu, {\n                            item: {\n                                options: contextMenu,\n                                setContextMenu: setOpenMenu\n                            },\n                            idElement: _constants_constants__WEBPACK_IMPORTED_MODULE_10__.CHANGE_BG_IMAGE\n                        }, void 0, false, {\n                            fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                lineNumber: 104,\n                columnNumber: 4\n            }, this),\n            openModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_PhotoLibrary__WEBPACK_IMPORTED_MODULE_11__.PhotoLibrary, {\n                hiddenPhotoLib: setOpenModal,\n                changeBg: changeBackgroundChat,\n                imagesBg: images,\n                type: \"chat\"\n            }, void 0, false, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n                lineNumber: 139,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/client/src/components/Chat/ChatHeader.tsx\",\n        lineNumber: 88,\n        columnNumber: 3\n    }, this);\n}\n_s(ChatHeader, \"50zYNk7hCertnPPqPrONKECD+Os=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_4__.useActions,\n        _hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__.useToggle,\n        _hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__.useToggle\n    ];\n});\n_c = ChatHeader;\nvar _c;\n$RefreshReg$(_c, \"ChatHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0JNLHlEQUFVQTtRQUM4QkUsdURBQVNBO1FBQ25CQSx1REFBU0E7OztLQWI1QlUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9DaGF0SGVhZGVyLnRzeD81MDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0AvVUkvQXZhdGFyJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGdldFNlbGVjdFVzZXIgfSBmcm9tICdAL3N0b3JlL3VzZXIvdXNlci5zZWxlY3RvcidcbmltcG9ydCB7IE1kQ2FsbCB9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xuaW1wb3J0IHsgSW9WaWRlb2NhbSB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSdcbmltcG9ydCB7IEJpU2VhcmNoQWx0MiB9IGZyb20gJ3JlYWN0LWljb25zL2JpJ1xuaW1wb3J0IHsgQnNUaHJlZURvdHNWZXJ0aWNhbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gJ0AvaG9va3MvdXNlQWN0aW9ucydcbmltcG9ydCB7IGdldFN0YXRlTWVzc2FnZU9ubGluZVVzZXJzIH0gZnJvbSAnQC9zdG9yZS9tZXNzYWdlL21lc3NhZ2Uuc2VsZWN0b3JzJ1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSAnQC9ob29rcy91c2VUb2dnbGUnXG5pbXBvcnQgeyBEcm9wRG93biB9IGZyb20gJ0AvVUkvRHJvcERvd24nXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0TWVudSB9IGZyb20gJ0AvVUkvQ29udGV4dE1lbnUnXG5pbXBvcnQge1xuXHRDSEFOR0VfQkdfSU1BR0UsXG5cdFZJREVPX0NBTExfUkVGLFxuXHRWT0lDRV9DQUxMX1JFRlxufSBmcm9tICdAL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgeyBQaG90b0xpYnJhcnkgfSBmcm9tICdAL1VJL1Bob3RvTGlicmFyeSdcbmltcG9ydCB7IElJbWFnZXMgfSBmcm9tICdAL3R5cGVzL2ltYWdlcy50eXBlcydcbmltcG9ydCB7IGJnQ2hhdCB9IGZyb20gJ0Avc3RvcmUvdXNlci91c2VyLnR5cGVzJ1xuXG5jb25zdCBpbWFnZXM6IElJbWFnZXM8YmdDaGF0PltdID0gW1xuXHR7IG5hbWU6ICdiZy1jaGF0LWJhY2tncm91bmQtY29sb3InLCB2YWx1ZTogJy9iZy1pbWFnZS9pbWFnZS1iZy1jb2xvci5qcGcnIH0sXG5cdHsgbmFtZTogJ2JnLWNoYXQtYmFja2dyb3VuZC13aGl0ZScsIHZhbHVlOiAnL2JnLWltYWdlL2ltYWdlLWJnLXdoaXRlLmpwZycgfSxcblx0eyBuYW1lOiAnYmctY2hhdC1iYWNrZ3JvdW5kLXBhbGUnLCB2YWx1ZTogJy9iZy1pbWFnZS9pbWFnZS1iZy1ncmV5LnBuZycgfSxcblx0eyBuYW1lOiAnYmctY2hhdC1iYWNrZ3JvdW5kLXRlYWwnLCB2YWx1ZTogJy9iZy1pbWFnZS9pbWFnZS1iZy10ZWFsLmpwZycgfSxcblx0eyBuYW1lOiAnYmctY2hhdC1iYWNrZ3JvdW5kLXNwYWNlJywgdmFsdWU6ICcvYmctaW1hZ2UvaW1hZ2UtYmctc3BhY2UuanBnJyB9XG5dXG5leHBvcnQgZnVuY3Rpb24gQ2hhdEhlYWRlcigpIHtcblx0Y29uc3Qgc2VsZWN0VXNlciA9IHVzZVNlbGVjdG9yKGdldFNlbGVjdFVzZXIpXG5cdGNvbnN0IG9ubGluZVVzZXJzID0gdXNlU2VsZWN0b3IoZ2V0U3RhdGVNZXNzYWdlT25saW5lVXNlcnMpXG5cdGNvbnN0IHtcblx0XHRzZXRTZWxlY3RVc2VyLFxuXHRcdGNoYW5nZUlzU2VhcmNoTWVzc2FnZSxcblx0XHRjaGFuZ2VCYWNrZ3JvdW5kQ2hhdCxcblx0XHR2aWRlb0NhbGwsXG5cdFx0dmlkZW9DYWxsT3BlbldpbmRvdyxcblx0XHR2b2ljZUNhbGwsXG5cdFx0dm9pY2VDYWxsT3BlbldpbmRvd1xuXHR9ID0gdXNlQWN0aW9ucygpXG5cdGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnUsIG9wZW5NZW51Rm5dID0gdXNlVG9nZ2xlKClcblx0Y29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IHVzZVRvZ2dsZSgpXG5cdGNvbnN0IGlzT25saW5lID0gb25saW5lVXNlcnM/LnNvbWUodXNlciA9PiB1c2VyID09PSBzZWxlY3RVc2VyPy5pZClcblx0Y29uc3QgaGFuZGxlQ2FsbFZvaWNlID0gKCkgPT4ge1xuXHRcdHZvaWNlQ2FsbE9wZW5XaW5kb3codHJ1ZSlcblx0XHR2b2ljZUNhbGwoe1xuXHRcdFx0aWQ6IFN0cmluZyhzZWxlY3RVc2VyPy5pZCksXG5cdFx0XHR1c2VyOiB7XG5cdFx0XHRcdGlkOiBzZWxlY3RVc2VyPy5pZCxcblx0XHRcdFx0aW1hZ2U6IFN0cmluZyhzZWxlY3RVc2VyPy5pbWFnZSksXG5cdFx0XHRcdG5hbWU6IFN0cmluZyhzZWxlY3RVc2VyPy5uYW1lKVxuXHRcdFx0fSxcblx0XHRcdGNhbGxUeXBlOiAnYXVkaW8nLFxuXHRcdFx0dHlwZTogJ291dGdvaW5nJyxcblx0XHRcdHJvb21JZDogRGF0ZS5ub3coKVxuXHRcdH0pXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2FsbFZpZGVvID0gKCkgPT4ge1xuXHRcdHZpZGVvQ2FsbE9wZW5XaW5kb3codHJ1ZSlcblx0XHR2aWRlb0NhbGwoe1xuXHRcdFx0aWQ6IFN0cmluZyhzZWxlY3RVc2VyPy5pZCksXG5cdFx0XHR1c2VyOiB7XG5cdFx0XHRcdGlkOiBzZWxlY3RVc2VyPy5pZCxcblx0XHRcdFx0aW1hZ2U6IFN0cmluZyhzZWxlY3RVc2VyPy5pbWFnZSksXG5cdFx0XHRcdG5hbWU6IFN0cmluZyhzZWxlY3RVc2VyPy5uYW1lKVxuXHRcdFx0fSxcblx0XHRcdGNhbGxUeXBlOiAndmlkZW8nLFxuXHRcdFx0dHlwZTogJ291dGdvaW5nJyxcblx0XHRcdHJvb21JZDogRGF0ZS5ub3coKVxuXHRcdH0pXG5cdH1cblxuXHRjb25zdCBjb250ZXh0TWVudSA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnY2xvc2UgY2hhdCcsXG5cdFx0XHRcdGNhbGxiYWNrOiAoKSA9PiBzZXRTZWxlY3RVc2VyKHVuZGVmaW5lZClcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdjaGFuZ2UgYmcnLFxuXHRcdFx0XHRjYWxsYmFjazogKCkgPT4gc2V0T3Blbk1vZGFsKHRydWUpXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRbXVxuXHQpXG5cdHJldHVybiAoXG5cdFx0PGFydGljbGUgY2xhc3NOYW1lPSdiZy1pbnB1dC1iYWNrZ3JvdW5kIGgtMjAgcC0yIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgcGwtNCc+XG5cdFx0XHRcdHtzZWxlY3RVc2VyID8gKFxuXHRcdFx0XHRcdDxBdmF0YXJcblx0XHRcdFx0XHRcdHR5cGU9J3NtJ1xuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdFVzZXI/LmltYWdlfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsnaG92ZXI6b3BhY2l0eS03MCd9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8QXZhdGFyIHR5cGU9J2xnJyB2YWx1ZT17Jy9kZWZhdWx0X2F2YXRhci5wbmcnfSAvPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9J3RleHQtd2hpdGUgY3Vyc29yLWRlZmF1bHQnPlxuXHRcdFx0XHRcdDxwPntzZWxlY3RVc2VyPy5uYW1lfTwvcD5cblx0XHRcdFx0XHQ8cD57aXNPbmxpbmUgPyAnb25saW5lJyA6ICdvZmZsaW5lJ308L3A+XG5cdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPSdpbmxpbmUtZmxleCBnYXAtNCBwci00IHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXInPlxuXHRcdFx0XHQ8QmlTZWFyY2hBbHQyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLTYgdy02IGhvdmVyOnRleHQtZ3JheS05MDAnXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gY2hhbmdlSXNTZWFyY2hNZXNzYWdlKHRydWUpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8TWRDYWxsXG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQ2FsbFZvaWNlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT0naC02IHctNiBob3Zlcjp0ZXh0LWdyYXktOTAwICdcblx0XHRcdFx0XHR0aXRsZT0nYXVkaW8nXG5cdFx0XHRcdFx0Ly8gaWQ9e1ZPSUNFX0NBTExfUkVGfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8SW9WaWRlb2NhbVxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUNhbGxWaWRlb31cblx0XHRcdFx0XHRjbGFzc05hbWU9J2gtNiB3LTYgaG92ZXI6dGV4dC1ncmF5LTkwMCdcblx0XHRcdFx0XHR0aXRsZT0ndmlkZW8nXG5cdFx0XHRcdFx0aWQ9e1ZJREVPX0NBTExfUkVGfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RHJvcERvd25cblx0XHRcdFx0XHR0aXRsZT17XG5cdFx0XHRcdFx0XHQ8QnNUaHJlZURvdHNWZXJ0aWNhbFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2gtNiB3LTYgaG92ZXI6dGV4dC1ncmF5LTkwMCdcblx0XHRcdFx0XHRcdFx0dGl0bGU9J29wdGlvbnMnXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29wZW5NZW51Rm59XG5cdFx0XHRcdFx0XHRcdGlkPXtDSEFOR0VfQkdfSU1BR0V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0b2dnbGU9e29wZW5NZW51fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PENvbnRleHRNZW51XG5cdFx0XHRcdFx0XHRpdGVtPXt7IG9wdGlvbnM6IGNvbnRleHRNZW51LCBzZXRDb250ZXh0TWVudTogc2V0T3Blbk1lbnUgfX1cblx0XHRcdFx0XHRcdGlkRWxlbWVudD17Q0hBTkdFX0JHX0lNQUdFfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvRHJvcERvd24+XG5cdFx0XHQ8L2FydGljbGU+XG5cdFx0XHR7b3Blbk1vZGFsICYmIChcblx0XHRcdFx0PFBob3RvTGlicmFyeVxuXHRcdFx0XHRcdGhpZGRlblBob3RvTGliPXtzZXRPcGVuTW9kYWx9XG5cdFx0XHRcdFx0Y2hhbmdlQmc9e2NoYW5nZUJhY2tncm91bmRDaGF0fVxuXHRcdFx0XHRcdGltYWdlc0JnPXtpbWFnZXN9XG5cdFx0XHRcdFx0dHlwZT0nY2hhdCdcblx0XHRcdFx0Lz5cblx0XHRcdCl9XG5cdFx0PC9hcnRpY2xlPlxuXHQpXG59XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwidXNlU2VsZWN0b3IiLCJnZXRTZWxlY3RVc2VyIiwiTWRDYWxsIiwiSW9WaWRlb2NhbSIsIkJpU2VhcmNoQWx0MiIsIkJzVGhyZWVEb3RzVmVydGljYWwiLCJ1c2VBY3Rpb25zIiwiZ2V0U3RhdGVNZXNzYWdlT25saW5lVXNlcnMiLCJ1c2VUb2dnbGUiLCJEcm9wRG93biIsInVzZU1lbW8iLCJDb250ZXh0TWVudSIsIkNIQU5HRV9CR19JTUFHRSIsIlZJREVPX0NBTExfUkVGIiwiUGhvdG9MaWJyYXJ5IiwiaW1hZ2VzIiwibmFtZSIsInZhbHVlIiwiQ2hhdEhlYWRlciIsInNlbGVjdFVzZXIiLCJvbmxpbmVVc2VycyIsInNldFNlbGVjdFVzZXIiLCJjaGFuZ2VJc1NlYXJjaE1lc3NhZ2UiLCJjaGFuZ2VCYWNrZ3JvdW5kQ2hhdCIsInZpZGVvQ2FsbCIsInZpZGVvQ2FsbE9wZW5XaW5kb3ciLCJ2b2ljZUNhbGwiLCJ2b2ljZUNhbGxPcGVuV2luZG93Iiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsIm9wZW5NZW51Rm4iLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJpc09ubGluZSIsInNvbWUiLCJ1c2VyIiwiaWQiLCJoYW5kbGVDYWxsVm9pY2UiLCJTdHJpbmciLCJpbWFnZSIsImNhbGxUeXBlIiwidHlwZSIsInJvb21JZCIsIkRhdGUiLCJub3ciLCJoYW5kbGVDYWxsVmlkZW8iLCJjb250ZXh0TWVudSIsImNhbGxiYWNrIiwidW5kZWZpbmVkIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJvbkNsaWNrIiwidGl0bGUiLCJ0b2dnbGUiLCJpdGVtIiwib3B0aW9ucyIsInNldENvbnRleHRNZW51IiwiaWRFbGVtZW50IiwiaGlkZGVuUGhvdG9MaWIiLCJjaGFuZ2VCZyIsImltYWdlc0JnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatHeader.tsx\n"));

/***/ })

});