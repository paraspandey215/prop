(globalThis.webpackChunk_clerk_clerk_js = globalThis.webpackChunk_clerk_clerk_js || []).push([
    ["200"], {
        7622: function(e, t, n) {
            "use strict";
            n.d(t, {
                F4: () => i,
                iv: () => o
            }), n(9144), n(3991);
            var r = n(6724);

            function o() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, r.O)(t)
            }
            n(1036), n(3772);
            var i = function() {
                var e = o.apply(void 0, arguments),
                    t = "animation-" + e.name;
                return {
                    name: t,
                    styles: "@keyframes " + t + "{" + e.styles + "}",
                    anim: 1,
                    toString: function() {
                        return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                    }
                }
            }
        },
        1720: function(e, t, n) {
            "use strict";

            function r() {
                for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
                    var n, r, o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (o && (o += " "), o += r);
                        else
                            for (n in t) t[n] && (o && (o += " "), o += n)
                    }
                    return o
                }(e)) && (r && (r += " "), r += t);
                return r
            }
            n.d(t, {
                W: () => r
            })
        },
        472: function(e, t, n) {
            "use strict";
            var r = n(5683),
                o = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var n, i, l, a, s, u, c, f, d = !1;
                t || (t = {}), l = t.debug || !1;
                try {
                    if (s = r(), u = document.createRange(), c = document.getSelection(), (f = document.createElement("span")).textContent = e, f.ariaHidden = "true", f.style.all = "unset", f.style.position = "fixed", f.style.top = 0, f.style.clip = "rect(0, 0, 0, 0)", f.style.whiteSpace = "pre", f.style.webkitUserSelect = "text", f.style.MozUserSelect = "text", f.style.msUserSelect = "text", f.style.userSelect = "text", f.addEventListener("copy", function(n) {
                            if (n.stopPropagation(), t.format) {
                                if (n.preventDefault(), void 0 === n.clipboardData) {
                                    l && console.warn("unable to use e.clipboardData"), l && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var r = o[t.format] || o.default;
                                    window.clipboardData.setData(r, e)
                                } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e)
                            }
                            t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                        }), document.body.appendChild(f), u.selectNodeContents(f), c.addRange(u), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
                    d = !0
                } catch (r) {
                    l && console.error("unable to copy using execCommand: ", r), l && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), d = !0
                    } catch (r) {
                        l && console.error("unable to copy using clipboardData: ", r), l && console.error("falling back to prompt"), n = "message" in t ? t.message : "Copy to clipboard: #{key}, Enter", i = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", a = n.replace(/#{\s*key\s*}/g, i), window.prompt(a, e)
                    }
                } finally {
                    c && ("function" == typeof c.removeRange ? c.removeRange(u) : c.removeAllRanges()), f && document.body.removeChild(f), s()
                }
                return d
            }
        },
        7383: function(e, t, n) {
            var r;
            r = function() {
                var e = e || function(e, t) {
                    if ("undefined" != typeof window && window.crypto && (r = window.crypto), "undefined" != typeof self && self.crypto && (r = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (r = globalThis.crypto), !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto), !r && void 0 !== n.g && n.g.crypto && (r = n.g.crypto), !r) try {
                        r = n(9532)
                    } catch (e) {}
                    var r, o = function() {
                            if (r) {
                                if ("function" == typeof r.getRandomValues) try {
                                    return r.getRandomValues(new Uint32Array(1))[0]
                                } catch (e) {}
                                if ("function" == typeof r.randomBytes) try {
                                    return r.randomBytes(4).readInt32LE()
                                } catch (e) {}
                            }
                            throw Error("Native crypto module could not be used to get secure random number.")
                        },
                        i = Object.create || function() {
                            function e() {}
                            return function(t) {
                                var n;
                                return e.prototype = t, n = new e, e.prototype = null, n
                            }
                        }(),
                        l = {},
                        a = l.lib = {},
                        s = a.Base = {
                            extend: function(e) {
                                var t = i(this);
                                return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                                    t.$super.init.apply(this, arguments)
                                }), t.init.prototype = t, t.$super = this, t
                            },
                            create: function() {
                                var e = this.extend();
                                return e.init.apply(e, arguments), e
                            },
                            init: function() {},
                            mixIn: function(e) {
                                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                e.hasOwnProperty("toString") && (this.toString = e.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        },
                        u = a.WordArray = s.extend({
                            init: function(e, n) {
                                e = this.words = e || [], t != n ? this.sigBytes = n : this.sigBytes = 4 * e.length
                            },
                            toString: function(e) {
                                return (e || f).stringify(this)
                            },
                            concat: function(e) {
                                var t = this.words,
                                    n = e.words,
                                    r = this.sigBytes,
                                    o = e.sigBytes;
                                if (this.clamp(), r % 4)
                                    for (var i = 0; i < o; i++) {
                                        var l = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                        t[r + i >>> 2] |= l << 24 - (r + i) % 4 * 8
                                    } else
                                        for (var a = 0; a < o; a += 4) t[r + a >>> 2] = n[a >>> 2];
                                return this.sigBytes += o, this
                            },
                            clamp: function() {
                                var t = this.words,
                                    n = this.sigBytes;
                                t[n >>> 2] &= 0xffffffff << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                            },
                            clone: function() {
                                var e = s.clone.call(this);
                                return e.words = this.words.slice(0), e
                            },
                            random: function(e) {
                                for (var t = [], n = 0; n < e; n += 4) t.push(o());
                                return new u.init(t, e)
                            }
                        }),
                        c = l.enc = {},
                        f = c.Hex = {
                            stringify: function(e) {
                                for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                                    var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16))
                                }
                                return r.join("")
                            },
                            parse: function(e) {
                                for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                                return new u.init(n, t / 2)
                            }
                        },
                        d = c.Latin1 = {
                            stringify: function(e) {
                                for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                                    var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    r.push(String.fromCharCode(i))
                                }
                                return r.join("")
                            },
                            parse: function(e) {
                                for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                                return new u.init(n, t)
                            }
                        },
                        h = c.Utf8 = {
                            stringify: function(e) {
                                try {
                                    return decodeURIComponent(escape(d.stringify(e)))
                                } catch (e) {
                                    throw Error("Malformed UTF-8 data")
                                }
                            },
                            parse: function(e) {
                                return d.parse(unescape(encodeURIComponent(e)))
                            }
                        },
                        p = a.BufferedBlockAlgorithm = s.extend({
                            reset: function() {
                                this._data = new u.init, this._nDataBytes = 0
                            },
                            _append: function(e) {
                                "string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                            },
                            _process: function(t) {
                                var n, r = this._data,
                                    o = r.words,
                                    i = r.sigBytes,
                                    l = this.blockSize,
                                    a = i / (4 * l),
                                    s = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * l,
                                    c = e.min(4 * s, i);
                                if (s) {
                                    for (var f = 0; f < s; f += l) this._doProcessBlock(o, f);
                                    n = o.splice(0, s), r.sigBytes -= c
                                }
                                return new u.init(n, c)
                            },
                            clone: function() {
                                var e = s.clone.call(this);
                                return e._data = this._data.clone(), e
                            },
                            _minBufferSize: 0
                        });
                    a.Hasher = p.extend({
                        cfg: s.extend(),
                        init: function(e) {
                            this.cfg = this.cfg.extend(e), this.reset()
                        },
                        reset: function() {
                            p.reset.call(this), this._doReset()
                        },
                        update: function(e) {
                            return this._append(e), this._process(), this
                        },
                        finalize: function(e) {
                            return e && this._append(e), this._doFinalize()
                        },
                        blockSize: 16,
                        _createHelper: function(e) {
                            return function(t, n) {
                                return new e.init(n).finalize(t)
                            }
                        },
                        _createHmacHelper: function(e) {
                            return function(t, n) {
                                return new m.HMAC.init(e, n).finalize(t)
                            }
                        }
                    });
                    var m = l.algo = {};
                    return l
                }(Math);
                return e
            }, e.exports = r()
        },
        7202: function(e, t, n) {
            var r;
            r = function(e) {
                var t;
                return t = e.lib.WordArray, e.enc.Base64 = {
                    stringify: function(e) {
                        var t = e.words,
                            n = e.sigBytes,
                            r = this._map;
                        e.clamp();
                        for (var o = [], i = 0; i < n; i += 3)
                            for (var l = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) o.push(r.charAt(l >>> 6 * (3 - a) & 63));
                        var s = r.charAt(64);
                        if (s)
                            for (; o.length % 4;) o.push(s);
                        return o.join("")
                    },
                    parse: function(e) {
                        var n = e.length,
                            r = this._map,
                            o = this._reverseMap;
                        if (!o) {
                            o = this._reverseMap = [];
                            for (var i = 0; i < r.length; i++) o[r.charCodeAt(i)] = i
                        }
                        var l = r.charAt(64);
                        if (l) {
                            var a = e.indexOf(l); - 1 !== a && (n = a)
                        }
                        return function(e, n, r) {
                            for (var o = [], i = 0, l = 0; l < n; l++)
                                if (l % 4) {
                                    var a = r[e.charCodeAt(l - 1)] << l % 4 * 2 | r[e.charCodeAt(l)] >>> 6 - l % 4 * 2;
                                    o[i >>> 2] |= a << 24 - i % 4 * 8, i++
                                }
                            return t.create(o, i)
                        }(e, n, o)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }, e.enc.Base64
            }, e.exports = r(n(7383))
        },
        394: function(e, t, n) {
            var r;
            r = function(e) {
                var t, n, r, o, i, l;
                return n = (t = e.lib).WordArray, r = t.Hasher, o = e.algo, i = [], l = o.SHA1 = r.extend({
                    _doReset: function() {
                        this._hash = new n.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0])
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, r = n[0], o = n[1], l = n[2], a = n[3], s = n[4], u = 0; u < 80; u++) {
                            if (u < 16) i[u] = 0 | e[t + u];
                            else {
                                var c = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];
                                i[u] = c << 1 | c >>> 31
                            }
                            var f = (r << 5 | r >>> 27) + s + i[u];
                            u < 20 ? f += (o & l | ~o & a) + 0x5a827999 : u < 40 ? f += (o ^ l ^ a) + 0x6ed9eba1 : u < 60 ? f += (o & l | o & a | l & a) - 0x70e44324 : f += (o ^ l ^ a) - 0x359d3e2a, s = a, a = l, l = o << 30 | o >>> 2, o = r, r = f
                        }
                        n[0] = n[0] + r | 0, n[1] = n[1] + o | 0, n[2] = n[2] + l | 0, n[3] = n[3] + a | 0, n[4] = n[4] + s | 0
                    },
                    _doFinalize: function() {
                        var e = this._data,
                            t = e.words,
                            n = 8 * this._nDataBytes,
                            r = 8 * e.sigBytes;
                        return t[r >>> 5] |= 128 << 24 - r % 32, t[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 0x100000000), t[(r + 64 >>> 9 << 4) + 15] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
                    },
                    clone: function() {
                        var e = r.clone.call(this);
                        return e._hash = this._hash.clone(), e
                    }
                }), e.SHA1 = r._createHelper(l), e.HmacSHA1 = r._createHmacHelper(l), e.SHA1
            }, e.exports = r(n(7383))
        },
        2710: function(e, t, n) {
            "use strict";
            n.d(t, {
                tv: () => g
            });
            var r, o, i, l = n(9144),
                a = Object.defineProperty,
                s = Object.getOwnPropertySymbols,
                u = Object.prototype.hasOwnProperty,
                c = Object.prototype.propertyIsEnumerable,
                f = (e, t, n) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                d = (e, t) => {
                    for (var n in t || (t = {})) u.call(t, n) && f(e, n, t[n]);
                    if (s)
                        for (var n of s(t)) c.call(t, n) && f(e, n, t[n]);
                    return e
                },
                h = (e, t) => {
                    var n = {};
                    for (var r in e) u.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && s)
                        for (var r of s(e)) 0 > t.indexOf(r) && c.call(e, r) && (n[r] = e[r]);
                    return n
                };
            (e => {
                let t = class {
                    static encodeText(n, r) {
                        let o = e.QrSegment.makeSegments(n);
                        return t.encodeSegments(o, r)
                    }
                    static encodeBinary(n, r) {
                        let o = e.QrSegment.makeBytes(n);
                        return t.encodeSegments([o], r)
                    }
                    static encodeSegments(e, r) {
                        let i, a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 40,
                            c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
                            f = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
                        if (!(t.MIN_VERSION <= s && s <= u && u <= t.MAX_VERSION) || c < -1 || c > 7) throw RangeError("Invalid value");
                        for (i = s;; i++) {
                            let n = 8 * t.getNumDataCodewords(i, r),
                                o = l.getTotalBits(e, i);
                            if (o <= n) {
                                a = o;
                                break
                            }
                            if (i >= u) throw RangeError("Data too long")
                        }
                        for (let e of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH]) f && a <= 8 * t.getNumDataCodewords(i, e) && (r = e);
                        let d = [];
                        for (let t of e)
                            for (let e of (n(t.mode.modeBits, 4, d), n(t.numChars, t.mode.numCharCountBits(i), d), t.getData())) d.push(e);
                        o(d.length == a);
                        let h = 8 * t.getNumDataCodewords(i, r);
                        o(d.length <= h), n(0, Math.min(4, h - d.length), d), n(0, (8 - d.length % 8) % 8, d), o(d.length % 8 == 0);
                        for (let e = 236; d.length < h; e ^= 253) n(e, 8, d);
                        let p = [];
                        for (; 8 * p.length < d.length;) p.push(0);
                        return d.forEach((e, t) => p[t >>> 3] |= e << 7 - (7 & t)), new t(i, r, p, c)
                    }
                    getModule(e, t) {
                        return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e]
                    }
                    getModules() {
                        return this.modules
                    }
                    drawFunctionPatterns() {
                        for (let e = 0; e < this.size; e++) this.setFunctionModule(6, e, e % 2 == 0), this.setFunctionModule(e, 6, e % 2 == 0);
                        this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                        let e = this.getAlignmentPatternPositions(),
                            t = e.length;
                        for (let n = 0; n < t; n++)
                            for (let r = 0; r < t; r++)(0 != n || 0 != r) && (0 != n || r != t - 1) && (n != t - 1 || 0 != r) && this.drawAlignmentPattern(e[n], e[r]);
                        this.drawFormatBits(0), this.drawVersion()
                    }
                    drawFormatBits(e) {
                        let t = this.errorCorrectionLevel.formatBits << 3 | e,
                            n = t;
                        for (let e = 0; e < 10; e++) n = n << 1 ^ (n >>> 9) * 1335;
                        let i = (t << 10 | n) ^ 21522;
                        o(i >>> 15 == 0);
                        for (let e = 0; e <= 5; e++) this.setFunctionModule(8, e, r(i, e));
                        this.setFunctionModule(8, 7, r(i, 6)), this.setFunctionModule(8, 8, r(i, 7)), this.setFunctionModule(7, 8, r(i, 8));
                        for (let e = 9; e < 15; e++) this.setFunctionModule(14 - e, 8, r(i, e));
                        for (let e = 0; e < 8; e++) this.setFunctionModule(this.size - 1 - e, 8, r(i, e));
                        for (let e = 8; e < 15; e++) this.setFunctionModule(8, this.size - 15 + e, r(i, e));
                        this.setFunctionModule(8, this.size - 8, !0)
                    }
                    drawVersion() {
                        if (this.version < 7) return;
                        let e = this.version;
                        for (let t = 0; t < 12; t++) e = e << 1 ^ (e >>> 11) * 7973;
                        let t = this.version << 12 | e;
                        o(t >>> 18 == 0);
                        for (let e = 0; e < 18; e++) {
                            let n = r(t, e),
                                o = this.size - 11 + e % 3,
                                i = Math.floor(e / 3);
                            this.setFunctionModule(o, i, n), this.setFunctionModule(i, o, n)
                        }
                    }
                    drawFinderPattern(e, t) {
                        for (let n = -4; n <= 4; n++)
                            for (let r = -4; r <= 4; r++) {
                                let o = Math.max(Math.abs(r), Math.abs(n)),
                                    i = e + r,
                                    l = t + n;
                                0 <= i && i < this.size && 0 <= l && l < this.size && this.setFunctionModule(i, l, 2 != o && 4 != o)
                            }
                    }
                    drawAlignmentPattern(e, t) {
                        for (let n = -2; n <= 2; n++)
                            for (let r = -2; r <= 2; r++) this.setFunctionModule(e + r, t + n, 1 != Math.max(Math.abs(r), Math.abs(n)))
                    }
                    setFunctionModule(e, t, n) {
                        this.modules[t][e] = n, this.isFunction[t][e] = !0
                    }
                    addEccAndInterleave(e) {
                        let n = this.version,
                            r = this.errorCorrectionLevel;
                        if (e.length != t.getNumDataCodewords(n, r)) throw RangeError("Invalid argument");
                        let i = t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],
                            l = t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],
                            a = Math.floor(t.getNumRawDataModules(n) / 8),
                            s = i - a % i,
                            u = Math.floor(a / i),
                            c = [],
                            f = t.reedSolomonComputeDivisor(l);
                        for (let n = 0, r = 0; n < i; n++) {
                            let o = e.slice(r, r + u - l + (n < s ? 0 : 1));
                            r += o.length;
                            let i = t.reedSolomonComputeRemainder(o, f);
                            n < s && o.push(0), c.push(o.concat(i))
                        }
                        let d = [];
                        for (let e = 0; e < c[0].length; e++) c.forEach((t, n) => {
                            (e != u - l || n >= s) && d.push(t[e])
                        });
                        return o(d.length == a), d
                    }
                    drawCodewords(e) {
                        if (e.length != Math.floor(t.getNumRawDataModules(this.version) / 8)) throw RangeError("Invalid argument");
                        let n = 0;
                        for (let t = this.size - 1; t >= 1; t -= 2) {
                            6 == t && (t = 5);
                            for (let o = 0; o < this.size; o++)
                                for (let i = 0; i < 2; i++) {
                                    let l = t - i,
                                        a = (t + 1 & 2) == 0 ? this.size - 1 - o : o;
                                    !this.isFunction[a][l] && n < 8 * e.length && (this.modules[a][l] = r(e[n >>> 3], 7 - (7 & n)), n++)
                                }
                        }
                        o(n == 8 * e.length)
                    }
                    applyMask(e) {
                        if (e < 0 || e > 7) throw RangeError("Mask value out of range");
                        for (let t = 0; t < this.size; t++)
                            for (let n = 0; n < this.size; n++) {
                                let r;
                                switch (e) {
                                    case 0:
                                        r = (n + t) % 2 == 0;
                                        break;
                                    case 1:
                                        r = t % 2 == 0;
                                        break;
                                    case 2:
                                        r = n % 3 == 0;
                                        break;
                                    case 3:
                                        r = (n + t) % 3 == 0;
                                        break;
                                    case 4:
                                        r = (Math.floor(n / 3) + Math.floor(t / 2)) % 2 == 0;
                                        break;
                                    case 5:
                                        r = n * t % 2 + n * t % 3 == 0;
                                        break;
                                    case 6:
                                        r = (n * t % 2 + n * t % 3) % 2 == 0;
                                        break;
                                    case 7:
                                        r = ((n + t) % 2 + n * t % 3) % 2 == 0;
                                        break;
                                    default:
                                        throw Error("Unreachable")
                                }!this.isFunction[t][n] && r && (this.modules[t][n] = !this.modules[t][n])
                            }
                    }
                    getPenaltyScore() {
                        let e = 0;
                        for (let n = 0; n < this.size; n++) {
                            let r = !1,
                                o = 0,
                                i = [0, 0, 0, 0, 0, 0, 0];
                            for (let l = 0; l < this.size; l++) this.modules[n][l] == r ? 5 == ++o ? e += t.PENALTY_N1 : o > 5 && e++ : (this.finderPenaltyAddHistory(o, i), r || (e += this.finderPenaltyCountPatterns(i) * t.PENALTY_N3), r = this.modules[n][l], o = 1);
                            e += this.finderPenaltyTerminateAndCount(r, o, i) * t.PENALTY_N3
                        }
                        for (let n = 0; n < this.size; n++) {
                            let r = !1,
                                o = 0,
                                i = [0, 0, 0, 0, 0, 0, 0];
                            for (let l = 0; l < this.size; l++) this.modules[l][n] == r ? 5 == ++o ? e += t.PENALTY_N1 : o > 5 && e++ : (this.finderPenaltyAddHistory(o, i), r || (e += this.finderPenaltyCountPatterns(i) * t.PENALTY_N3), r = this.modules[l][n], o = 1);
                            e += this.finderPenaltyTerminateAndCount(r, o, i) * t.PENALTY_N3
                        }
                        for (let n = 0; n < this.size - 1; n++)
                            for (let r = 0; r < this.size - 1; r++) {
                                let o = this.modules[n][r];
                                o == this.modules[n][r + 1] && o == this.modules[n + 1][r] && o == this.modules[n + 1][r + 1] && (e += t.PENALTY_N2)
                            }
                        let n = 0;
                        for (let e of this.modules) n = e.reduce((e, t) => e + +!!t, n);
                        let r = this.size * this.size,
                            i = Math.ceil(Math.abs(20 * n - 10 * r) / r) - 1;
                        return o(0 <= i && i <= 9), o(0 <= (e += i * t.PENALTY_N4) && e <= 2568888), e
                    }
                    getAlignmentPatternPositions() {
                        if (1 == this.version) return []; {
                            let e = Math.floor(this.version / 7) + 2,
                                t = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2)),
                                n = [6];
                            for (let r = this.size - 7; n.length < e; r -= t) n.splice(1, 0, r);
                            return n
                        }
                    }
                    static getNumRawDataModules(e) {
                        if (e < t.MIN_VERSION || e > t.MAX_VERSION) throw RangeError("Version number out of range");
                        let n = (16 * e + 128) * e + 64;
                        if (e >= 2) {
                            let t = Math.floor(e / 7) + 2;
                            n -= (25 * t - 10) * t - 55, e >= 7 && (n -= 36)
                        }
                        return o(208 <= n && n <= 29648), n
                    }
                    static getNumDataCodewords(e, n) {
                        return Math.floor(t.getNumRawDataModules(e) / 8) - t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e] * t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]
                    }
                    static reedSolomonComputeDivisor(e) {
                        if (e < 1 || e > 255) throw RangeError("Degree out of range");
                        let n = [];
                        for (let t = 0; t < e - 1; t++) n.push(0);
                        n.push(1);
                        let r = 1;
                        for (let o = 0; o < e; o++) {
                            for (let e = 0; e < n.length; e++) n[e] = t.reedSolomonMultiply(n[e], r), e + 1 < n.length && (n[e] ^= n[e + 1]);
                            r = t.reedSolomonMultiply(r, 2)
                        }
                        return n
                    }
                    static reedSolomonComputeRemainder(e, n) {
                        let r = n.map(e => 0);
                        for (let o of e) {
                            let e = o ^ r.shift();
                            r.push(0), n.forEach((n, o) => r[o] ^= t.reedSolomonMultiply(n, e))
                        }
                        return r
                    }
                    static reedSolomonMultiply(e, t) {
                        if (e >>> 8 != 0 || t >>> 8 != 0) throw RangeError("Byte out of range");
                        let n = 0;
                        for (let r = 7; r >= 0; r--) n = n << 1 ^ (n >>> 7) * 285 ^ (t >>> r & 1) * e;
                        return o(n >>> 8 == 0), n
                    }
                    finderPenaltyCountPatterns(e) {
                        let t = e[1];
                        o(t <= 3 * this.size);
                        let n = t > 0 && e[2] == t && e[3] == 3 * t && e[4] == t && e[5] == t;
                        return (n && e[0] >= 4 * t && e[6] >= t ? 1 : 0) + (n && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
                    }
                    finderPenaltyTerminateAndCount(e, t, n) {
                        return e && (this.finderPenaltyAddHistory(t, n), t = 0), t += this.size, this.finderPenaltyAddHistory(t, n), this.finderPenaltyCountPatterns(n)
                    }
                    finderPenaltyAddHistory(e, t) {
                        0 == t[0] && (e += this.size), t.pop(), t.unshift(e)
                    }
                    constructor(e, n, r, i) {
                        if (this.version = e, this.errorCorrectionLevel = n, this.modules = [], this.isFunction = [], e < t.MIN_VERSION || e > t.MAX_VERSION) throw RangeError("Version value out of range");
                        if (i < -1 || i > 7) throw RangeError("Mask value out of range");
                        this.size = 4 * e + 17;
                        let l = [];
                        for (let e = 0; e < this.size; e++) l.push(!1);
                        for (let e = 0; e < this.size; e++) this.modules.push(l.slice()), this.isFunction.push(l.slice());
                        this.drawFunctionPatterns();
                        let a = this.addEccAndInterleave(r);
                        if (this.drawCodewords(a), -1 == i) {
                            let e = 1e9;
                            for (let t = 0; t < 8; t++) {
                                this.applyMask(t), this.drawFormatBits(t);
                                let n = this.getPenaltyScore();
                                n < e && (i = t, e = n), this.applyMask(t)
                            }
                        }
                        o(0 <= i && i <= 7), this.mask = i, this.applyMask(i), this.drawFormatBits(i), this.isFunction = []
                    }
                };

                function n(e, t, n) {
                    if (t < 0 || t > 31 || e >>> t != 0) throw RangeError("Value out of range");
                    for (let r = t - 1; r >= 0; r--) n.push(e >>> r & 1)
                }

                function r(e, t) {
                    return (e >>> t & 1) != 0
                }

                function o(e) {
                    if (!e) throw Error("Assertion error")
                }
                t.MIN_VERSION = 1, t.MAX_VERSION = 40, t.PENALTY_N1 = 3, t.PENALTY_N2 = 3, t.PENALTY_N3 = 40, t.PENALTY_N4 = 10, t.ECC_CODEWORDS_PER_BLOCK = [
                    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
                    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
                ], t.NUM_ERROR_CORRECTION_BLOCKS = [
                    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
                    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
                    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
                    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
                ], e.QrCode = t;
                let i = class {
                        static makeBytes(e) {
                            let t = [];
                            for (let r of e) n(r, 8, t);
                            return new i(i.Mode.BYTE, e.length, t)
                        }
                        static makeNumeric(e) {
                            if (!i.isNumeric(e)) throw RangeError("String contains non-numeric characters");
                            let t = [];
                            for (let r = 0; r < e.length;) {
                                let o = Math.min(e.length - r, 3);
                                n(parseInt(e.substr(r, o), 10), 3 * o + 1, t), r += o
                            }
                            return new i(i.Mode.NUMERIC, e.length, t)
                        }
                        static makeAlphanumeric(e) {
                            let t;
                            if (!i.isAlphanumeric(e)) throw RangeError("String contains unencodable characters in alphanumeric mode");
                            let r = [];
                            for (t = 0; t + 2 <= e.length; t += 2) {
                                let o = 45 * i.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));
                                n(o += i.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t + 1)), 11, r)
                            }
                            return t < e.length && n(i.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)), 6, r), new i(i.Mode.ALPHANUMERIC, e.length, r)
                        }
                        static makeSegments(e) {
                            return "" == e ? [] : i.isNumeric(e) ? [i.makeNumeric(e)] : i.isAlphanumeric(e) ? [i.makeAlphanumeric(e)] : [i.makeBytes(i.toUtf8ByteArray(e))]
                        }
                        static makeEci(e) {
                            let t = [];
                            if (e < 0) throw RangeError("ECI assignment value out of range");
                            if (e < 128) n(e, 8, t);
                            else if (e < 16384) n(2, 2, t), n(e, 14, t);
                            else if (e < 1e6) n(6, 3, t), n(e, 21, t);
                            else throw RangeError("ECI assignment value out of range");
                            return new i(i.Mode.ECI, 0, t)
                        }
                        static isNumeric(e) {
                            return i.NUMERIC_REGEX.test(e)
                        }
                        static isAlphanumeric(e) {
                            return i.ALPHANUMERIC_REGEX.test(e)
                        }
                        getData() {
                            return this.bitData.slice()
                        }
                        static getTotalBits(e, t) {
                            let n = 0;
                            for (let r of e) {
                                let e = r.mode.numCharCountBits(t);
                                if (r.numChars >= 1 << e) return 1 / 0;
                                n += 4 + e + r.bitData.length
                            }
                            return n
                        }
                        static toUtf8ByteArray(e) {
                            e = encodeURI(e);
                            let t = [];
                            for (let n = 0; n < e.length; n++) "%" != e.charAt(n) ? t.push(e.charCodeAt(n)) : (t.push(parseInt(e.substr(n + 1, 2), 16)), n += 2);
                            return t
                        }
                        constructor(e, t, n) {
                            if (this.mode = e, this.numChars = t, this.bitData = n, t < 0) throw RangeError("Invalid argument");
                            this.bitData = n.slice()
                        }
                    },
                    l = i;
                l.NUMERIC_REGEX = /^[0-9]*$/, l.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, l.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", e.QrSegment = l
            })(i || (i = {})), (e => {
                let t = class {
                    constructor(e, t) {
                        this.ordinal = e, this.formatBits = t
                    }
                };
                t.LOW = new t(0, 1), t.MEDIUM = new t(1, 0), t.QUARTILE = new t(2, 3), t.HIGH = new t(3, 2), e.Ecc = t
            })((r = i || (i = {})).QrCode || (r.QrCode = {})), (e => {
                let t = class {
                    numCharCountBits(e) {
                        return this.numBitsCharCount[Math.floor((e + 7) / 17)]
                    }
                    constructor(e, t) {
                        this.modeBits = e, this.numBitsCharCount = t
                    }
                };
                t.NUMERIC = new t(1, [10, 12, 14]), t.ALPHANUMERIC = new t(2, [9, 11, 13]), t.BYTE = new t(4, [8, 16, 16]), t.KANJI = new t(8, [8, 10, 12]), t.ECI = new t(7, [0, 0, 0]), e.Mode = t
            })((o = i || (i = {})).QrSegment || (o.QrSegment = {}));
            var p = i,
                m = {
                    L: p.QrCode.Ecc.LOW,
                    M: p.QrCode.Ecc.MEDIUM,
                    Q: p.QrCode.Ecc.QUARTILE,
                    H: p.QrCode.Ecc.HIGH
                };

            function g(e) {
                let {
                    value: t,
                    size: n = 128,
                    level: r = "L",
                    bgColor: o = "#FFFFFF",
                    fgColor: i = "#000000",
                    includeMargin: a = !1,
                    imageSettings: s
                } = e, u = h(e, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]), c = p.QrCode.encodeText(t, m[r]).getModules(), f = 4 * !!a, g = c.length + 2 * f, v = function(e, t, n, r) {
                    if (null == r) return null;
                    let o = e.length + 4 * !!n * 2,
                        i = Math.floor(.1 * t),
                        l = o / t,
                        a = (r.width || i) * l,
                        s = (r.height || i) * l,
                        u = null == r.x ? e.length / 2 - a / 2 : r.x * l,
                        c = null == r.y ? e.length / 2 - s / 2 : r.y * l,
                        f = null;
                    if (r.excavate) {
                        let e = Math.floor(u),
                            t = Math.floor(c),
                            n = Math.ceil(a + u - e),
                            r = Math.ceil(s + c - t);
                        f = {
                            x: e,
                            y: t,
                            w: n,
                            h: r
                        }
                    }
                    return {
                        x: u,
                        y: c,
                        h: s,
                        w: a,
                        excavation: f
                    }
                }(c, n, a, s), y = null;
                if (null != s && null != v) {
                    if (null != v.excavation) {
                        var w, b;
                        w = c, b = v.excavation, c = w.slice().map((e, t) => t < b.y || t >= b.y + b.h ? e : e.map((e, t) => (t < b.x || t >= b.x + b.w) && e))
                    }
                    y = l.createElement("image", {
                        xlinkHref: s.src,
                        height: v.h,
                        width: v.w,
                        x: v.x + f,
                        y: v.y + f,
                        preserveAspectRatio: "none"
                    })
                }
                let E = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = [];
                    return e.forEach(function(e, r) {
                        let o = null;
                        e.forEach(function(i, l) {
                            if (!i && null !== o) {
                                n.push("M".concat(o + t, " ").concat(r + t, "h").concat(l - o, "v1H").concat(o + t, "z")), o = null;
                                return
                            }
                            if (l === e.length - 1) {
                                if (!i) return;
                                null === o ? n.push("M".concat(l + t, ",").concat(r + t, " h1v1H").concat(l + t, "z")) : n.push("M".concat(o + t, ",").concat(r + t, " h").concat(l + 1 - o, "v1H").concat(o + t, "z"));
                                return
                            }
                            i && null === o && (o = l)
                        })
                    }), n.join("")
                }(c, f);
                return l.createElement("svg", d({
                    height: n,
                    width: n,
                    viewBox: "0 0 ".concat(g, " ").concat(g)
                }, u), l.createElement("path", {
                    fill: o,
                    d: "M0,0 h".concat(g, "v").concat(g, "H0z"),
                    shapeRendering: "crispEdges"
                }), l.createElement("path", {
                    fill: i,
                    d: E,
                    shapeRendering: "crispEdges"
                }), y)
            }! function() {
                try {
                    new Path2D().addPath(new Path2D)
                } catch (e) {
                    return !1
                }
            }()
        },
        5683: function(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach(function(t) {
                            e.addRange(t)
                        }), t && t.focus()
                    }
            }
        },
        2390: function(e, t, n) {
            "use strict";
            n.d(t, {
                RR: () => a,
                cv: () => u,
                dp: () => f,
                oo: () => i,
                uY: () => c
            });
            var r = n(1601);

            function o(e, t, n) {
                let o, {
                        reference: i,
                        floating: l
                    } = e,
                    a = (0, r.Qq)(t),
                    s = (0, r.Wh)(t),
                    u = (0, r.I4)(s),
                    c = (0, r.k3)(t),
                    f = "y" === a,
                    d = i.x + i.width / 2 - l.width / 2,
                    h = i.y + i.height / 2 - l.height / 2,
                    p = i[u] / 2 - l[u] / 2;
                switch (c) {
                    case "top":
                        o = {
                            x: d,
                            y: i.y - l.height
                        };
                        break;
                    case "bottom":
                        o = {
                            x: d,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        o = {
                            x: i.x + i.width,
                            y: h
                        };
                        break;
                    case "left":
                        o = {
                            x: i.x - l.width,
                            y: h
                        };
                        break;
                    default:
                        o = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch ((0, r.hp)(t)) {
                    case "start":
                        o[s] -= p * (n && f ? -1 : 1);
                        break;
                    case "end":
                        o[s] += p * (n && f ? -1 : 1)
                }
                return o
            }
            let i = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: i = "absolute",
                    middleware: l = [],
                    platform: a
                } = n, s = l.filter(Boolean), u = await (null == a.isRTL ? void 0 : a.isRTL(t)), c = await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i
                }), {
                    x: f,
                    y: d
                } = o(c, r, u), h = r, p = {}, m = 0;
                for (let n = 0; n < s.length; n++) {
                    let {
                        name: l,
                        fn: g
                    } = s[n], {
                        x: v,
                        y: y,
                        data: w,
                        reset: b
                    } = await g({
                        x: f,
                        y: d,
                        initialPlacement: r,
                        placement: h,
                        strategy: i,
                        middlewareData: p,
                        rects: c,
                        platform: a,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    if (f = null != v ? v : f, d = null != y ? y : d, p = { ...p,
                            [l]: { ...p[l],
                                ...w
                            }
                        }, b && m <= 50) {
                        m++, "object" == typeof b && (b.placement && (h = b.placement), b.rects && (c = !0 === b.rects ? await a.getElementRects({
                            reference: e,
                            floating: t,
                            strategy: i
                        }) : b.rects), {
                            x: f,
                            y: d
                        } = o(c, h, u)), n = -1;
                        continue
                    }
                }
                return {
                    x: f,
                    y: d,
                    placement: h,
                    strategy: i,
                    middlewareData: p
                }
            };
            async function l(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: o,
                    y: i,
                    platform: l,
                    rects: a,
                    elements: s,
                    strategy: u
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: f = "viewport",
                    elementContext: d = "floating",
                    altBoundary: h = !1,
                    padding: p = 0
                } = (0, r.ku)(t, e), m = (0, r.yd)(p), g = s[h ? "floating" === d ? "reference" : "floating" : d], v = (0, r.JB)(await l.getClippingRect({
                    element: null == (n = await (null == l.isElement ? void 0 : l.isElement(g))) || n ? g : g.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(s.floating)),
                    boundary: c,
                    rootBoundary: f,
                    strategy: u
                })), y = "floating" === d ? { ...a.floating,
                    x: o,
                    y: i
                } : a.reference, w = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(s.floating)), b = await (null == l.isElement ? void 0 : l.isElement(w)) && await (null == l.getScale ? void 0 : l.getScale(w)) || {
                    x: 1,
                    y: 1
                }, E = (0, r.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: y,
                    offsetParent: w,
                    strategy: u
                }) : y);
                return {
                    top: (v.top - E.top + m.top) / b.y,
                    bottom: (E.bottom - v.bottom + m.bottom) / b.y,
                    left: (v.left - E.left + m.left) / b.x,
                    right: (E.right - v.right + m.right) / b.x
                }
            }
            let a = function(e) {
                return void 0 === e && (e = {}), {
                    name: "flip",
                    options: e,
                    async fn(t) {
                        var n, o, i, a;
                        let {
                            placement: s,
                            middlewareData: u,
                            rects: c,
                            initialPlacement: f,
                            platform: d,
                            elements: h
                        } = t, {
                            mainAxis: p = !0,
                            crossAxis: m = !0,
                            fallbackPlacements: g,
                            fallbackStrategy: v = "bestFit",
                            fallbackAxisSideDirection: y = "none",
                            flipAlignment: w = !0,
                            ...b
                        } = (0, r.ku)(e, t), E = (0, r.k3)(s), x = (0, r.k3)(f) === f, R = await (null == d.isRTL ? void 0 : d.isRTL(h.floating)), C = g || (x || !w ? [(0, r.pw)(f)] : (0, r.gy)(f));
                        g || "none" === y || C.push(...(0, r.KX)(f, w, y, R));
                        let M = [f, ...C],
                            A = await l(t, b),
                            S = [],
                            k = (null == (n = u.flip) ? void 0 : n.overflows) || [];
                        if (p && S.push(A[E]), m) {
                            let e = (0, r.i8)(s, c, R);
                            S.push(A[e[0]], A[e[1]])
                        }
                        if (k = [...k, {
                                placement: s,
                                overflows: S
                            }], !S.every(e => e <= 0)) {
                            let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                                t = M[e];
                            if (t) return {
                                data: {
                                    index: e,
                                    overflows: k
                                },
                                reset: {
                                    placement: t
                                }
                            };
                            let n = null == (i = k.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                            if (!n) switch (v) {
                                case "bestFit":
                                    {
                                        let e = null == (a = k.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : a[0];e && (n = e);
                                        break
                                    }
                                case "initialPlacement":
                                    n = f
                            }
                            if (s !== n) return {
                                reset: {
                                    placement: n
                                }
                            }
                        }
                        return {}
                    }
                }
            };
            async function s(e, t) {
                let {
                    placement: n,
                    platform: o,
                    elements: i
                } = e, l = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), a = (0, r.k3)(n), s = (0, r.hp)(n), u = "y" === (0, r.Qq)(n), c = ["left", "top"].includes(a) ? -1 : 1, f = l && u ? -1 : 1, d = (0, r.ku)(t, e), {
                    mainAxis: h,
                    crossAxis: p,
                    alignmentAxis: m
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...d
                };
                return s && "number" == typeof m && (p = "end" === s ? -1 * m : m), u ? {
                    x: p * f,
                    y: h * c
                } : {
                    x: h * c,
                    y: p * f
                }
            }
            let u = function(e) {
                    return void 0 === e && (e = 0), {
                        name: "offset",
                        options: e,
                        async fn(t) {
                            let {
                                x: n,
                                y: r
                            } = t, o = await s(t, e);
                            return {
                                x: n + o.x,
                                y: r + o.y,
                                data: o
                            }
                        }
                    }
                },
                c = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            let {
                                x: n,
                                y: o,
                                placement: i
                            } = t, {
                                mainAxis: a = !0,
                                crossAxis: s = !1,
                                limiter: u = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: n
                                        } = e;
                                        return {
                                            x: t,
                                            y: n
                                        }
                                    }
                                },
                                ...c
                            } = (0, r.ku)(e, t), f = {
                                x: n,
                                y: o
                            }, d = await l(t, c), h = (0, r.Qq)((0, r.k3)(i)), p = (0, r.Rn)(h), m = f[p], g = f[h];
                            if (a) {
                                let e = "y" === p ? "top" : "left",
                                    t = "y" === p ? "bottom" : "right",
                                    n = m + d[e],
                                    o = m - d[t];
                                m = (0, r.uZ)(n, m, o)
                            }
                            if (s) {
                                let e = "y" === h ? "top" : "left",
                                    t = "y" === h ? "bottom" : "right",
                                    n = g + d[e],
                                    o = g - d[t];
                                g = (0, r.uZ)(n, g, o)
                            }
                            let v = u.fn({ ...t,
                                [p]: m,
                                [h]: g
                            });
                            return { ...v,
                                data: {
                                    x: v.x - n,
                                    y: v.y - o
                                }
                            }
                        }
                    }
                },
                f = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "size",
                        options: e,
                        async fn(t) {
                            let n, o;
                            let {
                                placement: i,
                                rects: a,
                                platform: s,
                                elements: u
                            } = t, {
                                apply: c = () => {},
                                ...f
                            } = (0, r.ku)(e, t), d = await l(t, f), h = (0, r.k3)(i), p = (0, r.hp)(i), m = "y" === (0, r.Qq)(i), {
                                width: g,
                                height: v
                            } = a.floating;
                            "top" === h || "bottom" === h ? (n = h, o = p === (await (null == s.isRTL ? void 0 : s.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (o = h, n = "end" === p ? "top" : "bottom");
                            let y = v - d[n],
                                w = g - d[o],
                                b = !t.middlewareData.shift,
                                E = y,
                                x = w;
                            if (m) {
                                let e = g - d.left - d.right;
                                x = p || b ? (0, r.VV)(w, e) : e
                            } else {
                                let e = v - d.top - d.bottom;
                                E = p || b ? (0, r.VV)(y, e) : e
                            }
                            if (b && !p) {
                                let e = (0, r.Fp)(d.left, 0),
                                    t = (0, r.Fp)(d.right, 0),
                                    n = (0, r.Fp)(d.top, 0),
                                    o = (0, r.Fp)(d.bottom, 0);
                                m ? x = g - 2 * (0 !== e || 0 !== t ? e + t : (0, r.Fp)(d.left, d.right)) : E = v - 2 * (0 !== n || 0 !== o ? n + o : (0, r.Fp)(d.top, d.bottom))
                            }
                            await c({ ...t,
                                availableWidth: x,
                                availableHeight: E
                            });
                            let R = await s.getDimensions(u.floating);
                            return g !== R.width || v !== R.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                }
        },
        6089: function(e, t, n) {
            "use strict";
            n.d(t, {
                Me: () => y,
                oo: () => w
            });
            var r = n(1601),
                o = n(2390),
                i = n(6164);

            function l(e) {
                let t = (0, i.Dx)(e),
                    n = parseFloat(t.width) || 0,
                    o = parseFloat(t.height) || 0,
                    l = (0, i.Re)(e),
                    a = l ? e.offsetWidth : n,
                    s = l ? e.offsetHeight : o,
                    u = (0, r.NM)(n) !== a || (0, r.NM)(o) !== s;
                return u && (n = a, o = s), {
                    width: n,
                    height: o,
                    $: u
                }
            }

            function a(e) {
                return (0, i.kK)(e) ? e : e.contextElement
            }

            function s(e) {
                let t = a(e);
                if (!(0, i.Re)(t)) return (0, r.ze)(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: o,
                        height: s,
                        $: u
                    } = l(t),
                    c = (u ? (0, r.NM)(n.width) : n.width) / o,
                    f = (u ? (0, r.NM)(n.height) : n.height) / s;
                return c && Number.isFinite(c) || (c = 1), f && Number.isFinite(f) || (f = 1), {
                    x: c,
                    y: f
                }
            }
            let u = (0, r.ze)(0);

            function c(e) {
                let t = (0, i.Jj)(e);
                return (0, i.Pf)() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : u
            }

            function f(e, t, n, o) {
                var l;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let u = e.getBoundingClientRect(),
                    f = a(e),
                    d = (0, r.ze)(1);
                t && (o ? (0, i.kK)(o) && (d = s(o)) : d = s(e));
                let h = (void 0 === (l = n) && (l = !1), o && (!l || o === (0, i.Jj)(f)) && l) ? c(f) : (0, r.ze)(0),
                    p = (u.left + h.x) / d.x,
                    m = (u.top + h.y) / d.y,
                    g = u.width / d.x,
                    v = u.height / d.y;
                if (f) {
                    let e = (0, i.Jj)(f),
                        t = o && (0, i.kK)(o) ? (0, i.Jj)(o) : o,
                        n = e.frameElement;
                    for (; n && o && t !== e;) {
                        let e = s(n),
                            t = n.getBoundingClientRect(),
                            r = (0, i.Dx)(n),
                            o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            l = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                        p *= e.x, m *= e.y, g *= e.x, v *= e.y, p += o, m += l, n = (0, i.Jj)(n).frameElement
                    }
                }
                return (0, r.JB)({
                    width: g,
                    height: v,
                    x: p,
                    y: m
                })
            }

            function d(e) {
                return f((0, i.tF)(e)).left + (0, i.Lw)(e).scrollLeft
            }

            function h(e, t, n) {
                let o;
                if ("viewport" === t) o = function(e, t) {
                    let n = (0, i.Jj)(e),
                        r = (0, i.tF)(e),
                        o = n.visualViewport,
                        l = r.clientWidth,
                        a = r.clientHeight,
                        s = 0,
                        u = 0;
                    if (o) {
                        l = o.width, a = o.height;
                        let e = (0, i.Pf)();
                        (!e || e && "fixed" === t) && (s = o.offsetLeft, u = o.offsetTop)
                    }
                    return {
                        width: l,
                        height: a,
                        x: s,
                        y: u
                    }
                }(e, n);
                else if ("document" === t) o = function(e) {
                    let t = (0, i.tF)(e),
                        n = (0, i.Lw)(e),
                        o = e.ownerDocument.body,
                        l = (0, r.Fp)(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
                        a = (0, r.Fp)(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight),
                        s = -n.scrollLeft + d(e),
                        u = -n.scrollTop;
                    return "rtl" === (0, i.Dx)(o).direction && (s += (0, r.Fp)(t.clientWidth, o.clientWidth) - l), {
                        width: l,
                        height: a,
                        x: s,
                        y: u
                    }
                }((0, i.tF)(e));
                else if ((0, i.kK)(t)) o = function(e, t) {
                    let n = f(e, !0, "fixed" === t),
                        o = n.top + e.clientTop,
                        l = n.left + e.clientLeft,
                        a = (0, i.Re)(e) ? s(e) : (0, r.ze)(1),
                        u = e.clientWidth * a.x,
                        c = e.clientHeight * a.y;
                    return {
                        width: u,
                        height: c,
                        x: l * a.x,
                        y: o * a.y
                    }
                }(t, n);
                else {
                    let n = c(e);
                    o = { ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return (0, r.JB)(o)
            }

            function p(e, t) {
                return (0, i.Re)(e) && "fixed" !== (0, i.Dx)(e).position ? t ? t(e) : e.offsetParent : null
            }

            function m(e, t) {
                let n = (0, i.Jj)(e);
                if (!(0, i.Re)(e)) return n;
                let r = p(e, t);
                for (; r && (0, i.Ze)(r) && "static" === (0, i.Dx)(r).position;) r = p(r, t);
                return r && ("html" === (0, i.wk)(r) || "body" === (0, i.wk)(r) && "static" === (0, i.Dx)(r).position && !(0, i.hT)(r)) ? n : r || (0, i.gQ)(e) || n
            }
            let g = async function(e) {
                    let {
                        reference: t,
                        floating: n,
                        strategy: o
                    } = e, l = this.getOffsetParent || m, a = this.getDimensions;
                    return {
                        reference: function(e, t, n) {
                            let o = (0, i.Re)(t),
                                l = (0, i.tF)(t),
                                a = "fixed" === n,
                                s = f(e, !0, a, t),
                                u = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                c = (0, r.ze)(0);
                            if (o || !o && !a) {
                                if (("body" !== (0, i.wk)(t) || (0, i.ao)(l)) && (u = (0, i.Lw)(t)), o) {
                                    let e = f(t, !0, a, t);
                                    c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
                                } else l && (c.x = d(l))
                            }
                            return {
                                x: s.left + u.scrollLeft - c.x,
                                y: s.top + u.scrollTop - c.y,
                                width: s.width,
                                height: s.height
                            }
                        }(t, await l(n), o),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await a(n)
                        }
                    }
                },
                v = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            rect: t,
                            offsetParent: n,
                            strategy: o
                        } = e, l = (0, i.Re)(n), a = (0, i.tF)(n);
                        if (n === a) return t;
                        let u = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            c = (0, r.ze)(1),
                            d = (0, r.ze)(0);
                        if ((l || !l && "fixed" !== o) && (("body" !== (0, i.wk)(n) || (0, i.ao)(a)) && (u = (0, i.Lw)(n)), (0, i.Re)(n))) {
                            let e = f(n);
                            c = s(n), d.x = e.x + n.clientLeft, d.y = e.y + n.clientTop
                        }
                        return {
                            width: t.width * c.x,
                            height: t.height * c.y,
                            x: t.x * c.x - u.scrollLeft * c.x + d.x,
                            y: t.y * c.y - u.scrollTop * c.y + d.y
                        }
                    },
                    getDocumentElement: i.tF,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: o,
                            strategy: l
                        } = e, a = [..."clippingAncestors" === n ? function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = (0, i.Kx)(e).filter(e => (0, i.kK)(e) && "body" !== (0, i.wk)(e)),
                                o = null,
                                l = "fixed" === (0, i.Dx)(e).position,
                                a = l ? (0, i.Ow)(e) : e;
                            for (;
                                (0, i.kK)(a) && !(0, i.Py)(a);) {
                                let t = (0, i.Dx)(a),
                                    n = (0, i.hT)(a);
                                n || "fixed" !== t.position || (o = null), (l ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || (0, i.ao)(a) && !n && function e(t, n) {
                                    let r = (0, i.Ow)(t);
                                    return !(r === n || !(0, i.kK)(r) || (0, i.Py)(r)) && ("fixed" === (0, i.Dx)(r).position || e(r, n))
                                }(e, a)) ? r = r.filter(e => e !== a) : o = t, a = (0, i.Ow)(a)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), o], s = a[0], u = a.reduce((e, n) => {
                            let o = h(t, n, l);
                            return e.top = (0, r.Fp)(o.top, e.top), e.right = (0, r.VV)(o.right, e.right), e.bottom = (0, r.VV)(o.bottom, e.bottom), e.left = (0, r.Fp)(o.left, e.left), e
                        }, h(t, s, l));
                        return {
                            width: u.right - u.left,
                            height: u.bottom - u.top,
                            x: u.left,
                            y: u.top
                        }
                    },
                    getOffsetParent: m,
                    getElementRects: g,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        return l(e)
                    },
                    getScale: s,
                    isElement: i.kK,
                    isRTL: function(e) {
                        return "rtl" === (0, i.Dx)(e).direction
                    }
                };

            function y(e, t, n, o) {
                let l;
                void 0 === o && (o = {});
                let {
                    ancestorScroll: s = !0,
                    ancestorResize: u = !0,
                    elementResize: c = "function" == typeof ResizeObserver,
                    layoutShift: d = "function" == typeof IntersectionObserver,
                    animationFrame: h = !1
                } = o, p = a(e), m = s || u ? [...p ? (0, i.Kx)(p) : [], ...(0, i.Kx)(t)] : [];
                m.forEach(e => {
                    s && e.addEventListener("scroll", n, {
                        passive: !0
                    }), u && e.addEventListener("resize", n)
                });
                let g = p && d ? function(e, t) {
                        let n, o = null,
                            l = (0, i.tF)(e);

                        function a() {
                            clearTimeout(n), o && o.disconnect(), o = null
                        }
                        return ! function i(s, u) {
                            void 0 === s && (s = !1), void 0 === u && (u = 1), a();
                            let {
                                left: c,
                                top: f,
                                width: d,
                                height: h
                            } = e.getBoundingClientRect();
                            if (s || t(), !d || !h) return;
                            let p = (0, r.GW)(f),
                                m = (0, r.GW)(l.clientWidth - (c + d)),
                                g = {
                                    rootMargin: -p + "px " + -m + "px " + -(0, r.GW)(l.clientHeight - (f + h)) + "px " + -(0, r.GW)(c) + "px",
                                    threshold: (0, r.Fp)(0, (0, r.VV)(1, u)) || 1
                                },
                                v = !0;

                            function y(e) {
                                let t = e[0].intersectionRatio;
                                if (t !== u) {
                                    if (!v) return i();
                                    t ? i(!1, t) : n = setTimeout(() => {
                                        i(!1, 1e-7)
                                    }, 100)
                                }
                                v = !1
                            }
                            try {
                                o = new IntersectionObserver(y, { ...g,
                                    root: l.ownerDocument
                                })
                            } catch (e) {
                                o = new IntersectionObserver(y, g)
                            }
                            o.observe(e)
                        }(!0), a
                    }(p, n) : null,
                    v = -1,
                    y = null;
                c && (y = new ResizeObserver(e => {
                    let [r] = e;
                    r && r.target === p && y && (y.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
                        y && y.observe(t)
                    })), n()
                }), p && !h && y.observe(p), y.observe(t));
                let w = h ? f(e) : null;
                return h && function t() {
                    let r = f(e);
                    w && (r.x !== w.x || r.y !== w.y || r.width !== w.width || r.height !== w.height) && n(), w = r, l = requestAnimationFrame(t)
                }(), n(), () => {
                    m.forEach(e => {
                        s && e.removeEventListener("scroll", n), u && e.removeEventListener("resize", n)
                    }), g && g(), y && y.disconnect(), y = null, h && cancelAnimationFrame(l)
                }
            }
            let w = (e, t, n) => {
                let r = new Map,
                    i = {
                        platform: v,
                        ...n
                    },
                    l = { ...i.platform,
                        _c: r
                    };
                return (0, o.oo)(e, t, { ...i,
                    platform: l
                })
            }
        },
        4170: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                wD: () => eP,
                bQ: () => eF,
                ll: () => eS,
                jV: () => eo,
                mN: () => ei,
                RB: () => el,
                Zm: () => en,
                YF: () => eI
            });
            var o = n(9144),
                i = n.t(o, 2),
                l = n(6164);

            function a(e) {
                let t = e.activeElement;
                for (;
                    (null == (n = t) ? void 0 : null == (r = n.shadowRoot) ? void 0 : r.activeElement) != null;) {
                    var n, r;
                    t = t.shadowRoot.activeElement
                }
                return t
            }

            function s(e, t) {
                if (!e || !t) return !1;
                let n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && (0, l.Zq)(n)) {
                    let n = t;
                    for (; n;) {
                        if (e === n) return !0;
                        n = n.parentNode || n.host
                    }
                }
                return !1
            }

            function u(e) {
                return (null == e ? void 0 : e.ownerDocument) || document
            }

            function c(e, t) {
                return null != t && ("composedPath" in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target))
            }

            function f(e) {
                return "composedPath" in e ? e.composedPath()[0] : e.target
            }

            function d(e) {
                e.preventDefault(), e.stopPropagation()
            }
            var h = n(6089),
                p = n(8315),
                m = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;

            function g(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) != t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!g(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !g(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function v(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function y(e, t) {
                let n = v(e);
                return Math.round(t * n) / n
            }

            function w(e) {
                let t = o.useRef(e);
                return m(() => {
                    t.current = e
                }), t
            }
            var b = 'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
                E = "undefined" == typeof Element,
                x = E ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                R = !E && Element.prototype.getRootNode ? function(e) {
                    var t;
                    return null == e ? void 0 : null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
                } : function(e) {
                    return null == e ? void 0 : e.ownerDocument
                },
                C = function e(t, n) {
                    void 0 === n && (n = !0);
                    var r, o = null == t ? void 0 : null === (r = t.getAttribute) || void 0 === r ? void 0 : r.call(t, "inert");
                    return "" === o || "true" === o || n && t && e(t.parentNode)
                },
                M = function(e) {
                    var t, n = null == e ? void 0 : null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
                    return "" === n || "true" === n
                },
                A = function(e, t, n) {
                    if (C(e)) return [];
                    var r = Array.prototype.slice.apply(e.querySelectorAll(b));
                    return t && x.call(e, b) && r.unshift(e), r = r.filter(n)
                },
                S = function e(t, n, r) {
                    for (var o = [], i = Array.from(t); i.length;) {
                        var l = i.shift();
                        if (!C(l, !1)) {
                            if ("SLOT" === l.tagName) {
                                var a = l.assignedElements(),
                                    s = e(a.length ? a : l.children, !0, r);
                                r.flatten ? o.push.apply(o, s) : o.push({
                                    scopeParent: l,
                                    candidates: s
                                })
                            } else {
                                x.call(l, b) && r.filter(l) && (n || !t.includes(l)) && o.push(l);
                                var u = l.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(l),
                                    c = !C(u, !1) && (!r.shadowRootFilter || r.shadowRootFilter(l));
                                if (u && c) {
                                    var f = e(!0 === u ? l.children : u.children, !0, r);
                                    r.flatten ? o.push.apply(o, f) : o.push({
                                        scopeParent: l,
                                        candidates: f
                                    })
                                } else i.unshift.apply(i, l.children)
                            }
                        }
                    }
                    return o
                },
                k = function(e) {
                    return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
                },
                N = function(e) {
                    if (!e) throw Error("No node provided");
                    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || M(e)) && !k(e) ? 0 : e.tabIndex
                },
                P = function(e, t) {
                    var n = N(e);
                    return n < 0 && t && !k(e) ? 0 : n
                },
                L = function(e, t) {
                    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
                },
                T = function(e) {
                    return "INPUT" === e.tagName
                },
                _ = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n].checked && e[n].form === t) return e[n]
                },
                O = function(e) {
                    if (!e.name) return !0;
                    var t, n = e.form || R(e),
                        r = function(e) {
                            return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                        };
                    if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = r(window.CSS.escape(e.name));
                    else try {
                        t = r(e.name)
                    } catch (e) {
                        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
                    }
                    var o = _(t, e.form);
                    return !o || o === e
                },
                D = function(e) {
                    return T(e) && "radio" === e.type && !O(e)
                },
                F = function(e) {
                    var t, n, r, o, i, l, a, s = e && R(e),
                        u = null === (t = s) || void 0 === t ? void 0 : t.host,
                        c = !1;
                    if (s && s !== e)
                        for (c = !!(null !== (n = u) && void 0 !== n && null !== (r = n.ownerDocument) && void 0 !== r && r.contains(u) || null != e && null !== (o = e.ownerDocument) && void 0 !== o && o.contains(e)); !c && u;) c = !!(null !== (l = u = null === (i = s = R(u)) || void 0 === i ? void 0 : i.host) && void 0 !== l && null !== (a = l.ownerDocument) && void 0 !== a && a.contains(u));
                    return c
                },
                I = function(e) {
                    var t = e.getBoundingClientRect(),
                        n = t.width,
                        r = t.height;
                    return 0 === n && 0 === r
                },
                B = function(e, t) {
                    var n = t.displayCheck,
                        r = t.getShadowRoot;
                    if ("hidden" === getComputedStyle(e).visibility) return !0;
                    var o = x.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                    if (x.call(o, "details:not([open]) *")) return !0;
                    if (n && "full" !== n && "legacy-full" !== n) {
                        if ("non-zero-area" === n) return I(e)
                    } else {
                        if ("function" == typeof r) {
                            for (var i = e; e;) {
                                var l = e.parentElement,
                                    a = R(e);
                                if (l && !l.shadowRoot && !0 === r(l)) return I(e);
                                e = e.assignedSlot ? e.assignedSlot : l || a === e.ownerDocument ? l : a.host
                            }
                            e = i
                        }
                        if (F(e)) return !e.getClientRects().length;
                        if ("legacy-full" !== n) return !0
                    }
                    return !1
                },
                z = function(e) {
                    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                        for (var t = e.parentElement; t;) {
                            if ("FIELDSET" === t.tagName && t.disabled) {
                                for (var n = 0; n < t.children.length; n++) {
                                    var r = t.children.item(n);
                                    if ("LEGEND" === r.tagName) return !!x.call(t, "fieldset[disabled] *") || !r.contains(e)
                                }
                                return !0
                            }
                            t = t.parentElement
                        }
                    return !1
                },
                H = function(e, t) {
                    return !(t.disabled || C(t) || T(t) && "hidden" === t.type || B(t, e) || "DETAILS" === t.tagName && Array.prototype.slice.apply(t.children).some(function(e) {
                        return "SUMMARY" === e.tagName
                    }) || z(t))
                },
                W = function(e, t) {
                    return !(D(t) || 0 > N(t)) && !!H(e, t)
                },
                K = function(e) {
                    var t = parseInt(e.getAttribute("tabindex"), 10);
                    return !!isNaN(t) || !!(t >= 0)
                },
                U = function e(t) {
                    var n = [],
                        r = [];
                    return t.forEach(function(t, o) {
                        var i = !!t.scopeParent,
                            l = i ? t.scopeParent : t,
                            a = P(l, i),
                            s = i ? e(t.candidates) : l;
                        0 === a ? i ? n.push.apply(n, s) : n.push(l) : r.push({
                            documentOrder: o,
                            tabIndex: a,
                            item: t,
                            isScope: i,
                            content: s
                        })
                    }), r.sort(L).reduce(function(e, t) {
                        return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                    }, []).concat(n)
                },
                V = function(e, t) {
                    var n;
                    return U((t = t || {}).getShadowRoot ? S([e], t.includeContainer, {
                        filter: W.bind(null, t),
                        flatten: !1,
                        getShadowRoot: t.getShadowRoot,
                        shadowRootFilter: K
                    }) : A(e, t.includeContainer, W.bind(null, t)))
                };
            let j = 0;

            function Q(e, t) {
                void 0 === t && (t = {});
                let {
                    preventScroll: n = !1,
                    cancelPrevious: r = !0,
                    sync: o = !1
                } = t;
                r && cancelAnimationFrame(j);
                let i = () => null == e ? void 0 : e.focus({
                    preventScroll: n
                });
                o ? i() : j = requestAnimationFrame(i)
            }
            var Y = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;

            function q() {
                return (q = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            let X = !1,
                J = 0,
                G = () => "floating-ui-" + J++,
                Z = i["useId".toString()] || function() {
                    let [e, t] = o.useState(() => X ? G() : void 0);
                    return Y(() => {
                        null == e && t(G())
                    }, []), o.useEffect(() => {
                        X || (X = !0)
                    }, []), e
                };

            function $() {
                let e = new Map;
                return {
                    emit(t, n) {
                        var r;
                        null == (r = e.get(t)) || r.forEach(e => e(n))
                    },
                    on(t, n) {
                        e.set(t, [...e.get(t) || [], n])
                    },
                    off(t, n) {
                        var r;
                        e.set(t, (null == (r = e.get(t)) ? void 0 : r.filter(e => e !== n)) || [])
                    }
                }
            }
            let ee = o.createContext(null),
                et = o.createContext(null),
                en = () => {
                    var e;
                    return (null == (e = o.useContext(ee)) ? void 0 : e.id) || null
                },
                er = () => o.useContext(et);

            function eo(e) {
                let t = Z(),
                    n = er(),
                    r = en(),
                    o = e || r;
                return Y(() => {
                    let e = {
                        id: t,
                        parentId: o
                    };
                    return null == n || n.addNode(e), () => {
                        null == n || n.removeNode(e)
                    }
                }, [n, t, o]), t
            }

            function ei(e) {
                let {
                    children: t,
                    id: n
                } = e, r = en();
                return o.createElement(ee.Provider, {
                    value: o.useMemo(() => ({
                        id: n,
                        parentId: r
                    }), [n, r])
                }, t)
            }

            function el(e) {
                let {
                    children: t
                } = e, n = o.useRef([]), r = o.useCallback(e => {
                    n.current = [...n.current, e]
                }, []), i = o.useCallback(e => {
                    n.current = n.current.filter(t => t !== e)
                }, []), l = o.useState(() => $())[0];
                return o.createElement(et.Provider, {
                    value: o.useMemo(() => ({
                        nodesRef: n,
                        addNode: r,
                        removeNode: i,
                        events: l
                    }), [n, r, i, l])
                }, t)
            }

            function ea(e) {
                return "data-floating-ui-" + e
            }

            function es(e) {
                let t = (0, o.useRef)(e);
                return Y(() => {
                    t.current = e
                }), t
            }

            function eu(e, t) {
                let n = e.filter(e => {
                        var n;
                        return e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
                    }),
                    r = n;
                for (; r.length;) r = e.filter(e => {
                    var t;
                    return null == (t = r) ? void 0 : t.some(t => {
                        var n;
                        return e.parentId === t.id && (null == (n = e.context) ? void 0 : n.open)
                    })
                }), n = n.concat(r);
                return n
            }
            let ec = new WeakMap,
                ef = new WeakSet,
                ed = {},
                eh = 0,
                ep = () => "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
                em = e => e && (e.host || em(e.parentNode)),
                eg = (e, t) => t.map(t => {
                    if (e.contains(t)) return t;
                    let n = em(t);
                    return e.contains(n) ? n : null
                }).filter(e => null != e);

            function ev(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let r = u(e[0]).body;
                return function(e, t, n, r) {
                    let o = "data-floating-ui-inert",
                        i = r ? "inert" : n ? "aria-hidden" : null,
                        l = eg(t, e),
                        a = new Set,
                        s = new Set(l),
                        u = [];
                    ed[o] || (ed[o] = new WeakMap);
                    let c = ed[o];
                    return l.forEach(function e(t) {
                            !(!t || a.has(t)) && (a.add(t), t.parentNode && e(t.parentNode))
                        }),
                        function e(t) {
                            !(!t || s.has(t)) && Array.prototype.forEach.call(t.children, t => {
                                if (a.has(t)) e(t);
                                else {
                                    let e = i ? t.getAttribute(i) : null,
                                        n = null !== e && "false" !== e,
                                        r = (ec.get(t) || 0) + 1,
                                        l = (c.get(t) || 0) + 1;
                                    ec.set(t, r), c.set(t, l), u.push(t), 1 === r && n && ef.add(t), 1 === l && t.setAttribute(o, ""), !n && i && t.setAttribute(i, "true")
                                }
                            })
                        }(t), a.clear(), eh++, () => {
                            u.forEach(e => {
                                let t = (ec.get(e) || 0) - 1,
                                    n = (c.get(e) || 0) - 1;
                                ec.set(e, t), c.set(e, n), t || (!ef.has(e) && i && e.removeAttribute(i), ef.delete(e)), n || e.removeAttribute(o)
                            }), --eh || (ec = new WeakMap, ec = new WeakMap, ef = new WeakSet, ed = {})
                        }
                }(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n)
            }
            let ey = () => ({
                getShadowRoot: !0,
                displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
            });

            function ew(e, t) {
                let n = V(e, ey());
                "prev" === t && n.reverse();
                let r = n.indexOf(a(u(e)));
                return n.slice(r + 1)[0]
            }

            function eb() {
                return ew(document.body, "next")
            }

            function eE() {
                return ew(document.body, "prev")
            }

            function ex(e, t) {
                let n = t || e.currentTarget,
                    r = e.relatedTarget;
                return !r || !s(n, r)
            }
            let eR = {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "fixed",
                whiteSpace: "nowrap",
                width: "1px",
                top: 0,
                left: 0
            };

            function eC(e) {
                "Tab" === e.key && (e.target, clearTimeout(r))
            }
            let eM = o.forwardRef(function(e, t) {
                    let [n, r] = o.useState();
                    Y(() => (/apple/i.test(navigator.vendor) && r("button"), document.addEventListener("keydown", eC), () => {
                        document.removeEventListener("keydown", eC)
                    }), []);
                    let i = {
                        ref: t,
                        tabIndex: 0,
                        role: n,
                        "aria-hidden": !n || void 0,
                        [ea("focus-guard")]: "",
                        style: eR
                    };
                    return o.createElement("span", q({}, e, i))
                }),
                eA = o.createContext(null);

            function eS(e) {
                let {
                    children: t,
                    id: n,
                    root: r = null,
                    preserveTabOrder: i = !0
                } = e, a = function(e) {
                    let {
                        id: t,
                        root: n
                    } = void 0 === e ? {} : e, [r, i] = o.useState(null), a = Z(), s = ek(), u = o.useMemo(() => ({
                        id: t,
                        root: n,
                        portalContext: s,
                        uniqueId: a
                    }), [t, n, s, a]), c = o.useRef();
                    return Y(() => () => {
                        null == r || r.remove()
                    }, [r, u]), Y(() => {
                        if (c.current === u) return;
                        c.current = u;
                        let {
                            id: e,
                            root: t,
                            portalContext: n,
                            uniqueId: r
                        } = u, o = e ? document.getElementById(e) : null, a = ea("portal");
                        if (o) {
                            let e = document.createElement("div");
                            e.id = r, e.setAttribute(a, ""), o.appendChild(e), i(e)
                        } else {
                            let o = t || (null == n ? void 0 : n.portalNode);
                            o && !(0, l.kK)(o) && (o = o.current), o = o || document.body;
                            let s = null;
                            e && ((s = document.createElement("div")).id = e, o.appendChild(s));
                            let u = document.createElement("div");
                            u.id = r, u.setAttribute(a, ""), (o = s || o).appendChild(u), i(u)
                        }
                    }, [u]), r
                }({
                    id: n,
                    root: r
                }), [s, u] = o.useState(null), c = o.useRef(null), f = o.useRef(null), d = o.useRef(null), h = o.useRef(null), m = !!s && !s.modal && s.open && i && !!(r || a);
                return o.useEffect(() => {
                    if (a && i && (null == s || !s.modal)) return a.addEventListener("focusin", e, !0), a.addEventListener("focusout", e, !0), () => {
                        a.removeEventListener("focusin", e, !0), a.removeEventListener("focusout", e, !0)
                    };

                    function e(e) {
                        a && ex(e) && ("focusin" === e.type ? function(e) {
                            e.querySelectorAll("[data-tabindex]").forEach(e => {
                                let t = e.dataset.tabindex;
                                delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
                            })
                        } : function(e) {
                            V(e, ey()).forEach(e => {
                                e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
                            })
                        })(a)
                    }
                }, [a, i, null == s ? void 0 : s.modal]), o.createElement(eA.Provider, {
                    value: o.useMemo(() => ({
                        preserveTabOrder: i,
                        beforeOutsideRef: c,
                        afterOutsideRef: f,
                        beforeInsideRef: d,
                        afterInsideRef: h,
                        portalNode: a,
                        setFocusManagerState: u
                    }), [i, a])
                }, m && a && o.createElement(eM, {
                    "data-type": "outside",
                    ref: c,
                    onFocus: e => {
                        if (ex(e, a)) {
                            var t;
                            null == (t = d.current) || t.focus()
                        } else {
                            let e = eE() || (null == s ? void 0 : s.refs.domReference.current);
                            null == e || e.focus()
                        }
                    }
                }), m && a && o.createElement("span", {
                    "aria-owns": a.id,
                    style: eR
                }), a && (0, p.createPortal)(t, a), m && a && o.createElement(eM, {
                    "data-type": "outside",
                    ref: f,
                    onFocus: e => {
                        if (ex(e, a)) {
                            var t;
                            null == (t = h.current) || t.focus()
                        } else {
                            let t = eb() || (null == s ? void 0 : s.refs.domReference.current);
                            null == t || t.focus(), (null == s ? void 0 : s.closeOnFocusOut) && (null == s || s.onOpenChange(!1, e.nativeEvent))
                        }
                    }
                }))
            }
            let ek = () => o.useContext(eA),
                eN = o.forwardRef(function(e, t) {
                    return o.createElement("button", q({}, e, {
                        type: "button",
                        ref: t,
                        tabIndex: -1,
                        style: eR
                    }))
                });

            function eP(e) {
                let {
                    context: t,
                    children: n,
                    disabled: r = !1,
                    order: i = ["content"],
                    guards: c = !0,
                    initialFocus: h = 0,
                    returnFocus: p = !0,
                    modal: m = !0,
                    visuallyHiddenDismiss: g = !1,
                    closeOnFocusOut: v = !0
                } = e, {
                    open: y,
                    refs: w,
                    nodeId: b,
                    onOpenChange: E,
                    events: x,
                    dataRef: R,
                    elements: {
                        domReference: C,
                        floating: M
                    }
                } = t, A = !ep() || c, S = es(i), k = es(h), N = es(p), P = er(), L = ek(), T = "number" == typeof h && h < 0, _ = o.useRef(null), O = o.useRef(null), D = o.useRef(!1), F = o.useRef(null), I = o.useRef(!1), B = null != L, z = C && "combobox" === C.getAttribute("role") && (0, l.Re)(C) && C.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])") && T, H = o.useCallback(function(e) {
                    return void 0 === e && (e = M), e ? V(e, ey()) : []
                }, [M]), W = o.useCallback(e => {
                    let t = H(e);
                    return S.current.map(e => C && "reference" === e ? C : M && "floating" === e ? M : t).filter(Boolean).flat()
                }, [C, M, S, H]);

                function K(e) {
                    return !r && g && m ? o.createElement(eN, {
                        ref: "start" === e ? _ : O,
                        onClick: e => E(!1, e.nativeEvent)
                    }, "string" == typeof g ? g : "Dismiss") : null
                }
                o.useEffect(() => {
                    if (r || !m) return;

                    function e(e) {
                        if ("Tab" === e.key) {
                            s(M, a(u(M))) && 0 === H().length && !z && d(e);
                            let t = W(),
                                n = f(e);
                            "reference" === S.current[0] && n === C && (d(e), e.shiftKey ? Q(t[t.length - 1]) : Q(t[1])), "floating" === S.current[1] && n === M && e.shiftKey && (d(e), Q(t[0]))
                        }
                    }
                    let t = u(M);
                    return t.addEventListener("keydown", e), () => {
                        t.removeEventListener("keydown", e)
                    }
                }, [r, C, M, m, S, w, z, H, W]), o.useEffect(() => {
                    if (!r && v && M && (0, l.Re)(C)) return C.addEventListener("focusout", t), C.addEventListener("pointerdown", e), m || M.addEventListener("focusout", t), () => {
                        C.removeEventListener("focusout", t), C.removeEventListener("pointerdown", e), m || M.removeEventListener("focusout", t)
                    };

                    function e() {
                        I.current = !0, setTimeout(() => {
                            I.current = !1
                        })
                    }

                    function t(e) {
                        let t = e.relatedTarget;
                        queueMicrotask(() => {
                            let n = !(s(C, t) || s(M, t) || s(t, M) || s(null == L ? void 0 : L.portalNode, t) || null != t && t.hasAttribute(ea("focus-guard")) || P && (eu(P.nodesRef.current, b).find(e => {
                                var n, r;
                                return s(null == (n = e.context) ? void 0 : n.elements.floating, t) || s(null == (r = e.context) ? void 0 : r.elements.domReference, t)
                            }) || (function(e, t) {
                                var n;
                                let r = [],
                                    o = null == (n = e.find(e => e.id === t)) ? void 0 : n.parentId;
                                for (; o;) {
                                    let t = e.find(e => e.id === o);
                                    o = null == t ? void 0 : t.parentId, t && (r = r.concat(t))
                                }
                                return r
                            })(P.nodesRef.current, b).find(e => {
                                var n, r;
                                return (null == (n = e.context) ? void 0 : n.elements.floating) === t || (null == (r = e.context) ? void 0 : r.elements.domReference) === t
                            })));
                            t && n && !I.current && t !== F.current && (D.current = !0, E(!1, e))
                        })
                    }
                }, [r, C, M, m, b, P, L, E, v]), o.useEffect(() => {
                    var e;
                    if (r) return;
                    let t = Array.from((null == L ? void 0 : null == (e = L.portalNode) ? void 0 : e.querySelectorAll("[" + ea("portal") + "]")) || []);
                    if (M) {
                        let e = [M, ...t, _.current, O.current, S.current.includes("reference") || z ? C : null].filter(e => null != e),
                            n = m ? ev(e, A, !A) : ev(e);
                        return () => {
                            n()
                        }
                    }
                }, [r, C, M, m, S, L, z, A]), Y(() => {
                    if (r || !M) return;
                    let e = a(u(M));
                    queueMicrotask(() => {
                        let t = W(M),
                            n = k.current,
                            r = ("number" == typeof n ? t[n] : n.current) || M,
                            o = s(M, e);
                        T || o || !y || Q(r, {
                            preventScroll: r === M
                        })
                    })
                }, [r, y, M, T, W, k]), Y(() => {
                    if (r || !M) return;
                    let e = !1,
                        t = u(M),
                        n = a(t),
                        o = R.current;

                    function i(t) {
                        if ("escapeKey" === t.type && w.domReference.current && (F.current = w.domReference.current), ["referencePress", "escapeKey"].includes(t.type)) return;
                        let n = t.data.returnFocus;
                        "object" == typeof n ? (D.current = !1, e = n.preventScroll) : D.current = !n
                    }
                    return F.current = n, x.on("dismiss", i), () => {
                        x.off("dismiss", i);
                        let n = a(t);
                        (s(M, n) || P && eu(P.nodesRef.current, b).some(e => {
                            var t;
                            return s(null == (t = e.context) ? void 0 : t.elements.floating, n)
                        }) || o.openEvent && ["click", "mousedown"].includes(o.openEvent.type)) && w.domReference.current && (F.current = w.domReference.current), N.current && (0, l.Re)(F.current) && !D.current && Q(F.current, {
                            cancelPrevious: !1,
                            preventScroll: e
                        })
                    }
                }, [r, M, N, R, w, x, P, b]), Y(() => {
                    if (!r && L) return L.setFocusManagerState({
                        modal: m,
                        closeOnFocusOut: v,
                        open: y,
                        onOpenChange: E,
                        refs: w
                    }), () => {
                        L.setFocusManagerState(null)
                    }
                }, [r, L, m, y, E, w, v]), Y(() => {
                    if (!r && M && "function" == typeof MutationObserver && !T) {
                        let e = () => {
                            let e = M.getAttribute("tabindex");
                            S.current.includes("floating") || a(u(M)) !== w.domReference.current && 0 === H().length ? "0" !== e && M.setAttribute("tabindex", "0") : "-1" !== e && M.setAttribute("tabindex", "-1")
                        };
                        e();
                        let t = new MutationObserver(e);
                        return t.observe(M, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }), () => {
                            t.disconnect()
                        }
                    }
                }, [r, M, w, S, H, T]);
                let U = !r && A && !z && (B || m);
                return o.createElement(o.Fragment, null, U && o.createElement(eM, {
                    "data-type": "inside",
                    ref: null == L ? void 0 : L.beforeInsideRef,
                    onFocus: e => {
                        if (m) {
                            let e = W();
                            Q("reference" === i[0] ? e[0] : e[e.length - 1])
                        } else if (null != L && L.preserveTabOrder && L.portalNode) {
                            if (D.current = !1, ex(e, L.portalNode)) {
                                let e = eb() || C;
                                null == e || e.focus()
                            } else {
                                var t;
                                null == (t = L.beforeOutsideRef.current) || t.focus()
                            }
                        }
                    }
                }), !z && K("start"), n, K("end"), U && o.createElement(eM, {
                    "data-type": "inside",
                    ref: null == L ? void 0 : L.afterInsideRef,
                    onFocus: e => {
                        if (m) Q(W()[0]);
                        else if (null != L && L.preserveTabOrder && L.portalNode) {
                            if (v && (D.current = !0), ex(e, L.portalNode)) {
                                let e = eE() || C;
                                null == e || e.focus()
                            } else {
                                var t;
                                null == (t = L.afterOutsideRef.current) || t.focus()
                            }
                        }
                    }
                }))
            }
            let eL = i["useInsertionEffect".toString()] || (e => e());

            function eT(e) {
                let t = o.useRef(() => {});
                return eL(() => {
                    t.current = e
                }), o.useCallback(function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return null == t.current ? void 0 : t.current(...n)
                }, [])
            }
            let e_ = {
                    pointerdown: "onPointerDown",
                    mousedown: "onMouseDown",
                    click: "onClick"
                },
                eO = {
                    pointerdown: "onPointerDownCapture",
                    mousedown: "onMouseDownCapture",
                    click: "onClickCapture"
                },
                eD = e => {
                    var t, n;
                    return {
                        escapeKeyBubbles: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
                        outsidePressBubbles: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n
                    }
                };

            function eF(e, t) {
                void 0 === t && (t = {});
                let {
                    open: n,
                    onOpenChange: r,
                    events: i,
                    nodeId: a,
                    elements: {
                        reference: d,
                        domReference: h,
                        floating: p
                    },
                    dataRef: m
                } = e, {
                    enabled: g = !0,
                    escapeKey: v = !0,
                    outsidePress: y = !0,
                    outsidePressEvent: w = "pointerdown",
                    referencePress: b = !1,
                    referencePressEvent: E = "pointerdown",
                    ancestorScroll: x = !1,
                    bubbles: R
                } = t, C = er(), M = null != en(), A = eT("function" == typeof y ? y : () => !1), S = "function" == typeof y ? A : y, k = o.useRef(!1), {
                    escapeKeyBubbles: N,
                    outsidePressBubbles: P
                } = eD(R), L = eT(e => {
                    if (!n || !g || !v || "Escape" !== e.key) return;
                    let t = C ? eu(C.nodesRef.current, a) : [];
                    if (!N && (e.stopPropagation(), t.length > 0)) {
                        let e = !0;
                        if (t.forEach(t => {
                                var n;
                                if (null != (n = t.context) && n.open && !t.context.dataRef.current.__escapeKeyBubbles) {
                                    e = !1;
                                    return
                                }
                            }), !e) return
                    }
                    i.emit("dismiss", {
                        type: "escapeKey",
                        data: {
                            returnFocus: {
                                preventScroll: !1
                            }
                        }
                    }), r(!1, "nativeEvent" in e ? e.nativeEvent : e)
                }), T = eT(e => {
                    var t;
                    let n = k.current;
                    if (k.current = !1, n || "function" == typeof S && !S(e)) return;
                    let o = f(e),
                        d = "[" + ea("inert") + "]",
                        m = u(p).querySelectorAll(d),
                        g = (0, l.kK)(o) ? o : null;
                    for (; g && !(0, l.Py)(g);) {
                        let e = (0, l.Ow)(g);
                        if (e !== u(p).body && (0, l.kK)(e)) g = e;
                        else break
                    }
                    if (m.length && (0, l.kK)(o) && !o.matches("html,body") && !s(o, p) && Array.from(m).every(e => !s(g, e))) return;
                    if ((0, l.Re)(o) && p) {
                        let t = o.clientWidth > 0 && o.scrollWidth > o.clientWidth,
                            n = o.clientHeight > 0 && o.scrollHeight > o.clientHeight,
                            r = n && e.offsetX > o.clientWidth;
                        if (n && "rtl" === (0, l.Dx)(o).direction && (r = e.offsetX <= o.offsetWidth - o.clientWidth), r || t && e.offsetY > o.clientHeight) return
                    }
                    let v = C && eu(C.nodesRef.current, a).some(t => {
                        var n;
                        return c(e, null == (n = t.context) ? void 0 : n.elements.floating)
                    });
                    if (c(e, p) || c(e, h) || v) return;
                    let y = C ? eu(C.nodesRef.current, a) : [];
                    if (y.length > 0) {
                        let e = !0;
                        if (y.forEach(t => {
                                var n;
                                if (null != (n = t.context) && n.open && !t.context.dataRef.current.__outsidePressBubbles) {
                                    e = !1;
                                    return
                                }
                            }), !e) return
                    }
                    i.emit("dismiss", {
                        type: "outsidePress",
                        data: {
                            returnFocus: M ? {
                                preventScroll: !0
                            } : function(e) {
                                if (0 === e.mozInputSource && e.isTrusted) return !0;
                                let t = /Android/i;
                                return (t.test(function() {
                                    let e = navigator.userAgentData;
                                    return null != e && e.platform ? e.platform : navigator.platform
                                }()) || t.test(function() {
                                    let e = navigator.userAgentData;
                                    return e && Array.isArray(e.brands) ? e.brands.map(e => {
                                        let {
                                            brand: t,
                                            version: n
                                        } = e;
                                        return t + "/" + n
                                    }).join(" ") : navigator.userAgent
                                }())) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType
                            }(e) || 0 === (t = e).width && 0 === t.height || 1 === t.width && 1 === t.height && 0 === t.pressure && 0 === t.detail && "mouse" !== t.pointerType || t.width < 1 && t.height < 1 && 0 === t.pressure && 0 === t.detail
                        }
                    }), r(!1, e)
                });
                return o.useEffect(() => {
                    if (!n || !g) return;

                    function e(e) {
                        r(!1, e)
                    }
                    m.current.__escapeKeyBubbles = N, m.current.__outsidePressBubbles = P;
                    let t = u(p);
                    v && t.addEventListener("keydown", L), S && t.addEventListener(w, T);
                    let o = [];
                    return x && ((0, l.kK)(h) && (o = (0, l.Kx)(h)), (0, l.kK)(p) && (o = o.concat((0, l.Kx)(p))), !(0, l.kK)(d) && d && d.contextElement && (o = o.concat((0, l.Kx)(d.contextElement)))), (o = o.filter(e => {
                        var n;
                        return e !== (null == (n = t.defaultView) ? void 0 : n.visualViewport)
                    })).forEach(t => {
                        t.addEventListener("scroll", e, {
                            passive: !0
                        })
                    }), () => {
                        v && t.removeEventListener("keydown", L), S && t.removeEventListener(w, T), o.forEach(t => {
                            t.removeEventListener("scroll", e)
                        })
                    }
                }, [m, p, h, d, v, S, w, n, r, x, g, N, P, L, T]), o.useEffect(() => {
                    k.current = !1
                }, [S, w]), o.useMemo(() => g ? {
                    reference: {
                        onKeyDown: L,
                        [e_[E]]: e => {
                            b && (i.emit("dismiss", {
                                type: "referencePress",
                                data: {
                                    returnFocus: !1
                                }
                            }), r(!1, e.nativeEvent))
                        }
                    },
                    floating: {
                        onKeyDown: L,
                        [eO[w]]: () => {
                            k.current = !0
                        }
                    }
                } : {}, [g, i, b, w, E, r, L])
            }

            function eI(e) {
                var t;
                void 0 === e && (e = {});
                let {
                    open: n = !1,
                    onOpenChange: r,
                    nodeId: i
                } = e, [a, s] = o.useState(null), u = (null == (t = e.elements) ? void 0 : t.reference) || a, c = function(e) {
                    void 0 === e && (e = {});
                    let {
                        placement: t = "bottom",
                        strategy: n = "absolute",
                        middleware: r = [],
                        platform: i,
                        elements: {
                            reference: l,
                            floating: a
                        } = {},
                        transform: s = !0,
                        whileElementsMounted: u,
                        open: c
                    } = e, [f, d] = o.useState({
                        x: 0,
                        y: 0,
                        strategy: n,
                        placement: t,
                        middlewareData: {},
                        isPositioned: !1
                    }), [b, E] = o.useState(r);
                    g(b, r) || E(r);
                    let [x, R] = o.useState(null), [C, M] = o.useState(null), A = o.useCallback(e => {
                        e != P.current && (P.current = e, R(e))
                    }, [R]), S = o.useCallback(e => {
                        e !== L.current && (L.current = e, M(e))
                    }, [M]), k = l || x, N = a || C, P = o.useRef(null), L = o.useRef(null), T = o.useRef(f), _ = w(u), O = w(i), D = o.useCallback(() => {
                        if (!P.current || !L.current) return;
                        let e = {
                            placement: t,
                            strategy: n,
                            middleware: b
                        };
                        O.current && (e.platform = O.current), (0, h.oo)(P.current, L.current, e).then(e => {
                            let t = { ...e,
                                isPositioned: !0
                            };
                            F.current && !g(T.current, t) && (T.current = t, p.flushSync(() => {
                                d(t)
                            }))
                        })
                    }, [b, t, n, O]);
                    m(() => {
                        !1 === c && T.current.isPositioned && (T.current.isPositioned = !1, d(e => ({ ...e,
                            isPositioned: !1
                        })))
                    }, [c]);
                    let F = o.useRef(!1);
                    m(() => (F.current = !0, () => {
                        F.current = !1
                    }), []), m(() => {
                        if (k && (P.current = k), N && (L.current = N), k && N) {
                            if (_.current) return _.current(k, N, D);
                            D()
                        }
                    }, [k, N, D, _]);
                    let I = o.useMemo(() => ({
                            reference: P,
                            floating: L,
                            setReference: A,
                            setFloating: S
                        }), [A, S]),
                        B = o.useMemo(() => ({
                            reference: k,
                            floating: N
                        }), [k, N]),
                        z = o.useMemo(() => {
                            let e = {
                                position: n,
                                left: 0,
                                top: 0
                            };
                            if (!B.floating) return e;
                            let t = y(B.floating, f.x),
                                r = y(B.floating, f.y);
                            return s ? { ...e,
                                transform: "translate(" + t + "px, " + r + "px)",
                                ...v(B.floating) >= 1.5 && {
                                    willChange: "transform"
                                }
                            } : {
                                position: n,
                                left: t,
                                top: r
                            }
                        }, [n, s, B.floating, f.x, f.y]);
                    return o.useMemo(() => ({ ...f,
                        update: D,
                        refs: I,
                        elements: B,
                        floatingStyles: z
                    }), [f, D, I, B, z])
                }(e), f = er(), d = eT((e, t) => {
                    e && (E.current.openEvent = t), null == r || r(e, t)
                }), b = o.useRef(null), E = o.useRef({}), x = o.useState(() => $())[0], R = Z(), C = o.useCallback(e => {
                    let t = (0, l.kK)(e) ? {
                        getBoundingClientRect: () => e.getBoundingClientRect(),
                        contextElement: e
                    } : e;
                    c.refs.setReference(t)
                }, [c.refs]), M = o.useCallback(e => {
                    ((0, l.kK)(e) || null === e) && (b.current = e, s(e)), ((0, l.kK)(c.refs.reference.current) || null === c.refs.reference.current || null !== e && !(0, l.kK)(e)) && c.refs.setReference(e)
                }, [c.refs]), A = o.useMemo(() => ({ ...c.refs,
                    setReference: M,
                    setPositionReference: C,
                    domReference: b
                }), [c.refs, M, C]), S = o.useMemo(() => ({ ...c.elements,
                    domReference: u
                }), [c.elements, u]), k = o.useMemo(() => ({ ...c,
                    refs: A,
                    elements: S,
                    dataRef: E,
                    nodeId: i,
                    floatingId: R,
                    events: x,
                    open: n,
                    onOpenChange: d
                }), [c, i, R, x, n, d, A, S]);
                return Y(() => {
                    let e = null == f ? void 0 : f.nodesRef.current.find(e => e.id === i);
                    e && (e.context = k)
                }), o.useMemo(() => ({ ...c,
                    context: k,
                    refs: A,
                    elements: S
                }), [c, A, S, k])
            }
        },
        1601: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fp: () => o,
                GW: () => l,
                I4: () => m,
                JB: () => C,
                KX: () => E,
                NM: () => i,
                Qq: () => g,
                Rn: () => p,
                VV: () => r,
                Wh: () => v,
                gy: () => w,
                hp: () => h,
                i8: () => y,
                k3: () => d,
                ku: () => f,
                pw: () => x,
                uZ: () => c,
                yd: () => R,
                ze: () => a
            });
            let r = Math.min,
                o = Math.max,
                i = Math.round,
                l = Math.floor,
                a = e => ({
                    x: e,
                    y: e
                }),
                s = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                u = {
                    start: "end",
                    end: "start"
                };

            function c(e, t, n) {
                return o(e, r(t, n))
            }

            function f(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function d(e) {
                return e.split("-")[0]
            }

            function h(e) {
                return e.split("-")[1]
            }

            function p(e) {
                return "x" === e ? "y" : "x"
            }

            function m(e) {
                return "y" === e ? "height" : "width"
            }

            function g(e) {
                return ["top", "bottom"].includes(d(e)) ? "y" : "x"
            }

            function v(e) {
                return p(g(e))
            }

            function y(e, t, n) {
                void 0 === n && (n = !1);
                let r = h(e),
                    o = v(e),
                    i = m(o),
                    l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                return t.reference[i] > t.floating[i] && (l = x(l)), [l, x(l)]
            }

            function w(e) {
                let t = x(e);
                return [b(e), t, b(t)]
            }

            function b(e) {
                return e.replace(/start|end/g, e => u[e])
            }

            function E(e, t, n, r) {
                let o = h(e),
                    i = function(e, t, n) {
                        let r = ["left", "right"],
                            o = ["right", "left"];
                        switch (e) {
                            case "top":
                            case "bottom":
                                if (n) return t ? o : r;
                                return t ? r : o;
                            case "left":
                            case "right":
                                return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                                return []
                        }
                    }(d(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(b)))), i
            }

            function x(e) {
                return e.replace(/left|right|bottom|top/g, e => s[e])
            }

            function R(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function C(e) {
                return { ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
        },
        6164: function(e, t, n) {
            "use strict";

            function r(e) {
                return l(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function o(e) {
                var t;
                return (null == e ? void 0 : null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function i(e) {
                var t;
                return null == (t = (l(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function l(e) {
                return e instanceof Node || e instanceof o(e).Node
            }

            function a(e) {
                return e instanceof Element || e instanceof o(e).Element
            }

            function s(e) {
                return e instanceof HTMLElement || e instanceof o(e).HTMLElement
            }

            function u(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof o(e).ShadowRoot)
            }

            function c(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = g(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function f(e) {
                return ["table", "td", "th"].includes(r(e))
            }

            function d(e) {
                let t = p(),
                    n = g(e);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function h(e) {
                let t = y(e);
                for (; s(t) && !m(t);) {
                    if (d(t)) return t;
                    t = y(t)
                }
                return null
            }

            function p() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function m(e) {
                return ["html", "body", "#document"].includes(r(e))
            }

            function g(e) {
                return o(e).getComputedStyle(e)
            }

            function v(e) {
                return a(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function y(e) {
                if ("html" === r(e)) return e;
                let t = e.assignedSlot || e.parentNode || u(e) && e.host || i(e);
                return u(t) ? t.host : t
            }
            n.d(t, {
                Dx: () => g,
                Jj: () => o,
                Kx: () => function e(t, n) {
                    var r;
                    void 0 === n && (n = []);
                    let i = function e(t) {
                            let n = y(t);
                            return m(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : s(n) && c(n) ? n : e(n)
                        }(t),
                        l = i === (null == (r = t.ownerDocument) ? void 0 : r.body),
                        a = o(i);
                    return l ? n.concat(a, a.visualViewport || [], c(i) ? i : [], a.frameElement ? e(a.frameElement) : []) : n.concat(i, e(i))
                },
                Lw: () => v,
                Ow: () => y,
                Pf: () => p,
                Py: () => m,
                Re: () => s,
                Ze: () => f,
                Zq: () => u,
                ao: () => c,
                gQ: () => h,
                hT: () => d,
                kK: () => a,
                tF: () => i,
                wk: () => r
            })
        },
        7627: function(e, t, n) {
            "use strict";
            let r, o, i;
            n.d(t, {
                u: () => F
            });
            var l = n(9144);
            let a = new Set,
                s = new WeakMap,
                u = new WeakMap,
                c = new WeakMap,
                f = new WeakMap,
                d = new WeakMap,
                h = new WeakMap,
                p = new WeakMap,
                m = new WeakSet,
                g = 0,
                v = 0,
                y = "__aa_tgt",
                w = "__aa_del",
                b = "__aa_new";

            function E(e) {
                clearTimeout(p.get(e));
                let t = k(e),
                    n = _(t) ? 500 : t.duration;
                p.set(e, setTimeout(async () => {
                    let t = c.get(e);
                    try {
                        await (null == t ? void 0 : t.finished), s.set(e, A(e)),
                            function(e) {
                                let t = f.get(e);
                                null == t || t.disconnect();
                                let n = s.get(e),
                                    o = 0;
                                n || (n = A(e), s.set(e, n));
                                let {
                                    offsetWidth: i,
                                    offsetHeight: l
                                } = r, a = [n.top - 5, i - (n.left + 5 + n.width), l - (n.top + 5 + n.height), n.left - 5].map(e => "".concat(-1 * Math.floor(e), "px")).join(" "), u = new IntersectionObserver(() => {
                                    ++o > 1 && E(e)
                                }, {
                                    root: r,
                                    threshold: 1,
                                    rootMargin: a
                                });
                                u.observe(e), f.set(e, u)
                            }(e)
                    } catch {}
                }, n))
            }

            function x(e) {
                setTimeout(() => {
                    d.set(e, setInterval(() => R(E.bind(null, e)), 2e3))
                }, Math.round(2e3 * Math.random()))
            }

            function R(e) {
                "function" == typeof requestIdleCallback ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e())
            }

            function C(e, t) {
                t || y in e ? !t || y in t || Object.defineProperty(t, y, {
                    value: e
                }) : Object.defineProperty(e, y, {
                    value: e
                })
            }

            function M(e) {
                return Number(e.replace(/[^0-9.\-]/g, ""))
            }

            function A(e) {
                let t = e.getBoundingClientRect(),
                    {
                        x: n,
                        y: r
                    } = function(e) {
                        let t = e.parentElement;
                        for (; t;) {
                            if (t.scrollLeft || t.scrollTop) return {
                                x: t.scrollLeft,
                                y: t.scrollTop
                            };
                            t = t.parentElement
                        }
                        return {
                            x: 0,
                            y: 0
                        }
                    }(e);
                return {
                    top: t.top + r,
                    left: t.left + n,
                    width: t.width,
                    height: t.height
                }
            }

            function S(e, t, n) {
                let r = t.width,
                    o = t.height,
                    i = n.width,
                    l = n.height,
                    a = getComputedStyle(e);
                if ("content-box" === a.getPropertyValue("box-sizing")) {
                    let e = M(a.paddingTop) + M(a.paddingBottom) + M(a.borderTopWidth) + M(a.borderBottomWidth),
                        t = M(a.paddingLeft) + M(a.paddingRight) + M(a.borderRightWidth) + M(a.borderLeftWidth);
                    r -= t, i -= t, o -= e, l -= e
                }
                return [r, i, o, l].map(Math.round)
            }

            function k(e) {
                return y in e && h.has(e[y]) ? h.get(e[y]) : {
                    duration: 250,
                    easing: "ease-in-out"
                }
            }

            function N(e) {
                if (y in e) return e[y]
            }

            function P(e) {
                let t = N(e);
                return !!t && m.has(t)
            }

            function L(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                n.forEach(t => t(e, h.has(e)));
                for (let t = 0; t < e.children.length; t++) {
                    let r = e.children.item(t);
                    r && n.forEach(e => e(r, h.has(r)))
                }
            }

            function T(e) {
                return Array.isArray(e) ? e : [e]
            }

            function _(e) {
                return "function" == typeof e
            }

            function O(e) {
                let t;
                b in e && delete e[b];
                let n = A(e);
                s.set(e, n);
                let r = k(e);
                if (P(e)) {
                    if ("function" != typeof r) t = e.animate([{
                        transform: "scale(.98)",
                        opacity: 0
                    }, {
                        transform: "scale(0.98)",
                        opacity: 0,
                        offset: .5
                    }, {
                        transform: "scale(1)",
                        opacity: 1
                    }], {
                        duration: 1.5 * r.duration,
                        easing: "ease-in"
                    });
                    else {
                        let [o] = T(r(e, "add", n));
                        (t = new Animation(o)).play()
                    }
                    c.set(e, t), t.addEventListener("finish", E.bind(null, e))
                }
            }

            function D(e, t) {
                var n;
                e.remove(), s.delete(e), u.delete(e), c.delete(e), null === (n = f.get(e)) || void 0 === n || n.disconnect(), setTimeout(() => {
                    if (w in e && delete e[w], Object.defineProperty(e, b, {
                            value: !0,
                            configurable: !0
                        }), t && e instanceof HTMLElement)
                        for (let n in t) e.style[n] = ""
                }, 0)
            }

            function F(e) {
                let [t, n] = (0, l.useState)(), r = (0, l.useMemo)(() => e, []);
                return [(0, l.useCallback)(e => {
                    e instanceof HTMLElement ? n(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return o && i && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !_(t) && !t.disrespectUserMotionPreference) && (m.add(e), "static" === getComputedStyle(e).position && Object.assign(e.style, {
                            position: "relative"
                        }), L(e, E, x, e => null == i ? void 0 : i.observe(e)), _(t) ? h.set(e, t) : h.set(e, {
                            duration: 250,
                            easing: "ease-in-out",
                            ...t
                        }), o.observe(e, {
                            childList: !0
                        }), a.add(e)), Object.freeze({
                            parent: e,
                            enable: () => {
                                m.add(e)
                            },
                            disable: () => {
                                m.delete(e)
                            },
                            isEnabled: () => m.has(e)
                        })
                    }(e, r)) : n(void 0)
                }, [r]), (0, l.useCallback)(e => {
                    t && (e ? t.enable() : t.disable())
                }, [t])]
            }
            "undefined" != typeof window && "ResizeObserver" in window && (r = document.documentElement, o = new MutationObserver(e => {
                var t;
                let n = !(t = e).reduce((e, t) => [...e, ...Array.from(t.addedNodes), ...Array.from(t.removedNodes)], []).every(e => "#comment" === e.nodeName) && t.reduce((e, t) => {
                    if (!1 === e) return !1;
                    if (t.target instanceof Element) {
                        if (C(t.target), !e.has(t.target)) {
                            e.add(t.target);
                            for (let n = 0; n < t.target.children.length; n++) {
                                let r = t.target.children.item(n);
                                if (r) {
                                    if (w in r) return !1;
                                    C(t.target, r), e.add(r)
                                }
                            }
                        }
                        if (t.removedNodes.length)
                            for (let n = 0; n < t.removedNodes.length; n++) {
                                let r = t.removedNodes[n];
                                if (w in r) return !1;
                                r instanceof Element && (e.add(r), C(t.target, r), u.set(r, [t.previousSibling, t.nextSibling]))
                            }
                    }
                    return e
                }, new Set);
                n && n.forEach(e => (function(e) {
                    var t;
                    let n = e.isConnected,
                        o = s.has(e);
                    n && u.has(e) && u.delete(e), c.has(e) && (null === (t = c.get(e)) || void 0 === t || t.cancel()), b in e ? O(e) : o && n ? function(e) {
                        let t;
                        let n = s.get(e),
                            r = A(e);
                        if (!P(e)) return s.set(e, r);
                        if (!n) return;
                        let o = k(e);
                        if ("function" != typeof o) {
                            let i = n.left - r.left,
                                l = n.top - r.top,
                                [a, s, u, c] = S(e, n, r),
                                f = {
                                    transform: "translate(".concat(i, "px, ").concat(l, "px)")
                                },
                                d = {
                                    transform: "translate(0, 0)"
                                };
                            a !== s && (f.width = "".concat(a, "px"), d.width = "".concat(s, "px")), u !== c && (f.height = "".concat(u, "px"), d.height = "".concat(c, "px")), t = e.animate([f, d], {
                                duration: o.duration,
                                easing: o.easing
                            })
                        } else {
                            let [i] = T(o(e, "remain", n, r));
                            (t = new Animation(i)).play()
                        }
                        c.set(e, t), s.set(e, r), t.addEventListener("finish", E.bind(null, e))
                    }(e) : o && !n ? function(e) {
                        var t;
                        let n;
                        if (!u.has(e) || !s.has(e)) return;
                        let [o, i] = u.get(e);
                        Object.defineProperty(e, w, {
                            value: !0,
                            configurable: !0
                        });
                        let l = window.scrollX,
                            a = window.scrollY;
                        if (i && i.parentNode && i.parentNode instanceof Element ? i.parentNode.insertBefore(e, i) : o && o.parentNode ? o.parentNode.appendChild(e) : null === (t = N(e)) || void 0 === t || t.appendChild(e), !P(e)) return D(e);
                        let [f, d, h, p] = function(e) {
                            let t = s.get(e),
                                [n, , r] = S(e, t, A(e)),
                                o = e.parentElement;
                            for (; o && ("static" === getComputedStyle(o).position || o instanceof HTMLBodyElement);) o = o.parentElement;
                            o || (o = document.body);
                            let i = getComputedStyle(o),
                                l = s.get(o) || A(o);
                            return [Math.round(t.top - l.top) - M(i.borderTopWidth), Math.round(t.left - l.left) - M(i.borderLeftWidth), n, r]
                        }(e), m = k(e), y = s.get(e);
                        (l !== g || a !== v) && function(e, t, n, o) {
                            let i = g - t,
                                l = v - n,
                                a = document.documentElement.style.scrollBehavior;
                            if ("smooth" === getComputedStyle(r).scrollBehavior && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + i, window.scrollY + l), !e.parentElement) return;
                            let s = e.parentElement,
                                u = s.clientHeight,
                                c = s.clientWidth,
                                f = performance.now();
                            ! function e() {
                                requestAnimationFrame(() => {
                                    if (!_(o)) {
                                        let t = u - s.clientHeight,
                                            n = c - s.clientWidth;
                                        f + o.duration > performance.now() ? (window.scrollTo({
                                            left: window.scrollX - n,
                                            top: window.scrollY - t
                                        }), u = s.clientHeight, c = s.clientWidth, e()) : document.documentElement.style.scrollBehavior = a
                                    }
                                })
                            }()
                        }(e, l, a, m);
                        let b = {
                            position: "absolute",
                            top: "".concat(f, "px"),
                            left: "".concat(d, "px"),
                            width: "".concat(h, "px"),
                            height: "".concat(p, "px"),
                            margin: "0",
                            pointerEvents: "none",
                            transformOrigin: "center",
                            zIndex: "100"
                        };
                        if (_(m)) {
                            let [t, r] = T(m(e, "remove", y));
                            (null == r ? void 0 : r.styleReset) !== !1 && (b = (null == r ? void 0 : r.styleReset) || b, Object.assign(e.style, b)), (n = new Animation(t)).play()
                        } else Object.assign(e.style, b), n = e.animate([{
                            transform: "scale(1)",
                            opacity: 1
                        }, {
                            transform: "scale(.98)",
                            opacity: 0
                        }], {
                            duration: m.duration,
                            easing: "ease-out"
                        });
                        c.set(e, n), n.addEventListener("finish", D.bind(null, e, b))
                    }(e) : O(e)
                })(e))
            }), i = new ResizeObserver(e => {
                e.forEach(e => {
                    e.target === r && (clearTimeout(p.get(r)), p.set(r, setTimeout(() => {
                        a.forEach(e => L(e, e => R(() => E(e))))
                    }, 100))), s.has(e.target) && E(e.target)
                })
            }), window.addEventListener("scroll", () => {
                v = window.scrollY, g = window.scrollX
            }), i.observe(r))
        },
        3534: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.d(t, {
                _: () => r
            })
        }
    }
]);