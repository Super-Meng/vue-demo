/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _layoutJs = __webpack_require__(3);
	
	var _layoutJs2 = _interopRequireDefault(_layoutJs);
	
	var _vue = __webpack_require__(9);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _store = __webpack_require__(10);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _Banner = __webpack_require__(17);
	
	var _Banner2 = _interopRequireDefault(_Banner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	new _vue2.default({
		el: 'body',
		store: _store2.default,
		components: {
			'goods-banner': _Banner2.default
		}
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(4);
	
	+function () {
		var set_rem = function set_rem() {
			var designW = 750;
			var size = 100;
			var _ww = window.innerWidth;
			var _size = _ww * size / designW;
			var doc = document.getElementsByTagName('html')[0];
	
			doc.style.fontSize = _size + 'px';
		};
		// rem
		set_rem();
		window.onresize = function () {
			return set_rem();
		};
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./config.less", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./config.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  touch-action: none;\n  -webkit-tap-highlight-color: transparent;\n  font-family: 'Microsoft YaHei', 'WenQuanYi Micro Hei', Arial, sans-serif;\n}\na {\n  user-select: none;\n  text-decoration: none;\n  cursor: pointer;\n}\ninput,\nselect,\ntextarea {\n  outline: none;\n  -webkit-appearance: none;\n}\nul {\n  list-style: none;\n}\nimg {\n  border: none;\n}\n.clear {\n  clear: both;\n}\n.fl {\n  float: left;\n}\n.fr {\n  float: right;\n}\nbody {\n  background: #f0f0f0;\n}\n", ""]);
	
	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * Vue.js v1.0.25
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t.Vue = e();
	}(undefined, function () {
	  "use strict";
	  function t(e, n, r) {
	    if (i(e, n)) return void (e[n] = r);if (e._isVue) return void t(e._data, n, r);var s = e.__ob__;if (!s) return void (e[n] = r);if (s.convert(n, r), s.dep.notify(), s.vms) for (var o = s.vms.length; o--;) {
	      var a = s.vms[o];a._proxy(n), a._digest();
	    }return r;
	  }function e(t, e) {
	    if (i(t, e)) {
	      delete t[e];var n = t.__ob__;if (!n) return void (t._isVue && (delete t._data[e], t._digest()));if (n.dep.notify(), n.vms) for (var r = n.vms.length; r--;) {
	        var s = n.vms[r];s._unproxy(e), s._digest();
	      }
	    }
	  }function i(t, e) {
	    return Oi.call(t, e);
	  }function n(t) {
	    return Ti.test(t);
	  }function r(t) {
	    var e = (t + "").charCodeAt(0);return 36 === e || 95 === e;
	  }function s(t) {
	    return null == t ? "" : t.toString();
	  }function o(t) {
	    if ("string" != typeof t) return t;var e = Number(t);return isNaN(e) ? t : e;
	  }function a(t) {
	    return "true" === t ? !0 : "false" === t ? !1 : t;
	  }function h(t) {
	    var e = t.charCodeAt(0),
	        i = t.charCodeAt(t.length - 1);return e !== i || 34 !== e && 39 !== e ? t : t.slice(1, -1);
	  }function l(t) {
	    return t.replace(Ni, c);
	  }function c(t, e) {
	    return e ? e.toUpperCase() : "";
	  }function u(t) {
	    return t.replace(ji, "$1-$2").toLowerCase();
	  }function f(t) {
	    return t.replace(Ei, c);
	  }function p(t, e) {
	    return function (i) {
	      var n = arguments.length;return n ? n > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e);
	    };
	  }function d(t, e) {
	    e = e || 0;for (var i = t.length - e, n = new Array(i); i--;) {
	      n[i] = t[i + e];
	    }return n;
	  }function v(t, e) {
	    for (var i = Object.keys(e), n = i.length; n--;) {
	      t[i[n]] = e[i[n]];
	    }return t;
	  }function m(t) {
	    return null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
	  }function g(t) {
	    return Si.call(t) === Fi;
	  }function _(t, e, i, n) {
	    Object.defineProperty(t, e, { value: i, enumerable: !!n, writable: !0, configurable: !0 });
	  }function y(t, e) {
	    var i,
	        n,
	        r,
	        s,
	        o,
	        a = function h() {
	      var a = Date.now() - s;e > a && a >= 0 ? i = setTimeout(h, e - a) : (i = null, o = t.apply(r, n), i || (r = n = null));
	    };return function () {
	      return r = this, n = arguments, s = Date.now(), i || (i = setTimeout(a, e)), o;
	    };
	  }function b(t, e) {
	    for (var i = t.length; i--;) {
	      if (t[i] === e) return i;
	    }return -1;
	  }function w(t) {
	    var e = function i() {
	      return i.cancelled ? void 0 : t.apply(this, arguments);
	    };return e.cancel = function () {
	      e.cancelled = !0;
	    }, e;
	  }function C(t, e) {
	    return t == e || (m(t) && m(e) ? JSON.stringify(t) === JSON.stringify(e) : !1);
	  }function $(t) {
	    this.size = 0, this.limit = t, this.head = this.tail = void 0, this._keymap = Object.create(null);
	  }function k() {
	    var t,
	        e = en.slice(hn, on).trim();if (e) {
	      t = {};var i = e.match(vn);t.name = i[0], i.length > 1 && (t.args = i.slice(1).map(x));
	    }t && (nn.filters = nn.filters || []).push(t), hn = on + 1;
	  }function x(t) {
	    if (mn.test(t)) return { value: o(t), dynamic: !1 };var e = h(t),
	        i = e === t;return { value: i ? t : e, dynamic: i };
	  }function A(t) {
	    var e = dn.get(t);if (e) return e;for (en = t, ln = cn = !1, un = fn = pn = 0, hn = 0, nn = {}, on = 0, an = en.length; an > on; on++) {
	      if (sn = rn, rn = en.charCodeAt(on), ln) 39 === rn && 92 !== sn && (ln = !ln);else if (cn) 34 === rn && 92 !== sn && (cn = !cn);else if (124 === rn && 124 !== en.charCodeAt(on + 1) && 124 !== en.charCodeAt(on - 1)) null == nn.expression ? (hn = on + 1, nn.expression = en.slice(0, on).trim()) : k();else switch (rn) {case 34:
	          cn = !0;break;case 39:
	          ln = !0;break;case 40:
	          pn++;break;case 41:
	          pn--;break;case 91:
	          fn++;break;case 93:
	          fn--;break;case 123:
	          un++;break;case 125:
	          un--;}
	    }return null == nn.expression ? nn.expression = en.slice(0, on).trim() : 0 !== hn && k(), dn.put(t, nn), nn;
	  }function O(t) {
	    return t.replace(_n, "\\$&");
	  }function T() {
	    var t = O(An.delimiters[0]),
	        e = O(An.delimiters[1]),
	        i = O(An.unsafeDelimiters[0]),
	        n = O(An.unsafeDelimiters[1]);bn = new RegExp(i + "((?:.|\\n)+?)" + n + "|" + t + "((?:.|\\n)+?)" + e, "g"), wn = new RegExp("^" + i + "((?:.|\\n)+?)" + n + "$"), yn = new $(1e3);
	  }function N(t) {
	    yn || T();var e = yn.get(t);if (e) return e;if (!bn.test(t)) return null;for (var i, n, r, s, o, a, h = [], l = bn.lastIndex = 0; i = bn.exec(t);) {
	      n = i.index, n > l && h.push({ value: t.slice(l, n) }), r = wn.test(i[0]), s = r ? i[1] : i[2], o = s.charCodeAt(0), a = 42 === o, s = a ? s.slice(1) : s, h.push({ tag: !0, value: s.trim(), html: r, oneTime: a }), l = n + i[0].length;
	    }return l < t.length && h.push({ value: t.slice(l) }), yn.put(t, h), h;
	  }function j(t, e) {
	    return t.length > 1 ? t.map(function (t) {
	      return E(t, e);
	    }).join("+") : E(t[0], e, !0);
	  }function E(t, e, i) {
	    return t.tag ? t.oneTime && e ? '"' + e.$eval(t.value) + '"' : S(t.value, i) : '"' + t.value + '"';
	  }function S(t, e) {
	    if (Cn.test(t)) {
	      var i = A(t);return i.filters ? "this._applyFilters(" + i.expression + ",null," + JSON.stringify(i.filters) + ",false)" : "(" + t + ")";
	    }return e ? t : "(" + t + ")";
	  }function F(t, e, i, n) {
	    R(t, 1, function () {
	      e.appendChild(t);
	    }, i, n);
	  }function D(t, e, i, n) {
	    R(t, 1, function () {
	      B(t, e);
	    }, i, n);
	  }function P(t, e, i) {
	    R(t, -1, function () {
	      z(t);
	    }, e, i);
	  }function R(t, e, i, n, r) {
	    var s = t.__v_trans;if (!s || !s.hooks && !qi || !n._isCompiled || n.$parent && !n.$parent._isCompiled) return i(), void (r && r());var o = e > 0 ? "enter" : "leave";s[o](i, r);
	  }function L(t) {
	    if ("string" == typeof t) {
	      t = document.querySelector(t);
	    }return t;
	  }function H(t) {
	    if (!t) return !1;var e = t.ownerDocument.documentElement,
	        i = t.parentNode;return e === t || e === i || !(!i || 1 !== i.nodeType || !e.contains(i));
	  }function I(t, e) {
	    var i = t.getAttribute(e);return null !== i && t.removeAttribute(e), i;
	  }function M(t, e) {
	    var i = I(t, ":" + e);return null === i && (i = I(t, "v-bind:" + e)), i;
	  }function V(t, e) {
	    return t.hasAttribute(e) || t.hasAttribute(":" + e) || t.hasAttribute("v-bind:" + e);
	  }function B(t, e) {
	    e.parentNode.insertBefore(t, e);
	  }function W(t, e) {
	    e.nextSibling ? B(t, e.nextSibling) : e.parentNode.appendChild(t);
	  }function z(t) {
	    t.parentNode.removeChild(t);
	  }function U(t, e) {
	    e.firstChild ? B(t, e.firstChild) : e.appendChild(t);
	  }function J(t, e) {
	    var i = t.parentNode;i && i.replaceChild(e, t);
	  }function q(t, e, i, n) {
	    t.addEventListener(e, i, n);
	  }function Q(t, e, i) {
	    t.removeEventListener(e, i);
	  }function G(t) {
	    var e = t.className;return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e = e.baseVal || ""), e;
	  }function Z(t, e) {
	    Mi && !/svg$/.test(t.namespaceURI) ? t.className = e : t.setAttribute("class", e);
	  }function X(t, e) {
	    if (t.classList) t.classList.add(e);else {
	      var i = " " + G(t) + " ";i.indexOf(" " + e + " ") < 0 && Z(t, (i + e).trim());
	    }
	  }function Y(t, e) {
	    if (t.classList) t.classList.remove(e);else {
	      for (var i = " " + G(t) + " ", n = " " + e + " "; i.indexOf(n) >= 0;) {
	        i = i.replace(n, " ");
	      }Z(t, i.trim());
	    }t.className || t.removeAttribute("class");
	  }function K(t, e) {
	    var i, n;if (it(t) && at(t.content) && (t = t.content), t.hasChildNodes()) for (tt(t), n = e ? document.createDocumentFragment() : document.createElement("div"); i = t.firstChild;) {
	      n.appendChild(i);
	    }return n;
	  }function tt(t) {
	    for (var e; e = t.firstChild, et(e);) {
	      t.removeChild(e);
	    }for (; e = t.lastChild, et(e);) {
	      t.removeChild(e);
	    }
	  }function et(t) {
	    return t && (3 === t.nodeType && !t.data.trim() || 8 === t.nodeType);
	  }function it(t) {
	    return t.tagName && "template" === t.tagName.toLowerCase();
	  }function nt(t, e) {
	    var i = An.debug ? document.createComment(t) : document.createTextNode(e ? " " : "");return i.__v_anchor = !0, i;
	  }function rt(t) {
	    if (t.hasAttributes()) for (var e = t.attributes, i = 0, n = e.length; n > i; i++) {
	      var r = e[i].name;if (Nn.test(r)) return l(r.replace(Nn, ""));
	    }
	  }function st(t, e, i) {
	    for (var n; t !== e;) {
	      n = t.nextSibling, i(t), t = n;
	    }i(e);
	  }function ot(t, e, i, n, r) {
	    function s() {
	      if (a++, o && a >= h.length) {
	        for (var t = 0; t < h.length; t++) {
	          n.appendChild(h[t]);
	        }r && r();
	      }
	    }var o = !1,
	        a = 0,
	        h = [];st(t, e, function (t) {
	      t === e && (o = !0), h.push(t), P(t, i, s);
	    });
	  }function at(t) {
	    return t && 11 === t.nodeType;
	  }function ht(t) {
	    if (t.outerHTML) return t.outerHTML;var e = document.createElement("div");return e.appendChild(t.cloneNode(!0)), e.innerHTML;
	  }function lt(t, e) {
	    var i = t.tagName.toLowerCase(),
	        n = t.hasAttributes();if (jn.test(i) || En.test(i)) {
	      if (n) return ct(t, e);
	    } else {
	      if (gt(e, "components", i)) return { id: i };var r = n && ct(t, e);if (r) return r;
	    }
	  }function ct(t, e) {
	    var i = t.getAttribute("is");if (null != i) {
	      if (gt(e, "components", i)) return t.removeAttribute("is"), { id: i };
	    } else if (i = M(t, "is"), null != i) return { id: i, dynamic: !0 };
	  }function ut(e, n) {
	    var r, s, o;for (r in n) {
	      s = e[r], o = n[r], i(e, r) ? m(s) && m(o) && ut(s, o) : t(e, r, o);
	    }return e;
	  }function ft(t, e) {
	    var i = Object.create(t || null);return e ? v(i, vt(e)) : i;
	  }function pt(t) {
	    if (t.components) for (var e, i = t.components = vt(t.components), n = Object.keys(i), r = 0, s = n.length; s > r; r++) {
	      var o = n[r];jn.test(o) || En.test(o) || (e = i[o], g(e) && (i[o] = wi.extend(e)));
	    }
	  }function dt(t) {
	    var e,
	        i,
	        n = t.props;if (Di(n)) for (t.props = {}, e = n.length; e--;) {
	      i = n[e], "string" == typeof i ? t.props[i] = null : i.name && (t.props[i.name] = i);
	    } else if (g(n)) {
	      var r = Object.keys(n);for (e = r.length; e--;) {
	        i = n[r[e]], "function" == typeof i && (n[r[e]] = { type: i });
	      }
	    }
	  }function vt(t) {
	    if (Di(t)) {
	      for (var e, i = {}, n = t.length; n--;) {
	        e = t[n];var r = "function" == typeof e ? e.options && e.options.name || e.id : e.name || e.id;r && (i[r] = e);
	      }return i;
	    }return t;
	  }function mt(t, e, n) {
	    function r(i) {
	      var r = Sn[i] || Fn;o[i] = r(t[i], e[i], n, i);
	    }pt(e), dt(e);var s,
	        o = {};if (e["extends"] && (t = "function" == typeof e["extends"] ? mt(t, e["extends"].options, n) : mt(t, e["extends"], n)), e.mixins) for (var a = 0, h = e.mixins.length; h > a; a++) {
	      var l = e.mixins[a],
	          c = l.prototype instanceof wi ? l.options : l;t = mt(t, c, n);
	    }for (s in t) {
	      r(s);
	    }for (s in e) {
	      i(t, s) || r(s);
	    }return o;
	  }function gt(t, e, i, n) {
	    if ("string" == typeof i) {
	      var r,
	          s = t[e],
	          o = s[i] || s[r = l(i)] || s[r.charAt(0).toUpperCase() + r.slice(1)];return o;
	    }
	  }function _t() {
	    this.id = Dn++, this.subs = [];
	  }function yt(t) {
	    Hn = !1, t(), Hn = !0;
	  }function bt(t) {
	    if (this.value = t, this.dep = new _t(), _(t, "__ob__", this), Di(t)) {
	      var e = Pi ? wt : Ct;e(t, Rn, Ln), this.observeArray(t);
	    } else this.walk(t);
	  }function wt(t, e) {
	    t.__proto__ = e;
	  }function Ct(t, e, i) {
	    for (var n = 0, r = i.length; r > n; n++) {
	      var s = i[n];_(t, s, e[s]);
	    }
	  }function $t(t, e) {
	    if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
	      var n;return i(t, "__ob__") && t.__ob__ instanceof bt ? n = t.__ob__ : Hn && (Di(t) || g(t)) && Object.isExtensible(t) && !t._isVue && (n = new bt(t)), n && e && n.addVm(e), n;
	    }
	  }function kt(t, e, i) {
	    var n = new _t(),
	        r = Object.getOwnPropertyDescriptor(t, e);if (!r || r.configurable !== !1) {
	      var s = r && r.get,
	          o = r && r.set,
	          a = $t(i);Object.defineProperty(t, e, { enumerable: !0, configurable: !0, get: function get() {
	          var e = s ? s.call(t) : i;if (_t.target && (n.depend(), a && a.dep.depend(), Di(e))) for (var r, o = 0, h = e.length; h > o; o++) {
	            r = e[o], r && r.__ob__ && r.__ob__.dep.depend();
	          }return e;
	        }, set: function set(e) {
	          var r = s ? s.call(t) : i;e !== r && (o ? o.call(t, e) : i = e, a = $t(e), n.notify());
	        } });
	    }
	  }function xt(t) {
	    t.prototype._init = function (t) {
	      t = t || {}, this.$el = null, this.$parent = t.parent, this.$root = this.$parent ? this.$parent.$root : this, this.$children = [], this.$refs = {}, this.$els = {}, this._watchers = [], this._directives = [], this._uid = Mn++, this._isVue = !0, this._events = {}, this._eventsCount = {}, this._isFragment = !1, this._fragment = this._fragmentStart = this._fragmentEnd = null, this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = !1, this._unlinkFn = null, this._context = t._context || this.$parent, this._scope = t._scope, this._frag = t._frag, this._frag && this._frag.children.push(this), this.$parent && this.$parent.$children.push(this), t = this.$options = mt(this.constructor.options, t, this), this._updateRef(), this._data = {}, this._callHook("init"), this._initState(), this._initEvents(), this._callHook("created"), t.el && this.$mount(t.el);
	    };
	  }function At(t) {
	    if (void 0 === t) return "eof";var e = t.charCodeAt(0);switch (e) {case 91:case 93:case 46:case 34:case 39:case 48:
	        return t;case 95:case 36:
	        return "ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:
	        return "ws";}return e >= 97 && 122 >= e || e >= 65 && 90 >= e ? "ident" : e >= 49 && 57 >= e ? "number" : "else";
	  }function Ot(t) {
	    var e = t.trim();return "0" === t.charAt(0) && isNaN(t) ? !1 : n(e) ? h(e) : "*" + e;
	  }function Tt(t) {
	    function e() {
	      var e = t[c + 1];return u === Xn && "'" === e || u === Yn && '"' === e ? (c++, n = "\\" + e, p[Bn](), !0) : void 0;
	    }var i,
	        n,
	        r,
	        s,
	        o,
	        a,
	        h,
	        l = [],
	        c = -1,
	        u = Jn,
	        f = 0,
	        p = [];for (p[Wn] = function () {
	      void 0 !== r && (l.push(r), r = void 0);
	    }, p[Bn] = function () {
	      void 0 === r ? r = n : r += n;
	    }, p[zn] = function () {
	      p[Bn](), f++;
	    }, p[Un] = function () {
	      if (f > 0) f--, u = Zn, p[Bn]();else {
	        if (f = 0, r = Ot(r), r === !1) return !1;p[Wn]();
	      }
	    }; null != u;) {
	      if (c++, i = t[c], "\\" !== i || !e()) {
	        if (s = At(i), h = er[u], o = h[s] || h["else"] || tr, o === tr) return;if (u = o[0], a = p[o[1]], a && (n = o[2], n = void 0 === n ? i : n, a() === !1)) return;if (u === Kn) return l.raw = t, l;
	      }
	    }
	  }function Nt(t) {
	    var e = Vn.get(t);return e || (e = Tt(t), e && Vn.put(t, e)), e;
	  }function jt(t, e) {
	    return It(e).get(t);
	  }function Et(e, i, n) {
	    var r = e;if ("string" == typeof i && (i = Tt(i)), !i || !m(e)) return !1;for (var s, o, a = 0, h = i.length; h > a; a++) {
	      s = e, o = i[a], "*" === o.charAt(0) && (o = It(o.slice(1)).get.call(r, r)), h - 1 > a ? (e = e[o], m(e) || (e = {}, t(s, o, e))) : Di(e) ? e.$set(o, n) : o in e ? e[o] = n : t(e, o, n);
	    }return !0;
	  }function St() {}function Ft(t, e) {
	    var i = vr.length;return vr[i] = e ? t.replace(lr, "\\n") : t, '"' + i + '"';
	  }function Dt(t) {
	    var e = t.charAt(0),
	        i = t.slice(1);return sr.test(i) ? t : (i = i.indexOf('"') > -1 ? i.replace(ur, Pt) : i, e + "scope." + i);
	  }function Pt(t, e) {
	    return vr[e];
	  }function Rt(t) {
	    ar.test(t), vr.length = 0;var e = t.replace(cr, Ft).replace(hr, "");return e = (" " + e).replace(pr, Dt).replace(ur, Pt), Lt(e);
	  }function Lt(t) {
	    try {
	      return new Function("scope", "return " + t + ";");
	    } catch (e) {
	      return St;
	    }
	  }function Ht(t) {
	    var e = Nt(t);return e ? function (t, i) {
	      Et(t, e, i);
	    } : void 0;
	  }function It(t, e) {
	    t = t.trim();var i = nr.get(t);if (i) return e && !i.set && (i.set = Ht(i.exp)), i;var n = { exp: t };return n.get = Mt(t) && t.indexOf("[") < 0 ? Lt("scope." + t) : Rt(t), e && (n.set = Ht(t)), nr.put(t, n), n;
	  }function Mt(t) {
	    return fr.test(t) && !dr.test(t) && "Math." !== t.slice(0, 5);
	  }function Vt() {
	    gr.length = 0, _r.length = 0, yr = {}, br = {}, wr = !1;
	  }function Bt() {
	    for (var t = !0; t;) {
	      t = !1, Wt(gr), Wt(_r), gr.length ? t = !0 : (Li && An.devtools && Li.emit("flush"), Vt());
	    }
	  }function Wt(t) {
	    for (var e = 0; e < t.length; e++) {
	      var i = t[e],
	          n = i.id;yr[n] = null, i.run();
	    }t.length = 0;
	  }function zt(t) {
	    var e = t.id;if (null == yr[e]) {
	      var i = t.user ? _r : gr;yr[e] = i.length, i.push(t), wr || (wr = !0, Yi(Bt));
	    }
	  }function Ut(t, e, i, n) {
	    n && v(this, n);var r = "function" == typeof e;if (this.vm = t, t._watchers.push(this), this.expression = e, this.cb = i, this.id = ++Cr, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Ki(), this.newDepIds = new Ki(), this.prevError = null, r) this.getter = e, this.setter = void 0;else {
	      var s = It(e, this.twoWay);this.getter = s.get, this.setter = s.set;
	    }this.value = this.lazy ? void 0 : this.get(), this.queued = this.shallow = !1;
	  }function Jt(t, e) {
	    var i = void 0,
	        n = void 0;e || (e = $r, e.clear());var r = Di(t),
	        s = m(t);if (r || s) {
	      if (t.__ob__) {
	        var o = t.__ob__.dep.id;if (e.has(o)) return;e.add(o);
	      }if (r) for (i = t.length; i--;) {
	        Jt(t[i], e);
	      } else if (s) for (n = Object.keys(t), i = n.length; i--;) {
	        Jt(t[n[i]], e);
	      }
	    }
	  }function qt(t) {
	    return it(t) && at(t.content);
	  }function Qt(t, e) {
	    var i = e ? t : t.trim(),
	        n = xr.get(i);if (n) return n;var r = document.createDocumentFragment(),
	        s = t.match(Tr),
	        o = Nr.test(t),
	        a = jr.test(t);if (s || o || a) {
	      var h = s && s[1],
	          l = Or[h] || Or.efault,
	          c = l[0],
	          u = l[1],
	          f = l[2],
	          p = document.createElement("div");for (p.innerHTML = u + t + f; c--;) {
	        p = p.lastChild;
	      }for (var d; d = p.firstChild;) {
	        r.appendChild(d);
	      }
	    } else r.appendChild(document.createTextNode(t));return e || tt(r), xr.put(i, r), r;
	  }function Gt(t) {
	    if (qt(t)) return Qt(t.innerHTML);if ("SCRIPT" === t.tagName) return Qt(t.textContent);for (var e, i = Zt(t), n = document.createDocumentFragment(); e = i.firstChild;) {
	      n.appendChild(e);
	    }return tt(n), n;
	  }function Zt(t) {
	    if (!t.querySelectorAll) return t.cloneNode();var e,
	        i,
	        n,
	        r = t.cloneNode(!0);if (Er) {
	      var s = r;if (qt(t) && (t = t.content, s = r.content), i = t.querySelectorAll("template"), i.length) for (n = s.querySelectorAll("template"), e = n.length; e--;) {
	        n[e].parentNode.replaceChild(Zt(i[e]), n[e]);
	      }
	    }if (Sr) if ("TEXTAREA" === t.tagName) r.value = t.value;else if (i = t.querySelectorAll("textarea"), i.length) for (n = r.querySelectorAll("textarea"), e = n.length; e--;) {
	      n[e].value = i[e].value;
	    }return r;
	  }function Xt(t, e, i) {
	    var n, r;return at(t) ? (tt(t), e ? Zt(t) : t) : ("string" == typeof t ? i || "#" !== t.charAt(0) ? r = Qt(t, i) : (r = Ar.get(t), r || (n = document.getElementById(t.slice(1)), n && (r = Gt(n), Ar.put(t, r)))) : t.nodeType && (r = Gt(t)), r && e ? Zt(r) : r);
	  }function Yt(t, e, i, n, r, s) {
	    this.children = [], this.childFrags = [], this.vm = e, this.scope = r, this.inserted = !1, this.parentFrag = s, s && s.childFrags.push(this), this.unlink = t(e, i, n, r, this);var o = this.single = 1 === i.childNodes.length && !i.childNodes[0].__v_anchor;o ? (this.node = i.childNodes[0], this.before = Kt, this.remove = te) : (this.node = nt("fragment-start"), this.end = nt("fragment-end"), this.frag = i, U(this.node, i), i.appendChild(this.end), this.before = ee, this.remove = ie), this.node.__v_frag = this;
	  }function Kt(t, e) {
	    this.inserted = !0;var i = e !== !1 ? D : B;i(this.node, t, this.vm), H(this.node) && this.callHook(ne);
	  }function te() {
	    this.inserted = !1;var t = H(this.node),
	        e = this;this.beforeRemove(), P(this.node, this.vm, function () {
	      t && e.callHook(re), e.destroy();
	    });
	  }function ee(t, e) {
	    this.inserted = !0;var i = this.vm,
	        n = e !== !1 ? D : B;st(this.node, this.end, function (e) {
	      n(e, t, i);
	    }), H(this.node) && this.callHook(ne);
	  }function ie() {
	    this.inserted = !1;var t = this,
	        e = H(this.node);this.beforeRemove(), ot(this.node, this.end, this.vm, this.frag, function () {
	      e && t.callHook(re), t.destroy();
	    });
	  }function ne(t) {
	    !t._isAttached && H(t.$el) && t._callHook("attached");
	  }function re(t) {
	    t._isAttached && !H(t.$el) && t._callHook("detached");
	  }function se(t, e) {
	    this.vm = t;var i,
	        n = "string" == typeof e;n || it(e) && !e.hasAttribute("v-if") ? i = Xt(e, !0) : (i = document.createDocumentFragment(), i.appendChild(e)), this.template = i;var r,
	        s = t.constructor.cid;if (s > 0) {
	      var o = s + (n ? e : ht(e));r = Pr.get(o), r || (r = De(i, t.$options, !0), Pr.put(o, r));
	    } else r = De(i, t.$options, !0);this.linker = r;
	  }function oe(t, e, i) {
	    var n = t.node.previousSibling;if (n) {
	      for (t = n.__v_frag; !(t && t.forId === i && t.inserted || n === e);) {
	        if (n = n.previousSibling, !n) return;t = n.__v_frag;
	      }return t;
	    }
	  }function ae(t) {
	    var e = t.node;if (t.end) for (; !e.__vue__ && e !== t.end && e.nextSibling;) {
	      e = e.nextSibling;
	    }return e.__vue__;
	  }function he(t) {
	    for (var e = -1, i = new Array(Math.floor(t)); ++e < t;) {
	      i[e] = e;
	    }return i;
	  }function le(t, e, i, n) {
	    return n ? "$index" === n ? t : n.charAt(0).match(/\w/) ? jt(i, n) : i[n] : e || i;
	  }function ce(t, e, i) {
	    for (var n, r, s, o = e ? [] : null, a = 0, h = t.options.length; h > a; a++) {
	      if (n = t.options[a], s = i ? n.hasAttribute("selected") : n.selected) {
	        if (r = n.hasOwnProperty("_value") ? n._value : n.value, !e) return r;o.push(r);
	      }
	    }return o;
	  }function ue(t, e) {
	    for (var i = t.length; i--;) {
	      if (C(t[i], e)) return i;
	    }return -1;
	  }function fe(t, e) {
	    var i = e.map(function (t) {
	      var e = t.charCodeAt(0);return e > 47 && 58 > e ? parseInt(t, 10) : 1 === t.length && (e = t.toUpperCase().charCodeAt(0), e > 64 && 91 > e) ? e : is[t];
	    });return i = [].concat.apply([], i), function (e) {
	      return i.indexOf(e.keyCode) > -1 ? t.call(this, e) : void 0;
	    };
	  }function pe(t) {
	    return function (e) {
	      return e.stopPropagation(), t.call(this, e);
	    };
	  }function de(t) {
	    return function (e) {
	      return e.preventDefault(), t.call(this, e);
	    };
	  }function ve(t) {
	    return function (e) {
	      return e.target === e.currentTarget ? t.call(this, e) : void 0;
	    };
	  }function me(t) {
	    if (as[t]) return as[t];var e = ge(t);return as[t] = as[e] = e, e;
	  }function ge(t) {
	    t = u(t);var e = l(t),
	        i = e.charAt(0).toUpperCase() + e.slice(1);hs || (hs = document.createElement("div"));var n,
	        r = rs.length;if ("filter" !== e && e in hs.style) return { kebab: t, camel: e };for (; r--;) {
	      if (n = ss[r] + i, n in hs.style) return { kebab: rs[r] + t, camel: n };
	    }
	  }function _e(t) {
	    var e = [];if (Di(t)) for (var i = 0, n = t.length; n > i; i++) {
	      var r = t[i];if (r) if ("string" == typeof r) e.push(r);else for (var s in r) {
	        r[s] && e.push(s);
	      }
	    } else if (m(t)) for (var o in t) {
	      t[o] && e.push(o);
	    }return e;
	  }function ye(t, e, i) {
	    if (e = e.trim(), -1 === e.indexOf(" ")) return void i(t, e);for (var n = e.split(/\s+/), r = 0, s = n.length; s > r; r++) {
	      i(t, n[r]);
	    }
	  }function be(t, e, i) {
	    function n() {
	      ++s >= r ? i() : t[s].call(e, n);
	    }var r = t.length,
	        s = 0;t[0].call(e, n);
	  }function we(t, e, i) {
	    for (var r, s, o, a, h, c, f, p = [], d = Object.keys(e), v = d.length; v--;) {
	      s = d[v], r = e[s] || ks, h = l(s), xs.test(h) && (f = { name: s, path: h, options: r, mode: $s.ONE_WAY, raw: null }, o = u(s), null === (a = M(t, o)) && (null !== (a = M(t, o + ".sync")) ? f.mode = $s.TWO_WAY : null !== (a = M(t, o + ".once")) && (f.mode = $s.ONE_TIME)), null !== a ? (f.raw = a, c = A(a), a = c.expression, f.filters = c.filters, n(a) && !c.filters ? f.optimizedLiteral = !0 : f.dynamic = !0, f.parentPath = a) : null !== (a = I(t, o)) && (f.raw = a), p.push(f));
	    }return Ce(p);
	  }function Ce(t) {
	    return function (e, n) {
	      e._props = {};for (var r, s, l, c, f, p = e.$options.propsData, d = t.length; d--;) {
	        if (r = t[d], f = r.raw, s = r.path, l = r.options, e._props[s] = r, p && i(p, s) && ke(e, r, p[s]), null === f) ke(e, r, void 0);else if (r.dynamic) r.mode === $s.ONE_TIME ? (c = (n || e._context || e).$get(r.parentPath), ke(e, r, c)) : e._context ? e._bindDir({ name: "prop", def: Os, prop: r }, null, null, n) : ke(e, r, e.$get(r.parentPath));else if (r.optimizedLiteral) {
	          var v = h(f);c = v === f ? a(o(f)) : v, ke(e, r, c);
	        } else c = l.type !== Boolean || "" !== f && f !== u(r.name) ? f : !0, ke(e, r, c);
	      }
	    };
	  }function $e(t, e, i, n) {
	    var r = e.dynamic && Mt(e.parentPath),
	        s = i;void 0 === s && (s = Ae(t, e)), s = Te(e, s, t);var o = s !== i;Oe(e, s, t) || (s = void 0), r && !o ? yt(function () {
	      n(s);
	    }) : n(s);
	  }function ke(t, e, i) {
	    $e(t, e, i, function (i) {
	      kt(t, e.path, i);
	    });
	  }function xe(t, e, i) {
	    $e(t, e, i, function (i) {
	      t[e.path] = i;
	    });
	  }function Ae(t, e) {
	    var n = e.options;if (!i(n, "default")) return n.type === Boolean ? !1 : void 0;var r = n["default"];return m(r), "function" == typeof r && n.type !== Function ? r.call(t) : r;
	  }function Oe(t, e, i) {
	    if (!t.options.required && (null === t.raw || null == e)) return !0;var n = t.options,
	        r = n.type,
	        s = !r,
	        o = [];if (r) {
	      Di(r) || (r = [r]);for (var a = 0; a < r.length && !s; a++) {
	        var h = Ne(e, r[a]);o.push(h.expectedType), s = h.valid;
	      }
	    }if (!s) return !1;var l = n.validator;return !l || l(e);
	  }function Te(t, e, i) {
	    var n = t.options.coerce;return n && "function" == typeof n ? n(e) : e;
	  }function Ne(t, e) {
	    var i, n;return e === String ? (n = "string", i = (typeof t === "undefined" ? "undefined" : _typeof(t)) === n) : e === Number ? (n = "number", i = (typeof t === "undefined" ? "undefined" : _typeof(t)) === n) : e === Boolean ? (n = "boolean", i = (typeof t === "undefined" ? "undefined" : _typeof(t)) === n) : e === Function ? (n = "function", i = (typeof t === "undefined" ? "undefined" : _typeof(t)) === n) : e === Object ? (n = "object", i = g(t)) : e === Array ? (n = "array", i = Di(t)) : i = t instanceof e, { valid: i, expectedType: n };
	  }function je(t) {
	    Ts.push(t), Ns || (Ns = !0, Yi(Ee));
	  }function Ee() {
	    for (var t = document.documentElement.offsetHeight, e = 0; e < Ts.length; e++) {
	      Ts[e]();
	    }return Ts = [], Ns = !1, t;
	  }function Se(t, e, i, n) {
	    this.id = e, this.el = t, this.enterClass = i && i.enterClass || e + "-enter", this.leaveClass = i && i.leaveClass || e + "-leave", this.hooks = i, this.vm = n, this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null, this.justEntered = !1, this.entered = this.left = !1, this.typeCache = {}, this.type = i && i.type;var r = this;["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(function (t) {
	      r[t] = p(r[t], r);
	    });
	  }function Fe(t) {
	    if (/svg$/.test(t.namespaceURI)) {
	      var e = t.getBoundingClientRect();return !(e.width || e.height);
	    }return !(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
	  }function De(t, e, i) {
	    var n = i || !e._asComponent ? Ve(t, e) : null,
	        r = n && n.terminal || ri(t) || !t.hasChildNodes() ? null : qe(t.childNodes, e);return function (t, e, i, s, o) {
	      var a = d(e.childNodes),
	          h = Pe(function () {
	        n && n(t, e, i, s, o), r && r(t, a, i, s, o);
	      }, t);return Le(t, h);
	    };
	  }function Pe(t, e) {
	    e._directives = [];var i = e._directives.length;t();var n = e._directives.slice(i);n.sort(Re);for (var r = 0, s = n.length; s > r; r++) {
	      n[r]._bind();
	    }return n;
	  }function Re(t, e) {
	    return t = t.descriptor.def.priority || zs, e = e.descriptor.def.priority || zs, t > e ? -1 : t === e ? 0 : 1;
	  }function Le(t, e, i, n) {
	    function r(r) {
	      He(t, e, r), i && n && He(i, n);
	    }return r.dirs = e, r;
	  }function He(t, e, i) {
	    for (var n = e.length; n--;) {
	      e[n]._teardown();
	    }
	  }function Ie(t, e, i, n) {
	    var r = we(e, i, t),
	        s = Pe(function () {
	      r(t, n);
	    }, t);return Le(t, s);
	  }function Me(t, e, i) {
	    var n,
	        r,
	        s = e._containerAttrs,
	        o = e._replacerAttrs;return 11 !== t.nodeType && (e._asComponent ? (s && i && (n = ti(s, i)), o && (r = ti(o, e))) : r = ti(t.attributes, e)), e._containerAttrs = e._replacerAttrs = null, function (t, e, i) {
	      var s,
	          o = t._context;o && n && (s = Pe(function () {
	        n(o, e, null, i);
	      }, o));var a = Pe(function () {
	        r && r(t, e);
	      }, t);return Le(t, a, o, s);
	    };
	  }function Ve(t, e) {
	    var i = t.nodeType;return 1 !== i || ri(t) ? 3 === i && t.data.trim() ? We(t, e) : null : Be(t, e);
	  }function Be(t, e) {
	    if ("TEXTAREA" === t.tagName) {
	      var i = N(t.value);i && (t.setAttribute(":value", j(i)), t.value = "");
	    }var n,
	        r = t.hasAttributes(),
	        s = r && d(t.attributes);return r && (n = Xe(t, s, e)), n || (n = Ge(t, e)), n || (n = Ze(t, e)), !n && r && (n = ti(s, e)), n;
	  }function We(t, e) {
	    if (t._skip) return ze;var i = N(t.wholeText);if (!i) return null;for (var n = t.nextSibling; n && 3 === n.nodeType;) {
	      n._skip = !0, n = n.nextSibling;
	    }for (var r, s, o = document.createDocumentFragment(), a = 0, h = i.length; h > a; a++) {
	      s = i[a], r = s.tag ? Ue(s, e) : document.createTextNode(s.value), o.appendChild(r);
	    }return Je(i, o, e);
	  }function ze(t, e) {
	    z(e);
	  }function Ue(t, e) {
	    function i(e) {
	      if (!t.descriptor) {
	        var i = A(t.value);t.descriptor = { name: e, def: bs[e], expression: i.expression, filters: i.filters };
	      }
	    }var n;return t.oneTime ? n = document.createTextNode(t.value) : t.html ? (n = document.createComment("v-html"), i("html")) : (n = document.createTextNode(" "), i("text")), n;
	  }function Je(t, e) {
	    return function (i, n, r, o) {
	      for (var a, h, l, c = e.cloneNode(!0), u = d(c.childNodes), f = 0, p = t.length; p > f; f++) {
	        a = t[f], h = a.value, a.tag && (l = u[f], a.oneTime ? (h = (o || i).$eval(h), a.html ? J(l, Xt(h, !0)) : l.data = s(h)) : i._bindDir(a.descriptor, l, r, o));
	      }J(n, c);
	    };
	  }function qe(t, e) {
	    for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++) {
	      r = t[o], i = Ve(r, e), n = i && i.terminal || "SCRIPT" === r.tagName || !r.hasChildNodes() ? null : qe(r.childNodes, e), s.push(i, n);
	    }return s.length ? Qe(s) : null;
	  }function Qe(t) {
	    return function (e, i, n, r, s) {
	      for (var o, a, h, l = 0, c = 0, u = t.length; u > l; c++) {
	        o = i[c], a = t[l++], h = t[l++];var f = d(o.childNodes);a && a(e, o, n, r, s), h && h(e, f, n, r, s);
	      }
	    };
	  }function Ge(t, e) {
	    var i = t.tagName.toLowerCase();if (!jn.test(i)) {
	      var n = gt(e, "elementDirectives", i);return n ? Ke(t, i, "", e, n) : void 0;
	    }
	  }function Ze(t, e) {
	    var i = lt(t, e);if (i) {
	      var n = rt(t),
	          r = { name: "component", ref: n, expression: i.id, def: Hs.component, modifiers: { literal: !i.dynamic } },
	          s = function s(t, e, i, _s2, o) {
	        n && kt((_s2 || t).$refs, n, null), t._bindDir(r, e, i, _s2, o);
	      };return s.terminal = !0, s;
	    }
	  }function Xe(t, e, i) {
	    if (null !== I(t, "v-pre")) return Ye;if (t.hasAttribute("v-else")) {
	      var n = t.previousElementSibling;if (n && n.hasAttribute("v-if")) return Ye;
	    }for (var r, s, o, a, h, l, c, u, f, p, d = 0, v = e.length; v > d; d++) {
	      r = e[d], s = r.name.replace(Bs, ""), (h = s.match(Vs)) && (f = gt(i, "directives", h[1]), f && f.terminal && (!p || (f.priority || Us) > p.priority) && (p = f, c = r.name, a = ei(r.name), o = r.value, l = h[1], u = h[2]));
	    }return p ? Ke(t, l, o, i, p, c, u, a) : void 0;
	  }function Ye() {}function Ke(t, e, i, n, r, s, o, a) {
	    var h = A(i),
	        l = { name: e, arg: o, expression: h.expression, filters: h.filters, raw: i, attr: s, modifiers: a, def: r };"for" !== e && "router-view" !== e || (l.ref = rt(t));var c = function c(t, e, i, n, r) {
	      l.ref && kt((n || t).$refs, l.ref, null), t._bindDir(l, e, i, n, r);
	    };return c.terminal = !0, c;
	  }function ti(t, e) {
	    function i(t, e, i) {
	      var n = i && ni(i),
	          r = !n && A(s);v.push({ name: t, attr: o, raw: a, def: e, arg: l, modifiers: c, expression: r && r.expression, filters: r && r.filters, interp: i, hasOneTime: n });
	    }for (var n, r, s, o, a, h, l, c, u, f, p, d = t.length, v = []; d--;) {
	      if (n = t[d], r = o = n.name, s = a = n.value, f = N(s), l = null, c = ei(r), r = r.replace(Bs, ""), f) s = j(f), l = r, i("bind", bs.bind, f);else if (Ws.test(r)) c.literal = !Is.test(r), i("transition", Hs.transition);else if (Ms.test(r)) l = r.replace(Ms, ""), i("on", bs.on);else if (Is.test(r)) h = r.replace(Is, ""), "style" === h || "class" === h ? i(h, Hs[h]) : (l = h, i("bind", bs.bind));else if (p = r.match(Vs)) {
	        if (h = p[1], l = p[2], "else" === h) continue;u = gt(e, "directives", h, !0), u && i(h, u);
	      }
	    }return v.length ? ii(v) : void 0;
	  }function ei(t) {
	    var e = Object.create(null),
	        i = t.match(Bs);if (i) for (var n = i.length; n--;) {
	      e[i[n].slice(1)] = !0;
	    }return e;
	  }function ii(t) {
	    return function (e, i, n, r, s) {
	      for (var o = t.length; o--;) {
	        e._bindDir(t[o], i, n, r, s);
	      }
	    };
	  }function ni(t) {
	    for (var e = t.length; e--;) {
	      if (t[e].oneTime) return !0;
	    }
	  }function ri(t) {
	    return "SCRIPT" === t.tagName && (!t.hasAttribute("type") || "text/javascript" === t.getAttribute("type"));
	  }function si(t, e) {
	    return e && (e._containerAttrs = ai(t)), it(t) && (t = Xt(t)), e && (e._asComponent && !e.template && (e.template = "<slot></slot>"), e.template && (e._content = K(t), t = oi(t, e))), at(t) && (U(nt("v-start", !0), t), t.appendChild(nt("v-end", !0))), t;
	  }function oi(t, e) {
	    var i = e.template,
	        n = Xt(i, !0);if (n) {
	      var r = n.firstChild,
	          s = r.tagName && r.tagName.toLowerCase();return e.replace ? (t === document.body, n.childNodes.length > 1 || 1 !== r.nodeType || "component" === s || gt(e, "components", s) || V(r, "is") || gt(e, "elementDirectives", s) || r.hasAttribute("v-for") || r.hasAttribute("v-if") ? n : (e._replacerAttrs = ai(r), hi(t, r), r)) : (t.appendChild(n), t);
	    }
	  }function ai(t) {
	    return 1 === t.nodeType && t.hasAttributes() ? d(t.attributes) : void 0;
	  }function hi(t, e) {
	    for (var i, n, r = t.attributes, s = r.length; s--;) {
	      i = r[s].name, n = r[s].value, e.hasAttribute(i) || Js.test(i) ? "class" === i && !N(n) && (n = n.trim()) && n.split(/\s+/).forEach(function (t) {
	        X(e, t);
	      }) : e.setAttribute(i, n);
	    }
	  }function li(t, e) {
	    if (e) {
	      for (var i, n, r = t._slotContents = Object.create(null), s = 0, o = e.children.length; o > s; s++) {
	        i = e.children[s], (n = i.getAttribute("slot")) && (r[n] || (r[n] = [])).push(i);
	      }for (n in r) {
	        r[n] = ci(r[n], e);
	      }if (e.hasChildNodes()) {
	        var a = e.childNodes;if (1 === a.length && 3 === a[0].nodeType && !a[0].data.trim()) return;r["default"] = ci(e.childNodes, e);
	      }
	    }
	  }function ci(t, e) {
	    var i = document.createDocumentFragment();t = d(t);for (var n = 0, r = t.length; r > n; n++) {
	      var s = t[n];!it(s) || s.hasAttribute("v-if") || s.hasAttribute("v-for") || (e.removeChild(s), s = Xt(s, !0)), i.appendChild(s);
	    }return i;
	  }function ui(t) {
	    function e() {}function n(t, e) {
	      var i = new Ut(e, t, null, { lazy: !0 });return function () {
	        return i.dirty && i.evaluate(), _t.target && i.depend(), i.value;
	      };
	    }Object.defineProperty(t.prototype, "$data", { get: function get() {
	        return this._data;
	      }, set: function set(t) {
	        t !== this._data && this._setData(t);
	      } }), t.prototype._initState = function () {
	      this._initProps(), this._initMeta(), this._initMethods(), this._initData(), this._initComputed();
	    }, t.prototype._initProps = function () {
	      var t = this.$options,
	          e = t.el,
	          i = t.props;e = t.el = L(e), this._propsUnlinkFn = e && 1 === e.nodeType && i ? Ie(this, e, i, this._scope) : null;
	    }, t.prototype._initData = function () {
	      var t = this.$options.data,
	          e = this._data = t ? t() : {};g(e) || (e = {});var n,
	          r,
	          s = this._props,
	          o = Object.keys(e);for (n = o.length; n--;) {
	        r = o[n], s && i(s, r) || this._proxy(r);
	      }$t(e, this);
	    }, t.prototype._setData = function (t) {
	      t = t || {};var e = this._data;this._data = t;var n, r, s;for (n = Object.keys(e), s = n.length; s--;) {
	        r = n[s], r in t || this._unproxy(r);
	      }for (n = Object.keys(t), s = n.length; s--;) {
	        r = n[s], i(this, r) || this._proxy(r);
	      }e.__ob__.removeVm(this), $t(t, this), this._digest();
	    }, t.prototype._proxy = function (t) {
	      if (!r(t)) {
	        var e = this;Object.defineProperty(e, t, { configurable: !0, enumerable: !0, get: function get() {
	            return e._data[t];
	          }, set: function set(i) {
	            e._data[t] = i;
	          } });
	      }
	    }, t.prototype._unproxy = function (t) {
	      r(t) || delete this[t];
	    }, t.prototype._digest = function () {
	      for (var t = 0, e = this._watchers.length; e > t; t++) {
	        this._watchers[t].update(!0);
	      }
	    }, t.prototype._initComputed = function () {
	      var t = this.$options.computed;if (t) for (var i in t) {
	        var r = t[i],
	            s = { enumerable: !0, configurable: !0 };"function" == typeof r ? (s.get = n(r, this), s.set = e) : (s.get = r.get ? r.cache !== !1 ? n(r.get, this) : p(r.get, this) : e, s.set = r.set ? p(r.set, this) : e), Object.defineProperty(this, i, s);
	      }
	    }, t.prototype._initMethods = function () {
	      var t = this.$options.methods;if (t) for (var e in t) {
	        this[e] = p(t[e], this);
	      }
	    }, t.prototype._initMeta = function () {
	      var t = this.$options._meta;if (t) for (var e in t) {
	        kt(this, e, t[e]);
	      }
	    };
	  }function fi(t) {
	    function e(t, e) {
	      for (var i, n, r, s = e.attributes, o = 0, a = s.length; a > o; o++) {
	        i = s[o].name, Qs.test(i) && (i = i.replace(Qs, ""), n = s[o].value, Mt(n) && (n += ".apply(this, $arguments)"), r = (t._scope || t._context).$eval(n, !0), r._fromParent = !0, t.$on(i.replace(Qs), r));
	      }
	    }function i(t, e, i) {
	      if (i) {
	        var r, s, o, a;for (s in i) {
	          if (r = i[s], Di(r)) for (o = 0, a = r.length; a > o; o++) {
	            n(t, e, s, r[o]);
	          } else n(t, e, s, r);
	        }
	      }
	    }function n(t, e, i, r, s) {
	      var o = typeof r === "undefined" ? "undefined" : _typeof(r);if ("function" === o) t[e](i, r, s);else if ("string" === o) {
	        var a = t.$options.methods,
	            h = a && a[r];h && t[e](i, h, s);
	      } else r && "object" === o && n(t, e, i, r.handler, r);
	    }function r() {
	      this._isAttached || (this._isAttached = !0, this.$children.forEach(s));
	    }function s(t) {
	      !t._isAttached && H(t.$el) && t._callHook("attached");
	    }function o() {
	      this._isAttached && (this._isAttached = !1, this.$children.forEach(a));
	    }function a(t) {
	      t._isAttached && !H(t.$el) && t._callHook("detached");
	    }t.prototype._initEvents = function () {
	      var t = this.$options;t._asComponent && e(this, t.el), i(this, "$on", t.events), i(this, "$watch", t.watch);
	    }, t.prototype._initDOMHooks = function () {
	      this.$on("hook:attached", r), this.$on("hook:detached", o);
	    }, t.prototype._callHook = function (t) {
	      this.$emit("pre-hook:" + t);var e = this.$options[t];if (e) for (var i = 0, n = e.length; n > i; i++) {
	        e[i].call(this);
	      }this.$emit("hook:" + t);
	    };
	  }function pi() {}function di(t, e, i, n, r, s) {
	    this.vm = e, this.el = i, this.descriptor = t, this.name = t.name, this.expression = t.expression, this.arg = t.arg, this.modifiers = t.modifiers, this.filters = t.filters, this.literal = this.modifiers && this.modifiers.literal, this._locked = !1, this._bound = !1, this._listeners = null, this._host = n, this._scope = r, this._frag = s;
	  }function vi(t) {
	    t.prototype._updateRef = function (t) {
	      var e = this.$options._ref;if (e) {
	        var i = (this._scope || this._context).$refs;t ? i[e] === this && (i[e] = null) : i[e] = this;
	      }
	    }, t.prototype._compile = function (t) {
	      var e = this.$options,
	          i = t;if (t = si(t, e), this._initElement(t), 1 !== t.nodeType || null === I(t, "v-pre")) {
	        var n = this._context && this._context.$options,
	            r = Me(t, e, n);li(this, e._content);var s,
	            o = this.constructor;e._linkerCachable && (s = o.linker, s || (s = o.linker = De(t, e)));var a = r(this, t, this._scope),
	            h = s ? s(this, t) : De(t, e)(this, t);this._unlinkFn = function () {
	          a(), h(!0);
	        }, e.replace && J(i, t), this._isCompiled = !0, this._callHook("compiled");
	      }
	    }, t.prototype._initElement = function (t) {
	      at(t) ? (this._isFragment = !0, this.$el = this._fragmentStart = t.firstChild, this._fragmentEnd = t.lastChild, 3 === this._fragmentStart.nodeType && (this._fragmentStart.data = this._fragmentEnd.data = ""), this._fragment = t) : this.$el = t, this.$el.__vue__ = this, this._callHook("beforeCompile");
	    }, t.prototype._bindDir = function (t, e, i, n, r) {
	      this._directives.push(new di(t, this, e, i, n, r));
	    }, t.prototype._destroy = function (t, e) {
	      if (this._isBeingDestroyed) return void (e || this._cleanup());var i,
	          n,
	          r = this,
	          s = function s() {
	        !i || n || e || r._cleanup();
	      };t && this.$el && (n = !0, this.$remove(function () {
	        n = !1, s();
	      })), this._callHook("beforeDestroy"), this._isBeingDestroyed = !0;var o,
	          a = this.$parent;for (a && !a._isBeingDestroyed && (a.$children.$remove(this), this._updateRef(!0)), o = this.$children.length; o--;) {
	        this.$children[o].$destroy();
	      }for (this._propsUnlinkFn && this._propsUnlinkFn(), this._unlinkFn && this._unlinkFn(), o = this._watchers.length; o--;) {
	        this._watchers[o].teardown();
	      }this.$el && (this.$el.__vue__ = null), i = !0, s();
	    }, t.prototype._cleanup = function () {
	      this._isDestroyed || (this._frag && this._frag.children.$remove(this), this._data && this._data.__ob__ && this._data.__ob__.removeVm(this), this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null, this._isDestroyed = !0, this._callHook("destroyed"), this.$off());
	    };
	  }function mi(t) {
	    t.prototype._applyFilters = function (t, e, i, n) {
	      var r, s, o, a, h, l, c, u, f;for (l = 0, c = i.length; c > l; l++) {
	        if (r = i[n ? c - l - 1 : l], s = gt(this.$options, "filters", r.name, !0), s && (s = n ? s.write : s.read || s, "function" == typeof s)) {
	          if (o = n ? [t, e] : [t], h = n ? 2 : 1, r.args) for (u = 0, f = r.args.length; f > u; u++) {
	            a = r.args[u], o[u + h] = a.dynamic ? this.$get(a.value) : a.value;
	          }t = s.apply(this, o);
	        }
	      }return t;
	    }, t.prototype._resolveComponent = function (e, i) {
	      var n;if (n = "function" == typeof e ? e : gt(this.$options, "components", e, !0)) if (n.options) i(n);else if (n.resolved) i(n.resolved);else if (n.requested) n.pendingCallbacks.push(i);else {
	        n.requested = !0;var r = n.pendingCallbacks = [i];n.call(this, function (e) {
	          g(e) && (e = t.extend(e)), n.resolved = e;for (var i = 0, s = r.length; s > i; i++) {
	            r[i](e);
	          }
	        }, function (t) {});
	      }
	    };
	  }function gi(t) {
	    function i(t) {
	      return JSON.parse(JSON.stringify(t));
	    }t.prototype.$get = function (t, e) {
	      var i = It(t);if (i) {
	        if (e) {
	          var n = this;return function () {
	            n.$arguments = d(arguments);var t = i.get.call(n, n);return n.$arguments = null, t;
	          };
	        }try {
	          return i.get.call(this, this);
	        } catch (r) {}
	      }
	    }, t.prototype.$set = function (t, e) {
	      var i = It(t, !0);i && i.set && i.set.call(this, this, e);
	    }, t.prototype.$delete = function (t) {
	      e(this._data, t);
	    }, t.prototype.$watch = function (t, e, i) {
	      var n,
	          r = this;"string" == typeof t && (n = A(t), t = n.expression);var s = new Ut(r, t, e, { deep: i && i.deep, sync: i && i.sync, filters: n && n.filters, user: !i || i.user !== !1 });return i && i.immediate && e.call(r, s.value), function () {
	        s.teardown();
	      };
	    }, t.prototype.$eval = function (t, e) {
	      if (Gs.test(t)) {
	        var i = A(t),
	            n = this.$get(i.expression, e);return i.filters ? this._applyFilters(n, null, i.filters) : n;
	      }return this.$get(t, e);
	    }, t.prototype.$interpolate = function (t) {
	      var e = N(t),
	          i = this;return e ? 1 === e.length ? i.$eval(e[0].value) + "" : e.map(function (t) {
	        return t.tag ? i.$eval(t.value) : t.value;
	      }).join("") : t;
	    }, t.prototype.$log = function (t) {
	      var e = t ? jt(this._data, t) : this._data;if (e && (e = i(e)), !t) {
	        var n;for (n in this.$options.computed) {
	          e[n] = i(this[n]);
	        }if (this._props) for (n in this._props) {
	          e[n] = i(this[n]);
	        }
	      }console.log(e);
	    };
	  }function _i(t) {
	    function e(t, e, n, r, s, o) {
	      e = i(e);var a = !H(e),
	          h = r === !1 || a ? s : o,
	          l = !a && !t._isAttached && !H(t.$el);return t._isFragment ? (st(t._fragmentStart, t._fragmentEnd, function (i) {
	        h(i, e, t);
	      }), n && n()) : h(t.$el, e, t, n), l && t._callHook("attached"), t;
	    }function i(t) {
	      return "string" == typeof t ? document.querySelector(t) : t;
	    }function n(t, e, i, n) {
	      e.appendChild(t), n && n();
	    }function r(t, e, i, n) {
	      B(t, e), n && n();
	    }function s(t, e, i) {
	      z(t), i && i();
	    }t.prototype.$nextTick = function (t) {
	      Yi(t, this);
	    }, t.prototype.$appendTo = function (t, i, r) {
	      return e(this, t, i, r, n, F);
	    }, t.prototype.$prependTo = function (t, e, n) {
	      return t = i(t), t.hasChildNodes() ? this.$before(t.firstChild, e, n) : this.$appendTo(t, e, n), this;
	    }, t.prototype.$before = function (t, i, n) {
	      return e(this, t, i, n, r, D);
	    }, t.prototype.$after = function (t, e, n) {
	      return t = i(t), t.nextSibling ? this.$before(t.nextSibling, e, n) : this.$appendTo(t.parentNode, e, n), this;
	    }, t.prototype.$remove = function (t, e) {
	      if (!this.$el.parentNode) return t && t();var i = this._isAttached && H(this.$el);i || (e = !1);var n = this,
	          r = function r() {
	        i && n._callHook("detached"), t && t();
	      };if (this._isFragment) ot(this._fragmentStart, this._fragmentEnd, this, this._fragment, r);else {
	        var o = e === !1 ? s : P;o(this.$el, this, r);
	      }return this;
	    };
	  }function yi(t) {
	    function e(t, e, n) {
	      var r = t.$parent;if (r && n && !i.test(e)) for (; r;) {
	        r._eventsCount[e] = (r._eventsCount[e] || 0) + n, r = r.$parent;
	      }
	    }t.prototype.$on = function (t, i) {
	      return (this._events[t] || (this._events[t] = [])).push(i), e(this, t, 1), this;
	    }, t.prototype.$once = function (t, e) {
	      function i() {
	        n.$off(t, i), e.apply(this, arguments);
	      }var n = this;return i.fn = e, this.$on(t, i), this;
	    }, t.prototype.$off = function (t, i) {
	      var n;if (!arguments.length) {
	        if (this.$parent) for (t in this._events) {
	          n = this._events[t], n && e(this, t, -n.length);
	        }return this._events = {}, this;
	      }if (n = this._events[t], !n) return this;if (1 === arguments.length) return e(this, t, -n.length), this._events[t] = null, this;for (var r, s = n.length; s--;) {
	        if (r = n[s], r === i || r.fn === i) {
	          e(this, t, -1), n.splice(s, 1);break;
	        }
	      }return this;
	    }, t.prototype.$emit = function (t) {
	      var e = "string" == typeof t;t = e ? t : t.name;var i = this._events[t],
	          n = e || !i;if (i) {
	        i = i.length > 1 ? d(i) : i;var r = e && i.some(function (t) {
	          return t._fromParent;
	        });r && (n = !1);for (var s = d(arguments, 1), o = 0, a = i.length; a > o; o++) {
	          var h = i[o],
	              l = h.apply(this, s);l !== !0 || r && !h._fromParent || (n = !0);
	        }
	      }return n;
	    }, t.prototype.$broadcast = function (t) {
	      var e = "string" == typeof t;if (t = e ? t : t.name, this._eventsCount[t]) {
	        var i = this.$children,
	            n = d(arguments);e && (n[0] = { name: t, source: this });for (var r = 0, s = i.length; s > r; r++) {
	          var o = i[r],
	              a = o.$emit.apply(o, n);a && o.$broadcast.apply(o, n);
	        }return this;
	      }
	    }, t.prototype.$dispatch = function (t) {
	      var e = this.$emit.apply(this, arguments);if (e) {
	        var i = this.$parent,
	            n = d(arguments);for (n[0] = { name: t, source: this }; i;) {
	          e = i.$emit.apply(i, n), i = e ? i.$parent : null;
	        }return this;
	      }
	    };var i = /^hook:/;
	  }function bi(t) {
	    function e() {
	      this._isAttached = !0, this._isReady = !0, this._callHook("ready");
	    }t.prototype.$mount = function (t) {
	      return this._isCompiled ? void 0 : (t = L(t), t || (t = document.createElement("div")), this._compile(t), this._initDOMHooks(), H(this.$el) ? (this._callHook("attached"), e.call(this)) : this.$once("hook:attached", e), this);
	    }, t.prototype.$destroy = function (t, e) {
	      this._destroy(t, e);
	    }, t.prototype.$compile = function (t, e, i, n) {
	      return De(t, this.$options, !0)(this, t, e, i, n);
	    };
	  }function wi(t) {
	    this._init(t);
	  }function Ci(t, e, i) {
	    return i = i ? parseInt(i, 10) : 0, e = o(e), "number" == typeof e ? t.slice(i, i + e) : t;
	  }function $i(t, e, i) {
	    if (t = Ks(t), null == e) return t;if ("function" == typeof e) return t.filter(e);e = ("" + e).toLowerCase();for (var n, r, s, o, a = "in" === i ? 3 : 2, h = Array.prototype.concat.apply([], d(arguments, a)), l = [], c = 0, u = t.length; u > c; c++) {
	      if (n = t[c], s = n && n.$value || n, o = h.length) {
	        for (; o--;) {
	          if (r = h[o], "$key" === r && xi(n.$key, e) || xi(jt(s, r), e)) {
	            l.push(n);break;
	          }
	        }
	      } else xi(n, e) && l.push(n);
	    }return l;
	  }function ki(t) {
	    function e(t, e, i) {
	      var r = n[i];return r && ("$key" !== r && (m(t) && "$value" in t && (t = t.$value), m(e) && "$value" in e && (e = e.$value)), t = m(t) ? jt(t, r) : t, e = m(e) ? jt(e, r) : e), t === e ? 0 : t > e ? s : -s;
	    }var _i2 = null,
	        n = void 0;t = Ks(t);var r = d(arguments, 1),
	        s = r[r.length - 1];"number" == typeof s ? (s = 0 > s ? -1 : 1, r = r.length > 1 ? r.slice(0, -1) : r) : s = 1;var o = r[0];return o ? ("function" == typeof o ? _i2 = function i(t, e) {
	      return o(t, e) * s;
	    } : (n = Array.prototype.concat.apply([], r), _i2 = function i(t, r, s) {
	      return s = s || 0, s >= n.length - 1 ? e(t, r, s) : e(t, r, s) || _i2(t, r, s + 1);
	    }), t.slice().sort(_i2)) : t;
	  }function xi(t, e) {
	    var i;if (g(t)) {
	      var n = Object.keys(t);for (i = n.length; i--;) {
	        if (xi(t[n[i]], e)) return !0;
	      }
	    } else if (Di(t)) {
	      for (i = t.length; i--;) {
	        if (xi(t[i], e)) return !0;
	      }
	    } else if (null != t) return t.toString().toLowerCase().indexOf(e) > -1;
	  }function Ai(i) {
	    function n(t) {
	      return new Function("return function " + f(t) + " (options) { this._init(options) }")();
	    }i.options = { directives: bs, elementDirectives: Ys, filters: eo, transitions: {}, components: {}, partials: {}, replace: !0 }, i.util = In, i.config = An, i.set = t, i["delete"] = e, i.nextTick = Yi, i.compiler = qs, i.FragmentFactory = se, i.internalDirectives = Hs, i.parsers = { path: ir, text: $n, template: Fr, directive: gn, expression: mr }, i.cid = 0;var r = 1;i.extend = function (t) {
	      t = t || {};var e = this,
	          i = 0 === e.cid;if (i && t._Ctor) return t._Ctor;var s = t.name || e.options.name,
	          o = n(s || "VueComponent");return o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.cid = r++, o.options = mt(e.options, t), o["super"] = e, o.extend = e.extend, An._assetTypes.forEach(function (t) {
	        o[t] = e[t];
	      }), s && (o.options.components[s] = o), i && (t._Ctor = o), o;
	    }, i.use = function (t) {
	      if (!t.installed) {
	        var e = d(arguments, 1);return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : t.apply(null, e), t.installed = !0, this;
	      }
	    }, i.mixin = function (t) {
	      i.options = mt(i.options, t);
	    }, An._assetTypes.forEach(function (t) {
	      i[t] = function (e, n) {
	        return n ? ("component" === t && g(n) && (n.name || (n.name = e), n = i.extend(n)), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
	      };
	    }), v(i.transition, Tn);
	  }var Oi = Object.prototype.hasOwnProperty,
	      Ti = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,
	      Ni = /-(\w)/g,
	      ji = /([a-z\d])([A-Z])/g,
	      Ei = /(?:^|[-_\/])(\w)/g,
	      Si = Object.prototype.toString,
	      Fi = "[object Object]",
	      Di = Array.isArray,
	      Pi = "__proto__" in {},
	      Ri = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window),
	      Li = Ri && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
	      Hi = Ri && window.navigator.userAgent.toLowerCase(),
	      Ii = Hi && Hi.indexOf("trident") > 0,
	      Mi = Hi && Hi.indexOf("msie 9.0") > 0,
	      Vi = Hi && Hi.indexOf("android") > 0,
	      Bi = Hi && /(iphone|ipad|ipod|ios)/i.test(Hi),
	      Wi = Bi && Hi.match(/os ([\d_]+)/),
	      zi = Wi && Wi[1].split("_"),
	      Ui = zi && Number(zi[0]) >= 9 && Number(zi[1]) >= 3 && !window.indexedDB,
	      Ji = void 0,
	      qi = void 0,
	      Qi = void 0,
	      Gi = void 0;if (Ri && !Mi) {
	    var Zi = void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend,
	        Xi = void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend;Ji = Zi ? "WebkitTransition" : "transition", qi = Zi ? "webkitTransitionEnd" : "transitionend", Qi = Xi ? "WebkitAnimation" : "animation", Gi = Xi ? "webkitAnimationEnd" : "animationend";
	  }var Yi = function () {
	    function t() {
	      n = !1;var t = i.slice(0);i = [];for (var e = 0; e < t.length; e++) {
	        t[e]();
	      }
	    }var e,
	        i = [],
	        n = !1;if ("undefined" == typeof MutationObserver || Ui) {
	      var r = Ri ? window : "undefined" != typeof global ? global : {};e = r.setImmediate || setTimeout;
	    } else {
	      var s = 1,
	          o = new MutationObserver(t),
	          a = document.createTextNode(s);o.observe(a, { characterData: !0 }), e = function e() {
	        s = (s + 1) % 2, a.data = s;
	      };
	    }return function (r, s) {
	      var o = s ? function () {
	        r.call(s);
	      } : r;i.push(o), n || (n = !0, e(t, 0));
	    };
	  }(),
	      Ki = void 0;"undefined" != typeof Set && Set.toString().match(/native code/) ? Ki = Set : (Ki = function Ki() {
	    this.set = Object.create(null);
	  }, Ki.prototype.has = function (t) {
	    return void 0 !== this.set[t];
	  }, Ki.prototype.add = function (t) {
	    this.set[t] = 1;
	  }, Ki.prototype.clear = function () {
	    this.set = Object.create(null);
	  });var tn = $.prototype;tn.put = function (t, e) {
	    var i,
	        n = this.get(t, !0);return n || (this.size === this.limit && (i = this.shift()), n = { key: t }, this._keymap[t] = n, this.tail ? (this.tail.newer = n, n.older = this.tail) : this.head = n, this.tail = n, this.size++), n.value = e, i;
	  }, tn.shift = function () {
	    var t = this.head;return t && (this.head = this.head.newer, this.head.older = void 0, t.newer = t.older = void 0, this._keymap[t.key] = void 0, this.size--), t;
	  }, tn.get = function (t, e) {
	    var i = this._keymap[t];if (void 0 !== i) return i === this.tail ? e ? i : i.value : (i.newer && (i === this.head && (this.head = i.newer), i.newer.older = i.older), i.older && (i.older.newer = i.newer), i.newer = void 0, i.older = this.tail, this.tail && (this.tail.newer = i), this.tail = i, e ? i : i.value);
	  };var en,
	      nn,
	      rn,
	      sn,
	      on,
	      an,
	      hn,
	      ln,
	      cn,
	      un,
	      fn,
	      pn,
	      dn = new $(1e3),
	      vn = /[^\s'"]+|'[^']*'|"[^"]*"/g,
	      mn = /^in$|^-?\d+/,
	      gn = Object.freeze({ parseDirective: A }),
	      _n = /[-.*+?^${}()|[\]\/\\]/g,
	      yn = void 0,
	      bn = void 0,
	      wn = void 0,
	      Cn = /[^|]\|[^|]/,
	      $n = Object.freeze({ compileRegex: T, parseText: N, tokensToExp: j }),
	      kn = ["{{", "}}"],
	      xn = ["{{{", "}}}"],
	      An = Object.defineProperties({ debug: !1, silent: !1, async: !0, warnExpressionErrors: !0, devtools: !1, _delimitersChanged: !0, _assetTypes: ["component", "directive", "elementDirective", "filter", "transition", "partial"], _propBindingModes: { ONE_WAY: 0, TWO_WAY: 1, ONE_TIME: 2 }, _maxUpdateCount: 100 }, { delimiters: { get: function get() {
	        return kn;
	      }, set: function set(t) {
	        kn = t, T();
	      }, configurable: !0, enumerable: !0 }, unsafeDelimiters: { get: function get() {
	        return xn;
	      }, set: function set(t) {
	        xn = t, T();
	      }, configurable: !0, enumerable: !0 } }),
	      On = void 0,
	      Tn = Object.freeze({ appendWithTransition: F, beforeWithTransition: D, removeWithTransition: P, applyTransition: R }),
	      Nn = /^v-ref:/,
	      jn = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,
	      En = /^(slot|partial|component)$/i,
	      Sn = An.optionMergeStrategies = Object.create(null);Sn.data = function (t, e, i) {
	    return i ? t || e ? function () {
	      var n = "function" == typeof e ? e.call(i) : e,
	          r = "function" == typeof t ? t.call(i) : void 0;return n ? ut(n, r) : r;
	    } : void 0 : e ? "function" != typeof e ? t : t ? function () {
	      return ut(e.call(this), t.call(this));
	    } : e : t;
	  }, Sn.el = function (t, e, i) {
	    if (i || !e || "function" == typeof e) {
	      var n = e || t;return i && "function" == typeof n ? n.call(i) : n;
	    }
	  }, Sn.init = Sn.created = Sn.ready = Sn.attached = Sn.detached = Sn.beforeCompile = Sn.compiled = Sn.beforeDestroy = Sn.destroyed = Sn.activate = function (t, e) {
	    return e ? t ? t.concat(e) : Di(e) ? e : [e] : t;
	  }, An._assetTypes.forEach(function (t) {
	    Sn[t + "s"] = ft;
	  }), Sn.watch = Sn.events = function (t, e) {
	    if (!e) return t;if (!t) return e;var i = {};v(i, t);for (var n in e) {
	      var r = i[n],
	          s = e[n];r && !Di(r) && (r = [r]), i[n] = r ? r.concat(s) : [s];
	    }return i;
	  }, Sn.props = Sn.methods = Sn.computed = function (t, e) {
	    if (!e) return t;if (!t) return e;var i = Object.create(null);return v(i, t), v(i, e), i;
	  };var Fn = function Fn(t, e) {
	    return void 0 === e ? t : e;
	  },
	      Dn = 0;_t.target = null, _t.prototype.addSub = function (t) {
	    this.subs.push(t);
	  }, _t.prototype.removeSub = function (t) {
	    this.subs.$remove(t);
	  }, _t.prototype.depend = function () {
	    _t.target.addDep(this);
	  }, _t.prototype.notify = function () {
	    for (var t = d(this.subs), e = 0, i = t.length; i > e; e++) {
	      t[e].update();
	    }
	  };var Pn = Array.prototype,
	      Rn = Object.create(Pn);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
	    var e = Pn[t];_(Rn, t, function () {
	      for (var i = arguments.length, n = new Array(i); i--;) {
	        n[i] = arguments[i];
	      }var r,
	          s = e.apply(this, n),
	          o = this.__ob__;switch (t) {case "push":
	          r = n;break;case "unshift":
	          r = n;break;case "splice":
	          r = n.slice(2);}return r && o.observeArray(r), o.dep.notify(), s;
	    });
	  }), _(Pn, "$set", function (t, e) {
	    return t >= this.length && (this.length = Number(t) + 1), this.splice(t, 1, e)[0];
	  }), _(Pn, "$remove", function (t) {
	    if (this.length) {
	      var e = b(this, t);return e > -1 ? this.splice(e, 1) : void 0;
	    }
	  });var Ln = Object.getOwnPropertyNames(Rn),
	      Hn = !0;bt.prototype.walk = function (t) {
	    for (var e = Object.keys(t), i = 0, n = e.length; n > i; i++) {
	      this.convert(e[i], t[e[i]]);
	    }
	  }, bt.prototype.observeArray = function (t) {
	    for (var e = 0, i = t.length; i > e; e++) {
	      $t(t[e]);
	    }
	  }, bt.prototype.convert = function (t, e) {
	    kt(this.value, t, e);
	  }, bt.prototype.addVm = function (t) {
	    (this.vms || (this.vms = [])).push(t);
	  }, bt.prototype.removeVm = function (t) {
	    this.vms.$remove(t);
	  };var In = Object.freeze({ defineReactive: kt, set: t, del: e, hasOwn: i, isLiteral: n, isReserved: r, _toString: s, toNumber: o, toBoolean: a, stripQuotes: h, camelize: l, hyphenate: u, classify: f, bind: p, toArray: d, extend: v, isObject: m, isPlainObject: g, def: _, debounce: y, indexOf: b, cancellable: w, looseEqual: C, isArray: Di, hasProto: Pi, inBrowser: Ri, devtools: Li, isIE: Ii, isIE9: Mi, isAndroid: Vi, isIos: Bi, iosVersionMatch: Wi, iosVersion: zi, hasMutationObserverBug: Ui, get transitionProp() {
	      return Ji;
	    }, get transitionEndEvent() {
	      return qi;
	    }, get animationProp() {
	      return Qi;
	    }, get animationEndEvent() {
	      return Gi;
	    }, nextTick: Yi, get _Set() {
	      return Ki;
	    }, query: L, inDoc: H, getAttr: I, getBindAttr: M, hasBindAttr: V, before: B, after: W, remove: z, prepend: U, replace: J, on: q, off: Q, setClass: Z, addClass: X, removeClass: Y, extractContent: K, trimNode: tt, isTemplate: it, createAnchor: nt, findRef: rt, mapNodeRange: st, removeNodeRange: ot, isFragment: at, getOuterHTML: ht, mergeOptions: mt, resolveAsset: gt, checkComponentAttr: lt, commonTagRE: jn, reservedTagRE: En, warn: On }),
	      Mn = 0,
	      Vn = new $(1e3),
	      Bn = 0,
	      Wn = 1,
	      zn = 2,
	      Un = 3,
	      Jn = 0,
	      qn = 1,
	      Qn = 2,
	      Gn = 3,
	      Zn = 4,
	      Xn = 5,
	      Yn = 6,
	      Kn = 7,
	      tr = 8,
	      er = [];er[Jn] = { ws: [Jn], ident: [Gn, Bn], "[": [Zn], eof: [Kn] }, er[qn] = { ws: [qn], ".": [Qn], "[": [Zn], eof: [Kn] }, er[Qn] = { ws: [Qn], ident: [Gn, Bn] }, er[Gn] = { ident: [Gn, Bn], 0: [Gn, Bn], number: [Gn, Bn], ws: [qn, Wn], ".": [Qn, Wn], "[": [Zn, Wn], eof: [Kn, Wn] }, er[Zn] = { "'": [Xn, Bn], '"': [Yn, Bn], "[": [Zn, zn], "]": [qn, Un], eof: tr, "else": [Zn, Bn] }, er[Xn] = { "'": [Zn, Bn], eof: tr, "else": [Xn, Bn] }, er[Yn] = { '"': [Zn, Bn], eof: tr, "else": [Yn, Bn] };var ir = Object.freeze({ parsePath: Nt, getPath: jt, setPath: Et }),
	      nr = new $(1e3),
	      rr = "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",
	      sr = new RegExp("^(" + rr.replace(/,/g, "\\b|") + "\\b)"),
	      or = "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",
	      ar = new RegExp("^(" + or.replace(/,/g, "\\b|") + "\\b)"),
	      hr = /\s/g,
	      lr = /\n/g,
	      cr = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,
	      ur = /"(\d+)"/g,
	      fr = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
	      pr = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g,
	      dr = /^(?:true|false|null|undefined|Infinity|NaN)$/,
	      vr = [],
	      mr = Object.freeze({ parseExpression: It, isSimplePath: Mt }),
	      gr = [],
	      _r = [],
	      yr = {},
	      br = {},
	      wr = !1,
	      Cr = 0;Ut.prototype.get = function () {
	    this.beforeGet();var t,
	        e = this.scope || this.vm;try {
	      t = this.getter.call(e, e);
	    } catch (i) {}return this.deep && Jt(t), this.preProcess && (t = this.preProcess(t)), this.filters && (t = e._applyFilters(t, null, this.filters, !1)), this.postProcess && (t = this.postProcess(t)), this.afterGet(), t;
	  }, Ut.prototype.set = function (t) {
	    var e = this.scope || this.vm;this.filters && (t = e._applyFilters(t, this.value, this.filters, !0));try {
	      this.setter.call(e, e, t);
	    } catch (i) {}var n = e.$forContext;if (n && n.alias === this.expression) {
	      if (n.filters) return;n._withLock(function () {
	        e.$key ? n.rawValue[e.$key] = t : n.rawValue.$set(e.$index, t);
	      });
	    }
	  }, Ut.prototype.beforeGet = function () {
	    _t.target = this;
	  }, Ut.prototype.addDep = function (t) {
	    var e = t.id;this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
	  }, Ut.prototype.afterGet = function () {
	    _t.target = null;for (var t = this.deps.length; t--;) {
	      var e = this.deps[t];this.newDepIds.has(e.id) || e.removeSub(this);
	    }var i = this.depIds;this.depIds = this.newDepIds, this.newDepIds = i, this.newDepIds.clear(), i = this.deps, this.deps = this.newDeps, this.newDeps = i, this.newDeps.length = 0;
	  }, Ut.prototype.update = function (t) {
	    this.lazy ? this.dirty = !0 : this.sync || !An.async ? this.run() : (this.shallow = this.queued ? t ? this.shallow : !1 : !!t, this.queued = !0, zt(this));
	  }, Ut.prototype.run = function () {
	    if (this.active) {
	      var t = this.get();if (t !== this.value || (m(t) || this.deep) && !this.shallow) {
	        var e = this.value;this.value = t;this.prevError;this.cb.call(this.vm, t, e);
	      }this.queued = this.shallow = !1;
	    }
	  }, Ut.prototype.evaluate = function () {
	    var t = _t.target;this.value = this.get(), this.dirty = !1, _t.target = t;
	  }, Ut.prototype.depend = function () {
	    for (var t = this.deps.length; t--;) {
	      this.deps[t].depend();
	    }
	  }, Ut.prototype.teardown = function () {
	    if (this.active) {
	      this.vm._isBeingDestroyed || this.vm._vForRemoving || this.vm._watchers.$remove(this);for (var t = this.deps.length; t--;) {
	        this.deps[t].removeSub(this);
	      }this.active = !1, this.vm = this.cb = this.value = null;
	    }
	  };var $r = new Ki(),
	      kr = { bind: function bind() {
	      this.attr = 3 === this.el.nodeType ? "data" : "textContent";
	    }, update: function update(t) {
	      this.el[this.attr] = s(t);
	    } },
	      xr = new $(1e3),
	      Ar = new $(1e3),
	      Or = { efault: [0, "", ""], legend: [1, "<fieldset>", "</fieldset>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] };Or.td = Or.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], Or.option = Or.optgroup = [1, '<select multiple="multiple">', "</select>"], Or.thead = Or.tbody = Or.colgroup = Or.caption = Or.tfoot = [1, "<table>", "</table>"], Or.g = Or.defs = Or.symbol = Or.use = Or.image = Or.text = Or.circle = Or.ellipse = Or.line = Or.path = Or.polygon = Or.polyline = Or.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">', "</svg>"];var Tr = /<([\w:-]+)/,
	      Nr = /&#?\w+?;/,
	      jr = /<!--/,
	      Er = function () {
	    if (Ri) {
	      var t = document.createElement("div");return t.innerHTML = "<template>1</template>", !t.cloneNode(!0).firstChild.innerHTML;
	    }return !1;
	  }(),
	      Sr = function () {
	    if (Ri) {
	      var t = document.createElement("textarea");return t.placeholder = "t", "t" === t.cloneNode(!0).value;
	    }return !1;
	  }(),
	      Fr = Object.freeze({ cloneNode: Zt, parseTemplate: Xt }),
	      Dr = { bind: function bind() {
	      8 === this.el.nodeType && (this.nodes = [], this.anchor = nt("v-html"), J(this.el, this.anchor));
	    }, update: function update(t) {
	      t = s(t), this.nodes ? this.swap(t) : this.el.innerHTML = t;
	    }, swap: function swap(t) {
	      for (var e = this.nodes.length; e--;) {
	        z(this.nodes[e]);
	      }var i = Xt(t, !0, !0);this.nodes = d(i.childNodes), B(i, this.anchor);
	    } };Yt.prototype.callHook = function (t) {
	    var e, i;for (e = 0, i = this.childFrags.length; i > e; e++) {
	      this.childFrags[e].callHook(t);
	    }for (e = 0, i = this.children.length; i > e; e++) {
	      t(this.children[e]);
	    }
	  }, Yt.prototype.beforeRemove = function () {
	    var t, e;for (t = 0, e = this.childFrags.length; e > t; t++) {
	      this.childFrags[t].beforeRemove(!1);
	    }for (t = 0, e = this.children.length; e > t; t++) {
	      this.children[t].$destroy(!1, !0);
	    }var i = this.unlink.dirs;for (t = 0, e = i.length; e > t; t++) {
	      i[t]._watcher && i[t]._watcher.teardown();
	    }
	  }, Yt.prototype.destroy = function () {
	    this.parentFrag && this.parentFrag.childFrags.$remove(this), this.node.__v_frag = null, this.unlink();
	  };var Pr = new $(5e3);se.prototype.create = function (t, e, i) {
	    var n = Zt(this.template);return new Yt(this.linker, this.vm, n, t, e, i);
	  };var Rr = 700,
	      Lr = 800,
	      Hr = 850,
	      Ir = 1100,
	      Mr = 1500,
	      Vr = 1500,
	      Br = 1750,
	      Wr = 2100,
	      zr = 2200,
	      Ur = 2300,
	      Jr = 0,
	      qr = { priority: zr, terminal: !0, params: ["track-by", "stagger", "enter-stagger", "leave-stagger"], bind: function bind() {
	      var t = this.expression.match(/(.*) (?:in|of) (.*)/);if (t) {
	        var e = t[1].match(/\((.*),(.*)\)/);e ? (this.iterator = e[1].trim(), this.alias = e[2].trim()) : this.alias = t[1].trim(), this.expression = t[2];
	      }if (this.alias) {
	        this.id = "__v-for__" + ++Jr;var i = this.el.tagName;this.isOption = ("OPTION" === i || "OPTGROUP" === i) && "SELECT" === this.el.parentNode.tagName, this.start = nt("v-for-start"), this.end = nt("v-for-end"), J(this.el, this.end), B(this.start, this.end), this.cache = Object.create(null), this.factory = new se(this.vm, this.el);
	      }
	    }, update: function update(t) {
	      this.diff(t), this.updateRef(), this.updateModel();
	    }, diff: function diff(t) {
	      var e,
	          n,
	          r,
	          s,
	          o,
	          a,
	          h = t[0],
	          l = this.fromObject = m(h) && i(h, "$key") && i(h, "$value"),
	          c = this.params.trackBy,
	          u = this.frags,
	          f = this.frags = new Array(t.length),
	          p = this.alias,
	          d = this.iterator,
	          v = this.start,
	          g = this.end,
	          _ = H(v),
	          y = !u;for (e = 0, n = t.length; n > e; e++) {
	        h = t[e], s = l ? h.$key : null, o = l ? h.$value : h, a = !m(o), r = !y && this.getCachedFrag(o, e, s), r ? (r.reused = !0, r.scope.$index = e, s && (r.scope.$key = s), d && (r.scope[d] = null !== s ? s : e), (c || l || a) && yt(function () {
	          r.scope[p] = o;
	        })) : (r = this.create(o, p, e, s), r.fresh = !y), f[e] = r, y && r.before(g);
	      }if (!y) {
	        var b = 0,
	            w = u.length - f.length;for (this.vm._vForRemoving = !0, e = 0, n = u.length; n > e; e++) {
	          r = u[e], r.reused || (this.deleteCachedFrag(r), this.remove(r, b++, w, _));
	        }this.vm._vForRemoving = !1, b && (this.vm._watchers = this.vm._watchers.filter(function (t) {
	          return t.active;
	        }));var C,
	            $,
	            k,
	            x = 0;for (e = 0, n = f.length; n > e; e++) {
	          r = f[e], C = f[e - 1], $ = C ? C.staggerCb ? C.staggerAnchor : C.end || C.node : v, r.reused && !r.staggerCb ? (k = oe(r, v, this.id), k === C || k && oe(k, v, this.id) === C || this.move(r, $)) : this.insert(r, x++, $, _), r.reused = r.fresh = !1;
	        }
	      }
	    }, create: function create(t, e, i, n) {
	      var r = this._host,
	          s = this._scope || this.vm,
	          o = Object.create(s);o.$refs = Object.create(s.$refs), o.$els = Object.create(s.$els), o.$parent = s, o.$forContext = this, yt(function () {
	        kt(o, e, t);
	      }), kt(o, "$index", i), n ? kt(o, "$key", n) : o.$key && _(o, "$key", null), this.iterator && kt(o, this.iterator, null !== n ? n : i);var a = this.factory.create(r, o, this._frag);return a.forId = this.id, this.cacheFrag(t, a, i, n), a;
	    }, updateRef: function updateRef() {
	      var t = this.descriptor.ref;if (t) {
	        var e,
	            i = (this._scope || this.vm).$refs;this.fromObject ? (e = {}, this.frags.forEach(function (t) {
	          e[t.scope.$key] = ae(t);
	        })) : e = this.frags.map(ae), i[t] = e;
	      }
	    }, updateModel: function updateModel() {
	      if (this.isOption) {
	        var t = this.start.parentNode,
	            e = t && t.__v_model;e && e.forceUpdate();
	      }
	    }, insert: function insert(t, e, i, n) {
	      t.staggerCb && (t.staggerCb.cancel(), t.staggerCb = null);var r = this.getStagger(t, e, null, "enter");if (n && r) {
	        var s = t.staggerAnchor;s || (s = t.staggerAnchor = nt("stagger-anchor"), s.__v_frag = t), W(s, i);var o = t.staggerCb = w(function () {
	          t.staggerCb = null, t.before(s), z(s);
	        });setTimeout(o, r);
	      } else {
	        var a = i.nextSibling;a || (W(this.end, i), a = this.end), t.before(a);
	      }
	    }, remove: function remove(t, e, i, n) {
	      if (t.staggerCb) return t.staggerCb.cancel(), void (t.staggerCb = null);var r = this.getStagger(t, e, i, "leave");if (n && r) {
	        var s = t.staggerCb = w(function () {
	          t.staggerCb = null, t.remove();
	        });setTimeout(s, r);
	      } else t.remove();
	    }, move: function move(t, e) {
	      e.nextSibling || this.end.parentNode.appendChild(this.end), t.before(e.nextSibling, !1);
	    }, cacheFrag: function cacheFrag(t, e, n, r) {
	      var s,
	          o = this.params.trackBy,
	          a = this.cache,
	          h = !m(t);r || o || h ? (s = le(n, r, t, o), a[s] || (a[s] = e)) : (s = this.id, i(t, s) ? null === t[s] && (t[s] = e) : Object.isExtensible(t) && _(t, s, e)), e.raw = t;
	    }, getCachedFrag: function getCachedFrag(t, e, i) {
	      var n,
	          r = this.params.trackBy,
	          s = !m(t);if (i || r || s) {
	        var o = le(e, i, t, r);n = this.cache[o];
	      } else n = t[this.id];return n && (n.reused || n.fresh), n;
	    }, deleteCachedFrag: function deleteCachedFrag(t) {
	      var e = t.raw,
	          n = this.params.trackBy,
	          r = t.scope,
	          s = r.$index,
	          o = i(r, "$key") && r.$key,
	          a = !m(e);if (n || o || a) {
	        var h = le(s, o, e, n);this.cache[h] = null;
	      } else e[this.id] = null, t.raw = null;
	    }, getStagger: function getStagger(t, e, i, n) {
	      n += "Stagger";var r = t.node.__v_trans,
	          s = r && r.hooks,
	          o = s && (s[n] || s.stagger);return o ? o.call(t, e, i) : e * parseInt(this.params[n] || this.params.stagger, 10);
	    }, _preProcess: function _preProcess(t) {
	      return this.rawValue = t, t;
	    }, _postProcess: function _postProcess(t) {
	      if (Di(t)) return t;if (g(t)) {
	        for (var e, i = Object.keys(t), n = i.length, r = new Array(n); n--;) {
	          e = i[n], r[n] = { $key: e, $value: t[e] };
	        }return r;
	      }return "number" != typeof t || isNaN(t) || (t = he(t)), t || [];
	    }, unbind: function unbind() {
	      if (this.descriptor.ref && ((this._scope || this.vm).$refs[this.descriptor.ref] = null), this.frags) for (var t, e = this.frags.length; e--;) {
	        t = this.frags[e], this.deleteCachedFrag(t), t.destroy();
	      }
	    } },
	      Qr = { priority: Wr, terminal: !0, bind: function bind() {
	      var t = this.el;if (t.__vue__) this.invalid = !0;else {
	        var e = t.nextElementSibling;e && null !== I(e, "v-else") && (z(e), this.elseEl = e), this.anchor = nt("v-if"), J(t, this.anchor);
	      }
	    }, update: function update(t) {
	      this.invalid || (t ? this.frag || this.insert() : this.remove());
	    }, insert: function insert() {
	      this.elseFrag && (this.elseFrag.remove(), this.elseFrag = null), this.factory || (this.factory = new se(this.vm, this.el)), this.frag = this.factory.create(this._host, this._scope, this._frag), this.frag.before(this.anchor);
	    }, remove: function remove() {
	      this.frag && (this.frag.remove(), this.frag = null), this.elseEl && !this.elseFrag && (this.elseFactory || (this.elseFactory = new se(this.elseEl._context || this.vm, this.elseEl)), this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag), this.elseFrag.before(this.anchor));
	    }, unbind: function unbind() {
	      this.frag && this.frag.destroy(), this.elseFrag && this.elseFrag.destroy();
	    } },
	      Gr = { bind: function bind() {
	      var t = this.el.nextElementSibling;t && null !== I(t, "v-else") && (this.elseEl = t);
	    }, update: function update(t) {
	      this.apply(this.el, t), this.elseEl && this.apply(this.elseEl, !t);
	    }, apply: function apply(t, e) {
	      function i() {
	        t.style.display = e ? "" : "none";
	      }H(t) ? R(t, e ? 1 : -1, i, this.vm) : i();
	    } },
	      Zr = { bind: function bind() {
	      var t = this,
	          e = this.el,
	          i = "range" === e.type,
	          n = this.params.lazy,
	          r = this.params.number,
	          s = this.params.debounce,
	          a = !1;if (Vi || i || (this.on("compositionstart", function () {
	        a = !0;
	      }), this.on("compositionend", function () {
	        a = !1, n || t.listener();
	      })), this.focused = !1, i || n || (this.on("focus", function () {
	        t.focused = !0;
	      }), this.on("blur", function () {
	        t.focused = !1, t._frag && !t._frag.inserted || t.rawListener();
	      })), this.listener = this.rawListener = function () {
	        if (!a && t._bound) {
	          var n = r || i ? o(e.value) : e.value;t.set(n), Yi(function () {
	            t._bound && !t.focused && t.update(t._watcher.value);
	          });
	        }
	      }, s && (this.listener = y(this.listener, s)), this.hasjQuery = "function" == typeof jQuery, this.hasjQuery) {
	        var h = jQuery.fn.on ? "on" : "bind";jQuery(e)[h]("change", this.rawListener), n || jQuery(e)[h]("input", this.listener);
	      } else this.on("change", this.rawListener), n || this.on("input", this.listener);!n && Mi && (this.on("cut", function () {
	        Yi(t.listener);
	      }), this.on("keyup", function (e) {
	        46 !== e.keyCode && 8 !== e.keyCode || t.listener();
	      })), (e.hasAttribute("value") || "TEXTAREA" === e.tagName && e.value.trim()) && (this.afterBind = this.listener);
	    }, update: function update(t) {
	      t = s(t), t !== this.el.value && (this.el.value = t);
	    }, unbind: function unbind() {
	      var t = this.el;if (this.hasjQuery) {
	        var e = jQuery.fn.off ? "off" : "unbind";jQuery(t)[e]("change", this.listener), jQuery(t)[e]("input", this.listener);
	      }
	    } },
	      Xr = { bind: function bind() {
	      var t = this,
	          e = this.el;this.getValue = function () {
	        if (e.hasOwnProperty("_value")) return e._value;var i = e.value;return t.params.number && (i = o(i)), i;
	      }, this.listener = function () {
	        t.set(t.getValue());
	      }, this.on("change", this.listener), e.hasAttribute("checked") && (this.afterBind = this.listener);
	    }, update: function update(t) {
	      this.el.checked = C(t, this.getValue());
	    } },
	      Yr = { bind: function bind() {
	      var t = this,
	          e = this,
	          i = this.el;this.forceUpdate = function () {
	        e._watcher && e.update(e._watcher.get());
	      };var n = this.multiple = i.hasAttribute("multiple");this.listener = function () {
	        var t = ce(i, n);t = e.params.number ? Di(t) ? t.map(o) : o(t) : t, e.set(t);
	      }, this.on("change", this.listener);var r = ce(i, n, !0);(n && r.length || !n && null !== r) && (this.afterBind = this.listener), this.vm.$on("hook:attached", function () {
	        Yi(t.forceUpdate);
	      });
	    }, update: function update(t) {
	      var e = this.el;if (!H(e)) return Yi(this.forceUpdate);e.selectedIndex = -1;for (var i, n, r = this.multiple && Di(t), s = e.options, o = s.length; o--;) {
	        i = s[o], n = i.hasOwnProperty("_value") ? i._value : i.value, i.selected = r ? ue(t, n) > -1 : C(t, n);
	      }
	    }, unbind: function unbind() {
	      this.vm.$off("hook:attached", this.forceUpdate);
	    } },
	      Kr = { bind: function bind() {
	      function t() {
	        var t = i.checked;return t && i.hasOwnProperty("_trueValue") ? i._trueValue : !t && i.hasOwnProperty("_falseValue") ? i._falseValue : t;
	      }var e = this,
	          i = this.el;this.getValue = function () {
	        return i.hasOwnProperty("_value") ? i._value : e.params.number ? o(i.value) : i.value;
	      }, this.listener = function () {
	        var n = e._watcher.value;if (Di(n)) {
	          var r = e.getValue();i.checked ? b(n, r) < 0 && n.push(r) : n.$remove(r);
	        } else e.set(t());
	      }, this.on("change", this.listener), i.hasAttribute("checked") && (this.afterBind = this.listener);
	    }, update: function update(t) {
	      var e = this.el;Di(t) ? e.checked = b(t, this.getValue()) > -1 : e.hasOwnProperty("_trueValue") ? e.checked = C(t, e._trueValue) : e.checked = !!t;
	    } },
	      ts = { text: Zr, radio: Xr, select: Yr, checkbox: Kr },
	      es = { priority: Lr, twoWay: !0, handlers: ts, params: ["lazy", "number", "debounce"], bind: function bind() {
	      this.checkFilters(), this.hasRead && !this.hasWrite;var t,
	          e = this.el,
	          i = e.tagName;if ("INPUT" === i) t = ts[e.type] || ts.text;else if ("SELECT" === i) t = ts.select;else {
	        if ("TEXTAREA" !== i) return;t = ts.text;
	      }e.__v_model = this, t.bind.call(this), this.update = t.update, this._unbind = t.unbind;
	    }, checkFilters: function checkFilters() {
	      var t = this.filters;if (t) for (var e = t.length; e--;) {
	        var i = gt(this.vm.$options, "filters", t[e].name);("function" == typeof i || i.read) && (this.hasRead = !0), i.write && (this.hasWrite = !0);
	      }
	    }, unbind: function unbind() {
	      this.el.__v_model = null, this._unbind && this._unbind();
	    } },
	      is = { esc: 27, tab: 9, enter: 13, space: 32, "delete": [8, 46], up: 38, left: 37, right: 39, down: 40 },
	      ns = { priority: Rr, acceptStatement: !0, keyCodes: is, bind: function bind() {
	      if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
	        var t = this;this.iframeBind = function () {
	          q(t.el.contentWindow, t.arg, t.handler, t.modifiers.capture);
	        }, this.on("load", this.iframeBind);
	      }
	    }, update: function update(t) {
	      if (this.descriptor.raw || (t = function t() {}), "function" == typeof t) {
	        this.modifiers.stop && (t = pe(t)), this.modifiers.prevent && (t = de(t)), this.modifiers.self && (t = ve(t));var e = Object.keys(this.modifiers).filter(function (t) {
	          return "stop" !== t && "prevent" !== t && "self" !== t && "capture" !== t;
	        });e.length && (t = fe(t, e)), this.reset(), this.handler = t, this.iframeBind ? this.iframeBind() : q(this.el, this.arg, this.handler, this.modifiers.capture);
	      }
	    }, reset: function reset() {
	      var t = this.iframeBind ? this.el.contentWindow : this.el;this.handler && Q(t, this.arg, this.handler);
	    }, unbind: function unbind() {
	      this.reset();
	    } },
	      rs = ["-webkit-", "-moz-", "-ms-"],
	      ss = ["Webkit", "Moz", "ms"],
	      os = /!important;?$/,
	      as = Object.create(null),
	      hs = null,
	      ls = { deep: !0, update: function update(t) {
	      "string" == typeof t ? this.el.style.cssText = t : Di(t) ? this.handleObject(t.reduce(v, {})) : this.handleObject(t || {});
	    }, handleObject: function handleObject(t) {
	      var e,
	          i,
	          n = this.cache || (this.cache = {});for (e in n) {
	        e in t || (this.handleSingle(e, null), delete n[e]);
	      }for (e in t) {
	        i = t[e], i !== n[e] && (n[e] = i, this.handleSingle(e, i));
	      }
	    }, handleSingle: function handleSingle(t, e) {
	      if (t = me(t)) if (null != e && (e += ""), e) {
	        var i = os.test(e) ? "important" : "";i ? (e = e.replace(os, "").trim(), this.el.style.setProperty(t.kebab, e, i)) : this.el.style[t.camel] = e;
	      } else this.el.style[t.camel] = "";
	    } },
	      cs = "http://www.w3.org/1999/xlink",
	      us = /^xlink:/,
	      fs = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,
	      ps = /^(?:value|checked|selected|muted)$/,
	      ds = /^(?:draggable|contenteditable|spellcheck)$/,
	      vs = { value: "_value", "true-value": "_trueValue", "false-value": "_falseValue" },
	      ms = { priority: Hr, bind: function bind() {
	      var t = this.arg,
	          e = this.el.tagName;t || (this.deep = !0);var i = this.descriptor,
	          n = i.interp;n && (i.hasOneTime && (this.expression = j(n, this._scope || this.vm)), (fs.test(t) || "name" === t && ("PARTIAL" === e || "SLOT" === e)) && (this.el.removeAttribute(t), this.invalid = !0));
	    }, update: function update(t) {
	      if (!this.invalid) {
	        var e = this.arg;this.arg ? this.handleSingle(e, t) : this.handleObject(t || {});
	      }
	    }, handleObject: ls.handleObject, handleSingle: function handleSingle(t, e) {
	      var i = this.el,
	          n = this.descriptor.interp;if (this.modifiers.camel && (t = l(t)), !n && ps.test(t) && t in i) {
	        var r = "value" === t && null == e ? "" : e;i[t] !== r && (i[t] = r);
	      }var s = vs[t];if (!n && s) {
	        i[s] = e;var o = i.__v_model;o && o.listener();
	      }return "value" === t && "TEXTAREA" === i.tagName ? void i.removeAttribute(t) : void (ds.test(t) ? i.setAttribute(t, e ? "true" : "false") : null != e && e !== !1 ? "class" === t ? (i.__v_trans && (e += " " + i.__v_trans.id + "-transition"), Z(i, e)) : us.test(t) ? i.setAttributeNS(cs, t, e === !0 ? "" : e) : i.setAttribute(t, e === !0 ? "" : e) : i.removeAttribute(t));
	    } },
	      gs = { priority: Mr, bind: function bind() {
	      if (this.arg) {
	        var t = this.id = l(this.arg),
	            e = (this._scope || this.vm).$els;i(e, t) ? e[t] = this.el : kt(e, t, this.el);
	      }
	    }, unbind: function unbind() {
	      var t = (this._scope || this.vm).$els;t[this.id] === this.el && (t[this.id] = null);
	    } },
	      _s = { bind: function bind() {} },
	      ys = { bind: function bind() {
	      var t = this.el;this.vm.$once("pre-hook:compiled", function () {
	        t.removeAttribute("v-cloak");
	      });
	    } },
	      bs = { text: kr, html: Dr, "for": qr, "if": Qr, show: Gr, model: es, on: ns, bind: ms, el: gs, ref: _s, cloak: ys },
	      ws = { deep: !0, update: function update(t) {
	      t ? "string" == typeof t ? this.setClass(t.trim().split(/\s+/)) : this.setClass(_e(t)) : this.cleanup();
	    }, setClass: function setClass(t) {
	      this.cleanup(t);for (var e = 0, i = t.length; i > e; e++) {
	        var n = t[e];n && ye(this.el, n, X);
	      }this.prevKeys = t;
	    }, cleanup: function cleanup(t) {
	      var e = this.prevKeys;if (e) for (var i = e.length; i--;) {
	        var n = e[i];(!t || t.indexOf(n) < 0) && ye(this.el, n, Y);
	      }
	    } },
	      Cs = { priority: Vr, params: ["keep-alive", "transition-mode", "inline-template"], bind: function bind() {
	      this.el.__vue__ || (this.keepAlive = this.params.keepAlive, this.keepAlive && (this.cache = {}), this.params.inlineTemplate && (this.inlineTemplate = K(this.el, !0)), this.pendingComponentCb = this.Component = null, this.pendingRemovals = 0, this.pendingRemovalCb = null, this.anchor = nt("v-component"), J(this.el, this.anchor), this.el.removeAttribute("is"), this.el.removeAttribute(":is"), this.descriptor.ref && this.el.removeAttribute("v-ref:" + u(this.descriptor.ref)), this.literal && this.setComponent(this.expression));
	    }, update: function update(t) {
	      this.literal || this.setComponent(t);
	    }, setComponent: function setComponent(t, e) {
	      if (this.invalidatePending(), t) {
	        var i = this;this.resolveComponent(t, function () {
	          i.mountComponent(e);
	        });
	      } else this.unbuild(!0), this.remove(this.childVM, e), this.childVM = null;
	    }, resolveComponent: function resolveComponent(t, e) {
	      var i = this;this.pendingComponentCb = w(function (n) {
	        i.ComponentName = n.options.name || ("string" == typeof t ? t : null), i.Component = n, e();
	      }), this.vm._resolveComponent(t, this.pendingComponentCb);
	    }, mountComponent: function mountComponent(t) {
	      this.unbuild(!0);var e = this,
	          i = this.Component.options.activate,
	          n = this.getCached(),
	          r = this.build();i && !n ? (this.waitingFor = r, be(i, r, function () {
	        e.waitingFor === r && (e.waitingFor = null, e.transition(r, t));
	      })) : (n && r._updateRef(), this.transition(r, t));
	    }, invalidatePending: function invalidatePending() {
	      this.pendingComponentCb && (this.pendingComponentCb.cancel(), this.pendingComponentCb = null);
	    }, build: function build(t) {
	      var e = this.getCached();if (e) return e;if (this.Component) {
	        var i = { name: this.ComponentName, el: Zt(this.el), template: this.inlineTemplate, parent: this._host || this.vm, _linkerCachable: !this.inlineTemplate, _ref: this.descriptor.ref, _asComponent: !0, _isRouterView: this._isRouterView, _context: this.vm, _scope: this._scope, _frag: this._frag };t && v(i, t);var n = new this.Component(i);return this.keepAlive && (this.cache[this.Component.cid] = n), n;
	      }
	    }, getCached: function getCached() {
	      return this.keepAlive && this.cache[this.Component.cid];
	    }, unbuild: function unbuild(t) {
	      this.waitingFor && (this.keepAlive || this.waitingFor.$destroy(), this.waitingFor = null);var e = this.childVM;return !e || this.keepAlive ? void (e && (e._inactive = !0, e._updateRef(!0))) : void e.$destroy(!1, t);
	    }, remove: function remove(t, e) {
	      var i = this.keepAlive;if (t) {
	        this.pendingRemovals++, this.pendingRemovalCb = e;var n = this;t.$remove(function () {
	          n.pendingRemovals--, i || t._cleanup(), !n.pendingRemovals && n.pendingRemovalCb && (n.pendingRemovalCb(), n.pendingRemovalCb = null);
	        });
	      } else e && e();
	    }, transition: function transition(t, e) {
	      var i = this,
	          n = this.childVM;switch (n && (n._inactive = !0), t._inactive = !1, this.childVM = t, i.params.transitionMode) {case "in-out":
	          t.$before(i.anchor, function () {
	            i.remove(n, e);
	          });break;case "out-in":
	          i.remove(n, function () {
	            t.$before(i.anchor, e);
	          });break;default:
	          i.remove(n), t.$before(i.anchor, e);}
	    }, unbind: function unbind() {
	      if (this.invalidatePending(), this.unbuild(), this.cache) {
	        for (var t in this.cache) {
	          this.cache[t].$destroy();
	        }this.cache = null;
	      }
	    } },
	      $s = An._propBindingModes,
	      ks = {},
	      xs = /^[$_a-zA-Z]+[\w$]*$/,
	      As = An._propBindingModes,
	      Os = { bind: function bind() {
	      var t = this.vm,
	          e = t._context,
	          i = this.descriptor.prop,
	          n = i.path,
	          r = i.parentPath,
	          s = i.mode === As.TWO_WAY,
	          o = this.parentWatcher = new Ut(e, r, function (e) {
	        xe(t, i, e);
	      }, { twoWay: s, filters: i.filters, scope: this._scope });if (ke(t, i, o.value), s) {
	        var a = this;t.$once("pre-hook:created", function () {
	          a.childWatcher = new Ut(t, n, function (t) {
	            o.set(t);
	          }, { sync: !0 });
	        });
	      }
	    }, unbind: function unbind() {
	      this.parentWatcher.teardown(), this.childWatcher && this.childWatcher.teardown();
	    } },
	      Ts = [],
	      Ns = !1,
	      js = "transition",
	      Es = "animation",
	      Ss = Ji + "Duration",
	      Fs = Qi + "Duration",
	      Ds = Ri && window.requestAnimationFrame,
	      Ps = Ds ? function (t) {
	    Ds(function () {
	      Ds(t);
	    });
	  } : function (t) {
	    setTimeout(t, 50);
	  },
	      Rs = Se.prototype;Rs.enter = function (t, e) {
	    this.cancelPending(), this.callHook("beforeEnter"), this.cb = e, X(this.el, this.enterClass), t(), this.entered = !1, this.callHookWithCb("enter"), this.entered || (this.cancel = this.hooks && this.hooks.enterCancelled, je(this.enterNextTick));
	  }, Rs.enterNextTick = function () {
	    var t = this;this.justEntered = !0, Ps(function () {
	      t.justEntered = !1;
	    });var e = this.enterDone,
	        i = this.getCssTransitionType(this.enterClass);this.pendingJsCb ? i === js && Y(this.el, this.enterClass) : i === js ? (Y(this.el, this.enterClass), this.setupCssCb(qi, e)) : i === Es ? this.setupCssCb(Gi, e) : e();
	  }, Rs.enterDone = function () {
	    this.entered = !0, this.cancel = this.pendingJsCb = null, Y(this.el, this.enterClass), this.callHook("afterEnter"), this.cb && this.cb();
	  }, Rs.leave = function (t, e) {
	    this.cancelPending(), this.callHook("beforeLeave"), this.op = t, this.cb = e, X(this.el, this.leaveClass), this.left = !1, this.callHookWithCb("leave"), this.left || (this.cancel = this.hooks && this.hooks.leaveCancelled, this.op && !this.pendingJsCb && (this.justEntered ? this.leaveDone() : je(this.leaveNextTick)));
	  }, Rs.leaveNextTick = function () {
	    var t = this.getCssTransitionType(this.leaveClass);if (t) {
	      var e = t === js ? qi : Gi;this.setupCssCb(e, this.leaveDone);
	    } else this.leaveDone();
	  }, Rs.leaveDone = function () {
	    this.left = !0, this.cancel = this.pendingJsCb = null, this.op(), Y(this.el, this.leaveClass), this.callHook("afterLeave"), this.cb && this.cb(), this.op = null;
	  }, Rs.cancelPending = function () {
	    this.op = this.cb = null;var t = !1;this.pendingCssCb && (t = !0, Q(this.el, this.pendingCssEvent, this.pendingCssCb), this.pendingCssEvent = this.pendingCssCb = null), this.pendingJsCb && (t = !0, this.pendingJsCb.cancel(), this.pendingJsCb = null), t && (Y(this.el, this.enterClass), Y(this.el, this.leaveClass)), this.cancel && (this.cancel.call(this.vm, this.el), this.cancel = null);
	  }, Rs.callHook = function (t) {
	    this.hooks && this.hooks[t] && this.hooks[t].call(this.vm, this.el);
	  }, Rs.callHookWithCb = function (t) {
	    var e = this.hooks && this.hooks[t];e && (e.length > 1 && (this.pendingJsCb = w(this[t + "Done"])), e.call(this.vm, this.el, this.pendingJsCb));
	  }, Rs.getCssTransitionType = function (t) {
	    if (!(!qi || document.hidden || this.hooks && this.hooks.css === !1 || Fe(this.el))) {
	      var e = this.type || this.typeCache[t];if (e) return e;var i = this.el.style,
	          n = window.getComputedStyle(this.el),
	          r = i[Ss] || n[Ss];if (r && "0s" !== r) e = js;else {
	        var s = i[Fs] || n[Fs];s && "0s" !== s && (e = Es);
	      }return e && (this.typeCache[t] = e), e;
	    }
	  }, Rs.setupCssCb = function (t, e) {
	    this.pendingCssEvent = t;var i = this,
	        n = this.el,
	        r = this.pendingCssCb = function (s) {
	      s.target === n && (Q(n, t, r), i.pendingCssEvent = i.pendingCssCb = null, !i.pendingJsCb && e && e());
	    };q(n, t, r);
	  };var Ls = { priority: Ir, update: function update(t, e) {
	      var i = this.el,
	          n = gt(this.vm.$options, "transitions", t);t = t || "v", e = e || "v", i.__v_trans = new Se(i, t, n, this.vm), Y(i, e + "-transition"), X(i, t + "-transition");
	    } },
	      Hs = { style: ls, "class": ws, component: Cs, prop: Os, transition: Ls },
	      Is = /^v-bind:|^:/,
	      Ms = /^v-on:|^@/,
	      Vs = /^v-([^:]+)(?:$|:(.*)$)/,
	      Bs = /\.[^\.]+/g,
	      Ws = /^(v-bind:|:)?transition$/,
	      zs = 1e3,
	      Us = 2e3;Ye.terminal = !0;var Js = /[^\w\-:\.]/,
	      qs = Object.freeze({ compile: De, compileAndLinkProps: Ie, compileRoot: Me, transclude: si, resolveSlots: li }),
	      Qs = /^v-on:|^@/;di.prototype._bind = function () {
	    var t = this.name,
	        e = this.descriptor;if (("cloak" !== t || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	      var i = e.attr || "v-" + t;this.el.removeAttribute(i);
	    }var n = e.def;if ("function" == typeof n ? this.update = n : v(this, n), this._setupParams(), this.bind && this.bind(), this._bound = !0, this.literal) this.update && this.update(e.raw);else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	      var r = this;this.update ? this._update = function (t, e) {
	        r._locked || r.update(t, e);
	      } : this._update = pi;var s = this._preProcess ? p(this._preProcess, this) : null,
	          o = this._postProcess ? p(this._postProcess, this) : null,
	          a = this._watcher = new Ut(this.vm, this.expression, this._update, { filters: this.filters, twoWay: this.twoWay, deep: this.deep, preProcess: s, postProcess: o, scope: this._scope });this.afterBind ? this.afterBind() : this.update && this.update(a.value);
	    }
	  }, di.prototype._setupParams = function () {
	    if (this.params) {
	      var t = this.params;this.params = Object.create(null);for (var e, i, n, r = t.length; r--;) {
	        e = u(t[r]), n = l(e), i = M(this.el, e), null != i ? this._setupParamWatcher(n, i) : (i = I(this.el, e), null != i && (this.params[n] = "" === i ? !0 : i));
	      }
	    }
	  }, di.prototype._setupParamWatcher = function (t, e) {
	    var i = this,
	        n = !1,
	        r = (this._scope || this.vm).$watch(e, function (e, r) {
	      if (i.params[t] = e, n) {
	        var s = i.paramWatchers && i.paramWatchers[t];s && s.call(i, e, r);
	      } else n = !0;
	    }, { immediate: !0, user: !1 });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(r);
	  }, di.prototype._checkStatement = function () {
	    var t = this.expression;if (t && this.acceptStatement && !Mt(t)) {
	      var e = It(t).get,
	          i = this._scope || this.vm,
	          n = function n(t) {
	        i.$event = t, e.call(i, i), i.$event = null;
	      };return this.filters && (n = i._applyFilters(n, null, this.filters)), this.update(n), !0;
	    }
	  }, di.prototype.set = function (t) {
	    this.twoWay && this._withLock(function () {
	      this._watcher.set(t);
	    });
	  }, di.prototype._withLock = function (t) {
	    var e = this;e._locked = !0, t.call(e), Yi(function () {
	      e._locked = !1;
	    });
	  }, di.prototype.on = function (t, e, i) {
	    q(this.el, t, e, i), (this._listeners || (this._listeners = [])).push([t, e]);
	  }, di.prototype._teardown = function () {
	    if (this._bound) {
	      this._bound = !1, this.unbind && this.unbind(), this._watcher && this._watcher.teardown();var t,
	          e = this._listeners;if (e) for (t = e.length; t--;) {
	        Q(this.el, e[t][0], e[t][1]);
	      }var i = this._paramUnwatchFns;if (i) for (t = i.length; t--;) {
	        i[t]();
	      }this.vm = this.el = this._watcher = this._listeners = null;
	    }
	  };var Gs = /[^|]\|[^|]/;xt(wi), ui(wi), fi(wi), vi(wi), mi(wi), gi(wi), _i(wi), yi(wi), bi(wi);var Zs = { priority: Ur, params: ["name"], bind: function bind() {
	      var t = this.params.name || "default",
	          e = this.vm._slotContents && this.vm._slotContents[t];e && e.hasChildNodes() ? this.compile(e.cloneNode(!0), this.vm._context, this.vm) : this.fallback();
	    }, compile: function compile(t, e, i) {
	      if (t && e) {
	        if (this.el.hasChildNodes() && 1 === t.childNodes.length && 1 === t.childNodes[0].nodeType && t.childNodes[0].hasAttribute("v-if")) {
	          var n = document.createElement("template");n.setAttribute("v-else", ""), n.innerHTML = this.el.innerHTML, n._context = this.vm, t.appendChild(n);
	        }var r = i ? i._scope : this._scope;this.unlink = e.$compile(t, i, r, this._frag);
	      }t ? J(this.el, t) : z(this.el);
	    }, fallback: function fallback() {
	      this.compile(K(this.el, !0), this.vm);
	    }, unbind: function unbind() {
	      this.unlink && this.unlink();
	    } },
	      Xs = { priority: Br, params: ["name"], paramWatchers: { name: function name(t) {
	        Qr.remove.call(this), t && this.insert(t);
	      } }, bind: function bind() {
	      this.anchor = nt("v-partial"), J(this.el, this.anchor), this.insert(this.params.name);
	    }, insert: function insert(t) {
	      var e = gt(this.vm.$options, "partials", t, !0);e && (this.factory = new se(this.vm, e), Qr.insert.call(this));
	    }, unbind: function unbind() {
	      this.frag && this.frag.destroy();
	    } },
	      Ys = { slot: Zs, partial: Xs },
	      Ks = qr._postProcess,
	      to = /(\d{3})(?=\d)/g,
	      eo = { orderBy: ki, filterBy: $i, limitBy: Ci, json: { read: function read(t, e) {
	        return "string" == typeof t ? t : JSON.stringify(t, null, arguments.length > 1 ? e : 2);
	      }, write: function write(t) {
	        try {
	          return JSON.parse(t);
	        } catch (e) {
	          return t;
	        }
	      } }, capitalize: function capitalize(t) {
	      return t || 0 === t ? (t = t.toString(), t.charAt(0).toUpperCase() + t.slice(1)) : "";
	    }, uppercase: function uppercase(t) {
	      return t || 0 === t ? t.toString().toUpperCase() : "";
	    }, lowercase: function lowercase(t) {
	      return t || 0 === t ? t.toString().toLowerCase() : "";
	    }, currency: function currency(t, e, i) {
	      if (t = parseFloat(t), !isFinite(t) || !t && 0 !== t) return "";e = null != e ? e : "$", i = null != i ? i : 2;var n = Math.abs(t).toFixed(i),
	          r = i ? n.slice(0, -1 - i) : n,
	          s = r.length % 3,
	          o = s > 0 ? r.slice(0, s) + (r.length > 3 ? "," : "") : "",
	          a = i ? n.slice(-1 - i) : "",
	          h = 0 > t ? "-" : "";return h + e + o + r.slice(s).replace(to, "$1,") + a;
	    }, pluralize: function pluralize(t) {
	      var e = d(arguments, 1);return e.length > 1 ? e[t % 10 - 1] || e[e.length - 1] : e[0] + (1 === t ? "" : "s");
	    }, debounce: function debounce(t, e) {
	      return t ? (e || (e = 300), y(t, e)) : void 0;
	    } };return Ai(wi), wi.version = "1.0.25", setTimeout(function () {
	    An.devtools && Li && Li.emit("init", wi);
	  }, 0), wi;
	});
	//# sourceMappingURL=vue.min.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(9);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(11);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _vueTouch = __webpack_require__(12);
	
	var _vueTouch2 = _interopRequireDefault(_vueTouch);
	
	var _logger = __webpack_require__(14);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var _goods_details = __webpack_require__(15);
	
	var _goods_details2 = _interopRequireDefault(_goods_details);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var debug = true;
	// process.env.NODE_ENV !== 'production'
	
	_vue2.default.config.debug = debug;
	_vue2.default.config.devtools = debug;
	
	_vue2.default.use(_vuex2.default);
	_vue2.default.use(_vueTouch2.default);
	
	exports.default = new _vuex2.default.Store({
	  modules: {
	    goods_details: _goods_details2.default
	  },
	  strict: debug,
	  moddlewares: debug ? [(0, _logger2.default)()] : []
	});
	
	
	if (false) {
	  // 使 actions 和 mutations 成为可热重载模块
	  module.hot.accept(['actions', 'mutations'], function () {
	    // 获取更新后的模块
	    // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
	    var newActions = require('actions').default;
	    var newMutations = require('mutations').default;
	    // 加载新模块
	    store.hotUpdate({
	      actions: newActions,
	      mutations: newMutations
	    });
	  });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * Vuex v0.6.3
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.Vuex = factory();
	})(undefined, function () {
	  'use strict';
	
	  var babelHelpers = {};
	  babelHelpers.typeof = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	  };
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	
	  babelHelpers.createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  babelHelpers.toConsumableArray = function (arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	        arr2[i] = arr[i];
	      }return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };
	
	  babelHelpers;
	
	  /**
	   * Merge an array of objects into one.
	   *
	   * @param {Array<Object>} arr
	   * @return {Object}
	   */
	
	  function mergeObjects(arr) {
	    return arr.reduce(function (prev, obj) {
	      Object.keys(obj).forEach(function (key) {
	        var existing = prev[key];
	        if (existing) {
	          // allow multiple mutation objects to contain duplicate
	          // handlers for the same mutation type
	          if (Array.isArray(existing)) {
	            existing.push(obj[key]);
	          } else {
	            prev[key] = [prev[key], obj[key]];
	          }
	        } else {
	          prev[key] = obj[key];
	        }
	      });
	      return prev;
	    }, {});
	  }
	
	  /**
	   * Deep clone an object. Faster than JSON.parse(JSON.stringify()).
	   *
	   * @param {*} obj
	   * @return {*}
	   */
	
	  function deepClone(obj) {
	    if (Array.isArray(obj)) {
	      return obj.map(deepClone);
	    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) === 'object') {
	      var cloned = {};
	      var keys = Object.keys(obj);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        var key = keys[i];
	        cloned[key] = deepClone(obj[key]);
	      }
	      return cloned;
	    } else {
	      return obj;
	    }
	  }
	
	  /**
	   * Hacks to get access to Vue internals.
	   * Maybe we should expose these...
	   */
	
	  var Watcher = void 0;
	  function getWatcher(vm) {
	    if (!Watcher) {
	      var unwatch = vm.$watch('__vuex__', function (a) {
	        return a;
	      });
	      Watcher = vm._watchers[0].constructor;
	      unwatch();
	    }
	    return Watcher;
	  }
	
	  var Dep = void 0;
	  function getDep(vm) {
	    if (!Dep) {
	      Dep = vm._data.__ob__.dep.constructor;
	    }
	    return Dep;
	  }
	
	  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	  var devtoolMiddleware = {
	    onInit: function onInit(state, store) {
	      if (!hook) return;
	      hook.emit('vuex:init', store);
	      hook.on('vuex:travel-to-state', function (targetState) {
	        var currentState = store._vm._data;
	        store._dispatching = true;
	        Object.keys(targetState).forEach(function (key) {
	          currentState[key] = targetState[key];
	        });
	        store._dispatching = false;
	      });
	    },
	    onMutation: function onMutation(mutation, state) {
	      if (!hook) return;
	      hook.emit('vuex:mutation', mutation, state);
	    }
	  };
	
	  function override(Vue) {
	    // override init and inject vuex init procedure
	    var _init = Vue.prototype._init;
	    Vue.prototype._init = function () {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	      _init.call(this, options);
	    };
	
	    /**
	     * Vuex init hook, injected into each instances init hooks list.
	     */
	
	    function vuexInit() {
	      var options = this.$options;
	      var store = options.store;
	      var vuex = options.vuex;
	      // store injection
	
	      if (store) {
	        this.$store = store;
	      } else if (options.parent && options.parent.$store) {
	        this.$store = options.parent.$store;
	      }
	      // vuex option handling
	      if (vuex) {
	        if (!this.$store) {
	          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
	        }
	        var state = vuex.state;
	        var getters = vuex.getters;
	        var actions = vuex.actions;
	        // handle deprecated state option
	
	        if (state && !getters) {
	          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
	          getters = state;
	        }
	        // getters
	        if (getters) {
	          options.computed = options.computed || {};
	          for (var key in getters) {
	            defineVuexGetter(this, key, getters[key]);
	          }
	        }
	        // actions
	        if (actions) {
	          options.methods = options.methods || {};
	          for (var _key in actions) {
	            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);
	          }
	        }
	      }
	    }
	
	    /**
	     * Setter for all getter properties.
	     */
	
	    function setter() {
	      throw new Error('vuex getter properties are read-only.');
	    }
	
	    /**
	     * Define a Vuex getter on an instance.
	     *
	     * @param {Vue} vm
	     * @param {String} key
	     * @param {Function} getter
	     */
	
	    function defineVuexGetter(vm, key, getter) {
	      if (typeof getter !== 'function') {
	        console.warn('[vuex] Getter bound to key \'vuex.getters.' + key + '\' is not a function.');
	      } else {
	        Object.defineProperty(vm, key, {
	          enumerable: true,
	          configurable: true,
	          get: makeComputedGetter(vm.$store, getter),
	          set: setter
	        });
	      }
	    }
	
	    /**
	     * Make a computed getter, using the same caching mechanism of computed
	     * properties. In addition, it is cached on the raw getter function using
	     * the store's unique cache id. This makes the same getter shared
	     * across all components use the same underlying watcher, and makes
	     * the getter evaluated only once during every flush.
	     *
	     * @param {Store} store
	     * @param {Function} getter
	     */
	
	    function makeComputedGetter(store, getter) {
	      var id = store._getterCacheId;
	
	      // cached
	      if (getter[id]) {
	        return getter[id];
	      }
	      var vm = store._vm;
	      var Watcher = getWatcher(vm);
	      var Dep = getDep(vm);
	      var watcher = new Watcher(vm, function (state) {
	        return getter(state);
	      }, null, { lazy: true });
	      var computedGetter = function computedGetter() {
	        if (watcher.dirty) {
	          watcher.evaluate();
	        }
	        if (Dep.target) {
	          watcher.depend();
	        }
	        return watcher.value;
	      };
	      getter[id] = computedGetter;
	      return computedGetter;
	    }
	
	    /**
	     * Make a bound-to-store version of a raw action function.
	     *
	     * @param {Store} store
	     * @param {Function} action
	     * @param {String} key
	     */
	
	    function makeBoundAction(store, action, key) {
	      if (typeof action !== 'function') {
	        console.warn('[vuex] Action bound to key \'vuex.actions.' + key + '\' is not a function.');
	      }
	      return function vuexBoundAction() {
	        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	          args[_key2] = arguments[_key2];
	        }
	
	        return action.call.apply(action, [this, store].concat(args));
	      };
	    }
	
	    // option merging
	    var merge = Vue.config.optionMergeStrategies.computed;
	    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
	      if (!toVal) return fromVal;
	      if (!fromVal) return toVal;
	      return {
	        getters: merge(toVal.getters, fromVal.getters),
	        state: merge(toVal.state, fromVal.state),
	        actions: merge(toVal.actions, fromVal.actions)
	      };
	    };
	  }
	
	  var Vue = void 0;
	  var uid = 0;
	
	  var Store = function () {
	
	    /**
	     * @param {Object} options
	     *        - {Object} state
	     *        - {Object} actions
	     *        - {Object} mutations
	     *        - {Array} middlewares
	     *        - {Boolean} strict
	     */
	
	    function Store() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$state = _ref.state;
	      var state = _ref$state === undefined ? {} : _ref$state;
	      var _ref$mutations = _ref.mutations;
	      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
	      var _ref$modules = _ref.modules;
	      var modules = _ref$modules === undefined ? {} : _ref$modules;
	      var _ref$middlewares = _ref.middlewares;
	      var middlewares = _ref$middlewares === undefined ? [] : _ref$middlewares;
	      var _ref$strict = _ref.strict;
	      var strict = _ref$strict === undefined ? false : _ref$strict;
	      babelHelpers.classCallCheck(this, Store);
	
	      this._getterCacheId = 'vuex_store_' + uid++;
	      this._dispatching = false;
	      this._rootMutations = this._mutations = mutations;
	      this._modules = modules;
	      // bind dispatch to self
	      var dispatch = this.dispatch;
	      this.dispatch = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        dispatch.apply(_this, args);
	      };
	      // use a Vue instance to store the state tree
	      // suppress warnings just in case the user has added
	      // some funky global mixins
	      if (!Vue) {
	        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
	      }
	      var silent = Vue.config.silent;
	      Vue.config.silent = true;
	      this._vm = new Vue({
	        data: state
	      });
	      Vue.config.silent = silent;
	      this._setupModuleState(state, modules);
	      this._setupModuleMutations(modules);
	      this._setupMiddlewares(middlewares, state);
	      // add extra warnings in strict mode
	      if (strict) {
	        this._setupMutationCheck();
	      }
	    }
	
	    /**
	     * Getter for the entire state tree.
	     * Read only.
	     *
	     * @return {Object}
	     */
	
	    babelHelpers.createClass(Store, [{
	      key: 'dispatch',
	
	      /**
	       * Dispatch an action.
	       *
	       * @param {String} type
	       */
	
	      value: function dispatch(type) {
	        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          payload[_key2 - 1] = arguments[_key2];
	        }
	
	        var silent = false;
	        // compatibility for object actions, e.g. FSA
	        if ((typeof type === 'undefined' ? 'undefined' : babelHelpers.typeof(type)) === 'object' && type.type && arguments.length === 1) {
	          payload = [type.payload];
	          if (type.silent) silent = true;
	          type = type.type;
	        }
	        var mutation = this._mutations[type];
	        var state = this.state;
	        if (mutation) {
	          this._dispatching = true;
	          // apply the mutation
	          if (Array.isArray(mutation)) {
	            mutation.forEach(function (m) {
	              return m.apply(undefined, [state].concat(babelHelpers.toConsumableArray(payload)));
	            });
	          } else {
	            mutation.apply(undefined, [state].concat(babelHelpers.toConsumableArray(payload)));
	          }
	          this._dispatching = false;
	          if (!silent) this._applyMiddlewares(type, payload);
	        } else {
	          console.warn('[vuex] Unknown mutation: ' + type);
	        }
	      }
	
	      /**
	       * Watch state changes on the store.
	       * Same API as Vue's $watch, except when watching a function,
	       * the function gets the state as the first argument.
	       *
	       * @param {String|Function} expOrFn
	       * @param {Function} cb
	       * @param {Object} [options]
	       */
	
	    }, {
	      key: 'watch',
	      value: function watch(expOrFn, cb, options) {
	        var _this2 = this;
	
	        return this._vm.$watch(function () {
	          return typeof expOrFn === 'function' ? expOrFn(_this2.state) : _this2._vm.$get(expOrFn);
	        }, cb, options);
	      }
	
	      /**
	       * Hot update mutations & modules.
	       *
	       * @param {Object} options
	       *        - {Object} [mutations]
	       *        - {Object} [modules]
	       */
	
	    }, {
	      key: 'hotUpdate',
	      value: function hotUpdate() {
	        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var mutations = _ref2.mutations;
	        var modules = _ref2.modules;
	
	        this._rootMutations = this._mutations = mutations || this._rootMutations;
	        this._setupModuleMutations(modules || this._modules);
	      }
	
	      /**
	       * Attach sub state tree of each module to the root tree.
	       *
	       * @param {Object} state
	       * @param {Object} modules
	       */
	
	    }, {
	      key: '_setupModuleState',
	      value: function _setupModuleState(state, modules) {
	        Object.keys(modules).forEach(function (key) {
	          Vue.set(state, key, modules[key].state || {});
	        });
	      }
	
	      /**
	       * Bind mutations for each module to its sub tree and
	       * merge them all into one final mutations map.
	       *
	       * @param {Object} updatedModules
	       */
	
	    }, {
	      key: '_setupModuleMutations',
	      value: function _setupModuleMutations(updatedModules) {
	        var modules = this._modules;
	        var allMutations = [this._rootMutations];
	        Object.keys(updatedModules).forEach(function (key) {
	          modules[key] = updatedModules[key];
	        });
	        Object.keys(modules).forEach(function (key) {
	          var module = modules[key];
	          if (!module || !module.mutations) return;
	          // bind mutations to sub state tree
	          var mutations = {};
	          Object.keys(module.mutations).forEach(function (name) {
	            var original = module.mutations[name];
	            mutations[name] = function (state) {
	              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	              }
	
	              original.apply(undefined, [state[key]].concat(args));
	            };
	          });
	          allMutations.push(mutations);
	        });
	        this._mutations = mergeObjects(allMutations);
	      }
	
	      /**
	       * Setup mutation check: if the vuex instance's state is mutated
	       * outside of a mutation handler, we throw en error. This effectively
	       * enforces all mutations to the state to be trackable and hot-reloadble.
	       * However, this comes at a run time cost since we are doing a deep
	       * watch on the entire state tree, so it is only enalbed with the
	       * strict option is set to true.
	       */
	
	    }, {
	      key: '_setupMutationCheck',
	      value: function _setupMutationCheck() {
	        var _this3 = this;
	
	        var Watcher = getWatcher(this._vm);
	        /* eslint-disable no-new */
	        new Watcher(this._vm, '$data', function () {
	          if (!_this3._dispatching) {
	            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
	          }
	        }, { deep: true, sync: true });
	        /* eslint-enable no-new */
	      }
	
	      /**
	       * Setup the middlewares. The devtools middleware is always
	       * included, since it does nothing if no devtool is detected.
	       *
	       * A middleware can demand the state it receives to be
	       * "snapshots", i.e. deep clones of the actual state tree.
	       *
	       * @param {Array} middlewares
	       * @param {Object} state
	       */
	
	    }, {
	      key: '_setupMiddlewares',
	      value: function _setupMiddlewares(middlewares, state) {
	        var _this4 = this;
	
	        this._middlewares = [devtoolMiddleware].concat(middlewares);
	        this._needSnapshots = middlewares.some(function (m) {
	          return m.snapshot;
	        });
	        if (this._needSnapshots) {
	          console.log('[vuex] One or more of your middlewares are taking state snapshots ' + 'for each mutation. Make sure to use them only during development.');
	        }
	        var initialSnapshot = this._prevSnapshot = this._needSnapshots ? deepClone(state) : null;
	        // call init hooks
	        this._middlewares.forEach(function (m) {
	          if (m.onInit) {
	            m.onInit(m.snapshot ? initialSnapshot : state, _this4);
	          }
	        });
	      }
	
	      /**
	       * Apply the middlewares on a given mutation.
	       *
	       * @param {String} type
	       * @param {Array} payload
	       */
	
	    }, {
	      key: '_applyMiddlewares',
	      value: function _applyMiddlewares(type, payload) {
	        var _this5 = this;
	
	        var state = this.state;
	        var prevSnapshot = this._prevSnapshot;
	        var snapshot = void 0,
	            clonedPayload = void 0;
	        if (this._needSnapshots) {
	          snapshot = this._prevSnapshot = deepClone(state);
	          clonedPayload = deepClone(payload);
	        }
	        this._middlewares.forEach(function (m) {
	          if (m.onMutation) {
	            if (m.snapshot) {
	              m.onMutation({ type: type, payload: clonedPayload }, snapshot, prevSnapshot, _this5);
	            } else {
	              m.onMutation({ type: type, payload: payload }, state, _this5);
	            }
	          }
	        });
	      }
	    }, {
	      key: 'state',
	      get: function get() {
	        return this._vm._data;
	      },
	      set: function set(v) {
	        throw new Error('[vuex] Vuex root state is read only.');
	      }
	    }]);
	    return Store;
	  }();
	
	  function install(_Vue) {
	    if (Vue) {
	      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');
	      return;
	    }
	    Vue = _Vue;
	    override(Vue);
	  }
	
	  // auto install in dist mode
	  if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }
	
	  function createLogger() {
	    console.warn('[vuex] Vuex.createLogger has been deprecated.' + 'Use `import createLogger from \'vuex/logger\' instead.');
	  }
	
	  var index = {
	    Store: Store,
	    install: install,
	    createLogger: createLogger
	  };
	
	  return index;
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	;(function () {
	
	  var vueTouch = {};
	  var Hammer =  true ? __webpack_require__(13) : window.Hammer;
	  var gestures = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe'];
	  var directions = ['up', 'down', 'left', 'right', 'horizontal', 'vertical', 'all'];
	  var customEvents = {};
	
	  if (!Hammer) {
	    throw new Error('[vue-touch] cannot locate Hammer.js.');
	  }
	
	  // exposed global options
	  vueTouch.config = {};
	
	  vueTouch.install = function (Vue) {
	
	    Vue.directive('touch', {
	
	      isFn: true,
	      acceptStatement: true,
	      priority: Vue.directive('on').priority,
	
	      bind: function bind() {
	        if (!this.el.hammer) {
	          this.el.hammer = new Hammer.Manager(this.el);
	        }
	        var mc = this.mc = this.el.hammer;
	        // determine event type
	        var event = this.arg;
	        if (!event) {
	          console.warn('[vue-touch] event type argument is required.');
	        }
	        var recognizerType, recognizer;
	
	        if (customEvents[event]) {
	          // custom event
	          var custom = customEvents[event];
	          recognizerType = custom.type;
	          recognizer = new Hammer[capitalize(recognizerType)](custom);
	          recognizer.recognizeWith(mc.recognizers);
	          mc.add(recognizer);
	        } else {
	          // built-in event
	          for (var i = 0; i < gestures.length; i++) {
	            if (event.indexOf(gestures[i]) === 0) {
	              recognizerType = gestures[i];
	              break;
	            }
	          }
	          if (!recognizerType) {
	            console.warn('[vue-touch] invalid event type: ' + event);
	            return;
	          }
	          recognizer = mc.get(recognizerType);
	          if (!recognizer) {
	            // add recognizer
	            recognizer = new Hammer[capitalize(recognizerType)]();
	            // make sure multiple recognizers work together...
	            recognizer.recognizeWith(mc.recognizers);
	            mc.add(recognizer);
	          }
	          // apply global options
	          var globalOptions = vueTouch.config[recognizerType];
	          if (globalOptions) {
	            guardDirections(globalOptions);
	            recognizer.set(globalOptions);
	          }
	          // apply local options
	          var localOptions = this.el.hammerOptions && this.el.hammerOptions[recognizerType];
	          if (localOptions) {
	            guardDirections(localOptions);
	            recognizer.set(localOptions);
	          }
	        }
	        this.recognizer = recognizer;
	      },
	
	      update: function update(fn) {
	        var mc = this.mc;
	        var event = this.arg;
	        // teardown old handler
	        if (this.handler) {
	          mc.off(event, this.handler);
	        }
	        if (typeof fn !== 'function') {
	          this.handler = null;
	          console.warn('[vue-touch] invalid handler function for v-touch: ' + this.arg + '="' + this.descriptor.raw);
	        } else {
	          mc.on(event, this.handler = fn);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.handler) {
	          this.mc.off(this.arg, this.handler);
	        }
	        if (!Object.keys(this.mc.handlers).length) {
	          this.mc.destroy();
	          this.el.hammer = null;
	        }
	      }
	    });
	
	    Vue.directive('touch-options', {
	      priority: Vue.directive('on').priority + 1,
	      update: function update(options) {
	        var opts = this.el.hammerOptions || (this.el.hammerOptions = {});
	        if (!this.arg) {
	          console.warn('[vue-touch] recognizer type argument for v-touch-options is required.');
	        } else {
	          opts[this.arg] = options;
	        }
	      }
	    });
	  };
	
	  /**
	   * Register a custom event.
	   *
	   * @param {String} event
	   * @param {Object} options - a Hammer.js recognizer option object.
	   *                           required fields:
	   *                           - type: the base recognizer to use for this event
	   */
	
	  vueTouch.registerCustomEvent = function (event, options) {
	    options.event = event;
	    customEvents[event] = options;
	  };
	
	  function capitalize(str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	  }
	
	  function guardDirections(options) {
	    var dir = options.direction;
	    if (typeof dir === 'string') {
	      var hammerDirection = 'DIRECTION_' + dir.toUpperCase();
	      if (directions.indexOf(dir) > -1 && Hammer.hasOwnProperty(hammerDirection)) {
	        options.direction = Hammer[hammerDirection];
	      } else {
	        console.warn('[vue-touch] invalid direction: ' + dir);
	      }
	    }
	  }
	
	  if (( false ? 'undefined' : _typeof(exports)) == "object") {
	    module.exports = vueTouch;
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return vueTouch;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (window.Vue) {
	    window.VueTouch = vueTouch;
	    Vue.use(vueTouch);
	  }
	})();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function (window, document, exportName, undefined) {
	    'use strict';
	
	    var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	    var TEST_ELEMENT = document.createElement('div');
	
	    var TYPE_FUNCTION = 'function';
	
	    var round = Math.round;
	    var abs = Math.abs;
	    var now = Date.now;
	
	    /**
	     * set a timeout with a given scope
	     * @param {Function} fn
	     * @param {Number} timeout
	     * @param {Object} context
	     * @returns {number}
	     */
	    function setTimeoutContext(fn, timeout, context) {
	        return setTimeout(bindFn(fn, context), timeout);
	    }
	
	    /**
	     * if the argument is an array, we want to execute the fn on each entry
	     * if it aint an array we don't want to do a thing.
	     * this is used by all the methods that accept a single and array argument.
	     * @param {*|Array} arg
	     * @param {String} fn
	     * @param {Object} [context]
	     * @returns {Boolean}
	     */
	    function invokeArrayArg(arg, fn, context) {
	        if (Array.isArray(arg)) {
	            each(arg, context[fn], context);
	            return true;
	        }
	        return false;
	    }
	
	    /**
	     * walk objects and arrays
	     * @param {Object} obj
	     * @param {Function} iterator
	     * @param {Object} context
	     */
	    function each(obj, iterator, context) {
	        var i;
	
	        if (!obj) {
	            return;
	        }
	
	        if (obj.forEach) {
	            obj.forEach(iterator, context);
	        } else if (obj.length !== undefined) {
	            i = 0;
	            while (i < obj.length) {
	                iterator.call(context, obj[i], i, obj);
	                i++;
	            }
	        } else {
	            for (i in obj) {
	                obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	            }
	        }
	    }
	
	    /**
	     * wrap a method with a deprecation warning and stack trace
	     * @param {Function} method
	     * @param {String} name
	     * @param {String} message
	     * @returns {Function} A new function wrapping the supplied method.
	     */
	    function deprecate(method, name, message) {
	        var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	        return function () {
	            var e = new Error('get-stack-trace');
	            var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
	
	            var log = window.console && (window.console.warn || window.console.log);
	            if (log) {
	                log.call(window.console, deprecationMessage, stack);
	            }
	            return method.apply(this, arguments);
	        };
	    }
	
	    /**
	     * extend object.
	     * means that properties in dest will be overwritten by the ones in src.
	     * @param {Object} target
	     * @param {...Object} objects_to_assign
	     * @returns {Object} target
	     */
	    var assign;
	    if (typeof Object.assign !== 'function') {
	        assign = function assign(target) {
	            if (target === undefined || target === null) {
	                throw new TypeError('Cannot convert undefined or null to object');
	            }
	
	            var output = Object(target);
	            for (var index = 1; index < arguments.length; index++) {
	                var source = arguments[index];
	                if (source !== undefined && source !== null) {
	                    for (var nextKey in source) {
	                        if (source.hasOwnProperty(nextKey)) {
	                            output[nextKey] = source[nextKey];
	                        }
	                    }
	                }
	            }
	            return output;
	        };
	    } else {
	        assign = Object.assign;
	    }
	
	    /**
	     * extend object.
	     * means that properties in dest will be overwritten by the ones in src.
	     * @param {Object} dest
	     * @param {Object} src
	     * @param {Boolean} [merge=false]
	     * @returns {Object} dest
	     */
	    var extend = deprecate(function extend(dest, src, merge) {
	        var keys = Object.keys(src);
	        var i = 0;
	        while (i < keys.length) {
	            if (!merge || merge && dest[keys[i]] === undefined) {
	                dest[keys[i]] = src[keys[i]];
	            }
	            i++;
	        }
	        return dest;
	    }, 'extend', 'Use `assign`.');
	
	    /**
	     * merge the values from src in the dest.
	     * means that properties that exist in dest will not be overwritten by src
	     * @param {Object} dest
	     * @param {Object} src
	     * @returns {Object} dest
	     */
	    var merge = deprecate(function merge(dest, src) {
	        return extend(dest, src, true);
	    }, 'merge', 'Use `assign`.');
	
	    /**
	     * simple class inheritance
	     * @param {Function} child
	     * @param {Function} base
	     * @param {Object} [properties]
	     */
	    function inherit(child, base, properties) {
	        var baseP = base.prototype,
	            childP;
	
	        childP = child.prototype = Object.create(baseP);
	        childP.constructor = child;
	        childP._super = baseP;
	
	        if (properties) {
	            assign(childP, properties);
	        }
	    }
	
	    /**
	     * simple function bind
	     * @param {Function} fn
	     * @param {Object} context
	     * @returns {Function}
	     */
	    function bindFn(fn, context) {
	        return function boundFn() {
	            return fn.apply(context, arguments);
	        };
	    }
	
	    /**
	     * let a boolean value also be a function that must return a boolean
	     * this first item in args will be used as the context
	     * @param {Boolean|Function} val
	     * @param {Array} [args]
	     * @returns {Boolean}
	     */
	    function boolOrFn(val, args) {
	        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == TYPE_FUNCTION) {
	            return val.apply(args ? args[0] || undefined : undefined, args);
	        }
	        return val;
	    }
	
	    /**
	     * use the val2 when val1 is undefined
	     * @param {*} val1
	     * @param {*} val2
	     * @returns {*}
	     */
	    function ifUndefined(val1, val2) {
	        return val1 === undefined ? val2 : val1;
	    }
	
	    /**
	     * addEventListener with multiple events at once
	     * @param {EventTarget} target
	     * @param {String} types
	     * @param {Function} handler
	     */
	    function addEventListeners(target, types, handler) {
	        each(splitStr(types), function (type) {
	            target.addEventListener(type, handler, false);
	        });
	    }
	
	    /**
	     * removeEventListener with multiple events at once
	     * @param {EventTarget} target
	     * @param {String} types
	     * @param {Function} handler
	     */
	    function removeEventListeners(target, types, handler) {
	        each(splitStr(types), function (type) {
	            target.removeEventListener(type, handler, false);
	        });
	    }
	
	    /**
	     * find if a node is in the given parent
	     * @method hasParent
	     * @param {HTMLElement} node
	     * @param {HTMLElement} parent
	     * @return {Boolean} found
	     */
	    function hasParent(node, parent) {
	        while (node) {
	            if (node == parent) {
	                return true;
	            }
	            node = node.parentNode;
	        }
	        return false;
	    }
	
	    /**
	     * small indexOf wrapper
	     * @param {String} str
	     * @param {String} find
	     * @returns {Boolean} found
	     */
	    function inStr(str, find) {
	        return str.indexOf(find) > -1;
	    }
	
	    /**
	     * split string on whitespace
	     * @param {String} str
	     * @returns {Array} words
	     */
	    function splitStr(str) {
	        return str.trim().split(/\s+/g);
	    }
	
	    /**
	     * find if a array contains the object using indexOf or a simple polyFill
	     * @param {Array} src
	     * @param {String} find
	     * @param {String} [findByKey]
	     * @return {Boolean|Number} false when not found, or the index
	     */
	    function inArray(src, find, findByKey) {
	        if (src.indexOf && !findByKey) {
	            return src.indexOf(find);
	        } else {
	            var i = 0;
	            while (i < src.length) {
	                if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
	                    return i;
	                }
	                i++;
	            }
	            return -1;
	        }
	    }
	
	    /**
	     * convert array-like objects to real arrays
	     * @param {Object} obj
	     * @returns {Array}
	     */
	    function toArray(obj) {
	        return Array.prototype.slice.call(obj, 0);
	    }
	
	    /**
	     * unique array with objects based on a key (like 'id') or just by the array's value
	     * @param {Array} src [{id:1},{id:2},{id:1}]
	     * @param {String} [key]
	     * @param {Boolean} [sort=False]
	     * @returns {Array} [{id:1},{id:2}]
	     */
	    function uniqueArray(src, key, sort) {
	        var results = [];
	        var values = [];
	        var i = 0;
	
	        while (i < src.length) {
	            var val = key ? src[i][key] : src[i];
	            if (inArray(values, val) < 0) {
	                results.push(src[i]);
	            }
	            values[i] = val;
	            i++;
	        }
	
	        if (sort) {
	            if (!key) {
	                results = results.sort();
	            } else {
	                results = results.sort(function sortUniqueArray(a, b) {
	                    return a[key] > b[key];
	                });
	            }
	        }
	
	        return results;
	    }
	
	    /**
	     * get the prefixed property
	     * @param {Object} obj
	     * @param {String} property
	     * @returns {String|Undefined} prefixed
	     */
	    function prefixed(obj, property) {
	        var prefix, prop;
	        var camelProp = property[0].toUpperCase() + property.slice(1);
	
	        var i = 0;
	        while (i < VENDOR_PREFIXES.length) {
	            prefix = VENDOR_PREFIXES[i];
	            prop = prefix ? prefix + camelProp : property;
	
	            if (prop in obj) {
	                return prop;
	            }
	            i++;
	        }
	        return undefined;
	    }
	
	    /**
	     * get a unique id
	     * @returns {number} uniqueId
	     */
	    var _uniqueId = 1;
	    function uniqueId() {
	        return _uniqueId++;
	    }
	
	    /**
	     * get the window object of an element
	     * @param {HTMLElement} element
	     * @returns {DocumentView|Window}
	     */
	    function getWindowForElement(element) {
	        var doc = element.ownerDocument || element;
	        return doc.defaultView || doc.parentWindow || window;
	    }
	
	    var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
	
	    var SUPPORT_TOUCH = 'ontouchstart' in window;
	    var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	    var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
	
	    var INPUT_TYPE_TOUCH = 'touch';
	    var INPUT_TYPE_PEN = 'pen';
	    var INPUT_TYPE_MOUSE = 'mouse';
	    var INPUT_TYPE_KINECT = 'kinect';
	
	    var COMPUTE_INTERVAL = 25;
	
	    var INPUT_START = 1;
	    var INPUT_MOVE = 2;
	    var INPUT_END = 4;
	    var INPUT_CANCEL = 8;
	
	    var DIRECTION_NONE = 1;
	    var DIRECTION_LEFT = 2;
	    var DIRECTION_RIGHT = 4;
	    var DIRECTION_UP = 8;
	    var DIRECTION_DOWN = 16;
	
	    var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	    var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	    var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
	
	    var PROPS_XY = ['x', 'y'];
	    var PROPS_CLIENT_XY = ['clientX', 'clientY'];
	
	    /**
	     * create new input type manager
	     * @param {Manager} manager
	     * @param {Function} callback
	     * @returns {Input}
	     * @constructor
	     */
	    function Input(manager, callback) {
	        var self = this;
	        this.manager = manager;
	        this.callback = callback;
	        this.element = manager.element;
	        this.target = manager.options.inputTarget;
	
	        // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	        // so when disabled the input events are completely bypassed.
	        this.domHandler = function (ev) {
	            if (boolOrFn(manager.options.enable, [manager])) {
	                self.handler(ev);
	            }
	        };
	
	        this.init();
	    }
	
	    Input.prototype = {
	        /**
	         * should handle the inputEvent data and trigger the callback
	         * @virtual
	         */
	        handler: function handler() {},
	
	        /**
	         * bind the events
	         */
	        init: function init() {
	            this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	            this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	            this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	        },
	
	        /**
	         * unbind the events
	         */
	        destroy: function destroy() {
	            this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	            this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	            this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	        }
	    };
	
	    /**
	     * create new input type manager
	     * called by the Manager constructor
	     * @param {Hammer} manager
	     * @returns {Input}
	     */
	    function createInputInstance(manager) {
	        var Type;
	        var inputClass = manager.options.inputClass;
	
	        if (inputClass) {
	            Type = inputClass;
	        } else if (SUPPORT_POINTER_EVENTS) {
	            Type = PointerEventInput;
	        } else if (SUPPORT_ONLY_TOUCH) {
	            Type = TouchInput;
	        } else if (!SUPPORT_TOUCH) {
	            Type = MouseInput;
	        } else {
	            Type = TouchMouseInput;
	        }
	        return new Type(manager, inputHandler);
	    }
	
	    /**
	     * handle input events
	     * @param {Manager} manager
	     * @param {String} eventType
	     * @param {Object} input
	     */
	    function inputHandler(manager, eventType, input) {
	        var pointersLen = input.pointers.length;
	        var changedPointersLen = input.changedPointers.length;
	        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
	        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
	
	        input.isFirst = !!isFirst;
	        input.isFinal = !!isFinal;
	
	        if (isFirst) {
	            manager.session = {};
	        }
	
	        // source event is the normalized value of the domEvents
	        // like 'touchstart, mouseup, pointerdown'
	        input.eventType = eventType;
	
	        // compute scale, rotation etc
	        computeInputData(manager, input);
	
	        // emit secret event
	        manager.emit('hammer.input', input);
	
	        manager.recognize(input);
	        manager.session.prevInput = input;
	    }
	
	    /**
	     * extend the data with some usable properties like scale, rotate, velocity etc
	     * @param {Object} manager
	     * @param {Object} input
	     */
	    function computeInputData(manager, input) {
	        var session = manager.session;
	        var pointers = input.pointers;
	        var pointersLength = pointers.length;
	
	        // store the first input to calculate the distance and direction
	        if (!session.firstInput) {
	            session.firstInput = simpleCloneInputData(input);
	        }
	
	        // to compute scale and rotation we need to store the multiple touches
	        if (pointersLength > 1 && !session.firstMultiple) {
	            session.firstMultiple = simpleCloneInputData(input);
	        } else if (pointersLength === 1) {
	            session.firstMultiple = false;
	        }
	
	        var firstInput = session.firstInput;
	        var firstMultiple = session.firstMultiple;
	        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
	
	        var center = input.center = getCenter(pointers);
	        input.timeStamp = now();
	        input.deltaTime = input.timeStamp - firstInput.timeStamp;
	
	        input.angle = getAngle(offsetCenter, center);
	        input.distance = getDistance(offsetCenter, center);
	
	        computeDeltaXY(session, input);
	        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
	
	        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	        input.overallVelocityX = overallVelocity.x;
	        input.overallVelocityY = overallVelocity.y;
	        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
	
	        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
	
	        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
	
	        computeIntervalInputData(session, input);
	
	        // find the correct target
	        var target = manager.element;
	        if (hasParent(input.srcEvent.target, target)) {
	            target = input.srcEvent.target;
	        }
	        input.target = target;
	    }
	
	    function computeDeltaXY(session, input) {
	        var center = input.center;
	        var offset = session.offsetDelta || {};
	        var prevDelta = session.prevDelta || {};
	        var prevInput = session.prevInput || {};
	
	        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	            prevDelta = session.prevDelta = {
	                x: prevInput.deltaX || 0,
	                y: prevInput.deltaY || 0
	            };
	
	            offset = session.offsetDelta = {
	                x: center.x,
	                y: center.y
	            };
	        }
	
	        input.deltaX = prevDelta.x + (center.x - offset.x);
	        input.deltaY = prevDelta.y + (center.y - offset.y);
	    }
	
	    /**
	     * velocity is calculated every x ms
	     * @param {Object} session
	     * @param {Object} input
	     */
	    function computeIntervalInputData(session, input) {
	        var last = session.lastInterval || input,
	            deltaTime = input.timeStamp - last.timeStamp,
	            velocity,
	            velocityX,
	            velocityY,
	            direction;
	
	        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	            var deltaX = input.deltaX - last.deltaX;
	            var deltaY = input.deltaY - last.deltaY;
	
	            var v = getVelocity(deltaTime, deltaX, deltaY);
	            velocityX = v.x;
	            velocityY = v.y;
	            velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
	            direction = getDirection(deltaX, deltaY);
	
	            session.lastInterval = input;
	        } else {
	            // use latest velocity info if it doesn't overtake a minimum period
	            velocity = last.velocity;
	            velocityX = last.velocityX;
	            velocityY = last.velocityY;
	            direction = last.direction;
	        }
	
	        input.velocity = velocity;
	        input.velocityX = velocityX;
	        input.velocityY = velocityY;
	        input.direction = direction;
	    }
	
	    /**
	     * create a simple clone from the input used for storage of firstInput and firstMultiple
	     * @param {Object} input
	     * @returns {Object} clonedInputData
	     */
	    function simpleCloneInputData(input) {
	        // make a simple copy of the pointers because we will get a reference if we don't
	        // we only need clientXY for the calculations
	        var pointers = [];
	        var i = 0;
	        while (i < input.pointers.length) {
	            pointers[i] = {
	                clientX: round(input.pointers[i].clientX),
	                clientY: round(input.pointers[i].clientY)
	            };
	            i++;
	        }
	
	        return {
	            timeStamp: now(),
	            pointers: pointers,
	            center: getCenter(pointers),
	            deltaX: input.deltaX,
	            deltaY: input.deltaY
	        };
	    }
	
	    /**
	     * get the center of all the pointers
	     * @param {Array} pointers
	     * @return {Object} center contains `x` and `y` properties
	     */
	    function getCenter(pointers) {
	        var pointersLength = pointers.length;
	
	        // no need to loop when only one touch
	        if (pointersLength === 1) {
	            return {
	                x: round(pointers[0].clientX),
	                y: round(pointers[0].clientY)
	            };
	        }
	
	        var x = 0,
	            y = 0,
	            i = 0;
	        while (i < pointersLength) {
	            x += pointers[i].clientX;
	            y += pointers[i].clientY;
	            i++;
	        }
	
	        return {
	            x: round(x / pointersLength),
	            y: round(y / pointersLength)
	        };
	    }
	
	    /**
	     * calculate the velocity between two points. unit is in px per ms.
	     * @param {Number} deltaTime
	     * @param {Number} x
	     * @param {Number} y
	     * @return {Object} velocity `x` and `y`
	     */
	    function getVelocity(deltaTime, x, y) {
	        return {
	            x: x / deltaTime || 0,
	            y: y / deltaTime || 0
	        };
	    }
	
	    /**
	     * get the direction between two points
	     * @param {Number} x
	     * @param {Number} y
	     * @return {Number} direction
	     */
	    function getDirection(x, y) {
	        if (x === y) {
	            return DIRECTION_NONE;
	        }
	
	        if (abs(x) >= abs(y)) {
	            return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	        }
	        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	    }
	
	    /**
	     * calculate the absolute distance between two points
	     * @param {Object} p1 {x, y}
	     * @param {Object} p2 {x, y}
	     * @param {Array} [props] containing x and y keys
	     * @return {Number} distance
	     */
	    function getDistance(p1, p2, props) {
	        if (!props) {
	            props = PROPS_XY;
	        }
	        var x = p2[props[0]] - p1[props[0]],
	            y = p2[props[1]] - p1[props[1]];
	
	        return Math.sqrt(x * x + y * y);
	    }
	
	    /**
	     * calculate the angle between two coordinates
	     * @param {Object} p1
	     * @param {Object} p2
	     * @param {Array} [props] containing x and y keys
	     * @return {Number} angle
	     */
	    function getAngle(p1, p2, props) {
	        if (!props) {
	            props = PROPS_XY;
	        }
	        var x = p2[props[0]] - p1[props[0]],
	            y = p2[props[1]] - p1[props[1]];
	        return Math.atan2(y, x) * 180 / Math.PI;
	    }
	
	    /**
	     * calculate the rotation degrees between two pointersets
	     * @param {Array} start array of pointers
	     * @param {Array} end array of pointers
	     * @return {Number} rotation
	     */
	    function getRotation(start, end) {
	        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	    }
	
	    /**
	     * calculate the scale factor between two pointersets
	     * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	     * @param {Array} start array of pointers
	     * @param {Array} end array of pointers
	     * @return {Number} scale
	     */
	    function getScale(start, end) {
	        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	    }
	
	    var MOUSE_INPUT_MAP = {
	        mousedown: INPUT_START,
	        mousemove: INPUT_MOVE,
	        mouseup: INPUT_END
	    };
	
	    var MOUSE_ELEMENT_EVENTS = 'mousedown';
	    var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
	
	    /**
	     * Mouse events input
	     * @constructor
	     * @extends Input
	     */
	    function MouseInput() {
	        this.evEl = MOUSE_ELEMENT_EVENTS;
	        this.evWin = MOUSE_WINDOW_EVENTS;
	
	        this.pressed = false; // mousedown state
	
	        Input.apply(this, arguments);
	    }
	
	    inherit(MouseInput, Input, {
	        /**
	         * handle mouse events
	         * @param {Object} ev
	         */
	        handler: function MEhandler(ev) {
	            var eventType = MOUSE_INPUT_MAP[ev.type];
	
	            // on start we want to have the left mouse button down
	            if (eventType & INPUT_START && ev.button === 0) {
	                this.pressed = true;
	            }
	
	            if (eventType & INPUT_MOVE && ev.which !== 1) {
	                eventType = INPUT_END;
	            }
	
	            // mouse must be down
	            if (!this.pressed) {
	                return;
	            }
	
	            if (eventType & INPUT_END) {
	                this.pressed = false;
	            }
	
	            this.callback(this.manager, eventType, {
	                pointers: [ev],
	                changedPointers: [ev],
	                pointerType: INPUT_TYPE_MOUSE,
	                srcEvent: ev
	            });
	        }
	    });
	
	    var POINTER_INPUT_MAP = {
	        pointerdown: INPUT_START,
	        pointermove: INPUT_MOVE,
	        pointerup: INPUT_END,
	        pointercancel: INPUT_CANCEL,
	        pointerout: INPUT_CANCEL
	    };
	
	    // in IE10 the pointer types is defined as an enum
	    var IE10_POINTER_TYPE_ENUM = {
	        2: INPUT_TYPE_TOUCH,
	        3: INPUT_TYPE_PEN,
	        4: INPUT_TYPE_MOUSE,
	        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	    };
	
	    var POINTER_ELEMENT_EVENTS = 'pointerdown';
	    var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
	
	    // IE10 has prefixed support, and case-sensitive
	    if (window.MSPointerEvent && !window.PointerEvent) {
	        POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	        POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	    }
	
	    /**
	     * Pointer events input
	     * @constructor
	     * @extends Input
	     */
	    function PointerEventInput() {
	        this.evEl = POINTER_ELEMENT_EVENTS;
	        this.evWin = POINTER_WINDOW_EVENTS;
	
	        Input.apply(this, arguments);
	
	        this.store = this.manager.session.pointerEvents = [];
	    }
	
	    inherit(PointerEventInput, Input, {
	        /**
	         * handle mouse events
	         * @param {Object} ev
	         */
	        handler: function PEhandler(ev) {
	            var store = this.store;
	            var removePointer = false;
	
	            var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	            var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	            var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
	
	            var isTouch = pointerType == INPUT_TYPE_TOUCH;
	
	            // get index of the event in the store
	            var storeIndex = inArray(store, ev.pointerId, 'pointerId');
	
	            // start and mouse must be down
	            if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	                if (storeIndex < 0) {
	                    store.push(ev);
	                    storeIndex = store.length - 1;
	                }
	            } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	                removePointer = true;
	            }
	
	            // it not found, so the pointer hasn't been down (so it's probably a hover)
	            if (storeIndex < 0) {
	                return;
	            }
	
	            // update the event in the store
	            store[storeIndex] = ev;
	
	            this.callback(this.manager, eventType, {
	                pointers: store,
	                changedPointers: [ev],
	                pointerType: pointerType,
	                srcEvent: ev
	            });
	
	            if (removePointer) {
	                // remove from the store
	                store.splice(storeIndex, 1);
	            }
	        }
	    });
	
	    var SINGLE_TOUCH_INPUT_MAP = {
	        touchstart: INPUT_START,
	        touchmove: INPUT_MOVE,
	        touchend: INPUT_END,
	        touchcancel: INPUT_CANCEL
	    };
	
	    var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	    var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	    /**
	     * Touch events input
	     * @constructor
	     * @extends Input
	     */
	    function SingleTouchInput() {
	        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	        this.started = false;
	
	        Input.apply(this, arguments);
	    }
	
	    inherit(SingleTouchInput, Input, {
	        handler: function TEhandler(ev) {
	            var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
	
	            // should we handle the touch events?
	            if (type === INPUT_START) {
	                this.started = true;
	            }
	
	            if (!this.started) {
	                return;
	            }
	
	            var touches = normalizeSingleTouches.call(this, ev, type);
	
	            // when done, reset the started state
	            if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	                this.started = false;
	            }
	
	            this.callback(this.manager, type, {
	                pointers: touches[0],
	                changedPointers: touches[1],
	                pointerType: INPUT_TYPE_TOUCH,
	                srcEvent: ev
	            });
	        }
	    });
	
	    /**
	     * @this {TouchInput}
	     * @param {Object} ev
	     * @param {Number} type flag
	     * @returns {undefined|Array} [all, changed]
	     */
	    function normalizeSingleTouches(ev, type) {
	        var all = toArray(ev.touches);
	        var changed = toArray(ev.changedTouches);
	
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            all = uniqueArray(all.concat(changed), 'identifier', true);
	        }
	
	        return [all, changed];
	    }
	
	    var TOUCH_INPUT_MAP = {
	        touchstart: INPUT_START,
	        touchmove: INPUT_MOVE,
	        touchend: INPUT_END,
	        touchcancel: INPUT_CANCEL
	    };
	
	    var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	    /**
	     * Multi-user touch events input
	     * @constructor
	     * @extends Input
	     */
	    function TouchInput() {
	        this.evTarget = TOUCH_TARGET_EVENTS;
	        this.targetIds = {};
	
	        Input.apply(this, arguments);
	    }
	
	    inherit(TouchInput, Input, {
	        handler: function MTEhandler(ev) {
	            var type = TOUCH_INPUT_MAP[ev.type];
	            var touches = getTouches.call(this, ev, type);
	            if (!touches) {
	                return;
	            }
	
	            this.callback(this.manager, type, {
	                pointers: touches[0],
	                changedPointers: touches[1],
	                pointerType: INPUT_TYPE_TOUCH,
	                srcEvent: ev
	            });
	        }
	    });
	
	    /**
	     * @this {TouchInput}
	     * @param {Object} ev
	     * @param {Number} type flag
	     * @returns {undefined|Array} [all, changed]
	     */
	    function getTouches(ev, type) {
	        var allTouches = toArray(ev.touches);
	        var targetIds = this.targetIds;
	
	        // when there is only one touch, the process can be simplified
	        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	            targetIds[allTouches[0].identifier] = true;
	            return [allTouches, allTouches];
	        }
	
	        var i,
	            targetTouches,
	            changedTouches = toArray(ev.changedTouches),
	            changedTargetTouches = [],
	            target = this.target;
	
	        // get target touches from touches
	        targetTouches = allTouches.filter(function (touch) {
	            return hasParent(touch.target, target);
	        });
	
	        // collect touches
	        if (type === INPUT_START) {
	            i = 0;
	            while (i < targetTouches.length) {
	                targetIds[targetTouches[i].identifier] = true;
	                i++;
	            }
	        }
	
	        // filter changed touches to only contain touches that exist in the collected target ids
	        i = 0;
	        while (i < changedTouches.length) {
	            if (targetIds[changedTouches[i].identifier]) {
	                changedTargetTouches.push(changedTouches[i]);
	            }
	
	            // cleanup removed touches
	            if (type & (INPUT_END | INPUT_CANCEL)) {
	                delete targetIds[changedTouches[i].identifier];
	            }
	            i++;
	        }
	
	        if (!changedTargetTouches.length) {
	            return;
	        }
	
	        return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
	    }
	
	    /**
	     * Combined touch and mouse input
	     *
	     * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	     * This because touch devices also emit mouse events while doing a touch.
	     *
	     * @constructor
	     * @extends Input
	     */
	
	    var DEDUP_TIMEOUT = 2500;
	    var DEDUP_DISTANCE = 25;
	
	    function TouchMouseInput() {
	        Input.apply(this, arguments);
	
	        var handler = bindFn(this.handler, this);
	        this.touch = new TouchInput(this.manager, handler);
	        this.mouse = new MouseInput(this.manager, handler);
	
	        this.primaryTouch = null;
	        this.lastTouches = [];
	    }
	
	    inherit(TouchMouseInput, Input, {
	        /**
	         * handle mouse and touch events
	         * @param {Hammer} manager
	         * @param {String} inputEvent
	         * @param {Object} inputData
	         */
	        handler: function TMEhandler(manager, inputEvent, inputData) {
	            var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
	                isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
	
	            if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	                return;
	            }
	
	            // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	            if (isTouch) {
	                recordTouches.call(this, inputEvent, inputData);
	            } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	                return;
	            }
	
	            this.callback(manager, inputEvent, inputData);
	        },
	
	        /**
	         * remove the event listeners
	         */
	        destroy: function destroy() {
	            this.touch.destroy();
	            this.mouse.destroy();
	        }
	    });
	
	    function recordTouches(eventType, eventData) {
	        if (eventType & INPUT_START) {
	            this.primaryTouch = eventData.changedPointers[0].identifier;
	            setLastTouch.call(this, eventData);
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            setLastTouch.call(this, eventData);
	        }
	    }
	
	    function setLastTouch(eventData) {
	        var touch = eventData.changedPointers[0];
	
	        if (touch.identifier === this.primaryTouch) {
	            var lastTouch = { x: touch.clientX, y: touch.clientY };
	            this.lastTouches.push(lastTouch);
	            var lts = this.lastTouches;
	            var removeLastTouch = function removeLastTouch() {
	                var i = lts.indexOf(lastTouch);
	                if (i > -1) {
	                    lts.splice(i, 1);
	                }
	            };
	            setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	        }
	    }
	
	    function isSyntheticEvent(eventData) {
	        var x = eventData.srcEvent.clientX,
	            y = eventData.srcEvent.clientY;
	        for (var i = 0; i < this.lastTouches.length; i++) {
	            var t = this.lastTouches[i];
	            var dx = Math.abs(x - t.x),
	                dy = Math.abs(y - t.y);
	            if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	                return true;
	            }
	        }
	        return false;
	    }
	
	    var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	    var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
	
	    // magical touchAction value
	    var TOUCH_ACTION_COMPUTE = 'compute';
	    var TOUCH_ACTION_AUTO = 'auto';
	    var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	    var TOUCH_ACTION_NONE = 'none';
	    var TOUCH_ACTION_PAN_X = 'pan-x';
	    var TOUCH_ACTION_PAN_Y = 'pan-y';
	    var TOUCH_ACTION_MAP = getTouchActionProps();
	
	    /**
	     * Touch Action
	     * sets the touchAction property or uses the js alternative
	     * @param {Manager} manager
	     * @param {String} value
	     * @constructor
	     */
	    function TouchAction(manager, value) {
	        this.manager = manager;
	        this.set(value);
	    }
	
	    TouchAction.prototype = {
	        /**
	         * set the touchAction value on the element or enable the polyfill
	         * @param {String} value
	         */
	        set: function set(value) {
	            // find out the touch-action by the event handlers
	            if (value == TOUCH_ACTION_COMPUTE) {
	                value = this.compute();
	            }
	
	            if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	                this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	            }
	            this.actions = value.toLowerCase().trim();
	        },
	
	        /**
	         * just re-set the touchAction value
	         */
	        update: function update() {
	            this.set(this.manager.options.touchAction);
	        },
	
	        /**
	         * compute the value for the touchAction property based on the recognizer's settings
	         * @returns {String} value
	         */
	        compute: function compute() {
	            var actions = [];
	            each(this.manager.recognizers, function (recognizer) {
	                if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                    actions = actions.concat(recognizer.getTouchAction());
	                }
	            });
	            return cleanTouchActions(actions.join(' '));
	        },
	
	        /**
	         * this method is called on each input cycle and provides the preventing of the browser behavior
	         * @param {Object} input
	         */
	        preventDefaults: function preventDefaults(input) {
	            var srcEvent = input.srcEvent;
	            var direction = input.offsetDirection;
	
	            // if the touch action did prevented once this session
	            if (this.manager.session.prevented) {
	                srcEvent.preventDefault();
	                return;
	            }
	
	            var actions = this.actions;
	            var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	            var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	            var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
	
	            if (hasNone) {
	                //do not prevent defaults if this is a tap gesture
	
	                var isTapPointer = input.pointers.length === 1;
	                var isTapMovement = input.distance < 2;
	                var isTapTouchTime = input.deltaTime < 250;
	
	                if (isTapPointer && isTapMovement && isTapTouchTime) {
	                    return;
	                }
	            }
	
	            if (hasPanX && hasPanY) {
	                // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	                return;
	            }
	
	            if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
	                return this.preventSrc(srcEvent);
	            }
	        },
	
	        /**
	         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	         * @param {Object} srcEvent
	         */
	        preventSrc: function preventSrc(srcEvent) {
	            this.manager.session.prevented = true;
	            srcEvent.preventDefault();
	        }
	    };
	
	    /**
	     * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	     * @param {String} actions
	     * @returns {*}
	     */
	    function cleanTouchActions(actions) {
	        // none
	        if (inStr(actions, TOUCH_ACTION_NONE)) {
	            return TOUCH_ACTION_NONE;
	        }
	
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	
	        // if both pan-x and pan-y are set (different recognizers
	        // for different directions, e.g. horizontal pan but vertical swipe?)
	        // we need none (as otherwise with pan-x pan-y combined none of these
	        // recognizers will work, since the browser would handle all panning
	        if (hasPanX && hasPanY) {
	            return TOUCH_ACTION_NONE;
	        }
	
	        // pan-x OR pan-y
	        if (hasPanX || hasPanY) {
	            return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	        }
	
	        // manipulation
	        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	            return TOUCH_ACTION_MANIPULATION;
	        }
	
	        return TOUCH_ACTION_AUTO;
	    }
	
	    function getTouchActionProps() {
	        if (!NATIVE_TOUCH_ACTION) {
	            return false;
	        }
	        var touchMap = {};
	        var cssSupports = window.CSS && window.CSS.supports;
	        ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
	
	            // If css.supports is not supported but there is native touch-action assume it supports
	            // all values. This is the case for IE 10 and 11.
	            touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	        });
	        return touchMap;
	    }
	
	    /**
	     * Recognizer flow explained; *
	     * All recognizers have the initial state of POSSIBLE when a input session starts.
	     * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	     * Example session for mouse-input: mousedown -> mousemove -> mouseup
	     *
	     * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	     * which determines with state it should be.
	     *
	     * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	     * POSSIBLE to give it another change on the next cycle.
	     *
	     *               Possible
	     *                  |
	     *            +-----+---------------+
	     *            |                     |
	     *      +-----+-----+               |
	     *      |           |               |
	     *   Failed      Cancelled          |
	     *                          +-------+------+
	     *                          |              |
	     *                      Recognized       Began
	     *                                         |
	     *                                      Changed
	     *                                         |
	     *                                  Ended/Recognized
	     */
	    var STATE_POSSIBLE = 1;
	    var STATE_BEGAN = 2;
	    var STATE_CHANGED = 4;
	    var STATE_ENDED = 8;
	    var STATE_RECOGNIZED = STATE_ENDED;
	    var STATE_CANCELLED = 16;
	    var STATE_FAILED = 32;
	
	    /**
	     * Recognizer
	     * Every recognizer needs to extend from this class.
	     * @constructor
	     * @param {Object} options
	     */
	    function Recognizer(options) {
	        this.options = assign({}, this.defaults, options || {});
	
	        this.id = uniqueId();
	
	        this.manager = null;
	
	        // default is enable true
	        this.options.enable = ifUndefined(this.options.enable, true);
	
	        this.state = STATE_POSSIBLE;
	
	        this.simultaneous = {};
	        this.requireFail = [];
	    }
	
	    Recognizer.prototype = {
	        /**
	         * @virtual
	         * @type {Object}
	         */
	        defaults: {},
	
	        /**
	         * set options
	         * @param {Object} options
	         * @return {Recognizer}
	         */
	        set: function set(options) {
	            assign(this.options, options);
	
	            // also update the touchAction, in case something changed about the directions/enabled state
	            this.manager && this.manager.touchAction.update();
	            return this;
	        },
	
	        /**
	         * recognize simultaneous with an other recognizer.
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        recognizeWith: function recognizeWith(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	                return this;
	            }
	
	            var simultaneous = this.simultaneous;
	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            if (!simultaneous[otherRecognizer.id]) {
	                simultaneous[otherRecognizer.id] = otherRecognizer;
	                otherRecognizer.recognizeWith(this);
	            }
	            return this;
	        },
	
	        /**
	         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        dropRecognizeWith: function dropRecognizeWith(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	                return this;
	            }
	
	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            delete this.simultaneous[otherRecognizer.id];
	            return this;
	        },
	
	        /**
	         * recognizer can only run when an other is failing
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        requireFailure: function requireFailure(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	                return this;
	            }
	
	            var requireFail = this.requireFail;
	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            if (inArray(requireFail, otherRecognizer) === -1) {
	                requireFail.push(otherRecognizer);
	                otherRecognizer.requireFailure(this);
	            }
	            return this;
	        },
	
	        /**
	         * drop the requireFailure link. it does not remove the link on the other recognizer.
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        dropRequireFailure: function dropRequireFailure(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	                return this;
	            }
	
	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            var index = inArray(this.requireFail, otherRecognizer);
	            if (index > -1) {
	                this.requireFail.splice(index, 1);
	            }
	            return this;
	        },
	
	        /**
	         * has require failures boolean
	         * @returns {boolean}
	         */
	        hasRequireFailures: function hasRequireFailures() {
	            return this.requireFail.length > 0;
	        },
	
	        /**
	         * if the recognizer can recognize simultaneous with an other recognizer
	         * @param {Recognizer} otherRecognizer
	         * @returns {Boolean}
	         */
	        canRecognizeWith: function canRecognizeWith(otherRecognizer) {
	            return !!this.simultaneous[otherRecognizer.id];
	        },
	
	        /**
	         * You should use `tryEmit` instead of `emit` directly to check
	         * that all the needed recognizers has failed before emitting.
	         * @param {Object} input
	         */
	        emit: function emit(input) {
	            var self = this;
	            var state = this.state;
	
	            function emit(event) {
	                self.manager.emit(event, input);
	            }
	
	            // 'panstart' and 'panmove'
	            if (state < STATE_ENDED) {
	                emit(self.options.event + stateStr(state));
	            }
	
	            emit(self.options.event); // simple 'eventName' events
	
	            if (input.additionalEvent) {
	                // additional event(panleft, panright, pinchin, pinchout...)
	                emit(input.additionalEvent);
	            }
	
	            // panend and pancancel
	            if (state >= STATE_ENDED) {
	                emit(self.options.event + stateStr(state));
	            }
	        },
	
	        /**
	         * Check that all the require failure recognizers has failed,
	         * if true, it emits a gesture event,
	         * otherwise, setup the state to FAILED.
	         * @param {Object} input
	         */
	        tryEmit: function tryEmit(input) {
	            if (this.canEmit()) {
	                return this.emit(input);
	            }
	            // it's failing anyway
	            this.state = STATE_FAILED;
	        },
	
	        /**
	         * can we emit?
	         * @returns {boolean}
	         */
	        canEmit: function canEmit() {
	            var i = 0;
	            while (i < this.requireFail.length) {
	                if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                    return false;
	                }
	                i++;
	            }
	            return true;
	        },
	
	        /**
	         * update the recognizer
	         * @param {Object} inputData
	         */
	        recognize: function recognize(inputData) {
	            // make a new copy of the inputData
	            // so we can change the inputData without messing up the other recognizers
	            var inputDataClone = assign({}, inputData);
	
	            // is is enabled and allow recognizing?
	            if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	                this.reset();
	                this.state = STATE_FAILED;
	                return;
	            }
	
	            // reset when we've reached the end
	            if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	                this.state = STATE_POSSIBLE;
	            }
	
	            this.state = this.process(inputDataClone);
	
	            // the recognizer has recognized a gesture
	            // so trigger an event
	            if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	                this.tryEmit(inputDataClone);
	            }
	        },
	
	        /**
	         * return the state of the recognizer
	         * the actual recognizing happens in this method
	         * @virtual
	         * @param {Object} inputData
	         * @returns {Const} STATE
	         */
	        process: function process(inputData) {}, // jshint ignore:line
	
	        /**
	         * return the preferred touch-action
	         * @virtual
	         * @returns {Array}
	         */
	        getTouchAction: function getTouchAction() {},
	
	        /**
	         * called when the gesture isn't allowed to recognize
	         * like when another is being recognized or it is disabled
	         * @virtual
	         */
	        reset: function reset() {}
	    };
	
	    /**
	     * get a usable string, used as event postfix
	     * @param {Const} state
	     * @returns {String} state
	     */
	    function stateStr(state) {
	        if (state & STATE_CANCELLED) {
	            return 'cancel';
	        } else if (state & STATE_ENDED) {
	            return 'end';
	        } else if (state & STATE_CHANGED) {
	            return 'move';
	        } else if (state & STATE_BEGAN) {
	            return 'start';
	        }
	        return '';
	    }
	
	    /**
	     * direction cons to string
	     * @param {Const} direction
	     * @returns {String}
	     */
	    function directionStr(direction) {
	        if (direction == DIRECTION_DOWN) {
	            return 'down';
	        } else if (direction == DIRECTION_UP) {
	            return 'up';
	        } else if (direction == DIRECTION_LEFT) {
	            return 'left';
	        } else if (direction == DIRECTION_RIGHT) {
	            return 'right';
	        }
	        return '';
	    }
	
	    /**
	     * get a recognizer by name if it is bound to a manager
	     * @param {Recognizer|String} otherRecognizer
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer}
	     */
	    function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	        var manager = recognizer.manager;
	        if (manager) {
	            return manager.get(otherRecognizer);
	        }
	        return otherRecognizer;
	    }
	
	    /**
	     * This recognizer is just used as a base for the simple attribute recognizers.
	     * @constructor
	     * @extends Recognizer
	     */
	    function AttrRecognizer() {
	        Recognizer.apply(this, arguments);
	    }
	
	    inherit(AttrRecognizer, Recognizer, {
	        /**
	         * @namespace
	         * @memberof AttrRecognizer
	         */
	        defaults: {
	            /**
	             * @type {Number}
	             * @default 1
	             */
	            pointers: 1
	        },
	
	        /**
	         * Used to check if it the recognizer receives valid input, like input.distance > 10.
	         * @memberof AttrRecognizer
	         * @param {Object} input
	         * @returns {Boolean} recognized
	         */
	        attrTest: function attrTest(input) {
	            var optionPointers = this.options.pointers;
	            return optionPointers === 0 || input.pointers.length === optionPointers;
	        },
	
	        /**
	         * Process the input and return the state for the recognizer
	         * @memberof AttrRecognizer
	         * @param {Object} input
	         * @returns {*} State
	         */
	        process: function process(input) {
	            var state = this.state;
	            var eventType = input.eventType;
	
	            var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	            var isValid = this.attrTest(input);
	
	            // on cancel input and we've recognized before, return STATE_CANCELLED
	            if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	                return state | STATE_CANCELLED;
	            } else if (isRecognized || isValid) {
	                if (eventType & INPUT_END) {
	                    return state | STATE_ENDED;
	                } else if (!(state & STATE_BEGAN)) {
	                    return STATE_BEGAN;
	                }
	                return state | STATE_CHANGED;
	            }
	            return STATE_FAILED;
	        }
	    });
	
	    /**
	     * Pan
	     * Recognized when the pointer is down and moved in the allowed direction.
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function PanRecognizer() {
	        AttrRecognizer.apply(this, arguments);
	
	        this.pX = null;
	        this.pY = null;
	    }
	
	    inherit(PanRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof PanRecognizer
	         */
	        defaults: {
	            event: 'pan',
	            threshold: 10,
	            pointers: 1,
	            direction: DIRECTION_ALL
	        },
	
	        getTouchAction: function getTouchAction() {
	            var direction = this.options.direction;
	            var actions = [];
	            if (direction & DIRECTION_HORIZONTAL) {
	                actions.push(TOUCH_ACTION_PAN_Y);
	            }
	            if (direction & DIRECTION_VERTICAL) {
	                actions.push(TOUCH_ACTION_PAN_X);
	            }
	            return actions;
	        },
	
	        directionTest: function directionTest(input) {
	            var options = this.options;
	            var hasMoved = true;
	            var distance = input.distance;
	            var direction = input.direction;
	            var x = input.deltaX;
	            var y = input.deltaY;
	
	            // lock to axis?
	            if (!(direction & options.direction)) {
	                if (options.direction & DIRECTION_HORIZONTAL) {
	                    direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                    hasMoved = x != this.pX;
	                    distance = Math.abs(input.deltaX);
	                } else {
	                    direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	                    hasMoved = y != this.pY;
	                    distance = Math.abs(input.deltaY);
	                }
	            }
	            input.direction = direction;
	            return hasMoved && distance > options.threshold && direction & options.direction;
	        },
	
	        attrTest: function attrTest(input) {
	            return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
	        },
	
	        emit: function emit(input) {
	
	            this.pX = input.deltaX;
	            this.pY = input.deltaY;
	
	            var direction = directionStr(input.direction);
	
	            if (direction) {
	                input.additionalEvent = this.options.event + direction;
	            }
	            this._super.emit.call(this, input);
	        }
	    });
	
	    /**
	     * Pinch
	     * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function PinchRecognizer() {
	        AttrRecognizer.apply(this, arguments);
	    }
	
	    inherit(PinchRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof PinchRecognizer
	         */
	        defaults: {
	            event: 'pinch',
	            threshold: 0,
	            pointers: 2
	        },
	
	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_NONE];
	        },
	
	        attrTest: function attrTest(input) {
	            return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	        },
	
	        emit: function emit(input) {
	            if (input.scale !== 1) {
	                var inOut = input.scale < 1 ? 'in' : 'out';
	                input.additionalEvent = this.options.event + inOut;
	            }
	            this._super.emit.call(this, input);
	        }
	    });
	
	    /**
	     * Press
	     * Recognized when the pointer is down for x ms without any movement.
	     * @constructor
	     * @extends Recognizer
	     */
	    function PressRecognizer() {
	        Recognizer.apply(this, arguments);
	
	        this._timer = null;
	        this._input = null;
	    }
	
	    inherit(PressRecognizer, Recognizer, {
	        /**
	         * @namespace
	         * @memberof PressRecognizer
	         */
	        defaults: {
	            event: 'press',
	            pointers: 1,
	            time: 251, // minimal time of the pointer to be pressed
	            threshold: 9 // a minimal movement is ok, but keep it low
	        },
	
	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_AUTO];
	        },
	
	        process: function process(input) {
	            var options = this.options;
	            var validPointers = input.pointers.length === options.pointers;
	            var validMovement = input.distance < options.threshold;
	            var validTime = input.deltaTime > options.time;
	
	            this._input = input;
	
	            // we only allow little movement
	            // and we've reached an end event, so a tap is possible
	            if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
	                this.reset();
	            } else if (input.eventType & INPUT_START) {
	                this.reset();
	                this._timer = setTimeoutContext(function () {
	                    this.state = STATE_RECOGNIZED;
	                    this.tryEmit();
	                }, options.time, this);
	            } else if (input.eventType & INPUT_END) {
	                return STATE_RECOGNIZED;
	            }
	            return STATE_FAILED;
	        },
	
	        reset: function reset() {
	            clearTimeout(this._timer);
	        },
	
	        emit: function emit(input) {
	            if (this.state !== STATE_RECOGNIZED) {
	                return;
	            }
	
	            if (input && input.eventType & INPUT_END) {
	                this.manager.emit(this.options.event + 'up', input);
	            } else {
	                this._input.timeStamp = now();
	                this.manager.emit(this.options.event, this._input);
	            }
	        }
	    });
	
	    /**
	     * Rotate
	     * Recognized when two or more pointer are moving in a circular motion.
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function RotateRecognizer() {
	        AttrRecognizer.apply(this, arguments);
	    }
	
	    inherit(RotateRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof RotateRecognizer
	         */
	        defaults: {
	            event: 'rotate',
	            threshold: 0,
	            pointers: 2
	        },
	
	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_NONE];
	        },
	
	        attrTest: function attrTest(input) {
	            return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	        }
	    });
	
	    /**
	     * Swipe
	     * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function SwipeRecognizer() {
	        AttrRecognizer.apply(this, arguments);
	    }
	
	    inherit(SwipeRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof SwipeRecognizer
	         */
	        defaults: {
	            event: 'swipe',
	            threshold: 10,
	            velocity: 0.3,
	            direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	            pointers: 1
	        },
	
	        getTouchAction: function getTouchAction() {
	            return PanRecognizer.prototype.getTouchAction.call(this);
	        },
	
	        attrTest: function attrTest(input) {
	            var direction = this.options.direction;
	            var velocity;
	
	            if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	                velocity = input.overallVelocity;
	            } else if (direction & DIRECTION_HORIZONTAL) {
	                velocity = input.overallVelocityX;
	            } else if (direction & DIRECTION_VERTICAL) {
	                velocity = input.overallVelocityY;
	            }
	
	            return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	        },
	
	        emit: function emit(input) {
	            var direction = directionStr(input.offsetDirection);
	            if (direction) {
	                this.manager.emit(this.options.event + direction, input);
	            }
	
	            this.manager.emit(this.options.event, input);
	        }
	    });
	
	    /**
	     * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	     * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	     * a single tap.
	     *
	     * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	     * multi-taps being recognized.
	     * @constructor
	     * @extends Recognizer
	     */
	    function TapRecognizer() {
	        Recognizer.apply(this, arguments);
	
	        // previous time and center,
	        // used for tap counting
	        this.pTime = false;
	        this.pCenter = false;
	
	        this._timer = null;
	        this._input = null;
	        this.count = 0;
	    }
	
	    inherit(TapRecognizer, Recognizer, {
	        /**
	         * @namespace
	         * @memberof PinchRecognizer
	         */
	        defaults: {
	            event: 'tap',
	            pointers: 1,
	            taps: 1,
	            interval: 300, // max time between the multi-tap taps
	            time: 250, // max time of the pointer to be down (like finger on the screen)
	            threshold: 9, // a minimal movement is ok, but keep it low
	            posThreshold: 10 // a multi-tap can be a bit off the initial position
	        },
	
	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_MANIPULATION];
	        },
	
	        process: function process(input) {
	            var options = this.options;
	
	            var validPointers = input.pointers.length === options.pointers;
	            var validMovement = input.distance < options.threshold;
	            var validTouchTime = input.deltaTime < options.time;
	
	            this.reset();
	
	            if (input.eventType & INPUT_START && this.count === 0) {
	                return this.failTimeout();
	            }
	
	            // we only allow little movement
	            // and we've reached an end event, so a tap is possible
	            if (validMovement && validTouchTime && validPointers) {
	                if (input.eventType != INPUT_END) {
	                    return this.failTimeout();
	                }
	
	                var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
	                var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
	
	                this.pTime = input.timeStamp;
	                this.pCenter = input.center;
	
	                if (!validMultiTap || !validInterval) {
	                    this.count = 1;
	                } else {
	                    this.count += 1;
	                }
	
	                this._input = input;
	
	                // if tap count matches we have recognized it,
	                // else it has began recognizing...
	                var tapCount = this.count % options.taps;
	                if (tapCount === 0) {
	                    // no failing requirements, immediately trigger the tap event
	                    // or wait as long as the multitap interval to trigger
	                    if (!this.hasRequireFailures()) {
	                        return STATE_RECOGNIZED;
	                    } else {
	                        this._timer = setTimeoutContext(function () {
	                            this.state = STATE_RECOGNIZED;
	                            this.tryEmit();
	                        }, options.interval, this);
	                        return STATE_BEGAN;
	                    }
	                }
	            }
	            return STATE_FAILED;
	        },
	
	        failTimeout: function failTimeout() {
	            this._timer = setTimeoutContext(function () {
	                this.state = STATE_FAILED;
	            }, this.options.interval, this);
	            return STATE_FAILED;
	        },
	
	        reset: function reset() {
	            clearTimeout(this._timer);
	        },
	
	        emit: function emit() {
	            if (this.state == STATE_RECOGNIZED) {
	                this._input.tapCount = this.count;
	                this.manager.emit(this.options.event, this._input);
	            }
	        }
	    });
	
	    /**
	     * Simple way to create a manager with a default set of recognizers.
	     * @param {HTMLElement} element
	     * @param {Object} [options]
	     * @constructor
	     */
	    function Hammer(element, options) {
	        options = options || {};
	        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	        return new Manager(element, options);
	    }
	
	    /**
	     * @const {string}
	     */
	    Hammer.VERSION = '2.0.7';
	
	    /**
	     * default settings
	     * @namespace
	     */
	    Hammer.defaults = {
	        /**
	         * set if DOM events are being triggered.
	         * But this is slower and unused by simple implementations, so disabled by default.
	         * @type {Boolean}
	         * @default false
	         */
	        domEvents: false,
	
	        /**
	         * The value for the touchAction property/fallback.
	         * When set to `compute` it will magically set the correct value based on the added recognizers.
	         * @type {String}
	         * @default compute
	         */
	        touchAction: TOUCH_ACTION_COMPUTE,
	
	        /**
	         * @type {Boolean}
	         * @default true
	         */
	        enable: true,
	
	        /**
	         * EXPERIMENTAL FEATURE -- can be removed/changed
	         * Change the parent input target element.
	         * If Null, then it is being set the to main element.
	         * @type {Null|EventTarget}
	         * @default null
	         */
	        inputTarget: null,
	
	        /**
	         * force an input class
	         * @type {Null|Function}
	         * @default null
	         */
	        inputClass: null,
	
	        /**
	         * Default recognizer setup when calling `Hammer()`
	         * When creating a new Manager these will be skipped.
	         * @type {Array}
	         */
	        preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, { enable: false }], [PinchRecognizer, { enable: false }, ['rotate']], [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }], [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']], [TapRecognizer], [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']], [PressRecognizer]],
	
	        /**
	         * Some CSS properties can be used to improve the working of Hammer.
	         * Add them to this method and they will be set when creating a new Manager.
	         * @namespace
	         */
	        cssProps: {
	            /**
	             * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	             * @type {String}
	             * @default 'none'
	             */
	            userSelect: 'none',
	
	            /**
	             * Disable the Windows Phone grippers when pressing an element.
	             * @type {String}
	             * @default 'none'
	             */
	            touchSelect: 'none',
	
	            /**
	             * Disables the default callout shown when you touch and hold a touch target.
	             * On iOS, when you touch and hold a touch target such as a link, Safari displays
	             * a callout containing information about the link. This property allows you to disable that callout.
	             * @type {String}
	             * @default 'none'
	             */
	            touchCallout: 'none',
	
	            /**
	             * Specifies whether zooming is enabled. Used by IE10>
	             * @type {String}
	             * @default 'none'
	             */
	            contentZooming: 'none',
	
	            /**
	             * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	             * @type {String}
	             * @default 'none'
	             */
	            userDrag: 'none',
	
	            /**
	             * Overrides the highlight color shown when the user taps a link or a JavaScript
	             * clickable element in iOS. This property obeys the alpha value, if specified.
	             * @type {String}
	             * @default 'rgba(0,0,0,0)'
	             */
	            tapHighlightColor: 'rgba(0,0,0,0)'
	        }
	    };
	
	    var STOP = 1;
	    var FORCED_STOP = 2;
	
	    /**
	     * Manager
	     * @param {HTMLElement} element
	     * @param {Object} [options]
	     * @constructor
	     */
	    function Manager(element, options) {
	        this.options = assign({}, Hammer.defaults, options || {});
	
	        this.options.inputTarget = this.options.inputTarget || element;
	
	        this.handlers = {};
	        this.session = {};
	        this.recognizers = [];
	        this.oldCssProps = {};
	
	        this.element = element;
	        this.input = createInputInstance(this);
	        this.touchAction = new TouchAction(this, this.options.touchAction);
	
	        toggleCssProps(this, true);
	
	        each(this.options.recognizers, function (item) {
	            var recognizer = this.add(new item[0](item[1]));
	            item[2] && recognizer.recognizeWith(item[2]);
	            item[3] && recognizer.requireFailure(item[3]);
	        }, this);
	    }
	
	    Manager.prototype = {
	        /**
	         * set options
	         * @param {Object} options
	         * @returns {Manager}
	         */
	        set: function set(options) {
	            assign(this.options, options);
	
	            // Options that need a little more setup
	            if (options.touchAction) {
	                this.touchAction.update();
	            }
	            if (options.inputTarget) {
	                // Clean up existing event listeners and reinitialize
	                this.input.destroy();
	                this.input.target = options.inputTarget;
	                this.input.init();
	            }
	            return this;
	        },
	
	        /**
	         * stop recognizing for this session.
	         * This session will be discarded, when a new [input]start event is fired.
	         * When forced, the recognizer cycle is stopped immediately.
	         * @param {Boolean} [force]
	         */
	        stop: function stop(force) {
	            this.session.stopped = force ? FORCED_STOP : STOP;
	        },
	
	        /**
	         * run the recognizers!
	         * called by the inputHandler function on every movement of the pointers (touches)
	         * it walks through all the recognizers and tries to detect the gesture that is being made
	         * @param {Object} inputData
	         */
	        recognize: function recognize(inputData) {
	            var session = this.session;
	            if (session.stopped) {
	                return;
	            }
	
	            // run the touch-action polyfill
	            this.touchAction.preventDefaults(inputData);
	
	            var recognizer;
	            var recognizers = this.recognizers;
	
	            // this holds the recognizer that is being recognized.
	            // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	            // if no recognizer is detecting a thing, it is set to `null`
	            var curRecognizer = session.curRecognizer;
	
	            // reset when the last recognizer is recognized
	            // or when we're in a new session
	            if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
	                curRecognizer = session.curRecognizer = null;
	            }
	
	            var i = 0;
	            while (i < recognizers.length) {
	                recognizer = recognizers[i];
	
	                // find out if we are allowed try to recognize the input for this one.
	                // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	                // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	                //      that is being recognized.
	                // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	                //      this can be setup with the `recognizeWith()` method on the recognizer.
	                if (session.stopped !== FORCED_STOP && ( // 1
	                !curRecognizer || recognizer == curRecognizer || // 2
	                recognizer.canRecognizeWith(curRecognizer))) {
	                    // 3
	                    recognizer.recognize(inputData);
	                } else {
	                    recognizer.reset();
	                }
	
	                // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	                // current active recognizer. but only if we don't already have an active recognizer
	                if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                    curRecognizer = session.curRecognizer = recognizer;
	                }
	                i++;
	            }
	        },
	
	        /**
	         * get a recognizer by its event name.
	         * @param {Recognizer|String} recognizer
	         * @returns {Recognizer|Null}
	         */
	        get: function get(recognizer) {
	            if (recognizer instanceof Recognizer) {
	                return recognizer;
	            }
	
	            var recognizers = this.recognizers;
	            for (var i = 0; i < recognizers.length; i++) {
	                if (recognizers[i].options.event == recognizer) {
	                    return recognizers[i];
	                }
	            }
	            return null;
	        },
	
	        /**
	         * add a recognizer to the manager
	         * existing recognizers with the same event name will be removed
	         * @param {Recognizer} recognizer
	         * @returns {Recognizer|Manager}
	         */
	        add: function add(recognizer) {
	            if (invokeArrayArg(recognizer, 'add', this)) {
	                return this;
	            }
	
	            // remove existing
	            var existing = this.get(recognizer.options.event);
	            if (existing) {
	                this.remove(existing);
	            }
	
	            this.recognizers.push(recognizer);
	            recognizer.manager = this;
	
	            this.touchAction.update();
	            return recognizer;
	        },
	
	        /**
	         * remove a recognizer by name or instance
	         * @param {Recognizer|String} recognizer
	         * @returns {Manager}
	         */
	        remove: function remove(recognizer) {
	            if (invokeArrayArg(recognizer, 'remove', this)) {
	                return this;
	            }
	
	            recognizer = this.get(recognizer);
	
	            // let's make sure this recognizer exists
	            if (recognizer) {
	                var recognizers = this.recognizers;
	                var index = inArray(recognizers, recognizer);
	
	                if (index !== -1) {
	                    recognizers.splice(index, 1);
	                    this.touchAction.update();
	                }
	            }
	
	            return this;
	        },
	
	        /**
	         * bind event
	         * @param {String} events
	         * @param {Function} handler
	         * @returns {EventEmitter} this
	         */
	        on: function on(events, handler) {
	            if (events === undefined) {
	                return;
	            }
	            if (handler === undefined) {
	                return;
	            }
	
	            var handlers = this.handlers;
	            each(splitStr(events), function (event) {
	                handlers[event] = handlers[event] || [];
	                handlers[event].push(handler);
	            });
	            return this;
	        },
	
	        /**
	         * unbind event, leave emit blank to remove all handlers
	         * @param {String} events
	         * @param {Function} [handler]
	         * @returns {EventEmitter} this
	         */
	        off: function off(events, handler) {
	            if (events === undefined) {
	                return;
	            }
	
	            var handlers = this.handlers;
	            each(splitStr(events), function (event) {
	                if (!handler) {
	                    delete handlers[event];
	                } else {
	                    handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	                }
	            });
	            return this;
	        },
	
	        /**
	         * emit event to the listeners
	         * @param {String} event
	         * @param {Object} data
	         */
	        emit: function emit(event, data) {
	            // we also want to trigger dom events
	            if (this.options.domEvents) {
	                triggerDomEvent(event, data);
	            }
	
	            // no handlers, so skip it all
	            var handlers = this.handlers[event] && this.handlers[event].slice();
	            if (!handlers || !handlers.length) {
	                return;
	            }
	
	            data.type = event;
	            data.preventDefault = function () {
	                data.srcEvent.preventDefault();
	            };
	
	            var i = 0;
	            while (i < handlers.length) {
	                handlers[i](data);
	                i++;
	            }
	        },
	
	        /**
	         * destroy the manager and unbinds all events
	         * it doesn't unbind dom events, that is the user own responsibility
	         */
	        destroy: function destroy() {
	            this.element && toggleCssProps(this, false);
	
	            this.handlers = {};
	            this.session = {};
	            this.input.destroy();
	            this.element = null;
	        }
	    };
	
	    /**
	     * add/remove the css properties as defined in manager.options.cssProps
	     * @param {Manager} manager
	     * @param {Boolean} add
	     */
	    function toggleCssProps(manager, add) {
	        var element = manager.element;
	        if (!element.style) {
	            return;
	        }
	        var prop;
	        each(manager.options.cssProps, function (value, name) {
	            prop = prefixed(element.style, name);
	            if (add) {
	                manager.oldCssProps[prop] = element.style[prop];
	                element.style[prop] = value;
	            } else {
	                element.style[prop] = manager.oldCssProps[prop] || '';
	            }
	        });
	        if (!add) {
	            manager.oldCssProps = {};
	        }
	    }
	
	    /**
	     * trigger dom event
	     * @param {String} event
	     * @param {Object} data
	     */
	    function triggerDomEvent(event, data) {
	        var gestureEvent = document.createEvent('Event');
	        gestureEvent.initEvent(event, true, true);
	        gestureEvent.gesture = data;
	        data.target.dispatchEvent(gestureEvent);
	    }
	
	    assign(Hammer, {
	        INPUT_START: INPUT_START,
	        INPUT_MOVE: INPUT_MOVE,
	        INPUT_END: INPUT_END,
	        INPUT_CANCEL: INPUT_CANCEL,
	
	        STATE_POSSIBLE: STATE_POSSIBLE,
	        STATE_BEGAN: STATE_BEGAN,
	        STATE_CHANGED: STATE_CHANGED,
	        STATE_ENDED: STATE_ENDED,
	        STATE_RECOGNIZED: STATE_RECOGNIZED,
	        STATE_CANCELLED: STATE_CANCELLED,
	        STATE_FAILED: STATE_FAILED,
	
	        DIRECTION_NONE: DIRECTION_NONE,
	        DIRECTION_LEFT: DIRECTION_LEFT,
	        DIRECTION_RIGHT: DIRECTION_RIGHT,
	        DIRECTION_UP: DIRECTION_UP,
	        DIRECTION_DOWN: DIRECTION_DOWN,
	        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	        DIRECTION_ALL: DIRECTION_ALL,
	
	        Manager: Manager,
	        Input: Input,
	        TouchAction: TouchAction,
	
	        TouchInput: TouchInput,
	        MouseInput: MouseInput,
	        PointerEventInput: PointerEventInput,
	        TouchMouseInput: TouchMouseInput,
	        SingleTouchInput: SingleTouchInput,
	
	        Recognizer: Recognizer,
	        AttrRecognizer: AttrRecognizer,
	        Tap: TapRecognizer,
	        Pan: PanRecognizer,
	        Swipe: SwipeRecognizer,
	        Pinch: PinchRecognizer,
	        Rotate: RotateRecognizer,
	        Press: PressRecognizer,
	
	        on: addEventListeners,
	        off: removeEventListeners,
	        each: each,
	        merge: merge,
	        extend: extend,
	        assign: assign,
	        inherit: inherit,
	        bindFn: bindFn,
	        prefixed: prefixed
	    });
	
	    // this prevents errors when Hammer is loaded in the presence of an AMD
	    //  style loader but by script tag, not by the loader.
	    var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line
	    freeGlobal.Hammer = Hammer;
	
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return Hammer;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module != 'undefined' && module.exports) {
	        module.exports = Hammer;
	    } else {
	        window[exportName] = Hammer;
	    }
	})(window, document, 'Hammer');

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	// Credits: borrowed code from fcomb/redux-logger
	
	function createLogger() {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var _ref$collapsed = _ref.collapsed;
	  var collapsed = _ref$collapsed === undefined ? true : _ref$collapsed;
	  var _ref$transformer = _ref.transformer;
	  var transformer = _ref$transformer === undefined ? function (state) {
	    return state;
	  } : _ref$transformer;
	  var _ref$mutationTransfor = _ref.mutationTransformer;
	  var mutationTransformer = _ref$mutationTransfor === undefined ? function (mut) {
	    return mut;
	  } : _ref$mutationTransfor;
	
	  return {
	    snapshot: true,
	    onMutation: function onMutation(mutation, nextState, prevState) {
	      if (typeof console === 'undefined') {
	        return;
	      }
	      var time = new Date();
	      var formattedTime = ' @ ' + pad(time.getHours(), 2) + ':' + pad(time.getMinutes(), 2) + ':' + pad(time.getSeconds(), 2) + '.' + pad(time.getMilliseconds(), 3);
	      var formattedMutation = mutationTransformer(mutation);
	      var message = 'mutation ' + mutation.type + formattedTime;
	      var startMessage = collapsed ? console.groupCollapsed : console.group;
	
	      // render
	      try {
	        startMessage.call(console, message);
	      } catch (e) {
	        console.log(message);
	      }
	
	      console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
	      console.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
	      console.log('%c next state', 'color: #4CAF50; font-weight: bold', nextState);
	
	      try {
	        console.groupEnd();
	      } catch (e) {
	        console.log('—— log end ——');
	      }
	    }
	  };
	}
	
	function repeat(str, times) {
	  return new Array(times + 1).join(str);
	}
	
	function pad(num, maxLength) {
	  return repeat('0', maxLength - num.toString().length) + num;
	}
	
	module.exports = createLogger;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _goods = __webpack_require__(16);
	
	var state = {
		goods: _goods.GET_GOODS_DETAILS
	};
	
	var mutations = {
		CHANGE_BANNER: function CHANGE_BANNER(state, active, move, speed) {
			state.goods.banner.animate_speed = speed;
			state.goods.banner.active = active;
			state.goods.banner.move = move;
		}
	};
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// import Vue from 'vue'
	// import VueResource from 'vue-resource'
	//
	// Vue.use(VueResource)
	//
	// export const SHENMEGUI () => {
	// 	Vue.http.post('./json/goods.json', page).then((res) => {
	// 		console.log(res.data)
	// 		return res.data
	// 	}
	// }
	//
	var data = {
		"banner": {
			"photo": [{
				"src": "image/details/goods.jpg",
				"href": "javascript:"
			}, {
				"src": "image/details/goods.jpg",
				"href": "javascript:"
			}, {
				"src": "image/details/goods.jpg",
				"href": "javascript:"
			}, {
				"src": "image/details/goods.jpg",
				"href": "javascript:"
			}],
			"autoPlay_speed": 3600,
			"animate_speed": 300,
			"autoPlay": false,
			"active": 0,
			"move": 0
		}
	};
	
	var GET_GOODS_DETAILS = exports.GET_GOODS_DETAILS = data;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] client\\code\\components\\Banner.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5783d9ac/Banner.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../../node_modules/.npminstall/vue-loader/8.5.3/vue-loader/lib/style-rewriter.js?id=_v-5783d9ac&scoped=true!./../../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../../node_modules/.npminstall/vue-loader/8.5.3/vue-loader/lib/selector.js?type=style&index=0!./Banner.vue", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../../node_modules/.npminstall/vue-loader/8.5.3/vue-loader/lib/style-rewriter.js?id=_v-5783d9ac&scoped=true!./../../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../../node_modules/.npminstall/vue-loader/8.5.3/vue-loader/lib/selector.js?type=style&index=0!./Banner.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "*[_v-5783d9ac] {\n  margin: 0;\n  padding: 0;\n  -ms-touch-action: none;\n      touch-action: none;\n  -webkit-tap-highlight-color: transparent;\n  font-family: 'Microsoft YaHei', 'WenQuanYi Micro Hei', Arial, sans-serif;\n}\na[_v-5783d9ac] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-decoration: none;\n  cursor: pointer;\n}\ninput[_v-5783d9ac],\nselect[_v-5783d9ac],\ntextarea[_v-5783d9ac] {\n  outline: none;\n  -webkit-appearance: none;\n}\nul[_v-5783d9ac] {\n  list-style: none;\n}\nimg[_v-5783d9ac] {\n  border: none;\n}\n.clear[_v-5783d9ac] {\n  clear: both;\n}\n.fl[_v-5783d9ac] {\n  float: left;\n}\n.fr[_v-5783d9ac] {\n  float: right;\n}\nbody[_v-5783d9ac] {\n  background: #f0f0f0;\n}\n.banner[_v-5783d9ac] {\n  position: relative;\n  width: 7.5rem;\n  overflow: hidden;\n}\n.banner .image_box[_v-5783d9ac] {\n  position: relative;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n}\n.banner .image_box ul[_v-5783d9ac] {\n  position: relative;\n  left: 0;\n}\n.banner .image_box ul li[_v-5783d9ac] {\n  float: left;\n  width: 7.5rem;\n}\n.banner .image_box img[_v-5783d9ac] {\n  display: block;\n  width: 100%;\n}\n.banner .dot_box[_v-5783d9ac] {\n  position: absolute;\n  text-align: center;\n  bottom: 0.20rem;\n  width: 100%;\n  line-height: 0;\n}\n.banner .dot_box a[_v-5783d9ac] {\n  display: inline-block;\n  width: 0.16rem;\n  height: 0.16rem;\n  background: #FFF;\n  border-radius: 50%;\n  margin: 0 0.06rem;\n}\n.banner .dot_box a.active[_v-5783d9ac] {\n  background: #29bcd2;\n}\n", "", {"version":3,"sources":["/./client/code/components/Banner.vue"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,WAAW;EACX,uBAAmB;MAAnB,mBAAmB;EACnB,yCAAyC;EACzC,yEAAyE;CAC1E;AACD;EACE,0BAAkB;KAAlB,uBAAkB;MAAlB,sBAAkB;UAAlB,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;CACjB;AACD;;;EAGE,cAAc;EACd,yBAAyB;CAC1B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;CACd;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,aAAa;CACd;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,QAAQ;CACT;AACD;EACE,YAAY;EACZ,cAAc;CACf;AACD;EACE,eAAe;EACf,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB","file":"Banner.vue","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  touch-action: none;\n  -webkit-tap-highlight-color: transparent;\n  font-family: 'Microsoft YaHei', 'WenQuanYi Micro Hei', Arial, sans-serif;\n}\na {\n  user-select: none;\n  text-decoration: none;\n  cursor: pointer;\n}\ninput,\nselect,\ntextarea {\n  outline: none;\n  -webkit-appearance: none;\n}\nul {\n  list-style: none;\n}\nimg {\n  border: none;\n}\n.clear {\n  clear: both;\n}\n.fl {\n  float: left;\n}\n.fr {\n  float: right;\n}\nbody {\n  background: #f0f0f0;\n}\n.banner {\n  position: relative;\n  width: 7.5rem;\n  overflow: hidden;\n}\n.banner .image_box {\n  position: relative;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n}\n.banner .image_box ul {\n  position: relative;\n  left: 0;\n}\n.banner .image_box ul li {\n  float: left;\n  width: 7.5rem;\n}\n.banner .image_box img {\n  display: block;\n  width: 100%;\n}\n.banner .dot_box {\n  position: absolute;\n  text-align: center;\n  bottom: 0.20rem;\n  width: 100%;\n  line-height: 0;\n}\n.banner .dot_box a {\n  display: inline-block;\n  width: 0.16rem;\n  height: 0.16rem;\n  background: #FFF;\n  border-radius: 50%;\n  margin: 0 0.06rem;\n}\n.banner .dot_box a.active {\n  background: #29bcd2;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _getters = __webpack_require__(22);
	
	var _actions = __webpack_require__(23);
	
	// <style lang="less" scoped>
	// 	@import (less) '../less/config.less';
	// 	@banner_h: 9.37rem;
	// 	@mb: 0.24rem;
	// 	.banner{
	// 		position: relative;
	// 		width: @ww;
	// 		overflow: hidden;
	// 		.image_box{
	// 			position: relative;
	// 			left: 0;
	// 			width: 100%;
	// 			overflow: hidden;
	// 			ul{
	// 				position: relative;
	// 				left: 0;
	// 				li{
	// 					float: left;
	// 					width: @ww;
	// 				}
	// 			}
	// 			img{
	// 				display: block;
	// 				width: 100%;
	// 			}
	// 		}
	// 		.dot_box{
	// 			position: absolute;
	// 			text-align: center;
	// 			bottom: 0.20rem;
	// 			width: 100%;
	// 			line-height: 0;
	// 			a{
	// 				display: inline-block;
	// 				width: 0.16rem;
	// 				height: 0.16rem;
	// 				background: #FFF;
	// 				border-radius: 50%;
	// 				margin: 0 0.06rem;
	// 				&.active{
	// 					background: @c_blue;
	// 				}
	// 			}
	// 		}
	// 	}
	// </style>
	//
	// <template lang="pug">
	// 	.banner(v-touch:pan='panBanner')
	// 		.image_box
	// 			ul(style=`
	// 				width: {{goods.banner.photo.length * 100}}%;
	// 				transition: all {{goods.banner.animate_speed}}ms ease-out;
	// 				left: {{-7.50*goods.banner.active + goods.banner.move/100}}rem;
	// 			`)
	// 				li(v-for='_photo in goods.banner.photo')
	// 					a(v-bind:href='_photo.href')
	// 						img(v-bind:src='_photo.src' @mousemove.prevent)
	// 		.dot_box
	// 			a(v-for='_dot in goods.banner.photo'
	// 				href='javascript:'
	// 				class='{{$index == goods.banner.active ? "active": ""}}')
	// 		.clear
	// </template>
	//
	// <script>
	exports.default = {
		vuex: {
			getters: {
				goods: _getters.getGoodsDetails
			},
			actions: {
				panBanner: _actions.panBanner
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getGoodsDetails = exports.getGoodsDetails = function getGoodsDetails(state) {
	  return state.goods_details.goods;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var panBanner = exports.panBanner = function panBanner(_ref, e) {
		var dispatch = _ref.dispatch;
		var state = _ref.state;
	
		var move = e.deltaX;
		var active = state.goods_details.goods.banner.active;
		var speed = state.goods_details.goods.banner.animate_speed;
		var len = state.goods_details.goods.banner.photo.length;
	
		e.preventDefault();
	
		if (e.srcEvent.type == 'touchend' || e.srcEvent.type == 'mouseup') {
			if (move < -20 && active < len - 1) {
				active++;
			} else if (move > 20 && active > 0) {
				active--;
			}
			move = 0;
			speed = 300;
		} else {
			speed = 0;
		}
		return dispatch('CHANGE_BANNER', active, move, speed);
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div class=\"banner\" v-touch:pan=\"panBanner\" _v-5783d9ac=\"\"><div class=\"image_box\" _v-5783d9ac=\"\"><ul style=\"\n\t\t\twidth: {{goods.banner.photo.length * 100}}%;\n\t\t\ttransition: all {{goods.banner.animate_speed}}ms ease-out;\n\t\t\tleft: {{-7.50*goods.banner.active + goods.banner.move/100}}rem; \n\t\t\" _v-5783d9ac=\"\"><li v-for=\"_photo in goods.banner.photo\" _v-5783d9ac=\"\"><a v-bind:href=\"_photo.href\" _v-5783d9ac=\"\"><img v-bind:src=\"_photo.src\" @mousemove.prevent=\"@mousemove.prevent\" _v-5783d9ac=\"\"></a></li></ul></div><div class=\"dot_box\" _v-5783d9ac=\"\"><a class=\"{{$index == goods.banner.active ? &quot;active&quot;: &quot;&quot;}}\" v-for=\"_dot in goods.banner.photo\" href=\"javascript:\" _v-5783d9ac=\"\"></a></div><div class=\"clear\" _v-5783d9ac=\"\"></div></div>";

/***/ }
/******/ ]);
//# sourceMappingURL=index.build.js.map