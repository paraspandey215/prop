! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var i = t();
        for (var n in i)("object" == typeof exports ? exports : e)[n] = i[n]
    }
}(globalThis, () => (() => {
    var e = {
            753: function(e, t, i) {
                "use strict";
                i.d(t, {
                    O1: () => l,
                    Yt: () => n,
                    bf: () => d,
                    cD: () => a,
                    cc: () => s,
                    ci: () => h,
                    gR: () => p,
                    hz: () => u,
                    im: () => c,
                    v_: () => r,
                    w9: () => o
                });
                let n = ["redirect_url", "after_sign_in_url", "after_sign_up_url", "sign_in_force_redirect_url", "sign_in_fallback_redirect_url", "sign_up_force_redirect_url", "sign_up_fallback_redirect_url"],
                    r = "__clerk_modal_state",
                    a = "__clerk_synced",
                    s = "suffixed_cookies",
                    o = "__clerk_satellite_url",
                    l = {
                        FORM_IDENTIFIER_NOT_FOUND: "form_identifier_not_found",
                        FORM_PASSWORD_INCORRECT: "form_password_incorrect",
                        FORM_PASSWORD_PWNED: "form_password_pwned",
                        INVALID_STRATEGY_FOR_USER: "strategy_for_user_invalid",
                        NOT_ALLOWED_TO_SIGN_UP: "not_allowed_to_sign_up",
                        OAUTH_ACCESS_DENIED: "oauth_access_denied",
                        OAUTH_EMAIL_DOMAIN_RESERVED_BY_SAML: "oauth_email_domain_reserved_by_saml",
                        NOT_ALLOWED_ACCESS: "not_allowed_access",
                        SAML_USER_ATTRIBUTE_MISSING: "saml_user_attribute_missing",
                        USER_LOCKED: "user_locked",
                        EXTERNAL_ACCOUNT_NOT_FOUND: "external_account_not_found",
                        SIGN_UP_MODE_RESTRICTED: "sign_up_mode_restricted",
                        SIGN_UP_MODE_RESTRICTED_WAITLIST: "sign_up_restricted_waitlist",
                        ENTERPRISE_SSO_USER_ATTRIBUTE_MISSING: "enterprise_sso_user_attribute_missing",
                        ENTERPRISE_SSO_EMAIL_ADDRESS_DOMAIN_MISMATCH: "enterprise_sso_email_address_domain_mismatch",
                        ENTERPRISE_SSO_HOSTED_DOMAIN_MISMATCH: "enterprise_sso_hosted_domain_mismatch",
                        SAML_EMAIL_ADDRESS_DOMAIN_MISMATCH: "saml_email_address_domain_mismatch",
                        INVITATION_ACCOUNT_NOT_EXISTS: "invitation_account_not_exists",
                        ORGANIZATION_MEMBERSHIP_QUOTA_EXCEEDED_FOR_SSO: "organization_membership_quota_exceeded_for_sso",
                        CAPTCHA_INVALID: "captcha_invalid"
                    },
                    c = ["email_address", "phone_number", "username"],
                    d = ["email_address", "phone_number", "username", "first_name", "last_name"],
                    u = 350,
                    h = {
                        PUBLIC: "public",
                        RESTRICTED: "restricted",
                        WAITLIST: "waitlist"
                    },
                    p = "2024-10-01"
            },
            4152: function(e, t, i) {
                "use strict";
                i.d(t, {
                    $C: () => E,
                    C: () => f,
                    Dg: () => s,
                    FI: () => O,
                    Fo: () => h,
                    G6: () => c,
                    HE: () => d,
                    O7: () => p,
                    PQ: () => C,
                    RE: () => P,
                    Rz: () => _,
                    WC: () => g,
                    Ws: () => y,
                    Xp: () => a,
                    _5: () => k,
                    an: () => r,
                    cT: () => S,
                    ep: () => m,
                    k2: () => l,
                    lb: () => v,
                    qO: () => w,
                    qW: () => A,
                    rn: () => u,
                    sY: () => U,
                    xZ: () => b,
                    yI: () => o
                });
                let n = "ClerkJS:";

                function r(e, t) {
                    throw Error("".concat(n, ' Network error at "').concat(e, '" - ').concat(t, ". Please try again."))
                }

                function a() {
                    throw Error("".concat(n, " Something went wrong initializing Clerk."))
                }

                function s() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    throw Error("".concat(n, " Something went wrong initializing Clerk in development mode.").concat(e && " ".concat(e)))
                }

                function o(e) {
                    throw Error("".concat(n, " Missing path option. The ").concat(e, ' component was mounted with path routing so you need to specify the path where the component is mounted on e.g. path="/sign-in".'))
                }

                function l(e) {
                    throw Error("".concat(n, " You must wrap your application in a <").concat(e, "> component."))
                }

                function c() {
                    throw Error("".concat(n, " Clerk is undefined"))
                }

                function d() {
                    throw Error("".concat(n, " The target element is empty. Provide a valid DOM element."))
                }

                function u() {
                    throw Error("".concat(n, " Missing FAPI client in resources."))
                }

                function h(e) {
                    throw Error("".concat(n, " Token refresh failed (error='").concat(e, "')"))
                }

                function p(e) {
                    throw Error("".concat(n, " Something went wrong initializing Clerk during the ").concat(e, " flow. Please contact support."))
                }

                function f(e) {
                    throw Error("".concat(n, " You need to start a ").concat(e, " flow by calling ").concat(e, ".create() first."))
                }

                function _(e, t) {
                    throw Error("".concat(n, ' Strategy "').concat(t, '" is not a valid strategy for ').concat(e, "."))
                }

                function v(e) {
                    throw Error("".concat(n, " You need to start a ").concat(e, " flow by calling ").concat(e, ".create({ identifier: 'your web3 wallet address' }) first"))
                }

                function m() {
                    throw Error("".concat(n, " You need to start a SignIn flow by calling SignIn.create({ strategy: 'passkey' }) first"))
                }

                function g() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    throw Error("".concat(n, " Missing '").concat(e, "' option"))
                }

                function y(e, t) {
                    throw Error("".concat(n, " Response: ").concat(e || 0, " not supported yet.\nFor more information contact us at ").concat(t))
                }

                function w() {
                    throw Error("".concat(n, " Missing dev browser jwt. Please contact support."))
                }

                function b() {
                    throw Error("".concat(n, " Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl."))
                }

                function S() {
                    throw Error("".concat(n, " The signInUrl needs to be on a different origin than your satellite application."))
                }

                function k() {
                    throw Error("".concat(n, " The signInUrl needs to have a absolute url format."))
                }

                function A() {
                    throw Error("".concat(n, " Missing signInUrl. A satellite application needs to specify the signInUrl for development instances."))
                }

                function U() {
                    throw Error("".concat(n, " Invalid redirect_url. A valid http or https url should be used for the redirection."))
                }

                function O(e) {
                    throw Error("".concat(n, " Unable to retrieve a third party script").concat(e ? " ".concat(e) : "", "."))
                }

                function C(e) {
                    throw Error("".concat(n, " Invalid routing strategy, path cannot be used in tandem with ").concat(e, "."))
                }

                function P(e) {
                    throw Error("".concat(n, " Calling ").concat(e, ".reload is not currently supported. Please contact support."))
                }

                function E(e) {
                    throw Error("".concat(n, " Missing publicKey. When calling 'navigator.credentials.").concat(e, "()' it is required to pass a publicKey object."))
                }
            },
            8026: function(e, t, i) {
                "use strict";
                i.d(t, {
                    U: () => n,
                    Y: () => r
                });
                let n = {
                        TokenUpdate: "token:update",
                        UserSignOut: "user:signOut"
                    },
                    r = (() => {
                        let e = new Map;
                        return {
                            on: (t, i) => {
                                var n;
                                e.get(t) || e.set(t, []), null === (n = e.get(t)) || void 0 === n || n.push(i)
                            },
                            dispatch: (t, i) => {
                                (e.get(t) || []).forEach(e => "function" == typeof e && e(i))
                            },
                            off: (t, i) => {
                                let n = e.get(t) || [];
                                n.length && (i && e.set(t, n.filter(e => e !== i)), e.set(t, []))
                            }
                        }
                    })()
            },
            7771: function(e, t, i) {
                "use strict";
                i.d(t, {
                    Ax: () => ec,
                    Bh: () => z,
                    sZ: () => k.sZ,
                    GF: () => em,
                    N: () => k.N,
                    Ye: () => T,
                    $h: () => V,
                    P$: () => C,
                    z: () => I,
                    KU: () => _,
                    Vk: () => es,
                    ff: () => eb,
                    PG: () => d,
                    wJ: () => $,
                    n5: () => ew,
                    kD: () => k.kD,
                    ZC: () => k.ZC,
                    gO: () => k.gO,
                    FF: () => v,
                    cp: () => j,
                    uX: () => k.uX,
                    b5: () => w,
                    gt: () => J,
                    w$: () => k.w$,
                    Ee: () => M,
                    Tg: () => h,
                    YN: () => R,
                    lR: () => m,
                    fr: () => K,
                    yk: () => ek,
                    cL: () => eh,
                    i: () => c,
                    q2: () => eS,
                    EJ: () => P,
                    Mo: () => e_,
                    mt: () => ep,
                    z_: () => er,
                    GX: () => O,
                    VO: () => eo,
                    WU: () => ev,
                    qA: () => S
                });
                var n = i(623),
                    r = i(2708),
                    a = i(1402),
                    s = i(4152),
                    o = i(7786);
                class l {
                    static getInstance() {
                        return l.instance || (l.instance = new l(_, o.E)), l.instance
                    }
                    async execute(e, t) {
                        try {
                            return this.inflightException && await this.inflightException, await t()
                        } catch (a) {
                            var i;
                            let n;
                            if (!(0, k.kD)(a) || (null === (i = a.errors[0]) || void 0 === i ? void 0 : i.code) !== "requires_captcha") throw a;
                            if (this.inflightException) return await this.inflightException, await t();
                            this.inflightException = new Promise(e => n = e);
                            let r = await this.managedChallenge(e);
                            try {
                                await this.client.getOrCreateInstance().sendCaptchaToken(r)
                            } finally {
                                n(), this.inflightException = null
                            }
                            return await t()
                        }
                    }
                    managedChallenge(e) {
                        return new this.CaptchaChallengeImpl(e).managedInModal({
                            action: "verify"
                        })
                    }
                    constructor(e, t) {
                        (0, n._)(this, "client", void 0), (0, n._)(this, "CaptchaChallengeImpl", void 0), (0, n._)(this, "inflightException", void 0), this.client = e, this.CaptchaChallengeImpl = t, this.inflightException = null
                    }
                }(0, n._)(l, "instance", void 0);
                class c {
                    static get fapiClient() {
                        return c.clerk.getFapiClient()
                    }
                    async reload(e) {
                        let {
                            rotatingTokenNonce: t
                        } = e || {};
                        return this._baseGet({
                            forceUpdateClient: !0,
                            rotatingTokenNonce: t
                        })
                    }
                    isNew() {
                        return !this.id
                    }
                    static async _fetch(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return l.getInstance().execute(this.clerk, () => this._baseFetch(e, t))
                    }
                    static async _baseFetch(e) {
                        let t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        c.fapiClient || (0, s.rn)();
                        let {
                            fetchMaxTries: n
                        } = i;
                        try {
                            t = await c.fapiClient.request(e, {
                                fetchMaxTries: n
                            })
                        } catch (e) {
                            if (this.shouldRethrowOfflineNetworkErrors()) throw new k.w$((null == e ? void 0 : e.message) || e, {
                                code: "network_error"
                            });
                            if (!(0, r.af)()) return console.warn(e), null;
                            throw e
                        }
                        let {
                            payload: o,
                            status: l,
                            statusText: d,
                            headers: u
                        } = t;
                        if (u) {
                            let e = u.get("x-country");
                            this.clerk.__internal_setCountry(e ? e.toLowerCase() : null)
                        }
                        if (("GET" !== e.method || i.forceUpdateClient) && this._updateClient(o), l >= 200 && l <= 299) return o;
                        if (l >= 400) {
                            var h, p;
                            let e = null == o ? void 0 : o.errors,
                                t = null == e ? void 0 : null === (h = e[0]) || void 0 === h ? void 0 : h.long_message,
                                i = null == e ? void 0 : null === (p = e[0]) || void 0 === p ? void 0 : p.code;
                            throw 401 === l && "requires_captcha" !== i && await c.clerk.handleUnauthenticated(), ! function(e, t) {
                                if (!t || !t[0]) return;
                                let i = t[0],
                                    n = i.long_message;
                                if ("origin_invalid" === i.code && (0, a.mA)(c.clerk.publishableKey)) {
                                    let i = c.clerk.frontendApi.replace("clerk.", "");
                                    throw new k.gO('Clerk: Production Keys are only allowed for domain "'.concat(i, '". \nAPI Error: ').concat(n), {
                                        data: t,
                                        status: e
                                    })
                                }
                            }(l, e), new k.gO(t || d, {
                                data: e,
                                status: l
                            })
                        }
                        return null
                    }
                    static _updateClient(e) {
                        var t;
                        if (!e) return;
                        let i = e.client || (null === (t = e.meta) || void 0 === t ? void 0 : t.client);
                        i && c.clerk && c.clerk.updateClient(_.getOrCreateInstance().fromJSON(i))
                    }
                    path(e) {
                        let t = this.pathRoot;
                        if (this.isNew()) return t;
                        let i = t.replace(/[^/]$/, "$&/") + encodeURIComponent(this.id);
                        return e ? i.replace(/[^/]$/, "$&/") + encodeURIComponent(e) : i
                    }
                    async _baseGet() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = await c._fetch({
                                method: "GET",
                                path: this.path(),
                                rotatingTokenNonce: e.rotatingTokenNonce
                            }, e);
                        return this.fromJSON((null == t ? void 0 : t.response) || t)
                    }
                    async _baseMutate(e) {
                        let {
                            action: t,
                            body: i,
                            method: n,
                            path: r
                        } = e, a = await c._fetch({
                            method: n,
                            path: r || this.path(t),
                            body: i
                        });
                        return this.fromJSON((null == a ? void 0 : a.response) || a)
                    }
                    async _baseMutateBypass(e) {
                        let {
                            action: t,
                            body: i,
                            method: n,
                            path: r
                        } = e, a = await c._baseFetch({
                            method: n,
                            path: r || this.path(t),
                            body: i
                        });
                        return this.fromJSON((null == a ? void 0 : a.response) || a)
                    }
                    async _basePost() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this._baseMutate({ ...e,
                            method: "POST"
                        })
                    }
                    async _basePostBypass() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this._baseMutateBypass({ ...e,
                            method: "POST"
                        })
                    }
                    async _basePut() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this._baseMutate({ ...e,
                            method: "PUT"
                        })
                    }
                    async _basePatch() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this._baseMutate({ ...e,
                            method: "PATCH"
                        })
                    }
                    async _baseDelete() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        await this._baseMutate({ ...e,
                            method: "DELETE"
                        })
                    }
                    static shouldRethrowOfflineNetworkErrors() {
                        var e, t;
                        let i = null === (t = c.clerk) || void 0 === t ? void 0 : null === (e = t.__internal_getOption) || void 0 === e ? void 0 : e.call(t, "experimental");
                        return (null == i ? void 0 : i.rethrowOfflineNetworkErrors) || !1
                    }
                    constructor() {
                        (0, n._)(this, "id", void 0), (0, n._)(this, "pathRoot", "")
                    }
                }(0, n._)(c, "clerk", void 0);
                class d extends c {
                    get instanceIsPasswordBased() {
                        return this.attributes.password.enabled && this.attributes.password.required
                    }
                    get hasValidAuthFactor() {
                        return this.attributes.email_address.enabled || this.attributes.phone_number.enabled || this.attributes.password.required && this.attributes.username.required
                    }
                    fromJSON(e) {
                        var t, i, n, r, a;
                        return e && (this.social = e.social, this.saml = e.saml, this.enterpriseSSO = e.enterprise_sso, this.attributes = Object.fromEntries(Object.entries(e.attributes).map(e => [e[0], { ...e[1],
                            name: e[0]
                        }])), this.actions = e.actions, this.signIn = e.sign_in, this.signUp = e.sign_up, this.passwordSettings = { ...e.password_settings,
                            min_length: Math.max(null == e ? void 0 : null === (t = e.password_settings) || void 0 === t ? void 0 : t.min_length, 8),
                            max_length: (null == e ? void 0 : null === (i = e.password_settings) || void 0 === i ? void 0 : i.max_length) === 0 ? 72 : Math.min(null == e ? void 0 : null === (n = e.password_settings) || void 0 === n ? void 0 : n.max_length, 72)
                        }, this.usernameSettings = { ...e.username_settings,
                            min_length: Math.max(null == e ? void 0 : null === (r = e.username_settings) || void 0 === r ? void 0 : r.min_length, 4),
                            max_length: Math.min(null == e ? void 0 : null === (a = e.username_settings) || void 0 === a ? void 0 : a.max_length, 64)
                        }, this.passkeySettings = e.passkey_settings, this.socialProviderStrategies = this.getSocialProviderStrategies(e.social), this.authenticatableSocialStrategies = this.getAuthenticatableSocialStrategies(e.social), this.web3FirstFactors = this.getWeb3FirstFactors(this.attributes), this.enabledFirstFactorIdentifiers = this.getEnabledFirstFactorIdentifiers(this.attributes)), this
                    }
                    __internal_toSnapshot() {
                        return {
                            social: this.social,
                            saml: this.saml,
                            attributes: this.attributes,
                            actions: this.actions,
                            sign_in: this.signIn,
                            sign_up: this.signUp,
                            password_settings: this.passwordSettings,
                            passkey_settings: this.passkeySettings
                        }
                    }
                    getEnabledFirstFactorIdentifiers(e) {
                        return e ? Object.entries(e).filter(e => {
                            let [t, i] = e;
                            return i.used_for_first_factor && !t.startsWith("web3")
                        }).map(e => {
                            let [t] = e;
                            return t
                        }) : []
                    }
                    getWeb3FirstFactors(e) {
                        return e ? Object.entries(e).filter(e => {
                            let [t, i] = e;
                            return i.used_for_first_factor && t.startsWith("web3")
                        }).map(e => {
                            let [, t] = e;
                            return t.first_factors
                        }).flat() : []
                    }
                    getSocialProviderStrategies(e) {
                        return e ? Object.entries(e).filter(e => {
                            let [, t] = e;
                            return t.enabled
                        }).map(e => {
                            let [, t] = e;
                            return t.strategy
                        }).sort() : []
                    }
                    getAuthenticatableSocialStrategies(e) {
                        return e ? Object.entries(e).filter(e => {
                            let [, t] = e;
                            return t.enabled && t.authenticatable
                        }).map(e => {
                            let [, t] = e;
                            return t.strategy
                        }).sort() : []
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "social", void 0), (0, n._)(this, "saml", void 0), (0, n._)(this, "enterpriseSSO", void 0), (0, n._)(this, "attributes", void 0), (0, n._)(this, "actions", void 0), (0, n._)(this, "signIn", void 0), (0, n._)(this, "signUp", void 0), (0, n._)(this, "passwordSettings", void 0), (0, n._)(this, "passkeySettings", void 0), (0, n._)(this, "usernameSettings", void 0), (0, n._)(this, "socialProviderStrategies", []), (0, n._)(this, "authenticatableSocialStrategies", []), (0, n._)(this, "web3FirstFactors", []), (0, n._)(this, "enabledFirstFactorIdentifiers", []), this.fromJSON(e)
                    }
                }

                function u(e) {
                    let t = new Date(e || new Date);
                    return t instanceof Date && !isNaN(t.getTime()) ? t : new Date
                }
                class h extends c {
                    fromJSON(e) {
                        return this.singleSessionMode = !e || e.single_session_mode, this.claimedAt = (null == e ? void 0 : e.claimed_at) ? u(e.claimed_at) : null, this.reverification = !e || e.reverification, this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "auth_config",
                            id: this.id || "",
                            single_session_mode: this.singleSessionMode,
                            claimed_at: this.claimedAt ? this.claimedAt.getTime() : null,
                            reverification: this.reverification
                        }
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "singleSessionMode", void 0), (0, n._)(this, "claimedAt", null), (0, n._)(this, "reverification", void 0), this.fromJSON(e)
                    }
                }
                class p {
                    static fromKey(e) {
                        let [t, i, n = ""] = e.split("::");
                        return new p(t, {
                            audience: n,
                            tokenId: i
                        })
                    }
                    toKey() {
                        let {
                            tokenId: e,
                            audience: t
                        } = this.data;
                        return [this.prefix, e, t || ""].join("::")
                    }
                    constructor(e, t) {
                        (0, n._)(this, "prefix", void 0), (0, n._)(this, "data", void 0), this.prefix = e, this.data = t, this.prefix = e, this.data = t
                    }
                }
                let f = function() {
                    let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "clerk",
                        i = new Map;
                    return {
                        get: function(e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                                r = new p(t, e),
                                a = i.get(r.toKey());
                            if (!a) return;
                            let s = Math.floor(Date.now() / 1e3) - a.createdAt;
                            if (a.expiresIn - s < (n || 1) + 5) {
                                i.delete(r.toKey());
                                return
                            }
                            return a.entry
                        },
                        set: n => {
                            let r = new p(t, {
                                    audience: n.audience,
                                    tokenId: n.tokenId
                                }).toKey(),
                                a = {
                                    entry: n,
                                    createdAt: Math.floor(Date.now() / 1e3)
                                },
                                s = () => {
                                    i.get(r) === a && i.delete(r)
                                };
                            n.tokenResolver.then(t => {
                                if (!t.jwt) return s();
                                let i = t.jwt.claims.exp - t.jwt.claims.iat;
                                a.expiresIn = i, "function" == typeof(e = setTimeout(s, 1e3 * i)).unref && e.unref()
                            }).catch(() => {
                                s()
                            }), i.set(r, a)
                        },
                        clear: () => {
                            clearTimeout(e), i.clear()
                        },
                        size: () => i.size
                    }
                }();
                class _ extends c {
                    static getOrCreateInstance() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        return _.instance || (_.instance = new _(e)), _.instance
                    }
                    static clearInstance() {
                        _.instance = null
                    }
                    static isClientResource(e) {
                        return !!e && e instanceof _
                    }
                    get signUpAttempt() {
                        return this.signUp
                    }
                    get signInAttempt() {
                        return this.signIn
                    }
                    get activeSessions() {
                        return this.sessions.filter(e => "active" === e.status)
                    }
                    get signedInSessions() {
                        return this.sessions.filter(e => "active" === e.status || "pending" === e.status)
                    }
                    create() {
                        return this._basePut()
                    }
                    fetch() {
                        let {
                            fetchMaxTries: e
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this._baseGet({
                            fetchMaxTries: e
                        })
                    }
                    async destroy() {
                        return this._baseDelete({
                            path: "/client"
                        }).then(() => {
                            f.clear(), this.id = "", this.sessions = [], this.signUp = new e_(null), this.signIn = new eh(null), this.lastActiveSessionId = null, this.cookieExpiresAt = null, this.createdAt = null, this.updatedAt = null
                        })
                    }
                    removeSessions() {
                        return this._baseDelete({
                            path: this.path() + "/sessions"
                        }).then(e => (f.clear(), e))
                    }
                    clearCache() {
                        return this.sessions.forEach(e => e.clearCache())
                    }
                    isEligibleForTouch() {
                        return !!this.cookieExpiresAt && this.cookieExpiresAt.getTime() - Date.now() <= 6912e5
                    }
                    buildTouchUrl(e) {
                        let {
                            redirectUrl: t
                        } = e;
                        return c.fapiClient.buildUrl({
                            method: "GET",
                            path: "/client/touch",
                            pathPrefix: "v1",
                            search: {
                                redirect_url: t.toString()
                            }
                        }).toString()
                    }
                    sendCaptchaToken(e) {
                        return this._basePostBypass({
                            body: e,
                            path: this.path() + "/verify"
                        })
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.sessions = (e.sessions || []).map(e => new er(e)), this.signUp = new e_(e.sign_up), this.signIn = new eh(e.sign_in), this.lastActiveSessionId = e.last_active_session_id, this.captchaBypass = e.captcha_bypass || !1, this.cookieExpiresAt = e.cookie_expires_at ? u(e.cookie_expires_at) : null, this.createdAt = u(e.created_at || void 0), this.updatedAt = u(e.updated_at || void 0)), this
                    }
                    __internal_toSnapshot() {
                        var e, t, i, n;
                        return {
                            object: "client",
                            status: null,
                            id: this.id || "",
                            sessions: this.sessions.map(e => e.__internal_toSnapshot()),
                            sign_up: this.signUp.__internal_toSnapshot(),
                            sign_in: this.signIn.__internal_toSnapshot(),
                            last_active_session_id: this.lastActiveSessionId,
                            captcha_bypass: this.captchaBypass,
                            cookie_expires_at: this.cookieExpiresAt ? this.cookieExpiresAt.getTime() : null,
                            created_at: null !== (i = null === (e = this.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== i ? i : null,
                            updated_at: null !== (n = null === (t = this.updatedAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== n ? n : null
                        }
                    }
                    path() {
                        return this.pathRoot
                    }
                    constructor(e = null) {
                        super(), (0, n._)(this, "pathRoot", "/client"), (0, n._)(this, "sessions", []), (0, n._)(this, "signUp", new e_), (0, n._)(this, "signIn", new eh), (0, n._)(this, "lastActiveSessionId", null), (0, n._)(this, "captchaBypass", !1), (0, n._)(this, "cookieExpiresAt", null), (0, n._)(this, "createdAt", null), (0, n._)(this, "updatedAt", null), this.fromJSON(e)
                    }
                }(0, n._)(_, "instance", void 0);
                class v {
                    fromJSON(e) {
                        return e && (this.object = e.object, this.id = e.id, this.slug = e.slug, this.deleted = e.deleted), this
                    }
                    constructor(e) {
                        (0, n._)(this, "object", ""), (0, n._)(this, "id", void 0), (0, n._)(this, "slug", void 0), (0, n._)(this, "deleted", !1), this.fromJSON(e)
                    }
                }
                class m extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.instanceEnvironmentType = e.instance_environment_type, this.applicationName = e.application_name, this.theme = e.theme, this.preferredSignInStrategy = e.preferred_sign_in_strategy, this.logoImageUrl = e.logo_image_url, this.faviconImageUrl = e.favicon_image_url, this.homeUrl = e.home_url, this.signInUrl = e.sign_in_url, this.signUpUrl = e.sign_up_url, this.userProfileUrl = e.user_profile_url, this.afterSignInUrl = e.after_sign_in_url, this.afterSignUpUrl = e.after_sign_up_url, this.afterSignOutOneUrl = e.after_sign_out_one_url, this.afterSignOutAllUrl = e.after_sign_out_all_url, this.afterSwitchSessionUrl = e.after_switch_session_url, this.branded = e.branded, this.captchaPublicKey = e.captcha_public_key, this.captchaWidgetType = e.captcha_widget_type, this.captchaProvider = e.captcha_provider, this.captchaPublicKeyInvisible = e.captcha_public_key_invisible, this.captchaOauthBypass = e.captcha_oauth_bypass || ["oauth_google", "oauth_microsoft", "oauth_apple"], this.captchaHeartbeat = e.captcha_heartbeat || !1, this.captchaHeartbeatIntervalMs = e.captcha_heartbeat_interval_ms, this.supportEmail = e.support_email || "", this.clerkJSVersion = e.clerk_js_version, this.organizationProfileUrl = e.organization_profile_url, this.createOrganizationUrl = e.create_organization_url, this.afterLeaveOrganizationUrl = e.after_leave_organization_url, this.afterCreateOrganizationUrl = e.after_create_organization_url, this.googleOneTapClientId = e.google_one_tap_client_id, this.showDevModeWarning = e.show_devmode_warning, this.termsUrl = e.terms_url, this.privacyPolicyUrl = e.privacy_policy_url, this.waitlistUrl = e.waitlist_url, this.afterJoinWaitlistUrl = e.after_join_waitlist_url), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "display_config",
                            id: this.id,
                            instance_environment_type: this.instanceEnvironmentType,
                            application_name: this.applicationName,
                            theme: this.theme,
                            preferred_sign_in_strategy: this.preferredSignInStrategy,
                            logo_image_url: this.logoImageUrl,
                            favicon_image_url: this.faviconImageUrl,
                            home_url: this.homeUrl,
                            sign_in_url: this.signInUrl,
                            sign_up_url: this.signUpUrl,
                            user_profile_url: this.userProfileUrl,
                            after_sign_in_url: this.afterSignInUrl,
                            after_sign_up_url: this.afterSignUpUrl,
                            after_sign_out_one_url: this.afterSignOutOneUrl,
                            after_sign_out_all_url: this.afterSignOutAllUrl,
                            after_switch_session_url: this.afterSwitchSessionUrl,
                            branded: this.branded,
                            captcha_public_key: this.captchaPublicKey,
                            captcha_widget_type: this.captchaWidgetType,
                            captcha_provider: this.captchaProvider,
                            captcha_public_key_invisible: this.captchaPublicKeyInvisible,
                            captcha_oauth_bypass: this.captchaOauthBypass,
                            captcha_heartbeat: this.captchaHeartbeat,
                            captcha_heartbeat_interval_ms: this.captchaHeartbeatIntervalMs,
                            support_email: this.supportEmail,
                            clerk_js_version: this.clerkJSVersion,
                            organization_profile_url: this.organizationProfileUrl,
                            create_organization_url: this.createOrganizationUrl,
                            after_leave_organization_url: this.afterLeaveOrganizationUrl,
                            after_create_organization_url: this.afterCreateOrganizationUrl,
                            google_one_tap_client_id: this.googleOneTapClientId,
                            show_devmode_warning: this.showDevModeWarning,
                            terms_url: this.termsUrl,
                            privacy_policy_url: this.privacyPolicyUrl,
                            waitlist_url: this.waitlistUrl,
                            after_join_waitlist_url: this.afterJoinWaitlistUrl
                        }
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "afterSignInUrl", void 0), (0, n._)(this, "afterSignOutAllUrl", void 0), (0, n._)(this, "afterSignOutOneUrl", void 0), (0, n._)(this, "afterSignOutUrl", void 0), (0, n._)(this, "afterSignUpUrl", void 0), (0, n._)(this, "afterSwitchSessionUrl", void 0), (0, n._)(this, "applicationName", void 0), (0, n._)(this, "backendHost", void 0), (0, n._)(this, "branded", void 0), (0, n._)(this, "captchaPublicKey", null), (0, n._)(this, "captchaWidgetType", null), (0, n._)(this, "captchaProvider", "turnstile"), (0, n._)(this, "captchaPublicKeyInvisible", null), (0, n._)(this, "captchaOauthBypass", []), (0, n._)(this, "captchaHeartbeat", !1), (0, n._)(this, "captchaHeartbeatIntervalMs", void 0), (0, n._)(this, "homeUrl", void 0), (0, n._)(this, "instanceEnvironmentType", void 0), (0, n._)(this, "faviconImageUrl", void 0), (0, n._)(this, "logoImageUrl", void 0), (0, n._)(this, "preferredSignInStrategy", void 0), (0, n._)(this, "signInUrl", void 0), (0, n._)(this, "signUpUrl", void 0), (0, n._)(this, "supportEmail", void 0), (0, n._)(this, "theme", void 0), (0, n._)(this, "userProfileUrl", void 0), (0, n._)(this, "clerkJSVersion", void 0), (0, n._)(this, "experimental__forceOauthFirst", void 0), (0, n._)(this, "organizationProfileUrl", void 0), (0, n._)(this, "createOrganizationUrl", void 0), (0, n._)(this, "afterLeaveOrganizationUrl", void 0), (0, n._)(this, "afterCreateOrganizationUrl", void 0), (0, n._)(this, "googleOneTapClientId", void 0), (0, n._)(this, "showDevModeWarning", void 0), (0, n._)(this, "termsUrl", void 0), (0, n._)(this, "privacyPolicyUrl", void 0), (0, n._)(this, "waitlistUrl", void 0), (0, n._)(this, "afterJoinWaitlistUrl", void 0), this.fromJSON(e)
                    }
                }
                var g = i(9695);

                function y() {
                    let e, {
                            delayInMs: t
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            delayInMs: 1e3
                        },
                        i = (0, g.Q)(),
                        n = !1,
                        r = () => {
                            e && (i.clearTimeout(e), i.cleanup()), n = !0
                        },
                        a = async s => {
                            n = !1, await s(r), !n && (e = i.setTimeout(() => {
                                a(s)
                            }, t))
                        };
                    return {
                        run: a,
                        stop: r
                    }
                }
                i(4310);
                class w extends c {
                    create() {
                        return this._basePost({
                            body: {
                                email_address: this.emailAddress
                            }
                        })
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.emailAddress = e.email_address, this.verification = new O(e.verification), this.matchesSsoConnection = e.matches_sso_connection, this.linkedTo = (e.linked_to || []).map(e => new R(e))), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "email_address",
                            id: this.id,
                            email_address: this.emailAddress,
                            verification: this.verification.__internal_toSnapshot(),
                            linked_to: this.linkedTo.map(e => e.__internal_toSnapshot()),
                            matches_sso_connection: this.matchesSsoConnection
                        }
                    }
                    constructor(e, t) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "emailAddress", ""), (0, n._)(this, "matchesSsoConnection", !1), (0, n._)(this, "linkedTo", []), (0, n._)(this, "verification", void 0), (0, n._)(this, "prepareVerification", e => this._basePost({
                            action: "prepare_verification",
                            body: { ...e
                            }
                        })), (0, n._)(this, "attemptVerification", e => {
                            let {
                                code: t
                            } = e || {};
                            return this._basePost({
                                action: "attempt_verification",
                                body: {
                                    code: t
                                }
                            })
                        }), (0, n._)(this, "createEmailLinkFlow", () => {
                            let {
                                run: e,
                                stop: t
                            } = y();
                            return {
                                startEmailLinkFlow: async i => {
                                    let {
                                        redirectUrl: n
                                    } = i;
                                    return await this.prepareVerification({
                                        strategy: "email_link",
                                        redirectUrl: n
                                    }), new Promise((i, n) => {
                                        e(() => this.reload().then(e => {
                                            "verified" === e.verification.status && (t(), i(e))
                                        }).catch(e => {
                                            t(), n(e)
                                        }))
                                    })
                                },
                                cancelEmailLinkFlow: t
                            }
                        }), (0, n._)(this, "createEnterpriseSSOLinkFlow", () => {
                            let {
                                run: e,
                                stop: t
                            } = y();
                            return {
                                startEnterpriseSSOLinkFlow: async i => {
                                    let {
                                        redirectUrl: n
                                    } = i;
                                    if (!(await this.prepareVerification({
                                            strategy: "enterprise_sso",
                                            redirectUrl: n
                                        })).verification.externalVerificationRedirectURL) throw Error("Unexpected: External verification redirect URL is missing");
                                    return new Promise((i, n) => {
                                        e(() => this.reload().then(e => {
                                            "verified" === e.verification.status && (t(), i(e))
                                        }).catch(e => {
                                            t(), n(e)
                                        }))
                                    })
                                },
                                cancelEnterpriseSSOLinkFlow: t
                            }
                        }), (0, n._)(this, "destroy", () => this._baseDelete()), (0, n._)(this, "toString", () => this.emailAddress), this.pathRoot = t, this.fromJSON(e)
                    }
                }
                class b extends c {
                    fromJSON(e) {
                        let {
                            enabled: t = !1,
                            max_allowed_memberships: i = 0,
                            actions: n,
                            domains: r
                        } = e || {};
                        return this.enabled = t, this.maxAllowedMemberships = i, this.actions = {
                            adminDelete: (null == n ? void 0 : n.admin_delete) || !1
                        }, this.domains = {
                            enabled: (null == r ? void 0 : r.enabled) || !1,
                            enrollmentModes: (null == r ? void 0 : r.enrollment_modes) || [],
                            defaultRole: (null == r ? void 0 : r.default_role) || null
                        }, this
                    }
                    __internal_toSnapshot() {
                        return {
                            enabled: this.enabled,
                            max_allowed_memberships: this.maxAllowedMemberships,
                            actions: {
                                admin_delete: this.actions.adminDelete
                            },
                            domains: {
                                enabled: this.domains.enabled,
                                enrollment_modes: this.domains.enrollmentModes,
                                default_role: this.domains.defaultRole
                            }
                        }
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "enabled", void 0), (0, n._)(this, "maxAllowedMemberships", void 0), (0, n._)(this, "actions", void 0), (0, n._)(this, "domains", void 0), this.fromJSON(e)
                    }
                }
                class S extends c {
                    static getInstance() {
                        return S.instance || (S.instance = new S), S.instance
                    }
                    fetch() {
                        let {
                            touch: e,
                            fetchMaxTries: t
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            touch: !1
                        };
                        return e ? this._basePatch({}) : this._baseGet({
                            fetchMaxTries: t
                        })
                    }
                    fromJSON(e) {
                        return e && (this.authConfig = new h(e.auth_config), this.displayConfig = new m(e.display_config), this.userSettings = new d(e.user_settings), this.organizationSettings = new b(e.organization_settings), this.maintenanceMode = e.maintenance_mode), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "environment",
                            id: this.id || "",
                            auth_config: this.authConfig.__internal_toSnapshot(),
                            display_config: this.displayConfig.__internal_toSnapshot(),
                            user_settings: this.userSettings.__internal_toSnapshot(),
                            organization_settings: this.organizationSettings.__internal_toSnapshot(),
                            maintenance_mode: this.maintenanceMode
                        }
                    }
                    constructor(e = null) {
                        super(), (0, n._)(this, "pathRoot", "/environment"), (0, n._)(this, "authConfig", void 0), (0, n._)(this, "displayConfig", void 0), (0, n._)(this, "userSettings", void 0), (0, n._)(this, "organizationSettings", void 0), (0, n._)(this, "maintenanceMode", void 0), (0, n._)(this, "isSingleSession", () => this.authConfig.singleSessionMode), (0, n._)(this, "isProduction", () => "production" === this.displayConfig.instanceEnvironmentType), (0, n._)(this, "isDevelopmentOrStaging", () => !this.isProduction()), (0, n._)(this, "onWindowLocationHost", () => this.displayConfig.backendHost === window.location.host), this.fromJSON(e)
                    }
                }(0, n._)(S, "instance", void 0);
                var k = i(3531),
                    A = i(5027),
                    U = i(3367);
                class O extends c {
                    fromJSON(e) {
                        return e && (this.status = e.status, this.verifiedAtClient = e.verified_at_client, this.strategy = e.strategy, this.nonce = e.nonce || null, this.message = e.message || null, e.external_verification_redirect_url ? this.externalVerificationRedirectURL = new URL(e.external_verification_redirect_url) : this.externalVerificationRedirectURL = null, this.attempts = e.attempts, this.expireAt = u(e.expire_at || void 0), this.error = e.error ? (0, k.nU)(e.error) : null), this
                    }
                    __internal_toSnapshot() {
                        var e, t;
                        return {
                            object: "verification",
                            id: this.id || "",
                            status: this.status,
                            strategy: this.strategy,
                            nonce: this.nonce,
                            message: this.message,
                            external_verification_redirect_url: (null === (e = this.externalVerificationRedirectURL) || void 0 === e ? void 0 : e.toString()) || null,
                            attempts: this.attempts,
                            expire_at: (null === (t = this.expireAt) || void 0 === t ? void 0 : t.getTime()) || null,
                            error: (0, k.LT)(this.error),
                            verified_at_client: this.verifiedAtClient
                        }
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "pathRoot", ""), (0, n._)(this, "status", null), (0, n._)(this, "strategy", null), (0, n._)(this, "nonce", null), (0, n._)(this, "message", null), (0, n._)(this, "externalVerificationRedirectURL", null), (0, n._)(this, "attempts", null), (0, n._)(this, "expireAt", null), (0, n._)(this, "error", null), (0, n._)(this, "verifiedAtClient", null), (0, n._)(this, "verifiedFromTheSameClient", () => {
                            var e, t;
                            return this.verifiedAtClient === (null === (t = c.clerk) || void 0 === t ? void 0 : null === (e = t.client) || void 0 === e ? void 0 : e.id)
                        }), this.fromJSON(e)
                    }
                }
                class C extends O {
                    fromJSON(e) {
                        return super.fromJSON(e), (null == e ? void 0 : e.nonce) && (this.publicKey = (0, U.GH)(JSON.parse(e.nonce))), this
                    }
                    constructor(e) {
                        super(e), (0, n._)(this, "publicKey", null), this.fromJSON(e)
                    }
                }
                class P {
                    __internal_toSnapshot() {
                        return {
                            email_address: this.emailAddress.__internal_toSnapshot(),
                            phone_number: this.phoneNumber.__internal_toSnapshot(),
                            web3_wallet: this.web3Wallet.__internal_toSnapshot(),
                            external_account: this.externalAccount.__internal_toSnapshot()
                        }
                    }
                    constructor(e) {
                        (0, n._)(this, "emailAddress", void 0), (0, n._)(this, "phoneNumber", void 0), (0, n._)(this, "web3Wallet", void 0), (0, n._)(this, "externalAccount", void 0), e ? (this.emailAddress = new E(e.email_address), this.phoneNumber = new E(e.phone_number), this.web3Wallet = new E(e.web3_wallet), this.externalAccount = new O(e.external_account)) : (this.emailAddress = new E(null), this.phoneNumber = new E(null), this.web3Wallet = new E(null), this.externalAccount = new O(null))
                    }
                }
                class E extends O {
                    __internal_toSnapshot() {
                        return { ...super.__internal_toSnapshot(),
                            next_action: this.nextAction,
                            supported_strategies: this.supportedStrategies
                        }
                    }
                    constructor(e) {
                        super(e), (0, n._)(this, "nextAction", void 0), (0, n._)(this, "supportedStrategies", void 0), e ? (this.nextAction = e.next_action, this.supportedStrategies = e.supported_strategies) : (this.nextAction = "", this.supportedStrategies = [])
                    }
                }
                class I extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.identificationId = e.identification_id, this.providerUserId = e.provider_user_id, this.approvedScopes = e.approved_scopes, this.imageUrl = e.image_url, this.emailAddress = e.email_address, this.firstName = e.first_name, this.lastName = e.last_name, this.provider = (e.provider || "").replace("oauth_", ""), this.username = e.username, this.publicMetadata = e.public_metadata, this.label = e.label, e.verification && (this.verification = new O(e.verification))), this
                    }
                    __internal_toSnapshot() {
                        var e;
                        return {
                            object: "external_account",
                            id: this.id,
                            identification_id: this.identificationId,
                            provider: this.provider,
                            provider_user_id: this.providerUserId,
                            email_address: this.emailAddress,
                            approved_scopes: this.approvedScopes,
                            first_name: this.firstName,
                            last_name: this.lastName,
                            image_url: this.imageUrl,
                            username: this.username,
                            public_metadata: this.publicMetadata,
                            label: this.label,
                            verification: (null === (e = this.verification) || void 0 === e ? void 0 : e.__internal_toSnapshot()) || null
                        }
                    }
                    providerSlug() {
                        return this.provider
                    }
                    providerTitle() {
                        return [(0, A.MI)(this.providerSlug()), "Account"].join(" ")
                    }
                    accountIdentifier() {
                        return this.username || this.emailAddress || this.label
                    }
                    constructor(e, t) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "identificationId", void 0), (0, n._)(this, "provider", void 0), (0, n._)(this, "providerUserId", ""), (0, n._)(this, "emailAddress", ""), (0, n._)(this, "approvedScopes", ""), (0, n._)(this, "firstName", ""), (0, n._)(this, "lastName", ""), (0, n._)(this, "imageUrl", ""), (0, n._)(this, "username", ""), (0, n._)(this, "publicMetadata", {}), (0, n._)(this, "label", ""), (0, n._)(this, "verification", null), (0, n._)(this, "reauthorize", e => {
                            let {
                                additionalScopes: t,
                                redirectUrl: i
                            } = e || {};
                            return this._basePatch({
                                action: "reauthorize",
                                body: {
                                    additional_scope: t,
                                    redirect_url: i
                                }
                            })
                        }), (0, n._)(this, "destroy", () => this._baseDelete()), this.pathRoot = t, this.fromJSON(e)
                    }
                }
                class T extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.provider = e.provider, this.protocol = e.protocol, this.providerUserId = e.provider_user_id, this.active = e.active, this.emailAddress = e.email_address, this.firstName = e.first_name, this.lastName = e.last_name, this.publicMetadata = e.public_metadata, e.verification && (this.verification = new O(e.verification)), e.enterprise_connection && (this.enterpriseConnection = new x(e.enterprise_connection))), this
                    }
                    __internal_toSnapshot() {
                        var e, t;
                        return {
                            object: "enterprise_account",
                            id: this.id,
                            provider: this.provider,
                            protocol: this.protocol,
                            provider_user_id: this.providerUserId,
                            active: this.active,
                            email_address: this.emailAddress,
                            first_name: this.firstName,
                            last_name: this.lastName,
                            public_metadata: this.publicMetadata,
                            verification: (null === (e = this.verification) || void 0 === e ? void 0 : e.__internal_toSnapshot()) || null,
                            enterprise_connection: (null === (t = this.enterpriseConnection) || void 0 === t ? void 0 : t.__internal_toSnapshot()) || null
                        }
                    }
                    constructor(e, t) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "protocol", void 0), (0, n._)(this, "provider", void 0), (0, n._)(this, "providerUserId", null), (0, n._)(this, "active", void 0), (0, n._)(this, "emailAddress", ""), (0, n._)(this, "firstName", ""), (0, n._)(this, "lastName", ""), (0, n._)(this, "publicMetadata", {}), (0, n._)(this, "verification", null), (0, n._)(this, "enterpriseConnection", null), this.pathRoot = t, this.fromJSON(e)
                    }
                }
                class x extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.name = e.name, this.domain = e.domain, this.active = e.active, this.provider = e.provider, this.logoPublicUrl = e.logo_public_url, this.syncUserAttributes = e.sync_user_attributes, this.allowSubdomains = e.allow_subdomains, this.allowIdpInitiated = e.allow_idp_initiated, this.disableAdditionalIdentifications = e.disable_additional_identifications, this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at)), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "enterprise_account_connection",
                            id: this.id,
                            name: this.name,
                            domain: this.domain,
                            active: this.active,
                            protocol: this.protocol,
                            provider: this.provider,
                            logo_public_url: this.logoPublicUrl,
                            sync_user_attributes: this.syncUserAttributes,
                            allow_subdomains: this.allowSubdomains,
                            allow_idp_initiated: this.allowIdpInitiated,
                            disable_additional_identifications: this.disableAdditionalIdentifications,
                            created_at: this.createdAt.getTime(),
                            updated_at: this.updatedAt.getTime()
                        }
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "active", void 0), (0, n._)(this, "allowIdpInitiated", void 0), (0, n._)(this, "allowSubdomains", void 0), (0, n._)(this, "disableAdditionalIdentifications", void 0), (0, n._)(this, "domain", void 0), (0, n._)(this, "logoPublicUrl", ""), (0, n._)(this, "name", void 0), (0, n._)(this, "protocol", void 0), (0, n._)(this, "provider", void 0), (0, n._)(this, "syncUserAttributes", void 0), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), this.fromJSON(e)
                    }
                }
                class R extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.type = e.type), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "identification_link",
                            id: this.id,
                            type: this.type
                        }
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "type", void 0), this.fromJSON(e)
                    }
                }
                class M extends c {
                    static async create(e) {
                        var t;
                        let i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = n;
                        return "string" == typeof n.file ? (r = n.file, i = new Headers({
                            "Content-Type": "application/octet-stream"
                        })) : n.file && (r = new FormData).append("file", n.file), new M(null === (t = await c._fetch({
                            path: e,
                            method: "POST",
                            body: r,
                            headers: i
                        })) || void 0 === t ? void 0 : t.response)
                    }
                    static async delete(e) {
                        var t;
                        return new M(null === (t = await c._fetch({
                            path: e,
                            method: "DELETE"
                        })) || void 0 === t ? void 0 : t.response)
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.name = e.name, this.publicUrl = e.public_url), this
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "name", null), (0, n._)(this, "publicUrl", null), this.fromJSON(e)
                    }
                }
                class z extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.phoneNumber = e.phone_number, this.reservedForSecondFactor = e.reserved_for_second_factor, this.defaultSecondFactor = e.default_second_factor, this.verification = new O(e.verification), this.linkedTo = (e.linked_to || []).map(e => new R(e)), this.backupCodes = e.backup_codes), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "phone_number",
                            id: this.id || "",
                            phone_number: this.phoneNumber,
                            reserved_for_second_factor: this.reservedForSecondFactor,
                            default_second_factor: this.defaultSecondFactor,
                            verification: this.verification.__internal_toSnapshot(),
                            linked_to: this.linkedTo.map(e => e.__internal_toSnapshot()),
                            backup_codes: this.backupCodes
                        }
                    }
                    constructor(e, t) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "phoneNumber", ""), (0, n._)(this, "reservedForSecondFactor", !1), (0, n._)(this, "defaultSecondFactor", !1), (0, n._)(this, "linkedTo", []), (0, n._)(this, "verification", void 0), (0, n._)(this, "backupCodes", void 0), (0, n._)(this, "create", () => this._basePost({
                            body: {
                                phone_number: this.phoneNumber
                            }
                        })), (0, n._)(this, "prepareVerification", () => this._basePost({
                            action: "prepare_verification",
                            body: {
                                strategy: "phone_code"
                            }
                        })), (0, n._)(this, "attemptVerification", e => {
                            let {
                                code: t
                            } = e || {};
                            return this._basePost({
                                action: "attempt_verification",
                                body: {
                                    code: t
                                }
                            })
                        }), (0, n._)(this, "setReservedForSecondFactor", e => {
                            let {
                                reserved: t
                            } = e || {};
                            return this._basePatch({
                                body: {
                                    reserved_for_second_factor: t
                                }
                            })
                        }), (0, n._)(this, "makeDefaultSecondFactor", () => this._basePatch({
                            body: {
                                default_second_factor: !0
                            }
                        })), (0, n._)(this, "destroy", () => this._baseDelete()), (0, n._)(this, "toString", () => {
                            let e = this.phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
                            return e ? "(" + e[1] + ") " + e[2] + "-" + e[3] : this.phoneNumber
                        }), this.pathRoot = t, this.fromJSON(e)
                    }
                }

                function N(e) {
                    let {
                        pageSize: t,
                        initialPage: i,
                        ...n
                    } = e || {}, r = null != t ? t : 10;
                    return new URLSearchParams({ ...(0, A.hF)(n),
                        limit: r + "",
                        offset: ((null != i ? i : 1) - 1) * r + ""
                    })
                }
                class W extends c {
                    static async create(e, t) {
                        var i;
                        let {
                            name: n
                        } = t;
                        return new W(null === (i = await c._fetch({
                            path: "/organizations/".concat(e, "/domains"),
                            method: "POST",
                            body: {
                                name: n
                            }
                        })) || void 0 === i ? void 0 : i.response)
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.name = e.name, this.organizationId = e.organization_id, this.enrollmentMode = e.enrollment_mode, this.affiliationEmailAddress = e.affiliation_email_address, this.totalPendingSuggestions = e.total_pending_suggestions, this.totalPendingInvitations = e.total_pending_invitations, e.verification ? this.verification = {
                            status: e.verification.status,
                            strategy: e.verification.strategy,
                            attempts: e.verification.attempts,
                            expiresAt: u(e.verification.expires_at)
                        } : this.verification = null), this
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "name", void 0), (0, n._)(this, "organizationId", void 0), (0, n._)(this, "enrollmentMode", void 0), (0, n._)(this, "verification", void 0), (0, n._)(this, "affiliationEmailAddress", void 0), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), (0, n._)(this, "totalPendingInvitations", void 0), (0, n._)(this, "totalPendingSuggestions", void 0), (0, n._)(this, "prepareAffiliationVerification", async e => this._basePost({
                            path: "/organizations/".concat(this.organizationId, "/domains/").concat(this.id, "/prepare_affiliation_verification"),
                            method: "POST",
                            body: e
                        })), (0, n._)(this, "attemptAffiliationVerification", async e => this._basePost({
                            path: "/organizations/".concat(this.organizationId, "/domains/").concat(this.id, "/attempt_affiliation_verification"),
                            method: "POST",
                            body: e
                        })), (0, n._)(this, "updateEnrollmentMode", e => this._basePost({
                            path: "/organizations/".concat(this.organizationId, "/domains/").concat(this.id, "/update_enrollment_mode"),
                            body: e
                        })), (0, n._)(this, "delete", () => this._baseDelete({
                            path: "/organizations/".concat(this.organizationId, "/domains/").concat(this.id)
                        })), this.fromJSON(e)
                    }
                }
                class L extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.organizationId = e.organization_id, this.status = e.status, this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at), e.public_user_data && (this.publicUserData = new eo(e.public_user_data))), this
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "organizationId", void 0), (0, n._)(this, "status", void 0), (0, n._)(this, "publicUserData", void 0), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), (0, n._)(this, "accept", async () => await this._basePost({
                            path: "/organizations/".concat(this.organizationId, "/membership_requests/").concat(this.id, "/accept")
                        })), (0, n._)(this, "reject", async () => await this._basePost({
                            path: "/organizations/".concat(this.organizationId, "/membership_requests/").concat(this.id, "/reject")
                        })), this.fromJSON(e)
                    }
                }
                class F extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.key = e.key, this.name = e.name, this.description = e.description, this.type = e.type, this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at)), this
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "key", void 0), (0, n._)(this, "name", void 0), (0, n._)(this, "description", void 0), (0, n._)(this, "type", void 0), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), this.fromJSON(e)
                    }
                }
                class D extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.key = e.key, this.name = e.name, this.description = e.description, this.permissions = e.permissions.map(e => new F(e)), this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at)), this
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "key", void 0), (0, n._)(this, "name", void 0), (0, n._)(this, "description", void 0), (0, n._)(this, "permissions", []), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), this.fromJSON(e)
                    }
                }
                class j extends c {
                    static async create(e) {
                        var t;
                        return new j(null === (t = await c._fetch({
                            path: "/organizations",
                            method: "POST",
                            body: e
                        })) || void 0 === t ? void 0 : t.response)
                    }
                    static async get(e) {
                        var t;
                        return new j(null === (t = await c._fetch({
                            path: "/organizations/".concat(e),
                            method: "GET"
                        })) || void 0 === t ? void 0 : t.response)
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.name = e.name, this.slug = e.slug, this.imageUrl = e.image_url, this.hasImage = e.has_image, this.publicMetadata = e.public_metadata, this.membersCount = e.members_count, this.pendingInvitationsCount = e.pending_invitations_count, this.maxAllowedMemberships = e.max_allowed_memberships, this.adminDeleteEnabled = e.admin_delete_enabled, this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at)), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "organization",
                            id: this.id,
                            name: this.name,
                            slug: this.slug,
                            image_url: this.imageUrl,
                            has_image: this.hasImage,
                            public_metadata: this.publicMetadata,
                            members_count: this.membersCount,
                            pending_invitations_count: this.pendingInvitationsCount,
                            max_allowed_memberships: this.maxAllowedMemberships,
                            admin_delete_enabled: this.adminDeleteEnabled,
                            created_at: this.createdAt.getTime(),
                            updated_at: this.updatedAt.getTime()
                        }
                    }
                    async reload(e) {
                        var t;
                        let {
                            rotatingTokenNonce: i
                        } = e || {}, n = null === (t = await c._fetch({
                            path: "/organizations/".concat(this.id),
                            method: "GET",
                            rotatingTokenNonce: i
                        }, {
                            forceUpdateClient: !0
                        })) || void 0 === t ? void 0 : t.response;
                        return this.fromJSON(n)
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "pathRoot", "/organizations"), (0, n._)(this, "id", void 0), (0, n._)(this, "name", void 0), (0, n._)(this, "slug", void 0), (0, n._)(this, "imageUrl", void 0), (0, n._)(this, "hasImage", void 0), (0, n._)(this, "publicMetadata", {}), (0, n._)(this, "adminDeleteEnabled", void 0), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), (0, n._)(this, "membersCount", 0), (0, n._)(this, "pendingInvitationsCount", 0), (0, n._)(this, "maxAllowedMemberships", void 0), (0, n._)(this, "update", async e => this._basePatch({
                            body: e
                        })), (0, n._)(this, "getRoles", async e => await c._fetch({
                            path: "/organizations/".concat(this.id, "/roles"),
                            method: "GET",
                            search: N(e)
                        }, {
                            forceUpdateClient: !0
                        }).then(e => {
                            let {
                                data: t,
                                total_count: i
                            } = null == e ? void 0 : e.response;
                            return {
                                total_count: i,
                                data: t.map(e => new D(e))
                            }
                        })), (0, n._)(this, "getDomains", async e => await c._fetch({
                            path: "/organizations/".concat(this.id, "/domains"),
                            method: "GET",
                            search: N(e)
                        }, {
                            forceUpdateClient: !0
                        }).then(e => {
                            let {
                                data: t,
                                total_count: i
                            } = null == e ? void 0 : e.response;
                            return {
                                total_count: i,
                                data: t.map(e => new W(e))
                            }
                        })), (0, n._)(this, "getDomain", async e => {
                            var t;
                            let {
                                domainId: i
                            } = e;
                            return new W(null === (t = await c._fetch({
                                path: "/organizations/".concat(this.id, "/domains/").concat(i),
                                method: "GET"
                            })) || void 0 === t ? void 0 : t.response)
                        }), (0, n._)(this, "getMembershipRequests", async e => await c._fetch({
                            path: "/organizations/".concat(this.id, "/membership_requests"),
                            method: "GET",
                            search: N(e)
                        }).then(e => {
                            let {
                                data: t,
                                total_count: i
                            } = null == e ? void 0 : e.response;
                            return {
                                total_count: i,
                                data: t.map(e => new L(e))
                            }
                        })), (0, n._)(this, "createDomain", async e => W.create(this.id, {
                            name: e
                        })), (0, n._)(this, "getMemberships", async e => await c._fetch({
                            path: "/organizations/".concat(this.id, "/memberships"),
                            method: "GET",
                            search: N({ ...e,
                                paginated: !0
                            })
                        }).then(e => {
                            let {
                                data: t,
                                total_count: i
                            } = null == e ? void 0 : e.response;
                            return {
                                total_count: i,
                                data: t.map(e => new K(e))
                            }
                        })), (0, n._)(this, "getInvitations", async e => await c._fetch({
                            path: "/organizations/".concat(this.id, "/invitations"),
                            method: "GET",
                            search: N(e)
                        }, {
                            forceUpdateClient: !0
                        }).then(e => {
                            let {
                                data: t,
                                total_count: i
                            } = null == e ? void 0 : e.response;
                            return {
                                total_count: i,
                                data: t.map(e => new V(e))
                            }
                        })), (0, n._)(this, "addMember", async e => {
                            let {
                                userId: t,
                                role: i
                            } = e;
                            return await c._fetch({
                                method: "POST",
                                path: "/organizations/".concat(this.id, "/memberships"),
                                body: {
                                    userId: t,
                                    role: i
                                }
                            }).then(e => new K(null == e ? void 0 : e.response))
                        }), (0, n._)(this, "inviteMember", async e => V.create(this.id, e)), (0, n._)(this, "inviteMembers", async e => V.createBulk(this.id, e)), (0, n._)(this, "updateMember", async e => {
                            let {
                                userId: t,
                                role: i
                            } = e;
                            return await c._fetch({
                                method: "PATCH",
                                path: "/organizations/".concat(this.id, "/memberships/").concat(t),
                                body: {
                                    role: i
                                }
                            }).then(e => new K(null == e ? void 0 : e.response))
                        }), (0, n._)(this, "removeMember", async e => await c._fetch({
                            method: "DELETE",
                            path: "/organizations/".concat(this.id, "/memberships/").concat(e)
                        }).then(e => new K(null == e ? void 0 : e.response))), (0, n._)(this, "destroy", async () => this._baseDelete()), (0, n._)(this, "setLogo", async e => {
                            let t, i, {
                                file: n
                            } = e;
                            return null === n ? await c._fetch({
                                path: "/organizations/".concat(this.id, "/logo"),
                                method: "DELETE"
                            }).then(e => new j(null == e ? void 0 : e.response)) : ("string" == typeof n ? (t = n, i = new Headers({
                                "Content-Type": "application/octet-stream"
                            })) : (t = new FormData).append("file", n), await c._fetch({
                                path: "/organizations/".concat(this.id, "/logo"),
                                method: "PUT",
                                body: t,
                                headers: i
                            }).then(e => new j(null == e ? void 0 : e.response)))
                        }), this.fromJSON(e)
                    }
                }
                class V extends c {
                    static async create(e, t) {
                        var i;
                        let {
                            emailAddress: n,
                            role: r
                        } = t;
                        return new V(null === (i = await c._fetch({
                            path: "/organizations/".concat(e, "/invitations"),
                            method: "POST",
                            body: {
                                email_address: n,
                                role: r
                            }
                        })) || void 0 === i ? void 0 : i.response)
                    }
                    static async createBulk(e, t) {
                        var i;
                        let {
                            emailAddresses: n,
                            role: r
                        } = t;
                        return (null === (i = await c._fetch({
                            path: "/organizations/".concat(e, "/invitations/bulk"),
                            method: "POST",
                            body: {
                                email_address: n,
                                role: r
                            }
                        })) || void 0 === i ? void 0 : i.response).map(e => new V(e))
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.emailAddress = e.email_address, this.organizationId = e.organization_id, this.publicMetadata = e.public_metadata, this.role = e.role, this.status = e.status, this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at)), this
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "emailAddress", void 0), (0, n._)(this, "organizationId", void 0), (0, n._)(this, "publicMetadata", {}), (0, n._)(this, "status", void 0), (0, n._)(this, "role", void 0), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), (0, n._)(this, "revoke", async () => await this._basePost({
                            path: "/organizations/".concat(this.organizationId, "/invitations/").concat(this.id, "/revoke")
                        })), this.fromJSON(e)
                    }
                }
                class K extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.organization = new j(e.organization), this.publicMetadata = e.public_metadata, e.public_user_data && (this.publicUserData = new eo(e.public_user_data)), this.permissions = Array.isArray(e.permissions) ? [...e.permissions] : [], this.role = e.role, this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at)), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "organization_membership",
                            id: this.id,
                            organization: this.organization.__internal_toSnapshot(),
                            public_metadata: this.publicMetadata,
                            public_user_data: this.publicUserData.__internal_toSnapshot(),
                            permissions: this.permissions,
                            role: this.role,
                            created_at: this.createdAt.getTime(),
                            updated_at: this.updatedAt.getTime()
                        }
                    }
                    reload(e) {
                        (0, s.RE)("OrganizationMembership")
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "publicMetadata", {}), (0, n._)(this, "publicUserData", void 0), (0, n._)(this, "organization", void 0), (0, n._)(this, "permissions", []), (0, n._)(this, "role", void 0), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), (0, n._)(this, "destroy", async () => await this._baseDelete({
                            path: "/organizations/".concat(this.organization.id, "/memberships/").concat(this.publicUserData.userId)
                        })), (0, n._)(this, "update", async e => {
                            let {
                                role: t
                            } = e;
                            return await this._basePatch({
                                path: "/organizations/".concat(this.organization.id, "/memberships/").concat(this.publicUserData.userId),
                                body: {
                                    role: t
                                }
                            })
                        }), this.fromJSON(e)
                    }
                }(0, n._)(K, "retrieve", async e => await c._fetch({
                    path: "/me/organization_memberships",
                    method: "GET",
                    search: N({ ...e,
                        paginated: !0
                    })
                }).then(e => {
                    let {
                        data: t,
                        total_count: i
                    } = null == e ? void 0 : e.response;
                    return {
                        total_count: i,
                        data: t.map(e => new K(e))
                    }
                }));
                class $ extends c {
                    static async retrieve(e) {
                        return await c._fetch({
                            path: "/me/organization_suggestions",
                            method: "GET",
                            search: N(e)
                        }).then(e => {
                            let {
                                data: t,
                                total_count: i
                            } = null == e ? void 0 : e.response;
                            return {
                                total_count: i,
                                data: t.map(e => new $(e))
                            }
                        })
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.status = e.status, this.publicOrganizationData = {
                            hasImage: e.public_organization_data.has_image,
                            imageUrl: e.public_organization_data.image_url,
                            name: e.public_organization_data.name,
                            id: e.public_organization_data.id,
                            slug: e.public_organization_data.slug
                        }, this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at)), this
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "publicOrganizationData", void 0), (0, n._)(this, "status", void 0), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), (0, n._)(this, "accept", async () => await this._basePost({
                            path: "/me/organization_suggestions/".concat(this.id, "/accept")
                        })), this.fromJSON(e)
                    }
                }
                class J extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.provider = e.provider, this.providerUserId = e.provider_user_id, this.active = e.active, this.emailAddress = e.email_address, this.firstName = e.first_name, this.lastName = e.last_name, e.verification && (this.verification = new O(e.verification)), e.saml_connection && (this.samlConnection = new B(e.saml_connection))), this
                    }
                    __internal_toSnapshot() {
                        var e, t;
                        return {
                            object: "saml_account",
                            id: this.id,
                            provider: this.provider,
                            provider_user_id: this.providerUserId,
                            active: this.active,
                            email_address: this.emailAddress,
                            first_name: this.firstName,
                            last_name: this.lastName,
                            verification: (null === (e = this.verification) || void 0 === e ? void 0 : e.__internal_toSnapshot()) || null,
                            saml_connection: null === (t = this.samlConnection) || void 0 === t ? void 0 : t.__internal_toSnapshot()
                        }
                    }
                    constructor(e, t) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "provider", "saml_custom"), (0, n._)(this, "providerUserId", null), (0, n._)(this, "active", !1), (0, n._)(this, "emailAddress", ""), (0, n._)(this, "firstName", ""), (0, n._)(this, "lastName", ""), (0, n._)(this, "verification", null), (0, n._)(this, "samlConnection", null), this.pathRoot = t, this.fromJSON(e)
                    }
                }
                class B extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.name = e.name, this.domain = e.domain, this.active = e.active, this.provider = e.provider, this.syncUserAttributes = e.sync_user_attributes, this.allowSubdomains = e.allow_subdomains, this.allowIdpInitiated = e.allow_idp_initiated, this.disableAdditionalIdentifications = e.disable_additional_identifications, this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at)), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "saml_account_connection",
                            id: this.id,
                            name: this.name,
                            domain: this.domain,
                            active: this.active,
                            provider: this.provider,
                            sync_user_attributes: this.syncUserAttributes,
                            allow_subdomains: this.allowSubdomains,
                            allow_idp_initiated: this.allowIdpInitiated,
                            disable_additional_identifications: this.disableAdditionalIdentifications,
                            created_at: this.createdAt.getTime(),
                            updated_at: this.updatedAt.getTime()
                        }
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "name", void 0), (0, n._)(this, "domain", void 0), (0, n._)(this, "active", void 0), (0, n._)(this, "provider", void 0), (0, n._)(this, "syncUserAttributes", void 0), (0, n._)(this, "allowSubdomains", void 0), (0, n._)(this, "allowIdpInitiated", void 0), (0, n._)(this, "disableAdditionalIdentifications", void 0), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), this.fromJSON(e)
                    }
                }
                var q = i(8300),
                    Z = i(2086),
                    G = i(6210),
                    H = i(7518),
                    Y = i(7125),
                    X = i(153),
                    Q = i(2208),
                    ee = i(8026);
                class et extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.status = e.status, this.session = new er(e.session), this.level = e.level, this.supportedFirstFactors = (0, A.aw)(e.supported_first_factors), this.supportedSecondFactors = (0, A.aw)(e.supported_second_factors), this.firstFactorVerification = new O(e.first_factor_verification), this.secondFactorVerification = new O(e.second_factor_verification)), this
                    }
                    constructor(e = null) {
                        super(), (0, n._)(this, "status", void 0), (0, n._)(this, "level", void 0), (0, n._)(this, "session", void 0), (0, n._)(this, "supportedFirstFactors", []), (0, n._)(this, "supportedSecondFactors", []), (0, n._)(this, "firstFactorVerification", new O(null)), (0, n._)(this, "secondFactorVerification", new O(null)), this.fromJSON(e)
                    }
                }
                var ei = new WeakMap,
                    en = new WeakSet;
                class er extends c {
                    static isSessionResource(e) {
                        return !!e && e instanceof er
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.status = e.status, this.expireAt = u(e.expire_at), this.abandonAt = u(e.abandon_at), this.factorVerificationAge = e.factor_verification_age, this.lastActiveAt = u(e.last_active_at || void 0), this.lastActiveOrganizationId = e.last_active_organization_id, this.actor = e.actor, this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at), this.user = new ew(e.user), this.tasks = e.tasks, e.public_user_data && (this.publicUserData = new eo(e.public_user_data)), this.lastActiveToken = e.last_active_token ? new ev(e.last_active_token) : null), this
                    }
                    __internal_toSnapshot() {
                        var e, t;
                        return {
                            object: "session",
                            id: this.id,
                            status: this.status,
                            expire_at: this.expireAt.getTime(),
                            abandon_at: this.abandonAt.getTime(),
                            factor_verification_age: this.factorVerificationAge,
                            last_active_at: this.lastActiveAt.getTime(),
                            last_active_organization_id: this.lastActiveOrganizationId,
                            actor: this.actor,
                            tasks: this.tasks,
                            user: (null === (e = this.user) || void 0 === e ? void 0 : e.__internal_toSnapshot()) || null,
                            public_user_data: this.publicUserData.__internal_toSnapshot(),
                            last_active_token: (null === (t = this.lastActiveToken) || void 0 === t ? void 0 : t.__internal_toSnapshot()) || null,
                            created_at: this.createdAt.getTime(),
                            updated_at: this.updatedAt.getTime()
                        }
                    }
                    async _getToken(e) {
                        if (!this.user) return null;
                        let {
                            leewayInSeconds: t,
                            template: i,
                            skipCache: n = !1
                        } = e || {}, r = void 0 === (null == e ? void 0 : e.organizationId) ? this.lastActiveOrganizationId : null == e ? void 0 : e.organizationId;
                        if (!i && Number(t) >= 60) throw Error("Leeway can not exceed the token lifespan (60 seconds)");
                        let a = (0, G._)(this, en, ea).call(this, i, r),
                            s = n ? void 0 : f.get({
                                tokenId: a
                            }, t),
                            o = !i && r === this.lastActiveOrganizationId;
                        if (s) {
                            let e = await s.tokenResolver;
                            return o && ee.Y.dispatch(ee.U.TokenUpdate, {
                                token: e
                            }), e.getRawString() || null
                        }
                        let l = i ? "".concat(this.path(), "/tokens/").concat(i) : "".concat(this.path(), "/tokens"),
                            c = i ? {} : {
                                organizationId: r
                            },
                            d = ev.create(l, c);
                        return f.set({
                            tokenId: a,
                            tokenResolver: d
                        }), d.then(e => (o && ee.Y.dispatch(ee.U.TokenUpdate, {
                            token: e
                        }), e.getRawString() || null))
                    }
                    constructor(e) {
                        super(), (0, H._)(this, en), (0, n._)(this, "pathRoot", "/client/sessions"), (0, n._)(this, "id", void 0), (0, n._)(this, "status", void 0), (0, n._)(this, "lastActiveAt", void 0), (0, n._)(this, "lastActiveToken", void 0), (0, n._)(this, "lastActiveOrganizationId", void 0), (0, n._)(this, "actor", void 0), (0, n._)(this, "user", void 0), (0, n._)(this, "publicUserData", void 0), (0, n._)(this, "factorVerificationAge", null), (0, n._)(this, "tasks", null), (0, n._)(this, "expireAt", void 0), (0, n._)(this, "abandonAt", void 0), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), (0, n._)(this, "end", () => (f.clear(), this._basePost({
                            action: "end"
                        }))), (0, n._)(this, "remove", () => (f.clear(), this._basePost({
                            action: "remove"
                        }))), (0, n._)(this, "touch", () => this._basePost({
                            action: "touch",
                            body: {
                                active_organization_id: this.lastActiveOrganizationId
                            }
                        })), (0, n._)(this, "clearCache", () => f.clear()), (0, n._)(this, "getToken", async e => (0, X.X)(() => this._getToken(e), {
                            shouldRetry: (e, t) => !(0, k.ix)(e) && t < 4
                        })), (0, n._)(this, "checkAuthorization", e => {
                            var t, i;
                            let n = ((null === (t = this.user) || void 0 === t ? void 0 : t.organizationMemberships) || []).find(e => e.organization.id === this.lastActiveOrganizationId);
                            return (0, Y.Q)({
                                userId: null === (i = this.user) || void 0 === i ? void 0 : i.id,
                                factorVerificationAge: this.factorVerificationAge,
                                orgId: null == n ? void 0 : n.id,
                                orgRole: null == n ? void 0 : n.role,
                                orgPermissions: null == n ? void 0 : n.permissions
                            })(e)
                        }), (0, Z._)(this, ei, {
                            writable: !0,
                            value: e => {
                                e && f.set({
                                    tokenId: (0, G._)(this, en, ea).call(this),
                                    tokenResolver: Promise.resolve(e)
                                })
                            }
                        }), (0, n._)(this, "startVerification", async e => {
                            var t;
                            let {
                                level: i
                            } = e;
                            return new et(null === (t = await c._fetch({
                                method: "POST",
                                path: "/client/sessions/".concat(this.id, "/verify"),
                                body: {
                                    level: i
                                }
                            })) || void 0 === t ? void 0 : t.response)
                        }), (0, n._)(this, "prepareFirstFactorVerification", async e => {
                            var t;
                            let i;
                            switch (e.strategy) {
                                case "email_code":
                                    i = {
                                        emailAddressId: e.emailAddressId
                                    };
                                    break;
                                case "phone_code":
                                    i = {
                                        phoneNumberId: e.phoneNumberId,
                                        default: e.default
                                    };
                                    break;
                                case "passkey":
                                    i = {};
                                    break;
                                default:
                                    (0, s.Rz)("Session.prepareFirstFactorVerification", e.strategy)
                            }
                            return new et(null === (t = await c._fetch({
                                method: "POST",
                                path: "/client/sessions/".concat(this.id, "/verify/prepare_first_factor"),
                                body: { ...i,
                                    strategy: e.strategy
                                }
                            })) || void 0 === t ? void 0 : t.response)
                        }), (0, n._)(this, "attemptFirstFactorVerification", async e => {
                            var t;
                            let i;
                            return i = "passkey" === e.strategy ? {
                                publicKeyCredential: JSON.stringify((0, U.zQ)(e.publicKeyCredential))
                            } : { ...e
                            }, new et(null === (t = await c._fetch({
                                method: "POST",
                                path: "/client/sessions/".concat(this.id, "/verify/attempt_first_factor"),
                                body: { ...i,
                                    strategy: e.strategy
                                }
                            })) || void 0 === t ? void 0 : t.response)
                        }), (0, n._)(this, "verifyWithPasskey", async () => {
                            let {
                                nonce: e = null
                            } = (await this.prepareFirstFactorVerification({
                                strategy: "passkey"
                            })).firstFactorVerification, t = er.clerk.__internal_isWebAuthnSupported || Q.iW, i = er.clerk.__internal_getPublicCredentials || U.t1;
                            if (!t()) throw new k.RK("Passkeys are not supported", {
                                code: "passkey_not_supported"
                            });
                            let n = e ? (0, U.N7)(JSON.parse(e)) : null;
                            n || (0, s.$C)("get");
                            let {
                                publicKeyCredential: r,
                                error: a
                            } = await i({
                                publicKeyOptions: n,
                                conditionalUI: !1
                            });
                            if (!r) throw a;
                            return this.attemptFirstFactorVerification({
                                strategy: "passkey",
                                publicKeyCredential: r
                            })
                        }), (0, n._)(this, "prepareSecondFactorVerification", async e => {
                            var t;
                            return new et(null === (t = await c._fetch({
                                method: "POST",
                                path: "/client/sessions/".concat(this.id, "/verify/prepare_second_factor"),
                                body: e
                            })) || void 0 === t ? void 0 : t.response)
                        }), (0, n._)(this, "attemptSecondFactorVerification", async e => {
                            var t;
                            return new et(null === (t = await c._fetch({
                                method: "POST",
                                path: "/client/sessions/".concat(this.id, "/verify/attempt_second_factor"),
                                body: e
                            })) || void 0 === t ? void 0 : t.response)
                        }), this.fromJSON(e), (0, q._)(this, ei).call(this, this.lastActiveToken)
                    }
                }

                function ea(e, t) {
                    let i = void 0 === t ? this.lastActiveOrganizationId : t;
                    return [this.id, e, i, this.updatedAt.getTime()].filter(Boolean).join("-")
                }
                class es extends c {
                    static async create() {
                        return c._fetch({
                            path: "/me/passkeys",
                            method: "POST"
                        }).then(e => new es(null == e ? void 0 : e.response))
                    }
                    static async attemptVerification(e, t) {
                        let i = (0, U.ku)(t);
                        return c._fetch({
                            path: "/me/passkeys/".concat(e, "/attempt_verification"),
                            method: "POST",
                            body: {
                                strategy: "passkey",
                                publicKeyCredential: JSON.stringify(i)
                            }
                        }).then(e => new es(null == e ? void 0 : e.response))
                    }
                    static async registerPasskey() {
                        var e;
                        let t = es.clerk.__internal_isWebAuthnSupported || Q.iW,
                            i = es.clerk.__internal_createPublicCredentials || U.pr,
                            n = es.clerk.__internal_isWebAuthnPlatformAuthenticatorSupported || Q.C6;
                        if (!t()) throw new k.RK("Passkeys are not supported on this device.", {
                            code: "passkey_not_supported"
                        });
                        let r = await this.create(),
                            {
                                verification: a
                            } = r,
                            o = null == a ? void 0 : a.publicKey;
                        if (o || (0, s.$C)("create"), (null === (e = o.authenticatorSelection) || void 0 === e ? void 0 : e.authenticatorAttachment) === "platform" && !await n()) throw new k.RK("Registration requires a platform authenticator but the device does not support it.", {
                            code: "passkey_pa_not_supported"
                        });
                        let {
                            publicKeyCredential: l,
                            error: c
                        } = await i(o);
                        if (!l) throw c;
                        return this.attemptVerification(r.id, l)
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.name = e.name, this.lastUsedAt = e.last_used_at ? u(e.last_used_at) : null, this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at), e.verification && (this.verification = new C(e.verification))), this
                    }
                    __internal_toSnapshot() {
                        var e, t;
                        return {
                            object: "passkey",
                            id: this.id,
                            name: this.name,
                            verification: (null === (e = this.verification) || void 0 === e ? void 0 : e.__internal_toSnapshot()) || null,
                            last_used_at: (null === (t = this.lastUsedAt) || void 0 === t ? void 0 : t.getTime()) || null,
                            created_at: this.createdAt.getTime(),
                            updated_at: this.updatedAt.getTime()
                        }
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "pathRoot", "/me/passkeys"), (0, n._)(this, "verification", null), (0, n._)(this, "name", null), (0, n._)(this, "lastUsedAt", null), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), (0, n._)(this, "update", e => this._basePatch({
                            body: e
                        })), (0, n._)(this, "delete", async () => {
                            var e;
                            return new v(null === (e = await c._fetch({
                                path: this.path(),
                                method: "DELETE"
                            })) || void 0 === e ? void 0 : e.response)
                        }), this.fromJSON(e)
                    }
                }
                class eo {
                    fromJSON(e) {
                        return e && (this.firstName = e.first_name, this.lastName = e.last_name, this.imageUrl = e.image_url, this.hasImage = e.has_image, this.identifier = e.identifier, this.userId = e.user_id), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "public_user_data",
                            id: this.userId || "",
                            first_name: this.firstName,
                            last_name: this.lastName,
                            image_url: this.imageUrl,
                            has_image: this.hasImage,
                            identifier: this.identifier,
                            user_id: this.userId
                        }
                    }
                    constructor(e) {
                        (0, n._)(this, "firstName", void 0), (0, n._)(this, "lastName", void 0), (0, n._)(this, "imageUrl", void 0), (0, n._)(this, "hasImage", void 0), (0, n._)(this, "identifier", void 0), (0, n._)(this, "userId", void 0), this.fromJSON(e)
                    }
                }
                let el = e => ({
                    id: e.id,
                    deviceType: e.device_type,
                    browserName: e.browser_name,
                    browserVersion: e.browser_version,
                    country: e.country,
                    city: e.city,
                    isMobile: e.is_mobile,
                    ipAddress: e.ip_address
                });
                class ec extends c {
                    static retrieve() {
                        var e;
                        let t = null === (e = c.clerk.session) || void 0 === e ? void 0 : e.id;
                        return this.clerk.getFapiClient().request({
                            method: "GET",
                            path: "/me/sessions/active",
                            sessionId: t
                        }).then(e => e.payload.map(e => new ec(e, "/me/sessions"))).catch(() => [])
                    }
                    revoke() {
                        return this._basePost({
                            action: "revoke",
                            body: {}
                        })
                    }
                    fromJSON(e) {
                        var t;
                        return e && (this.id = e.id, this.status = e.status, this.expireAt = u(e.expire_at), this.abandonAt = u(e.abandon_at), this.lastActiveAt = u(e.last_active_at || void 0), this.latestActivity = el(null !== (t = e.latest_activity) && void 0 !== t ? t : {}), this.actor = e.actor), this
                    }
                    constructor(e, t) {
                        super(), (0, n._)(this, "pathRoot", ""), (0, n._)(this, "id", void 0), (0, n._)(this, "status", void 0), (0, n._)(this, "abandonAt", void 0), (0, n._)(this, "expireAt", void 0), (0, n._)(this, "lastActiveAt", void 0), (0, n._)(this, "latestActivity", void 0), (0, n._)(this, "actor", void 0), this.pathRoot = t, this.fromJSON(e)
                    }
                }
                var ed = i(1235),
                    eu = i(33);
                class eh extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.status = e.status, this.supportedIdentifiers = e.supported_identifiers, this.identifier = e.identifier, this.supportedFirstFactors = (0, A.aw)(e.supported_first_factors), this.supportedSecondFactors = (0, A.aw)(e.supported_second_factors), this.firstFactorVerification = new O(e.first_factor_verification), this.secondFactorVerification = new O(e.second_factor_verification), this.createdSessionId = e.created_session_id, this.userData = new ep(e.user_data)), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "sign_in",
                            id: this.id || "",
                            status: this.status || null,
                            supported_identifiers: this.supportedIdentifiers,
                            supported_first_factors: (0, A.zb)(this.supportedFirstFactors),
                            supported_second_factors: (0, A.zb)(this.supportedSecondFactors),
                            first_factor_verification: this.firstFactorVerification.__internal_toSnapshot(),
                            second_factor_verification: this.secondFactorVerification.__internal_toSnapshot(),
                            identifier: this.identifier,
                            created_session_id: this.createdSessionId,
                            user_data: this.userData.__internal_toSnapshot()
                        }
                    }
                    constructor(e = null) {
                        super(), (0, n._)(this, "pathRoot", "/client/sign_ins"), (0, n._)(this, "id", void 0), (0, n._)(this, "status", null), (0, n._)(this, "supportedIdentifiers", []), (0, n._)(this, "supportedFirstFactors", []), (0, n._)(this, "supportedSecondFactors", null), (0, n._)(this, "firstFactorVerification", new O(null)), (0, n._)(this, "secondFactorVerification", new O(null)), (0, n._)(this, "identifier", null), (0, n._)(this, "createdSessionId", null), (0, n._)(this, "userData", new ep(null)), (0, n._)(this, "create", e => this._basePost({
                            path: this.pathRoot,
                            body: e
                        })), (0, n._)(this, "resetPassword", e => this._basePost({
                            body: e,
                            action: "reset_password"
                        })), (0, n._)(this, "prepareFirstFactor", e => {
                            let t;
                            switch (e.strategy) {
                                case "passkey":
                                    t = {};
                                    break;
                                case "email_link":
                                    t = {
                                        emailAddressId: e.emailAddressId,
                                        redirectUrl: e.redirectUrl
                                    };
                                    break;
                                case "email_code":
                                case "reset_password_email_code":
                                    t = {
                                        emailAddressId: e.emailAddressId
                                    };
                                    break;
                                case "phone_code":
                                    t = {
                                        phoneNumberId: e.phoneNumberId,
                                        default: e.default
                                    };
                                    break;
                                case "web3_metamask_signature":
                                case "web3_coinbase_wallet_signature":
                                case "web3_okx_wallet_signature":
                                    t = {
                                        web3WalletId: e.web3WalletId
                                    };
                                    break;
                                case "reset_password_phone_code":
                                    t = {
                                        phoneNumberId: e.phoneNumberId
                                    };
                                    break;
                                case "saml":
                                case "enterprise_sso":
                                    t = {
                                        redirectUrl: e.redirectUrl,
                                        actionCompleteRedirectUrl: e.actionCompleteRedirectUrl
                                    };
                                    break;
                                default:
                                    (0, s.Rz)("SignIn.prepareFirstFactor", e.strategy)
                            }
                            return this._basePost({
                                body: { ...t,
                                    strategy: e.strategy
                                },
                                action: "prepare_first_factor"
                            })
                        }), (0, n._)(this, "attemptFirstFactor", e => {
                            let t;
                            return t = "passkey" === e.strategy ? {
                                publicKeyCredential: JSON.stringify((0, U.zQ)(e.publicKeyCredential))
                            } : { ...e
                            }, this._basePost({
                                body: { ...t,
                                    strategy: e.strategy
                                },
                                action: "attempt_first_factor"
                            })
                        }), (0, n._)(this, "createEmailLinkFlow", () => {
                            let {
                                run: e,
                                stop: t
                            } = y();
                            return {
                                startEmailLinkFlow: async i => {
                                    let {
                                        emailAddressId: n,
                                        redirectUrl: r
                                    } = i;
                                    return this.id || (0, s.C)("SignIn"), await this.prepareFirstFactor({
                                        strategy: "email_link",
                                        emailAddressId: n,
                                        redirectUrl: r
                                    }), new Promise((i, n) => {
                                        e(() => this.reload().then(e => {
                                            let n = e.firstFactorVerification.status;
                                            ("verified" === n || "expired" === n) && (t(), i(e))
                                        }).catch(e => {
                                            t(), n(e)
                                        }))
                                    })
                                },
                                cancelEmailLinkFlow: t
                            }
                        }), (0, n._)(this, "prepareSecondFactor", e => this._basePost({
                            body: e,
                            action: "prepare_second_factor"
                        })), (0, n._)(this, "attemptSecondFactor", e => this._basePost({
                            body: e,
                            action: "attempt_second_factor"
                        })), (0, n._)(this, "authenticateWithRedirect", async e => {
                            let {
                                strategy: t,
                                redirectUrl: i,
                                redirectUrlComplete: n,
                                identifier: r
                            } = e || {}, {
                                firstFactorVerification: a
                            } = ("saml" === t || "enterprise_sso" === t) && this.id ? await this.prepareFirstFactor({
                                strategy: t,
                                redirectUrl: eh.clerk.buildUrlWithAuth(i),
                                actionCompleteRedirectUrl: n
                            }) : await this.create({
                                strategy: t,
                                identifier: r,
                                redirectUrl: eh.clerk.buildUrlWithAuth(i),
                                actionCompleteRedirectUrl: n
                            }), {
                                status: o,
                                externalVerificationRedirectURL: l
                            } = a;
                            "unverified" === o && l ? (0, ed.T7)(l) : (0, s.Ws)(o, eh.fapiClient.buildEmailAddress("support"))
                        }), (0, n._)(this, "authenticateWithWeb3", async e => {
                            var t;
                            let i;
                            let {
                                identifier: n,
                                generateSignature: r,
                                strategy: a = "web3_metamask_signature"
                            } = e || {}, o = a.replace("web3_", "").replace("_signature", "");
                            "function" != typeof r && (0, s.WC)("generateSignature"), await this.create({
                                identifier: n
                            });
                            let l = null === (t = this.supportedFirstFactors) || void 0 === t ? void 0 : t.find(e => e.strategy === a);
                            l || (0, s.lb)("SignIn"), await this.prepareFirstFactor(l);
                            let {
                                message: c
                            } = this.firstFactorVerification;
                            c || (0, s.lb)("SignIn");
                            try {
                                i = await r({
                                    identifier: n,
                                    nonce: c,
                                    provider: o
                                })
                            } catch (e) {
                                if ("coinbase_wallet" === o && 4001 === e.code) i = await r({
                                    identifier: n,
                                    nonce: c,
                                    provider: o
                                });
                                else throw e
                            }
                            return this.attemptFirstFactor({
                                signature: i,
                                strategy: a
                            })
                        }), (0, n._)(this, "authenticateWithMetamask", async () => {
                            let e = await (0, ed.M8)();
                            return this.authenticateWithWeb3({
                                identifier: e,
                                generateSignature: ed.wO,
                                strategy: "web3_metamask_signature"
                            })
                        }), (0, n._)(this, "authenticateWithCoinbaseWallet", async () => {
                            let e = await (0, ed.$0)();
                            return this.authenticateWithWeb3({
                                identifier: e,
                                generateSignature: ed.dR,
                                strategy: "web3_coinbase_wallet_signature"
                            })
                        }), (0, n._)(this, "authenticateWithOKXWallet", async () => {
                            let e = await (0, ed.ZE)();
                            return this.authenticateWithWeb3({
                                identifier: e,
                                generateSignature: ed.C3,
                                strategy: "web3_okx_wallet_signature"
                            })
                        }), (0, n._)(this, "authenticateWithPasskey", async e => {
                            let {
                                flow: t
                            } = e || {}, i = eh.clerk.__internal_isWebAuthnSupported || Q.iW, n = eh.clerk.__internal_getPublicCredentials || U.t1, r = eh.clerk.__internal_isWebAuthnAutofillSupported || Q.h_;
                            if (!i()) throw new k.RK("Passkeys are not supported", {
                                code: "passkey_not_supported"
                            });
                            if ("autofill" === t || "discoverable" === t) await this.create({
                                strategy: "passkey"
                            });
                            else {
                                let e = this.supportedFirstFactors.find(e => "passkey" === e.strategy);
                                e || (0, s.ep)(), await this.prepareFirstFactor(e)
                            }
                            let {
                                nonce: a
                            } = this.firstFactorVerification, o = a ? (0, U.N7)(JSON.parse(a)) : null;
                            o || (0, s.$C)("get");
                            let l = !1;
                            "autofill" === t && (l = await r());
                            let {
                                publicKeyCredential: c,
                                error: d
                            } = await n({
                                publicKeyOptions: o,
                                conditionalUI: l
                            });
                            if (!c) throw d;
                            return this.attemptFirstFactor({
                                publicKeyCredential: c,
                                strategy: "passkey"
                            })
                        }), (0, n._)(this, "validatePassword", (e, t) => {
                            var i, n;
                            if (null === (i = eh.clerk.__unstable__environment) || void 0 === i ? void 0 : i.userSettings.passwordSettings) return (0, eu.z)({ ...null === (n = eh.clerk.__unstable__environment) || void 0 === n ? void 0 : n.userSettings.passwordSettings,
                                validatePassword: !0
                            })(e, t)
                        }), this.fromJSON(e)
                    }
                }
                class ep {
                    fromJSON(e) {
                        if (e) {
                            var t, i;
                            this.firstName = e.first_name, this.lastName = e.last_name, this.imageUrl = null !== (t = e.image_url) && void 0 !== t ? t : void 0, this.hasImage = null !== (i = e.has_image) && void 0 !== i ? i : void 0
                        }
                        return this
                    }
                    __internal_toSnapshot() {
                        return {
                            first_name: this.firstName,
                            last_name: this.lastName,
                            image_url: this.imageUrl || null,
                            has_image: this.hasImage || null
                        }
                    }
                    constructor(e) {
                        (0, n._)(this, "firstName", void 0), (0, n._)(this, "lastName", void 0), (0, n._)(this, "imageUrl", void 0), (0, n._)(this, "hasImage", void 0), this.fromJSON(e)
                    }
                }

                function ef(e) {
                    let {
                        unsafeMetadata: t
                    } = { ...e
                    }, i = t ? "object" == typeof t ? JSON.stringify(t) : t : "";
                    return { ...e,
                        ...t ? {
                            unsafeMetadata: i
                        } : {}
                    }
                }
                class e_ extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.status = e.status, this.requiredFields = e.required_fields, this.optionalFields = e.optional_fields, this.missingFields = e.missing_fields, this.unverifiedFields = e.unverified_fields, this.verifications = new P(e.verifications), this.username = e.username, this.firstName = e.first_name, this.lastName = e.last_name, this.emailAddress = e.email_address, this.phoneNumber = e.phone_number, this.hasPassword = e.has_password, this.unsafeMetadata = e.unsafe_metadata, this.createdSessionId = e.created_session_id, this.createdUserId = e.created_user_id, this.abandonAt = e.abandon_at, this.web3wallet = e.web3_wallet, this.legalAcceptedAt = e.legal_accepted_at), this
                    }
                    __internal_toSnapshot() {
                        var e;
                        return {
                            object: "sign_up",
                            id: this.id || "",
                            status: this.status || null,
                            required_fields: this.requiredFields,
                            optional_fields: this.optionalFields,
                            missing_fields: this.missingFields,
                            unverified_fields: this.unverifiedFields,
                            verifications: this.verifications.__internal_toSnapshot(),
                            username: this.username,
                            first_name: this.firstName,
                            last_name: this.lastName,
                            email_address: this.emailAddress,
                            phone_number: this.phoneNumber,
                            has_password: this.hasPassword,
                            unsafe_metadata: this.unsafeMetadata,
                            created_session_id: this.createdSessionId,
                            created_user_id: this.createdUserId,
                            abandon_at: this.abandonAt,
                            web3_wallet: this.web3wallet,
                            legal_accepted_at: this.legalAcceptedAt,
                            external_account: this.externalAccount,
                            external_account_strategy: null === (e = this.externalAccount) || void 0 === e ? void 0 : e.strategy
                        }
                    }
                    clientBypass() {
                        var e;
                        return null === (e = e_.clerk.client) || void 0 === e ? void 0 : e.captchaBypass
                    }
                    shouldBypassCaptchaForAttempt(e) {
                        if (!e.strategy) return !1;
                        let t = e_.clerk.__unstable__environment.displayConfig.captchaOauthBypass;
                        return !!(t.some(t => t === e.strategy) || e.transfer && t.some(e => e === e_.clerk.client.signIn.firstFactorVerification.strategy))
                    }
                    constructor(e = null) {
                        super(), (0, n._)(this, "pathRoot", "/client/sign_ups"), (0, n._)(this, "id", void 0), (0, n._)(this, "status", null), (0, n._)(this, "requiredFields", []), (0, n._)(this, "optionalFields", []), (0, n._)(this, "missingFields", []), (0, n._)(this, "unverifiedFields", []), (0, n._)(this, "verifications", new P(null)), (0, n._)(this, "username", null), (0, n._)(this, "firstName", null), (0, n._)(this, "lastName", null), (0, n._)(this, "emailAddress", null), (0, n._)(this, "phoneNumber", null), (0, n._)(this, "web3wallet", null), (0, n._)(this, "externalAccount", void 0), (0, n._)(this, "hasPassword", !1), (0, n._)(this, "unsafeMetadata", {}), (0, n._)(this, "createdSessionId", null), (0, n._)(this, "createdUserId", null), (0, n._)(this, "abandonAt", null), (0, n._)(this, "legalAcceptedAt", null), (0, n._)(this, "create", async e => {
                            let t = e;
                            if (!this.clientBypass() && !this.shouldBypassCaptchaForAttempt(t)) {
                                let e = new o.E(e_.clerk),
                                    i = await e.managedOrInvisible({
                                        action: "signup"
                                    });
                                if (!i) throw new k.w$("", {
                                    code: "captcha_unavailable"
                                });
                                t = { ...t,
                                    ...i
                                }
                            }
                            if (t.transfer && this.shouldBypassCaptchaForAttempt(t)) {
                                var i;
                                t.strategy = null === (i = e_.clerk.client) || void 0 === i ? void 0 : i.signIn.firstFactorVerification.strategy
                            }
                            return this._basePost({
                                path: this.pathRoot,
                                body: ef(t)
                            })
                        }), (0, n._)(this, "prepareVerification", e => this._basePost({
                            body: e,
                            action: "prepare_verification"
                        })), (0, n._)(this, "attemptVerification", e => this._basePost({
                            body: e,
                            action: "attempt_verification"
                        })), (0, n._)(this, "prepareEmailAddressVerification", e => this.prepareVerification(e || {
                            strategy: "email_code"
                        })), (0, n._)(this, "attemptEmailAddressVerification", e => this.attemptVerification({ ...e,
                            strategy: "email_code"
                        })), (0, n._)(this, "createEmailLinkFlow", () => {
                            let {
                                run: e,
                                stop: t
                            } = y();
                            return {
                                startEmailLinkFlow: async i => {
                                    let {
                                        redirectUrl: n
                                    } = i;
                                    return this.id || (0, s.C)("SignUp"), await this.prepareEmailAddressVerification({
                                        strategy: "email_link",
                                        redirectUrl: n
                                    }), new Promise((i, n) => {
                                        e(() => this.reload().then(e => {
                                            let n = e.verifications.emailAddress.status;
                                            ("verified" === n || "expired" === n) && (t(), i(e))
                                        }).catch(e => {
                                            t(), n(e)
                                        }))
                                    })
                                },
                                cancelEmailLinkFlow: t
                            }
                        }), (0, n._)(this, "preparePhoneNumberVerification", e => this.prepareVerification(e || {
                            strategy: "phone_code"
                        })), (0, n._)(this, "attemptPhoneNumberVerification", e => this.attemptVerification({ ...e,
                            strategy: "phone_code"
                        })), (0, n._)(this, "prepareWeb3WalletVerification", e => this.prepareVerification({
                            strategy: "web3_metamask_signature",
                            ...e
                        })), (0, n._)(this, "attemptWeb3WalletVerification", async e => {
                            let {
                                signature: t,
                                strategy: i = "web3_metamask_signature"
                            } = e;
                            return this.attemptVerification({
                                signature: t,
                                strategy: i
                            })
                        }), (0, n._)(this, "authenticateWithWeb3", async e => {
                            let t;
                            let {
                                generateSignature: i,
                                identifier: n,
                                unsafeMetadata: r,
                                strategy: a = "web3_metamask_signature",
                                legalAccepted: o
                            } = e || {}, l = a.replace("web3_", "").replace("_signature", "");
                            "function" != typeof i && (0, s.WC)("generateSignature");
                            let c = n || this.web3wallet;
                            await this.create({
                                web3Wallet: c,
                                unsafeMetadata: r,
                                legalAccepted: o
                            }), await this.prepareWeb3WalletVerification({
                                strategy: a
                            });
                            let {
                                message: d
                            } = this.verifications.web3Wallet;
                            d || (0, s.lb)("SignUp");
                            try {
                                t = await i({
                                    identifier: n,
                                    nonce: d,
                                    provider: l
                                })
                            } catch (e) {
                                if ("coinbase_wallet" === l && 4001 === e.code) t = await i({
                                    identifier: n,
                                    nonce: d,
                                    provider: l
                                });
                                else throw e
                            }
                            return this.attemptWeb3WalletVerification({
                                signature: t,
                                strategy: a
                            })
                        }), (0, n._)(this, "authenticateWithMetamask", async e => {
                            let t = await (0, ed.M8)();
                            return this.authenticateWithWeb3({
                                identifier: t,
                                generateSignature: ed.wO,
                                unsafeMetadata: null == e ? void 0 : e.unsafeMetadata,
                                strategy: "web3_metamask_signature",
                                legalAccepted: null == e ? void 0 : e.legalAccepted
                            })
                        }), (0, n._)(this, "authenticateWithCoinbaseWallet", async e => {
                            let t = await (0, ed.$0)();
                            return this.authenticateWithWeb3({
                                identifier: t,
                                generateSignature: ed.dR,
                                unsafeMetadata: null == e ? void 0 : e.unsafeMetadata,
                                strategy: "web3_coinbase_wallet_signature",
                                legalAccepted: null == e ? void 0 : e.legalAccepted
                            })
                        }), (0, n._)(this, "authenticateWithOKXWallet", async e => {
                            let t = await (0, ed.ZE)();
                            return this.authenticateWithWeb3({
                                identifier: t,
                                generateSignature: ed.C3,
                                unsafeMetadata: null == e ? void 0 : e.unsafeMetadata,
                                strategy: "web3_okx_wallet_signature",
                                legalAccepted: null == e ? void 0 : e.legalAccepted
                            })
                        }), (0, n._)(this, "authenticateWithRedirect", async e => {
                            let {
                                redirectUrl: t,
                                redirectUrlComplete: i,
                                strategy: n,
                                continueSignUp: r = !1,
                                unsafeMetadata: a,
                                emailAddress: o,
                                legalAccepted: l
                            } = e, c = () => {
                                let e = {
                                    strategy: n,
                                    redirectUrl: e_.clerk.buildUrlWithAuth(t),
                                    actionCompleteRedirectUrl: i,
                                    unsafeMetadata: a,
                                    emailAddress: o,
                                    legalAccepted: l
                                };
                                return r && this.id ? this.update(e) : this.create(e)
                            }, {
                                verifications: d
                            } = await c().catch(async e => {
                                if ((0, k.kD)(e) && (0, k.pG)(e)) return await e_.clerk.__unstable__environment.reload(), c();
                                throw e
                            }), {
                                externalAccount: u
                            } = d, {
                                status: h,
                                externalVerificationRedirectURL: p
                            } = u;
                            "unverified" === h && p ? (0, ed.T7)(p) : (0, s.Ws)(h, e_.fapiClient.buildEmailAddress("support"))
                        }), (0, n._)(this, "update", e => this._basePatch({
                            body: ef(e)
                        })), (0, n._)(this, "upsert", e => this.id ? this.update(e) : this.create(e)), (0, n._)(this, "validatePassword", (e, t) => {
                            var i, n;
                            if (null === (i = e_.clerk.__unstable__environment) || void 0 === i ? void 0 : i.userSettings.passwordSettings) return (0, eu.z)({ ...null === (n = e_.clerk.__unstable__environment) || void 0 === n ? void 0 : n.userSettings.passwordSettings,
                                validatePassword: !0
                            })(e, t)
                        }), this.fromJSON(e)
                    }
                }
                class ev extends c {
                    static async create(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return new ev(await c._fetch({
                            path: e,
                            method: "POST",
                            body: t
                        }), e)
                    }
                    fromJSON(e) {
                        return e && (this.jwt = (0, ed.Jx)(e.jwt)), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "token",
                            id: this.id || "",
                            jwt: this.getRawString()
                        }
                    }
                    constructor(e, t) {
                        super(), (0, n._)(this, "pathRoot", "tokens"), (0, n._)(this, "jwt", void 0), (0, n._)(this, "getRawString", () => {
                            var e;
                            return (null === (e = this.jwt) || void 0 === e ? void 0 : e.claims.__raw) || ""
                        }), t && (this.pathRoot = t), (null == e ? void 0 : e.jwt) && (this.jwt = (0, ed.Jx)(e.jwt))
                    }
                }
                class em extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.secret = e.secret, this.uri = e.uri, this.verified = e.verified, this.backupCodes = e.backup_codes, this.updatedAt = u(e.updated_at), this.createdAt = u(e.created_at)), this
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "pathRoot", "/me"), (0, n._)(this, "id", ""), (0, n._)(this, "secret", void 0), (0, n._)(this, "uri", void 0), (0, n._)(this, "verified", !1), (0, n._)(this, "backupCodes", void 0), (0, n._)(this, "updatedAt", null), (0, n._)(this, "createdAt", null), this.fromJSON(e)
                    }
                }
                var eg = i(5878);
                class ey extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.codes = e.codes, this.updatedAt = u(e.updated_at), this.createdAt = u(e.created_at)), this
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "pathRoot", "/me"), (0, n._)(this, "id", void 0), (0, n._)(this, "codes", []), (0, n._)(this, "updatedAt", null), (0, n._)(this, "createdAt", null), this.fromJSON(e)
                    }
                }
                class ew extends c {
                    static isUserResource(e) {
                        return !!e && e instanceof ew
                    }
                    path() {
                        return this.pathRoot
                    }
                    get verifiedExternalAccounts() {
                        return this.externalAccounts.filter(e => {
                            var t;
                            return (null === (t = e.verification) || void 0 === t ? void 0 : t.status) == "verified"
                        })
                    }
                    get unverifiedExternalAccounts() {
                        return this.externalAccounts.filter(e => {
                            var t;
                            return (null === (t = e.verification) || void 0 === t ? void 0 : t.status) != "verified"
                        })
                    }
                    get verifiedWeb3Wallets() {
                        return this.web3Wallets.filter(e => {
                            var t;
                            return (null === (t = e.verification) || void 0 === t ? void 0 : t.status) == "verified"
                        })
                    }
                    get hasVerifiedEmailAddress() {
                        return this.emailAddresses.filter(e => "verified" === e.verification.status).length > 0
                    }
                    get hasVerifiedPhoneNumber() {
                        return this.phoneNumbers.filter(e => "verified" === e.verification.status).length > 0
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.externalId = e.external_id, this.firstName = e.first_name, this.lastName = e.last_name, (this.firstName || this.lastName) && (this.fullName = (0, eg.Pp)({
                            firstName: this.firstName,
                            lastName: this.lastName
                        })), this.imageUrl = e.image_url, this.hasImage = e.has_image, this.username = e.username, this.passwordEnabled = e.password_enabled, this.emailAddresses = (e.email_addresses || []).map(e => new w(e, this.path() + "/email_addresses")), this.primaryEmailAddressId = e.primary_email_address_id, this.primaryEmailAddress = this.emailAddresses.find(e => {
                            let {
                                id: t
                            } = e;
                            return t === this.primaryEmailAddressId
                        }) || null, this.phoneNumbers = (e.phone_numbers || []).map(e => new z(e, this.path() + "/phone_numbers")), this.primaryPhoneNumberId = e.primary_phone_number_id, this.primaryPhoneNumber = this.phoneNumbers.find(e => {
                            let {
                                id: t
                            } = e;
                            return t === this.primaryPhoneNumberId
                        }) || null, this.web3Wallets = (e.web3_wallets || []).map(e => new eS(e, this.path() + "/web3_wallets")), this.primaryWeb3WalletId = e.primary_web3_wallet_id, this.primaryWeb3Wallet = this.web3Wallets.find(e => {
                            let {
                                id: t
                            } = e;
                            return t === this.primaryWeb3WalletId
                        }) || null, this.externalAccounts = (e.external_accounts || []).map(e => new I(e, this.path() + "/external_accounts")), this.passkeys = (e.passkeys || []).map(e => new es(e)), this.organizationMemberships = (e.organization_memberships || []).map(e => new K(e)), this.samlAccounts = (e.saml_accounts || []).map(e => new J(e, this.path() + "/saml_accounts")), this.enterpriseAccounts = (e.enterprise_accounts || []).map(e => new T(e, this.path() + "/enterprise_accounts")), this.publicMetadata = e.public_metadata, this.unsafeMetadata = e.unsafe_metadata, this.totpEnabled = e.totp_enabled, this.backupCodeEnabled = e.backup_code_enabled, this.twoFactorEnabled = e.two_factor_enabled, this.createOrganizationEnabled = e.create_organization_enabled, this.createOrganizationsLimit = e.create_organizations_limit, this.deleteSelfEnabled = e.delete_self_enabled, e.last_sign_in_at && (this.lastSignInAt = u(e.last_sign_in_at)), e.legal_accepted_at && (this.legalAcceptedAt = u(e.legal_accepted_at)), this.updatedAt = u(e.updated_at || void 0), this.createdAt = u(e.created_at || void 0)), this
                    }
                    __internal_toSnapshot() {
                        var e, t, i, n;
                        return {
                            object: "user",
                            id: this.id,
                            external_id: this.externalId,
                            first_name: this.firstName,
                            last_name: this.lastName,
                            username: this.username,
                            public_metadata: this.publicMetadata,
                            unsafe_metadata: this.unsafeMetadata,
                            image_url: this.imageUrl,
                            has_image: this.hasImage,
                            email_addresses: this.emailAddresses.map(e => e.__internal_toSnapshot()),
                            phone_numbers: this.phoneNumbers.map(e => e.__internal_toSnapshot()),
                            web3_wallets: this.web3Wallets.map(e => e.__internal_toSnapshot()),
                            external_accounts: this.externalAccounts.map(e => e.__internal_toSnapshot()),
                            passkeys: this.passkeys.map(e => e.__internal_toSnapshot()),
                            organization_memberships: this.organizationMemberships.map(e => e.__internal_toSnapshot()),
                            saml_accounts: this.samlAccounts.map(e => e.__internal_toSnapshot()),
                            enterprise_accounts: this.enterpriseAccounts.map(e => e.__internal_toSnapshot()),
                            totp_enabled: this.totpEnabled,
                            backup_code_enabled: this.backupCodeEnabled,
                            two_factor_enabled: this.twoFactorEnabled,
                            create_organization_enabled: this.createOrganizationEnabled,
                            create_organizations_limit: this.createOrganizationsLimit,
                            delete_self_enabled: this.deleteSelfEnabled,
                            primary_email_address_id: this.primaryEmailAddressId,
                            primary_phone_number_id: this.primaryPhoneNumberId,
                            primary_web3_wallet_id: this.primaryWeb3WalletId,
                            password_enabled: this.passwordEnabled,
                            profile_image_id: this.imageUrl,
                            last_sign_in_at: (null === (e = this.lastSignInAt) || void 0 === e ? void 0 : e.getTime()) || null,
                            legal_accepted_at: (null === (t = this.legalAcceptedAt) || void 0 === t ? void 0 : t.getTime()) || null,
                            updated_at: (null === (i = this.updatedAt) || void 0 === i ? void 0 : i.getTime()) || null,
                            created_at: (null === (n = this.createdAt) || void 0 === n ? void 0 : n.getTime()) || null
                        }
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "pathRoot", "/me"), (0, n._)(this, "id", ""), (0, n._)(this, "externalId", null), (0, n._)(this, "username", null), (0, n._)(this, "emailAddresses", []), (0, n._)(this, "phoneNumbers", []), (0, n._)(this, "web3Wallets", []), (0, n._)(this, "externalAccounts", []), (0, n._)(this, "enterpriseAccounts", []), (0, n._)(this, "passkeys", []), (0, n._)(this, "samlAccounts", []), (0, n._)(this, "organizationMemberships", []), (0, n._)(this, "passwordEnabled", !1), (0, n._)(this, "firstName", null), (0, n._)(this, "lastName", null), (0, n._)(this, "fullName", null), (0, n._)(this, "primaryEmailAddressId", null), (0, n._)(this, "primaryEmailAddress", null), (0, n._)(this, "primaryPhoneNumberId", null), (0, n._)(this, "primaryPhoneNumber", null), (0, n._)(this, "primaryWeb3WalletId", null), (0, n._)(this, "primaryWeb3Wallet", null), (0, n._)(this, "imageUrl", ""), (0, n._)(this, "hasImage", !1), (0, n._)(this, "twoFactorEnabled", !1), (0, n._)(this, "totpEnabled", !1), (0, n._)(this, "backupCodeEnabled", !1), (0, n._)(this, "publicMetadata", {}), (0, n._)(this, "unsafeMetadata", {}), (0, n._)(this, "createOrganizationEnabled", !1), (0, n._)(this, "createOrganizationsLimit", null), (0, n._)(this, "deleteSelfEnabled", !1), (0, n._)(this, "lastSignInAt", null), (0, n._)(this, "legalAcceptedAt", null), (0, n._)(this, "updatedAt", null), (0, n._)(this, "createdAt", null), (0, n._)(this, "cachedSessionsWithActivities", null), (0, n._)(this, "isPrimaryIdentification", e => {
                            switch (e.constructor) {
                                case w:
                                    return this.primaryEmailAddressId === e.id;
                                case z:
                                    return this.primaryPhoneNumberId === e.id;
                                case eS:
                                    return this.primaryWeb3WalletId === e.id;
                                default:
                                    return !1
                            }
                        }), (0, n._)(this, "createEmailAddress", e => {
                            let {
                                email: t
                            } = e || {};
                            return new w({
                                email_address: t
                            }, this.path() + "/email_addresses/").create()
                        }), (0, n._)(this, "createPasskey", () => es.registerPasskey()), (0, n._)(this, "createPhoneNumber", e => {
                            let {
                                phoneNumber: t
                            } = e || {};
                            return new z({
                                phone_number: t
                            }, this.path() + "/phone_numbers/").create()
                        }), (0, n._)(this, "createWeb3Wallet", e => {
                            let {
                                web3Wallet: t
                            } = e || {};
                            return new eS({
                                web3_wallet: t
                            }, this.path() + "/web3_wallets/").create()
                        }), (0, n._)(this, "createExternalAccount", async e => {
                            var t;
                            let {
                                strategy: i,
                                redirectUrl: n,
                                additionalScopes: r
                            } = e || {};
                            return new I(null === (t = await c._fetch({
                                path: "/me/external_accounts",
                                method: "POST",
                                body: {
                                    strategy: i,
                                    redirect_url: n,
                                    additional_scope: r
                                }
                            })) || void 0 === t ? void 0 : t.response, this.path() + "/external_accounts")
                        }), (0, n._)(this, "createTOTP", async () => {
                            var e;
                            return new em(null === (e = await c._fetch({
                                path: "/me/totp",
                                method: "POST"
                            })) || void 0 === e ? void 0 : e.response)
                        }), (0, n._)(this, "verifyTOTP", async e => {
                            var t;
                            let {
                                code: i
                            } = e;
                            return new em(null === (t = await c._fetch({
                                path: "/me/totp/attempt_verification",
                                method: "POST",
                                body: {
                                    code: i
                                }
                            })) || void 0 === t ? void 0 : t.response)
                        }), (0, n._)(this, "disableTOTP", async () => {
                            var e;
                            return new v(null === (e = await c._fetch({
                                path: "/me/totp",
                                method: "DELETE"
                            })) || void 0 === e ? void 0 : e.response)
                        }), (0, n._)(this, "createBackupCode", async () => {
                            var e;
                            return new ey(null === (e = await c._fetch({
                                path: this.path() + "/backup_codes/",
                                method: "POST"
                            })) || void 0 === e ? void 0 : e.response)
                        }), (0, n._)(this, "update", e => this._basePatch({
                            body: ef(e)
                        })), (0, n._)(this, "updatePassword", e => this._basePost({
                            body: e,
                            path: "".concat(this.path(), "/change_password")
                        })), (0, n._)(this, "removePassword", e => this._basePost({
                            body: e,
                            path: "".concat(this.path(), "/remove_password")
                        })), (0, n._)(this, "delete", () => this._baseDelete({
                            path: "/me"
                        }).then(e => (ee.Y.dispatch(ee.U.UserSignOut, null), e))), (0, n._)(this, "getSessions", async () => {
                            if (this.cachedSessionsWithActivities) return this.cachedSessionsWithActivities;
                            let e = await ec.retrieve();
                            return this.cachedSessionsWithActivities = e, e
                        }), (0, n._)(this, "setProfileImage", e => {
                            let {
                                file: t
                            } = e || {};
                            return null === t ? M.delete("".concat(this.path(), "/profile_image")) : M.create("".concat(this.path(), "/profile_image"), {
                                file: t
                            })
                        }), (0, n._)(this, "getOrganizationInvitations", e => eb.retrieve(e)), (0, n._)(this, "getOrganizationSuggestions", e => $.retrieve(e)), (0, n._)(this, "getOrganizationMemberships", e => K.retrieve(e)), (0, n._)(this, "leaveOrganization", async e => {
                            var t;
                            return new v(null === (t = await c._fetch({
                                path: "".concat(this.path(), "/organization_memberships/").concat(e),
                                method: "DELETE"
                            })) || void 0 === t ? void 0 : t.response)
                        }), this.fromJSON(e)
                    }
                }
                class eb extends c {
                    static async retrieve(e) {
                        return await c._fetch({
                            path: "/me/organization_invitations",
                            method: "GET",
                            search: N(e)
                        }).then(e => {
                            let {
                                data: t,
                                total_count: i
                            } = null == e ? void 0 : e.response;
                            return {
                                total_count: i,
                                data: t.map(e => new eb(e))
                            }
                        })
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.emailAddress = e.email_address, this.publicOrganizationData = {
                            hasImage: e.public_organization_data.has_image,
                            imageUrl: e.public_organization_data.image_url,
                            name: e.public_organization_data.name,
                            id: e.public_organization_data.id,
                            slug: e.public_organization_data.slug
                        }, this.publicMetadata = e.public_metadata, this.role = e.role, this.status = e.status, this.createdAt = u(e.created_at), this.updatedAt = u(e.updated_at)), this
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "emailAddress", void 0), (0, n._)(this, "publicOrganizationData", void 0), (0, n._)(this, "publicMetadata", {}), (0, n._)(this, "status", void 0), (0, n._)(this, "role", void 0), (0, n._)(this, "createdAt", void 0), (0, n._)(this, "updatedAt", void 0), (0, n._)(this, "accept", async () => await this._basePost({
                            path: "/me/organization_invitations/".concat(this.id, "/accept")
                        })), this.fromJSON(e)
                    }
                }
                class eS extends c {
                    create() {
                        return this._basePost({
                            body: {
                                web3_wallet: this.web3Wallet
                            }
                        })
                    }
                    destroy() {
                        return this._baseDelete()
                    }
                    toString() {
                        return this.web3Wallet
                    }
                    fromJSON(e) {
                        return e && (this.id = e.id, this.web3Wallet = e.web3_wallet, this.verification = new O(e.verification)), this
                    }
                    __internal_toSnapshot() {
                        return {
                            object: "web3_wallet",
                            id: this.id,
                            web3_wallet: this.web3Wallet,
                            verification: this.verification.__internal_toSnapshot()
                        }
                    }
                    constructor(e, t) {
                        super(), (0, n._)(this, "id", void 0), (0, n._)(this, "web3Wallet", ""), (0, n._)(this, "verification", void 0), (0, n._)(this, "prepareVerification", e => this._basePost({
                            action: "prepare_verification",
                            body: { ...e
                            }
                        })), (0, n._)(this, "attemptVerification", e => {
                            let {
                                signature: t
                            } = e;
                            return this._basePost({
                                action: "attempt_verification",
                                body: {
                                    signature: t
                                }
                            })
                        }), this.pathRoot = t, this.fromJSON(e)
                    }
                }
                class ek extends c {
                    fromJSON(e) {
                        return e && (this.id = e.id, this.updatedAt = u(e.updated_at), this.createdAt = u(e.created_at)), this
                    }
                    static async join(e) {
                        var t;
                        return new ek(null === (t = await c._fetch({
                            path: "/waitlist",
                            method: "POST",
                            body: e
                        })) || void 0 === t ? void 0 : t.response)
                    }
                    constructor(e) {
                        super(), (0, n._)(this, "pathRoot", "/waitlist"), (0, n._)(this, "id", ""), (0, n._)(this, "updatedAt", null), (0, n._)(this, "createdAt", null), this.fromJSON(e)
                    }
                }
            },
            5274: function(e, t, i) {
                "use strict";
                i.d(t, {
                    q: () => r
                });
                let n = e => "\uD83D\uDD12 Clerk:\n".concat(e.trim(), "\n(This notice only appears in development)"),
                    r = {
                        cannotRenderComponentWhenSessionExists: "The <SignUp/> and <SignIn/> components cannot render when a user is already signed in, unless the application allows multiple sessions. Since a user is signed in and this application only allows a single session, Clerk is redirecting to the Home URL instead.",
                        cannotRenderSignUpComponentWhenSessionExists: "The <SignUp/> component cannot render when a user is already signed in, unless the application allows multiple sessions. Since a user is signed in and this application only allows a single session, Clerk is redirecting to the value set in `afterSignUp` URL instead.",
                        cannotRenderSignInComponentWhenSessionExists: "The <SignIn/> component cannot render when a user is already signed in, unless the application allows multiple sessions. Since a user is signed in and this application only allows a single session, Clerk is redirecting to the `afterSignIn` URL instead.",
                        cannotRenderComponentWhenUserDoesNotExist: "<UserProfile/> cannot render unless a user is signed in. Since no user is signed in, this is no-op.",
                        cannotRenderComponentWhenOrgDoesNotExist: "<OrganizationProfile/> cannot render unless an organization is active. Since no organization is currently active, this is no-op.",
                        cannotRenderAnyOrganizationComponent: e => n("The <".concat(e, "/> cannot be rendered when the feature is turned off. Visit 'dashboard.clerk.com' to enable the feature. Since the feature is turned off, this is no-op.")),
                        cannotOpenUserProfile: "The UserProfile modal cannot render unless a user is signed in. Since no user is signed in, this is no-op.",
                        cannotOpenSignInOrSignUp: "The SignIn or SignUp modals do not render when a user is already signed in, unless the application allows multiple sessions. Since a user is signed in and this application only allows a single session, this is no-op."
                    };
                for (let e of Object.keys(r)) {
                    let t = r[e];
                    "function" != typeof t && (r[e] = n(t))
                }
            },
            6147: function(e, t, i) {
                "use strict";
                let n; {
                    let e = /(^.*\/@clerk\/clerk-js@)(.+?)(\/dist.*)/;
                    (() => {
                        try {
                            let t = new URL(document.currentScript.src),
                                n = new URL(t.href.split("/").slice(0, -1).join("/")).href;
                            n += n.endsWith("/") ? "" : "/", i.p = n.replace(e, "$1".concat("5.56.0", "$3"))
                        } catch {}
                    })()
                }
                i(5647);
                var r, a, s, o, l, c, d, u, h, p, f, _, v, m, g, y, w, b, S, k, A, U, O = i(8300),
                    C = i(2086),
                    P = i(1820),
                    E = i(2605);

                function I(e, t, i) {
                    var n = (0, E._)(e, t, "set");
                    return (0, P._)(e, n, i), i
                }
                var T = i(6210),
                    x = i(7518),
                    R = i(623),
                    M = i(2708),
                    z = i(1188),
                    N = i(3531),
                    W = i(1402),
                    L = class {
                        prefixEventName(e) {
                            return this.channelKey + e
                        }
                        constructor(e) {
                            this.eventTarget = window, this.postMessage = e => {
                                if ("undefined" != typeof window) try {
                                    window.localStorage.setItem(this.channelKey, JSON.stringify(e)), window.localStorage.removeItem(this.channelKey)
                                } catch {}
                            }, this.addEventListener = (e, t) => {
                                this.eventTarget.addEventListener(this.prefixEventName(e), e => {
                                    t(e)
                                })
                            }, this.setupLocalStorageListener = () => {
                                window.addEventListener("storage", e => {
                                    if (e.key === this.channelKey && e.newValue) try {
                                        let t = JSON.parse(e.newValue || ""),
                                            i = new MessageEvent(this.prefixEventName("message"), {
                                                data: t
                                            });
                                        this.eventTarget.dispatchEvent(i)
                                    } catch {}
                                })
                            }, this.channelKey = "__lsbc__" + e, this.setupLocalStorageListener()
                        }
                    },
                    F = i(4310),
                    D = i(2358);

                function j(e) {
                    return /^http(s)?:\/\//.test(e || "")
                }

                function V(e) {
                    return e.startsWith("/")
                }
                var K = i(1790),
                    $ = i(1004),
                    J = class {
                        isEventThrottled(e) {
                            var t;
                            if (!(0, F.ac)(this, s, c)) return !1;
                            let i = Date.now(),
                                n = (0, F.U9)(this, s, o).call(this, e),
                                d = null === (t = (0, F.ac)(this, s, l)) || void 0 === t ? void 0 : t[n];
                            if (!d) {
                                let e = { ...(0, F.ac)(this, s, l),
                                    [n]: i
                                };
                                localStorage.setItem((0, F.ac)(this, r), JSON.stringify(e))
                            }
                            if (d && i - d > (0, F.ac)(this, a)) {
                                let e = (0, F.ac)(this, s, l);
                                delete e[n], localStorage.setItem((0, F.ac)(this, r), JSON.stringify(e))
                            }
                            return !!d
                        }
                        constructor() {
                            (0, F.Ko)(this, s), (0, F.Ko)(this, r, "clerk_telemetry_throttler"), (0, F.Ko)(this, a, 864e5)
                        }
                    };
                r = new WeakMap, a = new WeakMap, s = new WeakSet, o = function(e) {
                    let {
                        sk: t,
                        pk: i,
                        payload: n,
                        ...r
                    } = e, a = { ...n,
                        ...r
                    };
                    return JSON.stringify(Object.keys({ ...n,
                        ...r
                    }).sort().map(e => a[e]))
                }, l = function() {
                    let e = localStorage.getItem((0, F.ac)(this, r));
                    return e ? JSON.parse(e) : {}
                }, c = function() {
                    if ("undefined" == typeof window) return !1;
                    let e = window.localStorage;
                    if (!e) return !1;
                    try {
                        let t = "test";
                        return e.setItem(t, t), e.removeItem(t), !0
                    } catch (t) {
                        return t instanceof DOMException && ("QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name) && e.length > 0 && e.removeItem((0, F.ac)(this, r)), !1
                    }
                };
                var B = {
                        samplingRate: 1,
                        maxBufferSize: 5,
                        endpoint: "https://clerk-telemetry.com"
                    },
                    q = class {
                        get isEnabled() {
                            var e, t;
                            return !("development" !== (0, F.ac)(this, h).instanceType || (0, F.ac)(this, d).disabled || "undefined" != typeof process && (0, K.fQ)(process.env.CLERK_TELEMETRY_DISABLED)) && ("undefined" == typeof window || null === (t = window) || void 0 === t || null === (e = t.navigator) || void 0 === e || !e.webdriver)
                        }
                        get isDebug() {
                            return (0, F.ac)(this, d).debug || "undefined" != typeof process && (0, K.fQ)(process.env.CLERK_TELEMETRY_DEBUG)
                        }
                        record(e) {
                            let t = (0, F.U9)(this, _, S).call(this, e.event, e.payload);
                            (0, F.U9)(this, _, w).call(this, t.event, t), (0, F.U9)(this, _, v).call(this, t, e.eventSamplingRate) && ((0, F.ac)(this, p).push(t), (0, F.U9)(this, _, g).call(this))
                        }
                        constructor(e) {
                            var t, i, n, r, a, s;
                            (0, F.Ko)(this, _), (0, F.Ko)(this, d), (0, F.Ko)(this, u), (0, F.Ko)(this, h, {}), (0, F.Ko)(this, p, []), (0, F.Ko)(this, f), (0, F.qx)(this, d, {
                                maxBufferSize: null !== (t = e.maxBufferSize) && void 0 !== t ? t : B.maxBufferSize,
                                samplingRate: null !== (i = e.samplingRate) && void 0 !== i ? i : B.samplingRate,
                                disabled: null !== (n = e.disabled) && void 0 !== n && n,
                                debug: null !== (r = e.debug) && void 0 !== r && r,
                                endpoint: B.endpoint
                            }), e.clerkVersion || "undefined" != typeof window ? (0, F.ac)(this, h).clerkVersion = null !== (a = e.clerkVersion) && void 0 !== a ? a : "" : (0, F.ac)(this, h).clerkVersion = "", (0, F.ac)(this, h).sdk = e.sdk, (0, F.ac)(this, h).sdkVersion = e.sdkVersion, (0, F.ac)(this, h).publishableKey = null !== (s = e.publishableKey) && void 0 !== s ? s : "";
                            let o = (0, $.nQ)(e.publishableKey);
                            o && ((0, F.ac)(this, h).instanceType = o.instanceType), e.secretKey && ((0, F.ac)(this, h).secretKey = e.secretKey.substring(0, 16)), (0, F.qx)(this, u, new J)
                        }
                    };

                function Z(e) {
                    return function(t, i, n) {
                        var r, a, s;
                        return {
                            event: e,
                            eventSamplingRate: .1,
                            payload: {
                                component: t,
                                appearanceProp: !!(null == i ? void 0 : i.appearance),
                                baseTheme: !!(null == i ? void 0 : null === (r = i.appearance) || void 0 === r ? void 0 : r.baseTheme),
                                elements: !!(null == i ? void 0 : null === (a = i.appearance) || void 0 === a ? void 0 : a.elements),
                                variables: !!(null == i ? void 0 : null === (s = i.appearance) || void 0 === s ? void 0 : s.variables),
                                ...n
                            }
                        }
                    }
                }

                function G(e, t, i) {
                    return Z("COMPONENT_MOUNTED")(e, t, i)
                }

                function H(e, t, i) {
                    return Z("COMPONENT_OPENED")(e, t, i)
                }
                d = new WeakMap, u = new WeakMap, h = new WeakMap, p = new WeakMap, f = new WeakMap, _ = new WeakSet, v = function(e, t) {
                    return this.isEnabled && !this.isDebug && (0, F.U9)(this, _, m).call(this, e, t)
                }, m = function(e, t) {
                    let i = Math.random();
                    return i <= (0, F.ac)(this, d).samplingRate && (void 0 === t || i <= t) && !(0, F.ac)(this, u).isEventThrottled(e)
                }, g = function() {
                    if ("undefined" == typeof window) {
                        (0, F.U9)(this, _, y).call(this);
                        return
                    }
                    if ((0, F.ac)(this, p).length >= (0, F.ac)(this, d).maxBufferSize) {
                        (0, F.ac)(this, f) && ("undefined" != typeof cancelIdleCallback ? cancelIdleCallback : clearTimeout)((0, F.ac)(this, f)), (0, F.U9)(this, _, y).call(this);
                        return
                    }!(0, F.ac)(this, f) && ("requestIdleCallback" in window ? (0, F.qx)(this, f, requestIdleCallback(() => {
                        (0, F.U9)(this, _, y).call(this)
                    })) : (0, F.qx)(this, f, setTimeout(() => {
                        (0, F.U9)(this, _, y).call(this)
                    }, 0)))
                }, y = function() {
                    fetch(new URL("/v1/event", (0, F.ac)(this, d).endpoint), {
                        method: "POST",
                        body: JSON.stringify({
                            events: (0, F.ac)(this, p)
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).catch(() => void 0).then(() => {
                        (0, F.qx)(this, p, [])
                    }).catch(() => void 0)
                }, w = function(e, t) {
                    this.isDebug && (void 0 !== console.groupCollapsed ? (console.groupCollapsed("[clerk/telemetry]", e), console.log(t), console.groupEnd()) : console.log("[clerk/telemetry]", e, t))
                }, b = function() {
                    let e = {
                        name: (0, F.ac)(this, h).sdk,
                        version: (0, F.ac)(this, h).sdkVersion
                    };
                    return "undefined" != typeof window && window.Clerk && (e = { ...e,
                        ...window.Clerk.constructor.sdkMetadata
                    }), e
                }, S = function(e, t) {
                    var i, n;
                    let r = (0, F.U9)(this, _, b).call(this);
                    return {
                        event: e,
                        cv: null !== (i = (0, F.ac)(this, h).clerkVersion) && void 0 !== i ? i : "",
                        it: null !== (n = (0, F.ac)(this, h).instanceType) && void 0 !== n ? n : "",
                        sdk: r.name,
                        sdkv: r.version,
                        ...(0, F.ac)(this, h).publishableKey ? {
                            pk: (0, F.ac)(this, h).publishableKey
                        } : {},
                        ...(0, F.ac)(this, h).secretKey ? {
                            sk: (0, F.ac)(this, h).secretKey
                        } : {},
                        payload: t
                    }
                };
                var Y = i(4944),
                    X = i(1826),
                    Q = i(1235),
                    ee = i(9576),
                    et = i(7771);

                function ei(e, t) {
                    var i, n, r, a;
                    return e.id !== t.id || e.updatedAt.getTime() < t.updatedAt.getTime() || (i = t, n = e, i.organizationMemberships.length !== n.organizationMemberships.length || (null === (r = i.organizationMemberships[0]) || void 0 === r ? void 0 : r.updatedAt) !== (null === (a = n.organizationMemberships[0]) || void 0 === a ? void 0 : a.updatedAt))
                }

                function en(e, t) {
                    return ! function(e, t) {
                        if (!e && t || e && !t) return !0;
                        if (!e && e === t) return !1;
                        if (!e || !t) return !0;
                        try {
                            if (et.KU.isClientResource(e)) return e.id !== t.id || e.updatedAt.getTime() < t.updatedAt.getTime() || e.sessions.length !== t.sessions.length;
                            if (et.z_.isSessionResource(e)) {
                                var i, n;
                                return e.id !== t.id || e.updatedAt.getTime() < t.updatedAt.getTime() || function(e, t) {
                                    let i = e.factorVerificationAge,
                                        n = t.factorVerificationAge;
                                    return null !== i && null !== n ? i[0] !== n[0] || i[1] !== n[1] : i !== n
                                }(e, t) || function(e, t) {
                                    var i, n, r, a, s, o;
                                    if (e.lastActiveOrganizationId !== t.lastActiveOrganizationId) return !0;
                                    let l = null === (n = e.user) || void 0 === n ? void 0 : null === (i = n.organizationMemberships) || void 0 === i ? void 0 : i.find(t => t.organization.id === e.lastActiveOrganizationId),
                                        c = null === (a = t.user) || void 0 === a ? void 0 : null === (r = a.organizationMemberships) || void 0 === r ? void 0 : r.find(t => t.organization.id === e.lastActiveOrganizationId);
                                    return (null == l ? void 0 : l.role) !== (null == c ? void 0 : c.role) || (null == l ? void 0 : null === (s = l.permissions) || void 0 === s ? void 0 : s.length) !== (null == c ? void 0 : null === (o = c.permissions) || void 0 === o ? void 0 : o.length)
                                }(e, t) || (i = e, n = t, !!i.user != !!n.user || !!i.user && !!n.user && ei(i.user, n.user))
                            }
                            if (et.n5.isUserResource(e)) return ei(e, t)
                        } catch {}
                        return !0
                    }(e, t) ? e : t
                }
                var er = i(1607);

                function ea(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) e[n] = i[n]
                    }
                    return e
                }
                var es = function e(t, i) {
                    function n(e, n, r) {
                        if ("undefined" != typeof document) {
                            "number" == typeof(r = ea({}, i, r)).expires && (r.expires = new Date(Date.now() + 864e5 * r.expires)), r.expires && (r.expires = r.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                            var a = "";
                            for (var s in r) {
                                if (r[s]) a += "; " + s, !0 !== r[s] && (a += "=" + r[s].split(";")[0])
                            }
                            return document.cookie = e + "=" + t.write(n, e) + a
                        }
                    }
                    return Object.create({
                        set: n,
                        get: function(e) {
                            if ("undefined" != typeof document && (!arguments.length || e)) {
                                for (var i = document.cookie ? document.cookie.split("; ") : [], n = {}, r = 0; r < i.length; r++) {
                                    var a = i[r].split("="),
                                        s = a.slice(1).join("=");
                                    try {
                                        var o = decodeURIComponent(a[0]);
                                        if (n[o] = t.read(s, o), e === o) break
                                    } catch (e) {}
                                }
                                return e ? n[e] : n
                            }
                        },
                        remove: function(e, t) {
                            n(e, "", ea({}, t, {
                                expires: -1
                            }))
                        },
                        withAttributes: function(t) {
                            return e(this.converter, ea({}, this.attributes, t))
                        },
                        withConverter: function(t) {
                            return e(ea({}, this.converter, t), this.attributes)
                        }
                    }, {
                        attributes: {
                            value: Object.freeze(i)
                        },
                        converter: {
                            value: Object.freeze(t)
                        }
                    })
                }({
                    read: function(e) {
                        return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                    },
                    write: function(e) {
                        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                    }
                }, {
                    path: "/"
                });

                function eo(e) {
                    return {
                        get: () => es.get(e),
                        set(t) {
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            es.set(e, t, i)
                        },
                        remove(t) {
                            es.remove(e, t)
                        }
                    }
                }
                var el = "__clerk_db_jwt";

                function ec(e, t) {
                    let i = new URL(e),
                        n = i.searchParams.get(el);
                    i.searchParams.delete(el);
                    let r = n || t;
                    return r && i.searchParams.set(el, r), i
                }
                var ed = e => e.searchParams.get(el) || "",
                    eu = e => eh(ep(e)),
                    eh = e => {
                        let t = new URL(e);
                        return t.searchParams.delete(el), t
                    },
                    ep = e => {
                        let t = new URL(e);
                        return t.searchParams.delete("__dev_session"), t.hash = decodeURI(t.hash).replace(/__clerk_db_jwt\[(.*)\]/, ""), t.href.endsWith("#") && (t.hash = ""), t
                    },
                    ef = i(4152),
                    e_ = i(8026),
                    ev = i(8387);
                let em = eo("__clerk_test_etld"),
                    eg = e => "https:" === window.location.protocol || "None" === e && void 0 === window.safari && (void 0 !== window.isSecureContext ? window.isSecureContext : "localhost" === window.location.hostname),
                    ey = "__client_uat",
                    ew = e => {
                        let t = eo(ey),
                            i = eo((0, W._d)(ey, e));
                        return {
                            set: e => {
                                let r = (0, ev.Bc)(Date.now(), 1),
                                    a = (0, Q.TI)() ? "None" : "Strict",
                                    s = eg(a),
                                    o = function() {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hostname,
                                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em;
                                        if (n) return n;
                                        if (["localhost", "127.0.0.1", "0.0.0.0"].includes(e)) return e;
                                        let i = e.split(".");
                                        if (1 === i.length) return e;
                                        for (let e = i.length - 2; e >= 0; e--) {
                                            let r = i.slice(e).join(".");
                                            if (t.set("1", {
                                                    domain: r
                                                }), "1" === t.get()) return t.remove({
                                                domain: r
                                            }), n = r, r;
                                            t.remove({
                                                domain: r
                                            })
                                        }
                                    }(),
                                    l = "0";
                                e && e.updatedAt && e.signedInSessions.length > 0 && (l = Math.floor(e.updatedAt.getTime() / 1e3).toString()), i.remove(), t.remove(), i.set(l, {
                                    expires: r,
                                    sameSite: a,
                                    domain: o,
                                    secure: s
                                }), t.set(l, {
                                    expires: r,
                                    sameSite: a,
                                    domain: o,
                                    secure: s
                                })
                            },
                            get: () => parseInt(i.get() || t.get() || "0", 10)
                        }
                    },
                    eb = "__session",
                    eS = e => {
                        let t = eo(eb),
                            i = eo((0, W._d)(eb, e));
                        return {
                            set: e => {
                                let n = (0, ev.Bc)(Date.now(), 1),
                                    r = (0, Q.TI)() ? "None" : "Lax",
                                    a = eg(r);
                                i.set(e, {
                                    expires: n,
                                    sameSite: r,
                                    secure: a
                                }), t.set(e, {
                                    expires: n,
                                    sameSite: r,
                                    secure: a
                                })
                            },
                            remove: () => {
                                i.remove(), t.remove()
                            }
                        }
                    };
                async function ek(e) {
                    let t;
                    try {
                        t = await (0, W.P)(e)
                    } catch (s) {
                        D.k.logOnce("Suffixed cookie failed due to ".concat(s.message, " (secure-context: ").concat(window.isSecureContext, ", url: ").concat(window.location.href, ")"));
                        let {
                            default: n
                        } = await Promise.all([i.e("200"), i.e("199")]).then(i.t.bind(i, 394, 23)), {
                            default: r
                        } = await Promise.all([i.e("200"), i.e("199")]).then(i.t.bind(i, 7202, 23)), a = n(e);
                        t = r.stringify(a).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8)
                    }
                    return t
                }
                let eA = e => {
                    let t = eo(el),
                        i = eo((0, W._d)(el, e));
                    return {
                        get: () => i.get() || t.get(),
                        set: e => {
                            let n = (0, ev.Bc)(Date.now(), 1),
                                r = (0, Q.TI)() ? "None" : "Lax",
                                a = eg(r);
                            i.set(e, {
                                expires: n,
                                sameSite: r,
                                secure: a
                            }), t.set(e, {
                                expires: n,
                                sameSite: r,
                                secure: a
                            })
                        },
                        remove: () => {
                            i.remove(), t.remove()
                        }
                    }
                };
                var eU = i(9695),
                    eO = i(4019),
                    eC = i.n(eO);
                class eP {
                    startPollingForSessionToken(e) {
                        !this.timerId && (this.timerId = this.workerTimers.setInterval(() => {
                            this.lock.acquireLockAndRun(e)
                        }, 5e3))
                    }
                    stopPollingForSessionToken() {
                        this.timerId && (this.workerTimers.clearInterval(this.timerId), this.timerId = null)
                    }
                    constructor() {
                        (0, R._)(this, "lock", function(e) {
                            let t = new(eC());
                            return window.addEventListener("beforeunload", async () => {
                                await t.releaseLock(e)
                            }), {
                                acquireLockAndRun: async i => {
                                    if ("locks" in navigator && isSecureContext) {
                                        let t = new AbortController,
                                            n = setTimeout(() => t.abort(), 4999);
                                        return await navigator.locks.request(e, {
                                            signal: t.signal
                                        }, async () => (clearTimeout(n), await i())).catch(() => !1)
                                    }
                                    if (await t.acquireLock(e, 5e3)) try {
                                        return await i()
                                    } finally {
                                        await t.releaseLock(e)
                                    }
                                }
                            }
                        }("clerk.lock.refreshSessionToken")), (0, R._)(this, "workerTimers", (0, eU.Q)()), (0, R._)(this, "timerId", null)
                    }
                }
                class eE {
                    static async create(e, t, i) {
                        let n = await ek(e.publishableKey),
                            r = new eE(e, t, n, i);
                        return await r.setup(), r
                    }
                    async setup() {
                        return "production" === this.instanceType ? this.setupProduction() : this.setupDevelopment()
                    }
                    isSignedOut() {
                        return this.clerk.loaded ? !!this.clerk.user : 0 >= this.clientUat.get()
                    }
                    async handleUnauthenticatedDevBrowser() {
                        this.devBrowser.clear(), await this.devBrowser.setup()
                    }
                    decorateUrlWithDevBrowserToken(e) {
                        let t = this.devBrowser.getDevBrowserJWT();
                        return t ? ec(e, t) : (0, ef.qO)()
                    }
                    async setupDevelopment() {
                        await this.devBrowser.setup()
                    }
                    setupProduction() {
                        this.devBrowser.clear()
                    }
                    startPollingForToken() {
                        this.poller || (this.poller = new eP), this.poller.startPollingForSessionToken(() => this.refreshSessionToken())
                    }
                    refreshTokenOnFocus() {
                        window.addEventListener("focus", () => {
                            "visible" === document.visibilityState && this.refreshSessionToken({
                                updateCookieImmediately: !0
                            })
                        })
                    }
                    async refreshSessionToken() {
                        let {
                            updateCookieImmediately: e = !1
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (this.clerk.session) try {
                            let t = await this.clerk.session.getToken();
                            e && this.updateSessionCookie(t)
                        } catch (e) {
                            return this.handleGetTokenError(e)
                        }
                    }
                    updateSessionCookie(e) {
                        if (document.hasFocus() || this.isCurrentOrganizationActive()) return this.setActiveOrganizationInStorage(), e ? this.sessionCookie.set(e) : this.sessionCookie.remove()
                    }
                    setClientUatCookieForDevelopmentInstances() {
                        "production" !== this.instanceType && this.inCustomDevelopmentDomain() && this.clientUat.set(this.clerk.client)
                    }
                    inCustomDevelopmentDomain() {
                        let e = this.clerk.frontendApi.replace("clerk.", "");
                        return !window.location.host.endsWith(e)
                    }
                    handleGetTokenError(e) {
                        if ((0, N.kD)(e) || (0, ef.Fo)(e.message || e), (0, N.ix)(e)) {
                            this.clerk.handleUnauthenticated();
                            return
                        }!(0, N.eE)(e) && (0, ef.Fo)(e.toString())
                    }
                    setActiveOrganizationInStorage() {
                        var e;
                        (null === (e = this.clerk.organization) || void 0 === e ? void 0 : e.id) ? this.activeOrgCookie.set(this.clerk.organization.id): this.activeOrgCookie.remove()
                    }
                    isCurrentOrganizationActive() {
                        var e, t;
                        let i = this.activeOrgCookie.get();
                        return !i && (null === (e = this.clerk.organization) || void 0 === e || !e.id) || (null === (t = this.clerk.organization) || void 0 === t ? void 0 : t.id) === i
                    }
                    constructor(e, t, i, n) {
                        (0, R._)(this, "clerk", void 0), (0, R._)(this, "instanceType", void 0), (0, R._)(this, "poller", void 0), (0, R._)(this, "clientUat", void 0), (0, R._)(this, "sessionCookie", void 0), (0, R._)(this, "activeOrgCookie", void 0), (0, R._)(this, "devBrowser", void 0), this.clerk = e, this.instanceType = n, this.poller = null, e_.Y.on(e_.U.TokenUpdate, e => {
                            let {
                                token: t
                            } = e;
                            this.updateSessionCookie(t && t.getRawString()), this.setClientUatCookieForDevelopmentInstances()
                        }), this.refreshTokenOnFocus(), this.startPollingForToken(), this.clientUat = ew(i), this.sessionCookie = eS(i), this.activeOrgCookie = eo("clerk_active_org"), this.devBrowser = function(e) {
                            let {
                                cookieSuffix: t,
                                frontendApi: i,
                                fapiClient: n
                            } = e, r = eA(t);

                            function a() {
                                return r.get()
                            }

                            function s(e) {
                                r.set(e)
                            }

                            function o() {
                                r.remove()
                            }
                            return {
                                clear: function() {
                                    o()
                                },
                                setup: async function() {
                                    if (!(0, Q.un)(i)) return;
                                    n.onBeforeRequest(e => {
                                        let t = a();
                                        t && (null == e ? void 0 : e.url) && (e.url = ec(e.url, t))
                                    }), n.onAfterResponse((e, t) => {
                                        var i;
                                        let n = null == t ? void 0 : null === (i = t.headers) || void 0 === i ? void 0 : i.get("Clerk-Db-Jwt");
                                        n && s(n)
                                    });
                                    let e = function(e) {
                                        let t = ed(e);
                                        return eu(e).href !== e.href && void 0 !== globalThis.history && globalThis.history.replaceState(null, "", eu(e)), t
                                    }(new URL(window.location.href));
                                    if (e) {
                                        s(e);
                                        return
                                    }
                                    if (r.get()) return;
                                    let t = n.buildUrl({
                                            path: "/dev_browser"
                                        }),
                                        o = await fetch(t.toString(), {
                                            method: "POST"
                                        });
                                    if (!o.ok) {
                                        let e = await o.json(),
                                            t = (0, N.iR)(e.errors);
                                        t[0] ? (0, ef.Dg)(t[0].longMessage) : (0, ef.Dg)()
                                    }
                                    let l = await o.json();
                                    s(null == l ? void 0 : l.id)
                                },
                                getDevBrowserJWT: a,
                                setDevBrowserJWT: s,
                                removeDevBrowserJWT: o
                            }
                        }({
                            frontendApi: e.frontendApi,
                            fapiClient: t,
                            cookieSuffix: i
                        })
                    }
                }
                var eI = i(7786);
                class eT {
                    async start() {
                        this.isEnabled() && (await this.challengeAndSend(), this.timers.setInterval(() => {
                            this.challengeAndSend()
                        }, this.intervalInMs()))
                    }
                    async challengeAndSend() {
                        if (!(!this.clerk.client || this.clientBypass())) try {
                            let e = await this.captchaChallenge.invisible({
                                action: "heartbeat"
                            });
                            await this.clerk.client.sendCaptchaToken(e)
                        } catch {}
                    }
                    isEnabled() {
                        var e, t;
                        return !!(null === (t = this.clerk.__unstable__environment) || void 0 === t ? void 0 : null === (e = t.displayConfig) || void 0 === e ? void 0 : e.captchaHeartbeat)
                    }
                    clientBypass() {
                        var e;
                        return null === (e = this.clerk.client) || void 0 === e ? void 0 : e.captchaBypass
                    }
                    intervalInMs() {
                        var e, t, i;
                        return null !== (i = null === (t = this.clerk.__unstable__environment) || void 0 === t ? void 0 : null === (e = t.displayConfig) || void 0 === e ? void 0 : e.captchaHeartbeatIntervalMs) && void 0 !== i ? i : 6e5
                    }
                    constructor(e, t = new eI.E(e), i = (0, eU.Q)()) {
                        (0, R._)(this, "clerk", void 0), (0, R._)(this, "captchaChallenge", void 0), (0, R._)(this, "timers", void 0), this.clerk = e, this.captchaChallenge = t, this.timers = i
                    }
                }
                var ex = i(753),
                    eR = i(153),
                    eM = i(5027);
                let ez = ["/client", "/waitlist"];
                var eN = i(5274);
                let eW = {
                    polling: !0,
                    standardBrowser: !0,
                    touchSession: !0,
                    isSatellite: !1,
                    signInUrl: void 0,
                    signUpUrl: void 0,
                    afterSignOutUrl: void 0,
                    signInFallbackRedirectUrl: void 0,
                    signUpFallbackRedirectUrl: void 0,
                    signInForceRedirectUrl: void 0,
                    signUpForceRedirectUrl: void 0
                };
                var eL = new WeakMap,
                    eF = new WeakMap,
                    eD = new WeakMap,
                    ej = new WeakMap,
                    eV = new WeakMap,
                    eK = new WeakMap,
                    e$ = new WeakMap,
                    eJ = new WeakMap,
                    eB = new WeakMap,
                    eq = new WeakMap,
                    eZ = new WeakMap,
                    eG = new WeakMap,
                    eH = new WeakMap,
                    eY = new WeakMap,
                    eX = new WeakMap,
                    eQ = new WeakSet,
                    e0 = new WeakMap,
                    e1 = new WeakMap,
                    e3 = new WeakMap,
                    e5 = new WeakMap,
                    e2 = new WeakMap,
                    e4 = new WeakMap,
                    e7 = new WeakMap,
                    e6 = new WeakMap,
                    e9 = new WeakMap,
                    e8 = new WeakMap,
                    te = new WeakMap,
                    tt = new WeakMap,
                    ti = new WeakMap,
                    tn = new WeakMap,
                    tr = new WeakMap,
                    ta = new WeakMap,
                    ts = new WeakMap,
                    to = new WeakMap,
                    tl = new WeakMap,
                    tc = new WeakMap,
                    td = new WeakMap,
                    tu = new WeakMap,
                    th = new WeakMap,
                    tp = new WeakMap,
                    tf = new WeakMap,
                    t_ = new WeakMap;
                class tv {
                    get publishableKey() {
                        return (0, O._)(this, eL)
                    }
                    get version() {
                        return tv.version
                    }
                    set sdkMetadata(e) {
                        tv.sdkMetadata = e
                    }
                    get sdkMetadata() {
                        return tv.sdkMetadata
                    }
                    get loaded() {
                        return (0, O._)(this, eq)
                    }
                    get isSatellite() {
                        return !!(0, Q._f)() && (0, X.YZ)((0, O._)(this, eH).isSatellite, new URL(window.location.href), !1)
                    }
                    get domain() {
                        if ((0, Q._f)()) {
                            let e = (0, Y.d5)((0, X.YZ)((0, O._)(this, eF), new URL(window.location.href)));
                            return "production" === (0, O._)(this, eB) ? (0, Y.xy)(e) : e
                        }
                        return ""
                    }
                    get proxyUrl() {
                        if ((0, Q._f)()) {
                            let e = (0, X.YZ)((0, O._)(this, eD), new URL(window.location.href));
                            return !(!e || j(e) || V(e)) && Q.RM.throwInvalidProxyUrl({
                                url: e
                            }), e ? V(e) ? new URL(e, window.location.origin).toString() : e : ""
                        }
                        return ""
                    }
                    get frontendApi() {
                        let e = (0, W.nQ)(this.publishableKey);
                        return e ? e.frontendApi : Q.RM.throwInvalidPublishableKeyError({
                            key: this.publishableKey
                        })
                    }
                    get instanceType() {
                        return (0, O._)(this, eB)
                    }
                    get isStandardBrowser() {
                        return (0, O._)(this, eH).standardBrowser || !1
                    }
                    __internal_getOption(e) {
                        return (0, O._)(this, eH)[e]
                    }
                    get isSignedIn() {
                        return !!this.session
                    }
                    buildUrlWithAuth(e) {
                        if ("production" === (0, O._)(this, eB)) return e;
                        let t = new URL(e, window.location.origin);
                        return t.origin !== window.location.origin && (0, O._)(this, ej) ? (0, O._)(this, ej).decorateUrlWithDevBrowserToken(t).href : t.href
                    }
                    buildSignInUrl(e) {
                        return (0, O._)(this, tu).call(this, "signInUrl", { ...e,
                            redirectUrl: (null == e ? void 0 : e.redirectUrl) || window.location.href
                        }, null == e ? void 0 : e.initialValues)
                    }
                    buildSignUpUrl(e) {
                        return (0, O._)(this, tu).call(this, "signUpUrl", { ...e,
                            redirectUrl: (null == e ? void 0 : e.redirectUrl) || window.location.href
                        }, null == e ? void 0 : e.initialValues)
                    }
                    buildUserProfileUrl() {
                        return this.environment && this.environment.displayConfig ? this.buildUrlWithAuth(this.environment.displayConfig.userProfileUrl) : ""
                    }
                    buildHomeUrl() {
                        return this.environment && this.environment.displayConfig ? this.buildUrlWithAuth(this.environment.displayConfig.homeUrl) : ""
                    }
                    buildAfterSignInUrl() {
                        let {
                            params: e
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.buildUrlWithAuth(new er.O((0, O._)(this, eH), {}, e).getAfterSignInUrl())
                    }
                    buildAfterSignUpUrl() {
                        let {
                            params: e
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.buildUrlWithAuth(new er.O((0, O._)(this, eH), {}, e).getAfterSignUpUrl())
                    }
                    buildAfterSignOutUrl() {
                        return (0, O._)(this, eH).afterSignOutUrl ? this.buildUrlWithAuth((0, O._)(this, eH).afterSignOutUrl) : "/"
                    }
                    buildWaitlistUrl(e) {
                        if (!this.environment || !this.environment.displayConfig) return "";
                        let t = (0, O._)(this, eH).waitlistUrl || this.environment.displayConfig.waitlistUrl,
                            i = new URLSearchParams((null == e ? void 0 : e.initialValues) || {});
                        return (0, Q.KV)({
                            base: t,
                            hashSearchParams: [i]
                        }, {
                            stringify: !0
                        })
                    }
                    buildAfterMultiSessionSingleSignOutUrl() {
                        if (!(0, O._)(this, eH).afterMultiSessionSingleSignOutUrl) {
                            var e;
                            return this.buildUrlWithAuth((0, Q.KV)({
                                base: (0, O._)(this, eH).signInUrl ? "".concat((0, O._)(this, eH).signInUrl, "/choose") : null === (e = this.environment) || void 0 === e ? void 0 : e.displayConfig.afterSignOutOneUrl
                            }, {
                                stringify: !0
                            }))
                        }
                        return this.buildUrlWithAuth((0, O._)(this, eH).afterMultiSessionSingleSignOutUrl)
                    }
                    buildCreateOrganizationUrl() {
                        return this.environment && this.environment.displayConfig ? this.buildUrlWithAuth(this.environment.displayConfig.createOrganizationUrl) : ""
                    }
                    buildOrganizationProfileUrl() {
                        return this.environment && this.environment.displayConfig ? this.buildUrlWithAuth(this.environment.displayConfig.organizationProfileUrl) : ""
                    }
                    updateEnvironment(e) {
                        this.environment = e
                    }
                    get __internal_last_error() {
                        let e = this.internal_last_error;
                        return this.internal_last_error = null, e
                    }
                    set __internal_last_error(e) {
                        this.internal_last_error = e
                    }
                    get __unstable__environment() {
                        return this.environment
                    }
                    __internal_navigateWithError(e, t) {
                        return this.__internal_last_error = t, this.navigate(e)
                    }
                    assertComponentsReady(e) {
                        if (!tv.mountComponentRenderer) throw Error("ClerkJS was loaded without UI components.");
                        if (!e) throw Error("ClerkJS components are not ready yet.")
                    }
                    constructor(e, t) {
                        var i = this;
                        if ((0, x._)(this, eQ), (0, C._)(this, t_, {
                                get: tg,
                                set: void 0
                            }), (0, R._)(this, "client", void 0), (0, R._)(this, "session", void 0), (0, R._)(this, "organization", void 0), (0, R._)(this, "user", void 0), (0, R._)(this, "__internal_country", void 0), (0, R._)(this, "telemetry", void 0), (0, R._)(this, "internal_last_error", null), (0, R._)(this, "environment", void 0), (0, C._)(this, eL, {
                                writable: !0,
                                value: ""
                            }), (0, C._)(this, eF, {
                                writable: !0,
                                value: void 0
                            }), (0, C._)(this, eD, {
                                writable: !0,
                                value: void 0
                            }), (0, C._)(this, ej, {
                                writable: !0,
                                value: void 0
                            }), (0, C._)(this, eV, {
                                writable: !0,
                                value: void 0
                            }), (0, C._)(this, eK, {
                                writable: !0,
                                value: null
                            }), (0, C._)(this, e$, {
                                writable: !0,
                                value: void 0
                            }), (0, C._)(this, eJ, {
                                writable: !0,
                                value: void 0
                            }), (0, C._)(this, eB, {
                                writable: !0,
                                value: void 0
                            }), (0, C._)(this, eq, {
                                writable: !0,
                                value: !1
                            }), (0, C._)(this, eZ, {
                                writable: !0,
                                value: []
                            }), (0, C._)(this, eG, {
                                writable: !0,
                                value: []
                            }), (0, C._)(this, eH, {
                                writable: !0,
                                value: {}
                            }), (0, C._)(this, eY, {
                                writable: !0,
                                value: null
                            }), (0, C._)(this, eX, {
                                writable: !0,
                                value: 0
                            }), (0, R._)(this, "__internal_getCachedResources", void 0), (0, R._)(this, "__internal_createPublicCredentials", void 0), (0, R._)(this, "__internal_getPublicCredentials", void 0), (0, R._)(this, "__internal_isWebAuthnSupported", void 0), (0, R._)(this, "__internal_isWebAuthnAutofillSupported", void 0), (0, R._)(this, "__internal_isWebAuthnPlatformAuthenticatorSupported", void 0), (0, R._)(this, "getFapiClient", () => (0, O._)(this, eJ)), (0, R._)(this, "load", async e => {
                                !this.loaded && ("development" === (0, O._)(this, eB) && D.k.warnOnce("Clerk: Clerk has been loaded with development keys. Development instances have strict usage limits and should not be used when deploying your application to production. Learn more: https://clerk.com/docs/deployments/overview"), I(this, eH, (0, O._)(this, tp).call(this, e)), (0, ee.v)((0, O._)(this, eH)), (0, O._)(this, eH).sdkMetadata && (tv.sdkMetadata = (0, O._)(this, eH).sdkMetadata), !1 !== (0, O._)(this, eH).telemetry && (this.telemetry = new q({
                                    clerkVersion: tv.version,
                                    samplingRate: 1,
                                    publishableKey: this.publishableKey,
                                    ...(0, O._)(this, eH).telemetry
                                })), (0, O._)(this, eH).standardBrowser ? I(this, eq, await (0, O._)(this, e9).call(this)) : I(this, eq, await (0, O._)(this, e8).call(this)))
                            }), (0, R._)(this, "signOut", async (e, t) => {
                                var i, n, r;
                                if (!this.client || 0 === this.client.sessions.length) return;
                                let a = "undefined" != typeof window && "function" == typeof window.__unstable__onBeforeSetActive ? window.__unstable__onBeforeSetActive : X.ZT,
                                    s = "undefined" != typeof window && "function" == typeof window.__unstable__onAfterSetActive ? window.__unstable__onAfterSetActive : X.ZT,
                                    o = e && "object" == typeof e ? e : t || {},
                                    l = (null == o ? void 0 : o.redirectUrl) || this.buildAfterSignOutUrl(),
                                    c = "function" == typeof e ? e : void 0,
                                    d = async () => {
                                        let e = (0, Q.HV)((0, O._)(this, eH).standardBrowser);
                                        e_.Y.dispatch(e_.U.UserSignOut, null), e_.Y.dispatch(e_.U.TokenUpdate, {
                                            token: null
                                        }), (0, O._)(this, ta).call(this), await e.track(async () => {
                                            c ? await c() : await this.navigate(l)
                                        }), !e.isUnloading() && ((0, O._)(this, to).call(this), (0, O._)(this, tn).call(this), await s())
                                    };
                                if (await a(), !o.sessionId || 1 === this.client.signedInSessions.length) {
                                    null === (r = null === (n = (0, O._)(this, eH).experimental) || void 0 === n ? void 0 : n.persistClient) || void 0 === r || r ? await this.client.removeSessions() : await this.client.destroy(), await d();
                                    return
                                }
                                let u = this.client.signedInSessions.find(e => e.id === o.sessionId),
                                    h = (null == u ? void 0 : u.id) && (null === (i = this.session) || void 0 === i ? void 0 : i.id) === u.id;
                                await (null == u ? void 0 : u.remove()), h && await d()
                            }), (0, R._)(this, "openGoogleOneTap", e => {
                                var t;
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted({
                                    preloadHint: "GoogleOneTap"
                                }).then(t => t.openModal("googleOneTap", e || {})), null === (t = this.telemetry) || void 0 === t || t.record(H("GoogleOneTap", e))
                            }), (0, R._)(this, "closeGoogleOneTap", () => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(e => e.closeModal("googleOneTap"))
                            }), (0, R._)(this, "openSignIn", e => {
                                var t, i;
                                if (this.assertComponentsReady((0, O._)(this, e$)), (0, Q.So)(this, this.environment)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotOpenSignInOrSignUp, {
                                        code: "cannot_render_single_session_enabled"
                                    });
                                    return
                                }(0, O._)(this, e$).ensureMounted({
                                    preloadHint: "SignIn"
                                }).then(t => t.openModal("signIn", e || {}));
                                let n = {
                                    withSignUp: null !== (i = null == e ? void 0 : e.withSignUp) && void 0 !== i ? i : (0, T._)(this, eQ, tm).call(this)
                                };
                                null === (t = this.telemetry) || void 0 === t || t.record(H("SignIn", e, n))
                            }), (0, R._)(this, "closeSignIn", () => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(e => e.closeModal("signIn"))
                            }), (0, R._)(this, "__internal_openReverification", e => {
                                var t;
                                if (this.assertComponentsReady((0, O._)(this, e$)), (0, Q.f)(this)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotOpenUserProfile, {
                                        code: "cannot_render_user_missing"
                                    });
                                    return
                                }(0, O._)(this, e$).ensureMounted({
                                    preloadHint: "UserVerification"
                                }).then(t => t.openModal("userVerification", e || {})), null === (t = this.telemetry) || void 0 === t || t.record(H("UserVerification", e))
                            }), (0, R._)(this, "__internal_closeReverification", () => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(e => e.closeModal("userVerification"))
                            }), (0, R._)(this, "__internal_openBlankCaptchaModal", () => (this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted({
                                preloadHint: "BlankCaptchaModal"
                            }).then(e => e.openModal("blankCaptcha", {})))), (0, R._)(this, "__internal_closeBlankCaptchaModal", () => (this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted({
                                preloadHint: "BlankCaptchaModal"
                            }).then(e => e.closeModal("blankCaptcha")))), (0, R._)(this, "openSignUp", e => {
                                var t;
                                if (this.assertComponentsReady((0, O._)(this, e$)), (0, Q.So)(this, this.environment)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotOpenSignInOrSignUp, {
                                        code: "cannot_render_single_session_enabled"
                                    });
                                    return
                                }(0, O._)(this, e$).ensureMounted({
                                    preloadHint: "SignUp"
                                }).then(t => t.openModal("signUp", e || {})), null === (t = this.telemetry) || void 0 === t || t.record(H("SignUp", e))
                            }), (0, R._)(this, "closeSignUp", () => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(e => e.closeModal("signUp"))
                            }), (0, R._)(this, "openUserProfile", e => {
                                var t, i;
                                if (this.assertComponentsReady((0, O._)(this, e$)), (0, Q.f)(this)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotOpenUserProfile, {
                                        code: "cannot_render_user_missing"
                                    });
                                    return
                                }(0, O._)(this, e$).ensureMounted({
                                    preloadHint: "UserProfile"
                                }).then(t => t.openModal("userProfile", e || {}));
                                let n = (null == e ? void 0 : null === (t = e.customPages) || void 0 === t ? void 0 : t.length) ? {
                                    customPages: !0
                                } : void 0;
                                null === (i = this.telemetry) || void 0 === i || i.record(H("UserProfile", e, n))
                            }), (0, R._)(this, "closeUserProfile", () => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(e => e.closeModal("userProfile"))
                            }), (0, R._)(this, "openOrganizationProfile", e => {
                                var t;
                                if (this.assertComponentsReady((0, O._)(this, e$)), (0, Q.sW)(this, this.environment)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotRenderAnyOrganizationComponent("OrganizationProfile"), {
                                        code: "cannot_render_organizations_disabled"
                                    });
                                    return
                                }
                                if ((0, Q.n$)(this)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotRenderComponentWhenOrgDoesNotExist, {
                                        code: "cannot_render_organization_missing"
                                    });
                                    return
                                }(0, O._)(this, e$).ensureMounted({
                                    preloadHint: "OrganizationProfile"
                                }).then(t => t.openModal("organizationProfile", e || {})), null === (t = this.telemetry) || void 0 === t || t.record(H("OrganizationProfile", e))
                            }), (0, R._)(this, "closeOrganizationProfile", () => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(e => e.closeModal("organizationProfile"))
                            }), (0, R._)(this, "openCreateOrganization", e => {
                                var t;
                                if (this.assertComponentsReady((0, O._)(this, e$)), (0, Q.sW)(this, this.environment)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotRenderAnyOrganizationComponent("CreateOrganization"), {
                                        code: "cannot_render_organizations_disabled"
                                    });
                                    return
                                }(0, O._)(this, e$).ensureMounted({
                                    preloadHint: "CreateOrganization"
                                }).then(t => t.openModal("createOrganization", e || {})), null === (t = this.telemetry) || void 0 === t || t.record(H("CreateOrganization", e))
                            }), (0, R._)(this, "closeCreateOrganization", () => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(e => e.closeModal("createOrganization"))
                            }), (0, R._)(this, "openWaitlist", e => {
                                var t;
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted({
                                    preloadHint: "Waitlist"
                                }).then(t => t.openModal("waitlist", e || {})), null === (t = this.telemetry) || void 0 === t || t.record(H("Waitlist", e))
                            }), (0, R._)(this, "closeWaitlist", () => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(e => e.closeModal("waitlist"))
                            }), (0, R._)(this, "mountSignIn", (e, t) => {
                                var i, n;
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted({
                                    preloadHint: "SignIn"
                                }).then(i => i.mountComponent({
                                    name: "SignIn",
                                    appearanceKey: "signIn",
                                    node: e,
                                    props: t
                                }));
                                let r = {
                                    withSignUp: null !== (n = null == t ? void 0 : t.withSignUp) && void 0 !== n ? n : (0, T._)(this, eQ, tm).call(this)
                                };
                                null === (i = this.telemetry) || void 0 === i || i.record(G("SignIn", t, r))
                            }), (0, R._)(this, "unmountSignIn", e => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(t => t.unmountComponent({
                                    node: e
                                }))
                            }), (0, R._)(this, "mountSignUp", (e, t) => {
                                var i;
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted({
                                    preloadHint: "SignUp"
                                }).then(i => i.mountComponent({
                                    name: "SignUp",
                                    appearanceKey: "signUp",
                                    node: e,
                                    props: t
                                })), null === (i = this.telemetry) || void 0 === i || i.record(G("SignUp", t))
                            }), (0, R._)(this, "unmountSignUp", e => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(t => t.unmountComponent({
                                    node: e
                                }))
                            }), (0, R._)(this, "mountUserProfile", (e, t) => {
                                var i, n;
                                if (this.assertComponentsReady((0, O._)(this, e$)), (0, Q.f)(this)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotRenderComponentWhenUserDoesNotExist, {
                                        code: "cannot_render_user_missing"
                                    });
                                    return
                                }(0, O._)(this, e$).ensureMounted({
                                    preloadHint: "UserProfile"
                                }).then(i => i.mountComponent({
                                    name: "UserProfile",
                                    appearanceKey: "userProfile",
                                    node: e,
                                    props: t
                                }));
                                let r = (null == t ? void 0 : null === (i = t.customPages) || void 0 === i ? void 0 : i.length) ? {
                                    customPages: !0
                                } : void 0;
                                null === (n = this.telemetry) || void 0 === n || n.record(G("UserProfile", t, r))
                            }), (0, R._)(this, "unmountUserProfile", e => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(t => t.unmountComponent({
                                    node: e
                                }))
                            }), (0, R._)(this, "mountOrganizationProfile", (e, t) => {
                                var i;
                                if (this.assertComponentsReady((0, O._)(this, e$)), (0, Q.sW)(this, this.environment)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotRenderAnyOrganizationComponent("OrganizationProfile"), {
                                        code: "cannot_render_organizations_disabled"
                                    });
                                    return
                                }
                                let n = !(0, Q.f)(this);
                                if ((0, Q.n$)(this) && n) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotRenderComponentWhenOrgDoesNotExist, {
                                        code: "cannot_render_organization_missing"
                                    });
                                    return
                                }(0, O._)(this, e$).ensureMounted({
                                    preloadHint: "OrganizationProfile"
                                }).then(i => i.mountComponent({
                                    name: "OrganizationProfile",
                                    appearanceKey: "userProfile",
                                    node: e,
                                    props: t
                                })), null === (i = this.telemetry) || void 0 === i || i.record(G("OrganizationProfile", t))
                            }), (0, R._)(this, "unmountOrganizationProfile", e => {
                                this.assertComponentsReady((0, O._)(this, e$)), (0, O._)(this, e$).ensureMounted().then(t => t.unmountComponent({
                                    node: e
                                }))
                            }), (0, R._)(this, "mountCreateOrganization", (e, t) => {
                                var i, n;
                                if (this.assertComponentsReady((0, O._)(this, e$)), (0, Q.sW)(this, this.environment)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotRenderAnyOrganizationComponent("CreateOrganization"), {
                                        code: "cannot_render_organizations_disabled"
                                    });
                                    return
                                }
                                null === (i = (0, O._)(this, e$)) || void 0 === i || i.ensureMounted({
                                    preloadHint: "CreateOrganization"
                                }).then(i => i.mountComponent({
                                    name: "CreateOrganization",
                                    appearanceKey: "createOrganization",
                                    node: e,
                                    props: t
                                })), null === (n = this.telemetry) || void 0 === n || n.record(G("CreateOrganization", t))
                            }), (0, R._)(this, "unmountCreateOrganization", e => {
                                var t;
                                this.assertComponentsReady((0, O._)(this, e$)), null === (t = (0, O._)(this, e$)) || void 0 === t || t.ensureMounted().then(t => t.unmountComponent({
                                    node: e
                                }))
                            }), (0, R._)(this, "mountOrganizationSwitcher", (e, t) => {
                                var i, n;
                                if (this.assertComponentsReady((0, O._)(this, e$)), (0, Q.sW)(this, this.environment)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotRenderAnyOrganizationComponent("OrganizationSwitcher"), {
                                        code: "cannot_render_organizations_disabled"
                                    });
                                    return
                                }
                                null === (i = (0, O._)(this, e$)) || void 0 === i || i.ensureMounted({
                                    preloadHint: "OrganizationSwitcher"
                                }).then(i => i.mountComponent({
                                    name: "OrganizationSwitcher",
                                    appearanceKey: "organizationSwitcher",
                                    node: e,
                                    props: t
                                })), null === (n = this.telemetry) || void 0 === n || n.record(G("OrganizationSwitcher", t))
                            }), (0, R._)(this, "unmountOrganizationSwitcher", e => {
                                var t;
                                this.assertComponentsReady((0, O._)(this, e$)), null === (t = (0, O._)(this, e$)) || void 0 === t || t.ensureMounted().then(t => t.unmountComponent({
                                    node: e
                                }))
                            }), (0, R._)(this, "__experimental_prefetchOrganizationSwitcher", () => {
                                var e;
                                this.assertComponentsReady((0, O._)(this, e$)), null === (e = (0, O._)(this, e$)) || void 0 === e || e.ensureMounted({
                                    preloadHint: "OrganizationSwitcher"
                                }).then(e => e.prefetch("organizationSwitcher"))
                            }), (0, R._)(this, "mountOrganizationList", (e, t) => {
                                var i, n;
                                if (this.assertComponentsReady((0, O._)(this, e$)), (0, Q.sW)(this, this.environment)) {
                                    if ("development" === (0, O._)(this, eB)) throw new N.w$(eN.q.cannotRenderAnyOrganizationComponent("OrganizationList"), {
                                        code: "cannot_render_organizations_disabled"
                                    });
                                    return
                                }
                                null === (i = (0, O._)(this, e$)) || void 0 === i || i.ensureMounted({
                                    preloadHint: "OrganizationList"
                                }).then(i => i.mountComponent({
                                    name: "OrganizationList",
                                    appearanceKey: "organizationList",
                                    node: e,
                                    props: t
                                })), null === (n = this.telemetry) || void 0 === n || n.record(G("OrganizationList", t))
                            }), (0, R._)(this, "unmountOrganizationList", e => {
                                var t;
                                this.assertComponentsReady((0, O._)(this, e$)), null === (t = (0, O._)(this, e$)) || void 0 === t || t.ensureMounted().then(t => t.unmountComponent({
                                    node: e
                                }))
                            }), (0, R._)(this, "mountUserButton", (e, t) => {
                                var i, n, r;
                                this.assertComponentsReady((0, O._)(this, e$)), null === (i = (0, O._)(this, e$)) || void 0 === i || i.ensureMounted({
                                    preloadHint: "UserButton"
                                }).then(i => i.mountComponent({
                                    name: "UserButton",
                                    appearanceKey: "userButton",
                                    node: e,
                                    props: t
                                }));
                                let a = { ...(null == t ? void 0 : null === (n = t.customMenuItems) || void 0 === n ? void 0 : n.length) ? {
                                        customItems: !0
                                    } : void 0,
                                    ...(null == t ? void 0 : t.__experimental_asStandalone) ? {
                                        standalone: !0
                                    } : void 0
                                };
                                null === (r = this.telemetry) || void 0 === r || r.record(G("UserButton", t, a))
                            }), (0, R._)(this, "unmountUserButton", e => {
                                var t;
                                this.assertComponentsReady((0, O._)(this, e$)), null === (t = (0, O._)(this, e$)) || void 0 === t || t.ensureMounted().then(t => t.unmountComponent({
                                    node: e
                                }))
                            }), (0, R._)(this, "mountWaitlist", (e, t) => {
                                var i, n;
                                this.assertComponentsReady((0, O._)(this, e$)), null === (i = (0, O._)(this, e$)) || void 0 === i || i.ensureMounted({
                                    preloadHint: "Waitlist"
                                }).then(i => i.mountComponent({
                                    name: "Waitlist",
                                    appearanceKey: "waitlist",
                                    node: e,
                                    props: t
                                })), null === (n = this.telemetry) || void 0 === n || n.record(G("Waitlist", t))
                            }), (0, R._)(this, "unmountWaitlist", e => {
                                var t;
                                this.assertComponentsReady((0, O._)(this, e$)), null === (t = (0, O._)(this, e$)) || void 0 === t || t.ensureMounted().then(t => t.unmountComponent({
                                    node: e
                                }))
                            }), (0, R._)(this, "setActive", async e => {
                                let {
                                    session: t,
                                    organization: i,
                                    beforeEmit: n,
                                    redirectUrl: r
                                } = e;
                                if (!this.client) throw Error("setActive is being called before the client is loaded. Wait for init.");
                                if (void 0 === t && !this.session) throw Error("setActive should either be called with a session param or there should be already an active session.");
                                let a = "undefined" != typeof window && "function" == typeof window.__unstable__onBeforeSetActive ? window.__unstable__onBeforeSetActive : X.ZT,
                                    s = "undefined" != typeof window && "function" == typeof window.__unstable__onAfterSetActive ? window.__unstable__onAfterSetActive : X.ZT;
                                "string" == typeof t && (t = this.client.sessions.find(e => e.id === t) || null);
                                let o = void 0 === t ? this.session : t,
                                    l = void 0 !== i;
                                if (o && l) {
                                    let e = "string" == typeof i ? i : null == i ? void 0 : i.id;
                                    if ((0, Q.ir)(e)) o.lastActiveOrganizationId = e || null;
                                    else {
                                        let t = o.user.organizationMemberships.find(t => t.organization.slug === e);
                                        o.lastActiveOrganizationId = (null == t ? void 0 : t.organization.id) || null
                                    }
                                }(null == t ? void 0 : t.lastActiveToken) && e_.Y.dispatch(e_.U.TokenUpdate, {
                                    token: t.lastActiveToken
                                }), await a(null === o ? "sign-out" : void 0), ((0, Q.oH)() || !(0, O._)(this, eH).standardBrowser) && (await (0, O._)(this, ti).call(this, o), o = (0, O._)(this, tl).call(this, null == o ? void 0 : o.id)), await (null == o ? void 0 : o.getToken()) || e_.Y.dispatch(e_.U.TokenUpdate, {
                                    token: null
                                });
                                let c = (0, Q.HV)((0, O._)(this, eH).standardBrowser);
                                n && ((0, z.x9)("Clerk.setActive({beforeEmit})", 'Use the `redirectUrl` property instead. Example `Clerk.setActive({redirectUrl:"/"})`'), await c.track(async () => {
                                    (0, O._)(this, ta).call(this), await n(o)
                                })), r && !n && await c.track(async () => {
                                    if (this.client) {
                                        if ((0, O._)(this, ta).call(this), this.client.isEligibleForTouch()) {
                                            let e = new URL(r, window.location.href);
                                            await this.navigate(this.buildUrlWithAuth(this.client.buildTouchUrl({
                                                redirectUrl: e
                                            })))
                                        } else await this.navigate(r)
                                    }
                                }), !c.isUnloading() && ((0, O._)(this, to).call(this, o), (0, O._)(this, tn).call(this), await s())
                            }), (0, R._)(this, "addListener", e => {
                                var t;
                                let i;
                                return t = e, e = e => {
                                    var n;
                                    i || (i = { ...e
                                    }), t(i = {
                                        client: en((n = i).client, e.client),
                                        session: en(n.session, e.session),
                                        user: en(n.user, e.user),
                                        organization: en(n.organization, e.organization)
                                    })
                                }, (0, O._)(this, eZ).push(e), this.client && e({
                                    client: this.client,
                                    session: this.session,
                                    user: this.user,
                                    organization: this.organization
                                }), () => {
                                    I(this, eZ, (0, O._)(this, eZ).filter(t => t !== e))
                                }
                            }), (0, R._)(this, "__internal_addNavigationListener", e => ((0, O._)(this, eG).push(e), () => {
                                I(this, eG, (0, O._)(this, eG).filter(t => t !== e))
                            })), (0, R._)(this, "navigate", async (e, t) => {
                                if (!e || !(0, Q._f)()) return;
                                setTimeout(() => {
                                    (0, O._)(this, tr).call(this)
                                }, 0);
                                let i = new URL(e, window.location.href);
                                (0, O._)(this, t_).includes(i.protocol) || (console.warn('Clerk: "'.concat(i.protocol, '" is not a valid protocol. Redirecting to "/" instead. If you think this is a mistake, please open an issue.')), i = new URL("/", window.location.href));
                                let n = (null == t ? void 0 : t.replace) && (0, O._)(this, eH).routerReplace ? (0, O._)(this, eH).routerReplace : (0, O._)(this, eH).routerPush;
                                if ((0, O._)(this, eH).routerDebug && console.log("Clerk is navigating to: ".concat(i)), "null" !== i.origin && i.origin !== window.location.origin || !n) {
                                    (0, Q.T7)(i);
                                    return
                                }
                                let r = { ...(null == t ? void 0 : t.metadata) ? {
                                        __internal_metadata: null == t ? void 0 : t.metadata
                                    } : {},
                                    windowNavigate: Q.T7
                                };
                                return await n((0, Q.M)(i), r)
                            }), (0, C._)(this, e0, {
                                writable: !0,
                                value: async () => {
                                    if (!(0, Q._f)()) return;
                                    let e = new URLSearchParams({
                                            [ex.cD]: "true"
                                        }),
                                        t = (0, Q.XV)(ex.w9);
                                    t && j(t) || (0, ef.sY)();
                                    let i = (0, Q.KV)({
                                        base: (0, Q.XV)(ex.w9),
                                        searchParams: e
                                    }, {
                                        stringify: !0
                                    });
                                    return this.navigate(this.buildUrlWithAuth(i))
                                }
                            }), (0, R._)(this, "redirectWithAuth", async e => {
                                if ((0, Q._f)()) return this.navigate(this.buildUrlWithAuth(e))
                            }), (0, R._)(this, "redirectToSignIn", async e => {
                                if ((0, Q._f)()) return this.navigate(this.buildSignInUrl(e))
                            }), (0, R._)(this, "redirectToSignUp", async e => {
                                if ((0, Q._f)()) return this.navigate(this.buildSignUpUrl(e))
                            }), (0, R._)(this, "redirectToUserProfile", async () => {
                                if ((0, Q._f)()) return this.navigate(this.buildUserProfileUrl())
                            }), (0, R._)(this, "redirectToCreateOrganization", async () => {
                                if ((0, Q._f)()) return this.navigate(this.buildCreateOrganizationUrl())
                            }), (0, R._)(this, "redirectToOrganizationProfile", async () => {
                                if ((0, Q._f)()) return this.navigate(this.buildOrganizationProfileUrl())
                            }), (0, R._)(this, "redirectToAfterSignIn", async () => {
                                if ((0, Q._f)()) return this.navigate(this.buildAfterSignInUrl())
                            }), (0, R._)(this, "redirectToAfterSignUp", async () => {
                                if ((0, Q._f)()) return this.navigate(this.buildAfterSignUpUrl())
                            }), (0, R._)(this, "redirectToAfterSignOut", async () => {
                                if ((0, Q._f)()) return this.navigate(this.buildAfterSignOutUrl())
                            }), (0, R._)(this, "redirectToWaitlist", async () => {
                                if ((0, Q._f)()) return this.navigate(this.buildWaitlistUrl())
                            }), (0, R._)(this, "handleEmailLinkVerification", async (e, t) => {
                                if (!this.client) return;
                                let i = (0, Q.XV)("__clerk_status");
                                if ("expired" === i) throw new et.N(N.u$.Expired);
                                if ("client_mismatch" === i) throw new et.N(N.u$.ClientMismatch);
                                if ("verified" !== i) throw new et.N(N.u$.Failed);
                                let n = (0, Q.XV)("__clerk_created_session"),
                                    {
                                        signIn: r,
                                        signUp: a,
                                        sessions: s
                                    } = this.client,
                                    o = s.some(e => e.id === n),
                                    l = "needs_second_factor" === r.status || "missing_requirements" === a.status,
                                    c = e => t && "function" == typeof t ? t(e) : this.navigate(e),
                                    d = e.redirectUrl ? () => c(e.redirectUrl) : X.ZT;
                                return o ? this.setActive({
                                    session: n,
                                    redirectUrl: e.redirectUrlComplete
                                }) : l ? d() : ("function" == typeof e.onVerifiedOnOtherDevice && e.onVerifiedOnOtherDevice(), null)
                            }), (0, R._)(this, "handleGoogleOneTapCallback", async (e, t, i) => {
                                if (!this.loaded || !this.environment || !this.client) return;
                                let {
                                    signIn: n,
                                    signUp: r
                                } = this.client, a = "identifier" in (e || {}) ? e : n, s = "missingFields" in (e || {}) ? e : r;
                                return this._handleRedirectCallback(t, {
                                    signUp: s,
                                    signIn: a,
                                    navigate: e => i && "function" == typeof i ? i(this.buildUrlWithAuth(e)) : this.navigate(this.buildUrlWithAuth(e))
                                })
                            }), (0, R._)(this, "_handleRedirectCallback", async (e, t) => {
                                var i, n, r, a, s, o, l;
                                let {
                                    signIn: c,
                                    signUp: d,
                                    navigate: u
                                } = t;
                                if (!this.loaded || !this.environment || !this.client) return;
                                let {
                                    displayConfig: h
                                } = this.environment, {
                                    firstFactorVerification: p
                                } = c, {
                                    externalAccount: f
                                } = d.verifications, _ = {
                                    status: d.status,
                                    missingFields: d.missingFields,
                                    externalAccountStatus: f.status,
                                    externalAccountErrorCode: null === (i = f.error) || void 0 === i ? void 0 : i.code,
                                    externalAccountSessionId: null === (r = f.error) || void 0 === r ? void 0 : null === (n = r.meta) || void 0 === n ? void 0 : n.sessionId,
                                    sessionId: d.createdSessionId
                                }, v = {
                                    status: c.status,
                                    firstFactorVerificationStatus: p.status,
                                    firstFactorVerificationErrorCode: null === (a = p.error) || void 0 === a ? void 0 : a.code,
                                    firstFactorVerificationSessionId: null === (o = p.error) || void 0 === o ? void 0 : null === (s = o.meta) || void 0 === s ? void 0 : s.sessionId,
                                    sessionId: c.createdSessionId
                                }, m = e => () => u(e), g = m(e.signInUrl || h.signInUrl), y = m(e.signUpUrl || h.signUpUrl), w = m(e.firstFactorUrl || (0, Q.KV)({
                                    base: h.signInUrl,
                                    hashPath: "/factor-one"
                                }, {
                                    stringify: !0
                                })), b = m(e.secondFactorUrl || (0, Q.KV)({
                                    base: h.signInUrl,
                                    hashPath: "/factor-two"
                                }, {
                                    stringify: !0
                                })), S = m(e.resetPasswordUrl || (0, Q.KV)({
                                    base: h.signInUrl,
                                    hashPath: "/reset-password"
                                }, {
                                    stringify: !0
                                })), k = new er.O((0, O._)(this, eH), e), A = m(e.continueSignUpUrl || (0, Q.KV)({
                                    base: h.signUpUrl,
                                    hashPath: "/continue"
                                }, {
                                    stringify: !0
                                })), U = t => {
                                    let {
                                        missingFields: i
                                    } = t;
                                    return i.length ? A() : (0, Q.vx)({
                                        signUp: d,
                                        verifyEmailPath: e.verifyEmailAddressUrl || (0, Q.KV)({
                                            base: h.signUpUrl,
                                            hashPath: "/verify-email-address"
                                        }, {
                                            stringify: !0
                                        }),
                                        verifyPhonePath: e.verifyPhoneNumberUrl || (0, Q.KV)({
                                            base: h.signUpUrl,
                                            hashPath: "/verify-phone-number"
                                        }, {
                                            stringify: !0
                                        }),
                                        navigate: u
                                    })
                                };
                                if ("complete" === v.status) return this.setActive({
                                    session: v.sessionId,
                                    redirectUrl: k.getAfterSignInUrl()
                                });
                                if ("transferable" === _.externalAccountStatus && "external_account_exists" === _.externalAccountErrorCode) {
                                    let e = await c.create({
                                        transfer: !0
                                    });
                                    switch (e.status) {
                                        case "complete":
                                            return this.setActive({
                                                session: e.createdSessionId,
                                                redirectUrl: k.getAfterSignInUrl()
                                            });
                                        case "needs_first_factor":
                                            return w();
                                        case "needs_second_factor":
                                            return b();
                                        case "needs_new_password":
                                            return S();
                                        default:
                                            (0, ef.O7)("sign in")
                                    }
                                }
                                let C = "user_locked" === _.externalAccountErrorCode,
                                    P = "user_locked" === v.firstFactorVerificationErrorCode;
                                if (C) return y();
                                if (P) return g();
                                if ("needs_first_factor" === v.status && !(null === (l = c.supportedFirstFactors) || void 0 === l ? void 0 : l.every(e => "enterprise_sso" === e.strategy))) return w();
                                if ("needs_new_password" === v.status) return S();
                                if ("transferable" === v.firstFactorVerificationStatus) {
                                    if (!1 === e.transferable) return g();
                                    let t = await d.create({
                                        transfer: !0
                                    });
                                    switch (t.status) {
                                        case "complete":
                                            return this.setActive({
                                                session: t.createdSessionId,
                                                redirectUrl: k.getAfterSignUpUrl()
                                            });
                                        case "missing_requirements":
                                            return U({
                                                missingFields: t.missingFields
                                            });
                                        default:
                                            (0, ef.O7)("sign in")
                                    }
                                }
                                if ("complete" === _.status) return this.setActive({
                                    session: _.sessionId,
                                    redirectUrl: k.getAfterSignUpUrl()
                                });
                                if ("needs_second_factor" === v.status) return b();
                                let E = ("failed" === _.externalAccountStatus || "unverified" === _.externalAccountStatus) && "identifier_already_signed_in" === _.externalAccountErrorCode && _.externalAccountSessionId,
                                    I = "failed" === v.firstFactorVerificationStatus && "identifier_already_signed_in" === v.firstFactorVerificationErrorCode && v.firstFactorVerificationSessionId;
                                if (E || I) {
                                    let e = v.firstFactorVerificationSessionId || _.externalAccountSessionId;
                                    if (e) return this.setActive({
                                        session: e,
                                        redirectUrl: k.getAfterSignInUrl()
                                    })
                                }
                                return (0, Q.l1)(d) ? y() : "verified" === _.externalAccountStatus && "missing_requirements" === _.status ? U({
                                    missingFields: d.missingFields
                                }) : g()
                            }), (0, R._)(this, "handleRedirectCallback", async function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = arguments.length > 1 ? arguments[1] : void 0;
                                if (!i.loaded || !i.environment || !i.client) return;
                                let {
                                    signIn: n,
                                    signUp: r
                                } = i.client;
                                return i._handleRedirectCallback(e, {
                                    signUp: r,
                                    signIn: n,
                                    navigate: e => t && "function" == typeof t ? t(e) : i.navigate(e)
                                })
                            }), (0, R._)(this, "handleUnauthenticated", async function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                    broadcast: !0
                                };
                                if (i.client && i.session) try {
                                    let t = await et.KU.getOrCreateInstance().fetch();
                                    if (i.updateClient(t), i.session) return;
                                    return e.broadcast && e_.Y.dispatch(e_.U.UserSignOut, null), i.setActive({
                                        session: null
                                    })
                                } catch (e) {
                                    if (403 === e.status) return i.setActive({
                                        session: null
                                    });
                                    throw e
                                }
                            }), (0, R._)(this, "authenticateWithGoogleOneTap", async e => {
                                var t;
                                return null === (t = this.client) || void 0 === t ? void 0 : t.signIn.create({
                                    strategy: "google_one_tap",
                                    token: e.token
                                }).catch(t => {
                                    if ((0, N.kD)(t) && "external_account_not_found" === t.errors[0].code) {
                                        var i;
                                        return null === (i = this.client) || void 0 === i ? void 0 : i.signUp.create({
                                            strategy: "google_one_tap",
                                            token: e.token,
                                            legalAccepted: e.legalAccepted
                                        })
                                    }
                                    throw t
                                })
                            }), (0, R._)(this, "authenticateWithMetamask", async function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                await i.authenticateWithWeb3({ ...e,
                                    strategy: "web3_metamask_signature"
                                })
                            }), (0, R._)(this, "authenticateWithCoinbaseWallet", async function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                await i.authenticateWithWeb3({ ...e,
                                    strategy: "web3_coinbase_wallet_signature"
                                })
                            }), (0, R._)(this, "authenticateWithOKXWallet", async function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                await i.authenticateWithWeb3({ ...e,
                                    strategy: "web3_okx_wallet_signature"
                                })
                            }), (0, R._)(this, "authenticateWithWeb3", async e => {
                                let t, {
                                    redirectUrl: i,
                                    signUpContinueUrl: n,
                                    customNavigate: r,
                                    unsafeMetadata: a,
                                    strategy: s,
                                    legalAccepted: o
                                } = e;
                                if (!this.client || !this.environment) return;
                                let l = s.replace("web3_", "").replace("_signature", ""),
                                    c = await (0, Q.Ly)({
                                        provider: l
                                    }),
                                    d = "metamask" === l ? Q.wO : "coinbase_wallet" === l ? Q.dR : Q.C3;
                                try {
                                    t = await this.client.signIn.authenticateWithWeb3({
                                        identifier: c,
                                        generateSignature: d,
                                        strategy: s
                                    })
                                } catch (e) {
                                    if ((0, Q.VZ)(e, ex.O1.FORM_IDENTIFIER_NOT_FOUND)) {
                                        if (t = await this.client.signUp.authenticateWithWeb3({
                                                identifier: c,
                                                generateSignature: d,
                                                unsafeMetadata: a,
                                                strategy: s,
                                                legalAccepted: o
                                            }), n && "missing_requirements" === t.status && "verified" === t.verifications.web3Wallet.status) await (r && "function" == typeof r ? r(n) : this.navigate(n))
                                    } else throw e
                                }
                                t.createdSessionId && await this.setActive({
                                    session: t.createdSessionId,
                                    redirectUrl: i
                                })
                            }), (0, R._)(this, "createOrganization", async e => {
                                let {
                                    name: t,
                                    slug: i
                                } = e;
                                return et.cp.create({
                                    name: t,
                                    slug: i
                                })
                            }), (0, R._)(this, "getOrganization", async e => et.cp.get(e)), (0, R._)(this, "joinWaitlist", async e => {
                                let {
                                    emailAddress: t
                                } = e;
                                return et.yk.join({
                                    emailAddress: t
                                })
                            }), (0, R._)(this, "__internal_setCountry", e => {
                                this.__internal_country || (this.__internal_country = e)
                            }), (0, R._)(this, "updateClient", e => {
                                if (!this.client) {
                                    let t = (0, O._)(this, eH).selectInitialSession ? (0, O._)(this, eH).selectInitialSession(e) : (0, O._)(this, te).call(this, e);
                                    (0, O._)(this, to).call(this, t)
                                }
                                if (this.client = e, this.session) {
                                    var t;
                                    let e = (0, O._)(this, tl).call(this, this.session.id);
                                    (0, O._)(this, to).call(this, e), e_.Y.dispatch(e_.U.TokenUpdate, {
                                        token: null === (t = this.session) || void 0 === t ? void 0 : t.lastActiveToken
                                    })
                                }(0, O._)(this, tn).call(this)
                            }), (0, R._)(this, "__unstable__setEnvironment", async e => {
                                this.environment = new et.qA(e), tv.mountComponentRenderer && I(this, e$, tv.mountComponentRenderer(this, this.environment, (0, O._)(this, eH)))
                            }), (0, R._)(this, "__unstable__onBeforeRequest", e => {
                                (0, O._)(this, eJ).onBeforeRequest(e)
                            }), (0, R._)(this, "__unstable__onAfterResponse", e => {
                                (0, O._)(this, eJ).onAfterResponse(e)
                            }), (0, R._)(this, "__unstable__updateProps", e => {
                                var t;
                                let i = { ...e,
                                    options: (0, O._)(this, tp).call(this, { ...(0, O._)(this, eH),
                                        ...e.options
                                    })
                                };
                                return null === (t = (0, O._)(this, e$)) || void 0 === t ? void 0 : t.ensureMounted().then(e => e.updateProps(i))
                            }), (0, C._)(this, e1, {
                                writable: !0,
                                value: () => {
                                    let e = new URLSearchParams({
                                        [ex.w9]: window.location.href
                                    });
                                    return (0, Q.KV)({
                                        base: (0, O._)(this, eH).signInUrl,
                                        searchParams: e
                                    }, {
                                        stringify: !0
                                    })
                                }
                            }), (0, C._)(this, e3, {
                                writable: !0,
                                value: () => {
                                    let e;
                                    if (this.proxyUrl) {
                                        let t = new URL(this.proxyUrl);
                                        e = new URL("".concat(t.pathname, "/v1/client/sync"), t.origin)
                                    } else this.domain && (e = new URL("/v1/client/sync", "https://".concat(this.domain)));
                                    return null == e || e.searchParams.append("redirect_url", window.location.href), (null == e ? void 0 : e.toString()) || ""
                                }
                            }), (0, C._)(this, e5, {
                                writable: !0,
                                value: () => {
                                    var e;
                                    return "true" !== (0, Q.XV)(ex.cD) && !!this.isSatellite && !!(null === (e = (0, O._)(this, ej)) || void 0 === e ? void 0 : e.isSignedOut())
                                }
                            }), (0, C._)(this, e2, {
                                writable: !0,
                                value: () => "production" !== (0, O._)(this, eB) && !this.isSatellite && !!(0, Q.XV)(ex.w9)
                            }), (0, C._)(this, e4, {
                                writable: !0,
                                value: async () => {
                                    "development" === this.instanceType ? await this.navigate((0, O._)(this, e1).call(this)) : "production" === this.instanceType && await this.navigate((0, O._)(this, e3).call(this))
                                }
                            }), (0, C._)(this, e7, {
                                writable: !0,
                                value: (e, t) => {
                                    let i;
                                    try {
                                        i = new URL(e)
                                    } catch {
                                        (0, ef._5)()
                                    }
                                    i.origin === t && (0, ef.cT)()
                                }
                            }), (0, C._)(this, e6, {
                                writable: !0,
                                value: () => {
                                    this.isSatellite && ("development" !== (0, O._)(this, eB) || (0, O._)(this, eH).signInUrl || (0, ef.qW)(), this.proxyUrl || this.domain || (0, ef.xZ)(), (0, O._)(this, eH).signInUrl && (0, O._)(this, e7).call(this, (0, O._)(this, eH).signInUrl, window.location.origin))
                                }
                            }), (0, C._)(this, e9, {
                                writable: !0,
                                value: async () => {
                                    var e, t;
                                    if (I(this, ej, await eE.create(this, (0, O._)(this, eJ), (0, O._)(this, eB))), (0, O._)(this, e6).call(this), (0, O._)(this, e5).call(this)) return await (0, O._)(this, e4).call(this), !1;
                                    if ((0, O._)(this, e2).call(this)) return await (0, O._)(this, e0).call(this), !1;
                                    I(this, eY, (0, Q.LM)()), I(this, eK, new L("clerk")), (0, O._)(this, tt).call(this);
                                    let i = (0, Q.u9)(null === (e = window) || void 0 === e ? void 0 : e.location.hostname),
                                        n = "development" === (0, O._)(this, eB) && !i,
                                        r = 0;
                                    for (; r < 2;) {
                                        r++;
                                        try {
                                            let e = et.qA.getInstance().fetch({
                                                    touch: n
                                                }).then(e => {
                                                    this.updateEnvironment(e)
                                                }),
                                                i = () => et.KU.getOrCreateInstance().fetch().then(e => this.updateClient(e)),
                                                r = () => {
                                                    tv.mountComponentRenderer && !(0, O._)(this, e$) && I(this, e$, tv.mountComponentRenderer(this, this.environment, (0, O._)(this, eH)))
                                                };
                                            if (await Promise.all([e, i()]).catch(async t => {
                                                    if ((0, N.kD)(t) && "requires_captcha" === t.errors[0].code) await e, r(), await i();
                                                    else throw t
                                                }), null === (t = (0, O._)(this, ej)) || void 0 === t || t.setClientUatCookieForDevelopmentInstances(), await (0, O._)(this, th).call(this)) return !1;
                                            r();
                                            break
                                        } catch (e) {
                                            if ((0, Q.VZ)(e, "dev_browser_unauthenticated")) await (0, O._)(this, ej).handleUnauthenticatedDevBrowser();
                                            else if (!(0, M.af)()) return console.warn(e), !1;
                                            else throw e
                                        }
                                        r >= 2 && (0, ef.Xp)()
                                    }
                                    return I(this, eV, new eT(this)), (0, O._)(this, eV).start(), (0, O._)(this, tf).call(this), (0, O._)(this, tc).call(this), (0, O._)(this, td).call(this), !0
                                }
                            }), (0, R._)(this, "shouldFallbackToCachedResources", () => !!this.__internal_getCachedResources), (0, C._)(this, e8, {
                                writable: !0,
                                value: async () => {
                                    let e, t;
                                    let i = this.shouldFallbackToCachedResources() ? 1 : void 0;
                                    try {
                                        [e, t] = await Promise.all([et.qA.getInstance().fetch({
                                            touch: !1,
                                            fetchMaxTries: i
                                        }), et.KU.getOrCreateInstance().fetch({
                                            fetchMaxTries: i
                                        })])
                                    } catch (i) {
                                        if ((0, et.uX)(i) && "network_error" === i.code && this.shouldFallbackToCachedResources()) {
                                            var n;
                                            let i = await (null === (n = this.__internal_getCachedResources) || void 0 === n ? void 0 : n.call(this));
                                            e = new et.qA(null == i ? void 0 : i.environment), et.KU.clearInstance(), t = et.KU.getOrCreateInstance(null == i ? void 0 : i.client)
                                        } else throw i
                                    }
                                    return this.updateClient(t), this.updateEnvironment(e), tv.mountComponentRenderer && I(this, e$, tv.mountComponentRenderer(this, this.environment, (0, O._)(this, eH))), !0
                                }
                            }), (0, R._)(this, "__internal_reloadInitialResources", async () => {
                                let [e, t] = await Promise.all([et.qA.getInstance().fetch({
                                    touch: !1,
                                    fetchMaxTries: 1
                                }), et.KU.getOrCreateInstance().fetch({
                                    fetchMaxTries: 1
                                })]);
                                this.updateClient(t), this.updateEnvironment(e), (0, O._)(this, tn).call(this)
                            }), (0, C._)(this, te, {
                                writable: !0,
                                value: e => {
                                    if (e.lastActiveSessionId) {
                                        let t = e.signedInSessions.find(t => t.id === e.lastActiveSessionId);
                                        if (t) return t
                                    }
                                    return e.signedInSessions[0] || null
                                }
                            }), (0, C._)(this, tt, {
                                writable: !0,
                                value: () => {
                                    var e, t;
                                    (0, M._f)() && (null === (e = (0, O._)(this, eY)) || void 0 === e || e.onPageFocus(() => {
                                        !(!this.session || (0, O._)(this, eX) > Date.now()) && (I(this, eX, Date.now() + 5e3), (0, O._)(this, ti).call(this, this.session))
                                    }), null === (t = (0, O._)(this, eK)) || void 0 === t || t.addEventListener("message", e => {
                                        let {
                                            data: t
                                        } = e;
                                        "signout" === t.type && this.handleUnauthenticated({
                                            broadcast: !1
                                        })
                                    }), e_.Y.on(e_.U.UserSignOut, () => {
                                        var e;
                                        null === (e = (0, O._)(this, eK)) || void 0 === e || e.postMessage({
                                            type: "signout"
                                        })
                                    }))
                                }
                            }), (0, C._)(this, ti, {
                                writable: !0,
                                value: async e => {
                                    if (!e || !(0, O._)(this, eH).touchSession) return Promise.resolve();
                                    await e.touch().catch(e => {
                                        (0, N.ix)(e) && this.handleUnauthenticated()
                                    })
                                }
                            }), (0, C._)(this, tn, {
                                writable: !0,
                                value: () => {
                                    if (this.client)
                                        for (let e of (0, O._)(this, eZ)) e({
                                            client: this.client,
                                            session: this.session,
                                            user: this.user,
                                            organization: this.organization
                                        })
                                }
                            }), (0, C._)(this, tr, {
                                writable: !0,
                                value: () => {
                                    for (let e of (0, O._)(this, eG)) e()
                                }
                            }), (0, C._)(this, ta, {
                                writable: !0,
                                value: () => {
                                    this.session = void 0, this.organization = void 0, this.user = void 0, (0, O._)(this, tn).call(this)
                                }
                            }), (0, C._)(this, ts, {
                                writable: !0,
                                value: () => {
                                    var e;
                                    return ((null === (e = this.session) || void 0 === e ? void 0 : e.user.organizationMemberships) || []).map(e => e.organization).find(e => {
                                        var t;
                                        return e.id === (null === (t = this.session) || void 0 === t ? void 0 : t.lastActiveOrganizationId)
                                    }) || null
                                }
                            }), (0, C._)(this, to, {
                                writable: !0,
                                value: e => {
                                    this.session = e || null, this.organization = (0, O._)(this, ts).call(this), this.user = this.session ? this.session.user : null
                                }
                            }), (0, C._)(this, tl, {
                                writable: !0,
                                value: e => {
                                    var t;
                                    return (null === (t = this.client) || void 0 === t ? void 0 : t.signedInSessions.find(t => t.id === e)) || null
                                }
                            }), (0, C._)(this, tc, {
                                writable: !0,
                                value: () => {
                                    this.addListener(e => {
                                        let {
                                            session: t
                                        } = e;
                                        if (null == t ? void 0 : t.actor) {
                                            var i;
                                            null === (i = (0, O._)(this, e$)) || void 0 === i || i.ensureMounted().then(e => e.mountImpersonationFab())
                                        }
                                    })
                                }
                            }), (0, C._)(this, td, {
                                writable: !0,
                                value: () => {
                                    if ((0, O._)(this, eH).__internal_keyless_claimKeylessApplicationUrl) {
                                        var e;
                                        null === (e = (0, O._)(this, e$)) || void 0 === e || e.ensureMounted().then(e => {
                                            e.updateProps({
                                                options: {
                                                    __internal_keyless_claimKeylessApplicationUrl: (0, O._)(this, eH).__internal_keyless_claimKeylessApplicationUrl,
                                                    __internal_keyless_copyInstanceKeysUrl: (0, O._)(this, eH).__internal_keyless_copyInstanceKeysUrl,
                                                    __internal_keyless_dismissPrompt: (0, O._)(this, eH).__internal_keyless_dismissPrompt
                                                }
                                            })
                                        })
                                    }
                                }
                            }), (0, C._)(this, tu, {
                                writable: !0,
                                value: (e, t, i) => {
                                    if (!e || !this.loaded || !this.environment || !this.environment.displayConfig) return "";
                                    let n = (0, O._)(this, eH)[e] || this.environment.displayConfig[e];
                                    (0, T._)(this, eQ, tm).call(this) && (n = (0, O._)(this, eH).signInUrl);
                                    let r = new er.O((0, O._)(this, eH), t).toSearchParams(),
                                        a = new URLSearchParams(i || {}),
                                        s = (0, Q.KV)({
                                            base: n,
                                            hashPath: (0, T._)(this, eQ, tm).call(this) && "signUpUrl" === e ? "/create" : "",
                                            hashSearchParams: [a, r]
                                        }, {
                                            stringify: !0
                                        });
                                    return this.buildUrlWithAuth(s)
                                }
                            }), (0, C._)(this, th, {
                                writable: !0,
                                value: async () => {
                                    var e, t;
                                    let i = new URLSearchParams(window.location.search).get("redirect_url"),
                                        n = "production" === this.instanceType,
                                        r = null !== i && (0, Q.To)(this.frontendApi, i);
                                    if (n || !r) return !1;
                                    let a = this.session,
                                        s = (0, O._)(this, eH).signInUrl || (null === (e = this.environment) || void 0 === e ? void 0 : e.displayConfig.signInUrl),
                                        o = s && window.location.href.startsWith(s),
                                        l = (0, O._)(this, eH).signUpUrl || (null === (t = this.environment) || void 0 === t ? void 0 : t.displayConfig.signUpUrl),
                                        c = l && window.location.href.startsWith(l);
                                    return (!(0, Q.WW)(i) || !!a || !o && !c) && (await this.navigate(this.buildUrlWithAuth(i)), !0)
                                }
                            }), (0, C._)(this, tp, {
                                writable: !0,
                                value: e => ({ ...eW,
                                    ...e,
                                    allowedRedirectOrigins: (0, Q.$1)(null == e ? void 0 : e.allowedRedirectOrigins, this.frontendApi, this.instanceType)
                                })
                            }), (0, C._)(this, tf, {
                                writable: !0,
                                value: () => {
                                    try {
                                        (0, Q.xy)(ex.cD), (0, Q.xy)(ex.cc), (0, Q.xy)("__clerk_handshake"), (0, Q.xy)("__clerk_help")
                                    } catch {}
                                }
                            }), e = (e || "").trim(), I(this, eF, null == t ? void 0 : t.domain), I(this, eD, null == t ? void 0 : t.proxyUrl), !e) return Q.RM.throwMissingPublishableKeyError();
                        let n = (0, W.nQ)(e);
                        if (!n) return Q.RM.throwInvalidPublishableKeyError({
                            key: e
                        });
                        I(this, eL, e), I(this, eB, n.instanceType), I(this, eJ, function(e) {
                            let t = [],
                                i = [];
                            async function n(e) {
                                for await (let i of ["undefined" != typeof window && window.__unstable__onBeforeRequest, ...t].filter(e => e)) if (await i(e) === !1) return !1;
                                return !0
                            }
                            async function r(e, t) {
                                for await (let n of ["undefined" != typeof window && window.__unstable__onAfterResponse, ...i].filter(e => e)) if (await n(e, t) === !1) return !1;
                                return !0
                            }

                            function a(t) {
                                let {
                                    method: i,
                                    path: n,
                                    sessionId: r,
                                    search: a,
                                    rotatingTokenNonce: s
                                } = t, o = new URLSearchParams(a);
                                o.append("__clerk_api_version", ex.gR), o.append("_clerk_js_version", "5.56.0"), s && o.append("rotating_token_nonce", s), e.domain && "development" === e.instanceType && e.isSatellite && o.append("__domain", e.domain), i && "GET" !== i && "POST" !== i && o.append("_method", i), n && !ez.some(e => n.startsWith(e)) && r && o.append("_clerk_session_id", r);
                                let l = [...o.entries()].reduce((e, t) => {
                                    let [i, n] = t;
                                    return e[i] = n.includes(",") ? n.split(",") : n, e
                                }, {});
                                return (0, Q.f0)(l)
                            }

                            function s(t) {
                                let {
                                    path: i,
                                    pathPrefix: n = "v1"
                                } = t;
                                if (e.proxyUrl) {
                                    let r = new URL(e.proxyUrl),
                                        s = r.pathname.slice(1, r.pathname.length);
                                    return (0, Q.KV)({
                                        base: r.origin,
                                        pathname: "".concat(s, "/").concat(n).concat(i),
                                        search: a(t)
                                    }, {
                                        stringify: !1
                                    })
                                }
                                let r = "production" === e.instanceType ? e.domain : "",
                                    s = "https://".concat(r || e.frontendApi);
                                return (0, Q.KV)({
                                    base: s,
                                    pathname: "".concat(n).concat(i),
                                    search: a(t)
                                }, {
                                    stringify: !1
                                })
                            }
                            async function o(t, i) {
                                let a;
                                let o = { ...t
                                    },
                                    {
                                        method: l = "GET",
                                        body: c
                                    } = o;
                                o.url = s({ ...o,
                                    sessionId: e.getSessionId()
                                }), o.headers = new Headers(o.headers), "GET" === l || c instanceof FormData || o.headers.has("content-type") || o.headers.set("content-type", "application/x-www-form-urlencoded"), "application/x-www-form-urlencoded" === o.headers.get("content-type") && (o.body = c ? (0, Q.f0)(c, {
                                    keyEncoder: eM.a1
                                }) : c);
                                let d = await n(o),
                                    u = "GET" === l ? "GET" : "POST",
                                    h = o.url.toString(),
                                    p = { ...o,
                                        credentials: "include",
                                        method: u
                                    };
                                try {
                                    if (d) {
                                        var f;
                                        let e = null !== (f = null == i ? void 0 : i.fetchMaxTries) && void 0 !== f ? f : (0, M.TN)() ? 4 : 11;
                                        a = "GET" === u ? await (0, eR.X)(() => fetch(h, p), {
                                            initialDelay: 500,
                                            maxDelayBetweenRetries: 3e3,
                                            shouldRetry: (t, i) => i < e
                                        }) : await fetch(h, p)
                                    } else a = new Response("{}", o)
                                } catch (e) {
                                    (0, ef.an)(h, e)
                                }
                                let _ = await a.json(),
                                    v = Object.assign(a, {
                                        payload: _
                                    });
                                return await r(o, v), v
                            }
                            return {
                                buildEmailAddress: function(t) {
                                    return (0, Q.aR)({
                                        localPart: t,
                                        frontendApi: e.frontendApi
                                    })
                                },
                                buildUrl: s,
                                onAfterResponse: function(e) {
                                    i.push(e)
                                },
                                onBeforeRequest: function(e) {
                                    t.push(e)
                                },
                                request: o
                            }
                        }({
                            domain: this.domain,
                            frontendApi: this.frontendApi,
                            instanceType: this.instanceType,
                            isSatellite: this.isSatellite,
                            getSessionId: () => {
                                var e;
                                return null === (e = this.session) || void 0 === e ? void 0 : e.id
                            },
                            proxyUrl: this.proxyUrl
                        })), et.i.clerk = this
                    }
                }

                function tm() {
                    return !!(!(0, O._)(this, eH).signUpUrl && (0, O._)(this, eH).signInUrl && !(0, Y.sD)((0, O._)(this, eH).signInUrl))
                }

                function tg() {
                    let e = Q.Sk;
                    return (0, O._)(this, eH).allowedRedirectProtocols && (e = e.concat((0, O._)(this, eH).allowedRedirectProtocols)), e
                }(0, R._)(tv, "mountComponentRenderer", void 0), (0, R._)(tv, "version", "5.56.0"), (0, R._)(tv, "sdkMetadata", {
                    name: "@clerk/clerk-js",
                    version: "5.56.0",
                    environment: "production"
                });
                var ty = i(9755),
                    tw = i(4914),
                    tb = i(9144),
                    tS = i(1139);
                let tk = {
                        SignIn: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("722")]).then(i.bind(i, 9181)),
                        SignUp: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("710")]).then(i.bind(i, 9817)),
                        UserButton: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("270")]).then(i.bind(i, 1751)),
                        UserProfile: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("470")]).then(i.bind(i, 7952)),
                        CreateOrganization: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("192"), i.e("96")]).then(i.bind(i, 1441)),
                        OrganizationProfile: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("192"), i.e("554")]).then(i.bind(i, 2979)),
                        OrganizationSwitcher: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("780")]).then(i.bind(i, 86)),
                        OrganizationList: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("192"), i.e("158")]).then(i.bind(i, 125)),
                        ImpersonationFab: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("378")]).then(i.bind(i, 1944)),
                        GoogleOneTap: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("920")]).then(i.bind(i, 1491)),
                        BlankCaptchaModal: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("875")]).then(i.bind(i, 9900)),
                        UserVerification: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("662")]).then(i.bind(i, 5981)),
                        Waitlist: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("861")]).then(i.bind(i, 4957)),
                        KeylessPrompt: () => Promise.all([i.e("344"), i.e("200"), i.e("573"), i.e("307")]).then(i.bind(i, 1976))
                    },
                    tA = (0, tb.lazy)(() => tk.SignIn().then(e => ({
                        default: e.SignIn
                    }))),
                    tU = (0, tb.lazy)(() => tk.SignIn().then(e => ({
                        default: e.SignInModal
                    }))),
                    tO = (0, tb.lazy)(() => tk.GoogleOneTap().then(e => ({
                        default: e.OneTap
                    }))),
                    tC = (0, tb.lazy)(() => tk.UserVerification().then(e => ({
                        default: e.UserVerification
                    }))),
                    tP = (0, tb.lazy)(() => tk.UserVerification().then(e => ({
                        default: e.UserVerificationModal
                    }))),
                    tE = (0, tb.lazy)(() => tk.SignUp().then(e => ({
                        default: e.SignUp
                    }))),
                    tI = (0, tb.lazy)(() => tk.SignUp().then(e => ({
                        default: e.SignUpModal
                    }))),
                    tT = (0, tb.lazy)(() => tk.UserButton().then(e => ({
                        default: e.UserButton
                    }))),
                    tx = (0, tb.lazy)(() => tk.UserProfile().then(e => ({
                        default: e.UserProfile
                    }))),
                    tR = (0, tb.lazy)(() => tk.UserProfile().then(e => ({
                        default: e.UserProfileModal
                    }))),
                    tM = (0, tb.lazy)(() => tk.CreateOrganization().then(e => ({
                        default: e.CreateOrganization
                    }))),
                    tz = (0, tb.lazy)(() => tk.CreateOrganization().then(e => ({
                        default: e.CreateOrganizationModal
                    }))),
                    tN = (0, tb.lazy)(() => tk.OrganizationProfile().then(e => ({
                        default: e.OrganizationProfile
                    }))),
                    tW = (0, tb.lazy)(() => tk.OrganizationProfile().then(e => ({
                        default: e.OrganizationProfileModal
                    }))),
                    tL = (0, tb.lazy)(() => tk.OrganizationSwitcher().then(e => ({
                        default: e.OrganizationSwitcher
                    }))),
                    tF = (0, tb.lazy)(() => tk.OrganizationList().then(e => ({
                        default: e.OrganizationList
                    }))),
                    tD = (0, tb.lazy)(() => tk.Waitlist().then(e => ({
                        default: e.Waitlist
                    }))),
                    tj = (0, tb.lazy)(() => tk.Waitlist().then(e => ({
                        default: e.WaitlistModal
                    }))),
                    tV = (0, tb.lazy)(() => tk.BlankCaptchaModal().then(e => ({
                        default: e.BlankCaptchaModal
                    }))),
                    tK = (0, tb.lazy)(() => tk.ImpersonationFab().then(e => ({
                        default: e.ImpersonationFab
                    }))),
                    t$ = (0, tb.lazy)(() => tk.KeylessPrompt().then(e => ({
                        default: e.KeylessPrompt
                    }))),
                    tJ = async e => {
                        var t;
                        return null === (t = tk[e]) || void 0 === t ? void 0 : t.call(tk)
                    },
                    tB = {
                        SignIn: tA,
                        SignUp: tE,
                        UserButton: tT,
                        UserProfile: tx,
                        UserVerification: tC,
                        OrganizationSwitcher: tL,
                        OrganizationList: tF,
                        OrganizationProfile: tN,
                        CreateOrganization: tM,
                        SignInModal: tU,
                        SignUpModal: tI,
                        UserProfileModal: tR,
                        OrganizationProfileModal: tW,
                        CreateOrganizationModal: tz,
                        UserVerificationModal: tP,
                        GoogleOneTap: tO,
                        Waitlist: tD,
                        WaitlistModal: tj,
                        BlankCaptchaModal: tV
                    },
                    tq = (0, tb.lazy)(() => Promise.all([i.e("344"), i.e("200"), i.e("573")]).then(i.bind(i, 7571)).then(e => ({
                        default: e.CoreClerkContextWrapper
                    }))),
                    tZ = (0, tb.lazy)(() => Promise.all([i.e("344"), i.e("200"), i.e("573")]).then(i.bind(i, 7571)).then(e => ({
                        default: e.EnvironmentProvider
                    }))),
                    tG = (0, tb.lazy)(() => Promise.all([i.e("344"), i.e("200"), i.e("573")]).then(i.bind(i, 7571)).then(e => ({
                        default: e.OptionsProvider
                    }))),
                    tH = (0, tb.lazy)(() => Promise.all([i.e("344"), i.e("200"), i.e("573")]).then(i.bind(i, 3064)).then(e => ({
                        default: e.AppearanceProvider
                    }))),
                    tY = (0, tb.lazy)(() => Promise.all([i.e("344"), i.e("200"), i.e("573")]).then(i.bind(i, 4676)).then(e => ({
                        default: e.VirtualRouter
                    }))),
                    tX = (0, tb.lazy)(() => Promise.all([i.e("344"), i.e("200"), i.e("573")]).then(i.bind(i, 5295)).then(e => ({
                        default: e.InternalThemeProvider
                    }))),
                    tQ = (0, tb.lazy)(() => i.e("573").then(i.bind(i, 6560)).then(e => ({
                        default: e.StyleCacheProvider
                    }))),
                    t0 = (0, tb.lazy)(() => Promise.all([i.e("344"), i.e("200"), i.e("573")]).then(i.bind(i, 4750)).then(e => ({
                        default: e.Portal
                    }))),
                    t1 = (0, tb.lazy)(() => Promise.all([i.e("344"), i.e("200"), i.e("573")]).then(i.bind(i, 4750)).then(e => ({
                        default: e.VirtualBodyRootPortal
                    }))),
                    t3 = (0, tb.lazy)(() => Promise.all([i.e("344"), i.e("200"), i.e("573")]).then(i.bind(i, 5332)).then(e => ({
                        default: e.FlowMetadataProvider
                    }))),
                    t5 = (0, tb.lazy)(() => Promise.all([i.e("344"), i.e("200"), i.e("573")]).then(i.bind(i, 5332)).then(e => ({
                        default: e.Modal
                    }))),
                    t2 = (0, tb.lazy)(() => i.e("211").then(i.bind(i, 6703)).then(e => ({
                        default: e.OrganizationSwitcherPrefetch
                    }))),
                    t4 = e => (0, ty.tZ)(tQ, {
                        nonce: e.options.nonce,
                        children: (0, ty.tZ)(tq, {
                            clerk: e.clerk,
                            children: (0, ty.tZ)(tZ, {
                                value: e.environment,
                                children: (0, ty.tZ)(tG, {
                                    value: e.options,
                                    children: e.children
                                })
                            })
                        })
                    }),
                    t7 = e => {
                        var t;
                        return (null == e ? void 0 : null === (t = e.componentProps) || void 0 === t ? void 0 : t.routing) === "virtual" && (0, z.x9)('routing="virtual"', 'Use routing="hash" instead.'), (0, ty.tZ)(tH, {
                            globalAppearance: e.globalAppearance,
                            appearanceKey: e.appearanceKey,
                            appearance: e.componentAppearance,
                            children: (0, ty.tZ)(t0, {
                                node: e.node,
                                component: tB[e.componentName],
                                props: e.componentProps,
                                componentName: e.componentName
                            })
                        })
                    },
                    t6 = e => (0, ty.tZ)(tb.Suspense, {
                        fallback: "",
                        children: (0, ty.tZ)(tH, {
                            globalAppearance: e.globalAppearance,
                            appearanceKey: e.appearanceKey,
                            appearance: e.componentAppearance,
                            children: (0, ty.tZ)(t3, {
                                flow: e.flowName || "",
                                children: (0, ty.tZ)(tX, {
                                    children: (0, ty.tZ)(t5, {
                                        id: e.modalId,
                                        style: e.modalStyle,
                                        handleClose: e.onClose,
                                        containerSx: e.modalContainerSx,
                                        contentSx: e.modalContentSx,
                                        canCloseModal: e.canCloseModal,
                                        children: e.startPath ? (0, ty.tZ)(tb.Suspense, {
                                            children: (0, ty.tZ)(tY, {
                                                startPath: e.startPath,
                                                onExternalNavigate: e.onExternalNavigate,
                                                children: e.children
                                            })
                                        }) : e.children
                                    })
                                })
                            })
                        })
                    }),
                    t9 = e => (0, ty.tZ)(tb.Suspense, {
                        children: (0, ty.tZ)(tY, {
                            startPath: "",
                            children: (0, ty.tZ)(tH, {
                                globalAppearance: e.globalAppearance,
                                appearanceKey: "impersonationFab",
                                children: e.children
                            })
                        })
                    }),
                    t8 = e => (0, ty.tZ)(tH, {
                        globalAppearance: e.globalAppearance,
                        appearanceKey: "oneTap",
                        appearance: e.componentAppearance,
                        children: (0, ty.tZ)(t1, {
                            startPath: e.startPath,
                            component: tB.GoogleOneTap,
                            props: e.componentProps,
                            componentName: "GoogleOneTap"
                        })
                    }),
                    ie = 0,
                    it = {},
                    ii = Object.freeze({
                        SignUp: "signUpModal",
                        SignIn: "signInModal",
                        UserProfile: "userProfileModal",
                        OrganizationProfile: "organizationProfileModal",
                        CreateOrganization: "createOrganizationModal",
                        Waitlist: "waitlistModal"
                    }),
                    ir = e => {
                        var t, i;
                        let [n, r] = tb.useState({
                            appearance: e.options.appearance,
                            options: e.options,
                            googleOneTapModal: null,
                            signInModal: null,
                            signUpModal: null,
                            userProfileModal: null,
                            userVerificationModal: null,
                            organizationProfileModal: null,
                            createOrganizationModal: null,
                            organizationSwitcherPrefetch: !1,
                            waitlistModal: null,
                            blankCaptchaModal: null,
                            nodes: new Map,
                            impersonationFab: !1
                        }), {
                            googleOneTapModal: a,
                            signInModal: s,
                            signUpModal: o,
                            userProfileModal: l,
                            userVerificationModal: c,
                            organizationProfileModal: d,
                            createOrganizationModal: u,
                            waitlistModal: h,
                            blankCaptchaModal: p,
                            nodes: f
                        } = n, {
                            urlStateParam: _,
                            clearUrlStateParam: v,
                            decodedRedirectParams: m
                        } = (0, tS._)();
                        (0, tw.Gw)(() => {
                            m && r(e => ({ ...e,
                                [ii[m.componentName]]: !0
                            })), it.mountComponent = e => {
                                let {
                                    node: t,
                                    name: i,
                                    props: n,
                                    appearanceKey: a
                                } = e;
                                t || (0, ef.HE)(), r(e => (e.nodes.set(t, {
                                    key: "p".concat(++ie),
                                    name: i,
                                    props: n,
                                    appearanceKey: a
                                }), { ...e,
                                    nodes: f
                                }))
                            }, it.unmountComponent = e => {
                                let {
                                    node: t
                                } = e;
                                r(e => (e.nodes.delete(t), { ...e,
                                    nodes: f
                                }))
                            }, it.updateProps = e => {
                                let {
                                    node: t,
                                    props: i,
                                    ...a
                                } = e;
                                if (t && i && "object" == typeof i) {
                                    let e = n.nodes.get(t);
                                    if (e) {
                                        e.props = { ...i
                                        }, r(e => ({ ...e
                                        }));
                                        return
                                    }
                                }
                                r(e => ({ ...e,
                                    ...a,
                                    options: { ...e.options,
                                        ...a.options
                                    }
                                }))
                            }, it.closeModal = function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    {
                                        notify: i = !0
                                    } = t;
                                v(), r(t => ((function() {
                                    let n = t["".concat(e, "Modal")] || {};
                                    if ("afterVerificationCancelled" in n && i) {
                                        var r;
                                        null === (r = n.afterVerificationCancelled) || void 0 === r || r.call(n)
                                    }
                                })(), { ...t,
                                    ["".concat(e, "Modal")]: null
                                }))
                            }, it.openModal = (e, t) => {
                                "afterVerificationCancelled" in t ? "afterVerificationCancelled" in t && r(i => ({ ...i,
                                    ["".concat(e, "Modal")]: { ...t,
                                        afterVerification() {
                                            var i;
                                            null === (i = t.afterVerification) || void 0 === i || i.call(t), it.closeModal(e, {
                                                notify: !1
                                            })
                                        }
                                    }
                                })) : r(i => ({ ...i,
                                    ["".concat(e, "Modal")]: t
                                }))
                            }, it.mountImpersonationFab = () => {
                                r(e => ({ ...e,
                                    impersonationFab: !0
                                }))
                            }, it.prefetch = e => {
                                r(t => ({ ...t,
                                    ["".concat(e, "Prefetch")]: !0
                                }))
                            }, e.onComponentsMounted()
                        }, []);
                        let g = (0, ty.tZ)(t8, {
                                componentProps: a,
                                globalAppearance: n.appearance,
                                componentAppearance: null == a ? void 0 : a.appearance,
                                startPath: (0, Q.e1)({
                                    base: "/one-tap",
                                    path: ""
                                })
                            }),
                            y = (0, ty.BX)(t6, {
                                globalAppearance: n.appearance,
                                appearanceKey: "signIn",
                                componentAppearance: null == s ? void 0 : s.appearance,
                                flowName: "signIn",
                                onClose: () => it.closeModal("signIn"),
                                onExternalNavigate: () => it.closeModal("signIn"),
                                startPath: (0, Q.e1)({
                                    base: "/sign-in",
                                    path: null == _ ? void 0 : _.path
                                }),
                                componentName: "SignInModal",
                                children: [(0, ty.tZ)(tU, { ...s
                                }), (0, ty.tZ)(tI, { ...s
                                }), (0, ty.tZ)(tj, { ...h
                                })]
                            }),
                            w = (0, ty.BX)(t6, {
                                globalAppearance: n.appearance,
                                appearanceKey: "signUp",
                                componentAppearance: null == o ? void 0 : o.appearance,
                                flowName: "signUp",
                                onClose: () => it.closeModal("signUp"),
                                onExternalNavigate: () => it.closeModal("signUp"),
                                startPath: (0, Q.e1)({
                                    base: "/sign-up",
                                    path: null == _ ? void 0 : _.path
                                }),
                                componentName: "SignUpModal",
                                children: [(0, ty.tZ)(tU, { ...o
                                }), (0, ty.tZ)(tI, { ...o
                                }), (0, ty.tZ)(tj, { ...h
                                })]
                            }),
                            b = (0, ty.tZ)(t6, {
                                globalAppearance: n.appearance,
                                appearanceKey: "userProfile",
                                componentAppearance: null == l ? void 0 : l.appearance,
                                flowName: "userProfile",
                                onClose: () => it.closeModal("userProfile"),
                                onExternalNavigate: () => it.closeModal("userProfile"),
                                startPath: (0, Q.e1)({
                                    base: "/user",
                                    path: (null == l ? void 0 : l.__experimental_startPath) || (null == _ ? void 0 : _.path)
                                }),
                                componentName: "UserProfileModal",
                                modalContainerSx: {
                                    alignItems: "center"
                                },
                                modalContentSx: e => ({
                                    height: "min(".concat(e.sizes.$176, ", calc(100% - ").concat(e.sizes.$12, "))"),
                                    margin: 0
                                }),
                                children: (0, ty.tZ)(tR, { ...l
                                })
                            }),
                            S = (0, ty.tZ)(t6, {
                                globalAppearance: n.appearance,
                                appearanceKey: "userVerification",
                                componentAppearance: null == c ? void 0 : c.appearance,
                                flowName: "userVerification",
                                onClose: () => it.closeModal("userVerification"),
                                onExternalNavigate: () => it.closeModal("userVerification"),
                                startPath: (0, Q.e1)({
                                    base: "/user-verification",
                                    path: null == _ ? void 0 : _.path
                                }),
                                componentName: "UserVerificationModal",
                                modalContainerSx: {
                                    alignItems: "center"
                                },
                                children: (0, ty.tZ)(tP, { ...c
                                })
                            }),
                            k = (0, ty.tZ)(t6, {
                                globalAppearance: n.appearance,
                                appearanceKey: "organizationProfile",
                                componentAppearance: null == d ? void 0 : d.appearance,
                                flowName: "organizationProfile",
                                onClose: () => it.closeModal("organizationProfile"),
                                onExternalNavigate: () => it.closeModal("organizationProfile"),
                                startPath: (0, Q.e1)({
                                    base: "/organizationProfile",
                                    path: null == _ ? void 0 : _.path
                                }),
                                componentName: "OrganizationProfileModal",
                                modalContainerSx: {
                                    alignItems: "center"
                                },
                                modalContentSx: e => ({
                                    height: "min(".concat(e.sizes.$176, ", calc(100% - ").concat(e.sizes.$12, "))"),
                                    margin: 0
                                }),
                                children: (0, ty.tZ)(tW, { ...d
                                })
                            }),
                            A = (0, ty.tZ)(t6, {
                                globalAppearance: n.appearance,
                                appearanceKey: "createOrganization",
                                componentAppearance: null == u ? void 0 : u.appearance,
                                flowName: "createOrganization",
                                onClose: () => it.closeModal("createOrganization"),
                                onExternalNavigate: () => it.closeModal("createOrganization"),
                                startPath: (0, Q.e1)({
                                    base: "/createOrganization",
                                    path: null == _ ? void 0 : _.path
                                }),
                                componentName: "CreateOrganizationModal",
                                modalContainerSx: {
                                    alignItems: "center"
                                },
                                modalContentSx: e => ({
                                    height: "min(".concat(e.sizes.$120, ", calc(100% - ").concat(e.sizes.$12, "))"),
                                    margin: 0
                                }),
                                children: (0, ty.tZ)(tz, { ...u
                                })
                            }),
                            U = (0, ty.BX)(t6, {
                                globalAppearance: n.appearance,
                                appearanceKey: "waitlist",
                                componentAppearance: null == h ? void 0 : h.appearance,
                                flowName: "waitlist",
                                onClose: () => it.closeModal("waitlist"),
                                onExternalNavigate: () => it.closeModal("waitlist"),
                                startPath: (0, Q.e1)({
                                    base: "/waitlist",
                                    path: null == _ ? void 0 : _.path
                                }),
                                componentName: "WaitlistModal",
                                children: [(0, ty.tZ)(tj, { ...h
                                }), (0, ty.tZ)(tU, { ...h
                                })]
                            }),
                            O = (0, ty.tZ)(t6, {
                                globalAppearance: n.appearance,
                                appearanceKey: "blankCaptcha",
                                componentAppearance: {},
                                flowName: "blankCaptcha",
                                onClose: () => it.closeModal("blankCaptcha"),
                                startPath: (0, Q.e1)({
                                    base: "/blank-captcha",
                                    path: null == _ ? void 0 : _.path
                                }),
                                componentName: "BlankCaptchaModal",
                                canCloseModal: !1,
                                modalId: "cl-modal-captcha-wrapper",
                                modalStyle: {
                                    visibility: "hidden",
                                    pointerEvents: "none"
                                },
                                children: (0, ty.tZ)(tV, {})
                            });
                        return (0, ty.tZ)(tb.Suspense, {
                            fallback: "",
                            children: (0, ty.BX)(t4, {
                                clerk: e.clerk,
                                environment: e.environment,
                                options: n.options,
                                children: [
                                    [...f].map(e => {
                                        var t;
                                        let [i, r] = e;
                                        return (0, ty.tZ)(t7, {
                                            node: i,
                                            globalAppearance: n.appearance,
                                            appearanceKey: r.appearanceKey,
                                            componentAppearance: null === (t = r.props) || void 0 === t ? void 0 : t.appearance,
                                            componentName: r.name,
                                            componentProps: r.props
                                        }, r.key)
                                    }), a && g, s && y, o && w, l && b, c && S, d && k, u && A, h && U, p && O, n.impersonationFab && (0, ty.tZ)(t9, {
                                        globalAppearance: n.appearance,
                                        children: (0, ty.tZ)(tK, {})
                                    }), (null === (t = n.options) || void 0 === t ? void 0 : t.__internal_keyless_claimKeylessApplicationUrl) && (null === (i = n.options) || void 0 === i ? void 0 : i.__internal_keyless_copyInstanceKeysUrl) && (0, ty.tZ)(t9, {
                                        globalAppearance: n.appearance,
                                        children: (0, ty.tZ)(t$, {
                                            claimUrl: n.options.__internal_keyless_claimKeylessApplicationUrl,
                                            copyKeysUrl: n.options.__internal_keyless_copyInstanceKeysUrl,
                                            onDismiss: n.options.__internal_keyless_dismissPrompt
                                        })
                                    }), (0, ty.tZ)(tb.Suspense, {
                                        children: n.organizationSwitcherPrefetch && (0, ty.tZ)(t2, {})
                                    })
                                ]
                            })
                        })
                    };
                e = i.hmd(e), tv.mountComponentRenderer = (e, t, n) => {
                    let r, a = document.getElementById("clerk-components");
                    return a || ((a = document.createElement("div")).setAttribute("id", "clerk-components"), document.body.appendChild(a)), {
                        ensureMounted: async s => {
                            let {
                                preloadHint: o
                            } = s || {};
                            if (!r) {
                                let s = (0, X.WK)();
                                o && tJ(o), r = Promise.all([i.e("344"), i.e("200"), i.e("573")]).then(i.bind(i, 5681)).then(i => {
                                    let {
                                        createRoot: r
                                    } = i;
                                    return r(a).render((0, ty.tZ)(ir, {
                                        clerk: e,
                                        environment: t,
                                        options: n,
                                        onComponentsMounted: s.resolve
                                    })), s.promise.then(() => it)
                                })
                            }
                            return r.then(e => e)
                        }
                    }
                };
                let ia = (null === (k = document.querySelector("script[data-clerk-publishable-key]")) || void 0 === k ? void 0 : k.getAttribute("data-clerk-publishable-key")) || window.__clerk_publishable_key || "",
                    is = (null === (A = document.querySelector("script[data-clerk-proxy-url]")) || void 0 === A ? void 0 : A.getAttribute("data-clerk-proxy-url")) || window.__clerk_proxy_url || "",
                    io = (null === (U = document.querySelector("script[data-clerk-domain]")) || void 0 === U ? void 0 : U.getAttribute("data-clerk-domain")) || window.__clerk_domain || "";
                window.Clerk = new tv(ia, {
                    proxyUrl: is,
                    domain: io
                }), e.hot && e.hot.accept()
            },
            1139: function(e, t, i) {
                "use strict";
                i.d(t, {
                    _: () => s
                });
                var n = i(9144),
                    r = i(753),
                    a = i(1235);
                let s = () => {
                    let [e, t] = n.useState({
                        startPath: "",
                        path: "",
                        componentName: "",
                        socialProvider: ""
                    }), i = (0, a.w$)();
                    n.useLayoutEffect(() => {
                        i && t(i)
                    }, []);
                    let s = () => {
                        t({
                            startPath: "",
                            path: "",
                            componentName: "",
                            socialProvider: ""
                        })
                    };
                    return {
                        urlStateParam: { ...e,
                            clearUrlStateParam: s
                        },
                        decodedRedirectParams: i,
                        clearUrlStateParam: s,
                        removeQueryParam: () => (0, a.xy)(r.v_)
                    }
                }
            },
            9576: function(e, t, i) {
                "use strict";
                i.d(t, {
                    L: () => a,
                    v: () => r
                });
                var n = i(2358);

                function r(e) {
                    let t = ["redirectUrl", "afterSignInUrl", "afterSignUpUrl", "after_sign_in_url", "after_sign_up_url"],
                        i = Object.keys(e).find(e => t.includes(e));
                    i && e[i] && n.k.warnOnce('Clerk: The prop "'.concat(i, '" is deprecated and should be replaced with the new "fallbackRedirectUrl" or "forceRedirectUrl" props instead. Learn more: https://clerk.com/docs/guides/custom-redirects#redirect-url-props'))
                }

                function a(e, t, i, r) {
                    t && r && n.k.warnOnce('Clerk: The "'.concat(e, '" prop ("').concat(t, '") has priority over the legacy "').concat(i, '" (or "redirectUrl") ("').concat(r, '"), which will be completely ignored in this case. "').concat(i, '" (or "redirectUrl" prop) should be replaced with the new "fallbackRedirectUrl" or "forceRedirectUrl" props instead. Learn more: https://clerk.com/docs/guides/custom-redirects#redirect-url-props'))
                }
            },
            7786: function(e, t, i) {
                "use strict";
                i.d(t, {
                    E: () => s
                });
                var n = i(623),
                    r = i(7140);
                let a = e => {
                    let t = e.__unstable__environment,
                        i = t ? t.displayConfig.captchaProvider : "turnstile";
                    return {
                        captchaSiteKey: t ? t.displayConfig.captchaPublicKey : null,
                        captchaWidgetType: t ? t.displayConfig.captchaWidgetType : null,
                        captchaProvider: i,
                        captchaPublicKeyInvisible: t ? t.displayConfig.captchaPublicKeyInvisible : null,
                        canUseCaptcha: t ? t.userSettings.signUp.captcha_enabled && e.isStandardBrowser : null
                    }
                };
                class s {
                    async invisible(e) {
                        let {
                            captchaSiteKey: t,
                            canUseCaptcha: i,
                            captchaPublicKeyInvisible: n
                        } = a(this.clerk);
                        if (i && t && n) return (0, r.k)({
                            siteKey: n,
                            invisibleSiteKey: n,
                            widgetType: "invisible",
                            captchaProvider: "turnstile",
                            action: null == e ? void 0 : e.action
                        }).catch(e => {
                            if (e.captchaError) return {
                                captchaError: e.captchaError
                            }
                        })
                    }
                    async managedOrInvisible(e) {
                        let {
                            captchaSiteKey: t,
                            canUseCaptcha: i,
                            captchaWidgetType: n,
                            captchaProvider: s,
                            captchaPublicKeyInvisible: o
                        } = a(this.clerk);
                        return i && t && o ? (0, r.k)({
                            siteKey: t,
                            widgetType: n,
                            invisibleSiteKey: o,
                            captchaProvider: s,
                            ...e
                        }).catch(e => {
                            if (e.captchaError) return {
                                captchaError: e.captchaError
                            }
                        }) : {}
                    }
                    async managedInModal(e) {
                        return this.managedOrInvisible({
                            modalWrapperQuerySelector: "#cl-modal-captcha-wrapper",
                            modalContainerQuerySelector: "#cl-modal-captcha-container",
                            openModal: () => this.clerk.__internal_openBlankCaptchaModal(),
                            closeModal: () => this.clerk.__internal_closeBlankCaptchaModal(),
                            action: null == e ? void 0 : e.action
                        })
                    }
                    constructor(e) {
                        (0, n._)(this, "clerk", void 0), this.clerk = e
                    }
                }
            },
            3935: function(e, t, i) {
                "use strict";
                i.d(t, {
                    G: () => r,
                    M: () => n
                });
                let n = "clerk-captcha",
                    r = "clerk-invisible-captcha"
            },
            7140: function(e, t, i) {
                "use strict";
                i.d(t, {
                    k: () => d
                }), i(4310);
                var n = i(5774),
                    r = i(3935);
                let a = e => !!["crashed", "undefined_error", "102", "103", "104", "106", "110600", "300", "600"].find(t => e.startsWith(t));
                async function s() {
                    return window.turnstile || await o().catch(() => {
                        throw {
                            captchaError: "captcha_script_failed_to_load"
                        }
                    }), window.turnstile
                }
                async function o() {
                    try {
                        return await (0, n.v)("https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", {
                            defer: !0
                        })
                    } catch (e) {
                        throw console.warn("Clerk: Failed to load the CAPTCHA script from Cloudflare. If you see a CSP error in your browser, please add the necessary CSP rules to your app. Visit https://clerk.com/docs/security/clerk-csp for more information."), e
                    }
                }

                function l(e) {
                    let t = e.getAttribute("data-cl-theme") || void 0;
                    return {
                        theme: t,
                        language: e.getAttribute("data-cl-language") || void 0,
                        size: e.getAttribute("data-cl-size") || void 0
                    }
                }
                let c = async e => {
                        let t, i, n, o;
                        let {
                            siteKey: c,
                            widgetType: d,
                            invisibleSiteKey: u
                        } = e, {
                            modalContainerQuerySelector: h,
                            modalWrapperQuerySelector: p,
                            closeModal: f,
                            openModal: _
                        } = e, v = await s(), m = [], g = "", y = "", w = c, b = 0, S = null;
                        if (h && p) {
                            S = d, o = h, await (null == _ ? void 0 : _());
                            let e = await new Promise(e => {
                                if (document.querySelector(h)) return e(document.querySelector(h));
                                let t = new MutationObserver(() => {
                                    document.querySelector(h) && (t.disconnect(), e(document.querySelector(h)))
                                });
                                t.observe(document.body, {
                                    childList: !0,
                                    subtree: !0
                                })
                            });
                            if (e) {
                                let {
                                    theme: r,
                                    language: a,
                                    size: s
                                } = l(e);
                                t = r, n = a, i = s
                            }
                        }
                        if (!o && "smart" === d) {
                            let e = document.getElementById(r.M);
                            if (e) {
                                S = "smart", o = "#".concat(r.M), e.style.maxHeight = "0";
                                let {
                                    theme: a,
                                    language: s,
                                    size: c
                                } = l(e);
                                t = a, n = s, i = c
                            } else console.error("Cannot initialize Smart CAPTCHA widget because the `clerk-captcha` DOM element was not found; falling back to Invisible CAPTCHA widget. If you are using a custom flow, visit https://clerk.com/docs/custom-flows/bot-sign-up-protection for instructions")
                        }
                        if (!o) {
                            w = u, S = "invisible", o = ".".concat(r.G);
                            let e = document.createElement("div");
                            e.classList.add(r.G), e.style.maxHeight = "0", document.body.appendChild(e)
                        }
                        let k = async () => new Promise((s, l) => {
                            try {
                                let c = v.render(o, {
                                    sitekey: w,
                                    appearance: "interaction-only",
                                    theme: t || "auto",
                                    size: i || "normal",
                                    language: n || "auto",
                                    action: e.action,
                                    retry: "never",
                                    "refresh-expired": "auto",
                                    callback: function(e) {
                                        null == f || f(), s([e, c])
                                    },
                                    "before-interactive-callback": () => {
                                        if (p) {
                                            let e = document.querySelector(p);
                                            null == e || e.style.setProperty("visibility", "visible"), null == e || e.style.setProperty("pointer-events", "all")
                                        } else {
                                            let e = document.getElementById(r.M);
                                            e && (e.style.maxHeight = "unset", e.style.minHeight = "compact" === i ? "140px" : "68px", e.style.marginBottom = "1.5rem")
                                        }
                                    },
                                    "error-callback": function(e) {
                                        if (m.push(e), b < 2 && a(e.toString())) {
                                            setTimeout(() => {
                                                v.reset(c), b++
                                            }, 250);
                                            return
                                        }
                                        l([m.join(","), c])
                                    },
                                    "unsupported-callback": function() {
                                        return l(["This browser is not supported by the CAPTCHA.", c]), !0
                                    }
                                })
                            } catch (e) {
                                l([e, void 0])
                            }
                        });
                        try {
                            [g, y] = await k(), v.remove(y)
                        } catch (i) {
                            let [e, t] = i;
                            throw t && v.remove(t), {
                                captchaError: e
                            }
                        } finally {
                            null == f || f();
                            let e = document.querySelector(".".concat(r.G));
                            e && document.body.removeChild(e);
                            let t = document.getElementById(r.M);
                            t && (t.style.maxHeight = "0", t.style.minHeight = "unset", t.style.marginBottom = "unset")
                        }
                        return {
                            captchaToken: g,
                            captchaWidgetType: S
                        }
                    },
                    d = e => c(e)
            },
            5756: function(e, t, i) {
                "use strict";
                i.d(t, {
                    v: () => n
                });
                let n = e => {
                    let {
                        signUp: t,
                        verifyEmailPath: i,
                        verifyPhonePath: n,
                        continuePath: r,
                        navigate: a,
                        handleComplete: s,
                        redirectUrl: o = "",
                        redirectUrlComplete: l = ""
                    } = e;
                    if ("complete" === t.status) return s && s();
                    if ("missing_requirements" === t.status) {
                        var c, d;
                        if (t.missingFields.some(e => "saml" === e || "enterprise_sso" === e)) return t.authenticateWithRedirect({
                            strategy: "enterprise_sso",
                            redirectUrl: o,
                            redirectUrlComplete: l,
                            continueSignUp: !0
                        });
                        if ((null === (c = t.unverifiedFields) || void 0 === c ? void 0 : c.includes("email_address")) && i) return a(i);
                        if ((null === (d = t.unverifiedFields) || void 0 === d ? void 0 : d.includes("phone_number")) && n) return a(n);
                        if (r) return a(r)
                    }
                }
            },
            4029: function(e, t, i) {
                "use strict";

                function n(e) {
                    return new URL(window.location.href).searchParams.get(e) || null
                }

                function r(e) {
                    let t = new URL(window.location.href);
                    t.searchParams.has(e) && (t.searchParams.delete(e), window.history.replaceState(window.history.state, "", t))
                }
                i.d(t, {
                    X: () => n,
                    x: () => r
                })
            },
            1235: function(e, t, i) {
                "use strict";
                i.d(t, {
                    wO: () => z.wO,
                    n$: () => c,
                    Sk: () => n.Sk,
                    _f: () => x,
                    WW: () => w.WW,
                    vl: () => T.v,
                    $1: () => w.$1,
                    pU: () => w.pU,
                    z9: () => w.z9,
                    XV: () => m.X,
                    TI: () => M,
                    So: () => o,
                    OY: () => u,
                    QO: () => y,
                    oH: () => R,
                    M: () => w.M,
                    ZE: () => z.ZE,
                    hb: () => w.hb,
                    sW: () => d,
                    un: () => w.un,
                    T7: () => n.T7,
                    OR: () => O,
                    Os: () => w.Os,
                    e1: () => P,
                    u9: () => w.u9,
                    HV: () => a,
                    LM: () => U,
                    aR: () => h,
                    bX: () => I,
                    vx: () => s.v,
                    Jx: () => b,
                    $0: () => z.$0,
                    Ly: () => z.Ly,
                    l1: () => w.l1,
                    eT: () => w.eT,
                    f: () => l,
                    w$: () => E,
                    KV: () => w.KV,
                    xy: () => m.x,
                    dR: () => z.dR,
                    jv: () => w.jv,
                    f0: () => T.f,
                    C3: () => z.C3,
                    M8: () => z.M8,
                    ir: () => S,
                    RM: () => v,
                    VZ: () => _,
                    eg: () => p,
                    To: () => w.To
                });
                var n = i(5809);
                let r = () => {
                        let e = !1,
                            t = () => e = !0;
                        return {
                            startListening: () => {
                                window.addEventListener("beforeunload", t), window.addEventListener(n.IK, t)
                            },
                            stopListening: () => {
                                window.removeEventListener("beforeunload", t), window.removeEventListener(n.IK, t)
                            },
                            isUnloading: () => e
                        }
                    },
                    a = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (!e) return {
                            track: async e => {
                                await e()
                            },
                            isUnloading: () => !1
                        };
                        let t = r();
                        return {
                            track: async e => {
                                t.startListening(), await e(), t.stopListening()
                            },
                            isUnloading: t.isUnloading
                        }
                    };
                var s = i(5756);
                let o = (e, t) => !!(e.session && (null == t ? void 0 : t.authConfig.singleSessionMode)),
                    l = e => !e.user,
                    c = e => !e.organization,
                    d = (e, t) => !(null == t ? void 0 : t.organizationSettings.enabled),
                    u = e => {
                        let {
                            regex: t
                        } = e;
                        return e => {
                            let {
                                urlWithParam: i,
                                entity: n
                            } = e, r = t.exec(i);
                            if (r) {
                                let e = r[1];
                                if (e in n) {
                                    let t = n[e];
                                    return i.replace(r[0], t)
                                }
                            }
                            return i
                        }
                    };

                function h(e) {
                    let {
                        localPart: t,
                        frontendApi: i
                    } = e, n = i ? i.replace("clerk.", "") : "clerk.com";
                    return "".concat(t, "@").concat(n)
                }

                function p(e) {
                    return i.g.btoa(e)
                }

                function f(e) {
                    var t;
                    return t = e.replace(/_/g, "/").replace(/-/g, "+"), decodeURIComponent(i.g.atob(t).split("").map(e => "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)).join(""))
                }

                function _(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return e.errors && !!e.errors.find(e => e.code === t)
                }
                let v = (0, i(3531).t5)({
                    packageName: "@clerk/clerk-js"
                });
                var m = i(4029),
                    g = i(290);
                i(4310);
                let y = e => {
                    if ((e || "").includes("gravatar") || (e || "").includes("avatar_placeholder")) return !0;
                    try {
                        let t = new URL(e).pathname.replace("/", ""),
                            i = (0, g.S)(t),
                            n = JSON.parse(i);
                        return "default" === n.type
                    } catch {
                        return !1
                    }
                };
                var w = i(6971);

                function b(e) {
                    let t = (e || "").split("."),
                        [i, n, r] = t;
                    if (3 !== t.length || !i || !n || !r) throw Error("JWT could not be decoded");
                    let a = JSON.parse(f(n)),
                        s = {
                            __raw: e
                        };
                    return Object.keys(a).forEach(e => {
                        s[e] = a[e]
                    }), {
                        encoded: {
                            header: i,
                            payload: n,
                            signature: r
                        },
                        header: JSON.parse(f(i)),
                        claims: s
                    }
                }

                function S(e) {
                    return "string" == typeof e && e.startsWith("org_")
                }
                var k = i(2708),
                    A = i(1826);
                let U = () => {
                    if (!(0, k._f)()) return {
                        onPageFocus: A.ZT
                    };
                    let e = {
                        focus: []
                    };
                    return window.addEventListener("focus", () => {
                        "visible" === document.visibilityState && e.focus.forEach(e => e())
                    }), {
                        onPageFocus: t => {
                            e.focus.push(t)
                        }
                    }
                };

                function O(e) {
                    return "function" == typeof e ? e() : e
                }
                i(9853);
                var C = i(753);
                let P = e => {
                        let {
                            base: t,
                            path: i
                        } = e;
                        return i ? t + i : t
                    },
                    E = () => {
                        var e;
                        let t = null !== (e = (0, m.X)(C.v_)) && void 0 !== e ? e : "";
                        return t ? JSON.parse(atob(t)) : null
                    },
                    I = e => {
                        let {
                            url: t,
                            startPath: i = "/user",
                            currentPath: n = "",
                            componentName: r,
                            socialProvider: a = ""
                        } = e, s = p(JSON.stringify({
                            path: n.replace(/CLERK-ROUTER\/VIRTUAL\/.*\//, "") || "",
                            componentName: r,
                            startPath: i,
                            socialProvider: a
                        })), o = new URL(t), l = o.searchParams;
                        return l.set(C.v_, s), o.search = l.toString(), o.toString()
                    };
                var T = i(7672);

                function x() {
                    return void 0 !== globalThis.document
                }

                function R() {
                    return x() && globalThis.document.hasFocus()
                }

                function M() {
                    return x() && window.self !== window.top && !window.frameElement
                }
                var z = i(1558)
            },
            3367: function(e, t, i) {
                "use strict";
                i.d(t, {
                    GH: () => d,
                    N7: () => u,
                    YI: () => o,
                    ku: () => p,
                    pr: () => s,
                    t1: () => l,
                    zQ: () => f
                });
                var n = i(623),
                    r = i(3531);
                class a {
                    static encode(e) {
                        return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }
                    static decode(e) {
                        let t = atob(e.replace(/-/g, "+").replace(/_/g, "/")),
                            i = t.length,
                            n = new Uint8Array(i);
                        for (let e = 0; e < i; e++) n[e] = t.charCodeAt(e);
                        return n.buffer
                    }
                }
                async function s(e) {
                    try {
                        let t = await navigator.credentials.create({
                            publicKey: e
                        });
                        if (!t) return {
                            error: new r.RK("Browser failed to create credential", {
                                code: "passkey_registration_failed"
                            }),
                            publicKeyCredential: null
                        };
                        return {
                            publicKeyCredential: t,
                            error: null
                        }
                    } catch (e) {
                        var t;
                        return {
                            error: "InvalidStateError" === (t = e).name ? new r.RK(t.message, {
                                code: "passkey_already_exists"
                            }) : "NotAllowedError" === t.name ? new r.RK(t.message, {
                                code: "passkey_registration_cancelled"
                            }) : c(t),
                            publicKeyCredential: null
                        }
                    }
                }
                let o = new class {
                    __abort() {
                        if (!this.controller) return;
                        let e = Error();
                        e.name = "AbortError", this.controller.abort(e)
                    }
                    createAbortSignal() {
                        this.__abort();
                        let e = new AbortController;
                        return this.controller = e, e.signal
                    }
                    abort() {
                        this.__abort(), this.controller = void 0
                    }
                    constructor() {
                        (0, n._)(this, "controller", void 0)
                    }
                };
                async function l(e) {
                    let {
                        publicKeyOptions: t,
                        conditionalUI: i
                    } = e;
                    try {
                        let e = await navigator.credentials.get({
                            publicKey: t,
                            mediation: i ? "conditional" : "optional",
                            signal: o.createAbortSignal()
                        });
                        if (!e) return {
                            error: new r.RK("Browser failed to get credential", {
                                code: "passkey_retrieval_failed"
                            }),
                            publicKeyCredential: null
                        };
                        return {
                            publicKeyCredential: e,
                            error: null
                        }
                    } catch (e) {
                        var n;
                        return {
                            error: "NotAllowedError" === (n = e).name ? new r.RK(n.message, {
                                code: "passkey_retrieval_cancelled"
                            }) : c(n),
                            publicKeyCredential: null
                        }
                    }
                }

                function c(e) {
                    return "AbortError" === e.name ? new r.RK(e.message, {
                        code: "passkey_operation_aborted"
                    }) : "SecurityError" === e.name ? new r.RK(e.message, {
                        code: "passkey_invalid_rpID_or_domain"
                    }) : e
                }

                function d(e) {
                    let t = v(e.user.id),
                        i = v(e.challenge),
                        n = (e.excludeCredentials || []).map(e => ({ ...e,
                            id: v(e.id)
                        }));
                    return { ...e,
                        excludeCredentials: n,
                        challenge: i,
                        user: { ...e.user,
                            id: t
                        }
                    }
                }

                function u(e) {
                    let t = v(e.challenge),
                        i = (e.allowCredentials || []).map(e => ({ ...e,
                            id: v(e.id)
                        }));
                    return { ...e,
                        allowCredentials: i,
                        challenge: t
                    }
                }

                function h(e) {
                    return {
                        type: e.type,
                        id: e.id,
                        rawId: _(e.rawId),
                        authenticatorAttachment: e.authenticatorAttachment
                    }
                }

                function p(e) {
                    let t = e.response;
                    return { ...h(e),
                        response: {
                            clientDataJSON: _(t.clientDataJSON),
                            attestationObject: _(t.attestationObject),
                            transports: t.getTransports()
                        }
                    }
                }

                function f(e) {
                    let t = e.response;
                    return { ...h(e),
                        response: {
                            clientDataJSON: _(t.clientDataJSON),
                            authenticatorData: _(t.authenticatorData),
                            signature: _(t.signature),
                            userHandle: t.userHandle ? _(t.userHandle) : null
                        }
                    }
                }
                let _ = a.encode.bind(a),
                    v = a.decode.bind(a)
            },
            33: function(e, t, i) {
                "use strict";
                i.d(t, {
                    z: () => c
                });
                var n = i(1826);
                let r = () => Promise.all([i.e("708").then(i.bind(i, 384)), i.e("325").then(i.bind(i, 7706))]).then(e => {
                        let [t, i] = e, {
                            zxcvbnOptions: n,
                            zxcvbn: r
                        } = t, {
                            dictionary: a,
                            adjacencyGraphs: s
                        } = i;
                        return n.setOptions({
                            dictionary: { ...a
                            },
                            graphs: s
                        }), r
                    }),
                    a = e => {
                        let t;
                        if (e.allowed_special_characters) {
                            let i = e.allowed_special_characters.replace("[", "\\[");
                            i = i.replace("]", "\\]"), t = new RegExp("[".concat(i, "]"))
                        } else t = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
                        return (e, i) => {
                            let {
                                minLength: n,
                                maxLength: r
                            } = i;
                            return {
                                max_length: e.length < r,
                                min_length: e.length >= n,
                                require_numbers: /\d/.test(e),
                                require_lowercase: /[a-z]/.test(e),
                                require_uppercase: /[A-Z]/.test(e),
                                require_special_char: t.test(e)
                            }
                        }
                    },
                    s = (e, t) => {
                        let {
                            max_length: i,
                            min_length: n,
                            require_special_char: r,
                            require_lowercase: s,
                            require_numbers: o,
                            require_uppercase: l
                        } = t, c = a(t)(e, {
                            maxLength: t.max_length,
                            minLength: t.min_length
                        }), d = {
                            max_length: i,
                            min_length: n,
                            require_special_char: r,
                            require_lowercase: s,
                            require_numbers: o,
                            require_uppercase: l
                        }, u = new Map;
                        for (let e in d) d[e] && (c[e] || u.set(e, !0));
                        return Object.freeze(Object.fromEntries(u))
                    },
                    o = e => t => s(t, e),
                    l = e => {
                        let {
                            min_zxcvbn_strength: t,
                            onResult: i
                        } = e;
                        return e => n => {
                            let r = e(n);
                            return (null == i || i(r), r.score >= t && r.score < 3) ? {
                                state: "pass",
                                keys: ["unstable__errors.zxcvbn.couldBeStronger"],
                                result: r
                            } : r.score >= t ? {
                                state: "excellent",
                                result: r
                            } : {
                                state: "fail",
                                keys: ["unstable__errors.zxcvbn.notEnough", ...r.feedback.suggestions.map(e => "unstable__errors.zxcvbn.suggestions.".concat(e))],
                                result: r
                            }
                        }
                    },
                    c = (e, t) => {
                        let {
                            onValidation: i = n.ZT,
                            onValidationComplexity: a = n.ZT
                        } = t || {}, {
                            show_zxcvbn: s,
                            validatePassword: c
                        } = e, d = o(e), u = l(e), h = {};
                        return (e, t) => {
                            let {
                                onValidation: n = i,
                                onValidationComplexity: o = a
                            } = t || {};
                            if (!c) return;
                            let l = d(e);
                            o(0 === Object.keys(l).length), h = { ...h,
                                complexity: l
                            }, s && r().then(t => {
                                let i = u(t)(e);
                                n({ ...h = { ...h,
                                        strength: i
                                    },
                                    strength: i
                                })
                            }), (!h.complexity || 0 !== Object.keys(h.complexity).length || !s) && n(h)
                        }
                    }
            },
            9853: function(e, t, i) {
                "use strict";
                i.d(t, {
                    R: () => r
                });
                let n = RegExp("/{1,}", "g");

                function r(e, t) {
                    return [e, t].filter(e => e).join("/").replace(n, "/")
                }
            },
            7672: function(e, t, i) {
                "use strict";
                i.d(t, {
                    f: () => r,
                    v: () => n
                });
                let n = e => {
                        let t = {};
                        return new URLSearchParams(e).forEach((e, i) => {
                            if (i in t) {
                                let n = t[i];
                                Array.isArray(n) ? n.push(e) : t[i] = [n, e]
                            } else t[i] = e
                        }), t
                    },
                    r = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (null == e || !e || "object" != typeof e) return "";
                        let i = new URLSearchParams;
                        return Object.keys(e).forEach(n => {
                            let r = t.keyEncoder ? t.keyEncoder(n) : n,
                                a = e[n];
                            if (Array.isArray(a)) a.forEach(e => void 0 !== e && i.append(r, e || ""));
                            else {
                                if (void 0 === a) return;
                                "object" == typeof a && null !== a ? i.append(r, JSON.stringify(a)) : i.append(r, String(null != a ? a : ""))
                            }
                        }), i.toString()
                    }
            },
            1607: function(e, t, i) {
                "use strict";
                i.d(t, {
                    O: () => S
                });
                var n = i(8300),
                    r = i(2086),
                    a = i(6210),
                    s = i(7518),
                    o = i(623),
                    l = e => Object.entries(e).reduce((e, t) => {
                        let [i, n] = t;
                        return null != n && (e[i] = n), e
                    }, {}),
                    c = (e, t) => {
                        let i = {};
                        for (let n in e) i[n] = t(e[n], n);
                        return i
                    },
                    d = (e, t) => {
                        let i = {};
                        for (let n in e) e[n] && t(e[n]) && (i[n] = e[n]);
                        return i
                    };
                i(4310);
                var u = i(5027),
                    h = i(9576),
                    p = i(6971),
                    f = new WeakSet,
                    _ = new WeakSet,
                    v = new WeakSet,
                    m = new WeakSet,
                    g = new WeakSet,
                    y = new WeakSet,
                    w = new WeakSet,
                    b = new WeakMap;
                class S {
                    getAfterSignInUrl() {
                        return (0, a._)(this, m, O).call(this, "signIn")
                    }
                    getAfterSignUpUrl() {
                        return (0, a._)(this, m, O).call(this, "signUp")
                    }
                    getPreservedSearchParams() {
                        return (0, a._)(this, f, k).call(this, (0, a._)(this, _, A).call(this))
                    }
                    toSearchParams() {
                        return (0, a._)(this, f, k).call(this, (0, a._)(this, v, U).call(this))
                    }
                    constructor(e, t = {}, i = {}, n) {
                        (0, s._)(this, f), (0, s._)(this, _), (0, s._)(this, v), (0, s._)(this, m), (0, s._)(this, g), (0, s._)(this, y), (0, s._)(this, w), (0, o._)(this, "options", void 0), (0, o._)(this, "fromOptions", void 0), (0, o._)(this, "fromProps", void 0), (0, o._)(this, "fromSearchParams", void 0), (0, o._)(this, "mode", void 0), (0, r._)(this, b, {
                            writable: !0,
                            value: e => {
                                var t;
                                return d(e, (0, p.QD)(null === (t = this.options) || void 0 === t ? void 0 : t.allowedRedirectOrigins, window.location.origin))
                            }
                        }), this.options = e, this.fromOptions = (0, a._)(this, g, C).call(this, e || {}), this.fromProps = (0, a._)(this, g, C).call(this, t || {}), this.fromSearchParams = (0, a._)(this, y, P).call(this, i || {}), this.mode = n
                    }
                }

                function k(e) {
                    return new URLSearchParams(l(Object.fromEntries(Object.entries(e).map(e => {
                        let [t, i] = e;
                        return [(0, u.a1)(t), i]
                    }))))
                }

                function A() {
                    return Object.fromEntries(Object.entries({ ...this.fromSearchParams
                    }).filter(e => {
                        let [t] = e;
                        return S.preserved.includes(t)
                    }))
                }

                function U() {
                    let e = this.fromSearchParams.signUpForceRedirectUrl || this.fromProps.signUpForceRedirectUrl || this.fromOptions.signUpForceRedirectUrl,
                        t = this.fromSearchParams.signUpFallbackRedirectUrl || this.fromProps.signUpFallbackRedirectUrl || this.fromOptions.signUpFallbackRedirectUrl,
                        i = this.fromSearchParams.signInForceRedirectUrl || this.fromProps.signInForceRedirectUrl || this.fromOptions.signInForceRedirectUrl,
                        n = this.fromSearchParams.signInFallbackRedirectUrl || this.fromProps.signInFallbackRedirectUrl || this.fromOptions.signInFallbackRedirectUrl,
                        r = this.fromSearchParams.afterSignInUrl || this.fromProps.afterSignInUrl || this.fromOptions.afterSignInUrl,
                        a = {
                            signUpForceRedirectUrl: e,
                            signUpFallbackRedirectUrl: t,
                            signInFallbackRedirectUrl: n,
                            signInForceRedirectUrl: i,
                            afterSignInUrl: r,
                            afterSignUpUrl: this.fromSearchParams.afterSignUpUrl || this.fromProps.afterSignUpUrl || this.fromOptions.afterSignUpUrl,
                            redirectUrl: this.fromSearchParams.redirectUrl || this.fromProps.redirectUrl || this.fromOptions.redirectUrl
                        };
                    return e && delete a.signUpFallbackRedirectUrl, i && delete a.signInFallbackRedirectUrl, a
                }

                function O(e) {
                    let t, i;
                    let n = "".concat(e, "ForceRedirectUrl"),
                        r = "".concat(e, "FallbackRedirectUrl"),
                        a = "after".concat(e[0].toUpperCase()).concat(e.slice(1), "Url");
                    (i = this.fromSearchParams[n] || this.fromProps[n] || this.fromOptions[n]) && (t = n), i || (i = this.fromSearchParams.redirectUrl), i && (t = "redirectUrl"), i || (i = this.fromSearchParams[r] || this.fromProps[r] || this.fromOptions[r]), i && (t = r);
                    let s = this.fromSearchParams[a] || this.fromProps[a] || this.fromProps.redirectUrl || this.fromOptions[a];
                    return ((0, h.L)(t, i, a, s), i || (i = s), i || "modal" !== this.mode) ? i || "/" : window.location.href
                }

                function C(e) {
                    (0, h.v)(e);
                    let t = {};
                    return S.keys.forEach(i => {
                        t[i] = e[i]
                    }), c((0, n._)(this, b).call(this, (0, a._)(this, w, E).call(this, d(t, Boolean))), e => e.toString())
                }

                function P(e) {
                    (0, h.v)(e);
                    let t = {};
                    return S.keys.forEach(i => {
                        e instanceof URLSearchParams ? t[i] = e.get((0, u.a1)(i)) : t[i] = e[(0, u.a1)(i)]
                    }), c((0, n._)(this, b).call(this, (0, a._)(this, w, E).call(this, d(t, Boolean))), e => e.toString())
                }

                function E(e) {
                    return c(e, e => (0, p.R9)(e, window.location.origin))
                }(0, o._)(S, "keys", ["signInForceRedirectUrl", "signInFallbackRedirectUrl", "signUpForceRedirectUrl", "signUpFallbackRedirectUrl", "afterSignInUrl", "afterSignUpUrl", "redirectUrl"]), (0, o._)(S, "preserved", ["redirectUrl"])
            },
            6971: function(e, t, i) {
                "use strict";
                i.d(t, {
                    R9: () => S,
                    u9: () => _,
                    WW: () => T,
                    eT: () => U,
                    l1: () => w,
                    $1: () => R,
                    pU: () => A,
                    z9: () => O,
                    KV: () => m,
                    jv: () => b,
                    QD: () => x,
                    M: () => g,
                    hb: () => C,
                    un: () => p,
                    To: () => I,
                    Os: () => y
                }), i(4310);
                var n = i(4763),
                    r = {
                        toRegexp: e => {
                            try {
                                return n(e)
                            } catch (t) {
                                throw Error("Invalid pattern: ".concat(e, ".\nConsult the documentation of glob-to-regexp here: https://www.npmjs.com/package/glob-to-regexp.\n").concat(t.message))
                            }
                        }
                    },
                    a = i(1402),
                    s = i(2358),
                    o = i(5027),
                    l = i(4944),
                    c = i(9853),
                    d = i(7672);
                let u = "http://clerk-dummy",
                    h = ["javascript:"],
                    {
                        isDevOrStagingUrl: p
                    } = (0, a.MY)(),
                    f = new Map;

                function _() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hostname;
                    if (!e) return !1;
                    let t = f.get(e);
                    return void 0 === t && (t = (0, l.A5)(e) || (0, l.LQ)(e), f.set(e, t)), t
                }

                function v(e) {
                    return e.replace("clerk.", "")
                }

                function m(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            base: i,
                            hashPath: n,
                            hashSearch: r,
                            searchParams: a,
                            hashSearchParams: s,
                            ...l
                        } = e,
                        h = "",
                        p = new URL(i || "", "undefined" != typeof window && window.location ? window.location.href : "http://react-native-fake-base-url");
                    if (a instanceof URLSearchParams && a.forEach((e, t) => {
                            null != e && p.searchParams.set((0, o.a1)(t), e)
                        }), Object.assign(p, l), n || r || s) {
                        let e = new URL(u + p.hash.substring(1));
                        for (let [t, i] of (e.pathname = (0, c.R)(e.pathname, n || ""), Object.entries((0, d.v)(r || "")))) e.searchParams.append(t, i);
                        if (s)
                            for (let t of Array.isArray(s) ? s : [s])(t instanceof URLSearchParams || "object" == typeof t) && new URLSearchParams(t).forEach((t, i) => {
                                null != t && e.searchParams.set((0, o.a1)(i), t)
                            });
                        let t = e.href.replace(u, "");
                        "/" !== t && (p.hash = t)
                    }
                    let {
                        stringify: f,
                        skipOrigin: _
                    } = t;
                    return f ? _ ? p.href.replace(p.origin, "") : p.href : p
                }

                function g(e) {
                    return (e = new URL(e.toString(), window.location.origin)).href.replace(e.origin, "")
                }
                let y = e => (e || "").replace(/\/+$/, ""),
                    w = e => {
                        let {
                            externalAccount: t
                        } = e.verifications;
                        return !!t.error
                    };

                function b(e) {
                    if (!e) return !1;
                    try {
                        return new URL(e), !0
                    } catch {
                        return !1
                    }
                }

                function S(e, t) {
                    try {
                        return new URL(e)
                    } catch {
                        return new URL(e, t)
                    }
                }
                let k = [/\0/, /^\/\//, /[\x00-\x1F]/];

                function A(e) {
                    return !!b(e) && "data:" === new URL(e).protocol
                }
                let U = e => new URL(e, u).hash.startsWith("#/"),
                    O = e => {
                        let t = new URL(e);
                        if (!U(t)) return t;
                        let i = new URL(t.hash.replace("#/", "/"), t.href),
                            n = new URL([t.pathname, i.pathname].map(e => e.split("/")).flat().filter(Boolean).join("/"), t.origin);
                        return t.searchParams.forEach((e, t) => {
                            n.searchParams.set(t, e)
                        }), i.searchParams.forEach((e, t) => {
                            n.searchParams.set(t, e)
                        }), n
                    },
                    C = e => e.replace(/CLERK-ROUTER\/(.*?)\//, ""),
                    P = ["/oauth/authorize"],
                    E = ["/v1/verify", "/v1/tickets/accept"];

                function I(e, t) {
                    let i = new URL(t, u),
                        n = i.pathname,
                        r = P.includes(n) || E.includes(n);
                    return e === i.host && r
                }

                function T(e) {
                    let t = new URL(e, u);
                    return P.includes(t.pathname)
                }
                let x = (e, t) => i => {
                    let n = i;
                    if ("string" == typeof n && (n = S(n, t)), !e) return !0;
                    let a = t === n.origin,
                        o = ! function(e) {
                            if (function(e) {
                                    if (!b(e)) return !1;
                                    let t = new URL(e).protocol;
                                    return h.some(e => e === t)
                                }(e)) return !0;
                            for (let t of k)
                                if (t.test(e.pathname)) return !0;
                            return !1
                        }(n) && (a || e.map(e => "string" == typeof e ? r.toRegexp(y(e)) : e).some(e => e.test(y(n.origin))));
                    return o || s.k.warnOnce("Clerk: Redirect URL ".concat(n, " is not on one of the allowedRedirectOrigins, falling back to the default redirect URL.")), o
                };

                function R(e, t, i) {
                    if (Array.isArray(e) && e.length) return e;
                    let n = [];
                    return "undefined" != typeof window && window.location && n.push(window.location.origin), n.push("https://".concat(v(t))), n.push("https://*.".concat(v(t))), "development" === i && n.push("https://".concat(t)), n
                }
            },
            5878: function(e, t, i) {
                "use strict";
                i.d(t, {
                    Pp: () => n,
                    Qm: () => r,
                    xC: () => a
                });
                let n = e => {
                        let {
                            firstName: t,
                            lastName: i,
                            name: n
                        } = e;
                        return n || [t, i].join(" ").trim() || ""
                    },
                    r = e => {
                        let {
                            firstName: t,
                            lastName: i,
                            name: n
                        } = e;
                        return [(t || "")[0], (i || "")[0]].join("").trim() || (n || "")[0]
                    },
                    a = e => e.username ? e.username : e.primaryEmailAddress ? e.primaryEmailAddress.emailAddress : e.primaryPhoneNumber ? e.primaryPhoneNumber.phoneNumber : e.primaryWeb3Wallet ? e.primaryWeb3Wallet.web3Wallet : ""
            },
            1558: function(e, t, i) {
                "use strict";
                i.d(t, {
                    wO: () => S,
                    dR: () => k,
                    bQ: () => g,
                    Ly: () => m,
                    C3: () => A,
                    M8: () => y,
                    $0: () => w,
                    ZE: () => b
                });
                var n = i(8300),
                    r = i(2086),
                    a = i(1325);

                function s(e, t) {
                    if (e !== t) throw TypeError("Private static access of wrong provenance")
                }

                function o(e, t) {
                    if (void 0 === e) throw TypeError("attempted to " + t + " private static field before its declaration")
                }

                function l(e, t, i) {
                    return s(e, t), o(i, "get"), (0, a._)(e, i)
                }
                var c = i(1820),
                    d = i(623),
                    u = new WeakMap,
                    h = new WeakMap,
                    p = new WeakMap;
                class f {
                    static getInstance() {
                        if (!l(f, f, _)) {
                            var e;
                            e = new f, s(f, f), o(_, "set"), (0, c._)(f, _, e)
                        }
                        return l(f, f, _)
                    }
                    constructor() {
                        if ((0, r._)(this, u, {
                                writable: !0,
                                value: []
                            }), (0, r._)(this, h, {
                                writable: !0,
                                value: {
                                    metamask: "MetaMask",
                                    okx_wallet: "OKX Wallet"
                                }
                            }), (0, d._)(this, "get", e => {
                                var t;
                                let i = null === (t = (0, n._)(this, u).find(t => t.info.name === (0, n._)(this, h)[e])) || void 0 === t ? void 0 : t.provider;
                                return void 0 !== i ? i : window.ethereum
                            }), (0, r._)(this, p, {
                                writable: !0,
                                value: e => {
                                    !(0, n._)(this, u).some(t => t.info.uuid === e.detail.info.uuid) && (0, n._)(this, u).push(e.detail)
                                }
                            }), "undefined" == typeof window) return;
                        window.addEventListener("eip6963:announceProvider", (0, n._)(this, p)), window.dispatchEvent(new Event("eip6963:requestProvider"))
                    }
                }
                var _ = {
                    writable: !0,
                    value: null
                };
                let v = () => f.getInstance();
                async function m(e) {
                    let {
                        provider: t
                    } = e, i = await U(t);
                    if (!i) return "";
                    let n = await i.request({
                        method: "eth_requestAccounts"
                    });
                    return n && n[0] || ""
                }
                async function g(e) {
                    let {
                        identifier: t,
                        nonce: i,
                        provider: n
                    } = e, r = await U(n);
                    return r ? await r.request({
                        method: "personal_sign",
                        params: ["0x".concat(i.split("").map(e => e.charCodeAt(0).toString(16).padStart(2, "0")).join("")), t]
                    }) : ""
                }
                async function y() {
                    return await m({
                        provider: "metamask"
                    })
                }
                async function w() {
                    return await m({
                        provider: "coinbase_wallet"
                    })
                }
                async function b() {
                    return await m({
                        provider: "okx_wallet"
                    })
                }
                async function S(e) {
                    return await g({ ...e,
                        provider: "metamask"
                    })
                }
                async function k(e) {
                    return await g({ ...e,
                        provider: "coinbase_wallet"
                    })
                }
                async function A(e) {
                    return await g({ ...e,
                        provider: "okx_wallet"
                    })
                }
                async function U(e) {
                    return "coinbase_wallet" === e ? (await Promise.all([i.e("956"), i.e("200")]).then(i.bind(i, 7453)).then(e => e.createCoinbaseWalletSDK))({
                        preference: {
                            options: "all"
                        }
                    }).getProvider() : v().get(e)
                }
            },
            5809: function(e, t, i) {
                "use strict";
                i.d(t, {
                    IK: () => n,
                    Sk: () => r,
                    T7: () => a
                });
                let n = "clerk:beforeunload",
                    r = ["http:", "https:", "wails:", "chrome-extension:"];

                function a(e) {
                    let t = new URL(e, window.location.href);
                    window.dispatchEvent(new CustomEvent(n)), window.location.href = t.href
                }
            },
            1036: function(e, t, i) {
                "use strict";
                i.d(t, {
                    Z: () => $
                });
                var n = function() {
                        function e(e) {
                            var t = this;
                            this._insertTag = function(e) {
                                var i;
                                i = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, i), t.tags.push(e)
                            }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
                        }
                        var t = e.prototype;
                        return t.hydrate = function(e) {
                            e.forEach(this._insertTag)
                        }, t.insert = function(e) {
                            if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                                var t;
                                this._insertTag(((t = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t.setAttribute("nonce", this.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t))
                            }
                            var i = this.tags[this.tags.length - 1];
                            if (this.isSpeedy) {
                                var n = function(e) {
                                    if (e.sheet) return e.sheet;
                                    for (var t = 0; t < document.styleSheets.length; t++)
                                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                                }(i);
                                try {
                                    n.insertRule(e, n.cssRules.length)
                                } catch (e) {}
                            } else i.appendChild(document.createTextNode(e));
                            this.ctr++
                        }, t.flush = function() {
                            this.tags.forEach(function(e) {
                                return e.parentNode && e.parentNode.removeChild(e)
                            }), this.tags = [], this.ctr = 0
                        }, e
                    }(),
                    r = Math.abs,
                    a = String.fromCharCode,
                    s = Object.assign;

                function o(e, t, i) {
                    return e.replace(t, i)
                }

                function l(e, t) {
                    return e.indexOf(t)
                }

                function c(e, t) {
                    return 0 | e.charCodeAt(t)
                }

                function d(e, t, i) {
                    return e.slice(t, i)
                }

                function u(e) {
                    return e.length
                }

                function h(e, t) {
                    return t.push(e), e
                }
                var p = 1,
                    f = 1,
                    _ = 0,
                    v = 0,
                    m = 0,
                    g = "";

                function y(e, t, i, n, r, a, s) {
                    return {
                        value: e,
                        root: t,
                        parent: i,
                        type: n,
                        props: r,
                        children: a,
                        line: p,
                        column: f,
                        length: s,
                        return: ""
                    }
                }

                function w(e, t) {
                    return s(y("", null, null, "", null, null, 0), e, {
                        length: -e.length
                    }, t)
                }

                function b() {
                    return m = v < _ ? c(g, v++) : 0, f++, 10 === m && (f = 1, p++), m
                }

                function S() {
                    return c(g, v)
                }

                function k(e) {
                    switch (e) {
                        case 0:
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            return 5;
                        case 33:
                        case 43:
                        case 44:
                        case 47:
                        case 62:
                        case 64:
                        case 126:
                        case 59:
                        case 123:
                        case 125:
                            return 4;
                        case 58:
                            return 3;
                        case 34:
                        case 39:
                        case 40:
                        case 91:
                            return 2;
                        case 41:
                        case 93:
                            return 1
                    }
                    return 0
                }

                function A(e) {
                    return p = f = 1, _ = u(g = e), v = 0, []
                }

                function U(e) {
                    var t, i;
                    return (t = v - 1, i = function e(t) {
                        for (; b();) switch (m) {
                            case t:
                                return v;
                            case 34:
                            case 39:
                                34 !== t && 39 !== t && e(m);
                                break;
                            case 40:
                                41 === t && e(t);
                                break;
                            case 92:
                                b()
                        }
                        return v
                    }(91 === e ? e + 2 : 40 === e ? e + 1 : e), d(g, t, i)).trim()
                }
                var O = "-ms-",
                    C = "-moz-",
                    P = "-webkit-",
                    E = "comm",
                    I = "rule",
                    T = "decl",
                    x = "@keyframes";

                function R(e, t) {
                    for (var i = "", n = e.length, r = 0; r < n; r++) i += t(e[r], r, e, t) || "";
                    return i
                }

                function M(e, t, i, n) {
                    switch (e.type) {
                        case "@layer":
                            if (e.children.length) break;
                        case "@import":
                        case T:
                            return e.return = e.return || e.value;
                        case E:
                            return "";
                        case x:
                            return e.return = e.value + "{" + R(e.children, n) + "}";
                        case I:
                            e.value = e.props.join(",")
                    }
                    return u(i = R(e.children, n)) ? e.return = e.value + "{" + i + "}" : ""
                }

                function z(e, t, i, n, a, s, l, c, u, h, p) {
                    for (var f = a - 1, _ = 0 === a ? s : [""], v = _.length, m = 0, g = 0, w = 0; m < n; ++m)
                        for (var b = 0, S = d(e, f + 1, f = r(g = l[m])), k = e; b < v; ++b)(k = (g > 0 ? _[b] + " " + S : o(S, /&\f/g, _[b])).trim()) && (u[w++] = k);
                    return y(e, t, i, 0 === a ? I : c, u, h, p)
                }

                function N(e, t, i, n) {
                    return y(e, t, i, T, d(e, 0, n), d(e, n + 1, -1), n)
                }
                var W = function(e, t, i) {
                        for (var n = 0, r = 0; n = r, r = S(), 38 === n && 12 === r && (t[i] = 1), !k(r);) b();
                        return d(g, e, v)
                    },
                    L = function(e, t) {
                        var i = -1,
                            n = 44;
                        do switch (k(n)) {
                            case 0:
                                38 === n && 12 === S() && (t[i] = 1), e[i] += W(v - 1, t, i);
                                break;
                            case 2:
                                e[i] += U(n);
                                break;
                            case 4:
                                if (44 === n) {
                                    e[++i] = 58 === S() ? "&\f" : "", t[i] = e[i].length;
                                    break
                                }
                            default:
                                e[i] += a(n)
                        }
                        while (n = b());
                        return e
                    },
                    F = function(e, t) {
                        var i;
                        return i = L(A(e), t), g = "", i
                    },
                    D = new WeakMap,
                    j = function(e) {
                        if ("rule" === e.type && e.parent && !(e.length < 1)) {
                            for (var t = e.value, i = e.parent, n = e.column === i.column && e.line === i.line;
                                "rule" !== i.type;)
                                if (!(i = i.parent)) return;
                            if ((1 !== e.props.length || 58 === t.charCodeAt(0) || D.get(i)) && !n) {
                                D.set(e, !0);
                                for (var r = [], a = F(t, r), s = i.props, o = 0, l = 0; o < a.length; o++)
                                    for (var c = 0; c < s.length; c++, l++) e.props[l] = r[o] ? a[o].replace(/&\f/g, s[c]) : s[c] + " " + a[o]
                            }
                        }
                    },
                    V = function(e) {
                        if ("decl" === e.type) {
                            var t = e.value;
                            108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
                        }
                    },
                    K = [function(e, t, i, n) {
                        if (e.length > -1 && !e.return) switch (e.type) {
                            case T:
                                e.return = function e(t, i) {
                                    switch (45 ^ c(t, 0) ? (((i << 2 ^ c(t, 0)) << 2 ^ c(t, 1)) << 2 ^ c(t, 2)) << 2 ^ c(t, 3) : 0) {
                                        case 5103:
                                            return P + "print-" + t + t;
                                        case 5737:
                                        case 4201:
                                        case 3177:
                                        case 3433:
                                        case 1641:
                                        case 4457:
                                        case 2921:
                                        case 5572:
                                        case 6356:
                                        case 5844:
                                        case 3191:
                                        case 6645:
                                        case 3005:
                                        case 6391:
                                        case 5879:
                                        case 5623:
                                        case 6135:
                                        case 4599:
                                        case 4855:
                                        case 4215:
                                        case 6389:
                                        case 5109:
                                        case 5365:
                                        case 5621:
                                        case 3829:
                                            return P + t + t;
                                        case 5349:
                                        case 4246:
                                        case 4810:
                                        case 6968:
                                        case 2756:
                                            return P + t + C + t + O + t + t;
                                        case 6828:
                                        case 4268:
                                            return P + t + O + t + t;
                                        case 6165:
                                            return P + t + O + "flex-" + t + t;
                                        case 5187:
                                            return P + t + o(t, /(\w+).+(:[^]+)/, P + "box-$1$2" + O + "flex-$1$2") + t;
                                        case 5443:
                                            return P + t + O + "flex-item-" + o(t, /flex-|-self/, "") + t;
                                        case 4675:
                                            return P + t + O + "flex-line-pack" + o(t, /align-content|flex-|-self/, "") + t;
                                        case 5548:
                                            return P + t + O + o(t, "shrink", "negative") + t;
                                        case 5292:
                                            return P + t + O + o(t, "basis", "preferred-size") + t;
                                        case 6060:
                                            return P + "box-" + o(t, "-grow", "") + P + t + O + o(t, "grow", "positive") + t;
                                        case 4554:
                                            return P + o(t, /([^-])(transform)/g, "$1" + P + "$2") + t;
                                        case 6187:
                                            return o(o(o(t, /(zoom-|grab)/, P + "$1"), /(image-set)/, P + "$1"), t, "") + t;
                                        case 5495:
                                        case 3959:
                                            return o(t, /(image-set\([^]*)/, P + "$1$`$1");
                                        case 4968:
                                            return o(o(t, /(.+:)(flex-)?(.*)/, P + "box-pack:$3" + O + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + P + t + t;
                                        case 4095:
                                        case 3583:
                                        case 4068:
                                        case 2532:
                                            return o(t, /(.+)-inline(.+)/, P + "$1$2") + t;
                                        case 8116:
                                        case 7059:
                                        case 5753:
                                        case 5535:
                                        case 5445:
                                        case 5701:
                                        case 4933:
                                        case 4677:
                                        case 5533:
                                        case 5789:
                                        case 5021:
                                        case 4765:
                                            if (u(t) - 1 - i > 6) switch (c(t, i + 1)) {
                                                case 109:
                                                    if (45 !== c(t, i + 4)) break;
                                                case 102:
                                                    return o(t, /(.+:)(.+)-([^]+)/, "$1" + P + "$2-$3$1" + C + (108 == c(t, i + 3) ? "$3" : "$2-$3")) + t;
                                                case 115:
                                                    return ~l(t, "stretch") ? e(o(t, "stretch", "fill-available"), i) + t : t
                                            }
                                            break;
                                        case 4949:
                                            if (115 !== c(t, i + 1)) break;
                                        case 6444:
                                            switch (c(t, u(t) - 3 - (~l(t, "!important") && 10))) {
                                                case 107:
                                                    return o(t, ":", ":" + P) + t;
                                                case 101:
                                                    return o(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + P + (45 === c(t, 14) ? "inline-" : "") + "box$3$1" + P + "$2$3$1" + O + "$2box$3") + t
                                            }
                                            break;
                                        case 5936:
                                            switch (c(t, i + 11)) {
                                                case 114:
                                                    return P + t + O + o(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                                                case 108:
                                                    return P + t + O + o(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                                                case 45:
                                                    return P + t + O + o(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                                            }
                                            return P + t + O + t + t
                                    }
                                    return t
                                }(e.value, e.length);
                                break;
                            case x:
                                return R([w(e, {
                                    value: o(e.value, "@", "@" + P)
                                })], n);
                            case I:
                                if (e.length) {
                                    var r, a;
                                    return r = e.props, a = function(t) {
                                        var i;
                                        switch (i = t, (i = /(::plac\w+|:read-\w+)/.exec(i)) ? i[0] : i) {
                                            case ":read-only":
                                            case ":read-write":
                                                return R([w(e, {
                                                    props: [o(t, /:(read-\w+)/, ":" + C + "$1")]
                                                })], n);
                                            case "::placeholder":
                                                return R([w(e, {
                                                    props: [o(t, /:(plac\w+)/, ":" + P + "input-$1")]
                                                }), w(e, {
                                                    props: [o(t, /:(plac\w+)/, ":" + C + "$1")]
                                                }), w(e, {
                                                    props: [o(t, /:(plac\w+)/, O + "input-$1")]
                                                })], n)
                                        }
                                        return ""
                                    }, r.map(a).join("")
                                }
                        }
                    }],
                    $ = function(e) {
                        var t, i, r, s, _, w, O = e.key;
                        if ("css" === O) {
                            var C = document.querySelectorAll("style[data-emotion]:not([data-s])");
                            Array.prototype.forEach.call(C, function(e) {
                                -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
                            })
                        }
                        var P = e.stylisPlugins || K,
                            I = {},
                            T = [];
                        i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + O + ' "]'), function(e) {
                            for (var t = e.getAttribute("data-emotion").split(" "), i = 1; i < t.length; i++) I[t[i]] = !0;
                            T.push(e)
                        });
                        var x = (w = (_ = [j, V].concat(P, [M, (t = function(e) {
                                s.insert(e)
                            }, function(e) {
                                !e.root && (e = e.return) && t(e)
                            })])).length, function(e, t, i, n) {
                                for (var r = "", a = 0; a < w; a++) r += _[a](e, t, i, n) || "";
                                return r
                            }),
                            W = function(e) {
                                var t, i;
                                return R((i = function e(t, i, n, r, s, _, w, A, O) {
                                    for (var C, P = 0, I = 0, T = w, x = 0, R = 0, M = 0, W = 1, L = 1, F = 1, D = 0, j = "", V = s, K = _, $ = r, J = j; L;) switch (M = D, D = b()) {
                                        case 40:
                                            if (108 != M && 58 == c(J, T - 1)) {
                                                -1 != l(J += o(U(D), "&", "&\f"), "&\f") && (F = -1);
                                                break
                                            }
                                        case 34:
                                        case 39:
                                        case 91:
                                            J += U(D);
                                            break;
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            J += function(e) {
                                                for (; m = S();)
                                                    if (m < 33) b();
                                                    else break;
                                                return k(e) > 2 || k(m) > 3 ? "" : " "
                                            }(M);
                                            break;
                                        case 92:
                                            J += function(e, t) {
                                                for (var i; --t && b() && !(m < 48) && !(m > 102) && (!(m > 57) || !(m < 65)) && (!(m > 70) || !(m < 97)););
                                                return i = v + (t < 6 && 32 == S() && 32 == b()), d(g, e, i)
                                            }(v - 1, 7);
                                            continue;
                                        case 47:
                                            switch (S()) {
                                                case 42:
                                                case 47:
                                                    h((C = function(e, t) {
                                                        for (; b();)
                                                            if (e + m === 57) break;
                                                            else if (e + m === 84 && 47 === S()) break;
                                                        return "/*" + d(g, t, v - 1) + "*" + a(47 === e ? e : b())
                                                    }(b(), v), y(C, i, n, E, a(m), d(C, 2, -2), 0)), O);
                                                    break;
                                                default:
                                                    J += "/"
                                            }
                                            break;
                                        case 123 * W:
                                            A[P++] = u(J) * F;
                                        case 125 * W:
                                        case 59:
                                        case 0:
                                            switch (D) {
                                                case 0:
                                                case 125:
                                                    L = 0;
                                                case 59 + I:
                                                    -1 == F && (J = o(J, /\f/g, "")), R > 0 && u(J) - T && h(R > 32 ? N(J + ";", r, n, T - 1) : N(o(J, " ", "") + ";", r, n, T - 2), O);
                                                    break;
                                                case 59:
                                                    J += ";";
                                                default:
                                                    if (h($ = z(J, i, n, P, I, s, A, j, V = [], K = [], T), _), 123 === D) {
                                                        if (0 === I) e(J, i, $, $, V, _, T, A, K);
                                                        else switch (99 === x && 110 === c(J, 3) ? 100 : x) {
                                                            case 100:
                                                            case 108:
                                                            case 109:
                                                            case 115:
                                                                e(t, $, $, r && h(z(t, $, $, 0, 0, s, A, j, s, V = [], T), K), s, K, T, A, r ? V : K);
                                                                break;
                                                            default:
                                                                e(J, $, $, $, [""], K, 0, A, K)
                                                        }
                                                    }
                                            }
                                            P = I = R = 0, W = F = 1, j = J = "", T = w;
                                            break;
                                        case 58:
                                            T = 1 + u(J), R = M;
                                        default:
                                            if (W < 1) {
                                                if (123 == D) --W;
                                                else if (125 == D && 0 == W++ && 125 == (m = v > 0 ? c(g, --v) : 0, f--, 10 === m && (f = 1, p--), m)) continue
                                            }
                                            switch (J += a(D), D * W) {
                                                case 38:
                                                    F = I > 0 ? 1 : (J += "\f", -1);
                                                    break;
                                                case 44:
                                                    A[P++] = (u(J) - 1) * F, F = 1;
                                                    break;
                                                case 64:
                                                    45 === S() && (J += U(b())), x = S(), I = T = u(j = J += function(e) {
                                                        for (; !k(S());) b();
                                                        return d(g, e, v)
                                                    }(v)), D++;
                                                    break;
                                                case 45:
                                                    45 === M && 2 == u(J) && (W = 0)
                                            }
                                    }
                                    return _
                                }("", null, null, null, [""], t = A(t = e), 0, [0], t), g = "", i), x)
                            };
                        r = function(e, t, i, n) {
                            s = i, W(e ? e + "{" + t.styles + "}" : t.styles), n && (L.inserted[t.name] = !0)
                        };
                        var L = {
                            key: O,
                            sheet: new n({
                                key: O,
                                container: i,
                                nonce: e.nonce,
                                speedy: e.speedy,
                                prepend: e.prepend,
                                insertionPoint: e.insertionPoint
                            }),
                            nonce: e.nonce,
                            inserted: I,
                            registered: {},
                            insert: r
                        };
                        return L.sheet.hydrate(T), L
                    }
            },
            5992: function(e, t, i) {
                "use strict";
                i.d(t, {
                    c: () => y,
                    E: () => b,
                    h: () => h,
                    a: () => m,
                    C: () => f
                });
                var n, r = i(9144),
                    a = i(1036);

                function s() {
                    return (s = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var i = arguments[t];
                            for (var n in i)({}).hasOwnProperty.call(i, n) && (e[n] = i[n])
                        }
                        return e
                    }).apply(null, arguments)
                }
                var o = function(e) {
                        var t = new WeakMap;
                        return function(i) {
                            if (t.has(i)) return t.get(i);
                            var n = e(i);
                            return t.set(i, n), n
                        }
                    },
                    l = function(e, t, i) {
                        var n = e.key + "-" + t.name;
                        !1 === i && void 0 === e.registered[n] && (e.registered[n] = t.styles)
                    },
                    c = function(e, t, i) {
                        l(e, t, i);
                        var n = e.key + "-" + t.name;
                        if (void 0 === e.inserted[t.name]) {
                            var r = t;
                            do e.insert(t === r ? "." + n : "", r, e.sheet, !0), r = r.next; while (void 0 !== r)
                        }
                    },
                    d = i(6724),
                    u = i(3991),
                    h = {}.hasOwnProperty,
                    p = r.createContext("undefined" != typeof HTMLElement ? (0, a.Z)({
                        key: "css"
                    }) : null),
                    f = p.Provider,
                    _ = r.createContext({}),
                    v = o(function(e) {
                        return o(function(t) {
                            var i, n;
                            return i = e, "function" == typeof(n = t) ? n(i) : s({}, i, n)
                        })
                    }),
                    m = function(e) {
                        var t = r.useContext(_);
                        return e.theme !== t && (t = v(t)(e.theme)), r.createElement(_.Provider, {
                            value: t
                        }, e.children)
                    },
                    g = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
                    y = function(e, t) {
                        var i = {};
                        for (var n in t) h.call(t, n) && (i[n] = t[n]);
                        return i[g] = e, i
                    },
                    w = function(e) {
                        var t = e.cache,
                            i = e.serialized,
                            n = e.isStringTag;
                        return l(t, i, n), (0, u.L)(function() {
                            return c(t, i, n)
                        }), null
                    },
                    b = (n = function(e, t, i) {
                        var n, a, s, o = e.css;
                        "string" == typeof o && void 0 !== t.registered[o] && (o = t.registered[o]);
                        var l = e[g],
                            c = [o],
                            u = "";
                        "string" == typeof e.className ? (n = t.registered, a = e.className, s = "", a.split(" ").forEach(function(e) {
                            void 0 !== n[e] ? c.push(n[e] + ";") : s += e + " "
                        }), u = s) : null != e.className && (u = e.className + " ");
                        var p = (0, d.O)(c, void 0, r.useContext(_));
                        u += t.key + "-" + p.name;
                        var f = {};
                        for (var v in e) h.call(e, v) && "css" !== v && v !== g && (f[v] = e[v]);
                        return f.ref = i, f.className = u, r.createElement(r.Fragment, null, r.createElement(w, {
                            cache: t,
                            serialized: p,
                            isStringTag: "string" == typeof l
                        }), r.createElement(l, f))
                    }, (0, r.forwardRef)(function(e, t) {
                        return n(e, (0, r.useContext)(p), t)
                    }))
            },
            9755: function(e, t, i) {
                "use strict";
                i.d(t, {
                    BX: () => o,
                    HY: () => a,
                    tZ: () => s
                });
                var n = i(836),
                    r = i(5992);
                i(9144), i(1036), i(3772), i(6724), i(3991);
                var a = n.Fragment;

                function s(e, t, i) {
                    return r.h.call(t, "css") ? n.jsx(r.E, (0, r.c)(e, t), i) : n.jsx(e, t, i)
                }

                function o(e, t, i) {
                    return r.h.call(t, "css") ? n.jsxs(r.E, (0, r.c)(e, t), i) : n.jsxs(e, t, i)
                }
            },
            6724: function(e, t, i) {
                "use strict";
                i.d(t, {
                    O: () => _
                });
                var n, r, a, s = {
                        animationIterationCount: 1,
                        aspectRatio: 1,
                        borderImageOutset: 1,
                        borderImageSlice: 1,
                        borderImageWidth: 1,
                        boxFlex: 1,
                        boxFlexGroup: 1,
                        boxOrdinalGroup: 1,
                        columnCount: 1,
                        columns: 1,
                        flex: 1,
                        flexGrow: 1,
                        flexPositive: 1,
                        flexShrink: 1,
                        flexNegative: 1,
                        flexOrder: 1,
                        gridRow: 1,
                        gridRowEnd: 1,
                        gridRowSpan: 1,
                        gridRowStart: 1,
                        gridColumn: 1,
                        gridColumnEnd: 1,
                        gridColumnSpan: 1,
                        gridColumnStart: 1,
                        msGridRow: 1,
                        msGridRowSpan: 1,
                        msGridColumn: 1,
                        msGridColumnSpan: 1,
                        fontWeight: 1,
                        lineHeight: 1,
                        opacity: 1,
                        order: 1,
                        orphans: 1,
                        tabSize: 1,
                        widows: 1,
                        zIndex: 1,
                        zoom: 1,
                        WebkitLineClamp: 1,
                        fillOpacity: 1,
                        floodOpacity: 1,
                        stopOpacity: 1,
                        strokeDasharray: 1,
                        strokeDashoffset: 1,
                        strokeMiterlimit: 1,
                        strokeOpacity: 1,
                        strokeWidth: 1
                    },
                    o = /[A-Z]|^ms/g,
                    l = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                    c = function(e) {
                        return 45 === e.charCodeAt(1)
                    },
                    d = function(e) {
                        return null != e && "boolean" != typeof e
                    },
                    u = (n = function(e) {
                        return c(e) ? e : e.replace(o, "-$&").toLowerCase()
                    }, r = Object.create(null), function(e) {
                        return void 0 === r[e] && (r[e] = n(e)), r[e]
                    }),
                    h = function(e, t) {
                        switch (e) {
                            case "animation":
                            case "animationName":
                                if ("string" == typeof t) return t.replace(l, function(e, t, i) {
                                    return a = {
                                        name: t,
                                        styles: i,
                                        next: a
                                    }, t
                                })
                        }
                        return 1 === s[e] || c(e) || "number" != typeof t || 0 === t ? t : t + "px"
                    };

                function p(e, t, i) {
                    if (null == i) return "";
                    if (void 0 !== i.__emotion_styles) return i;
                    switch (typeof i) {
                        case "boolean":
                            return "";
                        case "object":
                            if (1 === i.anim) return a = {
                                name: i.name,
                                styles: i.styles,
                                next: a
                            }, i.name;
                            if (void 0 !== i.styles) {
                                var n = i.next;
                                if (void 0 !== n)
                                    for (; void 0 !== n;) a = {
                                        name: n.name,
                                        styles: n.styles,
                                        next: a
                                    }, n = n.next;
                                return i.styles + ";"
                            }
                            return function(e, t, i) {
                                var n = "";
                                if (Array.isArray(i))
                                    for (var r = 0; r < i.length; r++) n += p(e, t, i[r]) + ";";
                                else
                                    for (var a in i) {
                                        var s = i[a];
                                        if ("object" != typeof s) null != t && void 0 !== t[s] ? n += a + "{" + t[s] + "}" : d(s) && (n += u(a) + ":" + h(a, s) + ";");
                                        else if (Array.isArray(s) && "string" == typeof s[0] && (null == t || void 0 === t[s[0]]))
                                            for (var o = 0; o < s.length; o++) d(s[o]) && (n += u(a) + ":" + h(a, s[o]) + ";");
                                        else {
                                            var l = p(e, t, s);
                                            switch (a) {
                                                case "animation":
                                                case "animationName":
                                                    n += u(a) + ":" + l + ";";
                                                    break;
                                                default:
                                                    n += a + "{" + l + "}"
                                            }
                                        }
                                    }
                                return n
                            }(e, t, i);
                        case "function":
                            if (void 0 !== e) {
                                var r = a,
                                    s = i(e);
                                return a = r, p(e, t, s)
                            }
                    }
                    if (null == t) return i;
                    var o = t[i];
                    return void 0 !== o ? o : i
                }
                var f = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
                    _ = function(e, t, i) {
                        if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                        var n, r = !0,
                            s = "";
                        a = void 0;
                        var o = e[0];
                        null == o || void 0 === o.raw ? (r = !1, s += p(i, t, o)) : s += o[0];
                        for (var l = 1; l < e.length; l++) s += p(i, t, e[l]), r && (s += o[l]);
                        f.lastIndex = 0;
                        for (var c = ""; null !== (n = f.exec(s));) c += "-" + n[1];
                        return {
                            name: function(e) {
                                for (var t, i = 0, n = 0, r = e.length; r >= 4; ++n, r -= 4) t = (65535 & (t = 255 & e.charCodeAt(n) | (255 & e.charCodeAt(++n)) << 8 | (255 & e.charCodeAt(++n)) << 16 | (255 & e.charCodeAt(++n)) << 24)) * 0x5bd1e995 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, i = (65535 & t) * 0x5bd1e995 + ((t >>> 16) * 59797 << 16) ^ (65535 & i) * 0x5bd1e995 + ((i >>> 16) * 59797 << 16);
                                switch (r) {
                                    case 3:
                                        i ^= (255 & e.charCodeAt(n + 2)) << 16;
                                    case 2:
                                        i ^= (255 & e.charCodeAt(n + 1)) << 8;
                                    case 1:
                                        i ^= 255 & e.charCodeAt(n), i = (65535 & i) * 0x5bd1e995 + ((i >>> 16) * 59797 << 16)
                                }
                                return i ^= i >>> 13, (((i = (65535 & i) * 0x5bd1e995 + ((i >>> 16) * 59797 << 16)) ^ i >>> 15) >>> 0).toString(36)
                            }(s) + c,
                            styles: s,
                            next: a
                        }
                    }
            },
            3991: function(e, t, i) {
                "use strict";
                i.d(t, {
                    L: () => s
                });
                var n, r = i(9144),
                    a = !!(n || (n = i.t(r, 2))).useInsertionEffect && (n || (n = i.t(r, 2))).useInsertionEffect,
                    s = a || function(e) {
                        return e()
                    };
                a || r.useLayoutEffect
            },
            4019: function(e, t, i) {
                "use strict";
                var n = this && this.__awaiter || function(e, t, i, n) {
                        return new(i || (i = Promise))(function(r, a) {
                            function s(e) {
                                try {
                                    l(n.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function o(e) {
                                try {
                                    l(n.throw(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function l(e) {
                                e.done ? r(e.value) : new i(function(t) {
                                    t(e.value)
                                }).then(s, o)
                            }
                            l((n = n.apply(e, t || [])).next())
                        })
                    },
                    r = this && this.__generator || function(e, t) {
                        var i, n, r, a, s = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return a = {
                            next: o(0),
                            throw: o(1),
                            return: o(2)
                        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }), a;

                        function o(a) {
                            return function(o) {
                                return function(a) {
                                    if (i) throw TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (i = 1, n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, a[1])).done) return r;
                                        switch (n = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                                            case 0:
                                            case 1:
                                                r = a;
                                                break;
                                            case 4:
                                                return s.label++, {
                                                    value: a[1],
                                                    done: !1
                                                };
                                            case 5:
                                                s.label++, n = a[1], a = [0];
                                                continue;
                                            case 7:
                                                a = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                    s.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && s.label < r[1]) {
                                                    s.label = r[1], r = a;
                                                    break
                                                }
                                                if (r && s.label < r[2]) {
                                                    s.label = r[2], s.ops.push(a);
                                                    break
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        a = t.call(e, s)
                                    } catch (e) {
                                        a = [6, e], n = 0
                                    } finally {
                                        i = r = 0
                                    }
                                    if (5 & a[0]) throw a[1];
                                    return {
                                        value: a[0] ? a[1] : void 0,
                                        done: !0
                                    }
                                }([a, o])
                            }
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = i(570),
                    s = "browser-tabs-lock-key";

                function o(e) {
                    return new Promise(function(t) {
                        return setTimeout(t, e)
                    })
                }

                function l(e) {
                    for (var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", i = "", n = 0; n < e; n++) {
                        var r = Math.floor(Math.random() * t.length);
                        i += t[r]
                    }
                    return i
                }
                var c = function() {
                    function e() {
                        this.acquiredIatSet = new Set, this.id = Date.now().toString() + l(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), void 0 === e.waiters && (e.waiters = [])
                    }
                    return e.prototype.acquireLock = function(t, i) {
                        return void 0 === i && (i = 5e3), n(this, void 0, void 0, function() {
                            var n, a, c, d, u, h;
                            return r(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        n = Date.now() + l(4), a = Date.now() + i, c = s + "-" + t, d = window.localStorage, r.label = 1;
                                    case 1:
                                        if (!(Date.now() < a)) return [3, 8];
                                        return [4, o(30)];
                                    case 2:
                                        if (r.sent(), null !== d.getItem(c)) return [3, 5];
                                        return u = this.id + "-" + t + "-" + n, [4, o(Math.floor(25 * Math.random()))];
                                    case 3:
                                        return r.sent(), d.setItem(c, JSON.stringify({
                                            id: this.id,
                                            iat: n,
                                            timeoutKey: u,
                                            timeAcquired: Date.now(),
                                            timeRefreshed: Date.now()
                                        })), [4, o(30)];
                                    case 4:
                                        if (r.sent(), null !== (h = d.getItem(c)) && (h = JSON.parse(h)).id === this.id && h.iat === n) return this.acquiredIatSet.add(n), this.refreshLockWhileAcquired(c, n), [2, !0];
                                        return [3, 7];
                                    case 5:
                                        return e.lockCorrector(), [4, this.waitForSomethingToChange(a)];
                                    case 6:
                                        r.sent(), r.label = 7;
                                    case 7:
                                        return n = Date.now() + l(4), [3, 1];
                                    case 8:
                                        return [2, !1]
                                }
                            })
                        })
                    }, e.prototype.refreshLockWhileAcquired = function(e, t) {
                        return n(this, void 0, void 0, function() {
                            var i = this;
                            return r(this, function(s) {
                                return setTimeout(function() {
                                    return n(i, void 0, void 0, function() {
                                        var i, n;
                                        return r(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, a.default().lock(t)];
                                                case 1:
                                                    if (r.sent(), !this.acquiredIatSet.has(t) || null === (n = (i = window.localStorage).getItem(e))) return a.default().unlock(t), [2];
                                                    return (n = JSON.parse(n)).timeRefreshed = Date.now(), i.setItem(e, JSON.stringify(n)), a.default().unlock(t), this.refreshLockWhileAcquired(e, t), [2]
                                            }
                                        })
                                    })
                                }, 1e3), [2]
                            })
                        })
                    }, e.prototype.waitForSomethingToChange = function(t) {
                        return n(this, void 0, void 0, function() {
                            return r(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, new Promise(function(i) {
                                            var n = !1,
                                                r = Date.now(),
                                                a = !1;

                                            function s() {
                                                if (a || (window.removeEventListener("storage", s), e.removeFromWaiting(s), clearTimeout(o), a = !0), !n) {
                                                    n = !0;
                                                    var t = 50 - (Date.now() - r);
                                                    t > 0 ? setTimeout(i, t) : i()
                                                }
                                            }
                                            window.addEventListener("storage", s), e.addToWaiting(s);
                                            var o = setTimeout(s, Math.max(0, t - Date.now()))
                                        })];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, e.addToWaiting = function(t) {
                        this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t)
                    }, e.removeFromWaiting = function(t) {
                        void 0 !== e.waiters && (e.waiters = e.waiters.filter(function(e) {
                            return e !== t
                        }))
                    }, e.notifyWaiters = function() {
                        void 0 !== e.waiters && e.waiters.slice().forEach(function(e) {
                            return e()
                        })
                    }, e.prototype.releaseLock = function(e) {
                        return n(this, void 0, void 0, function() {
                            return r(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.releaseLock__private__(e)];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            })
                        })
                    }, e.prototype.releaseLock__private__ = function(t) {
                        return n(this, void 0, void 0, function() {
                            var i, n, o;
                            return r(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (i = window.localStorage, n = s + "-" + t, null === (o = i.getItem(n))) return [2];
                                        if ((o = JSON.parse(o)).id !== this.id) return [3, 2];
                                        return [4, a.default().lock(o.iat)];
                                    case 1:
                                        r.sent(), this.acquiredIatSet.delete(o.iat), i.removeItem(n), a.default().unlock(o.iat), e.notifyWaiters(), r.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, e.lockCorrector = function() {
                        for (var t = Date.now() - 5e3, i = window.localStorage, n = Object.keys(i), r = !1, a = 0; a < n.length; a++) {
                            var o = n[a];
                            if (o.includes(s)) {
                                var l = i.getItem(o);
                                null !== l && (void 0 === (l = JSON.parse(l)).timeRefreshed && l.timeAcquired < t || void 0 !== l.timeRefreshed && l.timeRefreshed < t) && (i.removeItem(o), r = !0)
                            }
                        }
                        r && e.notifyWaiters()
                    }, e.waiters = void 0, e
                }();
                t.default = c
            },
            570: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                    function e() {
                        var e = this;
                        this.locked = new Map, this.addToLocked = function(t, i) {
                            var n = e.locked.get(t);
                            void 0 === n ? void 0 === i ? e.locked.set(t, []) : e.locked.set(t, [i]) : void 0 !== i && (n.unshift(i), e.locked.set(t, n))
                        }, this.isLocked = function(t) {
                            return e.locked.has(t)
                        }, this.lock = function(t) {
                            return new Promise(function(i, n) {
                                e.isLocked(t) ? e.addToLocked(t, i) : (e.addToLocked(t), i())
                            })
                        }, this.unlock = function(t) {
                            var i = e.locked.get(t);
                            if (void 0 === i || 0 === i.length) {
                                e.locked.delete(t);
                                return
                            }
                            var n = i.pop();
                            e.locked.set(t, i), void 0 !== n && setTimeout(n, 0)
                        }
                    }
                    return e.getInstance = function() {
                        return void 0 === e.instance && (e.instance = new e), e.instance
                    }, e
                }();
                t.default = function() {
                    return i.getInstance()
                }
            },
            4763: function(e) {
                e.exports = function(e, t) {
                    if ("string" != typeof e) throw TypeError("Expected a string");
                    for (var i, n = String(e), r = "", a = !!t && !!t.extended, s = !!t && !!t.globstar, o = !1, l = t && "string" == typeof t.flags ? t.flags : "", c = 0, d = n.length; c < d; c++) switch (i = n[c]) {
                        case "/":
                        case "$":
                        case "^":
                        case "+":
                        case ".":
                        case "(":
                        case ")":
                        case "=":
                        case "!":
                        case "|":
                            r += "\\" + i;
                            break;
                        case "?":
                            if (a) {
                                r += ".";
                                break
                            }
                        case "[":
                        case "]":
                            if (a) {
                                r += i;
                                break
                            }
                        case "{":
                            if (a) {
                                o = !0, r += "(";
                                break
                            }
                        case "}":
                            if (a) {
                                o = !1, r += ")";
                                break
                            }
                        case ",":
                            if (o) {
                                r += "|";
                                break
                            }
                            r += "\\" + i;
                            break;
                        case "*":
                            for (var u = n[c - 1], h = 1;
                                "*" === n[c + 1];) h++, c++;
                            var p = n[c + 1];
                            s ? h > 1 && ("/" === u || void 0 === u) && ("/" === p || void 0 === p) ? (r += "((?:[^/]*(?:/|$))*)", c++) : r += "([^/]*)" : r += ".*";
                            break;
                        default:
                            r += i
                    }
                    return l && ~l.indexOf("g") || (r = "^" + r + "$"), new RegExp(r, l)
                }
            },
            3772: function(e, t, i) {
                "use strict";
                var n = i(8131),
                    r = {
                        childContextTypes: !0,
                        contextType: !0,
                        contextTypes: !0,
                        defaultProps: !0,
                        displayName: !0,
                        getDefaultProps: !0,
                        getDerivedStateFromError: !0,
                        getDerivedStateFromProps: !0,
                        mixins: !0,
                        propTypes: !0,
                        type: !0
                    },
                    a = {
                        name: !0,
                        length: !0,
                        prototype: !0,
                        caller: !0,
                        callee: !0,
                        arguments: !0,
                        arity: !0
                    },
                    s = {
                        $$typeof: !0,
                        compare: !0,
                        defaultProps: !0,
                        displayName: !0,
                        propTypes: !0,
                        type: !0
                    },
                    o = {};

                function l(e) {
                    return n.isMemo(e) ? s : o[e.$$typeof] || r
                }
                o[n.ForwardRef] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, o[n.Memo] = s;
                var c = Object.defineProperty,
                    d = Object.getOwnPropertyNames,
                    u = Object.getOwnPropertySymbols,
                    h = Object.getOwnPropertyDescriptor,
                    p = Object.getPrototypeOf,
                    f = Object.prototype;
                e.exports = function e(t, i, n) {
                    if ("string" != typeof i) {
                        if (f) {
                            var r = p(i);
                            r && r !== f && e(t, r, n)
                        }
                        var s = d(i);
                        u && (s = s.concat(u(i)));
                        for (var o = l(t), _ = l(i), v = 0; v < s.length; ++v) {
                            var m = s[v];
                            if (!a[m] && !(n && n[m]) && !(_ && _[m]) && !(o && o[m])) {
                                var g = h(i, m);
                                try {
                                    c(t, m, g)
                                } catch (e) {}
                            }
                        }
                    }
                    return t
                }
            },
            1470: function(e, t) {
                "use strict";
                var i = "function" == typeof Symbol && Symbol.for,
                    n = i ? Symbol.for("react.element") : 60103,
                    r = i ? Symbol.for("react.portal") : 60106,
                    a = i ? Symbol.for("react.fragment") : 60107,
                    s = i ? Symbol.for("react.strict_mode") : 60108,
                    o = i ? Symbol.for("react.profiler") : 60114,
                    l = i ? Symbol.for("react.provider") : 60109,
                    c = i ? Symbol.for("react.context") : 60110,
                    d = i ? Symbol.for("react.async_mode") : 60111,
                    u = i ? Symbol.for("react.concurrent_mode") : 60111,
                    h = i ? Symbol.for("react.forward_ref") : 60112,
                    p = i ? Symbol.for("react.suspense") : 60113,
                    f = i ? Symbol.for("react.suspense_list") : 60120,
                    _ = i ? Symbol.for("react.memo") : 60115,
                    v = i ? Symbol.for("react.lazy") : 60116,
                    m = i ? Symbol.for("react.block") : 60121,
                    g = i ? Symbol.for("react.fundamental") : 60117,
                    y = i ? Symbol.for("react.responder") : 60118,
                    w = i ? Symbol.for("react.scope") : 60119;

                function b(e) {
                    if ("object" == typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case n:
                                switch (e = e.type) {
                                    case d:
                                    case u:
                                    case a:
                                    case o:
                                    case s:
                                    case p:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case c:
                                            case h:
                                            case v:
                                            case _:
                                            case l:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                            case r:
                                return t
                        }
                    }
                }

                function S(e) {
                    return b(e) === u
                }
                t.AsyncMode = d, t.ConcurrentMode = u, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = h, t.Fragment = a, t.Lazy = v, t.Memo = _, t.Portal = r, t.Profiler = o, t.StrictMode = s, t.Suspense = p, t.isAsyncMode = function(e) {
                    return S(e) || b(e) === d
                }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
                    return b(e) === c
                }, t.isContextProvider = function(e) {
                    return b(e) === l
                }, t.isElement = function(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === n
                }, t.isForwardRef = function(e) {
                    return b(e) === h
                }, t.isFragment = function(e) {
                    return b(e) === a
                }, t.isLazy = function(e) {
                    return b(e) === v
                }, t.isMemo = function(e) {
                    return b(e) === _
                }, t.isPortal = function(e) {
                    return b(e) === r
                }, t.isProfiler = function(e) {
                    return b(e) === o
                }, t.isStrictMode = function(e) {
                    return b(e) === s
                }, t.isSuspense = function(e) {
                    return b(e) === p
                }, t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === a || e === u || e === o || e === s || e === p || e === f || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === _ || e.$$typeof === l || e.$$typeof === c || e.$$typeof === h || e.$$typeof === g || e.$$typeof === y || e.$$typeof === w || e.$$typeof === m)
                }, t.typeOf = b
            },
            8131: function(e, t, i) {
                "use strict";
                e.exports = i(1470)
            },
            7276: function(e, t, i) {
                "use strict";
                var n = i(9144),
                    r = Symbol.for("react.element"),
                    a = Symbol.for("react.fragment"),
                    s = Object.prototype.hasOwnProperty,
                    o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function c(e, t, i) {
                    var n, a = {},
                        c = null,
                        d = null;
                    for (n in void 0 !== i && (c = "" + i), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, n) && !l.hasOwnProperty(n) && (a[n] = t[n]);
                    if (e && e.defaultProps)
                        for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
                    return {
                        $$typeof: r,
                        type: e,
                        key: c,
                        ref: d,
                        props: a,
                        _owner: o.current
                    }
                }
                t.Fragment = a, t.jsx = c, t.jsxs = c
            },
            4326: function(e, t) {
                "use strict";
                var i = Symbol.for("react.element"),
                    n = Symbol.for("react.portal"),
                    r = Symbol.for("react.fragment"),
                    a = Symbol.for("react.strict_mode"),
                    s = Symbol.for("react.profiler"),
                    o = Symbol.for("react.provider"),
                    l = Symbol.for("react.context"),
                    c = Symbol.for("react.forward_ref"),
                    d = Symbol.for("react.suspense"),
                    u = Symbol.for("react.memo"),
                    h = Symbol.for("react.lazy"),
                    p = Symbol.iterator,
                    f = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    _ = Object.assign,
                    v = {};

                function m(e, t, i) {
                    this.props = e, this.context = t, this.refs = v, this.updater = i || f
                }

                function g() {}

                function y(e, t, i) {
                    this.props = e, this.context = t, this.refs = v, this.updater = i || f
                }
                m.prototype.isReactComponent = {}, m.prototype.setState = function(e, t) {
                    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, m.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, g.prototype = m.prototype;
                var w = y.prototype = new g;
                w.constructor = y, _(w, m.prototype), w.isPureReactComponent = !0;
                var b = Array.isArray,
                    S = Object.prototype.hasOwnProperty,
                    k = {
                        current: null
                    },
                    A = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function U(e, t, n) {
                    var r, a = {},
                        s = null,
                        o = null;
                    if (null != t)
                        for (r in void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (s = "" + t.key), t) S.call(t, r) && !A.hasOwnProperty(r) && (a[r] = t[r]);
                    var l = arguments.length - 2;
                    if (1 === l) a.children = n;
                    else if (1 < l) {
                        for (var c = Array(l), d = 0; d < l; d++) c[d] = arguments[d + 2];
                        a.children = c
                    }
                    if (e && e.defaultProps)
                        for (r in l = e.defaultProps) void 0 === a[r] && (a[r] = l[r]);
                    return {
                        $$typeof: i,
                        type: e,
                        key: s,
                        ref: o,
                        props: a,
                        _owner: k.current
                    }
                }

                function O(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === i
                }
                var C = /\/+/g;

                function P(e, t) {
                    var i, n;
                    return "object" == typeof e && null !== e && null != e.key ? (i = "" + e.key, n = {
                        "=": "=0",
                        ":": "=2"
                    }, "$" + i.replace(/[=:]/g, function(e) {
                        return n[e]
                    })) : t.toString(36)
                }

                function E(e, t, r) {
                    if (null == e) return e;
                    var a = [],
                        s = 0;
                    return ! function e(t, r, a, s, o) {
                        var l, c, d, u = typeof t;
                        ("undefined" === u || "boolean" === u) && (t = null);
                        var h = !1;
                        if (null === t) h = !0;
                        else switch (u) {
                            case "string":
                            case "number":
                                h = !0;
                                break;
                            case "object":
                                switch (t.$$typeof) {
                                    case i:
                                    case n:
                                        h = !0
                                }
                        }
                        if (h) return o = o(h = t), t = "" === s ? "." + P(h, 0) : s, b(o) ? (a = "", null != t && (a = t.replace(C, "$&/") + "/"), e(o, r, a, "", function(e) {
                            return e
                        })) : null != o && (O(o) && (l = o, c = a + (!o.key || h && h.key === o.key ? "" : ("" + o.key).replace(C, "$&/") + "/") + t, o = {
                            $$typeof: i,
                            type: l.type,
                            key: c,
                            ref: l.ref,
                            props: l.props,
                            _owner: l._owner
                        }), r.push(o)), 1;
                        if (h = 0, s = "" === s ? "." : s + ":", b(t))
                            for (var f = 0; f < t.length; f++) {
                                var _ = s + P(u = t[f], f);
                                h += e(u, r, a, _, o)
                            } else if ("function" == typeof(_ = null === (d = t) || "object" != typeof d ? null : "function" == typeof(d = p && d[p] || d["@@iterator"]) ? d : null))
                                for (t = _.call(t), f = 0; !(u = t.next()).done;) _ = s + P(u = u.value, f++), h += e(u, r, a, _, o);
                            else if ("object" === u) throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (r = String(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
                        return h
                    }(e, a, "", "", function(e) {
                        return t.call(r, e, s++)
                    }), a
                }

                function I(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then(function(t) {
                            (0 === e._status || -1 === e._status) && (e._status = 1, e._result = t)
                        }, function(t) {
                            (0 === e._status || -1 === e._status) && (e._status = 2, e._result = t)
                        }), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var T = {
                        current: null
                    },
                    x = {
                        transition: null
                    };

                function R() {
                    throw Error("act(...) is not supported in production builds of React.")
                }
                t.Children = {
                    map: E,
                    forEach: function(e, t, i) {
                        E(e, function() {
                            t.apply(this, arguments)
                        }, i)
                    },
                    count: function(e) {
                        var t = 0;
                        return E(e, function() {
                            t++
                        }), t
                    },
                    toArray: function(e) {
                        return E(e, function(e) {
                            return e
                        }) || []
                    },
                    only: function(e) {
                        if (!O(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = m, t.Fragment = r, t.Profiler = s, t.PureComponent = y, t.StrictMode = a, t.Suspense = d, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
                    ReactCurrentDispatcher: T,
                    ReactCurrentBatchConfig: x,
                    ReactCurrentOwner: k
                }, t.act = R, t.cloneElement = function(e, t, n) {
                    if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var r = _({}, e.props),
                        a = e.key,
                        s = e.ref,
                        o = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (s = t.ref, o = k.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                        for (c in t) S.call(t, c) && !A.hasOwnProperty(c) && (r[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c])
                    }
                    var c = arguments.length - 2;
                    if (1 === c) r.children = n;
                    else if (1 < c) {
                        l = Array(c);
                        for (var d = 0; d < c; d++) l[d] = arguments[d + 2];
                        r.children = l
                    }
                    return {
                        $$typeof: i,
                        type: e.type,
                        key: a,
                        ref: s,
                        props: r,
                        _owner: o
                    }
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: l,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: o,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = U, t.createFactory = function(e) {
                    var t = U.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: c,
                        render: e
                    }
                }, t.isValidElement = O, t.lazy = function(e) {
                    return {
                        $$typeof: h,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: I
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: u,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = x.transition;
                    x.transition = {};
                    try {
                        e()
                    } finally {
                        x.transition = t
                    }
                }, t.unstable_act = R, t.useCallback = function(e, t) {
                    return T.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return T.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return T.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return T.current.useEffect(e, t)
                }, t.useId = function() {
                    return T.current.useId()
                }, t.useImperativeHandle = function(e, t, i) {
                    return T.current.useImperativeHandle(e, t, i)
                }, t.useInsertionEffect = function(e, t) {
                    return T.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return T.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return T.current.useMemo(e, t)
                }, t.useReducer = function(e, t, i) {
                    return T.current.useReducer(e, t, i)
                }, t.useRef = function(e) {
                    return T.current.useRef(e)
                }, t.useState = function(e) {
                    return T.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, i) {
                    return T.current.useSyncExternalStore(e, t, i)
                }, t.useTransition = function() {
                    return T.current.useTransition()
                }, t.version = "18.3.1"
            },
            9144: function(e, t, i) {
                "use strict";
                e.exports = i(4326)
            },
            836: function(e, t, i) {
                "use strict";
                e.exports = i(7276)
            },
            5647: function(e) {
                var t = function(e) {
                    "use strict";
                    var t, i = Object.prototype,
                        n = i.hasOwnProperty,
                        r = Object.defineProperty || function(e, t, i) {
                            e[t] = i.value
                        },
                        a = "function" == typeof Symbol ? Symbol : {},
                        s = a.iterator || "@@iterator",
                        o = a.asyncIterator || "@@asyncIterator",
                        l = a.toStringTag || "@@toStringTag";

                    function c(e, t, i) {
                        return Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        c({}, "")
                    } catch (e) {
                        c = function(e, t, i) {
                            return e[t] = i
                        }
                    }

                    function d(e, i, n, a) {
                        var s, o, l, c, d = Object.create((i && i.prototype instanceof v ? i : v).prototype);
                        return r(d, "_invoke", {
                            value: (s = e, o = n, l = new C(a || []), c = h, function(e, i) {
                                if (c === p) throw Error("Generator is already running");
                                if (c === f) {
                                    if ("throw" === e) throw i;
                                    return E()
                                }
                                for (l.method = e, l.arg = i;;) {
                                    var n = l.delegate;
                                    if (n) {
                                        var r = function e(i, n) {
                                            var r = n.method,
                                                a = i.iterator[r];
                                            if (t === a) return n.delegate = null, "throw" === r && i.iterator.return && (n.method = "return", n.arg = t, e(i, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = TypeError("The iterator does not provide a '" + r + "' method")), _;
                                            var s = u(a, i.iterator, n.arg);
                                            if ("throw" === s.type) return n.method = "throw", n.arg = s.arg, n.delegate = null, _;
                                            var o = s.arg;
                                            return o ? o.done ? (n[i.resultName] = o.value, n.next = i.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, _) : o : (n.method = "throw", n.arg = TypeError("iterator result is not an object"), n.delegate = null, _)
                                        }(n, l);
                                        if (r) {
                                            if (r === _) continue;
                                            return r
                                        }
                                    }
                                    if ("next" === l.method) l.sent = l._sent = l.arg;
                                    else if ("throw" === l.method) {
                                        if (c === h) throw c = f, l.arg;
                                        l.dispatchException(l.arg)
                                    } else "return" === l.method && l.abrupt("return", l.arg);
                                    c = p;
                                    var a = u(s, o, l);
                                    if ("normal" === a.type) {
                                        if (c = l.done ? f : "suspendedYield", a.arg === _) continue;
                                        return {
                                            value: a.arg,
                                            done: l.done
                                        }
                                    }
                                    "throw" === a.type && (c = f, l.method = "throw", l.arg = a.arg)
                                }
                            })
                        }), d
                    }

                    function u(e, t, i) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, i)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    e.wrap = d;
                    var h = "suspendedStart",
                        p = "executing",
                        f = "completed",
                        _ = {};

                    function v() {}

                    function m() {}

                    function g() {}
                    var y = {};
                    c(y, s, function() {
                        return this
                    });
                    var w = Object.getPrototypeOf,
                        b = w && w(w(P([])));
                    b && b !== i && n.call(b, s) && (y = b);
                    var S = g.prototype = v.prototype = Object.create(y);

                    function k(e) {
                        ["next", "throw", "return"].forEach(function(t) {
                            c(e, t, function(e) {
                                return this._invoke(t, e)
                            })
                        })
                    }

                    function A(e, t) {
                        var i;
                        r(this, "_invoke", {
                            value: function(r, a) {
                                function s() {
                                    return new t(function(i, s) {
                                        ! function i(r, a, s, o) {
                                            var l = u(e[r], e, a);
                                            if ("throw" === l.type) o(l.arg);
                                            else {
                                                var c = l.arg,
                                                    d = c.value;
                                                return d && "object" == typeof d && n.call(d, "__await") ? t.resolve(d.__await).then(function(e) {
                                                    i("next", e, s, o)
                                                }, function(e) {
                                                    i("throw", e, s, o)
                                                }) : t.resolve(d).then(function(e) {
                                                    c.value = e, s(c)
                                                }, function(e) {
                                                    return i("throw", e, s, o)
                                                })
                                            }
                                        }(r, a, i, s)
                                    })
                                }
                                return i = i ? i.then(s, s) : s()
                            }
                        })
                    }

                    function U(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function O(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function C(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(U, this), this.reset(!0)
                    }

                    function P(e) {
                        if (e) {
                            var i = e[s];
                            if (i) return i.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var r = -1,
                                    a = function i() {
                                        for (; ++r < e.length;)
                                            if (n.call(e, r)) return i.value = e[r], i.done = !1, i;
                                        return i.value = t, i.done = !0, i
                                    };
                                return a.next = a
                            }
                        }
                        return {
                            next: E
                        }
                    }

                    function E() {
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    return m.prototype = g, r(S, "constructor", {
                        value: g,
                        configurable: !0
                    }), r(g, "constructor", {
                        value: m,
                        configurable: !0
                    }), m.displayName = c(g, l, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, c(e, l, "GeneratorFunction")), e.prototype = Object.create(S), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, k(A.prototype), c(A.prototype, o, function() {
                        return this
                    }), e.AsyncIterator = A, e.async = function(t, i, n, r, a) {
                        void 0 === a && (a = Promise);
                        var s = new A(d(t, i, n, r), a);
                        return e.isGeneratorFunction(i) ? s : s.next().then(function(e) {
                            return e.done ? e.value : s.next()
                        })
                    }, k(S), c(S, l, "Generator"), c(S, s, function() {
                        return this
                    }), c(S, "toString", function() {
                        return "[object Generator]"
                    }), e.keys = function(e) {
                        var t = Object(e),
                            i = [];
                        for (var n in t) i.push(n);
                        return i.reverse(),
                            function e() {
                                for (; i.length;) {
                                    var n = i.pop();
                                    if (n in t) return e.value = n, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, e.values = P, C.prototype = {
                        constructor: C,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(O), !e)
                                for (var i in this) "t" === i.charAt(0) && n.call(this, i) && !isNaN(+i.slice(1)) && (this[i] = t)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var i = this;

                            function r(n, r) {
                                return o.type = "throw", o.arg = e, i.next = n, r && (i.method = "next", i.arg = t), !!r
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var s = this.tryEntries[a],
                                    o = s.completion;
                                if ("root" === s.tryLoc) return r("end");
                                if (s.tryLoc <= this.prev) {
                                    var l = n.call(s, "catchLoc"),
                                        c = n.call(s, "finallyLoc");
                                    if (l && c) {
                                        if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                                        if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                    } else if (l) {
                                        if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
                                    } else if (c) {
                                        if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                    } else throw Error("try statement without catch or finally")
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var r = this.tryEntries[i];
                                if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                    var a = r;
                                    break
                                }
                            }
                            a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                            var s = a ? a.completion : {};
                            return (s.type = e, s.arg = t, a) ? (this.method = "next", this.next = a.finallyLoc, _) : this.complete(s)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var i = this.tryEntries[t];
                                if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), O(i), _
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var i = this.tryEntries[t];
                                if (i.tryLoc === e) {
                                    var n = i.completion;
                                    if ("throw" === n.type) {
                                        var r = n.arg;
                                        O(i)
                                    }
                                    return r
                                }
                            }
                            throw Error("illegal catch attempt")
                        },
                        delegateYield: function(e, i, n) {
                            return this.delegate = {
                                iterator: P(e),
                                resultName: i,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = t), _
                        }
                    }, e
                }(e.exports);
                try {
                    regeneratorRuntime = t
                } catch (e) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
                }
            },
            716: function(e, t, i) {
                "use strict";
                var n = i(9144),
                    r = "function" == typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                    },
                    a = n.useState,
                    s = n.useEffect,
                    o = n.useLayoutEffect,
                    l = n.useDebugValue;

                function c(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var i = t();
                        return !r(e, i)
                    } catch (e) {
                        return !0
                    }
                }
                var d = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                    return t()
                } : function(e, t) {
                    var i = t(),
                        n = a({
                            inst: {
                                value: i,
                                getSnapshot: t
                            }
                        }),
                        r = n[0].inst,
                        d = n[1];
                    return o(function() {
                        r.value = i, r.getSnapshot = t, c(r) && d({
                            inst: r
                        })
                    }, [e, i, t]), s(function() {
                        return c(r) && d({
                            inst: r
                        }), e(function() {
                            c(r) && d({
                                inst: r
                            })
                        })
                    }, [e]), l(i), i
                };
                t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : d
            },
            6753: function(e, t, i) {
                "use strict";
                e.exports = i(716)
            },
            9385: function(e, t, i) {
                "use strict";

                function n(e, t) {
                    if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
                }
                i.d(t, {
                    _: () => n
                })
            },
            1325: function(e, t, i) {
                "use strict";

                function n(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }
                i.d(t, {
                    _: () => n
                })
            },
            1820: function(e, t, i) {
                "use strict";

                function n(e, t, i) {
                    if (t.set) t.set.call(e, i);
                    else {
                        if (!t.writable) throw TypeError("attempted to set read only private field");
                        t.value = i
                    }
                }
                i.d(t, {
                    _: () => n
                })
            },
            2605: function(e, t, i) {
                "use strict";

                function n(e, t, i) {
                    if (!t.has(e)) throw TypeError("attempted to " + i + " private field on non-instance");
                    return t.get(e)
                }
                i.d(t, {
                    _: () => n
                })
            },
            8300: function(e, t, i) {
                "use strict";
                i.d(t, {
                    _: () => a
                });
                var n = i(1325),
                    r = i(2605);

                function a(e, t) {
                    var i = (0, r._)(e, t, "get");
                    return (0, n._)(e, i)
                }
            },
            2086: function(e, t, i) {
                "use strict";
                i.d(t, {
                    _: () => r
                });
                var n = i(9385);

                function r(e, t, i) {
                    (0, n._)(e, t), t.set(e, i)
                }
            },
            6210: function(e, t, i) {
                "use strict";

                function n(e, t, i) {
                    if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                    return i
                }
                i.d(t, {
                    _: () => n
                })
            },
            7518: function(e, t, i) {
                "use strict";
                i.d(t, {
                    _: () => r
                });
                var n = i(9385);

                function r(e, t) {
                    (0, n._)(e, t), t.add(e)
                }
            },
            623: function(e, t, i) {
                "use strict";

                function n(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }
                i.d(t, {
                    _: () => n
                })
            },
            4662: function(e, t, i) {
                "use strict";
                i.d(t, {
                    J: () => a
                });
                var n = Object.prototype.hasOwnProperty;

                function r(e, t, i) {
                    for (i of e.keys())
                        if (a(i, t)) return i
                }

                function a(e, t) {
                    var i, s, o;
                    if (e === t) return !0;
                    if (e && t && (i = e.constructor) === t.constructor) {
                        if (i === Date) return e.getTime() === t.getTime();
                        if (i === RegExp) return e.toString() === t.toString();
                        if (i === Array) {
                            if ((s = e.length) === t.length)
                                for (; s-- && a(e[s], t[s]););
                            return -1 === s
                        }
                        if (i === Set) {
                            if (e.size !== t.size) return !1;
                            for (s of e)
                                if ((o = s) && "object" == typeof o && !(o = r(t, o)) || !t.has(o)) return !1;
                            return !0
                        }
                        if (i === Map) {
                            if (e.size !== t.size) return !1;
                            for (s of e)
                                if ((o = s[0]) && "object" == typeof o && !(o = r(t, o)) || !a(s[1], t.get(o))) return !1;
                            return !0
                        }
                        if (i === ArrayBuffer) e = new Uint8Array(e), t = new Uint8Array(t);
                        else if (i === DataView) {
                            if ((s = e.byteLength) === t.byteLength)
                                for (; s-- && e.getInt8(s) === t.getInt8(s););
                            return -1 === s
                        }
                        if (ArrayBuffer.isView(e)) {
                            if ((s = e.byteLength) === t.byteLength)
                                for (; s-- && e[s] === t[s];);
                            return -1 === s
                        }
                        if (!i || "object" == typeof e) {
                            for (i in s = 0, e)
                                if (n.call(e, i) && ++s && !n.call(t, i) || !(i in t) || !a(e[i], t[i])) return !1;
                            return Object.keys(t).length === s
                        }
                    }
                    return e != e && t != t
                }
            },
            2708: function(e, t, i) {
                "use strict";
                i.d(t, {
                    TN: () => n.TN,
                    _f: () => n._f,
                    af: () => n.af
                });
                var n = i(8527);
                i(4310)
            },
            4310: function(e, t, i) {
                "use strict";
                i.d(t, {
                    Ko: () => p,
                    U9: () => _,
                    ac: () => h,
                    qx: () => f,
                    r2: () => l,
                    yA: () => d
                });
                var n = Object.defineProperty,
                    r = Object.getOwnPropertyDescriptor,
                    a = Object.getOwnPropertyNames,
                    s = Object.prototype.hasOwnProperty,
                    o = e => {
                        throw TypeError(e)
                    },
                    l = (e, t) => {
                        for (var i in t) n(e, i, {
                            get: t[i],
                            enumerable: !0
                        })
                    },
                    c = (e, t, i, o) => {
                        if (t && "object" == typeof t || "function" == typeof t)
                            for (let l of a(t)) s.call(e, l) || l === i || n(e, l, {
                                get: () => t[l],
                                enumerable: !(o = r(t, l)) || o.enumerable
                            });
                        return e
                    },
                    d = (e, t, i) => (c(e, t, "default"), i && c(i, t, "default")),
                    u = (e, t, i) => t.has(e) || o("Cannot " + i),
                    h = (e, t, i) => (u(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
                    p = (e, t, i) => t.has(e) ? o("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i),
                    f = (e, t, i, n) => (u(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i),
                    _ = (e, t, i) => (u(e, t, "access private method"), i)
            },
            8796: function(e, t, i) {
                "use strict";
                i.d(t, {
                    Z: () => n
                });
                var n = function() {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i]
                }
            },
            3959: function(e, t, i) {
                "use strict";
                i.d(t, {
                    rx: () => a,
                    uB: () => r,
                    vf: () => n
                });
                var n = () => !1,
                    r = () => !1,
                    a = () => {
                        try {
                            return !0
                        } catch {}
                        return !1
                    }
            },
            8691: function(e, t, i) {
                "use strict";
                i.d(t, {
                    W: () => r
                });
                var n = i(8796),
                    r = () => {
                        let e = n.Z,
                            t = n.Z;
                        return {
                            promise: new Promise((i, n) => {
                                e = i, t = n
                            }),
                            resolve: e,
                            reject: t
                        }
                    }
            },
            7306: function(e, t, i) {
                "use strict";
                i.d(t, {
                    X: () => o
                });
                var n = {
                        initialDelay: 125,
                        maxDelayBetweenRetries: 0,
                        factor: 2,
                        shouldRetry: (e, t) => t < 5,
                        retryImmediately: !0,
                        jitter: !0
                    },
                    r = async e => new Promise(t => setTimeout(t, e)),
                    a = (e, t) => t ? e * (1 + Math.random()) : e,
                    s = e => {
                        let t = 0,
                            i = () => {
                                let i = e.initialDelay * Math.pow(e.factor, t);
                                return i = a(i, e.jitter), Math.min(e.maxDelayBetweenRetries || i, i)
                            };
                        return async () => {
                            await r(i()), t++
                        }
                    },
                    o = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = 0,
                            {
                                shouldRetry: o,
                                initialDelay: l,
                                maxDelayBetweenRetries: c,
                                factor: d,
                                retryImmediately: u,
                                jitter: h
                            } = { ...n,
                                ...t
                            },
                            p = s({
                                initialDelay: l,
                                maxDelayBetweenRetries: c,
                                factor: d,
                                jitter: h
                            });
                        for (;;) try {
                            return await e()
                        } catch (e) {
                            if (!o(e, ++i)) throw e;
                            u && 1 === i ? await r(a(100, h)) : await p()
                        }
                    }
            },
            7125: function(e, t, i) {
                "use strict";
                i.d(t, {
                    P: () => d,
                    Q: () => h
                });
                var n = {
                        strict_mfa: {
                            afterMinutes: 10,
                            level: "multi_factor"
                        },
                        strict: {
                            afterMinutes: 10,
                            level: "second_factor"
                        },
                        moderate: {
                            afterMinutes: 60,
                            level: "second_factor"
                        },
                        lax: {
                            afterMinutes: 1440,
                            level: "second_factor"
                        }
                    },
                    r = new Set(["first_factor", "second_factor", "multi_factor"]),
                    a = new Set(["strict_mfa", "strict", "moderate", "lax"]),
                    s = e => "number" == typeof e && e > 0,
                    o = e => r.has(e),
                    l = e => a.has(e),
                    c = (e, t) => {
                        let {
                            orgId: i,
                            orgRole: n,
                            orgPermissions: r
                        } = t;
                        return (e.role || e.permission) && i && n && r ? e.permission ? r.includes(e.permission) : e.role ? n === e.role : null : null
                    },
                    d = e => {
                        if (!e) return !1;
                        let t = "string" == typeof e && l(e),
                            i = "object" == typeof e && o(e.level) && s(e.afterMinutes);
                        return (!!t || !!i) && (e => "string" == typeof e ? n[e] : e).bind(null, e)
                    },
                    u = (e, t) => {
                        let {
                            factorVerificationAge: i
                        } = t;
                        if (!e.reverification || !i) return null;
                        let n = d(e.reverification);
                        if (!n) return null;
                        let {
                            level: r,
                            afterMinutes: a
                        } = n(), [s, o] = i, l = -1 !== s ? a > s : null, c = -1 !== o ? a > o : null;
                        switch (r) {
                            case "first_factor":
                                return l;
                            case "second_factor":
                                return -1 !== o ? c : l;
                            case "multi_factor":
                                return -1 === o ? l : l && c
                        }
                    },
                    h = e => t => {
                        if (!e.userId) return !1;
                        let i = c(t, e),
                            n = u(t, e);
                        return [i, n].some(e => null === e) ? [i, n].some(e => !0 === e) : [i, n].every(e => !0 === e)
                    }
            },
            1004: function(e, t, i) {
                "use strict";
                i.d(t, {
                    kZ: () => d,
                    mA: () => u,
                    nQ: () => o,
                    P: () => h,
                    MY: () => c,
                    _d: () => p
                });
                var n = i(290),
                    r = e => "undefined" != typeof btoa && "function" == typeof btoa ? btoa(e) : "undefined" != typeof global && global.Buffer ? new global.Buffer(e).toString("base64") : e,
                    a = i(6182),
                    s = "pk_live_";

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!(e = e || "") || !l(e)) {
                        if (t.fatal && !e) throw Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");
                        if (t.fatal && !l(e)) throw Error("Publishable key not valid.");
                        return null
                    }
                    let i = e.startsWith(s) ? "production" : "development",
                        r = (0, n.S)(e.split("_")[2]);
                    return r = r.slice(0, -1), t.proxyUrl ? r = t.proxyUrl : "development" !== i && t.domain && (r = "clerk.".concat(t.domain)), {
                        instanceType: i,
                        frontendApi: r
                    }
                }

                function l() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    try {
                        let t = e.startsWith(s) || e.startsWith("pk_test_"),
                            i = (0, n.S)(e.split("_")[2] || "").endsWith("$");
                        return t && i
                    } catch {
                        return !1
                    }
                }

                function c() {
                    let e = new Map;
                    return {
                        isDevOrStagingUrl: t => {
                            if (!t) return !1;
                            let i = "string" == typeof t ? t : t.hostname,
                                n = e.get(i);
                            return void 0 === n && (n = a.vO.some(e => i.endsWith(e)), e.set(i, n)), n
                        }
                    }
                }

                function d(e) {
                    return e.startsWith("test_") || e.startsWith("pk_test_")
                }

                function u(e) {
                    return e.startsWith("live_") || e.startsWith("pk_live_")
                }
                async function h(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : globalThis.crypto.subtle,
                        i = new TextEncoder().encode(e);
                    return r(String.fromCharCode(...new Uint8Array(await t.digest("sha-1", i)))).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8)
                }
                var p = (e, t) => "".concat(e, "_").concat(t)
            },
            6182: function(e, t, i) {
                "use strict";
                i.d(t, {
                    JF: () => r,
                    WY: () => s,
                    mv: () => n,
                    vO: () => a
                });
                var n = [".lcl.dev", ".lclstage.dev", ".lclclerk.com"],
                    r = [".accounts.dev", ".accountsstage.dev", ".accounts.lclclerk.com"],
                    a = [".lcl.dev", ".stg.dev", ".lclstage.dev", ".stgstage.dev", ".dev.lclclerk.com", ".stg.lclclerk.com", ".accounts.lclclerk.com", "accountsstage.dev", "accounts.dev"];

                function s(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "svg";
                    return "https://img.clerk.com/static/".concat(e, ".").concat(t)
                }
            },
            8527: function(e, t, i) {
                "use strict";

                function n() {
                    return "undefined" != typeof window
                }
                i.d(t, {
                    Er: () => a,
                    TN: () => s,
                    _f: () => n,
                    af: () => o
                });
                var r = RegExp("bot|spider|crawl|APIs-Google|AdsBot|Googlebot|mediapartners|Google Favicon|FeedFetcher|Google-Read-Aloud|DuplexWeb-Google|googleweblight|bing|yandex|baidu|duckduck|yahoo|ecosia|ia_archiver|facebook|instagram|pinterest|reddit|slack|twitter|whatsapp|youtube|semrush", "i");

                function a() {
                    var e, t;
                    let i = n() ? null === (e = window) || void 0 === e ? void 0 : e.navigator : null;
                    return !!i && !((t = null == i ? void 0 : i.userAgent) && r.test(t)) && !(null == i ? void 0 : i.webdriver)
                }

                function s() {
                    var e, t, i;
                    let r = n() ? null === (e = window) || void 0 === e ? void 0 : e.navigator : null;
                    if (!r) return !1;
                    let a = null == r ? void 0 : r.onLine;
                    return (null == r ? void 0 : null === (t = r.connection) || void 0 === t ? void 0 : t.rtt) !== 0 && (null == r ? void 0 : null === (i = r.connection) || void 0 === i ? void 0 : i.downlink) !== 0 && a
                }

                function o() {
                    return s() && a()
                }
            },
            9411: function(e, t, i) {
                "use strict";

                function n(e) {
                    return ["captcha_invalid", "captcha_not_enabled", "captcha_missing_token"].includes(e.errors[0].code)
                }

                function r(e) {
                    let t = null == e ? void 0 : e.status;
                    return !!t && t >= 400 && t < 500
                }

                function a(e) {
                    return ("".concat(e.message).concat(e.name) || "").toLowerCase().replace(/\s+/g, "").includes("networkerror")
                }

                function s(e) {
                    return o(e) || c(e) || l(e)
                }

                function o(e) {
                    return "clerkError" in e
                }

                function l(e) {
                    return "clerkRuntimeError" in e
                }

                function c(e) {
                    return "code" in e && [4001, 32602, 32603].includes(e.code) && "message" in e
                }

                function d(e) {
                    var t, i;
                    return o(e) && (null === (i = e.errors) || void 0 === i ? void 0 : null === (t = i[0]) || void 0 === t ? void 0 : t.code) === "user_locked"
                }

                function u(e) {
                    var t, i;
                    return o(e) && (null === (i = e.errors) || void 0 === i ? void 0 : null === (t = i[0]) || void 0 === t ? void 0 : t.code) === "form_password_pwned"
                }

                function h() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.length > 0 ? e.map(p) : []
                }

                function p(e) {
                    var t, i, n, r, a;
                    return {
                        code: e.code,
                        message: e.message,
                        longMessage: e.long_message,
                        meta: {
                            paramName: null == e ? void 0 : null === (t = e.meta) || void 0 === t ? void 0 : t.param_name,
                            sessionId: null == e ? void 0 : null === (i = e.meta) || void 0 === i ? void 0 : i.session_id,
                            emailAddresses: null == e ? void 0 : null === (n = e.meta) || void 0 === n ? void 0 : n.email_addresses,
                            identifiers: null == e ? void 0 : null === (r = e.meta) || void 0 === r ? void 0 : r.identifiers,
                            zxcvbn: null == e ? void 0 : null === (a = e.meta) || void 0 === a ? void 0 : a.zxcvbn
                        }
                    }
                }

                function f(e) {
                    var t, i, n, r, a;
                    return {
                        code: (null == e ? void 0 : e.code) || "",
                        message: (null == e ? void 0 : e.message) || "",
                        long_message: null == e ? void 0 : e.longMessage,
                        meta: {
                            param_name: null == e ? void 0 : null === (t = e.meta) || void 0 === t ? void 0 : t.paramName,
                            session_id: null == e ? void 0 : null === (i = e.meta) || void 0 === i ? void 0 : i.sessionId,
                            email_addresses: null == e ? void 0 : null === (n = e.meta) || void 0 === n ? void 0 : n.emailAddresses,
                            identifiers: null == e ? void 0 : null === (r = e.meta) || void 0 === r ? void 0 : r.identifiers,
                            zxcvbn: null == e ? void 0 : null === (a = e.meta) || void 0 === a ? void 0 : a.zxcvbn
                        }
                    }
                }
                i.d(t, {
                    G1: () => g,
                    LT: () => f,
                    N: () => m,
                    RK: () => S,
                    UZ: () => u,
                    ZC: () => c,
                    ay: () => d,
                    eE: () => a,
                    gO: () => _,
                    iR: () => h,
                    ix: () => r,
                    kD: () => o,
                    nU: () => p,
                    pG: () => n,
                    sZ: () => s,
                    t5: () => b,
                    u$: () => y,
                    uX: () => l,
                    w$: () => v
                });
                var _ = class e extends Error {
                        constructor(t, {
                            data: i,
                            status: n,
                            clerkTraceId: r
                        }) {
                            super(t), this.toString = () => {
                                let e = "[".concat(this.name, "]\nMessage:").concat(this.message, "\nStatus:").concat(this.status, "\nSerialized errors: ").concat(this.errors.map(e => JSON.stringify(e)));
                                return this.clerkTraceId && (e += "\nClerk Trace ID: ".concat(this.clerkTraceId)), e
                            }, Object.setPrototypeOf(this, e.prototype), this.status = n, this.message = t, this.clerkTraceId = r, this.clerkError = !0, this.errors = h(i)
                        }
                    },
                    v = class e extends Error {
                        constructor(t, {
                            code: i
                        }) {
                            let n = "\uD83D\uDD12 Clerk:",
                                r = RegExp(n.replace(" ", "\\s*"), "i"),
                                a = t.replace(r, ""),
                                s = "".concat(n, " ").concat(a.trim(), '\n\n(code="').concat(i, '")\n');
                            super(s), this.toString = () => "[".concat(this.name, "]\nMessage:").concat(this.message), Object.setPrototypeOf(this, e.prototype), this.code = i, this.message = s, this.clerkRuntimeError = !0, this.name = "ClerkRuntimeError"
                        }
                    },
                    m = class e extends Error {
                        constructor(t) {
                            super(t), this.code = t, this.name = "EmailLinkError", Object.setPrototypeOf(this, e.prototype)
                        }
                    };

                function g(e) {
                    return "EmailLinkError" === e.name
                }
                var y = {
                        Expired: "expired",
                        Failed: "failed",
                        ClientMismatch: "client_mismatch"
                    },
                    w = Object.freeze({
                        InvalidProxyUrlErrorMessage: "The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",
                        InvalidPublishableKeyErrorMessage: "The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",
                        MissingPublishableKeyErrorMessage: "Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
                        MissingSecretKeyErrorMessage: "Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
                        MissingClerkProvider: "{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"
                    });

                function b(e) {
                    let {
                        packageName: t,
                        customMessages: i
                    } = e, n = t, r = { ...w,
                        ...i
                    };

                    function a(e, t) {
                        if (!t) return "".concat(n, ": ").concat(e);
                        let i = e;
                        for (let n of e.matchAll(/{{([a-zA-Z0-9-_]+)}}/g)) {
                            let e = (t[n[1]] || "").toString();
                            i = i.replace("{{".concat(n[1], "}}"), e)
                        }
                        return "".concat(n, ": ").concat(i)
                    }
                    return {
                        setPackageName(e) {
                            let {
                                packageName: t
                            } = e;
                            return "string" == typeof t && (n = t), this
                        },
                        setMessages(e) {
                            let {
                                customMessages: t
                            } = e;
                            return Object.assign(r, t || {}), this
                        },
                        throwInvalidPublishableKeyError(e) {
                            throw Error(a(r.InvalidPublishableKeyErrorMessage, e))
                        },
                        throwInvalidProxyUrl(e) {
                            throw Error(a(r.InvalidProxyUrlErrorMessage, e))
                        },
                        throwMissingPublishableKeyError() {
                            throw Error(a(r.MissingPublishableKeyErrorMessage))
                        },
                        throwMissingSecretKeyError() {
                            throw Error(a(r.MissingSecretKeyErrorMessage))
                        },
                        throwMissingClerkProviderError(e) {
                            throw Error(a(r.MissingClerkProvider, e))
                        },
                        throw (e) {
                            throw Error(a(e))
                        }
                    }
                }
                var S = class extends v {
                    constructor(e, {
                        code: t
                    }) {
                        super(e, {
                            code: t
                        }), this.code = t
                    }
                }
            },
            1790: function(e, t, i) {
                "use strict";

                function n(e) {
                    let t = e || "";
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }

                function r(e) {
                    return e ? e.replace(/([-_][a-z])/g, e => e.toUpperCase().replace(/-|_/, "")) : ""
                }

                function a(e) {
                    return e ? e.replace(/[A-Z]/g, e => "_".concat(e.toLowerCase())) : ""
                }
                i.d(t, {
                    MI: () => n,
                    TD: () => r,
                    a1: () => a,
                    aw: () => l,
                    fQ: () => c,
                    hF: () => d,
                    zb: () => o
                });
                var s = e => {
                        let t = i => {
                            if (!i) return i;
                            if (Array.isArray(i)) return i.map(e => "object" == typeof e || Array.isArray(e) ? t(e) : e);
                            let n = { ...i
                            };
                            for (let i of Object.keys(n)) {
                                let r = e(i.toString());
                                r !== i && (n[r] = n[i], delete n[i]), "object" == typeof n[r] && (n[r] = t(n[r]))
                            }
                            return n
                        };
                        return t
                    },
                    o = s(a),
                    l = s(r);

                function c(e) {
                    if ("boolean" == typeof e) return e;
                    if (null == e) return !1;
                    if ("string" == typeof e) {
                        if ("true" === e.toLowerCase()) return !0;
                        if ("false" === e.toLowerCase()) return !1
                    }
                    let t = parseInt(e, 10);
                    return !isNaN(t) && t > 0
                }

                function d(e) {
                    return Object.entries(e).reduce((e, t) => {
                        let [i, n] = t;
                        return void 0 !== n && (e[i] = n), e
                    }, {})
                }
            },
            290: function(e, t, i) {
                "use strict";
                i.d(t, {
                    S: () => n
                });
                var n = e => "undefined" != typeof atob && "function" == typeof atob ? atob(e) : "undefined" != typeof global && global.Buffer ? new global.Buffer(e, "base64").toString() : e
            },
            9695: function(e, t, i) {
                "use strict";
                i.d(t, {
                    Q: () => o
                });
                var n = i(8796),
                    r = 'const respond=r=>{self.postMessage(r)},workerToTabIds={};self.addEventListener("message",r=>{const e=r.data;switch(e.type){case"setTimeout":workerToTabIds[e.id]=setTimeout(()=>{respond({id:e.id}),delete workerToTabIds[e.id]},e.ms);break;case"clearTimeout":workerToTabIds[e.id]&&(clearTimeout(workerToTabIds[e.id]),delete workerToTabIds[e.id]);break;case"setInterval":workerToTabIds[e.id]=setInterval(()=>{respond({id:e.id})},e.ms);break;case"clearInterval":workerToTabIds[e.id]&&(clearInterval(workerToTabIds[e.id]),delete workerToTabIds[e.id]);break}});\n',
                    a = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if ("undefined" == typeof Worker) return null;
                        try {
                            let i = new Blob([e], {
                                    type: "application/javascript; charset=utf-8"
                                }),
                                n = globalThis.URL.createObjectURL(i);
                            return new Worker(n, t)
                        } catch {
                            return console.warn("Clerk: Cannot create worker from blob. Consider adding worker-src blob:; to your CSP"), null
                        }
                    },
                    s = () => {
                        let e = globalThis.setTimeout.bind(globalThis),
                            t = globalThis.setInterval.bind(globalThis);
                        return {
                            setTimeout: e,
                            setInterval: t,
                            clearTimeout: globalThis.clearTimeout.bind(globalThis),
                            clearInterval: globalThis.clearInterval.bind(globalThis),
                            cleanup: n.Z
                        }
                    },
                    o = () => {
                        let e = 0,
                            t = () => e++,
                            i = new Map,
                            n = (e, t) => null == e ? void 0 : e.postMessage(t),
                            o = e => {
                                var t;
                                null === (t = i.get(e.data.id)) || void 0 === t || t()
                            },
                            l = a(r, {
                                name: "clerk-timers"
                            });
                        if (null == l || l.addEventListener("message", o), !l) return s();
                        let c = () => {
                            l || null == (l = a(r, {
                                name: "clerk-timers"
                            })) || l.addEventListener("message", o)
                        };
                        return {
                            setTimeout: (e, r) => {
                                c();
                                let a = t();
                                return i.set(a, () => {
                                    e(), i.delete(a)
                                }), n(l, {
                                    type: "setTimeout",
                                    id: a,
                                    ms: r
                                }), a
                            },
                            setInterval: (e, r) => {
                                c();
                                let a = t();
                                return i.set(a, e), n(l, {
                                    type: "setInterval",
                                    id: a,
                                    ms: r
                                }), a
                            },
                            clearTimeout: e => {
                                c(), i.delete(e), n(l, {
                                    type: "clearTimeout",
                                    id: e
                                })
                            },
                            clearInterval: e => {
                                c(), i.delete(e), n(l, {
                                    type: "clearInterval",
                                    id: e
                                })
                            },
                            cleanup: () => {
                                l && (l.terminate(), l = null, i.clear())
                            }
                        }
                    }
            },
            8387: function(e, t, i) {
                "use strict";

                function n(e) {
                    try {
                        return new Date(e || new Date)
                    } catch {
                        return new Date
                    }
                }

                function r(e) {
                    let {
                        date: t,
                        relativeTo: i
                    } = e;
                    if (!t || !i) return null;
                    let r = n(t),
                        a = function(e, t) {
                            let {
                                absolute: i = !0
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            if (!e || !t) return 0;
                            let n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
                                r = Math.floor((Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()) - n) / 864e5);
                            return i ? Math.abs(r) : r
                        }(n(i), r, {
                            absolute: !1
                        });
                    return a < -6 ? {
                        relativeDateCase: "other",
                        date: r
                    } : a < -1 ? {
                        relativeDateCase: "previous6Days",
                        date: r
                    } : -1 === a ? {
                        relativeDateCase: "lastDay",
                        date: r
                    } : 0 === a ? {
                        relativeDateCase: "sameDay",
                        date: r
                    } : 1 === a ? {
                        relativeDateCase: "nextDay",
                        date: r
                    } : a < 7 ? {
                        relativeDateCase: "next6Days",
                        date: r
                    } : {
                        relativeDateCase: "other",
                        date: r
                    }
                }

                function a(e, t) {
                    let i = n(e);
                    return i.setFullYear(i.getFullYear() + t), i
                }
                i.d(t, {
                    lY: () => r,
                    P9: () => n,
                    Bc: () => a
                }), i(4310)
            },
            1188: function(e, t, i) {
                "use strict";
                i.d(t, {
                    x6: () => s,
                    x9: () => a
                });
                var n = i(3959),
                    r = new Set,
                    a = (e, t, i) => {
                        let a = (0, n.uB)() || (0, n.rx)(),
                            s = null != i ? i : e;
                        !r.has(s) && !a && (r.add(s), console.warn('Clerk - DEPRECATION WARNING: "'.concat(e, '" is deprecated and will be removed in the next major release.\n').concat(t)))
                    },
                    s = (e, t, i, n) => {
                        let r = e[t];
                        Object.defineProperty(e, t, {
                            get: () => (a(t, i, n), r),
                            set(e) {
                                r = e
                            }
                        })
                    };
                i(4310)
            },
            3531: function(e, t, i) {
                "use strict";
                i.d(t, {
                    G1: () => n.G1,
                    LT: () => n.LT,
                    N: () => n.N,
                    RK: () => n.RK,
                    UZ: () => n.UZ,
                    ZC: () => n.ZC,
                    ay: () => n.ay,
                    eE: () => n.eE,
                    gO: () => n.gO,
                    iR: () => n.iR,
                    ix: () => n.ix,
                    kD: () => n.kD,
                    nU: () => n.nU,
                    pG: () => n.pG,
                    sZ: () => n.sZ,
                    t5: () => n.t5,
                    u$: () => n.u$,
                    uX: () => n.uX,
                    w$: () => n.w$
                });
                var n = i(9411);
                i(4310)
            },
            1402: function(e, t, i) {
                "use strict";
                i.d(t, {
                    MY: () => n.MY,
                    P: () => n.P,
                    _d: () => n._d,
                    kZ: () => n.kZ,
                    mA: () => n.mA,
                    nQ: () => n.nQ
                });
                var n = i(1004);
                i(4310)
            },
            5774: function(e, t, i) {
                "use strict";
                i.d(t, {
                    v: () => r
                });
                var n = i(7306);
                async function r() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        {
                            async: i,
                            defer: r,
                            beforeLoad: a,
                            crossOrigin: s,
                            nonce: o
                        } = t || {};
                    return (0, n.X)(() => new Promise((t, n) => {
                        e || n(Error("loadScript cannot be called without a src")), document && document.body || n("loadScript cannot be called when document does not exist");
                        let l = document.createElement("script");
                        s && l.setAttribute("crossorigin", s), l.async = i || !1, l.defer = r || !1, l.addEventListener("load", () => {
                            l.remove(), t(l)
                        }), l.addEventListener("error", () => {
                            l.remove(), n()
                        }), l.src = e, l.nonce = o, null == a || a(l), document.body.appendChild(l)
                    }), {
                        shouldRetry: (e, t) => t <= 5
                    })
                }
                i(4310)
            },
            2358: function(e, t, i) {
                "use strict";
                i.d(t, {
                    k: () => r
                });
                var n = new Set,
                    r = {
                        warnOnce: e => {
                            !n.has(e) && (n.add(e), console.warn(e))
                        },
                        logOnce: e => {
                            !n.has(e) && (console.log(e), n.add(e))
                        }
                    };
                i(4310)
            },
            4914: function(e, t, i) {
                "use strict";
                let n;
                i.d(t, {
                    RY: () => eI,
                    b5: () => eO,
                    aF: () => eZ,
                    LB: () => ek,
                    B3: () => ex,
                    o8: () => eK,
                    WZ: () => eQ,
                    Tt: () => eR,
                    f0: () => eN,
                    uH: () => eA,
                    eW: () => eJ,
                    cL: () => eG,
                    kP: () => eq,
                    SE: () => eE,
                    Gw: () => eB,
                    I7: () => eY,
                    St: () => eP,
                    sX: () => eT
                });
                var r = {};

                function a(e, t) {
                    return {
                        event: "METHOD_CALLED",
                        payload: {
                            method: e,
                            ...t
                        }
                    }
                }
                i.r(r), i.d(r, {
                    SWRConfig: () => ef,
                    default: () => e_,
                    mutate: () => Y,
                    preload: () => eo,
                    unstable_serialize: () => eu,
                    useSWRConfig: () => es
                });
                var s = i(8691),
                    o = i(9411),
                    l = "reverification-error",
                    c = e => ({
                        clerk_error: {
                            type: "forbidden",
                            reason: l,
                            metadata: {
                                reverification: e
                            }
                        }
                    }),
                    d = e => {
                        var t, i;
                        return e && "object" == typeof e && "clerk_error" in e && (null === (t = e.clerk_error) || void 0 === t ? void 0 : t.type) === "forbidden" && (null === (i = e.clerk_error) || void 0 === i ? void 0 : i.reason) === l
                    },
                    u = i(7125),
                    h = i(4310),
                    p = i(9144),
                    f = i(6753);
                let _ = () => {},
                    v = _(),
                    m = Object,
                    g = e => e === v,
                    y = e => "function" == typeof e,
                    w = (e, t) => ({ ...e,
                        ...t
                    }),
                    b = e => y(e.then),
                    S = new WeakMap,
                    k = 0,
                    A = e => {
                        let t, i;
                        let n = typeof e,
                            r = e && e.constructor,
                            a = r == Date;
                        if (m(e) !== e || a || r == RegExp) t = a ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
                        else {
                            if (t = S.get(e)) return t;
                            if (t = ++k + "~", S.set(e, t), r == Array) {
                                for (i = 0, t = "@"; i < e.length; i++) t += A(e[i]) + ",";
                                S.set(e, t)
                            }
                            if (r == m) {
                                t = "#";
                                let n = m.keys(e).sort();
                                for (; !g(i = n.pop());) g(e[i]) || (t += i + ":" + A(e[i]) + ",");
                                S.set(e, t)
                            }
                        }
                        return t
                    },
                    U = new WeakMap,
                    O = {},
                    C = {},
                    P = "undefined",
                    E = typeof window != P,
                    I = typeof document != P,
                    T = () => E && typeof window.requestAnimationFrame != P,
                    x = (e, t) => {
                        let i = U.get(e);
                        return [() => !g(t) && e.get(t) || O, n => {
                            if (!g(t)) {
                                let r = e.get(t);
                                t in C || (C[t] = r), i[5](t, w(r, n), r || O)
                            }
                        }, i[6], () => !g(t) && t in C ? C[t] : !g(t) && e.get(t) || O]
                    },
                    R = !0,
                    [M, z] = E && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [_, _],
                    N = {
                        initFocus: e => (I && document.addEventListener("visibilitychange", e), M("focus", e), () => {
                            I && document.removeEventListener("visibilitychange", e), z("focus", e)
                        }),
                        initReconnect: e => {
                            let t = () => {
                                    R = !0, e()
                                },
                                i = () => {
                                    R = !1
                                };
                            return M("online", t), M("offline", i), () => {
                                z("online", t), z("offline", i)
                            }
                        }
                    },
                    W = !p.useId,
                    L = !E || "Deno" in window,
                    F = e => T() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
                    D = L ? p.useEffect : p.useLayoutEffect,
                    j = "undefined" != typeof navigator && navigator.connection,
                    V = !L && j && (["slow-2g", "2g"].includes(j.effectiveType) || j.saveData),
                    K = e => {
                        if (y(e)) try {
                            e = e()
                        } catch (t) {
                            e = ""
                        }
                        let t = e;
                        return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? A(e) : "", t]
                    },
                    $ = 0,
                    J = () => ++$;
                var B = {
                    ERROR_REVALIDATE_EVENT: 3,
                    FOCUS_EVENT: 0,
                    MUTATE_EVENT: 2,
                    RECONNECT_EVENT: 1
                };
                async function q() {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    let [n, r, a, s] = t, o = w({
                        populateCache: !0,
                        throwOnError: !0
                    }, "boolean" == typeof s ? {
                        revalidate: s
                    } : s || {}), l = o.populateCache, c = o.rollbackOnError, d = o.optimisticData, u = e => "function" == typeof c ? c(e) : !1 !== c, h = o.throwOnError;
                    if (y(r)) {
                        let e = [];
                        for (let t of n.keys()) !/^\$(inf|sub)\$/.test(t) && r(n.get(t)._k) && e.push(t);
                        return Promise.all(e.map(p))
                    }
                    return p(r);
                    async function p(e) {
                        let i;
                        let [r] = K(e);
                        if (!r) return;
                        let [s, c] = x(n, r), [p, f, _, m] = U.get(n), w = () => {
                            let t = p[r];
                            return (y(o.revalidate) ? o.revalidate(s().data, e) : !1 !== o.revalidate) && (delete _[r], delete m[r], t && t[0]) ? t[0](2).then(() => s().data) : s().data
                        };
                        if (t.length < 3) return w();
                        let S = a,
                            k = J();
                        f[r] = [k, 0];
                        let A = !g(d),
                            O = s(),
                            C = O.data,
                            P = O._c,
                            E = g(P) ? C : P;
                        if (A && c({
                                data: d = y(d) ? d(E, C) : d,
                                _c: E
                            }), y(S)) try {
                            S = S(E)
                        } catch (e) {
                            i = e
                        }
                        if (S && b(S)) {
                            if (S = await S.catch(e => {
                                    i = e
                                }), k !== f[r][0]) {
                                if (i) throw i;
                                return S
                            }
                            i && A && u(i) && (l = !0, c({
                                data: E,
                                _c: v
                            }))
                        }
                        if (l && !i && (y(l) ? c({
                                data: l(S, E),
                                error: v,
                                _c: v
                            }) : c({
                                data: S,
                                error: v,
                                _c: v
                            })), f[r][1] = J(), Promise.resolve(w()).then(() => {
                                c({
                                    _c: v
                                })
                            }), i) {
                            if (h) throw i;
                            return
                        }
                        return S
                    }
                }
                let Z = (e, t) => {
                        for (let i in e) e[i][0] && e[i][0](t)
                    },
                    G = (e, t) => {
                        if (!U.has(e)) {
                            let i = w(N, t),
                                n = {},
                                r = q.bind(v, e),
                                a = _,
                                s = {},
                                o = (e, t) => {
                                    let i = s[e] || [];
                                    return s[e] = i, i.push(t), () => i.splice(i.indexOf(t), 1)
                                },
                                l = (t, i, n) => {
                                    e.set(t, i);
                                    let r = s[t];
                                    if (r)
                                        for (let e of r) e(i, n)
                                },
                                c = () => {
                                    if (!U.has(e) && (U.set(e, [n, {}, {}, {}, r, l, o]), !L)) {
                                        let t = i.initFocus(setTimeout.bind(v, Z.bind(v, n, 0))),
                                            r = i.initReconnect(setTimeout.bind(v, Z.bind(v, n, 1)));
                                        a = () => {
                                            t && t(), r && r(), U.delete(e)
                                        }
                                    }
                                };
                            return c(), [e, r, c, a]
                        }
                        return [e, U.get(e)[4]]
                    },
                    [H, Y] = G(new Map),
                    X = w({
                        onLoadingSlow: _,
                        onSuccess: _,
                        onError: _,
                        onErrorRetry: (e, t, i, n, r) => {
                            let a = i.errorRetryCount,
                                s = r.retryCount,
                                o = ~~((Math.random() + .5) * (1 << (s < 8 ? s : 8))) * i.errorRetryInterval;
                            (g(a) || !(s > a)) && setTimeout(n, o, r)
                        },
                        onDiscarded: _,
                        revalidateOnFocus: !0,
                        revalidateOnReconnect: !0,
                        revalidateIfStale: !0,
                        shouldRetryOnError: !0,
                        errorRetryInterval: V ? 1e4 : 5e3,
                        focusThrottleInterval: 5e3,
                        dedupingInterval: 2e3,
                        loadingTimeout: V ? 5e3 : 3e3,
                        compare: (e, t) => A(e) == A(t),
                        isPaused: () => !1,
                        cache: H,
                        mutate: Y,
                        fallback: {}
                    }, {
                        isOnline: () => R,
                        isVisible: () => {
                            let e = I && document.visibilityState;
                            return g(e) || "hidden" !== e
                        }
                    }),
                    Q = (e, t) => {
                        let i = w(e, t);
                        if (t) {
                            let {
                                use: n,
                                fallback: r
                            } = e, {
                                use: a,
                                fallback: s
                            } = t;
                            n && a && (i.use = n.concat(a)), r && s && (i.fallback = w(r, s))
                        }
                        return i
                    },
                    ee = (0, p.createContext)({}),
                    et = e => {
                        let {
                            value: t
                        } = e, i = (0, p.useContext)(ee), n = y(t), r = (0, p.useMemo)(() => n ? t(i) : t, [n, i, t]), a = (0, p.useMemo)(() => n ? r : Q(i, r), [n, i, r]), s = r && r.provider, o = (0, p.useRef)(v);
                        s && !o.current && (o.current = G(s(a.cache || H), r));
                        let l = o.current;
                        return l && (a.cache = l[0], a.mutate = l[1]), D(() => {
                            if (l) return l[2] && l[2](), l[3]
                        }, []), (0, p.createElement)(ee.Provider, w(e, {
                            value: a
                        }))
                    },
                    ei = "$inf$",
                    en = E && window.__SWR_DEVTOOLS_USE__,
                    er = en ? window.__SWR_DEVTOOLS_USE__ : [],
                    ea = e => y(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                    es = () => w(X, (0, p.useContext)(ee)),
                    eo = (e, t) => {
                        let [i, n] = K(e), [, , , r] = U.get(H);
                        if (r[i]) return r[i];
                        let a = t(n);
                        return r[i] = a, a
                    },
                    el = er.concat(e => (t, i, n) => {
                        let r = i && function() {
                            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            let [a] = K(t), [, , , s] = U.get(H);
                            if (a.startsWith(ei)) return i(...n);
                            let o = s[a];
                            return g(o) ? i(...n) : (delete s[a], o)
                        };
                        return e(t, r, n)
                    }),
                    ec = e => function() {
                        for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                        let r = es(),
                            [a, s, o] = ea(i),
                            l = Q(r, o),
                            c = e,
                            {
                                use: d
                            } = l,
                            u = (d || []).concat(el);
                        for (let e = u.length; e--;) c = u[e](c);
                        return c(a, s || l.fetcher || null, l)
                    },
                    ed = (e, t, i) => {
                        let n = t[e] || (t[e] = []);
                        return n.push(i), () => {
                            let e = n.indexOf(i);
                            e >= 0 && (n[e] = n[n.length - 1], n.pop())
                        }
                    };
                en && (window.__SWR_DEVTOOLS_REACT__ = p);
                let eu = e => K(e)[0],
                    eh = p.use || (e => {
                        if ("pending" === e.status) throw e;
                        if ("fulfilled" === e.status) return e.value;
                        if ("rejected" === e.status) throw e.reason;
                        throw e.status = "pending", e.then(t => {
                            e.status = "fulfilled", e.value = t
                        }, t => {
                            e.status = "rejected", e.reason = t
                        }), e
                    }),
                    ep = {
                        dedupe: !0
                    },
                    ef = m.defineProperty(et, "defaultValue", {
                        value: X
                    }),
                    e_ = ec((e, t, i) => {
                        let {
                            cache: n,
                            compare: r,
                            suspense: a,
                            fallbackData: s,
                            revalidateOnMount: o,
                            revalidateIfStale: l,
                            refreshInterval: c,
                            refreshWhenHidden: d,
                            refreshWhenOffline: u,
                            keepPreviousData: h
                        } = i, [_, m, b, S] = U.get(n), [k, A] = K(e), O = (0, p.useRef)(!1), C = (0, p.useRef)(!1), P = (0, p.useRef)(k), E = (0, p.useRef)(t), I = (0, p.useRef)(i), T = () => I.current, R = () => T().isVisible() && T().isOnline(), [M, z, N, j] = x(n, k), V = (0, p.useRef)({}).current, $ = g(s) ? i.fallback[k] : s, Z = (e, t) => {
                            for (let i in V)
                                if ("data" === i) {
                                    if (!r(e[i], t[i]) && (!g(e[i]) || !r(en, t[i]))) return !1
                                } else if (t[i] !== e[i]) return !1;
                            return !0
                        }, G = (0, p.useMemo)(() => {
                            let e = !!k && !!t && (g(o) ? !T().isPaused() && !a && (!!g(l) || l) : o),
                                i = t => {
                                    let i = w(t);
                                    return (delete i._k, e) ? {
                                        isValidating: !0,
                                        isLoading: !0,
                                        ...i
                                    } : i
                                },
                                n = M(),
                                r = j(),
                                s = i(n),
                                c = n === r ? s : i(r),
                                d = s;
                            return [() => {
                                let e = i(M());
                                return Z(e, d) ? (d.data = e.data, d.isLoading = e.isLoading, d.isValidating = e.isValidating, d.error = e.error, d) : (d = e, e)
                            }, () => c]
                        }, [n, k]), H = (0, f.useSyncExternalStore)((0, p.useCallback)(e => N(k, (t, i) => {
                            Z(i, t) || e()
                        }), [n, k]), G[0], G[1]), Y = !O.current, X = _[k] && _[k].length > 0, Q = H.data, ee = g(Q) ? $ : Q, et = H.error, ei = (0, p.useRef)(ee), en = h ? g(Q) ? ei.current : Q : ee, er = (!X || !!g(et)) && (Y && !g(o) ? o : !T().isPaused() && (a ? !g(ee) && l : g(ee) || l)), ea = !!(k && t && Y && er), es = g(H.isValidating) ? ea : H.isValidating, eo = g(H.isLoading) ? ea : H.isLoading, el = (0, p.useCallback)(async e => {
                            let t, n;
                            let a = E.current;
                            if (!k || !a || C.current || T().isPaused()) return !1;
                            let s = !0,
                                o = e || {},
                                l = !b[k] || !o.dedupe,
                                c = () => W ? !C.current && k === P.current && O.current : k === P.current,
                                d = {
                                    isValidating: !1,
                                    isLoading: !1
                                },
                                u = () => {
                                    z(d)
                                },
                                h = () => {
                                    let e = b[k];
                                    e && e[1] === n && delete b[k]
                                },
                                p = {
                                    isValidating: !0
                                };
                            g(M().data) && (p.isLoading = !0);
                            try {
                                if (l && (z(p), i.loadingTimeout && g(M().data) && setTimeout(() => {
                                        s && c() && T().onLoadingSlow(k, i)
                                    }, i.loadingTimeout), b[k] = [a(A), J()]), [t, n] = b[k], t = await t, l && setTimeout(h, i.dedupingInterval), !b[k] || b[k][1] !== n) return l && c() && T().onDiscarded(k), !1;
                                d.error = v;
                                let e = m[k];
                                if (!g(e) && (n <= e[0] || n <= e[1] || 0 === e[1])) return u(), l && c() && T().onDiscarded(k), !1;
                                let o = M().data;
                                d.data = r(o, t) ? o : t, l && c() && T().onSuccess(t, k, i)
                            } catch (i) {
                                h();
                                let e = T(),
                                    {
                                        shouldRetryOnError: t
                                    } = e;
                                !e.isPaused() && (d.error = i, l && c() && (e.onError(i, k, e), (!0 === t || y(t) && t(i)) && (!T().revalidateOnFocus || !T().revalidateOnReconnect || R()) && e.onErrorRetry(i, k, e, e => {
                                    let t = _[k];
                                    t && t[0] && t[0](B.ERROR_REVALIDATE_EVENT, e)
                                }, {
                                    retryCount: (o.retryCount || 0) + 1,
                                    dedupe: !0
                                })))
                            }
                            return s = !1, u(), !0
                        }, [k, n]), ec = (0, p.useCallback)(function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            return q(n, P.current, ...t)
                        }, []);
                        if (D(() => {
                                E.current = t, I.current = i, g(Q) || (ei.current = Q)
                            }), D(() => {
                                if (!k) return;
                                let e = el.bind(v, ep),
                                    t = 0,
                                    i = ed(k, _, function(i) {
                                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        if (i == B.FOCUS_EVENT) {
                                            let i = Date.now();
                                            T().revalidateOnFocus && i > t && R() && (t = i + T().focusThrottleInterval, e())
                                        } else if (i == B.RECONNECT_EVENT) T().revalidateOnReconnect && R() && e();
                                        else if (i == B.MUTATE_EVENT) return el();
                                        else if (i == B.ERROR_REVALIDATE_EVENT) return el(n)
                                    });
                                return C.current = !1, P.current = k, O.current = !0, z({
                                    _k: A
                                }), er && (g(ee) || L ? e() : F(e)), () => {
                                    C.current = !0, i()
                                }
                            }, [k]), D(() => {
                                let e;

                                function t() {
                                    let t = y(c) ? c(M().data) : c;
                                    t && -1 !== e && (e = setTimeout(i, t))
                                }

                                function i() {
                                    !M().error && (d || T().isVisible()) && (u || T().isOnline()) ? el(ep).then(t) : t()
                                }
                                return t(), () => {
                                    e && (clearTimeout(e), e = -1)
                                }
                            }, [c, d, u, k]), (0, p.useDebugValue)(en), a && g(ee) && k) {
                            if (!W && L) throw Error("Fallback data is required when using suspense in SSR.");
                            E.current = t, I.current = i, C.current = !1;
                            let e = S[k];
                            if (g(e) || eh(ec(e)), g(et)) {
                                let e = el(ep);
                                g(en) || (e.status = "fulfilled", e.value = !0), eh(e)
                            } else throw et
                        }
                        return {
                            mutate: ec,
                            get data() {
                                return V.data = !0, en
                            },
                            get error() {
                                return V.error = !0, et
                            },
                            get isValidating() {
                                return V.isValidating = !0, es
                            },
                            get isLoading() {
                                return V.isLoading = !0, eo
                            }
                        }
                    }),
                    ev = p.use || (e => {
                        if ("pending" === e.status) throw e;
                        if ("fulfilled" === e.status) return e.value;
                        if ("rejected" === e.status) throw e.reason;
                        throw e.status = "pending", e.then(t => {
                            e.status = "fulfilled", e.value = t
                        }, t => {
                            e.status = "rejected", e.reason = t
                        }), e
                    }),
                    em = {
                        dedupe: !0
                    };
                m.defineProperty(et, "defaultValue", {
                    value: X
                });
                let eg = ec((e, t, i) => {
                        let {
                            cache: n,
                            compare: r,
                            suspense: a,
                            fallbackData: s,
                            revalidateOnMount: o,
                            revalidateIfStale: l,
                            refreshInterval: c,
                            refreshWhenHidden: d,
                            refreshWhenOffline: u,
                            keepPreviousData: h
                        } = i, [_, m, b, S] = U.get(n), [k, A] = K(e), O = (0, p.useRef)(!1), C = (0, p.useRef)(!1), P = (0, p.useRef)(k), E = (0, p.useRef)(t), I = (0, p.useRef)(i), T = () => I.current, R = () => T().isVisible() && T().isOnline(), [M, z, N, j] = x(n, k), V = (0, p.useRef)({}).current, $ = g(s) ? i.fallback[k] : s, Z = (e, t) => {
                            for (let i in V)
                                if ("data" === i) {
                                    if (!r(e[i], t[i]) && (!g(e[i]) || !r(en, t[i]))) return !1
                                } else if (t[i] !== e[i]) return !1;
                            return !0
                        }, G = (0, p.useMemo)(() => {
                            let e = !!k && !!t && (g(o) ? !T().isPaused() && !a && (!!g(l) || l) : o),
                                i = t => {
                                    let i = w(t);
                                    return (delete i._k, e) ? {
                                        isValidating: !0,
                                        isLoading: !0,
                                        ...i
                                    } : i
                                },
                                n = M(),
                                r = j(),
                                s = i(n),
                                c = n === r ? s : i(r),
                                d = s;
                            return [() => {
                                let e = i(M());
                                return Z(e, d) ? (d.data = e.data, d.isLoading = e.isLoading, d.isValidating = e.isValidating, d.error = e.error, d) : (d = e, e)
                            }, () => c]
                        }, [n, k]), H = (0, f.useSyncExternalStore)((0, p.useCallback)(e => N(k, (t, i) => {
                            Z(i, t) || e()
                        }), [n, k]), G[0], G[1]), Y = !O.current, X = _[k] && _[k].length > 0, Q = H.data, ee = g(Q) ? $ : Q, et = H.error, ei = (0, p.useRef)(ee), en = h ? g(Q) ? ei.current : Q : ee, er = (!X || !!g(et)) && (Y && !g(o) ? o : !T().isPaused() && (a ? !g(ee) && l : g(ee) || l)), ea = !!(k && t && Y && er), es = g(H.isValidating) ? ea : H.isValidating, eo = g(H.isLoading) ? ea : H.isLoading, el = (0, p.useCallback)(async e => {
                            let t, n;
                            let a = E.current;
                            if (!k || !a || C.current || T().isPaused()) return !1;
                            let s = !0,
                                o = e || {},
                                l = !b[k] || !o.dedupe,
                                c = () => W ? !C.current && k === P.current && O.current : k === P.current,
                                d = {
                                    isValidating: !1,
                                    isLoading: !1
                                },
                                u = () => {
                                    z(d)
                                },
                                h = () => {
                                    let e = b[k];
                                    e && e[1] === n && delete b[k]
                                },
                                p = {
                                    isValidating: !0
                                };
                            g(M().data) && (p.isLoading = !0);
                            try {
                                if (l && (z(p), i.loadingTimeout && g(M().data) && setTimeout(() => {
                                        s && c() && T().onLoadingSlow(k, i)
                                    }, i.loadingTimeout), b[k] = [a(A), J()]), [t, n] = b[k], t = await t, l && setTimeout(h, i.dedupingInterval), !b[k] || b[k][1] !== n) return l && c() && T().onDiscarded(k), !1;
                                d.error = v;
                                let e = m[k];
                                if (!g(e) && (n <= e[0] || n <= e[1] || 0 === e[1])) return u(), l && c() && T().onDiscarded(k), !1;
                                let o = M().data;
                                d.data = r(o, t) ? o : t, l && c() && T().onSuccess(t, k, i)
                            } catch (i) {
                                h();
                                let e = T(),
                                    {
                                        shouldRetryOnError: t
                                    } = e;
                                !e.isPaused() && (d.error = i, l && c() && (e.onError(i, k, e), (!0 === t || y(t) && t(i)) && (!T().revalidateOnFocus || !T().revalidateOnReconnect || R()) && e.onErrorRetry(i, k, e, e => {
                                    let t = _[k];
                                    t && t[0] && t[0](B.ERROR_REVALIDATE_EVENT, e)
                                }, {
                                    retryCount: (o.retryCount || 0) + 1,
                                    dedupe: !0
                                })))
                            }
                            return s = !1, u(), !0
                        }, [k, n]), ec = (0, p.useCallback)(function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            return q(n, P.current, ...t)
                        }, []);
                        if (D(() => {
                                E.current = t, I.current = i, g(Q) || (ei.current = Q)
                            }), D(() => {
                                if (!k) return;
                                let e = el.bind(v, em),
                                    t = 0,
                                    i = ed(k, _, function(i) {
                                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        if (i == B.FOCUS_EVENT) {
                                            let i = Date.now();
                                            T().revalidateOnFocus && i > t && R() && (t = i + T().focusThrottleInterval, e())
                                        } else if (i == B.RECONNECT_EVENT) T().revalidateOnReconnect && R() && e();
                                        else if (i == B.MUTATE_EVENT) return el();
                                        else if (i == B.ERROR_REVALIDATE_EVENT) return el(n)
                                    });
                                return C.current = !1, P.current = k, O.current = !0, z({
                                    _k: A
                                }), er && (g(ee) || L ? e() : F(e)), () => {
                                    C.current = !0, i()
                                }
                            }, [k]), D(() => {
                                let e;

                                function t() {
                                    let t = y(c) ? c(M().data) : c;
                                    t && -1 !== e && (e = setTimeout(i, t))
                                }

                                function i() {
                                    !M().error && (d || T().isVisible()) && (u || T().isOnline()) ? el(em).then(t) : t()
                                }
                                return t(), () => {
                                    e && (clearTimeout(e), e = -1)
                                }
                            }, [c, d, u, k]), (0, p.useDebugValue)(en), a && g(ee) && k) {
                            if (!W && L) throw Error("Fallback data is required when using suspense in SSR.");
                            E.current = t, I.current = i, C.current = !1;
                            let e = S[k];
                            if (g(e) || ev(ec(e)), g(et)) {
                                let e = el(em);
                                g(en) || (e.status = "fulfilled", e.value = !0), ev(e)
                            } else throw et
                        }
                        return {
                            mutate: ec,
                            get data() {
                                return V.data = !0, en
                            },
                            get error() {
                                return V.error = !0, et
                            },
                            get isValidating() {
                                return V.isValidating = !0, es
                            },
                            get isLoading() {
                                return V.isLoading = !0, eo
                            }
                        }
                    }),
                    ey = e => K(e ? e(0, null) : null)[0],
                    ew = Promise.resolve(),
                    eb = (n = e => (t, i, n) => {
                        let r;
                        let a = (0, p.useRef)(!1),
                            {
                                cache: s,
                                initialSize: o = 1,
                                revalidateAll: l = !1,
                                persistSize: c = !1,
                                revalidateFirstPage: d = !0,
                                revalidateOnMount: u = !1,
                                parallel: h = !1
                            } = n,
                            [, , , _] = U.get(H);
                        try {
                            (r = ey(t)) && (r = ei + r)
                        } catch (e) {}
                        let [m, w, b] = x(s, r), S = (0, p.useCallback)(() => g(m()._l) ? o : m()._l, [s, r, o]);
                        (0, f.useSyncExternalStore)((0, p.useCallback)(e => r ? b(r, () => {
                            e()
                        }) : () => {}, [s, r]), S, S);
                        let k = (0, p.useCallback)(() => {
                                let e = m()._l;
                                return g(e) ? o : e
                            }, [r, o]),
                            A = (0, p.useRef)(k());
                        D(() => {
                            if (!a.current) {
                                a.current = !0;
                                return
                            }
                            r && w({
                                _l: c ? A.current : k()
                            })
                        }, [r, s]);
                        let O = u && !a.current,
                            C = e(r, async e => {
                                let r = m()._i,
                                    a = m()._r;
                                w({
                                    _r: v
                                });
                                let o = [],
                                    c = k(),
                                    [u] = x(s, e),
                                    p = u().data,
                                    f = [],
                                    y = null;
                                for (let e = 0; e < c; ++e) {
                                    let [c, u] = K(t(e, h ? null : y));
                                    if (!c) break;
                                    let [v, m] = x(s, c), w = v().data, b = l || r || g(w) || d && !e && !g(p) || O || p && !g(p[e]) && !n.compare(p[e], w);
                                    if (i && ("function" == typeof a ? a(w, u) : b)) {
                                        let t = async () => {
                                            if (c in _) {
                                                let e = _[c];
                                                delete _[c], w = await e
                                            } else w = await i(u);
                                            m({
                                                data: w,
                                                _k: u
                                            }), o[e] = w
                                        };
                                        h ? f.push(t) : await t()
                                    } else o[e] = w;
                                    h || (y = w)
                                }
                                return h && await Promise.all(f.map(e => e())), w({
                                    _i: v
                                }), o
                            }, n),
                            P = (0, p.useCallback)(function(e, t) {
                                let i = "boolean" == typeof t ? {
                                        revalidate: t
                                    } : t || {},
                                    n = !1 !== i.revalidate;
                                return r ? (n && (g(e) ? w({
                                    _i: !0,
                                    _r: i.revalidate
                                }) : w({
                                    _i: !1,
                                    _r: i.revalidate
                                })), arguments.length ? C.mutate(e, { ...i,
                                    revalidate: n
                                }) : C.mutate()) : ew
                            }, [r, s]),
                            E = (0, p.useCallback)(e => {
                                let i;
                                if (!r) return ew;
                                let [, n] = x(s, r);
                                if (y(e) ? i = e(k()) : "number" == typeof e && (i = e), "number" != typeof i) return ew;
                                n({
                                    _l: i
                                }), A.current = i;
                                let a = [],
                                    [o] = x(s, r),
                                    l = null;
                                for (let e = 0; e < i; ++e) {
                                    let [i] = K(t(e, l)), [n] = x(s, i), r = i ? n().data : v;
                                    if (g(r)) return P(o().data);
                                    a.push(r), l = r
                                }
                                return P(a)
                            }, [r, s, P, k]);
                        return {
                            size: k(),
                            setSize: E,
                            mutate: P,
                            get data() {
                                return C.data
                            },
                            get error() {
                                return C.error
                            },
                            get isValidating() {
                                return C.isValidating
                            },
                            get isLoading() {
                                return C.isLoading
                            }
                        }
                    }, function() {
                        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        let [r, a, s] = ea(t), o = (s.use || []).concat(n);
                        return eg(r, a, { ...s,
                            use: o
                        })
                    });
                var eS = i(4662);

                function ek(e, t) {
                    if (!e) throw "string" == typeof t ? Error(t) : Error("".concat(t.displayName, " not found"))
                }
                var eA = (e, t) => {
                        let {
                            assertCtxFn: i = ek
                        } = t || {}, n = p.createContext(void 0);
                        return n.displayName = e, [n, () => {
                            let t = p.useContext(n);
                            return i(t, "".concat(e, " not found")), t.value
                        }, () => {
                            let e = p.useContext(n);
                            return e ? e.value : {}
                        }]
                    },
                    eU = {};
                (0, h.r2)(eU, {
                    useSWR: () => e_,
                    useSWRInfinite: () => eb
                }), (0, h.yA)(eU, r);
                var [eO, eC] = eA("ClerkInstanceContext"), [eP, eE] = eA("UserContext"), [eI, eT] = eA("ClientContext"), [ex, eR] = eA("SessionContext");
                p.createContext({});
                var [eM, ez] = eA("OrganizationContext"), eN = e => {
                    let {
                        children: t,
                        organization: i,
                        swrConfig: n
                    } = e;
                    return p.createElement(eU.SWRConfig, {
                        value: n
                    }, p.createElement(eM.Provider, {
                        value: {
                            value: {
                                organization: i
                            }
                        }
                    }, t))
                };

                function eW(e) {
                    if (!p.useContext(eO)) {
                        if ("function" == typeof e) {
                            e();
                            return
                        }
                        throw Error("".concat(e, " can only be used within the <ClerkProvider /> component.\n\nPossible fixes:\n1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.\n2. Check for multiple versions of the `@clerk/shared` package in your project. Use a tool like `npm ls @clerk/shared` to identify multiple versions, and update your dependencies to only rely on one.\n\nLearn more: https://clerk.com/docs/components/clerk-provider").trim())
                    }
                }

                function eL(e, t) {
                    let i = new Set(Object.keys(t)),
                        n = {};
                    for (let t of Object.keys(e)) i.has(t) || (n[t] = e[t]);
                    return n
                }
                var eF = (e, t) => {
                        var i, n, r;
                        let a = "boolean" == typeof e && e,
                            s = (0, p.useRef)(a ? t.initialPage : null !== (i = null == e ? void 0 : e.initialPage) && void 0 !== i ? i : t.initialPage),
                            o = (0, p.useRef)(a ? t.pageSize : null !== (n = null == e ? void 0 : e.pageSize) && void 0 !== n ? n : t.pageSize),
                            l = {};
                        for (let i of Object.keys(t)) l[i] = a ? t[i] : null !== (r = null == e ? void 0 : e[i]) && void 0 !== r ? r : t[i];
                        return { ...l,
                            initialPage: s.current,
                            pageSize: o.current
                        }
                    },
                    eD = {
                        dedupingInterval: 6e4,
                        focusThrottleInterval: 12e4
                    },
                    ej = (e, t, i, n) => {
                        var r, a, s, o, l, c, d;
                        let [u, h] = (0, p.useState)(null !== (r = e.initialPage) && void 0 !== r ? r : 1), f = (0, p.useRef)(null !== (a = e.initialPage) && void 0 !== a ? a : 1), _ = (0, p.useRef)(null !== (s = e.pageSize) && void 0 !== s ? s : 10), v = null === (o = i.enabled) || void 0 === o || o, m = null !== (l = i.infinite) && void 0 !== l && l, g = null !== (c = i.keepPreviousData) && void 0 !== c && c, y = { ...n,
                            ...e,
                            initialPage: u,
                            pageSize: _.current
                        }, {
                            data: w,
                            isValidating: b,
                            isLoading: S,
                            error: k,
                            mutate: A
                        } = e_(!m && t && v ? y : null, e => {
                            let i = eL(e, n);
                            return null == t ? void 0 : t(i)
                        }, {
                            keepPreviousData: g,
                            ...eD
                        }), {
                            data: U,
                            isLoading: O,
                            isValidating: C,
                            error: P,
                            size: E,
                            setSize: I,
                            mutate: T
                        } = eb(t => m && v ? { ...e,
                            ...n,
                            initialPage: f.current + t,
                            pageSize: _.current
                        } : null, e => {
                            let i = eL(e, n);
                            return null == t ? void 0 : t(i)
                        }, eD), x = (0, p.useMemo)(() => m ? E : u, [m, E, u]), R = (0, p.useCallback)(e => {
                            if (m) {
                                I(e);
                                return
                            }
                            return h(e)
                        }, [I]), M = (0, p.useMemo)(() => {
                            var e, t;
                            return m ? null !== (e = null == U ? void 0 : U.map(e => null == e ? void 0 : e.data).flat()) && void 0 !== e ? e : [] : null !== (t = null == w ? void 0 : w.data) && void 0 !== t ? t : []
                        }, [m, w, U]), z = (0, p.useMemo)(() => {
                            var e, t;
                            return m ? (null == U ? void 0 : null === (e = U[(null == U ? void 0 : U.length) - 1]) || void 0 === e ? void 0 : e.total_count) || 0 : null !== (t = null == w ? void 0 : w.total_count) && void 0 !== t ? t : 0
                        }, [m, w, U]), N = m ? O : S, W = m ? C : b, L = null !== (d = m ? P : k) && void 0 !== d ? d : null, F = (0, p.useCallback)(() => {
                            R(e => Math.max(0, e + 1))
                        }, [R]), D = (0, p.useCallback)(() => {
                            R(e => Math.max(0, e - 1))
                        }, [R]), j = (f.current - 1) * _.current, V = Math.ceil((z - j) / _.current), K = z - j * _.current > x * _.current, $ = (x - 1) * _.current > j * _.current, J = m ? e => T(e, {
                            revalidate: !1
                        }) : e => A(e, {
                            revalidate: !1
                        });
                        return {
                            data: M,
                            count: z,
                            error: L,
                            isLoading: N,
                            isFetching: W,
                            isError: !!L,
                            page: x,
                            pageCount: V,
                            fetchPage: R,
                            fetchNext: F,
                            fetchPrevious: D,
                            hasNextPage: K,
                            hasPreviousPage: $,
                            revalidate: m ? () => T() : () => A(),
                            setData: J
                        }
                    },
                    eV = {
                        data: void 0,
                        count: void 0,
                        error: void 0,
                        isLoading: !1,
                        isFetching: !1,
                        isError: !1,
                        page: void 0,
                        pageCount: void 0,
                        fetchPage: void 0,
                        fetchNext: void 0,
                        fetchPrevious: void 0,
                        hasNextPage: !1,
                        hasPreviousPage: !1,
                        revalidate: void 0,
                        setData: void 0
                    },
                    eK = e => {
                        var t, i, n;
                        let {
                            domains: r,
                            membershipRequests: s,
                            memberships: o,
                            invitations: l
                        } = e || {};
                        eW("useOrganization");
                        let {
                            organization: c
                        } = ez(), d = eR(), u = eF(r, {
                            initialPage: 1,
                            pageSize: 10,
                            keepPreviousData: !1,
                            infinite: !1,
                            enrollmentMode: void 0
                        }), h = eF(s, {
                            initialPage: 1,
                            pageSize: 10,
                            status: "pending",
                            keepPreviousData: !1,
                            infinite: !1
                        }), p = eF(o, {
                            initialPage: 1,
                            pageSize: 10,
                            role: void 0,
                            keepPreviousData: !1,
                            infinite: !1,
                            query: void 0
                        }), f = eF(l, {
                            initialPage: 1,
                            pageSize: 10,
                            status: ["pending"],
                            keepPreviousData: !1,
                            infinite: !1
                        }), _ = eC();
                        null === (t = _.telemetry) || void 0 === t || t.record(a("useOrganization"));
                        let v = void 0 === r ? void 0 : {
                                initialPage: u.initialPage,
                                pageSize: u.pageSize,
                                enrollmentMode: u.enrollmentMode
                            },
                            m = void 0 === s ? void 0 : {
                                initialPage: h.initialPage,
                                pageSize: h.pageSize,
                                status: h.status
                            },
                            g = void 0 === o ? void 0 : {
                                initialPage: p.initialPage,
                                pageSize: p.pageSize,
                                role: p.role,
                                query: p.query
                            },
                            y = void 0 === l ? void 0 : {
                                initialPage: f.initialPage,
                                pageSize: f.pageSize,
                                status: f.status
                            },
                            w = ej({ ...v
                            }, null == c ? void 0 : c.getDomains, {
                                keepPreviousData: u.keepPreviousData,
                                infinite: u.infinite,
                                enabled: !!v
                            }, {
                                type: "domains",
                                organizationId: null == c ? void 0 : c.id
                            }),
                            b = ej({ ...m
                            }, null == c ? void 0 : c.getMembershipRequests, {
                                keepPreviousData: h.keepPreviousData,
                                infinite: h.infinite,
                                enabled: !!m
                            }, {
                                type: "membershipRequests",
                                organizationId: null == c ? void 0 : c.id
                            }),
                            S = ej(g || {}, null == c ? void 0 : c.getMemberships, {
                                keepPreviousData: p.keepPreviousData,
                                infinite: p.infinite,
                                enabled: !!g
                            }, {
                                type: "members",
                                organizationId: null == c ? void 0 : c.id
                            }),
                            k = ej({ ...y
                            }, null == c ? void 0 : c.getInvitations, {
                                keepPreviousData: f.keepPreviousData,
                                infinite: f.infinite,
                                enabled: !!y
                            }, {
                                type: "invitations",
                                organizationId: null == c ? void 0 : c.id
                            });
                        return void 0 === c ? {
                            isLoaded: !1,
                            organization: void 0,
                            membership: void 0,
                            domains: eV,
                            membershipRequests: eV,
                            memberships: eV,
                            invitations: eV
                        } : null === c ? {
                            isLoaded: !0,
                            organization: null,
                            membership: null,
                            domains: null,
                            membershipRequests: null,
                            memberships: null,
                            invitations: null
                        } : !_.loaded && c ? {
                            isLoaded: !0,
                            organization: c,
                            membership: void 0,
                            domains: eV,
                            membershipRequests: eV,
                            memberships: eV,
                            invitations: eV
                        } : {
                            isLoaded: _.loaded,
                            organization: c,
                            membership: (i = d.user.organizationMemberships, n = c.id, i.find(e => e.organization.id === n)),
                            domains: w,
                            membershipRequests: b,
                            memberships: S,
                            invitations: k
                        }
                    },
                    e$ = {
                        data: void 0,
                        count: void 0,
                        error: void 0,
                        isLoading: !1,
                        isFetching: !1,
                        isError: !1,
                        page: void 0,
                        pageCount: void 0,
                        fetchPage: void 0,
                        fetchNext: void 0,
                        fetchPrevious: void 0,
                        hasNextPage: !1,
                        hasPreviousPage: !1,
                        revalidate: void 0,
                        setData: void 0
                    },
                    eJ = e => {
                        var t;
                        let {
                            userMemberships: i,
                            userInvitations: n,
                            userSuggestions: r
                        } = e || {};
                        eW("useOrganizationList");
                        let s = eF(i, {
                                initialPage: 1,
                                pageSize: 10,
                                keepPreviousData: !1,
                                infinite: !1
                            }),
                            o = eF(n, {
                                initialPage: 1,
                                pageSize: 10,
                                status: "pending",
                                keepPreviousData: !1,
                                infinite: !1
                            }),
                            l = eF(r, {
                                initialPage: 1,
                                pageSize: 10,
                                status: "pending",
                                keepPreviousData: !1,
                                infinite: !1
                            }),
                            c = eC(),
                            d = eE();
                        null === (t = c.telemetry) || void 0 === t || t.record(a("useOrganizationList"));
                        let u = void 0 === i ? void 0 : {
                                initialPage: s.initialPage,
                                pageSize: s.pageSize
                            },
                            h = void 0 === n ? void 0 : {
                                initialPage: o.initialPage,
                                pageSize: o.pageSize,
                                status: o.status
                            },
                            p = void 0 === r ? void 0 : {
                                initialPage: l.initialPage,
                                pageSize: l.pageSize,
                                status: l.status
                            },
                            f = !!(c.loaded && d),
                            _ = ej(u || {}, null == d ? void 0 : d.getOrganizationMemberships, {
                                keepPreviousData: s.keepPreviousData,
                                infinite: s.infinite,
                                enabled: !!u
                            }, {
                                type: "userMemberships",
                                userId: null == d ? void 0 : d.id
                            }),
                            v = ej({ ...h
                            }, null == d ? void 0 : d.getOrganizationInvitations, {
                                keepPreviousData: o.keepPreviousData,
                                infinite: o.infinite,
                                enabled: !!h
                            }, {
                                type: "userInvitations",
                                userId: null == d ? void 0 : d.id
                            }),
                            m = ej({ ...p
                            }, null == d ? void 0 : d.getOrganizationSuggestions, {
                                keepPreviousData: l.keepPreviousData,
                                infinite: l.infinite,
                                enabled: !!p
                            }, {
                                type: "userSuggestions",
                                userId: null == d ? void 0 : d.id
                            });
                        return f ? {
                            isLoaded: f,
                            setActive: c.setActive,
                            createOrganization: c.createOrganization,
                            userMemberships: _,
                            userInvitations: v,
                            userSuggestions: m
                        } : {
                            isLoaded: !1,
                            createOrganization: void 0,
                            setActive: void 0,
                            userMemberships: e$,
                            userInvitations: e$,
                            userSuggestions: e$
                        }
                    },
                    eB = "undefined" != typeof window ? p.useLayoutEffect : p.useEffect,
                    eq = () => {
                        eW("useSession");
                        let e = eR();
                        return void 0 === e ? {
                            isLoaded: !1,
                            isSignedIn: void 0,
                            session: void 0
                        } : null === e ? {
                            isLoaded: !0,
                            isSignedIn: !1,
                            session: null
                        } : {
                            isLoaded: !0,
                            isSignedIn: !0,
                            session: e
                        }
                    };

                function eZ() {
                    eW("useUser");
                    let e = eE();
                    return void 0 === e ? {
                        isLoaded: !1,
                        isSignedIn: void 0,
                        user: void 0
                    } : null === e ? {
                        isLoaded: !0,
                        isSignedIn: !1,
                        user: null
                    } : {
                        isLoaded: !0,
                        isSignedIn: !0,
                        user: e
                    }
                }
                var eG = () => (eW("useClerk"), eC()),
                    eH = e => {
                        let t = p.useRef(e);
                        return (0, eS.J)(e, t.current) || (t.current = e), p.useMemo(() => t.current, [t.current])
                    },
                    eY = (e, t) => p.useMemo(e, eH(t));
                async function eX(e) {
                    try {
                        let t = await e;
                        if (t instanceof Response) return t.json();
                        return t
                    } catch (e) {
                        if ((0, o.kD)(e) && e.errors.find(e => {
                                let {
                                    code: t
                                } = e;
                                return "session_reverification_required" === t
                            })) return c();
                        throw e
                    }
                }
                var eQ = (e, t) => {
                    let {
                        __internal_openReverification: i
                    } = eG(), n = (0, p.useRef)(e), r = (0, p.useRef)(t), a = (0, p.useMemo)(() => {
                        var e;
                        return [(e = {
                            openUIComponent: i,
                            ...r.current
                        }, function(t) {
                            return async function() {
                                for (var i, n, r = arguments.length, a = Array(r), l = 0; l < r; l++) a[l] = arguments[l];
                                let c = await eX(t(...a));
                                if (d(c)) {
                                    let r = (0, s.W)(),
                                        l = (0, u.P)(null === (i = c.clerk_error.metadata) || void 0 === i ? void 0 : i.reverification);
                                    null === (n = e.openUIComponent) || void 0 === n || n.call(e, {
                                        level: l ? l().level : void 0,
                                        afterVerification() {
                                            r.resolve(!0)
                                        },
                                        afterVerificationCancelled() {
                                            r.reject(new o.w$("User cancelled attempted verification", {
                                                code: "reverification_cancelled"
                                            }))
                                        }
                                    });
                                    try {
                                        await r.promise
                                    } catch (t) {
                                        if (e.onCancel && e.onCancel(), (0, o.uX)(t) && "reverification_cancelled" === t.code && e.throwOnCancel) throw t;
                                        return null
                                    }
                                    c = await eX(t(...a))
                                }
                                return c
                            }
                        })(n.current)]
                    }, [i, n.current, r.current]);
                    return eB(() => {
                        n.current = e, r.current = t
                    }), a
                }
            },
            153: function(e, t, i) {
                "use strict";
                i.d(t, {
                    X: () => n.X
                });
                var n = i(7306);
                i(4310)
            },
            5027: function(e, t, i) {
                "use strict";
                i.d(t, {
                    MI: () => n.MI,
                    TD: () => n.TD,
                    a1: () => n.a1,
                    aw: () => n.aw,
                    hF: () => n.hF,
                    zb: () => n.zb
                });
                var n = i(1790);
                i(4310)
            },
            4944: function(e, t, i) {
                "use strict";
                i.d(t, {
                    xy: () => a,
                    LQ: () => o,
                    sD: () => c,
                    A5: () => s,
                    d5: () => r
                });
                var n = i(6182);

                function r() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return (e || "").replace(/^.+:\/\//, "")
                }

                function a(e) {
                    let t;
                    if (!e) return "";
                    if (e.match(/^(clerk\.)+\w*$/)) t = /(clerk\.)*(?=clerk\.)/;
                    else {
                        if (e.match(/\.clerk.accounts/)) return e;
                        t = /^(clerk\.)*/gi
                    }
                    let i = e.replace(t, "");
                    return "clerk.".concat(i)
                }

                function s(e) {
                    return n.mv.some(t => e.startsWith("accounts.") && e.endsWith(t))
                }

                function o(e) {
                    return n.JF.some(t => e.endsWith(t) && !e.endsWith(".clerk" + t))
                }
                var l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                    c = e => l.test(e);
                i(4310)
            },
            1826: function(e, t, i) {
                "use strict";
                i.d(t, {
                    WK: () => r.W,
                    YZ: () => o,
                    vf: () => s.vf,
                    EB: () => n,
                    ZT: () => a.Z
                });
                var n = (e, t) => {
                        if (e && t)
                            for (let i in e) Object.prototype.hasOwnProperty.call(e, i) && null !== e[i] && "object" == typeof e[i] ? (void 0 === t[i] && (t[i] = new(Object.getPrototypeOf(e[i])).constructor), n(e[i], t[i])) : Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    },
                    r = i(8691),
                    a = i(8796),
                    s = i(3959);

                function o(e, t, i) {
                    return "function" == typeof e ? e(t) : void 0 !== e ? e : void 0 !== i ? i : void 0
                }
                i(4310)
            },
            2208: function(e, t, i) {
                "use strict";
                i.d(t, {
                    C6: () => s,
                    h_: () => a,
                    iW: () => r
                });
                var n = i(8527);

                function r() {
                    return (0, n.Er)() && "function" == typeof window.PublicKeyCredential
                }
                async function a() {
                    try {
                        return r() && await window.PublicKeyCredential.isConditionalMediationAvailable()
                    } catch {
                        return !1
                    }
                }
                async function s() {
                    try {
                        return "undefined" != typeof window && await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
                    } catch {
                        return !1
                    }
                }
                i(4310)
            }
        },
        t = {};

    function i(n) {
        var r = t[n];
        if (void 0 !== r) return r.exports;
        var a = t[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, i), a.loaded = !0, a.exports
    }
    return i.m = e, i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
            a: t
        }), t
    }, (() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        i.t = function(n, r) {
            if (1 & r && (n = this(n)), 8 & r || "object" == typeof n && n && (4 & r && n.__esModule || 16 & r && "function" == typeof n.then)) return n;
            var a = Object.create(null);
            i.r(a);
            var s = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var o = 2 & r && n;
                "object" == typeof o && !~e.indexOf(o); o = t(o)) Object.getOwnPropertyNames(o).forEach(e => {
                s[e] = () => n[e]
            });
            return s.default = () => n, i.d(a, s), a
        }
    })(), i.d = function(e, t) {
        for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, i.f = {}, i.e = function(e) {
        return Promise.all(Object.keys(i.f).reduce(function(t, n) {
            return i.f[n](e, t), t
        }, []))
    }, i.hmd = function(e) {
        return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, i.u = function(e) {
        return "" + (({
            158: "organizationlist",
            199: "cookieSuffix",
            200: "vendors",
            211: "prefetchorganizationlist",
            270: "userbutton",
            307: "keylessPrompt",
            325: "zxcvbn-common",
            344: "framework",
            378: "impersonationfab",
            470: "userprofile",
            554: "organizationprofile",
            573: "ui-common",
            662: "userverification",
            708: "zxcvbn-ts-core",
            710: "signup",
            722: "signin",
            780: "organizationswitcher",
            861: "waitlist",
            875: "blankcaptcha",
            920: "onetap",
            956: "coinbase-wallet-sdk",
            96: "createorganization"
        })[e] || e) + "_" + i.h().slice(0, 6) + "_5.56.0.js"
    }, i.h = function() {
        return "bef0ff1fe01f83b0"
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, (() => {
        var e = {},
            t = "@clerk/clerk-js:";
        i.l = function(n, r, a, s) {
            if (e[n]) {
                e[n].push(r);
                return
            }
            if (void 0 !== a)
                for (var o, l, c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                    var u = c[d];
                    if (u.getAttribute("src") == n || u.getAttribute("data-webpack") == t + a) {
                        o = u;
                        break
                    }
                }
            o || (l = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, i.nc && o.setAttribute("nonce", i.nc), o.setAttribute("data-webpack", t + a), o.src = n), e[n] = [r];
            var h = function(t, i) {
                    o.onerror = o.onload = null, clearTimeout(p);
                    var r = e[n];
                    if (delete e[n], o.parentNode && o.parentNode.removeChild(o), r && r.forEach(function(e) {
                            return e(i)
                        }), t) return t(i)
                },
                p = setTimeout(h.bind(null, void 0, {
                    type: "timeout",
                    target: o
                }), 12e4);
            o.onerror = h.bind(null, o.onerror), o.onload = h.bind(null, o.onload), l && document.head.appendChild(o)
        }
    })(), i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        i.g.importScripts && (e = i.g.location + "");
        var e, t = i.g.document;
        if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            if (n.length)
                for (var r = n.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = n[r--].src
        }
        if (!e) throw Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
    })(), (() => {
        var e = {
            397: 0
        };
        i.f.j = function(t, n) {
            var r = i.o(e, t) ? e[t] : void 0;
            if (0 !== r) {
                if (r) n.push(r[2]);
                else {
                    var a = new Promise(function(i, n) {
                        r = e[t] = [i, n]
                    });
                    n.push(r[2] = a);
                    var s = i.p + i.u(t),
                        o = Error();
                    i.l(s, function(n) {
                        if (i.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var a = n && ("load" === n.type ? "missing" : n.type),
                                s = n && n.target && n.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + a + ": " + s + ")", o.name = "ChunkLoadError", o.type = a, o.request = s, r[1](o)
                        }
                    }, "chunk-" + t, t)
                }
            }
        };
        var t = function(t, n) {
                var r, a, s = n[0],
                    o = n[1],
                    l = n[2],
                    c = 0;
                if (s.some(function(t) {
                        return 0 !== e[t]
                    })) {
                    for (r in o) i.o(o, r) && (i.m[r] = o[r]);
                    l && l(i)
                }
                for (t && t(n); c < s.length; c++) a = s[c], i.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            n = globalThis.webpackChunk_clerk_clerk_js = globalThis.webpackChunk_clerk_clerk_js || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })(), i(6147)
})());