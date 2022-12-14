"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.errorOverlayReducer = errorOverlayReducer;
exports.ACTION_UNHANDLED_REJECTION = exports.ACTION_UNHANDLED_ERROR = exports.ACTION_REFRESH = exports.ACTION_BUILD_ERROR = exports.ACTION_BUILD_OK = void 0;
var _extends = require("@swc/helpers/lib/_extends.js").default;
const ACTION_BUILD_OK = 'build-ok';
exports.ACTION_BUILD_OK = ACTION_BUILD_OK;
const ACTION_BUILD_ERROR = 'build-error';
exports.ACTION_BUILD_ERROR = ACTION_BUILD_ERROR;
const ACTION_REFRESH = 'fast-refresh';
exports.ACTION_REFRESH = ACTION_REFRESH;
const ACTION_UNHANDLED_ERROR = 'unhandled-error';
exports.ACTION_UNHANDLED_ERROR = ACTION_UNHANDLED_ERROR;
const ACTION_UNHANDLED_REJECTION = 'unhandled-rejection';
exports.ACTION_UNHANDLED_REJECTION = ACTION_UNHANDLED_REJECTION;
function errorOverlayReducer(state, action) {
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

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=error-overlay-reducer.js.map