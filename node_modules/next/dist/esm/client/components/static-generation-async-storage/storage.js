export let staticGenerationAsyncStorage = {};
if (process.env.NEXT_RUNTIME !== 'edge' && typeof window === 'undefined') {
    staticGenerationAsyncStorage = new (require('async_hooks')).AsyncLocalStorage();
}

//# sourceMappingURL=storage.js.map