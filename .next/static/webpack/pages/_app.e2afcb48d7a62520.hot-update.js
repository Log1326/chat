"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/call/call.slice.ts":
/*!**************************************!*\
  !*** ./src/store/call/call.slice.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"callSlice\": function() { return /* binding */ callSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    videoCall: {\n        isLoadingVideoCall: false,\n        isVideoCall: false\n    },\n    voiceCall: {\n        isLoadingVoiceCall: false,\n        isVoiceCall: false\n    }\n};\nconst callSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    initialState,\n    name: \"callStore\",\n    reducers: {\n        videoCallOpenWindow: (state, action)=>{\n            if (state.videoCall) state.videoCall.isVideoCall = action.payload;\n        },\n        videoCall: (state, action)=>{\n            if (state.videoCall) state.videoCall.videoCallState = action.payload;\n        },\n        setIncomingVideoCall: (state, action)=>{\n            if (state.videoCall) state.videoCall.incomingVideoCall = action.payload;\n        },\n        voiceCallOpenWindow: (state, action)=>{\n            if (state.voiceCall) state.voiceCall.isVoiceCall = action.payload;\n        },\n        voiceCall: (state, action)=>{\n            if (state.voiceCall) state.voiceCall.voiceCallState = action.payload;\n        },\n        setIncomingVoiceCall: (state, action)=>{\n            if (state.voiceCall) state.voiceCall.incomingVoiceCall = action.payload;\n        },\n        setEndCall: (state)=>{\n            state.videoCall = null;\n            state.voiceCall = null;\n        }\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvY2FsbC9jYWxsLnNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZEO0FBRzdELE1BQU1DLGVBQWtDO0lBQ3ZDQyxXQUFXO1FBQ1ZDLG9CQUFvQixLQUFLO1FBQ3pCQyxhQUFhLEtBQUs7SUFDbkI7SUFDQUMsV0FBVztRQUNWQyxvQkFBb0IsS0FBSztRQUN6QkMsYUFBYSxLQUFLO0lBQ25CO0FBQ0Q7QUFFTyxNQUFNQyxZQUFZUiw2REFBV0EsQ0FBQztJQUNwQ0M7SUFDQVEsTUFBTTtJQUNOQyxVQUFVO1FBQ1RDLHFCQUFxQixDQUFDQyxPQUFPQyxTQUFtQztZQUMvRCxJQUFJRCxNQUFNVixTQUFTLEVBQUVVLE1BQU1WLFNBQVMsQ0FBQ0UsV0FBVyxHQUFHUyxPQUFPQyxPQUFPO1FBQ2xFO1FBQ0FaLFdBQVcsQ0FBQ1UsT0FBT0MsU0FBcUM7WUFDdkQsSUFBSUQsTUFBTVYsU0FBUyxFQUFFVSxNQUFNVixTQUFTLENBQUNhLGNBQWMsR0FBR0YsT0FBT0MsT0FBTztRQUNyRTtRQUNBRSxzQkFBc0IsQ0FBQ0osT0FBT0MsU0FBaUQ7WUFDOUUsSUFBSUQsTUFBTVYsU0FBUyxFQUFFVSxNQUFNVixTQUFTLENBQUNlLGlCQUFpQixHQUFHSixPQUFPQyxPQUFPO1FBQ3hFO1FBQ0FJLHFCQUFxQixDQUFDTixPQUFPQyxTQUFtQztZQUMvRCxJQUFJRCxNQUFNUCxTQUFTLEVBQUVPLE1BQU1QLFNBQVMsQ0FBQ0UsV0FBVyxHQUFHTSxPQUFPQyxPQUFPO1FBQ2xFO1FBQ0FULFdBQVcsQ0FBQ08sT0FBT0MsU0FBcUM7WUFDdkQsSUFBSUQsTUFBTVAsU0FBUyxFQUFFTyxNQUFNUCxTQUFTLENBQUNjLGNBQWMsR0FBR04sT0FBT0MsT0FBTztRQUNyRTtRQUNBTSxzQkFBc0IsQ0FDckJSLE9BQ0FDLFNBQ0k7WUFDSixJQUFJRCxNQUFNUCxTQUFTLEVBQUVPLE1BQU1QLFNBQVMsQ0FBQ2dCLGlCQUFpQixHQUFHUixPQUFPQyxPQUFPO1FBQ3hFO1FBQ0FRLFlBQVlWLENBQUFBLFFBQVM7WUFDcEJBLE1BQU1WLFNBQVMsR0FBRyxJQUFJO1lBQ3RCVSxNQUFNUCxTQUFTLEdBQUcsSUFBSTtRQUN2QjtJQUNEO0FBQ0QsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvY2FsbC9jYWxsLnNsaWNlLnRzPzZjOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHsgQ2FsbFN0YXRlLCBJSW5pdGlhbFN0YXRlQ2FsbCB9IGZyb20gJ0Avc3RvcmUvY2FsbC9jYWxsLnR5cGVzJ1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElJbml0aWFsU3RhdGVDYWxsID0ge1xuXHR2aWRlb0NhbGw6IHtcblx0XHRpc0xvYWRpbmdWaWRlb0NhbGw6IGZhbHNlLFxuXHRcdGlzVmlkZW9DYWxsOiBmYWxzZVxuXHR9LFxuXHR2b2ljZUNhbGw6IHtcblx0XHRpc0xvYWRpbmdWb2ljZUNhbGw6IGZhbHNlLFxuXHRcdGlzVm9pY2VDYWxsOiBmYWxzZVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBjYWxsU2xpY2UgPSBjcmVhdGVTbGljZSh7XG5cdGluaXRpYWxTdGF0ZSxcblx0bmFtZTogJ2NhbGxTdG9yZScsXG5cdHJlZHVjZXJzOiB7XG5cdFx0dmlkZW9DYWxsT3BlbldpbmRvdzogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pID0+IHtcblx0XHRcdGlmIChzdGF0ZS52aWRlb0NhbGwpIHN0YXRlLnZpZGVvQ2FsbC5pc1ZpZGVvQ2FsbCA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0fSxcblx0XHR2aWRlb0NhbGw6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPENhbGxTdGF0ZT4pID0+IHtcblx0XHRcdGlmIChzdGF0ZS52aWRlb0NhbGwpIHN0YXRlLnZpZGVvQ2FsbC52aWRlb0NhbGxTdGF0ZSA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0fSxcblx0XHRzZXRJbmNvbWluZ1ZpZGVvQ2FsbDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Q2FsbFN0YXRlIHwgdW5kZWZpbmVkPikgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLnZpZGVvQ2FsbCkgc3RhdGUudmlkZW9DYWxsLmluY29taW5nVmlkZW9DYWxsID0gYWN0aW9uLnBheWxvYWRcblx0XHR9LFxuXHRcdHZvaWNlQ2FsbE9wZW5XaW5kb3c6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSA9PiB7XG5cdFx0XHRpZiAoc3RhdGUudm9pY2VDYWxsKSBzdGF0ZS52b2ljZUNhbGwuaXNWb2ljZUNhbGwgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdH0sXG5cdFx0dm9pY2VDYWxsOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxDYWxsU3RhdGU+KSA9PiB7XG5cdFx0XHRpZiAoc3RhdGUudm9pY2VDYWxsKSBzdGF0ZS52b2ljZUNhbGwudm9pY2VDYWxsU3RhdGUgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdH0sXG5cdFx0c2V0SW5jb21pbmdWb2ljZUNhbGw6IChcblx0XHRcdHN0YXRlLFxuXHRcdFx0YWN0aW9uOiBQYXlsb2FkQWN0aW9uPENhbGxTdGF0ZSB8IHVuZGVmaW5lZD5cblx0XHQpID0+IHtcblx0XHRcdGlmIChzdGF0ZS52b2ljZUNhbGwpIHN0YXRlLnZvaWNlQ2FsbC5pbmNvbWluZ1ZvaWNlQ2FsbCA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0fSxcblx0XHRzZXRFbmRDYWxsOiBzdGF0ZSA9PiB7XG5cdFx0XHRzdGF0ZS52aWRlb0NhbGwgPSBudWxsXG5cdFx0XHRzdGF0ZS52b2ljZUNhbGwgPSBudWxsXG5cdFx0fVxuXHR9XG59KVxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidmlkZW9DYWxsIiwiaXNMb2FkaW5nVmlkZW9DYWxsIiwiaXNWaWRlb0NhbGwiLCJ2b2ljZUNhbGwiLCJpc0xvYWRpbmdWb2ljZUNhbGwiLCJpc1ZvaWNlQ2FsbCIsImNhbGxTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInZpZGVvQ2FsbE9wZW5XaW5kb3ciLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJ2aWRlb0NhbGxTdGF0ZSIsInNldEluY29taW5nVmlkZW9DYWxsIiwiaW5jb21pbmdWaWRlb0NhbGwiLCJ2b2ljZUNhbGxPcGVuV2luZG93Iiwidm9pY2VDYWxsU3RhdGUiLCJzZXRJbmNvbWluZ1ZvaWNlQ2FsbCIsImluY29taW5nVm9pY2VDYWxsIiwic2V0RW5kQ2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/call/call.slice.ts\n"));

/***/ })

});