"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useErrorHandler = useErrorHandler;
var _react = require("react");
function useErrorHandler(handleOnUnhandledError, handleOnUnhandledRejection) {
    const stacktraceLimitRef = (0, _react).useRef();
    (0, _react).useEffect(()=>{
        try {
            const limit = Error.stackTraceLimit;
            Error.stackTraceLimit = 50;
            stacktraceLimitRef.current = limit;
        } catch (e) {}
        window.addEventListener('error', handleOnUnhandledError);
        window.addEventListener('unhandledrejection', handleOnUnhandledRejection);
        return ()=>{
            if (stacktraceLimitRef.current !== undefined) {
                try {
                    Error.stackTraceLimit = stacktraceLimitRef.current;
                } catch (e) {}
                stacktraceLimitRef.current = undefined;
            }
            window.removeEventListener('error', handleOnUnhandledError);
            window.removeEventListener('unhandledrejection', handleOnUnhandledRejection);
        };
    }, [
        handleOnUnhandledError,
        handleOnUnhandledRejection
    ]);
}

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=use-error-handler.js.map