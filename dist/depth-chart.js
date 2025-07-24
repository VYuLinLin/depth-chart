import { defineComponent as hi, getCurrentInstance as ci, reactive as kn, ref as Pt, onMounted as di, onUpdated as En, onBeforeUnmount as Wn, watch as Rn, h as Fn, onUnmounted as zn, computed as Et, resolveComponent as qt, openBlock as Yt, createElementBlock as Xe, createVNode as ut, unref as Xn, withCtx as Qt, createBlock as Ye, createCommentVNode as Yn, Fragment as _i, renderList as mi } from "vue";
var vi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kn(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var Ve = { exports: {} }, Zt = {}, Ke = {}, $e = {}, yi;
function J() {
  return yi || (yi = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h._registerNode = h.Konva = h.glob = void 0;
    const k = Math.PI / 180;
    function O() {
      return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
    }
    h.glob = typeof vi < "u" ? vi : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, h.Konva = {
      _global: h.glob,
      version: "9.3.18",
      isBrowser: O(),
      isUnminified: /param/.test((function(m) {
      }).toString()),
      dblClickWindow: 400,
      getAngle(m) {
        return h.Konva.angleDeg ? m * k : m;
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
        var m;
        return (m = h.Konva.Transformer) === null || m === void 0 ? void 0 : m.isTransforming();
      },
      isDragReady() {
        return !!h.Konva.DD.node;
      },
      releaseCanvasOnDestroy: !0,
      document: h.glob.document,
      _injectGlobal(m) {
        h.glob.Konva = m;
      }
    };
    const R = (m) => {
      h.Konva[m.prototype.getClassName()] = m;
    };
    h._registerNode = R, h.Konva._injectGlobal(h.Konva);
  }($e)), $e;
}
var je = {}, bi;
function at() {
  return bi || (bi = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Util = h.Transform = void 0;
    const k = J();
    class O {
      constructor(S = [1, 0, 0, 1, 0, 0]) {
        this.dirty = !1, this.m = S && S.slice() || [1, 0, 0, 1, 0, 0];
      }
      reset() {
        this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
      }
      copy() {
        return new O(this.m);
      }
      copyInto(S) {
        S.m[0] = this.m[0], S.m[1] = this.m[1], S.m[2] = this.m[2], S.m[3] = this.m[3], S.m[4] = this.m[4], S.m[5] = this.m[5];
      }
      point(S) {
        const A = this.m;
        return {
          x: A[0] * S.x + A[2] * S.y + A[4],
          y: A[1] * S.x + A[3] * S.y + A[5]
        };
      }
      translate(S, A) {
        return this.m[4] += this.m[0] * S + this.m[2] * A, this.m[5] += this.m[1] * S + this.m[3] * A, this;
      }
      scale(S, A) {
        return this.m[0] *= S, this.m[1] *= S, this.m[2] *= A, this.m[3] *= A, this;
      }
      rotate(S) {
        const A = Math.cos(S), M = Math.sin(S), G = this.m[0] * A + this.m[2] * M, r = this.m[1] * A + this.m[3] * M, d = this.m[0] * -M + this.m[2] * A, n = this.m[1] * -M + this.m[3] * A;
        return this.m[0] = G, this.m[1] = r, this.m[2] = d, this.m[3] = n, this;
      }
      getTranslation() {
        return {
          x: this.m[4],
          y: this.m[5]
        };
      }
      skew(S, A) {
        const M = this.m[0] + this.m[2] * A, G = this.m[1] + this.m[3] * A, r = this.m[2] + this.m[0] * S, d = this.m[3] + this.m[1] * S;
        return this.m[0] = M, this.m[1] = G, this.m[2] = r, this.m[3] = d, this;
      }
      multiply(S) {
        const A = this.m[0] * S.m[0] + this.m[2] * S.m[1], M = this.m[1] * S.m[0] + this.m[3] * S.m[1], G = this.m[0] * S.m[2] + this.m[2] * S.m[3], r = this.m[1] * S.m[2] + this.m[3] * S.m[3], d = this.m[0] * S.m[4] + this.m[2] * S.m[5] + this.m[4], n = this.m[1] * S.m[4] + this.m[3] * S.m[5] + this.m[5];
        return this.m[0] = A, this.m[1] = M, this.m[2] = G, this.m[3] = r, this.m[4] = d, this.m[5] = n, this;
      }
      invert() {
        const S = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), A = this.m[3] * S, M = -this.m[1] * S, G = -this.m[2] * S, r = this.m[0] * S, d = S * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), n = S * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        return this.m[0] = A, this.m[1] = M, this.m[2] = G, this.m[3] = r, this.m[4] = d, this.m[5] = n, this;
      }
      getMatrix() {
        return this.m;
      }
      decompose() {
        const S = this.m[0], A = this.m[1], M = this.m[2], G = this.m[3], r = this.m[4], d = this.m[5], n = S * G - A * M, f = {
          x: r,
          y: d,
          rotation: 0,
          scaleX: 0,
          scaleY: 0,
          skewX: 0,
          skewY: 0
        };
        if (S != 0 || A != 0) {
          const x = Math.sqrt(S * S + A * A);
          f.rotation = A > 0 ? Math.acos(S / x) : -Math.acos(S / x), f.scaleX = x, f.scaleY = n / x, f.skewX = (S * M + A * G) / n, f.skewY = 0;
        } else if (M != 0 || G != 0) {
          const x = Math.sqrt(M * M + G * G);
          f.rotation = Math.PI / 2 - (G > 0 ? Math.acos(-M / x) : -Math.acos(M / x)), f.scaleX = n / x, f.scaleY = x, f.skewX = 0, f.skewY = (S * M + A * G) / n;
        }
        return f.rotation = h.Util._getRotation(f.rotation), f;
      }
    }
    h.Transform = O;
    const R = "[object Array]", m = "[object Number]", b = "[object String]", c = "[object Boolean]", o = Math.PI / 180, g = 180 / Math.PI, _ = "#", v = "", w = "0", P = "Konva warning: ", u = "Konva error: ", l = "rgb(", y = {
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
    }, T = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    let E = [];
    const i = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(a) {
      setTimeout(a, 60);
    };
    h.Util = {
      _isElement(a) {
        return !!(a && a.nodeType == 1);
      },
      _isFunction(a) {
        return !!(a && a.constructor && a.call && a.apply);
      },
      _isPlainObject(a) {
        return !!a && a.constructor === Object;
      },
      _isArray(a) {
        return Object.prototype.toString.call(a) === R;
      },
      _isNumber(a) {
        return Object.prototype.toString.call(a) === m && !isNaN(a) && isFinite(a);
      },
      _isString(a) {
        return Object.prototype.toString.call(a) === b;
      },
      _isBoolean(a) {
        return Object.prototype.toString.call(a) === c;
      },
      isObject(a) {
        return a instanceof Object;
      },
      isValidSelector(a) {
        if (typeof a != "string")
          return !1;
        const S = a[0];
        return S === "#" || S === "." || S === S.toUpperCase();
      },
      _sign(a) {
        return a === 0 || a > 0 ? 1 : -1;
      },
      requestAnimFrame(a) {
        E.push(a), E.length === 1 && i(function() {
          const S = E;
          E = [], S.forEach(function(A) {
            A();
          });
        });
      },
      createCanvasElement() {
        const a = document.createElement("canvas");
        try {
          a.style = a.style || {};
        } catch {
        }
        return a;
      },
      createImageElement() {
        return document.createElement("img");
      },
      _isInDocument(a) {
        for (; a = a.parentNode; )
          if (a == document)
            return !0;
        return !1;
      },
      _urlToImage(a, S) {
        const A = h.Util.createImageElement();
        A.onload = function() {
          S(A);
        }, A.src = a;
      },
      _rgbToHex(a, S, A) {
        return ((1 << 24) + (a << 16) + (S << 8) + A).toString(16).slice(1);
      },
      _hexToRgb(a) {
        a = a.replace(_, v);
        const S = parseInt(a, 16);
        return {
          r: S >> 16 & 255,
          g: S >> 8 & 255,
          b: S & 255
        };
      },
      getRandomColor() {
        let a = (Math.random() * 16777215 << 0).toString(16);
        for (; a.length < 6; )
          a = w + a;
        return _ + a;
      },
      getRGB(a) {
        let S;
        return a in y ? (S = y[a], {
          r: S[0],
          g: S[1],
          b: S[2]
        }) : a[0] === _ ? this._hexToRgb(a.substring(1)) : a.substr(0, 4) === l ? (S = T.exec(a.replace(/ /g, "")), {
          r: parseInt(S[1], 10),
          g: parseInt(S[2], 10),
          b: parseInt(S[3], 10)
        }) : {
          r: 0,
          g: 0,
          b: 0
        };
      },
      colorToRGBA(a) {
        return a = a || "black", h.Util._namedColorToRBA(a) || h.Util._hex3ColorToRGBA(a) || h.Util._hex4ColorToRGBA(a) || h.Util._hex6ColorToRGBA(a) || h.Util._hex8ColorToRGBA(a) || h.Util._rgbColorToRGBA(a) || h.Util._rgbaColorToRGBA(a) || h.Util._hslColorToRGBA(a);
      },
      _namedColorToRBA(a) {
        const S = y[a.toLowerCase()];
        return S ? {
          r: S[0],
          g: S[1],
          b: S[2],
          a: 1
        } : null;
      },
      _rgbColorToRGBA(a) {
        if (a.indexOf("rgb(") === 0) {
          a = a.match(/rgb\(([^)]+)\)/)[1];
          const S = a.split(/ *, */).map(Number);
          return {
            r: S[0],
            g: S[1],
            b: S[2],
            a: 1
          };
        }
      },
      _rgbaColorToRGBA(a) {
        if (a.indexOf("rgba(") === 0) {
          a = a.match(/rgba\(([^)]+)\)/)[1];
          const S = a.split(/ *, */).map((A, M) => A.slice(-1) === "%" ? M === 3 ? parseInt(A) / 100 : parseInt(A) / 100 * 255 : Number(A));
          return {
            r: S[0],
            g: S[1],
            b: S[2],
            a: S[3]
          };
        }
      },
      _hex8ColorToRGBA(a) {
        if (a[0] === "#" && a.length === 9)
          return {
            r: parseInt(a.slice(1, 3), 16),
            g: parseInt(a.slice(3, 5), 16),
            b: parseInt(a.slice(5, 7), 16),
            a: parseInt(a.slice(7, 9), 16) / 255
          };
      },
      _hex6ColorToRGBA(a) {
        if (a[0] === "#" && a.length === 7)
          return {
            r: parseInt(a.slice(1, 3), 16),
            g: parseInt(a.slice(3, 5), 16),
            b: parseInt(a.slice(5, 7), 16),
            a: 1
          };
      },
      _hex4ColorToRGBA(a) {
        if (a[0] === "#" && a.length === 5)
          return {
            r: parseInt(a[1] + a[1], 16),
            g: parseInt(a[2] + a[2], 16),
            b: parseInt(a[3] + a[3], 16),
            a: parseInt(a[4] + a[4], 16) / 255
          };
      },
      _hex3ColorToRGBA(a) {
        if (a[0] === "#" && a.length === 4)
          return {
            r: parseInt(a[1] + a[1], 16),
            g: parseInt(a[2] + a[2], 16),
            b: parseInt(a[3] + a[3], 16),
            a: 1
          };
      },
      _hslColorToRGBA(a) {
        if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(a)) {
          const [S, ...A] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a), M = Number(A[0]) / 360, G = Number(A[1]) / 100, r = Number(A[2]) / 100;
          let d, n, f;
          if (G === 0)
            return f = r * 255, {
              r: Math.round(f),
              g: Math.round(f),
              b: Math.round(f),
              a: 1
            };
          r < 0.5 ? d = r * (1 + G) : d = r + G - r * G;
          const x = 2 * r - d, t = [0, 0, 0];
          for (let s = 0; s < 3; s++)
            n = M + 1 / 3 * -(s - 1), n < 0 && n++, n > 1 && n--, 6 * n < 1 ? f = x + (d - x) * 6 * n : 2 * n < 1 ? f = d : 3 * n < 2 ? f = x + (d - x) * (2 / 3 - n) * 6 : f = x, t[s] = f * 255;
          return {
            r: Math.round(t[0]),
            g: Math.round(t[1]),
            b: Math.round(t[2]),
            a: 1
          };
        }
      },
      haveIntersection(a, S) {
        return !(S.x > a.x + a.width || S.x + S.width < a.x || S.y > a.y + a.height || S.y + S.height < a.y);
      },
      cloneObject(a) {
        const S = {};
        for (const A in a)
          this._isPlainObject(a[A]) ? S[A] = this.cloneObject(a[A]) : this._isArray(a[A]) ? S[A] = this.cloneArray(a[A]) : S[A] = a[A];
        return S;
      },
      cloneArray(a) {
        return a.slice(0);
      },
      degToRad(a) {
        return a * o;
      },
      radToDeg(a) {
        return a * g;
      },
      _degToRad(a) {
        return h.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), h.Util.degToRad(a);
      },
      _radToDeg(a) {
        return h.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), h.Util.radToDeg(a);
      },
      _getRotation(a) {
        return k.Konva.angleDeg ? h.Util.radToDeg(a) : a;
      },
      _capitalize(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
      },
      throw(a) {
        throw new Error(u + a);
      },
      error(a) {
        console.error(u + a);
      },
      warn(a) {
        k.Konva.showWarnings && console.warn(P + a);
      },
      each(a, S) {
        for (const A in a)
          S(A, a[A]);
      },
      _inRange(a, S, A) {
        return S <= a && a < A;
      },
      _getProjectionToSegment(a, S, A, M, G, r) {
        let d, n, f;
        const x = (a - A) * (a - A) + (S - M) * (S - M);
        if (x == 0)
          d = a, n = S, f = (G - A) * (G - A) + (r - M) * (r - M);
        else {
          const t = ((G - a) * (A - a) + (r - S) * (M - S)) / x;
          t < 0 ? (d = a, n = S, f = (a - G) * (a - G) + (S - r) * (S - r)) : t > 1 ? (d = A, n = M, f = (A - G) * (A - G) + (M - r) * (M - r)) : (d = a + t * (A - a), n = S + t * (M - S), f = (d - G) * (d - G) + (n - r) * (n - r));
        }
        return [d, n, f];
      },
      _getProjectionToLine(a, S, A) {
        const M = h.Util.cloneObject(a);
        let G = Number.MAX_VALUE;
        return S.forEach(function(r, d) {
          if (!A && d === S.length - 1)
            return;
          const n = S[(d + 1) % S.length], f = h.Util._getProjectionToSegment(r.x, r.y, n.x, n.y, a.x, a.y), x = f[0], t = f[1], s = f[2];
          s < G && (M.x = x, M.y = t, G = s);
        }), M;
      },
      _prepareArrayForTween(a, S, A) {
        const M = [], G = [];
        if (a.length > S.length) {
          const d = S;
          S = a, a = d;
        }
        for (let d = 0; d < a.length; d += 2)
          M.push({
            x: a[d],
            y: a[d + 1]
          });
        for (let d = 0; d < S.length; d += 2)
          G.push({
            x: S[d],
            y: S[d + 1]
          });
        const r = [];
        return G.forEach(function(d) {
          const n = h.Util._getProjectionToLine(d, M, A);
          r.push(n.x), r.push(n.y);
        }), r;
      },
      _prepareToStringify(a) {
        let S;
        a.visitedByCircularReferenceRemoval = !0;
        for (const A in a)
          if (a.hasOwnProperty(A) && a[A] && typeof a[A] == "object") {
            if (S = Object.getOwnPropertyDescriptor(a, A), a[A].visitedByCircularReferenceRemoval || h.Util._isElement(a[A]))
              if (S.configurable)
                delete a[A];
              else
                return null;
            else if (h.Util._prepareToStringify(a[A]) === null)
              if (S.configurable)
                delete a[A];
              else
                return null;
          }
        return delete a.visitedByCircularReferenceRemoval, a;
      },
      _assign(a, S) {
        for (const A in S)
          a[A] = S[A];
        return a;
      },
      _getFirstPointerId(a) {
        return a.touches ? a.changedTouches[0].identifier : a.pointerId || 999;
      },
      releaseCanvas(...a) {
        k.Konva.releaseCanvasOnDestroy && a.forEach((S) => {
          S.width = 0, S.height = 0;
        });
      },
      drawRoundedRectPath(a, S, A, M) {
        let G = 0, r = 0, d = 0, n = 0;
        typeof M == "number" ? G = r = d = n = Math.min(M, S / 2, A / 2) : (G = Math.min(M[0] || 0, S / 2, A / 2), r = Math.min(M[1] || 0, S / 2, A / 2), n = Math.min(M[2] || 0, S / 2, A / 2), d = Math.min(M[3] || 0, S / 2, A / 2)), a.moveTo(G, 0), a.lineTo(S - r, 0), a.arc(S - r, r, r, Math.PI * 3 / 2, 0, !1), a.lineTo(S, A - n), a.arc(S - n, A - n, n, 0, Math.PI / 2, !1), a.lineTo(d, A), a.arc(d, A - d, d, Math.PI / 2, Math.PI, !1), a.lineTo(0, G), a.arc(G, G, G, Math.PI, Math.PI * 3 / 2, !1);
      }
    };
  }(je)), je;
}
var Jt = {}, Qe = {}, pt = {}, Si;
function et() {
  if (Si) return pt;
  Si = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.RGBComponent = R, pt.alphaComponent = m, pt.getNumberValidator = b, pt.getNumberOrArrayOfNumbersValidator = c, pt.getNumberOrAutoValidator = o, pt.getStringValidator = g, pt.getStringOrGradientValidator = _, pt.getFunctionValidator = v, pt.getNumberArrayValidator = w, pt.getBooleanValidator = P, pt.getComponentValidator = u;
  const h = J(), k = at();
  function O(l) {
    return k.Util._isString(l) ? '"' + l + '"' : Object.prototype.toString.call(l) === "[object Number]" || k.Util._isBoolean(l) ? l : Object.prototype.toString.call(l);
  }
  function R(l) {
    return l > 255 ? 255 : l < 0 ? 0 : Math.round(l);
  }
  function m(l) {
    return l > 1 ? 1 : l < 1e-4 ? 1e-4 : l;
  }
  function b() {
    if (h.Konva.isUnminified)
      return function(l, y) {
        return k.Util._isNumber(l) || k.Util.warn(O(l) + ' is a not valid value for "' + y + '" attribute. The value should be a number.'), l;
      };
  }
  function c(l) {
    if (h.Konva.isUnminified)
      return function(y, T) {
        let E = k.Util._isNumber(y), i = k.Util._isArray(y) && y.length == l;
        return !E && !i && k.Util.warn(O(y) + ' is a not valid value for "' + T + '" attribute. The value should be a number or Array<number>(' + l + ")"), y;
      };
  }
  function o() {
    if (h.Konva.isUnminified)
      return function(l, y) {
        var T = k.Util._isNumber(l), E = l === "auto";
        return T || E || k.Util.warn(O(l) + ' is a not valid value for "' + y + '" attribute. The value should be a number or "auto".'), l;
      };
  }
  function g() {
    if (h.Konva.isUnminified)
      return function(l, y) {
        return k.Util._isString(l) || k.Util.warn(O(l) + ' is a not valid value for "' + y + '" attribute. The value should be a string.'), l;
      };
  }
  function _() {
    if (h.Konva.isUnminified)
      return function(l, y) {
        const T = k.Util._isString(l), E = Object.prototype.toString.call(l) === "[object CanvasGradient]" || l && l.addColorStop;
        return T || E || k.Util.warn(O(l) + ' is a not valid value for "' + y + '" attribute. The value should be a string or a native gradient.'), l;
      };
  }
  function v() {
    if (h.Konva.isUnminified)
      return function(l, y) {
        return k.Util._isFunction(l) || k.Util.warn(O(l) + ' is a not valid value for "' + y + '" attribute. The value should be a function.'), l;
      };
  }
  function w() {
    if (h.Konva.isUnminified)
      return function(l, y) {
        const T = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
        return T && l instanceof T || (k.Util._isArray(l) ? l.forEach(function(E) {
          k.Util._isNumber(E) || k.Util.warn('"' + y + '" attribute has non numeric element ' + E + ". Make sure that all elements are numbers.");
        }) : k.Util.warn(O(l) + ' is a not valid value for "' + y + '" attribute. The value should be a array of numbers.')), l;
      };
  }
  function P() {
    if (h.Konva.isUnminified)
      return function(l, y) {
        var T = l === !0 || l === !1;
        return T || k.Util.warn(O(l) + ' is a not valid value for "' + y + '" attribute. The value should be a boolean.'), l;
      };
  }
  function u(l) {
    if (h.Konva.isUnminified)
      return function(y, T) {
        return y == null || k.Util.isObject(y) || k.Util.warn(O(y) + ' is a not valid value for "' + T + '" attribute. The value should be an object with properties ' + l), y;
      };
  }
  return pt;
}
var Ci;
function tt() {
  return Ci || (Ci = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Factory = void 0;
    const k = at(), O = et(), R = "get", m = "set";
    h.Factory = {
      addGetterSetter(b, c, o, g, _) {
        h.Factory.addGetter(b, c, o), h.Factory.addSetter(b, c, g, _), h.Factory.addOverloadedGetterSetter(b, c);
      },
      addGetter(b, c, o) {
        var g = R + k.Util._capitalize(c);
        b.prototype[g] = b.prototype[g] || function() {
          const _ = this.attrs[c];
          return _ === void 0 ? o : _;
        };
      },
      addSetter(b, c, o, g) {
        var _ = m + k.Util._capitalize(c);
        b.prototype[_] || h.Factory.overWriteSetter(b, c, o, g);
      },
      overWriteSetter(b, c, o, g) {
        var _ = m + k.Util._capitalize(c);
        b.prototype[_] = function(v) {
          return o && v !== void 0 && v !== null && (v = o.call(this, v, c)), this._setAttr(c, v), g && g.call(this), this;
        };
      },
      addComponentsGetterSetter(b, c, o, g, _) {
        const v = o.length, w = k.Util._capitalize, P = R + w(c), u = m + w(c);
        b.prototype[P] = function() {
          const y = {};
          for (let T = 0; T < v; T++) {
            const E = o[T];
            y[E] = this.getAttr(c + w(E));
          }
          return y;
        };
        const l = (0, O.getComponentValidator)(o);
        b.prototype[u] = function(y) {
          const T = this.attrs[c];
          g && (y = g.call(this, y, c)), l && l.call(this, y, c);
          for (const E in y)
            y.hasOwnProperty(E) && this._setAttr(c + w(E), y[E]);
          return y || o.forEach((E) => {
            this._setAttr(c + w(E), void 0);
          }), this._fireChangeEvent(c, T, y), _ && _.call(this), this;
        }, h.Factory.addOverloadedGetterSetter(b, c);
      },
      addOverloadedGetterSetter(b, c) {
        var o = k.Util._capitalize(c), g = m + o, _ = R + o;
        b.prototype[c] = function() {
          return arguments.length ? (this[g](arguments[0]), this) : this[_]();
        };
      },
      addDeprecatedGetterSetter(b, c, o, g) {
        k.Util.error("Adding deprecated " + c);
        const _ = R + k.Util._capitalize(c), v = c + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
        b.prototype[_] = function() {
          k.Util.error(v);
          const w = this.attrs[c];
          return w === void 0 ? o : w;
        }, h.Factory.addSetter(b, c, g, function() {
          k.Util.error(v);
        }), h.Factory.addOverloadedGetterSetter(b, c);
      },
      backCompat(b, c) {
        k.Util.each(c, function(o, g) {
          const _ = b.prototype[g], v = R + k.Util._capitalize(o), w = m + k.Util._capitalize(o);
          function P() {
            _.apply(this, arguments), k.Util.error('"' + o + '" method is deprecated and will be removed soon. Use ""' + g + '" instead.');
          }
          b.prototype[o] = P, b.prototype[v] = P, b.prototype[w] = P;
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
  const h = at(), k = J();
  function O(E) {
    const i = [], a = E.length, S = h.Util;
    for (let A = 0; A < a; A++) {
      let M = E[A];
      S._isNumber(M) ? M = Math.round(M * 1e3) / 1e3 : S._isString(M) || (M = M + ""), i.push(M);
    }
    return i;
  }
  const R = ",", m = "(", b = ")", c = "([", o = "])", g = ";", _ = "()", v = "=", w = [
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
    constructor(i) {
      this.canvas = i, k.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
    }
    fillShape(i) {
      i.fillEnabled() && this._fill(i);
    }
    _fill(i) {
    }
    strokeShape(i) {
      i.hasStroke() && this._stroke(i);
    }
    _stroke(i) {
    }
    fillStrokeShape(i) {
      i.attrs.fillAfterStrokeEnabled ? (this.strokeShape(i), this.fillShape(i)) : (this.fillShape(i), this.strokeShape(i));
    }
    getTrace(i, a) {
      let S = this.traceArr, A = S.length, M = "", G, r, d, n;
      for (G = 0; G < A; G++)
        r = S[G], d = r.method, d ? (n = r.args, M += d, i ? M += _ : h.Util._isArray(n[0]) ? M += c + n.join(R) + o : (a && (n = n.map((f) => typeof f == "number" ? Math.floor(f) : f)), M += m + n.join(R) + b)) : (M += r.property, i || (M += v + r.val)), M += g;
      return M;
    }
    clearTrace() {
      this.traceArr = [];
    }
    _trace(i) {
      let a = this.traceArr, S;
      a.push(i), S = a.length, S >= u && a.shift();
    }
    reset() {
      const i = this.getCanvas().getPixelRatio();
      this.setTransform(1 * i, 0, 0, 1 * i, 0, 0);
    }
    getCanvas() {
      return this.canvas;
    }
    clear(i) {
      const a = this.getCanvas();
      i ? this.clearRect(i.x || 0, i.y || 0, i.width || 0, i.height || 0) : this.clearRect(0, 0, a.getWidth() / a.pixelRatio, a.getHeight() / a.pixelRatio);
    }
    _applyLineCap(i) {
      const a = i.attrs.lineCap;
      a && this.setAttr("lineCap", a);
    }
    _applyOpacity(i) {
      const a = i.getAbsoluteOpacity();
      a !== 1 && this.setAttr("globalAlpha", a);
    }
    _applyLineJoin(i) {
      const a = i.attrs.lineJoin;
      a && this.setAttr("lineJoin", a);
    }
    setAttr(i, a) {
      this._context[i] = a;
    }
    arc(i, a, S, A, M, G) {
      this._context.arc(i, a, S, A, M, G);
    }
    arcTo(i, a, S, A, M) {
      this._context.arcTo(i, a, S, A, M);
    }
    beginPath() {
      this._context.beginPath();
    }
    bezierCurveTo(i, a, S, A, M, G) {
      this._context.bezierCurveTo(i, a, S, A, M, G);
    }
    clearRect(i, a, S, A) {
      this._context.clearRect(i, a, S, A);
    }
    clip(...i) {
      this._context.clip.apply(this._context, i);
    }
    closePath() {
      this._context.closePath();
    }
    createImageData(i, a) {
      const S = arguments;
      if (S.length === 2)
        return this._context.createImageData(i, a);
      if (S.length === 1)
        return this._context.createImageData(i);
    }
    createLinearGradient(i, a, S, A) {
      return this._context.createLinearGradient(i, a, S, A);
    }
    createPattern(i, a) {
      return this._context.createPattern(i, a);
    }
    createRadialGradient(i, a, S, A, M, G) {
      return this._context.createRadialGradient(i, a, S, A, M, G);
    }
    drawImage(i, a, S, A, M, G, r, d, n) {
      const f = arguments, x = this._context;
      f.length === 3 ? x.drawImage(i, a, S) : f.length === 5 ? x.drawImage(i, a, S, A, M) : f.length === 9 && x.drawImage(i, a, S, A, M, G, r, d, n);
    }
    ellipse(i, a, S, A, M, G, r, d) {
      this._context.ellipse(i, a, S, A, M, G, r, d);
    }
    isPointInPath(i, a, S, A) {
      return S ? this._context.isPointInPath(S, i, a, A) : this._context.isPointInPath(i, a, A);
    }
    fill(...i) {
      this._context.fill.apply(this._context, i);
    }
    fillRect(i, a, S, A) {
      this._context.fillRect(i, a, S, A);
    }
    strokeRect(i, a, S, A) {
      this._context.strokeRect(i, a, S, A);
    }
    fillText(i, a, S, A) {
      A ? this._context.fillText(i, a, S, A) : this._context.fillText(i, a, S);
    }
    measureText(i) {
      return this._context.measureText(i);
    }
    getImageData(i, a, S, A) {
      return this._context.getImageData(i, a, S, A);
    }
    lineTo(i, a) {
      this._context.lineTo(i, a);
    }
    moveTo(i, a) {
      this._context.moveTo(i, a);
    }
    rect(i, a, S, A) {
      this._context.rect(i, a, S, A);
    }
    roundRect(i, a, S, A, M) {
      this._context.roundRect(i, a, S, A, M);
    }
    putImageData(i, a, S) {
      this._context.putImageData(i, a, S);
    }
    quadraticCurveTo(i, a, S, A) {
      this._context.quadraticCurveTo(i, a, S, A);
    }
    restore() {
      this._context.restore();
    }
    rotate(i) {
      this._context.rotate(i);
    }
    save() {
      this._context.save();
    }
    scale(i, a) {
      this._context.scale(i, a);
    }
    setLineDash(i) {
      this._context.setLineDash ? this._context.setLineDash(i) : "mozDash" in this._context ? this._context.mozDash = i : "webkitLineDash" in this._context && (this._context.webkitLineDash = i);
    }
    getLineDash() {
      return this._context.getLineDash();
    }
    setTransform(i, a, S, A, M, G) {
      this._context.setTransform(i, a, S, A, M, G);
    }
    stroke(i) {
      i ? this._context.stroke(i) : this._context.stroke();
    }
    strokeText(i, a, S, A) {
      this._context.strokeText(i, a, S, A);
    }
    transform(i, a, S, A, M, G) {
      this._context.transform(i, a, S, A, M, G);
    }
    translate(i, a) {
      this._context.translate(i, a);
    }
    _enableTrace() {
      let i = this, a = w.length, S = this.setAttr, A, M;
      const G = function(r) {
        let d = i[r], n;
        i[r] = function() {
          return M = O(Array.prototype.slice.call(arguments, 0)), n = d.apply(i, arguments), i._trace({
            method: r,
            args: M
          }), n;
        };
      };
      for (A = 0; A < a; A++)
        G(w[A]);
      i.setAttr = function() {
        S.apply(i, arguments);
        const r = arguments[0];
        let d = arguments[1];
        (r === "shadowOffsetX" || r === "shadowOffsetY" || r === "shadowBlur") && (d = d / this.canvas.getPixelRatio()), i._trace({
          property: r,
          val: d
        });
      };
    }
    _applyGlobalCompositeOperation(i) {
      const a = i.attrs.globalCompositeOperation;
      !a || a === "source-over" || this.setAttr("globalCompositeOperation", a);
    }
  };
  Nt.Context = l, P.forEach(function(E) {
    Object.defineProperty(l.prototype, E, {
      get() {
        return this._context[E];
      },
      set(i) {
        this._context[E] = i;
      }
    });
  });
  class y extends l {
    constructor(i, { willReadFrequently: a = !1 } = {}) {
      super(i), this._context = i._canvas.getContext("2d", {
        willReadFrequently: a
      });
    }
    _fillColor(i) {
      const a = i.fill();
      this.setAttr("fillStyle", a), i._fillFunc(this);
    }
    _fillPattern(i) {
      this.setAttr("fillStyle", i._getFillPattern()), i._fillFunc(this);
    }
    _fillLinearGradient(i) {
      const a = i._getLinearGradient();
      a && (this.setAttr("fillStyle", a), i._fillFunc(this));
    }
    _fillRadialGradient(i) {
      const a = i._getRadialGradient();
      a && (this.setAttr("fillStyle", a), i._fillFunc(this));
    }
    _fill(i) {
      const a = i.fill(), S = i.getFillPriority();
      if (a && S === "color") {
        this._fillColor(i);
        return;
      }
      const A = i.getFillPatternImage();
      if (A && S === "pattern") {
        this._fillPattern(i);
        return;
      }
      const M = i.getFillLinearGradientColorStops();
      if (M && S === "linear-gradient") {
        this._fillLinearGradient(i);
        return;
      }
      const G = i.getFillRadialGradientColorStops();
      if (G && S === "radial-gradient") {
        this._fillRadialGradient(i);
        return;
      }
      a ? this._fillColor(i) : A ? this._fillPattern(i) : M ? this._fillLinearGradient(i) : G && this._fillRadialGradient(i);
    }
    _strokeLinearGradient(i) {
      const a = i.getStrokeLinearGradientStartPoint(), S = i.getStrokeLinearGradientEndPoint(), A = i.getStrokeLinearGradientColorStops(), M = this.createLinearGradient(a.x, a.y, S.x, S.y);
      if (A) {
        for (let G = 0; G < A.length; G += 2)
          M.addColorStop(A[G], A[G + 1]);
        this.setAttr("strokeStyle", M);
      }
    }
    _stroke(i) {
      const a = i.dash(), S = i.getStrokeScaleEnabled();
      if (i.hasStroke()) {
        if (!S) {
          this.save();
          const M = this.getCanvas().getPixelRatio();
          this.setTransform(M, 0, 0, M, 0, 0);
        }
        this._applyLineCap(i), a && i.dashEnabled() && (this.setLineDash(a), this.setAttr("lineDashOffset", i.dashOffset())), this.setAttr("lineWidth", i.strokeWidth()), i.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), i.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(i) : this.setAttr("strokeStyle", i.stroke()), i._strokeFunc(this), S || this.restore();
      }
    }
    _applyShadow(i) {
      var a, S, A;
      const M = (a = i.getShadowRGBA()) !== null && a !== void 0 ? a : "black", G = (S = i.getShadowBlur()) !== null && S !== void 0 ? S : 5, r = (A = i.getShadowOffset()) !== null && A !== void 0 ? A : {
        x: 0,
        y: 0
      }, d = i.getAbsoluteScale(), n = this.canvas.getPixelRatio(), f = d.x * n, x = d.y * n;
      this.setAttr("shadowColor", M), this.setAttr("shadowBlur", G * Math.min(Math.abs(f), Math.abs(x))), this.setAttr("shadowOffsetX", r.x * f), this.setAttr("shadowOffsetY", r.y * x);
    }
  }
  Nt.SceneContext = y;
  class T extends l {
    constructor(i) {
      super(i), this._context = i._canvas.getContext("2d", {
        willReadFrequently: !0
      });
    }
    _fill(i) {
      this.save(), this.setAttr("fillStyle", i.colorKey), i._fillFuncHit(this), this.restore();
    }
    strokeShape(i) {
      i.hasHitStroke() && this._stroke(i);
    }
    _stroke(i) {
      if (i.hasHitStroke()) {
        const a = i.getStrokeScaleEnabled();
        if (!a) {
          this.save();
          const M = this.getCanvas().getPixelRatio();
          this.setTransform(M, 0, 0, M, 0, 0);
        }
        this._applyLineCap(i);
        const S = i.hitStrokeWidth(), A = S === "auto" ? i.strokeWidth() : S;
        this.setAttr("lineWidth", A), this.setAttr("strokeStyle", i.colorKey), i._strokeFuncHit(this), a || this.restore();
      }
    }
  }
  return Nt.HitContext = T, Nt;
}
var xi;
function qe() {
  if (xi) return Mt;
  xi = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.HitCanvas = Mt.SceneCanvas = Mt.Canvas = void 0;
  const h = at(), k = Mn(), O = J(), R = tt(), m = et();
  let b;
  function c() {
    if (b)
      return b;
    const v = h.Util.createCanvasElement(), w = v.getContext("2d");
    return b = function() {
      const P = O.Konva._global.devicePixelRatio || 1, u = w.webkitBackingStorePixelRatio || w.mozBackingStorePixelRatio || w.msBackingStorePixelRatio || w.oBackingStorePixelRatio || w.backingStorePixelRatio || 1;
      return P / u;
    }(), h.Util.releaseCanvas(v), b;
  }
  let o = class {
    constructor(w) {
      this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
      const u = (w || {}).pixelRatio || O.Konva.pixelRatio || c();
      this.pixelRatio = u, this._canvas = h.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
    }
    getContext() {
      return this.context;
    }
    getPixelRatio() {
      return this.pixelRatio;
    }
    setPixelRatio(w) {
      const P = this.pixelRatio;
      this.pixelRatio = w, this.setSize(this.getWidth() / P, this.getHeight() / P);
    }
    setWidth(w) {
      this.width = this._canvas.width = w * this.pixelRatio, this._canvas.style.width = w + "px";
      const P = this.pixelRatio;
      this.getContext()._context.scale(P, P);
    }
    setHeight(w) {
      this.height = this._canvas.height = w * this.pixelRatio, this._canvas.style.height = w + "px";
      const P = this.pixelRatio;
      this.getContext()._context.scale(P, P);
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    setSize(w, P) {
      this.setWidth(w || 0), this.setHeight(P || 0);
    }
    toDataURL(w, P) {
      try {
        return this._canvas.toDataURL(w, P);
      } catch {
        try {
          return this._canvas.toDataURL();
        } catch (l) {
          return h.Util.error("Unable to get data URL. " + l.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
        }
      }
    }
  };
  Mt.Canvas = o, R.Factory.addGetterSetter(o, "pixelRatio", void 0, (0, m.getNumberValidator)());
  class g extends o {
    constructor(w = { width: 0, height: 0, willReadFrequently: !1 }) {
      super(w), this.context = new k.SceneContext(this, {
        willReadFrequently: w.willReadFrequently
      }), this.setSize(w.width, w.height);
    }
  }
  Mt.SceneCanvas = g;
  class _ extends o {
    constructor(w = { width: 0, height: 0 }) {
      super(w), this.hitCanvas = !0, this.context = new k.HitContext(this), this.setSize(w.width, w.height);
    }
  }
  return Mt.HitCanvas = _, Mt;
}
var Ze = {}, Pi;
function ui() {
  return Pi || (Pi = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.DD = void 0;
    const k = J(), O = at();
    h.DD = {
      get isDragging() {
        let R = !1;
        return h.DD._dragElements.forEach((m) => {
          m.dragStatus === "dragging" && (R = !0);
        }), R;
      },
      justDragged: !1,
      get node() {
        let R;
        return h.DD._dragElements.forEach((m) => {
          R = m.node;
        }), R;
      },
      _dragElements: /* @__PURE__ */ new Map(),
      _drag(R) {
        const m = [];
        h.DD._dragElements.forEach((b, c) => {
          const { node: o } = b, g = o.getStage();
          g.setPointersPositions(R), b.pointerId === void 0 && (b.pointerId = O.Util._getFirstPointerId(R));
          const _ = g._changedPointerPositions.find((v) => v.id === b.pointerId);
          if (_) {
            if (b.dragStatus !== "dragging") {
              const v = o.dragDistance();
              if (Math.max(Math.abs(_.x - b.startPointerPos.x), Math.abs(_.y - b.startPointerPos.y)) < v || (o.startDrag({ evt: R }), !o.isDragging()))
                return;
            }
            o._setDragPosition(R, b), m.push(o);
          }
        }), m.forEach((b) => {
          b.fire("dragmove", {
            type: "dragmove",
            target: b,
            evt: R
          }, !0);
        });
      },
      _endDragBefore(R) {
        const m = [];
        h.DD._dragElements.forEach((b) => {
          const { node: c } = b, o = c.getStage();
          if (R && o.setPointersPositions(R), !o._changedPointerPositions.find((v) => v.id === b.pointerId))
            return;
          (b.dragStatus === "dragging" || b.dragStatus === "stopped") && (h.DD.justDragged = !0, k.Konva._mouseListenClick = !1, k.Konva._touchListenClick = !1, k.Konva._pointerListenClick = !1, b.dragStatus = "stopped");
          const _ = b.node.getLayer() || b.node instanceof k.Konva.Stage && b.node;
          _ && m.indexOf(_) === -1 && m.push(_);
        }), m.forEach((b) => {
          b.draw();
        });
      },
      _endDragAfter(R) {
        h.DD._dragElements.forEach((m, b) => {
          m.dragStatus === "stopped" && m.node.fire("dragend", {
            type: "dragend",
            target: m.node,
            evt: R
          }, !0), m.dragStatus !== "dragging" && h.DD._dragElements.delete(b);
        });
      }
    }, k.Konva.isBrowser && (window.addEventListener("mouseup", h.DD._endDragBefore, !0), window.addEventListener("touchend", h.DD._endDragBefore, !0), window.addEventListener("touchcancel", h.DD._endDragBefore, !0), window.addEventListener("mousemove", h.DD._drag), window.addEventListener("touchmove", h.DD._drag), window.addEventListener("mouseup", h.DD._endDragAfter, !1), window.addEventListener("touchend", h.DD._endDragAfter, !1), window.addEventListener("touchcancel", h.DD._endDragAfter, !1));
  }(Ze)), Ze;
}
var Ti;
function ot() {
  if (Ti) return Jt;
  Ti = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.Node = void 0;
  const h = at(), k = tt(), O = qe(), R = J(), m = ui(), b = et(), c = "absoluteOpacity", o = "allEventListeners", g = "absoluteTransform", _ = "absoluteScale", v = "canvas", w = "Change", P = "children", u = "konva", l = "listening", y = "mouseenter", T = "mouseleave", E = "set", i = "Shape", a = " ", S = "stage", A = "transform", M = "Stage", G = "visible", r = [
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
  ].join(a);
  let d = 1, n = class li {
    constructor(t) {
      this._id = d++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(t), this._shouldFireChangeEvents = !0;
    }
    hasChildren() {
      return !1;
    }
    _clearCache(t) {
      (t === A || t === g) && this._cache.get(t) ? this._cache.get(t).dirty = !0 : t ? this._cache.delete(t) : this._cache.clear();
    }
    _getCache(t, s) {
      let e = this._cache.get(t);
      return (e === void 0 || (t === A || t === g) && e.dirty === !0) && (e = s.call(this), this._cache.set(t, e)), e;
    }
    _calculate(t, s, e) {
      if (!this._attachedDepsListeners.get(t)) {
        const p = s.map((C) => C + "Change.konva").join(a);
        this.on(p, () => {
          this._clearCache(t);
        }), this._attachedDepsListeners.set(t, !0);
      }
      return this._getCache(t, e);
    }
    _getCanvasCache() {
      return this._cache.get(v);
    }
    _clearSelfAndDescendantCache(t) {
      this._clearCache(t), t === g && this.fire("absoluteTransformChange");
    }
    clearCache() {
      if (this._cache.has(v)) {
        const { scene: t, filter: s, hit: e } = this._cache.get(v);
        h.Util.releaseCanvas(t, s, e), this._cache.delete(v);
      }
      return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
    }
    cache(t) {
      const s = t || {};
      let e = {};
      (s.x === void 0 || s.y === void 0 || s.width === void 0 || s.height === void 0) && (e = this.getClientRect({
        skipTransform: !0,
        relativeTo: this.getParent() || void 0
      }));
      let p = Math.ceil(s.width || e.width), C = Math.ceil(s.height || e.height), F = s.pixelRatio, N = s.x === void 0 ? Math.floor(e.x) : s.x, D = s.y === void 0 ? Math.floor(e.y) : s.y, I = s.offset || 0, V = s.drawBorder || !1, B = s.hitCanvasPixelRatio || 1;
      if (!p || !C) {
        h.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      const H = Math.abs(Math.round(e.x) - N) > 0.5 ? 1 : 0, q = Math.abs(Math.round(e.y) - D) > 0.5 ? 1 : 0;
      p += I * 2 + H, C += I * 2 + q, N -= I, D -= I;
      const W = new O.SceneCanvas({
        pixelRatio: F,
        width: p,
        height: C
      }), L = new O.SceneCanvas({
        pixelRatio: F,
        width: 0,
        height: 0,
        willReadFrequently: !0
      }), U = new O.HitCanvas({
        pixelRatio: B,
        width: p,
        height: C
      }), X = W.getContext(), z = U.getContext();
      return U.isCache = !0, W.isCache = !0, this._cache.delete(v), this._filterUpToDate = !1, s.imageSmoothingEnabled === !1 && (W.getContext()._context.imageSmoothingEnabled = !1, L.getContext()._context.imageSmoothingEnabled = !1), X.save(), z.save(), X.translate(-N, -D), z.translate(-N, -D), this._isUnderCache = !0, this._clearSelfAndDescendantCache(c), this._clearSelfAndDescendantCache(_), this.drawScene(W, this), this.drawHit(U, this), this._isUnderCache = !1, X.restore(), z.restore(), V && (X.save(), X.beginPath(), X.rect(0, 0, p, C), X.closePath(), X.setAttr("strokeStyle", "red"), X.setAttr("lineWidth", 5), X.stroke(), X.restore()), this._cache.set(v, {
        scene: W,
        filter: L,
        hit: U,
        x: N,
        y: D
      }), this._requestDraw(), this;
    }
    isCached() {
      return this._cache.has(v);
    }
    getClientRect(t) {
      throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(t, s) {
      const e = [
        { x: t.x, y: t.y },
        { x: t.x + t.width, y: t.y },
        { x: t.x + t.width, y: t.y + t.height },
        { x: t.x, y: t.y + t.height }
      ];
      let p = 1 / 0, C = 1 / 0, F = -1 / 0, N = -1 / 0;
      const D = this.getAbsoluteTransform(s);
      return e.forEach(function(I) {
        const V = D.point(I);
        p === void 0 && (p = F = V.x, C = N = V.y), p = Math.min(p, V.x), C = Math.min(C, V.y), F = Math.max(F, V.x), N = Math.max(N, V.y);
      }), {
        x: p,
        y: C,
        width: F - p,
        height: N - C
      };
    }
    _drawCachedSceneCanvas(t) {
      t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
      const s = this._getCanvasCache();
      t.translate(s.x, s.y);
      const e = this._getCachedSceneCanvas(), p = e.pixelRatio;
      t.drawImage(e._canvas, 0, 0, e.width / p, e.height / p), t.restore();
    }
    _drawCachedHitCanvas(t) {
      const s = this._getCanvasCache(), e = s.hit;
      t.save(), t.translate(s.x, s.y), t.drawImage(e._canvas, 0, 0, e.width / e.pixelRatio, e.height / e.pixelRatio), t.restore();
    }
    _getCachedSceneCanvas() {
      let t = this.filters(), s = this._getCanvasCache(), e = s.scene, p = s.filter, C = p.getContext(), F, N, D, I;
      if (t) {
        if (!this._filterUpToDate) {
          const V = e.pixelRatio;
          p.setSize(e.width / e.pixelRatio, e.height / e.pixelRatio);
          try {
            for (F = t.length, C.clear(), C.drawImage(e._canvas, 0, 0, e.getWidth() / V, e.getHeight() / V), N = C.getImageData(0, 0, p.getWidth(), p.getHeight()), D = 0; D < F; D++) {
              if (I = t[D], typeof I != "function") {
                h.Util.error("Filter should be type of function, but got " + typeof I + " instead. Please check correct filters");
                continue;
              }
              I.call(this, N), C.putImageData(N, 0, 0);
            }
          } catch (B) {
            h.Util.error("Unable to apply filter. " + B.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          }
          this._filterUpToDate = !0;
        }
        return p;
      }
      return e;
    }
    on(t, s) {
      if (this._cache && this._cache.delete(o), arguments.length === 3)
        return this._delegate.apply(this, arguments);
      let e = t.split(a), p = e.length, C, F, N, D, I;
      for (C = 0; C < p; C++)
        F = e[C], N = F.split("."), D = N[0], I = N[1] || "", this.eventListeners[D] || (this.eventListeners[D] = []), this.eventListeners[D].push({
          name: I,
          handler: s
        });
      return this;
    }
    off(t, s) {
      let e = (t || "").split(a), p = e.length, C, F, N, D, I, V;
      if (this._cache && this._cache.delete(o), !t)
        for (F in this.eventListeners)
          this._off(F);
      for (C = 0; C < p; C++)
        if (N = e[C], D = N.split("."), I = D[0], V = D[1], I)
          this.eventListeners[I] && this._off(I, V, s);
        else
          for (F in this.eventListeners)
            this._off(F, V, s);
      return this;
    }
    dispatchEvent(t) {
      const s = {
        target: this,
        type: t.type,
        evt: t
      };
      return this.fire(t.type, s), this;
    }
    addEventListener(t, s) {
      return this.on(t, function(e) {
        s.call(this, e.evt);
      }), this;
    }
    removeEventListener(t) {
      return this.off(t), this;
    }
    _delegate(t, s, e) {
      const p = this;
      this.on(t, function(C) {
        const F = C.target.findAncestors(s, !0, p);
        for (let N = 0; N < F.length; N++)
          C = h.Util.cloneObject(C), C.currentTarget = F[N], e.call(F[N], C);
      });
    }
    remove() {
      return this.isDragging() && this.stopDrag(), m.DD._dragElements.delete(this._id), this._remove(), this;
    }
    _clearCaches() {
      this._clearSelfAndDescendantCache(g), this._clearSelfAndDescendantCache(c), this._clearSelfAndDescendantCache(_), this._clearSelfAndDescendantCache(S), this._clearSelfAndDescendantCache(G), this._clearSelfAndDescendantCache(l);
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
      const s = "get" + h.Util._capitalize(t);
      return h.Util._isFunction(this[s]) ? this[s]() : this.attrs[t];
    }
    getAncestors() {
      let t = this.getParent(), s = [];
      for (; t; )
        s.push(t), t = t.getParent();
      return s;
    }
    getAttrs() {
      return this.attrs || {};
    }
    setAttrs(t) {
      return this._batchTransformChanges(() => {
        let s, e;
        if (!t)
          return this;
        for (s in t)
          s !== P && (e = E + h.Util._capitalize(s), h.Util._isFunction(this[e]) ? this[e](t[s]) : this._setAttr(s, t[s]));
      }), this;
    }
    isListening() {
      return this._getCache(l, this._isListening);
    }
    _isListening(t) {
      if (!this.listening())
        return !1;
      const e = this.getParent();
      return e && e !== t && this !== t ? e._isListening(t) : !0;
    }
    isVisible() {
      return this._getCache(G, this._isVisible);
    }
    _isVisible(t) {
      if (!this.visible())
        return !1;
      const e = this.getParent();
      return e && e !== t && this !== t ? e._isVisible(t) : !0;
    }
    shouldDrawHit(t, s = !1) {
      if (t)
        return this._isVisible(t) && this._isListening(t);
      const e = this.getLayer();
      let p = !1;
      m.DD._dragElements.forEach((F) => {
        F.dragStatus === "dragging" && (F.node.nodeType === "Stage" || F.node.getLayer() === e) && (p = !0);
      });
      const C = !s && !R.Konva.hitOnDragEnabled && (p || R.Konva.isTransforming());
      return this.isListening() && this.isVisible() && !C;
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
      let t = this.getDepth(), s = this, e = 0, p, C, F, N;
      function D(V) {
        for (p = [], C = V.length, F = 0; F < C; F++)
          N = V[F], e++, N.nodeType !== i && (p = p.concat(N.getChildren().slice())), N._id === s._id && (F = C);
        p.length > 0 && p[0].getDepth() <= t && D(p);
      }
      const I = this.getStage();
      return s.nodeType !== M && I && D(I.getChildren()), e;
    }
    getDepth() {
      let t = 0, s = this.parent;
      for (; s; )
        t++, s = s.parent;
      return t;
    }
    _batchTransformChanges(t) {
      this._batchingTransformChange = !0, t(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(A), this._clearSelfAndDescendantCache(g)), this._needClearTransformCache = !1;
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
      const s = t.getPointerPosition();
      if (!s)
        return null;
      const e = this.getAbsoluteTransform().copy();
      return e.invert(), e.point(s);
    }
    getAbsolutePosition(t) {
      let s = !1, e = this.parent;
      for (; e; ) {
        if (e.isCached()) {
          s = !0;
          break;
        }
        e = e.parent;
      }
      s && !t && (t = !0);
      const p = this.getAbsoluteTransform(t).getMatrix(), C = new h.Transform(), F = this.offset();
      return C.m = p.slice(), C.translate(F.x, F.y), C.getTranslation();
    }
    setAbsolutePosition(t) {
      const { x: s, y: e, ...p } = this._clearTransform();
      this.attrs.x = s, this.attrs.y = e, this._clearCache(A);
      const C = this._getAbsoluteTransform().copy();
      return C.invert(), C.translate(t.x, t.y), t = {
        x: this.attrs.x + C.getTranslation().x,
        y: this.attrs.y + C.getTranslation().y
      }, this._setTransform(p), this.setPosition({ x: t.x, y: t.y }), this._clearCache(A), this._clearSelfAndDescendantCache(g), this;
    }
    _setTransform(t) {
      let s;
      for (s in t)
        this.attrs[s] = t[s];
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
      let s = t.x, e = t.y, p = this.x(), C = this.y();
      return s !== void 0 && (p += s), e !== void 0 && (C += e), this.setPosition({ x: p, y: C }), this;
    }
    _eachAncestorReverse(t, s) {
      let e = [], p = this.getParent(), C, F;
      if (!(s && s._id === this._id)) {
        for (e.unshift(this); p && (!s || p._id !== s._id); )
          e.unshift(p), p = p.parent;
        for (C = e.length, F = 0; F < C; F++)
          t(e[F]);
      }
    }
    rotate(t) {
      return this.rotation(this.rotation() + t), this;
    }
    moveToTop() {
      if (!this.parent)
        return h.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
      const t = this.index, s = this.parent.getChildren().length;
      return t < s - 1 ? (this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveUp() {
      if (!this.parent)
        return h.Util.warn("Node has no parent. moveUp function is ignored."), !1;
      const t = this.index, s = this.parent.getChildren().length;
      return t < s - 1 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
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
      const s = this.index;
      return this.parent.children.splice(s, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this;
    }
    getAbsoluteOpacity() {
      return this._getCache(c, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
      let t = this.opacity();
      const s = this.getParent();
      return s && !s._isUnderCache && (t *= s.getAbsoluteOpacity()), t;
    }
    moveTo(t) {
      return this.getParent() !== t && (this._remove(), t.add(this)), this;
    }
    toObject() {
      let t = this.getAttrs(), s, e, p, C, F;
      const N = {
        attrs: {},
        className: this.getClassName()
      };
      for (s in t)
        e = t[s], F = h.Util.isObject(e) && !h.Util._isPlainObject(e) && !h.Util._isArray(e), !F && (p = typeof this[s] == "function" && this[s], delete t[s], C = p ? p.call(this) : null, t[s] = e, C !== e && (N.attrs[s] = e));
      return h.Util._prepareToStringify(N);
    }
    toJSON() {
      return JSON.stringify(this.toObject());
    }
    getParent() {
      return this.parent;
    }
    findAncestors(t, s, e) {
      const p = [];
      s && this._isMatch(t) && p.push(this);
      let C = this.parent;
      for (; C; ) {
        if (C === e)
          return p;
        C._isMatch(t) && p.push(C), C = C.parent;
      }
      return p;
    }
    isAncestorOf(t) {
      return !1;
    }
    findAncestor(t, s, e) {
      return this.findAncestors(t, s, e)[0];
    }
    _isMatch(t) {
      if (!t)
        return !1;
      if (typeof t == "function")
        return t(this);
      let s = t.replace(/ /g, "").split(","), e = s.length, p, C;
      for (p = 0; p < e; p++)
        if (C = s[p], h.Util.isValidSelector(C) || (h.Util.warn('Selector "' + C + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), h.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), h.Util.warn("Konva is awesome, right?")), C.charAt(0) === "#") {
          if (this.id() === C.slice(1))
            return !0;
        } else if (C.charAt(0) === ".") {
          if (this.hasName(C.slice(1)))
            return !0;
        } else if (this.className === C || this.nodeType === C)
          return !0;
      return !1;
    }
    getLayer() {
      const t = this.getParent();
      return t ? t.getLayer() : null;
    }
    getStage() {
      return this._getCache(S, this._getStage);
    }
    _getStage() {
      const t = this.getParent();
      return t ? t.getStage() : null;
    }
    fire(t, s = {}, e) {
      return s.target = s.target || this, e ? this._fireAndBubble(t, s) : this._fire(t, s), this;
    }
    getAbsoluteTransform(t) {
      return t ? this._getAbsoluteTransform(t) : this._getCache(g, this._getAbsoluteTransform);
    }
    _getAbsoluteTransform(t) {
      let s;
      if (t)
        return s = new h.Transform(), this._eachAncestorReverse(function(e) {
          const p = e.transformsEnabled();
          p === "all" ? s.multiply(e.getTransform()) : p === "position" && s.translate(e.x() - e.offsetX(), e.y() - e.offsetY());
        }, t), s;
      {
        s = this._cache.get(g) || new h.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(s) : s.reset();
        const e = this.transformsEnabled();
        if (e === "all")
          s.multiply(this.getTransform());
        else if (e === "position") {
          const p = this.attrs.x || 0, C = this.attrs.y || 0, F = this.attrs.offsetX || 0, N = this.attrs.offsetY || 0;
          s.translate(p - F, C - N);
        }
        return s.dirty = !1, s;
      }
    }
    getAbsoluteScale(t) {
      let s = this;
      for (; s; )
        s._isUnderCache && (t = s), s = s.getParent();
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
      return this._getCache(A, this._getTransform);
    }
    _getTransform() {
      var t, s;
      const e = this._cache.get(A) || new h.Transform();
      e.reset();
      const p = this.x(), C = this.y(), F = R.Konva.getAngle(this.rotation()), N = (t = this.attrs.scaleX) !== null && t !== void 0 ? t : 1, D = (s = this.attrs.scaleY) !== null && s !== void 0 ? s : 1, I = this.attrs.skewX || 0, V = this.attrs.skewY || 0, B = this.attrs.offsetX || 0, H = this.attrs.offsetY || 0;
      return (p !== 0 || C !== 0) && e.translate(p, C), F !== 0 && e.rotate(F), (I !== 0 || V !== 0) && e.skew(I, V), (N !== 1 || D !== 1) && e.scale(N, D), (B !== 0 || H !== 0) && e.translate(-1 * B, -1 * H), e.dirty = !1, e;
    }
    clone(t) {
      let s = h.Util.cloneObject(this.attrs), e, p, C, F, N;
      for (e in t)
        s[e] = t[e];
      const D = new this.constructor(s);
      for (e in this.eventListeners)
        for (p = this.eventListeners[e], C = p.length, F = 0; F < C; F++)
          N = p[F], N.name.indexOf(u) < 0 && (D.eventListeners[e] || (D.eventListeners[e] = []), D.eventListeners[e].push(N));
      return D;
    }
    _toKonvaCanvas(t) {
      t = t || {};
      const s = this.getClientRect(), e = this.getStage(), p = t.x !== void 0 ? t.x : Math.floor(s.x), C = t.y !== void 0 ? t.y : Math.floor(s.y), F = t.pixelRatio || 1, N = new O.SceneCanvas({
        width: t.width || Math.ceil(s.width) || (e ? e.width() : 0),
        height: t.height || Math.ceil(s.height) || (e ? e.height() : 0),
        pixelRatio: F
      }), D = N.getContext(), I = new O.SceneCanvas({
        width: N.width / N.pixelRatio + Math.abs(p),
        height: N.height / N.pixelRatio + Math.abs(C),
        pixelRatio: N.pixelRatio
      });
      return t.imageSmoothingEnabled === !1 && (D._context.imageSmoothingEnabled = !1), D.save(), (p || C) && D.translate(-1 * p, -1 * C), this.drawScene(N, void 0, I), D.restore(), N;
    }
    toCanvas(t) {
      return this._toKonvaCanvas(t)._canvas;
    }
    toDataURL(t) {
      t = t || {};
      const s = t.mimeType || null, e = t.quality || null, p = this._toKonvaCanvas(t).toDataURL(s, e);
      return t.callback && t.callback(p), p;
    }
    toImage(t) {
      return new Promise((s, e) => {
        try {
          const p = t == null ? void 0 : t.callback;
          p && delete t.callback, h.Util._urlToImage(this.toDataURL(t), function(C) {
            s(C), p == null || p(C);
          });
        } catch (p) {
          e(p);
        }
      });
    }
    toBlob(t) {
      return new Promise((s, e) => {
        try {
          const p = t == null ? void 0 : t.callback;
          p && delete t.callback, this.toCanvas(t).toBlob((C) => {
            s(C), p == null || p(C);
          }, t == null ? void 0 : t.mimeType, t == null ? void 0 : t.quality);
        } catch (p) {
          e(p);
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
      return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : R.Konva.dragDistance;
    }
    _off(t, s, e) {
      let p = this.eventListeners[t], C, F, N;
      for (C = 0; C < p.length; C++)
        if (F = p[C].name, N = p[C].handler, (F !== "konva" || s === "konva") && (!s || F === s) && (!e || e === N)) {
          if (p.splice(C, 1), p.length === 0) {
            delete this.eventListeners[t];
            break;
          }
          C--;
        }
    }
    _fireChangeEvent(t, s, e) {
      this._fire(t + w, {
        oldVal: s,
        newVal: e
      });
    }
    addName(t) {
      if (!this.hasName(t)) {
        const s = this.name(), e = s ? s + " " + t : t;
        this.name(e);
      }
      return this;
    }
    hasName(t) {
      if (!t)
        return !1;
      const s = this.name();
      return s ? (s || "").split(/\s/g).indexOf(t) !== -1 : !1;
    }
    removeName(t) {
      const s = (this.name() || "").split(/\s/g), e = s.indexOf(t);
      return e !== -1 && (s.splice(e, 1), this.name(s.join(" "))), this;
    }
    setAttr(t, s) {
      const e = this[E + h.Util._capitalize(t)];
      return h.Util._isFunction(e) ? e.call(this, s) : this._setAttr(t, s), this;
    }
    _requestDraw() {
      if (R.Konva.autoDrawEnabled) {
        const t = this.getLayer() || this.getStage();
        t == null || t.batchDraw();
      }
    }
    _setAttr(t, s) {
      const e = this.attrs[t];
      e === s && !h.Util.isObject(s) || (s == null ? delete this.attrs[t] : this.attrs[t] = s, this._shouldFireChangeEvents && this._fireChangeEvent(t, e, s), this._requestDraw());
    }
    _setComponentAttr(t, s, e) {
      let p;
      e !== void 0 && (p = this.attrs[t], p || (this.attrs[t] = this.getAttr(t)), this.attrs[t][s] = e, this._fireChangeEvent(t, p, e));
    }
    _fireAndBubble(t, s, e) {
      if (s && this.nodeType === i && (s.target = this), !((t === y || t === T) && (e && (this === e || this.isAncestorOf && this.isAncestorOf(e)) || this.nodeType === "Stage" && !e))) {
        this._fire(t, s);
        const C = (t === y || t === T) && e && e.isAncestorOf && e.isAncestorOf(this) && !e.isAncestorOf(this.parent);
        (s && !s.cancelBubble || !s) && this.parent && this.parent.isListening() && !C && (e && e.parent ? this._fireAndBubble.call(this.parent, t, s, e) : this._fireAndBubble.call(this.parent, t, s));
      }
    }
    _getProtoListeners(t) {
      var s, e, p;
      const C = (s = this._cache.get(o)) !== null && s !== void 0 ? s : {};
      let F = C == null ? void 0 : C[t];
      if (F === void 0) {
        F = [];
        let N = Object.getPrototypeOf(this);
        for (; N; ) {
          const D = (p = (e = N.eventListeners) === null || e === void 0 ? void 0 : e[t]) !== null && p !== void 0 ? p : [];
          F.push(...D), N = Object.getPrototypeOf(N);
        }
        C[t] = F, this._cache.set(o, C);
      }
      return F;
    }
    _fire(t, s) {
      s = s || {}, s.currentTarget = this, s.type = t;
      const e = this._getProtoListeners(t);
      if (e)
        for (var p = 0; p < e.length; p++)
          e[p].handler.call(this, s);
      const C = this.eventListeners[t];
      if (C)
        for (var p = 0; p < C.length; p++)
          C[p].handler.call(this, s);
    }
    draw() {
      return this.drawScene(), this.drawHit(), this;
    }
    _createDragElement(t) {
      const s = t ? t.pointerId : void 0, e = this.getStage(), p = this.getAbsolutePosition();
      if (!e)
        return;
      const C = e._getPointerById(s) || e._changedPointerPositions[0] || p;
      m.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: C,
        offset: {
          x: C.x - p.x,
          y: C.y - p.y
        },
        dragStatus: "ready",
        pointerId: s
      });
    }
    startDrag(t, s = !0) {
      m.DD._dragElements.has(this._id) || this._createDragElement(t);
      const e = m.DD._dragElements.get(this._id);
      e.dragStatus = "dragging", this.fire("dragstart", {
        type: "dragstart",
        target: this,
        evt: t && t.evt
      }, s);
    }
    _setDragPosition(t, s) {
      const e = this.getStage()._getPointerById(s.pointerId);
      if (!e)
        return;
      let p = {
        x: e.x - s.offset.x,
        y: e.y - s.offset.y
      };
      const C = this.dragBoundFunc();
      if (C !== void 0) {
        const F = C.call(this, p, t);
        F ? p = F : h.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== p.x || this._lastPos.y !== p.y) && (this.setAbsolutePosition(p), this._requestDraw()), this._lastPos = p;
    }
    stopDrag(t) {
      const s = m.DD._dragElements.get(this._id);
      s && (s.dragStatus = "stopped"), m.DD._endDragBefore(t), m.DD._endDragAfter(t);
    }
    setDraggable(t) {
      this._setAttr("draggable", t), this._dragChange();
    }
    isDragging() {
      const t = m.DD._dragElements.get(this._id);
      return t ? t.dragStatus === "dragging" : !1;
    }
    _listenDrag() {
      this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(t) {
        if (!(!(t.evt.button !== void 0) || R.Konva.dragButtons.indexOf(t.evt.button) >= 0) || this.isDragging())
          return;
        let p = !1;
        m.DD._dragElements.forEach((C) => {
          this.isAncestorOf(C.node) && (p = !0);
        }), p || this._createDragElement(t);
      });
    }
    _dragChange() {
      if (this.attrs.draggable)
        this._listenDrag();
      else {
        if (this._dragCleanup(), !this.getStage())
          return;
        const s = m.DD._dragElements.get(this._id), e = s && s.dragStatus === "dragging", p = s && s.dragStatus === "ready";
        e ? this.stopDrag() : p && m.DD._dragElements.delete(this._id);
      }
    }
    _dragCleanup() {
      this.off("mousedown.konva"), this.off("touchstart.konva");
    }
    isClientRectOnScreen(t = { x: 0, y: 0 }) {
      const s = this.getStage();
      if (!s)
        return !1;
      const e = {
        x: -t.x,
        y: -t.y,
        width: s.width() + 2 * t.x,
        height: s.height() + 2 * t.y
      };
      return h.Util.haveIntersection(e, this.getClientRect());
    }
    static create(t, s) {
      return h.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, s);
    }
    static _createNode(t, s) {
      let e = li.prototype.getClassName.call(t), p = t.children, C, F, N;
      s && (t.attrs.container = s), R.Konva[e] || (h.Util.warn('Can not find a node with class name "' + e + '". Fallback to "Shape".'), e = "Shape");
      const D = R.Konva[e];
      if (C = new D(t.attrs), p)
        for (F = p.length, N = 0; N < F; N++)
          C.add(li._createNode(p[N]));
      return C;
    }
  };
  Jt.Node = n, n.prototype.nodeType = "Node", n.prototype._attrsAffectingSize = [], n.prototype.eventListeners = {}, n.prototype.on.call(n.prototype, r, function() {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = !0;
      return;
    }
    this._clearCache(A), this._clearSelfAndDescendantCache(g);
  }), n.prototype.on.call(n.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(G);
  }), n.prototype.on.call(n.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(l);
  }), n.prototype.on.call(n.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(c);
  });
  const f = k.Factory.addGetterSetter;
  return f(n, "zIndex"), f(n, "absolutePosition"), f(n, "position"), f(n, "x", 0, (0, b.getNumberValidator)()), f(n, "y", 0, (0, b.getNumberValidator)()), f(n, "globalCompositeOperation", "source-over", (0, b.getStringValidator)()), f(n, "opacity", 1, (0, b.getNumberValidator)()), f(n, "name", "", (0, b.getStringValidator)()), f(n, "id", "", (0, b.getStringValidator)()), f(n, "rotation", 0, (0, b.getNumberValidator)()), k.Factory.addComponentsGetterSetter(n, "scale", ["x", "y"]), f(n, "scaleX", 1, (0, b.getNumberValidator)()), f(n, "scaleY", 1, (0, b.getNumberValidator)()), k.Factory.addComponentsGetterSetter(n, "skew", ["x", "y"]), f(n, "skewX", 0, (0, b.getNumberValidator)()), f(n, "skewY", 0, (0, b.getNumberValidator)()), k.Factory.addComponentsGetterSetter(n, "offset", ["x", "y"]), f(n, "offsetX", 0, (0, b.getNumberValidator)()), f(n, "offsetY", 0, (0, b.getNumberValidator)()), f(n, "dragDistance", void 0, (0, b.getNumberValidator)()), f(n, "width", 0, (0, b.getNumberValidator)()), f(n, "height", 0, (0, b.getNumberValidator)()), f(n, "listening", !0, (0, b.getBooleanValidator)()), f(n, "preventDefault", !0, (0, b.getBooleanValidator)()), f(n, "filters", void 0, function(x) {
    return this._filterUpToDate = !1, x;
  }), f(n, "visible", !0, (0, b.getBooleanValidator)()), f(n, "transformsEnabled", "all", (0, b.getStringValidator)()), f(n, "size"), f(n, "dragBoundFunc"), f(n, "draggable", !1, (0, b.getBooleanValidator)()), k.Factory.backCompat(n, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  }), Jt;
}
var te = {}, Ai;
function We() {
  if (Ai) return te;
  Ai = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.Container = void 0;
  const h = tt(), k = ot(), O = et();
  let R = class extends k.Node {
    constructor() {
      super(...arguments), this.children = [];
    }
    getChildren(b) {
      if (!b)
        return this.children || [];
      const c = this.children || [], o = [];
      return c.forEach(function(g) {
        b(g) && o.push(g);
      }), o;
    }
    hasChildren() {
      return this.getChildren().length > 0;
    }
    removeChildren() {
      return this.getChildren().forEach((b) => {
        b.parent = null, b.index = 0, b.remove();
      }), this.children = [], this._requestDraw(), this;
    }
    destroyChildren() {
      return this.getChildren().forEach((b) => {
        b.parent = null, b.index = 0, b.destroy();
      }), this.children = [], this._requestDraw(), this;
    }
    add(...b) {
      if (b.length === 0)
        return this;
      if (b.length > 1) {
        for (let o = 0; o < b.length; o++)
          this.add(b[o]);
        return this;
      }
      const c = b[0];
      return c.getParent() ? (c.moveTo(this), this) : (this._validateAdd(c), c.index = this.getChildren().length, c.parent = this, c._clearCaches(), this.getChildren().push(c), this._fire("add", {
        child: c
      }), this._requestDraw(), this);
    }
    destroy() {
      return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
    }
    find(b) {
      return this._generalFind(b, !1);
    }
    findOne(b) {
      const c = this._generalFind(b, !0);
      return c.length > 0 ? c[0] : void 0;
    }
    _generalFind(b, c) {
      const o = [];
      return this._descendants((g) => {
        const _ = g._isMatch(b);
        return _ && o.push(g), !!(_ && c);
      }), o;
    }
    _descendants(b) {
      let c = !1;
      const o = this.getChildren();
      for (const g of o) {
        if (c = b(g), c)
          return !0;
        if (g.hasChildren() && (c = g._descendants(b), c))
          return !0;
      }
      return !1;
    }
    toObject() {
      const b = k.Node.prototype.toObject.call(this);
      return b.children = [], this.getChildren().forEach((c) => {
        b.children.push(c.toObject());
      }), b;
    }
    isAncestorOf(b) {
      let c = b.getParent();
      for (; c; ) {
        if (c._id === this._id)
          return !0;
        c = c.getParent();
      }
      return !1;
    }
    clone(b) {
      const c = k.Node.prototype.clone.call(this, b);
      return this.getChildren().forEach(function(o) {
        c.add(o.clone());
      }), c;
    }
    getAllIntersections(b) {
      const c = [];
      return this.find("Shape").forEach((o) => {
        o.isVisible() && o.intersects(b) && c.push(o);
      }), c;
    }
    _clearSelfAndDescendantCache(b) {
      var c;
      super._clearSelfAndDescendantCache(b), !this.isCached() && ((c = this.children) === null || c === void 0 || c.forEach(function(o) {
        o._clearSelfAndDescendantCache(b);
      }));
    }
    _setChildrenIndices() {
      var b;
      (b = this.children) === null || b === void 0 || b.forEach(function(c, o) {
        c.index = o;
      }), this._requestDraw();
    }
    drawScene(b, c, o) {
      const g = this.getLayer(), _ = b || g && g.getCanvas(), v = _ && _.getContext(), w = this._getCanvasCache(), P = w && w.scene, u = _ && _.isCache;
      if (!this.isVisible() && !u)
        return this;
      if (P) {
        v.save();
        const l = this.getAbsoluteTransform(c).getMatrix();
        v.transform(l[0], l[1], l[2], l[3], l[4], l[5]), this._drawCachedSceneCanvas(v), v.restore();
      } else
        this._drawChildren("drawScene", _, c, o);
      return this;
    }
    drawHit(b, c) {
      if (!this.shouldDrawHit(c))
        return this;
      const o = this.getLayer(), g = b || o && o.hitCanvas, _ = g && g.getContext(), v = this._getCanvasCache();
      if (v && v.hit) {
        _.save();
        const P = this.getAbsoluteTransform(c).getMatrix();
        _.transform(P[0], P[1], P[2], P[3], P[4], P[5]), this._drawCachedHitCanvas(_), _.restore();
      } else
        this._drawChildren("drawHit", g, c);
      return this;
    }
    _drawChildren(b, c, o, g) {
      var _;
      const v = c && c.getContext(), w = this.clipWidth(), P = this.clipHeight(), u = this.clipFunc(), l = typeof w == "number" && typeof P == "number" || u, y = o === this;
      if (l) {
        v.save();
        const E = this.getAbsoluteTransform(o);
        let i = E.getMatrix();
        v.transform(i[0], i[1], i[2], i[3], i[4], i[5]), v.beginPath();
        let a;
        if (u)
          a = u.call(this, v, this);
        else {
          const S = this.clipX(), A = this.clipY();
          v.rect(S || 0, A || 0, w, P);
        }
        v.clip.apply(v, a), i = E.copy().invert().getMatrix(), v.transform(i[0], i[1], i[2], i[3], i[4], i[5]);
      }
      const T = !y && this.globalCompositeOperation() !== "source-over" && b === "drawScene";
      T && (v.save(), v._applyGlobalCompositeOperation(this)), (_ = this.children) === null || _ === void 0 || _.forEach(function(E) {
        E[b](c, o, g);
      }), T && v.restore(), l && v.restore();
    }
    getClientRect(b = {}) {
      var c;
      const o = b.skipTransform, g = b.relativeTo;
      let _, v, w, P, u = {
        x: 1 / 0,
        y: 1 / 0,
        width: 0,
        height: 0
      };
      const l = this;
      (c = this.children) === null || c === void 0 || c.forEach(function(E) {
        if (!E.visible())
          return;
        const i = E.getClientRect({
          relativeTo: l,
          skipShadow: b.skipShadow,
          skipStroke: b.skipStroke
        });
        i.width === 0 && i.height === 0 || (_ === void 0 ? (_ = i.x, v = i.y, w = i.x + i.width, P = i.y + i.height) : (_ = Math.min(_, i.x), v = Math.min(v, i.y), w = Math.max(w, i.x + i.width), P = Math.max(P, i.y + i.height)));
      });
      const y = this.find("Shape");
      let T = !1;
      for (let E = 0; E < y.length; E++)
        if (y[E]._isVisible(this)) {
          T = !0;
          break;
        }
      return T && _ !== void 0 ? u = {
        x: _,
        y: v,
        width: w - _,
        height: P - v
      } : u = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, o ? u : this._transformedRect(u, g);
    }
  };
  return te.Container = R, h.Factory.addComponentsGetterSetter(R, "clip", [
    "x",
    "y",
    "width",
    "height"
  ]), h.Factory.addGetterSetter(R, "clipX", void 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(R, "clipY", void 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(R, "clipWidth", void 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(R, "clipHeight", void 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(R, "clipFunc"), te;
}
var Je = {}, Bt = {}, ki;
function Nn() {
  if (ki) return Bt;
  ki = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.getCapturedShape = R, Bt.createEvent = m, Bt.hasPointerCapture = b, Bt.setPointerCapture = c, Bt.releaseCapture = o;
  const h = J(), k = /* @__PURE__ */ new Map(), O = h.Konva._global.PointerEvent !== void 0;
  function R(g) {
    return k.get(g);
  }
  function m(g) {
    return {
      evt: g,
      pointerId: g.pointerId
    };
  }
  function b(g, _) {
    return k.get(g) === _;
  }
  function c(g, _) {
    o(g), _.getStage() && (k.set(g, _), O && _._fire("gotpointercapture", m(new PointerEvent("gotpointercapture"))));
  }
  function o(g, _) {
    const v = k.get(g);
    if (!v)
      return;
    const w = v.getStage();
    w && w.content, k.delete(g), O && v._fire("lostpointercapture", m(new PointerEvent("lostpointercapture")));
  }
  return Bt;
}
var Ei;
function $n() {
  return Ei || (Ei = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Stage = h.stages = void 0;
    const k = at(), O = tt(), R = We(), m = J(), b = qe(), c = ui(), o = J(), g = Nn(), _ = "Stage", v = "string", w = "px", P = "mouseout", u = "mouseleave", l = "mouseover", y = "mouseenter", T = "mousemove", E = "mousedown", i = "mouseup", a = "pointermove", S = "pointerdown", A = "pointerup", M = "pointercancel", G = "lostpointercapture", r = "pointerout", d = "pointerleave", n = "pointerover", f = "pointerenter", x = "contextmenu", t = "touchstart", s = "touchend", e = "touchmove", p = "touchcancel", C = "wheel", F = 5, N = [
      [y, "_pointerenter"],
      [E, "_pointerdown"],
      [T, "_pointermove"],
      [i, "_pointerup"],
      [u, "_pointerleave"],
      [t, "_pointerdown"],
      [e, "_pointermove"],
      [s, "_pointerup"],
      [p, "_pointercancel"],
      [l, "_pointerover"],
      [C, "_wheel"],
      [x, "_contextmenu"],
      [S, "_pointerdown"],
      [a, "_pointermove"],
      [A, "_pointerup"],
      [M, "_pointercancel"],
      [G, "_lostpointercapture"]
    ], D = {
      mouse: {
        [r]: P,
        [d]: u,
        [n]: l,
        [f]: y,
        [a]: T,
        [S]: E,
        [A]: i,
        [M]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick"
      },
      touch: {
        [r]: "touchout",
        [d]: "touchleave",
        [n]: "touchover",
        [f]: "touchenter",
        [a]: e,
        [S]: t,
        [A]: s,
        [M]: p,
        pointerclick: "tap",
        pointerdblclick: "dbltap"
      },
      pointer: {
        [r]: r,
        [d]: d,
        [n]: n,
        [f]: f,
        [a]: a,
        [S]: S,
        [A]: A,
        [M]: M,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick"
      }
    }, I = (W) => W.indexOf("pointer") >= 0 ? "pointer" : W.indexOf("touch") >= 0 ? "touch" : "mouse", V = (W) => {
      const L = I(W);
      if (L === "pointer")
        return m.Konva.pointerEventsEnabled && D.pointer;
      if (L === "touch")
        return D.touch;
      if (L === "mouse")
        return D.mouse;
    };
    function B(W = {}) {
      return (W.clipFunc || W.clipWidth || W.clipHeight) && k.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), W;
    }
    const H = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
    h.stages = [];
    class q extends R.Container {
      constructor(L) {
        super(B(L)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), h.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
          B(this.attrs);
        }), this._checkVisibility();
      }
      _validateAdd(L) {
        const U = L.getType() === "Layer", X = L.getType() === "FastLayer";
        U || X || k.Util.throw("You may only add layers to the stage.");
      }
      _checkVisibility() {
        if (!this.content)
          return;
        const L = this.visible() ? "" : "none";
        this.content.style.display = L;
      }
      setContainer(L) {
        if (typeof L === v) {
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
        return L || (L = {}), L.container = typeof document < "u" && document.createElement("div"), R.Container.prototype.clone.call(this, L);
      }
      destroy() {
        super.destroy();
        const L = this.content;
        L && k.Util._isInDocument(L) && this.container().removeChild(L);
        const U = h.stages.indexOf(this);
        return U > -1 && h.stages.splice(U, 1), k.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
      }
      getPointerPosition() {
        const L = this._pointerPositions[0] || this._changedPointerPositions[0];
        return L ? {
          x: L.x,
          y: L.y
        } : (k.Util.warn(H), null);
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
        const U = new b.SceneCanvas({
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
        this.content && (this.content.style.width = L + w, this.content.style.height = U + w), this.bufferCanvas.setSize(L, U), this.bufferHitCanvas.setSize(L, U), this.children.forEach((X) => {
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
        return X > F && k.Util.warn("The stage has " + X + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), L.setSize({ width: this.width(), height: this.height() }), L.draw(), m.Konva.isBrowser && this.content.appendChild(L.canvas._canvas), this;
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
        m.Konva.isBrowser && N.forEach(([L, U]) => {
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
        const U = V(L.type), X = I(L.type);
        if (!U)
          return;
        this.setPointersPositions(L);
        const z = this._getTargetShape(X), Y = !(m.Konva.isDragging() || m.Konva.isTransforming()) || m.Konva.hitOnDragEnabled;
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
        const U = V(L.type), X = I(L.type);
        if (!U)
          return;
        this.setPointersPositions(L);
        let z = !1;
        this._changedPointerPositions.forEach((Y) => {
          const $ = this.getIntersection(Y);
          if (c.DD.justDragged = !1, m.Konva["_" + X + "ListenClick"] = !0, !$ || !$.isListening()) {
            this[X + "ClickStartShape"] = void 0;
            return;
          }
          m.Konva.capturePointerEventsEnabled && $.setPointerCapture(Y.id), this[X + "ClickStartShape"] = $, $._fireAndBubble(U.pointerdown, {
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
        const U = V(L.type), X = I(L.type);
        if (!U || (m.Konva.isDragging() && c.DD.node.preventDefault() && L.cancelable && L.preventDefault(), this.setPointersPositions(L), !(!(m.Konva.isDragging() || m.Konva.isTransforming()) || m.Konva.hitOnDragEnabled)))
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
        const U = V(L.type), X = I(L.type);
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
          m.Konva["_" + X + "InDblClickWindow"] ? (lt = !0, clearTimeout(this[X + "DblTimeout"])) : c.DD.justDragged || (m.Konva["_" + X + "InDblClickWindow"] = !0, clearTimeout(this[X + "DblTimeout"])), this[X + "DblTimeout"] = setTimeout(function() {
            m.Konva["_" + X + "InDblClickWindow"] = !1;
          }, m.Konva.dblClickWindow), K && K.isListening() ? (Q = !0, this[X + "ClickEndShape"] = K, K._fireAndBubble(U.pointerup, { ...it }), m.Konva["_" + X + "ListenClick"] && z && z === K && (K._fireAndBubble(U.pointerclick, { ...it }), lt && Y && Y === K && K._fireAndBubble(U.pointerdblclick, { ...it }))) : (this[X + "ClickEndShape"] = null, m.Konva["_" + X + "ListenClick"] && this._fire(U.pointerclick, {
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
        }), m.Konva["_" + X + "ListenClick"] = !1, L.cancelable && X !== "touch" && X !== "pointer" && L.preventDefault();
      }
      _contextmenu(L) {
        this.setPointersPositions(L);
        const U = this.getIntersection(this.getPointerPosition());
        U && U.isListening() ? U._fireAndBubble(x, { evt: L }) : this._fire(x, {
          evt: L,
          target: this,
          currentTarget: this
        });
      }
      _wheel(L) {
        this.setPointersPositions(L);
        const U = this.getIntersection(this.getPointerPosition());
        U && U.isListening() ? U._fireAndBubble(C, { evt: L }) : this._fire(C, {
          evt: L,
          target: this,
          currentTarget: this
        });
      }
      _pointercancel(L) {
        this.setPointersPositions(L);
        const U = g.getCapturedShape(L.pointerId) || this.getIntersection(this.getPointerPosition());
        U && U._fireAndBubble(A, g.createEvent(L)), g.releaseCapture(L.pointerId);
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
        }, this._pointerPositions = [{ x: X, y: z, id: k.Util._getFirstPointerId(L) }], this._changedPointerPositions = [
          { x: X, y: z, id: k.Util._getFirstPointerId(L) }
        ]);
      }
      _setPointerPosition(L) {
        k.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(L);
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
        if (this.bufferCanvas = new b.SceneCanvas({
          width: this.width(),
          height: this.height()
        }), this.bufferHitCanvas = new b.HitCanvas({
          pixelRatio: 1,
          width: this.width(),
          height: this.height()
        }), !m.Konva.isBrowser)
          return;
        const L = this.container();
        if (!L)
          throw "Stage has no container. A container is required.";
        L.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), L.appendChild(this.content), this._resizeDOM();
      }
      cache() {
        return k.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
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
    h.Stage = q, q.prototype.nodeType = _, (0, o._registerNode)(q), O.Factory.addGetterSetter(q, "container"), m.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
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
    const k = J(), O = at(), R = tt(), m = ot(), b = et(), c = J(), o = Nn(), g = "hasShadow", _ = "shadowRGBA", v = "patternImage", w = "linearGradient", P = "radialGradient";
    let u;
    function l() {
      return u || (u = O.Util.createCanvasElement().getContext("2d"), u);
    }
    h.shapes = {};
    function y(d) {
      const n = this.attrs.fillRule;
      n ? d.fill(n) : d.fill();
    }
    function T(d) {
      d.stroke();
    }
    function E(d) {
      const n = this.attrs.fillRule;
      n ? d.fill(n) : d.fill();
    }
    function i(d) {
      d.stroke();
    }
    function a() {
      this._clearCache(g);
    }
    function S() {
      this._clearCache(_);
    }
    function A() {
      this._clearCache(v);
    }
    function M() {
      this._clearCache(w);
    }
    function G() {
      this._clearCache(P);
    }
    class r extends m.Node {
      constructor(n) {
        super(n);
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
        return this._getCache(v, this.__getFillPattern);
      }
      __getFillPattern() {
        if (this.fillPatternImage()) {
          const f = l().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
          if (f && f.setTransform) {
            const x = new O.Transform();
            x.translate(this.fillPatternX(), this.fillPatternY()), x.rotate(k.Konva.getAngle(this.fillPatternRotation())), x.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), x.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
            const t = x.getMatrix(), s = typeof DOMMatrix > "u" ? {
              a: t[0],
              b: t[1],
              c: t[2],
              d: t[3],
              e: t[4],
              f: t[5]
            } : new DOMMatrix(t);
            f.setTransform(s);
          }
          return f;
        }
      }
      _getLinearGradient() {
        return this._getCache(w, this.__getLinearGradient);
      }
      __getLinearGradient() {
        const n = this.fillLinearGradientColorStops();
        if (n) {
          const f = l(), x = this.fillLinearGradientStartPoint(), t = this.fillLinearGradientEndPoint(), s = f.createLinearGradient(x.x, x.y, t.x, t.y);
          for (let e = 0; e < n.length; e += 2)
            s.addColorStop(n[e], n[e + 1]);
          return s;
        }
      }
      _getRadialGradient() {
        return this._getCache(P, this.__getRadialGradient);
      }
      __getRadialGradient() {
        const n = this.fillRadialGradientColorStops();
        if (n) {
          const f = l(), x = this.fillRadialGradientStartPoint(), t = this.fillRadialGradientEndPoint(), s = f.createRadialGradient(x.x, x.y, this.fillRadialGradientStartRadius(), t.x, t.y, this.fillRadialGradientEndRadius());
          for (let e = 0; e < n.length; e += 2)
            s.addColorStop(n[e], n[e + 1]);
          return s;
        }
      }
      getShadowRGBA() {
        return this._getCache(_, this._getShadowRGBA);
      }
      _getShadowRGBA() {
        if (!this.hasShadow())
          return;
        const n = O.Util.colorToRGBA(this.shadowColor());
        if (n)
          return "rgba(" + n.r + "," + n.g + "," + n.b + "," + n.a * (this.shadowOpacity() || 1) + ")";
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
        const n = this.hitStrokeWidth();
        return n === "auto" ? this.hasStroke() : this.strokeEnabled() && !!n;
      }
      intersects(n) {
        const f = this.getStage();
        if (!f)
          return !1;
        const x = f.bufferHitCanvas;
        return x.getContext().clear(), this.drawHit(x, void 0, !0), x.context.getImageData(Math.round(n.x), Math.round(n.y), 1, 1).data[3] > 0;
      }
      destroy() {
        return m.Node.prototype.destroy.call(this), delete h.shapes[this.colorKey], delete this.colorKey, this;
      }
      _useBufferCanvas(n) {
        var f;
        if (!((f = this.attrs.perfectDrawEnabled) !== null && f !== void 0 ? f : !0))
          return !1;
        const t = n || this.hasFill(), s = this.hasStroke(), e = this.getAbsoluteOpacity() !== 1;
        if (t && s && e)
          return !0;
        const p = this.hasShadow(), C = this.shadowForStrokeEnabled();
        return !!(t && s && p && C);
      }
      setStrokeHitEnabled(n) {
        O.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), n ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
      }
      getStrokeHitEnabled() {
        return this.hitStrokeWidth() !== 0;
      }
      getSelfRect() {
        const n = this.size();
        return {
          x: this._centroid ? -n.width / 2 : 0,
          y: this._centroid ? -n.height / 2 : 0,
          width: n.width,
          height: n.height
        };
      }
      getClientRect(n = {}) {
        let f = !1, x = this.getParent();
        for (; x; ) {
          if (x.isCached()) {
            f = !0;
            break;
          }
          x = x.getParent();
        }
        const t = n.skipTransform, s = n.relativeTo || f && this.getStage() || void 0, e = this.getSelfRect(), C = !n.skipStroke && this.hasStroke() && this.strokeWidth() || 0, F = e.width + C, N = e.height + C, D = !n.skipShadow && this.hasShadow(), I = D ? this.shadowOffsetX() : 0, V = D ? this.shadowOffsetY() : 0, B = F + Math.abs(I), H = N + Math.abs(V), q = D && this.shadowBlur() || 0, W = B + q * 2, L = H + q * 2, U = {
          width: W,
          height: L,
          x: -(C / 2 + q) + Math.min(I, 0) + e.x,
          y: -(C / 2 + q) + Math.min(V, 0) + e.y
        };
        return t ? U : this._transformedRect(U, s);
      }
      drawScene(n, f, x) {
        const t = this.getLayer();
        let s = n || t.getCanvas(), e = s.getContext(), p = this._getCanvasCache(), C = this.getSceneFunc(), F = this.hasShadow(), N, D;
        const I = s.isCache, V = f === this;
        if (!this.isVisible() && !V)
          return this;
        if (p) {
          e.save();
          const H = this.getAbsoluteTransform(f).getMatrix();
          return e.transform(H[0], H[1], H[2], H[3], H[4], H[5]), this._drawCachedSceneCanvas(e), e.restore(), this;
        }
        if (!C)
          return this;
        if (e.save(), this._useBufferCanvas() && !I) {
          N = this.getStage();
          const H = x || N.bufferCanvas;
          D = H.getContext(), D.clear(), D.save(), D._applyLineJoin(this);
          var B = this.getAbsoluteTransform(f).getMatrix();
          D.transform(B[0], B[1], B[2], B[3], B[4], B[5]), C.call(this, D, this), D.restore();
          const q = H.pixelRatio;
          F && e._applyShadow(this), e._applyOpacity(this), e._applyGlobalCompositeOperation(this), e.drawImage(H._canvas, 0, 0, H.width / q, H.height / q);
        } else {
          if (e._applyLineJoin(this), !V) {
            var B = this.getAbsoluteTransform(f).getMatrix();
            e.transform(B[0], B[1], B[2], B[3], B[4], B[5]), e._applyOpacity(this), e._applyGlobalCompositeOperation(this);
          }
          F && e._applyShadow(this), C.call(this, e, this);
        }
        return e.restore(), this;
      }
      drawHit(n, f, x = !1) {
        if (!this.shouldDrawHit(f, x))
          return this;
        const t = this.getLayer(), s = n || t.hitCanvas, e = s && s.getContext(), p = this.hitFunc() || this.sceneFunc(), C = this._getCanvasCache(), F = C && C.hit;
        if (this.colorKey || O.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), F) {
          e.save();
          const D = this.getAbsoluteTransform(f).getMatrix();
          return e.transform(D[0], D[1], D[2], D[3], D[4], D[5]), this._drawCachedHitCanvas(e), e.restore(), this;
        }
        if (!p)
          return this;
        if (e.save(), e._applyLineJoin(this), !(this === f)) {
          const D = this.getAbsoluteTransform(f).getMatrix();
          e.transform(D[0], D[1], D[2], D[3], D[4], D[5]);
        }
        return p.call(this, e, this), e.restore(), this;
      }
      drawHitFromCache(n = 0) {
        const f = this._getCanvasCache(), x = this._getCachedSceneCanvas(), t = f.hit, s = t.getContext(), e = t.getWidth(), p = t.getHeight();
        s.clear(), s.drawImage(x._canvas, 0, 0, e, p);
        try {
          const C = s.getImageData(0, 0, e, p), F = C.data, N = F.length, D = O.Util._hexToRgb(this.colorKey);
          for (let I = 0; I < N; I += 4)
            F[I + 3] > n ? (F[I] = D.r, F[I + 1] = D.g, F[I + 2] = D.b, F[I + 3] = 255) : F[I + 3] = 0;
          s.putImageData(C, 0, 0);
        } catch (C) {
          O.Util.error("Unable to draw hit graph from cached scene canvas. " + C.message);
        }
        return this;
      }
      hasPointerCapture(n) {
        return o.hasPointerCapture(n, this);
      }
      setPointerCapture(n) {
        o.setPointerCapture(n, this);
      }
      releaseCapture(n) {
        o.releaseCapture(n, this);
      }
    }
    h.Shape = r, r.prototype._fillFunc = y, r.prototype._strokeFunc = T, r.prototype._fillFuncHit = E, r.prototype._strokeFuncHit = i, r.prototype._centroid = !1, r.prototype.nodeType = "Shape", (0, c._registerNode)(r), r.prototype.eventListeners = {}, r.prototype.on.call(r.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", a), r.prototype.on.call(r.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", S), r.prototype.on.call(r.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", A), r.prototype.on.call(r.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", M), r.prototype.on.call(r.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", G), R.Factory.addGetterSetter(r, "stroke", void 0, (0, b.getStringOrGradientValidator)()), R.Factory.addGetterSetter(r, "strokeWidth", 2, (0, b.getNumberValidator)()), R.Factory.addGetterSetter(r, "fillAfterStrokeEnabled", !1), R.Factory.addGetterSetter(r, "hitStrokeWidth", "auto", (0, b.getNumberOrAutoValidator)()), R.Factory.addGetterSetter(r, "strokeHitEnabled", !0, (0, b.getBooleanValidator)()), R.Factory.addGetterSetter(r, "perfectDrawEnabled", !0, (0, b.getBooleanValidator)()), R.Factory.addGetterSetter(r, "shadowForStrokeEnabled", !0, (0, b.getBooleanValidator)()), R.Factory.addGetterSetter(r, "lineJoin"), R.Factory.addGetterSetter(r, "lineCap"), R.Factory.addGetterSetter(r, "sceneFunc"), R.Factory.addGetterSetter(r, "hitFunc"), R.Factory.addGetterSetter(r, "dash"), R.Factory.addGetterSetter(r, "dashOffset", 0, (0, b.getNumberValidator)()), R.Factory.addGetterSetter(r, "shadowColor", void 0, (0, b.getStringValidator)()), R.Factory.addGetterSetter(r, "shadowBlur", 0, (0, b.getNumberValidator)()), R.Factory.addGetterSetter(r, "shadowOpacity", 1, (0, b.getNumberValidator)()), R.Factory.addComponentsGetterSetter(r, "shadowOffset", ["x", "y"]), R.Factory.addGetterSetter(r, "shadowOffsetX", 0, (0, b.getNumberValidator)()), R.Factory.addGetterSetter(r, "shadowOffsetY", 0, (0, b.getNumberValidator)()), R.Factory.addGetterSetter(r, "fillPatternImage"), R.Factory.addGetterSetter(r, "fill", void 0, (0, b.getStringOrGradientValidator)()), R.Factory.addGetterSetter(r, "fillPatternX", 0, (0, b.getNumberValidator)()), R.Factory.addGetterSetter(r, "fillPatternY", 0, (0, b.getNumberValidator)()), R.Factory.addGetterSetter(r, "fillLinearGradientColorStops"), R.Factory.addGetterSetter(r, "strokeLinearGradientColorStops"), R.Factory.addGetterSetter(r, "fillRadialGradientStartRadius", 0), R.Factory.addGetterSetter(r, "fillRadialGradientEndRadius", 0), R.Factory.addGetterSetter(r, "fillRadialGradientColorStops"), R.Factory.addGetterSetter(r, "fillPatternRepeat", "repeat"), R.Factory.addGetterSetter(r, "fillEnabled", !0), R.Factory.addGetterSetter(r, "strokeEnabled", !0), R.Factory.addGetterSetter(r, "shadowEnabled", !0), R.Factory.addGetterSetter(r, "dashEnabled", !0), R.Factory.addGetterSetter(r, "strokeScaleEnabled", !0), R.Factory.addGetterSetter(r, "fillPriority", "color"), R.Factory.addComponentsGetterSetter(r, "fillPatternOffset", ["x", "y"]), R.Factory.addGetterSetter(r, "fillPatternOffsetX", 0, (0, b.getNumberValidator)()), R.Factory.addGetterSetter(r, "fillPatternOffsetY", 0, (0, b.getNumberValidator)()), R.Factory.addComponentsGetterSetter(r, "fillPatternScale", ["x", "y"]), R.Factory.addGetterSetter(r, "fillPatternScaleX", 1, (0, b.getNumberValidator)()), R.Factory.addGetterSetter(r, "fillPatternScaleY", 1, (0, b.getNumberValidator)()), R.Factory.addComponentsGetterSetter(r, "fillLinearGradientStartPoint", [
      "x",
      "y"
    ]), R.Factory.addComponentsGetterSetter(r, "strokeLinearGradientStartPoint", [
      "x",
      "y"
    ]), R.Factory.addGetterSetter(r, "fillLinearGradientStartPointX", 0), R.Factory.addGetterSetter(r, "strokeLinearGradientStartPointX", 0), R.Factory.addGetterSetter(r, "fillLinearGradientStartPointY", 0), R.Factory.addGetterSetter(r, "strokeLinearGradientStartPointY", 0), R.Factory.addComponentsGetterSetter(r, "fillLinearGradientEndPoint", [
      "x",
      "y"
    ]), R.Factory.addComponentsGetterSetter(r, "strokeLinearGradientEndPoint", [
      "x",
      "y"
    ]), R.Factory.addGetterSetter(r, "fillLinearGradientEndPointX", 0), R.Factory.addGetterSetter(r, "strokeLinearGradientEndPointX", 0), R.Factory.addGetterSetter(r, "fillLinearGradientEndPointY", 0), R.Factory.addGetterSetter(r, "strokeLinearGradientEndPointY", 0), R.Factory.addComponentsGetterSetter(r, "fillRadialGradientStartPoint", [
      "x",
      "y"
    ]), R.Factory.addGetterSetter(r, "fillRadialGradientStartPointX", 0), R.Factory.addGetterSetter(r, "fillRadialGradientStartPointY", 0), R.Factory.addComponentsGetterSetter(r, "fillRadialGradientEndPoint", [
      "x",
      "y"
    ]), R.Factory.addGetterSetter(r, "fillRadialGradientEndPointX", 0), R.Factory.addGetterSetter(r, "fillRadialGradientEndPointY", 0), R.Factory.addGetterSetter(r, "fillPatternRotation", 0), R.Factory.addGetterSetter(r, "fillRule", void 0, (0, b.getStringValidator)()), R.Factory.backCompat(r, {
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
  const h = at(), k = We(), O = ot(), R = tt(), m = qe(), b = et(), c = dt(), o = J(), g = "#", _ = "beforeDraw", v = "draw", w = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 }
  ], P = w.length;
  let u = class extends k.Container {
    constructor(y) {
      super(y), this.canvas = new m.SceneCanvas(), this.hitCanvas = new m.HitCanvas({
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
    clear(y) {
      return this.getContext().clear(y), this.getHitCanvas().getContext().clear(y), this;
    }
    setZIndex(y) {
      super.setZIndex(y);
      const T = this.getStage();
      return T && T.content && (T.content.removeChild(this.getNativeCanvasElement()), y < T.children.length - 1 ? T.content.insertBefore(this.getNativeCanvasElement(), T.children[y + 1].getCanvas()._canvas) : T.content.appendChild(this.getNativeCanvasElement())), this;
    }
    moveToTop() {
      O.Node.prototype.moveToTop.call(this);
      const y = this.getStage();
      return y && y.content && (y.content.removeChild(this.getNativeCanvasElement()), y.content.appendChild(this.getNativeCanvasElement())), !0;
    }
    moveUp() {
      if (!O.Node.prototype.moveUp.call(this))
        return !1;
      const T = this.getStage();
      return !T || !T.content ? !1 : (T.content.removeChild(this.getNativeCanvasElement()), this.index < T.children.length - 1 ? T.content.insertBefore(this.getNativeCanvasElement(), T.children[this.index + 1].getCanvas()._canvas) : T.content.appendChild(this.getNativeCanvasElement()), !0);
    }
    moveDown() {
      if (O.Node.prototype.moveDown.call(this)) {
        const y = this.getStage();
        if (y) {
          const T = y.children;
          y.content && (y.content.removeChild(this.getNativeCanvasElement()), y.content.insertBefore(this.getNativeCanvasElement(), T[this.index + 1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    moveToBottom() {
      if (O.Node.prototype.moveToBottom.call(this)) {
        const y = this.getStage();
        if (y) {
          const T = y.children;
          y.content && (y.content.removeChild(this.getNativeCanvasElement()), y.content.insertBefore(this.getNativeCanvasElement(), T[1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    getLayer() {
      return this;
    }
    remove() {
      const y = this.getNativeCanvasElement();
      return O.Node.prototype.remove.call(this), y && y.parentNode && h.Util._isInDocument(y) && y.parentNode.removeChild(y), this;
    }
    getStage() {
      return this.parent;
    }
    setSize({ width: y, height: T }) {
      return this.canvas.setSize(y, T), this.hitCanvas.setSize(y, T), this._setSmoothEnabled(), this;
    }
    _validateAdd(y) {
      const T = y.getType();
      T !== "Group" && T !== "Shape" && h.Util.throw("You may only add groups and shapes to a layer.");
    }
    _toKonvaCanvas(y) {
      return y = y || {}, y.width = y.width || this.getWidth(), y.height = y.height || this.getHeight(), y.x = y.x !== void 0 ? y.x : this.x(), y.y = y.y !== void 0 ? y.y : this.y(), O.Node.prototype._toKonvaCanvas.call(this, y);
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
    getIntersection(y) {
      if (!this.isListening() || !this.isVisible())
        return null;
      let T = 1, E = !1;
      for (; ; ) {
        for (let i = 0; i < P; i++) {
          const a = w[i], S = this._getIntersection({
            x: y.x + a.x * T,
            y: y.y + a.y * T
          }), A = S.shape;
          if (A)
            return A;
          if (E = !!S.antialiased, !S.antialiased)
            break;
        }
        if (E)
          T += 1;
        else
          return null;
      }
    }
    _getIntersection(y) {
      const T = this.hitCanvas.pixelRatio, E = this.hitCanvas.context.getImageData(Math.round(y.x * T), Math.round(y.y * T), 1, 1).data, i = E[3];
      if (i === 255) {
        const a = h.Util._rgbToHex(E[0], E[1], E[2]), S = c.shapes[g + a];
        return S ? {
          shape: S
        } : {
          antialiased: !0
        };
      } else if (i > 0)
        return {
          antialiased: !0
        };
      return {};
    }
    drawScene(y, T) {
      const E = this.getLayer(), i = y || E && E.getCanvas();
      return this._fire(_, {
        node: this
      }), this.clearBeforeDraw() && i.getContext().clear(), k.Container.prototype.drawScene.call(this, i, T), this._fire(v, {
        node: this
      }), this;
    }
    drawHit(y, T) {
      const E = this.getLayer(), i = y || E && E.hitCanvas;
      return E && E.clearBeforeDraw() && E.getHitCanvas().getContext().clear(), k.Container.prototype.drawHit.call(this, i, T), this;
    }
    enableHitGraph() {
      return this.hitGraphEnabled(!0), this;
    }
    disableHitGraph() {
      return this.hitGraphEnabled(!1), this;
    }
    setHitGraphEnabled(y) {
      h.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(y);
    }
    getHitGraphEnabled(y) {
      return h.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
    }
    toggleHitCanvas() {
      if (!this.parent || !this.parent.content)
        return;
      const y = this.parent;
      !!this.hitCanvas._canvas.parentNode ? y.content.removeChild(this.hitCanvas._canvas) : y.content.appendChild(this.hitCanvas._canvas);
    }
    destroy() {
      return h.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
    }
  };
  return ee.Layer = u, u.prototype.nodeType = "Layer", (0, o._registerNode)(u), R.Factory.addGetterSetter(u, "imageSmoothingEnabled", !0), R.Factory.addGetterSetter(u, "clearBeforeDraw", !0), R.Factory.addGetterSetter(u, "hitGraphEnabled", !0, (0, b.getBooleanValidator)()), ee;
}
var ie = {}, Mi;
function jn() {
  if (Mi) return ie;
  Mi = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.FastLayer = void 0;
  const h = at(), k = On(), O = J();
  let R = class extends k.Layer {
    constructor(b) {
      super(b), this.listening(!1), h.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
  };
  return ie.FastLayer = R, R.prototype.nodeType = "FastLayer", (0, O._registerNode)(R), ie;
}
var ne = {}, Ni;
function fi() {
  if (Ni) return ne;
  Ni = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.Group = void 0;
  const h = at(), k = We(), O = J();
  let R = class extends k.Container {
    _validateAdd(b) {
      const c = b.getType();
      c !== "Group" && c !== "Shape" && h.Util.throw("You may only add groups and shapes to groups.");
    }
  };
  return ne.Group = R, R.prototype.nodeType = "Group", (0, O._registerNode)(R), ne;
}
var re = {}, Oi;
function gi() {
  if (Oi) return re;
  Oi = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.Animation = void 0;
  const h = J(), k = at(), O = function() {
    return h.glob.performance && h.glob.performance.now ? function() {
      return h.glob.performance.now();
    } : function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  }();
  let R = class $t {
    constructor(b, c) {
      this.id = $t.animIdCounter++, this.frame = {
        time: 0,
        timeDiff: 0,
        lastTime: O(),
        frameRate: 0
      }, this.func = b, this.setLayers(c);
    }
    setLayers(b) {
      let c = [];
      return b && (c = Array.isArray(b) ? b : [b]), this.layers = c, this;
    }
    getLayers() {
      return this.layers;
    }
    addLayer(b) {
      const c = this.layers, o = c.length;
      for (let g = 0; g < o; g++)
        if (c[g]._id === b._id)
          return !1;
      return this.layers.push(b), !0;
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
    _updateFrameObject(b) {
      this.frame.timeDiff = b - this.frame.lastTime, this.frame.lastTime = b, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
    }
    static _addAnimation(b) {
      this.animations.push(b), this._handleAnimation();
    }
    static _removeAnimation(b) {
      const c = b.id, o = this.animations, g = o.length;
      for (let _ = 0; _ < g; _++)
        if (o[_].id === c) {
          this.animations.splice(_, 1);
          break;
        }
    }
    static _runFrames() {
      const b = {}, c = this.animations;
      for (let o = 0; o < c.length; o++) {
        const g = c[o], _ = g.layers, v = g.func;
        g._updateFrameObject(O());
        const w = _.length;
        let P;
        if (v ? P = v.call(g, g.frame) !== !1 : P = !0, !!P)
          for (let u = 0; u < w; u++) {
            const l = _[u];
            l._id !== void 0 && (b[l._id] = l);
          }
      }
      for (const o in b)
        b.hasOwnProperty(o) && b[o].batchDraw();
    }
    static _animationLoop() {
      const b = $t;
      b.animations.length ? (b._runFrames(), k.Util.requestAnimFrame(b._animationLoop)) : b.animRunning = !1;
    }
    static _handleAnimation() {
      this.animRunning || (this.animRunning = !0, k.Util.requestAnimFrame(this._animationLoop));
    }
  };
  return re.Animation = R, R.animations = [], R.animIdCounter = 0, R.animRunning = !1, re;
}
var ei = {}, Gi;
function Qn() {
  return Gi || (Gi = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Easings = h.Tween = void 0;
    const k = at(), O = gi(), R = ot(), m = J(), b = {
      node: 1,
      duration: 1,
      easing: 1,
      onFinish: 1,
      yoyo: 1
    }, c = 1, o = 2, g = 3, _ = ["fill", "stroke", "shadowColor"];
    let v = 0;
    class w {
      constructor(l, y, T, E, i, a, S) {
        this.prop = l, this.propFunc = y, this.begin = E, this._pos = E, this.duration = a, this._change = 0, this.prevPos = 0, this.yoyo = S, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = T, this._change = i - this.begin, this.pause();
      }
      fire(l) {
        const y = this[l];
        y && y();
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
        const y = this, T = l.node, E = T._id, i = l.easing || h.Easings.Linear, a = !!l.yoyo;
        let S, A;
        typeof l.duration > "u" ? S = 0.3 : l.duration === 0 ? S = 1e-3 : S = l.duration, this.node = T, this._id = v++;
        const M = T.getLayer() || (T instanceof m.Konva.Stage ? T.getLayers() : null);
        M || k.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new O.Animation(function() {
          y.tween.onEnterFrame();
        }, M), this.tween = new w(A, function(G) {
          y._tweenFunc(G);
        }, i, 0, 1, S * 1e3, a), this._addListeners(), P.attrs[E] || (P.attrs[E] = {}), P.attrs[E][this._id] || (P.attrs[E][this._id] = {}), P.tweens[E] || (P.tweens[E] = {});
        for (A in l)
          b[A] === void 0 && this._addAttr(A, l[A]);
        this.reset(), this.onFinish = l.onFinish, this.onReset = l.onReset, this.onUpdate = l.onUpdate;
      }
      _addAttr(l, y) {
        const T = this.node, E = T._id;
        let i, a, S, A, M;
        const G = P.tweens[E][l];
        G && delete P.attrs[E][G][l];
        let r = T.getAttr(l);
        if (k.Util._isArray(y))
          if (i = [], a = Math.max(y.length, r.length), l === "points" && y.length !== r.length && (y.length > r.length ? (A = r, r = k.Util._prepareArrayForTween(r, y, T.closed())) : (S = y, y = k.Util._prepareArrayForTween(y, r, T.closed()))), l.indexOf("fill") === 0)
            for (let d = 0; d < a; d++)
              if (d % 2 === 0)
                i.push(y[d] - r[d]);
              else {
                const n = k.Util.colorToRGBA(r[d]);
                M = k.Util.colorToRGBA(y[d]), r[d] = n, i.push({
                  r: M.r - n.r,
                  g: M.g - n.g,
                  b: M.b - n.b,
                  a: M.a - n.a
                });
              }
          else
            for (let d = 0; d < a; d++)
              i.push(y[d] - r[d]);
        else _.indexOf(l) !== -1 ? (r = k.Util.colorToRGBA(r), M = k.Util.colorToRGBA(y), i = {
          r: M.r - r.r,
          g: M.g - r.g,
          b: M.b - r.b,
          a: M.a - r.a
        }) : i = y - r;
        P.attrs[E][this._id][l] = {
          start: r,
          diff: i,
          end: y,
          trueEnd: S,
          trueStart: A
        }, P.tweens[E][l] = this._id;
      }
      _tweenFunc(l) {
        const y = this.node, T = P.attrs[y._id][this._id];
        let E, i, a, S, A, M, G, r;
        for (E in T) {
          if (i = T[E], a = i.start, S = i.diff, r = i.end, k.Util._isArray(a))
            if (A = [], G = Math.max(a.length, r.length), E.indexOf("fill") === 0)
              for (M = 0; M < G; M++)
                M % 2 === 0 ? A.push((a[M] || 0) + S[M] * l) : A.push("rgba(" + Math.round(a[M].r + S[M].r * l) + "," + Math.round(a[M].g + S[M].g * l) + "," + Math.round(a[M].b + S[M].b * l) + "," + (a[M].a + S[M].a * l) + ")");
            else
              for (M = 0; M < G; M++)
                A.push((a[M] || 0) + S[M] * l);
          else _.indexOf(E) !== -1 ? A = "rgba(" + Math.round(a.r + S.r * l) + "," + Math.round(a.g + S.g * l) + "," + Math.round(a.b + S.b * l) + "," + (a.a + S.a * l) + ")" : A = a + S * l;
          y.setAttr(E, A);
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
          const l = this.node, y = P.attrs[l._id][this._id];
          y.points && y.points.trueEnd && l.setAttr("points", y.points.trueEnd), this.onFinish && this.onFinish.call(this);
        }, this.tween.onReset = () => {
          const l = this.node, y = P.attrs[l._id][this._id];
          y.points && y.points.trueStart && l.points(y.points.trueStart), this.onReset && this.onReset();
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
        const l = this.node._id, y = this._id, T = P.tweens[l];
        this.pause();
        for (const E in T)
          delete P.tweens[l][E];
        delete P.attrs[l][y];
      }
    }
    h.Tween = P, P.attrs = {}, P.tweens = {}, R.Node.prototype.to = function(u) {
      const l = u.onFinish;
      u.node = this, u.onFinish = function() {
        this.destroy(), l && l();
      }, new P(u).play();
    }, h.Easings = {
      BackEaseIn(u, l, y, T) {
        return y * (u /= T) * u * ((1.70158 + 1) * u - 1.70158) + l;
      },
      BackEaseOut(u, l, y, T) {
        return y * ((u = u / T - 1) * u * ((1.70158 + 1) * u + 1.70158) + 1) + l;
      },
      BackEaseInOut(u, l, y, T) {
        let E = 1.70158;
        return (u /= T / 2) < 1 ? y / 2 * (u * u * (((E *= 1.525) + 1) * u - E)) + l : y / 2 * ((u -= 2) * u * (((E *= 1.525) + 1) * u + E) + 2) + l;
      },
      ElasticEaseIn(u, l, y, T, E, i) {
        let a = 0;
        return u === 0 ? l : (u /= T) === 1 ? l + y : (i || (i = T * 0.3), !E || E < Math.abs(y) ? (E = y, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(y / E), -(E * Math.pow(2, 10 * (u -= 1)) * Math.sin((u * T - a) * (2 * Math.PI) / i)) + l);
      },
      ElasticEaseOut(u, l, y, T, E, i) {
        let a = 0;
        return u === 0 ? l : (u /= T) === 1 ? l + y : (i || (i = T * 0.3), !E || E < Math.abs(y) ? (E = y, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(y / E), E * Math.pow(2, -10 * u) * Math.sin((u * T - a) * (2 * Math.PI) / i) + y + l);
      },
      ElasticEaseInOut(u, l, y, T, E, i) {
        let a = 0;
        return u === 0 ? l : (u /= T / 2) === 2 ? l + y : (i || (i = T * (0.3 * 1.5)), !E || E < Math.abs(y) ? (E = y, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(y / E), u < 1 ? -0.5 * (E * Math.pow(2, 10 * (u -= 1)) * Math.sin((u * T - a) * (2 * Math.PI) / i)) + l : E * Math.pow(2, -10 * (u -= 1)) * Math.sin((u * T - a) * (2 * Math.PI) / i) * 0.5 + y + l);
      },
      BounceEaseOut(u, l, y, T) {
        return (u /= T) < 1 / 2.75 ? y * (7.5625 * u * u) + l : u < 2 / 2.75 ? y * (7.5625 * (u -= 1.5 / 2.75) * u + 0.75) + l : u < 2.5 / 2.75 ? y * (7.5625 * (u -= 2.25 / 2.75) * u + 0.9375) + l : y * (7.5625 * (u -= 2.625 / 2.75) * u + 0.984375) + l;
      },
      BounceEaseIn(u, l, y, T) {
        return y - h.Easings.BounceEaseOut(T - u, 0, y, T) + l;
      },
      BounceEaseInOut(u, l, y, T) {
        return u < T / 2 ? h.Easings.BounceEaseIn(u * 2, 0, y, T) * 0.5 + l : h.Easings.BounceEaseOut(u * 2 - T, 0, y, T) * 0.5 + y * 0.5 + l;
      },
      EaseIn(u, l, y, T) {
        return y * (u /= T) * u + l;
      },
      EaseOut(u, l, y, T) {
        return -y * (u /= T) * (u - 2) + l;
      },
      EaseInOut(u, l, y, T) {
        return (u /= T / 2) < 1 ? y / 2 * u * u + l : -y / 2 * (--u * (u - 2) - 1) + l;
      },
      StrongEaseIn(u, l, y, T) {
        return y * (u /= T) * u * u * u * u + l;
      },
      StrongEaseOut(u, l, y, T) {
        return y * ((u = u / T - 1) * u * u * u * u + 1) + l;
      },
      StrongEaseInOut(u, l, y, T) {
        return (u /= T / 2) < 1 ? y / 2 * u * u * u * u * u + l : y / 2 * ((u -= 2) * u * u * u * u + 2) + l;
      },
      Linear(u, l, y, T) {
        return y * u / T + l;
      }
    };
  }(ei)), ei;
}
var Li;
function Zn() {
  return Li || (Li = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Konva = void 0;
    const k = J(), O = at(), R = ot(), m = We(), b = $n(), c = On(), o = jn(), g = fi(), _ = ui(), v = dt(), w = gi(), P = Qn(), u = Mn(), l = qe();
    h.Konva = O.Util._assign(k.Konva, {
      Util: O.Util,
      Transform: O.Transform,
      Node: R.Node,
      Container: m.Container,
      Stage: b.Stage,
      stages: b.stages,
      Layer: c.Layer,
      FastLayer: o.FastLayer,
      Group: g.Group,
      DD: _.DD,
      Shape: v.Shape,
      shapes: v.shapes,
      Animation: w.Animation,
      Tween: P.Tween,
      Easings: P.Easings,
      Context: u.Context,
      Canvas: l.Canvas
    }), h.default = h.Konva;
  }(Ke)), Ke;
}
var se = {}, Di;
function Jn() {
  if (Di) return se;
  Di = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.Arc = void 0;
  const h = tt(), k = dt(), O = J(), R = et(), m = J();
  let b = class extends k.Shape {
    _sceneFunc(o) {
      const g = O.Konva.getAngle(this.angle()), _ = this.clockwise();
      o.beginPath(), o.arc(0, 0, this.outerRadius(), 0, g, _), o.arc(0, 0, this.innerRadius(), g, 0, !_), o.closePath(), o.fillStrokeShape(this);
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
      const o = this.innerRadius(), g = this.outerRadius(), _ = this.clockwise(), v = O.Konva.getAngle(_ ? 360 - this.angle() : this.angle()), w = Math.cos(Math.min(v, Math.PI)), P = 1, u = Math.sin(Math.min(Math.max(Math.PI, v), 3 * Math.PI / 2)), l = Math.sin(Math.min(v, Math.PI / 2)), y = w * (w > 0 ? o : g), T = P * g, E = u * (u > 0 ? o : g), i = l * (l > 0 ? g : o);
      return {
        x: y,
        y: _ ? -1 * i : E,
        width: T - y,
        height: i - E
      };
    }
  };
  return se.Arc = b, b.prototype._centroid = !0, b.prototype.className = "Arc", b.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, m._registerNode)(b), h.Factory.addGetterSetter(b, "innerRadius", 0, (0, R.getNumberValidator)()), h.Factory.addGetterSetter(b, "outerRadius", 0, (0, R.getNumberValidator)()), h.Factory.addGetterSetter(b, "angle", 0, (0, R.getNumberValidator)()), h.Factory.addGetterSetter(b, "clockwise", !1, (0, R.getBooleanValidator)()), se;
}
var ae = {}, oe = {}, Ii;
function Gn() {
  if (Ii) return oe;
  Ii = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.Line = void 0;
  const h = tt(), k = J(), O = dt(), R = et();
  function m(o, g, _, v, w, P, u) {
    const l = Math.sqrt(Math.pow(_ - o, 2) + Math.pow(v - g, 2)), y = Math.sqrt(Math.pow(w - _, 2) + Math.pow(P - v, 2)), T = u * l / (l + y), E = u * y / (l + y), i = _ - T * (w - o), a = v - T * (P - g), S = _ + E * (w - o), A = v + E * (P - g);
    return [i, a, S, A];
  }
  function b(o, g) {
    const _ = o.length, v = [];
    for (let w = 2; w < _ - 2; w += 2) {
      const P = m(o[w - 2], o[w - 1], o[w], o[w + 1], o[w + 2], o[w + 3], g);
      isNaN(P[0]) || (v.push(P[0]), v.push(P[1]), v.push(o[w]), v.push(o[w + 1]), v.push(P[2]), v.push(P[3]));
    }
    return v;
  }
  let c = class extends O.Shape {
    constructor(g) {
      super(g), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
        this._clearCache("tensionPoints");
      });
    }
    _sceneFunc(g) {
      let _ = this.points(), v = _.length, w = this.tension(), P = this.closed(), u = this.bezier(), l, y, T;
      if (v) {
        if (g.beginPath(), g.moveTo(_[0], _[1]), w !== 0 && v > 4) {
          for (l = this.getTensionPoints(), y = l.length, T = P ? 0 : 4, P || g.quadraticCurveTo(l[0], l[1], l[2], l[3]); T < y - 2; )
            g.bezierCurveTo(l[T++], l[T++], l[T++], l[T++], l[T++], l[T++]);
          P || g.quadraticCurveTo(l[y - 2], l[y - 1], _[v - 2], _[v - 1]);
        } else if (u)
          for (T = 2; T < v; )
            g.bezierCurveTo(_[T++], _[T++], _[T++], _[T++], _[T++], _[T++]);
        else
          for (T = 2; T < v; T += 2)
            g.lineTo(_[T], _[T + 1]);
        P ? (g.closePath(), g.fillStrokeShape(this)) : g.strokeShape(this);
      }
    }
    getTensionPoints() {
      return this._getCache("tensionPoints", this._getTensionPoints);
    }
    _getTensionPoints() {
      return this.closed() ? this._getTensionPointsClosed() : b(this.points(), this.tension());
    }
    _getTensionPointsClosed() {
      const g = this.points(), _ = g.length, v = this.tension(), w = m(g[_ - 2], g[_ - 1], g[0], g[1], g[2], g[3], v), P = m(g[_ - 4], g[_ - 3], g[_ - 2], g[_ - 1], g[0], g[1], v), u = b(g, v);
      return [w[2], w[3]].concat(u).concat([
        P[0],
        P[1],
        g[_ - 2],
        g[_ - 1],
        P[2],
        P[3],
        w[0],
        w[1],
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
      let _ = g[0], v = g[0], w = g[1], P = g[1], u, l;
      for (let y = 0; y < g.length / 2; y++)
        u = g[y * 2], l = g[y * 2 + 1], _ = Math.min(_, u), v = Math.max(v, u), w = Math.min(w, l), P = Math.max(P, l);
      return {
        x: _,
        y: w,
        width: v - _,
        height: P - w
      };
    }
  };
  return oe.Line = c, c.prototype.className = "Line", c.prototype._attrsAffectingSize = ["points", "bezier", "tension"], (0, k._registerNode)(c), h.Factory.addGetterSetter(c, "closed", !1), h.Factory.addGetterSetter(c, "bezier", !1), h.Factory.addGetterSetter(c, "tension", 0, (0, R.getNumberValidator)()), h.Factory.addGetterSetter(c, "points", [], (0, R.getNumberArrayValidator)()), oe;
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
    const k = (c, o, g) => {
      let _, v;
      const P = g / 2;
      _ = 0;
      for (let u = 0; u < 20; u++)
        v = P * h.tValues[20][u] + P, _ += h.cValues[20][u] * R(c, o, v);
      return P * _;
    };
    h.getCubicArcLength = k;
    const O = (c, o, g) => {
      g === void 0 && (g = 1);
      const _ = c[0] - 2 * c[1] + c[2], v = o[0] - 2 * o[1] + o[2], w = 2 * c[1] - 2 * c[0], P = 2 * o[1] - 2 * o[0], u = 4 * (_ * _ + v * v), l = 4 * (_ * w + v * P), y = w * w + P * P;
      if (u === 0)
        return g * Math.sqrt(Math.pow(c[2] - c[0], 2) + Math.pow(o[2] - o[0], 2));
      const T = l / (2 * u), E = y / u, i = g + T, a = E - T * T, S = i * i + a > 0 ? Math.sqrt(i * i + a) : 0, A = T * T + a > 0 ? Math.sqrt(T * T + a) : 0, M = T + Math.sqrt(T * T + a) !== 0 ? a * Math.log(Math.abs((i + S) / (T + A))) : 0;
      return Math.sqrt(u) / 2 * (i * S - T * A + M);
    };
    h.getQuadraticArcLength = O;
    function R(c, o, g) {
      const _ = m(1, g, c), v = m(1, g, o), w = _ * _ + v * v;
      return Math.sqrt(w);
    }
    const m = (c, o, g) => {
      const _ = g.length - 1;
      let v, w;
      if (_ === 0)
        return 0;
      if (c === 0) {
        w = 0;
        for (let P = 0; P <= _; P++)
          w += h.binomialCoefficients[_][P] * Math.pow(1 - o, _ - P) * Math.pow(o, P) * g[P];
        return w;
      } else {
        v = new Array(_);
        for (let P = 0; P < _; P++)
          v[P] = _ * (g[P + 1] - g[P]);
        return m(c - 1, o, v);
      }
    }, b = (c, o, g) => {
      let _ = 1, v = c / o, w = (c - g(v)) / o, P = 0;
      for (; _ > 1e-3; ) {
        const u = g(v + w), l = Math.abs(c - u) / o;
        if (l < _)
          _ = l, v += w;
        else {
          const y = g(v - w), T = Math.abs(c - y) / o;
          T < _ ? (_ = T, v -= w) : w /= 2;
        }
        if (P++, P > 500)
          break;
      }
      return v;
    };
    h.t2length = b;
  }(ii)), ii;
}
var Ui;
function pi() {
  if (Ui) return le;
  Ui = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.Path = void 0;
  const h = tt(), k = dt(), O = J(), R = tr();
  let m = class _t extends k.Shape {
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
      for (let S = 0; S < o.length; S++) {
        const A = o[S].command, M = o[S].points;
        switch (A) {
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
            var _ = M[0], v = M[1], w = M[2], P = M[3], u = M[4], l = M[5], y = M[6], T = M[7], E = w > P ? w : P, i = w > P ? 1 : w / P, a = w > P ? P / w : 1;
            c.translate(_, v), c.rotate(y), c.scale(i, a), c.arc(0, 0, E, u, u + l, 1 - T), c.scale(1 / i, 1 / a), c.rotate(-y), c.translate(-_, -v);
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
          const l = u.points[4], y = u.points[5], T = u.points[4] + y;
          let E = Math.PI / 180;
          if (Math.abs(l - T) < E && (E = Math.abs(l - T)), y < 0)
            for (let i = l - E; i > T; i -= E) {
              const a = _t.getPointOnEllipticalArc(u.points[0], u.points[1], u.points[2], u.points[3], i, 0);
              c.push(a.x, a.y);
            }
          else
            for (let i = l + E; i < T; i += E) {
              const a = _t.getPointOnEllipticalArc(u.points[0], u.points[1], u.points[2], u.points[3], i, 0);
              c.push(a.x, a.y);
            }
        } else if (u.command === "C")
          for (let l = 0; l <= 1; l += 0.01) {
            const y = _t.getPointOnCubicBezier(l, u.start.x, u.start.y, u.points[0], u.points[1], u.points[2], u.points[3], u.points[4], u.points[5]);
            c.push(y.x, y.y);
          }
        else
          c = c.concat(u.points);
      });
      let o = c[0], g = c[0], _ = c[1], v = c[1], w, P;
      for (let u = 0; u < c.length / 2; u++)
        w = c[u * 2], P = c[u * 2 + 1], isNaN(w) || (o = Math.min(o, w), g = Math.max(g, w)), isNaN(P) || (_ = Math.min(_, P), v = Math.max(v, P));
      return {
        x: o,
        y: _,
        width: g - o,
        height: v - _
      };
    }
    getLength() {
      return this.pathLength;
    }
    getPointAtLength(c) {
      return _t.getPointAtLengthOfDataArray(c, this.dataArray);
    }
    static getLineLength(c, o, g, _) {
      return Math.sqrt((g - c) * (g - c) + (_ - o) * (_ - o));
    }
    static getPathLength(c) {
      let o = 0;
      for (let g = 0; g < c.length; ++g)
        o += c[g].pathLength;
      return o;
    }
    static getPointAtLengthOfDataArray(c, o) {
      let g, _ = 0, v = o.length;
      if (!v)
        return null;
      for (; _ < v && c > o[_].pathLength; )
        c -= o[_].pathLength, ++_;
      if (_ === v)
        return g = o[_ - 1].points.slice(-2), {
          x: g[0],
          y: g[1]
        };
      if (c < 0.01)
        return g = o[_].points.slice(0, 2), {
          x: g[0],
          y: g[1]
        };
      const w = o[_], P = w.points;
      switch (w.command) {
        case "L":
          return _t.getPointOnLine(c, w.start.x, w.start.y, P[0], P[1]);
        case "C":
          return _t.getPointOnCubicBezier((0, R.t2length)(c, _t.getPathLength(o), (S) => (0, R.getCubicArcLength)([w.start.x, P[0], P[2], P[4]], [w.start.y, P[1], P[3], P[5]], S)), w.start.x, w.start.y, P[0], P[1], P[2], P[3], P[4], P[5]);
        case "Q":
          return _t.getPointOnQuadraticBezier((0, R.t2length)(c, _t.getPathLength(o), (S) => (0, R.getQuadraticArcLength)([w.start.x, P[0], P[2]], [w.start.y, P[1], P[3]], S)), w.start.x, w.start.y, P[0], P[1], P[2], P[3]);
        case "A":
          var u = P[0], l = P[1], y = P[2], T = P[3], E = P[4], i = P[5], a = P[6];
          return E += i * c / w.pathLength, _t.getPointOnEllipticalArc(u, l, y, T, E, a);
      }
      return null;
    }
    static getPointOnLine(c, o, g, _, v, w, P) {
      w = w ?? o, P = P ?? g;
      const u = this.getLineLength(o, g, _, v);
      if (u < 1e-10)
        return { x: o, y: g };
      if (_ === o)
        return { x: w, y: P + (v > g ? c : -c) };
      const l = (v - g) / (_ - o), y = Math.sqrt(c * c / (1 + l * l)) * (_ < o ? -1 : 1), T = l * y;
      if (Math.abs(P - g - l * (w - o)) < 1e-10)
        return { x: w + y, y: P + T };
      const E = ((w - o) * (_ - o) + (P - g) * (v - g)) / (u * u), i = o + E * (_ - o), a = g + E * (v - g), S = this.getLineLength(w, P, i, a), A = Math.sqrt(c * c - S * S), M = Math.sqrt(A * A / (1 + l * l)) * (_ < o ? -1 : 1), G = l * M;
      return { x: i + M, y: a + G };
    }
    static getPointOnCubicBezier(c, o, g, _, v, w, P, u, l) {
      function y(A) {
        return A * A * A;
      }
      function T(A) {
        return 3 * A * A * (1 - A);
      }
      function E(A) {
        return 3 * A * (1 - A) * (1 - A);
      }
      function i(A) {
        return (1 - A) * (1 - A) * (1 - A);
      }
      const a = u * y(c) + w * T(c) + _ * E(c) + o * i(c), S = l * y(c) + P * T(c) + v * E(c) + g * i(c);
      return {
        x: a,
        y: S
      };
    }
    static getPointOnQuadraticBezier(c, o, g, _, v, w, P) {
      function u(i) {
        return i * i;
      }
      function l(i) {
        return 2 * i * (1 - i);
      }
      function y(i) {
        return (1 - i) * (1 - i);
      }
      const T = w * u(c) + _ * l(c) + o * y(c), E = P * u(c) + v * l(c) + g * y(c);
      return {
        x: T,
        y: E
      };
    }
    static getPointOnEllipticalArc(c, o, g, _, v, w) {
      const P = Math.cos(w), u = Math.sin(w), l = {
        x: g * Math.cos(v),
        y: _ * Math.sin(v)
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
      for (var _ = 0; _ < g.length; _++)
        o = o.replace(new RegExp(g[_], "g"), "|" + g[_]);
      const v = o.split("|"), w = [], P = [];
      let u = 0, l = 0;
      const y = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
      let T;
      for (_ = 1; _ < v.length; _++) {
        let t = v[_], s = t.charAt(0);
        for (t = t.slice(1), P.length = 0; T = y.exec(t); )
          P.push(T[0]);
        const e = [];
        for (let p = 0, C = P.length; p < C; p++) {
          if (P[p] === "00") {
            e.push(0, 0);
            continue;
          }
          const F = parseFloat(P[p]);
          isNaN(F) ? e.push(0) : e.push(F);
        }
        for (; e.length > 0 && !isNaN(e[0]); ) {
          let p = "", C = [];
          const F = u, N = l;
          var E, i, a, S, A, M, G, r, d, n;
          switch (s) {
            case "l":
              u += e.shift(), l += e.shift(), p = "L", C.push(u, l);
              break;
            case "L":
              u = e.shift(), l = e.shift(), C.push(u, l);
              break;
            case "m":
              var f = e.shift(), x = e.shift();
              if (u += f, l += x, p = "M", w.length > 2 && w[w.length - 1].command === "z") {
                for (let D = w.length - 2; D >= 0; D--)
                  if (w[D].command === "M") {
                    u = w[D].points[0] + f, l = w[D].points[1] + x;
                    break;
                  }
              }
              C.push(u, l), s = "l";
              break;
            case "M":
              u = e.shift(), l = e.shift(), p = "M", C.push(u, l), s = "L";
              break;
            case "h":
              u += e.shift(), p = "L", C.push(u, l);
              break;
            case "H":
              u = e.shift(), p = "L", C.push(u, l);
              break;
            case "v":
              l += e.shift(), p = "L", C.push(u, l);
              break;
            case "V":
              l = e.shift(), p = "L", C.push(u, l);
              break;
            case "C":
              C.push(e.shift(), e.shift(), e.shift(), e.shift()), u = e.shift(), l = e.shift(), C.push(u, l);
              break;
            case "c":
              C.push(u + e.shift(), l + e.shift(), u + e.shift(), l + e.shift()), u += e.shift(), l += e.shift(), p = "C", C.push(u, l);
              break;
            case "S":
              i = u, a = l, E = w[w.length - 1], E.command === "C" && (i = u + (u - E.points[2]), a = l + (l - E.points[3])), C.push(i, a, e.shift(), e.shift()), u = e.shift(), l = e.shift(), p = "C", C.push(u, l);
              break;
            case "s":
              i = u, a = l, E = w[w.length - 1], E.command === "C" && (i = u + (u - E.points[2]), a = l + (l - E.points[3])), C.push(i, a, u + e.shift(), l + e.shift()), u += e.shift(), l += e.shift(), p = "C", C.push(u, l);
              break;
            case "Q":
              C.push(e.shift(), e.shift()), u = e.shift(), l = e.shift(), C.push(u, l);
              break;
            case "q":
              C.push(u + e.shift(), l + e.shift()), u += e.shift(), l += e.shift(), p = "Q", C.push(u, l);
              break;
            case "T":
              i = u, a = l, E = w[w.length - 1], E.command === "Q" && (i = u + (u - E.points[0]), a = l + (l - E.points[1])), u = e.shift(), l = e.shift(), p = "Q", C.push(i, a, u, l);
              break;
            case "t":
              i = u, a = l, E = w[w.length - 1], E.command === "Q" && (i = u + (u - E.points[0]), a = l + (l - E.points[1])), u += e.shift(), l += e.shift(), p = "Q", C.push(i, a, u, l);
              break;
            case "A":
              S = e.shift(), A = e.shift(), M = e.shift(), G = e.shift(), r = e.shift(), d = u, n = l, u = e.shift(), l = e.shift(), p = "A", C = this.convertEndpointToCenterParameterization(d, n, u, l, G, r, S, A, M);
              break;
            case "a":
              S = e.shift(), A = e.shift(), M = e.shift(), G = e.shift(), r = e.shift(), d = u, n = l, u += e.shift(), l += e.shift(), p = "A", C = this.convertEndpointToCenterParameterization(d, n, u, l, G, r, S, A, M);
              break;
          }
          w.push({
            command: p || s,
            points: C,
            start: {
              x: F,
              y: N
            },
            pathLength: this.calcLength(F, N, p || s, C)
          });
        }
        (s === "z" || s === "Z") && w.push({
          command: "z",
          points: [],
          start: void 0,
          pathLength: 0
        });
      }
      return w;
    }
    static calcLength(c, o, g, _) {
      let v, w, P, u;
      const l = _t;
      switch (g) {
        case "L":
          return l.getLineLength(c, o, _[0], _[1]);
        case "C":
          return (0, R.getCubicArcLength)([c, _[0], _[2], _[4]], [o, _[1], _[3], _[5]], 1);
        case "Q":
          return (0, R.getQuadraticArcLength)([c, _[0], _[2]], [o, _[1], _[3]], 1);
        case "A":
          v = 0;
          var y = _[4], T = _[5], E = _[4] + T, i = Math.PI / 180;
          if (Math.abs(y - E) < i && (i = Math.abs(y - E)), w = l.getPointOnEllipticalArc(_[0], _[1], _[2], _[3], y, 0), T < 0)
            for (u = y - i; u > E; u -= i)
              P = l.getPointOnEllipticalArc(_[0], _[1], _[2], _[3], u, 0), v += l.getLineLength(w.x, w.y, P.x, P.y), w = P;
          else
            for (u = y + i; u < E; u += i)
              P = l.getPointOnEllipticalArc(_[0], _[1], _[2], _[3], u, 0), v += l.getLineLength(w.x, w.y, P.x, P.y), w = P;
          return P = l.getPointOnEllipticalArc(_[0], _[1], _[2], _[3], E, 0), v += l.getLineLength(w.x, w.y, P.x, P.y), v;
      }
      return 0;
    }
    static convertEndpointToCenterParameterization(c, o, g, _, v, w, P, u, l) {
      const y = l * (Math.PI / 180), T = Math.cos(y) * (c - g) / 2 + Math.sin(y) * (o - _) / 2, E = -1 * Math.sin(y) * (c - g) / 2 + Math.cos(y) * (o - _) / 2, i = T * T / (P * P) + E * E / (u * u);
      i > 1 && (P *= Math.sqrt(i), u *= Math.sqrt(i));
      let a = Math.sqrt((P * P * (u * u) - P * P * (E * E) - u * u * (T * T)) / (P * P * (E * E) + u * u * (T * T)));
      v === w && (a *= -1), isNaN(a) && (a = 0);
      const S = a * P * E / u, A = a * -u * T / P, M = (c + g) / 2 + Math.cos(y) * S - Math.sin(y) * A, G = (o + _) / 2 + Math.sin(y) * S + Math.cos(y) * A, r = function(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1]);
      }, d = function(e, p) {
        return (e[0] * p[0] + e[1] * p[1]) / (r(e) * r(p));
      }, n = function(e, p) {
        return (e[0] * p[1] < e[1] * p[0] ? -1 : 1) * Math.acos(d(e, p));
      }, f = n([1, 0], [(T - S) / P, (E - A) / u]), x = [(T - S) / P, (E - A) / u], t = [(-1 * T - S) / P, (-1 * E - A) / u];
      let s = n(x, t);
      return d(x, t) <= -1 && (s = Math.PI), d(x, t) >= 1 && (s = 0), w === 0 && s > 0 && (s = s - 2 * Math.PI), w === 1 && s < 0 && (s = s + 2 * Math.PI), [M, G, P, u, f, s, y, w];
    }
  };
  return le.Path = m, m.prototype.className = "Path", m.prototype._attrsAffectingSize = ["data"], (0, O._registerNode)(m), h.Factory.addGetterSetter(m, "data"), le;
}
var Vi;
function er() {
  if (Vi) return ae;
  Vi = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.Arrow = void 0;
  const h = tt(), k = Gn(), O = et(), R = J(), m = pi();
  let b = class extends k.Line {
    _sceneFunc(o) {
      super._sceneFunc(o);
      const g = Math.PI * 2, _ = this.points();
      let v = _;
      const w = this.tension() !== 0 && _.length > 4;
      w && (v = this.getTensionPoints());
      const P = this.pointerLength(), u = _.length;
      let l, y;
      if (w) {
        const i = [
          v[v.length - 4],
          v[v.length - 3],
          v[v.length - 2],
          v[v.length - 1],
          _[u - 2],
          _[u - 1]
        ], a = m.Path.calcLength(v[v.length - 4], v[v.length - 3], "C", i), S = m.Path.getPointOnQuadraticBezier(Math.min(1, 1 - P / a), i[0], i[1], i[2], i[3], i[4], i[5]);
        l = _[u - 2] - S.x, y = _[u - 1] - S.y;
      } else
        l = _[u - 2] - _[u - 4], y = _[u - 1] - _[u - 3];
      const T = (Math.atan2(y, l) + g) % g, E = this.pointerWidth();
      this.pointerAtEnding() && (o.save(), o.beginPath(), o.translate(_[u - 2], _[u - 1]), o.rotate(T), o.moveTo(0, 0), o.lineTo(-P, E / 2), o.lineTo(-P, -E / 2), o.closePath(), o.restore(), this.__fillStroke(o)), this.pointerAtBeginning() && (o.save(), o.beginPath(), o.translate(_[0], _[1]), w ? (l = (v[0] + v[2]) / 2 - _[0], y = (v[1] + v[3]) / 2 - _[1]) : (l = _[2] - _[0], y = _[3] - _[1]), o.rotate((Math.atan2(-y, -l) + g) % g), o.moveTo(0, 0), o.lineTo(-P, E / 2), o.lineTo(-P, -E / 2), o.closePath(), o.restore(), this.__fillStroke(o));
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
  return ae.Arrow = b, b.prototype.className = "Arrow", (0, R._registerNode)(b), h.Factory.addGetterSetter(b, "pointerLength", 10, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(b, "pointerWidth", 10, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(b, "pointerAtBeginning", !1), h.Factory.addGetterSetter(b, "pointerAtEnding", !0), ae;
}
var he = {}, Hi;
function ir() {
  if (Hi) return he;
  Hi = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.Circle = void 0;
  const h = tt(), k = dt(), O = et(), R = J();
  let m = class extends k.Shape {
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
  return he.Circle = m, m.prototype._centroid = !0, m.prototype.className = "Circle", m.prototype._attrsAffectingSize = ["radius"], (0, R._registerNode)(m), h.Factory.addGetterSetter(m, "radius", 0, (0, O.getNumberValidator)()), he;
}
var ce = {}, qi;
function nr() {
  if (qi) return ce;
  qi = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.Ellipse = void 0;
  const h = tt(), k = dt(), O = et(), R = J();
  let m = class extends k.Shape {
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
  return ce.Ellipse = m, m.prototype.className = "Ellipse", m.prototype._centroid = !0, m.prototype._attrsAffectingSize = ["radiusX", "radiusY"], (0, R._registerNode)(m), h.Factory.addComponentsGetterSetter(m, "radius", ["x", "y"]), h.Factory.addGetterSetter(m, "radiusX", 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(m, "radiusY", 0, (0, O.getNumberValidator)()), ce;
}
var de = {}, Wi;
function rr() {
  if (Wi) return de;
  Wi = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.Image = void 0;
  const h = at(), k = tt(), O = dt(), R = J(), m = et();
  let b = class Ln extends O.Shape {
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
      const g = this.getWidth(), _ = this.getHeight(), v = this.cornerRadius(), w = this.attrs.image;
      let P;
      if (w) {
        const u = this.attrs.cropWidth, l = this.attrs.cropHeight;
        u && l ? P = [
          w,
          this.cropX(),
          this.cropY(),
          u,
          l,
          0,
          0,
          g,
          _
        ] : P = [w, 0, 0, g, _];
      }
      (this.hasFill() || this.hasStroke() || v) && (o.beginPath(), v ? h.Util.drawRoundedRectPath(o, g, _, v) : o.rect(0, 0, g, _), o.closePath(), o.fillStrokeShape(this)), w && (v && o.clip(), o.drawImage.apply(o, P));
    }
    _hitFunc(o) {
      const g = this.width(), _ = this.height(), v = this.cornerRadius();
      o.beginPath(), v ? h.Util.drawRoundedRectPath(o, g, _, v) : o.rect(0, 0, g, _), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      var o, g;
      return (o = this.attrs.width) !== null && o !== void 0 ? o : (g = this.image()) === null || g === void 0 ? void 0 : g.width;
    }
    getHeight() {
      var o, g;
      return (o = this.attrs.height) !== null && o !== void 0 ? o : (g = this.image()) === null || g === void 0 ? void 0 : g.height;
    }
    static fromURL(o, g, _ = null) {
      const v = h.Util.createImageElement();
      v.onload = function() {
        const w = new Ln({
          image: v
        });
        g(w);
      }, v.onerror = _, v.crossOrigin = "Anonymous", v.src = o;
    }
  };
  return de.Image = b, b.prototype.className = "Image", (0, R._registerNode)(b), k.Factory.addGetterSetter(b, "cornerRadius", 0, (0, m.getNumberOrArrayOfNumbersValidator)(4)), k.Factory.addGetterSetter(b, "image"), k.Factory.addComponentsGetterSetter(b, "crop", ["x", "y", "width", "height"]), k.Factory.addGetterSetter(b, "cropX", 0, (0, m.getNumberValidator)()), k.Factory.addGetterSetter(b, "cropY", 0, (0, m.getNumberValidator)()), k.Factory.addGetterSetter(b, "cropWidth", 0, (0, m.getNumberValidator)()), k.Factory.addGetterSetter(b, "cropHeight", 0, (0, m.getNumberValidator)()), de;
}
var Wt = {}, zi;
function sr() {
  if (zi) return Wt;
  zi = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.Tag = Wt.Label = void 0;
  const h = tt(), k = dt(), O = fi(), R = et(), m = J(), b = [
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
  ], c = "Change.konva", o = "none", g = "up", _ = "right", v = "down", w = "left", P = b.length;
  let u = class extends O.Group {
    constructor(T) {
      super(T), this.on("add.konva", function(E) {
        this._addListeners(E.child), this._sync();
      });
    }
    getText() {
      return this.find("Text")[0];
    }
    getTag() {
      return this.find("Tag")[0];
    }
    _addListeners(T) {
      let E = this, i;
      const a = function() {
        E._sync();
      };
      for (i = 0; i < P; i++)
        T.on(b[i] + c, a);
    }
    getWidth() {
      return this.getText().width();
    }
    getHeight() {
      return this.getText().height();
    }
    _sync() {
      let T = this.getText(), E = this.getTag(), i, a, S, A, M, G, r;
      if (T && E) {
        switch (i = T.width(), a = T.height(), S = E.pointerDirection(), A = E.pointerWidth(), r = E.pointerHeight(), M = 0, G = 0, S) {
          case g:
            M = i / 2, G = -1 * r;
            break;
          case _:
            M = i + A, G = a / 2;
            break;
          case v:
            M = i / 2, G = a + r;
            break;
          case w:
            M = -1 * A, G = a / 2;
            break;
        }
        E.setAttrs({
          x: -1 * M,
          y: -1 * G,
          width: i,
          height: a
        }), T.setAttrs({
          x: -1 * M,
          y: -1 * G
        });
      }
    }
  };
  Wt.Label = u, u.prototype.className = "Label", (0, m._registerNode)(u);
  class l extends k.Shape {
    _sceneFunc(T) {
      const E = this.width(), i = this.height(), a = this.pointerDirection(), S = this.pointerWidth(), A = this.pointerHeight(), M = this.cornerRadius();
      let G = 0, r = 0, d = 0, n = 0;
      typeof M == "number" ? G = r = d = n = Math.min(M, E / 2, i / 2) : (G = Math.min(M[0] || 0, E / 2, i / 2), r = Math.min(M[1] || 0, E / 2, i / 2), n = Math.min(M[2] || 0, E / 2, i / 2), d = Math.min(M[3] || 0, E / 2, i / 2)), T.beginPath(), T.moveTo(G, 0), a === g && (T.lineTo((E - S) / 2, 0), T.lineTo(E / 2, -1 * A), T.lineTo((E + S) / 2, 0)), T.lineTo(E - r, 0), T.arc(E - r, r, r, Math.PI * 3 / 2, 0, !1), a === _ && (T.lineTo(E, (i - A) / 2), T.lineTo(E + S, i / 2), T.lineTo(E, (i + A) / 2)), T.lineTo(E, i - n), T.arc(E - n, i - n, n, 0, Math.PI / 2, !1), a === v && (T.lineTo((E + S) / 2, i), T.lineTo(E / 2, i + A), T.lineTo((E - S) / 2, i)), T.lineTo(d, i), T.arc(d, i - d, d, Math.PI / 2, Math.PI, !1), a === w && (T.lineTo(0, (i + A) / 2), T.lineTo(-1 * S, i / 2), T.lineTo(0, (i - A) / 2)), T.lineTo(0, G), T.arc(G, G, G, Math.PI, Math.PI * 3 / 2, !1), T.closePath(), T.fillStrokeShape(this);
    }
    getSelfRect() {
      let T = 0, E = 0, i = this.pointerWidth(), a = this.pointerHeight(), S = this.pointerDirection(), A = this.width(), M = this.height();
      return S === g ? (E -= a, M += a) : S === v ? M += a : S === w ? (T -= i * 1.5, A += i) : S === _ && (A += i * 1.5), {
        x: T,
        y: E,
        width: A,
        height: M
      };
    }
  }
  return Wt.Tag = l, l.prototype.className = "Tag", (0, m._registerNode)(l), h.Factory.addGetterSetter(l, "pointerDirection", o), h.Factory.addGetterSetter(l, "pointerWidth", 0, (0, R.getNumberValidator)()), h.Factory.addGetterSetter(l, "pointerHeight", 0, (0, R.getNumberValidator)()), h.Factory.addGetterSetter(l, "cornerRadius", 0, (0, R.getNumberOrArrayOfNumbersValidator)(4)), Wt;
}
var ue = {}, Xi;
function Dn() {
  if (Xi) return ue;
  Xi = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.Rect = void 0;
  const h = tt(), k = dt(), O = J(), R = at(), m = et();
  let b = class extends k.Shape {
    _sceneFunc(o) {
      const g = this.cornerRadius(), _ = this.width(), v = this.height();
      o.beginPath(), g ? R.Util.drawRoundedRectPath(o, _, v, g) : o.rect(0, 0, _, v), o.closePath(), o.fillStrokeShape(this);
    }
  };
  return ue.Rect = b, b.prototype.className = "Rect", (0, O._registerNode)(b), h.Factory.addGetterSetter(b, "cornerRadius", 0, (0, m.getNumberOrArrayOfNumbersValidator)(4)), ue;
}
var fe = {}, Yi;
function ar() {
  if (Yi) return fe;
  Yi = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.RegularPolygon = void 0;
  const h = tt(), k = dt(), O = et(), R = J();
  let m = class extends k.Shape {
    _sceneFunc(c) {
      const o = this._getPoints();
      c.beginPath(), c.moveTo(o[0].x, o[0].y);
      for (let g = 1; g < o.length; g++)
        c.lineTo(o[g].x, o[g].y);
      c.closePath(), c.fillStrokeShape(this);
    }
    _getPoints() {
      const c = this.attrs.sides, o = this.attrs.radius || 0, g = [];
      for (let _ = 0; _ < c; _++)
        g.push({
          x: o * Math.sin(_ * 2 * Math.PI / c),
          y: -1 * o * Math.cos(_ * 2 * Math.PI / c)
        });
      return g;
    }
    getSelfRect() {
      const c = this._getPoints();
      let o = c[0].x, g = c[0].y, _ = c[0].x, v = c[0].y;
      return c.forEach((w) => {
        o = Math.min(o, w.x), g = Math.max(g, w.x), _ = Math.min(_, w.y), v = Math.max(v, w.y);
      }), {
        x: o,
        y: _,
        width: g - o,
        height: v - _
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
  return fe.RegularPolygon = m, m.prototype.className = "RegularPolygon", m.prototype._centroid = !0, m.prototype._attrsAffectingSize = ["radius"], (0, R._registerNode)(m), h.Factory.addGetterSetter(m, "radius", 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(m, "sides", 0, (0, O.getNumberValidator)()), fe;
}
var ge = {}, Ki;
function or() {
  if (Ki) return ge;
  Ki = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.Ring = void 0;
  const h = tt(), k = dt(), O = et(), R = J(), m = Math.PI * 2;
  let b = class extends k.Shape {
    _sceneFunc(o) {
      o.beginPath(), o.arc(0, 0, this.innerRadius(), 0, m, !1), o.moveTo(this.outerRadius(), 0), o.arc(0, 0, this.outerRadius(), m, 0, !0), o.closePath(), o.fillStrokeShape(this);
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
  return ge.Ring = b, b.prototype.className = "Ring", b.prototype._centroid = !0, b.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, R._registerNode)(b), h.Factory.addGetterSetter(b, "innerRadius", 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(b, "outerRadius", 0, (0, O.getNumberValidator)()), ge;
}
var pe = {}, $i;
function lr() {
  if ($i) return pe;
  $i = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.Sprite = void 0;
  const h = tt(), k = dt(), O = gi(), R = et(), m = J();
  let b = class extends k.Shape {
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
      const g = this.animation(), _ = this.frameIndex(), v = _ * 4, w = this.animations()[g], P = this.frameOffsets(), u = w[v + 0], l = w[v + 1], y = w[v + 2], T = w[v + 3], E = this.image();
      if ((this.hasFill() || this.hasStroke()) && (o.beginPath(), o.rect(0, 0, y, T), o.closePath(), o.fillStrokeShape(this)), E)
        if (P) {
          const i = P[g], a = _ * 2;
          o.drawImage(E, u, l, y, T, i[a + 0], i[a + 1], y, T);
        } else
          o.drawImage(E, u, l, y, T, 0, 0, y, T);
    }
    _hitFunc(o) {
      const g = this.animation(), _ = this.frameIndex(), v = _ * 4, w = this.animations()[g], P = this.frameOffsets(), u = w[v + 2], l = w[v + 3];
      if (o.beginPath(), P) {
        const y = P[g], T = _ * 2;
        o.rect(y[T + 0], y[T + 1], u, l);
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
      const o = this.frameIndex(), g = this.animation(), _ = this.animations(), v = _[g], w = v.length / 4;
      o < w - 1 ? this.frameIndex(o + 1) : this.frameIndex(0);
    }
  };
  return pe.Sprite = b, b.prototype.className = "Sprite", (0, m._registerNode)(b), h.Factory.addGetterSetter(b, "animation"), h.Factory.addGetterSetter(b, "animations"), h.Factory.addGetterSetter(b, "frameOffsets"), h.Factory.addGetterSetter(b, "image"), h.Factory.addGetterSetter(b, "frameIndex", 0, (0, R.getNumberValidator)()), h.Factory.addGetterSetter(b, "frameRate", 17, (0, R.getNumberValidator)()), h.Factory.backCompat(b, {
    index: "frameIndex",
    getIndex: "getFrameIndex",
    setIndex: "setFrameIndex"
  }), pe;
}
var _e = {}, ji;
function hr() {
  if (ji) return _e;
  ji = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.Star = void 0;
  const h = tt(), k = dt(), O = et(), R = J();
  let m = class extends k.Shape {
    _sceneFunc(c) {
      const o = this.innerRadius(), g = this.outerRadius(), _ = this.numPoints();
      c.beginPath(), c.moveTo(0, 0 - g);
      for (let v = 1; v < _ * 2; v++) {
        const w = v % 2 === 0 ? g : o, P = w * Math.sin(v * Math.PI / _), u = -1 * w * Math.cos(v * Math.PI / _);
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
  return _e.Star = m, m.prototype.className = "Star", m.prototype._centroid = !0, m.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, R._registerNode)(m), h.Factory.addGetterSetter(m, "numPoints", 5, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(m, "innerRadius", 0, (0, O.getNumberValidator)()), h.Factory.addGetterSetter(m, "outerRadius", 0, (0, O.getNumberValidator)()), _e;
}
var Kt = {}, Qi;
function In() {
  if (Qi) return Kt;
  Qi = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.Text = void 0, Kt.stringToArray = c;
  const h = at(), k = tt(), O = dt(), R = J(), m = et(), b = J();
  function c(V) {
    return [...V].reduce((B, H, q, W) => {
      if (new RegExp("\\p{Emoji}", "u").test(H)) {
        const L = W[q + 1];
        L && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(L) ? (B.push(H + L), W[q + 1] = "") : B.push(H);
      } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(H + (W[q + 1] || "")) ? B.push(H + W[q + 1]) : q > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(H) ? B[B.length - 1] += H : H && B.push(H);
      return B;
    }, []);
  }
  const o = "auto", g = "center", _ = "inherit", v = "justify", w = "Change.konva", P = "2d", u = "-", l = "left", y = "text", T = "Text", E = "top", i = "bottom", a = "middle", S = "normal", A = "px ", M = " ", G = "right", r = "rtl", d = "word", n = "char", f = "none", x = "…", t = [
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
  ], s = t.length;
  function e(V) {
    return V.split(",").map((B) => {
      B = B.trim();
      const H = B.indexOf(" ") >= 0, q = B.indexOf('"') >= 0 || B.indexOf("'") >= 0;
      return H && !q && (B = `"${B}"`), B;
    }).join(", ");
  }
  let p;
  function C() {
    return p || (p = h.Util.createCanvasElement().getContext(P), p);
  }
  function F(V) {
    V.fillText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function N(V) {
    V.setAttr("miterLimit", 2), V.strokeText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function D(V) {
    return V = V || {}, !V.fillLinearGradientColorStops && !V.fillRadialGradientColorStops && !V.fillPatternImage && (V.fill = V.fill || "black"), V;
  }
  let I = class extends O.Shape {
    constructor(B) {
      super(D(B)), this._partialTextX = 0, this._partialTextY = 0;
      for (let H = 0; H < s; H++)
        this.on(t[H] + w, this._setTextData);
      this._setTextData();
    }
    _sceneFunc(B) {
      const H = this.textArr, q = H.length;
      if (!this.text())
        return;
      let W = this.padding(), L = this.fontSize(), U = this.lineHeight() * L, X = this.verticalAlign(), z = this.direction(), Y = 0, $ = this.align(), Q = this.getWidth(), j = this.letterSpacing(), K = this.fill(), ht = this.textDecoration(), it = ht.indexOf("underline") !== -1, lt = ht.indexOf("line-through") !== -1, Xt;
      z = z === _ ? B.direction : z;
      let vt = U / 2, jt = a;
      if (R.Konva._fixTextRendering) {
        const It = this.measureSize("M");
        jt = "alphabetic", vt = (It.fontBoundingBoxAscent - It.fontBoundingBoxDescent) / 2 + U / 2;
      }
      var st = 0, yt = 0;
      for (z === r && B.setAttr("direction", z), B.setAttr("font", this._getContextFont()), B.setAttr("textBaseline", jt), B.setAttr("textAlign", l), X === a ? Y = (this.getHeight() - q * U - W * 2) / 2 : X === i && (Y = this.getHeight() - q * U - W * 2), B.translate(W, Y + W), Xt = 0; Xt < q; Xt++) {
        var st = 0, yt = 0, Tt = H[Xt], Rt = Tt.text, gt = Tt.width, Dt = Tt.lastInParagraph, Ft, Vt;
        if (B.save(), $ === G ? st += Q - gt - W * 2 : $ === g && (st += (Q - gt - W * 2) / 2), it) {
          B.save(), B.beginPath();
          const At = R.Konva._fixTextRendering ? Math.round(L / 4) : Math.round(L / 2), kt = st, wt = vt + yt + At;
          B.moveTo(kt, wt), Ft = Rt.split(" ").length - 1, Vt = $ === v && !Dt ? Q - W * 2 : gt, B.lineTo(kt + Math.round(Vt), wt), B.lineWidth = L / 15;
          const ze = this._getLinearGradient();
          B.strokeStyle = ze || K, B.stroke(), B.restore();
        }
        if (lt) {
          B.save(), B.beginPath();
          const At = R.Konva._fixTextRendering ? -Math.round(L / 4) : 0;
          B.moveTo(st, vt + yt + At), Ft = Rt.split(" ").length - 1, Vt = $ === v && !Dt ? Q - W * 2 : gt, B.lineTo(st + Math.round(Vt), vt + yt + At), B.lineWidth = L / 15;
          const kt = this._getLinearGradient();
          B.strokeStyle = kt || K, B.stroke(), B.restore();
        }
        if (z !== r && (j !== 0 || $ === v)) {
          Ft = Rt.split(" ").length - 1;
          const At = c(Rt);
          for (let kt = 0; kt < At.length; kt++) {
            const wt = At[kt];
            wt === " " && !Dt && $ === v && (st += (Q - W * 2 - gt) / Ft), this._partialTextX = st, this._partialTextY = vt + yt, this._partialText = wt, B.fillStrokeShape(this), st += this.measureSize(wt).width + j;
          }
        } else
          j !== 0 && B.setAttr("letterSpacing", `${j}px`), this._partialTextX = st, this._partialTextY = vt + yt, this._partialText = Rt, B.fillStrokeShape(this);
        B.restore(), q > 1 && (vt += U);
      }
    }
    _hitFunc(B) {
      const H = this.getWidth(), q = this.getHeight();
      B.beginPath(), B.rect(0, 0, H, q), B.closePath(), B.fillStrokeShape(this);
    }
    setText(B) {
      const H = h.Util._isString(B) ? B : B == null ? "" : B + "";
      return this._setAttr(y, H), this;
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
      let K = C(), ht = this.fontSize(), it;
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
      return this.fontStyle() + M + this.fontVariant() + M + (this.fontSize() + A) + e(this.fontFamily());
    }
    _addTextLine(B) {
      this.align() === v && (B = B.trim());
      const q = this._getTextWidth(B);
      return this.textArr.push({
        text: B,
        width: q,
        lastInParagraph: !1
      });
    }
    _getTextWidth(B) {
      const H = this.letterSpacing(), q = B.length;
      return C().measureText(B).width + H * q;
    }
    _setTextData() {
      let B = this.text().split(`
`), H = +this.fontSize(), q = 0, W = this.lineHeight() * H, L = this.attrs.width, U = this.attrs.height, X = L !== o && L !== void 0, z = U !== o && U !== void 0, Y = this.padding(), $ = L - Y * 2, Q = U - Y * 2, j = 0, K = this.wrap(), ht = K !== f, it = K !== n && ht, lt = this.ellipsis();
      this.textArr = [], C().font = this._getContextFont();
      const Xt = lt ? this._getTextWidth(x) : 0;
      for (let vt = 0, jt = B.length; vt < jt; ++vt) {
        let st = B[vt], yt = this._getTextWidth(st);
        if (X && yt > $)
          for (; st.length > 0; ) {
            let Tt = 0, Rt = c(st).length, gt = "", Dt = 0;
            for (; Tt < Rt; ) {
              const Ft = Tt + Rt >>> 1, Vt = c(st), It = Vt.slice(0, Ft + 1).join(""), Ht = this._getTextWidth(It) + Xt;
              Ht <= $ ? (Tt = Ft + 1, gt = It, Dt = Ht) : Rt = Ft;
            }
            if (gt) {
              if (it) {
                const It = c(st), Ht = c(gt), At = It[Ht.length], kt = At === M || At === u;
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
              if (st = c(st).slice(Tt).join("").trimLeft(), st.length > 0 && (yt = this._getTextWidth(st), yt <= $)) {
                this._addTextLine(st), j += W, q = Math.max(q, yt);
                break;
              }
            } else
              break;
          }
        else
          this._addTextLine(st), j += W, q = Math.max(q, yt), this._shouldHandleEllipsis(j) && vt < jt - 1 && this._tryToAddEllipsisToLastLine();
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
      !U || !L || (H && (this._getTextWidth(U.text + x) < W || (U.text = U.text.slice(0, U.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(U.text + x));
    }
    getStrokeScaleEnabled() {
      return !0;
    }
    _useBufferCanvas() {
      const B = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, H = this.hasShadow();
      return B && H ? !0 : super._useBufferCanvas();
    }
  };
  return Kt.Text = I, I.prototype._fillFunc = F, I.prototype._strokeFunc = N, I.prototype.className = T, I.prototype._attrsAffectingSize = [
    "text",
    "fontSize",
    "padding",
    "wrap",
    "lineHeight",
    "letterSpacing"
  ], (0, b._registerNode)(I), k.Factory.overWriteSetter(I, "width", (0, m.getNumberOrAutoValidator)()), k.Factory.overWriteSetter(I, "height", (0, m.getNumberOrAutoValidator)()), k.Factory.addGetterSetter(I, "direction", _), k.Factory.addGetterSetter(I, "fontFamily", "Arial"), k.Factory.addGetterSetter(I, "fontSize", 12, (0, m.getNumberValidator)()), k.Factory.addGetterSetter(I, "fontStyle", S), k.Factory.addGetterSetter(I, "fontVariant", S), k.Factory.addGetterSetter(I, "padding", 0, (0, m.getNumberValidator)()), k.Factory.addGetterSetter(I, "align", l), k.Factory.addGetterSetter(I, "verticalAlign", E), k.Factory.addGetterSetter(I, "lineHeight", 1, (0, m.getNumberValidator)()), k.Factory.addGetterSetter(I, "wrap", d), k.Factory.addGetterSetter(I, "ellipsis", !1, (0, m.getBooleanValidator)()), k.Factory.addGetterSetter(I, "letterSpacing", 0, (0, m.getNumberValidator)()), k.Factory.addGetterSetter(I, "text", "", (0, m.getStringValidator)()), k.Factory.addGetterSetter(I, "textDecoration", ""), Kt;
}
var me = {}, Zi;
function cr() {
  if (Zi) return me;
  Zi = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.TextPath = void 0;
  const h = at(), k = tt(), O = dt(), R = pi(), m = In(), b = et(), c = J(), o = "", g = "normal";
  function _(P) {
    P.fillText(this.partialText, 0, 0);
  }
  function v(P) {
    P.strokeText(this.partialText, 0, 0);
  }
  let w = class extends O.Shape {
    constructor(u) {
      super(u), this.dummyCanvas = h.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute(), this._setTextData();
      }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
    }
    _getTextPathLength() {
      return R.Path.getPathLength(this.dataArray);
    }
    _getPointAtLength(u) {
      if (!this.attrs.data)
        return null;
      const l = this.pathLength;
      return u - 1 > l ? null : R.Path.getPointAtLengthOfDataArray(u, this.dataArray);
    }
    _readDataAttribute() {
      this.dataArray = R.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
    }
    _sceneFunc(u) {
      u.setAttr("font", this._getContextFont()), u.setAttr("textBaseline", this.textBaseline()), u.setAttr("textAlign", "left"), u.save();
      const l = this.textDecoration(), y = this.fill(), T = this.fontSize(), E = this.glyphInfo;
      l === "underline" && u.beginPath();
      for (let i = 0; i < E.length; i++) {
        u.save();
        const a = E[i].p0;
        u.translate(a.x, a.y), u.rotate(E[i].rotation), this.partialText = E[i].text, u.fillStrokeShape(this), l === "underline" && (i === 0 && u.moveTo(0, T / 2 + 1), u.lineTo(T, T / 2 + 1)), u.restore();
      }
      l === "underline" && (u.strokeStyle = y, u.lineWidth = T / 20, u.stroke()), u.restore();
    }
    _hitFunc(u) {
      u.beginPath();
      const l = this.glyphInfo;
      if (l.length >= 1) {
        const y = l[0].p0;
        u.moveTo(y.x, y.y);
      }
      for (let y = 0; y < l.length; y++) {
        const T = l[y].p1;
        u.lineTo(T.x, T.y);
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
      return m.Text.prototype.setText.call(this, u);
    }
    _getContextFont() {
      return m.Text.prototype._getContextFont.call(this);
    }
    _getTextSize(u) {
      const y = this.dummyCanvas.getContext("2d");
      y.save(), y.font = this._getContextFont();
      const T = y.measureText(u);
      return y.restore(), {
        width: T.width,
        height: parseInt(`${this.fontSize()}`, 10)
      };
    }
    _setTextData() {
      const { width: u, height: l } = this._getTextSize(this.attrs.text);
      if (this.textWidth = u, this.textHeight = l, this.glyphInfo = [], !this.attrs.data)
        return null;
      const y = this.letterSpacing(), T = this.align(), E = this.kerningFunc(), i = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * y, 0);
      let a = 0;
      T === "center" && (a = Math.max(0, this.pathLength / 2 - i / 2)), T === "right" && (a = Math.max(0, this.pathLength - i));
      const S = (0, m.stringToArray)(this.text());
      let A = a;
      for (let M = 0; M < S.length; M++) {
        const G = this._getPointAtLength(A);
        if (!G)
          return;
        let r = this._getTextSize(S[M]).width + y;
        if (S[M] === " " && T === "justify") {
          const s = this.text().split(" ").length - 1;
          r += (this.pathLength - i) / s;
        }
        const d = this._getPointAtLength(A + r);
        if (!d)
          return;
        const n = R.Path.getLineLength(G.x, G.y, d.x, d.y);
        let f = 0;
        if (E)
          try {
            f = E(S[M - 1], S[M]) * this.fontSize();
          } catch {
            f = 0;
          }
        G.x += f, d.x += f, this.textWidth += f;
        const x = R.Path.getPointOnLine(f + n / 2, G.x, G.y, d.x, d.y), t = Math.atan2(d.y - G.y, d.x - G.x);
        this.glyphInfo.push({
          transposeX: x.x,
          transposeY: x.y,
          text: S[M],
          rotation: t,
          p0: G,
          p1: d
        }), A += r;
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
      this.glyphInfo.forEach(function(A) {
        u.push(A.p0.x), u.push(A.p0.y), u.push(A.p1.x), u.push(A.p1.y);
      });
      let l = u[0] || 0, y = u[0] || 0, T = u[1] || 0, E = u[1] || 0, i, a;
      for (let A = 0; A < u.length / 2; A++)
        i = u[A * 2], a = u[A * 2 + 1], l = Math.min(l, i), y = Math.max(y, i), T = Math.min(T, a), E = Math.max(E, a);
      const S = this.fontSize();
      return {
        x: l - S / 2,
        y: T - S / 2,
        width: y - l + S,
        height: E - T + S
      };
    }
    destroy() {
      return h.Util.releaseCanvas(this.dummyCanvas), super.destroy();
    }
  };
  return me.TextPath = w, w.prototype._fillFunc = _, w.prototype._strokeFunc = v, w.prototype._fillFuncHit = _, w.prototype._strokeFuncHit = v, w.prototype.className = "TextPath", w.prototype._attrsAffectingSize = ["text", "fontSize", "data"], (0, c._registerNode)(w), k.Factory.addGetterSetter(w, "data"), k.Factory.addGetterSetter(w, "fontFamily", "Arial"), k.Factory.addGetterSetter(w, "fontSize", 12, (0, b.getNumberValidator)()), k.Factory.addGetterSetter(w, "fontStyle", g), k.Factory.addGetterSetter(w, "align", "left"), k.Factory.addGetterSetter(w, "letterSpacing", 0, (0, b.getNumberValidator)()), k.Factory.addGetterSetter(w, "textBaseline", "middle"), k.Factory.addGetterSetter(w, "fontVariant", g), k.Factory.addGetterSetter(w, "text", o), k.Factory.addGetterSetter(w, "textDecoration", ""), k.Factory.addGetterSetter(w, "kerningFunc", void 0), me;
}
var ve = {}, Ji;
function dr() {
  if (Ji) return ve;
  Ji = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.Transformer = void 0;
  const h = at(), k = tt(), O = ot(), R = dt(), m = Dn(), b = fi(), c = J(), o = et(), g = J(), _ = "tr-konva", v = [
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
  ].map((d) => d + `.${_}`).join(" "), w = "nodesRect", P = [
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
  function y(d, n, f) {
    if (d === "rotater")
      return f;
    n += h.Util.degToRad(u[d] || 0);
    const x = (h.Util.radToDeg(n) % 360 + 360) % 360;
    return h.Util._inRange(x, 315 + 22.5, 360) || h.Util._inRange(x, 0, 22.5) ? "ns-resize" : h.Util._inRange(x, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : h.Util._inRange(x, 90 - 22.5, 90 + 22.5) ? "ew-resize" : h.Util._inRange(x, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : h.Util._inRange(x, 180 - 22.5, 180 + 22.5) ? "ns-resize" : h.Util._inRange(x, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : h.Util._inRange(x, 270 - 22.5, 270 + 22.5) ? "ew-resize" : h.Util._inRange(x, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (h.Util.error("Transformer has unknown angle for cursor detection: " + x), "pointer");
  }
  const T = [
    "top-left",
    "top-center",
    "top-right",
    "middle-right",
    "middle-left",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ], E = 1e8;
  function i(d) {
    return {
      x: d.x + d.width / 2 * Math.cos(d.rotation) + d.height / 2 * Math.sin(-d.rotation),
      y: d.y + d.height / 2 * Math.cos(d.rotation) + d.width / 2 * Math.sin(d.rotation)
    };
  }
  function a(d, n, f) {
    const x = f.x + (d.x - f.x) * Math.cos(n) - (d.y - f.y) * Math.sin(n), t = f.y + (d.x - f.x) * Math.sin(n) + (d.y - f.y) * Math.cos(n);
    return {
      ...d,
      rotation: d.rotation + n,
      x,
      y: t
    };
  }
  function S(d, n) {
    const f = i(d);
    return a(d, n, f);
  }
  function A(d, n, f) {
    let x = n;
    for (let t = 0; t < d.length; t++) {
      const s = c.Konva.getAngle(d[t]), e = Math.abs(s - n) % (Math.PI * 2);
      Math.min(e, Math.PI * 2 - e) < f && (x = s);
    }
    return x;
  }
  let M = 0, G = class extends b.Group {
    constructor(n) {
      super(n), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(v, this.update), this.getNode() && this.update();
    }
    attachTo(n) {
      return this.setNode(n), this;
    }
    setNode(n) {
      return h.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([n]);
    }
    getNode() {
      return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
      return _ + this._id;
    }
    setNodes(n = []) {
      this._nodes && this._nodes.length && this.detach();
      const f = n.filter((t) => t.isAncestorOf(this) ? (h.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
      return this._nodes = n = f, n.length === 1 && this.useSingleNodeRotation() ? this.rotation(n[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((t) => {
        const s = () => {
          this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
        }, e = t._attrsAffectingSize.map((p) => p + "Change." + this._getEventNamespace()).join(" ");
        t.on(e, s), t.on(P.map((p) => p + `.${this._getEventNamespace()}`).join(" "), s), t.on(`absoluteTransformChange.${this._getEventNamespace()}`, s), this._proxyDrag(t);
      }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
    }
    _proxyDrag(n) {
      let f;
      n.on(`dragstart.${this._getEventNamespace()}`, (x) => {
        f = n.getAbsolutePosition(), !this.isDragging() && n !== this.findOne(".back") && this.startDrag(x, !1);
      }), n.on(`dragmove.${this._getEventNamespace()}`, (x) => {
        if (!f)
          return;
        const t = n.getAbsolutePosition(), s = t.x - f.x, e = t.y - f.y;
        this.nodes().forEach((p) => {
          if (p === n || p.isDragging())
            return;
          const C = p.getAbsolutePosition();
          p.setAbsolutePosition({
            x: C.x + s,
            y: C.y + e
          }), p.startDrag(x);
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
      this._nodes && this._nodes.forEach((n) => {
        n.off("." + this._getEventNamespace());
      }), this._nodes = [], this._resetTransformCache();
    }
    _resetTransformCache() {
      this._clearCache(w), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
    }
    _getNodeRect() {
      return this._getCache(w, this.__getNodeRect);
    }
    __getNodeShape(n, f = this.rotation(), x) {
      const t = n.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), s = n.getAbsoluteScale(x), e = n.getAbsolutePosition(x), p = t.x * s.x - n.offsetX() * s.x, C = t.y * s.y - n.offsetY() * s.y, F = (c.Konva.getAngle(n.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), N = {
        x: e.x + p * Math.cos(F) + C * Math.sin(-F),
        y: e.y + C * Math.cos(F) + p * Math.sin(F),
        width: t.width * s.x,
        height: t.height * s.y,
        rotation: F
      };
      return a(N, -c.Konva.getAngle(f), {
        x: 0,
        y: 0
      });
    }
    __getNodeRect() {
      if (!this.getNode())
        return {
          x: -E,
          y: -E,
          width: 0,
          height: 0,
          rotation: 0
        };
      const f = [];
      this.nodes().map((F) => {
        const N = F.getClientRect({
          skipTransform: !0,
          skipShadow: !0,
          skipStroke: this.ignoreStroke()
        }), D = [
          { x: N.x, y: N.y },
          { x: N.x + N.width, y: N.y },
          { x: N.x + N.width, y: N.y + N.height },
          { x: N.x, y: N.y + N.height }
        ], I = F.getAbsoluteTransform();
        D.forEach(function(V) {
          const B = I.point(V);
          f.push(B);
        });
      });
      const x = new h.Transform();
      x.rotate(-c.Konva.getAngle(this.rotation()));
      let t = 1 / 0, s = 1 / 0, e = -1 / 0, p = -1 / 0;
      f.forEach(function(F) {
        const N = x.point(F);
        t === void 0 && (t = e = N.x, s = p = N.y), t = Math.min(t, N.x), s = Math.min(s, N.y), e = Math.max(e, N.x), p = Math.max(p, N.y);
      }), x.invert();
      const C = x.point({ x: t, y: s });
      return {
        x: C.x,
        y: C.y,
        width: e - t,
        height: p - s,
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
      this._createBack(), T.forEach((n) => {
        this._createAnchor(n);
      }), this._createAnchor("rotater");
    }
    _createAnchor(n) {
      const f = new m.Rect({
        stroke: "rgb(0, 161, 255)",
        fill: "white",
        strokeWidth: 1,
        name: n + " _anchor",
        dragDistance: 0,
        draggable: !0,
        hitStrokeWidth: l ? 10 : "auto"
      }), x = this;
      f.on("mousedown touchstart", function(t) {
        x._handleMouseDown(t);
      }), f.on("dragstart", (t) => {
        f.stopDrag(), t.cancelBubble = !0;
      }), f.on("dragend", (t) => {
        t.cancelBubble = !0;
      }), f.on("mouseenter", () => {
        const t = c.Konva.getAngle(this.rotation()), s = this.rotateAnchorCursor(), e = y(n, t, s);
        f.getStage().content && (f.getStage().content.style.cursor = e), this._cursorChange = !0;
      }), f.on("mouseout", () => {
        f.getStage().content && (f.getStage().content.style.cursor = ""), this._cursorChange = !1;
      }), this.add(f);
    }
    _createBack() {
      const n = new R.Shape({
        name: "back",
        width: 0,
        height: 0,
        draggable: !0,
        sceneFunc(f, x) {
          const t = x.getParent(), s = t.padding();
          f.beginPath(), f.rect(-s, -s, x.width() + s * 2, x.height() + s * 2), f.moveTo(x.width() / 2, -s), t.rotateEnabled() && t.rotateLineVisible() && f.lineTo(x.width() / 2, -t.rotateAnchorOffset() * h.Util._sign(x.height()) - s), f.fillStrokeShape(x);
        },
        hitFunc: (f, x) => {
          if (!this.shouldOverdrawWholeArea())
            return;
          const t = this.padding();
          f.beginPath(), f.rect(-t, -t, x.width() + t * 2, x.height() + t * 2), f.fillStrokeShape(x);
        }
      });
      this.add(n), this._proxyDrag(n), n.on("dragstart", (f) => {
        f.cancelBubble = !0;
      }), n.on("dragmove", (f) => {
        f.cancelBubble = !0;
      }), n.on("dragend", (f) => {
        f.cancelBubble = !0;
      }), this.on("dragmove", (f) => {
        this.update();
      });
    }
    _handleMouseDown(n) {
      if (this._transforming)
        return;
      this._movingAnchorName = n.target.name().split(" ")[0];
      const f = this._getNodeRect(), x = f.width, t = f.height, s = Math.sqrt(Math.pow(x, 2) + Math.pow(t, 2));
      this.sin = Math.abs(t / s), this.cos = Math.abs(x / s), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
      const e = n.target.getAbsolutePosition(), p = n.target.getStage().getPointerPosition();
      this._anchorDragOffset = {
        x: p.x - e.x,
        y: p.y - e.y
      }, M++, this._fire("transformstart", { evt: n.evt, target: this.getNode() }), this._nodes.forEach((C) => {
        C._fire("transformstart", { evt: n.evt, target: C });
      });
    }
    _handleMouseMove(n) {
      let f, x, t;
      const s = this.findOne("." + this._movingAnchorName), e = s.getStage();
      e.setPointersPositions(n);
      const p = e.getPointerPosition();
      let C = {
        x: p.x - this._anchorDragOffset.x,
        y: p.y - this._anchorDragOffset.y
      };
      const F = s.getAbsolutePosition();
      this.anchorDragBoundFunc() && (C = this.anchorDragBoundFunc()(F, C, n)), s.setAbsolutePosition(C);
      const N = s.getAbsolutePosition();
      if (F.x === N.x && F.y === N.y)
        return;
      if (this._movingAnchorName === "rotater") {
        const z = this._getNodeRect();
        f = s.x() - z.width / 2, x = -s.y() + z.height / 2;
        let Y = Math.atan2(-x, f) + Math.PI / 2;
        z.height < 0 && (Y -= Math.PI);
        const Q = c.Konva.getAngle(this.rotation()) + Y, j = c.Konva.getAngle(this.rotationSnapTolerance()), ht = A(this.rotationSnaps(), Q, j) - z.rotation, it = S(z, ht);
        this._fitNodesInto(it, n);
        return;
      }
      const D = this.shiftBehavior();
      let I;
      D === "inverted" ? I = this.keepRatio() && !n.shiftKey : D === "none" ? I = this.keepRatio() : I = this.keepRatio() || n.shiftKey;
      var W = this.centeredScaling() || n.altKey;
      if (this._movingAnchorName === "top-left") {
        if (I) {
          var V = W ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          t = Math.sqrt(Math.pow(V.x - s.x(), 2) + Math.pow(V.y - s.y(), 2));
          var B = this.findOne(".top-left").x() > V.x ? -1 : 1, H = this.findOne(".top-left").y() > V.y ? -1 : 1;
          f = t * this.cos * B, x = t * this.sin * H, this.findOne(".top-left").x(V.x - f), this.findOne(".top-left").y(V.y - x);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(s.y());
      else if (this._movingAnchorName === "top-right") {
        if (I) {
          var V = W ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          t = Math.sqrt(Math.pow(s.x() - V.x, 2) + Math.pow(V.y - s.y(), 2));
          var B = this.findOne(".top-right").x() < V.x ? -1 : 1, H = this.findOne(".top-right").y() > V.y ? -1 : 1;
          f = t * this.cos * B, x = t * this.sin * H, this.findOne(".top-right").x(V.x + f), this.findOne(".top-right").y(V.y - x);
        }
        var q = s.position();
        this.findOne(".top-left").y(q.y), this.findOne(".bottom-right").x(q.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(s.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(s.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (I) {
          var V = W ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          t = Math.sqrt(Math.pow(V.x - s.x(), 2) + Math.pow(s.y() - V.y, 2));
          var B = V.x < s.x() ? -1 : 1, H = s.y() < V.y ? -1 : 1;
          f = t * this.cos * B, x = t * this.sin * H, s.x(V.x - f), s.y(V.y + x);
        }
        q = s.position(), this.findOne(".top-left").x(q.x), this.findOne(".bottom-right").y(q.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(s.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (I) {
          var V = W ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          t = Math.sqrt(Math.pow(s.x() - V.x, 2) + Math.pow(s.y() - V.y, 2));
          var B = this.findOne(".bottom-right").x() < V.x ? -1 : 1, H = this.findOne(".bottom-right").y() < V.y ? -1 : 1;
          f = t * this.cos * B, x = t * this.sin * H, this.findOne(".bottom-right").x(V.x + f), this.findOne(".bottom-right").y(V.y + x);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      var W = this.centeredScaling() || n.altKey;
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
      f = L.x, x = L.y;
      const U = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), X = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: f,
        y: x,
        width: U,
        height: X,
        rotation: c.Konva.getAngle(this.rotation())
      }, n);
    }
    _handleMouseUp(n) {
      this._removeEvents(n);
    }
    getAbsoluteTransform() {
      return this.getTransform();
    }
    _removeEvents(n) {
      var f;
      if (this._transforming) {
        this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
        const x = this.getNode();
        M--, this._fire("transformend", { evt: n, target: x }), (f = this.getLayer()) === null || f === void 0 || f.batchDraw(), x && this._nodes.forEach((t) => {
          var s;
          t._fire("transformend", { evt: n, target: t }), (s = t.getLayer()) === null || s === void 0 || s.batchDraw();
        }), this._movingAnchorName = null;
      }
    }
    _fitNodesInto(n, f) {
      const x = this._getNodeRect(), t = 1;
      if (h.Util._inRange(n.width, -this.padding() * 2 - t, t)) {
        this.update();
        return;
      }
      if (h.Util._inRange(n.height, -this.padding() * 2 - t, t)) {
        this.update();
        return;
      }
      const s = new h.Transform();
      if (s.rotate(c.Konva.getAngle(this.rotation())), this._movingAnchorName && n.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
        const I = s.point({
          x: -this.padding() * 2,
          y: 0
        });
        n.x += I.x, n.y += I.y, n.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= I.x, this._anchorDragOffset.y -= I.y;
      } else if (this._movingAnchorName && n.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
        const I = s.point({
          x: this.padding() * 2,
          y: 0
        });
        this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= I.x, this._anchorDragOffset.y -= I.y, n.width += this.padding() * 2;
      }
      if (this._movingAnchorName && n.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
        const I = s.point({
          x: 0,
          y: -this.padding() * 2
        });
        n.x += I.x, n.y += I.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= I.x, this._anchorDragOffset.y -= I.y, n.height += this.padding() * 2;
      } else if (this._movingAnchorName && n.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
        const I = s.point({
          x: 0,
          y: this.padding() * 2
        });
        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= I.x, this._anchorDragOffset.y -= I.y, n.height += this.padding() * 2;
      }
      if (this.boundBoxFunc()) {
        const I = this.boundBoxFunc()(x, n);
        I ? n = I : h.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
      const e = 1e7, p = new h.Transform();
      p.translate(x.x, x.y), p.rotate(x.rotation), p.scale(x.width / e, x.height / e);
      const C = new h.Transform(), F = n.width / e, N = n.height / e;
      this.flipEnabled() === !1 ? (C.translate(n.x, n.y), C.rotate(n.rotation), C.translate(n.width < 0 ? n.width : 0, n.height < 0 ? n.height : 0), C.scale(Math.abs(F), Math.abs(N))) : (C.translate(n.x, n.y), C.rotate(n.rotation), C.scale(F, N));
      const D = C.multiply(p.invert());
      this._nodes.forEach((I) => {
        var V;
        const B = I.getParent().getAbsoluteTransform(), H = I.getTransform().copy();
        H.translate(I.offsetX(), I.offsetY());
        const q = new h.Transform();
        q.multiply(B.copy().invert()).multiply(D).multiply(B).multiply(H);
        const W = q.decompose();
        I.setAttrs(W), (V = I.getLayer()) === null || V === void 0 || V.batchDraw();
      }), this.rotation(h.Util._getRotation(n.rotation)), this._nodes.forEach((I) => {
        this._fire("transform", { evt: f, target: I }), I._fire("transform", { evt: f, target: I });
      }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
    }
    forceUpdate() {
      this._resetTransformCache(), this.update();
    }
    _batchChangeChild(n, f) {
      this.findOne(n).setAttrs(f);
    }
    update() {
      var n;
      const f = this._getNodeRect();
      this.rotation(h.Util._getRotation(f.rotation));
      const x = f.width, t = f.height, s = this.enabledAnchors(), e = this.resizeEnabled(), p = this.padding(), C = this.anchorSize(), F = this.find("._anchor");
      F.forEach((D) => {
        D.setAttrs({
          width: C,
          height: C,
          offsetX: C / 2,
          offsetY: C / 2,
          stroke: this.anchorStroke(),
          strokeWidth: this.anchorStrokeWidth(),
          fill: this.anchorFill(),
          cornerRadius: this.anchorCornerRadius()
        });
      }), this._batchChangeChild(".top-left", {
        x: 0,
        y: 0,
        offsetX: C / 2 + p,
        offsetY: C / 2 + p,
        visible: e && s.indexOf("top-left") >= 0
      }), this._batchChangeChild(".top-center", {
        x: x / 2,
        y: 0,
        offsetY: C / 2 + p,
        visible: e && s.indexOf("top-center") >= 0
      }), this._batchChangeChild(".top-right", {
        x,
        y: 0,
        offsetX: C / 2 - p,
        offsetY: C / 2 + p,
        visible: e && s.indexOf("top-right") >= 0
      }), this._batchChangeChild(".middle-left", {
        x: 0,
        y: t / 2,
        offsetX: C / 2 + p,
        visible: e && s.indexOf("middle-left") >= 0
      }), this._batchChangeChild(".middle-right", {
        x,
        y: t / 2,
        offsetX: C / 2 - p,
        visible: e && s.indexOf("middle-right") >= 0
      }), this._batchChangeChild(".bottom-left", {
        x: 0,
        y: t,
        offsetX: C / 2 + p,
        offsetY: C / 2 - p,
        visible: e && s.indexOf("bottom-left") >= 0
      }), this._batchChangeChild(".bottom-center", {
        x: x / 2,
        y: t,
        offsetY: C / 2 - p,
        visible: e && s.indexOf("bottom-center") >= 0
      }), this._batchChangeChild(".bottom-right", {
        x,
        y: t,
        offsetX: C / 2 - p,
        offsetY: C / 2 - p,
        visible: e && s.indexOf("bottom-right") >= 0
      }), this._batchChangeChild(".rotater", {
        x: x / 2,
        y: -this.rotateAnchorOffset() * h.Util._sign(t) - p,
        visible: this.rotateEnabled()
      }), this._batchChangeChild(".back", {
        width: x,
        height: t,
        visible: this.borderEnabled(),
        stroke: this.borderStroke(),
        strokeWidth: this.borderStrokeWidth(),
        dash: this.borderDash(),
        x: 0,
        y: 0
      });
      const N = this.anchorStyleFunc();
      N && F.forEach((D) => {
        N(D);
      }), (n = this.getLayer()) === null || n === void 0 || n.batchDraw();
    }
    isTransforming() {
      return this._transforming;
    }
    stopTransform() {
      if (this._transforming) {
        this._removeEvents();
        const n = this.findOne("." + this._movingAnchorName);
        n && n.stopDrag();
      }
    }
    destroy() {
      return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), b.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
    }
    toObject() {
      return O.Node.prototype.toObject.call(this);
    }
    clone(n) {
      return O.Node.prototype.clone.call(this, n);
    }
    getClientRect() {
      return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
    }
  };
  ve.Transformer = G, G.isTransforming = () => M > 0;
  function r(d) {
    return d instanceof Array || h.Util.warn("enabledAnchors value should be an array"), d instanceof Array && d.forEach(function(n) {
      T.indexOf(n) === -1 && h.Util.warn("Unknown anchor name: " + n + ". Available names are: " + T.join(", "));
    }), d || [];
  }
  return G.prototype.className = "Transformer", (0, g._registerNode)(G), k.Factory.addGetterSetter(G, "enabledAnchors", T, r), k.Factory.addGetterSetter(G, "flipEnabled", !0, (0, o.getBooleanValidator)()), k.Factory.addGetterSetter(G, "resizeEnabled", !0), k.Factory.addGetterSetter(G, "anchorSize", 10, (0, o.getNumberValidator)()), k.Factory.addGetterSetter(G, "rotateEnabled", !0), k.Factory.addGetterSetter(G, "rotateLineVisible", !0), k.Factory.addGetterSetter(G, "rotationSnaps", []), k.Factory.addGetterSetter(G, "rotateAnchorOffset", 50, (0, o.getNumberValidator)()), k.Factory.addGetterSetter(G, "rotateAnchorCursor", "crosshair"), k.Factory.addGetterSetter(G, "rotationSnapTolerance", 5, (0, o.getNumberValidator)()), k.Factory.addGetterSetter(G, "borderEnabled", !0), k.Factory.addGetterSetter(G, "anchorStroke", "rgb(0, 161, 255)"), k.Factory.addGetterSetter(G, "anchorStrokeWidth", 1, (0, o.getNumberValidator)()), k.Factory.addGetterSetter(G, "anchorFill", "white"), k.Factory.addGetterSetter(G, "anchorCornerRadius", 0, (0, o.getNumberValidator)()), k.Factory.addGetterSetter(G, "borderStroke", "rgb(0, 161, 255)"), k.Factory.addGetterSetter(G, "borderStrokeWidth", 1, (0, o.getNumberValidator)()), k.Factory.addGetterSetter(G, "borderDash"), k.Factory.addGetterSetter(G, "keepRatio", !0), k.Factory.addGetterSetter(G, "shiftBehavior", "default"), k.Factory.addGetterSetter(G, "centeredScaling", !1), k.Factory.addGetterSetter(G, "ignoreStroke", !1), k.Factory.addGetterSetter(G, "padding", 0, (0, o.getNumberValidator)()), k.Factory.addGetterSetter(G, "nodes"), k.Factory.addGetterSetter(G, "node"), k.Factory.addGetterSetter(G, "boundBoxFunc"), k.Factory.addGetterSetter(G, "anchorDragBoundFunc"), k.Factory.addGetterSetter(G, "anchorStyleFunc"), k.Factory.addGetterSetter(G, "shouldOverdrawWholeArea", !1), k.Factory.addGetterSetter(G, "useSingleNodeRotation", !0), k.Factory.backCompat(G, {
    lineEnabled: "borderEnabled",
    rotateHandlerOffset: "rotateAnchorOffset",
    enabledHandlers: "enabledAnchors"
  }), ve;
}
var ye = {}, tn;
function ur() {
  if (tn) return ye;
  tn = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.Wedge = void 0;
  const h = tt(), k = dt(), O = J(), R = et(), m = J();
  let b = class extends k.Shape {
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
  return ye.Wedge = b, b.prototype.className = "Wedge", b.prototype._centroid = !0, b.prototype._attrsAffectingSize = ["radius"], (0, m._registerNode)(b), h.Factory.addGetterSetter(b, "radius", 0, (0, R.getNumberValidator)()), h.Factory.addGetterSetter(b, "angle", 0, (0, R.getNumberValidator)()), h.Factory.addGetterSetter(b, "clockwise", !1), h.Factory.backCompat(b, {
    angleDeg: "angle",
    getAngleDeg: "getAngle",
    setAngleDeg: "setAngle"
  }), ye;
}
var be = {}, en;
function fr() {
  if (en) return be;
  en = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.Blur = void 0;
  const h = tt(), k = ot(), O = et();
  function R() {
    this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
  const m = [
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
  ], b = [
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
  function c(g, _) {
    const v = g.data, w = g.width, P = g.height;
    let u, l, y, T, E, i, a, S, A, M, G, r, d, n, f, x, t, s, e, p, C, F, N, D;
    const I = _ + _ + 1, V = w - 1, B = P - 1, H = _ + 1, q = H * (H + 1) / 2, W = new R(), L = m[_], U = b[_];
    let X = null, z = W, Y = null, $ = null;
    for (y = 1; y < I; y++)
      z = z.next = new R(), y === H && (X = z);
    for (z.next = W, a = i = 0, l = 0; l < P; l++) {
      for (x = t = s = e = S = A = M = G = 0, r = H * (p = v[i]), d = H * (C = v[i + 1]), n = H * (F = v[i + 2]), f = H * (N = v[i + 3]), S += q * p, A += q * C, M += q * F, G += q * N, z = W, y = 0; y < H; y++)
        z.r = p, z.g = C, z.b = F, z.a = N, z = z.next;
      for (y = 1; y < H; y++)
        T = i + ((V < y ? V : y) << 2), S += (z.r = p = v[T]) * (D = H - y), A += (z.g = C = v[T + 1]) * D, M += (z.b = F = v[T + 2]) * D, G += (z.a = N = v[T + 3]) * D, x += p, t += C, s += F, e += N, z = z.next;
      for (Y = W, $ = X, u = 0; u < w; u++)
        v[i + 3] = N = G * L >> U, N !== 0 ? (N = 255 / N, v[i] = (S * L >> U) * N, v[i + 1] = (A * L >> U) * N, v[i + 2] = (M * L >> U) * N) : v[i] = v[i + 1] = v[i + 2] = 0, S -= r, A -= d, M -= n, G -= f, r -= Y.r, d -= Y.g, n -= Y.b, f -= Y.a, T = a + ((T = u + _ + 1) < V ? T : V) << 2, x += Y.r = v[T], t += Y.g = v[T + 1], s += Y.b = v[T + 2], e += Y.a = v[T + 3], S += x, A += t, M += s, G += e, Y = Y.next, r += p = $.r, d += C = $.g, n += F = $.b, f += N = $.a, x -= p, t -= C, s -= F, e -= N, $ = $.next, i += 4;
      a += w;
    }
    for (u = 0; u < w; u++) {
      for (t = s = e = x = A = M = G = S = 0, i = u << 2, r = H * (p = v[i]), d = H * (C = v[i + 1]), n = H * (F = v[i + 2]), f = H * (N = v[i + 3]), S += q * p, A += q * C, M += q * F, G += q * N, z = W, y = 0; y < H; y++)
        z.r = p, z.g = C, z.b = F, z.a = N, z = z.next;
      for (E = w, y = 1; y <= _; y++)
        i = E + u << 2, S += (z.r = p = v[i]) * (D = H - y), A += (z.g = C = v[i + 1]) * D, M += (z.b = F = v[i + 2]) * D, G += (z.a = N = v[i + 3]) * D, x += p, t += C, s += F, e += N, z = z.next, y < B && (E += w);
      for (i = u, Y = W, $ = X, l = 0; l < P; l++)
        T = i << 2, v[T + 3] = N = G * L >> U, N > 0 ? (N = 255 / N, v[T] = (S * L >> U) * N, v[T + 1] = (A * L >> U) * N, v[T + 2] = (M * L >> U) * N) : v[T] = v[T + 1] = v[T + 2] = 0, S -= r, A -= d, M -= n, G -= f, r -= Y.r, d -= Y.g, n -= Y.b, f -= Y.a, T = u + ((T = l + H) < B ? T : B) * w << 2, S += x += Y.r = v[T], A += t += Y.g = v[T + 1], M += s += Y.b = v[T + 2], G += e += Y.a = v[T + 3], Y = Y.next, r += p = $.r, d += C = $.g, n += F = $.b, f += N = $.a, x -= p, t -= C, s -= F, e -= N, $ = $.next, i += w;
    }
  }
  const o = function(_) {
    const v = Math.round(this.blurRadius());
    v > 0 && c(_, v);
  };
  return be.Blur = o, h.Factory.addGetterSetter(k.Node, "blurRadius", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), be;
}
var Se = {}, nn;
function gr() {
  if (nn) return Se;
  nn = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.Brighten = void 0;
  const h = tt(), k = ot(), O = et(), R = function(m) {
    const b = this.brightness() * 255, c = m.data, o = c.length;
    for (let g = 0; g < o; g += 4)
      c[g] += b, c[g + 1] += b, c[g + 2] += b;
  };
  return Se.Brighten = R, h.Factory.addGetterSetter(k.Node, "brightness", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Se;
}
var Ce = {}, rn;
function pr() {
  if (rn) return Ce;
  rn = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.Contrast = void 0;
  const h = tt(), k = ot(), O = et(), R = function(m) {
    const b = Math.pow((this.contrast() + 100) / 100, 2), c = m.data, o = c.length;
    let g = 150, _ = 150, v = 150;
    for (let w = 0; w < o; w += 4)
      g = c[w], _ = c[w + 1], v = c[w + 2], g /= 255, g -= 0.5, g *= b, g += 0.5, g *= 255, _ /= 255, _ -= 0.5, _ *= b, _ += 0.5, _ *= 255, v /= 255, v -= 0.5, v *= b, v += 0.5, v *= 255, g = g < 0 ? 0 : g > 255 ? 255 : g, _ = _ < 0 ? 0 : _ > 255 ? 255 : _, v = v < 0 ? 0 : v > 255 ? 255 : v, c[w] = g, c[w + 1] = _, c[w + 2] = v;
  };
  return Ce.Contrast = R, h.Factory.addGetterSetter(k.Node, "contrast", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Ce;
}
var we = {}, sn;
function _r() {
  if (sn) return we;
  sn = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.Emboss = void 0;
  const h = tt(), k = ot(), O = at(), R = et(), m = function(b) {
    const c = this.embossStrength() * 10, o = this.embossWhiteLevel() * 255, g = this.embossDirection(), _ = this.embossBlend(), v = b.data, w = b.width, P = b.height, u = w * 4;
    let l = 0, y = 0, T = P;
    switch (g) {
      case "top-left":
        l = -1, y = -1;
        break;
      case "top":
        l = -1, y = 0;
        break;
      case "top-right":
        l = -1, y = 1;
        break;
      case "right":
        l = 0, y = 1;
        break;
      case "bottom-right":
        l = 1, y = 1;
        break;
      case "bottom":
        l = 1, y = 0;
        break;
      case "bottom-left":
        l = 1, y = -1;
        break;
      case "left":
        l = 0, y = -1;
        break;
      default:
        O.Util.error("Unknown emboss direction: " + g);
    }
    do {
      const E = (T - 1) * u;
      let i = l;
      T + i < 1 && (i = 0), T + i > P && (i = 0);
      const a = (T - 1 + i) * w * 4;
      let S = w;
      do {
        const A = E + (S - 1) * 4;
        let M = y;
        S + M < 1 && (M = 0), S + M > w && (M = 0);
        const G = a + (S - 1 + M) * 4, r = v[A] - v[G], d = v[A + 1] - v[G + 1], n = v[A + 2] - v[G + 2];
        let f = r;
        const x = f > 0 ? f : -f, t = d > 0 ? d : -d, s = n > 0 ? n : -n;
        if (t > x && (f = d), s > x && (f = n), f *= c, _) {
          const e = v[A] + f, p = v[A + 1] + f, C = v[A + 2] + f;
          v[A] = e > 255 ? 255 : e < 0 ? 0 : e, v[A + 1] = p > 255 ? 255 : p < 0 ? 0 : p, v[A + 2] = C > 255 ? 255 : C < 0 ? 0 : C;
        } else {
          let e = o - f;
          e < 0 ? e = 0 : e > 255 && (e = 255), v[A] = v[A + 1] = v[A + 2] = e;
        }
      } while (--S);
    } while (--T);
  };
  return we.Emboss = m, h.Factory.addGetterSetter(k.Node, "embossStrength", 0.5, (0, R.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(k.Node, "embossWhiteLevel", 0.5, (0, R.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(k.Node, "embossDirection", "top-left", void 0, h.Factory.afterSetFilter), h.Factory.addGetterSetter(k.Node, "embossBlend", !1, void 0, h.Factory.afterSetFilter), we;
}
var xe = {}, an;
function mr() {
  if (an) return xe;
  an = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.Enhance = void 0;
  const h = tt(), k = ot(), O = et();
  function R(b, c, o, g, _) {
    const v = o - c, w = _ - g;
    if (v === 0)
      return g + w / 2;
    if (w === 0)
      return g;
    let P = (b - c) / v;
    return P = w * P + g, P;
  }
  const m = function(b) {
    const c = b.data, o = c.length;
    let g = c[0], _ = g, v, w = c[1], P = w, u, l = c[2], y = l, T;
    const E = this.enhance();
    if (E === 0)
      return;
    for (let f = 0; f < o; f += 4)
      v = c[f + 0], v < g ? g = v : v > _ && (_ = v), u = c[f + 1], u < w ? w = u : u > P && (P = u), T = c[f + 2], T < l ? l = T : T > y && (y = T);
    _ === g && (_ = 255, g = 0), P === w && (P = 255, w = 0), y === l && (y = 255, l = 0);
    let i, a, S, A, M, G, r, d, n;
    E > 0 ? (a = _ + E * (255 - _), S = g - E * (g - 0), M = P + E * (255 - P), G = w - E * (w - 0), d = y + E * (255 - y), n = l - E * (l - 0)) : (i = (_ + g) * 0.5, a = _ + E * (_ - i), S = g + E * (g - i), A = (P + w) * 0.5, M = P + E * (P - A), G = w + E * (w - A), r = (y + l) * 0.5, d = y + E * (y - r), n = l + E * (l - r));
    for (let f = 0; f < o; f += 4)
      c[f + 0] = R(c[f + 0], g, _, S, a), c[f + 1] = R(c[f + 1], w, P, G, M), c[f + 2] = R(c[f + 2], l, y, n, d);
  };
  return xe.Enhance = m, h.Factory.addGetterSetter(k.Node, "enhance", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), xe;
}
var Pe = {}, on;
function vr() {
  if (on) return Pe;
  on = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.Grayscale = void 0;
  const h = function(k) {
    const O = k.data, R = O.length;
    for (let m = 0; m < R; m += 4) {
      const b = 0.34 * O[m] + 0.5 * O[m + 1] + 0.16 * O[m + 2];
      O[m] = b, O[m + 1] = b, O[m + 2] = b;
    }
  };
  return Pe.Grayscale = h, Pe;
}
var Te = {}, ln;
function yr() {
  if (ln) return Te;
  ln = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.HSL = void 0;
  const h = tt(), k = ot(), O = et();
  h.Factory.addGetterSetter(k.Node, "hue", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(k.Node, "saturation", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(k.Node, "luminance", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter);
  const R = function(m) {
    const b = m.data, c = b.length, o = 1, g = Math.pow(2, this.saturation()), _ = Math.abs(this.hue() + 360) % 360, v = this.luminance() * 127, w = o * g * Math.cos(_ * Math.PI / 180), P = o * g * Math.sin(_ * Math.PI / 180), u = 0.299 * o + 0.701 * w + 0.167 * P, l = 0.587 * o - 0.587 * w + 0.33 * P, y = 0.114 * o - 0.114 * w - 0.497 * P, T = 0.299 * o - 0.299 * w - 0.328 * P, E = 0.587 * o + 0.413 * w + 0.035 * P, i = 0.114 * o - 0.114 * w + 0.293 * P, a = 0.299 * o - 0.3 * w + 1.25 * P, S = 0.587 * o - 0.586 * w - 1.05 * P, A = 0.114 * o + 0.886 * w - 0.2 * P;
    let M, G, r, d;
    for (let n = 0; n < c; n += 4)
      M = b[n + 0], G = b[n + 1], r = b[n + 2], d = b[n + 3], b[n + 0] = u * M + l * G + y * r + v, b[n + 1] = T * M + E * G + i * r + v, b[n + 2] = a * M + S * G + A * r + v, b[n + 3] = d;
  };
  return Te.HSL = R, Te;
}
var Ae = {}, hn;
function br() {
  if (hn) return Ae;
  hn = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.HSV = void 0;
  const h = tt(), k = ot(), O = et(), R = function(m) {
    const b = m.data, c = b.length, o = Math.pow(2, this.value()), g = Math.pow(2, this.saturation()), _ = Math.abs(this.hue() + 360) % 360, v = o * g * Math.cos(_ * Math.PI / 180), w = o * g * Math.sin(_ * Math.PI / 180), P = 0.299 * o + 0.701 * v + 0.167 * w, u = 0.587 * o - 0.587 * v + 0.33 * w, l = 0.114 * o - 0.114 * v - 0.497 * w, y = 0.299 * o - 0.299 * v - 0.328 * w, T = 0.587 * o + 0.413 * v + 0.035 * w, E = 0.114 * o - 0.114 * v + 0.293 * w, i = 0.299 * o - 0.3 * v + 1.25 * w, a = 0.587 * o - 0.586 * v - 1.05 * w, S = 0.114 * o + 0.886 * v - 0.2 * w;
    let A, M, G, r;
    for (let d = 0; d < c; d += 4)
      A = b[d + 0], M = b[d + 1], G = b[d + 2], r = b[d + 3], b[d + 0] = P * A + u * M + l * G, b[d + 1] = y * A + T * M + E * G, b[d + 2] = i * A + a * M + S * G, b[d + 3] = r;
  };
  return Ae.HSV = R, h.Factory.addGetterSetter(k.Node, "hue", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(k.Node, "saturation", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(k.Node, "value", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Ae;
}
var ke = {}, cn;
function Sr() {
  if (cn) return ke;
  cn = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.Invert = void 0;
  const h = function(k) {
    const O = k.data, R = O.length;
    for (let m = 0; m < R; m += 4)
      O[m] = 255 - O[m], O[m + 1] = 255 - O[m + 1], O[m + 2] = 255 - O[m + 2];
  };
  return ke.Invert = h, ke;
}
var Ee = {}, dn;
function Cr() {
  if (dn) return Ee;
  dn = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.Kaleidoscope = void 0;
  const h = tt(), k = ot(), O = at(), R = et(), m = function(o, g, _) {
    const v = o.data, w = g.data, P = o.width, u = o.height, l = _.polarCenterX || P / 2, y = _.polarCenterY || u / 2;
    let T = Math.sqrt(l * l + y * y), E = P - l, i = u - y;
    const a = Math.sqrt(E * E + i * i);
    T = a > T ? a : T;
    const S = u, A = P, M = 360 / A * Math.PI / 180;
    for (let G = 0; G < A; G += 1) {
      const r = Math.sin(G * M), d = Math.cos(G * M);
      for (let n = 0; n < S; n += 1) {
        E = Math.floor(l + T * n / S * d), i = Math.floor(y + T * n / S * r);
        let f = (i * P + E) * 4;
        const x = v[f + 0], t = v[f + 1], s = v[f + 2], e = v[f + 3];
        f = (G + n * P) * 4, w[f + 0] = x, w[f + 1] = t, w[f + 2] = s, w[f + 3] = e;
      }
    }
  }, b = function(o, g, _) {
    const v = o.data, w = g.data, P = o.width, u = o.height, l = _.polarCenterX || P / 2, y = _.polarCenterY || u / 2;
    let T = Math.sqrt(l * l + y * y), E = P - l, i = u - y;
    const a = Math.sqrt(E * E + i * i);
    T = a > T ? a : T;
    const S = u, A = P, M = 0;
    let G, r;
    for (E = 0; E < P; E += 1)
      for (i = 0; i < u; i += 1) {
        const d = E - l, n = i - y, f = Math.sqrt(d * d + n * n) * S / T;
        let x = (Math.atan2(n, d) * 180 / Math.PI + 360 + M) % 360;
        x = x * A / 360, G = Math.floor(x), r = Math.floor(f);
        let t = (r * P + G) * 4;
        const s = v[t + 0], e = v[t + 1], p = v[t + 2], C = v[t + 3];
        t = (i * P + E) * 4, w[t + 0] = s, w[t + 1] = e, w[t + 2] = p, w[t + 3] = C;
      }
  }, c = function(o) {
    const g = o.width, _ = o.height;
    let v, w, P, u, l, y, T, E, i, a, S = Math.round(this.kaleidoscopePower());
    const A = Math.round(this.kaleidoscopeAngle()), M = Math.floor(g * (A % 360) / 360);
    if (S < 1)
      return;
    const G = O.Util.createCanvasElement();
    G.width = g, G.height = _;
    const r = G.getContext("2d").getImageData(0, 0, g, _);
    O.Util.releaseCanvas(G), m(o, r, {
      polarCenterX: g / 2,
      polarCenterY: _ / 2
    });
    let d = g / Math.pow(2, S);
    for (; d <= 8; )
      d = d * 2, S -= 1;
    d = Math.ceil(d);
    let n = d, f = 0, x = n, t = 1;
    for (M + d > g && (f = n, x = 0, t = -1), w = 0; w < _; w += 1)
      for (v = f; v !== x; v += t)
        P = Math.round(v + M) % g, i = (g * w + P) * 4, l = r.data[i + 0], y = r.data[i + 1], T = r.data[i + 2], E = r.data[i + 3], a = (g * w + v) * 4, r.data[a + 0] = l, r.data[a + 1] = y, r.data[a + 2] = T, r.data[a + 3] = E;
    for (w = 0; w < _; w += 1)
      for (n = Math.floor(d), u = 0; u < S; u += 1) {
        for (v = 0; v < n + 1; v += 1)
          i = (g * w + v) * 4, l = r.data[i + 0], y = r.data[i + 1], T = r.data[i + 2], E = r.data[i + 3], a = (g * w + n * 2 - v - 1) * 4, r.data[a + 0] = l, r.data[a + 1] = y, r.data[a + 2] = T, r.data[a + 3] = E;
        n *= 2;
      }
    b(r, o, { polarRotation: 0 });
  };
  return Ee.Kaleidoscope = c, h.Factory.addGetterSetter(k.Node, "kaleidoscopePower", 2, (0, R.getNumberValidator)(), h.Factory.afterSetFilter), h.Factory.addGetterSetter(k.Node, "kaleidoscopeAngle", 0, (0, R.getNumberValidator)(), h.Factory.afterSetFilter), Ee;
}
var Re = {}, un;
function wr() {
  if (un) return Re;
  un = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.Mask = void 0;
  const h = tt(), k = ot(), O = et();
  function R(P, u, l) {
    let y = (l * P.width + u) * 4;
    const T = [];
    return T.push(P.data[y++], P.data[y++], P.data[y++], P.data[y++]), T;
  }
  function m(P, u) {
    return Math.sqrt(Math.pow(P[0] - u[0], 2) + Math.pow(P[1] - u[1], 2) + Math.pow(P[2] - u[2], 2));
  }
  function b(P) {
    const u = [0, 0, 0];
    for (let l = 0; l < P.length; l++)
      u[0] += P[l][0], u[1] += P[l][1], u[2] += P[l][2];
    return u[0] /= P.length, u[1] /= P.length, u[2] /= P.length, u;
  }
  function c(P, u) {
    const l = R(P, 0, 0), y = R(P, P.width - 1, 0), T = R(P, 0, P.height - 1), E = R(P, P.width - 1, P.height - 1), i = u || 10;
    if (m(l, y) < i && m(y, E) < i && m(E, T) < i && m(T, l) < i) {
      const a = b([y, l, E, T]), S = [];
      for (let A = 0; A < P.width * P.height; A++) {
        const M = m(a, [
          P.data[A * 4],
          P.data[A * 4 + 1],
          P.data[A * 4 + 2]
        ]);
        S[A] = M < i ? 0 : 255;
      }
      return S;
    }
  }
  function o(P, u) {
    for (let l = 0; l < P.width * P.height; l++)
      P.data[4 * l + 3] = u[l];
  }
  function g(P, u, l) {
    const y = [1, 1, 1, 1, 0, 1, 1, 1, 1], T = Math.round(Math.sqrt(y.length)), E = Math.floor(T / 2), i = [];
    for (let a = 0; a < l; a++)
      for (let S = 0; S < u; S++) {
        const A = a * u + S;
        let M = 0;
        for (let G = 0; G < T; G++)
          for (let r = 0; r < T; r++) {
            const d = a + G - E, n = S + r - E;
            if (d >= 0 && d < l && n >= 0 && n < u) {
              const f = d * u + n, x = y[G * T + r];
              M += P[f] * x;
            }
          }
        i[A] = M === 255 * 8 ? 255 : 0;
      }
    return i;
  }
  function _(P, u, l) {
    const y = [1, 1, 1, 1, 1, 1, 1, 1, 1], T = Math.round(Math.sqrt(y.length)), E = Math.floor(T / 2), i = [];
    for (let a = 0; a < l; a++)
      for (let S = 0; S < u; S++) {
        const A = a * u + S;
        let M = 0;
        for (let G = 0; G < T; G++)
          for (let r = 0; r < T; r++) {
            const d = a + G - E, n = S + r - E;
            if (d >= 0 && d < l && n >= 0 && n < u) {
              const f = d * u + n, x = y[G * T + r];
              M += P[f] * x;
            }
          }
        i[A] = M >= 255 * 4 ? 255 : 0;
      }
    return i;
  }
  function v(P, u, l) {
    const y = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], T = Math.round(Math.sqrt(y.length)), E = Math.floor(T / 2), i = [];
    for (let a = 0; a < l; a++)
      for (let S = 0; S < u; S++) {
        const A = a * u + S;
        let M = 0;
        for (let G = 0; G < T; G++)
          for (let r = 0; r < T; r++) {
            const d = a + G - E, n = S + r - E;
            if (d >= 0 && d < l && n >= 0 && n < u) {
              const f = d * u + n, x = y[G * T + r];
              M += P[f] * x;
            }
          }
        i[A] = M;
      }
    return i;
  }
  const w = function(P) {
    const u = this.threshold();
    let l = c(P, u);
    return l && (l = g(l, P.width, P.height), l = _(l, P.width, P.height), l = v(l, P.width, P.height), o(P, l)), P;
  };
  return Re.Mask = w, h.Factory.addGetterSetter(k.Node, "threshold", 0, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Re;
}
var Fe = {}, fn;
function xr() {
  if (fn) return Fe;
  fn = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.Noise = void 0;
  const h = tt(), k = ot(), O = et(), R = function(m) {
    const b = this.noise() * 255, c = m.data, o = c.length, g = b / 2;
    for (let _ = 0; _ < o; _ += 4)
      c[_ + 0] += g - 2 * g * Math.random(), c[_ + 1] += g - 2 * g * Math.random(), c[_ + 2] += g - 2 * g * Math.random();
  };
  return Fe.Noise = R, h.Factory.addGetterSetter(k.Node, "noise", 0.2, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Fe;
}
var Me = {}, gn;
function Pr() {
  if (gn) return Me;
  gn = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.Pixelate = void 0;
  const h = tt(), k = at(), O = ot(), R = et(), m = function(b) {
    let c = Math.ceil(this.pixelSize()), o = b.width, g = b.height, _, v, w, P, u, l, y, T = Math.ceil(o / c), E = Math.ceil(g / c), i, a, S, A, M, G, r, d = b.data;
    if (c <= 0) {
      k.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (M = 0; M < T; M += 1)
      for (G = 0; G < E; G += 1) {
        for (P = 0, u = 0, l = 0, y = 0, i = M * c, a = i + c, S = G * c, A = S + c, r = 0, _ = i; _ < a; _ += 1)
          if (!(_ >= o))
            for (v = S; v < A; v += 1)
              v >= g || (w = (o * v + _) * 4, P += d[w + 0], u += d[w + 1], l += d[w + 2], y += d[w + 3], r += 1);
        for (P = P / r, u = u / r, l = l / r, y = y / r, _ = i; _ < a; _ += 1)
          if (!(_ >= o))
            for (v = S; v < A; v += 1)
              v >= g || (w = (o * v + _) * 4, d[w + 0] = P, d[w + 1] = u, d[w + 2] = l, d[w + 3] = y);
      }
  };
  return Me.Pixelate = m, h.Factory.addGetterSetter(O.Node, "pixelSize", 8, (0, R.getNumberValidator)(), h.Factory.afterSetFilter), Me;
}
var Ne = {}, pn;
function Tr() {
  if (pn) return Ne;
  pn = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.Posterize = void 0;
  const h = tt(), k = ot(), O = et(), R = function(m) {
    const b = Math.round(this.levels() * 254) + 1, c = m.data, o = c.length, g = 255 / b;
    for (let _ = 0; _ < o; _ += 1)
      c[_] = Math.floor(c[_] / g) * g;
  };
  return Ne.Posterize = R, h.Factory.addGetterSetter(k.Node, "levels", 0.5, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Ne;
}
var Oe = {}, _n;
function Ar() {
  if (_n) return Oe;
  _n = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.RGB = void 0;
  const h = tt(), k = ot(), O = et(), R = function(m) {
    const b = m.data, c = b.length, o = this.red(), g = this.green(), _ = this.blue();
    for (let v = 0; v < c; v += 4) {
      const w = (0.34 * b[v] + 0.5 * b[v + 1] + 0.16 * b[v + 2]) / 255;
      b[v] = w * o, b[v + 1] = w * g, b[v + 2] = w * _, b[v + 3] = b[v + 3];
    }
  };
  return Oe.RGB = R, h.Factory.addGetterSetter(k.Node, "red", 0, function(m) {
    return this._filterUpToDate = !1, m > 255 ? 255 : m < 0 ? 0 : Math.round(m);
  }), h.Factory.addGetterSetter(k.Node, "green", 0, function(m) {
    return this._filterUpToDate = !1, m > 255 ? 255 : m < 0 ? 0 : Math.round(m);
  }), h.Factory.addGetterSetter(k.Node, "blue", 0, O.RGBComponent, h.Factory.afterSetFilter), Oe;
}
var Ge = {}, mn;
function kr() {
  if (mn) return Ge;
  mn = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.RGBA = void 0;
  const h = tt(), k = ot(), O = et(), R = function(m) {
    const b = m.data, c = b.length, o = this.red(), g = this.green(), _ = this.blue(), v = this.alpha();
    for (let w = 0; w < c; w += 4) {
      const P = 1 - v;
      b[w] = o * v + b[w] * P, b[w + 1] = g * v + b[w + 1] * P, b[w + 2] = _ * v + b[w + 2] * P;
    }
  };
  return Ge.RGBA = R, h.Factory.addGetterSetter(k.Node, "red", 0, function(m) {
    return this._filterUpToDate = !1, m > 255 ? 255 : m < 0 ? 0 : Math.round(m);
  }), h.Factory.addGetterSetter(k.Node, "green", 0, function(m) {
    return this._filterUpToDate = !1, m > 255 ? 255 : m < 0 ? 0 : Math.round(m);
  }), h.Factory.addGetterSetter(k.Node, "blue", 0, O.RGBComponent, h.Factory.afterSetFilter), h.Factory.addGetterSetter(k.Node, "alpha", 1, function(m) {
    return this._filterUpToDate = !1, m > 1 ? 1 : m < 0 ? 0 : m;
  }), Ge;
}
var Le = {}, vn;
function Er() {
  if (vn) return Le;
  vn = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.Sepia = void 0;
  const h = function(k) {
    const O = k.data, R = O.length;
    for (let m = 0; m < R; m += 4) {
      const b = O[m + 0], c = O[m + 1], o = O[m + 2];
      O[m + 0] = Math.min(255, b * 0.393 + c * 0.769 + o * 0.189), O[m + 1] = Math.min(255, b * 0.349 + c * 0.686 + o * 0.168), O[m + 2] = Math.min(255, b * 0.272 + c * 0.534 + o * 0.131);
    }
  };
  return Le.Sepia = h, Le;
}
var De = {}, yn;
function Rr() {
  if (yn) return De;
  yn = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.Solarize = void 0;
  const h = function(k) {
    const O = k.data, R = k.width, m = k.height, b = R * 4;
    let c = m;
    do {
      const o = (c - 1) * b;
      let g = R;
      do {
        const _ = o + (g - 1) * 4;
        let v = O[_], w = O[_ + 1], P = O[_ + 2];
        v > 127 && (v = 255 - v), w > 127 && (w = 255 - w), P > 127 && (P = 255 - P), O[_] = v, O[_ + 1] = w, O[_ + 2] = P;
      } while (--g);
    } while (--c);
  };
  return De.Solarize = h, De;
}
var Ie = {}, bn;
function Fr() {
  if (bn) return Ie;
  bn = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.Threshold = void 0;
  const h = tt(), k = ot(), O = et(), R = function(m) {
    const b = this.threshold() * 255, c = m.data, o = c.length;
    for (let g = 0; g < o; g += 1)
      c[g] = c[g] < b ? 0 : 255;
  };
  return Ie.Threshold = R, h.Factory.addGetterSetter(k.Node, "threshold", 0.5, (0, O.getNumberValidator)(), h.Factory.afterSetFilter), Ie;
}
var Sn;
function Mr() {
  if (Sn) return Zt;
  Sn = 1, Object.defineProperty(Zt, "__esModule", { value: !0 }), Zt.Konva = void 0;
  const h = Zn(), k = Jn(), O = er(), R = ir(), m = nr(), b = rr(), c = sr(), o = Gn(), g = pi(), _ = Dn(), v = ar(), w = or(), P = lr(), u = hr(), l = In(), y = cr(), T = dr(), E = ur(), i = fr(), a = gr(), S = pr(), A = _r(), M = mr(), G = vr(), r = yr(), d = br(), n = Sr(), f = Cr(), x = wr(), t = xr(), s = Pr(), e = Tr(), p = Ar(), C = kr(), F = Er(), N = Rr(), D = Fr();
  return Zt.Konva = h.Konva.Util._assign(h.Konva, {
    Arc: k.Arc,
    Arrow: O.Arrow,
    Circle: R.Circle,
    Ellipse: m.Ellipse,
    Image: b.Image,
    Label: c.Label,
    Tag: c.Tag,
    Line: o.Line,
    Path: g.Path,
    Rect: _.Rect,
    RegularPolygon: v.RegularPolygon,
    Ring: w.Ring,
    Sprite: P.Sprite,
    Star: u.Star,
    Text: l.Text,
    TextPath: y.TextPath,
    Transformer: T.Transformer,
    Wedge: E.Wedge,
    Filters: {
      Blur: i.Blur,
      Brighten: a.Brighten,
      Contrast: S.Contrast,
      Emboss: A.Emboss,
      Enhance: M.Enhance,
      Grayscale: G.Grayscale,
      HSL: r.HSL,
      HSV: d.HSV,
      Invert: n.Invert,
      Kaleidoscope: f.Kaleidoscope,
      Mask: x.Mask,
      Noise: t.Noise,
      Pixelate: s.Pixelate,
      Posterize: e.Posterize,
      RGB: p.RGB,
      RGBA: C.RGBA,
      Sepia: F.Sepia,
      Solarize: N.Solarize,
      Threshold: D.Threshold
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
    const k = h.getLayer() || h.getStage();
    k && k.batchDraw();
  }
}
const wn = { key: !0, style: !0, elm: !0, isRootInsert: !0 }, ni = ".vue-konva-event";
function Bn(h, k, O, R) {
  const m = h.__konvaNode, b = {};
  let c = !1;
  for (let o in O) {
    if (wn.hasOwnProperty(o))
      continue;
    const g = o.slice(0, 2) === "on", _ = O[o] !== k[o];
    if (g && _) {
      let v = o.slice(2).toLowerCase();
      v.slice(0, 7) === "content" && (v = "content" + v.slice(7, 1).toUpperCase() + v.slice(8)), m == null || m.off(v + ni, O[o]);
    }
    !k.hasOwnProperty(o) && (m == null || m.setAttr(o, void 0));
  }
  for (let o in k) {
    if (wn.hasOwnProperty(o))
      continue;
    let g = o.slice(0, 2) === "on";
    const _ = O[o] !== k[o];
    if (g && _) {
      let v = o.slice(2).toLowerCase();
      v.slice(0, 7) === "content" && (v = "content" + v.slice(7, 1).toUpperCase() + v.slice(8)), k[o] && (m == null || m.off(v + ni), m == null || m.on(v + ni, k[o]));
    }
    !g && (k[o] !== O[o] || R && k[o] !== (m == null ? void 0 : m.getAttr(o))) && (c = !0, b[o] = k[o]);
  }
  c && m && (m.setAttrs(b), He(m));
}
const Lr = "v";
function Dr(h) {
  function k(O) {
    return O != null && O.__konvaNode ? O : O != null && O.parent ? k(O.parent) : (console.error("vue-konva error: Can not find parent node"), null);
  }
  return k(h.parent);
}
function Un(h) {
  return h.component ? h.component.__konvaNode || Un(h.component.subTree) : null;
}
function Ir(h) {
  const { el: k, component: O } = h, R = Un(h);
  if (k != null && k.tagName && O && !R) {
    const m = k.tagName.toLowerCase();
    return console.error(
      `vue-konva error: You are trying to render "${m}" inside your component tree. Looks like it is not a Konva node. You can render only Konva components inside the Stage.`
    ), null;
  }
  return R;
}
function Br(h) {
  const k = (m) => !!(m != null && m.hasOwnProperty("component")), O = (m) => Array.isArray(m), R = (m) => k(m) ? [m, ...R(m.children)] : O(m) ? m.flatMap(R) : [];
  return R(h.children);
}
function Vn(h, k) {
  const O = Br(h), R = [];
  O.forEach((b) => {
    const c = Ir(b);
    c && R.push(c);
  });
  let m = !1;
  R.forEach((b, c) => {
    b.getZIndex() !== c && (b.setZIndex(c), m = !0);
  }), m && He(k);
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
  setup(h, { attrs: k, slots: O, expose: R }) {
    const m = ci();
    if (!m) return;
    const b = kn({}), c = Pt(null), o = new nt.Stage({
      width: h.config.width,
      height: h.config.height,
      container: document.createElement("div")
      // Fake container. Will be replaced
    });
    m.__konvaNode = o, v();
    function g() {
      return m == null ? void 0 : m.__konvaNode;
    }
    function _() {
      return m == null ? void 0 : m.__konvaNode;
    }
    function v() {
      if (!m) return;
      const w = b || {}, P = {
        ...k,
        ...h.config
      };
      Bn(m, P, w, h.__useStrictMode), Object.assign(b, P);
    }
    return di(() => {
      c.value && (c.value.innerHTML = "", o.container(c.value)), v();
    }), En(() => {
      v(), Vn(m.subTree, o);
    }), Wn(() => {
      o.destroy();
    }), Rn(() => h.config, v, { deep: !0 }), R({
      getStage: _,
      getNode: g
    }), console.log(k), () => {
      var w;
      return Fn("div", { ref: c, style: k == null ? void 0 : k.style }, (w = O.default) == null ? void 0 : w.call(O));
    };
  }
}), Vr = ".vue-konva-event", Hr = {
  Group: !0,
  Layer: !0,
  FastLayer: !0,
  Label: !0
};
function qr(h, k) {
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
    setup(O, { attrs: R, slots: m, expose: b }) {
      const c = ci();
      if (!c) return;
      const o = kn({}), g = new k();
      c.__konvaNode = g, c.vnode.__konvaNode = g, w();
      function _() {
        return c == null ? void 0 : c.__konvaNode;
      }
      function v() {
        return c == null ? void 0 : c.__konvaNode;
      }
      function w() {
        if (!c) return;
        const u = {};
        for (const T in c == null ? void 0 : c.vnode.props)
          T.slice(0, 2) === "on" && (u[T] = c.vnode.props[T]);
        const l = o || {}, y = {
          ...R,
          ...O.config,
          ...u
        };
        Bn(c, y, l, O.__useStrictMode), Object.assign(o, y);
      }
      di(() => {
        var u;
        const l = (u = Dr(c)) == null ? void 0 : u.__konvaNode;
        l && "add" in l && l.add(g), He(g);
      }), zn(() => {
        He(g), g.destroy(), g.off(Vr);
      }), En(() => {
        w(), Vn(c.subTree, g);
      }), Rn(() => O.config, w, { deep: !0 }), b({
        getStage: v,
        getNode: _
      });
      const P = Hr.hasOwnProperty(h);
      return () => {
        var u;
        return P ? Fn("template", {}, (u = m.default) == null ? void 0 : u.call(m)) : null;
      };
    }
  });
}
typeof window < "u" && !window.Konva && require("konva");
const Wr = {
  install: (h, k) => {
    const O = (k == null ? void 0 : k.prefix) || Lr, R = {
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
      ...k == null ? void 0 : k.customNodes
    };
    [
      Ur,
      ...Object.entries(R).map(
        ([m, b]) => qr(m, b)
      )
    ].forEach((m) => {
      h.component(`${O}${m.name}`, m);
    });
  }
};
var zr = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, ri = Math.ceil, St = Math.floor, mt = "[BigNumber Error] ", xn = mt + "Number primitive has more than 15 significant digits: ", xt = 1e14, Z = 14, si = 9007199254740991, ai = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ut = 1e7, ct = 1e9;
function Hn(h) {
  var k, O, R, m = i.prototype = { constructor: i, toString: null, valueOf: null }, b = new i(1), c = 20, o = 4, g = -7, _ = 21, v = -1e7, w = 1e7, P = !1, u = 1, l = 0, y = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, T = "0123456789abcdefghijklmnopqrstuvwxyz", E = !0;
  function i(r, d) {
    var n, f, x, t, s, e, p, C, F = this;
    if (!(F instanceof i)) return new i(r, d);
    if (d == null) {
      if (r && r._isBigNumber === !0) {
        F.s = r.s, !r.c || r.e > w ? F.c = F.e = null : r.e < v ? F.c = [F.e = 0] : (F.e = r.e, F.c = r.c.slice());
        return;
      }
      if ((e = typeof r == "number") && r * 0 == 0) {
        if (F.s = 1 / r < 0 ? (r = -r, -1) : 1, r === ~~r) {
          for (t = 0, s = r; s >= 10; s /= 10, t++) ;
          t > w ? F.c = F.e = null : (F.e = t, F.c = [r]);
          return;
        }
        C = String(r);
      } else {
        if (!zr.test(C = String(r))) return R(F, C, e);
        F.s = C.charCodeAt(0) == 45 ? (C = C.slice(1), -1) : 1;
      }
      (t = C.indexOf(".")) > -1 && (C = C.replace(".", "")), (s = C.search(/e/i)) > 0 ? (t < 0 && (t = s), t += +C.slice(s + 1), C = C.substring(0, s)) : t < 0 && (t = C.length);
    } else {
      if (rt(d, 2, T.length, "Base"), d == 10 && E)
        return F = new i(r), M(F, c + F.e + 1, o);
      if (C = String(r), e = typeof r == "number") {
        if (r * 0 != 0) return R(F, C, e, d);
        if (F.s = 1 / r < 0 ? (C = C.slice(1), -1) : 1, i.DEBUG && C.replace(/^0\.0*|\./, "").length > 15)
          throw Error(xn + r);
      } else
        F.s = C.charCodeAt(0) === 45 ? (C = C.slice(1), -1) : 1;
      for (n = T.slice(0, d), t = s = 0, p = C.length; s < p; s++)
        if (n.indexOf(f = C.charAt(s)) < 0) {
          if (f == ".") {
            if (s > t) {
              t = p;
              continue;
            }
          } else if (!x && (C == C.toUpperCase() && (C = C.toLowerCase()) || C == C.toLowerCase() && (C = C.toUpperCase()))) {
            x = !0, s = -1, t = 0;
            continue;
          }
          return R(F, String(r), e, d);
        }
      e = !1, C = O(C, d, 10, F.s), (t = C.indexOf(".")) > -1 ? C = C.replace(".", "") : t = C.length;
    }
    for (s = 0; C.charCodeAt(s) === 48; s++) ;
    for (p = C.length; C.charCodeAt(--p) === 48; ) ;
    if (C = C.slice(s, ++p)) {
      if (p -= s, e && i.DEBUG && p > 15 && (r > si || r !== St(r)))
        throw Error(xn + F.s * r);
      if ((t = t - s - 1) > w)
        F.c = F.e = null;
      else if (t < v)
        F.c = [F.e = 0];
      else {
        if (F.e = t, F.c = [], s = (t + 1) % Z, t < 0 && (s += Z), s < p) {
          for (s && F.c.push(+C.slice(0, s)), p -= Z; s < p; )
            F.c.push(+C.slice(s, s += Z));
          s = Z - (C = C.slice(s)).length;
        } else
          s -= p;
        for (; s--; C += "0") ;
        F.c.push(+C);
      }
    } else
      F.c = [F.e = 0];
  }
  i.clone = Hn, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = function(r) {
    var d, n;
    if (r != null)
      if (typeof r == "object") {
        if (r.hasOwnProperty(d = "DECIMAL_PLACES") && (n = r[d], rt(n, 0, ct, d), c = n), r.hasOwnProperty(d = "ROUNDING_MODE") && (n = r[d], rt(n, 0, 8, d), o = n), r.hasOwnProperty(d = "EXPONENTIAL_AT") && (n = r[d], n && n.pop ? (rt(n[0], -ct, 0, d), rt(n[1], 0, ct, d), g = n[0], _ = n[1]) : (rt(n, -ct, ct, d), g = -(_ = n < 0 ? -n : n))), r.hasOwnProperty(d = "RANGE"))
          if (n = r[d], n && n.pop)
            rt(n[0], -ct, -1, d), rt(n[1], 1, ct, d), v = n[0], w = n[1];
          else if (rt(n, -ct, ct, d), n)
            v = -(w = n < 0 ? -n : n);
          else
            throw Error(mt + d + " cannot be zero: " + n);
        if (r.hasOwnProperty(d = "CRYPTO"))
          if (n = r[d], n === !!n)
            if (n)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                P = n;
              else
                throw P = !n, Error(mt + "crypto unavailable");
            else
              P = n;
          else
            throw Error(mt + d + " not true or false: " + n);
        if (r.hasOwnProperty(d = "MODULO_MODE") && (n = r[d], rt(n, 0, 9, d), u = n), r.hasOwnProperty(d = "POW_PRECISION") && (n = r[d], rt(n, 0, ct, d), l = n), r.hasOwnProperty(d = "FORMAT"))
          if (n = r[d], typeof n == "object") y = n;
          else throw Error(mt + d + " not an object: " + n);
        if (r.hasOwnProperty(d = "ALPHABET"))
          if (n = r[d], typeof n == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(n))
            E = n.slice(0, 10) == "0123456789", T = n;
          else
            throw Error(mt + d + " invalid: " + n);
      } else
        throw Error(mt + "Object expected: " + r);
    return {
      DECIMAL_PLACES: c,
      ROUNDING_MODE: o,
      EXPONENTIAL_AT: [g, _],
      RANGE: [v, w],
      CRYPTO: P,
      MODULO_MODE: u,
      POW_PRECISION: l,
      FORMAT: y,
      ALPHABET: T
    };
  }, i.isBigNumber = function(r) {
    if (!r || r._isBigNumber !== !0) return !1;
    if (!i.DEBUG) return !0;
    var d, n, f = r.c, x = r.e, t = r.s;
    t: if ({}.toString.call(f) == "[object Array]") {
      if ((t === 1 || t === -1) && x >= -ct && x <= ct && x === St(x)) {
        if (f[0] === 0) {
          if (x === 0 && f.length === 1) return !0;
          break t;
        }
        if (d = (x + 1) % Z, d < 1 && (d += Z), String(f[0]).length == d) {
          for (d = 0; d < f.length; d++)
            if (n = f[d], n < 0 || n >= xt || n !== St(n)) break t;
          if (n !== 0) return !0;
        }
      }
    } else if (f === null && x === null && (t === null || t === 1 || t === -1))
      return !0;
    throw Error(mt + "Invalid BigNumber: " + r);
  }, i.maximum = i.max = function() {
    return S(arguments, -1);
  }, i.minimum = i.min = function() {
    return S(arguments, 1);
  }, i.random = function() {
    var r = 9007199254740992, d = Math.random() * r & 2097151 ? function() {
      return St(Math.random() * r);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(n) {
      var f, x, t, s, e, p = 0, C = [], F = new i(b);
      if (n == null ? n = c : rt(n, 0, ct), s = ri(n / Z), P)
        if (crypto.getRandomValues) {
          for (f = crypto.getRandomValues(new Uint32Array(s *= 2)); p < s; )
            e = f[p] * 131072 + (f[p + 1] >>> 11), e >= 9e15 ? (x = crypto.getRandomValues(new Uint32Array(2)), f[p] = x[0], f[p + 1] = x[1]) : (C.push(e % 1e14), p += 2);
          p = s / 2;
        } else if (crypto.randomBytes) {
          for (f = crypto.randomBytes(s *= 7); p < s; )
            e = (f[p] & 31) * 281474976710656 + f[p + 1] * 1099511627776 + f[p + 2] * 4294967296 + f[p + 3] * 16777216 + (f[p + 4] << 16) + (f[p + 5] << 8) + f[p + 6], e >= 9e15 ? crypto.randomBytes(7).copy(f, p) : (C.push(e % 1e14), p += 7);
          p = s / 7;
        } else
          throw P = !1, Error(mt + "crypto unavailable");
      if (!P)
        for (; p < s; )
          e = d(), e < 9e15 && (C[p++] = e % 1e14);
      for (s = C[--p], n %= Z, s && n && (e = ai[Z - n], C[p] = St(s / e) * e); C[p] === 0; C.pop(), p--) ;
      if (p < 0)
        C = [t = 0];
      else {
        for (t = -1; C[0] === 0; C.splice(0, 1), t -= Z) ;
        for (p = 1, e = C[0]; e >= 10; e /= 10, p++) ;
        p < Z && (t -= Z - p);
      }
      return F.e = t, F.c = C, F;
    };
  }(), i.sum = function() {
    for (var r = 1, d = arguments, n = new i(d[0]); r < d.length; ) n = n.plus(d[r++]);
    return n;
  }, O = /* @__PURE__ */ function() {
    var r = "0123456789";
    function d(n, f, x, t) {
      for (var s, e = [0], p, C = 0, F = n.length; C < F; ) {
        for (p = e.length; p--; e[p] *= f) ;
        for (e[0] += t.indexOf(n.charAt(C++)), s = 0; s < e.length; s++)
          e[s] > x - 1 && (e[s + 1] == null && (e[s + 1] = 0), e[s + 1] += e[s] / x | 0, e[s] %= x);
      }
      return e.reverse();
    }
    return function(n, f, x, t, s) {
      var e, p, C, F, N, D, I, V, B = n.indexOf("."), H = c, q = o;
      for (B >= 0 && (F = l, l = 0, n = n.replace(".", ""), V = new i(f), D = V.pow(n.length - B), l = F, V.c = d(
        Ot(bt(D.c), D.e, "0"),
        10,
        x,
        r
      ), V.e = V.c.length), I = d(n, f, x, s ? (e = T, r) : (e = r, T)), C = F = I.length; I[--F] == 0; I.pop()) ;
      if (!I[0]) return e.charAt(0);
      if (B < 0 ? --C : (D.c = I, D.e = C, D.s = t, D = k(D, V, H, q, x), I = D.c, N = D.r, C = D.e), p = C + H + 1, B = I[p], F = x / 2, N = N || p < 0 || I[p + 1] != null, N = q < 4 ? (B != null || N) && (q == 0 || q == (D.s < 0 ? 3 : 2)) : B > F || B == F && (q == 4 || N || q == 6 && I[p - 1] & 1 || q == (D.s < 0 ? 8 : 7)), p < 1 || !I[0])
        n = N ? Ot(e.charAt(1), -H, e.charAt(0)) : e.charAt(0);
      else {
        if (I.length = p, N)
          for (--x; ++I[--p] > x; )
            I[p] = 0, p || (++C, I = [1].concat(I));
        for (F = I.length; !I[--F]; ) ;
        for (B = 0, n = ""; B <= F; n += e.charAt(I[B++])) ;
        n = Ot(n, C, e.charAt(0));
      }
      return n;
    };
  }(), k = /* @__PURE__ */ function() {
    function r(f, x, t) {
      var s, e, p, C, F = 0, N = f.length, D = x % Ut, I = x / Ut | 0;
      for (f = f.slice(); N--; )
        p = f[N] % Ut, C = f[N] / Ut | 0, s = I * p + C * D, e = D * p + s % Ut * Ut + F, F = (e / t | 0) + (s / Ut | 0) + I * C, f[N] = e % t;
      return F && (f = [F].concat(f)), f;
    }
    function d(f, x, t, s) {
      var e, p;
      if (t != s)
        p = t > s ? 1 : -1;
      else
        for (e = p = 0; e < t; e++)
          if (f[e] != x[e]) {
            p = f[e] > x[e] ? 1 : -1;
            break;
          }
      return p;
    }
    function n(f, x, t, s) {
      for (var e = 0; t--; )
        f[t] -= e, e = f[t] < x[t] ? 1 : 0, f[t] = e * s + f[t] - x[t];
      for (; !f[0] && f.length > 1; f.splice(0, 1)) ;
    }
    return function(f, x, t, s, e) {
      var p, C, F, N, D, I, V, B, H, q, W, L, U, X, z, Y, $, Q = f.s == x.s ? 1 : -1, j = f.c, K = x.c;
      if (!j || !j[0] || !K || !K[0])
        return new i(
          // Return NaN if either NaN, or both Infinity or 0.
          !f.s || !x.s || (j ? K && j[0] == K[0] : !K) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            j && j[0] == 0 || !K ? Q * 0 : Q / 0
          )
        );
      for (B = new i(Q), H = B.c = [], C = f.e - x.e, Q = t + C + 1, e || (e = xt, C = Ct(f.e / Z) - Ct(x.e / Z), Q = Q / Z | 0), F = 0; K[F] == (j[F] || 0); F++) ;
      if (K[F] > (j[F] || 0) && C--, Q < 0)
        H.push(1), N = !0;
      else {
        for (X = j.length, Y = K.length, F = 0, Q += 2, D = St(e / (K[0] + 1)), D > 1 && (K = r(K, D, e), j = r(j, D, e), Y = K.length, X = j.length), U = Y, q = j.slice(0, Y), W = q.length; W < Y; q[W++] = 0) ;
        $ = K.slice(), $ = [0].concat($), z = K[0], K[1] >= e / 2 && z++;
        do {
          if (D = 0, p = d(K, q, Y, W), p < 0) {
            if (L = q[0], Y != W && (L = L * e + (q[1] || 0)), D = St(L / z), D > 1)
              for (D >= e && (D = e - 1), I = r(K, D, e), V = I.length, W = q.length; d(I, q, V, W) == 1; )
                D--, n(I, Y < V ? $ : K, V, e), V = I.length, p = 1;
            else
              D == 0 && (p = D = 1), I = K.slice(), V = I.length;
            if (V < W && (I = [0].concat(I)), n(q, I, W, e), W = q.length, p == -1)
              for (; d(K, q, Y, W) < 1; )
                D++, n(q, Y < W ? $ : K, W, e), W = q.length;
          } else p === 0 && (D++, q = [0]);
          H[F++] = D, q[0] ? q[W++] = j[U] || 0 : (q = [j[U]], W = 1);
        } while ((U++ < X || q[0] != null) && Q--);
        N = q[0] != null, H[0] || H.splice(0, 1);
      }
      if (e == xt) {
        for (F = 1, Q = H[0]; Q >= 10; Q /= 10, F++) ;
        M(B, t + (B.e = F + C * Z - 1) + 1, s, N);
      } else
        B.e = C, B.r = +N;
      return B;
    };
  }();
  function a(r, d, n, f) {
    var x, t, s, e, p;
    if (n == null ? n = o : rt(n, 0, 8), !r.c) return r.toString();
    if (x = r.c[0], s = r.e, d == null)
      p = bt(r.c), p = f == 1 || f == 2 && (s <= g || s >= _) ? Ue(p, s) : Ot(p, s, "0");
    else if (r = M(new i(r), d, n), t = r.e, p = bt(r.c), e = p.length, f == 1 || f == 2 && (d <= t || t <= g)) {
      for (; e < d; p += "0", e++) ;
      p = Ue(p, t);
    } else if (d -= s, p = Ot(p, t, "0"), t + 1 > e) {
      if (--d > 0) for (p += "."; d--; p += "0") ;
    } else if (d += t - e, d > 0)
      for (t + 1 == e && (p += "."); d--; p += "0") ;
    return r.s < 0 && x ? "-" + p : p;
  }
  function S(r, d) {
    for (var n, f, x = 1, t = new i(r[0]); x < r.length; x++)
      f = new i(r[x]), (!f.s || (n = zt(t, f)) === d || n === 0 && t.s === d) && (t = f);
    return t;
  }
  function A(r, d, n) {
    for (var f = 1, x = d.length; !d[--x]; d.pop()) ;
    for (x = d[0]; x >= 10; x /= 10, f++) ;
    return (n = f + n * Z - 1) > w ? r.c = r.e = null : n < v ? r.c = [r.e = 0] : (r.e = n, r.c = d), r;
  }
  R = /* @__PURE__ */ function() {
    var r = /^(-?)0([xbo])(?=\w[\w.]*$)/i, d = /^([^.]+)\.$/, n = /^\.([^.]+)$/, f = /^-?(Infinity|NaN)$/, x = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(t, s, e, p) {
      var C, F = e ? s : s.replace(x, "");
      if (f.test(F))
        t.s = isNaN(F) ? null : F < 0 ? -1 : 1;
      else {
        if (!e && (F = F.replace(r, function(N, D, I) {
          return C = (I = I.toLowerCase()) == "x" ? 16 : I == "b" ? 2 : 8, !p || p == C ? D : N;
        }), p && (C = p, F = F.replace(d, "$1").replace(n, "0.$1")), s != F))
          return new i(F, C);
        if (i.DEBUG)
          throw Error(mt + "Not a" + (p ? " base " + p : "") + " number: " + s);
        t.s = null;
      }
      t.c = t.e = null;
    };
  }();
  function M(r, d, n, f) {
    var x, t, s, e, p, C, F, N = r.c, D = ai;
    if (N) {
      t: {
        for (x = 1, e = N[0]; e >= 10; e /= 10, x++) ;
        if (t = d - x, t < 0)
          t += Z, s = d, p = N[C = 0], F = St(p / D[x - s - 1] % 10);
        else if (C = ri((t + 1) / Z), C >= N.length)
          if (f) {
            for (; N.length <= C; N.push(0)) ;
            p = F = 0, x = 1, t %= Z, s = t - Z + 1;
          } else
            break t;
        else {
          for (p = e = N[C], x = 1; e >= 10; e /= 10, x++) ;
          t %= Z, s = t - Z + x, F = s < 0 ? 0 : St(p / D[x - s - 1] % 10);
        }
        if (f = f || d < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        N[C + 1] != null || (s < 0 ? p : p % D[x - s - 1]), f = n < 4 ? (F || f) && (n == 0 || n == (r.s < 0 ? 3 : 2)) : F > 5 || F == 5 && (n == 4 || f || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (t > 0 ? s > 0 ? p / D[x - s] : 0 : N[C - 1]) % 10 & 1 || n == (r.s < 0 ? 8 : 7)), d < 1 || !N[0])
          return N.length = 0, f ? (d -= r.e + 1, N[0] = D[(Z - d % Z) % Z], r.e = -d || 0) : N[0] = r.e = 0, r;
        if (t == 0 ? (N.length = C, e = 1, C--) : (N.length = C + 1, e = D[Z - t], N[C] = s > 0 ? St(p / D[x - s] % D[s]) * e : 0), f)
          for (; ; )
            if (C == 0) {
              for (t = 1, s = N[0]; s >= 10; s /= 10, t++) ;
              for (s = N[0] += e, e = 1; s >= 10; s /= 10, e++) ;
              t != e && (r.e++, N[0] == xt && (N[0] = 1));
              break;
            } else {
              if (N[C] += e, N[C] != xt) break;
              N[C--] = 0, e = 1;
            }
        for (t = N.length; N[--t] === 0; N.pop()) ;
      }
      r.e > w ? r.c = r.e = null : r.e < v && (r.c = [r.e = 0]);
    }
    return r;
  }
  function G(r) {
    var d, n = r.e;
    return n === null ? r.toString() : (d = bt(r.c), d = n <= g || n >= _ ? Ue(d, n) : Ot(d, n, "0"), r.s < 0 ? "-" + d : d);
  }
  return m.absoluteValue = m.abs = function() {
    var r = new i(this);
    return r.s < 0 && (r.s = 1), r;
  }, m.comparedTo = function(r, d) {
    return zt(this, new i(r, d));
  }, m.decimalPlaces = m.dp = function(r, d) {
    var n, f, x, t = this;
    if (r != null)
      return rt(r, 0, ct), d == null ? d = o : rt(d, 0, 8), M(new i(t), r + t.e + 1, d);
    if (!(n = t.c)) return null;
    if (f = ((x = n.length - 1) - Ct(this.e / Z)) * Z, x = n[x]) for (; x % 10 == 0; x /= 10, f--) ;
    return f < 0 && (f = 0), f;
  }, m.dividedBy = m.div = function(r, d) {
    return k(this, new i(r, d), c, o);
  }, m.dividedToIntegerBy = m.idiv = function(r, d) {
    return k(this, new i(r, d), 0, 1);
  }, m.exponentiatedBy = m.pow = function(r, d) {
    var n, f, x, t, s, e, p, C, F, N = this;
    if (r = new i(r), r.c && !r.isInteger())
      throw Error(mt + "Exponent not an integer: " + G(r));
    if (d != null && (d = new i(d)), e = r.e > 14, !N.c || !N.c[0] || N.c[0] == 1 && !N.e && N.c.length == 1 || !r.c || !r.c[0])
      return F = new i(Math.pow(+G(N), e ? r.s * (2 - Be(r)) : +G(r))), d ? F.mod(d) : F;
    if (p = r.s < 0, d) {
      if (d.c ? !d.c[0] : !d.s) return new i(NaN);
      f = !p && N.isInteger() && d.isInteger(), f && (N = N.mod(d));
    } else {
      if (r.e > 9 && (N.e > 0 || N.e < -1 || (N.e == 0 ? N.c[0] > 1 || e && N.c[1] >= 24e7 : N.c[0] < 8e13 || e && N.c[0] <= 9999975e7)))
        return t = N.s < 0 && Be(r) ? -0 : 0, N.e > -1 && (t = 1 / t), new i(p ? 1 / t : t);
      l && (t = ri(l / Z + 2));
    }
    for (e ? (n = new i(0.5), p && (r.s = 1), C = Be(r)) : (x = Math.abs(+G(r)), C = x % 2), F = new i(b); ; ) {
      if (C) {
        if (F = F.times(N), !F.c) break;
        t ? F.c.length > t && (F.c.length = t) : f && (F = F.mod(d));
      }
      if (x) {
        if (x = St(x / 2), x === 0) break;
        C = x % 2;
      } else if (r = r.times(n), M(r, r.e + 1, 1), r.e > 14)
        C = Be(r);
      else {
        if (x = +G(r), x === 0) break;
        C = x % 2;
      }
      N = N.times(N), t ? N.c && N.c.length > t && (N.c.length = t) : f && (N = N.mod(d));
    }
    return f ? F : (p && (F = b.div(F)), d ? F.mod(d) : t ? M(F, l, o, s) : F);
  }, m.integerValue = function(r) {
    var d = new i(this);
    return r == null ? r = o : rt(r, 0, 8), M(d, d.e + 1, r);
  }, m.isEqualTo = m.eq = function(r, d) {
    return zt(this, new i(r, d)) === 0;
  }, m.isFinite = function() {
    return !!this.c;
  }, m.isGreaterThan = m.gt = function(r, d) {
    return zt(this, new i(r, d)) > 0;
  }, m.isGreaterThanOrEqualTo = m.gte = function(r, d) {
    return (d = zt(this, new i(r, d))) === 1 || d === 0;
  }, m.isInteger = function() {
    return !!this.c && Ct(this.e / Z) > this.c.length - 2;
  }, m.isLessThan = m.lt = function(r, d) {
    return zt(this, new i(r, d)) < 0;
  }, m.isLessThanOrEqualTo = m.lte = function(r, d) {
    return (d = zt(this, new i(r, d))) === -1 || d === 0;
  }, m.isNaN = function() {
    return !this.s;
  }, m.isNegative = function() {
    return this.s < 0;
  }, m.isPositive = function() {
    return this.s > 0;
  }, m.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, m.minus = function(r, d) {
    var n, f, x, t, s = this, e = s.s;
    if (r = new i(r, d), d = r.s, !e || !d) return new i(NaN);
    if (e != d)
      return r.s = -d, s.plus(r);
    var p = s.e / Z, C = r.e / Z, F = s.c, N = r.c;
    if (!p || !C) {
      if (!F || !N) return F ? (r.s = -d, r) : new i(N ? s : NaN);
      if (!F[0] || !N[0])
        return N[0] ? (r.s = -d, r) : new i(F[0] ? s : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          o == 3 ? -0 : 0
        ));
    }
    if (p = Ct(p), C = Ct(C), F = F.slice(), e = p - C) {
      for ((t = e < 0) ? (e = -e, x = F) : (C = p, x = N), x.reverse(), d = e; d--; x.push(0)) ;
      x.reverse();
    } else
      for (f = (t = (e = F.length) < (d = N.length)) ? e : d, e = d = 0; d < f; d++)
        if (F[d] != N[d]) {
          t = F[d] < N[d];
          break;
        }
    if (t && (x = F, F = N, N = x, r.s = -r.s), d = (f = N.length) - (n = F.length), d > 0) for (; d--; F[n++] = 0) ;
    for (d = xt - 1; f > e; ) {
      if (F[--f] < N[f]) {
        for (n = f; n && !F[--n]; F[n] = d) ;
        --F[n], F[f] += xt;
      }
      F[f] -= N[f];
    }
    for (; F[0] == 0; F.splice(0, 1), --C) ;
    return F[0] ? A(r, F, C) : (r.s = o == 3 ? -1 : 1, r.c = [r.e = 0], r);
  }, m.modulo = m.mod = function(r, d) {
    var n, f, x = this;
    return r = new i(r, d), !x.c || !r.s || r.c && !r.c[0] ? new i(NaN) : !r.c || x.c && !x.c[0] ? new i(x) : (u == 9 ? (f = r.s, r.s = 1, n = k(x, r, 0, 3), r.s = f, n.s *= f) : n = k(x, r, 0, u), r = x.minus(n.times(r)), !r.c[0] && u == 1 && (r.s = x.s), r);
  }, m.multipliedBy = m.times = function(r, d) {
    var n, f, x, t, s, e, p, C, F, N, D, I, V, B, H, q = this, W = q.c, L = (r = new i(r, d)).c;
    if (!W || !L || !W[0] || !L[0])
      return !q.s || !r.s || W && !W[0] && !L || L && !L[0] && !W ? r.c = r.e = r.s = null : (r.s *= q.s, !W || !L ? r.c = r.e = null : (r.c = [0], r.e = 0)), r;
    for (f = Ct(q.e / Z) + Ct(r.e / Z), r.s *= q.s, p = W.length, N = L.length, p < N && (V = W, W = L, L = V, x = p, p = N, N = x), x = p + N, V = []; x--; V.push(0)) ;
    for (B = xt, H = Ut, x = N; --x >= 0; ) {
      for (n = 0, D = L[x] % H, I = L[x] / H | 0, s = p, t = x + s; t > x; )
        C = W[--s] % H, F = W[s] / H | 0, e = I * C + F * D, C = D * C + e % H * H + V[t] + n, n = (C / B | 0) + (e / H | 0) + I * F, V[t--] = C % B;
      V[t] = n;
    }
    return n ? ++f : V.splice(0, 1), A(r, V, f);
  }, m.negated = function() {
    var r = new i(this);
    return r.s = -r.s || null, r;
  }, m.plus = function(r, d) {
    var n, f = this, x = f.s;
    if (r = new i(r, d), d = r.s, !x || !d) return new i(NaN);
    if (x != d)
      return r.s = -d, f.minus(r);
    var t = f.e / Z, s = r.e / Z, e = f.c, p = r.c;
    if (!t || !s) {
      if (!e || !p) return new i(x / 0);
      if (!e[0] || !p[0]) return p[0] ? r : new i(e[0] ? f : x * 0);
    }
    if (t = Ct(t), s = Ct(s), e = e.slice(), x = t - s) {
      for (x > 0 ? (s = t, n = p) : (x = -x, n = e), n.reverse(); x--; n.push(0)) ;
      n.reverse();
    }
    for (x = e.length, d = p.length, x - d < 0 && (n = p, p = e, e = n, d = x), x = 0; d; )
      x = (e[--d] = e[d] + p[d] + x) / xt | 0, e[d] = xt === e[d] ? 0 : e[d] % xt;
    return x && (e = [x].concat(e), ++s), A(r, e, s);
  }, m.precision = m.sd = function(r, d) {
    var n, f, x, t = this;
    if (r != null && r !== !!r)
      return rt(r, 1, ct), d == null ? d = o : rt(d, 0, 8), M(new i(t), r, d);
    if (!(n = t.c)) return null;
    if (x = n.length - 1, f = x * Z + 1, x = n[x]) {
      for (; x % 10 == 0; x /= 10, f--) ;
      for (x = n[0]; x >= 10; x /= 10, f++) ;
    }
    return r && t.e + 1 > f && (f = t.e + 1), f;
  }, m.shiftedBy = function(r) {
    return rt(r, -si, si), this.times("1e" + r);
  }, m.squareRoot = m.sqrt = function() {
    var r, d, n, f, x, t = this, s = t.c, e = t.s, p = t.e, C = c + 4, F = new i("0.5");
    if (e !== 1 || !s || !s[0])
      return new i(!e || e < 0 && (!s || s[0]) ? NaN : s ? t : 1 / 0);
    if (e = Math.sqrt(+G(t)), e == 0 || e == 1 / 0 ? (d = bt(s), (d.length + p) % 2 == 0 && (d += "0"), e = Math.sqrt(+d), p = Ct((p + 1) / 2) - (p < 0 || p % 2), e == 1 / 0 ? d = "5e" + p : (d = e.toExponential(), d = d.slice(0, d.indexOf("e") + 1) + p), n = new i(d)) : n = new i(e + ""), n.c[0]) {
      for (p = n.e, e = p + C, e < 3 && (e = 0); ; )
        if (x = n, n = F.times(x.plus(k(t, x, C, 1))), bt(x.c).slice(0, e) === (d = bt(n.c)).slice(0, e))
          if (n.e < p && --e, d = d.slice(e - 3, e + 1), d == "9999" || !f && d == "4999") {
            if (!f && (M(x, x.e + c + 2, 0), x.times(x).eq(t))) {
              n = x;
              break;
            }
            C += 4, e += 4, f = 1;
          } else {
            (!+d || !+d.slice(1) && d.charAt(0) == "5") && (M(n, n.e + c + 2, 1), r = !n.times(n).eq(t));
            break;
          }
    }
    return M(n, n.e + c + 1, o, r);
  }, m.toExponential = function(r, d) {
    return r != null && (rt(r, 0, ct), r++), a(this, r, d, 1);
  }, m.toFixed = function(r, d) {
    return r != null && (rt(r, 0, ct), r = r + this.e + 1), a(this, r, d);
  }, m.toFormat = function(r, d, n) {
    var f, x = this;
    if (n == null)
      r != null && d && typeof d == "object" ? (n = d, d = null) : r && typeof r == "object" ? (n = r, r = d = null) : n = y;
    else if (typeof n != "object")
      throw Error(mt + "Argument not an object: " + n);
    if (f = x.toFixed(r, d), x.c) {
      var t, s = f.split("."), e = +n.groupSize, p = +n.secondaryGroupSize, C = n.groupSeparator || "", F = s[0], N = s[1], D = x.s < 0, I = D ? F.slice(1) : F, V = I.length;
      if (p && (t = e, e = p, p = t, V -= t), e > 0 && V > 0) {
        for (t = V % e || e, F = I.substr(0, t); t < V; t += e) F += C + I.substr(t, e);
        p > 0 && (F += C + I.slice(t)), D && (F = "-" + F);
      }
      f = N ? F + (n.decimalSeparator || "") + ((p = +n.fractionGroupSize) ? N.replace(
        new RegExp("\\d{" + p + "}\\B", "g"),
        "$&" + (n.fractionGroupSeparator || "")
      ) : N) : F;
    }
    return (n.prefix || "") + f + (n.suffix || "");
  }, m.toFraction = function(r) {
    var d, n, f, x, t, s, e, p, C, F, N, D, I = this, V = I.c;
    if (r != null && (e = new i(r), !e.isInteger() && (e.c || e.s !== 1) || e.lt(b)))
      throw Error(mt + "Argument " + (e.isInteger() ? "out of range: " : "not an integer: ") + G(e));
    if (!V) return new i(I);
    for (d = new i(b), C = n = new i(b), f = p = new i(b), D = bt(V), t = d.e = D.length - I.e - 1, d.c[0] = ai[(s = t % Z) < 0 ? Z + s : s], r = !r || e.comparedTo(d) > 0 ? t > 0 ? d : C : e, s = w, w = 1 / 0, e = new i(D), p.c[0] = 0; F = k(e, d, 0, 1), x = n.plus(F.times(f)), x.comparedTo(r) != 1; )
      n = f, f = x, C = p.plus(F.times(x = C)), p = x, d = e.minus(F.times(x = d)), e = x;
    return x = k(r.minus(n), f, 0, 1), p = p.plus(x.times(C)), n = n.plus(x.times(f)), p.s = C.s = I.s, t = t * 2, N = k(C, f, t, o).minus(I).abs().comparedTo(
      k(p, n, t, o).minus(I).abs()
    ) < 1 ? [C, f] : [p, n], w = s, N;
  }, m.toNumber = function() {
    return +G(this);
  }, m.toPrecision = function(r, d) {
    return r != null && rt(r, 1, ct), a(this, r, d, 2);
  }, m.toString = function(r) {
    var d, n = this, f = n.s, x = n.e;
    return x === null ? f ? (d = "Infinity", f < 0 && (d = "-" + d)) : d = "NaN" : (r == null ? d = x <= g || x >= _ ? Ue(bt(n.c), x) : Ot(bt(n.c), x, "0") : r === 10 && E ? (n = M(new i(n), c + x + 1, o), d = Ot(bt(n.c), n.e, "0")) : (rt(r, 2, T.length, "Base"), d = O(Ot(bt(n.c), x, "0"), 10, r, f, !0)), f < 0 && n.c[0] && (d = "-" + d)), d;
  }, m.valueOf = m.toJSON = function() {
    return G(this);
  }, m._isBigNumber = !0, m[Symbol.toStringTag] = "BigNumber", m[Symbol.for("nodejs.util.inspect.custom")] = m.valueOf, h != null && i.set(h), i;
}
function Ct(h) {
  var k = h | 0;
  return h > 0 || h === k ? k : k - 1;
}
function bt(h) {
  for (var k, O, R = 1, m = h.length, b = h[0] + ""; R < m; ) {
    for (k = h[R++] + "", O = Z - k.length; O--; k = "0" + k) ;
    b += k;
  }
  for (m = b.length; b.charCodeAt(--m) === 48; ) ;
  return b.slice(0, m + 1 || 1);
}
function zt(h, k) {
  var O, R, m = h.c, b = k.c, c = h.s, o = k.s, g = h.e, _ = k.e;
  if (!c || !o) return null;
  if (O = m && !m[0], R = b && !b[0], O || R) return O ? R ? 0 : -o : c;
  if (c != o) return c;
  if (O = c < 0, R = g == _, !m || !b) return R ? 0 : !m ^ O ? 1 : -1;
  if (!R) return g > _ ^ O ? 1 : -1;
  for (o = (g = m.length) < (_ = b.length) ? g : _, c = 0; c < o; c++) if (m[c] != b[c]) return m[c] > b[c] ^ O ? 1 : -1;
  return g == _ ? 0 : g > _ ^ O ? 1 : -1;
}
function rt(h, k, O, R) {
  if (h < k || h > O || h !== St(h))
    throw Error(mt + (R || "Argument") + (typeof h == "number" ? h < k || h > O ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(h));
}
function Be(h) {
  var k = h.c.length - 1;
  return Ct(h.e / Z) == k && h.c[k] % 2 != 0;
}
function Ue(h, k) {
  return (h.length > 1 ? h.charAt(0) + "." + h.slice(1) : h) + (k < 0 ? "e" : "e+") + k;
}
function Ot(h, k, O) {
  var R, m;
  if (k < 0) {
    for (m = O + "."; ++k; m += O) ;
    h = m + h;
  } else if (R = h.length, ++k > R) {
    for (m = O, k -= R; --k; m += O) ;
    h += m;
  } else k < R && (h = h.slice(0, k) + "." + h.slice(k));
  return h;
}
var Gt = Hn();
Gt.config({ EXPONENTIAL_AT: [-100, 100] });
const Xr = (h, k) => {
  let O = 0;
  return function() {
    let R = +/* @__PURE__ */ new Date();
    (R - O > k || !O) && (h.apply(this, arguments), O = R);
  };
}, Lt = (h) => h == null || typeof h == "string" && (h = h.replace(/[^0-9.-]/g, "").replace(/(\..*)\./g, ""), !h) ? 0 : new Gt(h).toNumber(), Pn = (h, k) => (h = Lt(h), k = Lt(k), new Gt(h).times(k)), Tn = (h, k) => (h = Lt(h), k = Lt(k), new Gt(h).dividedBy(k)), oi = (h, k) => (h = Lt(h), k = Lt(k), new Gt(h).plus(k)), ft = (h, k) => (h = Lt(h), k = Lt(k), new Gt(h).minus(k)), Yr = (h, k, O, R) => {
  if (!h) return "";
  h instanceof Gt || (h = Lt(h));
  const m = {
    decimalSeparator: ".",
    groupSeparator: ",",
    groupSize: 3,
    secondaryGroupSize: 0,
    ...R
  };
  return new Gt(h).toFormat(
    k || 0,
    Gt.ROUND_FLOOR,
    m
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
  wheel: 50,
  // 默认鼠标滚轮步长，数值越大，展示的数据量越多
  isRedUp: !1
  // 默认false红跌绿涨，true红涨绿跌
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
    const { appContext: k } = ci(), { globalProperties: O } = k.app.config;
    O != null && O.$isKonvaPluginRegistered || (k.app.use(Wr, {
      prefix: "kv"
    }), O.$isKonvaPluginRegistered = !0);
    const R = h, m = Et(() => {
      const f = {
        ...An,
        ...R.options
      };
      return f.isRedUp && ([f.bidsColor, f.asksColor] = [f.asksColor, f.bidsColor], [f.bidsBgColor, f.asksBgColor] = [f.asksBgColor, f.bidsBgColor]), f;
    }), b = Pt(m.value.width || 500), c = Pt(m.value.height || 340), o = Pt(ft(b.value, m.value.marginX).toNumber()), g = Pt(o.value / 2), _ = Pt(ft(c.value, m.value.marginX).toNumber()), v = Pt(m.value.wheel || 50), w = Et(() => (R.depthData.bids || []).map((x) => Array.isArray(x) ? {
      ...x,
      price: x[0],
      totalAmount: x[1]
    } : x).filter((x) => x.price < R.symbolData.currentPrice).slice(0, v.value)), P = Et(() => (R.depthData.asks || []).map((x) => Array.isArray(x) ? {
      ...x,
      price: x[0],
      totalAmount: x[1]
    } : x).filter((x) => x.price > R.symbolData.currentPrice).slice(-v.value)), u = 10, l = Et(() => {
      const f = R.depthData.bids.length, x = R.depthData.asks.length;
      return Math.max(f, x, u);
    }), y = Pt(0), T = Et(() => {
      const f = R.symbolData.currentPrice, x = w.value.length ? ft(f, w.value[w.value.length - 1].price).dividedBy(3).toNumber() : 0, t = +x > 0 ? [ft(f, Pn(x, 2)), ft(f, x)] : [0, 0], s = P.value.length ? ft(P.value[0].price, f).dividedBy(3).toNumber() : 0, e = +s > 0 ? [
        oi(f, s).toNumber(),
        oi(f, Pn(s, 2)).toNumber()
      ] : [0, 0];
      return [...t, f, ...e].map(
        (p) => Yr(p, R.symbolData.priceScale)
      );
    }), E = Et(
      () => {
        var f, x;
        return Math.max(((f = w.value[w.value.length - 1]) == null ? void 0 : f.totalAmount) || 0, ((x = P.value[0]) == null ? void 0 : x.totalAmount) || 0);
      }
    ), i = Et(() => {
      const f = _.value > 800 ? 20 : 10, x = oi(E.value, E.value % 10).toNumber(), t = Tn(x, f);
      return Array.from(new Array(f)).map((s, e) => {
        const p = t.multipliedBy(e).toFormat(R.symbolData.qtyScale), C = Tn(_.value, f).multipliedBy(e), F = ft(_.value, C).toFixed(2);
        return {
          currentScaleTotal: p,
          y: F
        };
      }).filter((s) => +s.currentScaleTotal > 0);
    }), a = Et(() => {
      if (!w.value.length || !E.value) return null;
      const f = _.value - m.value.marginY, x = R.symbolData.currentPrice, t = ft(x, w.value[w.value.length - 1].price);
      let s = "";
      return {
        data: [...w.value].reverse().map((p, C) => {
          const F = +ft(p.price, x).dividedBy(t).multipliedBy(g.value).plus(g.value).toFixed(R.symbolData.priceScale), N = Math.max(
            +ft(E.value, p.totalAmount).dividedBy(E.value).multipliedBy(f).toFixed(R.symbolData.qtyScale + 1),
            m.value.marginY
          );
          return C === 0 ? s += `M-1 ${_.value} V${N} ` : C === w.value.length - 1 ? s += `H${F} V${N} V${_.value}` : s += `H${F} V${N} `, { ...p, x: F, y: N };
        }),
        path: s
      };
    }), S = Et(() => {
      if (!P.value.length || !E.value) return null;
      const f = _.value - m.value.marginY, x = R.symbolData.currentPrice, t = ft(P.value[0].price, x);
      let s = "";
      return {
        data: P.value.map((p, C) => {
          const F = +ft(p.price, x).dividedBy(t).multipliedBy(g.value).plus(g.value).toFixed(R.symbolData.priceScale), N = Math.max(
            +ft(E.value, p.totalAmount).dividedBy(E.value).multipliedBy(f).toFixed(R.symbolData.qtyScale + 1),
            m.value.marginY
          );
          return C === 0 ? s += `M${o.value} ${_.value} V${N} ` : C === P.value.length - 1 ? s += `H${F} V${N} V${_.value}` : s += `H${F} V${N} `, { ...p, x: F, y: N };
        }),
        path: s
      };
    }), A = Et(() => {
      var t, s, e, p, C, F;
      const f = y.value;
      if (!y || f > o.value) return;
      let x;
      if (f < g.value) {
        const N = ((e = (s = (t = a.value) == null ? void 0 : t.data) == null ? void 0 : s.slice()) == null ? void 0 : e.reverse()) || [];
        if (!N.length) return;
        for (let D = 0; D < N.length; D++) {
          const I = N[D];
          if (f > +I.x) {
            x = I;
            break;
          }
        }
      } else {
        const N = ((F = (C = (p = S.value) == null ? void 0 : p.data) == null ? void 0 : C.slice()) == null ? void 0 : F.reverse()) || [];
        if (!N.length) return;
        for (let D = 0; D < N.length; D++) {
          const I = N[D];
          if (f < +I.x) {
            x = I;
            break;
          }
        }
      }
      return x;
    }), M = Pt(), G = Pt(0), r = Pt(), d = () => {
      r.value && (b.value = r.value.clientWidth, c.value = r.value.clientHeight || c.value, o.value = ft(b.value, m.value.marginX).toNumber(), g.value = o.value / 2, _.value = ft(c.value, m.value.marginY).toNumber(), window.addEventListener("resize", d));
    };
    di(() => {
      d();
    });
    const n = Xr((f) => {
      f.evt.preventDefault(), y.value = f.evt.offsetX;
    }, 300);
    return (f, x) => {
      const t = qt("kv-path"), s = qt("kv-Rect"), e = qt("kv-text"), p = qt("kv-circle"), C = qt("kv-group"), F = qt("kv-layer"), N = qt("kv-stage");
      return Yt(), Xe("div", {
        class: "depth-chart",
        ref_key: "depthChartEl",
        ref: r
      }, [
        ut(N, {
          config: { width: b.value, height: c.value },
          onWheel: x[0] || (x[0] = (D) => {
            D.evt.preventDefault(), D.evt.wheelDelta < 0 ? v.value = Math.min(v.value + 2, l.value) : v.value = Math.max(v.value - 2, u);
          }),
          onMousemove: Xn(n),
          onMouseleave: x[1] || (x[1] = () => y.value = 0),
          onTouchmove: x[2] || (x[2] = (D) => {
            D.evt.preventDefault(), D.evt.targetTouches.length > 1 ? (G.value && (Math.abs(D.evt.targetTouches[0].pageX - D.evt.targetTouches[1].pageX) < G.value ? v.value = Math.min(v.value + 2, l.value) : v.value = Math.max(v.value - 2, u)), G.value = Math.abs(D.evt.targetTouches[0].pageX - D.evt.targetTouches[1].pageX)) : !G.value && (y.value = D.evt.changedTouches[0].pageX);
          }),
          onTouchend: x[3] || (x[3] = (D) => {
            D.evt.preventDefault(), y.value = 0, G.value = 0;
          })
        }, {
          default: Qt(() => [
            ut(F, null, {
              default: Qt(() => {
                var D, I;
                return [
                  ut(t, {
                    fill: m.value.bidsBgColor,
                    stroke: m.value.bidsColor,
                    strokeWidth: 1,
                    data: (D = a.value) == null ? void 0 : D.path
                  }, null, 8, ["fill", "stroke", "data"]),
                  ut(t, {
                    fill: m.value.asksBgColor,
                    stroke: m.value.asksColor,
                    strokeWidth: 1,
                    data: (I = S.value) == null ? void 0 : I.path
                  }, null, 8, ["fill", "stroke", "data"]),
                  ut(t, {
                    stroke: m.value.axisColor,
                    strokeWidth: 1,
                    data: `M${g.value} 0 L${g.value} ${_.value} Z`
                  }, null, 8, ["stroke", "data"]),
                  A.value ? (Yt(), Ye(C, { key: 0 }, {
                    default: Qt(() => {
                      var V, B, H, q, W, L, U, X, z, Y, $, Q, j, K, ht, it;
                      return [
                        ut(t, {
                          data: +A.value.x < g.value ? `M0 ${(V = A.value) == null ? void 0 : V.y} L${g.value} ${(B = A.value) == null ? void 0 : B.y} Z` : `M${g.value} ${(H = A.value) == null ? void 0 : H.y} L${o.value} ${(q = A.value) == null ? void 0 : q.y} Z`,
                          stroke: +A.value.x < g.value ? m.value.bidsColor : m.value.asksColor,
                          strokeWidth: 0.5,
                          dash: [2, 4]
                        }, null, 8, ["data", "stroke"]),
                        ut(t, {
                          data: +A.value.x < g.value ? `M-1 -1 L-1 ${c.value} L${(W = A.value) == null ? void 0 : W.x} ${c.value} L${(L = A.value) == null ? void 0 : L.x} -1 Z` : `M${o.value + 1} -1 L${(U = A.value) == null ? void 0 : U.x} -1 L${(X = A.value) == null ? void 0 : X.x} ${c.value} L${o.value + 1} ${c.value} Z`,
                          stroke: +A.value.x < g.value ? m.value.bidsColor : m.value.asksColor,
                          fill: m.value.dottedBgColor,
                          strokeWidth: 0.5,
                          dash: [2, 4]
                        }, null, 8, ["data", "stroke", "fill"]),
                        ut(s, {
                          width: (((Y = (z = M.value) == null ? void 0 : z.getNode()) == null ? void 0 : Y.textWidth) || 0) + 40,
                          height: (((Q = ($ = M.value) == null ? void 0 : $.getNode()) == null ? void 0 : Q.textHeight) || 0) * 4.3,
                          x: +A.value.x < g.value ? +A.value.x + 50 : +A.value.x - (((K = (j = M.value) == null ? void 0 : j.getNode()) == null ? void 0 : K.textWidth) || 0) - 100,
                          cornerRadius: 8,
                          y: Math.max(10, +A.value.y - 100),
                          fill: +A.value.x < g.value ? m.value.bidsColor : m.value.asksColor
                        }, null, 8, ["width", "height", "x", "y", "fill"]),
                        ut(e, {
                          text: `${m.value.tipPriceText}  ${A.value.price}
${m.value.tipTotalText}  ${+A.value.totalAmount > 999, A.value.totalAmount}`,
                          padding: 10,
                          lineHeight: 1.5,
                          fill: m.value.tipColor,
                          fontSize: m.value.tipFontSize,
                          x: +A.value.x < g.value ? +A.value.x + 50 : +A.value.x - (((it = (ht = M.value) == null ? void 0 : ht.getNode()) == null ? void 0 : it.textWidth) || 0) - 100,
                          y: Math.max(10, +A.value.y - 100),
                          ref_key: "overlayEl",
                          ref: M
                        }, null, 8, ["text", "fill", "fontSize", "x", "y"]),
                        ut(p, {
                          fill: +A.value.x < g.value ? m.value.bidsColor : m.value.asksColor,
                          width: 6,
                          height: 6,
                          x: +A.value.x,
                          y: +A.value.y
                        }, null, 8, ["fill", "x", "y"])
                      ];
                    }),
                    _: 1
                  })) : Yn("", !0),
                  ut(t, {
                    stroke: m.value.axisXBorderColor,
                    fill: m.value.axisXBgColor,
                    strokeWidth: 1,
                    data: `M0 ${c.value} L0 ${_.value + 1} L${b.value} ${_.value + 1} L${b.value} ${c.value} Z`
                  }, null, 8, ["stroke", "fill", "data"]),
                  (Yt(!0), Xe(_i, null, mi(T.value, (V, B) => (Yt(), Ye(C, { key: B }, {
                    default: Qt(() => [
                      ut(t, {
                        stroke: m.value.axisColor,
                        strokeWidth: 1,
                        data: `M${o.value / 6 * (B + 1)} ${_.value} L${o.value / 6 * (B + 1)} ${_.value + m.value.axisLineWidth} Z`
                      }, null, 8, ["stroke", "data"]),
                      ut(e, {
                        text: V,
                        fill: m.value.fontColor,
                        fontSize: m.value.fontSize,
                        x: o.value / 6 * (B + 1),
                        y: _.value + m.value.axisLineWidth + 2,
                        width: o.value / 3,
                        align: "center",
                        offsetX: o.value / 3 / 2
                      }, null, 8, ["text", "fill", "fontSize", "x", "y", "width", "offsetX"])
                    ]),
                    _: 2
                  }, 1024))), 128)),
                  ut(t, {
                    stroke: m.value.axisYBorderColor,
                    fill: m.value.axisYBgColor,
                    data: `M${o.value} 0 L${o.value} ${c.value} L${b.value} ${c.value} L${b.value} 0 Z`
                  }, null, 8, ["stroke", "fill", "data"]),
                  (Yt(!0), Xe(_i, null, mi(i.value, (V, B) => (Yt(), Ye(C, { key: B }, {
                    default: Qt(() => [
                      ut(t, {
                        stroke: m.value.axisColor,
                        strokeWidth: 1,
                        data: `M${o.value} ${V.y} L${o.value + m.value.axisLineWidth} ${V.y} Z`
                      }, null, 8, ["stroke", "data"]),
                      ut(e, {
                        text: V.currentScaleTotal,
                        fill: m.value.fontColor,
                        fontSize: m.value.fontSize,
                        x: o.value + m.value.axisLineWidth + 2,
                        y: +V.y - 5,
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
}), Qr = (h, k) => {
  const O = h.__vccOpts || h;
  for (const [R, m] of k)
    O[R] = m;
  return O;
}, Zr = /* @__PURE__ */ Qr(jr, [["__scopeId", "data-v-7d9f96e1"]]), Jr = [Zr];
function ts(h) {
  Jr.forEach((k) => {
    h.component(k.name, k);
  });
}
const ws = {
  install: ts
};
export {
  ws as default,
  Zr as depthChart,
  ts as install
};
