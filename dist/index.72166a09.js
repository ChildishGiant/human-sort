// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2FQzm":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "c75227167347e57df55b258c72166a09";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5XPnV":[function(require,module,exports) {
var _bulmaToast = require('bulma-toast');
async function choose(a, b) {
  // Set buttons
  document.getElementById('option1').innerText = a;
  document.getElementById('option2').innerText = b;
  let choice;
  const promise = new Promise(resolve => {
    window._clicked = resolve;
  });
  await promise.then(result => {
    choice = result;
  });
  return String(choice) !== String(a);
}
window.sort = async function () {
  const input = document.getElementById('input').value;
  const resultslist = document.getElementById('results-list');
  // Remove blank lines
  let toSort = input.split('\n').filter(line => Boolean(line.trim()));
  // Remove duplicates
  toSort = [...new Set(toSort)];
  // Make sure there's more than one element to sort
  if (toSort.length < 2) {
    // Show error
    _bulmaToast.toast({
      message: 'You need more than one thing to sort',
      type: 'is-danger',
      dismissible: true,
      animate: {
        in: 'fadeInDown',
        out: 'fadeOutUp'
      },
      duration: 9999
    });
    // Stop trying to sort
    return;
  }
  // Show modal
  document.getElementById('choices').classList.add('is-active');
  insertionSort(toSort).then(results => {
    // Hide choose modal
    document.getElementById('choices').classList.remove('is-active');
    // Clear results
    resultslist.innerHTML = '';
    // Populate results with list items
    results.forEach(function (item) {
      const li = document.createElement('li');
      resultslist.appendChild(li);
      li.innerHTML += item;
    });
    // Show results modal
    document.getElementById('results').classList.add('is-active');
  });
};
async function insertionSort(inputArr) {
  const n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    const current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && await choose(inputArr[j], current)) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
  return inputArr;
}

},{"bulma-toast":"4BZMf"}],"4BZMf":[function(require,module,exports) {
var define;
/*!
* bulma-toast 2.3.0
* (c) 2018-present @rfoel <rafaelfr@outlook.com>
* Released under the MIT License.
*/
(function (a, b) {
  "object" == typeof exports && "undefined" != typeof module ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : (a = a || self, b(a.bulmaToast = {}));
})(this, function (a) {
  "use strict";
  function b(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
  }
  function c(a, b) {
    for (var c, d = 0; d < b.length; d++) (c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, ("value" in c) && (c.writable = !0), Object.defineProperty(a, c.key, c));
  }
  function d(a, b, d) {
    return (b && c(a.prototype, b), d && c(a, d), a);
  }
  function e(a, b, c) {
    return ((b in a) ? Object.defineProperty(a, b, {
      value: c,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : a[b] = c, a);
  }
  function f(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      (b && (d = d.filter(function (b) {
        return Object.getOwnPropertyDescriptor(a, b).enumerable;
      })), c.push.apply(c, d));
    }
    return c;
  }
  function g(a) {
    for (var b, c = 1; c < arguments.length; c++) (b = null == arguments[c] ? {} : arguments[c], c % 2 ? f(Object(b), !0).forEach(function (c) {
      e(a, c, b[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : f(Object(b)).forEach(function (c) {
      Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c));
    }));
    return a;
  }
  function h(a, b, c, d, e, f) {
    if (m.position) return m.position;
    var g = n.createElement("div");
    return (g.setAttribute("style", "width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;" + o(b, c, d, e, f)), a.appendChild(g), m.position = g, g);
  }
  function i(a) {
    for (var b in m) m[b].remove();
    (m = {}, n = a);
  }
  function j(a) {
    if (!a.message) throw new Error("message is required");
    var b = g(g({}, l), a), c = new p(b), d = h(b.appendTo || n.body, b.position || l.position, b.offsetTop || l.offsetTop, b.offsetBottom || l.offsetBottom, b.offsetLeft || l.offsetLeft, b.offsetRight || l.offsetRight);
    if (b.single) for (var e = d.lastElementChild; e; ) (d.removeChild(e), e = d.lastElementChild);
    d.appendChild(c.element);
  }
  var k = {
    duration: 2e3,
    position: "top-right",
    closeOnClick: !0,
    opacity: 1,
    single: !1,
    offsetTop: 0,
    offsetBottom: 0,
    offsetLeft: 0,
    offsetRight: 0
  }, l = g({}, k), m = {}, n = document, o = function (a, b, c, d, e) {
    return "top-left" === a ? ("left:").concat(d, ";top:").concat(b, ";text-align:left;align-items:flex-start;") : "top-right" === a ? ("right:").concat(e, ";top:").concat(b, ";text-align:right;align-items:flex-end;") : "top-center" === a ? ("top:").concat(b, ";left:0;right:0;text-align:center;align-items:center;") : "bottom-left" === a ? ("left:").concat(d, ";bottom:").concat(c, ";text-align:left;align-items:flex-start;") : "bottom-right" === a ? ("right:").concat(e, ";bottom:").concat(c, ";text-align:right;align-items:flex-end;") : "bottom-center" === a ? ("bottom:").concat(c, ";left:0;right:0;text-align:center;align-items:center;") : "center" === a ? "top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;" : void 0;
  }, p = /*#__PURE__*/(function () {
    function a(c) {
      var d = this;
      (b(this, a), this.element = n.createElement("div"), this.opacity = c.opacity, this.type = c.type, this.animate = c.animate, this.dismissible = c.dismissible, this.closeOnClick = c.closeOnClick, this.message = c.message, this.duration = c.duration, this.pauseOnHover = c.pauseOnHover, this.offsetTop = c.offsetTop, this.offsetBottom = c.offsetBottom, this.offsetLeft = c.offsetLeft, this.offsetRight = c.offsetRight);
      var e = ("width:auto;pointer-events:auto;display:inline-flex;white-space:pre-wrap;opacity:").concat(this.opacity, ";"), f = ["notification"];
      if ((this.type && f.push(this.type), this.animate && this.animate["in"])) {
        var g = ("animate__").concat(this.animate["in"]), h = this.animate.speed ? ("animate__").concat(this.animate.speed) : "animate__faster";
        (f.push(("animate__animated ").concat(g, " ").concat(h)), this.onAnimationEnd(function () {
          return d.element.classList.remove(g);
        }));
      }
      if ((this.element.className = f.join(" "), this.dismissible)) {
        var i = n.createElement("button");
        (i.className = "delete", i.addEventListener("click", function () {
          d.destroy();
        }), this.element.insertAdjacentElement("afterbegin", i));
      } else e += "padding: 1.25rem 1.5rem";
      (this.closeOnClick && this.element.addEventListener("click", function () {
        d.destroy();
      }), this.element.setAttribute("style", e), "string" == typeof this.message ? this.element.insertAdjacentHTML("beforeend", this.message) : this.element.appendChild(this.message));
      var j = new q(function () {
        d.destroy();
      }, this.duration);
      this.pauseOnHover && (this.element.addEventListener("mouseover", function () {
        j.pause();
      }), this.element.addEventListener("mouseout", function () {
        j.resume();
      }));
    }
    return (d(a, [{
      key: "destroy",
      value: function () {
        var a = this;
        this.animate && this.animate.out ? (this.element.classList.add(("animate__").concat(this.animate.out)), this.onAnimationEnd(function () {
          (a.removeParent(a.element.parentNode), a.element.remove(), delete m.position);
        })) : (this.removeParent(this.element.parentNode), this.element.remove(), delete m.position);
      }
    }, {
      key: "removeParent",
      value: function (a) {
        a && 1 >= a.children.length && a.remove();
      }
    }, {
      key: "onAnimationEnd",
      value: function () {
        var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : function () {}, b = {
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MozAnimation: "mozAnimationEnd",
          WebkitAnimation: "webkitAnimationEnd"
        };
        for (var c in b) if (void 0 !== this.element.style[c]) {
          this.element.addEventListener(b[c], function () {
            return a();
          });
          break;
        }
      }
    }]), a);
  })(), q = /*#__PURE__*/(function () {
    function a(c, d) {
      (b(this, a), this.timer, this.start, this.remaining = d, this.callback = c, this.resume());
    }
    return (d(a, [{
      key: "pause",
      value: function () {
        "undefined" == typeof document || (window.clearTimeout(this.timer), this.remaining -= new Date() - this.start);
      }
    }, {
      key: "resume",
      value: function () {
        "undefined" == typeof document || (this.start = new Date(), window.clearTimeout(this.timer), this.timer = window.setTimeout(this.callback, this.remaining));
      }
    }]), a);
  })();
  (a.resetDefaults = function () {
    l = g({}, k);
  }, a.setDefaults = function (a) {
    l = g(g({}, k), a);
  }, a.setDoc = i, a.toast = j, Object.defineProperty(a, "__esModule", {
    value: !0
  }));
});

},{}]},["2FQzm","5XPnV"], "5XPnV", "parcelRequire0737")

//# sourceMappingURL=index.72166a09.js.map
