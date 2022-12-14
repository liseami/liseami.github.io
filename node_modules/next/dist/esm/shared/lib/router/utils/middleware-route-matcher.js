import { matchHas } from './prepare-destination';
export function getMiddlewareRouteMatcher(matchers) {
    return (pathname, req, query)=>{
        for (const matcher of matchers){
            const routeMatch = new RegExp(matcher.regexp).exec(pathname);
            if (!routeMatch) {
                continue;
            }
            if (matcher.has) {
                const hasParams = matchHas(req, matcher.has, query);
                if (!hasParams) {
                    continue;
                }
            }
            return true;
        }
        return false;
    };
}

//# sourceMappingURL=middleware-route-matcher.js.map