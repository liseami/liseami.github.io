"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.staticGenerationAsyncStorage = void 0;
let staticGenerationAsyncStorage = {};
exports.staticGenerationAsyncStorage = staticGenerationAsyncStorage;
if (process.env.NEXT_RUNTIME !== 'edge' && typeof window === 'undefined') {
    exports.staticGenerationAsyncStorage = staticGenerationAsyncStorage = new (require('async_hooks')).AsyncLocalStorage();
}

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=storage.js.map