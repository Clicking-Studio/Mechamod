// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"k6AR7":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7ab8323e2e5833e4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"e0kws":[function(require,module,exports) {
var _three = require("three");
var _orbitControlsJs = require("./modules/OrbitControls.js");
var _stlloaderJs = require("./modules/STLLoader.js");
var _tweenEsmJs = require("./modules/tween.esm.js");
// variables for shadows
let shadow1 = document.getElementById("shadow1");
let shadow2 = document.getElementById("shadow2");
let shadowDuration = -5;
shadow2.style.transform = "translateX(9999px)" // move away the second shadow so that only first one is visible when they load
;
const loadingMessage = document.getElementById("loading-message");
// Show the loading message when starting to load keycaps
loadingMessage.style.display = "block";
const mousePos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};
const delayedMousePos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};
// Canvas
const canvas = document.querySelector("canvas.webgl");
// Scene
const scene = new _three.Scene();
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};
// renderer
const renderer = new _three.WebGLRenderer({
    canvas: canvas,
    antialias: true
});
//renderer.setClearColor(0xffffff);// sets background to white
renderer.setClearColor(new _three.Color(0x000000), 0); // Set the clear color to black with alpha 0
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(sizes.width, sizes.height);
// Base camera
const camera = new _three.PerspectiveCamera(10, sizes.width / sizes.height, 0.1, 1000 // Far clipping plane
);
camera.position.x = 0;
camera.position.y = -590;
camera.position.z = 0;
scene.add(camera);
// Controls
const controls = new (0, _orbitControlsJs.OrbitControls)(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = false // disabling zoom here
;
controls.enableRotate = false // disabling rotate here
;
controls.enablePan = false // disabling pan here
;
// Lights
const ambientLight = new _three.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new _three.PointLight(0xffffff, 0.5);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);
// const axesHelper = new THREE.AxesHelper( 30 );
// scene.add( axesHelper );
//var btn = document.getElementById('btn')
// Object
let objects = [];
const hiddenZoneZ = -200;
const loader = new (0, _stlloaderJs.STLLoader)();
const snake = loader.load("../dist/assets/Snake_KeyCap_VI_STL_001.stl", (geometry)=>{
    const material = new _three.MeshNormalMaterial();
    objects.push(new _three.Mesh(geometry, material));
    scene.add(objects.at(-1));
    // Hide the loading message when all keycaps are loaded
    loadingMessage.style.display = "none";
    const shenon = loader.load("../dist/assets/shenron-keycap-v1.stl", (geometry)=>{
        const material = new _three.MeshNormalMaterial();
        objects.push(new _three.Mesh(geometry, material));
        scene.add(objects.at(-1));
        objects.at(-1).position.setZ(hiddenZoneZ);
        const model3 = loader.load("../dist/assets/model3.stl", (geometry)=>{
            const material = new _three.MeshNormalMaterial();
            objects.push(new _three.Mesh(geometry, material));
            scene.add(objects.at(-1));
            objects.at(-1).position.setZ(hiddenZoneZ);
            const model4 = loader.load("../dist/assets/model4.stl", (geometry)=>{
                const material = new _three.MeshNormalMaterial();
                objects.push(new _three.Mesh(geometry, material));
                scene.add(objects.at(-1));
                objects.at(-1).position.setZ(hiddenZoneZ);
                //at this point all the models are loaded so we can make the shadows visible
                shadow1.style.visibility = "visible";
                shadow2.style.visibility = "visible";
            });
        });
    });
});
window.addEventListener("mousemove", onMouseMove, false);
function onMouseMove(event) {
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;
}
function updateDist() {
    dist = window.innerWidth / window.innerHeight * 70 + 15 // distance between models will be calculated based on the window width
    ;
}
let curInd = -1;
let nextInd = 0;
let dist;
updateDist();
const TRANSITION_SPEED = 1;
const HOVER_EFFECT_START_SPEED = .5;
const HOVER_EFFECT_END_SPEED = .5;
const HOVER_EFFECT_DELAY = 1 //ms
;
let transitionStarted = false;
const ZERO_ROT = {
    x: 0,
    y: 0,
    z: 0
};
const RIGHT_ROT = {
    x: Math.PI / 1.7,
    y: Math.PI / 5,
    z: Math.PI / 5
};
const LEFT_ROT = {
    x: Math.PI / 1.7,
    y: -Math.PI / 5,
    z: -Math.PI / 5
};
window.addEventListener("resize", ()=>{
    // Update sizes
    sizes.width = window.innerWidth, sizes.height = window.innerHeight;
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // update how far the models go off the screen
    updateDist();
});
function adjustIndexes() {
    if (curInd == objects.length) curInd = 0;
    if (nextInd == objects.length) nextInd = 0;
    if (curInd == -1) curInd = objects.length - 1;
    if (nextInd == -1) nextInd = objects.length - 1;
}
const scrollIcon = document.getElementById("scroll-icon");
var product1 = document.getElementById("product-container") // make the text a variable
;
var product2 = document.getElementById("product-container1") // make the text a variable
;
var product3 = document.getElementById("product-container2") // make the text a variable
;
var product4 = document.getElementById("product-container3") // make the text a variable
;
var objbut = [
    "snake",
    "shenon",
    "model3",
    "model4"
] //make the keycaps an array of an object
;
function visibility(indexVisible) {
    for(let index = 0; index < objbut.length; index++){
        let currbut = document.getElementById(objbut[index]);
        currbut.style.display = "none";
    }
    let visBut = document.getElementById(objbut[indexVisible]);
    visBut.style.display = "block";
}
var snakeCircle = document.querySelector(".snake-circle");
var shenronCircle = document.querySelector(".shenron-circle");
var model3 = document.querySelector(".model3-circle");
var model4 = document.querySelector(".model4-circle");
var snakeFigure = document.querySelector(".snake-background-wrapper");
var snakeBack = document.querySelector(".snake-background-item img");
// Add the 'transition-active' class initially to start with the transition
snakeFigure.classList.add("transition-active");
var isZoomed = false;
if (isZoomed) // Return to normal scale
snakeBack.style.transform = "scale(1.5)";
else // Apply the transition
snakeBack.style.transform = "scale(1)";
function circleText() {
    if (index === 0) {
        snakeCircle.style.display = "block";
        shenronCircle.style.display = "none";
        model3.style.display = "none";
        model4.style.display = "none";
        snakeFigure.classList.add("transition-active");
        snakeBack.style.transform = "scale(1)";
    }
    if (index === 1) {
        snakeCircle.style.display = "none";
        shenronCircle.style.display = "block";
        model3.style.display = "none";
        model4.style.display = "none";
        snakeBack.style.transform = "scale(1.5)";
        snakeFigure.classList.remove("transition-active");
    }
    if (index === 2) {
        snakeCircle.style.display = "none";
        shenronCircle.style.display = "none";
        model3.style.display = "block";
        model4.style.display = "none";
    }
    if (index === 3) {
        snakeCircle.style.display = "none";
        shenronCircle.style.display = "none";
        model3.style.display = "none";
        model4.style.display = "block";
        snakeBack.style.transform = "scale(1.5)";
        snakeFigure.classList.remove("transition-active");
    }
}
let index = 0;
visibility(0);
document.addEventListener("wheel", (event)=>{
    visibletext() // here i call a function that make the text if visible to dissappear when scroll
    ;
    if (event.deltaY < 0) {
        // Scrollwheel up
        if (transitionStarted) return;
        curInd = nextInd;
        nextInd--;
        adjustIndexes();
        objects[curInd].position.setX(0);
        objects[nextInd].position.setX(-dist);
        slide(curInd, 1, ZERO_ROT, RIGHT_ROT, _tweenEsmJs.Easing.Cubic.InOut);
        slide(nextInd, 1, LEFT_ROT, ZERO_ROT, _tweenEsmJs.Easing.Cubic.InOut);
        if (index === 0) index = 3;
        else index--;
        visibility(index);
        // Hide the scroll icon
        scrollIcon.classList.add("hide-icon");
    }
    circleText();
});
document.addEventListener("wheel", (event)=>{
    visibletext() // here i call a function that make the text if visible to dissappear when scroll
    ;
    if (event.deltaY > 0) {
        // Scrollwheel down
        if (transitionStarted) return;
        curInd = nextInd;
        nextInd++;
        adjustIndexes();
        objects[curInd].position.setX(0);
        objects[nextInd].position.setX(dist);
        slide(curInd, -1, ZERO_ROT, LEFT_ROT, _tweenEsmJs.Easing.Cubic.InOut);
        slide(nextInd, -1, RIGHT_ROT, ZERO_ROT, _tweenEsmJs.Easing.Cubic.InOut);
        if (index === 3) index = 0;
        else index++;
        visibility(index);
        // Hide the scroll icon
        scrollIcon.classList.add("hide-icon");
    }
    circleText();
});
var product1Visible = false;
var product2Visible = false;
var product3Visible = false;
var product4Visible = false;
const button0 = document.getElementById("snake"); //make the text appear on click and at the second click to dissappear
button0.addEventListener("click", ()=>{
    product1Visible = !product1Visible;
    product1.style.display = product1Visible ? "block" : "none";
});
const button1 = document.getElementById("shenon"); //make the text appear on click and at the second click to dissappear
button1.addEventListener("click", ()=>{
    product2Visible = !product2Visible;
    product2.style.display = product2Visible ? "block" : "none";
//shenronCircle.style.display = product2Visible ? "block" : "none";
});
const button2 = document.getElementById("model3"); //make the text appear on click and at the second click to dissappear
button2.addEventListener("click", ()=>{
    product3Visible = !product3Visible;
    product3.style.display = product3Visible ? "block" : "none";
});
const button3 = document.getElementById("model4"); //make the text appear on click and at the second click to dissappear
button3.addEventListener("click", ()=>{
    product4Visible = !product4Visible;
    product4.style.display = product4Visible ? "block" : "none";
});
function visibletext() {
    product1.style.display = "none";
    product2.style.display = "none";
    product3.style.display = "none";
    product4.style.display = "none";
}
function slide(objInd, dir, startRot, endRot, easing) {
    transitionStarted = true;
    const tween = new _tweenEsmJs.Tween({
        posX: objects[objInd].position.x,
        rotX: startRot.x,
        rotY: startRot.y,
        rotZ: startRot.z,
        shadowX: 0,
        shadowOpacity: 1
    }).to({
        posX: objects[objInd].position.x + dir * dist,
        rotX: endRot.x,
        rotY: endRot.y,
        rotZ: endRot.z,
        shadowX: window.innerWidth / 1.3,
        shadowOpacity: shadowDuration
    }, 2000 / TRANSITION_SPEED).easing(easing).onUpdate((coords)=>{
        shadow1.style.transform = "translateY(" + -coords.shadowX * dir + "px)";
        shadow2.style.transform = "translateY(" + -(coords.shadowX - window.innerWidth / 1.3) * dir + "px)";
        shadow1.style.opacity = coords.shadowOpacity;
        shadow2.style.opacity = shadowDuration + 1 - coords.shadowOpacity;
        objects[objInd].position.setZ(coords.posX);
        objects[objInd].position.setX(0);
        objects[objInd].rotation.y = coords.rotY;
        objects[objInd].rotation.x = coords.rotX;
        objects[objInd].rotation.z = coords.rotZ;
    }).onComplete(()=>{
        multiplierX = 0;
        multiplierZ = 0;
        transitionStarted = false;
        hoverEffectStarted = false;
        if (objInd != nextInd) objects[objInd].position.setZ(hiddenZoneZ) // hide model
        ;
    });
    tween.start();
}
let timeoutId;
function startHoverEffect() {
    hoverEffectStarted = true;
    timeoutId = setTimeout(()=>{
        const tween = new _tweenEsmJs.Tween({
            x: multiplierX,
            z: multiplierZ
        })// .delay(HOVER_EFFECT_DELAY)
        .to({
            x: 0.0019,
            z: 0.0017
        }, 500 / HOVER_EFFECT_START_SPEED).easing(_tweenEsmJs.Easing.Quadratic.InOut).onUpdate((coords)=>{
            multiplierX = coords.x;
            multiplierZ = coords.z;
            if (hoveringInZone == false) {
                tween.stop();
                clearTimeout(timeoutId);
            }
        });
        tween.start();
    }, HOVER_EFFECT_DELAY);
}
function stopHoverEffect() {
    clearTimeout(timeoutId);
    hoverEffectStarted = false;
    const tween = new _tweenEsmJs.Tween({
        x: multiplierX,
        z: multiplierZ
    }).to({
        x: 0,
        z: 0
    }, 500 / HOVER_EFFECT_END_SPEED).easing(_tweenEsmJs.Easing.Quadratic.InOut).onUpdate((coords)=>{
        multiplierX = coords.x;
        multiplierZ = coords.z;
    });
    tween.start();
}
let hoveringInZone = false;
document.getElementById("hover-zone").addEventListener("mouseover", ()=>{
    hoveringInZone = true;
});
document.getElementById("hover-zone").addEventListener("mouseout", ()=>{
    hoveringInZone = false;
});
// Animate
let multiplierX = 0, multiplierZ = 0;
let hoverEffectStarted = false;
function lerp(start, end, t) {
    return (1 - t) * start + t * end;
}
let mouseDist = 0;
const mycurs = document.getElementById("testCursor");
const tick = ()=>{
    const xDistance = delayedMousePos.x - mousePos.x;
    const yDistance = delayedMousePos.y - mousePos.y;
    mouseDist = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    mouseDist = mouseDist / 10000;
    delayedMousePos.x = lerp(delayedMousePos.x, mousePos.x, mouseDist);
    delayedMousePos.y = lerp(delayedMousePos.y, mousePos.y, mouseDist);
    // mycurs.style.left = delayedMousePos.x + 'px'
    // mycurs.style.top = delayedMousePos.y +'px'
    //rotate the model based on mouse pos
    if (objects[nextInd]) {
        objects[nextInd].rotation.x = multiplierX * (delayedMousePos.y - window.innerHeight / 2);
        objects[nextInd].rotation.z = multiplierZ * (delayedMousePos.x - window.innerWidth / 2);
    }
    if (hoveringInZone == true && hoverEffectStarted == false) startHoverEffect();
    else if (hoveringInZone == false && hoverEffectStarted == true) stopHoverEffect();
    _tweenEsmJs.update();
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
    renderer.setSize(sizes.width, sizes.height);
};
tick();

},{"three":"ktPTu","./modules/OrbitControls.js":"9RT6q","./modules/STLLoader.js":"2BpWB","./modules/tween.esm.js":"3ax19"}]},["k6AR7","e0kws"], "e0kws", "parcelRequire772b")

//# sourceMappingURL=product.2e5833e4.js.map