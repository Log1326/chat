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

/***/ "./src/components/UI/ContextMenu.tsx":
/*!*******************************************!*\
  !*** ./src/components/UI/ContextMenu.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContextMenu: function() { return /* binding */ ContextMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useHandleClickOutSide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useHandleClickOutSide */ \"./src/hooks/useHandleClickOutSide.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction ContextMenu(param) {\n    let { item, idElement } = param;\n    _s();\n    const contextMenuRef = (0,_hooks_useHandleClickOutSide__WEBPACK_IMPORTED_MODULE_2__.useHandleClickOutside)({\n        callback: ()=>{\n            var _item_setContextMenu, _item;\n            return (_item_setContextMenu = (_item = item).setContextMenu) === null || _item_setContextMenu === void 0 ? void 0 : _item_setContextMenu.call(_item, false);\n        },\n        type: \"click\",\n        idElement\n    });\n    const handleClick = (e, callback)=>{\n        var _item_setContextMenu, _item;\n        e.stopPropagation();\n        (_item_setContextMenu = (_item = item).setContextMenu) === null || _item_setContextMenu === void 0 ? void 0 : _item_setContextMenu.call(_item, false);\n        callback();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: contextMenuRef,\n        className: item.contextMenu ? \"bg-dropdown-background rounded-lg fixed py-2 z-30 shadow-xl\" : \"\",\n        style: item.coordinates && {\n            top: item.coordinates.y,\n            left: item.coordinates.x\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: item.options.map((param)=>/*#__PURE__*/ {\n                let { name, callback } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"px-10 py-2 cursor-pointer  rounded-lg hover:opacity-70 hover:bg-search-input-container-background duration-75\",\n                    onClick: (e)=>handleClick(e, callback),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/ContextMenu.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, this)\n                }, name, false, {\n                    fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/ContextMenu.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 6\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/ContextMenu.tsx\",\n            lineNumber: 44,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/ContextMenu.tsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, this);\n}\n_s(ContextMenu, \"8+Mot12P+GooF1WfuOSvwyXqZTA=\", false, function() {\n    return [\n        _hooks_useHandleClickOutSide__WEBPACK_IMPORTED_MODULE_2__.useHandleClickOutside\n    ];\n});\n_c = ContextMenu;\nvar _c;\n$RefreshReg$(_c, \"ContextMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9Db250ZXh0TWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUU7QUFDRTtBQWU5RCxTQUFTRSxZQUFZLEtBQXFDO1FBQXJDLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFvQixHQUFyQzs7SUFDM0IsTUFBTUMsaUJBQWlCSixtRkFBcUJBLENBQUM7UUFDNUNLLFVBQVU7Z0JBQU1ILHNCQUFBQTtvQkFBQUEsdUJBQUFBLENBQUFBLFFBQUFBLE1BQUtJLGNBQWMsY0FBbkJKLDJDQUFBQSwwQkFBQUEsT0FBc0I7O1FBQ3RDSyxNQUFNO1FBQ05KO0lBQ0Q7SUFDQSxNQUFNSyxjQUFjLENBQUNDLEdBQTRCSjtZQUVoREgsc0JBQUFBO1FBREFPLEVBQUVDLGVBQWU7U0FDakJSLHVCQUFBQSxDQUFBQSxRQUFBQSxNQUFLSSxjQUFjLGNBQW5CSiwyQ0FBQUEsMEJBQUFBLE9BQXNCO1FBQ3RCRztJQUNEO0lBQ0EscUJBQ0MsOERBQUNNO1FBQ0FDLEtBQUtSO1FBQ0xTLFdBQ0NYLEtBQUtZLFdBQVcsR0FDYixnRUFDQTtRQUVKQyxPQUNDYixLQUFLYyxXQUFXLElBQUk7WUFDbkJDLEtBQUtmLEtBQUtjLFdBQVcsQ0FBQ0UsQ0FBQztZQUN2QkMsTUFBTWpCLEtBQUtjLFdBQVcsQ0FBQ0ksQ0FBQztRQUN6QjtrQkFHRCw0RUFBQ0M7c0JBQ0NuQixLQUFLb0IsT0FBTyxDQUFDQyxHQUFHLENBQUM7b0JBQUMsRUFBRUMsSUFBSSxFQUFFbkIsUUFBUSxFQUFFO3VCQUNwQyw4REFBQ29CO29CQUNBWixXQUFVO29CQUVWYSxTQUFTakIsQ0FBQUEsSUFBS0QsWUFBWUMsR0FBR0o7OEJBRTdCLDRFQUFDc0I7d0JBQUtkLFdBQVU7a0NBQWNXOzs7Ozs7bUJBSHpCQTs7Ozs7WUFJRjs7Ozs7Ozs7Ozs7QUFLVDtHQXZDZ0J2Qjs7UUFDUUQsK0VBQXFCQTs7O0tBRDdCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VSS9Db250ZXh0TWVudS50c3g/ZDIyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlQ29udGV4dENvb3JkaW5hdGVzIH0gZnJvbSAnQC90eXBlcy9jb250ZXh0VHlwZXMnXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIE1vdXNlRXZlbnQsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VIYW5kbGVDbGlja091dHNpZGUgfSBmcm9tICdAL2hvb2tzL3VzZUhhbmRsZUNsaWNrT3V0U2lkZSdcblxuaW50ZXJmYWNlIElNZW51IHtcblx0bmFtZTogc3RyaW5nXG5cdGNhbGxiYWNrOiAoKSA9PiB2b2lkXG59XG5pbnRlcmZhY2UgQ29udGV4dE1lbnVQcm9wcyB7XG5cdGl0ZW06IHtcblx0XHRvcHRpb25zOiBJTWVudVtdXG5cdFx0Y29vcmRpbmF0ZXM/OiBUeXBlQ29udGV4dENvb3JkaW5hdGVzXG5cdFx0Y29udGV4dE1lbnU/OiBib29sZWFuXG5cdFx0c2V0Q29udGV4dE1lbnU6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PlxuXHR9XG5cdGlkRWxlbWVudDogc3RyaW5nXG59XG5leHBvcnQgZnVuY3Rpb24gQ29udGV4dE1lbnUoeyBpdGVtLCBpZEVsZW1lbnQgfTogQ29udGV4dE1lbnVQcm9wcykge1xuXHRjb25zdCBjb250ZXh0TWVudVJlZiA9IHVzZUhhbmRsZUNsaWNrT3V0c2lkZSh7XG5cdFx0Y2FsbGJhY2s6ICgpID0+IGl0ZW0uc2V0Q29udGV4dE1lbnU/LihmYWxzZSksXG5cdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRpZEVsZW1lbnRcblx0fSlcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZTogTW91c2VFdmVudDxIVE1MRWxlbWVudD4sIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdGl0ZW0uc2V0Q29udGV4dE1lbnU/LihmYWxzZSlcblx0XHRjYWxsYmFjaygpXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRyZWY9e2NvbnRleHRNZW51UmVmfVxuXHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0aXRlbS5jb250ZXh0TWVudVxuXHRcdFx0XHRcdD8gJ2JnLWRyb3Bkb3duLWJhY2tncm91bmQgcm91bmRlZC1sZyBmaXhlZCBweS0yIHotMzAgc2hhZG93LXhsJ1xuXHRcdFx0XHRcdDogJydcblx0XHRcdH1cblx0XHRcdHN0eWxlPXtcblx0XHRcdFx0aXRlbS5jb29yZGluYXRlcyAmJiB7XG5cdFx0XHRcdFx0dG9wOiBpdGVtLmNvb3JkaW5hdGVzLnksXG5cdFx0XHRcdFx0bGVmdDogaXRlbS5jb29yZGluYXRlcy54XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQ+XG5cdFx0XHQ8dWw+XG5cdFx0XHRcdHtpdGVtLm9wdGlvbnMubWFwKCh7IG5hbWUsIGNhbGxiYWNrIH0pID0+IChcblx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncHgtMTAgcHktMiBjdXJzb3ItcG9pbnRlciAgcm91bmRlZC1sZyBob3ZlcjpvcGFjaXR5LTcwIGhvdmVyOmJnLXNlYXJjaC1pbnB1dC1jb250YWluZXItYmFja2dyb3VuZCBkdXJhdGlvbi03NSdcblx0XHRcdFx0XHRcdGtleT17bmFtZX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2UgPT4gaGFuZGxlQ2xpY2soZSwgY2FsbGJhY2spfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+e25hbWV9PC9zcGFuPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlSGFuZGxlQ2xpY2tPdXRzaWRlIiwiQ29udGV4dE1lbnUiLCJpdGVtIiwiaWRFbGVtZW50IiwiY29udGV4dE1lbnVSZWYiLCJjYWxsYmFjayIsInNldENvbnRleHRNZW51IiwidHlwZSIsImhhbmRsZUNsaWNrIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImNvbnRleHRNZW51Iiwic3R5bGUiLCJjb29yZGluYXRlcyIsInRvcCIsInkiLCJsZWZ0IiwieCIsInVsIiwib3B0aW9ucyIsIm1hcCIsIm5hbWUiLCJsaSIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UI/ContextMenu.tsx\n"));

