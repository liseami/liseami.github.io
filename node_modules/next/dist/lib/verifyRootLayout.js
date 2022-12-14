"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyRootLayout = verifyRootLayout;
var _path = _interopRequireDefault(require("path"));
var _fs = require("fs");
var _chalk = _interopRequireDefault(require("next/dist/compiled/chalk"));
var Log = _interopRequireWildcard(require("../build/output/log"));
var _constants = require("./constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const globOrig = require("next/dist/compiled/glob");
const glob = (cwd, pattern)=>{
    return new Promise((resolve, reject)=>{
        globOrig(pattern, {
            cwd
        }, (err, files)=>{
            if (err) {
                return reject(err);
            }
            resolve(files);
        });
    });
};
function getRootLayout(isTs) {
    if (isTs) {
        return `export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  )
}
`;
    }
    return `export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  )
}
`;
}
async function verifyRootLayout({ dir , appDir , tsconfigPath , pagePath , pageExtensions  }) {
    try {
        const layoutFiles = await glob(appDir, `**/layout.{${pageExtensions.join(",")}}`);
        const hasLayout = layoutFiles.length !== 0;
        const normalizedPagePath = pagePath.replace(`${_constants.APP_DIR_ALIAS}/`, "");
        const firstSegmentValue = normalizedPagePath.split("/")[0];
        const pageRouteGroup = firstSegmentValue.startsWith("(") ? firstSegmentValue : undefined;
        if (pageRouteGroup || !hasLayout) {
            const resolvedTsConfigPath = _path.default.join(dir, tsconfigPath);
            const hasTsConfig = await _fs.promises.access(resolvedTsConfigPath).then(()=>true, ()=>false);
            const rootLayoutPath = _path.default.join(appDir, // If the page is within a route group directly under app (e.g. app/(routegroup)/page.js)
            // prefer creating the root layout in that route group. Otherwise create the root layout in the app root.
            pageRouteGroup ? pageRouteGroup : "", `layout.${hasTsConfig ? "tsx" : "js"}`);
            await _fs.promises.writeFile(rootLayoutPath, getRootLayout(hasTsConfig));
            console.log(_chalk.default.green(`\nYour page ${_chalk.default.bold(`app/${normalizedPagePath}`)} did not have a root layout, we created ${_chalk.default.bold(`app${rootLayoutPath.replace(appDir, "")}`)} for you.`) + "\n");
            // Created root layout
            return true;
        }
    } catch (error) {
        Log.error("Failed to create root layout", error);
    }
    // Didn't create root layout
    return false;
}

//# sourceMappingURL=verifyRootLayout.js.map