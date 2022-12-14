export let requestAsyncStorage = {};
if (process.env.NEXT_RUNTIME !== 'edge' && typeof window === 'undefined') {
    requestAsyncStorage = new (require('async_hooks')).AsyncLocalStorage();
}

//# sourceMappingURL=request-async-storage.js.map