import { defineComponent as hi, getCurrentInstance as ci, reactive as kn, ref as Pt, onMounted as di, onUpdated as En, onBeforeUnmount as Wn, watch as Rn, h as Fn, onUnmounted as zn, computed as Et, resolveComponent as qt, openBlock as Yt, createElementBlock as Xe, createVNode as ut, unref as Xn, withCtx as Qt, createBlock as Ye, createCommentVNode as Yn, Fragment as _i, renderList as mi } from "vue";
var vi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kn(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var Ve = { exports: {} }, Zt = {}, Ke = {}, $e = {}, yi;
function J() {
  return yi || (yi = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h._registerNode = h.Konva = h.glob = void 0;
    const A = Math.PI / 180;
    function O() {
      return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
    }
    h.glob = typeof vi < "u" ? vi : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, h.Konva = {
      _global: h.glob,
      version: "9.3.18",
      isBrowser: O(),
      isUnminified: /param/.test((function(w) {
      }).toString()),
      dblClickWindow: 400,
      getAngle(w) {
        return h.Konva.angleDeg ? w * A : w;
      },
      enableTrace: !1,
      pointerEventsEnabled: !0,
      autoDrawEnabled: !0,
      hitOnDragEnabled: !1,
      capturePointerEventsEnabled: !1,
      _mouseListenClick: !1,
      _touchListenClick: !1,
      _pointerListenClick: !1,
      _mouseInDblClickWindow: !1,
      _touchInDblClickWindow: !1,
      _pointerInDblClickWindow: !1,
      _mouseDblClickPointerId: null,
      _touchDblClickPointerId: null,
      _pointerDblClickPointerId: null,
      _fixTextRendering: !1,
      pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
      dragDistance: 3,
      angleDeg: !0,
      showWarnings: !0,
      dragButtons: [0, 1],
      isDragging() {
        return h.Konva.DD.isDragging;
      },
      isTransforming() {
        var w;
        return (w = h.Konva.Transformer) === null || w === void 0 ? void 0 : w.isTransforming();
      },
      isDragReady() {
        return !!h.Konva.DD.node;
      },
      releaseCanvasOnDestroy: !0,
      document: h.glob.document,
      _injectGlobal(w) {
        h.glob.Konva = w;
      }
    };
    const E = (w) => {
      h.Konva[w.prototype.getClassName()] = w;
    };
    h._registerNode = E, h.Konva._injectGlobal(h.Konva);
  }($e)), $e;
}
var je = {}, bi;
function st() {
  return bi || (bi = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Util = h.Transform = void 0;
    const A = J();
    class O {
      constructor(_ = [1, 0, 0, 1, 0, 0]) {
        this.dirty = !1, this.m = _ && _.slice() || [1, 0, 0, 1, 0, 0];
      }
      reset() {
        this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
      }
      copy() {
        return new O(this.m);
      }
      copyInto(_) {
        _.m[0] = this.m[0], _.m[1] = this.m[1], _.m[2] = this.m[2], _.m[3] = this.m[3], _.m[4] = this.m[4], _.m[5] = this.m[5];
      }
      point(_) {
        const k = this.m;
        return {
          x: k[0] * _.x + k[2] * _.y + k[4],
          y: k[1] * _.x + k[3] * _.y + k[5]
        };
      }
      translate(_, k) {
        return this.m[4] += this.m[0] * _ + this.m[2] * k, this.m[5] += this.m[1] * _ + this.m[3] * k, this;
      }
      scale(_, k) {
        return this.m[0] *= _, this.m[1] *= _, this.m[2] *= k, this.m[3] *= k, this;
      }
      rotate(_) {
        const k = Math.cos(_), M = Math.sin(_), G = this.m[0] * k + this.m[2] * M, r = this.m[1] * k + this.m[3] * M, d = this.m[0] * -M + this.m[2] * k, e = this.m[1] * -M + this.m[3] * k;
        return this.m[0] = G, this.m[1] = r, this.m[2] = d, this.m[3] = e, this;
      }
      getTranslation() {
        return {
          x: this.m[4],
          y: this.m[5]
        };
      }
      skew(_, k) {
        const M = this.m[0] + this.m[2] * k, G = this.m[1] + this.m[3] * k, r = this.m[2] + this.m[0] * _, d = this.m[3] + this.m[1] * _;
        return this.m[0] = M, this.m[1] = G, this.m[2] = r, this.m[3] = d, this;
      }
      multiply(_) {
        const k = this.m[0] * _.m[0] + this.m[2] * _.m[1], M = this.m[1] * _.m[0] + this.m[3] * _.m[1], G = this.m[0] * _.m[2] + this.m[2] * _.m[3], r = this.m[1] * _.m[2] + this.m[3] * _.m[3], d = this.m[0] * _.m[4] + this.m[2] * _.m[5] + this.m[4], e = this.m[1] * _.m[4] + this.m[3] * _.m[5] + this.m[5];
        return this.m[0] = k, this.m[1] = M, this.m[2] = G, this.m[3] = r, this.m[4] = d, this.m[5] = e, this;
      }
      invert() {
        const _ = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), k = this.m[3] * _, M = -this.m[1] * _, G = -this.m[2] * _, r = this.m[0] * _, d = _ * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), e = _ * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        return this.m[0] = k, this.m[1] = M, this.m[2] = G, this.m[3] = r, this.m[4] = d, this.m[5] = e, this;
      }
      getMatrix() {
        return this.m;
      }
      decompose() {
        const _ = this.m[0], k = this.m[1], M = this.m[2], G = this.m[3], r = this.m[4], d = this.m[5], e = _ * G - k * M, f = {
          x: r,
          y: d,
          rotation: 0,
          scaleX: 0,
          scaleY: 0,
          skewX: 0,
          skewY: 0
        };
        if (_ != 0 || k != 0) {
          const T = Math.sqrt(_ * _ + k * k);
          f.rotation = k > 0 ? Math.acos(_ / T) : -Math.acos(_ / T), f.scaleX = T, f.scaleY = e / T, f.skewX = (_ * M + k * G) / e, f.skewY = 0;
        } else if (M != 0 || G != 0) {
          const T = Math.sqrt(M * M + G * G);
          f.rotation = Math.PI / 2 - (G > 0 ? Math.acos(-M / T) : -Math.acos(M / T)), f.scaleX = e / T, f.scaleY = T, f.skewX = 0, f.skewY = (_ * M + k * G) / e;
        }
        return f.rotation = h.Util._getRotation(f.rotation), f;
      }
    }
    h.Transform = O;
    const E = "[object Array]", w = "[object Number]", y = "[object String]", c = "[object Boolean]", o = Math.PI / 180, g = 180 / Math.PI, v = "#", m = "", C = "0", P = "Konva warning: ", u = "Konva error: ", l = "rgb(", b = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 132, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 255, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 203],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [119, 128, 144],
      slategrey: [119, 128, 144],
      snow: [255, 255, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      transparent: [255, 255, 255, 0],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 5]
    }, x = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    let F = [];
    const n = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(s) {
      setTimeout(s, 60);
    };
    h.Util = {
      _isElement(s) {
        return !!(s && s.nodeType == 1);
      },
      _isFunction(s) {
        return !!(s && s.constructor && s.call && s.apply);
      },
      _isPlainObject(s) {
        return !!s && s.constructor === Object;
      },
      _isArray(s) {
        return Object.prototype.toString.call(s) === E;
      },
      _isNumber(s) {
        return Object.prototype.toString.call(s) === w && !isNaN(s) && isFinite(s);
      },
      _isString(s) {
        return Object.prototype.toString.call(s) === y;
      },
      _isBoolean(s) {
        return Object.prototype.toString.call(s) === c;
      },
      isObject(s) {
        return s instanceof Object;
      },
      isValidSelector(s) {
        if (typeof s != "string")
          return !1;
        const _ = s[0];
        return _ === "#" || _ === "." || _ === _.toUpperCase();
      },
      _sign(s) {
        return s === 0 || s > 0 ? 1 : -1;
      },
      requestAnimFrame(s) {
        F.push(s), F.length === 1 && n(function() {
          const _ = F;
          F = [], _.forEach(function(k) {
            k();
          });
        });
      },
      createCanvasElement() {
        const s = document.createElement("canvas");
        try {
          s.style = s.style || {};
        } catch {
        }
        return s;
      },
      createImageElement() {
        return document.createElement("img");
      },
      _isInDocument(s) {
        for (; s = s.parentNode; )
          if (s == document)
            return !0;
        return !1;
      },
      _urlToImage(s, _) {
        const k = h.Util.createImageElement();
        k.onload = function() {
          _(k);
        }, k.src = s;
      },
      _rgbToHex(s, _, k) {
        return ((1 << 24) + (s << 16) + (_ << 8) + k).toString(16).slice(1);
      },
      _hexToRgb(s) {
        s = s.replace(v, m);
        const _ = parseInt(s, 16);
        return {
          r: _ >> 16 & 255,
          g: _ >> 8 & 255,
          b: _ & 255
        };
      },
      getRandomColor() {
        let s = (Math.random() * 16777215 << 0).toString(16);
        for (; s.length < 6; )
          s = C + s;
        return v + s;
      },
      getRGB(s) {
        let _;
        return s in b ? (_ = b[s], {
          r: _[0],
          g: _[1],
          b: _[2]
        }) : s[0] === v ? this._hexToRgb(s.substring(1)) : s.substr(0, 4) === l ? (_ = x.exec(s.replace(/ /g, "")), {
          r: parseInt(_[1], 10),
          g: parseInt(_[2], 10),
          b: parseInt(_[3], 10)
        }) : {
          r: 0,
          g: 0,
          b: 0
        };
      },
      colorToRGBA(s) {
        return s = s || "black", h.Util._namedColorToRBA(s) || h.Util._hex3ColorToRGBA(s) || h.Util._hex4ColorToRGBA(s) || h.Util._hex6ColorToRGBA(s) || h.Util._hex8ColorToRGBA(s) || h.Util._rgbColorToRGBA(s) || h.Util._rgbaColorToRGBA(s) || h.Util._hslColorToRGBA(s);
      },
      _namedColorToRBA(s) {
        const _ = b[s.toLowerCase()];
        return _ ? {
          r: _[0],
          g: _[1],
          b: _[2],
          a: 1
        } : null;
      },
      _rgbColorToRGBA(s) {
        if (s.indexOf("rgb(") === 0) {
          s = s.match(/rgb\(([^)]+)\)/)[1];
          const _ = s.split(/ *, */).map(Number);
          return {
            r: _[0],
            g: _[1],
            b: _[2],
            a: 1
          };
        }
      },
      _rgbaColorToRGBA(s) {
        if (s.indexOf("rgba(") === 0) {
          s = s.match(/rgba\(([^)]+)\)/)[1];
          const _ = s.split(/ *, */).map((k, M) => k.slice(-1) === "%" ? M === 3 ? parseInt(k) / 100 : parseInt(k) / 100 * 255 : Number(k));
          return {
            r: _[0],
            g: _[1],
            b: _[2],
            a: _[3]
          };
        }
      },
      _hex8ColorToRGBA(s) {
        if (s[0] === "#" && s.length === 9)
          return {
            r: parseInt(s.slice(1, 3), 16),
            g: parseInt(s.slice(3, 5), 16),
            b: parseInt(s.slice(5, 7), 16),
            a: parseInt(s.slice(7, 9), 16) / 255
          };
      },
      _hex6ColorToRGBA(s) {
        if (s[0] === "#" && s.length === 7)
          return {
            r: parseInt(s.slice(1, 3), 16),
            g: parseInt(s.slice(3, 5), 16),
            b: parseInt(s.slice(5, 7), 16),
            a: 1
          };
      },
      _hex4ColorToRGBA(s) {
        if (s[0] === "#" && s.length === 5)
          return {
            r: parseInt(s[1] + s[1], 16),
            g: parseInt(s[2] + s[2], 16),
            b: parseInt(s[3] + s[3], 16),
            a: parseInt(s[4] + s[4], 16) / 255
          };
      },
      _hex3ColorToRGBA(s) {
        if (s[0] === "#" && s.length === 4)
          return {
            r: parseInt(s[1] + s[1], 16),
            g: parseInt(s[2] + s[2], 16),
            b: parseInt(s[3] + s[3], 16),
            a: 1
          };
      },
      _hslColorToRGBA(s) {
        if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(s)) {
          const [_, ...k] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(s), M = Number(k[0]) / 360, G = Number(k[1]) / 100, r = Number(k[2]) / 100;
          let d, e, f;
          if (G === 0)
            return f = r * 255, {
              r: Math.round(f),
              g: Math.round(f),
              b: Math.round(f),
              a: 1
            };
          r < 0.5 ? d = r * (1 + G) : d = r + G - r * G;
          const T = 2 * r - d, t = [0, 0, 0];
          for (let a = 0; a < 3; a++)
            e = M + 1 / 3 * -(a - 1), e < 0 && e++, e > 1 && e--, 6 * e < 1 ? f = T + (d - T) * 6 * e : 2 * e < 1 ? f = d : 3 * e < 2 ? f = T + (d - T) * (2 / 3 - e) * 6 : f = T, t[a] = f * 255;
          return {
            r: Math.round(t[0]),
            g: Math.round(t[1]),
            b: Math.round(t[2]),
            a: 1
          };
        }
      },
      haveIntersection(s, _) {
        return !(_.x > s.x + s.width || _.x + _.width < s.x || _.y > s.y + s.height || _.y + _.height < s.y);
      },
      cloneObject(s) {
        const _ = {};
        for (const k in s)
          this._isPlainObject(s[k]) ? _[k] = this.cloneObject(s[k]) : this._isArray(s[k]) ? _[k] = this.cloneArray(s[k]) : _[k] = s[k];
        return _;
      },
      cloneArray(s) {
        return s.slice(0);
      },
      degToRad(s) {
        return s * o;
      },
      radToDeg(s) {
        return s * g;
      },
      _degToRad(s) {
        return h.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), h.Util.degToRad(s);
      },
      _radToDeg(s) {
        return h.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), h.Util.radToDeg(s);
      },
      _getRotation(s) {
        return A.Konva.angleDeg ? h.Util.radToDeg(s) : s;
      },
      _capitalize(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
      },
      throw(s) {
        throw new Error(u + s);
      },
      error(s) {
        console.error(u + s);
      },
      warn(s) {
        A.Konva.showWarnings && console.warn(P + s);
      },
      each(s, _) {
        for (const k in s)
          _(k, s[k]);
      },
      _inRange(s, _, k) {
        return _ <= s && s < k;
      },
      _getProjectionToSegment(s, _, k, M, G, r) {
        let d, e, f;
        const T = (s - k) * (s - k) + (_ - M) * (_ - M);
        if (T == 0)
          d = s, e = _, f = (G - k) * (G - k) + (r - M) * (r - M);
        else {
          const t = ((G - s) * (k - s) + (r - _) * (M - _)) / T;
          t < 0 ? (d = s, e = _, f = (s - G) * (s - G) + (_ - r) * (_ - r)) : t > 1 ? (d = k, e = M, f = (k - G) * (k - G) + (M - r) * (M - r)) : (d = s + t * (k - s), e = _ + t * (M - _), f = (d - G) * (d - G) + (e - r) * (e - r));
        }
        return [d, e, f];
      },
      _getProjectionToLine(s, _, k) {
        const M = h.Util.cloneObject(s);
        let G = Number.MAX_VALUE;
        return _.forEach(function(r, d) {
          if (!k && d === _.length - 1)
            return;
          const e = _[(d + 1) % _.length], f = h.Util._getProjectionToSegment(r.x, r.y, e.x, e.y, s.x, s.y), T = f[0], t = f[1], a = f[2];
          a < G && (M.x = T, M.y = t, G = a);
        }), M;
      },
      _prepareArrayForTween(s, _, k) {
        const M = [], G = [];
        if (s.length > _.length) {
          const d = _;
          _ = s, s = d;
        }
        for (let d = 0; d < s.length; d += 2)
          M.push({
            x: s[d],
            y: s[d + 1]
          });
        for (let d = 0; d < _.length; d += 2)
          G.push({
            x: _[d],
            y: _[d + 1]
          });
        const r = [];
        return G.forEach(function(d) {
          const e = h.Util._getProjectionToLine(d, M, k);
          r.push(e.x), r.push(e.y);
        }), r;
      },
      _prepareToStringify(s) {
        let _;
        s.visitedByCircularReferenceRemoval = !0;
        for (const k in s)
          if (s.hasOwnProperty(k) && s[k] && typeof s[k] == "object") {
            if (_ = Object.getOwnPropertyDescriptor(s, k), s[k].visitedByCircularReferenceRemoval || h.Util._isElement(s[k]))
              if (_.configurable)
                delete s[k];
              else
                return null;
            else if (h.Util._prepareToStringify(s[k]) === null)
              if (_.configurable)
                delete s[k];
              else
                return null;
          }
        return delete s.visitedByCircularReferenceRemoval, s;
      },
      _assign(s, _) {
        for (const k in _)
          s[k] = _[k];
        return s;
      },
      _getFirstPointerId(s) {
        return s.touches ? s.changedTouches[0].identifier : s.pointerId || 999;
      },
      releaseCanvas(...s) {
        A.Konva.releaseCanvasOnDestroy && s.forEach((_) => {
          _.width = 0, _.height = 0;
        });
      },
      drawRoundedRectPath(s, _, k, M) {
        let G = 0, r = 0, d = 0, e = 0;
        typeof M == "number" ? G = r = d = e = Math.min(M, _ / 2, k / 2) : (G = Math.min(M[0] || 0, _ / 2, k / 2), r = Math.min(M[1] || 0, _ / 2, k / 2), e = Math.min(M[2] || 0, _ / 2, k / 2), d = Math.min(M[3] || 0, _ / 2, k / 2)), s.moveTo(G, 0), s.lineTo(_ - r, 0), s.arc(_ - r, r, r, Math.PI * 3 / 2, 0, !1), s.lineTo(_, k - e), s.arc(_ - e, k - e, e, 0, Math.PI / 2, !1), s.lineTo(d, k), s.arc(d, k - d, d, Math.PI / 2, Math.PI, !1), s.lineTo(0, G), s.arc(G, G, G, Math.PI, Math.PI * 3 / 2, !1);
      }
    };
  }(je)), je;
}
var Jt = {}, Qe = {}, pt = {}, Si;
function et() {
  if (Si) return pt;
  Si = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.RGBComponent = E, pt.alphaComponent = w, pt.getNumberValidator = y, pt.getNumberOrArrayOfNumbersValidator = c, pt.getNumberOrAutoValidator = o, pt.getStringValidator = g, pt.getStringOrGradientValidator = v, pt.getFunctionValidator = m, pt.getNumberArrayValidator = C, pt.getBooleanValidator = P, pt.getComponentValidator = u;
  const h = J(), A = st();
  function O(l) {
    return A.Util._isString(l) ? '"' + l + '"' : Object.prototype.toString.call(l) === "[object Number]" || A.Util._isBoolean(l) ? l : Object.prototype.toString.call(l);
  }
  function E(l) {
    return l > 255 ? 255 : l < 0 ? 0 : Math.round(l);
  }
  function w(l) {
    return l > 1 ? 1 : l < 1e-4 ? 1e-4 : l;
  }
  function y() {
    if (h.Konva.isUnminified)
      return function(l, b) {
        return A.Util._isNumber(l) || A.Util.warn(O(l) + ' is a not valid value for "' + b + '" attribute. The value should be a number.'), l;
      };
  }
  function c(l) {
    if (h.Konva.isUnminified)
      return function(b, x) {
        let F = A.Util._isNumber(b), n = A.Util._isArray(b) && b.length == l;
        return !F && !n && A.Util.warn(O(b) + ' is a not valid value for "' + x + '" attribute. The value should be a number or Array<number>(' + l + ")"), b;
      };
  }
  function o() {
    if (h.Konva.isUnminified)
      return function(l, b) {
        var x = A.Util._isNumber(l), F = l === "auto";
        return x || F || A.Util.warn(O(l) + ' is a not valid value for "' + b + '" attribute. The value should be a number or "auto".'), l;
      };
  }
  function g() {
    if (h.Konva.isUnminified)
      return function(l, b) {
        return A.Util._isString(l) || A.Util.warn(O(l) + ' is a not valid value for "' + b + '" attribute. The value should be a string.'), l;
      };
  }
  function v() {
    if (h.Konva.isUnminified)
      return function(l, b) {
        const x = A.Util._isString(l), F = Object.prototype.toString.call(l) === "[object CanvasGradient]" || l && l.addColorStop;
        return x || F || A.Util.warn(O(l) + ' is a not valid value for "' + b + '" attribute. The value should be a string or a native gradient.'), l;
      };
  }
  function m() {
    if (h.Konva.isUnminified)
      return function(l, b) {
        return A.Util._isFunction(l) || A.Util.warn(O(l) + ' is a not valid value for "' + b + '" attribute. The value should be a function.'), l;
      };
  }
  function C() {
    if (h.Konva.isUnminified)
      return function(l, b) {
        const x = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
        return x && l instanceof x || (A.Util._isArray(l) ? l.forEach(function(F) {
          A.Util._isNumber(F) || A.Util.warn('"' + b + '" attribute has non numeric element ' + F + ". Make sure that all elements are numbers.");
        }) : A.Util.warn(O(l) + ' is a not valid value for "' + b + '" attribute. The value should be a array of numbers.')), l;
      };
  }
  function P() {
    if (h.Konva.isUnminified)
      return function(l, b) {
        var x = l === !0 || l === !1;
        return x || A.Util.warn(O(l) + ' is a not valid value for "' + b + '" attribute. The value should be a boolean.'), l;
      };
  }
  function u(l) {
    if (h.Konva.isUnminified)
      return function(b, x) {
        return b == null || A.Util.isObject(b) || A.Util.warn(O(b) + ' is a not valid value for "' + x + '" attribute. The value should be an object with properties ' + l), b;
      };
  }
  return pt;
}
var Ci;
function tt() {
  return Ci || (Ci = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Factory = void 0;
    const A = st(), O = et(), E = "get", w = "set";
    h.Factory = {
      addGetterSetter(y, c, o, g, v) {
        h.Factory.addGetter(y, c, o), h.Factory.addSetter(y, c, g, v), h.Factory.addOverloadedGetterSetter(y, c);
      },
      addGetter(y, c, o) {
        var g = E + A.Util._capitalize(c);
        y.prototype[g] = y.prototype[g] || function() {
          const v = this.attrs[c];
          return v === void 0 ? o : v;
        };
      },
      addSetter(y, c, o, g) {
        var v = w + A.Util._capitalize(c);
        y.prototype[v] || h.Factory.overWriteSetter(y, c, o, g);
      },
      overWriteSetter(y, c, o, g) {
        var v = w + A.Util._capitalize(c);
        y.prototype[v] = function(m) {
          return o && m !== void 0 && m !== null && (m = o.call(this, m, c)), this._setAttr(c, m), g && g.call(this), this;
        };
      },
      addComponentsGetterSetter(y, c, o, g, v) {
        const m = o.length, C = A.Util._capitalize, P = E + C(c), u = w + C(c);
        y.prototype[P] = function() {
          const b = {};
          for (let x = 0; x < m; x++) {
            const F = o[x];
            b[F] = this.getAttr(c + C(F));
          }
          return b;
        };
        const l = (0, O.getComponentValidator)(o);
        y.prototype[u] = function(b) {
          const x = this.attrs[c];
          g && (b = g.call(this, b, c)), l && l.call(this, b, c);
          for (const F in b)
            b.hasOwnProperty(F) && this._setAttr(c + C(F), b[F]);
          return b || o.forEach((F) => {
            this._setAttr(c + C(F), void 0);
          }), this._fireChangeEvent(c, x, b), v && v.call(this), this;
        }, h.Factory.addOverloadedGetterSetter(y, c);
      },
      addOverloadedGetterSetter(y, c) {
        var o = A.Util._capitalize(c), g = w + o, v = E + o;
        y.prototype[c] = function() {
          return arguments.length ? (this[g](arguments[0]), this) : this[v]();
        };
      },
      addDeprecatedGetterSetter(y, c, o, g) {
        A.Util.error("Adding deprecated " + c);
        const v = E + A.Util._capitalize(c), m = c + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
        y.prototype[v] = function() {
          A.Util.error(m);
          const C = this.attrs[c];
          return C === void 0 ? o : C;
        }, h.Factory.addSetter(y, c, g, function() {
          A.Util.error(m);
        }), h.Factory.addOverloadedGetterSetter(y, c);
      },
      backCompat(y, c) {
        A.Util.each(c, function(o, g) {
          const v = y.prototype[g], m = E + A.Util._capitalize(o), C = w + A.Util._capitalize(o);
          function P() {
            v.apply(this, arguments), A.Util.error('"' + o + '" method is deprecated and will be removed soon. Use ""' + g + '" instead.');
          }
          y.prototype[o] = P, y.prototype[m] = P, y.prototype[C] = P;
        });
      },
      afterSetFilter() {
        this._filterUpToDate = !1;
      }
    };
  }(Qe)), Qe;
}
var Mt = {}, Nt = {}, wi;
function Mn() {
  if (wi) return Nt;
  wi = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.HitContext = Nt.SceneContext = Nt.Context = void 0;
  const h = st(), A = J();
  function O(F) {
    const n = [], s = F.length, _ = h.Util;
    for (let k = 0; k < s; k++) {
      let M = F[k];
      _._isNumber(M) ? M = Math.round(M * 1e3) / 1e3 : _._isString(M) || (M = M + ""), n.push(M);
    }
    return n;
  }
  const E = ",", w = "(", y = ")", c = "([", o = "])", g = ";", v = "()", m = "=", C = [
    "arc",
    "arcTo",
    "beginPath",
    "bezierCurveTo",
    "clearRect",
    "clip",
    "closePath",
    "createLinearGradient",
    "createPattern",
    "createRadialGradient",
    "drawImage",
    "ellipse",
    "fill",
    "fillText",
    "getImageData",
    "createImageData",
    "lineTo",
    "moveTo",
    "putImageData",
    "quadraticCurveTo",
    "rect",
    "roundRect",
    "restore",
    "rotate",
    "save",
    "scale",
    "setLineDash",
    "setTransform",
    "stroke",
    "strokeText",
    "transform",
    "translate"
  ], P = [
    "fillStyle",
    "strokeStyle",
    "shadowColor",
    "shadowBlur",
    "shadowOffsetX",
    "shadowOffsetY",
    "letterSpacing",
    "lineCap",
    "lineDashOffset",
    "lineJoin",
    "lineWidth",
    "miterLimit",
    "direction",
    "font",
    "textAlign",
    "textBaseline",
    "globalAlpha",
    "globalCompositeOperation",
    "imageSmoothingEnabled"
  ], u = 100;
  let l = class {
    constructor(n) {
      this.canvas = n, A.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
    }
    fillShape(n) {
      n.fillEnabled() && this._fill(n);
    }
    _fill(n) {
    }
    strokeShape(n) {
      n.hasStroke() && this._stroke(n);
    }
    _stroke(n) {
    }
    fillStrokeShape(n) {
      n.attrs.fillAfterStrokeEnabled ? (this.strokeShape(n), this.fillShape(n)) : (this.fillShape(n), this.strokeShape(n));
    }
    getTrace(n, s) {
      let _ = this.traceArr, k = _.length, M = "", G, r, d, e;
      for (G = 0; G < k; G++)
        r = _[G], d = r.method, d ? (e = r.args, M += d, n ? M += v : h.Util._isArray(e[0]) ? M += c + e.join(E) + o : (s && (e = e.map((f) => typeof f == "number" ? Math.floor(f) : f)), M += w + e.join(E) + y)) : (M += r.property, n || (M += m + r.val)), M += g;
      return M;
    }
    clearTrace() {
      this.traceArr = [];
    }
    _trace(n) {
      let s = this.traceArr, _;
      s.push(n), _ = s.length, _ >= u && s.shift();
    }
    reset() {
      const n = this.getCanvas().getPixelRatio();
      this.setTransform(1 * n, 0, 0, 1 * n, 0, 0);
    }
    getCanvas() {
      return this.canvas;
    }
    clear(n) {
      const s = this.getCanvas();
      n ? this.clearRect(n.x || 0, n.y || 0, n.width || 0, n.height || 0) : this.clearRect(0, 0, s.getWidth() / s.pixelRatio, s.getHeight() / s.pixelRatio);
    }
    _applyLineCap(n) {
      const s = n.attrs.lineCap;
      s && this.setAttr("lineCap", s);
    }
    _applyOpacity(n) {
      const s = n.getAbsoluteOpacity();
      s !== 1 && this.setAttr("globalAlpha", s);
    }
    _applyLineJoin(n) {
      const s = n.attrs.lineJoin;
      s && this.setAttr("lineJoin", s);
    }
    setAttr(n, s) {
      this._context[n] = s;
    }
    arc(n, s, _, k, M, G) {
      this._context.arc(n, s, _, k, M, G);
    }
    arcTo(n, s, _, k, M) {
      this._context.arcTo(n, s, _, k, M);
    }
    beginPath() {
      this._context.beginPath();
    }
    bezierCurveTo(n, s, _, k, M, G) {
      this._context.bezierCurveTo(n, s, _, k, M, G);
    }
    clearRect(n, s, _, k) {
      this._context.clearRect(n, s, _, k);
    }
    clip(...n) {
      this._context.clip.apply(this._context, n);
    }
    closePath() {
      this._context.closePath();
    }
    createImageData(n, s) {
      const _ = arguments;
      if (_.length === 2)
        return this._context.createImageData(n, s);
      if (_.length === 1)
        return this._context.createImageData(n);
    }
    createLinearGradient(n, s, _, k) {
      return this._context.createLinearGradient(n, s, _, k);
    }
    createPattern(n, s) {
      return this._context.createPattern(n, s);
    }
    createRadialGradient(n, s, _, k, M, G) {
      return this._context.createRadialGradient(n, s, _, k, M, G);
    }
    drawImage(n, s, _, k, M, G, r, d, e) {
      const f = arguments, T = this._context;
      f.length === 3 ? T.drawImage(n, s, _) : f.length === 5 ? T.drawImage(n, s, _, k, M) : f.length === 9 && T.drawImage(n, s, _, k, M, G, r, d, e);
    }
    ellipse(n, s, _, k, M, G, r, d) {
      this._context.ellipse(n, s, _, k, M, G, r, d);
    }
    isPointInPath(n, s, _, k) {
      return _ ? this._context.isPointInPath(_, n, s, k) : this._context.isPointInPath(n, s, k);
    }
    fill(...n) {
      this._context.fill.apply(this._context, n);
    }
    fillRect(n, s, _, k) {
      this._context.fillRect(n, s, _, k);
    }
    strokeRect(n, s, _, k) {
      this._context.strokeRect(n, s, _, k);
    }
    fillText(n, s, _, k) {
      k ? this._context.fillText(n, s, _, k) : this._context.fillText(n, s, _);
    }
    measureText(n) {
      return this._context.measureText(n);
    }
    getImageData(n, s, _, k) {
      return this._context.getImageData(n, s, _, k);
    }
    lineTo(n, s) {
      this._context.lineTo(n, s);
    }
    moveTo(n, s) {
      this._context.moveTo(n, s);
    }
    rect(n, s, _, k) {
      this._context.rect(n, s, _, k);
    }
    roundRect(n, s, _, k, M) {
      this._context.roundRect(n, s, _, k, M);
    }
    putImageData(n, s, _) {
      this._context.putImageData(n, s, _);
    }
    quadraticCurveTo(n, s, _, k) {
      this._context.quadraticCurveTo(n, s, _, k);
    }
    restore() {
      this._context.restore();
    }
    rotate(n) {
      this._context.rotate(n);
    }
    save() {
      this._context.save();
    }
    scale(n, s) {
      this._context.scale(n, s);
    }
    setLineDash(n) {
      this._context.setLineDash ? this._context.setLineDash(n) : "mozDash" in this._context ? this._context.mozDash = n : "webkitLineDash" in this._context && (this._context.webkitLineDash = n);
    }
    getLineDash() {
      return this._context.getLineDash();
    }
    setTransform(n, s, _, k, M, G) {
      this._context.setTransform(n, s, _, k, M, G);
    }
    stroke(n) {
      n ? this._context.stroke(n) : this._context.stroke();
    }
    strokeText(n, s, _, k) {
      this._context.strokeText(n, s, _, k);
    }
    transform(n, s, _, k, M, G) {
      this._context.transform(n, s, _, k, M, G);
    }
    translate(n, s) {
      this._context.translate(n, s);
    }
    _enableTrace() {
      let n = this, s = C.length, _ = this.setAttr, k, M;
      const G = function(r) {
        let d = n[r], e;
        n[r] = function() {
          return M = O(Array.prototype.slice.call(arguments, 0)), e = d.apply(n, arguments), n._trace({
            method: r,
            args: M
          }), e;
        };
      };
      for (k = 0; k < s; k++)
        G(C[k]);
      n.setAttr = function() {
        _.apply(n, arguments);
        const r = arguments[0];
        let d = arguments[1];
        (r === "shadowOffsetX" || r === "shadowOffsetY" || r === "shadowBlur") && (d = d / this.canvas.getPixelRatio()), n._trace({
          property: r,
          val: d
        });
      };
    }
    _applyGlobalCompositeOperation(n) {
      const s = n.attrs.globalCompositeOperation;
      !s || s === "source-over" || this.setAttr("globalCompositeOperation", s);
    }
  };
  Nt.Context = l, P.forEach(function(F) {
    Object.defineProperty(l.prototype, F, {
      get() {
        return this._context[F];
      },
      set(n) {
        this._context[F] = n;
      }
    });
  });
  class b extends l {
    constructor(n, { willReadFrequently: s = !1 } = {}) {
      super(n), this._context = n._canvas.getContext("2d", {
        willReadFrequently: s
      });
    }
    _fillColor(n) {
      const s = n.fill();
      this.setAttr("fillStyle", s), n._fillFunc(this);
    }
    _fillPattern(n) {
      this.setAttr("fillStyle", n._getFillPattern()), n._fillFunc(this);
    }
    _fillLinearGradient(n) {
      const s = n._getLinearGradient();
      s && (this.setAttr("fillStyle", s), n._fillFunc(this));
    }
    _fillRadialGradient(n) {
      const s = n._getRadialGradient();
      s && (this.setAttr("fillStyle", s), n._fillFunc(this));
    }
    _fill(n) {
      const s = n.fill(), _ = n.getFillPriority();
      if (s && _ === "color") {
        this._fillColor(n);
        return;
      }
      const k = n.getFillPatternImage();
      if (k && _ === "pattern") {
        this._fillPattern(n);
        return;
      }
      const M = n.getFillLinearGradientColorStops();
      if (M && _ === "linear-gradient") {
        this._fillLinearGradient(n);
        return;
      }
      const G = n.getFillRadialGradientColorStops();
      if (G && _ === "radial-gradient") {
        this._fillRadialGradient(n);
        return;
      }
      s ? this._fillColor(n) : k ? this._fillPattern(n) : M ? this._fillLinearGradient(n) : G && this._fillRadialGradient(n);
    }
    _strokeLinearGradient(n) {
      const s = n.getStrokeLinearGradientStartPoint(), _ = n.getStrokeLinearGradientEndPoint(), k = n.getStrokeLinearGradientColorStops(), M = this.createLinearGradient(s.x, s.y, _.x, _.y);
      if (k) {
        for (let G = 0; G < k.length; G += 2)
          M.addColorStop(k[G], k[G + 1]);
        this.setAttr("strokeStyle", M);
      }
    }
    _stroke(n) {
      const s = n.dash(), _ = n.getStrokeScaleEnabled();
      if (n.hasStroke()) {
        if (!_) {
          this.save();
          const M = this.getCanvas().getPixelRatio();
          this.setTransform(M, 0, 0, M, 0, 0);
        }
        this._applyLineCap(n), s && n.dashEnabled() && (this.setLineDash(s), this.setAttr("lineDashOffset", n.dashOffset())), this.setAttr("lineWidth", n.strokeWidth()), n.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), n.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(n) : this.setAttr("strokeStyle", n.stroke()), n._strokeFunc(this), _ || this.restore();
      }
    }
    _applyShadow(n) {
      var s, _, k;
      const M = (s = n.getShadowRGBA()) !== null && s !== void 0 ? s : "black", G = (_ = n.getShadowBlur()) !== null && _ !== void 0 ? _ : 5, r = (k = n.getShadowOffset()) !== null && k !== void 0 ? k : {
        x: 0,
        y: 0
      }, d = n.getAbsoluteScale(), e = this.canvas.getPixelRatio(), f = d.x * e, T = d.y * e;
      this.setAttr("shadowColor", M), this.setAttr("shadowBlur", G * Math.min(Math.abs(f), Math.abs(T))), this.setAttr("shadowOffsetX", r.x * f), this.setAttr("shadowOffsetY", r.y * T);
    }
  }
  Nt.SceneContext = b;
  class x extends l {
    constructor(n) {
      super(n), this._context = n._canvas.getContext("2d", {
        willReadFrequently: !0
      });
    }
    _fill(n) {
      this.save(), this.setAttr("fillStyle", n.colorKey), n._fillFuncHit(this), this.restore();
    }
    strokeShape(n) {
      n.hasHitStroke() && this._stroke(n);
    }
    _stroke(n) {
      if (n.hasHitStroke()) {
        const s = n.getStrokeScaleEnabled();
        if (!s) {
          this.save();
          const M = this.getCanvas().getPixelRatio();
          this.setTransform(M, 0, 0, M, 0, 0);
        }
        this._applyLineCap(n);
        const _ = n.hitStrokeWidth(), k = _ === "auto" ? n.strokeWidth() : _;
        this.setAttr("lineWidth", k), this.setAttr("strokeStyle", n.colorKey), n._strokeFuncHit(this), s || this.restore();
      }
    }
  }
  return Nt.HitContext = x, Nt;
}
var xi;
function qe() {
  if (xi) return Mt;
  xi = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.HitCanvas = Mt.SceneCanvas = Mt.Canvas = void 0;
  const h = st(), A = Mn(), O = J(), E = tt(), w = et();
  let y;
  function c() {
    if (y)
      return y;
    const m = h.Util.createCanvasElement(), C = m.getContext("2d");
    return y = function() {
      const P = O.Konva._global.devicePixelRatio || 1, u = C.webkitBackingStorePixelRatio || C.mozBackingStorePixelRatio || C.msBackingStorePixelRatio || C.oBackingStorePixelRatio || C.backingStorePixelRatio || 1;
      return P / u;
    }(), h.Util.releaseCanvas(m), y;
  }
  let o = class {
    constructor(C) {
      this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
      const u = (C || {}).pixelRatio || O.Konva.pixelRatio || c();
      this.pixelRatio = u, this._canvas = h.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
    }
    getContext() {
      return this.context;
    }
    getPixelRatio() {
      return this.pixelRatio;
    }
    setPixelRatio(C) {
      const P = this.pixelRatio;
      this.pixelRatio = C, this.setSize(this.getWidth() / P, this.getHeight() / P);
    }
    setWidth(C) {
      this.width = this._canvas.width = C * this.pixelRatio, this._canvas.style.width = C + "px";
      const P = this.pixelRatio;
      this.getContext()._context.scale(P, P);
    }
    setHeight(C) {
      this.height = this._canvas.height = C * this.pixelRatio, this._canvas.style.height = C + "px";
      const P = this.pixelRatio;
      this.getContext()._context.scale(P, P);
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    setSize(C, P) {
      this.setWidth(C || 0), this.setHeight(P || 0);
    }
    toDataURL(C, P) {
      try {
        return this._canvas.toDataURL(C, P);
      } catch {
        try {
          return this._canvas.toDataURL();
        } catch (l) {
          return h.Util.error("Unable to get data URL. " + l.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
        }
      }
    }
  };
  Mt.Canvas = o, E.Factory.addGetterSetter(o, "pixelRatio", void 0, (0, w.getNumberValidator)());
  class g extends o {
    constructor(C = { width: 0, height: 0, willReadFrequently: !1 }) {
      super(C), this.context = new A.SceneContext(this, {
        willReadFrequently: C.willReadFrequently
      }), this.setSize(C.width, C.height);
    }
  }
  Mt.SceneCanvas = g;
  class v extends o {
    constructor(C = { width: 0, height: 0 }) {
      super(C), this.hitCanvas = !0, this.context = new A.HitContext(this), this.setSize(C.width, C.height);
    }
  }
  return Mt.HitCanvas = v, Mt;
}
var Ze = {}, Pi;
function ui() {
  return Pi || (Pi = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.DD = void 0;
    const A = J(), O = st();
    h.DD = {
      get isDragging() {
        let E = !1;
        return h.DD._dragElements.forEach((w) => {
          w.dragStatus === "dragging" && (E = !0);
        }), E;
      },
      justDragged: !1,
      get node() {
        let E;
        return h.DD._dragElements.forEach((w) => {
          E = w.node;
        }), E;
      },
      _dragElements: /* @__PURE__ */ new Map(),
      _drag(E) {
        const w = [];
        h.DD._dragElements.forEach((y, c) => {
          const { node: o } = y, g = o.getStage();
          g.setPointersPositions(E), y.pointerId === void 0 && (y.pointerId = O.Util._getFirstPointerId(E));
          const v = g._changedPointerPositions.find((m) => m.id === y.pointerId);
          if (v) {
            if (y.dragStatus !== "dragging") {
              const m = o.dragDistance();
              if (Math.max(Math.abs(v.x - y.startPointerPos.x), Math.abs(v.y - y.startPointerPos.y)) < m || (o.startDrag({ evt: E }), !o.isDragging()))
                return;
            }
            o._setDragPosition(E, y), w.push(o);
          }
        }), w.forEach((y) => {
          y.fire("dragmove", {
            type: "dragmove",
            target: y,
            evt: E
          }, !0);
        });
      },
      _endDragBefore(E) {
        const w = [];
        h.DD._dragElements.forEach((y) => {
          const { node: c } = y, o = c.getStage();
          if (E && o.setPointersPositions(E), !o._changedPointerPositions.find((m) => m.id === y.pointerId))
            return;
          (y.dragStatus === "dragging" || y.dragStatus === "stopped") && (h.DD.justDragged = !0, A.Konva._mouseListenClick = !1, A.Konva._touchListenClick = !1, A.Konva._pointerListenClick = !1, y.dragStatus = "stopped");
          const v = y.node.getLayer() || y.node instanceof A.Konva.Stage && y.node;
          v && w.indexOf(v) === -1 && w.push(v);
        }), w.forEach((y) => {
          y.draw();
        });
      },
      _endDragAfter(E) {
        h.DD._dragElements.forEach((w, y) => {
          w.dragStatus === "stopped" && w.node.fire("dragend", {
            type: "dragend",
            target: w.node,
            evt: E
          }, !0), w.dragStatus !== "dragging" && h.DD._dragElements.delete(y);
        });
      }
    }, A.Konva.isBrowser && (window.addEventListener("mouseup", h.DD._endDragBefore, !0), window.addEventListener("touchend", h.DD._endDragBefore, !0), window.addEventListener("touchcancel", h.DD._endDragBefore, !0), window.addEventListener("mousemove", h.DD._drag), window.addEventListener("touchmove", h.DD._drag), window.addEventListener("mouseup", h.DD._endDragAfter, !1), window.addEventListener("touchend", h.DD._endDragAfter, !1), window.addEventListener("touchcancel", h.DD._endDragAfter, !1));
  }(Ze)), Ze;
}
var Ti;
function ot() {
  if (Ti) return Jt;
  Ti = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.Node = void 0;
  const h = st(), A = tt(), O = qe(), E = J(), w = ui(), y = et(), c = "absoluteOpacity", o = "allEventListeners", g = "absoluteTransform", v = "absoluteScale", m = "canvas", C = "Change", P = "children", u = "konva", l = "listening", b = "mouseenter", x = "mouseleave", F = "set", n = "Shape", s = " ", _ = "stage", k = "transform", M = "Stage", G = "visible", r = [
    "xChange.konva",
    "yChange.konva",
    "scaleXChange.konva",
    "scaleYChange.konva",
    "skewXChange.konva",
    "skewYChange.konva",
    "rotationChange.konva",
    "offsetXChange.konva",
    "offsetYChange.konva",
    "transformsEnabledChange.konva"
  ].join(s);
  let d = 1, e = class li {
    constructor(t) {
      this._id = d++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(t), this._shouldFireChangeEvents = !0;
    }
    hasChildren() {
      return !1;
    }
    _clearCache(t) {
      (t === k || t === g) && this._cache.get(t) ? this._cache.get(t).dirty = !0 : t ? this._cache.delete(t) : this._cache.clear();
    }
    _getCache(t, a) {
      let i = this._cache.get(t);
      return (i === void 0 || (t === k || t === g) && i.dirty === !0) && (i = a.call(this), this._cache.set(t, i)), i;
    }
    _calculate(t, a, i) {
      if (!this._attachedDepsListeners.get(t)) {
        const p = a.map((S) => S + "Change.konva").join(s);
        this.on(p, () => {
          this._clearCache(t);
        }), this._attachedDepsListeners.set(t, !0);
      }
      return this._getCache(t, i);
    }
    _getCanvasCache() {
      return this._cache.get(m);
    }
    _clearSelfAndDescendantCache(t) {
      this._clearCache(t), t === g && this.fire("absoluteTransformChange");
    }
    clearCache() {
      if (this._cache.has(m)) {
        const { scene: t, filter: a, hit: i } = this._cache.get(m);
        h.Util.releaseCanvas(t, a, i), this._cache.delete(m);
      }
      return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
    }
    cache(t) {
      const a = t || {};
      let i = {};
      (a.x === void 0 || a.y === void 0 || a.width === void 0 || a.height === void 0) && (i = this.getClientRect({
        skipTransform: !0,
        relativeTo: this.getParent() || void 0
      }));
      let p = Math.ceil(a.width || i.width), S = Math.ceil(a.height || i.height), R = a.pixelRatio, N = a.x === void 0 ? Math.floor(i.x) : a.x, I = a.y === void 0 ? Math.floor(i.y) : a.y, D = a.offset || 0, V = a.drawBorder || !1, B = a.hitCanvasPixelRatio || 1;
      if (!p || !S) {
        h.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      const H = Math.abs(Math.round(i.x) - N) > 0.5 ? 1 : 0, q = Math.abs(Math.round(i.y) - I) > 0.5 ? 1 : 0;
      p += D * 2 + H, S += D * 2 + q, N -= D, I -= D;
      const W = new O.SceneCanvas({
        pixelRatio: R,
        width: p,
        height: S
      }), L = new O.SceneCanvas({
        pixelRatio: R,
        width: 0,
        height: 0,
        willReadFrequently: !0
      }), U = new O.HitCanvas({
        pixelRatio: B,
        width: p,
        height: S
      }), X = W.getContext(), z = U.getContext();
      return U.isCache = !0, W.isCache = !0, this._cache.delete(m), this._filterUpToDate = !1, a.imageSmoothingEnabled === !1 && (W.getContext()._context.imageSmoothingEnabled = !1, L.getContext()._context.imageSmoothingEnabled = !1), X.save(), z.save(), X.translate(-N, -I), z.translate(-N, -I), this._isUnderCache = !0, this._clearSelfAndDescendantCache(c), this._clearSelfAndDescendantCache(v), this.drawScene(W, this), this.drawHit(U, this), this._isUnderCache = !1, X.restore(), z.restore(), V && (X.save(), X.beginPath(), X.rect(0, 0, p, S), X.closePath(), X.setAttr("strokeStyle", "red"), X.setAttr("lineWidth", 5), X.stroke(), X.restore()), this._cache.set(m, {
        scene: W,
        filter: L,
        hit: U,
        x: N,
        y: I
      }), this._requestDraw(), this;
    }
    isCached() {
      return this._cache.has(m);
    }
    getClientRect(t) {
      throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(t, a) {
      const i = [
        { x: t.x, y: t.y },
        { x: t.x + t.width, y: t.y },
        { x: t.x + t.width, y: t.y + t.height },
        { x: t.x, y: t.y + t.height }
      ];
      let p = 1 / 0, S = 1 / 0, R = -1 / 0, N = -1 / 0;
      const I = this.getAbsoluteTransform(a);
      return i.forEach(function(D) {
        const V = I.point(D);
        p === void 0 && (p = R = V.x, S = N = V.y), p = Math.min(p, V.x), S = Math.min(S, V.y), R = Math.max(R, V.x), N = Math.max(N, V.y);
      }), {
        x: p,
        y: S,
        width: R - p,
        height: N - S
      };
    }
    _drawCachedSceneCanvas(t) {
      t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
      const a = this._getCanvasCache();
      t.translate(a.x, a.y);
      const i = this._getCachedSceneCanvas(), p = i.pixelRatio;
      t.drawImage(i._canvas, 0, 0, i.width / p, i.height / p), t.restore();
    }
    _drawCachedHitCanvas(t) {
      const a = this._getCanvasCache(), i = a.hit;
      t.save(), t.translate(a.x, a.y), t.drawImage(i._canvas, 0, 0, i.width / i.pixelRatio, i.height / i.pixelRatio), t.restore();
    }
    _getCachedSceneCanvas() {
      let t = this.filters(), a = this._getCanvasCache(), i = a.scene, p = a.filter, S = p.getContext(), R, N, I, D;
      if (t) {
        if (!this._filterUpToDate) {
          const V = i.pixelRatio;
          p.setSize(i.width / i.pixelRatio, i.height / i.pixelRatio);
          try {
            for (R = t.length, S.clear(), S.drawImage(i._canvas, 0, 0, i.getWidth() / V, i.getHeight() / V), N = S.getImageData(0, 0, p.getWidth(), p.getHeight()), I = 0; I < R; I++) {
              if (D = t[I], typeof D != "function") {
                h.Util.error("Filter should be type of function, but got " + typeof D + " instead. Please check correct filters");
                continue;
              }
              D.call(this, N), S.putImageData(N, 0, 0);
            }
          } catch (B) {
            h.Util.error("Unable to apply filter. " + B.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          }
          this._filterUpToDate = !0;
        }
        return p;
      }
      return i;
    }
    on(t, a) {
      if (this._cache && this._cache.delete(o), arguments.length === 3)
        return this._delegate.apply(this, arguments);
      let i = t.split(s), p = i.length, S, R, N, I, D;
      for (S = 0; S < p; S++)
        R = i[S], N = R.split("."), I = N[0], D = N[1] || "", this.eventListeners[I] || (this.eventListeners[I] = []), this.eventListeners[I].push({
          name: D,
          handler: a
        });
      return this;
    }
    off(t, a) {
      let i = (t || "").split(s), p = i.length, S, R, N, I, D, V;
      if (this._cache && this._cache.delete(o), !t)
        for (R in this.eventListeners)
          this._off(R);
      for (S = 0; S < p; S++)
        if (N = i[S], I = N.split("."), D = I[0], V = I[1], D)
          this.eventListeners[D] && this._off(D, V, a);
        else
          for (R in this.eventListeners)
            this._off(R, V, a);
      return this;
    }
    dispatchEvent(t) {
      const a = {
        target: this,
        type: t.type,
        evt: t
      };
      return this.fire(t.type, a), this;
    }
    addEventListener(t, a) {
      return this.on(t, function(i) {
        a.call(this, i.evt);
      }), this;
    }
    removeEventListener(t) {
      return this.off(t), this;
    }
    _delegate(t, a, i) {
      const p = this;
      this.on(t, function(S) {
        const R = S.target.findAncestors(a, !0, p);
        for (let N = 0; N < R.length; N++)
          S = h.Util.cloneObject(S), S.currentTarget = R[N], i.call(R[N], S);
      });
    }
    remove() {
      return this.isDragging() && this.stopDrag(), w.DD._dragElements.delete(this._id), this._remove(), this;
    }
    _clearCaches() {
      this._clearSelfAndDescendantCache(g), this._clearSelfAndDescendantCache(c), this._clearSelfAndDescendantCache(v), this._clearSelfAndDescendantCache(_), this._clearSelfAndDescendantCache(G), this._clearSelfAndDescendantCache(l);
    }
    _remove() {
      this._clearCaches();
      const t = this.getParent();
      t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), this.parent = null);
    }
    destroy() {
      return this.remove(), this.clearCache(), this;
    }
    getAttr(t) {
      const a = "get" + h.Util._capitalize(t);
      return h.Util._isFunction(this[a]) ? this[a]() : this.attrs[t];
    }
    getAncestors() {
      let t = this.getParent(), a = [];
      for (; t; )
        a.push(t), t = t.getParent();
      return a;
    }
    getAttrs() {
      return this.attrs || {};
    }
    setAttrs(t) {
      return this._batchTransformChanges(() => {
        let a, i;
        if (!t)
          return this;
        for (a in t)
          a !== P && (i = F + h.Util._capitalize(a), h.Util._isFunction(this[i]) ? this[i](t[a]) : this._setAttr(a, t[a]));
      }), this;
    }
    isListening() {
      return this._getCache(l, this._isListening);
    }
    _isListening(t) {
      if (!this.listening())
        return !1;
      const i = this.getParent();
      return i && i !== t && this !== t ? i._isListening(t) : !0;
    }
    isVisible() {
      return this._getCache(G, this._isVisible);
    }
    _isVisible(t) {
      if (!this.visible())
        return !1;
      const i = this.getParent();
      return i && i !== t && this !== t ? i._isVisible(t) : !0;
    }
    shouldDrawHit(t, a = !1) {
      if (t)
        return this._isVisible(t) && this._isListening(t);
      const i = this.getLayer();
      let p = !1;
      w.DD._dragElements.forEach((R) => {
        R.dragStatus === "dragging" && (R.node.nodeType === "Stage" || R.node.getLayer() === i) && (p = !0);
      });
      const S = !a && !E.Konva.hitOnDragEnabled && (p || E.Konva.isTransforming());
      return this.isListening() && this.isVisible() && !S;
    }
    show() {
      return this.visible(!0), this;
    }
    hide() {
      return this.visible(!1), this;
    }
    getZIndex() {
      return this.index || 0;
    }
    getAbsoluteZIndex() {
      let t = this.getDepth(), a = this, i = 0, p, S, R, N;
      function I(V) {
        for (p = [], S = V.length, R = 0; R < S; R++)
          N = V[R], i++, N.nodeType !== n && (p = p.concat(N.getChildren().slice())), N._id === a._id && (R = S);
        p.length > 0 && p[0].getDepth() <= t && I(p);
      }
      const D = this.getStage();
      return a.nodeType !== M && D && I(D.getChildren()), i;
    }
    getDepth() {
      let t = 0, a = this.parent;
      for (; a; )
        t++, a = a.parent;
      return t;
    }
    _batchTransformChanges(t) {
      this._batchingTransformChange = !0, t(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(k), this._clearSelfAndDescendantCache(g)), this._needClearTransformCache = !1;
    }
    setPosition(t) {
      return this._batchTransformChanges(() => {
        this.x(t.x), this.y(t.y);
      }), this;
    }
    getPosition() {
      return {
        x: this.x(),
        y: this.y()
      };
    }
    getRelativePointerPosition() {
      const t = this.getStage();
      if (!t)
        return null;
      const a = t.getPointerPosition();
      if (!a)
        return null;
      const i = this.getAbsoluteTransform().copy();
      return i.invert(), i.point(a);
    }
    getAbsolutePosition(t) {
      let a = !1, i = this.parent;
      for (; i; ) {
        if (i.isCached()) {
          a = !0;
          break;
        }
        i = i.parent;
      }
      a && !t && (t = !0);
      const p = this.getAbsoluteTransform(t).getMatrix(), S = new h.Transform(), R = this.offset();
      return S.m = p.slice(), S.translate(R.x, R.y), S.getTranslation();
    }
    setAbsolutePosition(t) {
      const { x: a, y: i, ...p } = this._clearTransform();
      this.attrs.x = a, this.attrs.y = i, this._clearCache(k);
      const S = this._getAbsoluteTransform().copy();
      return S.invert(), S.translate(t.x, t.y), t = {
        x: this.attrs.x + S.getTranslation().x,
        y: this.attrs.y + S.getTranslation().y
      }, this._setTransform(p), this.setPosition({ x: t.x, y: t.y }), this._clearCache(k), this._clearSelfAndDescendantCache(g), this;
    }
    _setTransform(t) {
      let a;
      for (a in t)
        this.attrs[a] = t[a];
    }
    _clearTransform() {
      const t = {
        x: this.x(),
        y: this.y(),
        rotation: this.rotation(),
        scaleX: this.scaleX(),
        scaleY: this.scaleY(),
        offsetX: this.offsetX(),
        offsetY: this.offsetY(),
        skewX: this.skewX(),
        skewY: this.skewY()
      };
      return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, t;
    }
    move(t) {
      let a = t.x, i = t.y, p = this.x(), S = this.y();
      return a !== void 0 && (p += a), i !== void 0 && (S += i), this.setPosition({ x: p, y: S }), this;
    }
    _eachAncestorReverse(t, a) {
      let i = [], p = this.getParent(), S, R;
      if (!(a && a._id === this._id)) {
        for (i.unshift(this); p && (!a || p._id !== a._id); )
          i.unshift(p), p = p.parent;
        for (S = i.length, R = 0; R < S; R++)
          t(i[R]);
      }
    }
    rotate(t) {
      return this.rotation(this.rotation() + t), this;
    }
    moveToTop() {
      if (!this.parent)
        return h.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
      const t = this.index, a = this.parent.getChildren().length;
      return t < a - 1 ? (this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveUp() {
      if (!this.parent)
        return h.Util.warn("Node has no parent. moveUp function is ignored."), !1;
      const t = this.index, a = this.parent.getChildren().length;
      return t < a - 1 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveDown() {
      if (!this.parent)
        return h.Util.warn("Node has no parent. moveDown function is ignored."), !1;
      const t = this.index;
      return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveToBottom() {
      if (!this.parent)
        return h.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
      const t = this.index;
      return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    setZIndex(t) {
      if (!this.parent)
        return h.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
      (t < 0 || t >= this.parent.children.length) && h.Util.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
      const a = this.index;
      return this.parent.children.splice(a, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this;
    }
    getAbsoluteOpacity() {
      return this._getCache(c, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
      let t = this.opacity();
      const a = this.getParent();
      return a && !a._isUnderCache && (t *= a.getAbsoluteOpacity()), t;
    }
    moveTo(t) {
      return this.getParent() !== t && (this._remove(), t.add(this)), this;
    }
    toObject() {
      let t = this.getAttrs(), a, i, p, S, R;
      const N = {
        attrs: {},
        className: this.getClassName()
      };
      for (a in t)
        i = t[a], R = h.Util.isObject(i) && !h.Util._isPlainObject(i) && !h.Util._isArray(i), !R && (p = typeof this[a] == "function" && this[a], delete t[a], S = p ? p.call(this) : null, t[a] = i, S !== i && (N.attrs[a] = i));
      return h.Util._prepareToStringify(N);
    }
    toJSON() {
      return JSON.stringify(this.toObject());
    }
    getParent() {
      return this.parent;
    }
    findAncestors(t, a, i) {
      const p = [];
      a && this._isMatch(t) && p.push(this);
      let S = this.parent;
      for (; S; ) {
        if (S === i)
          return p;
        S._isMatch(t) && p.push(S), S = S.parent;
      }
      return p;
    }
    isAncestorOf(t) {
      return !1;
    }
    findAncestor(t, a, i) {
      return this.findAncestors(t, a, i)[0];
    }
    _isMatch(t) {
      if (!t)
        return !1;
      if (typeof t == "function")
        return t(this);
      let a = t.replace(/ /g, "").split(","), i = a.length, p, S;
      for (p = 0; p < i; p++)
        if (S = a[p], h.Util.isValidSelector(S) || (h.Util.warn('Selector "' + S + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), h.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), h.Util.warn("Konva is awesome, right?")), S.charAt(0) === "#") {
          if (this.id() === S.slice(1))
            return !0;
        } else if (S.charAt(0) === ".") {
          if (this.hasName(S.slice(1)))
            return !0;
        } else if (this.className === S || this.nodeType === S)
          return !0;
      return !1;
    }
    getLayer() {
      const t = this.getParent();
      return t ? t.getLayer() : null;
    }
    getStage() {
      return this._getCache(_, this._getStage);
    }
    _getStage() {
      const t = this.getParent();
      return t ? t.getStage() : null;
    }
    fire(t, a = {}, i) {
      return a.target = a.target || this, i ? this._fireAndBubble(t, a) : this._fire(t, a), this;
    }
    getAbsoluteTransform(t) {
      return t ? this._getAbsoluteTransform(t) : this._getCache(g, this._getAbsoluteTransform);
    }
    _getAbsoluteTransform(t) {
      let a;
      if (t)
        return a = new h.Transform(), this._eachAncestorReverse(function(i) {
          const p = i.transformsEnabled();
          p === "all" ? a.multiply(i.getTransform()) : p === "position" && a.translate(i.x() - i.offsetX(), i.y() - i.offsetY());
        }, t), a;
      {
        a = this._cache.get(g) || new h.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(a) : a.reset();
        const i = this.transformsEnabled();
        if (i === "all")
          a.multiply(this.getTransform());
        else if (i === "position") {
          const p = this.attrs.x || 0, S = this.attrs.y || 0, R = this.attrs.offsetX || 0, N = this.attrs.offsetY || 0;
          a.translate(p - R, S - N);
        }
        return a.dirty = !1, a;
      }
    }
    getAbsoluteScale(t) {
      let a = this;
      for (; a; )
        a._isUnderCache && (t = a), a = a.getParent();
      const p = this.getAbsoluteTransform(t).decompose();
      return {
        x: p.scaleX,
        y: p.scaleY
      };
    }
    getAbsoluteRotation() {
      return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
      return this._getCache(k, this._getTransform);
    }
    _getTransform() {
      var t, a;
      const i = this._cache.get(k) || new h.Transform();
      i.reset();
      const p = this.x(), S = this.y(), R = E.Konva.getAngle(this.rotation()), N = (t = this.attrs.scaleX) !== null && t !== void 0 ? t : 1, I = (a = this.attrs.scaleY) !== null && a !== void 0 ? a : 1, D = this.attrs.skewX || 0, V = this.attrs.skewY || 0, B = this.attrs.offsetX || 0, H = this.attrs.offsetY || 0;
      return (p !== 0 || S !== 0) && i.translate(p, S), R !== 0 && i.rotate(R), (D !== 0 || V !== 0) && i.skew(D, V), (N !== 1 || I !== 1) && i.scale(N, I), (B !== 0 || H !== 0) && i.translate(-1 * B, -1 * H), i.dirty = !1, i;
    }
    clone(t) {
      let a = h.Util.cloneObject(this.attrs), i, p, S, R, N;
      for (i in t)
        a[i] = t[i];
      const I = new this.constructor(a);
      for (i in this.eventListeners)
        for (p = this.eventListeners[i], S = p.length, R = 0; R < S; R++)
          N = p[R], N.name.indexOf(u) < 0 && (I.eventListeners[i] || (I.eventListeners[i] = []), I.eventListeners[i].push(N));
      return I;
    }
    _toKonvaCanvas(t) {
      t = t || {};
      const a = this.getClientRect(), i = this.getStage(), p = t.x !== void 0 ? t.x : Math.floor(a.x), S = t.y !== void 0 ? t.y : Math.floor(a.y), R = t.pixelRatio || 1, N = new O.SceneCanvas({
        width: t.width || Math.ceil(a.width) || (i ? i.width() : 0),
        height: t.height || Math.ceil(a.height) || (i ? i.height() : 0),
        pixelRatio: R
      }), I = N.getContext(), D = new O.SceneCanvas({
        width: N.width / N.pixelRatio + Math.abs(p),
        height: N.height / N.pixelRatio + Math.abs(S),
        pixelRatio: N.pixelRatio
      });
      return t.imageSmoothingEnabled === !1 && (I._context.imageSmoothingEnabled = !1), I.save(), (p || S) && I.translate(-1 * p, -1 * S), this.drawScene(N, void 0, D), I.restore(), N;
    }
    toCanvas(t) {
      return this._toKonvaCanvas(t)._canvas;
    }
    toDataURL(t) {
      t = t || {};
      const a = t.mimeType || null, i = t.quality || null, p = this._toKonvaCanvas(t).toDataURL(a, i);
      return t.callback && t.callback(p), p;
    }
    toImage(t) {
      return new Promise((a, i) => {
        try {
          const p = t == null ? void 0 : t.callback;
          p && delete t.callback, h.Util._urlToImage(this.toDataURL(t), function(S) {
            a(S), p == null || p(S);
          });
        } catch (p) {
          i(p);
        }
      });
    }
    toBlob(t) {
      return new Promise((a, i) => {
        try {
          const p = t == null ? void 0 : t.callback;
          p && delete t.callback, this.toCanvas(t).toBlob((S) => {
            a(S), p == null || p(S);
          }, t == null ? void 0 : t.mimeType, t == null ? void 0 : t.quality);
        } catch (p) {
          i(p);
        }
      });
    }
    setSize(t) {
      return this.width(t.width), this.height(t.height), this;
    }
    getSize() {
      return {
        width: this.width(),
        height: this.height()
      };
    }
    getClassName() {
      return this.className || this.nodeType;
    }
    getType() {
      return this.nodeType;
    }
    getDragDistance() {
      return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : E.Konva.dragDistance;
    }
    _off(t, a, i) {
      let p = this.eventListeners[t], S, R, N;
      for (S = 0; S < p.length; S++)
        if (R = p[S].name, N = p[S].handler, (R !== "konva" || a === "konva") && (!a || R === a) && (!i || i === N)) {
          if (p.splice(S, 1), p.length === 0) {
            delete this.eventListeners[t];
            break;
          }
          S--;
        }
    }
    _fireChangeEvent(t, a, i) {
      this._fire(t + C, {
        oldVal: a,
        newVal: i
      });
    }
    addName(t) {
      if (!this.hasName(t)) {
        const a = this.name(), i = a ? a + " " + t : t;
        this.name(i);
      }
      return this;
    }
    hasName(t) {
      if (!t)
        return !1;
      const a = this.name();
      return a ? (a || "").split(/\s/g).indexOf(t) !== -1 : !1;
    }
    removeName(t) {
      const a = (this.name() || "").split(/\s/g), i = a.indexOf(t);
      return i !== -1 && (a.splice(i, 1), this.name(a.join(" "))), this;
    }
    setAttr(t, a) {
      const i = this[F + h.Util._capitalize(t)];
      return h.Util._isFunction(i) ? i.call(this, a) : this._setAttr(t, a), this;
    }
    _requestDraw() {
      if (E.Konva.autoDrawEnabled) {
        const t = this.getLayer() || this.getStage();
        t == null || t.batchDraw();
      }
    }
    _setAttr(t, a) {
      const i = this.attrs[t];
      i === a && !h.Util.isObject(a) || (a == null ? delete this.attrs[t] : this.attrs[t] = a, this._shouldFireChangeEvents && this._fireChangeEvent(t, i, a), this._requestDraw());
    }
    _setComponentAttr(t, a, i) {
      let p;
      i !== void 0 && (p = this.attrs[t], p || (this.attrs[t] = this.getAttr(t)), this.attrs[t][a] = i, this._fireChangeEvent(t, p, i));
    }
    _fireAndBubble(t, a, i) {
      if (a && this.nodeType === n && (a.target = this), !((t === b || t === x) && (i && (this === i || this.isAncestorOf && this.isAncestorOf(i)) || this.nodeType === "Stage" && !i))) {
        this._fire(t, a);
        const S = (t === b || t === x) && i && i.isAncestorOf && i.isAncestorOf(this) && !i.isAncestorOf(this.parent);
        (a && !a.cancelBubble || !a) && this.parent && this.parent.isListening() && !S && (i && i.parent ? this._fireAndBubble.call(this.parent, t, a, i) : this._fireAndBubble.call(this.parent, t, a));
      }
    }
    _getProtoListeners(t) {
      var a, i, p;
      const S = (a = this._cache.get(o)) !== null && a !== void 0 ? a : {};
      let R = S == null ? void 0 : S[t];
      if (R === void 0) {
        R = [];
        let N = Object.getPrototypeOf(this);
        for (; N; ) {
          const I = (p = (i = N.eventListeners) === null || i === void 0 ? void 0 : i[t]) !== null && p !== void 0 ? p : [];
          R.push(...I), N = Object.getPrototypeOf(N);
        }
        S[t] = R, this._cache.set(o, S);
      }
      return R;
    }
    _fire(t, a) {
      a = a || {}, a.currentTarget = this, a.type = t;
      const i = this._getProtoListeners(t);
      if (i)
        for (var p = 0; p < i.length; p++)
          i[p].handler.call(this, a);
      const S = this.eventListeners[t];
      if (S)
        for (var p = 0; p < S.length; p++)
          S[p].handler.call(this, a);
    }
    draw() {
      return this.drawScene(), this.drawHit(), this;
    }
    _createDragElement(t) {
      const a = t ? t.pointerId : void 0, i = this.getStage(), p = this.getAbsolutePosition();
      if (!i)
        return;
      const S = i._getPointerById(a) || i._changedPointerPositions[0] || p;
      w.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: S,
        offset: {
          x: S.x - p.x,
          y: S.y - p.y
        },
        dragStatus: "ready",
        pointerId: a
      });
    }
    startDrag(t, a = !0) {
      w.DD._dragElements.has(this._id) || this._createDragElement(t);
      const i = w.DD._dragElements.get(this._id);
      i.dragStatus = "dragging", this.fire("dragstart", {
        type: "dragstart",
        target: this,
        evt: t && t.evt
      }, a);
    }
    _setDragPosition(t, a) {
      const i = this.getStage()._getPointerById(a.pointerId);
      if (!i)
        return;
      let p = {
        x: i.x - a.offset.x,
        y: i.y - a.offset.y
      };
      const S = this.dragBoundFunc();
      if (S !== void 0) {
        const R = S.call(this, p, t);
        R ? p = R : h.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== p.x || this._lastPos.y !== p.y) && (this.setAbsolutePosition(p), this._requestDraw()), this._lastPos = p;
    }
    stopDrag(t) {
      const a = w.DD._dragElements.get(this._id);
      a && (a.dragStatus = "stopped"), w.DD._endDragBefore(t), w.DD._endDragAfter(t);
    }
    setDraggable(t) {
      this._setAttr("draggable", t), this._dragChange();
    }
    isDragging() {
      const t = w.DD._dragElements.get(this._id);
      return t ? t.dragStatus === "dragging" : !1;
    }
    _listenDrag() {
      this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(t) {
        if (!(!(t.evt.button !== void 0) || E.Konva.dragButtons.indexOf(t.evt.button) >= 0) || this.isDragging())
          return;
        let p = !1;
        w.DD._dragElements.forEach((S) => {
          this.isAncestorOf(S.node) && (p = !0);
        }), p || this._createDragElement(t);
      });
    }
    _dragChange() {
      if (this.attrs.draggable)
        this._listenDrag();
      else {
        if (this._dragCleanup(), !this.getStage())
          return;
        const a = w.DD._dragElements.get(this._id), i = a && a.dragStatus === "dragging", p = a && a.dragStatus === "ready";
        i ? this.stopDrag() : p && w.DD._dragElements.delete(this._id);
      }
    }
    _dragCleanup() {
      this.off("mousedown.konva"), this.off("touchstart.konva");
    }
    isClientRectOnScreen(t = { x: 0, y: 0 }) {
      const a = this.getStage();
      if (!a)
        return !1;
      const i = {
        x: -t.x,
        y: -t.y,
        width: a.width() + 2 * t.x,
        height: a.height() + 2 * t.y
      };
      return h.Util.haveIntersection(i, this.getClientRect());
    }
    static create(t, a) {
      return h.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, a);
    }
    static _createNode(t, a) {
      let i = li.prototype.getClassName.call(t), p = t.children, S, R, N;
      a && (t.attrs.container = a), E.Konva[i] || (h.Util.warn('Can not find a node with class name "' + i + '". Fallback to "Shape".'), i = "Shape");
      const I = E.Konva[i];
      if (S = new I(t.attrs), p)
        for (R = p.length, N = 0; N < R; N++)
          S.add(li._createNode(p[N]));
      return S;
    }
  };
  Jt.Node = e, e.prototype.nodeType = "Node", e.prototype._attrsAffectingSize = [], e.prototype.eventListeners = {}, e.prototype.on.call(e.prototype, r, function() {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = !0;
      return;
    }
    this._clearCache(k), this._clearSelfAndDescendantCache(g);
  }), e.prototype.on.call(e.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(G);
  }), e.prototype.on.call(e.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(l);
  }), e.prototype.on.call(e.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(c);
  });
  const f = A.Factory.addGetterSetter;
  return f(e, "zIndex"), f(e, "absolutePosition"), f(e, "position"), f(e, "x", 0, (0, y.getNumberValidator)()), f(e, "y", 0, (0, y.getNumberValidator)()), f(e, "globalCompositeOperation", "source-over", (0, y.getStringValidator)()), f(e, "opacity", 1, (0, y.getNumberValidator)()), f(e, "name", "", (0, y.getStringValidator)()), f(e, "id", "", (0, y.getStringValidator)()), f(e, "rotation", 0, (0, y.getNumberValidator)()), A.Factory.addComponentsGetterSetter(e, "scale", ["x", "y"]), f(e, "scaleX", 1, (0, y.getNumberValidator)()), f(e, "scaleY", 1, (0, y.getNumberValidator)()), A.Factory.addComponentsGetterSetter(e, "skew", ["x", "y"]), f(e, "skewX", 0, (0, y.getNumberValidator)()), f(e, "skewY", 0, (0, y.getNumberValidator)()), A.Factory.addComponentsGetterSetter(e, "offset", ["x", "y"]), f(e, "offsetX", 0, (0, y.getNumberValidator)()), f(e, "offsetY", 0, (0, y.getNumberValidator)()), f(e, "dragDistance", void 0, (0, y.getNumberValidator)()), f(e, "width", 0, (0, y.getNumberValidator)()), f(e, "height", 0, (0, y.getNumberValidator)()), f(e, "listening", !0, (0, y.getBooleanValidator)()), f(e, "preventDefault", !0, (0, y.getBooleanValidator)()), f(e, "filters", void 0, function(T) {
    return this._filterUpToDate = !1, T;
  }), f(e, "visible", !0, (0, y.getBooleanValidator)()), f(e, "transformsEnabled", "all", (0, y.getStringValidator)()), f(e, "size"), f(e, "dragBoundFunc"), f(e, "draggable", !1, (0, y.getBooleanValidator)()), A.Factory.backCompat(e, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  }), Jt;
}
var te = {}, Ai;
function We() {
  if (Ai) return te;
  Ai = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.Container = void 0;
  const h = tt(), A = ot(), O = et();
  let E = class extends A.Node {
    constructor() {
      super(...arguments), this.children = [];
    }
    getChildren(y) {
      if (!y)
        return this.children || [];
      const c = this.children || [], o = [];
      return c.forEach(function(g) {
        y(g) && o.push(g);
      }), o;
    }
    hasChildren() {
      return this.getChildren().length > 0;
    }
    removeChildren() {
      return this.getChildren().forEach((y) => {
        y.parent = null, y.index = 0, y.remove();
      }), this.children = [], this._requestDraw(), this;
    }
    destroyChildren() {
      return this.getChildren().forEach((y) => {
        y.parent = null, y.index = 0, y.destroy();
      }), this.children = [], this._requestDraw(), this;
    }
    add(...y) {
      if (y.length === 0)
        return this;
      if (y.length > 1) {
        for (let o = 0; o < y.length; o++)
          this.add(y[o]);
        return this;
      }
      const c = y[0];
      return c.getParent() ? (c.moveTo(this), this) : (this._validateAdd(c), c.index = this.getChildren().length, c.parent = this, c._clearCaches(), this.getChildren().push(c), this._fire("add", {
        child: c
      }), this._requestDraw(), this);
    }
    destroy() {
      return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
    }
    find(y) {
      return this._generalFind(y, !1);
    }
    findOne(y) {
      const c = this._generalFind(y, !0);
      return c.length > 0 ? c[0] : void 0;
    }
    _generalFind(y, c) {
      const o = [];
      return this._descendants((g) => {
        const v = g._isMatch(y);
        return v && o.push(g), !!(v && c);
      }), o;
    }
    _descendants(y) {
      let c = !1;
      const o = this.getChildren();
      for (const g of o) {
        if (c = y(g), c)
          return !0;
        if (g.hasChildren() && (c = g._descendants(y), c))
          return !0;
      }
      return !1;
    }
    toObject() {
      const y = A.Node.prototype.toObject.call(this);
      return y.children = [], this.getChildren().forEach((c) => {
        y.children.push(c.toObject());
      }), y;
    }
    isAncestorOf(y) {
      let c = y.getParent();
      for (; c; ) {
        if (c._id === this._id)
          return !0;
        c = c.getParent();
      }
      return !1;
    }
    clone(y) {
      const c = A.Node.prototype.clone.call(this, y);
      return this.getChildren().forEach(function(o) {
        c.add(o.clone());
      }), c;
    }
    getAllIntersections(y) {
      const c = [];
      return this.find("Shape").forEach((o) => {
        o.isVisible() && o.intersects(y) && c.push(o);
      }), c;
    }
    _clearSelfAndDescendantCache(y) {
      var c;
      super._clearSelfAndDescendantCache(y), !this.isCached() && ((c = this.children) === null || c === void 0 || c.forEach(function(o) {
        o._clearSelfAndDescendantCache(y);
      }));
    }
    _setChildrenIndices() {
      var y;
      (y = this.children) === null || y === void 0 || y.forEach(function(c, o) {
        c.index = o;
      }), this._requestDraw();
    }
    drawScene(y, c, o) {
      const g = this.getLayer(), v = y || g && g.getCanvas(), m = v && v.getContext(), C = this._getCanvasCache(), P = C && C.scene, u = v && v.isCache;
      if (!this.isVisible() && !u)
        return this;
      if (P) {
        m.save();
        const l = this.getAbsoluteTransform(c).getMatrix();
        m.transform(l[0], l[1], l[2], l[3], l[4], l[5]), this._drawCachedSceneCanvas(m), m.restore();
      } else
        this._drawChildren("drawScene", v, c, o);
      return this;
    }
    drawHit(y, c) {
      if (!this.shouldDrawHit(c))
        return this;
      const o = this.getLayer(), g = y || o && o.hitCanvas, v = g && g.getContext(), m = this._getCanvasCache();
      if (m && m.hit) {
        v.save();
        const P = this.getAbsoluteTransform(c).getMatrix();
        v.transform(P[0], P[1], P[2], P[3], P[4], P[5]), this._drawCachedHitCanvas(v), v.restore();
      } else
        this._drawChildren("drawHit", g, c);
      return this;
    }
    _drawChildren(y, c, o, g) {
      var v;
      const m = c && c.getContext(), C = this.clipWidth(), P = this.clipHeight(), u = this.clipFunc(), l = typeof C == "number" && typeof P == "number" || u, b = o === this;
      if (l) {
        m.save();
        const F = this.getAbsoluteTransform(o);
        let n = F.getMatrix();
        m.transform(n[0], n[1], n[2], n[3], n[4], n[5]), m.beginPath();
        let s;
        if (u)
          s = u.call(this, m, this);
        else {
          const _ = this.clipX(), k = this.clipY();
          m.rect(_ || 0, k || 0, C, P);
        }
        m.clip.apply(m, s), n = F.copy().invert().getMatrix(), m.transform(n[0], n[1], n[2], n[3], n[4], n[5]);
      }
      const x = !b && this.globalCompositeOperation() !== "source-over" && y === "drawScene";
      x && (m.save(), m._applyGlobalCompositeOperation(this)), (v = this.children) === null || v === void 0 || v.forEach(function(F) {
        F[y](c, o, g);
      }), x && m.restore(), l && m.restore();
    }
    getClientRect(y = {}) {
      var c;
      const o = y.skipTransform, g = y.relativeTo;
      let v, m, C, P, u = {
        x: 1 / 0,
        y: 1 / 0,
        width: 0,
        height: 0
      };
      const l = this;
      (c = this.children) === null || c === void 0 || c.forEach(function(F) {
        if (!F.visible())
          return;
        const n = F.getClientRect({
          relativeTo: l,
          skipShadow: y.skipShadow,
          skipStroke: y.skipStroke
        });
        n.width === 0 && n.height === 0 || (v === void 0 ? (v = n.x, m = n.y, C = n.x + n.width, P = n.y + n.height) : (v = Math.min(v, n.x), m = Math.min(m, n.y), C = Math.max(C, n.x + n.width), P = Math.max(P, n.y + n.height)));
      });
      const b = this.find("Shape");
      let x = !1;
      for (let F = 0; F < b.length; F++)
        if (b[F]._isVisible(this)) {
          x = !0;
          break;
        }
      return x && v !== void 0 ? u = {
        x: v,
        y: m,
        width: C - v,
        height: P - m
      } : u = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, o ? u : this._transformedRect(u, g);
    }
  };
  return te.Container = E, h.Factory.addComponentsGetterSetter(E, "clip", [
    "x",
    "y",
    "width",
    "height"
  ]), h.Factory.addGetterSetter(E, "clipX", void 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(E, "clipY", void 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(E, "clipWidth", void 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(E, "clipHeight", void 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(E, "clipFunc"), te;
}
var Je = {}, Bt = {}, ki;
function Nn() {
  if (ki) return Bt;
  ki = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.getCapturedShape = E, Bt.createEvent = w, Bt.hasPointerCapture = y, Bt.setPointerCapture = c, Bt.releaseCapture = o;
  const h = J(), A = /* @__PURE__ */ new Map(), O = h.Konva._global.PointerEvent !== void 0;
  function E(g) {
    return A.get(g);
  }
  function w(g) {
    return {
      evt: g,
      pointerId: g.pointerId
    };
  }
  function y(g, v) {
    return A.get(g) === v;
  }
  function c(g, v) {
    o(g), v.getStage() && (A.set(g, v), O && v._fire("gotpointercapture", w(new PointerEvent("gotpointercapture"))));
  }
  function o(g, v) {
    const m = A.get(g);
    if (!m)
      return;
    const C = m.getStage();
    C && C.content, A.delete(g), O && m._fire("lostpointercapture", w(new PointerEvent("lostpointercapture")));
  }
  return Bt;
}
var Ei;
function $n() {
  return Ei || (Ei = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Stage = h.stages = void 0;
    const A = st(), O = tt(), E = We(), w = J(), y = qe(), c = ui(), o = J(), g = Nn(), v = "Stage", m = "string", C = "px", P = "mouseout", u = "mouseleave", l = "mouseover", b = "mouseenter", x = "mousemove", F = "mousedown", n = "mouseup", s = "pointermove", _ = "pointerdown", k = "pointerup", M = "pointercancel", G = "lostpointercapture", r = "pointerout", d = "pointerleave", e = "pointerover", f = "pointerenter", T = "contextmenu", t = "touchstart", a = "touchend", i = "touchmove", p = "touchcancel", S = "wheel", R = 5, N = [
      [b, "_pointerenter"],
      [F, "_pointerdown"],
      [x, "_pointermove"],
      [n, "_pointerup"],
      [u, "_pointerleave"],
      [t, "_pointerdown"],
      [i, "_pointermove"],
      [a, "_pointerup"],
      [p, "_pointercancel"],
      [l, "_pointerover"],
      [S, "_wheel"],
      [T, "_contextmenu"],
      [_, "_pointerdown"],
      [s, "_pointermove"],
      [k, "_pointerup"],
      [M, "_pointercancel"],
      [G, "_lostpointercapture"]
    ], I = {
      mouse: {
        [r]: P,
        [d]: u,
        [e]: l,
        [f]: b,
        [s]: x,
        [_]: F,
        [k]: n,
        [M]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick"
      },
      touch: {
        [r]: "touchout",
        [d]: "touchleave",
        [e]: "touchover",
        [f]: "touchenter",
        [s]: i,
        [_]: t,
        [k]: a,
        [M]: p,
        pointerclick: "tap",
        pointerdblclick: "dbltap"
      },
      pointer: {
        [r]: r,
        [d]: d,
        [e]: e,
        [f]: f,
        [s]: s,
        [_]: _,
        [k]: k,
        [M]: M,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick"
      }
    }, D = (W) => W.indexOf("pointer") >= 0 ? "pointer" : W.indexOf("touch") >= 0 ? "touch" : "mouse", V = (W) => {
      const L = D(W);
      if (L === "pointer")
        return w.Konva.pointerEventsEnabled && I.pointer;
      if (L === "touch")
        return I.touch;
      if (L === "mouse")
        return I.mouse;
    };
    function B(W = {}) {
      return (W.clipFunc || W.clipWidth || W.clipHeight) && A.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), W;
    }
    const H = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
    h.stages = [];
    class q extends E.Container {
      constructor(L) {
        super(B(L)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), h.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
          B(this.attrs);
        }), this._checkVisibility();
      }
      _validateAdd(L) {
        const U = L.getType() === "Layer", X = L.getType() === "FastLayer";
        U || X || A.Util.throw("You may only add layers to the stage.");
      }
      _checkVisibility() {
        if (!this.content)
          return;
        const L = this.visible() ? "" : "none";
        this.content.style.display = L;
      }
      setContainer(L) {
        if (typeof L === m) {
          if (L.charAt(0) === ".") {
            const X = L.slice(1);
            L = document.getElementsByClassName(X)[0];
          } else {
            var U;
            L.charAt(0) !== "#" ? U = L : U = L.slice(1), L = document.getElementById(U);
          }
          if (!L)
            throw "Can not find container in document with id " + U;
        }
        return this._setAttr("container", L), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), L.appendChild(this.content)), this;
      }
      shouldDrawHit() {
        return !0;
      }
      clear() {
        const L = this.children, U = L.length;
        for (let X = 0; X < U; X++)
          L[X].clear();
        return this;
      }
      clone(L) {
        return L || (L = {}), L.container = typeof document < "u" && document.createElement("div"), E.Container.prototype.clone.call(this, L);
      }
      destroy() {
        super.destroy();
        const L = this.content;
        L && A.Util._isInDocument(L) && this.container().removeChild(L);
        const U = h.stages.indexOf(this);
        return U > -1 && h.stages.splice(U, 1), A.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
      }
      getPointerPosition() {
        const L = this._pointerPositions[0] || this._changedPointerPositions[0];
        return L ? {
          x: L.x,
          y: L.y
        } : (A.Util.warn(H), null);
      }
      _getPointerById(L) {
        return this._pointerPositions.find((U) => U.id === L);
      }
      getPointersPositions() {
        return this._pointerPositions;
      }
      getStage() {
        return this;
      }
      getContent() {
        return this.content;
      }
      _toKonvaCanvas(L) {
        L = L || {}, L.x = L.x || 0, L.y = L.y || 0, L.width = L.width || this.width(), L.height = L.height || this.height();
        const U = new y.SceneCanvas({
          width: L.width,
          height: L.height,
          pixelRatio: L.pixelRatio || 1
        }), X = U.getContext()._context, z = this.children;
        return (L.x || L.y) && X.translate(-1 * L.x, -1 * L.y), z.forEach(function(Y) {
          if (!Y.isVisible())
            return;
          const $ = Y._toKonvaCanvas(L);
          X.drawImage($._canvas, L.x, L.y, $.getWidth() / $.getPixelRatio(), $.getHeight() / $.getPixelRatio());
        }), U;
      }
      getIntersection(L) {
        if (!L)
          return null;
        const U = this.children, X = U.length, z = X - 1;
        for (let Y = z; Y >= 0; Y--) {
          const $ = U[Y].getIntersection(L);
          if ($)
            return $;
        }
        return null;
      }
      _resizeDOM() {
        const L = this.width(), U = this.height();
        this.content && (this.content.style.width = L + C, this.content.style.height = U + C), this.bufferCanvas.setSize(L, U), this.bufferHitCanvas.setSize(L, U), this.children.forEach((X) => {
          X.setSize({ width: L, height: U }), X.draw();
        });
      }
      add(L, ...U) {
        if (arguments.length > 1) {
          for (let z = 0; z < arguments.length; z++)
            this.add(arguments[z]);
          return this;
        }
        super.add(L);
        const X = this.children.length;
        return X > R && A.Util.warn("The stage has " + X + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), L.setSize({ width: this.width(), height: this.height() }), L.draw(), w.Konva.isBrowser && this.content.appendChild(L.canvas._canvas), this;
      }
      getParent() {
        return null;
      }
      getLayer() {
        return null;
      }
      hasPointerCapture(L) {
        return g.hasPointerCapture(L, this);
      }
      setPointerCapture(L) {
        g.setPointerCapture(L, this);
      }
      releaseCapture(L) {
        g.releaseCapture(L, this);
      }
      getLayers() {
        return this.children;
      }
      _bindContentEvents() {
        w.Konva.isBrowser && N.forEach(([L, U]) => {
          this.content.addEventListener(L, (X) => {
            this[U](X);
          }, { passive: !1 });
        });
      }
      _pointerenter(L) {
        this.setPointersPositions(L);
        const U = V(L.type);
        U && this._fire(U.pointerenter, {
          evt: L,
          target: this,
          currentTarget: this
        });
      }
      _pointerover(L) {
        this.setPointersPositions(L);
        const U = V(L.type);
        U && this._fire(U.pointerover, {
          evt: L,
          target: this,
          currentTarget: this
        });
      }
      _getTargetShape(L) {
        let U = this[L + "targetShape"];
        return U && !U.getStage() && (U = null), U;
      }
      _pointerleave(L) {
        const U = V(L.type), X = D(L.type);
        if (!U)
          return;
        this.setPointersPositions(L);
        const z = this._getTargetShape(X), Y = !(w.Konva.isDragging() || w.Konva.isTransforming()) || w.Konva.hitOnDragEnabled;
        z && Y ? (z._fireAndBubble(U.pointerout, { evt: L }), z._fireAndBubble(U.pointerleave, { evt: L }), this._fire(U.pointerleave, {
          evt: L,
          target: this,
          currentTarget: this
        }), this[X + "targetShape"] = null) : Y && (this._fire(U.pointerleave, {
          evt: L,
          target: this,
          currentTarget: this
        }), this._fire(U.pointerout, {
          evt: L,
          target: this,
          currentTarget: this
        })), this.pointerPos = null, this._pointerPositions = [];
      }
      _pointerdown(L) {
        const U = V(L.type), X = D(L.type);
        if (!U)
          return;
        this.setPointersPositions(L);
        let z = !1;
        this._changedPointerPositions.forEach((Y) => {
          const $ = this.getIntersection(Y);
          if (c.DD.justDragged = !1, w.Konva["_" + X + "ListenClick"] = !0, !$ || !$.isListening()) {
            this[X + "ClickStartShape"] = void 0;
            return;
          }
          w.Konva.capturePointerEventsEnabled && $.setPointerCapture(Y.id), this[X + "ClickStartShape"] = $, $._fireAndBubble(U.pointerdown, {
            evt: L,
            pointerId: Y.id
          }), z = !0;
          const Q = L.type.indexOf("touch") >= 0;
          $.preventDefault() && L.cancelable && Q && L.preventDefault();
        }), z || this._fire(U.pointerdown, {
          evt: L,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
      _pointermove(L) {
        const U = V(L.type), X = D(L.type);
        if (!U || (w.Konva.isDragging() && c.DD.node.preventDefault() && L.cancelable && L.preventDefault(), this.setPointersPositions(L), !(!(w.Konva.isDragging() || w.Konva.isTransforming()) || w.Konva.hitOnDragEnabled)))
          return;
        const Y = {};
        let $ = !1;
        const Q = this._getTargetShape(X);
        this._changedPointerPositions.forEach((j) => {
          const K = g.getCapturedShape(j.id) || this.getIntersection(j), ht = j.id, it = { evt: L, pointerId: ht }, lt = Q !== K;
          if (lt && Q && (Q._fireAndBubble(U.pointerout, { ...it }, K), Q._fireAndBubble(U.pointerleave, { ...it }, K)), K) {
            if (Y[K._id])
              return;
            Y[K._id] = !0;
          }
          K && K.isListening() ? ($ = !0, lt && (K._fireAndBubble(U.pointerover, { ...it }, Q), K._fireAndBubble(U.pointerenter, { ...it }, Q), this[X + "targetShape"] = K), K._fireAndBubble(U.pointermove, { ...it })) : Q && (this._fire(U.pointerover, {
            evt: L,
            target: this,
            currentTarget: this,
            pointerId: ht
          }), this[X + "targetShape"] = null);
        }), $ || this._fire(U.pointermove, {
          evt: L,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      _pointerup(L) {
        const U = V(L.type), X = D(L.type);
        if (!U)
          return;
        this.setPointersPositions(L);
        const z = this[X + "ClickStartShape"], Y = this[X + "ClickEndShape"], $ = {};
        let Q = !1;
        this._changedPointerPositions.forEach((j) => {
          const K = g.getCapturedShape(j.id) || this.getIntersection(j);
          if (K) {
            if (K.releaseCapture(j.id), $[K._id])
              return;
            $[K._id] = !0;
          }
          const ht = j.id, it = { evt: L, pointerId: ht };
          let lt = !1;
          w.Konva["_" + X + "InDblClickWindow"] ? (lt = !0, clearTimeout(this[X + "DblTimeout"])) : c.DD.justDragged || (w.Konva["_" + X + "InDblClickWindow"] = !0, clearTimeout(this[X + "DblTimeout"])), this[X + "DblTimeout"] = setTimeout(function() {
            w.Konva["_" + X + "InDblClickWindow"] = !1;
          }, w.Konva.dblClickWindow), K && K.isListening() ? (Q = !0, this[X + "ClickEndShape"] = K, K._fireAndBubble(U.pointerup, { ...it }), w.Konva["_" + X + "ListenClick"] && z && z === K && (K._fireAndBubble(U.pointerclick, { ...it }), lt && Y && Y === K && K._fireAndBubble(U.pointerdblclick, { ...it }))) : (this[X + "ClickEndShape"] = null, w.Konva["_" + X + "ListenClick"] && this._fire(U.pointerclick, {
            evt: L,
            target: this,
            currentTarget: this,
            pointerId: ht
          }), lt && this._fire(U.pointerdblclick, {
            evt: L,
            target: this,
            currentTarget: this,
            pointerId: ht
          }));
        }), Q || this._fire(U.pointerup, {
          evt: L,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        }), w.Konva["_" + X + "ListenClick"] = !1, L.cancelable && X !== "touch" && X !== "pointer" && L.preventDefault();
      }
      _contextmenu(L) {
        this.setPointersPositions(L);
        const U = this.getIntersection(this.getPointerPosition());
        U && U.isListening() ? U._fireAndBubble(T, { evt: L }) : this._fire(T, {
          evt: L,
          target: this,
          currentTarget: this
        });
      }
      _wheel(L) {
        this.setPointersPositions(L);
        const U = this.getIntersection(this.getPointerPosition());
        U && U.isListening() ? U._fireAndBubble(S, { evt: L }) : this._fire(S, {
          evt: L,
          target: this,
          currentTarget: this
        });
      }
      _pointercancel(L) {
        this.setPointersPositions(L);
        const U = g.getCapturedShape(L.pointerId) || this.getIntersection(this.getPointerPosition());
        U && U._fireAndBubble(k, g.createEvent(L)), g.releaseCapture(L.pointerId);
      }
      _lostpointercapture(L) {
        g.releaseCapture(L.pointerId);
      }
      setPointersPositions(L) {
        const U = this._getContentPosition();
        let X = null, z = null;
        L = L || window.event, L.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(L.touches, (Y) => {
          this._pointerPositions.push({
            id: Y.identifier,
            x: (Y.clientX - U.left) / U.scaleX,
            y: (Y.clientY - U.top) / U.scaleY
          });
        }), Array.prototype.forEach.call(L.changedTouches || L.touches, (Y) => {
          this._changedPointerPositions.push({
            id: Y.identifier,
            x: (Y.clientX - U.left) / U.scaleX,
            y: (Y.clientY - U.top) / U.scaleY
          });
        })) : (X = (L.clientX - U.left) / U.scaleX, z = (L.clientY - U.top) / U.scaleY, this.pointerPos = {
          x: X,
          y: z
        }, this._pointerPositions = [{ x: X, y: z, id: A.Util._getFirstPointerId(L) }], this._changedPointerPositions = [
          { x: X, y: z, id: A.Util._getFirstPointerId(L) }
        ]);
      }
      _setPointerPosition(L) {
        A.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(L);
      }
      _getContentPosition() {
        if (!this.content || !this.content.getBoundingClientRect)
          return {
            top: 0,
            left: 0,
            scaleX: 1,
            scaleY: 1
          };
        const L = this.content.getBoundingClientRect();
        return {
          top: L.top,
          left: L.left,
          scaleX: L.width / this.content.clientWidth || 1,
          scaleY: L.height / this.content.clientHeight || 1
        };
      }
      _buildDOM() {
        if (this.bufferCanvas = new y.SceneCanvas({
          width: this.width(),
          height: this.height()
        }), this.bufferHitCanvas = new y.HitCanvas({
          pixelRatio: 1,
          width: this.width(),
          height: this.height()
        }), !w.Konva.isBrowser)
          return;
        const L = this.container();
        if (!L)
          throw "Stage has no container. A container is required.";
        L.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), L.appendChild(this.content), this._resizeDOM();
      }
      cache() {
        return A.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
      }
      clearCache() {
        return this;
      }
      batchDraw() {
        return this.getChildren().forEach(function(L) {
          L.batchDraw();
        }), this;
      }
    }
    h.Stage = q, q.prototype.nodeType = v, (0, o._registerNode)(q), O.Factory.addGetterSetter(q, "container"), w.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
      h.stages.forEach((W) => {
        W.batchDraw();
      });
    });
  }(Je)), Je;
}
var ee = {}, ti = {}, Ri;
function dt() {
  return Ri || (Ri = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Shape = h.shapes = void 0;
    const A = J(), O = st(), E = tt(), w = ot(), y = et(), c = J(), o = Nn(), g = "hasShadow", v = "shadowRGBA", m = "patternImage", C = "linearGradient", P = "radialGradient";
    let u;
    function l() {
      return u || (u = O.Util.createCanvasElement().getContext("2d"), u);
    }
    h.shapes = {};
    function b(d) {
      const e = this.attrs.fillRule;
      e ? d.fill(e) : d.fill();
    }
    function x(d) {
      d.stroke();
    }
    function F(d) {
      const e = this.attrs.fillRule;
      e ? d.fill(e) : d.fill();
    }
    function n(d) {
      d.stroke();
    }
    function s() {
      this._clearCache(g);
    }
    function _() {
      this._clearCache(v);
    }
    function k() {
      this._clearCache(m);
    }
    function M() {
      this._clearCache(C);
    }
    function G() {
      this._clearCache(P);
    }
    class r extends w.Node {
      constructor(e) {
        super(e);
        let f;
        for (; f = O.Util.getRandomColor(), !(f && !(f in h.shapes)); )
          ;
        this.colorKey = f, h.shapes[f] = this;
      }
      getContext() {
        return O.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
      }
      getCanvas() {
        return O.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
      }
      getSceneFunc() {
        return this.attrs.sceneFunc || this._sceneFunc;
      }
      getHitFunc() {
        return this.attrs.hitFunc || this._hitFunc;
      }
      hasShadow() {
        return this._getCache(g, this._hasShadow);
      }
      _hasShadow() {
        return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
      }
      _getFillPattern() {
        return this._getCache(m, this.__getFillPattern);
      }
      __getFillPattern() {
        if (this.fillPatternImage()) {
          const f = l().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
          if (f && f.setTransform) {
            const T = new O.Transform();
            T.translate(this.fillPatternX(), this.fillPatternY()), T.rotate(A.Konva.getAngle(this.fillPatternRotation())), T.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), T.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
            const t = T.getMatrix(), a = typeof DOMMatrix > "u" ? {
              a: t[0],
              b: t[1],
              c: t[2],
              d: t[3],
              e: t[4],
              f: t[5]
            } : new DOMMatrix(t);
            f.setTransform(a);
          }
          return f;
        }
      }
      _getLinearGradient() {
        return this._getCache(C, this.__getLinearGradient);
      }
      __getLinearGradient() {
        const e = this.fillLinearGradientColorStops();
        if (e) {
          const f = l(), T = this.fillLinearGradientStartPoint(), t = this.fillLinearGradientEndPoint(), a = f.createLinearGradient(T.x, T.y, t.x, t.y);
          for (let i = 0; i < e.length; i += 2)
            a.addColorStop(e[i], e[i + 1]);
          return a;
        }
      }
      _getRadialGradient() {
        return this._getCache(P, this.__getRadialGradient);
      }
      __getRadialGradient() {
        const e = this.fillRadialGradientColorStops();
        if (e) {
          const f = l(), T = this.fillRadialGradientStartPoint(), t = this.fillRadialGradientEndPoint(), a = f.createRadialGradient(T.x, T.y, this.fillRadialGradientStartRadius(), t.x, t.y, this.fillRadialGradientEndRadius());
          for (let i = 0; i < e.length; i += 2)
            a.addColorStop(e[i], e[i + 1]);
          return a;
        }
      }
      getShadowRGBA() {
        return this._getCache(v, this._getShadowRGBA);
      }
      _getShadowRGBA() {
        if (!this.hasShadow())
          return;
        const e = O.Util.colorToRGBA(this.shadowColor());
        if (e)
          return "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a * (this.shadowOpacity() || 1) + ")";
      }
      hasFill() {
        return this._calculate("hasFill", [
          "fillEnabled",
          "fill",
          "fillPatternImage",
          "fillLinearGradientColorStops",
          "fillRadialGradientColorStops"
        ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
      }
      hasStroke() {
        return this._calculate("hasStroke", [
          "strokeEnabled",
          "strokeWidth",
          "stroke",
          "strokeLinearGradientColorStops"
        ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
      }
      hasHitStroke() {
        const e = this.hitStrokeWidth();
        return e === "auto" ? this.hasStroke() : this.strokeEnabled() && !!e;
      }
      intersects(e) {
        const f = this.getStage();
        if (!f)
          return !1;
        const T = f.bufferHitCanvas;
        return T.getContext().clear(), this.drawHit(T, void 0, !0), T.context.getImageData(Math.round(e.x), Math.round(e.y), 1, 1).data[3] > 0;
      }
      destroy() {
        return w.Node.prototype.destroy.call(this), delete h.shapes[this.colorKey], delete this.colorKey, this;
      }
      _useBufferCanvas(e) {
        var f;
        if (!((f = this.attrs.perfectDrawEnabled) !== null && f !== void 0 ? f : !0))
          return !1;
        const t = e || this.hasFill(), a = this.hasStroke(), i = this.getAbsoluteOpacity() !== 1;
        if (t && a && i)
          return !0;
        const p = this.hasShadow(), S = this.shadowForStrokeEnabled();
        return !!(t && a && p && S);
      }
      setStrokeHitEnabled(e) {
        O.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), e ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
      }
      getStrokeHitEnabled() {
        return this.hitStrokeWidth() !== 0;
      }
      getSelfRect() {
        const e = this.size();
        return {
          x: this._centroid ? -e.width / 2 : 0,
          y: this._centroid ? -e.height / 2 : 0,
          width: e.width,
          height: e.height
        };
      }
      getClientRect(e = {}) {
        let f = !1, T = this.getParent();
        for (; T; ) {
          if (T.isCached()) {
            f = !0;
            break;
          }
          T = T.getParent();
        }
        const t = e.skipTransform, a = e.relativeTo || f && this.getStage() || void 0, i = this.getSelfRect(), S = !e.skipStroke && this.hasStroke() && this.strokeWidth() || 0, R = i.width + S, N = i.height + S, I = !e.skipShadow && this.hasShadow(), D = I ? this.shadowOffsetX() : 0, V = I ? this.shadowOffsetY() : 0, B = R + Math.abs(D), H = N + Math.abs(V), q = I && this.shadowBlur() || 0, W = B + q * 2, L = H + q * 2, U = {
          width: W,
          height: L,
          x: -(S / 2 + q) + Math.min(D, 0) + i.x,
          y: -(S / 2 + q) + Math.min(V, 0) + i.y
        };
        return t ? U : this._transformedRect(U, a);
      }
      drawScene(e, f, T) {
        const t = this.getLayer();
        let a = e || t.getCanvas(), i = a.getContext(), p = this._getCanvasCache(), S = this.getSceneFunc(), R = this.hasShadow(), N, I;
        const D = a.isCache, V = f === this;
        if (!this.isVisible() && !V)
          return this;
        if (p) {
          i.save();
          const H = this.getAbsoluteTransform(f).getMatrix();
          return i.transform(H[0], H[1], H[2], H[3], H[4], H[5]), this._drawCachedSceneCanvas(i), i.restore(), this;
        }
        if (!S)
          return this;
        if (i.save(), this._useBufferCanvas() && !D) {
          N = this.getStage();
          const H = T || N.bufferCanvas;
          I = H.getContext(), I.clear(), I.save(), I._applyLineJoin(this);
          var B = this.getAbsoluteTransform(f).getMatrix();
          I.transform(B[0], B[1], B[2], B[3], B[4], B[5]), S.call(this, I, this), I.restore();
          const q = H.pixelRatio;
          R && i._applyShadow(this), i._applyOpacity(this), i._applyGlobalCompositeOperation(this), i.drawImage(H._canvas, 0, 0, H.width / q, H.height / q);
        } else {
          if (i._applyLineJoin(this), !V) {
            var B = this.getAbsoluteTransform(f).getMatrix();
            i.transform(B[0], B[1], B[2], B[3], B[4], B[5]), i._applyOpacity(this), i._applyGlobalCompositeOperation(this);
          }
          R && i._applyShadow(this), S.call(this, i, this);
        }
        return i.restore(), this;
      }
      drawHit(e, f, T = !1) {
        if (!this.shouldDrawHit(f, T))
          return this;
        const t = this.getLayer(), a = e || t.hitCanvas, i = a && a.getContext(), p = this.hitFunc() || this.sceneFunc(), S = this._getCanvasCache(), R = S && S.hit;
        if (this.colorKey || O.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), R) {
          i.save();
          const I = this.getAbsoluteTransform(f).getMatrix();
          return i.transform(I[0], I[1], I[2], I[3], I[4], I[5]), this._drawCachedHitCanvas(i), i.restore(), this;
        }
        if (!p)
          return this;
        if (i.save(), i._applyLineJoin(this), !(this === f)) {
          const I = this.getAbsoluteTransform(f).getMatrix();
          i.transform(I[0], I[1], I[2], I[3], I[4], I[5]);
        }
        return p.call(this, i, this), i.restore(), this;
      }
      drawHitFromCache(e = 0) {
        const f = this._getCanvasCache(), T = this._getCachedSceneCanvas(), t = f.hit, a = t.getContext(), i = t.getWidth(), p = t.getHeight();
        a.clear(), a.drawImage(T._canvas, 0, 0, i, p);
        try {
          const S = a.getImageData(0, 0, i, p), R = S.data, N = R.length, I = O.Util._hexToRgb(this.colorKey);
          for (let D = 0; D < N; D += 4)
            R[D + 3] > e ? (R[D] = I.r, R[D + 1] = I.g, R[D + 2] = I.b, R[D + 3] = 255) : R[D + 3] = 0;
          a.putImageData(S, 0, 0);
        } catch (S) {
          O.Util.error("Unable to draw hit graph from cached scene canvas. " + S.message);
        }
        return this;
      }
      hasPointerCapture(e) {
        return o.hasPointerCapture(e, this);
      }
      setPointerCapture(e) {
        o.setPointerCapture(e, this);
      }
      releaseCapture(e) {
        o.releaseCapture(e, this);
      }
    }
    h.Shape = r, r.prototype._fillFunc = b, r.prototype._strokeFunc = x, r.prototype._fillFuncHit = F, r.prototype._strokeFuncHit = n, r.prototype._centroid = !1, r.prototype.nodeType = "Shape", (0, c._registerNode)(r), r.prototype.eventListeners = {}, r.prototype.on.call(r.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", s), r.prototype.on.call(r.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _), r.prototype.on.call(r.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", k), r.prototype.on.call(r.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", M), r.prototype.on.call(r.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", G), E.Factory.addGetterSetter(r, "stroke", void 0, (0, y.getStringOrGradientValidator)()), E.Factory.addGetterSetter(r, "strokeWidth", 2, (0, y.getNumberValidator)()), E.Factory.addGetterSetter(r, "fillAfterStrokeEnabled", !1), E.Factory.addGetterSetter(r, "hitStrokeWidth", "auto", (0, y.getNumberOrAutoValidator)()), E.Factory.addGetterSetter(r, "strokeHitEnabled", !0, (0, y.getBooleanValidator)()), E.Factory.addGetterSetter(r, "perfectDrawEnabled", !0, (0, y.getBooleanValidator)()), E.Factory.addGetterSetter(r, "shadowForStrokeEnabled", !0, (0, y.getBooleanValidator)()), E.Factory.addGetterSetter(r, "lineJoin"), E.Factory.addGetterSetter(r, "lineCap"), E.Factory.addGetterSetter(r, "sceneFunc"), E.Factory.addGetterSetter(r, "hitFunc"), E.Factory.addGetterSetter(r, "dash"), E.Factory.addGetterSetter(r, "dashOffset", 0, (0, y.getNumberValidator)()), E.Factory.addGetterSetter(r, "shadowColor", void 0, (0, y.getStringValidator)()), E.Factory.addGetterSetter(r, "shadowBlur", 0, (0, y.getNumberValidator)()), E.Factory.addGetterSetter(r, "shadowOpacity", 1, (0, y.getNumberValidator)()), E.Factory.addComponentsGetterSetter(r, "shadowOffset", ["x", "y"]), E.Factory.addGetterSetter(r, "shadowOffsetX", 0, (0, y.getNumberValidator)()), E.Factory.addGetterSetter(r, "shadowOffsetY", 0, (0, y.getNumberValidator)()), E.Factory.addGetterSetter(r, "fillPatternImage"), E.Factory.addGetterSetter(r, "fill", void 0, (0, y.getStringOrGradientValidator)()), E.Factory.addGetterSetter(r, "fillPatternX", 0, (0, y.getNumberValidator)()), E.Factory.addGetterSetter(r, "fillPatternY", 0, (0, y.getNumberValidator)()), E.Factory.addGetterSetter(r, "fillLinearGradientColorStops"), E.Factory.addGetterSetter(r, "strokeLinearGradientColorStops"), E.Factory.addGetterSetter(r, "fillRadialGradientStartRadius", 0), E.Factory.addGetterSetter(r, "fillRadialGradientEndRadius", 0), E.Factory.addGetterSetter(r, "fillRadialGradientColorStops"), E.Factory.addGetterSetter(r, "fillPatternRepeat", "repeat"), E.Factory.addGetterSetter(r, "fillEnabled", !0), E.Factory.addGetterSetter(r, "strokeEnabled", !0), E.Factory.addGetterSetter(r, "shadowEnabled", !0), E.Factory.addGetterSetter(r, "dashEnabled", !0), E.Factory.addGetterSetter(r, "strokeScaleEnabled", !0), E.Factory.addGetterSetter(r, "fillPriority", "color"), E.Factory.addComponentsGetterSetter(r, "fillPatternOffset", ["x", "y"]), E.Factory.addGetterSetter(r, "fillPatternOffsetX", 0, (0, y.getNumberValidator)()), E.Factory.addGetterSetter(r, "fillPatternOffsetY", 0, (0, y.getNumberValidator)()), E.Factory.addComponentsGetterSetter(r, "fillPatternScale", ["x", "y"]), E.Factory.addGetterSetter(r, "fillPatternScaleX", 1, (0, y.getNumberValidator)()), E.Factory.addGetterSetter(r, "fillPatternScaleY", 1, (0, y.getNumberValidator)()), E.Factory.addComponentsGetterSetter(r, "fillLinearGradientStartPoint", [
      "x",
      "y"
    ]), E.Factory.addComponentsGetterSetter(r, "strokeLinearGradientStartPoint", [
      "x",
      "y"
    ]), E.Factory.addGetterSetter(r, "fillLinearGradientStartPointX", 0), E.Factory.addGetterSetter(r, "strokeLinearGradientStartPointX", 0), E.Factory.addGetterSetter(r, "fillLinearGradientStartPointY", 0), E.Factory.addGetterSetter(r, "strokeLinearGradientStartPointY", 0), E.Factory.addComponentsGetterSetter(r, "fillLinearGradientEndPoint", [
      "x",
      "y"
    ]), E.Factory.addComponentsGetterSetter(r, "strokeLinearGradientEndPoint", [
      "x",
      "y"
    ]), E.Factory.addGetterSetter(r, "fillLinearGradientEndPointX", 0), E.Factory.addGetterSetter(r, "strokeLinearGradientEndPointX", 0), E.Factory.addGetterSetter(r, "fillLinearGradientEndPointY", 0), E.Factory.addGetterSetter(r, "strokeLinearGradientEndPointY", 0), E.Factory.addComponentsGetterSetter(r, "fillRadialGradientStartPoint", [
      "x",
      "y"
    ]), E.Factory.addGetterSetter(r, "fillRadialGradientStartPointX", 0), E.Factory.addGetterSetter(r, "fillRadialGradientStartPointY", 0), E.Factory.addComponentsGetterSetter(r, "fillRadialGradientEndPoint", [
      "x",
      "y"
    ]), E.Factory.addGetterSetter(r, "fillRadialGradientEndPointX", 0), E.Factory.addGetterSetter(r, "fillRadialGradientEndPointY", 0), E.Factory.addGetterSetter(r, "fillPatternRotation", 0), E.Factory.addGetterSetter(r, "fillRule", void 0, (0, y.getStringValidator)()), E.Factory.backCompat(r, {
      dashArray: "dash",
      getDashArray: "getDash",
      setDashArray: "getDash",
      drawFunc: "sceneFunc",
      getDrawFunc: "getSceneFunc",
      setDrawFunc: "setSceneFunc",
      drawHitFunc: "hitFunc",
      getDrawHitFunc: "getHitFunc",
      setDrawHitFunc: "setHitFunc"
    });
  }(ti)), ti;
}
var Fi;
function On() {
  if (Fi) return ee;
  Fi = 1, Object.defineProperty(ee, "__esModule", { value: !0 }), ee.Layer = void 0;
  const h = st(), A = We(), O = ot(), E = tt(), w = qe(), y = et(), c = dt(), o = J(), g = "#", v = "beforeDraw", m = "draw", C = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 }
  ], P = C.length;
  let u = class extends A.Container {
    constructor(b) {
      super(b), this.canvas = new w.SceneCanvas(), this.hitCanvas = new w.HitCanvas({
        pixelRatio: 1
      }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
    }
    createPNGStream() {
      return this.canvas._canvas.createPNGStream();
    }
    getCanvas() {
      return this.canvas;
    }
    getNativeCanvasElement() {
      return this.canvas._canvas;
    }
    getHitCanvas() {
      return this.hitCanvas;
    }
    getContext() {
      return this.getCanvas().getContext();
    }
    clear(b) {
      return this.getContext().clear(b), this.getHitCanvas().getContext().clear(b), this;
    }
    setZIndex(b) {
      super.setZIndex(b);
      const x = this.getStage();
      return x && x.content && (x.content.removeChild(this.getNativeCanvasElement()), b < x.children.length - 1 ? x.content.insertBefore(this.getNativeCanvasElement(), x.children[b + 1].getCanvas()._canvas) : x.content.appendChild(this.getNativeCanvasElement())), this;
    }
    moveToTop() {
      O.Node.prototype.moveToTop.call(this);
      const b = this.getStage();
      return b && b.content && (b.content.removeChild(this.getNativeCanvasElement()), b.content.appendChild(this.getNativeCanvasElement())), !0;
    }
    moveUp() {
      if (!O.Node.prototype.moveUp.call(this))
        return !1;
      const x = this.getStage();
      return !x || !x.content ? !1 : (x.content.removeChild(this.getNativeCanvasElement()), this.index < x.children.length - 1 ? x.content.insertBefore(this.getNativeCanvasElement(), x.children[this.index + 1].getCanvas()._canvas) : x.content.appendChild(this.getNativeCanvasElement()), !0);
    }
    moveDown() {
      if (O.Node.prototype.moveDown.call(this)) {
        const b = this.getStage();
        if (b) {
          const x = b.children;
          b.content && (b.content.removeChild(this.getNativeCanvasElement()), b.content.insertBefore(this.getNativeCanvasElement(), x[this.index + 1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    moveToBottom() {
      if (O.Node.prototype.moveToBottom.call(this)) {
        const b = this.getStage();
        if (b) {
          const x = b.children;
          b.content && (b.content.removeChild(this.getNativeCanvasElement()), b.content.insertBefore(this.getNativeCanvasElement(), x[1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    getLayer() {
      return this;
    }
    remove() {
      const b = this.getNativeCanvasElement();
      return O.Node.prototype.remove.call(this), b && b.parentNode && h.Util._isInDocument(b) && b.parentNode.removeChild(b), this;
    }
    getStage() {
      return this.parent;
    }
    setSize({ width: b, height: x }) {
      return this.canvas.setSize(b, x), this.hitCanvas.setSize(b, x), this._setSmoothEnabled(), this;
    }
    _validateAdd(b) {
      const x = b.getType();
      x !== "Group" && x !== "Shape" && h.Util.throw("You may only add groups and shapes to a layer.");
    }
    _toKonvaCanvas(b) {
      return b = b || {}, b.width = b.width || this.getWidth(), b.height = b.height || this.getHeight(), b.x = b.x !== void 0 ? b.x : this.x(), b.y = b.y !== void 0 ? b.y : this.y(), O.Node.prototype._toKonvaCanvas.call(this, b);
    }
    _checkVisibility() {
      this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
    }
    _setSmoothEnabled() {
      this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
    }
    getWidth() {
      if (this.parent)
        return this.parent.width();
    }
    setWidth() {
      h.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
    }
    getHeight() {
      if (this.parent)
        return this.parent.height();
    }
    setHeight() {
      h.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
    }
    batchDraw() {
      return this._waitingForDraw || (this._waitingForDraw = !0, h.Util.requestAnimFrame(() => {
        this.draw(), this._waitingForDraw = !1;
      })), this;
    }
    getIntersection(b) {
      if (!this.isListening() || !this.isVisible())
        return null;
      let x = 1, F = !1;
      for (; ; ) {
        for (let n = 0; n < P; n++) {
          const s = C[n], _ = this._getIntersection({
            x: b.x + s.x * x,
            y: b.y + s.y * x
          }), k = _.shape;
          if (k)
            return k;
          if (F = !!_.antialiased, !_.antialiased)
            break;
        }
        if (F)
          x += 1;
        else
          return null;
      }
    }
    _getIntersection(b) {
      const x = this.hitCanvas.pixelRatio, F = this.hitCanvas.context.getImageData(Math.round(b.x * x), Math.round(b.y * x), 1, 1).data, n = F[3];
      if (n === 255) {
        const s = h.Util._rgbToHex(F[0], F[1], F[2]), _ = c.shapes[g + s];
        return _ ? {
          shape: _
        } : {
          antialiased: !0
        };
      } else if (n > 0)
        return {
          antialiased: !0
        };
      return {};
    }
    drawScene(b, x) {
      const F = this.getLayer(), n = b || F && F.getCanvas();
      return this._fire(v, {
        node: this
      }), this.clearBeforeDraw() && n.getContext().clear(), A.Container.prototype.drawScene.call(this, n, x), this._fire(m, {
        node: this
      }), this;
    }
    drawHit(b, x) {
      const F = this.getLayer(), n = b || F && F.hitCanvas;
      return F && F.clearBeforeDraw() && F.getHitCanvas().getContext().clear(), A.Container.prototype.drawHit.call(this, n, x), this;
    }
    enableHitGraph() {
      return this.hitGraphEnabled(!0), this;
    }
    disableHitGraph() {
      return this.hitGraphEnabled(!1), this;
    }
    setHitGraphEnabled(b) {
      h.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(b);
    }
    getHitGraphEnabled(b) {
      return h.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
    }
    toggleHitCanvas() {
      if (!this.parent || !this.parent.content)
        return;
      const b = this.parent;
      !!this.hitCanvas._canvas.parentNode ? b.content.removeChild(this.hitCanvas._canvas) : b.content.appendChild(this.hitCanvas._canvas);
    }
    destroy() {
      return h.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
    }
  };
  return ee.Layer = u, u.prototype.nodeType = "Layer", (0, o._registerNode)(u), E.Factory.addGetterSetter(u, "imageSmoothingEnabled", !0), E.Factory.addGetterSetter(u, "clearBeforeDraw", !0), E.Factory.addGetterSetter(u, "hitGraphEnabled", !0, (0, y.getBooleanValidator)()), ee;
}
var ie = {}, Mi;
function jn() {
  if (Mi) return ie;
  Mi = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.FastLayer = void 0;
  const h = st(), A = On(), O = J();
  let E = class extends A.Layer {
    constructor(y) {
      super(y), this.listening(!1), h.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
  };
  return ie.FastLayer = E, E.prototype.nodeType = "FastLayer", (0, O._registerNode)(E), ie;
}
var ne = {}, Ni;
function fi() {
  if (Ni) return ne;
  Ni = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.Group = void 0;
  const h = st(), A = We(), O = J();
  let E = class extends A.Container {
    _validateAdd(y) {
      const c = y.getType();
      c !== "Group" && c !== "Shape" && h.Util.throw("You may only add groups and shapes to groups.");
    }
  };
  return ne.Group = E, E.prototype.nodeType = "Group", (0, O._registerNode)(E), ne;
}
var re = {}, Oi;
function gi() {
  if (Oi) return re;
  Oi = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.Animation = void 0;
  const h = J(), A = st(), O = function() {
    return h.glob.performance && h.glob.performance.now ? function() {
      return h.glob.performance.now();
    } : function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  }();
  let E = class $t {
    constructor(y, c) {
      this.id = $t.animIdCounter++, this.frame = {
        time: 0,
        timeDiff: 0,
        lastTime: O(),
        frameRate: 0
      }, this.func = y, this.setLayers(c);
    }
    setLayers(y) {
      let c = [];
      return y && (c = Array.isArray(y) ? y : [y]), this.layers = c, this;
    }
    getLayers() {
      return this.layers;
    }
    addLayer(y) {
      const c = this.layers, o = c.length;
      for (let g = 0; g < o; g++)
        if (c[g]._id === y._id)
          return !1;
      return this.layers.push(y), !0;
    }
    isRunning() {
      const c = $t.animations, o = c.length;
      for (let g = 0; g < o; g++)
        if (c[g].id === this.id)
          return !0;
      return !1;
    }
    start() {
      return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = O(), $t._addAnimation(this), this;
    }
    stop() {
      return $t._removeAnimation(this), this;
    }
    _updateFrameObject(y) {
      this.frame.timeDiff = y - this.frame.lastTime, this.frame.lastTime = y, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
    }
    static _addAnimation(y) {
      this.animations.push(y), this._handleAnimation();
    }
    static _removeAnimation(y) {
      const c = y.id, o = this.animations, g = o.length;
      for (let v = 0; v < g; v++)
        if (o[v].id === c) {
          this.animations.splice(v, 1);
          break;
        }
    }
    static _runFrames() {
      const y = {}, c = this.animations;
      for (let o = 0; o < c.length; o++) {
        const g = c[o], v = g.layers, m = g.func;
        g._updateFrameObject(O());
        const C = v.length;
        let P;
        if (m ? P = m.call(g, g.frame) !== !1 : P = !0, !!P)
          for (let u = 0; u < C; u++) {
            const l = v[u];
            l._id !== void 0 && (y[l._id] = l);
          }
      }
      for (const o in y)
        y.hasOwnProperty(o) && y[o].batchDraw();
    }
    static _animationLoop() {
      const y = $t;
      y.animations.length ? (y._runFrames(), A.Util.requestAnimFrame(y._animationLoop)) : y.animRunning = !1;
    }
    static _handleAnimation() {
      this.animRunning || (this.animRunning = !0, A.Util.requestAnimFrame(this._animationLoop));
    }
  };
  return re.Animation = E, E.animations = [], E.animIdCounter = 0, E.animRunning = !1, re;
}
var ei = {}, Gi;
function Qn() {
  return Gi || (Gi = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Easings = h.Tween = void 0;
    const A = st(), O = gi(), E = ot(), w = J(), y = {
      node: 1,
      duration: 1,
      easing: 1,
      onFinish: 1,
      yoyo: 1
    }, c = 1, o = 2, g = 3, v = ["fill", "stroke", "shadowColor"];
    let m = 0;
    class C {
      constructor(l, b, x, F, n, s, _) {
        this.prop = l, this.propFunc = b, this.begin = F, this._pos = F, this.duration = s, this._change = 0, this.prevPos = 0, this.yoyo = _, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = x, this._change = n - this.begin, this.pause();
      }
      fire(l) {
        const b = this[l];
        b && b();
      }
      setTime(l) {
        l > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : l < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = l, this.update());
      }
      getTime() {
        return this._time;
      }
      setPosition(l) {
        this.prevPos = this._pos, this.propFunc(l), this._pos = l;
      }
      getPosition(l) {
        return l === void 0 && (l = this._time), this.func(l, this.begin, this._change, this.duration);
      }
      play() {
        this.state = o, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
      }
      reverse() {
        this.state = g, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
      }
      seek(l) {
        this.pause(), this._time = l, this.update(), this.fire("onSeek");
      }
      reset() {
        this.pause(), this._time = 0, this.update(), this.fire("onReset");
      }
      finish() {
        this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
      }
      update() {
        this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
      }
      onEnterFrame() {
        const l = this.getTimer() - this._startTime;
        this.state === o ? this.setTime(l) : this.state === g && this.setTime(this.duration - l);
      }
      pause() {
        this.state = c, this.fire("onPause");
      }
      getTimer() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
    }
    class P {
      constructor(l) {
        const b = this, x = l.node, F = x._id, n = l.easing || h.Easings.Linear, s = !!l.yoyo;
        let _, k;
        typeof l.duration > "u" ? _ = 0.3 : l.duration === 0 ? _ = 1e-3 : _ = l.duration, this.node = x, this._id = m++;
        const M = x.getLayer() || (x instanceof w.Konva.Stage ? x.getLayers() : null);
        M || A.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new O.Animation(function() {
          b.tween.onEnterFrame();
        }, M), this.tween = new C(k, function(G) {
          b._tweenFunc(G);
        }, n, 0, 1, _ * 1e3, s), this._addListeners(), P.attrs[F] || (P.attrs[F] = {}), P.attrs[F][this._id] || (P.attrs[F][this._id] = {}), P.tweens[F] || (P.tweens[F] = {});
        for (k in l)
          y[k] === void 0 && this._addAttr(k, l[k]);
        this.reset(), this.onFinish = l.onFinish, this.onReset = l.onReset, this.onUpdate = l.onUpdate;
      }
      _addAttr(l, b) {
        const x = this.node, F = x._id;
        let n, s, _, k, M;
        const G = P.tweens[F][l];
        G && delete P.attrs[F][G][l];
        let r = x.getAttr(l);
        if (A.Util._isArray(b))
          if (n = [], s = Math.max(b.length, r.length), l === "points" && b.length !== r.length && (b.length > r.length ? (k = r, r = A.Util._prepareArrayForTween(r, b, x.closed())) : (_ = b, b = A.Util._prepareArrayForTween(b, r, x.closed()))), l.indexOf("fill") === 0)
            for (let d = 0; d < s; d++)
              if (d % 2 === 0)
                n.push(b[d] - r[d]);
              else {
                const e = A.Util.colorToRGBA(r[d]);
                M = A.Util.colorToRGBA(b[d]), r[d] = e, n.push({
                  r: M.r - e.r,
                  g: M.g - e.g,
                  b: M.b - e.b,
                  a: M.a - e.a
                });
              }
          else
            for (let d = 0; d < s; d++)
              n.push(b[d] - r[d]);
        else v.indexOf(l) !== -1 ? (r = A.Util.colorToRGBA(r), M = A.Util.colorToRGBA(b), n = {
          r: M.r - r.r,
          g: M.g - r.g,
          b: M.b - r.b,
          a: M.a - r.a
        }) : n = b - r;
        P.attrs[F][this._id][l] = {
          start: r,
          diff: n,
          end: b,
          trueEnd: _,
          trueStart: k
        }, P.tweens[F][l] = this._id;
      }
      _tweenFunc(l) {
        const b = this.node, x = P.attrs[b._id][this._id];
        let F, n, s, _, k, M, G, r;
        for (F in x) {
          if (n = x[F], s = n.start, _ = n.diff, r = n.end, A.Util._isArray(s))
            if (k = [], G = Math.max(s.length, r.length), F.indexOf("fill") === 0)
              for (M = 0; M < G; M++)
                M % 2 === 0 ? k.push((s[M] || 0) + _[M] * l) : k.push("rgba(" + Math.round(s[M].r + _[M].r * l) + "," + Math.round(s[M].g + _[M].g * l) + "," + Math.round(s[M].b + _[M].b * l) + "," + (s[M].a + _[M].a * l) + ")");
            else
              for (M = 0; M < G; M++)
                k.push((s[M] || 0) + _[M] * l);
          else v.indexOf(F) !== -1 ? k = "rgba(" + Math.round(s.r + _.r * l) + "," + Math.round(s.g + _.g * l) + "," + Math.round(s.b + _.b * l) + "," + (s.a + _.a * l) + ")" : k = s + _ * l;
          b.setAttr(F, k);
        }
      }
      _addListeners() {
        this.tween.onPlay = () => {
          this.anim.start();
        }, this.tween.onReverse = () => {
          this.anim.start();
        }, this.tween.onPause = () => {
          this.anim.stop();
        }, this.tween.onFinish = () => {
          const l = this.node, b = P.attrs[l._id][this._id];
          b.points && b.points.trueEnd && l.setAttr("points", b.points.trueEnd), this.onFinish && this.onFinish.call(this);
        }, this.tween.onReset = () => {
          const l = this.node, b = P.attrs[l._id][this._id];
          b.points && b.points.trueStart && l.points(b.points.trueStart), this.onReset && this.onReset();
        }, this.tween.onUpdate = () => {
          this.onUpdate && this.onUpdate.call(this);
        };
      }
      play() {
        return this.tween.play(), this;
      }
      reverse() {
        return this.tween.reverse(), this;
      }
      reset() {
        return this.tween.reset(), this;
      }
      seek(l) {
        return this.tween.seek(l * 1e3), this;
      }
      pause() {
        return this.tween.pause(), this;
      }
      finish() {
        return this.tween.finish(), this;
      }
      destroy() {
        const l = this.node._id, b = this._id, x = P.tweens[l];
        this.pause();
        for (const F in x)
          delete P.tweens[l][F];
        delete P.attrs[l][b];
      }
    }
    h.Tween = P, P.attrs = {}, P.tweens = {}, E.Node.prototype.to = function(u) {
      const l = u.onFinish;
      u.node = this, u.onFinish = function() {
        this.destroy(), l && l();
      }, new P(u).play();
    }, h.Easings = {
      BackEaseIn(u, l, b, x) {
        return b * (u /= x) * u * ((1.70158 + 1) * u - 1.70158) + l;
      },
      BackEaseOut(u, l, b, x) {
        return b * ((u = u / x - 1) * u * ((1.70158 + 1) * u + 1.70158) + 1) + l;
      },
      BackEaseInOut(u, l, b, x) {
        let F = 1.70158;
        return (u /= x / 2) < 1 ? b / 2 * (u * u * (((F *= 1.525) + 1) * u - F)) + l : b / 2 * ((u -= 2) * u * (((F *= 1.525) + 1) * u + F) + 2) + l;
      },
      ElasticEaseIn(u, l, b, x, F, n) {
        let s = 0;
        return u === 0 ? l : (u /= x) === 1 ? l + b : (n || (n = x * 0.3), !F || F < Math.abs(b) ? (F = b, s = n / 4) : s = n / (2 * Math.PI) * Math.asin(b / F), -(F * Math.pow(2, 10 * (u -= 1)) * Math.sin((u * x - s) * (2 * Math.PI) / n)) + l);
      },
      ElasticEaseOut(u, l, b, x, F, n) {
        let s = 0;
        return u === 0 ? l : (u /= x) === 1 ? l + b : (n || (n = x * 0.3), !F || F < Math.abs(b) ? (F = b, s = n / 4) : s = n / (2 * Math.PI) * Math.asin(b / F), F * Math.pow(2, -10 * u) * Math.sin((u * x - s) * (2 * Math.PI) / n) + b + l);
      },
      ElasticEaseInOut(u, l, b, x, F, n) {
        let s = 0;
        return u === 0 ? l : (u /= x / 2) === 2 ? l + b : (n || (n = x * (0.3 * 1.5)), !F || F < Math.abs(b) ? (F = b, s = n / 4) : s = n / (2 * Math.PI) * Math.asin(b / F), u < 1 ? -0.5 * (F * Math.pow(2, 10 * (u -= 1)) * Math.sin((u * x - s) * (2 * Math.PI) / n)) + l : F * Math.pow(2, -10 * (u -= 1)) * Math.sin((u * x - s) * (2 * Math.PI) / n) * 0.5 + b + l);
      },
      BounceEaseOut(u, l, b, x) {
        return (u /= x) < 1 / 2.75 ? b * (7.5625 * u * u) + l : u < 2 / 2.75 ? b * (7.5625 * (u -= 1.5 / 2.75) * u + 0.75) + l : u < 2.5 / 2.75 ? b * (7.5625 * (u -= 2.25 / 2.75) * u + 0.9375) + l : b * (7.5625 * (u -= 2.625 / 2.75) * u + 0.984375) + l;
      },
      BounceEaseIn(u, l, b, x) {
        return b - h.Easings.BounceEaseOut(x - u, 0, b, x) + l;
      },
      BounceEaseInOut(u, l, b, x) {
        return u < x / 2 ? h.Easings.BounceEaseIn(u * 2, 0, b, x) * 0.5 + l : h.Easings.BounceEaseOut(u * 2 - x, 0, b, x) * 0.5 + b * 0.5 + l;
      },
      EaseIn(u, l, b, x) {
        return b * (u /= x) * u + l;
      },
      EaseOut(u, l, b, x) {
        return -b * (u /= x) * (u - 2) + l;
      },
      EaseInOut(u, l, b, x) {
        return (u /= x / 2) < 1 ? b / 2 * u * u + l : -b / 2 * (--u * (u - 2) - 1) + l;
      },
      StrongEaseIn(u, l, b, x) {
        return b * (u /= x) * u * u * u * u + l;
      },
      StrongEaseOut(u, l, b, x) {
        return b * ((u = u / x - 1) * u * u * u * u + 1) + l;
      },
      StrongEaseInOut(u, l, b, x) {
        return (u /= x / 2) < 1 ? b / 2 * u * u * u * u * u + l : b / 2 * ((u -= 2) * u * u * u * u + 2) + l;
      },
      Linear(u, l, b, x) {
        return b * u / x + l;
      }
    };
  }(ei)), ei;
}
var Li;
function Zn() {
  return Li || (Li = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Konva = void 0;
    const A = J(), O = st(), E = ot(), w = We(), y = $n(), c = On(), o = jn(), g = fi(), v = ui(), m = dt(), C = gi(), P = Qn(), u = Mn(), l = qe();
    h.Konva = O.Util._assign(A.Konva, {
      Util: O.Util,
      Transform: O.Transform,
      Node: E.Node,
      Container: w.Container,
      Stage: y.Stage,
      stages: y.stages,
      Layer: c.Layer,
      FastLayer: o.FastLayer,
      Group: g.Group,
      DD: v.DD,
      Shape: m.Shape,
      shapes: m.shapes,
      Animation: C.Animation,
      Tween: P.Tween,
      Easings: P.Easings,
      Context: u.Context,
      Canvas: l.Canvas
    }), h.default = h.Konva;
  }(Ke)), Ke;
}
var ae = {}, Di;
function Jn() {
  if (Di) return ae;
  Di = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.Arc = void 0;
  const h = tt(), A = dt(), O = J(), E = et(), w = J();
  let y = class extends A.Shape {
    _sceneFunc(o) {
      const g = O.Konva.getAngle(this.angle()), v = this.clockwise();
      o.beginPath(), o.arc(0, 0, this.outerRadius(), 0, g, v), o.arc(0, 0, this.innerRadius(), g, 0, !v), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(o) {
      this.outerRadius(o / 2);
    }
    setHeight(o) {
      this.outerRadius(o / 2);
    }
    getSelfRect() {
      const o = this.innerRadius(), g = this.outerRadius(), v = this.clockwise(), m = O.Konva.getAngle(v ? 360 - this.angle() : this.angle()), C = Math.cos(Math.min(m, Math.PI)), P = 1, u = Math.sin(Math.min(Math.max(Math.PI, m), 3 * Math.PI / 2)), l = Math.sin(Math.min(m, Math.PI / 2)), b = C * (C > 0 ? o : g), x = P * g, F = u * (u > 0 ? o : g), n = l * (l > 0 ? g : o);
      return {
        x: b,
        y: v ? -1 * n : F,
        width: x - b,
        height: n - F
      };
    }
  };
  return ae.Arc = y, y.prototype._centroid = !0, y.prototype.className = "Arc", y.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, w._registerNode)(y), h.Factory.addGetterSetter(y, "innerRadius", 0, (0, E.getNumberValidator)()), h.Factory.addGetterSetter(y, "outerRadius", 0, (0, E.getNumberValidator)()), h.Factory.addGetterSetter(y, "angle", 0, (0, E.getNumberValidator)()), h.Factory.addGetterSetter(y, "clockwise", !1, (0, E.getBooleanValidator)()), ae;
}
var se = {}, oe = {}, Ii;
function Gn() {
  if (Ii) return oe;
  Ii = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.Line = void 0;
  const h = tt(), A = J(), O = dt(), E = et();
  function w(o, g, v, m, C, P, u) {
    const l = Math.sqrt(Math.pow(v - o, 2) + Math.pow(m - g, 2)), b = Math.sqrt(Math.pow(C - v, 2) + Math.pow(P - m, 2)), x = u * l / (l + b), F = u * b / (l + b), n = v - x * (C - o), s = m - x * (P - g), _ = v + F * (C - o), k = m + F * (P - g);
    return [n, s, _, k];
  }
  function y(o, g) {
    const v = o.length, m = [];
    for (let C = 2; C < v - 2; C += 2) {
      const P = w(o[C - 2], o[C - 1], o[C], o[C + 1], o[C + 2], o[C + 3], g);
      isNaN(P[0]) || (m.push(P[0]), m.push(P[1]), m.push(o[C]), m.push(o[C + 1]), m.push(P[2]), m.push(P[3]));
    }
    return m;
  }
  let c = class extends O.Shape {
    constructor(g) {
      super(g), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
        this._clearCache("tensionPoints");
      });
    }
    _sceneFunc(g) {
      let v = this.points(), m = v.length, C = this.tension(), P = this.closed(), u = this.bezier(), l, b, x;
      if (m) {
        if (g.beginPath(), g.moveTo(v[0], v[1]), C !== 0 && m > 4) {
          for (l = this.getTensionPoints(), b = l.length, x = P ? 0 : 4, P || g.quadraticCurveTo(l[0], l[1], l[2], l[3]); x < b - 2; )
            g.bezierCurveTo(l[x++], l[x++], l[x++], l[x++], l[x++], l[x++]);
          P || g.quadraticCurveTo(l[b - 2], l[b - 1], v[m - 2], v[m - 1]);
        } else if (u)
          for (x = 2; x < m; )
            g.bezierCurveTo(v[x++], v[x++], v[x++], v[x++], v[x++], v[x++]);
        else
          for (x = 2; x < m; x += 2)
            g.lineTo(v[x], v[x + 1]);
        P ? (g.closePath(), g.fillStrokeShape(this)) : g.strokeShape(this);
      }
    }
    getTensionPoints() {
      return this._getCache("tensionPoints", this._getTensionPoints);
    }
    _getTensionPoints() {
      return this.closed() ? this._getTensionPointsClosed() : y(this.points(), this.tension());
    }
    _getTensionPointsClosed() {
      const g = this.points(), v = g.length, m = this.tension(), C = w(g[v - 2], g[v - 1], g[0], g[1], g[2], g[3], m), P = w(g[v - 4], g[v - 3], g[v - 2], g[v - 1], g[0], g[1], m), u = y(g, m);
      return [C[2], C[3]].concat(u).concat([
        P[0],
        P[1],
        g[v - 2],
        g[v - 1],
        P[2],
        P[3],
        C[0],
        C[1],
        g[0],
        g[1]
      ]);
    }
    getWidth() {
      return this.getSelfRect().width;
    }
    getHeight() {
      return this.getSelfRect().height;
    }
    getSelfRect() {
      let g = this.points();
      if (g.length < 4)
        return {
          x: g[0] || 0,
          y: g[1] || 0,
          width: 0,
          height: 0
        };
      this.tension() !== 0 ? g = [
        g[0],
        g[1],
        ...this._getTensionPoints(),
        g[g.length - 2],
        g[g.length - 1]
      ] : g = this.points();
      let v = g[0], m = g[0], C = g[1], P = g[1], u, l;
      for (let b = 0; b < g.length / 2; b++)
        u = g[b * 2], l = g[b * 2 + 1], v = Math.min(v, u), m = Math.max(m, u), C = Math.min(C, l), P = Math.max(P, l);
      return {
        x: v,
        y: C,
        width: m - v,
        height: P - C
      };
    }
  };
  return oe.Line = c, c.prototype.className = "Line", c.prototype._attrsAffectingSize = ["points", "bezier", "tension"], (0, A._registerNode)(c), h.Factory.addGetterSetter(c, "closed", !1), h.Factory.addGetterSetter(c, "bezier", !1), h.Factory.addGetterSetter(c, "tension", 0, (0, E.getNumberValidator)()), h.Factory.addGetterSetter(c, "points", [], (0, E.getNumberArrayValidator)()), oe;
}
var le = {}, ii = {}, Bi;
function tr() {
  return Bi || (Bi = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.t2length = h.getQuadraticArcLength = h.getCubicArcLength = h.binomialCoefficients = h.cValues = h.tValues = void 0, h.tValues = [
      [],
      [],
      [
        -0.5773502691896257,
        0.5773502691896257
      ],
      [
        0,
        -0.7745966692414834,
        0.7745966692414834
      ],
      [
        -0.33998104358485626,
        0.33998104358485626,
        -0.8611363115940526,
        0.8611363115940526
      ],
      [
        0,
        -0.5384693101056831,
        0.5384693101056831,
        -0.906179845938664,
        0.906179845938664
      ],
      [
        0.6612093864662645,
        -0.6612093864662645,
        -0.2386191860831969,
        0.2386191860831969,
        -0.932469514203152,
        0.932469514203152
      ],
      [
        0,
        0.4058451513773972,
        -0.4058451513773972,
        -0.7415311855993945,
        0.7415311855993945,
        -0.9491079123427585,
        0.9491079123427585
      ],
      [
        -0.1834346424956498,
        0.1834346424956498,
        -0.525532409916329,
        0.525532409916329,
        -0.7966664774136267,
        0.7966664774136267,
        -0.9602898564975363,
        0.9602898564975363
      ],
      [
        0,
        -0.8360311073266358,
        0.8360311073266358,
        -0.9681602395076261,
        0.9681602395076261,
        -0.3242534234038089,
        0.3242534234038089,
        -0.6133714327005904,
        0.6133714327005904
      ],
      [
        -0.14887433898163122,
        0.14887433898163122,
        -0.4333953941292472,
        0.4333953941292472,
        -0.6794095682990244,
        0.6794095682990244,
        -0.8650633666889845,
        0.8650633666889845,
        -0.9739065285171717,
        0.9739065285171717
      ],
      [
        0,
        -0.26954315595234496,
        0.26954315595234496,
        -0.5190961292068118,
        0.5190961292068118,
        -0.7301520055740494,
        0.7301520055740494,
        -0.8870625997680953,
        0.8870625997680953,
        -0.978228658146057,
        0.978228658146057
      ],
      [
        -0.1252334085114689,
        0.1252334085114689,
        -0.3678314989981802,
        0.3678314989981802,
        -0.5873179542866175,
        0.5873179542866175,
        -0.7699026741943047,
        0.7699026741943047,
        -0.9041172563704749,
        0.9041172563704749,
        -0.9815606342467192,
        0.9815606342467192
      ],
      [
        0,
        -0.2304583159551348,
        0.2304583159551348,
        -0.44849275103644687,
        0.44849275103644687,
        -0.6423493394403402,
        0.6423493394403402,
        -0.8015780907333099,
        0.8015780907333099,
        -0.9175983992229779,
        0.9175983992229779,
        -0.9841830547185881,
        0.9841830547185881
      ],
      [
        -0.10805494870734367,
        0.10805494870734367,
        -0.31911236892788974,
        0.31911236892788974,
        -0.5152486363581541,
        0.5152486363581541,
        -0.6872929048116855,
        0.6872929048116855,
        -0.827201315069765,
        0.827201315069765,
        -0.9284348836635735,
        0.9284348836635735,
        -0.9862838086968123,
        0.9862838086968123
      ],
      [
        0,
        -0.20119409399743451,
        0.20119409399743451,
        -0.3941513470775634,
        0.3941513470775634,
        -0.5709721726085388,
        0.5709721726085388,
        -0.7244177313601701,
        0.7244177313601701,
        -0.8482065834104272,
        0.8482065834104272,
        -0.937273392400706,
        0.937273392400706,
        -0.9879925180204854,
        0.9879925180204854
      ],
      [
        -0.09501250983763744,
        0.09501250983763744,
        -0.2816035507792589,
        0.2816035507792589,
        -0.45801677765722737,
        0.45801677765722737,
        -0.6178762444026438,
        0.6178762444026438,
        -0.755404408355003,
        0.755404408355003,
        -0.8656312023878318,
        0.8656312023878318,
        -0.9445750230732326,
        0.9445750230732326,
        -0.9894009349916499,
        0.9894009349916499
      ],
      [
        0,
        -0.17848418149584785,
        0.17848418149584785,
        -0.3512317634538763,
        0.3512317634538763,
        -0.5126905370864769,
        0.5126905370864769,
        -0.6576711592166907,
        0.6576711592166907,
        -0.7815140038968014,
        0.7815140038968014,
        -0.8802391537269859,
        0.8802391537269859,
        -0.9506755217687678,
        0.9506755217687678,
        -0.9905754753144174,
        0.9905754753144174
      ],
      [
        -0.0847750130417353,
        0.0847750130417353,
        -0.2518862256915055,
        0.2518862256915055,
        -0.41175116146284263,
        0.41175116146284263,
        -0.5597708310739475,
        0.5597708310739475,
        -0.6916870430603532,
        0.6916870430603532,
        -0.8037049589725231,
        0.8037049589725231,
        -0.8926024664975557,
        0.8926024664975557,
        -0.9558239495713977,
        0.9558239495713977,
        -0.9915651684209309,
        0.9915651684209309
      ],
      [
        0,
        -0.16035864564022537,
        0.16035864564022537,
        -0.31656409996362983,
        0.31656409996362983,
        -0.46457074137596094,
        0.46457074137596094,
        -0.600545304661681,
        0.600545304661681,
        -0.7209661773352294,
        0.7209661773352294,
        -0.8227146565371428,
        0.8227146565371428,
        -0.9031559036148179,
        0.9031559036148179,
        -0.96020815213483,
        0.96020815213483,
        -0.9924068438435844,
        0.9924068438435844
      ],
      [
        -0.07652652113349734,
        0.07652652113349734,
        -0.22778585114164507,
        0.22778585114164507,
        -0.37370608871541955,
        0.37370608871541955,
        -0.5108670019508271,
        0.5108670019508271,
        -0.636053680726515,
        0.636053680726515,
        -0.7463319064601508,
        0.7463319064601508,
        -0.8391169718222188,
        0.8391169718222188,
        -0.912234428251326,
        0.912234428251326,
        -0.9639719272779138,
        0.9639719272779138,
        -0.9931285991850949,
        0.9931285991850949
      ],
      [
        0,
        -0.1455618541608951,
        0.1455618541608951,
        -0.2880213168024011,
        0.2880213168024011,
        -0.4243421202074388,
        0.4243421202074388,
        -0.5516188358872198,
        0.5516188358872198,
        -0.6671388041974123,
        0.6671388041974123,
        -0.7684399634756779,
        0.7684399634756779,
        -0.8533633645833173,
        0.8533633645833173,
        -0.9200993341504008,
        0.9200993341504008,
        -0.9672268385663063,
        0.9672268385663063,
        -0.9937521706203895,
        0.9937521706203895
      ],
      [
        -0.06973927331972223,
        0.06973927331972223,
        -0.20786042668822127,
        0.20786042668822127,
        -0.34193582089208424,
        0.34193582089208424,
        -0.469355837986757,
        0.469355837986757,
        -0.5876404035069116,
        0.5876404035069116,
        -0.6944872631866827,
        0.6944872631866827,
        -0.7878168059792081,
        0.7878168059792081,
        -0.8658125777203002,
        0.8658125777203002,
        -0.926956772187174,
        0.926956772187174,
        -0.9700604978354287,
        0.9700604978354287,
        -0.9942945854823992,
        0.9942945854823992
      ],
      [
        0,
        -0.1332568242984661,
        0.1332568242984661,
        -0.26413568097034495,
        0.26413568097034495,
        -0.3903010380302908,
        0.3903010380302908,
        -0.5095014778460075,
        0.5095014778460075,
        -0.6196098757636461,
        0.6196098757636461,
        -0.7186613631319502,
        0.7186613631319502,
        -0.8048884016188399,
        0.8048884016188399,
        -0.8767523582704416,
        0.8767523582704416,
        -0.9329710868260161,
        0.9329710868260161,
        -0.9725424712181152,
        0.9725424712181152,
        -0.9947693349975522,
        0.9947693349975522
      ],
      [
        -0.06405689286260563,
        0.06405689286260563,
        -0.1911188674736163,
        0.1911188674736163,
        -0.3150426796961634,
        0.3150426796961634,
        -0.4337935076260451,
        0.4337935076260451,
        -0.5454214713888396,
        0.5454214713888396,
        -0.6480936519369755,
        0.6480936519369755,
        -0.7401241915785544,
        0.7401241915785544,
        -0.820001985973903,
        0.820001985973903,
        -0.8864155270044011,
        0.8864155270044011,
        -0.9382745520027328,
        0.9382745520027328,
        -0.9747285559713095,
        0.9747285559713095,
        -0.9951872199970213,
        0.9951872199970213
      ]
    ], h.cValues = [
      [],
      [],
      [1, 1],
      [
        0.8888888888888888,
        0.5555555555555556,
        0.5555555555555556
      ],
      [
        0.6521451548625461,
        0.6521451548625461,
        0.34785484513745385,
        0.34785484513745385
      ],
      [
        0.5688888888888889,
        0.47862867049936647,
        0.47862867049936647,
        0.23692688505618908,
        0.23692688505618908
      ],
      [
        0.3607615730481386,
        0.3607615730481386,
        0.46791393457269104,
        0.46791393457269104,
        0.17132449237917036,
        0.17132449237917036
      ],
      [
        0.4179591836734694,
        0.3818300505051189,
        0.3818300505051189,
        0.27970539148927664,
        0.27970539148927664,
        0.1294849661688697,
        0.1294849661688697
      ],
      [
        0.362683783378362,
        0.362683783378362,
        0.31370664587788727,
        0.31370664587788727,
        0.22238103445337448,
        0.22238103445337448,
        0.10122853629037626,
        0.10122853629037626
      ],
      [
        0.3302393550012598,
        0.1806481606948574,
        0.1806481606948574,
        0.08127438836157441,
        0.08127438836157441,
        0.31234707704000286,
        0.31234707704000286,
        0.26061069640293544,
        0.26061069640293544
      ],
      [
        0.29552422471475287,
        0.29552422471475287,
        0.26926671930999635,
        0.26926671930999635,
        0.21908636251598204,
        0.21908636251598204,
        0.1494513491505806,
        0.1494513491505806,
        0.06667134430868814,
        0.06667134430868814
      ],
      [
        0.2729250867779006,
        0.26280454451024665,
        0.26280454451024665,
        0.23319376459199048,
        0.23319376459199048,
        0.18629021092773426,
        0.18629021092773426,
        0.1255803694649046,
        0.1255803694649046,
        0.05566856711617366,
        0.05566856711617366
      ],
      [
        0.24914704581340277,
        0.24914704581340277,
        0.2334925365383548,
        0.2334925365383548,
        0.20316742672306592,
        0.20316742672306592,
        0.16007832854334622,
        0.16007832854334622,
        0.10693932599531843,
        0.10693932599531843,
        0.04717533638651183,
        0.04717533638651183
      ],
      [
        0.2325515532308739,
        0.22628318026289723,
        0.22628318026289723,
        0.2078160475368885,
        0.2078160475368885,
        0.17814598076194574,
        0.17814598076194574,
        0.13887351021978725,
        0.13887351021978725,
        0.09212149983772845,
        0.09212149983772845,
        0.04048400476531588,
        0.04048400476531588
      ],
      [
        0.2152638534631578,
        0.2152638534631578,
        0.2051984637212956,
        0.2051984637212956,
        0.18553839747793782,
        0.18553839747793782,
        0.15720316715819355,
        0.15720316715819355,
        0.12151857068790319,
        0.12151857068790319,
        0.08015808715976021,
        0.08015808715976021,
        0.03511946033175186,
        0.03511946033175186
      ],
      [
        0.2025782419255613,
        0.19843148532711158,
        0.19843148532711158,
        0.1861610000155622,
        0.1861610000155622,
        0.16626920581699392,
        0.16626920581699392,
        0.13957067792615432,
        0.13957067792615432,
        0.10715922046717194,
        0.10715922046717194,
        0.07036604748810812,
        0.07036604748810812,
        0.03075324199611727,
        0.03075324199611727
      ],
      [
        0.1894506104550685,
        0.1894506104550685,
        0.18260341504492358,
        0.18260341504492358,
        0.16915651939500254,
        0.16915651939500254,
        0.14959598881657674,
        0.14959598881657674,
        0.12462897125553388,
        0.12462897125553388,
        0.09515851168249279,
        0.09515851168249279,
        0.062253523938647894,
        0.062253523938647894,
        0.027152459411754096,
        0.027152459411754096
      ],
      [
        0.17944647035620653,
        0.17656270536699264,
        0.17656270536699264,
        0.16800410215645004,
        0.16800410215645004,
        0.15404576107681028,
        0.15404576107681028,
        0.13513636846852548,
        0.13513636846852548,
        0.11188384719340397,
        0.11188384719340397,
        0.08503614831717918,
        0.08503614831717918,
        0.0554595293739872,
        0.0554595293739872,
        0.02414830286854793,
        0.02414830286854793
      ],
      [
        0.1691423829631436,
        0.1691423829631436,
        0.16427648374583273,
        0.16427648374583273,
        0.15468467512626524,
        0.15468467512626524,
        0.14064291467065065,
        0.14064291467065065,
        0.12255520671147846,
        0.12255520671147846,
        0.10094204410628717,
        0.10094204410628717,
        0.07642573025488905,
        0.07642573025488905,
        0.0497145488949698,
        0.0497145488949698,
        0.02161601352648331,
        0.02161601352648331
      ],
      [
        0.1610544498487837,
        0.15896884339395434,
        0.15896884339395434,
        0.15276604206585967,
        0.15276604206585967,
        0.1426067021736066,
        0.1426067021736066,
        0.12875396253933621,
        0.12875396253933621,
        0.11156664554733399,
        0.11156664554733399,
        0.09149002162245,
        0.09149002162245,
        0.06904454273764123,
        0.06904454273764123,
        0.0448142267656996,
        0.0448142267656996,
        0.019461788229726478,
        0.019461788229726478
      ],
      [
        0.15275338713072584,
        0.15275338713072584,
        0.14917298647260374,
        0.14917298647260374,
        0.14209610931838204,
        0.14209610931838204,
        0.13168863844917664,
        0.13168863844917664,
        0.11819453196151841,
        0.11819453196151841,
        0.10193011981724044,
        0.10193011981724044,
        0.08327674157670475,
        0.08327674157670475,
        0.06267204833410907,
        0.06267204833410907,
        0.04060142980038694,
        0.04060142980038694,
        0.017614007139152118,
        0.017614007139152118
      ],
      [
        0.14608113364969041,
        0.14452440398997005,
        0.14452440398997005,
        0.13988739479107315,
        0.13988739479107315,
        0.13226893863333747,
        0.13226893863333747,
        0.12183141605372853,
        0.12183141605372853,
        0.10879729916714838,
        0.10879729916714838,
        0.09344442345603386,
        0.09344442345603386,
        0.0761001136283793,
        0.0761001136283793,
        0.057134425426857205,
        0.057134425426857205,
        0.036953789770852494,
        0.036953789770852494,
        0.016017228257774335,
        0.016017228257774335
      ],
      [
        0.13925187285563198,
        0.13925187285563198,
        0.13654149834601517,
        0.13654149834601517,
        0.13117350478706238,
        0.13117350478706238,
        0.12325237681051242,
        0.12325237681051242,
        0.11293229608053922,
        0.11293229608053922,
        0.10041414444288096,
        0.10041414444288096,
        0.08594160621706773,
        0.08594160621706773,
        0.06979646842452049,
        0.06979646842452049,
        0.052293335152683286,
        0.052293335152683286,
        0.03377490158481415,
        0.03377490158481415,
        0.0146279952982722,
        0.0146279952982722
      ],
      [
        0.13365457218610619,
        0.1324620394046966,
        0.1324620394046966,
        0.12890572218808216,
        0.12890572218808216,
        0.12304908430672953,
        0.12304908430672953,
        0.11499664022241136,
        0.11499664022241136,
        0.10489209146454141,
        0.10489209146454141,
        0.09291576606003515,
        0.09291576606003515,
        0.07928141177671895,
        0.07928141177671895,
        0.06423242140852585,
        0.06423242140852585,
        0.04803767173108467,
        0.04803767173108467,
        0.030988005856979445,
        0.030988005856979445,
        0.013411859487141771,
        0.013411859487141771
      ],
      [
        0.12793819534675216,
        0.12793819534675216,
        0.1258374563468283,
        0.1258374563468283,
        0.12167047292780339,
        0.12167047292780339,
        0.1155056680537256,
        0.1155056680537256,
        0.10744427011596563,
        0.10744427011596563,
        0.09761865210411388,
        0.09761865210411388,
        0.08619016153195327,
        0.08619016153195327,
        0.0733464814110803,
        0.0733464814110803,
        0.05929858491543678,
        0.05929858491543678,
        0.04427743881741981,
        0.04427743881741981,
        0.028531388628933663,
        0.028531388628933663,
        0.0123412297999872,
        0.0123412297999872
      ]
    ], h.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
    const A = (c, o, g) => {
      let v, m;
      const P = g / 2;
      v = 0;
      for (let u = 0; u < 20; u++)
        m = P * h.tValues[20][u] + P, v += h.cValues[20][u] * E(c, o, m);
      return P * v;
    };
    h.getCubicArcLength = A;
    const O = (c, o, g) => {
      g === void 0 && (g = 1);
      const v = c[0] - 2 * c[1] + c[2], m = o[0] - 2 * o[1] + o[2], C = 2 * c[1] - 2 * c[0], P = 2 * o[1] - 2 * o[0], u = 4 * (v * v + m * m), l = 4 * (v * C + m * P), b = C * C + P * P;
      if (u === 0)
        return g * Math.sqrt(Math.pow(c[2] - c[0], 2) + Math.pow(o[2] - o[0], 2));
      const x = l / (2 * u), F = b / u, n = g + x, s = F - x * x, _ = n * n + s > 0 ? Math.sqrt(n * n + s) : 0, k = x * x + s > 0 ? Math.sqrt(x * x + s) : 0, M = x + Math.sqrt(x * x + s) !== 0 ? s * Math.log(Math.abs((n + _) / (x + k))) : 0;
      return Math.sqrt(u) / 2 * (n * _ - x * k + M);
    };
    h.getQuadraticArcLength = O;
    function E(c, o, g) {
      const v = w(1, g, c), m = w(1, g, o), C = v * v + m * m;
      return Math.sqrt(C);
    }
    const w = (c, o, g) => {
      const v = g.length - 1;
      let m, C;
      if (v === 0)
        return 0;
      if (c === 0) {
        C = 0;
        for (let P = 0; P <= v; P++)
          C += h.binomialCoefficients[v][P] * Math.pow(1 - o, v - P) * Math.pow(o, P) * g[P];
        return C;
      } else {
        m = new Array(v);
        for (let P = 0; P < v; P++)
          m[P] = v * (g[P + 1] - g[P]);
        return w(c - 1, o, m);
      }
    }, y = (c, o, g) => {
      let v = 1, m = c / o, C = (c - g(m)) / o, P = 0;
      for (; v > 1e-3; ) {
        const u = g(m + C), l = Math.abs(c - u) / o;
        if (l < v)
          v = l, m += C;
        else {
          const b = g(m - C), x = Math.abs(c - b) / o;
          x < v ? (v = x, m -= C) : C /= 2;
        }
        if (P++, P > 500)
          break;
      }
      return m;
    };
    h.t2length = y;
  }(ii)), ii;
}
var Ui;
function pi() {
  if (Ui) return le;
  Ui = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.Path = void 0;
  const h = tt(), A = dt(), O = J(), E = tr();
  let w = class _t extends A.Shape {
    constructor(c) {
      super(c), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute();
      });
    }
    _readDataAttribute() {
      this.dataArray = _t.parsePathData(this.data()), this.pathLength = _t.getPathLength(this.dataArray);
    }
    _sceneFunc(c) {
      const o = this.dataArray;
      c.beginPath();
      let g = !1;
      for (let _ = 0; _ < o.length; _++) {
        const k = o[_].command, M = o[_].points;
        switch (k) {
          case "L":
            c.lineTo(M[0], M[1]);
            break;
          case "M":
            c.moveTo(M[0], M[1]);
            break;
          case "C":
            c.bezierCurveTo(M[0], M[1], M[2], M[3], M[4], M[5]);
            break;
          case "Q":
            c.quadraticCurveTo(M[0], M[1], M[2], M[3]);
            break;
          case "A":
            var v = M[0], m = M[1], C = M[2], P = M[3], u = M[4], l = M[5], b = M[6], x = M[7], F = C > P ? C : P, n = C > P ? 1 : C / P, s = C > P ? P / C : 1;
            c.translate(v, m), c.rotate(b), c.scale(n, s), c.arc(0, 0, F, u, u + l, 1 - x), c.scale(1 / n, 1 / s), c.rotate(-b), c.translate(-v, -m);
            break;
          case "z":
            g = !0, c.closePath();
            break;
        }
      }
      !g && !this.hasFill() ? c.strokeShape(this) : c.fillStrokeShape(this);
    }
    getSelfRect() {
      let c = [];
      this.dataArray.forEach(function(u) {
        if (u.command === "A") {
          const l = u.points[4], b = u.points[5], x = u.points[4] + b;
          let F = Math.PI / 180;
          if (Math.abs(l - x) < F && (F = Math.abs(l - x)), b < 0)
            for (let n = l - F; n > x; n -= F) {
              const s = _t.getPointOnEllipticalArc(u.points[0], u.points[1], u.points[2], u.points[3], n, 0);
              c.push(s.x, s.y);
            }
          else
            for (let n = l + F; n < x; n += F) {
              const s = _t.getPointOnEllipticalArc(u.points[0], u.points[1], u.points[2], u.points[3], n, 0);
              c.push(s.x, s.y);
            }
        } else if (u.command === "C")
          for (let l = 0; l <= 1; l += 0.01) {
            const b = _t.getPointOnCubicBezier(l, u.start.x, u.start.y, u.points[0], u.points[1], u.points[2], u.points[3], u.points[4], u.points[5]);
            c.push(b.x, b.y);
          }
        else
          c = c.concat(u.points);
      });
      let o = c[0], g = c[0], v = c[1], m = c[1], C, P;
      for (let u = 0; u < c.length / 2; u++)
        C = c[u * 2], P = c[u * 2 + 1], isNaN(C) || (o = Math.min(o, C), g = Math.max(g, C)), isNaN(P) || (v = Math.min(v, P), m = Math.max(m, P));
      return {
        x: o,
        y: v,
        width: g - o,
        height: m - v
      };
    }
    getLength() {
      return this.pathLength;
    }
    getPointAtLength(c) {
      return _t.getPointAtLengthOfDataArray(c, this.dataArray);
    }
    static getLineLength(c, o, g, v) {
      return Math.sqrt((g - c) * (g - c) + (v - o) * (v - o));
    }
    static getPathLength(c) {
      let o = 0;
      for (let g = 0; g < c.length; ++g)
        o += c[g].pathLength;
      return o;
    }
    static getPointAtLengthOfDataArray(c, o) {
      let g, v = 0, m = o.length;
      if (!m)
        return null;
      for (; v < m && c > o[v].pathLength; )
        c -= o[v].pathLength, ++v;
      if (v === m)
        return g = o[v - 1].points.slice(-2), {
          x: g[0],
          y: g[1]
        };
      if (c < 0.01)
        return g = o[v].points.slice(0, 2), {
          x: g[0],
          y: g[1]
        };
      const C = o[v], P = C.points;
      switch (C.command) {
        case "L":
          return _t.getPointOnLine(c, C.start.x, C.start.y, P[0], P[1]);
        case "C":
          return _t.getPointOnCubicBezier((0, E.t2length)(c, _t.getPathLength(o), (_) => (0, E.getCubicArcLength)([C.start.x, P[0], P[2], P[4]], [C.start.y, P[1], P[3], P[5]], _)), C.start.x, C.start.y, P[0], P[1], P[2], P[3], P[4], P[5]);
        case "Q":
          return _t.getPointOnQuadraticBezier((0, E.t2length)(c, _t.getPathLength(o), (_) => (0, E.getQuadraticArcLength)([C.start.x, P[0], P[2]], [C.start.y, P[1], P[3]], _)), C.start.x, C.start.y, P[0], P[1], P[2], P[3]);
        case "A":
          var u = P[0], l = P[1], b = P[2], x = P[3], F = P[4], n = P[5], s = P[6];
          return F += n * c / C.pathLength, _t.getPointOnEllipticalArc(u, l, b, x, F, s);
      }
      return null;
    }
    static getPointOnLine(c, o, g, v, m, C, P) {
      C = C ?? o, P = P ?? g;
      const u = this.getLineLength(o, g, v, m);
      if (u < 1e-10)
        return { x: o, y: g };
      if (v === o)
        return { x: C, y: P + (m > g ? c : -c) };
      const l = (m - g) / (v - o), b = Math.sqrt(c * c / (1 + l * l)) * (v < o ? -1 : 1), x = l * b;
      if (Math.abs(P - g - l * (C - o)) < 1e-10)
        return { x: C + b, y: P + x };
      const F = ((C - o) * (v - o) + (P - g) * (m - g)) / (u * u), n = o + F * (v - o), s = g + F * (m - g), _ = this.getLineLength(C, P, n, s), k = Math.sqrt(c * c - _ * _), M = Math.sqrt(k * k / (1 + l * l)) * (v < o ? -1 : 1), G = l * M;
      return { x: n + M, y: s + G };
    }
    static getPointOnCubicBezier(c, o, g, v, m, C, P, u, l) {
      function b(k) {
        return k * k * k;
      }
      function x(k) {
        return 3 * k * k * (1 - k);
      }
      function F(k) {
        return 3 * k * (1 - k) * (1 - k);
      }
      function n(k) {
        return (1 - k) * (1 - k) * (1 - k);
      }
      const s = u * b(c) + C * x(c) + v * F(c) + o * n(c), _ = l * b(c) + P * x(c) + m * F(c) + g * n(c);
      return {
        x: s,
        y: _
      };
    }
    static getPointOnQuadraticBezier(c, o, g, v, m, C, P) {
      function u(n) {
        return n * n;
      }
      function l(n) {
        return 2 * n * (1 - n);
      }
      function b(n) {
        return (1 - n) * (1 - n);
      }
      const x = C * u(c) + v * l(c) + o * b(c), F = P * u(c) + m * l(c) + g * b(c);
      return {
        x,
        y: F
      };
    }
    static getPointOnEllipticalArc(c, o, g, v, m, C) {
      const P = Math.cos(C), u = Math.sin(C), l = {
        x: g * Math.cos(m),
        y: v * Math.sin(m)
      };
      return {
        x: c + (l.x * P - l.y * u),
        y: o + (l.x * u + l.y * P)
      };
    }
    static parsePathData(c) {
      if (!c)
        return [];
      let o = c;
      const g = [
        "m",
        "M",
        "l",
        "L",
        "v",
        "V",
        "h",
        "H",
        "z",
        "Z",
        "c",
        "C",
        "q",
        "Q",
        "t",
        "T",
        "s",
        "S",
        "a",
        "A"
      ];
      o = o.replace(new RegExp(" ", "g"), ",");
      for (var v = 0; v < g.length; v++)
        o = o.replace(new RegExp(g[v], "g"), "|" + g[v]);
      const m = o.split("|"), C = [], P = [];
      let u = 0, l = 0;
      const b = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
      let x;
      for (v = 1; v < m.length; v++) {
        let t = m[v], a = t.charAt(0);
        for (t = t.slice(1), P.length = 0; x = b.exec(t); )
          P.push(x[0]);
        const i = [];
        for (let p = 0, S = P.length; p < S; p++) {
          if (P[p] === "00") {
            i.push(0, 0);
            continue;
          }
          const R = parseFloat(P[p]);
          isNaN(R) ? i.push(0) : i.push(R);
        }
        for (; i.length > 0 && !isNaN(i[0]); ) {
          let p = "", S = [];
          const R = u, N = l;
          var F, n, s, _, k, M, G, r, d, e;
          switch (a) {
            case "l":
              u += i.shift(), l += i.shift(), p = "L", S.push(u, l);
              break;
            case "L":
              u = i.shift(), l = i.shift(), S.push(u, l);
              break;
            case "m":
              var f = i.shift(), T = i.shift();
              if (u += f, l += T, p = "M", C.length > 2 && C[C.length - 1].command === "z") {
                for (let I = C.length - 2; I >= 0; I--)
                  if (C[I].command === "M") {
                    u = C[I].points[0] + f, l = C[I].points[1] + T;
                    break;
                  }
              }
              S.push(u, l), a = "l";
              break;
            case "M":
              u = i.shift(), l = i.shift(), p = "M", S.push(u, l), a = "L";
              break;
            case "h":
              u += i.shift(), p = "L", S.push(u, l);
              break;
            case "H":
              u = i.shift(), p = "L", S.push(u, l);
              break;
            case "v":
              l += i.shift(), p = "L", S.push(u, l);
              break;
            case "V":
              l = i.shift(), p = "L", S.push(u, l);
              break;
            case "C":
              S.push(i.shift(), i.shift(), i.shift(), i.shift()), u = i.shift(), l = i.shift(), S.push(u, l);
              break;
            case "c":
              S.push(u + i.shift(), l + i.shift(), u + i.shift(), l + i.shift()), u += i.shift(), l += i.shift(), p = "C", S.push(u, l);
              break;
            case "S":
              n = u, s = l, F = C[C.length - 1], F.command === "C" && (n = u + (u - F.points[2]), s = l + (l - F.points[3])), S.push(n, s, i.shift(), i.shift()), u = i.shift(), l = i.shift(), p = "C", S.push(u, l);
              break;
            case "s":
              n = u, s = l, F = C[C.length - 1], F.command === "C" && (n = u + (u - F.points[2]), s = l + (l - F.points[3])), S.push(n, s, u + i.shift(), l + i.shift()), u += i.shift(), l += i.shift(), p = "C", S.push(u, l);
              break;
            case "Q":
              S.push(i.shift(), i.shift()), u = i.shift(), l = i.shift(), S.push(u, l);
              break;
            case "q":
              S.push(u + i.shift(), l + i.shift()), u += i.shift(), l += i.shift(), p = "Q", S.push(u, l);
              break;
            case "T":
              n = u, s = l, F = C[C.length - 1], F.command === "Q" && (n = u + (u - F.points[0]), s = l + (l - F.points[1])), u = i.shift(), l = i.shift(), p = "Q", S.push(n, s, u, l);
              break;
            case "t":
              n = u, s = l, F = C[C.length - 1], F.command === "Q" && (n = u + (u - F.points[0]), s = l + (l - F.points[1])), u += i.shift(), l += i.shift(), p = "Q", S.push(n, s, u, l);
              break;
            case "A":
              _ = i.shift(), k = i.shift(), M = i.shift(), G = i.shift(), r = i.shift(), d = u, e = l, u = i.shift(), l = i.shift(), p = "A", S = this.convertEndpointToCenterParameterization(d, e, u, l, G, r, _, k, M);
              break;
            case "a":
              _ = i.shift(), k = i.shift(), M = i.shift(), G = i.shift(), r = i.shift(), d = u, e = l, u += i.shift(), l += i.shift(), p = "A", S = this.convertEndpointToCenterParameterization(d, e, u, l, G, r, _, k, M);
              break;
          }
          C.push({
            command: p || a,
            points: S,
            start: {
              x: R,
              y: N
            },
            pathLength: this.calcLength(R, N, p || a, S)
          });
        }
        (a === "z" || a === "Z") && C.push({
          command: "z",
          points: [],
          start: void 0,
          pathLength: 0
        });
      }
      return C;
    }
    static calcLength(c, o, g, v) {
      let m, C, P, u;
      const l = _t;
      switch (g) {
        case "L":
          return l.getLineLength(c, o, v[0], v[1]);
        case "C":
          return (0, E.getCubicArcLength)([c, v[0], v[2], v[4]], [o, v[1], v[3], v[5]], 1);
        case "Q":
          return (0, E.getQuadraticArcLength)([c, v[0], v[2]], [o, v[1], v[3]], 1);
        case "A":
          m = 0;
          var b = v[4], x = v[5], F = v[4] + x, n = Math.PI / 180;
          if (Math.abs(b - F) < n && (n = Math.abs(b - F)), C = l.getPointOnEllipticalArc(v[0], v[1], v[2], v[3], b, 0), x < 0)
            for (u = b - n; u > F; u -= n)
              P = l.getPointOnEllipticalArc(v[0], v[1], v[2], v[3], u, 0), m += l.getLineLength(C.x, C.y, P.x, P.y), C = P;
          else
            for (u = b + n; u < F; u += n)
              P = l.getPointOnEllipticalArc(v[0], v[1], v[2], v[3], u, 0), m += l.getLineLength(C.x, C.y, P.x, P.y), C = P;
          return P = l.getPointOnEllipticalArc(v[0], v[1], v[2], v[3], F, 0), m += l.getLineLength(C.x, C.y, P.x, P.y), m;
      }
      return 0;
    }
    static convertEndpointToCenterParameterization(c, o, g, v, m, C, P, u, l) {
      const b = l * (Math.PI / 180), x = Math.cos(b) * (c - g) / 2 + Math.sin(b) * (o - v) / 2, F = -1 * Math.sin(b) * (c - g) / 2 + Math.cos(b) * (o - v) / 2, n = x * x / (P * P) + F * F / (u * u);
      n > 1 && (P *= Math.sqrt(n), u *= Math.sqrt(n));
      let s = Math.sqrt((P * P * (u * u) - P * P * (F * F) - u * u * (x * x)) / (P * P * (F * F) + u * u * (x * x)));
      m === C && (s *= -1), isNaN(s) && (s = 0);
      const _ = s * P * F / u, k = s * -u * x / P, M = (c + g) / 2 + Math.cos(b) * _ - Math.sin(b) * k, G = (o + v) / 2 + Math.sin(b) * _ + Math.cos(b) * k, r = function(i) {
        return Math.sqrt(i[0] * i[0] + i[1] * i[1]);
      }, d = function(i, p) {
        return (i[0] * p[0] + i[1] * p[1]) / (r(i) * r(p));
      }, e = function(i, p) {
        return (i[0] * p[1] < i[1] * p[0] ? -1 : 1) * Math.acos(d(i, p));
      }, f = e([1, 0], [(x - _) / P, (F - k) / u]), T = [(x - _) / P, (F - k) / u], t = [(-1 * x - _) / P, (-1 * F - k) / u];
      let a = e(T, t);
      return d(T, t) <= -1 && (a = Math.PI), d(T, t) >= 1 && (a = 0), C === 0 && a > 0 && (a = a - 2 * Math.PI), C === 1 && a < 0 && (a = a + 2 * Math.PI), [M, G, P, u, f, a, b, C];
    }
  };
  return le.Path = w, w.prototype.className = "Path", w.prototype._attrsAffectingSize = ["data"], (0, O._registerNode)(w), h.Factory.addGetterSetter(w, "data"), le;
}
var Vi;
function er() {
  if (Vi) return se;
  Vi = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.Arrow = void 0;
  const h = tt(), A = Gn(), O = et(), E = J(), w = pi();
  let y = class extends A.Line {
    _sceneFunc(o) {
      super._sceneFunc(o);
      const g = Math.PI * 2, v = this.points();
      let m = v;
      const C = this.tension() !== 0 && v.length > 4;
      C && (m = this.getTensionPoints());
      const P = this.pointerLength(), u = v.length;
      let l, b;
      if (C) {
        const n = [
          m[m.length - 4],
          m[m.length - 3],
          m[m.length - 2],
          m[m.length - 1],
          v[u - 2],
          v[u - 1]
        ], s = w.Path.calcLength(m[m.length - 4], m[m.length - 3], "C", n), _ = w.Path.getPointOnQuadraticBezier(Math.min(1, 1 - P / s), n[0], n[1], n[2], n[3], n[4], n[5]);
        l = v[u - 2] - _.x, b = v[u - 1] - _.y;
      } else
        l = v[u - 2] - v[u - 4], b = v[u - 1] - v[u - 3];
      const x = (Math.atan2(b, l) + g) % g, F = this.pointerWidth();
      this.pointerAtEnding() && (o.save(), o.beginPath(), o.translate(v[u - 2], v[u - 1]), o.rotate(x), o.moveTo(0, 0), o.lineTo(-P, F / 2), o.lineTo(-P, -F / 2), o.closePath(), o.restore(), this.__fillStroke(o)), this.pointerAtBeginning() && (o.save(), o.beginPath(), o.translate(v[0], v[1]), C ? (l = (m[0] + m[2]) / 2 - v[0], b = (m[1] + m[3]) / 2 - v[1]) : (l = v[2] - v[0], b = v[3] - v[1]), o.rotate((Math.atan2(-b, -l) + g) % g), o.moveTo(0, 0), o.lineTo(-P, F / 2), o.lineTo(-P, -F / 2), o.closePath(), o.restore(), this.__fillStroke(o));
    }
    __fillStroke(o) {
      const g = this.dashEnabled();
      g && (this.attrs.dashEnabled = !1, o.setLineDash([])), o.fillStrokeShape(this), g && (this.attrs.dashEnabled = !0);
    }
    getSelfRect() {
      const o = super.getSelfRect(), g = this.pointerWidth() / 2;
      return {
        x: o.x,
        y: o.y - g,
        width: o.width,
        height: o.height + g * 2
      };
    }
  };
  return se.Arrow = y, y.prototype.className = "Arrow", (0, E._registerNode)(y), h.Factory.addGetterSetter(y, "pointerLength", 10, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(y, "pointerWidth", 10, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(y, "pointerAtBeginning", !1), h.Factory.addGetterSetter(y, "pointerAtEnding", !0), se;
}
var he = {}, Hi;
function ir() {
  if (Hi) return he;
  Hi = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.Circle = void 0;
  const h = tt(), A = dt(), O = et(), E = J();
  let w = class extends A.Shape {
    _sceneFunc(c) {
      c.beginPath(), c.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), c.closePath(), c.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(c) {
      this.radius() !== c / 2 && this.radius(c / 2);
    }
    setHeight(c) {
      this.radius() !== c / 2 && this.radius(c / 2);
    }
  };
  return he.Circle = w, w.prototype._centroid = !0, w.prototype.className = "Circle", w.prototype._attrsAffectingSize = ["radius"], (0, E._registerNode)(w), h.Factory.addGetterSetter(w, "radius", 0, (0, O.getNumberValidator)()), he;
}
var ce = {}, qi;
function nr() {
  if (qi) return ce;
  qi = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.Ellipse = void 0;
  const h = tt(), A = dt(), O = et(), E = J();
  let w = class extends A.Shape {
    _sceneFunc(c) {
      const o = this.radiusX(), g = this.radiusY();
      c.beginPath(), c.save(), o !== g && c.scale(1, g / o), c.arc(0, 0, o, 0, Math.PI * 2, !1), c.restore(), c.closePath(), c.fillStrokeShape(this);
    }
    getWidth() {
      return this.radiusX() * 2;
    }
    getHeight() {
      return this.radiusY() * 2;
    }
    setWidth(c) {
      this.radiusX(c / 2);
    }
    setHeight(c) {
      this.radiusY(c / 2);
    }
  };
  return ce.Ellipse = w, w.prototype.className = "Ellipse", w.prototype._centroid = !0, w.prototype._attrsAffectingSize = ["radiusX", "radiusY"], (0, E._registerNode)(w), h.Factory.addComponentsGetterSetter(w, "radius", ["x", "y"]), h.Factory.addGetterSetter(w, "radiusX", 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(w, "radiusY", 0, (0, O.getNumberValidator)()), ce;
}
var de = {}, Wi;
function rr() {
  if (Wi) return de;
  Wi = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.Image = void 0;
  const h = st(), A = tt(), O = dt(), E = J(), w = et();
  let y = class Ln extends O.Shape {
    constructor(o) {
      super(o), this.on("imageChange.konva", () => {
        this._setImageLoad();
      }), this._setImageLoad();
    }
    _setImageLoad() {
      const o = this.image();
      o && o.complete || o && o.readyState === 4 || o && o.addEventListener && o.addEventListener("load", () => {
        this._requestDraw();
      });
    }
    _useBufferCanvas() {
      const o = !!this.cornerRadius(), g = this.hasShadow();
      return o && g ? !0 : super._useBufferCanvas(!0);
    }
    _sceneFunc(o) {
      const g = this.getWidth(), v = this.getHeight(), m = this.cornerRadius(), C = this.attrs.image;
      let P;
      if (C) {
        const u = this.attrs.cropWidth, l = this.attrs.cropHeight;
        u && l ? P = [
          C,
          this.cropX(),
          this.cropY(),
          u,
          l,
          0,
          0,
          g,
          v
        ] : P = [C, 0, 0, g, v];
      }
      (this.hasFill() || this.hasStroke() || m) && (o.beginPath(), m ? h.Util.drawRoundedRectPath(o, g, v, m) : o.rect(0, 0, g, v), o.closePath(), o.fillStrokeShape(this)), C && (m && o.clip(), o.drawImage.apply(o, P));
    }
    _hitFunc(o) {
      const g = this.width(), v = this.height(), m = this.cornerRadius();
      o.beginPath(), m ? h.Util.drawRoundedRectPath(o, g, v, m) : o.rect(0, 0, g, v), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      var o, g;
      return (o = this.attrs.width) !== null && o !== void 0 ? o : (g = this.image()) === null || g === void 0 ? void 0 : g.width;
    }
    getHeight() {
      var o, g;
      return (o = this.attrs.height) !== null && o !== void 0 ? o : (g = this.image()) === null || g === void 0 ? void 0 : g.height;
    }
    static fromURL(o, g, v = null) {
      const m = h.Util.createImageElement();
      m.onload = function() {
        const C = new Ln({
          image: m
        });
        g(C);
      }, m.onerror = v, m.crossOrigin = "Anonymous", m.src = o;
    }
  };
  return de.Image = y, y.prototype.className = "Image", (0, E._registerNode)(y), A.Factory.addGetterSetter(y, "cornerRadius", 0, (0, w.getNumberOrArrayOfNumbersValidator)(4)), A.Factory.addGetterSetter(y, "image"), A.Factory.addComponentsGetterSetter(y, "crop", ["x", "y", "width", "height"]), A.Factory.addGetterSetter(y, "cropX", 0, (0, w.getNumberValidator)()), A.Factory.addGetterSetter(y, "cropY", 0, (0, w.getNumberValidator)()), A.Factory.addGetterSetter(y, "cropWidth", 0, (0, w.getNumberValidator)()), A.Factory.addGetterSetter(y, "cropHeight", 0, (0, w.getNumberValidator)()), de;
}
var Wt = {}, zi;
function ar() {
  if (zi) return Wt;
  zi = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.Tag = Wt.Label = void 0;
  const h = tt(), A = dt(), O = fi(), E = et(), w = J(), y = [
    "fontFamily",
    "fontSize",
    "fontStyle",
    "padding",
    "lineHeight",
    "text",
    "width",
    "height",
    "pointerDirection",
    "pointerWidth",
    "pointerHeight"
  ], c = "Change.konva", o = "none", g = "up", v = "right", m = "down", C = "left", P = y.length;
  let u = class extends O.Group {
    constructor(x) {
      super(x), this.on("add.konva", function(F) {
        this._addListeners(F.child), this._sync();
      });
    }
    getText() {
      return this.find("Text")[0];
    }
    getTag() {
      return this.find("Tag")[0];
    }
    _addListeners(x) {
      let F = this, n;
      const s = function() {
        F._sync();
      };
      for (n = 0; n < P; n++)
        x.on(y[n] + c, s);
    }
    getWidth() {
      return this.getText().width();
    }
    getHeight() {
      return this.getText().height();
    }
    _sync() {
      let x = this.getText(), F = this.getTag(), n, s, _, k, M, G, r;
      if (x && F) {
        switch (n = x.width(), s = x.height(), _ = F.pointerDirection(), k = F.pointerWidth(), r = F.pointerHeight(), M = 0, G = 0, _) {
          case g:
            M = n / 2, G = -1 * r;
            break;
          case v:
            M = n + k, G = s / 2;
            break;
          case m:
            M = n / 2, G = s + r;
            break;
          case C:
            M = -1 * k, G = s / 2;
            break;
        }
        F.setAttrs({
          x: -1 * M,
          y: -1 * G,
          width: n,
          height: s
        }), x.setAttrs({
          x: -1 * M,
          y: -1 * G
        });
      }
    }
  };
  Wt.Label = u, u.prototype.className = "Label", (0, w._registerNode)(u);
  class l extends A.Shape {
    _sceneFunc(x) {
      const F = this.width(), n = this.height(), s = this.pointerDirection(), _ = this.pointerWidth(), k = this.pointerHeight(), M = this.cornerRadius();
      let G = 0, r = 0, d = 0, e = 0;
      typeof M == "number" ? G = r = d = e = Math.min(M, F / 2, n / 2) : (G = Math.min(M[0] || 0, F / 2, n / 2), r = Math.min(M[1] || 0, F / 2, n / 2), e = Math.min(M[2] || 0, F / 2, n / 2), d = Math.min(M[3] || 0, F / 2, n / 2)), x.beginPath(), x.moveTo(G, 0), s === g && (x.lineTo((F - _) / 2, 0), x.lineTo(F / 2, -1 * k), x.lineTo((F + _) / 2, 0)), x.lineTo(F - r, 0), x.arc(F - r, r, r, Math.PI * 3 / 2, 0, !1), s === v && (x.lineTo(F, (n - k) / 2), x.lineTo(F + _, n / 2), x.lineTo(F, (n + k) / 2)), x.lineTo(F, n - e), x.arc(F - e, n - e, e, 0, Math.PI / 2, !1), s === m && (x.lineTo((F + _) / 2, n), x.lineTo(F / 2, n + k), x.lineTo((F - _) / 2, n)), x.lineTo(d, n), x.arc(d, n - d, d, Math.PI / 2, Math.PI, !1), s === C && (x.lineTo(0, (n + k) / 2), x.lineTo(-1 * _, n / 2), x.lineTo(0, (n - k) / 2)), x.lineTo(0, G), x.arc(G, G, G, Math.PI, Math.PI * 3 / 2, !1), x.closePath(), x.fillStrokeShape(this);
    }
    getSelfRect() {
      let x = 0, F = 0, n = this.pointerWidth(), s = this.pointerHeight(), _ = this.pointerDirection(), k = this.width(), M = this.height();
      return _ === g ? (F -= s, M += s) : _ === m ? M += s : _ === C ? (x -= n * 1.5, k += n) : _ === v && (k += n * 1.5), {
        x,
        y: F,
        width: k,
        height: M
      };
    }
  }
  return Wt.Tag = l, l.prototype.className = "Tag", (0, w._registerNode)(l), h.Factory.addGetterSetter(l, "pointerDirection", o), h.Factory.addGetterSetter(l, "pointerWidth", 0, (0, E.getNumberValidator)()), h.Factory.addGetterSetter(l, "pointerHeight", 0, (0, E.getNumberValidator)()), h.Factory.addGetterSetter(l, "cornerRadius", 0, (0, E.getNumberOrArrayOfNumbersValidator)(4)), Wt;
}
var ue = {}, Xi;
function Dn() {
  if (Xi) return ue;
  Xi = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.Rect = void 0;
  const h = tt(), A = dt(), O = J(), E = st(), w = et();
  let y = class extends A.Shape {
    _sceneFunc(o) {
      const g = this.cornerRadius(), v = this.width(), m = this.height();
      o.beginPath(), g ? E.Util.drawRoundedRectPath(o, v, m, g) : o.rect(0, 0, v, m), o.closePath(), o.fillStrokeShape(this);
    }
  };
  return ue.Rect = y, y.prototype.className = "Rect", (0, O._registerNode)(y), h.Factory.addGetterSetter(y, "cornerRadius", 0, (0, w.getNumberOrArrayOfNumbersValidator)(4)), ue;
}
var fe = {}, Yi;
function sr() {
  if (Yi) return fe;
  Yi = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.RegularPolygon = void 0;
  const h = tt(), A = dt(), O = et(), E = J();
  let w = class extends A.Shape {
    _sceneFunc(c) {
      const o = this._getPoints();
      c.beginPath(), c.moveTo(o[0].x, o[0].y);
      for (let g = 1; g < o.length; g++)
        c.lineTo(o[g].x, o[g].y);
      c.closePath(), c.fillStrokeShape(this);
    }
    _getPoints() {
      const c = this.attrs.sides, o = this.attrs.radius || 0, g = [];
      for (let v = 0; v < c; v++)
        g.push({
          x: o * Math.sin(v * 2 * Math.PI / c),
          y: -1 * o * Math.cos(v * 2 * Math.PI / c)
        });
      return g;
    }
    getSelfRect() {
      const c = this._getPoints();
      let o = c[0].x, g = c[0].y, v = c[0].x, m = c[0].y;
      return c.forEach((C) => {
        o = Math.min(o, C.x), g = Math.max(g, C.x), v = Math.min(v, C.y), m = Math.max(m, C.y);
      }), {
        x: o,
        y: v,
        width: g - o,
        height: m - v
      };
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(c) {
      this.radius(c / 2);
    }
    setHeight(c) {
      this.radius(c / 2);
    }
  };
  return fe.RegularPolygon = w, w.prototype.className = "RegularPolygon", w.prototype._centroid = !0, w.prototype._attrsAffectingSize = ["radius"], (0, E._registerNode)(w), h.Factory.addGetterSetter(w, "radius", 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(w, "sides", 0, (0, O.getNumberValidator)()), fe;
}
var ge = {}, Ki;
function or() {
  if (Ki) return ge;
  Ki = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.Ring = void 0;
  const h = tt(), A = dt(), O = et(), E = J(), w = Math.PI * 2;
  let y = class extends A.Shape {
    _sceneFunc(o) {
      o.beginPath(), o.arc(0, 0, this.innerRadius(), 0, w, !1), o.moveTo(this.outerRadius(), 0), o.arc(0, 0, this.outerRadius(), w, 0, !0), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(o) {
      this.outerRadius(o / 2);
    }
    setHeight(o) {
      this.outerRadius(o / 2);
    }
  };
  return ge.Ring = y, y.prototype.className = "Ring", y.prototype._centroid = !0, y.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, E._registerNode)(y), h.Factory.addGetterSetter(y, "innerRadius", 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(y, "outerRadius", 0, (0, O.getNumberValidator)()), ge;
}
var pe = {}, $i;
function lr() {
  if ($i) return pe;
  $i = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.Sprite = void 0;
  const h = tt(), A = dt(), O = gi(), E = et(), w = J();
  let y = class extends A.Shape {
    constructor(o) {
      super(o), this._updated = !0, this.anim = new O.Animation(() => {
        const g = this._updated;
        return this._updated = !1, g;
      }), this.on("animationChange.konva", function() {
        this.frameIndex(0);
      }), this.on("frameIndexChange.konva", function() {
        this._updated = !0;
      }), this.on("frameRateChange.konva", function() {
        this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
      });
    }
    _sceneFunc(o) {
      const g = this.animation(), v = this.frameIndex(), m = v * 4, C = this.animations()[g], P = this.frameOffsets(), u = C[m + 0], l = C[m + 1], b = C[m + 2], x = C[m + 3], F = this.image();
      if ((this.hasFill() || this.hasStroke()) && (o.beginPath(), o.rect(0, 0, b, x), o.closePath(), o.fillStrokeShape(this)), F)
        if (P) {
          const n = P[g], s = v * 2;
          o.drawImage(F, u, l, b, x, n[s + 0], n[s + 1], b, x);
        } else
          o.drawImage(F, u, l, b, x, 0, 0, b, x);
    }
    _hitFunc(o) {
      const g = this.animation(), v = this.frameIndex(), m = v * 4, C = this.animations()[g], P = this.frameOffsets(), u = C[m + 2], l = C[m + 3];
      if (o.beginPath(), P) {
        const b = P[g], x = v * 2;
        o.rect(b[x + 0], b[x + 1], u, l);
      } else
        o.rect(0, 0, u, l);
      o.closePath(), o.fillShape(this);
    }
    _useBufferCanvas() {
      return super._useBufferCanvas(!0);
    }
    _setInterval() {
      const o = this;
      this.interval = setInterval(function() {
        o._updateIndex();
      }, 1e3 / this.frameRate());
    }
    start() {
      if (this.isRunning())
        return;
      const o = this.getLayer();
      this.anim.setLayers(o), this._setInterval(), this.anim.start();
    }
    stop() {
      this.anim.stop(), clearInterval(this.interval);
    }
    isRunning() {
      return this.anim.isRunning();
    }
    _updateIndex() {
      const o = this.frameIndex(), g = this.animation(), v = this.animations(), m = v[g], C = m.length / 4;
      o < C - 1 ? this.frameIndex(o + 1) : this.frameIndex(0);
    }
  };
  return pe.Sprite = y, y.prototype.className = "Sprite", (0, w._registerNode)(y), h.Factory.addGetterSetter(y, "animation"), h.Factory.addGetterSetter(y, "animations"), h.Factory.addGetterSetter(y, "frameOffsets"), h.Factory.addGetterSetter(y, "image"), h.Factory.addGetterSetter(y, "frameIndex", 0, (0, E.getNumberValidator)()), h.Factory.addGetterSetter(y, "frameRate", 17, (0, E.getNumberValidator)()), h.Factory.backCompat(y, {
    index: "frameIndex",
    getIndex: "getFrameIndex",
    setIndex: "setFrameIndex"
  }), pe;
}
var _e = {}, ji;
function hr() {
  if (ji) return _e;
  ji = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.Star = void 0;
  const h = tt(), A = dt(), O = et(), E = J();
  let w = class extends A.Shape {
    _sceneFunc(c) {
      const o = this.innerRadius(), g = this.outerRadius(), v = this.numPoints();
      c.beginPath(), c.moveTo(0, 0 - g);
      for (let m = 1; m < v * 2; m++) {
        const C = m % 2 === 0 ? g : o, P = C * Math.sin(m * Math.PI / v), u = -1 * C * Math.cos(m * Math.PI / v);
        c.lineTo(P, u);
      }
      c.closePath(), c.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(c) {
      this.outerRadius(c / 2);
    }
    setHeight(c) {
      this.outerRadius(c / 2);
    }
  };
  return _e.Star = w, w.prototype.className = "Star", w.prototype._centroid = !0, w.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, E._registerNode)(w), h.Factory.addGetterSetter(w, "numPoints", 5, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(w, "innerRadius", 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(w, "outerRadius", 0, (0, O.getNumberValidator)()), _e;
}
var Kt = {}, Qi;
function In() {
  if (Qi) return Kt;
  Qi = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.Text = void 0, Kt.stringToArray = c;
  const h = st(), A = tt(), O = dt(), E = J(), w = et(), y = J();
  function c(V) {
    return [...V].reduce((B, H, q, W) => {
      if (new RegExp("\\p{Emoji}", "u").test(H)) {
        const L = W[q + 1];
        L && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(L) ? (B.push(H + L), W[q + 1] = "") : B.push(H);
      } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(H + (W[q + 1] || "")) ? B.push(H + W[q + 1]) : q > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(H) ? B[B.length - 1] += H : H && B.push(H);
      return B;
    }, []);
  }
  const o = "auto", g = "center", v = "inherit", m = "justify", C = "Change.konva", P = "2d", u = "-", l = "left", b = "text", x = "Text", F = "top", n = "bottom", s = "middle", _ = "normal", k = "px ", M = " ", G = "right", r = "rtl", d = "word", e = "char", f = "none", T = "…", t = [
    "direction",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontVariant",
    "padding",
    "align",
    "verticalAlign",
    "lineHeight",
    "text",
    "width",
    "height",
    "wrap",
    "ellipsis",
    "letterSpacing"
  ], a = t.length;
  function i(V) {
    return V.split(",").map((B) => {
      B = B.trim();
      const H = B.indexOf(" ") >= 0, q = B.indexOf('"') >= 0 || B.indexOf("'") >= 0;
      return H && !q && (B = `"${B}"`), B;
    }).join(", ");
  }
  let p;
  function S() {
    return p || (p = h.Util.createCanvasElement().getContext(P), p);
  }
  function R(V) {
    V.fillText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function N(V) {
    V.setAttr("miterLimit", 2), V.strokeText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function I(V) {
    return V = V || {}, !V.fillLinearGradientColorStops && !V.fillRadialGradientColorStops && !V.fillPatternImage && (V.fill = V.fill || "black"), V;
  }
  let D = class extends O.Shape {
    constructor(B) {
      super(I(B)), this._partialTextX = 0, this._partialTextY = 0;
      for (let H = 0; H < a; H++)
        this.on(t[H] + C, this._setTextData);
      this._setTextData();
    }
    _sceneFunc(B) {
      const H = this.textArr, q = H.length;
      if (!this.text())
        return;
      let W = this.padding(), L = this.fontSize(), U = this.lineHeight() * L, X = this.verticalAlign(), z = this.direction(), Y = 0, $ = this.align(), Q = this.getWidth(), j = this.letterSpacing(), K = this.fill(), ht = this.textDecoration(), it = ht.indexOf("underline") !== -1, lt = ht.indexOf("line-through") !== -1, Xt;
      z = z === v ? B.direction : z;
      let vt = U / 2, jt = s;
      if (E.Konva._fixTextRendering) {
        const It = this.measureSize("M");
        jt = "alphabetic", vt = (It.fontBoundingBoxAscent - It.fontBoundingBoxDescent) / 2 + U / 2;
      }
      var at = 0, yt = 0;
      for (z === r && B.setAttr("direction", z), B.setAttr("font", this._getContextFont()), B.setAttr("textBaseline", jt), B.setAttr("textAlign", l), X === s ? Y = (this.getHeight() - q * U - W * 2) / 2 : X === n && (Y = this.getHeight() - q * U - W * 2), B.translate(W, Y + W), Xt = 0; Xt < q; Xt++) {
        var at = 0, yt = 0, Tt = H[Xt], Rt = Tt.text, gt = Tt.width, Dt = Tt.lastInParagraph, Ft, Vt;
        if (B.save(), $ === G ? at += Q - gt - W * 2 : $ === g && (at += (Q - gt - W * 2) / 2), it) {
          B.save(), B.beginPath();
          const At = E.Konva._fixTextRendering ? Math.round(L / 4) : Math.round(L / 2), kt = at, wt = vt + yt + At;
          B.moveTo(kt, wt), Ft = Rt.split(" ").length - 1, Vt = $ === m && !Dt ? Q - W * 2 : gt, B.lineTo(kt + Math.round(Vt), wt), B.lineWidth = L / 15;
          const ze = this._getLinearGradient();
          B.strokeStyle = ze || K, B.stroke(), B.restore();
        }
        if (lt) {
          B.save(), B.beginPath();
          const At = E.Konva._fixTextRendering ? -Math.round(L / 4) : 0;
          B.moveTo(at, vt + yt + At), Ft = Rt.split(" ").length - 1, Vt = $ === m && !Dt ? Q - W * 2 : gt, B.lineTo(at + Math.round(Vt), vt + yt + At), B.lineWidth = L / 15;
          const kt = this._getLinearGradient();
          B.strokeStyle = kt || K, B.stroke(), B.restore();
        }
        if (z !== r && (j !== 0 || $ === m)) {
          Ft = Rt.split(" ").length - 1;
          const At = c(Rt);
          for (let kt = 0; kt < At.length; kt++) {
            const wt = At[kt];
            wt === " " && !Dt && $ === m && (at += (Q - W * 2 - gt) / Ft), this._partialTextX = at, this._partialTextY = vt + yt, this._partialText = wt, B.fillStrokeShape(this), at += this.measureSize(wt).width + j;
          }
        } else
          j !== 0 && B.setAttr("letterSpacing", `${j}px`), this._partialTextX = at, this._partialTextY = vt + yt, this._partialText = Rt, B.fillStrokeShape(this);
        B.restore(), q > 1 && (vt += U);
      }
    }
    _hitFunc(B) {
      const H = this.getWidth(), q = this.getHeight();
      B.beginPath(), B.rect(0, 0, H, q), B.closePath(), B.fillStrokeShape(this);
    }
    setText(B) {
      const H = h.Util._isString(B) ? B : B == null ? "" : B + "";
      return this._setAttr(b, H), this;
    }
    getWidth() {
      return this.attrs.width === o || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
    }
    getHeight() {
      return this.attrs.height === o || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return h.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    measureSize(B) {
      var H, q, W, L, U, X, z, Y, $, Q, j;
      let K = S(), ht = this.fontSize(), it;
      K.save(), K.font = this._getContextFont(), it = K.measureText(B), K.restore();
      const lt = ht / 100;
      return {
        actualBoundingBoxAscent: (H = it.actualBoundingBoxAscent) !== null && H !== void 0 ? H : 71.58203125 * lt,
        actualBoundingBoxDescent: (q = it.actualBoundingBoxDescent) !== null && q !== void 0 ? q : 0,
        actualBoundingBoxLeft: (W = it.actualBoundingBoxLeft) !== null && W !== void 0 ? W : -7.421875 * lt,
        actualBoundingBoxRight: (L = it.actualBoundingBoxRight) !== null && L !== void 0 ? L : 75.732421875 * lt,
        alphabeticBaseline: (U = it.alphabeticBaseline) !== null && U !== void 0 ? U : 0,
        emHeightAscent: (X = it.emHeightAscent) !== null && X !== void 0 ? X : 100 * lt,
        emHeightDescent: (z = it.emHeightDescent) !== null && z !== void 0 ? z : -20 * lt,
        fontBoundingBoxAscent: (Y = it.fontBoundingBoxAscent) !== null && Y !== void 0 ? Y : 91 * lt,
        fontBoundingBoxDescent: ($ = it.fontBoundingBoxDescent) !== null && $ !== void 0 ? $ : 21 * lt,
        hangingBaseline: (Q = it.hangingBaseline) !== null && Q !== void 0 ? Q : 72.80000305175781 * lt,
        ideographicBaseline: (j = it.ideographicBaseline) !== null && j !== void 0 ? j : -21 * lt,
        width: it.width,
        height: ht
      };
    }
    _getContextFont() {
      return this.fontStyle() + M + this.fontVariant() + M + (this.fontSize() + k) + i(this.fontFamily());
    }
    _addTextLine(B) {
      this.align() === m && (B = B.trim());
      const q = this._getTextWidth(B);
      return this.textArr.push({
        text: B,
        width: q,
        lastInParagraph: !1
      });
    }
    _getTextWidth(B) {
      const H = this.letterSpacing(), q = B.length;
      return S().measureText(B).width + H * q;
    }
    _setTextData() {
      let B = this.text().split(`
`), H = +this.fontSize(), q = 0, W = this.lineHeight() * H, L = this.attrs.width, U = this.attrs.height, X = L !== o && L !== void 0, z = U !== o && U !== void 0, Y = this.padding(), $ = L - Y * 2, Q = U - Y * 2, j = 0, K = this.wrap(), ht = K !== f, it = K !== e && ht, lt = this.ellipsis();
      this.textArr = [], S().font = this._getContextFont();
      const Xt = lt ? this._getTextWidth(T) : 0;
      for (let vt = 0, jt = B.length; vt < jt; ++vt) {
        let at = B[vt], yt = this._getTextWidth(at);
        if (X && yt > $)
          for (; at.length > 0; ) {
            let Tt = 0, Rt = c(at).length, gt = "", Dt = 0;
            for (; Tt < Rt; ) {
              const Ft = Tt + Rt >>> 1, Vt = c(at), It = Vt.slice(0, Ft + 1).join(""), Ht = this._getTextWidth(It) + Xt;
              Ht <= $ ? (Tt = Ft + 1, gt = It, Dt = Ht) : Rt = Ft;
            }
            if (gt) {
              if (it) {
                const It = c(at), Ht = c(gt), At = It[Ht.length], kt = At === M || At === u;
                let wt;
                if (kt && Dt <= $)
                  wt = Ht.length;
                else {
                  const ze = Ht.lastIndexOf(M), qn = Ht.lastIndexOf(u);
                  wt = Math.max(ze, qn) + 1;
                }
                wt > 0 && (Tt = wt, gt = It.slice(0, Tt).join(""), Dt = this._getTextWidth(gt));
              }
              if (gt = gt.trimRight(), this._addTextLine(gt), q = Math.max(q, Dt), j += W, this._shouldHandleEllipsis(j)) {
                this._tryToAddEllipsisToLastLine();
                break;
              }
              if (at = c(at).slice(Tt).join("").trimLeft(), at.length > 0 && (yt = this._getTextWidth(at), yt <= $)) {
                this._addTextLine(at), j += W, q = Math.max(q, yt);
                break;
              }
            } else
              break;
          }
        else
          this._addTextLine(at), j += W, q = Math.max(q, yt), this._shouldHandleEllipsis(j) && vt < jt - 1 && this._tryToAddEllipsisToLastLine();
        if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), z && j + W > Q)
          break;
      }
      this.textHeight = H, this.textWidth = q;
    }
    _shouldHandleEllipsis(B) {
      const H = +this.fontSize(), q = this.lineHeight() * H, W = this.attrs.height, L = W !== o && W !== void 0, U = this.padding(), X = W - U * 2;
      return !(this.wrap() !== f) || L && B + q > X;
    }
    _tryToAddEllipsisToLastLine() {
      const B = this.attrs.width, H = B !== o && B !== void 0, q = this.padding(), W = B - q * 2, L = this.ellipsis(), U = this.textArr[this.textArr.length - 1];
      !U || !L || (H && (this._getTextWidth(U.text + T) < W || (U.text = U.text.slice(0, U.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(U.text + T));
    }
    getStrokeScaleEnabled() {
      return !0;
    }
    _useBufferCanvas() {
      const B = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, H = this.hasShadow();
      return B && H ? !0 : super._useBufferCanvas();
    }
  };
  return Kt.Text = D, D.prototype._fillFunc = R, D.prototype._strokeFunc = N, D.prototype.className = x, D.prototype._attrsAffectingSize = [
    "text",
    "fontSize",
    "padding",
    "wrap",
    "lineHeight",
    "letterSpacing"
  ], (0, y._registerNode)(D), A.Factory.overWriteSetter(D, "width", (0, w.getNumberOrAutoValidator)()), A.Factory.overWriteSetter(D, "height", (0, w.getNumberOrAutoValidator)()), A.Factory.addGetterSetter(D, "direction", v), A.Factory.addGetterSetter(D, "fontFamily", "Arial"), A.Factory.addGetterSetter(D, "fontSize", 12, (0, w.getNumberValidator)()), A.Factory.addGetterSetter(D, "fontStyle", _), A.Factory.addGetterSetter(D, "fontVariant", _), A.Factory.addGetterSetter(D, "padding", 0, (0, w.getNumberValidator)()), A.Factory.addGetterSetter(D, "align", l), A.Factory.addGetterSetter(D, "verticalAlign", F), A.Factory.addGetterSetter(D, "lineHeight", 1, (0, w.getNumberValidator)()), A.Factory.addGetterSetter(D, "wrap", d), A.Factory.addGetterSetter(D, "ellipsis", !1, (0, w.getBooleanValidator)()), A.Factory.addGetterSetter(D, "letterSpacing", 0, (0, w.getNumberValidator)()), A.Factory.addGetterSetter(D, "text", "", (0, w.getStringValidator)()), A.Factory.addGetterSetter(D, "textDecoration", ""), Kt;
}
var me = {}, Zi;
function cr() {
  if (Zi) return me;
  Zi = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.TextPath = void 0;
  const h = st(), A = tt(), O = dt(), E = pi(), w = In(), y = et(), c = J(), o = "", g = "normal";
  function v(P) {
    P.fillText(this.partialText, 0, 0);
  }
  function m(P) {
    P.strokeText(this.partialText, 0, 0);
  }
  let C = class extends O.Shape {
    constructor(u) {
      super(u), this.dummyCanvas = h.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute(), this._setTextData();
      }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
    }
    _getTextPathLength() {
      return E.Path.getPathLength(this.dataArray);
    }
    _getPointAtLength(u) {
      if (!this.attrs.data)
        return null;
      const l = this.pathLength;
      return u - 1 > l ? null : E.Path.getPointAtLengthOfDataArray(u, this.dataArray);
    }
    _readDataAttribute() {
      this.dataArray = E.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
    }
    _sceneFunc(u) {
      u.setAttr("font", this._getContextFont()), u.setAttr("textBaseline", this.textBaseline()), u.setAttr("textAlign", "left"), u.save();
      const l = this.textDecoration(), b = this.fill(), x = this.fontSize(), F = this.glyphInfo;
      l === "underline" && u.beginPath();
      for (let n = 0; n < F.length; n++) {
        u.save();
        const s = F[n].p0;
        u.translate(s.x, s.y), u.rotate(F[n].rotation), this.partialText = F[n].text, u.fillStrokeShape(this), l === "underline" && (n === 0 && u.moveTo(0, x / 2 + 1), u.lineTo(x, x / 2 + 1)), u.restore();
      }
      l === "underline" && (u.strokeStyle = b, u.lineWidth = x / 20, u.stroke()), u.restore();
    }
    _hitFunc(u) {
      u.beginPath();
      const l = this.glyphInfo;
      if (l.length >= 1) {
        const b = l[0].p0;
        u.moveTo(b.x, b.y);
      }
      for (let b = 0; b < l.length; b++) {
        const x = l[b].p1;
        u.lineTo(x.x, x.y);
      }
      u.setAttr("lineWidth", this.fontSize()), u.setAttr("strokeStyle", this.colorKey), u.stroke();
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return h.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    setText(u) {
      return w.Text.prototype.setText.call(this, u);
    }
    _getContextFont() {
      return w.Text.prototype._getContextFont.call(this);
    }
    _getTextSize(u) {
      const b = this.dummyCanvas.getContext("2d");
      b.save(), b.font = this._getContextFont();
      const x = b.measureText(u);
      return b.restore(), {
        width: x.width,
        height: parseInt(`${this.fontSize()}`, 10)
      };
    }
    _setTextData() {
      const { width: u, height: l } = this._getTextSize(this.attrs.text);
      if (this.textWidth = u, this.textHeight = l, this.glyphInfo = [], !this.attrs.data)
        return null;
      const b = this.letterSpacing(), x = this.align(), F = this.kerningFunc(), n = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * b, 0);
      let s = 0;
      x === "center" && (s = Math.max(0, this.pathLength / 2 - n / 2)), x === "right" && (s = Math.max(0, this.pathLength - n));
      const _ = (0, w.stringToArray)(this.text());
      let k = s;
      for (let M = 0; M < _.length; M++) {
        const G = this._getPointAtLength(k);
        if (!G)
          return;
        let r = this._getTextSize(_[M]).width + b;
        if (_[M] === " " && x === "justify") {
          const a = this.text().split(" ").length - 1;
          r += (this.pathLength - n) / a;
        }
        const d = this._getPointAtLength(k + r);
        if (!d)
          return;
        const e = E.Path.getLineLength(G.x, G.y, d.x, d.y);
        let f = 0;
        if (F)
          try {
            f = F(_[M - 1], _[M]) * this.fontSize();
          } catch {
            f = 0;
          }
        G.x += f, d.x += f, this.textWidth += f;
        const T = E.Path.getPointOnLine(f + e / 2, G.x, G.y, d.x, d.y), t = Math.atan2(d.y - G.y, d.x - G.x);
        this.glyphInfo.push({
          transposeX: T.x,
          transposeY: T.y,
          text: _[M],
          rotation: t,
          p0: G,
          p1: d
        }), k += r;
      }
    }
    getSelfRect() {
      if (!this.glyphInfo.length)
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      const u = [];
      this.glyphInfo.forEach(function(k) {
        u.push(k.p0.x), u.push(k.p0.y), u.push(k.p1.x), u.push(k.p1.y);
      });
      let l = u[0] || 0, b = u[0] || 0, x = u[1] || 0, F = u[1] || 0, n, s;
      for (let k = 0; k < u.length / 2; k++)
        n = u[k * 2], s = u[k * 2 + 1], l = Math.min(l, n), b = Math.max(b, n), x = Math.min(x, s), F = Math.max(F, s);
      const _ = this.fontSize();
      return {
        x: l - _ / 2,
        y: x - _ / 2,
        width: b - l + _,
        height: F - x + _
      };
    }
    destroy() {
      return h.Util.releaseCanvas(this.dummyCanvas), super.destroy();
    }
  };
  return me.TextPath = C, C.prototype._fillFunc = v, C.prototype._strokeFunc = m, C.prototype._fillFuncHit = v, C.prototype._strokeFuncHit = m, C.prototype.className = "TextPath", C.prototype._attrsAffectingSize = ["text", "fontSize", "data"], (0, c._registerNode)(C), A.Factory.addGetterSetter(C, "data"), A.Factory.addGetterSetter(C, "fontFamily", "Arial"), A.Factory.addGetterSetter(C, "fontSize", 12, (0, y.getNumberValidator)()), A.Factory.addGetterSetter(C, "fontStyle", g), A.Factory.addGetterSetter(C, "align", "left"), A.Factory.addGetterSetter(C, "letterSpacing", 0, (0, y.getNumberValidator)()), A.Factory.addGetterSetter(C, "textBaseline", "middle"), A.Factory.addGetterSetter(C, "fontVariant", g), A.Factory.addGetterSetter(C, "text", o), A.Factory.addGetterSetter(C, "textDecoration", ""), A.Factory.addGetterSetter(C, "kerningFunc", void 0), me;
}
var ve = {}, Ji;
function dr() {
  if (Ji) return ve;
  Ji = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.Transformer = void 0;
  const h = st(), A = tt(), O = ot(), E = dt(), w = Dn(), y = fi(), c = J(), o = et(), g = J(), v = "tr-konva", m = [
    "resizeEnabledChange",
    "rotateAnchorOffsetChange",
    "rotateEnabledChange",
    "enabledAnchorsChange",
    "anchorSizeChange",
    "borderEnabledChange",
    "borderStrokeChange",
    "borderStrokeWidthChange",
    "borderDashChange",
    "anchorStrokeChange",
    "anchorStrokeWidthChange",
    "anchorFillChange",
    "anchorCornerRadiusChange",
    "ignoreStrokeChange",
    "anchorStyleFuncChange"
  ].map((d) => d + `.${v}`).join(" "), C = "nodesRect", P = [
    "widthChange",
    "heightChange",
    "scaleXChange",
    "scaleYChange",
    "skewXChange",
    "skewYChange",
    "rotationChange",
    "offsetXChange",
    "offsetYChange",
    "transformsEnabledChange",
    "strokeWidthChange"
  ], u = {
    "top-left": -45,
    "top-center": 0,
    "top-right": 45,
    "middle-right": -90,
    "middle-left": 90,
    "bottom-left": -135,
    "bottom-center": 180,
    "bottom-right": 135
  }, l = "ontouchstart" in c.Konva._global;
  function b(d, e, f) {
    if (d === "rotater")
      return f;
    e += h.Util.degToRad(u[d] || 0);
    const T = (h.Util.radToDeg(e) % 360 + 360) % 360;
    return h.Util._inRange(T, 315 + 22.5, 360) || h.Util._inRange(T, 0, 22.5) ? "ns-resize" : h.Util._inRange(T, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : h.Util._inRange(T, 90 - 22.5, 90 + 22.5) ? "ew-resize" : h.Util._inRange(T, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : h.Util._inRange(T, 180 - 22.5, 180 + 22.5) ? "ns-resize" : h.Util._inRange(T, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : h.Util._inRange(T, 270 - 22.5, 270 + 22.5) ? "ew-resize" : h.Util._inRange(T, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (h.Util.error("Transformer has unknown angle for cursor detection: " + T), "pointer");
  }
  const x = [
    "top-left",
    "top-center",
    "top-right",
    "middle-right",
    "middle-left",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ], F = 1e8;
  function n(d) {
    return {
      x: d.x + d.width / 2 * Math.cos(d.rotation) + d.height / 2 * Math.sin(-d.rotation),
      y: d.y + d.height / 2 * Math.cos(d.rotation) + d.width / 2 * Math.sin(d.rotation)
    };
  }
  function s(d, e, f) {
    const T = f.x + (d.x - f.x) * Math.cos(e) - (d.y - f.y) * Math.sin(e), t = f.y + (d.x - f.x) * Math.sin(e) + (d.y - f.y) * Math.cos(e);
    return {
      ...d,
      rotation: d.rotation + e,
      x: T,
      y: t
    };
  }
  function _(d, e) {
    const f = n(d);
    return s(d, e, f);
  }
  function k(d, e, f) {
    let T = e;
    for (let t = 0; t < d.length; t++) {
      const a = c.Konva.getAngle(d[t]), i = Math.abs(a - e) % (Math.PI * 2);
      Math.min(i, Math.PI * 2 - i) < f && (T = a);
    }
    return T;
  }
  let M = 0, G = class extends y.Group {
    constructor(e) {
      super(e), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(m, this.update), this.getNode() && this.update();
    }
    attachTo(e) {
      return this.setNode(e), this;
    }
    setNode(e) {
      return h.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([e]);
    }
    getNode() {
      return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
      return v + this._id;
    }
    setNodes(e = []) {
      this._nodes && this._nodes.length && this.detach();
      const f = e.filter((t) => t.isAncestorOf(this) ? (h.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
      return this._nodes = e = f, e.length === 1 && this.useSingleNodeRotation() ? this.rotation(e[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((t) => {
        const a = () => {
          this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
        }, i = t._attrsAffectingSize.map((p) => p + "Change." + this._getEventNamespace()).join(" ");
        t.on(i, a), t.on(P.map((p) => p + `.${this._getEventNamespace()}`).join(" "), a), t.on(`absoluteTransformChange.${this._getEventNamespace()}`, a), this._proxyDrag(t);
      }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
    }
    _proxyDrag(e) {
      let f;
      e.on(`dragstart.${this._getEventNamespace()}`, (T) => {
        f = e.getAbsolutePosition(), !this.isDragging() && e !== this.findOne(".back") && this.startDrag(T, !1);
      }), e.on(`dragmove.${this._getEventNamespace()}`, (T) => {
        if (!f)
          return;
        const t = e.getAbsolutePosition(), a = t.x - f.x, i = t.y - f.y;
        this.nodes().forEach((p) => {
          if (p === e || p.isDragging())
            return;
          const S = p.getAbsolutePosition();
          p.setAbsolutePosition({
            x: S.x + a,
            y: S.y + i
          }), p.startDrag(T);
        }), f = null;
      });
    }
    getNodes() {
      return this._nodes || [];
    }
    getActiveAnchor() {
      return this._movingAnchorName;
    }
    detach() {
      this._nodes && this._nodes.forEach((e) => {
        e.off("." + this._getEventNamespace());
      }), this._nodes = [], this._resetTransformCache();
    }
    _resetTransformCache() {
      this._clearCache(C), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
    }
    _getNodeRect() {
      return this._getCache(C, this.__getNodeRect);
    }
    __getNodeShape(e, f = this.rotation(), T) {
      const t = e.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), a = e.getAbsoluteScale(T), i = e.getAbsolutePosition(T), p = t.x * a.x - e.offsetX() * a.x, S = t.y * a.y - e.offsetY() * a.y, R = (c.Konva.getAngle(e.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), N = {
        x: i.x + p * Math.cos(R) + S * Math.sin(-R),
        y: i.y + S * Math.cos(R) + p * Math.sin(R),
        width: t.width * a.x,
        height: t.height * a.y,
        rotation: R
      };
      return s(N, -c.Konva.getAngle(f), {
        x: 0,
        y: 0
      });
    }
    __getNodeRect() {
      if (!this.getNode())
        return {
          x: -F,
          y: -F,
          width: 0,
          height: 0,
          rotation: 0
        };
      const f = [];
      this.nodes().map((R) => {
        const N = R.getClientRect({
          skipTransform: !0,
          skipShadow: !0,
          skipStroke: this.ignoreStroke()
        }), I = [
          { x: N.x, y: N.y },
          { x: N.x + N.width, y: N.y },
          { x: N.x + N.width, y: N.y + N.height },
          { x: N.x, y: N.y + N.height }
        ], D = R.getAbsoluteTransform();
        I.forEach(function(V) {
          const B = D.point(V);
          f.push(B);
        });
      });
      const T = new h.Transform();
      T.rotate(-c.Konva.getAngle(this.rotation()));
      let t = 1 / 0, a = 1 / 0, i = -1 / 0, p = -1 / 0;
      f.forEach(function(R) {
        const N = T.point(R);
        t === void 0 && (t = i = N.x, a = p = N.y), t = Math.min(t, N.x), a = Math.min(a, N.y), i = Math.max(i, N.x), p = Math.max(p, N.y);
      }), T.invert();
      const S = T.point({ x: t, y: a });
      return {
        x: S.x,
        y: S.y,
        width: i - t,
        height: p - a,
        rotation: c.Konva.getAngle(this.rotation())
      };
    }
    getX() {
      return this._getNodeRect().x;
    }
    getY() {
      return this._getNodeRect().y;
    }
    getWidth() {
      return this._getNodeRect().width;
    }
    getHeight() {
      return this._getNodeRect().height;
    }
    _createElements() {
      this._createBack(), x.forEach((e) => {
        this._createAnchor(e);
      }), this._createAnchor("rotater");
    }
    _createAnchor(e) {
      const f = new w.Rect({
        stroke: "rgb(0, 161, 255)",
        fill: "white",
        strokeWidth: 1,
        name: e + " _anchor",
        dragDistance: 0,
        draggable: !0,
        hitStrokeWidth: l ? 10 : "auto"
      }), T = this;
      f.on("mousedown touchstart", function(t) {
        T._handleMouseDown(t);
      }), f.on("dragstart", (t) => {
        f.stopDrag(), t.cancelBubble = !0;
      }), f.on("dragend", (t) => {
        t.cancelBubble = !0;
      }), f.on("mouseenter", () => {
        const t = c.Konva.getAngle(this.rotation()), a = this.rotateAnchorCursor(), i = b(e, t, a);
        f.getStage().content && (f.getStage().content.style.cursor = i), this._cursorChange = !0;
      }), f.on("mouseout", () => {
        f.getStage().content && (f.getStage().content.style.cursor = ""), this._cursorChange = !1;
      }), this.add(f);
    }
    _createBack() {
      const e = new E.Shape({
        name: "back",
        width: 0,
        height: 0,
        draggable: !0,
        sceneFunc(f, T) {
          const t = T.getParent(), a = t.padding();
          f.beginPath(), f.rect(-a, -a, T.width() + a * 2, T.height() + a * 2), f.moveTo(T.width() / 2, -a), t.rotateEnabled() && t.rotateLineVisible() && f.lineTo(T.width() / 2, -t.rotateAnchorOffset() * h.Util._sign(T.height()) - a), f.fillStrokeShape(T);
        },
        hitFunc: (f, T) => {
          if (!this.shouldOverdrawWholeArea())
            return;
          const t = this.padding();
          f.beginPath(), f.rect(-t, -t, T.width() + t * 2, T.height() + t * 2), f.fillStrokeShape(T);
        }
      });
      this.add(e), this._proxyDrag(e), e.on("dragstart", (f) => {
        f.cancelBubble = !0;
      }), e.on("dragmove", (f) => {
        f.cancelBubble = !0;
      }), e.on("dragend", (f) => {
        f.cancelBubble = !0;
      }), this.on("dragmove", (f) => {
        this.update();
      });
    }
    _handleMouseDown(e) {
      if (this._transforming)
        return;
      this._movingAnchorName = e.target.name().split(" ")[0];
      const f = this._getNodeRect(), T = f.width, t = f.height, a = Math.sqrt(Math.pow(T, 2) + Math.pow(t, 2));
      this.sin = Math.abs(t / a), this.cos = Math.abs(T / a), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
      const i = e.target.getAbsolutePosition(), p = e.target.getStage().getPointerPosition();
      this._anchorDragOffset = {
        x: p.x - i.x,
        y: p.y - i.y
      }, M++, this._fire("transformstart", { evt: e.evt, target: this.getNode() }), this._nodes.forEach((S) => {
        S._fire("transformstart", { evt: e.evt, target: S });
      });
    }
    _handleMouseMove(e) {
      let f, T, t;
      const a = this.findOne("." + this._movingAnchorName), i = a.getStage();
      i.setPointersPositions(e);
      const p = i.getPointerPosition();
      let S = {
        x: p.x - this._anchorDragOffset.x,
        y: p.y - this._anchorDragOffset.y
      };
      const R = a.getAbsolutePosition();
      this.anchorDragBoundFunc() && (S = this.anchorDragBoundFunc()(R, S, e)), a.setAbsolutePosition(S);
      const N = a.getAbsolutePosition();
      if (R.x === N.x && R.y === N.y)
        return;
      if (this._movingAnchorName === "rotater") {
        const z = this._getNodeRect();
        f = a.x() - z.width / 2, T = -a.y() + z.height / 2;
        let Y = Math.atan2(-T, f) + Math.PI / 2;
        z.height < 0 && (Y -= Math.PI);
        const Q = c.Konva.getAngle(this.rotation()) + Y, j = c.Konva.getAngle(this.rotationSnapTolerance()), ht = k(this.rotationSnaps(), Q, j) - z.rotation, it = _(z, ht);
        this._fitNodesInto(it, e);
        return;
      }
      const I = this.shiftBehavior();
      let D;
      I === "inverted" ? D = this.keepRatio() && !e.shiftKey : I === "none" ? D = this.keepRatio() : D = this.keepRatio() || e.shiftKey;
      var W = this.centeredScaling() || e.altKey;
      if (this._movingAnchorName === "top-left") {
        if (D) {
          var V = W ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          t = Math.sqrt(Math.pow(V.x - a.x(), 2) + Math.pow(V.y - a.y(), 2));
          var B = this.findOne(".top-left").x() > V.x ? -1 : 1, H = this.findOne(".top-left").y() > V.y ? -1 : 1;
          f = t * this.cos * B, T = t * this.sin * H, this.findOne(".top-left").x(V.x - f), this.findOne(".top-left").y(V.y - T);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(a.y());
      else if (this._movingAnchorName === "top-right") {
        if (D) {
          var V = W ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          t = Math.sqrt(Math.pow(a.x() - V.x, 2) + Math.pow(V.y - a.y(), 2));
          var B = this.findOne(".top-right").x() < V.x ? -1 : 1, H = this.findOne(".top-right").y() > V.y ? -1 : 1;
          f = t * this.cos * B, T = t * this.sin * H, this.findOne(".top-right").x(V.x + f), this.findOne(".top-right").y(V.y - T);
        }
        var q = a.position();
        this.findOne(".top-left").y(q.y), this.findOne(".bottom-right").x(q.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(a.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(a.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (D) {
          var V = W ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          t = Math.sqrt(Math.pow(V.x - a.x(), 2) + Math.pow(a.y() - V.y, 2));
          var B = V.x < a.x() ? -1 : 1, H = a.y() < V.y ? -1 : 1;
          f = t * this.cos * B, T = t * this.sin * H, a.x(V.x - f), a.y(V.y + T);
        }
        q = a.position(), this.findOne(".top-left").x(q.x), this.findOne(".bottom-right").y(q.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(a.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (D) {
          var V = W ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          t = Math.sqrt(Math.pow(a.x() - V.x, 2) + Math.pow(a.y() - V.y, 2));
          var B = this.findOne(".bottom-right").x() < V.x ? -1 : 1, H = this.findOne(".bottom-right").y() < V.y ? -1 : 1;
          f = t * this.cos * B, T = t * this.sin * H, this.findOne(".bottom-right").x(V.x + f), this.findOne(".bottom-right").y(V.y + T);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      var W = this.centeredScaling() || e.altKey;
      if (W) {
        const z = this.findOne(".top-left"), Y = this.findOne(".bottom-right"), $ = z.x(), Q = z.y(), j = this.getWidth() - Y.x(), K = this.getHeight() - Y.y();
        Y.move({
          x: -$,
          y: -Q
        }), z.move({
          x: j,
          y: K
        });
      }
      const L = this.findOne(".top-left").getAbsolutePosition();
      f = L.x, T = L.y;
      const U = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), X = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: f,
        y: T,
        width: U,
        height: X,
        rotation: c.Konva.getAngle(this.rotation())
      }, e);
    }
    _handleMouseUp(e) {
      this._removeEvents(e);
    }
    getAbsoluteTransform() {
      return this.getTransform();
    }
    _removeEvents(e) {
      var f;
      if (this._transforming) {
        this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
        const T = this.getNode();
        M--, this._fire("transformend", { evt: e, target: T }), (f = this.getLayer()) === null || f === void 0 || f.batchDraw(), T && this._nodes.forEach((t) => {
          var a;
          t._fire("transformend", { evt: e, target: t }), (a = t.getLayer()) === null || a === void 0 || a.batchDraw();
        }), this._movingAnchorName = null;
      }
    }
    _fitNodesInto(e, f) {
      const T = this._getNodeRect(), t = 1;
      if (h.Util._inRange(e.width, -this.padding() * 2 - t, t)) {
        this.update();
        return;
      }
      if (h.Util._inRange(e.height, -this.padding() * 2 - t, t)) {
        this.update();
        return;
      }
      const a = new h.Transform();
      if (a.rotate(c.Konva.getAngle(this.rotation())), this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
        const D = a.point({
          x: -this.padding() * 2,
          y: 0
        });
        e.x += D.x, e.y += D.y, e.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= D.x, this._anchorDragOffset.y -= D.y;
      } else if (this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
        const D = a.point({
          x: this.padding() * 2,
          y: 0
        });
        this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= D.x, this._anchorDragOffset.y -= D.y, e.width += this.padding() * 2;
      }
      if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
        const D = a.point({
          x: 0,
          y: -this.padding() * 2
        });
        e.x += D.x, e.y += D.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= D.x, this._anchorDragOffset.y -= D.y, e.height += this.padding() * 2;
      } else if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
        const D = a.point({
          x: 0,
          y: this.padding() * 2
        });
        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= D.x, this._anchorDragOffset.y -= D.y, e.height += this.padding() * 2;
      }
      if (this.boundBoxFunc()) {
        const D = this.boundBoxFunc()(T, e);
        D ? e = D : h.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
      const i = 1e7, p = new h.Transform();
      p.translate(T.x, T.y), p.rotate(T.rotation), p.scale(T.width / i, T.height / i);
      const S = new h.Transform(), R = e.width / i, N = e.height / i;
      this.flipEnabled() === !1 ? (S.translate(e.x, e.y), S.rotate(e.rotation), S.translate(e.width < 0 ? e.width : 0, e.height < 0 ? e.height : 0), S.scale(Math.abs(R), Math.abs(N))) : (S.translate(e.x, e.y), S.rotate(e.rotation), S.scale(R, N));
      const I = S.multiply(p.invert());
      this._nodes.forEach((D) => {
        var V;
        const B = D.getParent().getAbsoluteTransform(), H = D.getTransform().copy();
        H.translate(D.offsetX(), D.offsetY());
        const q = new h.Transform();
        q.multiply(B.copy().invert()).multiply(I).multiply(B).multiply(H);
        const W = q.decompose();
        D.setAttrs(W), (V = D.getLayer()) === null || V === void 0 || V.batchDraw();
      }), this.rotation(h.Util._getRotation(e.rotation)), this._nodes.forEach((D) => {
        this._fire("transform", { evt: f, target: D }), D._fire("transform", { evt: f, target: D });
      }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
    }
    forceUpdate() {
      this._resetTransformCache(), this.update();
    }
    _batchChangeChild(e, f) {
      this.findOne(e).setAttrs(f);
    }
    update() {
      var e;
      const f = this._getNodeRect();
      this.rotation(h.Util._getRotation(f.rotation));
      const T = f.width, t = f.height, a = this.enabledAnchors(), i = this.resizeEnabled(), p = this.padding(), S = this.anchorSize(), R = this.find("._anchor");
      R.forEach((I) => {
        I.setAttrs({
          width: S,
          height: S,
          offsetX: S / 2,
          offsetY: S / 2,
          stroke: this.anchorStroke(),
          strokeWidth: this.anchorStrokeWidth(),
          fill: this.anchorFill(),
          cornerRadius: this.anchorCornerRadius()
        });
      }), this._batchChangeChild(".top-left", {
        x: 0,
        y: 0,
        offsetX: S / 2 + p,
        offsetY: S / 2 + p,
        visible: i && a.indexOf("top-left") >= 0
      }), this._batchChangeChild(".top-center", {
        x: T / 2,
        y: 0,
        offsetY: S / 2 + p,
        visible: i && a.indexOf("top-center") >= 0
      }), this._batchChangeChild(".top-right", {
        x: T,
        y: 0,
        offsetX: S / 2 - p,
        offsetY: S / 2 + p,
        visible: i && a.indexOf("top-right") >= 0
      }), this._batchChangeChild(".middle-left", {
        x: 0,
        y: t / 2,
        offsetX: S / 2 + p,
        visible: i && a.indexOf("middle-left") >= 0
      }), this._batchChangeChild(".middle-right", {
        x: T,
        y: t / 2,
        offsetX: S / 2 - p,
        visible: i && a.indexOf("middle-right") >= 0
      }), this._batchChangeChild(".bottom-left", {
        x: 0,
        y: t,
        offsetX: S / 2 + p,
        offsetY: S / 2 - p,
        visible: i && a.indexOf("bottom-left") >= 0
      }), this._batchChangeChild(".bottom-center", {
        x: T / 2,
        y: t,
        offsetY: S / 2 - p,
        visible: i && a.indexOf("bottom-center") >= 0
      }), this._batchChangeChild(".bottom-right", {
        x: T,
        y: t,
        offsetX: S / 2 - p,
        offsetY: S / 2 - p,
        visible: i && a.indexOf("bottom-right") >= 0
      }), this._batchChangeChild(".rotater", {
        x: T / 2,
        y: -this.rotateAnchorOffset() * h.Util._sign(t) - p,
        visible: this.rotateEnabled()
      }), this._batchChangeChild(".back", {
        width: T,
        height: t,
        visible: this.borderEnabled(),
        stroke: this.borderStroke(),
        strokeWidth: this.borderStrokeWidth(),
        dash: this.borderDash(),
        x: 0,
        y: 0
      });
      const N = this.anchorStyleFunc();
      N && R.forEach((I) => {
        N(I);
      }), (e = this.getLayer()) === null || e === void 0 || e.batchDraw();
    }
    isTransforming() {
      return this._transforming;
    }
    stopTransform() {
      if (this._transforming) {
        this._removeEvents();
        const e = this.findOne("." + this._movingAnchorName);
        e && e.stopDrag();
      }
    }
    destroy() {
      return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), y.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
    }
    toObject() {
      return O.Node.prototype.toObject.call(this);
    }
    clone(e) {
      return O.Node.prototype.clone.call(this, e);
    }
    getClientRect() {
      return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
    }
  };
  ve.Transformer = G, G.isTransforming = () => M > 0;
  function r(d) {
    return d instanceof Array || h.Util.warn("enabledAnchors value should be an array"), d instanceof Array && d.forEach(function(e) {
      x.indexOf(e) === -1 && h.Util.warn("Unknown anchor name: " + e + ". Available names are: " + x.join(", "));
    }), d || [];
  }
  return G.prototype.className = "Transformer", (0, g._registerNode)(G), A.Factory.addGetterSetter(G, "enabledAnchors", x, r), A.Factory.addGetterSetter(G, "flipEnabled", !0, (0, o.getBooleanValidator)()), A.Factory.addGetterSetter(G, "resizeEnabled", !0), A.Factory.addGetterSetter(G, "anchorSize", 10, (0, o.getNumberValidator)()), A.Factory.addGetterSetter(G, "rotateEnabled", !0), A.Factory.addGetterSetter(G, "rotateLineVisible", !0), A.Factory.addGetterSetter(G, "rotationSnaps", []), A.Factory.addGetterSetter(G, "rotateAnchorOffset", 50, (0, o.getNumberValidator)()), A.Factory.addGetterSetter(G, "rotateAnchorCursor", "crosshair"), A.Factory.addGetterSetter(G, "rotationSnapTolerance", 5, (0, o.getNumberValidator)()), A.Factory.addGetterSetter(G, "borderEnabled", !0), A.Factory.addGetterSetter(G, "anchorStroke", "rgb(0, 161, 255)"), A.Factory.addGetterSetter(G, "anchorStrokeWidth", 1, (0, o.getNumberValidator)()), A.Factory.addGetterSetter(G, "anchorFill", "white"), A.Factory.addGetterSetter(G, "anchorCornerRadius", 0, (0, o.getNumberValidator)()), A.Factory.addGetterSetter(G, "borderStroke", "rgb(0, 161, 255)"), A.Factory.addGetterSetter(G, "borderStrokeWidth", 1, (0, o.getNumberValidator)()), A.Factory.addGetterSetter(G, "borderDash"), A.Factory.addGetterSetter(G, "keepRatio", !0), A.Factory.addGetterSetter(G, "shiftBehavior", "default"), A.Factory.addGetterSetter(G, "centeredScaling", !1), A.Factory.addGetterSetter(G, "ignoreStroke", !1), A.Factory.addGetterSetter(G, "padding", 0, (0, o.getNumberValidator)()), A.Factory.addGetterSetter(G, "nodes"), A.Factory.addGetterSetter(G, "node"), A.Factory.addGetterSetter(G, "boundBoxFunc"), A.Factory.addGetterSetter(G, "anchorDragBoundFunc"), A.Factory.addGetterSetter(G, "anchorStyleFunc"), A.Factory.addGetterSetter(G, "shouldOverdrawWholeArea", !1), A.Factory.addGetterSetter(G, "useSingleNodeRotation", !0), A.Factory.backCompat(G, {
    lineEnabled: "borderEnabled",
    rotateHandlerOffset: "rotateAnchorOffset",
    enabledHandlers: "enabledAnchors"
  }), ve;
}
var ye = {}, tn;
function ur() {
  if (tn) return ye;
  tn = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.Wedge = void 0;
  const h = tt(), A = dt(), O = J(), E = et(), w = J();
  let y = class extends A.Shape {
    _sceneFunc(o) {
      o.beginPath(), o.arc(0, 0, this.radius(), 0, O.Konva.getAngle(this.angle()), this.clockwise()), o.lineTo(0, 0), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(o) {
      this.radius(o / 2);
    }
    setHeight(o) {
      this.radius(o / 2);
    }
  };
  return ye.Wedge = y, y.prototype.className = "Wedge", y.prototype._centroid = !0, y.prototype._attrsAffectingSize = ["radius"], (0, w._registerNode)(y), h.Factory.addGetterSetter(y, "radius", 0, (0, E.getNumberValidator)()), h.Factory.addGetterSetter(y, "angle", 0, (0, E.getNumberValidator)()), h.Factory.addGetterSetter(y, "clockwise", !1), h.Factory.backCompat(y, {
    angleDeg: "angle",
    getAngleDeg: "getAngle",
    setAngleDeg: "setAngle"
  }), ye;
}
var be = {}, en;
function fr() {
  if (en) return be;
  en = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.Blur = void 0;
  const h = tt(), A = ot(), O = et();
  function E() {
    this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
  const w = [
    512,
    512,
    456,
    512,
    328,
    456,
    335,
    512,
    405,
    328,
    271,
    456,
    388,
    335,
    292,
    512,
    454,
    405,
    364,
    328,
    298,
    271,
    496,
    456,
    420,
    388,
    360,
    335,
    312,
    292,
    273,
    512,
    482,
    454,
    428,
    405,
    383,
    364,
    345,
    328,
    312,
    298,
    284,
    271,
    259,
    496,
    475,
    456,
    437,
    420,
    404,
    388,
    374,
    360,
    347,
    335,
    323,
    312,
    302,
    292,
    282,
    273,
    265,
    512,
    497,
    482,
    468,
    454,
    441,
    428,
    417,
    405,
    394,
    383,
    373,
    364,
    354,
    345,
    337,
    328,
    320,
    312,
    305,
    298,
    291,
    284,
    278,
    271,
    265,
    259,
    507,
    496,
    485,
    475,
    465,
    456,
    446,
    437,
    428,
    420,
    412,
    404,
    396,
    388,
    381,
    374,
    367,
    360,
    354,
    347,
    341,
    335,
    329,
    323,
    318,
    312,
    307,
    302,
    297,
    292,
    287,
    282,
    278,
    273,
    269,
    265,
    261,
    512,
    505,
    497,
    489,
    482,
    475,
    468,
    461,
    454,
    447,
    441,
    435,
    428,
    422,
    417,
    411,
    405,
    399,
    394,
    389,
    383,
    378,
    373,
    368,
    364,
    359,
    354,
    350,
    345,
    341,
    337,
    332,
    328,
    324,
    320,
    316,
    312,
    309,
    305,
    301,
    298,
    294,
    291,
    287,
    284,
    281,
    278,
    274,
    271,
    268,
    265,
    262,
    259,
    257,
    507,
    501,
    496,
    491,
    485,
    480,
    475,
    470,
    465,
    460,
    456,
    451,
    446,
    442,
    437,
    433,
    428,
    424,
    420,
    416,
    412,
    408,
    404,
    400,
    396,
    392,
    388,
    385,
    381,
    377,
    374,
    370,
    367,
    363,
    360,
    357,
    354,
    350,
    347,
    344,
    341,
    338,
    335,
    332,
    329,
    326,
    323,
    320,
    318,
    315,
    312,
    310,
    307,
    304,
    302,
    299,
    297,
    294,
    292,
    289,
    287,
    285,
    282,
    280,
    278,
    275,
    273,
    271,
    269,
    267,
    265,
    263,
    261,
    259
  ], y = [
    9,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24
  ];
  function c(g, v) {
    const m = g.data, C = g.width, P = g.height;
    let u, l, b, x, F, n, s, _, k, M, G, r, d, e, f, T, t, a, i, p, S, R, N, I;
    const D = v + v + 1, V = C - 1, B = P - 1, H = v + 1, q = H * (H + 1) / 2, W = new E(), L = w[v], U = y[v];
    let X = null, z = W, Y = null, $ = null;
    for (b = 1; b < D; b++)
      z = z.next = new E(), b === H && (X = z);
    for (z.next = W, s = n = 0, l = 0; l < P; l++) {
      for (T = t = a = i = _ = k = M = G = 0, r = H * (p = m[n]), d = H * (S = m[n + 1]), e = H * (R = m[n + 2]), f = H * (N = m[n + 3]), _ += q * p, k += q * S, M += q * R, G += q * N, z = W, b = 0; b < H; b++)
        z.r = p, z.g = S, z.b = R, z.a = N, z = z.next;
      for (b = 1; b < H; b++)
        x = n + ((V < b ? V : b) << 2), _ += (z.r = p = m[x]) * (I = H - b), k += (z.g = S = m[x + 1]) * I, M += (z.b = R = m[x + 2]) * I, G += (z.a = N = m[x + 3]) * I, T += p, t += S, a += R, i += N, z = z.next;
      for (Y = W, $ = X, u = 0; u < C; u++)
        m[n + 3] = N = G * L >> U, N !== 0 ? (N = 255 / N, m[n] = (_ * L >> U) * N, m[n + 1] = (k * L >> U) * N, m[n + 2] = (M * L >> U) * N) : m[n] = m[n + 1] = m[n + 2] = 0, _ -= r, k -= d, M -= e, G -= f, r -= Y.r, d -= Y.g, e -= Y.b, f -= Y.a, x = s + ((x = u + v + 1) < V ? x : V) << 2, T += Y.r = m[x], t += Y.g = m[x + 1], a += Y.b = m[x + 2], i += Y.a = m[x + 3], _ += T, k += t, M += a, G += i, Y = Y.next, r += p = $.r, d += S = $.g, e += R = $.b, f += N = $.a, T -= p, t -= S, a -= R, i -= N, $ = $.next, n += 4;
      s += C;
    }
    for (u = 0; u < C; u++) {
      for (t = a = i = T = k = M = G = _ = 0, n = u << 2, r = H * (p = m[n]), d = H * (S = m[n + 1]), e = H * (R = m[n + 2]), f = H * (N = m[n + 3]), _ += q * p, k += q * S, M += q * R, G += q * N, z = W, b = 0; b < H; b++)
        z.r = p, z.g = S, z.b = R, z.a = N, z = z.next;
      for (F = C, b = 1; b <= v; b++)
        n = F + u << 2, _ += (z.r = p = m[n]) * (I = H - b), k += (z.g = S = m[n + 1]) * I, M += (z.b = R = m[n + 2]) * I, G += (z.a = N = m[n + 3]) * I, T += p, t += S, a += R, i += N, z = z.next, b < B && (F += C);
      for (n = u, Y = W, $ = X, l = 0; l < P; l++)
        x = n << 2, m[x + 3] = N = G * L >> U, N > 0 ? (N = 255 / N, m[x] = (_ * L >> U) * N, m[x + 1] = (k * L >> U) * N, m[x + 2] = (M * L >> U) * N) : m[x] = m[x + 1] = m[x + 2] = 0, _ -= r, k -= d, M -= e, G -= f, r -= Y.r, d -= Y.g, e -= Y.b, f -= Y.a, x = u + ((x = l + H) < B ? x : B) * C << 2, _ += T += Y.r = m[x], k += t += Y.g = m[x + 1], M += a += Y.b = m[x + 2], G += i += Y.a = m[x + 3], Y = Y.next, r += p = $.r, d += S = $.g, e += R = $.b, f += N = $.a, T -= p, t -= S, a -= R, i -= N, $ = $.next, n += C;
    }
  }
  const o = function(v) {
    const m = Math.round(this.blurRadius());
    m > 0 && c(v, m);
  };
  return be.Blur = o, h.Factory.addGetterSetter(A.Node, "blurRadius", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), be;
}
var Se = {}, nn;
function gr() {
  if (nn) return Se;
  nn = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.Brighten = void 0;
  const h = tt(), A = ot(), O = et(), E = function(w) {
    const y = this.brightness() * 255, c = w.data, o = c.length;
    for (let g = 0; g < o; g += 4)
      c[g] += y, c[g + 1] += y, c[g + 2] += y;
  };
  return Se.Brighten = E, h.Factory.addGetterSetter(A.Node, "brightness", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Se;
}
var Ce = {}, rn;
function pr() {
  if (rn) return Ce;
  rn = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.Contrast = void 0;
  const h = tt(), A = ot(), O = et(), E = function(w) {
    const y = Math.pow((this.contrast() + 100) / 100, 2), c = w.data, o = c.length;
    let g = 150, v = 150, m = 150;
    for (let C = 0; C < o; C += 4)
      g = c[C], v = c[C + 1], m = c[C + 2], g /= 255, g -= 0.5, g *= y, g += 0.5, g *= 255, v /= 255, v -= 0.5, v *= y, v += 0.5, v *= 255, m /= 255, m -= 0.5, m *= y, m += 0.5, m *= 255, g = g < 0 ? 0 : g > 255 ? 255 : g, v = v < 0 ? 0 : v > 255 ? 255 : v, m = m < 0 ? 0 : m > 255 ? 255 : m, c[C] = g, c[C + 1] = v, c[C + 2] = m;
  };
  return Ce.Contrast = E, h.Factory.addGetterSetter(A.Node, "contrast", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Ce;
}
var we = {}, an;
function _r() {
  if (an) return we;
  an = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.Emboss = void 0;
  const h = tt(), A = ot(), O = st(), E = et(), w = function(y) {
    const c = this.embossStrength() * 10, o = this.embossWhiteLevel() * 255, g = this.embossDirection(), v = this.embossBlend(), m = y.data, C = y.width, P = y.height, u = C * 4;
    let l = 0, b = 0, x = P;
    switch (g) {
      case "top-left":
        l = -1, b = -1;
        break;
      case "top":
        l = -1, b = 0;
        break;
      case "top-right":
        l = -1, b = 1;
        break;
      case "right":
        l = 0, b = 1;
        break;
      case "bottom-right":
        l = 1, b = 1;
        break;
      case "bottom":
        l = 1, b = 0;
        break;
      case "bottom-left":
        l = 1, b = -1;
        break;
      case "left":
        l = 0, b = -1;
        break;
      default:
        O.Util.error("Unknown emboss direction: " + g);
    }
    do {
      const F = (x - 1) * u;
      let n = l;
      x + n < 1 && (n = 0), x + n > P && (n = 0);
      const s = (x - 1 + n) * C * 4;
      let _ = C;
      do {
        const k = F + (_ - 1) * 4;
        let M = b;
        _ + M < 1 && (M = 0), _ + M > C && (M = 0);
        const G = s + (_ - 1 + M) * 4, r = m[k] - m[G], d = m[k + 1] - m[G + 1], e = m[k + 2] - m[G + 2];
        let f = r;
        const T = f > 0 ? f : -f, t = d > 0 ? d : -d, a = e > 0 ? e : -e;
        if (t > T && (f = d), a > T && (f = e), f *= c, v) {
          const i = m[k] + f, p = m[k + 1] + f, S = m[k + 2] + f;
          m[k] = i > 255 ? 255 : i < 0 ? 0 : i, m[k + 1] = p > 255 ? 255 : p < 0 ? 0 : p, m[k + 2] = S > 255 ? 255 : S < 0 ? 0 : S;
        } else {
          let i = o - f;
          i < 0 ? i = 0 : i > 255 && (i = 255), m[k] = m[k + 1] = m[k + 2] = i;
        }
      } while (--_);
    } while (--x);
  };
  return we.Emboss = w, h.Factory.addGetterSetter(A.Node, "embossStrength", 0.5, (0, E.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(A.Node, "embossWhiteLevel", 0.5, (0, E.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(A.Node, "embossDirection", "top-left", void 0, h.Factory.afterSetFilter), h.Factory.addGetterSetter(A.Node, "embossBlend", !1, void 0, h.Factory.afterSetFilter), we;
}
var xe = {}, sn;
function mr() {
  if (sn) return xe;
  sn = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.Enhance = void 0;
  const h = tt(), A = ot(), O = et();
  function E(y, c, o, g, v) {
    const m = o - c, C = v - g;
    if (m === 0)
      return g + C / 2;
    if (C === 0)
      return g;
    let P = (y - c) / m;
    return P = C * P + g, P;
  }
  const w = function(y) {
    const c = y.data, o = c.length;
    let g = c[0], v = g, m, C = c[1], P = C, u, l = c[2], b = l, x;
    const F = this.enhance();
    if (F === 0)
      return;
    for (let f = 0; f < o; f += 4)
      m = c[f + 0], m < g ? g = m : m > v && (v = m), u = c[f + 1], u < C ? C = u : u > P && (P = u), x = c[f + 2], x < l ? l = x : x > b && (b = x);
    v === g && (v = 255, g = 0), P === C && (P = 255, C = 0), b === l && (b = 255, l = 0);
    let n, s, _, k, M, G, r, d, e;
    F > 0 ? (s = v + F * (255 - v), _ = g - F * (g - 0), M = P + F * (255 - P), G = C - F * (C - 0), d = b + F * (255 - b), e = l - F * (l - 0)) : (n = (v + g) * 0.5, s = v + F * (v - n), _ = g + F * (g - n), k = (P + C) * 0.5, M = P + F * (P - k), G = C + F * (C - k), r = (b + l) * 0.5, d = b + F * (b - r), e = l + F * (l - r));
    for (let f = 0; f < o; f += 4)
      c[f + 0] = E(c[f + 0], g, v, _, s), c[f + 1] = E(c[f + 1], C, P, G, M), c[f + 2] = E(c[f + 2], l, b, e, d);
  };
  return xe.Enhance = w, h.Factory.addGetterSetter(A.Node, "enhance", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), xe;
}
var Pe = {}, on;
function vr() {
  if (on) return Pe;
  on = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.Grayscale = void 0;
  const h = function(A) {
    const O = A.data, E = O.length;
    for (let w = 0; w < E; w += 4) {
      const y = 0.34 * O[w] + 0.5 * O[w + 1] + 0.16 * O[w + 2];
      O[w] = y, O[w + 1] = y, O[w + 2] = y;
    }
  };
  return Pe.Grayscale = h, Pe;
}
var Te = {}, ln;
function yr() {
  if (ln) return Te;
  ln = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.HSL = void 0;
  const h = tt(), A = ot(), O = et();
  h.Factory.addGetterSetter(A.Node, "hue", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(A.Node, "saturation", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(A.Node, "luminance", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter);
  const E = function(w) {
    const y = w.data, c = y.length, o = 1, g = Math.pow(2, this.saturation()), v = Math.abs(this.hue() + 360) % 360, m = this.luminance() * 127, C = o * g * Math.cos(v * Math.PI / 180), P = o * g * Math.sin(v * Math.PI / 180), u = 0.299 * o + 0.701 * C + 0.167 * P, l = 0.587 * o - 0.587 * C + 0.33 * P, b = 0.114 * o - 0.114 * C - 0.497 * P, x = 0.299 * o - 0.299 * C - 0.328 * P, F = 0.587 * o + 0.413 * C + 0.035 * P, n = 0.114 * o - 0.114 * C + 0.293 * P, s = 0.299 * o - 0.3 * C + 1.25 * P, _ = 0.587 * o - 0.586 * C - 1.05 * P, k = 0.114 * o + 0.886 * C - 0.2 * P;
    let M, G, r, d;
    for (let e = 0; e < c; e += 4)
      M = y[e + 0], G = y[e + 1], r = y[e + 2], d = y[e + 3], y[e + 0] = u * M + l * G + b * r + m, y[e + 1] = x * M + F * G + n * r + m, y[e + 2] = s * M + _ * G + k * r + m, y[e + 3] = d;
  };
  return Te.HSL = E, Te;
}
var Ae = {}, hn;
function br() {
  if (hn) return Ae;
  hn = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.HSV = void 0;
  const h = tt(), A = ot(), O = et(), E = function(w) {
    const y = w.data, c = y.length, o = Math.pow(2, this.value()), g = Math.pow(2, this.saturation()), v = Math.abs(this.hue() + 360) % 360, m = o * g * Math.cos(v * Math.PI / 180), C = o * g * Math.sin(v * Math.PI / 180), P = 0.299 * o + 0.701 * m + 0.167 * C, u = 0.587 * o - 0.587 * m + 0.33 * C, l = 0.114 * o - 0.114 * m - 0.497 * C, b = 0.299 * o - 0.299 * m - 0.328 * C, x = 0.587 * o + 0.413 * m + 0.035 * C, F = 0.114 * o - 0.114 * m + 0.293 * C, n = 0.299 * o - 0.3 * m + 1.25 * C, s = 0.587 * o - 0.586 * m - 1.05 * C, _ = 0.114 * o + 0.886 * m - 0.2 * C;
    let k, M, G, r;
    for (let d = 0; d < c; d += 4)
      k = y[d + 0], M = y[d + 1], G = y[d + 2], r = y[d + 3], y[d + 0] = P * k + u * M + l * G, y[d + 1] = b * k + x * M + F * G, y[d + 2] = n * k + s * M + _ * G, y[d + 3] = r;
  };
  return Ae.HSV = E, h.Factory.addGetterSetter(A.Node, "hue", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(A.Node, "saturation", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(A.Node, "value", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Ae;
}
var ke = {}, cn;
function Sr() {
  if (cn) return ke;
  cn = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.Invert = void 0;
  const h = function(A) {
    const O = A.data, E = O.length;
    for (let w = 0; w < E; w += 4)
      O[w] = 255 - O[w], O[w + 1] = 255 - O[w + 1], O[w + 2] = 255 - O[w + 2];
  };
  return ke.Invert = h, ke;
}
var Ee = {}, dn;
function Cr() {
  if (dn) return Ee;
  dn = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.Kaleidoscope = void 0;
  const h = tt(), A = ot(), O = st(), E = et(), w = function(o, g, v) {
    const m = o.data, C = g.data, P = o.width, u = o.height, l = v.polarCenterX || P / 2, b = v.polarCenterY || u / 2;
    let x = Math.sqrt(l * l + b * b), F = P - l, n = u - b;
    const s = Math.sqrt(F * F + n * n);
    x = s > x ? s : x;
    const _ = u, k = P, M = 360 / k * Math.PI / 180;
    for (let G = 0; G < k; G += 1) {
      const r = Math.sin(G * M), d = Math.cos(G * M);
      for (let e = 0; e < _; e += 1) {
        F = Math.floor(l + x * e / _ * d), n = Math.floor(b + x * e / _ * r);
        let f = (n * P + F) * 4;
        const T = m[f + 0], t = m[f + 1], a = m[f + 2], i = m[f + 3];
        f = (G + e * P) * 4, C[f + 0] = T, C[f + 1] = t, C[f + 2] = a, C[f + 3] = i;
      }
    }
  }, y = function(o, g, v) {
    const m = o.data, C = g.data, P = o.width, u = o.height, l = v.polarCenterX || P / 2, b = v.polarCenterY || u / 2;
    let x = Math.sqrt(l * l + b * b), F = P - l, n = u - b;
    const s = Math.sqrt(F * F + n * n);
    x = s > x ? s : x;
    const _ = u, k = P, M = 0;
    let G, r;
    for (F = 0; F < P; F += 1)
      for (n = 0; n < u; n += 1) {
        const d = F - l, e = n - b, f = Math.sqrt(d * d + e * e) * _ / x;
        let T = (Math.atan2(e, d) * 180 / Math.PI + 360 + M) % 360;
        T = T * k / 360, G = Math.floor(T), r = Math.floor(f);
        let t = (r * P + G) * 4;
        const a = m[t + 0], i = m[t + 1], p = m[t + 2], S = m[t + 3];
        t = (n * P + F) * 4, C[t + 0] = a, C[t + 1] = i, C[t + 2] = p, C[t + 3] = S;
      }
  }, c = function(o) {
    const g = o.width, v = o.height;
    let m, C, P, u, l, b, x, F, n, s, _ = Math.round(this.kaleidoscopePower());
    const k = Math.round(this.kaleidoscopeAngle()), M = Math.floor(g * (k % 360) / 360);
    if (_ < 1)
      return;
    const G = O.Util.createCanvasElement();
    G.width = g, G.height = v;
    const r = G.getContext("2d").getImageData(0, 0, g, v);
    O.Util.releaseCanvas(G), w(o, r, {
      polarCenterX: g / 2,
      polarCenterY: v / 2
    });
    let d = g / Math.pow(2, _);
    for (; d <= 8; )
      d = d * 2, _ -= 1;
    d = Math.ceil(d);
    let e = d, f = 0, T = e, t = 1;
    for (M + d > g && (f = e, T = 0, t = -1), C = 0; C < v; C += 1)
      for (m = f; m !== T; m += t)
        P = Math.round(m + M) % g, n = (g * C + P) * 4, l = r.data[n + 0], b = r.data[n + 1], x = r.data[n + 2], F = r.data[n + 3], s = (g * C + m) * 4, r.data[s + 0] = l, r.data[s + 1] = b, r.data[s + 2] = x, r.data[s + 3] = F;
    for (C = 0; C < v; C += 1)
      for (e = Math.floor(d), u = 0; u < _; u += 1) {
        for (m = 0; m < e + 1; m += 1)
          n = (g * C + m) * 4, l = r.data[n + 0], b = r.data[n + 1], x = r.data[n + 2], F = r.data[n + 3], s = (g * C + e * 2 - m - 1) * 4, r.data[s + 0] = l, r.data[s + 1] = b, r.data[s + 2] = x, r.data[s + 3] = F;
        e *= 2;
      }
    y(r, o, { polarRotation: 0 });
  };
  return Ee.Kaleidoscope = c, h.Factory.addGetterSetter(A.Node, "kaleidoscopePower", 2, (0, E.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(A.Node, "kaleidoscopeAngle", 0, (0, E.getNumberValidator)(), h.Factory.afterSetFilter), Ee;
}
var Re = {}, un;
function wr() {
  if (un) return Re;
  un = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.Mask = void 0;
  const h = tt(), A = ot(), O = et();
  function E(P, u, l) {
    let b = (l * P.width + u) * 4;
    const x = [];
    return x.push(P.data[b++], P.data[b++], P.data[b++], P.data[b++]), x;
  }
  function w(P, u) {
    return Math.sqrt(Math.pow(P[0] - u[0], 2) + Math.pow(P[1] - u[1], 2) + Math.pow(P[2] - u[2], 2));
  }
  function y(P) {
    const u = [0, 0, 0];
    for (let l = 0; l < P.length; l++)
      u[0] += P[l][0], u[1] += P[l][1], u[2] += P[l][2];
    return u[0] /= P.length, u[1] /= P.length, u[2] /= P.length, u;
  }
  function c(P, u) {
    const l = E(P, 0, 0), b = E(P, P.width - 1, 0), x = E(P, 0, P.height - 1), F = E(P, P.width - 1, P.height - 1), n = u || 10;
    if (w(l, b) < n && w(b, F) < n && w(F, x) < n && w(x, l) < n) {
      const s = y([b, l, F, x]), _ = [];
      for (let k = 0; k < P.width * P.height; k++) {
        const M = w(s, [
          P.data[k * 4],
          P.data[k * 4 + 1],
          P.data[k * 4 + 2]
        ]);
        _[k] = M < n ? 0 : 255;
      }
      return _;
    }
  }
  function o(P, u) {
    for (let l = 0; l < P.width * P.height; l++)
      P.data[4 * l + 3] = u[l];
  }
  function g(P, u, l) {
    const b = [1, 1, 1, 1, 0, 1, 1, 1, 1], x = Math.round(Math.sqrt(b.length)), F = Math.floor(x / 2), n = [];
    for (let s = 0; s < l; s++)
      for (let _ = 0; _ < u; _++) {
        const k = s * u + _;
        let M = 0;
        for (let G = 0; G < x; G++)
          for (let r = 0; r < x; r++) {
            const d = s + G - F, e = _ + r - F;
            if (d >= 0 && d < l && e >= 0 && e < u) {
              const f = d * u + e, T = b[G * x + r];
              M += P[f] * T;
            }
          }
        n[k] = M === 255 * 8 ? 255 : 0;
      }
    return n;
  }
  function v(P, u, l) {
    const b = [1, 1, 1, 1, 1, 1, 1, 1, 1], x = Math.round(Math.sqrt(b.length)), F = Math.floor(x / 2), n = [];
    for (let s = 0; s < l; s++)
      for (let _ = 0; _ < u; _++) {
        const k = s * u + _;
        let M = 0;
        for (let G = 0; G < x; G++)
          for (let r = 0; r < x; r++) {
            const d = s + G - F, e = _ + r - F;
            if (d >= 0 && d < l && e >= 0 && e < u) {
              const f = d * u + e, T = b[G * x + r];
              M += P[f] * T;
            }
          }
        n[k] = M >= 255 * 4 ? 255 : 0;
      }
    return n;
  }
  function m(P, u, l) {
    const b = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], x = Math.round(Math.sqrt(b.length)), F = Math.floor(x / 2), n = [];
    for (let s = 0; s < l; s++)
      for (let _ = 0; _ < u; _++) {
        const k = s * u + _;
        let M = 0;
        for (let G = 0; G < x; G++)
          for (let r = 0; r < x; r++) {
            const d = s + G - F, e = _ + r - F;
            if (d >= 0 && d < l && e >= 0 && e < u) {
              const f = d * u + e, T = b[G * x + r];
              M += P[f] * T;
            }
          }
        n[k] = M;
      }
    return n;
  }
  const C = function(P) {
    const u = this.threshold();
    let l = c(P, u);
    return l && (l = g(l, P.width, P.height), l = v(l, P.width, P.height), l = m(l, P.width, P.height), o(P, l)), P;
  };
  return Re.Mask = C, h.Factory.addGetterSetter(A.Node, "threshold", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Re;
}
var Fe = {}, fn;
function xr() {
  if (fn) return Fe;
  fn = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.Noise = void 0;
  const h = tt(), A = ot(), O = et(), E = function(w) {
    const y = this.noise() * 255, c = w.data, o = c.length, g = y / 2;
    for (let v = 0; v < o; v += 4)
      c[v + 0] += g - 2 * g * Math.random(), c[v + 1] += g - 2 * g * Math.random(), c[v + 2] += g - 2 * g * Math.random();
  };
  return Fe.Noise = E, h.Factory.addGetterSetter(A.Node, "noise", 0.2, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Fe;
}
var Me = {}, gn;
function Pr() {
  if (gn) return Me;
  gn = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.Pixelate = void 0;
  const h = tt(), A = st(), O = ot(), E = et(), w = function(y) {
    let c = Math.ceil(this.pixelSize()), o = y.width, g = y.height, v, m, C, P, u, l, b, x = Math.ceil(o / c), F = Math.ceil(g / c), n, s, _, k, M, G, r, d = y.data;
    if (c <= 0) {
      A.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (M = 0; M < x; M += 1)
      for (G = 0; G < F; G += 1) {
        for (P = 0, u = 0, l = 0, b = 0, n = M * c, s = n + c, _ = G * c, k = _ + c, r = 0, v = n; v < s; v += 1)
          if (!(v >= o))
            for (m = _; m < k; m += 1)
              m >= g || (C = (o * m + v) * 4, P += d[C + 0], u += d[C + 1], l += d[C + 2], b += d[C + 3], r += 1);
        for (P = P / r, u = u / r, l = l / r, b = b / r, v = n; v < s; v += 1)
          if (!(v >= o))
            for (m = _; m < k; m += 1)
              m >= g || (C = (o * m + v) * 4, d[C + 0] = P, d[C + 1] = u, d[C + 2] = l, d[C + 3] = b);
      }
  };
  return Me.Pixelate = w, h.Factory.addGetterSetter(O.Node, "pixelSize", 8, (0, E.getNumberValidator)(), h.Factory.afterSetFilter), Me;
}
var Ne = {}, pn;
function Tr() {
  if (pn) return Ne;
  pn = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.Posterize = void 0;
  const h = tt(), A = ot(), O = et(), E = function(w) {
    const y = Math.round(this.levels() * 254) + 1, c = w.data, o = c.length, g = 255 / y;
    for (let v = 0; v < o; v += 1)
      c[v] = Math.floor(c[v] / g) * g;
  };
  return Ne.Posterize = E, h.Factory.addGetterSetter(A.Node, "levels", 0.5, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Ne;
}
var Oe = {}, _n;
function Ar() {
  if (_n) return Oe;
  _n = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.RGB = void 0;
  const h = tt(), A = ot(), O = et(), E = function(w) {
    const y = w.data, c = y.length, o = this.red(), g = this.green(), v = this.blue();
    for (let m = 0; m < c; m += 4) {
      const C = (0.34 * y[m] + 0.5 * y[m + 1] + 0.16 * y[m + 2]) / 255;
      y[m] = C * o, y[m + 1] = C * g, y[m + 2] = C * v, y[m + 3] = y[m + 3];
    }
  };
  return Oe.RGB = E, h.Factory.addGetterSetter(A.Node, "red", 0, function(w) {
    return this._filterUpToDate = !1, w > 255 ? 255 : w < 0 ? 0 : Math.round(w);
  }), h.Factory.addGetterSetter(A.Node, "green", 0, function(w) {
    return this._filterUpToDate = !1, w > 255 ? 255 : w < 0 ? 0 : Math.round(w);
  }), h.Factory.addGetterSetter(A.Node, "blue", 0, O.RGBComponent, h.Factory.afterSetFilter), Oe;
}
var Ge = {}, mn;
function kr() {
  if (mn) return Ge;
  mn = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.RGBA = void 0;
  const h = tt(), A = ot(), O = et(), E = function(w) {
    const y = w.data, c = y.length, o = this.red(), g = this.green(), v = this.blue(), m = this.alpha();
    for (let C = 0; C < c; C += 4) {
      const P = 1 - m;
      y[C] = o * m + y[C] * P, y[C + 1] = g * m + y[C + 1] * P, y[C + 2] = v * m + y[C + 2] * P;
    }
  };
  return Ge.RGBA = E, h.Factory.addGetterSetter(A.Node, "red", 0, function(w) {
    return this._filterUpToDate = !1, w > 255 ? 255 : w < 0 ? 0 : Math.round(w);
  }), h.Factory.addGetterSetter(A.Node, "green", 0, function(w) {
    return this._filterUpToDate = !1, w > 255 ? 255 : w < 0 ? 0 : Math.round(w);
  }), h.Factory.addGetterSetter(A.Node, "blue", 0, O.RGBComponent, h.Factory.afterSetFilter), h.Factory.addGetterSetter(A.Node, "alpha", 1, function(w) {
    return this._filterUpToDate = !1, w > 1 ? 1 : w < 0 ? 0 : w;
  }), Ge;
}
var Le = {}, vn;
function Er() {
  if (vn) return Le;
  vn = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.Sepia = void 0;
  const h = function(A) {
    const O = A.data, E = O.length;
    for (let w = 0; w < E; w += 4) {
      const y = O[w + 0], c = O[w + 1], o = O[w + 2];
      O[w + 0] = Math.min(255, y * 0.393 + c * 0.769 + o * 0.189), O[w + 1] = Math.min(255, y * 0.349 + c * 0.686 + o * 0.168), O[w + 2] = Math.min(255, y * 0.272 + c * 0.534 + o * 0.131);
    }
  };
  return Le.Sepia = h, Le;
}
var De = {}, yn;
function Rr() {
  if (yn) return De;
  yn = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.Solarize = void 0;
  const h = function(A) {
    const O = A.data, E = A.width, w = A.height, y = E * 4;
    let c = w;
    do {
      const o = (c - 1) * y;
      let g = E;
      do {
        const v = o + (g - 1) * 4;
        let m = O[v], C = O[v + 1], P = O[v + 2];
        m > 127 && (m = 255 - m), C > 127 && (C = 255 - C), P > 127 && (P = 255 - P), O[v] = m, O[v + 1] = C, O[v + 2] = P;
      } while (--g);
    } while (--c);
  };
  return De.Solarize = h, De;
}
var Ie = {}, bn;
function Fr() {
  if (bn) return Ie;
  bn = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.Threshold = void 0;
  const h = tt(), A = ot(), O = et(), E = function(w) {
    const y = this.threshold() * 255, c = w.data, o = c.length;
    for (let g = 0; g < o; g += 1)
      c[g] = c[g] < y ? 0 : 255;
  };
  return Ie.Threshold = E, h.Factory.addGetterSetter(A.Node, "threshold", 0.5, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Ie;
}
var Sn;
function Mr() {
  if (Sn) return Zt;
  Sn = 1, Object.defineProperty(Zt, "__esModule", { value: !0 }), Zt.Konva = void 0;
  const h = Zn(), A = Jn(), O = er(), E = ir(), w = nr(), y = rr(), c = ar(), o = Gn(), g = pi(), v = Dn(), m = sr(), C = or(), P = lr(), u = hr(), l = In(), b = cr(), x = dr(), F = ur(), n = fr(), s = gr(), _ = pr(), k = _r(), M = mr(), G = vr(), r = yr(), d = br(), e = Sr(), f = Cr(), T = wr(), t = xr(), a = Pr(), i = Tr(), p = Ar(), S = kr(), R = Er(), N = Rr(), I = Fr();
  return Zt.Konva = h.Konva.Util._assign(h.Konva, {
    Arc: A.Arc,
    Arrow: O.Arrow,
    Circle: E.Circle,
    Ellipse: w.Ellipse,
    Image: y.Image,
    Label: c.Label,
    Tag: c.Tag,
    Line: o.Line,
    Path: g.Path,
    Rect: v.Rect,
    RegularPolygon: m.RegularPolygon,
    Ring: C.Ring,
    Sprite: P.Sprite,
    Star: u.Star,
    Text: l.Text,
    TextPath: b.TextPath,
    Transformer: x.Transformer,
    Wedge: F.Wedge,
    Filters: {
      Blur: n.Blur,
      Brighten: s.Brighten,
      Contrast: _.Contrast,
      Emboss: k.Emboss,
      Enhance: M.Enhance,
      Grayscale: G.Grayscale,
      HSL: r.HSL,
      HSV: d.HSV,
      Invert: e.Invert,
      Kaleidoscope: f.Kaleidoscope,
      Mask: T.Mask,
      Noise: t.Noise,
      Pixelate: a.Pixelate,
      Posterize: i.Posterize,
      RGB: p.RGB,
      RGBA: S.RGBA,
      Sepia: R.Sepia,
      Solarize: N.Solarize,
      Threshold: I.Threshold
    }
  }), Zt;
}
var Nr = Ve.exports, Cn;
function Or() {
  if (Cn) return Ve.exports;
  Cn = 1, Object.defineProperty(Nr, "__esModule", { value: !0 });
  const h = Mr();
  return Ve.exports = h.Konva, Ve.exports;
}
var Gr = Or();
const nt = /* @__PURE__ */ Kn(Gr);
function He(h) {
  if (!nt.autoDrawEnabled) {
    const A = h.getLayer() || h.getStage();
    A && A.batchDraw();
  }
}
const wn = { key: !0, style: !0, elm: !0, isRootInsert: !0 }, ni = ".vue-konva-event";
function Bn(h, A, O, E) {
  const w = h.__konvaNode, y = {};
  let c = !1;
  for (let o in O) {
    if (wn.hasOwnProperty(o))
      continue;
    const g = o.slice(0, 2) === "on", v = O[o] !== A[o];
    if (g && v) {
      let m = o.slice(2).toLowerCase();
      m.slice(0, 7) === "content" && (m = "content" + m.slice(7, 1).toUpperCase() + m.slice(8)), w == null || w.off(m + ni, O[o]);
    }
    !A.hasOwnProperty(o) && (w == null || w.setAttr(o, void 0));
  }
  for (let o in A) {
    if (wn.hasOwnProperty(o))
      continue;
    let g = o.slice(0, 2) === "on";
    const v = O[o] !== A[o];
    if (g && v) {
      let m = o.slice(2).toLowerCase();
      m.slice(0, 7) === "content" && (m = "content" + m.slice(7, 1).toUpperCase() + m.slice(8)), A[o] && (w == null || w.off(m + ni), w == null || w.on(m + ni, A[o]));
    }
    !g && (A[o] !== O[o] || E && A[o] !== (w == null ? void 0 : w.getAttr(o))) && (c = !0, y[o] = A[o]);
  }
  c && w && (w.setAttrs(y), He(w));
}
const Lr = "v";
function Dr(h) {
  function A(O) {
    return O != null && O.__konvaNode ? O : O != null && O.parent ? A(O.parent) : (console.error("vue-konva error: Can not find parent node"), null);
  }
  return A(h.parent);
}
function Un(h) {
  return h.component ? h.component.__konvaNode || Un(h.component.subTree) : null;
}
function Ir(h) {
  const { el: A, component: O } = h, E = Un(h);
  if (A != null && A.tagName && O && !E) {
    const w = A.tagName.toLowerCase();
    return console.error(
      `vue-konva error: You are trying to render "${w}" inside your component tree. Looks like it is not a Konva node. You can render only Konva components inside the Stage.`
    ), null;
  }
  return E;
}
function Br(h) {
  const A = (w) => !!(w != null && w.hasOwnProperty("component")), O = (w) => Array.isArray(w), E = (w) => A(w) ? [w, ...E(w.children)] : O(w) ? w.flatMap(E) : [];
  return E(h.children);
}
function Vn(h, A) {
  const O = Br(h), E = [];
  O.forEach((y) => {
    const c = Ir(y);
    c && E.push(c);
  });
  let w = !1;
  E.forEach((y, c) => {
    y.getZIndex() !== c && (y.setZIndex(c), w = !0);
  }), w && He(A);
}
const Ur = hi({
  name: "Stage",
  props: {
    config: {
      type: Object,
      default: function() {
        return {};
      }
    },
    __useStrictMode: {
      type: Boolean
    }
  },
  inheritAttrs: !1,
  setup(h, { attrs: A, slots: O, expose: E }) {
    const w = ci();
    if (!w) return;
    const y = kn({}), c = Pt(null), o = new nt.Stage({
      width: h.config.width,
      height: h.config.height,
      container: document.createElement("div")
      // Fake container. Will be replaced
    });
    w.__konvaNode = o, m();
    function g() {
      return w == null ? void 0 : w.__konvaNode;
    }
    function v() {
      return w == null ? void 0 : w.__konvaNode;
    }
    function m() {
      if (!w) return;
      const C = y || {}, P = {
        ...A,
        ...h.config
      };
      Bn(w, P, C, h.__useStrictMode), Object.assign(y, P);
    }
    return di(() => {
      c.value && (c.value.innerHTML = "", o.container(c.value)), m();
    }), En(() => {
      m(), Vn(w.subTree, o);
    }), Wn(() => {
      o.destroy();
    }), Rn(() => h.config, m, { deep: !0 }), E({
      getStage: v,
      getNode: g
    }), console.log(A), () => {
      var C;
      return Fn("div", { ref: c, style: A == null ? void 0 : A.style }, (C = O.default) == null ? void 0 : C.call(O));
    };
  }
}), Vr = ".vue-konva-event", Hr = {
  Group: !0,
  Layer: !0,
  FastLayer: !0,
  Label: !0
};
function qr(h, A) {
  return hi({
    name: h,
    props: {
      config: {
        type: Object,
        default: function() {
          return {};
        }
      },
      __useStrictMode: {
        type: Boolean
      }
    },
    setup(O, { attrs: E, slots: w, expose: y }) {
      const c = ci();
      if (!c) return;
      const o = kn({}), g = new A();
      c.__konvaNode = g, c.vnode.__konvaNode = g, C();
      function v() {
        return c == null ? void 0 : c.__konvaNode;
      }
      function m() {
        return c == null ? void 0 : c.__konvaNode;
      }
      function C() {
        if (!c) return;
        const u = {};
        for (const x in c == null ? void 0 : c.vnode.props)
          x.slice(0, 2) === "on" && (u[x] = c.vnode.props[x]);
        const l = o || {}, b = {
          ...E,
          ...O.config,
          ...u
        };
        Bn(c, b, l, O.__useStrictMode), Object.assign(o, b);
      }
      di(() => {
        var u;
        const l = (u = Dr(c)) == null ? void 0 : u.__konvaNode;
        l && "add" in l && l.add(g), He(g);
      }), zn(() => {
        He(g), g.destroy(), g.off(Vr);
      }), En(() => {
        C(), Vn(c.subTree, g);
      }), Rn(() => O.config, C, { deep: !0 }), y({
        getStage: m,
        getNode: v
      });
      const P = Hr.hasOwnProperty(h);
      return () => {
        var u;
        return P ? Fn("template", {}, (u = w.default) == null ? void 0 : u.call(w)) : null;
      };
    }
  });
}
typeof window < "u" && !window.Konva && require("konva");
const Wr = {
  install: (h, A) => {
    const O = (A == null ? void 0 : A.prefix) || Lr, E = {
      Arc: nt.Arc,
      Arrow: nt.Arrow,
      Circle: nt.Circle,
      Ellipse: nt.Ellipse,
      FastLayer: nt.FastLayer,
      Group: nt.Group,
      Image: nt.Image,
      Label: nt.Label,
      Layer: nt.Layer,
      Line: nt.Line,
      Path: nt.Path,
      Rect: nt.Rect,
      RegularPolygon: nt.RegularPolygon,
      Ring: nt.Ring,
      Shape: nt.Shape,
      Sprite: nt.Sprite,
      Star: nt.Star,
      Tag: nt.Tag,
      Text: nt.Text,
      TextPath: nt.TextPath,
      Transformer: nt.Transformer,
      Wedge: nt.Wedge,
      ...A == null ? void 0 : A.customNodes
    };
    [
      Ur,
      ...Object.entries(E).map(
        ([w, y]) => qr(w, y)
      )
    ].forEach((w) => {
      h.component(`${O}${w.name}`, w);
    });
  }
};
var zr = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, ri = Math.ceil, St = Math.floor, mt = "[BigNumber Error] ", xn = mt + "Number primitive has more than 15 significant digits: ", xt = 1e14, Z = 14, ai = 9007199254740991, si = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ut = 1e7, ct = 1e9;
function Hn(h) {
  var A, O, E, w = n.prototype = { constructor: n, toString: null, valueOf: null }, y = new n(1), c = 20, o = 4, g = -7, v = 21, m = -1e7, C = 1e7, P = !1, u = 1, l = 0, b = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, x = "0123456789abcdefghijklmnopqrstuvwxyz", F = !0;
  function n(r, d) {
    var e, f, T, t, a, i, p, S, R = this;
    if (!(R instanceof n)) return new n(r, d);
    if (d == null) {
      if (r && r._isBigNumber === !0) {
        R.s = r.s, !r.c || r.e > C ? R.c = R.e = null : r.e < m ? R.c = [R.e = 0] : (R.e = r.e, R.c = r.c.slice());
        return;
      }
      if ((i = typeof r == "number") && r * 0 == 0) {
        if (R.s = 1 / r < 0 ? (r = -r, -1) : 1, r === ~~r) {
          for (t = 0, a = r; a >= 10; a /= 10, t++) ;
          t > C ? R.c = R.e = null : (R.e = t, R.c = [r]);
          return;
        }
        S = String(r);
      } else {
        if (!zr.test(S = String(r))) return E(R, S, i);
        R.s = S.charCodeAt(0) == 45 ? (S = S.slice(1), -1) : 1;
      }
      (t = S.indexOf(".")) > -1 && (S = S.replace(".", "")), (a = S.search(/e/i)) > 0 ? (t < 0 && (t = a), t += +S.slice(a + 1), S = S.substring(0, a)) : t < 0 && (t = S.length);
    } else {
      if (rt(d, 2, x.length, "Base"), d == 10 && F)
        return R = new n(r), M(R, c + R.e + 1, o);
      if (S = String(r), i = typeof r == "number") {
        if (r * 0 != 0) return E(R, S, i, d);
        if (R.s = 1 / r < 0 ? (S = S.slice(1), -1) : 1, n.DEBUG && S.replace(/^0\.0*|\./, "").length > 15)
          throw Error(xn + r);
      } else
        R.s = S.charCodeAt(0) === 45 ? (S = S.slice(1), -1) : 1;
      for (e = x.slice(0, d), t = a = 0, p = S.length; a < p; a++)
        if (e.indexOf(f = S.charAt(a)) < 0) {
          if (f == ".") {
            if (a > t) {
              t = p;
              continue;
            }
          } else if (!T && (S == S.toUpperCase() && (S = S.toLowerCase()) || S == S.toLowerCase() && (S = S.toUpperCase()))) {
            T = !0, a = -1, t = 0;
            continue;
          }
          return E(R, String(r), i, d);
        }
      i = !1, S = O(S, d, 10, R.s), (t = S.indexOf(".")) > -1 ? S = S.replace(".", "") : t = S.length;
    }
    for (a = 0; S.charCodeAt(a) === 48; a++) ;
    for (p = S.length; S.charCodeAt(--p) === 48; ) ;
    if (S = S.slice(a, ++p)) {
      if (p -= a, i && n.DEBUG && p > 15 && (r > ai || r !== St(r)))
        throw Error(xn + R.s * r);
      if ((t = t - a - 1) > C)
        R.c = R.e = null;
      else if (t < m)
        R.c = [R.e = 0];
      else {
        if (R.e = t, R.c = [], a = (t + 1) % Z, t < 0 && (a += Z), a < p) {
          for (a && R.c.push(+S.slice(0, a)), p -= Z; a < p; )
            R.c.push(+S.slice(a, a += Z));
          a = Z - (S = S.slice(a)).length;
        } else
          a -= p;
        for (; a--; S += "0") ;
        R.c.push(+S);
      }
    } else
      R.c = [R.e = 0];
  }
  n.clone = Hn, n.ROUND_UP = 0, n.ROUND_DOWN = 1, n.ROUND_CEIL = 2, n.ROUND_FLOOR = 3, n.ROUND_HALF_UP = 4, n.ROUND_HALF_DOWN = 5, n.ROUND_HALF_EVEN = 6, n.ROUND_HALF_CEIL = 7, n.ROUND_HALF_FLOOR = 8, n.EUCLID = 9, n.config = n.set = function(r) {
    var d, e;
    if (r != null)
      if (typeof r == "object") {
        if (r.hasOwnProperty(d = "DECIMAL_PLACES") && (e = r[d], rt(e, 0, ct, d), c = e), r.hasOwnProperty(d = "ROUNDING_MODE") && (e = r[d], rt(e, 0, 8, d), o = e), r.hasOwnProperty(d = "EXPONENTIAL_AT") && (e = r[d], e && e.pop ? (rt(e[0], -ct, 0, d), rt(e[1], 0, ct, d), g = e[0], v = e[1]) : (rt(e, -ct, ct, d), g = -(v = e < 0 ? -e : e))), r.hasOwnProperty(d = "RANGE"))
          if (e = r[d], e && e.pop)
            rt(e[0], -ct, -1, d), rt(e[1], 1, ct, d), m = e[0], C = e[1];
          else if (rt(e, -ct, ct, d), e)
            m = -(C = e < 0 ? -e : e);
          else
            throw Error(mt + d + " cannot be zero: " + e);
        if (r.hasOwnProperty(d = "CRYPTO"))
          if (e = r[d], e === !!e)
            if (e)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                P = e;
              else
                throw P = !e, Error(mt + "crypto unavailable");
            else
              P = e;
          else
            throw Error(mt + d + " not true or false: " + e);
        if (r.hasOwnProperty(d = "MODULO_MODE") && (e = r[d], rt(e, 0, 9, d), u = e), r.hasOwnProperty(d = "POW_PRECISION") && (e = r[d], rt(e, 0, ct, d), l = e), r.hasOwnProperty(d = "FORMAT"))
          if (e = r[d], typeof e == "object") b = e;
          else throw Error(mt + d + " not an object: " + e);
        if (r.hasOwnProperty(d = "ALPHABET"))
          if (e = r[d], typeof e == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(e))
            F = e.slice(0, 10) == "0123456789", x = e;
          else
            throw Error(mt + d + " invalid: " + e);
      } else
        throw Error(mt + "Object expected: " + r);
    return {
      DECIMAL_PLACES: c,
      ROUNDING_MODE: o,
      EXPONENTIAL_AT: [g, v],
      RANGE: [m, C],
      CRYPTO: P,
      MODULO_MODE: u,
      POW_PRECISION: l,
      FORMAT: b,
      ALPHABET: x
    };
  }, n.isBigNumber = function(r) {
    if (!r || r._isBigNumber !== !0) return !1;
    if (!n.DEBUG) return !0;
    var d, e, f = r.c, T = r.e, t = r.s;
    t: if ({}.toString.call(f) == "[object Array]") {
      if ((t === 1 || t === -1) && T >= -ct && T <= ct && T === St(T)) {
        if (f[0] === 0) {
          if (T === 0 && f.length === 1) return !0;
          break t;
        }
        if (d = (T + 1) % Z, d < 1 && (d += Z), String(f[0]).length == d) {
          for (d = 0; d < f.length; d++)
            if (e = f[d], e < 0 || e >= xt || e !== St(e)) break t;
          if (e !== 0) return !0;
        }
      }
    } else if (f === null && T === null && (t === null || t === 1 || t === -1))
      return !0;
    throw Error(mt + "Invalid BigNumber: " + r);
  }, n.maximum = n.max = function() {
    return _(arguments, -1);
  }, n.minimum = n.min = function() {
    return _(arguments, 1);
  }, n.random = function() {
    var r = 9007199254740992, d = Math.random() * r & 2097151 ? function() {
      return St(Math.random() * r);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(e) {
      var f, T, t, a, i, p = 0, S = [], R = new n(y);
      if (e == null ? e = c : rt(e, 0, ct), a = ri(e / Z), P)
        if (crypto.getRandomValues) {
          for (f = crypto.getRandomValues(new Uint32Array(a *= 2)); p < a; )
            i = f[p] * 131072 + (f[p + 1] >>> 11), i >= 9e15 ? (T = crypto.getRandomValues(new Uint32Array(2)), f[p] = T[0], f[p + 1] = T[1]) : (S.push(i % 1e14), p += 2);
          p = a / 2;
        } else if (crypto.randomBytes) {
          for (f = crypto.randomBytes(a *= 7); p < a; )
            i = (f[p] & 31) * 281474976710656 + f[p + 1] * 1099511627776 + f[p + 2] * 4294967296 + f[p + 3] * 16777216 + (f[p + 4] << 16) + (f[p + 5] << 8) + f[p + 6], i >= 9e15 ? crypto.randomBytes(7).copy(f, p) : (S.push(i % 1e14), p += 7);
          p = a / 7;
        } else
          throw P = !1, Error(mt + "crypto unavailable");
      if (!P)
        for (; p < a; )
          i = d(), i < 9e15 && (S[p++] = i % 1e14);
      for (a = S[--p], e %= Z, a && e && (i = si[Z - e], S[p] = St(a / i) * i); S[p] === 0; S.pop(), p--) ;
      if (p < 0)
        S = [t = 0];
      else {
        for (t = -1; S[0] === 0; S.splice(0, 1), t -= Z) ;
        for (p = 1, i = S[0]; i >= 10; i /= 10, p++) ;
        p < Z && (t -= Z - p);
      }
      return R.e = t, R.c = S, R;
    };
  }(), n.sum = function() {
    for (var r = 1, d = arguments, e = new n(d[0]); r < d.length; ) e = e.plus(d[r++]);
    return e;
  }, O = /* @__PURE__ */ function() {
    var r = "0123456789";
    function d(e, f, T, t) {
      for (var a, i = [0], p, S = 0, R = e.length; S < R; ) {
        for (p = i.length; p--; i[p] *= f) ;
        for (i[0] += t.indexOf(e.charAt(S++)), a = 0; a < i.length; a++)
          i[a] > T - 1 && (i[a + 1] == null && (i[a + 1] = 0), i[a + 1] += i[a] / T | 0, i[a] %= T);
      }
      return i.reverse();
    }
    return function(e, f, T, t, a) {
      var i, p, S, R, N, I, D, V, B = e.indexOf("."), H = c, q = o;
      for (B >= 0 && (R = l, l = 0, e = e.replace(".", ""), V = new n(f), I = V.pow(e.length - B), l = R, V.c = d(
        Ot(bt(I.c), I.e, "0"),
        10,
        T,
        r
      ), V.e = V.c.length), D = d(e, f, T, a ? (i = x, r) : (i = r, x)), S = R = D.length; D[--R] == 0; D.pop()) ;
      if (!D[0]) return i.charAt(0);
      if (B < 0 ? --S : (I.c = D, I.e = S, I.s = t, I = A(I, V, H, q, T), D = I.c, N = I.r, S = I.e), p = S + H + 1, B = D[p], R = T / 2, N = N || p < 0 || D[p + 1] != null, N = q < 4 ? (B != null || N) && (q == 0 || q == (I.s < 0 ? 3 : 2)) : B > R || B == R && (q == 4 || N || q == 6 && D[p - 1] & 1 || q == (I.s < 0 ? 8 : 7)), p < 1 || !D[0])
        e = N ? Ot(i.charAt(1), -H, i.charAt(0)) : i.charAt(0);
      else {
        if (D.length = p, N)
          for (--T; ++D[--p] > T; )
            D[p] = 0, p || (++S, D = [1].concat(D));
        for (R = D.length; !D[--R]; ) ;
        for (B = 0, e = ""; B <= R; e += i.charAt(D[B++])) ;
        e = Ot(e, S, i.charAt(0));
      }
      return e;
    };
  }(), A = /* @__PURE__ */ function() {
    function r(f, T, t) {
      var a, i, p, S, R = 0, N = f.length, I = T % Ut, D = T / Ut | 0;
      for (f = f.slice(); N--; )
        p = f[N] % Ut, S = f[N] / Ut | 0, a = D * p + S * I, i = I * p + a % Ut * Ut + R, R = (i / t | 0) + (a / Ut | 0) + D * S, f[N] = i % t;
      return R && (f = [R].concat(f)), f;
    }
    function d(f, T, t, a) {
      var i, p;
      if (t != a)
        p = t > a ? 1 : -1;
      else
        for (i = p = 0; i < t; i++)
          if (f[i] != T[i]) {
            p = f[i] > T[i] ? 1 : -1;
            break;
          }
      return p;
    }
    function e(f, T, t, a) {
      for (var i = 0; t--; )
        f[t] -= i, i = f[t] < T[t] ? 1 : 0, f[t] = i * a + f[t] - T[t];
      for (; !f[0] && f.length > 1; f.splice(0, 1)) ;
    }
    return function(f, T, t, a, i) {
      var p, S, R, N, I, D, V, B, H, q, W, L, U, X, z, Y, $, Q = f.s == T.s ? 1 : -1, j = f.c, K = T.c;
      if (!j || !j[0] || !K || !K[0])
        return new n(
          // Return NaN if either NaN, or both Infinity or 0.
          !f.s || !T.s || (j ? K && j[0] == K[0] : !K) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            j && j[0] == 0 || !K ? Q * 0 : Q / 0
          )
        );
      for (B = new n(Q), H = B.c = [], S = f.e - T.e, Q = t + S + 1, i || (i = xt, S = Ct(f.e / Z) - Ct(T.e / Z), Q = Q / Z | 0), R = 0; K[R] == (j[R] || 0); R++) ;
      if (K[R] > (j[R] || 0) && S--, Q < 0)
        H.push(1), N = !0;
      else {
        for (X = j.length, Y = K.length, R = 0, Q += 2, I = St(i / (K[0] + 1)), I > 1 && (K = r(K, I, i), j = r(j, I, i), Y = K.length, X = j.length), U = Y, q = j.slice(0, Y), W = q.length; W < Y; q[W++] = 0) ;
        $ = K.slice(), $ = [0].concat($), z = K[0], K[1] >= i / 2 && z++;
        do {
          if (I = 0, p = d(K, q, Y, W), p < 0) {
            if (L = q[0], Y != W && (L = L * i + (q[1] || 0)), I = St(L / z), I > 1)
              for (I >= i && (I = i - 1), D = r(K, I, i), V = D.length, W = q.length; d(D, q, V, W) == 1; )
                I--, e(D, Y < V ? $ : K, V, i), V = D.length, p = 1;
            else
              I == 0 && (p = I = 1), D = K.slice(), V = D.length;
            if (V < W && (D = [0].concat(D)), e(q, D, W, i), W = q.length, p == -1)
              for (; d(K, q, Y, W) < 1; )
                I++, e(q, Y < W ? $ : K, W, i), W = q.length;
          } else p === 0 && (I++, q = [0]);
          H[R++] = I, q[0] ? q[W++] = j[U] || 0 : (q = [j[U]], W = 1);
        } while ((U++ < X || q[0] != null) && Q--);
        N = q[0] != null, H[0] || H.splice(0, 1);
      }
      if (i == xt) {
        for (R = 1, Q = H[0]; Q >= 10; Q /= 10, R++) ;
        M(B, t + (B.e = R + S * Z - 1) + 1, a, N);
      } else
        B.e = S, B.r = +N;
      return B;
    };
  }();
  function s(r, d, e, f) {
    var T, t, a, i, p;
    if (e == null ? e = o : rt(e, 0, 8), !r.c) return r.toString();
    if (T = r.c[0], a = r.e, d == null)
      p = bt(r.c), p = f == 1 || f == 2 && (a <= g || a >= v) ? Ue(p, a) : Ot(p, a, "0");
    else if (r = M(new n(r), d, e), t = r.e, p = bt(r.c), i = p.length, f == 1 || f == 2 && (d <= t || t <= g)) {
      for (; i < d; p += "0", i++) ;
      p = Ue(p, t);
    } else if (d -= a, p = Ot(p, t, "0"), t + 1 > i) {
      if (--d > 0) for (p += "."; d--; p += "0") ;
    } else if (d += t - i, d > 0)
      for (t + 1 == i && (p += "."); d--; p += "0") ;
    return r.s < 0 && T ? "-" + p : p;
  }
  function _(r, d) {
    for (var e, f, T = 1, t = new n(r[0]); T < r.length; T++)
      f = new n(r[T]), (!f.s || (e = zt(t, f)) === d || e === 0 && t.s === d) && (t = f);
    return t;
  }
  function k(r, d, e) {
    for (var f = 1, T = d.length; !d[--T]; d.pop()) ;
    for (T = d[0]; T >= 10; T /= 10, f++) ;
    return (e = f + e * Z - 1) > C ? r.c = r.e = null : e < m ? r.c = [r.e = 0] : (r.e = e, r.c = d), r;
  }
  E = /* @__PURE__ */ function() {
    var r = /^(-?)0([xbo])(?=\w[\w.]*$)/i, d = /^([^.]+)\.$/, e = /^\.([^.]+)$/, f = /^-?(Infinity|NaN)$/, T = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(t, a, i, p) {
      var S, R = i ? a : a.replace(T, "");
      if (f.test(R))
        t.s = isNaN(R) ? null : R < 0 ? -1 : 1;
      else {
        if (!i && (R = R.replace(r, function(N, I, D) {
          return S = (D = D.toLowerCase()) == "x" ? 16 : D == "b" ? 2 : 8, !p || p == S ? I : N;
        }), p && (S = p, R = R.replace(d, "$1").replace(e, "0.$1")), a != R))
          return new n(R, S);
        if (n.DEBUG)
          throw Error(mt + "Not a" + (p ? " base " + p : "") + " number: " + a);
        t.s = null;
      }
      t.c = t.e = null;
    };
  }();
  function M(r, d, e, f) {
    var T, t, a, i, p, S, R, N = r.c, I = si;
    if (N) {
      t: {
        for (T = 1, i = N[0]; i >= 10; i /= 10, T++) ;
        if (t = d - T, t < 0)
          t += Z, a = d, p = N[S = 0], R = St(p / I[T - a - 1] % 10);
        else if (S = ri((t + 1) / Z), S >= N.length)
          if (f) {
            for (; N.length <= S; N.push(0)) ;
            p = R = 0, T = 1, t %= Z, a = t - Z + 1;
          } else
            break t;
        else {
          for (p = i = N[S], T = 1; i >= 10; i /= 10, T++) ;
          t %= Z, a = t - Z + T, R = a < 0 ? 0 : St(p / I[T - a - 1] % 10);
        }
        if (f = f || d < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        N[S + 1] != null || (a < 0 ? p : p % I[T - a - 1]), f = e < 4 ? (R || f) && (e == 0 || e == (r.s < 0 ? 3 : 2)) : R > 5 || R == 5 && (e == 4 || f || e == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (t > 0 ? a > 0 ? p / I[T - a] : 0 : N[S - 1]) % 10 & 1 || e == (r.s < 0 ? 8 : 7)), d < 1 || !N[0])
          return N.length = 0, f ? (d -= r.e + 1, N[0] = I[(Z - d % Z) % Z], r.e = -d || 0) : N[0] = r.e = 0, r;
        if (t == 0 ? (N.length = S, i = 1, S--) : (N.length = S + 1, i = I[Z - t], N[S] = a > 0 ? St(p / I[T - a] % I[a]) * i : 0), f)
          for (; ; )
            if (S == 0) {
              for (t = 1, a = N[0]; a >= 10; a /= 10, t++) ;
              for (a = N[0] += i, i = 1; a >= 10; a /= 10, i++) ;
              t != i && (r.e++, N[0] == xt && (N[0] = 1));
              break;
            } else {
              if (N[S] += i, N[S] != xt) break;
              N[S--] = 0, i = 1;
            }
        for (t = N.length; N[--t] === 0; N.pop()) ;
      }
      r.e > C ? r.c = r.e = null : r.e < m && (r.c = [r.e = 0]);
    }
    return r;
  }
  function G(r) {
    var d, e = r.e;
    return e === null ? r.toString() : (d = bt(r.c), d = e <= g || e >= v ? Ue(d, e) : Ot(d, e, "0"), r.s < 0 ? "-" + d : d);
  }
  return w.absoluteValue = w.abs = function() {
    var r = new n(this);
    return r.s < 0 && (r.s = 1), r;
  }, w.comparedTo = function(r, d) {
    return zt(this, new n(r, d));
  }, w.decimalPlaces = w.dp = function(r, d) {
    var e, f, T, t = this;
    if (r != null)
      return rt(r, 0, ct), d == null ? d = o : rt(d, 0, 8), M(new n(t), r + t.e + 1, d);
    if (!(e = t.c)) return null;
    if (f = ((T = e.length - 1) - Ct(this.e / Z)) * Z, T = e[T]) for (; T % 10 == 0; T /= 10, f--) ;
    return f < 0 && (f = 0), f;
  }, w.dividedBy = w.div = function(r, d) {
    return A(this, new n(r, d), c, o);
  }, w.dividedToIntegerBy = w.idiv = function(r, d) {
    return A(this, new n(r, d), 0, 1);
  }, w.exponentiatedBy = w.pow = function(r, d) {
    var e, f, T, t, a, i, p, S, R, N = this;
    if (r = new n(r), r.c && !r.isInteger())
      throw Error(mt + "Exponent not an integer: " + G(r));
    if (d != null && (d = new n(d)), i = r.e > 14, !N.c || !N.c[0] || N.c[0] == 1 && !N.e && N.c.length == 1 || !r.c || !r.c[0])
      return R = new n(Math.pow(+G(N), i ? r.s * (2 - Be(r)) : +G(r))), d ? R.mod(d) : R;
    if (p = r.s < 0, d) {
      if (d.c ? !d.c[0] : !d.s) return new n(NaN);
      f = !p && N.isInteger() && d.isInteger(), f && (N = N.mod(d));
    } else {
      if (r.e > 9 && (N.e > 0 || N.e < -1 || (N.e == 0 ? N.c[0] > 1 || i && N.c[1] >= 24e7 : N.c[0] < 8e13 || i && N.c[0] <= 9999975e7)))
        return t = N.s < 0 && Be(r) ? -0 : 0, N.e > -1 && (t = 1 / t), new n(p ? 1 / t : t);
      l && (t = ri(l / Z + 2));
    }
    for (i ? (e = new n(0.5), p && (r.s = 1), S = Be(r)) : (T = Math.abs(+G(r)), S = T % 2), R = new n(y); ; ) {
      if (S) {
        if (R = R.times(N), !R.c) break;
        t ? R.c.length > t && (R.c.length = t) : f && (R = R.mod(d));
      }
      if (T) {
        if (T = St(T / 2), T === 0) break;
        S = T % 2;
      } else if (r = r.times(e), M(r, r.e + 1, 1), r.e > 14)
        S = Be(r);
      else {
        if (T = +G(r), T === 0) break;
        S = T % 2;
      }
      N = N.times(N), t ? N.c && N.c.length > t && (N.c.length = t) : f && (N = N.mod(d));
    }
    return f ? R : (p && (R = y.div(R)), d ? R.mod(d) : t ? M(R, l, o, a) : R);
  }, w.integerValue = function(r) {
    var d = new n(this);
    return r == null ? r = o : rt(r, 0, 8), M(d, d.e + 1, r);
  }, w.isEqualTo = w.eq = function(r, d) {
    return zt(this, new n(r, d)) === 0;
  }, w.isFinite = function() {
    return !!this.c;
  }, w.isGreaterThan = w.gt = function(r, d) {
    return zt(this, new n(r, d)) > 0;
  }, w.isGreaterThanOrEqualTo = w.gte = function(r, d) {
    return (d = zt(this, new n(r, d))) === 1 || d === 0;
  }, w.isInteger = function() {
    return !!this.c && Ct(this.e / Z) > this.c.length - 2;
  }, w.isLessThan = w.lt = function(r, d) {
    return zt(this, new n(r, d)) < 0;
  }, w.isLessThanOrEqualTo = w.lte = function(r, d) {
    return (d = zt(this, new n(r, d))) === -1 || d === 0;
  }, w.isNaN = function() {
    return !this.s;
  }, w.isNegative = function() {
    return this.s < 0;
  }, w.isPositive = function() {
    return this.s > 0;
  }, w.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, w.minus = function(r, d) {
    var e, f, T, t, a = this, i = a.s;
    if (r = new n(r, d), d = r.s, !i || !d) return new n(NaN);
    if (i != d)
      return r.s = -d, a.plus(r);
    var p = a.e / Z, S = r.e / Z, R = a.c, N = r.c;
    if (!p || !S) {
      if (!R || !N) return R ? (r.s = -d, r) : new n(N ? a : NaN);
      if (!R[0] || !N[0])
        return N[0] ? (r.s = -d, r) : new n(R[0] ? a : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          o == 3 ? -0 : 0
        ));
    }
    if (p = Ct(p), S = Ct(S), R = R.slice(), i = p - S) {
      for ((t = i < 0) ? (i = -i, T = R) : (S = p, T = N), T.reverse(), d = i; d--; T.push(0)) ;
      T.reverse();
    } else
      for (f = (t = (i = R.length) < (d = N.length)) ? i : d, i = d = 0; d < f; d++)
        if (R[d] != N[d]) {
          t = R[d] < N[d];
          break;
        }
    if (t && (T = R, R = N, N = T, r.s = -r.s), d = (f = N.length) - (e = R.length), d > 0) for (; d--; R[e++] = 0) ;
    for (d = xt - 1; f > i; ) {
      if (R[--f] < N[f]) {
        for (e = f; e && !R[--e]; R[e] = d) ;
        --R[e], R[f] += xt;
      }
      R[f] -= N[f];
    }
    for (; R[0] == 0; R.splice(0, 1), --S) ;
    return R[0] ? k(r, R, S) : (r.s = o == 3 ? -1 : 1, r.c = [r.e = 0], r);
  }, w.modulo = w.mod = function(r, d) {
    var e, f, T = this;
    return r = new n(r, d), !T.c || !r.s || r.c && !r.c[0] ? new n(NaN) : !r.c || T.c && !T.c[0] ? new n(T) : (u == 9 ? (f = r.s, r.s = 1, e = A(T, r, 0, 3), r.s = f, e.s *= f) : e = A(T, r, 0, u), r = T.minus(e.times(r)), !r.c[0] && u == 1 && (r.s = T.s), r);
  }, w.multipliedBy = w.times = function(r, d) {
    var e, f, T, t, a, i, p, S, R, N, I, D, V, B, H, q = this, W = q.c, L = (r = new n(r, d)).c;
    if (!W || !L || !W[0] || !L[0])
      return !q.s || !r.s || W && !W[0] && !L || L && !L[0] && !W ? r.c = r.e = r.s = null : (r.s *= q.s, !W || !L ? r.c = r.e = null : (r.c = [0], r.e = 0)), r;
    for (f = Ct(q.e / Z) + Ct(r.e / Z), r.s *= q.s, p = W.length, N = L.length, p < N && (V = W, W = L, L = V, T = p, p = N, N = T), T = p + N, V = []; T--; V.push(0)) ;
    for (B = xt, H = Ut, T = N; --T >= 0; ) {
      for (e = 0, I = L[T] % H, D = L[T] / H | 0, a = p, t = T + a; t > T; )
        S = W[--a] % H, R = W[a] / H | 0, i = D * S + R * I, S = I * S + i % H * H + V[t] + e, e = (S / B | 0) + (i / H | 0) + D * R, V[t--] = S % B;
      V[t] = e;
    }
    return e ? ++f : V.splice(0, 1), k(r, V, f);
  }, w.negated = function() {
    var r = new n(this);
    return r.s = -r.s || null, r;
  }, w.plus = function(r, d) {
    var e, f = this, T = f.s;
    if (r = new n(r, d), d = r.s, !T || !d) return new n(NaN);
    if (T != d)
      return r.s = -d, f.minus(r);
    var t = f.e / Z, a = r.e / Z, i = f.c, p = r.c;
    if (!t || !a) {
      if (!i || !p) return new n(T / 0);
      if (!i[0] || !p[0]) return p[0] ? r : new n(i[0] ? f : T * 0);
    }
    if (t = Ct(t), a = Ct(a), i = i.slice(), T = t - a) {
      for (T > 0 ? (a = t, e = p) : (T = -T, e = i), e.reverse(); T--; e.push(0)) ;
      e.reverse();
    }
    for (T = i.length, d = p.length, T - d < 0 && (e = p, p = i, i = e, d = T), T = 0; d; )
      T = (i[--d] = i[d] + p[d] + T) / xt | 0, i[d] = xt === i[d] ? 0 : i[d] % xt;
    return T && (i = [T].concat(i), ++a), k(r, i, a);
  }, w.precision = w.sd = function(r, d) {
    var e, f, T, t = this;
    if (r != null && r !== !!r)
      return rt(r, 1, ct), d == null ? d = o : rt(d, 0, 8), M(new n(t), r, d);
    if (!(e = t.c)) return null;
    if (T = e.length - 1, f = T * Z + 1, T = e[T]) {
      for (; T % 10 == 0; T /= 10, f--) ;
      for (T = e[0]; T >= 10; T /= 10, f++) ;
    }
    return r && t.e + 1 > f && (f = t.e + 1), f;
  }, w.shiftedBy = function(r) {
    return rt(r, -ai, ai), this.times("1e" + r);
  }, w.squareRoot = w.sqrt = function() {
    var r, d, e, f, T, t = this, a = t.c, i = t.s, p = t.e, S = c + 4, R = new n("0.5");
    if (i !== 1 || !a || !a[0])
      return new n(!i || i < 0 && (!a || a[0]) ? NaN : a ? t : 1 / 0);
    if (i = Math.sqrt(+G(t)), i == 0 || i == 1 / 0 ? (d = bt(a), (d.length + p) % 2 == 0 && (d += "0"), i = Math.sqrt(+d), p = Ct((p + 1) / 2) - (p < 0 || p % 2), i == 1 / 0 ? d = "5e" + p : (d = i.toExponential(), d = d.slice(0, d.indexOf("e") + 1) + p), e = new n(d)) : e = new n(i + ""), e.c[0]) {
      for (p = e.e, i = p + S, i < 3 && (i = 0); ; )
        if (T = e, e = R.times(T.plus(A(t, T, S, 1))), bt(T.c).slice(0, i) === (d = bt(e.c)).slice(0, i))
          if (e.e < p && --i, d = d.slice(i - 3, i + 1), d == "9999" || !f && d == "4999") {
            if (!f && (M(T, T.e + c + 2, 0), T.times(T).eq(t))) {
              e = T;
              break;
            }
            S += 4, i += 4, f = 1;
          } else {
            (!+d || !+d.slice(1) && d.charAt(0) == "5") && (M(e, e.e + c + 2, 1), r = !e.times(e).eq(t));
            break;
          }
    }
    return M(e, e.e + c + 1, o, r);
  }, w.toExponential = function(r, d) {
    return r != null && (rt(r, 0, ct), r++), s(this, r, d, 1);
  }, w.toFixed = function(r, d) {
    return r != null && (rt(r, 0, ct), r = r + this.e + 1), s(this, r, d);
  }, w.toFormat = function(r, d, e) {
    var f, T = this;
    if (e == null)
      r != null && d && typeof d == "object" ? (e = d, d = null) : r && typeof r == "object" ? (e = r, r = d = null) : e = b;
    else if (typeof e != "object")
      throw Error(mt + "Argument not an object: " + e);
    if (f = T.toFixed(r, d), T.c) {
      var t, a = f.split("."), i = +e.groupSize, p = +e.secondaryGroupSize, S = e.groupSeparator || "", R = a[0], N = a[1], I = T.s < 0, D = I ? R.slice(1) : R, V = D.length;
      if (p && (t = i, i = p, p = t, V -= t), i > 0 && V > 0) {
        for (t = V % i || i, R = D.substr(0, t); t < V; t += i) R += S + D.substr(t, i);
        p > 0 && (R += S + D.slice(t)), I && (R = "-" + R);
      }
      f = N ? R + (e.decimalSeparator || "") + ((p = +e.fractionGroupSize) ? N.replace(
        new RegExp("\\d{" + p + "}\\B", "g"),
        "$&" + (e.fractionGroupSeparator || "")
      ) : N) : R;
    }
    return (e.prefix || "") + f + (e.suffix || "");
  }, w.toFraction = function(r) {
    var d, e, f, T, t, a, i, p, S, R, N, I, D = this, V = D.c;
    if (r != null && (i = new n(r), !i.isInteger() && (i.c || i.s !== 1) || i.lt(y)))
      throw Error(mt + "Argument " + (i.isInteger() ? "out of range: " : "not an integer: ") + G(i));
    if (!V) return new n(D);
    for (d = new n(y), S = e = new n(y), f = p = new n(y), I = bt(V), t = d.e = I.length - D.e - 1, d.c[0] = si[(a = t % Z) < 0 ? Z + a : a], r = !r || i.comparedTo(d) > 0 ? t > 0 ? d : S : i, a = C, C = 1 / 0, i = new n(I), p.c[0] = 0; R = A(i, d, 0, 1), T = e.plus(R.times(f)), T.comparedTo(r) != 1; )
      e = f, f = T, S = p.plus(R.times(T = S)), p = T, d = i.minus(R.times(T = d)), i = T;
    return T = A(r.minus(e), f, 0, 1), p = p.plus(T.times(S)), e = e.plus(T.times(f)), p.s = S.s = D.s, t = t * 2, N = A(S, f, t, o).minus(D).abs().comparedTo(
      A(p, e, t, o).minus(D).abs()
    ) < 1 ? [S, f] : [p, e], C = a, N;
  }, w.toNumber = function() {
    return +G(this);
  }, w.toPrecision = function(r, d) {
    return r != null && rt(r, 1, ct), s(this, r, d, 2);
  }, w.toString = function(r) {
    var d, e = this, f = e.s, T = e.e;
    return T === null ? f ? (d = "Infinity", f < 0 && (d = "-" + d)) : d = "NaN" : (r == null ? d = T <= g || T >= v ? Ue(bt(e.c), T) : Ot(bt(e.c), T, "0") : r === 10 && F ? (e = M(new n(e), c + T + 1, o), d = Ot(bt(e.c), e.e, "0")) : (rt(r, 2, x.length, "Base"), d = O(Ot(bt(e.c), T, "0"), 10, r, f, !0)), f < 0 && e.c[0] && (d = "-" + d)), d;
  }, w.valueOf = w.toJSON = function() {
    return G(this);
  }, w._isBigNumber = !0, w[Symbol.toStringTag] = "BigNumber", w[Symbol.for("nodejs.util.inspect.custom")] = w.valueOf, h != null && n.set(h), n;
}
function Ct(h) {
  var A = h | 0;
  return h > 0 || h === A ? A : A - 1;
}
function bt(h) {
  for (var A, O, E = 1, w = h.length, y = h[0] + ""; E < w; ) {
    for (A = h[E++] + "", O = Z - A.length; O--; A = "0" + A) ;
    y += A;
  }
  for (w = y.length; y.charCodeAt(--w) === 48; ) ;
  return y.slice(0, w + 1 || 1);
}
function zt(h, A) {
  var O, E, w = h.c, y = A.c, c = h.s, o = A.s, g = h.e, v = A.e;
  if (!c || !o) return null;
  if (O = w && !w[0], E = y && !y[0], O || E) return O ? E ? 0 : -o : c;
  if (c != o) return c;
  if (O = c < 0, E = g == v, !w || !y) return E ? 0 : !w ^ O ? 1 : -1;
  if (!E) return g > v ^ O ? 1 : -1;
  for (o = (g = w.length) < (v = y.length) ? g : v, c = 0; c < o; c++) if (w[c] != y[c]) return w[c] > y[c] ^ O ? 1 : -1;
  return g == v ? 0 : g > v ^ O ? 1 : -1;
}
function rt(h, A, O, E) {
  if (h < A || h > O || h !== St(h))
    throw Error(mt + (E || "Argument") + (typeof h == "number" ? h < A || h > O ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(h));
}
function Be(h) {
  var A = h.c.length - 1;
  return Ct(h.e / Z) == A && h.c[A] % 2 != 0;
}
function Ue(h, A) {
  return (h.length > 1 ? h.charAt(0) + "." + h.slice(1) : h) + (A < 0 ? "e" : "e+") + A;
}
function Ot(h, A, O) {
  var E, w;
  if (A < 0) {
    for (w = O + "."; ++A; w += O) ;
    h = w + h;
  } else if (E = h.length, ++A > E) {
    for (w = O, A -= E; --A; w += O) ;
    h += w;
  } else A < E && (h = h.slice(0, A) + "." + h.slice(A));
  return h;
}
var Gt = Hn();
Gt.config({ EXPONENTIAL_AT: [-100, 100] });
const Xr = (h, A) => {
  let O = 0;
  return function() {
    let E = +/* @__PURE__ */ new Date();
    (E - O > A || !O) && (h.apply(this, arguments), O = E);
  };
}, Lt = (h) => h == null || typeof h == "string" && (h = h.replace(/[^0-9.-]/g, "").replace(/(\..*)\./g, ""), !h) ? 0 : new Gt(h).toNumber(), Pn = (h, A) => (h = Lt(h), A = Lt(A), new Gt(h).times(A)), Tn = (h, A) => (h = Lt(h), A = Lt(A), new Gt(h).dividedBy(A)), oi = (h, A) => (h = Lt(h), A = Lt(A), new Gt(h).plus(A)), ft = (h, A) => (h = Lt(h), A = Lt(A), new Gt(h).minus(A)), Yr = (h, A, O, E) => {
  if (!h) return "";
  h instanceof Gt || (h = Lt(h));
  const w = {
    decimalSeparator: ".",
    groupSeparator: ",",
    groupSize: 3,
    secondaryGroupSize: 0,
    ...E
  };
  return new Gt(h).toFormat(
    A || 0,
    Gt.ROUND_FLOOR,
    w
  );
}, An = {
  width: 500,
  // 总宽
  height: 340,
  // 总高
  marginX: 50,
  // 右侧数量宽度
  marginY: 20,
  // 底部价格高度
  fontSize: 12,
  // // 坐标轴字体大小
  fontColor: "#909198",
  // 坐标轴字体颜色
  bidsColor: "#0BC688",
  // 买盘颜色
  asksColor: "#F14B4B",
  // 卖盘颜色
  bidsBgColor: "rgba(11,198,136,0.2)",
  // 买盘背景颜色
  asksBgColor: "rgba(241,75,75,0.2)",
  // 卖盘背景颜色
  dottedBgColor: "rgba(91,89,89,0.02)",
  // 虚线背景色
  axisColor: "#5B5959",
  // 中线及刻度线颜色
  axisXBgColor: "#F7F7F7",
  // X坐标轴背景色
  axisYBgColor: "#F7F7F7",
  // Y坐标轴背景色
  axisXBorderColor: "#F7F7F7",
  // X坐标轴边框色
  axisYBorderColor: "#F7F7F7",
  // Y坐标轴边框色
  axisLineWidth: 4,
  // 刻度线宽度
  tipFontSize: 14,
  // 提示字体大小
  tipColor: "#FFFFFF",
  // 飘窗字体颜色
  tipPriceText: "价格",
  tipTotalText: "总额",
  wheel: 50
  // 默认鼠标滚轮步长，数值越大，展示的数据量越多
}, Kr = {
  currentPrice: 0,
  // 当前价格
  priceScale: 2,
  // 价格精度
  qtyScale: 2
  // 数量精度
}, $r = {
  bids: [],
  asks: []
}, jr = /* @__PURE__ */ hi({
  name: "depthChart",
  __name: "depthChart",
  props: {
    options: {
      type: Object,
      default: () => An
    },
    // 交易对数据
    symbolData: {
      type: Object,
      default: () => Kr
    },
    depthData: {
      type: Object,
      default: () => $r
    }
  },
  setup(h) {
    const { appContext: A } = ci();
    A.app.use(Wr, {
      prefix: "kv"
    });
    const O = h, E = Et(() => ({
      ...An,
      ...O.options
    })), w = Pt(E.value.width || 500), y = Pt(E.value.height || 340), c = Pt(ft(w.value, E.value.marginX).toNumber()), o = Pt(c.value / 2), g = Pt(ft(y.value, E.value.marginX).toNumber()), v = Pt(E.value.wheel || 50), m = Et(() => (O.depthData.bids || []).map((f) => Array.isArray(f) ? {
      ...f,
      price: f[0],
      totalAmount: f[1]
    } : f).filter((f) => f.price < O.symbolData.currentPrice).slice(0, v.value)), C = Et(() => (O.depthData.asks || []).map((f) => Array.isArray(f) ? {
      ...f,
      price: f[0],
      totalAmount: f[1]
    } : f).filter((f) => f.price > O.symbolData.currentPrice).slice(-v.value)), P = 10, u = Et(() => {
      const e = O.depthData.bids.length, f = O.depthData.asks.length;
      return Math.max(e, f, P);
    }), l = Pt(0), b = Et(() => {
      const e = O.symbolData.currentPrice, f = m.value.length ? ft(e, m.value[m.value.length - 1].price).dividedBy(3).toNumber() : 0, T = +f > 0 ? [ft(e, Pn(f, 2)), ft(e, f)] : [0, 0], t = C.value.length ? ft(C.value[0].price, e).dividedBy(3).toNumber() : 0, a = +t > 0 ? [
        oi(e, t).toNumber(),
        oi(e, Pn(t, 2)).toNumber()
      ] : [0, 0];
      return [...T, e, ...a].map(
        (i) => Yr(i, O.symbolData.priceScale)
      );
    }), x = Et(
      () => {
        var e, f;
        return Math.max(((e = m.value[m.value.length - 1]) == null ? void 0 : e.totalAmount) || 0, ((f = C.value[0]) == null ? void 0 : f.totalAmount) || 0);
      }
    ), F = Et(() => {
      const e = g.value > 800 ? 20 : 10, f = oi(x.value, x.value % 10).toNumber(), T = Tn(f, e);
      return Array.from(new Array(e)).map((t, a) => {
        const i = T.multipliedBy(a).toFormat(O.symbolData.qtyScale), p = Tn(g.value, e).multipliedBy(a), S = ft(g.value, p).toFixed(2);
        return {
          currentScaleTotal: i,
          y: S
        };
      }).filter((t) => +t.currentScaleTotal > 0);
    }), n = Et(() => {
      if (!m.value.length || !x.value) return null;
      const e = g.value - E.value.marginY, f = O.symbolData.currentPrice, T = ft(f, m.value[m.value.length - 1].price);
      let t = "";
      return {
        data: [...m.value].reverse().map((i, p) => {
          const S = +ft(i.price, f).dividedBy(T).multipliedBy(o.value).plus(o.value).toFixed(O.symbolData.priceScale), R = Math.max(
            +ft(x.value, i.totalAmount).dividedBy(x.value).multipliedBy(e).toFixed(O.symbolData.qtyScale + 1),
            E.value.marginY
          );
          return p === 0 ? t += `M-1 ${g.value} V${R} ` : p === m.value.length - 1 ? t += `H${S} V${R} V${g.value}` : t += `H${S} V${R} `, { ...i, x: S, y: R };
        }),
        path: t
      };
    }), s = Et(() => {
      if (!C.value.length || !x.value) return null;
      const e = g.value - E.value.marginY, f = O.symbolData.currentPrice, T = ft(C.value[0].price, f);
      let t = "";
      return {
        data: C.value.map((i, p) => {
          const S = +ft(i.price, f).dividedBy(T).multipliedBy(o.value).plus(o.value).toFixed(O.symbolData.priceScale), R = Math.max(
            +ft(x.value, i.totalAmount).dividedBy(x.value).multipliedBy(e).toFixed(O.symbolData.qtyScale + 1),
            E.value.marginY
          );
          return p === 0 ? t += `M${c.value} ${g.value} V${R} ` : p === C.value.length - 1 ? t += `H${S} V${R} V${g.value}` : t += `H${S} V${R} `, { ...i, x: S, y: R };
        }),
        path: t
      };
    }), _ = Et(() => {
      var T, t, a, i, p, S;
      const e = l.value;
      if (!l || e > c.value) return;
      let f;
      if (e < o.value) {
        const R = ((a = (t = (T = n.value) == null ? void 0 : T.data) == null ? void 0 : t.slice()) == null ? void 0 : a.reverse()) || [];
        if (!R.length) return;
        for (let N = 0; N < R.length; N++) {
          const I = R[N];
          if (e > +I.x) {
            f = I;
            break;
          }
        }
      } else {
        const R = ((S = (p = (i = s.value) == null ? void 0 : i.data) == null ? void 0 : p.slice()) == null ? void 0 : S.reverse()) || [];
        if (!R.length) return;
        for (let N = 0; N < R.length; N++) {
          const I = R[N];
          if (e < +I.x) {
            f = I;
            break;
          }
        }
      }
      return f;
    }), k = Pt(), M = Pt(0), G = Pt(), r = () => {
      G.value && (w.value = G.value.clientWidth, y.value = G.value.clientHeight || y.value, c.value = ft(w.value, E.value.marginX).toNumber(), o.value = c.value / 2, g.value = ft(y.value, E.value.marginY).toNumber(), window.addEventListener("resize", r));
    };
    di(() => {
      r();
    });
    const d = Xr((e) => {
      e.evt.preventDefault(), l.value = e.evt.offsetX;
    }, 300);
    return (e, f) => {
      const T = qt("kv-path"), t = qt("kv-Rect"), a = qt("kv-text"), i = qt("kv-circle"), p = qt("kv-group"), S = qt("kv-layer"), R = qt("kv-stage");
      return Yt(), Xe("div", {
        class: "depth-chart",
        ref_key: "depthChartEl",
        ref: G
      }, [
        ut(R, {
          config: { width: w.value, height: y.value },
          onWheel: f[0] || (f[0] = (N) => {
            N.evt.preventDefault(), N.evt.wheelDelta < 0 ? v.value = Math.min(v.value + 2, u.value) : v.value = Math.max(v.value - 2, P);
          }),
          onMousemove: Xn(d),
          onMouseleave: f[1] || (f[1] = () => l.value = 0),
          onTouchmove: f[2] || (f[2] = (N) => {
            N.evt.preventDefault(), N.evt.targetTouches.length > 1 ? (M.value && (Math.abs(N.evt.targetTouches[0].pageX - N.evt.targetTouches[1].pageX) < M.value ? v.value = Math.min(v.value + 2, u.value) : v.value = Math.max(v.value - 2, P)), M.value = Math.abs(N.evt.targetTouches[0].pageX - N.evt.targetTouches[1].pageX)) : !M.value && (l.value = N.evt.changedTouches[0].pageX);
          }),
          onTouchend: f[3] || (f[3] = (N) => {
            N.evt.preventDefault(), l.value = 0, M.value = 0;
          })
        }, {
          default: Qt(() => [
            ut(S, null, {
              default: Qt(() => {
                var N, I;
                return [
                  ut(T, {
                    fill: E.value.bidsBgColor,
                    stroke: E.value.bidsColor,
                    strokeWidth: 1,
                    data: (N = n.value) == null ? void 0 : N.path
                  }, null, 8, ["fill", "stroke", "data"]),
                  ut(T, {
                    fill: E.value.asksBgColor,
                    stroke: E.value.asksColor,
                    strokeWidth: 1,
                    data: (I = s.value) == null ? void 0 : I.path
                  }, null, 8, ["fill", "stroke", "data"]),
                  ut(T, {
                    stroke: E.value.axisColor,
                    strokeWidth: 1,
                    data: `M${o.value} 0 L${o.value} ${g.value} Z`
                  }, null, 8, ["stroke", "data"]),
                  _.value ? (Yt(), Ye(p, { key: 0 }, {
                    default: Qt(() => {
                      var D, V, B, H, q, W, L, U, X, z, Y, $, Q, j, K, ht;
                      return [
                        ut(T, {
                          data: +_.value.x < o.value ? `M0 ${(D = _.value) == null ? void 0 : D.y} L${o.value} ${(V = _.value) == null ? void 0 : V.y} Z` : `M${o.value} ${(B = _.value) == null ? void 0 : B.y} L${c.value} ${(H = _.value) == null ? void 0 : H.y} Z`,
                          stroke: +_.value.x < o.value ? E.value.bidsColor : E.value.asksColor,
                          strokeWidth: 0.5,
                          dash: [2, 4]
                        }, null, 8, ["data", "stroke"]),
                        ut(T, {
                          data: +_.value.x < o.value ? `M-1 -1 L-1 ${y.value} L${(q = _.value) == null ? void 0 : q.x} ${y.value} L${(W = _.value) == null ? void 0 : W.x} -1 Z` : `M${c.value + 1} -1 L${(L = _.value) == null ? void 0 : L.x} -1 L${(U = _.value) == null ? void 0 : U.x} ${y.value} L${c.value + 1} ${y.value} Z`,
                          stroke: +_.value.x < o.value ? E.value.bidsColor : E.value.asksColor,
                          fill: E.value.dottedBgColor,
                          strokeWidth: 0.5,
                          dash: [2, 4]
                        }, null, 8, ["data", "stroke", "fill"]),
                        ut(t, {
                          width: (((z = (X = k.value) == null ? void 0 : X.getNode()) == null ? void 0 : z.textWidth) || 0) + 40,
                          height: ((($ = (Y = k.value) == null ? void 0 : Y.getNode()) == null ? void 0 : $.textHeight) || 0) * 4.3,
                          x: +_.value.x < o.value ? +_.value.x + 50 : +_.value.x - (((j = (Q = k.value) == null ? void 0 : Q.getNode()) == null ? void 0 : j.textWidth) || 0) - 100,
                          cornerRadius: 8,
                          y: Math.max(10, +_.value.y - 100),
                          fill: +_.value.x < o.value ? E.value.bidsColor : E.value.asksColor
                        }, null, 8, ["width", "height", "x", "y", "fill"]),
                        ut(a, {
                          text: `${E.value.tipPriceText}  ${_.value.price}
${E.value.tipTotalText}  ${+_.value.totalAmount > 999, _.value.totalAmount}`,
                          padding: 10,
                          lineHeight: 1.5,
                          fill: E.value.tipColor,
                          fontSize: E.value.tipFontSize,
                          x: +_.value.x < o.value ? +_.value.x + 50 : +_.value.x - (((ht = (K = k.value) == null ? void 0 : K.getNode()) == null ? void 0 : ht.textWidth) || 0) - 100,
                          y: Math.max(10, +_.value.y - 100),
                          ref_key: "overlayEl",
                          ref: k
                        }, null, 8, ["text", "fill", "fontSize", "x", "y"]),
                        ut(i, {
                          fill: +_.value.x < o.value ? E.value.bidsColor : E.value.asksColor,
                          width: 6,
                          height: 6,
                          x: +_.value.x,
                          y: +_.value.y
                        }, null, 8, ["fill", "x", "y"])
                      ];
                    }),
                    _: 1
                  })) : Yn("", !0),
                  ut(T, {
                    stroke: E.value.axisXBorderColor,
                    fill: E.value.axisXBgColor,
                    strokeWidth: 1,
                    data: `M0 ${y.value} L0 ${g.value + 1} L${w.value} ${g.value + 1} L${w.value} ${y.value} Z`
                  }, null, 8, ["stroke", "fill", "data"]),
                  (Yt(!0), Xe(_i, null, mi(b.value, (D, V) => (Yt(), Ye(p, { key: V }, {
                    default: Qt(() => [
                      ut(T, {
                        stroke: E.value.axisColor,
                        strokeWidth: 1,
                        data: `M${c.value / 6 * (V + 1)} ${g.value} L${c.value / 6 * (V + 1)} ${g.value + E.value.axisLineWidth} Z`
                      }, null, 8, ["stroke", "data"]),
                      ut(a, {
                        text: D,
                        fill: E.value.fontColor,
                        fontSize: E.value.fontSize,
                        x: c.value / 6 * (V + 1),
                        y: g.value + E.value.axisLineWidth + 2,
                        width: c.value / 3,
                        align: "center",
                        offsetX: c.value / 3 / 2
                      }, null, 8, ["text", "fill", "fontSize", "x", "y", "width", "offsetX"])
                    ]),
                    _: 2
                  }, 1024))), 128)),
                  ut(T, {
                    stroke: E.value.axisYBorderColor,
                    fill: E.value.axisYBgColor,
                    data: `M${c.value} 0 L${c.value} ${y.value} L${w.value} ${y.value} L${w.value} 0 Z`
                  }, null, 8, ["stroke", "fill", "data"]),
                  (Yt(!0), Xe(_i, null, mi(F.value, (D, V) => (Yt(), Ye(p, { key: V }, {
                    default: Qt(() => [
                      ut(T, {
                        stroke: E.value.axisColor,
                        strokeWidth: 1,
                        data: `M${c.value} ${D.y} L${c.value + E.value.axisLineWidth} ${D.y} Z`
                      }, null, 8, ["stroke", "data"]),
                      ut(a, {
                        text: D.currentScaleTotal,
                        fill: E.value.fontColor,
                        fontSize: E.value.fontSize,
                        x: c.value + E.value.axisLineWidth + 2,
                        y: +D.y - 5,
                        verticalAlign: "middle"
                      }, null, 8, ["text", "fill", "fontSize", "x", "y"])
                    ]),
                    _: 2
                  }, 1024))), 128))
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["config", "onMousemove"])
      ], 512);
    };
  }
}), Qr = (h, A) => {
  const O = h.__vccOpts || h;
  for (const [E, w] of A)
    O[E] = w;
  return O;
}, Zr = /* @__PURE__ */ Qr(jr, [["__scopeId", "data-v-8311e6ea"]]), Jr = [Zr];
function ta(h) {
  Jr.forEach((A) => {
    h.component(A.name, A);
  });
}
const wa = {
  install: ta
};
export {
  wa as default,
  Zr as depthChart,
  ta as install
};
