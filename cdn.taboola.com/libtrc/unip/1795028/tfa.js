/*! 20250119-6-RELEASE */

function _typeof(e) {
    "@babel/helpers - typeof";
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function(e) {
    var t = 'TFASC';
    t.indexOf("{jsScope}") > -1 && (t = "TRC"), e[t] || (e[t] = {})
}(window),
function(e, t) {
    e.TRC = e.TRC || {};
    var n = function e() {
            return !0
        },
        r = function n(r, i, o, a) {
            var s = r + "/" + encodeURIComponent(o || e.TRC.publisherId) + "/log/3" + "/" + i;
            return a && (s += "?" + t.TRCLogger.formatParams(a)), s
        },
        i = function t(r, i, a, s) {
            var c, u = new(e.XDomainRequest || e.XMLHttpRequest);
            return u.open(r, i), u.onload = "function" == typeof s ? s : n, u.onerror = n, u.ontimeout = n, u.onprogress = n, u.withCredentials = !0, a && o(u, a), u
        },
        o = function e(t, n) {
            for (var r in n) n.hasOwnProperty(r) && t.setRequestHeader(r, n[r])
        };
    e.TRC.TRCLogger = t.TRCLogger = {
        post: function n(o, a, s, c, u, l) {
            var f = r(o, a, c, u),
                d = i("POST", f);
            l && "function" == typeof e.navigator.sendBeacon ? e.navigator.sendBeacon(f, t.TRCLogger.formatBeaconParams(s)) : (d.setRequestHeader && d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), d.send(t.TRCLogger.formatParams(s)))
        },
        get: function e(t, n, o, a, s) {
            if (o.headers) {
                var c = o.headers;
                delete o.headers
            }
            var u = r(t, n, a, o),
                l;
            i("GET", u, c, s).send()
        },
        formatParams: function e(t) {
            var n = [];
            for (var r in t) t.hasOwnProperty(r) && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
            return n.join("&")
        },
        formatBeaconParams: function e(t) {
            var n = "",
                r;
            for (var i in t) t.hasOwnProperty(i) && (n += i + "=" + encodeURIComponent(t[i]) + "&");
            return new Blob([n.slice(0, -1)], {
                type: "application/x-www-form-urlencoded"
            })
        },
        reportES: function e(n) {
            if (t && t.util && t.util.isPercentEnabled(TRCImpl.global, "enable-rbox-es-events")) {
                var r = TRCImpl && TRCImpl.global && TRCImpl.global["rbox-es-events-url"] || "https://vidanalytics.taboola.com/putes";
                r = r + "/" + n.index;
                var i = {
                    timestamp: (new Date).toISOString(),
                    name: n.name
                };
                for (var o in n.data) i[o] = n.data[o];
                if ("function" == typeof navigator.sendBeacon) navigator.sendBeacon(r, JSON.stringify(i));
                else {
                    var a = new XMLHttpRequest;
                    a.open("POST", r, !0), a.send(JSON.stringify(i))
                }
            }
        }
    }
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t) {
    if (t && !t.MessageDelayer) {
        var n = function n(r) {
                return function(n) {
                    var i = n.detail,
                        o = n.type,
                        a = "" + i[this.groupingKeyName],
                        s = this.delayedEventsMap[a],
                        c = t.eventUtils.getDateNow();
                    if (s) {
                        this.timeoutHandles[a] && (clearTimeout(this.timeoutHandles[a]), this.timeoutHandles[a] = null);
                        var u = [].concat(s);
                        this.delayedEventsMap[a] = [];
                        for (var l = 0; l < u.length; l++) {
                            var f = u[l],
                                d;
                            r(f.config).apply(e, [f.groupingKey, f.message, i, o, c - f.queueTime])
                        }
                    }
                }
            },
            r = n(function(e) {
                return e.successCallback
            }),
            i = n(function(e) {
                return e.failCallback
            }),
            o = function e(t, n) {
                var r = "" + t;
                this.timeoutHandles[r] || (this.timeoutHandles[r] = setTimeout(function() {
                    this.timeoutHandles[r] = null;
                    var e = {};
                    e[this.groupingKeyName] = t, i.call(this, {
                        detail: e,
                        type: "dt"
                    })
                }.bind(this), n))
            };
        t.MessageDelayer = function(e, n, o) {
            if (this.groupingKeyName = e, this.delayedEventsMap = {}, this.timeoutHandles = {}, t.eventUtils.safeAddEventListener(n, r.bind(this)), o)
                for (var a = 0; a < o.length; a++) t.eventUtils.safeAddEventListener(o[a], i.bind(this))
        }, t.MessageDelayer.prototype = {
            constructor: t.MessageDelayer,
            delayMessage: function e(n, r, i) {
                var a = "" + n;
                i.failCallback = i.failCallback || function() {}, this.delayedEventsMap[a] || (this.delayedEventsMap[a] = []), this.delayedEventsMap[a].push({
                    groupingKey: n,
                    message: r,
                    config: i,
                    queueTime: t.eventUtils.getDateNow()
                }), i.timeoutInMillis && o.call(this, n, i.timeoutInMillis)
            }
        }
    }
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e) {
    e.TRC = e.TRC || {}, e.TRC.sharedObjects = e.TRC.sharedObjects || {}, e.TRC.sharedObjects.loadedScripts = e.TRC.sharedObjects.loadedScripts || {}, e.TRC.sharedObjects.loadedPixels = e.TRC.sharedObjects.loadedPixels || {}
}(window),
function(e, t, n) {
    ! function() {
        if ("function" == typeof e.CustomEvent) return !1;

        function n(e, n) {
            n = n || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var r = t.createEvent("CustomEvent");
            return r.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), r
        }
        n.prototype = e.Event.prototype, e.CustomEvent = n
    }(), n.eventUtils = n.eventUtils || {}, n.eventUtils.dispatchEvent = n.eventUtils.dispatchEvent || function(e, t) {
        "function" == typeof CustomEvent && document.dispatchEvent(new CustomEvent(e, {
            detail: t || {}
        }))
    }, n.eventUtils.safeAddEventListener = n.eventUtils.safeAddEventListener || function(e, t) {
        document.addEventListener(e, function(e) {
            try {
                t.call(this, e)
            } catch (e) {}
        })
    }, n.eventUtils.safeAddEventListenerToWindow = n.eventUtils.safeAddEventListenerToWindow || function(e, t) {
        window.addEventListener(e, function(e) {
            try {
                t.call(this, e)
            } catch (e) {}
        })
    }, n.eventUtils.getDateNow = n.eventUtils.getDateNow || function() {
        var e, t;
        if (Date.now) {
            if ("number" == typeof(e = Date.now())) return e;
            if ("number" == typeof(t = Number(e))) return t
        }
        return (new Date).getTime()
    }, n.eventUtils.hashString = n.eventUtils.hashString || function(e) {
        var t = 0;
        if (0 == e.length) return t;
        for (var n = 0; n < e.length; n++) {
            var r;
            t = (t << 5) - t + e.charCodeAt(n), t &= t
        }
        return t
    }, n.sharedEvents = n.sharedEvents || {
        PAGE_VIEW: "TRK_TFA_PAGE_VIEW",
        REQUEST_ID_CREATED: "TRK_TFA_REQUEST_ID_CREATED",
        REQUEST_ID_CREATION_TIMEOUT: "TRK_TFA_REQUEST_ID_CREATION_TIMEOUT",
        REQUEST_ID_CREATION_ERROR: "TRK_TFA_REQUEST_ID_CREATION_ERROR",
        REQUEST_ID_CREATION_JS_ERROR: "TRK_TFA_REQUEST_ID_CREATION_JS_ERROR",
        INVALID_TRK_RESPONSE: "TRK_TFA_INVALID_TRK_RESPONSE"
    }, n.publisherIdType = n.publisherIdType || {
        NAME: "n",
        ID: "i"
    }, n.pageViewInitiator = n.pageViewInitiator || {
        TRK: "trk",
        TFA: "tfa"
    }
}(window, document, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t) {
    e._tfa = e._tfa || [], e._tfa.config || (e._tfa.TfaConfig = function() {
        this.configMap = {}
    }, e._tfa.TfaConfig.prototype = {
        safeGet: function e(t, n, r) {
            var i, o, a;
            if (r && this.configMap[r]) i = "" + r;
            else {
                if (!this.firstPublisherId) return n;
                i = this.firstPublisherId
            }
            try {
                return void 0 === (a = (o = this.configMap[i])[t]) ? n : a
            } catch (e) {
                return n
            }
        },
        hasValidConfig: function e() {
            return !!this.firstPublisherId
        },
        addConfig: function e(t, n) {
            "string" == typeof n || n instanceof String || (this.firstPublisherId || (this.firstPublisherId = t), this.configMap["" + t] = n)
        }
    }, e._tfa.config = new e._tfa.TfaConfig, e._taboola = e._taboola || []), e._tfa.config.addConfig(1795028, {
        "tfa:event-host-map": {
            "pre_d_eng_tb": "trc-events.taboola.com"
        },
        "tfa:add-item-url:event-list": "*",
        "tfa:trk:is-unified-page-view": true,
        "eid:send-eid-encoded": true,
        "tfa-uid:send-ids-to-cds": false,
        "cds:send-uad-req": true,
        "cds:send-dnid-req": true,
        "tfa:get-publisher-id-from-baker": true,
        "tfa:trk:flc-enabled": true,
        "tfa:engagement:return-visits:is-enabled": true,
        "tfa:collect-eid-from-page": false,
        "eid-enabled": "false",
        "eid:tfa:common-eid-keywords": "help,support,contact,readme,test,info,reply,careers,spam,login,subscribe,feedback,reachus,customers,cookie,members",
        "tfa:trk:topics-enabled": true,
        "tfa:allow-cross-domain-tracking": true
    })
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t, n) {
    "use strict";
    var r = e[n.jsScope],
        i = {
            map: function e(t, n) {
                if ("function" == typeof Array.prototype.map) return n.map(t);
                for (var r = [], i = 0; i < n.length; i++) r.push(t(n[i], i, n));
                return r
            },
            forEach: function e(t, n) {
                if ("function" == typeof Array.prototype.forEach) return n.forEach(t);
                for (var r = 0; r < n.length; r++) t(n[r], r, n)
            },
            filter: function e(t, n) {
                if ("function" == typeof Array.prototype.filter) return n.filter(t);
                for (var r = [], i = 0; i < n.length; i++) t(n[i], i, n) && r.push(n[i]);
                return r
            },
            objKeys: Object.keys || (o = Object.prototype.hasOwnProperty, a = !{
                toString: null
            }.propertyIsEnumerable("toString"), s = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], c = s.length, function(e) {
                if ("function" != typeof e && ("object" !== _typeof(e) || null === e)) throw new TypeError("Object.keys called on non-object");
                var t = [],
                    n, r;
                for (n in e) o.call(e, n) && t.push(n);
                if (a)
                    for (r = 0; r < c; r++) o.call(e, s[r]) && t.push(s[r]);
                return t
            })
        },
        o, a, s, c;
    n.networkMap && "string" != typeof n.networkMap || (n.networkMap = {});
    var u = null,
        l = null,
        f = null,
        d = null,
        h = {},
        p = 0,
        g = !1,
        v = "https://cdn.taboola.com/libtrc/static/topics/taboola-browsing-topics-trk.html",
        m = "requestTimeoutHandle",
        S = "requestId",
        E = "requestStatus",
        y = "trkRequestDone",
        b = 5e3,
        T = 2e3,
        I = "init",
        R = "pr",
        _ = "pud",
        w = "tto",
        C = "s",
        P = "f",
        A = "u",
        O = [w, P],
        k = [I, R, _],
        U = ((G = {})[r.publisherIdType.NAME] = "name", G[r.publisherIdType.ID] = "id", G),
        D = function() {
            for (var e = {}, t = i.objKeys(n.networkMap), o = 0; o < t.length; ++o) {
                var a;
                e["" + n.networkMap[t[o]][U[r.publisherIdType.ID]]] = !0
            }
            return e
        }(),
        N = "gk",
        L = "dk",
        M = "TRK_RELEASE_DELAYED_REQUESTS_EVENT",
        x = function() {
            var e = {};
            return e[N] = L, e
        }(),
        V = new r.MessageDelayer(N, M),
        j = function e(t, n) {
            F = F.loadTrc(n.publisherId, n.publisherIdType, n.config, n.requestData)
        },
        B = {
            UNINITIALIZED: {
                loadTrc: function e(t, n, r, i) {
                    var o = xe();
                    return ae(t, n, r, i), o ? B.USER_ID_SET : B.PENDING_USER_ID_SET
                }
            },
            PENDING_USER_ID_SET: {
                loadTrc: function e(t, n, r, i) {
                    return i[E] = _, V.delayMessage(L, {
                        publisherId: t,
                        publisherIdType: n,
                        config: r,
                        requestData: i
                    }, {
                        successCallback: j
                    }), B.PENDING_USER_ID_SET
                }
            },
            USER_ID_SET: {
                loadTrc: function e(t, n, r, i) {
                    return ae(t, n, r, i), B.USER_ID_SET
                }
            }
        },
        F = B.UNINITIALIZED,
        K = (e.taboola_view_id || (e.taboola_view_id = (new Date).getTime()), e.taboola_view_id),
        $, G, H = function t() {
            var n = function e() {};
            n.prototype.isCookieBannerOfProvider = function() {
                throw new Error("method isCookieBannerOfProvider must be implemented in subclasses.")
            }, n.prototype.parseConsent = function() {}, n.prototype.addListenerForConsentChange = function() {}, n.prototype.isCookieBannerOpen = function() {
                return !1
            }, n.prototype.version = "1";
            var i = function e() {};
            (i.prototype = Object.create(n.prototype)).constructor = i, i.prototype.providerName = "TcfApi", i.prototype.version = "2", i.prototype.isCookieBannerOfProvider = function() {
                return void 0 !== e.__tcfapi && "function" == typeof e.__tcfapi
            }, i.prototype.addListenerForConsentChange = function() {
                e.__tcfapi("addEventListener", 2, function(e, t) {
                    !t || "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || q({
                        tcString: e.tcString,
                        gdprApplies: e.gdprApplies,
                        cmpStatus: 0
                    })
                })
            };
            var o = function e() {};
            (o.prototype = Object.create(n.prototype)).constructor = o, o.prototype.providerName = "OneTrust", o.prototype.isCookieBannerOfProvider = function() {
                return void 0 !== e.OnetrustActiveGroups && void 0 !== e.OneTrust
            }, o.prototype.parseConsent = function() {
                q({
                    consentData: e.OnetrustActiveGroups
                })
            }, o.prototype.addListenerForConsentChange = function() {
                if (void 0 !== e.OneTrust.OnConsentChanged) {
                    var t = function e() {
                        r.trk.parseCookieBannerConsent(o.prototype)
                    };
                    e.OneTrust.OnConsentChanged(t)
                }
            };
            var a = function e() {};
            (a.prototype = Object.create(n.prototype)).constructor = a, a.prototype.providerName = "Didomi", a.prototype.isCookieBannerOfProvider = function() {
                return void 0 !== e.Didomi
            }, a.prototype.parseConsent = function() {
                void 0 !== e.Didomi.getUserStatus && void 0 !== e.Didomi.getUserStatus().consent_string ? q({
                    tcString: e.Didomi.getUserStatus().consent_string
                }) : q(null)
            }, a.prototype.addListenerForConsentChange = function() {
                e.didomiEventListeners = window.didomiEventListeners || [], e.didomiEventListeners.push({
                    event: "consent.changed",
                    listener: function e(t) {
                        r.trk.parseCookieBannerConsent(a.prototype)
                    }
                })
            }, a.prototype.isCookieBannerOpen = function() {
                return void 0 !== e.Didomi.notice && void 0 !== e.Didomi.notice.isVisible && e.Didomi.notice.isVisible()
            };
            var s = function e() {};
            (s.prototype = Object.create(n.prototype)).constructor = s, s.prototype.providerName = "Usercentrics", s.prototype.isCookieBannerOfProvider = function() {
                return void 0 !== e.UC_UI
            }, s.prototype.parseConsent = function() {
                "function" == typeof e.UC_UI.areAllConsentsAccepted && "boolean" == typeof e.UC_UI.areAllConsentsAccepted() ? q({
                    consentData: e.UC_UI.areAllConsentsAccepted().toString()
                }) : q(null)
            };
            var c = function e() {};
            (c.prototype = Object.create(n.prototype)).constructor = c, c.prototype.providerName = "Cookiebot", c.prototype.isCookieBannerOfProvider = function() {
                return void 0 !== e.Cookiebot
            }, c.prototype.parseConsent = function() {
                void 0 !== e.Cookiebot.consent && "boolean" == typeof e.Cookiebot.consent.marketing ? q({
                    consentData: e.Cookiebot.consent.marketing.toString()
                }) : q(null)
            }, c.prototype.addListenerForConsentChange = function() {
                if ("function" == typeof window.addEventListener) {
                    var e = function e(t) {
                        r.trk.parseCookieBannerConsent(c.prototype)
                    };
                    window.addEventListener("CookiebotOnConsentReady", e)
                }
            };
            var u = function e() {};
            return (u.prototype = Object.create(n.prototype)).constructor = u, u.prototype.providerName = "SourcePoint", u.prototype.isCookieBannerOfProvider = function() {
                return void 0 !== e._sp_
            }, u.prototype.addListenerForConsentChange = function() {
                "function" == typeof e._sp_.addEventListener ? window._sp_.addEventListener("onConsentReady", function(e, t, n) {
                    q("string" == typeof n ? {
                        tcString: n,
                        cmpStatus: 0
                    } : "string" == typeof t ? {
                        tcString: t,
                        cmpStatus: 0
                    } : null)
                }) : q(null)
            }, {
                "TcfApi,V2": new i,
                "OneTrust,V1": new o,
                "Didomi,V1": new a,
                "Usercentrics,V1": new s,
                "Cookiebot,V1": new c,
                "SourcePoint,V1": new u
            }
        },
        q = function e(t) {
            r.trk.cookieBannerConsent = t
        },
        Q = function e() {
            return r.trk.cookieBannerProvider && r.trk.cookieBannerConsent ? {
                cookieBannerConsent: r.trk.cookieBannerConsent,
                cookieBannerProvider: r.trk.cookieBannerProvider
            } : null
        },
        J = function e() {
            return !0 === n.tfaContext
        },
        W = function e() {
            try {
                localStorage.setItem("taboolaStorageDetection", "detect"), localStorage.removeItem("taboolaStorageDetection")
            } catch (e) {
                return !1
            }
            return !0
        },
        z = function e(t, n, r) {
            var i = t.split(n);
            return i.slice(0, r - 1).concat(i.length >= r ? i.slice(r - 1).join(n) : [])
        },
        Y = function e(t) {
            if (!t) throw new Error("Invalid URL!");
            this.href = t;
            var n = z(t, "#", 2);
            return this.hash = n.length > 1 ? "#" + n.pop() : "", t = n[0], n = z(t, "?", 2), this.search = n.length > 1 ? "?" + n.pop() : "", t = n[0], n = z(t, "://", 2), this.protocol = n.length > 1 ? n.shift() + ":" : "", t = n[0], n = z(t, "/", 2), this.pathname = n.length > 1 ? "/" + n.pop() : "/", t = n[0], n = z(t, "@", 2), this.auth = n.length > 1 ? n.shift() : "", t = n[0], n = z(t, ":", 2), this.port = n.length > 1 ? parseInt(n.pop()) : 0, this.host = n[0], this
        },
        X = {
            "http:": 1,
            "https:": 1
        };
    Y.prototype.toString = function(e) {
        return (this.host ? this.protocol + "//" + (this.auth ? this.auth + "@" : "") + this.host + (this.port ? ":" + this.port : "") : "") + this.pathname + this.search + (e ? "" : this.hash || "")
    }, Y.prototype.switchProtocol = function(e, t) {
        var n = this instanceof Y ? this : new Y(this),
            r;
        return X[e] && (t && "https:" === n.protocol || (n.protocol = e)), (r = n.toString(!1)).length > 1 ? r : ""
    }, Y.prototype.getParameter = function(e) {
        for (var t, n = (this instanceof Y ? this : new Y(this)).search.substr(1).split(/&/), r = 0; r < n.length; r++) {
            var i = n[r].split(new RegExp("="), 2);
            if (unescape(i[0]) === e) return unescape(i[1])
        }
        return null
    };
    var Z = {
            states: {
                ABP_DETECTION_DISABLED: -2,
                ABP_NOT_DETECTED: 0,
                ABP_DETECTED: 1
            },
            createBlockDetectionDiv: function e(n) {
                var r = t.createElement("div");
                return r.className = n, r.style.fontSize = "initial", r.appendChild(t.createTextNode(".")), t.documentElement.appendChild(r), r
            },
            isBlockDetectedOnDiv: function e(t) {
                return !t.offsetHeight
            },
            isBlockDetectedOnClassNames: function e(n) {
                var r, i = n.length,
                    o;
                for (r = 0; r < i; r++)
                    if (n[r]) {
                        o = this.createBlockDetectionDiv(n[r]);
                        try {
                            if (this.isBlockDetectedOnDiv(o)) return !0
                        } catch (e) {} finally {
                            t.documentElement.removeChild(o)
                        }
                    }
                return !1
            },
            getBlockedState: function e(t) {
                return Ce() || Pe() ? this.states.ABP_NOT_DETECTED : t && this.isBlockDetectedOnClassNames(t) ? this.states.ABP_DETECTED : this.states.ABP_NOT_DETECTED
            }
        },
        ee = function e(t, n) {
            for (var r = i.objKeys(t), o = 0; o < r.length; o++) {
                var a = r[o];
                n.push([a, t[a]])
            }
        },
        te = function e(t) {
            r[t.callbackName] = function() {}, t.newScriptElement.parentNode && t.newScriptElement.parentNode.removeChild(t.newScriptElement), t.newScriptElement = null, delete t.newScriptElement
        },
        ne = function t(n) {
            te(n), n[E] = w, n.isMediaRequest || (e.TRC.trkRequestStatus = !1), F === B.PENDING_USER_ID_SET && (F = B.UNINITIALIZED), n[y] ? r.eventUtils.dispatchEvent(r.sharedEvents.INVALID_TRK_RESPONSE, {
                publisherId: n.publisherId
            }) : r.eventUtils.dispatchEvent(r.sharedEvents.REQUEST_ID_CREATION_TIMEOUT, {
                publisherId: n.publisherId
            }), le()
        },
        re = function e(n, r, i, o) {
            var a = t.getElementsByTagName("script")[0],
                s = t.createElement("script");
            return s.type = "text/javascript", s.src = n, s.charset = "UTF-8", i ? s.setAttribute("defer", "defer") : o && s.setAttribute("async", "async"), "function" == typeof r && (s.addEventListener ? (s.addEventListener("load", r, !1), s.addEventListener("error", r, !1)) : s.onreadystatechange = function() {
                "loaded" !== s.readyState && "complete" !== s.readyState || r.apply(s)
            }), a.parentNode.insertBefore(s, a), s
        },
        ie = function e(t, n, r, i) {
            var o = {
                publisherId: t,
                isMediaRequest: r.isMediaRequest,
                isUnifiedPageView: r.isUnifiedPageView,
                publisherIdType: n,
                callbackName: "trkCallback" + (0 === p ? "" : p),
                metadata: i
            };
            return o[E] = I, h[t] || (h[t] = []), h[t].push(o), ++p, o
        },
        oe = function e(t) {
            return function() {
                ne(t)
            }
        },
        ae = function t(r, i, o, a) {
            var s = n.rboxTrcProtocol + "//trc.taboola.com/" + r + "/trc/3/json?" + "tim=" + (new Date).getTime() + "&" + "data=" + encodeURIComponent(JSON.stringify(ce(a))) + "&" + "pubit=" + i,
                c = o.isMediaRequest ? e._tfa.config.safeGet("tfa:trk:tracking-request-timeout", T, r) : b;
            a[E] = R, a[m] = e.setTimeout(oe(a), c), a.newScriptElement = re(s, function() {
                a[y] = !0
            })
        },
        se = function e(t) {
            return function(e) {
                fe(t, e)
            }
        },
        ce = function e(t) {
            return r[t.callbackName] = se(t), Te(t)
        },
        ue = function e(t) {
            var n = h[t = "" + t];
            return n && n.length > 0 ? n[n.length - 1] : null
        },
        le = function e() {
            r.eventUtils.dispatchEvent(M, x)
        },
        fe = function t(i, o) {
            if (e.clearTimeout(i[m]), o && o.trc) {
                if (o.trc.ui ? (o.trc["DNT"] && "TRUE" === o.trc["DNT"].toUpperCase() ? localStorage.removeItem("taboola global:user-id") : o.trc["cm"] || localStorage.setItem("taboola global:user-id", o.trc["ui"]), F = B.USER_ID_SET) : F = B.UNINITIALIZED, o.trc.sd && !o.trc["cm"] && localStorage.setItem(i.publisherId + ":session-data", o.trc["sd"]), o.trc["vl"] && o.trc["vl"].length) {
                    var a = o.trc["vl"][0].ri;
                    i.isMediaRequest || (e.TRC.events_ri = a), i[S] = a, i[E] = C, r.eventUtils.dispatchEvent(r.sharedEvents.REQUEST_ID_CREATED, {
                        publisherId: i.publisherId,
                        requestId: a
                    })
                }
                i.isMediaRequest && r.trk.rboxNotLoaded() && (o.trc.stp && r.trk.loadPixels(o.trc.stp), o.trc.jst && r.trk.loadScriptTags(o.trc.jst)), r.privacySandbox && r.privacySandbox.isProtectedAudienceSupported() && i.isMediaRequest && o.trc.ig && r.privacySandbox.joinInterestGroupsInIframe(o.trc.ig)
            }
            i[E] !== C && (i[E] = P, r.eventUtils.dispatchEvent(r.sharedEvents.REQUEST_ID_CREATION_ERROR, {
                publisherId: i.publisherId
            })), i.isMediaRequest || (e.TRC.trkRequestStatus = !(O.indexOf(i[E]) >= 0)), e.TRC.alertVVResponseLoaded && e.TRC.alertVVResponseLoaded(n.tblVersion), te(i), le()
        },
        de = function() {
            var e, t = function e() {
                    try {
                        return decodeURI(top.window.document.referrer)
                    } catch (e) {}
                    return null
                },
                n = /https?:\/\/\w+\.taboola(?:syndication)?\.com/,
                r = function e(t) {
                    return n.test(t) ? t.split("?")[0] : t.substr(0, 400)
                },
                i, o = [function e() {
                    for (var t = document.head.getElementsByTagName("link"), n = 0; n < t.length; n++)
                        if ("referrer" === t[n].rel) return t[n].href;
                    return null
                }, function e() {
                    var n = t();
                    return n ? r(n) : null
                }],
                a = function e() {
                    for (var e, t = 0; !e && t < o.length; t++) e = o[t].call(this);
                    return e
                };
            return a.innerExtractReferrerFromTopMostReferrer = r, a
        }(),
        he = function e() {
            var t = d;
            return t || (t = de()), t
        },
        pe = function e(t) {
            var n;
            if (t) {
                try {
                    n = Y.prototype.getParameter.call(window.location.href, "cnsntstr")
                } catch (e) {}
                n && (t.tcs = n, t.ga = !0, t.cmps = 5), t.ad = {
                    sdkd: {
                        os: "AMP",
                        osv: 1,
                        sdkt: "Taboola AMP Driver",
                        sdkv: "1"
                    }
                }
            }
        },
        ge = function t() {
            if ($) return $;
            var n = 400,
                r;
            return ($ = e.location.search).length > n && (r = $.substring(0, n - 1), $ = r.substring(0, r.lastIndexOf("&"))), $
        },
        ve = function e(t) {
            var n = Ee("usprivacy");
            if ("function" == typeof __uspapi) try {
                __uspapi("getUSPData", 1, function(e, r) {
                    r && e ? t(e.uspString) : n && t(n)
                })
            } catch (e) {
                throw n && t(n), new Error("Error while calling __uspapi for getUSPData")
            } else n && t(n)
        };

    function me(e, t, n) {
        if (t) {
            try {
                window.__gpp("removeEventListener", function() {}, e.listenerId)
            } catch (e) {}
            n(e)
        }
    }
    var Se = function e(t) {
            if ("function" == typeof t) try {
                var n = function e(n, r) {
                    me(n, r, t)
                };
                window.__gpp("addEventListener", n)
            } catch (e) {}
        },
        Ee = function e(t) {
            var n = t + "=",
                r = "; " + document.cookie;
            if (r)
                for (var i = r.split(";"), o = 0; o < i.length; o++)
                    for (var a = i[o];
                        " " === a.charAt(0);)
                        if (0 === (a = a.substring(1, a.length)).indexOf(n)) return a.substring(n.length, a.length);
            return null
        },
        ye = function t(o, a) {
            var s = {},
                c = o.metadata,
                u = o.publisherId,
                l = e._tfa.config.safeGet("tfa:trk:should-send-media-data", !0, u),
                f = e._tfa.config.safeGet("tfa:trk:media-data-param-name", "mpvd", u),
                d = e._tfa.config.safeGet("tfa:trk:unified-page-view-param-name", "supv", u),
                h = {},
                p;
            return e._tfa.config.safeGet("tfa:trk:collect-cookie-banner-consent:enabled", !0, n.bakedPublisherId) && (h = r.trk.parseCookieBanner()) && (a.cbp = h.cookieBannerProvider.providerName, a.cbpv = h.cookieBannerProvider.version, h.cookieBannerConsent.tcString && e._tfa.config.safeGet("tfa:trk:send-tc-string:enabled", !0, n.bakedPublisherId) ? (a.tcs = h.cookieBannerConsent.tcString, h.cookieBannerConsent.gdprApplies && (a.ga = h.cookieBannerConsent.gdprApplies), h.cookieBannerConsent.cmpStatus && (a.cmps = h.cookieBannerConsent.cmpStatus)) : h.cookieBannerConsent.consentData && (a.cbcd = h.cookieBannerConsent.consentData)), i.forEach(function(e) {
                var t = c[e];
                a.hasOwnProperty(e) && t === a[e] || (s[e] = t)
            }, i.objKeys(c)), o.isUnifiedPageView && (s[d] = !0), l && (a[f] = s), e._tfa.config.safeGet("tfa:trk:collect-ccpa", !0, n.bakedPublisherId) && ve(function(e) {
                a.ccpa = e
            }), e._tfa.config.safeGet("tfa:trk:collect-gpp", !1, n.bakedPublisherId) && Se(function(e) {
                e && (a.cmpStatus = 0, a.applicableSections = e.pingData.applicableSections, a.gppString = e.pingData.gppString)
            }), r.privacySandbox && r.privacySandbox.isProtectedAudienceSupported() && (a.pa = {
                su: !0
            }, a.psb = !0), a
        },
        be = function t(r) {
            var i = n.jsScope + "." + r.callbackName,
                o = Z.getBlockedState(["banner_ad", "sponsored_ad"]);
            return {
                id: ~~(1e3 * Math.random()),
                ii: _e(r),
                it: Le(e._taboola),
                sd: Me(r.publisherId),
                ui: xe(),
                vi: K,
                cv: n.tblVersion,
                uiv: "default",
                u: Ve(),
                e: he(),
                cb: i,
                qs: ge(),
                r: [{
                    li: "rbox-tracking",
                    s: 0,
                    uim: "rbox-tracking:pub=" + n.bakedPublisherName + ":abp=" + o,
                    uip: "rbox-tracking",
                    orig_uip: "rbox-tracking"
                }]
            }
        },
        Te = function e(t) {
            var n = be(t);
            return Ce() && pe(n), t.isMediaRequest && (n = ye(t, n)), n
        },
        Ie = function e(t) {
            for (var n = 0; n < t.length; ++n)
                for (var r = t[n], o = i.objKeys(r), a = 0; a < o.length; ++a) {
                    var s = o[a],
                        c = r[s];
                    if ("unknown" !== c) switch ("auto" === c && (c = ""), s) {
                        case "video":
                            u = c;
                            break;
                        case "url":
                            f = c;
                            break;
                        case "article":
                        case "category":
                        case "home":
                        case "search":
                        case "photo":
                        case "other":
                        case "content_hub":
                            l = c;
                            break;
                        case "ref_url":
                            d = c
                    }
                }
        },
        Re = function t(n) {
            if (n) {
                var i = r.trk.getPublisherRequestId(n);
                if (i) return i
            }
            return e.TRC.events_ri
        },
        _e = function e(t) {
            var r = null;
            return u || "" === u ? r = u : (l || "" === l) && (r = l), ("" === r || t.isMediaRequest) && (r = Oe("item-id", n.normalizeItemId, n.prenormalizeIdRules)), r
        },
        we = function e(t, n, r) {
            var o;
            if (!r) return n;
            i.forEach(function(e) {
                var t = n.search(e);
                t >= 0 && (n = n.substr(0, t))
            }, r["truncate-at"] || []);
            for (var a = new Y(n), s = i.objKeys(r), c = 0; c < s.length; ++c) {
                var u = s[c];
                if (r[u]) switch (u) {
                    case "host":
                        delete a.host;
                        break;
                    case "trailing-dirsep":
                        for (;
                            "/" === a.pathname.substr(a.pathname.length - 1);) a.pathname = a.pathname.substr(0, a.pathname.length - 1);
                        break;
                    case "query":
                        var l = [],
                            f = a.search.replace(/^\?/, "").split("&");
                        "string" == typeof(o = r[u]) && (o = new RegExp(o));
                        var d = o instanceof Array ? function(e) {
                            for (var t = 0; t < o.length; t++)
                                if (e === o[t]) return !0;
                            return !1
                        } : o instanceof RegExp ? o.test.trcBind(o) : function() {
                            return !1
                        };
                        f.forEach(function(e) {
                            d(decodeURIComponent(e.split("=")[0])) && l.push(e)
                        }), a.search = (l.length ? "?" : "") + l.join("&");
                        break;
                    case "fragment":
                        var h = a.hash.replace(/^#/, "");
                        "string" == typeof(o = r[u]) && (o = new RegExp(o)), a.hash = "", o instanceof RegExp && o.test(h) ? a.hash = "#" + h : o instanceof Array && o.forEach(function(e) {
                            h.search(e) >= 0 && (a.hash = "#" + h)
                        })
                }
            }
            return a.pathname || (a.pathname = "/"), "item-id" === t ? a.toString().toLowerCase() : a.toString()
        },
        Ce = function e() {
            return Ae(he(), "ampproject.net")
        },
        Pe = function e() {
            return Ae(he(), "instantarticles.fb.com")
        },
        Ae = function e(t, n) {
            try {
                return void 0 !== t && void 0 !== n && t.indexOf(n) > 0
            } catch (e) {
                return !1
            }
        },
        Oe = function e(t, r, i) {
            var o = ["paramUrl", "meta", "canonical", "og", "location"],
                a = {
                    paramUrl: ke,
                    canonical: Ue,
                    og: De,
                    location: Ne
                },
                s = n.urlExtractOrder && Array.isArray(n.urlExtractOrder) ? n.urlExtractOrder : o,
                c = 0,
                l, f, d, h = "",
                p = function e(t, n) {
                    return we.call(this, t, n, i)
                };
            for (s.push("location"); c < s.length && (!h || /^\s*$/.test(h));) f = s[c], h = (l = a[s[c]]) ? l.call(null, t, p) : null, c++;
            return "item-url" === t && f === ke ? h : (d = f !== Ne, h = "function" == typeof r ? r.call(this, h, u ? "video" : "text", d) : h)
        },
        ke = function e(t, n) {
            return !f || "item-id" !== t && "item-url" !== t ? null : n.call(this, t, r.trk.encodeItemUrlIfNeeded(f))
        },
        Ue = function e(n, i) {
            for (var o = t.head.getElementsByTagName("link"), a = 0; a < o.length; a++)
                if ("canonical" === o[a].rel && o[a].href) return i.call(this, n, r.trk.encodeItemUrlIfNeeded(o[a].href));
            return null
        },
        De = function e(n, i) {
            for (var o = t.head.getElementsByTagName("meta"), a = 0; a < o.length; a++)
                if ("og:url" === o[a].getAttribute("property") && o[a].content.length > 5) return i.call(this, n, r.trk.encodeItemUrlIfNeeded(o[a].content));
            return null
        },
        Ne = function t(n, r) {
            var o = function t() {
                var n = e.location,
                    r = i.filter(function(e) {
                        return 0 !== e.search("trc_") && "taboola-debug" !== e
                    }, n.search.replace(/^\?/, "").split("&")).join("&");
                return n.origin + n.pathname + "?" + r
            };
            return r.call(this, n, o())
        },
        Le = function e(t) {
            try {
                var n = i.objKeys(t[0]);
                for (var r in n) switch (n[r]) {
                    case "home":
                        return "home";
                    case "category":
                        return "category";
                    case "text":
                    case "article":
                        return "text";
                    case "search":
                        return "search";
                    case "photo":
                        return "photo";
                    case "other":
                        return "other";
                    case "content_hub":
                        return "content_hub";
                    case "video":
                    default:
                        return "video"
                }
            } catch (e) {
                return "video"
            }
        },
        Me = function e(t) {
            return localStorage.getItem(t + ":session-data")
        },
        xe = function e() {
            return localStorage.getItem("taboola global:user-id")
        },
        Ve = function e() {
            return Oe("item-url", n.normalizeItemUrl, n.prenormalizeUrlRules)
        },
        je = function e(t) {
            for (var n, r = /^(.*\/libtrc\/.+\/)(?:(?:trk)|(?:tfa))\.js(?:\?(.*))?$/, i = 0; i < t.length; i++)
                if (n = t[i].src.match(r)) return n[1]
        },
        Be = function e() {
            for (var n = je(t.getElementsByTagName("script")), r = [{
                    key: "?",
                    index: 0
                }, {
                    key: "://",
                    index: 1
                }, {
                    key: "//",
                    index: 1
                }, {
                    key: "/",
                    index: 0
                }], i = 0, o = r.length, a = n, s; i < o; i++) a = (s = z(a, r[i].key, 2)).length > 1 ? s[r[i].index] : s[0];
            return a
        },
        Fe = function t() {
            if (!e.TRC.AdServerManager) {
                var r = Be();
                e.TRC.VVReady = Ke, re("//" + r + "/libtrc/vv." + n.tblVersion + ".js")
            }
        },
        Ke = function t() {
            e.TRC.adManager = new e.TRC.AdServerManager(n.vvConfig, n.tblVersion), e.TRC.adManager.startVV().then(function() {
                e.TRC.adManager.run()
            })
        },
        $e = function e(t, n) {
            return t ? t[n] : t
        },
        Ge = function e(t, n, r) {
            if (0 === i.objKeys(r).length || D["" + t]) return t;
            var o = document.createElement("a");
            o.href = f;
            var a = (o.host || location.host).toLowerCase(),
                s = (o.href || location.href).toLowerCase(),
                c = U[n],
                u = $e(r[a], c),
                l = "/",
                d = ["m", "mobile", "www2", "www3"],
                h = [],
                p, g, v, m, S;
            if (!u) {
                for (ee(r, h), h.sort(function(e, t) {
                        return e[0].length > t[0].length ? -1 : e[0].length < t[0].length ? 1 : 0
                    }), p = 0, g = h.length; p < g; p++)
                    if ((v = h[p][0].toLowerCase()).indexOf(l) > 0) {
                        if (s.match(v)) {
                            u = $e(h[p][1], c);
                            break
                        }
                        if (v.indexOf("www.") > -1 && s.match(v.replace("www.", ""))) {
                            u = $e(h[p][1], c);
                            break
                        }
                    } else if (a.match(v)) {
                    u = $e(h[p][1], c);
                    break
                }
                if (!u && a.indexOf("www.") < 0) {
                    for (p = 0, g = d.length; p < g && (m = new RegExp("(https://|http://|^)" + d[p] + "."), S = a.replace(m, "www."), !(u = $e(r[S], c))); p++);
                    u || (u = $e(r[S = "www." + a], c))
                }
            }
            return u || "unknown-site-on-" + t
        },
        He = function e(t, n, r) {
            var i = ue(t);
            return i ? n.call(this, i[E]) : r
        },
        qe = function e(t, n, i) {
            var o, a, s = [];
            try {
                if (!Array.isArray(t)) return;
                for (a = 0; a < t.length; a++)(o = t[a]) && !n[o] && (n[o] = !0, o = Y.prototype.switchProtocol.call(o, r.trk.rboxTrcProtocol()), s.push(i(o)));
                return s
            } catch (e) {}
        };
    e.TRC = e.TRC || {}, e.TRC.trk = r.trk = e.TRC.trk || {
        init: function t() {
            r.trk.parseCookieBanner(), e.TRC.utm && !J() || (J() || g || (e.TRC._getGlobalRequestId = Re, e.TRC._getItemId = _e, e.TRC._getItemType = Le, g = !0), e.TRC.hasTrk ? J() || r.trk.execute() : e._tfa && !e._tfa.config.hasValidConfig() || (r.hasTrk = !0, W() && (r.eventUtils.safeAddEventListener(r.sharedEvents.PAGE_VIEW, function(t) {
                try {
                    var i = t.detail,
                        o = i.publisherIdType,
                        a = i.accountId,
                        s = i.pageViewInitiator,
                        c = i.isUnifiedPageView,
                        u = s === r.pageViewInitiator.TFA,
                        l = i.metadata,
                        f, d;
                    if (Ie(e._taboola), u) {
                        if (e._tfa.config.safeGet("tfa:trk:prevent-concurrent-requests", !0, a) && r.trk.isRequestProcessing(a)) return;
                        e._tfa.config.safeGet("tfa:trk:network-solution-enabled", !1, a) && (a = Ge(a, o, n.networkMap))
                    }
                    d = ie(a, o, f = {
                        pageViewInitiator: s,
                        isMediaRequest: u,
                        isUnifiedPageView: c
                    }, l), F = F.loadTrc(a, o, f, d)
                } catch (t) {
                    r.eventUtils.dispatchEvent(r.sharedEvents.REQUEST_ID_CREATION_JS_ERROR, {
                        publisherId: a
                    })
                }
            }), J() || r.trk.execute(), n.enableVV && Fe(), J() && e._tfa.config.safeGet("tfa:trk:topics-enabled", !1, n.bakedPublisherId) && this.observeTopics())))
        },
        execute: function t() {
            var i = r.publisherIdType.NAME,
                o = Ge(n.bakedPublisherName, i, n.networkMap);
            r.eventUtils.dispatchEvent(r.sharedEvents.PAGE_VIEW, {
                accountId: o,
                publisherIdType: i,
                pageViewInitiator: r.pageViewInitiator.TRK
            }), e.TRC.publisherId = e.TRC.publisherId || o
        },
        getRequestStatus: function e(t) {
            var n = ue(t);
            return n ? n[E] : A
        },
        isRequestProcessing: function e(t) {
            return He(t, function(e) {
                return k.indexOf(e) > -1
            }, !1)
        },
        hasRequestEnded: function e(t) {
            return He(t, function(e) {
                return O.indexOf(e) > -1 || !(k.indexOf(e) > -1)
            }, !1)
        },
        getPublisherRequestId: function e(t) {
            var n = ue(t);
            return n && n[E] === C ? n[S] : null
        },
        getPublisherSessionData: function e(t) {
            var n = Me(t);
            return n || null
        },
        getViewId: function e() {
            return K
        },
        getReferrer: de,
        getCcpaParam: function e(t) {
            return ve(t)
        },
        getGppParam: function e(t) {
            return Se(t)
        },
        COOKIE_BANNER_MAP: H(),
        parseCookieBanner: function e() {
            var t, n;
            try {
                return (n = Q()) ? n : null === (t = r.trk.parseCookieBannerProvider()) ? null : (r.trk.parseCookieBannerConsent(t), Q())
            } catch (e) {
                return null
            }
        },
        parseCookieBannerProvider: function e() {
            var t, n;
            if (r.trk.cookieBannerProvider) return r.trk.COOKIE_BANNER_MAP[r.trk.cookieBannerProvider.providerName + ",V" + r.trk.cookieBannerProvider.version];
            for (n in r.trk.COOKIE_BANNER_MAP)
                if (r.trk.COOKIE_BANNER_MAP.hasOwnProperty(n) && (t = r.trk.COOKIE_BANNER_MAP[n]).isCookieBannerOfProvider()) return r.trk.cookieBannerProvider = {
                    providerName: t.providerName,
                    version: t.version
                }, t.addListenerForConsentChange(), t;
            return null
        },
        parseCookieBannerConsent: function e(t) {
            try {
                t.isCookieBannerOpen() || t.parseConsent()
            } catch (e) {}
        },
        loadPixels: function t(n) {
            try {
                return qe(n, e.TRC.sharedObjects.loadedPixels, function(e) {
                    var t = new Image;
                    return t.src = e, t
                })
            } catch (e) {}
        },
        loadScriptTags: function t(n) {
            try {
                return qe(n, e.TRC.sharedObjects.loadedScripts, function(e) {
                    return re(e, null, null, !0)
                })
            } catch (e) {}
        },
        rboxNotLoaded: function t() {
            return !(e.TRC && e.TRC.utm)
        },
        rboxTrcProtocol: function e() {
            return n.rboxTrcProtocol
        },
        observeTopics: function e() {
            try {
                "browsingTopics" in t && "function" == typeof t.browsingTopics && t.featurePolicy && t.featurePolicy.allowsFeature("browsing-topics") && fetch("https://psb.taboola.com/topics_api", {
                    browsingTopics: !0
                })
            } catch (e) {}
        },
        hasSuperUTFSeq: function e(t) {
            for (var n = t.split("").map(function(e) {
                    return e.charCodeAt(0)
                }), i = 0, o = 0; o < n.length; o++) {
                if (r.trk.isSuperUTF(n[o]) || (i = 0), i >= 3) return !0;
                i++
            }
            return !1
        },
        isSuperUTF: function e(t) {
            var n;
            return t > 1200
        },
        encodeItemUrlIfNeeded: function e(t) {
            try {
                if (r.trk.hasSuperUTFSeq(t)) return encodeURI(t)
            } catch (e) {}
            return t
        }
    }, J() && !e._tfa.config.safeGet("tfa:trk:enabled", !0, n.bakedPublisherId) || r.trk.init()
}(window, document, {
    bakedPublisherId: 1795028,
    bakedPublisherName: 'taboolaaccount-darrenpropfirmmatchcom',
    tblVersion: "20250119-6-RELEASE",
    normalizeItemId: function(itemid, type, canon) {
        if (!canon && type == 'text' && typeof itemid == 'string' && itemid.search(new RegExp('^https?://')) == 0) itemid = itemid.replace(/\?.*/, '', false);
        return itemid.toLowerCase();
    },
    prenormalizeIdRules: {
        "host": true,
        "fragment": "^(/video/|!)",
        "query": ["p", "id"],
        "truncate-at": ["search.searchcompletion.com", "org.mozilla.javascript.undefined"],
        "trailing-dirsep": true
    },
    prenormalizeUrlRules: false,
    normalizeItemUrl: function(itemurl, type, canon) {
        return itemurl;
    },
    urlExtractOrder: null,
    networkMap: {},
    vvConfig: null,
    enableVV: false,
    rboxTrcProtocol: 'https:',
    tfaContext: true,
    jsScope: 'TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC'
}),
function(e, t) {
    e._tfa = e._tfa || [], t.useStorageDetection = e.TRC.useStorageDetection = e.TRC.useStorageDetection || !0, t.text = t.text || {}, t.text.lsplit = t.text.lsplit || function(e, t, n) {
        var r = e.split(t);
        return r.slice(0, n - 1).concat(r.length >= n ? r.slice(n - 1).join(t) : [])
    }, t.tfaUtil = t.tfaUtil || {}, t.tfaUtil.safeAddParam = t.tfaUtil.safeAddParam || function(e, t, n) {
        var r, i;
        n && t && e && (r = encodeURIComponent(e), i = encodeURIComponent(t), n.push(r + "=" + i))
    }, t.tfaUtil.getParameterByName = t.tfaUtil.getParameterByName || function(e, t) {
        if (!t || !e) return null;
        e = e.replace(/[\[\]]/g, "\\$&");
        var n, r = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
    };
    var n = e.TRCImpl = e.TRCImpl || {};
    n.global = n.global || {}, e.__trcError = e.__trcError || function e() {}
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t) {
    var n = "taboola global",
        r = "trctestcookie";

    function i() {
        for (var e = "trc_cookie_storage", n = new Object, r = document.cookie.split(/;\s+/), i = 0; i < r.length; i++) {
            var o = t.text.lsplit(r[i], "=", 2),
                a = unescape(o[0]),
                s = unescape(o[1]);
            if (a == e) {
                for (var c = s.split("|"), u = 0; u < c.length; u++) {
                    var o = c[u].split("=");
                    n[unescape(o[0])] = unescape(o[1])
                }
                break
            }
        }

        function l() {
            var t = new Array,
                r, i;
            for (var o in n) n.hasOwnProperty(o) && null != n[o] && (t[t.length] = escape(o) + "=" + escape(n[o]));
            r = t.length > 0 ? 1 : -1, i = new Date((new Date).getTime() + 365 * r * 864e5), document.cookie = e + "=" + escape(t.join("|")) + ";path=/;expires=" + i.toUTCString()
        }
        return this.getValue = function(e) {
            return n.hasOwnProperty(e) ? n[e] : null
        }, this.setValue = function(e, t) {
            n[e] = t, l()
        }, this.removeKey = function(e) {
            delete n[e], l()
        }, this
    }

    function o(e) {
        var t = e || {};
        return this.getValue = function(e) {
            return t[e] ? t[e] : null
        }, this.setValue = function(e, n) {
            t[e] = n
        }, this.removeKey = function(e) {
            delete t[e]
        }, this.getData = function() {
            return t
        }, this
    }

    function a(t) {
        return this.getValue = function(n) {
            return e[t + "Storage"].getItem(n)
        }, this.setValue = function(n, r) {
            try {
                e[t + "Storage"].setItem(n, r)
            } catch (e) {}
        }, this.removeKey = function(n) {
            try {
                e[t + "Storage"].removeItem(n)
            } catch (e) {}
        }, this
    }

    function s(t) {
        var n = e[t + "Storage"],
            r = (new Date).getTime() + "",
            i = "_taboolaStorageDetection";
        try {
            if (n.setItem(i, r), n.getItem(i) == r) return n.removeItem(i), n
        } catch (e) {}
        return null
    }

    function c(n) {
        try {
            if (e.localStorage instanceof Storage && t.useStorageDetection && s(n)) return new a(n)
        } catch (e) {
            return null
        }
    }

    function u(e) {
        var t = [c("local"), new i, c("session")];
        try {
            for (var n = 0, r = t; n < r.length; n++) {
                var a, s = r[n].getValue(e);
                if (s) return s
            }
        } catch (e) {}
        return (new o).getValue(e)
    }
    var l = function r() {
        return this.state = {}, this.getLocalStorageImplementation = function(t, n) {
            if (null != this.state.privateStorageImpl && "strict-w3c-storage" != t) return this.state.privateStorageImpl;
            var r = e._tfa.config.safeGet("tfa:local-storage-usage", "prefer-w3c-storage");
            switch (t = t || r) {
                case "strict-w3c-storage":
                    return c("session" === n ? "session" : "local");
                case "prefer-w3c-storage":
                    var a = c("local");
                    if (a) return this.state.privateStorageImpl = a;
                case "prefer-cookies":
                    try {
                        if (this.canWriteCookies()) return this.state.privateStorageImpl = new i
                    } catch (e) {}
                default:
                    return this.state.privateStorageImpl = new o
            }
        }, this.getFirstPartyCookie = function() {
            if (this.state.firstPartyCookie) return this.state.firstPartyCookie;
            var e = this.getLocalStorageImplementation();
            if (e instanceof i || e instanceof o) return this.state.firstPartyCookie = e;
            try {
                if (this.canWriteCookies()) return this.state.firstPartyCookie = new i
            } catch (e) {}
            return this.state.firstPartyCookie = new o
        }, this.canWriteCookies = function() {
            return e.navigator.cookieEnabled
        }, this.getDummyStorage = function(e) {
            return new o(e)
        }, this.getValue = function(e) {
            return this.getPublisherValue(n, e)
        }, this.storePublisherValue = function(e, t, n) {
            var r;
            this.isNotAllowedToWriteValue(t, n) || (r = this.buildKeyWithPublisher(e, t), this.getLocalStorageImplementation().setValue(r, n), this.addKeyToStoredKeysList(r))
        }, this.isNotAllowedToWriteValue = function(e, n) {
            return null == n || void 0 == n || t.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(e)
        }, this.buildKeyWithPublisher = function(e, t) {
            return e + ":" + t
        }, this.getPublisherValue = function(e, n) {
            return t.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(n) ? null : u(this.buildKeyWithPublisher(e, n))
        }, this.addKeyToStoredKeysList = function(e) {
            var t = this.getStoredKeysList(); - 1 === t.indexOf(e) && (t.push(e), this.setStoredKeysList(t))
        }, this.getStoredKeysList = function() {
            var e = this.buildKeyWithPublisher(n, "local-storage-keys"),
                t = this.getLocalStorageImplementation().getValue(e),
                r = [];
            try {
                r = JSON.parse(t) || []
            } catch (e) {
                __trcError("Could not parse local storage keys", e)
            }
            return r
        }, this.setStoredKeysList = function(e) {
            var t, r;
            try {
                t = JSON.stringify(e), r = this.buildKeyWithPublisher(n, "local-storage-keys"), this.getLocalStorageImplementation().setValue(r, t)
            } catch (e) {
                __trcError("Could not stringify local storage keys", e)
            }
        }, this.isAllowedKeyWhenDoNotTrack = function(t) {
            var n, r = (e.TRCImpl && e.TRCImpl.global || {})["dnt-allowed-keys"] || ["session-id"],
                i;
            return null !== t && void 0 !== t && (i = t.split(":")[1] || t, -1 !== r.indexOf(i))
        }, this.storeUserId = function(e) {
            this.isNotAllowedToWriteValue("user-id", e) || this.storePublisherValue(n, "user-id", e)
        }, this.getUserIdFirstPartyCookie = function() {
            return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(n, "user-id"))
        }, this.getSessionDataFirstPartyCookie = function() {
            return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(n, "session-data"))
        }, this.initState = function() {
            void 0 === this.state && (this.state = {}), this.state.privateStorageImpl = null
        }, this.initState(), this
    };
    t.tfaPageManager = t.tfaPageManager || new l, t.tfaPageManager.TABOOLA_GLOBAL_KEY = n
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t, n) {
    var r = n.tfaPageManager,
        i = "https://",
        o = "tblci",
        a = "TABOOLA-DO-NOT-TRACK",
        s = "#" + o;

    function c(e, t) {
        e && t && (t[e] = !0)
    }

    function u(e, t, n) {
        for (var r = {}, i = 0; i < arguments.length; i++) c(arguments[i], r);
        return Object.keys(r).length > 1
    }
    n.tfaUserId = {
        initialized: !1,
        userId: null,
        clickId: null,
        getUserId: function e() {
            return this.userId
        },
        getClickId: function e() {
            return this.clickId
        },
        getHttpsPrefix: function e() {
            return i
        },
        sendUserIdsToTrc: function t(r, i, o, a) {
            var s, c = 'https:',
                l = [];
            if (u(r, i, o)) return n.tfaUtil.safeAddParam("uiref", r, l), n.tfaUtil.safeAddParam("uils", i, l), n.tfaUtil.safeAddParam("uifpc", o, l), n.tfaUtil.safeAddParam("tblci", a, l), s = new Image, e._tfa.config.safeGet("tfa:add-referrer-policy-when-firing-pixel", !0) && (s.referrerPolicy = "no-referrer-when-downgrade"), s.src = c + "//trc.taboola.com/sg/taboola-tfa/1/um/?" + l.join("&"), s
        },
        isUserCanBeTracked: function t(n) {
            return !n || !e._tfa.config.safeGet("tfa-uid:filter-do-not-track", !0) || -1 === n.indexOf(a)
        },
        readAndStoreUserId: function e() {
            var t = this.extractUserIdFromReferrer(),
                n = r.getValue("user-id"),
                i = r.getUserIdFirstPartyCookie();
            this.isUserCanBeTracked(t) || (t = void 0), this.isUserCanBeTracked(n) || (n = void 0), this.isUserCanBeTracked(i) || (i = void 0), this.sendUserIdsToTrc(t, n, i, this.getClickId()), t && (r.storeUserId(t), i && r.getFirstPartyCookie().setValue(r.TABOOLA_GLOBAL_KEY + ":" + "user-id", t)), this.userId = t || n || i
        },
        readAndStoreClickIdParam: function e() {
            var t = this.extractClickIdFromUrl(this.getWindowLocation().toString()) || this.extractClickIdFromUrl(this.getReferrer()),
                n = r.getValue(o);
            t && r.storePublisherValue(r.TABOOLA_GLOBAL_KEY, o, t), this.clickId = t || n
        },
        extractUserIdFromReferrer: function e() {
            var t = this.getReferrer();
            if (t && t.indexOf("taboola") > -1) return n.tfaUtil.getParameterByName("ui", t)
        },
        extractClickIdFromUrl: function e(t) {
            if (t) {
                var r = t.length > 1 && -1 !== t.indexOf("#") ? t.substring(t.indexOf("#")) : "",
                    i;
                if (i = n.tfaUtil.getParameterByName(o, t)) return i;
                if (r && r.length > s.length && 0 === r.indexOf(s)) return r.substr(s.length)
            }
        },
        getWindowLocation: function t() {
            return e.location
        },
        getReferrer: function e() {
            return t.referrer
        },
        init: function e() {
            this.initialized || (this.readAndStoreUserId(), this.readAndStoreClickIdParam(), this.initialized = !0)
        }
    }, n.tfaUserId.init(), n.tfaUserId.CLICK_ID_KEY = o
}(window, document, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t) {
    var n = "_tfa",
        r = e[n] = e[n] || [],
        i, o, a, s, c = 6 * 60 * 60 * 1e3,
        u = "eng_mt",
        l = "crossSessionsData",
        f = 36,
        d;

    function h(e, t, n) {
        var r = this.getTimeLeftForSession(e, this.getSessionDuration(), t);
        r < 0 && (r = 0), setTimeout(function() {
            n()
        }, r)
    }

    function p(e) {
        return e.ver && e.ver === this.getDataVersion()
    }
    var g = function e() {};
    g.prototype = {
        constructor: g,
        init: function e(n) {
            if (d = r.config.safeGet("tfa:engagement:session-duration-in-milliseconds", c), !this.isInitialized()) {
                var i = t.eventUtils.getDateNow(),
                    o = this.getSessionDataFromStorage();
                if (this.getIsLocalStorageAvailable()) return a = o && o.sessionStartTime, h.call(this, o, i, n), a && !this.isSessionInvalid(o) || (a = i, this.persistDefaultValues(a)), s = !0, this
            }
        },
        getStorageKey: function e() {
            return u
        },
        getCrossSessionsData: function e(t) {
            var n = t && t.getValue(this.getStorageKey()),
                r = n && JSON.parse(n);
            return r && r[l]
        },
        resetStorageMetricData: function e() {
            var n = t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"),
                r = this.getCrossSessionsData(n),
                i = {
                    crossSessionsData: r
                };
            n.setValue(this.getStorageKey(), r ? JSON.stringify(i) : "")
        },
        hasOnlyCrossSessionData: function e(t, n) {
            return t && 1 === t.length && n.hasOwnProperty(l)
        },
        isSessionInvalid: function e(t) {
            if (!t) return !0;
            var n = Object.keys(t);
            return this.hasOnlyCrossSessionData(n, t)
        },
        getSessionDataFromStorage: function e() {
            var n, r;
            n = t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"), o = !!n;
            var i = n && n.getValue(this.getStorageKey());
            if (r = i && JSON.parse(i)) return this.isSessionInvalid(r) ? r : !p.call(this, r) || this.hasSessionEnded() ? (this.resetStorageMetricData(), r) : r
        },
        hasSessionEnded: function e() {
            return !!s && (!a || t.eventUtils.getDateNow() - a > this.getSessionDuration())
        },
        persistDefaultValues: function e(n) {
            var r = t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage");
            if (r) {
                var i = {
                        ver: f,
                        sessionStartTime: n,
                        scrollDepth: 0,
                        sessionDepth: [],
                        timeOnSite: 0
                    },
                    o = this.getCrossSessionsData(r);
                o && (i[l] = o), r.setValue(this.getStorageKey(), JSON.stringify(i))
            }
        },
        persistSpecificMetricsData: function e(n, r) {
            var i = t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage"),
                o;
            i && n && (o = this.getSessionDataFromStorage()) && (o[n] = r, i.setValue(this.getStorageKey(), JSON.stringify(o)))
        },
        getCrossSessionsDataKey: function e() {
            return l
        },
        getSessionDuration: function e() {
            return d
        },
        getDataVersion: function e() {
            return f
        },
        getIsLocalStorageAvailable: function e() {
            return o
        },
        getSessionStartTime: function e() {
            return a
        },
        getTimeLeftForSession: function e(t, n, r) {
            return t && a ? a + n - r : n
        },
        isInitialized: function e() {
            return s
        }
    }, (i = r.TEM = r.TEM || {}).ESU = i.ESU || new g
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t) {
    var n = "_tfa",
        r;

    function i(e, t) {
        this.storageUtils.persistSpecificMetricsData(e, t)
    }
    var o = function e() {};
    o.prototype = {
        constructor: o,
        init: function e(t, n, r) {
            this.isValid = t && n && r, this.storageUtils = t, this.visibilityListener = r, this.refreshFromStorage(), this.initLastVisibleStartTime(), this.visibilityListener.subscribeToEvent(this.handleVisibilityChange.bind(this)), n.subscribeToEvent(this.handleStorageChange.bind(this))
        },
        getStorageKey: function e() {
            return "timeOnSite"
        },
        initLastVisibleStartTime: function e() {
            this.isValid && (this.lastVisibleStartTime = t.eventUtils.getDateNow())
        },
        refreshFromStorage: function e() {
            if (this.isValid) {
                var t = this.storageUtils.getSessionDataFromStorage(),
                    n = 0;
                t && t[this.getStorageKey()] && (n = t[this.getStorageKey()] || 0), this.timeOnSite = n
            }
        },
        calcTimeOnSite: function e() {
            if (this.isValid) return this.lastVisibleStartTime ? this.timeOnSite + (t.eventUtils.getDateNow() - this.lastVisibleStartTime) : this.timeOnSite
        },
        handleVisibilityChange: function e() {
            this.isValid && (this.visibilityListener.getIsPageHidden() ? (this.timeOnSite = this.calcTimeOnSite(), i.call(this, this.getStorageKey(), this.timeOnSite)) : this.lastVisibleStartTime = t.eventUtils.getDateNow())
        },
        handleStorageChange: function e() {
            this.refreshFromStorage()
        },
        getTimeOnSite: function e() {
            if (this.isValid) return this.visibilityListener.getIsPageHidden() ? this.timeOnSite : this.calcTimeOnSite()
        }
    }, (r = e[n] = e[n] || []).TEM = r.TEM || {}, r.TEM.TOS = r.TEM.TOS || new o
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function() {
    var e = "_tfa",
        t, n = !1,
        r;

    function i() {
        return void 0 == document.body || void 0 == document.documentElement ? 0 : (n = !0, Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - document.documentElement.clientHeight);
        var e
    }

    function o(e, t) {
        this.storageUtils.persistSpecificMetricsData(e, t)
    }

    function a(e, t) {
        var n;
        return function() {
            var r = this,
                i = arguments;
            clearTimeout(n), n = setTimeout(function() {
                e.apply(r, i)
            }, t)
        }
    }
    var s = function e() {};
    s.prototype = {
        constructor: s,
        init: function e(t, n) {
            this.storageUtils = t || {}, n.subscribeToEvent(this.handleStorageChange.bind(this)), this.refreshFromStorage(), this.initEventListeners(), this.updateMeasurements(), this.calcMaxScrollPercentage()
        },
        getStorageKey: function e() {
            return "scrollDepth"
        },
        getScrollDepth: function e() {
            return n || this.calcMaxScrollPercentage(), this.maxScrollPercentage
        },
        getMaxScrollableAmount: function e() {
            return n || (this.maxScrollableAmount = i()), this.maxScrollableAmount
        },
        initEventListeners: function e() {
            window.addEventListener("resize", a(this.onResize.bind(this), 100)), window.addEventListener("scroll", a(this.onScroll.bind(this), 50))
        },
        refreshFromStorage: function e() {
            var t = this.storageUtils.getSessionDataFromStorage(),
                n = 0;
            t && t[this.getStorageKey()] && (n = t[this.getStorageKey()] || 0), this.maxScrollPercentage = n
        },
        onResize: function e() {
            this.updateMeasurements()
        },
        onScroll: function e() {
            this.calcMaxScrollPercentage()
        },
        updateMeasurements: function e() {
            this.winHeight = window.innerHeight, this.maxScrollableAmount = i()
        },
        calcMaxScrollPercentage: function e() {
            this.updateMeasurements();
            var t = 0 === this.maxScrollableAmount ? 0 : Math.floor(window.pageYOffset / this.maxScrollableAmount * 100);
            t > this.maxScrollPercentage && (this.maxScrollPercentage = t, o.call(this, this.getStorageKey(), this.maxScrollPercentage))
        },
        handleStorageChange: function e() {
            this.refreshFromStorage()
        }
    }, (r = (t = window[e] = window[e] || []).TEM = t.TEM || {}).SCD = r.SCD || new s
}(),
function(e, t) {
    var n, r, i = e["_tfa"].TEM,
        o = function e() {};
    o.prototype = {
        constructor: o,
        init: function e(n, r, i) {
            this.storageUtils = n, this.refreshFromStorage(), t.eventUtils.safeAddEventListener(i, this.handleUnipPageView.bind(this)), r.subscribeToEvent(this.handleStorageChange.bind(this))
        },
        getKey: function e() {
            return "ssd"
        },
        getStorageKey: function e() {
            return "sessionDepth"
        },
        setState: function e(t) {
            this.visitedUrls = {};
            for (var n = 0; n < t.length; n++) this.visitedUrls[t[n]] = !0
        },
        getState: function e() {
            return this.visitedUrls ? Object.keys(this.visitedUrls) : []
        },
        getMetric: function e() {
            return this.getState().length
        },
        persistState: function e() {
            var t = this.getState();
            this.storageUtils.persistSpecificMetricsData(this.getStorageKey(), t)
        },
        refreshFromStorage: function e() {
            var t = this.storageUtils.getSessionDataFromStorage(),
                n = [];
            t && t[this.getStorageKey()] && (n = t[this.getStorageKey()] || []), this.setState(n)
        },
        handleUnipPageView: function e() {
            try {
                var n = t.eventUtils.hashString(window.location.href);
                this.visitedUrls[n] || (this.visitedUrls[n] = !0, this.persistState())
            } catch (e) {}
        },
        handleStorageChange: function e() {
            this.refreshFromStorage()
        },
        isURLVisited: function e(t) {
            return this.visitedUrls && this.visitedUrls[t]
        }
    }, i.SSD = i.SSD || new o
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e) {
    var t, n = e["_tfa"] || [],
        r = n.TEM || {},
        i = 30 * 24 * 60 * 60 * 1e3,
        o = 10,
        a = "tfa:engagement:session-history-timeframe-in-milliseconds",
        s = "tfa:engagement:session-history-limit",
        c = "sessionsHistory",
        u, l, f = function e() {};
    f.prototype = {
        init: function e(t) {
            u = n.config.safeGet(s, o), l = n.config.safeGet(a, i), this.storageUtils = t, this.updateCrossSessionsData(this.storageUtils.getSessionStartTime())
        },
        updateCrossSessionsData: function e(t) {
            var n = this.updateData(t);
            return this.storageUtils.persistSpecificMetricsData(this.storageUtils.getCrossSessionsDataKey(), n), n
        },
        updateData: function e(t) {
            var n = this.getCrossSessionsDataFromStorage() || {};
            return n[c] = this.getSessionsHistory(t), n
        },
        resetCrossSessionsData: function e() {
            this.storageUtils.persistSpecificMetricsData(this.storageUtils.getCrossSessionsDataKey(), "")
        },
        getCrossSessionsDataFromStorage: function e() {
            var t = this.storageUtils.getSessionDataFromStorage();
            return t && t[this.storageUtils.getCrossSessionsDataKey()]
        },
        getFilteredSessionsHistory: function e(t, n) {
            var r = t ? this.removeOldSessions(t, n) : [];
            if (!r.indexOf(n) > -1 && !this.isInPreviousSession(r, n)) {
                for (; r.length > u - 1;) r.shift();
                r.push(n)
            }
            return r
        },
        removeOldSessions: function e(t, n) {
            for (var r = [], i = 0; i < t.length; i++) this.isSessionOld(t[i], n) || r.push(t[i]);
            return r
        },
        isSessionOld: function e(t, n) {
            return n - l > t
        },
        getSessionsHistory: function e(t) {
            var n = this.getCrossSessionsDataFromStorage(),
                r = n ? n[c] : [];
            return this.getFilteredSessionsHistory(r, t)
        },
        isInPreviousSession: function e(t, n) {
            return !(!Array.isArray(t) || !t.length) && n - t[t.length - 1] < this.storageUtils.getSessionDuration();
            var r, i
        }
    }, r.crossSessionsUtils = r.crossSessionsUtils || new f
}(window),
function(e) {
    var t, n = e["_tfa"] || [],
        r = n.TEM || {},
        i = "tfa:engagement:return-visits:is-enabled",
        o, a = function e() {};
    a.prototype = {
        init: function e(t, r, a) {
            (o = n.config.safeGet(i, !1)) && (this.storageUtils = t, this.crossSessionsUtils = a, this.refreshSessionsHistoryFromLocalStorage(), r.subscribeToEvent(this.handleStorageChange.bind(this)))
        },
        setState: function e(t) {
            this.sessionsHistory = [];
            for (var n = 0; n < t.length; n++) this.sessionsHistory.push(t[n])
        },
        addReturnVisits: function e(t) {
            if (t) {
                if (o) {
                    var n = this.getReturnVisits();
                    t.rv = n && n.length
                }
                return t
            }
        },
        getReturnVisits: function e() {
            var t = this.sessionsHistory;
            return Array.isArray(t) && t.length ? t : []
        },
        refreshSessionsHistoryFromLocalStorage: function e() {
            var t = this.storageUtils ? this.storageUtils.getSessionStartTime() : [],
                n = this.crossSessionsUtils && this.crossSessionsUtils.getSessionsHistory(t);
            this.setState(n)
        },
        handleStorageChange: function e() {
            this.refreshSessionsHistoryFromLocalStorage()
        }
    }, r.returnVisits = r.returnVisits || new a
}(window),
function(e, t) {
    var n = "_tfa",
        r, i = function e() {};
    i.prototype = {
        constructor: i,
        init: function e() {
            this.runningId = 0, this.subscribers = {}, this.setVisibilityProperties(), this.initMetricData(), this.initListener()
        },
        initMetricData: function e() {
            this.isPageHidden = document[this.hiddenProp]
        },
        initListener: function e() {
            t.eventUtils.safeAddEventListener(this.visibilityChangeEventName, this.handleVisibilityChange.bind(this))
        },
        setVisibilityProperties: function e() {
            void 0 !== document.hidden ? (this.hiddenProp = "hidden", this.visibilityChangeEventName = "visibilitychange") : void 0 !== document.msHidden ? (this.hiddenProp = "msHidden", this.visibilityChangeEventName = "msvisibilitychange") : void 0 !== document.webkitHidden && (this.hiddenProp = "webkitHidden", this.visibilityChangeEventName = "webkitvisibilitychange")
        },
        handleVisibilityChange: function e() {
            this.isPageHidden = document[this.hiddenProp], this.notify()
        },
        getIsPageHidden: function e() {
            return this.isPageHidden
        },
        subscribeToEvent: function e(t) {
            var n = this.runningId++;
            return this.subscribers[n] = t,
                function() {
                    delete this.subscribers[n]
                }.bind(this)
        },
        notify: function e() {
            Object.keys(this.subscribers).forEach(function(e) {
                this.subscribers[e]()
            }.bind(this))
        }
    }, (r = e[n] = e[n] || []).TEM = r.TEM || {}, r.TEM.visibilityListener = r.TEM.visibilityListener || new i
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t) {
    var n = "_tfa",
        r, i = function e() {};
    i.prototype = {
        constructor: i,
        init: function e(t) {
            this.runningId = 0, this.subscribers = {}, this.storageUtils = t, this.initListener()
        },
        initListener: function e() {
            t.eventUtils.safeAddEventListenerToWindow("storage", this.handleStorageChange.bind(this))
        },
        handleStorageChange: function e(t) {
            t && t.key === this.storageUtils.getStorageKey() && this.notify(t)
        },
        subscribeToEvent: function e(t) {
            var n = this.runningId++;
            return this.subscribers[n] = t,
                function() {
                    delete this.subscribers[n]
                }.bind(this)
        },
        notify: function e(t) {
            Object.keys(this.subscribers).forEach(function(e) {
                this.subscribers[e](t)
            }.bind(this))
        }
    }, (r = e[n] = e[n] || []).TEM = r.TEM || {}, r.TEM.storageListener = r.TEM.storageListener || new i
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t) {
    var n = "_tfa",
        r = e[n] = e[n] || [],
        i, o = r.TEM = r.TEM || {},
        a = o.ESU || {},
        s = o.SCD || {},
        c = o.SSD || {},
        u = o.TOS || {},
        l = o.returnVisits || {},
        f = o.crossSessionsUtils || {},
        d = o.visibilityListener || {},
        h = o.storageListener || {},
        p = 1500,
        g = 50,
        v = 3e4,
        m = "numOfTimesMetricsSent",
        S = "pre_d_eng_tb",
        E = {
            SESSION_END: "SESSION_END"
        },
        y, b, T = !1,
        I = Date.now();

    function R(e, t) {
        var n = u.getTimeOnSite(),
            r = s.getScrollDepth(),
            i = c.getMetric(),
            o = {
                notify: "event",
                name: S,
                tos: n,
                scd: r,
                ssd: i,
                est: a.getSessionStartTime(),
                ver: a.getDataVersion(),
                isls: a.getIsLocalStorageAvailable(),
                src: e,
                invt: t,
                msa: "function" == typeof s.getMaxScrollableAmount ? s.getMaxScrollableAmount() : void 0
            };
        return o = l.addReturnVisits(o)
    }

    function _(e, t) {
        var n = R(e, t);
        n.est && (i.pageViewAccountIds ? w(i.pageViewAccountIds, n) : C(n))
    }

    function w(e, t) {
        var n = Object.keys(e);
        n.length > 0 ? n.forEach(function(n) {
            t.id = e[n], C(t)
        }) : C(t)
    }

    function C(e) {
        i.push(e)
    }

    function P() {
        A(), a.resetStorageMetricData()
    }

    function A() {
        clearTimeout(b)
    }

    function O(e) {
        (isNaN(y) || y < 0) && (y = 0), a.hasSessionEnded() || (y++, a.persistSpecificMetricsData(m, y), k() || o.sendMetrics("i", e), D())
    }

    function k() {
        return u.getTimeOnSite() > 5 * 60 * 1e3 && c.getMetric() > 5
    }

    function U(e) {
        var t;
        return t = 0 === e ? 4500 : 1 === e ? 5500 : e > 1 && e <= 9 ? 1e4 : p * Math.pow(2, e - 3)
    }

    function D() {
        if (clearTimeout(b), T && !d.getIsPageHidden()) {
            var e, t = r.config.safeGet("tfa:engagement:use-new-interval-calculation", !1) ? U(y) : p * Math.pow(2, y);
            t !== 1 / 0 && (b = setTimeout(O, t, t))
        }
    }

    function N() {
        L(), D()
    }

    function L() {
        var e = a.getSessionDataFromStorage();
        y = e && e[m] && e[m] || 0
    }

    function M() {
        h.subscribeToEvent(V.bind(this)), d.subscribeToEvent(x.bind(this))
    }

    function x() {
        d.getIsPageHidden() ? A() : D()
    }

    function V(e) {
        function t(e) {
            var t = JSON.parse(e.newValue),
                i = JSON.parse(e.oldValue);
            return !n(t, i) && !r(t, i)
        }

        function n(e, t) {
            return e.sessionDepth.length !== t.sessionDepth.length
        }

        function r(e, t) {
            return e.timeOnSite !== t.timeOnSite
        }
        L(), e && T && !d.getIsPageHidden() && t(e) && (T = !1, A(), j(g, v, N, A))
    }

    function j(e, t, n, r) {
        var i = !1;

        function o(e) {
            if (window.top !== window) {
                var t = window.parent;
                for (t.postMessage(e, "*"); t !== t.parent;)(t = t.parent).postMessage(e, "*")
            }

            function n(t) {
                try {
                    for (var r = 0; r < t.frames.length; r++) {
                        var i = t.frames[r];
                        i !== window && (i.postMessage(e, "*"), n(i))
                    }
                } catch (e) {}
            }
            n(window.top), window.parent !== window && n(window)
        }

        function a() {
            o({
                type: "TARP",
                query: !1,
                t: I
            })
        }

        function s() {
            i = !1, o({
                type: "TARP",
                query: !0
            }), setTimeout(function() {
                i ? setTimeout(t, s) : T || (T = !0, n(), a())
            }, e)
        }
        T = !1, window.addEventListener("message", function(e) {
            var o = e.data;
            o && "TARP" === o.type && e.source !== window && (T ? o.query ? a() : o.t < I ? (T = !1, i = !0, r(), setTimeout(t, s)) : a() : o.query || (o.t < I ? i = !0 : (T = !0, n(), a())))
        }), s()
    }

    function B() {
        o.initialized || r.config.safeGet("tfa:engagement:is-manager-disabled", !1, 1795028) || (i = r.TUP || {}, o.initialized = !0, o.ESU.init(P), d.init(), h.init(a), M(), o.ESU.getIsLocalStorageAvailable() && (f.init(a), u.init(a, h, d), s.init(a, h), c.init(a, h, t.sharedEvents.PAGE_VIEW), l.init(a, h, f), o.initIntervalTrigger()), j(g, v, N, A))
    }
    o.init = o.init || B, o.onSessionEndTrigger = o.onSessionEndTrigger || P, o.sendMetrics = o.sendMetrics || _, o.initIntervalTrigger = o.initIntervalTrigger || N, o.EVENTS = o.EVENTS || E
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t) {
    var n = "_tfa",
        r = e[n] = e[n] || [],
        i = "taboola global:last-external-referrer",
        o = "taboola",
        a = "other",
        s = ["taboola", "taboolanews", "taboolasyndication"];
    t.lastExternalReferrer = {
        init: function e() {
            r.config.safeGet("tfa:last-external-referrer:is-disabled", !1, 1795028) || this.extractExternalReferrerIfExistsAndStoreLocally()
        },
        extractExternalReferrerIfExistsAndStoreLocally: function t() {
            var n = this.extractExternalReferrer(e);
            n && this.saveExternalReferrerToLocalStorage(n)
        },
        extractExternalReferrer: function e(n) {
            var r = n.location.href,
                i = this.getExternalReferrer(n);
            return this.isExternalReferrerTaboola(r, i) ? o : i || t.tfaUtil.getParameterByName("utm_source", r) || t.tfaUtil.getParameterByName("gclid", r) || t.tfaUtil.getParameterByName("fbclid", r) || t.tfaUtil.getParameterByName("dicbo", r) || t.tfaUtil.getParameterByName("dclid", r) ? a : ""
        },
        isExternalReferrerTaboola: function e(n, r) {
            if (t.tfaUtil.getParameterByName("tblci", n)) return !0;
            var i = t.tfaUtil.getParameterByName("utm_source", n);
            if (i && "taboola" === i.toLowerCase()) return !0;
            if (r)
                for (var o = r.split("/")[2], a = 0; a < s.length; a++) {
                    var c, u;
                    if (new RegExp("(^|.+\\.)" + s[a] + "\\.com.*").exec(o)) return !0
                }
            return !1
        },
        getExternalReferrer: function e(t) {
            var n = t.document.referrer,
                r, i;
            if (n && t.location.hostname !== n.split("/")[2]) return n;
            return ""
        },
        saveExternalReferrerToLocalStorage: function e(n) {
            var r = t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage");
            r && r.setValue(i, n)
        },
        getLastExternalReferrer: function n() {
            var r = t.tfaPageManager.getLocalStorageImplementation("strict-w3c-storage");
            return r ? r.getValue(i) : this.extractExternalReferrer(e)
        }
    }, t.lastExternalReferrer.init()
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t, n) {
    var r = "https://pa.taboola.com/ig/joinIg.html";
    n.privacySandbox = {
        isProtectedAudienceSupported: function e() {
            return navigator && !!navigator.joinAdInterestGroup
        },
        joinInterestGroupsInIframe: function e(t) {
            var n;
            if (this.isProtectedAudienceSupported() && t && t.igList && Array.isArray(t.igList) && t.igList.length) return (n = document.createElement("iframe")).style.display = "none", n.src = r, n.addEventListener("load", function() {
                n.contentWindow.postMessage(JSON.stringify(t), "*")
            }), document.body.appendChild(n), n
        }
    }
}(window, document, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t, n) {
    var r = function e(t, n, r) {
            var i = t.split(n);
            return i.slice(0, r - 1).concat(i.length >= r ? i.slice(r - 1).join(n) : [])
        },
        i = n.TFA_URL = function(e) {
            if (!e) throw new Error("Invalid URL!");
            this.href = e;
            var t = r(e, "#", 2);
            return this.hash = t.length > 1 ? "#" + t.pop() : "", e = t[0], t = r(e, "?", 2), this.search = t.length > 1 ? "?" + t.pop() : "", e = t[0], t = r(e, "://", 2), this.protocol = t.length > 1 ? t.shift() + ":" : "", e = t[0], t = r(e, "/", 2), this.pathname = t.length > 1 ? "/" + t.pop() : "/", e = t[0], t = r(e, "@", 2), this.auth = t.length > 1 ? t.shift() : "", e = t[0], t = r(e, ":", 2), this.port = t.length > 1 ? parseInt(t.pop()) : 0, this.host = t[0], this
        };

    function o(e) {
        for (var t = {}, n = 0; n < e.length; n++)
            if (e[n]) {
                var r = e[n].split(new RegExp("="), 2);
                2 === r.length && (t[r[0]] = r[1])
            }
        return t
    }

    function a(e, t, n) {
        for (var r in e)
            if (unescape(r) == t) return n ? n(e[r]) : unescape(e[r]);
        return null
    }
    i.prototype.getParameter = function(e, t) {
        var r;
        return a(n.TFA_URL.prototype.getQueryStringObj.call(this), e, t)
    }, i.prototype.getParameterFromHash = function(e, t) {
        var r;
        return a(n.TFA_URL.prototype.getHashStringObj.call(this), e, t)
    }, i.prototype.getQueryStringObj = function() {
        var e, t;
        return o((this instanceof n.TFA_URL ? this : new n.TFA_URL(this)).search.substr(1).split(/&/))
    }, i.prototype.getHashStringObj = function() {
        var e, t;
        return o((this instanceof n.TFA_URL ? this : new n.TFA_URL(this)).hash.substr(1).split(/&/))
    }, i.prototype.addParamsToUrl = function(e, t) {
        var n = e.split("#");
        return n[0] + (n[0].search("\\?") >= 0 ? "&" : "?") + t + (n[1] ? "#" + n[1] : "")
    }, i.prototype.removeParamFromUrl = function(e, t) {
        var n = e.split("?");
        if (n.length >= 2) {
            for (var r = n[0], i, o = [], a = n[1].split("&"), s = 0; s < a.length; s++) {
                var c;
                a[s].split("=")[0] !== t && o.push(a[s])
            }
            return o.length > 0 ? r + "?" + o.join("&") : r
        }
        return e
    }, i.prototype.removeAllUrlParametersAndFragment = function(e) {
        var t = e.indexOf("?"),
            n = -1 !== t ? e.substr(0, t) : e,
            r = n.indexOf("#");
        return -1 !== r ? n.substr(0, r) : n
    }
}(window, document, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']),
function(e, t, n) {
    var r = "tfa:allow-cross-domain-tracking",
        i = "tfa:cross-domain-tracking:elements-to-update",
        o = [{
            selector: 'a[href^="http"], a[href^="https"], a[href^="//"]',
            urlAttribute: "href"
        }],
        a = "UpdateTrackingData",
        s = ["tblci"],
        c = n.jsScope,
        u = n.publisherId,
        l = c.tfaPageManager;

    function f() {
        e._tfa && e._tfa.config && e._tfa.config.safeGet && e._tfa.config.safeGet(r, !1, u) && c.cdt.init()
    }
    e.TRC = e.TRC || {}, e.TRC.cdt = c.cdt = e.TRC.cdt || {
        init: function e() {
            t.addEventListener(a, this.updateTrackingData.bind(this)), this.verifyUpdatesAfterDomLoaded()
        },
        updateTrackingData: function e() {
            for (var t = this.getAdvertiserSelectors(), n = 0; n < t.length; n++) try {
                var r = this.getLinksToUpdate(t[n].selector, t[n].urlAttribute);
                this.updateLinks(r, t[n].urlAttribute)
            } catch (e) {}
        },
        getAdvertiserSelectors: function t() {
            try {
                var n = e._tfa.config.safeGet(i, "", u);
                if (n || "" !== n) return JSON.parse(n).concat(o)
            } catch (e) {}
            return o
        },
        getLinksToUpdate: function e(n, r) {
            for (var i = window.location.hostname, o = [], a = t.querySelectorAll(n), s = 0; s < a.length; ++s) try {
                var u = a[s],
                    l, f;
                i !== new c.TFA_URL(u.getAttribute(r)).host && o.push(u)
            } catch (e) {}
            return o
        },
        updateLinks: function e(t, n) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r],
                    o = this.updateUrl(i, n);
                i.setAttribute(n, o)
            }
        },
        updateUrl: function e(t, n) {
            for (var r = t.getAttribute(n), i = 0; i < s.length; i++) {
                var o;
                if (!(null !== this.getQueryParamFromSearch(r, s[i]) || null !== this.getQueryParamFromHash(r, s[i]))) {
                    var a = this.getQueryParamFromSearch(window.location.href, s[i]);
                    if (a) {
                        var u = s[i] + "=" + a;
                        return c.TFA_URL.prototype.addParamsToUrl.call(t, r, u)
                    }
                    var l = this.getQueryParamFromHash(window.location.href, s[i]);
                    if (l) {
                        var f = s[i] + "=" + l;
                        return c.TFA_URL.prototype.addParamsToUrl.call(t, r, f)
                    }
                    var d = this.getParamFromLocalStorage(s[i]);
                    if (d) {
                        var h = s[i] + "=" + d;
                        return c.TFA_URL.prototype.addParamsToUrl.call(t, r, h)
                    }
                }
            }
            return r
        },
        getParamFromLocalStorage: function e(t) {
            return l.getValue(t)
        },
        getQueryParamFromSearch: function e(t, n) {
            return c.TFA_URL.prototype.getParameter.call(t, n)
        },
        getQueryParamFromHash: function e(t, n) {
            return c.TFA_URL.prototype.getParameterFromHash.call(t, n)
        },
        dispatchUpdateTrackingData: function e() {
            if ("complete" === t.readyState) {
                var n = new CustomEvent(a);
                t.dispatchEvent(n)
            }
        },
        verifyUpdatesAfterDomLoaded: function e() {
            var n;
            "complete" === t.readyState ? this.dispatchUpdateTrackingData() : t.addEventListener("readystatechange", this.dispatchUpdateTrackingData.bind(this))
        }
    }, e.TRC.cdtInit = c.cdtInit = f, f()
}(window, document, {
    publisherId: 1795028,
    jsScope: window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']
}),
function(e, t, n) {
    var r = "tfa:allow-codeless-tracking",
        i = n.jsScope,
        o = n.publisherId;

    function a() {
        return e.location.search.substring(1).split("&").reduce(function(e, t) {
            var n = t.split("=");
            return e[decodeURIComponent(n[0])] = decodeURIComponent(n[1] || ""), e
        }, {})
    }

    function s() {
        var t, n;
        "true" === a()["codeless"] && e._tfa && e._tfa.config && e._tfa.config.safeGet && e._tfa.config.safeGet(r, !1, o) && i.codeless.init()
    }
    e.TRC = e.TRC || {}, e.TRC.codeless = i.codeless = e.TRC.codeless || {
        init: function e() {
            this.loadCodelessScript()
        },
        loadCodelessScript: function e() {
            var n = t.createElement("script"),
                r = "https://ads.taboola.com/resources/static/js/codeless-events.js",
                i = (new Date).getTime();
            n.src = r + "?t=" + i, n.async = !0, n.type = "text/javascript", n.id = "codeless_script", t.head.appendChild(n)
        }
    }, e.TRC.codelessInit = i.codelessInit = s, s()
}(window, document, {
    publisherId: 1795028,
    jsScope: window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']
}),
function(e, t, n) {
    var r = t.tfaPageManager || {},
        i = "_tfa",
        o = window[i] = window[i] || [],
        a = o.TEM || {},
        s = {
            event: X,
            subscription: ee
        },
        c = /(\S+)taboola(\S+|)\.com\/libtrc\/unip\/(\S+)\/tfa\.js(\S+|)/,
        u = "script[src$='tfa.js']",
        l = "//",
        f, d = ["notify", "id"],
        h = "JS_PIXEL",
        p;

    function g() {
        var e = re();
        e.initialized && e.domAccountId && setTimeout(function() {
            for (var e = re().asyncQueue; e.length;) ie(e.shift())
        }, 0)
    }

    function v() {
        var e = m(),
            t;
        if (e && e.src && (t = e.src.replace(c, "$3"))) return /^\d+$/.test(t) ? parseInt(t, 10) : (ae("Value '" + t + "' is invalid for 'id' param in script source url '" + e.src + "'. Only numeric values are allowed."), INVALID_ACCOUNT_ID)
    }

    function m() {
        for (var e = document.querySelectorAll(u), t, n = 0; n < e.length; n++)
            if ((t = e[n]).src && t.src.indexOf("/unip/") > 0) return t
    }

    function S() {
        return t.eventUtils.getDateNow()
    }

    function E(e) {
        e["ce"] = "subscr"
    }

    function y(e) {
        var t = r.getSessionDataFirstPartyCookie();
        void 0 !== t && t && (e["sd"] = t)
    }

    function b(e) {
        var t = T();
        t && (e["ui"] = t)
    }

    function T() {
        try {
            var e = t.tfaUserId.getUserId(),
                n = r.getValue("user-id");
            if (e || n) return e || n
        } catch (e) {
            ae("Error while trying to add user-id param", e)
        }
    }

    function I(e) {
        try {
            var n = t.tfaUserId.getClickId();
            n && (e[t.tfaUserId.CLICK_ID_KEY] = n)
        } catch (t) {
            ae("Error while trying to addClickIdParam, params=" + JSON.stringify(e), t)
        }
    }

    function R(e) {
        var n = re();
        n.referrer || (n.referrer = t.trk.getReferrer()), e[EVENT_PROPERTIES_TO_URL_PARAMS_MAP.referrer] = n.referrer
    }

    function _(e, t) {
        var n = EVENT_PROPERTIES_TO_URL_PARAMS_MAP.url,
            r;
        ge(ue(e), t) && (e[n] = e[n] || document.location.href)
    }

    function w(e) {
        var t = {},
            n = !1,
            r;
        for (var i in e[EVENT_PROPERTIES_TO_URL_PARAMS_MAP.timestamp] = S(), e) !e.hasOwnProperty(i) || d.indexOf(i) >= 0 || (t[r = EVENT_PROPERTIES_TO_URL_PARAMS_MAP.hasOwnProperty(i) ? EVENT_PROPERTIES_TO_URL_PARAMS_MAP[i] : i] = e[i], n = !0);
        return n && t
    }

    function C(e, t) {
        D(t), U(e, t)
    }

    function P(e) {
        document.featurePolicy && document.featurePolicy.allowedFeatures() && -1 !== document.featurePolicy.allowedFeatures().indexOf("attribution-reporting") && (e.headers || (e.headers = {}), e.headers["Attribution-Reporting-Eligible"] = "trigger")
    }

    function A(e) {
        var n;
        if (t.privacySandbox && t.privacySandbox.isProtectedAudienceSupported()) try {
            n = JSON.parse(e), t.privacySandbox.joinInterestGroupsInIframe(n)
        } catch (e) {}
    }

    function O() {
        200 === this.status && A(this.responseText)
    }

    function k(e) {
        return !!(t.privacySandbox && t.privacySandbox.isProtectedAudienceSupported() && e && "pre_d_eng_tb" !== e[EVENT_PROPERTIES_TO_URL_PARAMS_MAP.name]) && (e["psb"] = "true", !0)
    }

    function U(e, n) {
        var r = le(e) + l + fe(e, n),
            i, o;
        G(n, e), N(n, e), P(n), (o = k(n)) && (i = O);
        try {
            t.TRCLogger[CONFIGS.httpMethod](r, CONFIGS.loggerEventName, n, e, i)
        } catch (t) {
            ae("Error while trying to send to server event with id '" + e + "' and params '" + JSON.stringify(n) + "'.", t)
        }
    }

    function D(e) {
        var t = T(),
            n = e[CALLBACK_PARAMETER_NAME];
        if (n) {
            if (!t) return se("No UserId to notify callback"), void delete e[CALLBACK_PARAMETER_NAME];
            if ("function" != typeof n) return se("Callback function parameter is not a function " + n), void delete e[CALLBACK_PARAMETER_NAME];
            try {
                n({
                    userId: t
                })
            } catch (e) {
                ae("Error calling advertiser callback", e)
            }
            delete e[CALLBACK_PARAMETER_NAME]
        }
    }

    function N(e, t) {
        b(e), I(e), R(e), z(e), _(e, t), V(e), L(e), K(e, t), x(e, t), $(e, t), M(e)
    }

    function L(e) {
        var n = t.lastExternalReferrer.getLastExternalReferrer();
        n && (e[LAST_EXTERNAL_REFERRER_URL_PARAM] = n)
    }

    function M(e) {
        e[EVENT_PROPERTIES_TO_URL_PARAMS_MAP.integrationType] = e[EVENT_PROPERTIES_TO_URL_PARAMS_MAP.integrationType] || h
    }

    function x(e, n) {
        var r;
        o.config.safeGet("unip:collect-cookie-banner-consent:enabled", !0, n) && (r = t.trk.parseCookieBanner()) && (e.cbp = r.cookieBannerProvider.providerName, e.cbpv = r.cookieBannerProvider.version, r.cookieBannerConsent.tcString && o.config.safeGet("unip:send-tc-string:enabled", !0, n) ? (e.tcs = r.cookieBannerConsent.tcString, void 0 !== r.cookieBannerConsent.gdprApplies && (e.ga = r.cookieBannerConsent.gdprApplies), void 0 !== r.cookieBannerConsent.cmpStatus && (e.cmps = r.cookieBannerConsent.cmpStatus)) : r.cookieBannerConsent.consentData && (e.cbcd = r.cookieBannerConsent.consentData))
    }

    function V(e) {
        e && a && a.ESU && a.ESU.getIsLocalStorageAvailable() && (j(e), B(e), F(e))
    }

    function j(e) {
        a.TOS && (e.tos = a.TOS.getTimeOnSite())
    }

    function B(e) {
        if (a.SSD) {
            var n = a.SSD.getMetric(),
                r = t.eventUtils.hashString(window.location.href);
            a.SSD.isURLVisited(r) || n++, e.ssd = n
        }
    }

    function F(e) {
        a.SCD && (e.scd = a.SCD.getScrollDepth())
    }

    function K(e, n) {
        o.config.safeGet("unip:add-ccpa-params", !0, n) && t.trk.getCcpaParam(function(t) {
            t && (e["ccpaPs"] = t)
        })
    }

    function $(e, n) {
        if (o.config.safeGet("unip:add-gpp-params", !1, n)) try {
            t.trk.getGppParam(function(t) {
                t && (e.cmpStatus = 0, e.applicableSections = t.pingData.applicableSections, e.gppString = t.pingData.gppString)
            })
        } catch (e) {}
    }

    function G(e, t) {
        q(e), Q(e, t), J(e, t)
    }

    function H(e, t) {
        E(t), y(t), Z(e, t)
    }

    function q(e) {
        e["vi"] = t.trk.getViewId()
    }

    function Q(e, n) {
        var r = t.trk.getPublisherRequestId(n);
        r && (e["ri"] = r)
    }

    function J(e, n) {
        var r = t.trk.getPublisherSessionData(n);
        r && (e["sd"] = r)
    }

    function W(e, t) {
        e["mrir"] = t
    }

    function z(e) {
        e["cv"] = n
    }

    function Y(e, n) {
        var r = re(),
            i;
        if (!t.trk.getPublisherRequestId(e)) {
            if (t.trk.isRequestProcessing(e)) return void r.messageDelayer.delayMessage(e, n, {
                successCallback: C,
                failCallback: function e(t, n, r, i) {
                    var o = TRK_EVENT_TO_ERROR_TYPE_MAP[i];
                    o || (o = i), W(n, o), U(t, n)
                },
                timeoutInMillis: ce(e)
            });
            W(n, t.trk.getRequestStatus(e))
        }
        U(e, n)
    }

    function X(e, n) {
        var r = w(e),
            i = ue(r),
            o = TUP_EVENT_HANDLERS_BY_EVENT_NAME[i];
        if (n = parseInt(n, 10), !o || !o(r, n)) {
            if (he(n)) {
                if (pe(n)) return void Y(n, r);
                t.trk.getPublisherRequestId(n) || W(r, "wffo")
            } else W(r, "ttd");
            U(n, r)
        }
    }

    function Z(e, t) {
        void 0 !== e["sourceurl"] && e["sourceurl"] && (t["surl"] = e["sourceurl"])
    }

    function ee(e, t) {
        var n = w(e);
        H(e, n), U(parseInt(t, 10), n)
    }

    function te(e, n) {
        var r = re(),
            i = !1;
        return n && (i = de(n), N(e), r.pageViewAccountIds[n] = parseInt(n, 10), t.eventUtils.dispatchEvent(t.sharedEvents.PAGE_VIEW, {
            accountId: n,
            publisherIdType: t.publisherIdType.ID,
            pageViewInitiator: t.pageViewInitiator.TFA,
            isUnifiedPageView: i,
            metadata: e
        })), i
    }

    function ne(e) {
        return e ? e.notify ? s.hasOwnProperty(e.notify) ? e.name ? !(e.hasOwnProperty("id") && !/^\d+$/.test(e.id)) || (oe(VALIDATION_ERRORS.INVALID_ID, e, "Value '" + e.id + "' is invalid for 'id' field in command '" + JSON.stringify(e) + "'. Only numeric values are allowed."), !1) : (oe(VALIDATION_ERRORS.MISSING_NAME, e, "Mandatory 'name' field is missing in command '" + JSON.stringify(e) + "'."), !1) : (oe(VALIDATION_ERRORS.INVALID_NOTIFY, e, "Value '" + e.notify + "' is invalid for 'notify' field in command '" + JSON.stringify(e) + "'."), !1) : (oe(VALIDATION_ERRORS.MISSING_NOTIFY, e, "Mandatory 'notify' field is missing in command '" + JSON.stringify(e) + "'."), !1) : (oe(VALIDATION_ERRORS.EMPTY_COMMAND, e, "Command is '" + e + "'."), !1)
    }

    function re() {
        return window && window[i] && window[i].TUP || {}
    }

    function ie(e) {
        var t, n;
        if (ne(e))
            if (t = re(), n = e.id || t.domAccountId) {
                if (n !== INVALID_ACCOUNT_ID) try {
                    s[e.notify](e, n)
                } catch (t) {
                    ae("An error occurred while handling command '" + JSON.stringify(e) + "'.", t)
                }
            } else t.asyncQueue.push(e)
    }

    function oe(e, n, r) {
        var i = re();
        t.eventUtils.dispatchEvent(EVENTS.TFA_VALIDATION_ERROR, {
            accountId: i.domAccountId,
            errorCode: e,
            command: n
        }), ae(r)
    }

    function ae(e, t) {
        CONFIGS.logToConsole && se(e, t)
    }

    function se(e, t) {
        t ? console.log("Taboola Pixel: " + e, t) : console.log("Taboola Pixel: " + e)
    }

    function ce(e) {
        return 500 + o.config.safeGet("tfa:trk:tracking-request-timeout", 2e3, e)
    }

    function ue(e) {
        return e[EVENT_PROPERTIES_TO_URL_PARAMS_MAP.name]
    }

    function le(e) {
        return o.config.safeGet("tfa:default-protocol", CONFIGS.protocol, e)
    }

    function fe(e, t) {
        var n = ue(t),
            r;
        return o.config.safeGet("tfa:event-host-map", {}, e)[n] || CONFIGS.host
    }

    function de(e) {
        return he(e) && o.config.safeGet("tfa:trk:is-unified-page-view", !1, e)
    }

    function he(e) {
        return o.config.safeGet("tfa:trk:enabled", !0, e)
    }

    function pe(e) {
        return o.config.safeGet("tfa:trk:wait-for-request-id", !0, e)
    }

    function ge(e, t) {
        var n = o.config.safeGet("tfa:add-item-url:event-list", [], t);
        return "*" === n || n.indexOf(e) >= 0
    }

    function ve() {
        var e = o.TUP = o.TUP || {},
            n = o.config.safeGet("tfa:get-publisher-id-from-baker", !1);
        e.domAccountId = e.domAccountId || (n && PUBLISHER_ID_EXISTS ? 1795028 : v()), e.initialized || (e.push = o.TUP.push || ie, e.initialized = !0, e.asyncQueue = [], e.EVENTS = EVENTS, e.pageViewAccountIds = {}, e.messageDelayer = new t.MessageDelayer("publisherId", t.sharedEvents.REQUEST_ID_CREATED, [t.sharedEvents.REQUEST_ID_CREATION_JS_ERROR, t.sharedEvents.REQUEST_ID_CREATION_ERROR, t.sharedEvents.REQUEST_ID_CREATION_TIMEOUT, t.sharedEvents.INVALID_TRK_RESPONSE]), a && a.init && a.init()), g()
    }
    EVENT_PROPERTIES_TO_URL_PARAMS_MAP = {
        name: "en",
        url: "item-url",
        referrer: "ref",
        timestamp: "tim",
        integrationType: "it"
    }, INVALID_ACCOUNT_ID = -1, CONFIGS = {
        protocol: 'https:',
        host: "trc.taboola.com",
        httpMethod: "get",
        loggerEventName: "unip",
        logToConsole: !0
    }, VALIDATION_ERRORS = {
        EMPTY_COMMAND: "EMPTY_COMMAND",
        MISSING_NOTIFY: "MISSING_NOTIFY",
        INVALID_NOTIFY: "INVALID_NOTIFY",
        MISSING_NAME: "MISSING_NAME",
        INVALID_ID: "INVALID_ID"
    }, EVENTS = {
        TFA_VALIDATION_ERROR: "TFA_VALIDATION_ERROR"
    }, TUP_EVENT_HANDLERS_BY_EVENT_NAME = ((p = {})["page_view"] = te, p), TRK_EVENT_TO_ERROR_TYPE_MAP = function() {
        var e = {};
        return e[t.sharedEvents.REQUEST_ID_CREATION_TIMEOUT] = "to", e[t.sharedEvents.REQUEST_ID_CREATION_ERROR] = "err", e[t.sharedEvents.REQUEST_ID_CREATION_JS_ERROR] = "jserr", e[t.sharedEvents.INVALID_TRK_RESPONSE] = "itrkr", e
    }(), PUBLISHER_ID_EXISTS = !isNaN(parseFloat(1795028)), CALLBACK_PARAMETER_NAME = "callback", LAST_EXTERNAL_REFERRER_URL_PARAM = "ler", ve()
}(window, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC'], "20250119-6-RELEASE"),
function(e, t, n) {
    var r = "_tfa",
        i, o = {
            orderid: "orderid",
            currency: "currency",
            revenue: "revenue",
            quantity: "quantity",
            name: "name",
            attributionGroup: "attributionGroup"
        },
        a = {
            type: "marking-type"
        },
        s = 'https:' + "//trc.taboola.com/{$publishreId}log/3/{$logType}?",
        c = /(\S+)taboola(\S+|)\.com\/libtrc\/(\S+)\/tfa\.js(\S+|)/,
        u = "unip/",
        l = [],
        f = [],
        d = "_tecq",
        h = "_dcojobs",
        p = !isNaN(parseFloat(1795028));

    function g(e) {
        var t;
        switch (e.notify) {
            case "action":
                t = l;
                break;
            case "mark":
                t = f;
                break;
            case "event":
            case "subscription":
                t = i.TUP;
                break;
            case "ecevent":
                var n = i.config && i.config.safeGet("tfa:ecomm:enabled", !1, e.id),
                    r = i.config && i.config.safeGet("tfa:ecomm:cnx-enabled", !1, e.id);
                n || r ? t = window[d] = window[d] || [] : i.config && i.config.safeGet("tfa:dco:jobs:enabled", !1, e.id) && (t = window[h] = window[h] || []);
                break;
            default:
                return
        }
        t && t.push(e)
    }

    function v() {
        return n.tfaUserId && n.tfaUserId.getUserId() ? "&ui=" + encodeURIComponent(n.tfaUserId.getUserId()) : ""
    }

    function m() {
        return n.tfaUserId && n.tfaUserId.getClickId() ? "&" + n.tfaUserId.CLICK_ID_KEY + "=" + encodeURIComponent(n.tfaUserId.getClickId()) : ""
    }

    function S() {
        var t, n, r, i;
        if (r = e._tfa.config.safeGet("tfa:get-publisher-id-from-baker", !1) && p ? 1795028 : w())
            for (t = 0, n = l.length; t < n; t++) b(y(s, {
                $publishreId: r ? r + "/" : "",
                $logType: "action"
            }) + "tim=" + escape(I()) + "&item-url=" + escape(T()) + C(o, l.shift()) + R() + v() + m())
    }

    function E() {
        var t, n, r, i;
        if (r = e._tfa.config.safeGet("tfa:get-publisher-id-from-baker", !1) && p ? 1795028 : w())
            for (t = 0, n = f.length; t < n; t++) b(y(s, {
                $publishreId: r ? r + "/" : "",
                $logType: "mark"
            }) + "tim=" + escape(I()) + "&item-url=" + escape(T()) + C(a, f.shift()) + R() + v() + m())
    }

    function y(e, t) {
        return e.replace(/\{([^{}]*)\}/g, function(e, n) {
            var r = t[n];
            return "string" == typeof r || "number" == typeof r ? r : e
        })
    }

    function b(t) {
        var n = new Image;
        e._tfa.config.safeGet("tfa:add-referrer-policy-when-firing-pixel", !0) && (n.referrerPolicy = "no-referrer-when-downgrade"), n.src = t
    }

    function T() {
        return e.location.href
    }

    function I() {
        var e = new Date,
            t = e.getHours(),
            n = e.getMinutes(),
            r = e.getSeconds() + e.getMilliseconds() / 1e3;
        return (t < 10 ? "0" : "") + t + ":" + (n < 10 ? "0" : "") + n + ":" + (r < 10 ? "0" : "") + r.toFixed(3)
    }

    function R() {
        var n = e.location.search,
            r = t.referrer.match(/(\?\S+)$/g),
            i = "";
        return i = _(n.replace(/^\?/, "").split(/&/)) + (r ? _(r[0].replace(/^\?/, "").split(/&/)) : "")
    }

    function _(e) {
        var t = "",
            n, r, i = "trc_";
        for (n = 0, r = e.length; n < r; n++) 0 == e[n].indexOf(i) && (t = t + "&" + e[n]);
        return t
    }

    function w() {
        var e = document.getElementsByTagName("script"),
            t, n, r = "",
            i;
        for (t = 0, n = e.length; t < n; t++)
            if ((i = e[t].src) && (r = i.replace(c, "$3")) !== e[t].src && r.indexOf(u) < 0) return r;
        return r
    }

    function C(e, t) {
        var n, r = "";
        for (n in e) void 0 !== t[n] && (r += "&" + e[n] + "=" + t[n]);
        return r
    }

    function P(e) {
        for (var t = 0; t < arguments.length; t++)(e = arguments[t]) instanceof Object && g(e);
        return A(), arguments.length
    }

    function A() {
        S(), E()
    }

    function O() {
        for (; i.length;) P(i.shift())
    }

    function k() {
        (i = e[r] = e[r] || []).registered || (i.push = P, i.registered = !0, O())
    }
    k()
}(window, document, window['TFASC'.indexOf("{jsScope}") >= 0 ? "TRC" : 'TFASC']);