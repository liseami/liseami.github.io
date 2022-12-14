import _extends from "@swc/helpers/src/_extends.mjs";
export const ACTION_BUILD_OK = 'build-ok';
export const ACTION_BUILD_ERROR = 'build-error';
export const ACTION_REFRESH = 'fast-refresh';
export const ACTION_UNHANDLED_ERROR = 'unhandled-error';
export const ACTION_UNHANDLED_REJECTION = 'unhandled-rejection';
export function errorOverlayReducer(state, action) {
    switch(action.type){
        case ACTION_BUILD_OK:
            {
                return _extends({}, state, {
                    buildError: null
                });
            }
        case ACTION_BUILD_ERROR:
            {
                return _extends({}, state, {
                    buildError: action.message
                });
            }
        case ACTION_REFRESH:
            {
                return _extends({}, state, {
                    buildError: null,
                    errors: []
                });
            }
        case ACTION_UNHANDLED_ERROR:
        case ACTION_UNHANDLED_REJECTION:
            {
                return _extends({}, state, {
                    nextId: state.nextId + 1,
                    errors: [
                        ...state.errors.filter((err)=>{
                            // Filter out duplicate errors
                            return err.event.reason !== action.reason;
                        }),
                        {
                            id: state.nextId,
                            event: action
                        }, 
                    ]
                });
            }
        default:
            {
                return state;
            }
    }
}

//# sourceMappingURL=error-overlay-reducer.js.map