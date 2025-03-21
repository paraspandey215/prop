! function(t) {
    try {
        var e = "https://",
            n = "aHR0cHM6Ly9waXBzLnRhYm9vbGEuY29t",
            r = ["YXJjaGl0ZWN0dXJl", "cGxhdGZvcm1WZXJzaW9u", "dWFGdWxsVmVyc2lvbg=="],
            a = ["YnJhbmRz", "bW9iaWxl", "bW9kZWw=", "cGxhdGZvcm0=", "cGxhdGZvcm1WZXJzaW9u", "dWFGdWxsVmVyc2lvbg=="];
        t.TRC.cdsPips = {
            userId: null,
            getHttpsPrefix: function t() {
                return e
            },
            doNothing: function t() {
                return !0
            },
            safeGetTfaConfig: function e(n, r, a) {
                return t._tfa && t._tfa.config && t._tfa.config.safeGet && t._tfa.config.safeGet(n, r, a)
            },
            safeGetRboxConfig: function t(e) {
                var n;
                return (TRCImpl ? TRCImpl.global : {})[e]
            },
            prepareGenericRequest: function e(n, r) {
                var a, s = new(t.XDomainRequest || t.XMLHttpRequest);
                return s.open(n, r), s.onload = this.doNothing, s.onerror = this.doNothing, s.onprogress = this.doNothing, s
            },
            tryToReadUserIdFromLocalStorage: function t() {
                try {
                    return window.localStorage["taboola global:user-id"]
                } catch (t) {
                    return null
                }
            },
            getUserId: function e() {
                var n = t.TFASC && t.TFASC.tfaUserId && "function" == typeof t.TFASC.tfaUserId.getUserId ? t.TFASC.tfaUserId.getUserId() : null,
                    r = t.TRC.pageManager && "function" == typeof t.TRC.pageManager.getUserId ? t.TRC.pageManager.getUserId() : null,
                    a = TRC.cdsPips.tryToReadUserIdFromLocalStorage();
                return n || r || a
            },
            sendFinalReq: function e(n) {
                var r = "".concat(this.getHttpsPrefix(), "cds.taboola.com?uid=").concat(this.userId),
                    a;
                (null !== n[0] && (r += "&uad=".concat(n[0])), n[1] && (n[1].platform && (r += "&ptf=".concat(t.btoa(n[1].platform)), n[1].platformVersion && (r += "&ptfv=".concat(t.btoa(n[1].platformVersion)))), n[1].model && (r += "&mdl=".concat(t.btoa(n[1].model))), n[1].uaFullVersion && (r += "&ufv=".concat(t.btoa(n[1].uaFullVersion))), n[1].brands && (r += this.parseFullVersionList(n[1].brands)), "mobile" in n[1] && (r += "&mbl=".concat(t.btoa(n[1].mobile)))), r !== "".concat(this.getHttpsPrefix(), "cds.taboola.com?uid=").concat(this.userId)) && this.prepareGenericRequest("GET", r).send()
            },
            parseFullVersionList: function e(n) {
                for (var r = "", a = 0; a < n.length; a++) r += "&bnd=".concat(t.btoa(n[a].brand), "&bndv=").concat(t.btoa(n[a].version));
                return r
            },
            sendSimpleReq: function t() {
                var e = "".concat(this.getHttpsPrefix(), "cds.taboola.com?uid=").concat(this.userId),
                    n;
                this.prepareGenericRequest("GET", e).send()
            },
            fetchUserAgentData: function e() {
                return new Promise(function(e) {
                    try {
                        navigator && navigator.userAgentData && navigator.userAgentData.getHighEntropyValues ? navigator.userAgentData.getHighEntropyValues(r.map(function(e) {
                            return t.atob(e)
                        })).then(function(n) {
                            var r = {};
                            a.forEach(function(e) {
                                var a = t.atob(e);
                                a in n && (r[a] = n[a])
                            }), Object.keys(r).length > 0 ? e(r) : e(null)
                        }) : e(null)
                    } catch (t) {
                        e(null)
                    }
                })
            },
            sendUadRequest: function e() {
                var r = this;
                return new Promise(function(e, a) {
                    if (r.safeGetTfaConfig("cds:send-uad-req", !1) || r.safeGetRboxConfig("cds:send-uad")) {
                        var s = r.prepareGenericRequest("GET", t.atob(n));
                        s.onreadystatechange = function() {
                            if (4 === this.readyState)
                                if (200 === this.status) {
                                    var t = s.responseText;
                                    t ? e("NULL" !== t ? t : null) : (__trcWarn("cds: error in pips - status ".concat(this.status, ", return null")), e(null))
                                } else __trcWarn("cds: error in pips - status ".concat(this.status, ", return null")), e(null)
                        }, s.timeout = 3e4, s.responseType = "text", s.ontimeout = function() {
                            __trcWarn("cds: error in pips - timeout"), e(null)
                        }, s.send()
                    } else e(null)
                })
            },
            init: function e() {
                var n = this;
                t.TRC.cdsPips.cdsInitialized || (t.Promise ? (t.__trcWarn = t.__trcWarn || function t() {}, this.userId = this.getUserId(), this.userId && Promise.all([this.sendUadRequest(), this.fetchUserAgentData()]).then(function(t) {
                    return n.sendFinalReq(t)
                }, function() {
                    return n.sendSimpleReq()
                }), t.TRC.cdsPips.cdsInitialized = !0) : t.TRC.cdsPips.cdsInitialized = !0)
            }
        }, t.TRC.cdsPips.init()
    } catch (t) {
        __trcError("Error running cds", t)
    }
}(window);