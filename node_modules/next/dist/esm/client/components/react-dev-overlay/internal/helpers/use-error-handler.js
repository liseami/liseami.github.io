import { useEffect, useRef } from 'react';
export function useErrorHandler(handleOnUnhandledError, handleOnUnhandledRejection) {
    const stacktraceLimitRef = useRef();
    useEffect(()=>{
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

//# sourceMappingURL=use-error-handler.js.map