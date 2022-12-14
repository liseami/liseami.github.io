"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestAsyncStorage = void 0;
let requestAsyncStorage = {};
exports.requestAsyncStorage = requestAsyncStorage;
if (process.env.NEXT_RUNTIME !== 'edge' && typeof window === 'undefined') {
    exports.requestAsyncStorage = requestAsyncStorage = new (require('async_hooks')).AsyncLocalStorage();
}

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=request-async-storage.js.map