/***/ }),

/***/ "./src/components/UI/CustomAvatarMenu.tsx":
/*!************************************************!*\
  !*** ./src/components/UI/CustomAvatarMenu.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CustomAvatarMenu: function() { return /* binding */ CustomAvatarMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/constants */ \"./src/constants/constants.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _UI_ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/UI/ContextMenu */ \"./src/components/UI/ContextMenu.tsx\");\n/* harmony import */ var _UI_PhotoLibrary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/UI/PhotoLibrary */ \"./src/components/UI/PhotoLibrary.tsx\");\n/* harmony import */ var _UI_CapturePhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/UI/CapturePhoto */ \"./src/components/UI/CapturePhoto.tsx\");\n/* harmony import */ var _UI_PhotoPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/UI/PhotoPicker */ \"./src/components/UI/PhotoPicker.tsx\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.ts\");\n/* harmony import */ var _hooks_useContextMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/hooks/useContextMenu */ \"./src/hooks/useContextMenu.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_user_user_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store/user/user.selector */ \"./src/store/user/user.selector.ts\");\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/hooks/useActions */ \"./src/hooks/useActions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst initialContextMenuCoordinates = {\n    x: 0,\n    y: 0\n};\nconst images = [\n    {\n        name: \"one\",\n        value: \"/avatars/1.png\"\n    },\n    {\n        name: \"two\",\n        value: \"/avatars/2.png\"\n    },\n    {\n        name: \"three\",\n        value: \"/avatars/3.png\"\n    },\n    {\n        name: \"four\",\n        value: \"/avatars/4.png\"\n    },\n    {\n        name: \"five\",\n        value: \"/avatars/5.png\"\n    },\n    {\n        name: \"six\",\n        value: \"/avatars/6.png\"\n    },\n    {\n        name: \"seven\",\n        value: \"/avatars/7.png\"\n    },\n    {\n        name: \"eight\",\n        value: \"/avatars/8.png\"\n    },\n    {\n        name: \"nine\",\n        value: \"/avatars/9.png\"\n    }\n];\nconst CustomAvatarMenu = (param)=>{\n    let { value } = param;\n    _s();\n    const coordinates = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_11__.getCoordinates);\n    const { setCoordinates } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_12__.useActions)();\n    const [hover, _, handleHoverFn] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__.useToggle)();\n    const { menu, stateMenu, changeStateMenu, fn } = (0,_hooks_useContextMenu__WEBPACK_IMPORTED_MODULE_8__.useContextMenu)();\n    const showContextVisible = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{\n        e.preventDefault();\n        setCoordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        changeStateMenu.setIsContextMenuVisible(true);\n    }, [\n        changeStateMenu\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onMouseEnter: handleHoverFn,\n                onMouseLeave: handleHoverFn,\n                className: \"relative h-60 w-60 z-0 \",\n                onClick: (e)=>showContextVisible(e),\n                children: [\n                    hover && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.CONTEXT_OPENED,\n                        className: \"z-20 w-full h-full  absolute flex flex-col justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__.FaCamera, {}, void 0, false, {\n                                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/CustomAvatarMenu.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex text-center w-14 \",\n                                id: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.CONTEXT_OPENED,\n                                children: [\n                                    \"Change\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/CustomAvatarMenu.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    \"profile photo\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/CustomAvatarMenu.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/CustomAvatarMenu.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {\n                        src: value || \"/default_avatar.png\",\n                        alt: \"imageAvatar here\",\n                        className: \"rounded-full \".concat(hover && \"opacity-40\"),\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/CustomAvatarMenu.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 5\n                    }, undefined),\n                    stateMenu.isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ContextMenu__WEBPACK_IMPORTED_MODULE_3__.ContextMenu, {\n                        item: {\n                            options: menu.contextMenuOptions,\n                            coordinates: coordinates,\n                            contextMenu: stateMenu.isContextMenuVisible,\n                            setContextMenu: changeStateMenu.setIsContextMenuVisible\n                        },\n                        idElement: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.CONTEXT_OPENED\n                    }, void 0, false, {\n                        fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/CustomAvatarMenu.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/CustomAvatarMenu.tsx\",\n                lineNumber: 46,\n                columnNumber: 4\n            }, undefined),\n            stateMenu.showPhotoLib && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_PhotoLibrary__WEBPACK_IMPORTED_MODULE_4__.PhotoLibrary, {\n                changeAvatar: fn.setImage,\n                imagesAvatar: images,\n                hiddenPhotoLib: changeStateMenu.setShowPhotoLib\n            }, void 0, false, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/CustomAvatarMenu.tsx\",\n                lineNumber: 88,\n                columnNumber: 5\n            }, undefined),\n            stateMenu.showCapturePhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_CapturePhoto__WEBPACK_IMPORTED_MODULE_5__.CapturePhoto, {\n                hide: changeStateMenu.setShowCapturePhoto\n            }, void 0, false, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/CustomAvatarMenu.tsx\",\n                lineNumber: 95,\n                columnNumber: 5\n            }, undefined),\n            stateMenu.grabPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_PhotoPicker__WEBPACK_IMPORTED_MODULE_6__.PhotoPicker, {\n                idPhotoPicker: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.PHOTO_PICKER,\n                onChange: fn.photoChange\n            }, void 0, false, {\n                fileName: \"/home/pavel/WebstormProjects/clones-react/whats-up/next-test/src/components/UI/CustomAvatarMenu.tsx\",\n                lineNumber: 98,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(CustomAvatarMenu, \"EtJhJGhsG3jwIzzKtfoADkhchRs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector,\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_12__.useActions,\n        _hooks_useToggle__WEBPACK_IMPORTED_MODULE_7__.useToggle,\n        _hooks_useContextMenu__WEBPACK_IMPORTED_MODULE_8__.useContextMenu\n    ];\n});\n_c = CustomAvatarMenu;\nvar _c;\n$RefreshReg$(_c, \"CustomAvatarMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9DdXN0b21BdmF0YXJNZW51LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRTtBQUMzQjtBQUNLO0FBQ0E7QUFDRTtBQUNBO0FBQ0Y7QUFDRDtBQUNVO0FBRXpCO0FBQ1c7QUFDa0I7QUFDWjtBQUUvQyxNQUFNZSxnQ0FBZ0M7SUFDckNDLEdBQUc7SUFDSEMsR0FBRztBQUNKO0FBQ0EsTUFBTUMsU0FBNEI7SUFDakM7UUFBRUMsTUFBTTtRQUFPQyxPQUFPO0lBQWlCO0lBQ3ZDO1FBQUVELE1BQU07UUFBT0MsT0FBTztJQUFpQjtJQUN2QztRQUFFRCxNQUFNO1FBQVNDLE9BQU87SUFBaUI7SUFDekM7UUFBRUQsTUFBTTtRQUFRQyxPQUFPO0lBQWlCO0lBQ3hDO1FBQUVELE1BQU07UUFBUUMsT0FBTztJQUFpQjtJQUN4QztRQUFFRCxNQUFNO1FBQU9DLE9BQU87SUFBaUI7SUFDdkM7UUFBRUQsTUFBTTtRQUFTQyxPQUFPO0lBQWlCO0lBQ3pDO1FBQUVELE1BQU07UUFBU0MsT0FBTztJQUFpQjtJQUN6QztRQUFFRCxNQUFNO1FBQVFDLE9BQU87SUFBaUI7Q0FDeEM7QUFDTSxNQUFNQyxtQkFBMEM7UUFBQyxFQUFFRCxLQUFLLEVBQUU7O0lBQ2hFLE1BQU1FLGNBQWNWLHlEQUFXQSxDQUFDQyxzRUFBY0E7SUFDOUMsTUFBTSxFQUFFVSxjQUFjLEVBQUUsR0FBR1QsOERBQVVBO0lBQ3JDLE1BQU0sQ0FBQ1UsT0FBT0MsR0FBR0MsY0FBYyxHQUFHakIsMkRBQVNBO0lBQzNDLE1BQU0sRUFBRWtCLElBQUksRUFBRUMsU0FBUyxFQUFFQyxlQUFlLEVBQUVDLEVBQUUsRUFBRSxHQUFHcEIscUVBQWNBO0lBQy9ELE1BQU1xQixxQkFBcUIzQixrREFBV0EsQ0FDckMsQ0FBQzRCO1FBQ0FBLEVBQUVDLGNBQWM7UUFDaEJWLGVBQWU7WUFBRVAsR0FBR2dCLEVBQUVFLEtBQUs7WUFBRWpCLEdBQUdlLEVBQUVHLEtBQUs7UUFBQztRQUN4Q04sZ0JBQWdCTyx1QkFBdUIsQ0FBQztJQUN6QyxHQUNBO1FBQUNQO0tBQWdCO0lBRWxCLHFCQUNDOzswQkFDQyw4REFBQ1E7Z0JBQ0FDLGNBQWNaO2dCQUNkYSxjQUFjYjtnQkFDZGMsV0FBVTtnQkFDVkMsU0FBU1QsQ0FBQUEsSUFBS0QsbUJBQW1CQzs7b0JBRWhDUix1QkFDQSw4REFBQ2E7d0JBQ0FLLElBQUkxQyxnRUFBY0E7d0JBQ2xCd0MsV0FBVTs7MENBRVYsOERBQUN0QyxxREFBUUE7Ozs7OzBDQUNULDhEQUFDeUM7Z0NBQ0FILFdBQVU7Z0NBQ1ZFLElBQUkxQyxnRUFBY0E7O29DQUNsQjtrREFFQSw4REFBQzRDOzs7OztvQ0FBSzs7Ozs7Ozs7Ozs7OztrQ0FLVCw4REFBQ2pDLG1EQUFLQTt3QkFDTGtDLEtBQUt6QixTQUFTO3dCQUNkMEIsS0FBSTt3QkFDSk4sV0FBVyxnQkFBc0MsT0FBdEJoQixTQUFTO3dCQUNwQ3VCLElBQUk7Ozs7OztvQkFFSm5CLFVBQVVvQixvQkFBb0Isa0JBQzlCLDhEQUFDM0Msd0RBQVdBO3dCQUNYNEMsTUFBTTs0QkFDTEMsU0FBU3ZCLEtBQUt3QixrQkFBa0I7NEJBQ2hDN0IsYUFBYUE7NEJBQ2I4QixhQUFheEIsVUFBVW9CLG9CQUFvQjs0QkFDM0NLLGdCQUNDeEIsZ0JBQWdCTyx1QkFBdUI7d0JBQ3pDO3dCQUNBa0IsV0FBV3RELGdFQUFjQTs7Ozs7Ozs7Ozs7O1lBSTNCNEIsVUFBVTJCLFlBQVksa0JBQ3RCLDhEQUFDakQsMERBQVlBO2dCQUNaa0QsY0FBYzFCLEdBQUcyQixRQUFRO2dCQUN6QkMsY0FBY3hDO2dCQUNkeUMsZ0JBQWdCOUIsZ0JBQWdCK0IsZUFBZTs7Ozs7O1lBR2hEaEMsVUFBVWlDLGdCQUFnQixrQkFDMUIsOERBQUN0RCwwREFBWUE7Z0JBQUN1RCxNQUFNakMsZ0JBQWdCa0MsbUJBQW1COzs7Ozs7WUFFdkRuQyxVQUFVb0MsU0FBUyxrQkFDbkIsOERBQUN4RCx3REFBV0E7Z0JBQ1h5RCxlQUFlaEUsOERBQVlBO2dCQUMzQmlFLFVBQVVwQyxHQUFHcUMsV0FBVzs7Ozs7Ozs7QUFLN0IsRUFBQztHQTFFWTlDOztRQUNRVCxxREFBV0E7UUFDSkUsMERBQVVBO1FBQ0hMLHVEQUFTQTtRQUNNQyxpRUFBY0E7OztLQUpuRFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVUkvQ3VzdG9tQXZhdGFyTWVudS50c3g/YmI4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT05URVhUX09QRU5FRCwgUEhPVE9fUElDS0VSIH0gZnJvbSAnQC9jb25zdGFudHMvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRmFDYW1lcmEgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHRNZW51IH0gZnJvbSAnQC9VSS9Db250ZXh0TWVudSdcbmltcG9ydCB7IFBob3RvTGlicmFyeSB9IGZyb20gJ0AvVUkvUGhvdG9MaWJyYXJ5J1xuaW1wb3J0IHsgQ2FwdHVyZVBob3RvIH0gZnJvbSAnQC9VSS9DYXB0dXJlUGhvdG8nXG5pbXBvcnQgeyBQaG90b1BpY2tlciB9IGZyb20gJ0AvVUkvUGhvdG9QaWNrZXInXG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tICdAL2hvb2tzL3VzZVRvZ2dsZSdcbmltcG9ydCB7IHVzZUNvbnRleHRNZW51IH0gZnJvbSAnQC9ob29rcy91c2VDb250ZXh0TWVudSdcbmltcG9ydCB7IElJbWFnZXMgfSBmcm9tICdAL3R5cGVzL2ltYWdlcy50eXBlcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGdldENvb3JkaW5hdGVzIH0gZnJvbSAnQC9zdG9yZS91c2VyL3VzZXIuc2VsZWN0b3InXG5pbXBvcnQgeyB1c2VBY3Rpb25zIH0gZnJvbSAnQC9ob29rcy91c2VBY3Rpb25zJ1xuXG5jb25zdCBpbml0aWFsQ29udGV4dE1lbnVDb29yZGluYXRlcyA9IHtcblx0eDogMCxcblx0eTogMFxufVxuY29uc3QgaW1hZ2VzOiBJSW1hZ2VzPHN0cmluZz5bXSA9IFtcblx0eyBuYW1lOiAnb25lJywgdmFsdWU6ICcvYXZhdGFycy8xLnBuZycgfSxcblx0eyBuYW1lOiAndHdvJywgdmFsdWU6ICcvYXZhdGFycy8yLnBuZycgfSxcblx0eyBuYW1lOiAndGhyZWUnLCB2YWx1ZTogJy9hdmF0YXJzLzMucG5nJyB9LFxuXHR7IG5hbWU6ICdmb3VyJywgdmFsdWU6ICcvYXZhdGFycy80LnBuZycgfSxcblx0eyBuYW1lOiAnZml2ZScsIHZhbHVlOiAnL2F2YXRhcnMvNS5wbmcnIH0sXG5cdHsgbmFtZTogJ3NpeCcsIHZhbHVlOiAnL2F2YXRhcnMvNi5wbmcnIH0sXG5cdHsgbmFtZTogJ3NldmVuJywgdmFsdWU6ICcvYXZhdGFycy83LnBuZycgfSxcblx0eyBuYW1lOiAnZWlnaHQnLCB2YWx1ZTogJy9hdmF0YXJzLzgucG5nJyB9LFxuXHR7IG5hbWU6ICduaW5lJywgdmFsdWU6ICcvYXZhdGFycy85LnBuZycgfVxuXVxuZXhwb3J0IGNvbnN0IEN1c3RvbUF2YXRhck1lbnU6IEZDPHsgdmFsdWU6IHN0cmluZyB9PiA9ICh7IHZhbHVlIH0pID0+IHtcblx0Y29uc3QgY29vcmRpbmF0ZXMgPSB1c2VTZWxlY3RvcihnZXRDb29yZGluYXRlcylcblx0Y29uc3QgeyBzZXRDb29yZGluYXRlcyB9ID0gdXNlQWN0aW9ucygpXG5cdGNvbnN0IFtob3ZlciwgXywgaGFuZGxlSG92ZXJGbl0gPSB1c2VUb2dnbGUoKVxuXHRjb25zdCB7IG1lbnUsIHN0YXRlTWVudSwgY2hhbmdlU3RhdGVNZW51LCBmbiB9ID0gdXNlQ29udGV4dE1lbnUoKVxuXHRjb25zdCBzaG93Q29udGV4dFZpc2libGUgPSB1c2VDYWxsYmFjayhcblx0XHQoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0c2V0Q29vcmRpbmF0ZXMoeyB4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZIH0pXG5cdFx0XHRjaGFuZ2VTdGF0ZU1lbnUuc2V0SXNDb250ZXh0TWVudVZpc2libGUodHJ1ZSlcblx0XHR9LFxuXHRcdFtjaGFuZ2VTdGF0ZU1lbnVdXG5cdClcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9e2hhbmRsZUhvdmVyRm59XG5cdFx0XHRcdG9uTW91c2VMZWF2ZT17aGFuZGxlSG92ZXJGbn1cblx0XHRcdFx0Y2xhc3NOYW1lPSdyZWxhdGl2ZSBoLTYwIHctNjAgei0wICdcblx0XHRcdFx0b25DbGljaz17ZSA9PiBzaG93Q29udGV4dFZpc2libGUoZSl9XG5cdFx0XHQ+XG5cdFx0XHRcdHtob3ZlciAmJiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0aWQ9e0NPTlRFWFRfT1BFTkVEfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd6LTIwIHctZnVsbCBoLWZ1bGwgIGFic29sdXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJ1xuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxGYUNhbWVyYSAvPlxuXHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmbGV4IHRleHQtY2VudGVyIHctMTQgJ1xuXHRcdFx0XHRcdFx0XHRpZD17Q09OVEVYVF9PUEVORUR9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdENoYW5nZVxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0cHJvZmlsZSBwaG90b1xuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRzcmM9e3ZhbHVlIHx8ICcvZGVmYXVsdF9hdmF0YXIucG5nJ31cblx0XHRcdFx0XHRhbHQ9J2ltYWdlQXZhdGFyIGhlcmUnXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgcm91bmRlZC1mdWxsICR7aG92ZXIgJiYgJ29wYWNpdHktNDAnfWB9XG5cdFx0XHRcdFx0ZmlsbFxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7c3RhdGVNZW51LmlzQ29udGV4dE1lbnVWaXNpYmxlICYmIChcblx0XHRcdFx0XHQ8Q29udGV4dE1lbnVcblx0XHRcdFx0XHRcdGl0ZW09e3tcblx0XHRcdFx0XHRcdFx0b3B0aW9uczogbWVudS5jb250ZXh0TWVudU9wdGlvbnMsXG5cdFx0XHRcdFx0XHRcdGNvb3JkaW5hdGVzOiBjb29yZGluYXRlcyxcblx0XHRcdFx0XHRcdFx0Y29udGV4dE1lbnU6IHN0YXRlTWVudS5pc0NvbnRleHRNZW51VmlzaWJsZSxcblx0XHRcdFx0XHRcdFx0c2V0Q29udGV4dE1lbnU6XG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlU3RhdGVNZW51LnNldElzQ29udGV4dE1lbnVWaXNpYmxlXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0aWRFbGVtZW50PXtDT05URVhUX09QRU5FRH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7c3RhdGVNZW51LnNob3dQaG90b0xpYiAmJiAoXG5cdFx0XHRcdDxQaG90b0xpYnJhcnlcblx0XHRcdFx0XHRjaGFuZ2VBdmF0YXI9e2ZuLnNldEltYWdlfVxuXHRcdFx0XHRcdGltYWdlc0F2YXRhcj17aW1hZ2VzfVxuXHRcdFx0XHRcdGhpZGRlblBob3RvTGliPXtjaGFuZ2VTdGF0ZU1lbnUuc2V0U2hvd1Bob3RvTGlifVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHRcdHtzdGF0ZU1lbnUuc2hvd0NhcHR1cmVQaG90byAmJiAoXG5cdFx0XHRcdDxDYXB0dXJlUGhvdG8gaGlkZT17Y2hhbmdlU3RhdGVNZW51LnNldFNob3dDYXB0dXJlUGhvdG99IC8+XG5cdFx0XHQpfVxuXHRcdFx0e3N0YXRlTWVudS5ncmFiUGhvdG8gJiYgKFxuXHRcdFx0XHQ8UGhvdG9QaWNrZXJcblx0XHRcdFx0XHRpZFBob3RvUGlja2VyPXtQSE9UT19QSUNLRVJ9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e2ZuLnBob3RvQ2hhbmdlfVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KVxufVxuIl0sIm5hbWVzIjpbIkNPTlRFWFRfT1BFTkVEIiwiUEhPVE9fUElDS0VSIiwiRmFDYW1lcmEiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwiQ29udGV4dE1lbnUiLCJQaG90b0xpYnJhcnkiLCJDYXB0dXJlUGhvdG8iLCJQaG90b1BpY2tlciIsInVzZVRvZ2dsZSIsInVzZUNvbnRleHRNZW51IiwiSW1hZ2UiLCJ1c2VTZWxlY3RvciIsImdldENvb3JkaW5hdGVzIiwidXNlQWN0aW9ucyIsImluaXRpYWxDb250ZXh0TWVudUNvb3JkaW5hdGVzIiwieCIsInkiLCJpbWFnZXMiLCJuYW1lIiwidmFsdWUiLCJDdXN0b21BdmF0YXJNZW51IiwiY29vcmRpbmF0ZXMiLCJzZXRDb29yZGluYXRlcyIsImhvdmVyIiwiXyIsImhhbmRsZUhvdmVyRm4iLCJtZW51Iiwic3RhdGVNZW51IiwiY2hhbmdlU3RhdGVNZW51IiwiZm4iLCJzaG93Q29udGV4dFZpc2libGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYWdlWCIsInBhZ2VZIiwic2V0SXNDb250ZXh0TWVudVZpc2libGUiLCJkaXYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaWQiLCJzcGFuIiwiYnIiLCJzcmMiLCJhbHQiLCJmaWxsIiwiaXNDb250ZXh0TWVudVZpc2libGUiLCJpdGVtIiwib3B0aW9ucyIsImNvbnRleHRNZW51T3B0aW9ucyIsImNvbnRleHRNZW51Iiwic2V0Q29udGV4dE1lbnUiLCJpZEVsZW1lbnQiLCJzaG93UGhvdG9MaWIiLCJjaGFuZ2VBdmF0YXIiLCJzZXRJbWFnZSIsImltYWdlc0F2YXRhciIsImhpZGRlblBob3RvTGliIiwic2V0U2hvd1Bob3RvTGliIiwic2hvd0NhcHR1cmVQaG90byIsImhpZGUiLCJzZXRTaG93Q2FwdHVyZVBob3RvIiwiZ3JhYlBob3RvIiwiaWRQaG90b1BpY2tlciIsIm9uQ2hhbmdlIiwicGhvdG9DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UI/CustomAvatarMenu.tsx\n"));

/***/ })

});