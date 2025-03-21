"use strict";
(globalThis.webpackChunk_clerk_clerk_js = globalThis.webpackChunk_clerk_clerk_js || []).push([
    ["573"], {
        4995: function(e, t, r) {
            r.d(t, {
                O: () => i
            });
            var n = r(9755),
                o = r(3064),
                a = r(2539);
            let i = e => {
                let {
                    mount: t,
                    unmount: r
                } = e;
                return (0, n.tZ)(o.Col, {
                    elementDescriptor: o.descriptors.page,
                    gap: 8,
                    children: (0, n.tZ)(o.Col, {
                        elementDescriptor: o.descriptors.profilePage,
                        gap: 8,
                        children: (0, n.tZ)(a.qT, {
                            mount: t,
                            unmount: r
                        })
                    })
                })
            }
        },
        5112: function(e, t, r) {
            r.d(t, {
                $: () => d,
                J: () => c
            });
            var n = r(9755),
                o = r(5332),
                a = r(1085),
                i = r(686);
            let l = {
                    verified: {
                        title: (0, a.u1)("signIn.emailLink.verified.title"),
                        subtitle: (0, a.u1)("signIn.emailLink.verified.subtitle")
                    },
                    verified_switch_tab: {
                        title: (0, a.u1)("signIn.emailLink.verified.title"),
                        subtitle: (0, a.u1)("signIn.emailLink.verifiedSwitchTab.subtitle")
                    },
                    loading: {
                        title: (0, a.u1)("signIn.emailLink.loading.title"),
                        subtitle: (0, a.u1)("signIn.emailLink.loading.subtitle")
                    },
                    failed: {
                        title: (0, a.u1)("signIn.emailLink.failed.title"),
                        subtitle: (0, a.u1)("signIn.emailLink.failed.subtitle")
                    },
                    expired: {
                        title: (0, a.u1)("signIn.emailLink.expired.title"),
                        subtitle: (0, a.u1)("signIn.emailLink.expired.subtitle")
                    },
                    client_mismatch: {
                        title: (0, a.u1)("signIn.emailLink.clientMismatch.title"),
                        subtitle: (0, a.u1)("signIn.emailLink.clientMismatch.subtitle")
                    }
                },
                s = { ...l,
                    verified: { ...l.verified,
                        title: (0, a.u1)("signUp.emailLink.verified.title")
                    },
                    verified_switch_tab: { ...l.verified_switch_tab,
                        title: (0, a.u1)("signUp.emailLink.verified.title")
                    },
                    loading: { ...l.loading,
                        title: (0, a.u1)("signUp.emailLink.loading.title")
                    },
                    client_mismatch: { ...l.client_mismatch,
                        subtitle: (0, a.u1)("signUp.emailLink.clientMismatch.subtitle")
                    }
                },
                c = (0, o.withCardStateProvider)(e => (0, n.tZ)(i.$, { ...e,
                    texts: l
                })),
                d = (0, o.withCardStateProvider)(e => (0, n.tZ)(i.$, { ...e,
                    texts: s
                }))
        },
        6273: function(e, t, r) {
            r.d(t, {
                E: () => u
            });
            var n = r(9755);
            r(9144);
            var o = r(3064),
                a = r(5332),
                i = r(9037),
                l = r(8655),
                s = r(5295);
            let c = {
                    verified: l.qy,
                    verified_switch_tab: l.oX,
                    expired: l.SV,
                    failed: l.SV,
                    client_mismatch: l.SV
                },
                d = (e, t) => ({
                    verified: e.colors.$success500,
                    verified_switch_tab: e.colors.$primary500,
                    expired: e.colors.$warning500,
                    failed: e.colors.$danger500,
                    client_mismatch: e.colors.$warning500
                })[t],
                u = e => {
                    let t = (0, i.v)();
                    return (0, n.tZ)(o.Flow.Part, {
                        part: "emailLinkStatus",
                        children: (0, n.BX)(a.Card.Root, {
                            children: [(0, n.BX)(a.Card.Content, {
                                children: [(0, n.BX)(a.Header.Root, {
                                    children: [(0, n.tZ)(a.Header.Title, {
                                        localizationKey: e.title
                                    }), (0, n.tZ)(a.Header.Subtitle, {
                                        localizationKey: e.subtitle
                                    })]
                                }), (0, n.tZ)(a.Card.Alert, {
                                    children: t.error
                                }), (0, n.tZ)(o.Col, {
                                    elementDescriptor: o.descriptors.main,
                                    children: (0, n.tZ)(p, {
                                        status: e.status
                                    })
                                })]
                            }), (0, n.tZ)(a.Card.Footer, {})]
                        })
                    })
                },
                p = e => (0, n.tZ)(o.Flex, {
                    elementDescriptor: o.descriptors.verificationLinkStatusBox,
                    center: !0,
                    direction: "col",
                    gap: 8,
                    children: "loading" === e.status ? (0, n.tZ)(o.Spinner, {
                        size: "xl",
                        colorScheme: "primary",
                        sx: e => ({
                            margin: "".concat(e.space.$12, " 0")
                        }),
                        elementDescriptor: o.descriptors.spinner
                    }) : (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)(m, {
                            status: e.status
                        }), (0, n.tZ)(o.Text, {
                            elementDescriptor: o.descriptors.verificationLinkStatusText,
                            colorScheme: "secondary",
                            localizationKey: (0, o.localizationKeys)("signIn.emailLink.unusedTab.title")
                        })]
                    })
                }),
                m = e => {
                    let {
                        status: t
                    } = e;
                    return (0, n.tZ)(o.Flex, {
                        elementDescriptor: o.descriptors.verificationLinkStatusIconBox,
                        center: !0,
                        sx: e => ({
                            width: e.sizes.$24,
                            height: e.sizes.$24,
                            borderRadius: e.radii.$circle,
                            backgroundColor: e.colors.$neutralAlpha100,
                            color: d(e, t),
                            animation: "".concat(s.animations.dropdownSlideInScaleAndFade, " 500ms ease")
                        }),
                        children: (0, n.tZ)(o.Icon, {
                            elementDescriptor: o.descriptors.verificationLinkStatusIcon,
                            icon: c[t],
                            sx: e => ({
                                height: e.sizes.$6,
                                width: e.sizes.$5
                            })
                        })
                    })
                }
        },
        686: function(e, t, r) {
            r.d(t, {
                $: () => p
            });
            var n = r(9755),
                o = r(3531),
                a = r(4914),
                i = r(9144),
                l = r(1235),
                s = r(7571),
                c = r(4676),
                d = r(2539),
                u = r(6273);
            let p = e => {
                var t, r;
                let {
                    redirectUrl: p,
                    redirectUrlComplete: m,
                    verifyEmailPath: h,
                    verifyPhonePath: g,
                    continuePath: f
                } = e, {
                    handleEmailLinkVerification: v
                } = (0, a.cL)(), {
                    navigate: b
                } = (0, c.useRouter)(), y = (0, s.useCoreSignUp)(), [x, w] = i.useState("loading"), S = async () => {
                    try {
                        await (0, d._v)(750), await v({
                            redirectUrlComplete: m,
                            redirectUrl: p
                        }, b), w("verified_switch_tab"), await (0, d._v)(750), await (0, l.vx)({
                            signUp: y,
                            verifyEmailPath: h,
                            verifyPhonePath: g,
                            continuePath: f,
                            navigate: b
                        })
                    } catch (e) {
                        if ((0, o.G1)(e) && (e.code === o.u$.Expired || e.code === o.u$.ClientMismatch)) {
                            w(e.code);
                            return
                        }
                        w(o.u$.Failed)
                    }
                };
                return i.useEffect(() => {
                    S()
                }, []), (0, n.tZ)(u.E, {
                    title: (null === (t = e.texts[x]) || void 0 === t ? void 0 : t.title) || "",
                    subtitle: (null === (r = e.texts[x]) || void 0 === r ? void 0 : r.subtitle) || "",
                    status: x
                })
            }
        },
        3559: function(e, t, r) {
            r.d(t, {
                Ci: () => c,
                Cv: () => s,
                N2: () => l
            });
            var n = r(9755),
                o = r(4914),
                a = r(9144),
                i = r(4676);
            let l = e => {
                    let {
                        session: t
                    } = (0, o.kP)();
                    return null != t && !!t.id && ("function" == typeof e ? e(t.checkAuthorization) : t.checkAuthorization(e))
                },
                s = e => {
                    let {
                        children: t,
                        fallback: r,
                        redirectTo: o,
                        ...s
                    } = e, c = l("function" == typeof s.condition ? s.condition : s), {
                        navigate: d
                    } = (0, i.useRouter)();
                    return ((0, a.useEffect)(() => {
                        !c && o && d(o)
                    }, [c, o]), !c && r) ? (0, n.tZ)(n.HY, {
                        children: r
                    }) : c ? (0, n.tZ)(n.HY, {
                        children: t
                    }) : null
                };

            function c(e, t) {
                let r = e.displayName || e.name || "Component",
                    o = r => (0, n.tZ)(s, { ...t,
                        children: (0, n.tZ)(e, { ...r
                        })
                    });
                return o.displayName = "withProtect(".concat(r, ")"), o
            }
        },
        7772: function(e, t, r) {
            r.d(t, {
                kJ: () => l,
                vO: () => i,
                vX: () => a
            });
            var n = r(5059);
            let o = Object.freeze({
                    email_address_username: {
                        label: (0, n.u)("formFieldLabel__emailAddress_username"),
                        placeholder: (0, n.u)("formFieldInputPlaceholder__emailAddress_username"),
                        type: "text",
                        action: (0, n.u)("signIn.start.actionLink__use_email_username")
                    },
                    email_address: {
                        label: (0, n.u)("formFieldLabel__emailAddress"),
                        placeholder: (0, n.u)("formFieldInputPlaceholder__emailAddress"),
                        type: "email",
                        action: (0, n.u)("signIn.start.actionLink__use_email")
                    },
                    phone_number: {
                        label: (0, n.u)("formFieldLabel__phoneNumber"),
                        placeholder: (0, n.u)("formFieldInputPlaceholder__phoneNumber"),
                        type: "tel",
                        action: (0, n.u)("signIn.start.actionLink__use_phone")
                    },
                    username: {
                        label: (0, n.u)("formFieldLabel__username"),
                        placeholder: (0, n.u)("formFieldInputPlaceholder__username"),
                        type: "text",
                        action: (0, n.u)("signIn.start.actionLink__use_username")
                    },
                    default: {
                        label: "",
                        placeholder: "",
                        type: "text",
                        action: ""
                    }
                }),
                a = e => {
                    let t = [...e.filter(e => "passkey" !== e)];
                    return ["email_address", "username"].every(e => t.includes(e)) && (t = t.filter(e => !["email_address", "username"].includes(e))).unshift("email_address_username"), t
                },
                i = (e, t) => {
                    let r = e.indexOf(t);
                    return -1 === r ? {
                        currentIdentifier: { ...o.default
                        },
                        nextIdentifier: void 0
                    } : {
                        currentIdentifier: { ...o[t]
                        },
                        nextIdentifier: e.length > 1 ? { ...o[e[(r + 1) % e.length]]
                        } : void 0
                    }
                },
                l = Object.freeze({
                    Password: "password",
                    OTP: "otp"
                })
        },
        8969: function(e, t, r) {
            r.d(t, {
                q7: () => u,
                sN: () => D,
                e_: () => w,
                dN: () => g,
                L: () => A,
                vX: () => l.vX,
                a2: () => O,
                LE: () => $,
                Hy: () => E,
                Qz: () => f,
                vO: () => l.vO,
                Ej: () => s.E,
                en: () => F,
                s_: () => C,
                N2: () => d.N2,
                Ci: () => d.Ci,
                aX: () => i,
                Cv: () => d.Cv,
                o4: () => v
            });
            var n = r(3064),
                o = r(5332);
            r(8655);
            var a = r(9755);
            let i = e => {
                let {
                    icon: t,
                    text: r,
                    textSx: o,
                    actionLabel: i,
                    onClick: l
                } = e;
                return (0, a.tZ)(n.Flex, {
                    sx: e => ({
                        background: e.colors.$neutralAlpha50,
                        padding: "".concat(e.space.$2x5, " ").concat(e.space.$4),
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        borderRadius: e.radii.$md
                    }),
                    children: (0, a.BX)(n.Flex, {
                        gap: 2,
                        children: [(0, a.tZ)(n.Icon, {
                            colorScheme: "neutral",
                            icon: t,
                            sx: e => ({
                                marginTop: e.space.$1
                            })
                        }), (0, a.BX)(n.Col, {
                            gap: 4,
                            children: [(0, a.tZ)(n.Text, {
                                colorScheme: "secondary",
                                sx: o,
                                localizationKey: r,
                                children: e.children
                            }), i && (0, a.tZ)(n.Link, {
                                colorScheme: "primary",
                                variant: "subtitle",
                                localizationKey: i,
                                onClick: e => {
                                    null == l || l(e)
                                }
                            })]
                        })]
                    })
                })
            };
            var l = r(7772),
                s = r(6273);
            r(686);
            var c = r(9144),
                d = r(3559);
            let u = (0, c.forwardRef)((e, t) => (0, a.tZ)(n.Box, {
                ref: t,
                sx: e => ({
                    width: "100%",
                    height: e.space.$12,
                    position: "relative"
                }),
                children: (0, a.tZ)(n.Box, {
                    sx: {
                        margin: "auto",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translateY(-50%) translateX(-50%)"
                    },
                    children: (0, a.tZ)(n.Spinner, {
                        size: "sm",
                        colorScheme: "primary",
                        elementDescriptor: n.descriptors.spinner
                    })
                })
            }));
            var p = r(8545),
                m = r(2762),
                h = r(5295);
            let g = e => {
                    let {
                        notificationCount: t,
                        containerSx: r,
                        shouldAnimate: o = !0,
                        ...i
                    } = e, l = (0, m.Tb)(), {
                        t: s
                    } = (0, n.useLocalizations)(), c = s((0, n.localizationKeys)("locale")), d = (0, p.$p)(t, c);
                    return (0, a.tZ)(n.Flex, {
                        justify: "center",
                        align: "center",
                        as: "span",
                        sx: [e => ({
                            marginLeft: e.space.$1x5
                        }), r],
                        children: (0, a.tZ)(n.NotificationBadge, {
                            sx: e => ({
                                animation: o && !l ? "".concat(h.animations.notificationAnimation, " ").concat(e.transitionDuration.$textField, " ").concat(e.transitionTiming.$slowBezier, " 0s 1 normal forwards") : "none"
                            }),
                            ...i,
                            children: d
                        })
                    })
                },
                f = () => {
                    let e = [];
                    return {
                        print: () => e.forEach(e => e()),
                        printableProps: {
                            onPrint: t => e.push(t)
                        }
                    }
                },
                v = e => {
                    let {
                        children: t,
                        onPrint: r
                    } = e, n = c.useRef(null);
                    return r(() => {
                        x(n)
                    }), (0, a.tZ)("div", {
                        ref: n,
                        style: {
                            position: "fixed",
                            left: "-9999px",
                            top: 0,
                            display: "none"
                        },
                        children: t
                    })
                },
                b = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "[data-emotion=cl-internal]";
                    if (!e.contentDocument) return;
                    let r = [...document.head.querySelectorAll(t)].map(e => e.innerHTML).join("\n"),
                        n = e.contentDocument.createElement("style");
                    n.innerHTML = r, e.contentDocument.head.prepend(n)
                },
                y = e => {
                    e.contentDocument && (e.contentDocument.body.style.fontFamily = "Arial", e.contentDocument.body.style.cssText = "* {\n-webkit-print-color-adjust: exact !important;\ncolor-adjust: exact !important;\nprint-color-adjust: exact !important;\n}")
                },
                x = e => {
                    let t = e.current;
                    if (!t) return;
                    let r = document.createElement("iframe");
                    r.style.position = "fixed", r.style.right = "-2000px", r.style.bottom = "-2000px", r.onload = () => {
                        b(r), y(r), r.contentDocument && r.contentWindow && (r.contentDocument.body.innerHTML = t.innerHTML, r.contentWindow.print())
                    }, window.document.body.appendChild(r)
                },
                w = e => {
                    let {
                        value: t,
                        id: r,
                        ...o
                    } = e;
                    return (0, a.tZ)(n.Box, {
                        as: "span",
                        elementDescriptor: [n.descriptors.providerIcon, n.descriptors.socialButtonsProviderInitialIcon],
                        elementId: n.descriptors.socialButtonsProviderInitialIcon.setId(r),
                        sx: e => ({ ...h.common.centeredFlex("inline-flex"),
                            width: e.space.$4,
                            height: e.space.$4,
                            borderRadius: e.radii.$sm,
                            color: e.colors.$colorTextOnPrimaryBackground,
                            backgroundColor: e.colors.$primary500
                        }),
                        ...o,
                        children: (0, a.tZ)(n.Text, {
                            as: "span",
                            variant: "buttonSmall",
                            sx: { ...h.common.centeredFlex("inline-flex"),
                                width: "100%"
                            },
                            children: t[0].toUpperCase()
                        })
                    })
                };
            var S = r(2710);
            let C = e => {
                let {
                    size: t = 200,
                    url: r,
                    ...o
                } = e;
                return (0, a.tZ)(n.Flex, {
                    elementDescriptor: n.descriptors.qrCodeRow,
                    ...o,
                    children: (0, a.tZ)(n.Flex, {
                        elementDescriptor: n.descriptors.qrCodeContainer,
                        sx: e => ({
                            backgroundColor: "white",
                            padding: e.space.$2x5
                        }),
                        children: (0, a.tZ)(S.tv, {
                            value: r || "",
                            size: t
                        })
                    })
                })
            };
            r(6749);
            var _ = r(4914),
                k = r(2539);
            let $ = (0, o.withCardStateProvider)(e => {
                let {
                    title: t,
                    messageLine1: r,
                    messageLine2: i,
                    deleteResource: l,
                    onSuccess: s,
                    onReset: c
                } = e, d = (0, o.useCardState)(), [u] = (0, _.WZ)(l), p = async () => {
                    try {
                        await u().then(s)
                    } catch (e) {
                        (0, k.S3)(e, [], d.setError)
                    }
                };
                return (0, a.tZ)(o.FormContainer, {
                    headerTitle: t,
                    headerSubtitle: r,
                    children: (0, a.BX)(o.Form.Root, {
                        onSubmit: p,
                        children: [i ? (0, a.tZ)(n.Text, {
                            colorScheme: "secondary",
                            localizationKey: i
                        }) : null, (0, a.tZ)(o.FormButtons, {
                            submitLabel: (0, n.localizationKeys)("userProfile.formButtonPrimary__remove"),
                            colorScheme: "danger",
                            onReset: c
                        })]
                    })
                })
            });
            var I = r(3423),
                P = r(4676);
            let A = (0, o.withCardStateProvider)(e => (0, a.tZ)(n.Flow.Part, {
                    part: "ssoCallback",
                    children: (0, a.tZ)(B, { ...e
                    })
                })),
                B = e => {
                    let {
                        handleRedirectCallback: t
                    } = (0, _.cL)(), {
                        navigate: r
                    } = (0, P.useRouter)(), i = (0, o.useCardState)();
                    return c.useEffect(() => {
                        let n;
                        return t({ ...e
                        }, r).catch(e => {
                            (0, k.S3)(e, [], i.setError), n = setTimeout(() => void r("../"), 4e3)
                        }), () => clearTimeout(n)
                    }, [k.S3, t]), (0, a.tZ)(n.Flow.Part, {
                        part: "ssoCallback",
                        children: (0, a.BX)(o.Card.Root, {
                            children: [(0, a.BX)(o.Card.Content, {
                                children: [(0, a.tZ)(o.Card.Alert, {
                                    children: i.error
                                }), (0, a.tZ)(o.LoadingCardContainer, {}), (0, a.tZ)(I.S, {})]
                            }), (0, a.tZ)(o.Card.Footer, {})]
                        })
                    })
                };
            var T = r(1402),
                Z = r(5274),
                R = r(1235),
                z = r(7571);

            function L(e, t, r, n) {
                let o = e.displayName || e.name || "Component";
                e.displayName = o;
                let i = o => {
                    let {
                        navigate: i
                    } = (0, P.useRouter)(), l = (0, _.cL)(), s = (0, z.useEnvironment)(), d = (0, z.useOptions)(), u = t(l, s, d);
                    return (c.useEffect(() => {
                        u && (n && (0, T.kZ)(l.publishableKey) && console.info(n), i(r({
                            clerk: l,
                            environment: s,
                            options: d
                        })))
                    }, []), u) ? null : (0, a.tZ)(e, { ...o
                    })
                };
                return i.displayName = "withRedirect(".concat(o, ")"), i
            }
            let E = e => {
                    let t = e.displayName || e.name || "Component";
                    e.displayName = t;
                    let r = t => {
                        let r = (0, z.useSignInContext)();
                        return L(e, R.So, e => {
                            let {
                                clerk: t
                            } = e;
                            return r.afterSignInUrl || t.buildAfterSignInUrl()
                        }, Z.q.cannotRenderSignInComponentWhenSessionExists)(t)
                    };
                    return r.displayName = "withRedirectToAfterSignIn(".concat(t, ")"), r
                },
                D = e => {
                    let t = e.displayName || e.name || "Component";
                    e.displayName = t;
                    let r = t => {
                        let r = (0, z.useSignUpContext)();
                        return L(e, R.So, e => {
                            let {
                                clerk: t
                            } = e;
                            return r.afterSignUpUrl || t.buildAfterSignUpUrl()
                        }, Z.q.cannotRenderSignUpComponentWhenSessionExists)(t)
                    };
                    return r.displayName = "withRedirectToAfterSignUp(".concat(t, ")"), r
                },
                O = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            defaultStep: t = 0,
                            onNextStep: r
                        } = e,
                        [n, o] = c.useState(t),
                        a = c.useCallback(() => {
                            null == r || r(), o(e => e + 1)
                        }, []);
                    return {
                        nextStep: a,
                        prevStep: c.useCallback(() => o(e => e - 1), []),
                        goToStep: c.useCallback(e => o(e), []),
                        props: {
                            step: n
                        }
                    }
                },
                F = e => {
                    let {
                        step: t,
                        children: r
                    } = e;
                    return (0, a.tZ)(o.Animated, {
                        children: c.Children.toArray(r)[t]
                    })
                }
        },
        6749: function(e, t, r) {
            r.d(t, {
                F_: () => s,
                Uu: () => i,
                X8: () => o,
                wT: () => l,
                zg: () => a
            });
            var n = r(6971);
            let o = "/sso-callback",
                a = "/verify";

            function i(e) {
                let {
                    ctx: t,
                    baseUrl: r = "",
                    intent: n = "sign-in"
                } = e, {
                    routing: o,
                    authQueryString: i,
                    path: l
                } = t;
                return s({
                    routing: o,
                    baseUrl: r,
                    authQueryString: i,
                    path: l,
                    endpoint: "isCombinedFlow" in t && t.isCombinedFlow && "sign-up" === n ? "/create".concat(a) : a
                })
            }

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    {
                        routing: r,
                        authQueryString: n,
                        path: a
                    } = e;
                return s({
                    routing: r,
                    baseUrl: t,
                    authQueryString: n,
                    path: a,
                    endpoint: o
                })
            }
            let s = e => {
                    let {
                        routing: t,
                        authQueryString: r,
                        baseUrl: n,
                        path: o,
                        endpoint: a
                    } = e;
                    return t && "hash" !== t ? "path" === t ? d(o || "", r, a) : u(n || "", r, a) : c(r, a)
                },
                c = (e, t) => (0, n.KV)({
                    hash: t + (e ? "?".concat(e) : "")
                }, {
                    stringify: !0
                }),
                d = (e, t, r) => (0, n.KV)({
                    pathname: e + r,
                    ...t ? {
                        search: "?" + t
                    } : {}
                }, {
                    stringify: !0
                }),
                u = (e, t, r) => (0, n.KV)({
                    base: e,
                    hash: r + (t ? "?".concat(t) : "")
                }, {
                    stringify: !0
                })
        },
        1673: function(e, t, r) {
            r.d(t, {
                Zb: () => a,
                bm: () => o,
                xM: () => n
            });
            let n = {
                    ACCOUNT: "account",
                    SECURITY: "security"
                },
                o = {
                    GENERAL: "general",
                    MEMBERS: "members"
                },
                a = {
                    MANAGE_ACCOUNT: "manageAccount",
                    SIGN_OUT: "signOut"
                }
        },
        5747: function(e, t, r) {
            r.d(t, {
                O: () => s,
                u: () => l
            });
            var n = r(9755),
                o = r(9144),
                a = r(8555);
            let i = o.createContext(null);

            function l(e) {
                let {
                    children: t,
                    value: r
                } = e;
                return (0, n.tZ)(i.Provider, {
                    value: r,
                    children: t
                })
            }

            function s() {
                let e = o.useContext(i);
                return (0, a.LB)(e, "EnvironmentProvider"), e
            }
        },
        7571: function(e, t, r) {
            r.r(t), r.d(t, {
                CreateOrganizationContext: () => z,
                withCoreSessionSwitchGuard: () => H,
                UserButtonContext: () => k,
                ComponentContextProvider: () => U,
                useUserButtonContext: () => $,
                OrganizationSwitcherContext: () => I,
                useOptions: () => N,
                OptionsContext: () => V,
                SignInContext: () => h,
                UserVerificationContext: () => S,
                useOrganizationListContext: () => B,
                useSignInContext: () => g,
                useUserProfileContext: () => w,
                WaitlistContext: () => F,
                useOrganizationProfileContext: () => R,
                useCoreSignIn: () => X,
                useSignUpContext: () => v,
                useEnvironment: () => j.O,
                AcceptedInvitationsProvider: () => G,
                GoogleOneTapContext: () => E,
                useWaitlistContext: () => M,
                withCoreUserGuard: () => i,
                useCreateOrganizationContext: () => L,
                useAcceptedInvitations: () => J,
                OrganizationListContext: () => A,
                useCoreSignUp: () => K,
                useSignOutContext: () => b,
                OrganizationProfileContext: () => Z,
                EnvironmentProvider: () => j.u,
                SignUpContext: () => f,
                CoreClerkContextWrapper: () => Y,
                OptionsProvider: () => W,
                useOrganizationSwitcherContext: () => P,
                UserProfileContext: () => x,
                useGoogleOneTapContext: () => D,
                useUserVerification: () => C
            });
            var n = r(9755),
                o = r(4914),
                a = r(9144);

            function i(e) {
                let t = t => (0, o.SE)() ? (0, n.tZ)(e, { ...t
                    }) : null,
                    r = e.displayName || e.name || "Component";
                return e.displayName = r, t.displayName = r, t
            }
            var l = r(4944),
                s = r(753),
                c = r(1235),
                d = r(1607),
                u = r(6749),
                p = r(4676),
                m = r(8555);
            let h = (0, a.createContext)(null),
                g = () => {
                    var e;
                    let t = (0, a.useContext)(h),
                        {
                            navigate: r
                        } = (0, p.useRouter)(),
                        {
                            displayConfig: n,
                            userSettings: i
                        } = (0, j.O)(),
                        {
                            queryParams: g,
                            queryString: f
                        } = (0, p.useRouter)(),
                        v = i.signUp.mode,
                        b = N(),
                        y = (0, o.cL)();
                    if (null === t || "SignIn" !== t.componentName) throw Error("Clerk: useSignInContext called outside of the mounted SignIn component.");
                    let x = "restricted" !== v && !!(!b.signUpUrl && b.signInUrl && !(0, l.sD)(b.signInUrl)) && !1 !== t.withSignUp || t.withSignUp || !1,
                        {
                            componentName: w,
                            mode: S,
                            ...C
                        } = t,
                        _ = (0, a.useMemo)(() => (0, m.x6)(f, s.im), []),
                        k = new d.O(b, { ...C,
                            signInFallbackRedirectUrl: C.fallbackRedirectUrl,
                            signInForceRedirectUrl: C.forceRedirectUrl
                        }, g, S),
                        $ = y.buildUrlWithAuth(k.getAfterSignInUrl()),
                        I = y.buildUrlWithAuth(k.getAfterSignUpUrl()),
                        P = "path" === C.routing && C.path || b.signInUrl || n.signInUrl,
                        A = x ? "path" === C.routing && C.path || b.signUpUrl || n.signUpUrl : C.signUpUrl || b.signUpUrl || n.signUpUrl,
                        B = C.waitlistUrl || b.waitlistUrl || n.waitlistUrl,
                        T = k.getPreservedSearchParams();
                    P = (0, c.KV)({
                        base: P,
                        hashSearchParams: [g, T]
                    }, {
                        stringify: !0
                    }), A = (0, c.KV)({
                        base: A,
                        hashSearchParams: [g, T]
                    }, {
                        stringify: !0
                    }), B = (0, c.KV)({
                        base: B,
                        hashSearchParams: [g, T]
                    }, {
                        stringify: !0
                    });
                    let Z = k.toSearchParams().toString(),
                        R = (0, u.F_)({
                            routing: C.routing,
                            baseUrl: A,
                            authQueryString: Z,
                            path: C.path,
                            endpoint: x ? "/create" + u.zg : u.zg
                        }),
                        z = (0, u.F_)({
                            routing: C.routing,
                            baseUrl: A,
                            authQueryString: Z,
                            path: C.path,
                            endpoint: x ? "/create" + u.X8 : u.X8
                        });
                    x && (A = (0, c.KV)({
                        base: P,
                        hashPath: "/create",
                        hashSearchParams: [g, T]
                    }, {
                        stringify: !0
                    }));
                    let L = (0, c.KV)({
                        base: A,
                        hashPath: "/continue"
                    }, {
                        stringify: !0
                    });
                    return { ...C,
                        transferable: null === (e = C.transferable) || void 0 === e || e,
                        componentName: w,
                        signUpUrl: A,
                        signInUrl: P,
                        waitlistUrl: B,
                        afterSignInUrl: $,
                        afterSignUpUrl: I,
                        emailLinkRedirectUrl: R,
                        ssoCallbackUrl: z,
                        navigateAfterSignIn: () => r($),
                        signUpContinueUrl: L,
                        queryParams: g,
                        initialValues: { ...C.initialValues,
                            ..._
                        },
                        authQueryString: Z,
                        isCombinedFlow: x
                    }
                },
                f = (0, a.createContext)(null),
                v = () => {
                    var e, t;
                    let r = (0, a.useContext)(f),
                        {
                            navigate: n
                        } = (0, p.useRouter)(),
                        {
                            displayConfig: i,
                            userSettings: h
                        } = (0, j.O)(),
                        {
                            queryParams: g,
                            queryString: v
                        } = (0, p.useRouter)(),
                        b = h.signUp.mode,
                        y = N(),
                        x = (0, o.cL)(),
                        w = "restricted" !== b && !!(!y.signUpUrl && y.signInUrl && !(0, l.sD)(y.signInUrl) && "public" === b),
                        S = (0, a.useMemo)(() => (0, m.x6)(v, s.bf), []);
                    if (!r || "SignUp" !== r.componentName) throw Error("Clerk: useSignUpContext called outside of the mounted SignUp component.");
                    let {
                        componentName: C,
                        mode: _,
                        ...k
                    } = r, $ = new d.O(y, { ...k,
                        signUpFallbackRedirectUrl: k.fallbackRedirectUrl,
                        signUpForceRedirectUrl: k.forceRedirectUrl
                    }, g, _), I = x.buildUrlWithAuth($.getAfterSignUpUrl()), P = x.buildUrlWithAuth($.getAfterSignInUrl()), A = "path" === k.routing && k.path || y.signUpUrl || i.signUpUrl, B = k.signInUrl || y.signInUrl || i.signInUrl, T = k.waitlistUrl || y.waitlistUrl || i.waitlistUrl, Z = $.getPreservedSearchParams();
                    B = (0, c.KV)({
                        base: B,
                        hashSearchParams: [g, Z]
                    }, {
                        stringify: !0
                    }), A = (0, c.KV)({
                        base: A,
                        hashSearchParams: [g, Z]
                    }, {
                        stringify: !0
                    }), T = (0, c.KV)({
                        base: T,
                        hashSearchParams: [g, Z]
                    }, {
                        stringify: !0
                    });
                    let R = $.toSearchParams().toString(),
                        z = null !== (e = k.emailLinkRedirectUrl) && void 0 !== e ? e : (0, u.F_)({
                            routing: k.routing,
                            baseUrl: A,
                            authQueryString: R,
                            path: k.path,
                            endpoint: w ? "/create" + u.zg : u.zg
                        }),
                        L = null !== (t = k.ssoCallbackUrl) && void 0 !== t ? t : (0, u.F_)({
                            routing: k.routing,
                            baseUrl: A,
                            authQueryString: R,
                            path: k.path,
                            endpoint: w ? "/create" + u.X8 : u.X8
                        }),
                        E = (0, c.KV)({
                            base: B,
                            hashPath: "/factor-two"
                        }, {
                            stringify: !0
                        });
                    return { ...k,
                        componentName: C,
                        signInUrl: B,
                        signUpUrl: A,
                        waitlistUrl: T,
                        secondFactorUrl: E,
                        afterSignUpUrl: I,
                        afterSignInUrl: P,
                        emailLinkRedirectUrl: z,
                        ssoCallbackUrl: L,
                        navigateAfterSignUp: () => n(I),
                        queryParams: g,
                        initialValues: { ...k.initialValues,
                            ...S
                        },
                        authQueryString: R,
                        isCombinedFlow: w
                    }
                },
                b = () => {
                    let {
                        navigate: e
                    } = (0, p.useRouter)(), t = (0, o.cL)();
                    return {
                        navigateAfterSignOut: () => e(t.buildAfterSignOutUrl()),
                        navigateAfterMultiSessionSingleSignOutUrl: () => e(t.buildAfterMultiSessionSingleSignOutUrl()),
                        afterSignOutUrl: t.buildAfterSignOutUrl(),
                        afterMultiSessionSingleSignOutUrl: t.buildAfterMultiSessionSingleSignOutUrl()
                    }
                };
            var y = r(2539);
            let x = (0, a.createContext)(null),
                w = () => {
                    let e = (0, a.useContext)(x),
                        {
                            queryParams: t
                        } = (0, p.useRouter)(),
                        r = (0, o.cL)();
                    if (!e || "UserProfile" !== e.componentName) throw Error("Clerk: useUserProfileContext called outside of the mounted UserProfile component.");
                    let {
                        componentName: n,
                        customPages: i,
                        ...l
                    } = e, s = (0, a.useMemo)(() => (0, y.BG)(i || [], r), [i]);
                    return { ...l,
                        pages: s,
                        componentName: n,
                        queryParams: t,
                        authQueryString: ""
                    }
                },
                S = (0, a.createContext)(null),
                C = () => {
                    let e = (0, a.useContext)(S);
                    if (!e || "UserVerification" !== e.componentName) throw Error("Clerk: useUserVerificationContext called outside of the mounted UserVerification component.");
                    let {
                        componentName: t,
                        ...r
                    } = e;
                    return { ...r,
                        componentName: t
                    }
                };
            var _ = r(1188);
            let k = (0, a.createContext)(null),
                $ = () => {
                    let e = (0, a.useContext)(k),
                        t = (0, o.cL)(),
                        {
                            navigate: r
                        } = (0, p.useRouter)(),
                        {
                            displayConfig: n
                        } = (0, j.O)(),
                        i = N();
                    if (!e || "UserButton" !== e.componentName) throw Error("Clerk: useUserButtonContext called outside of the mounted UserButton component.");
                    let {
                        componentName: l,
                        customMenuItems: s,
                        ...c
                    } = e, d = c.signInUrl || i.signInUrl || n.signInUrl, u = c.userProfileUrl || n.userProfileUrl;
                    c.afterSignOutUrl && (0, _.x6)(c, "afterSignOutUrl", "Move 'afterSignOutUrl' to '<ClerkProvider/>");
                    let m = c.afterSignOutUrl || t.buildAfterSignOutUrl();
                    c.afterSignOutUrl && (0, _.x6)(c, "afterMultiSessionSingleSignOutUrl", "Move 'afterMultiSessionSingleSignOutUrl' to '<ClerkProvider/>");
                    let h = c.afterMultiSessionSingleSignOutUrl || t.buildAfterMultiSessionSingleSignOutUrl(),
                        g = c.afterSwitchSessionUrl || n.afterSwitchSessionUrl,
                        f = c.userProfileUrl && !c.userProfileMode ? "navigation" : c.userProfileMode,
                        v = (0, a.useMemo)(() => (0, y.c8)(s || [], t), []);
                    return { ...c,
                        componentName: l,
                        navigateAfterMultiSessionSingleSignOut: () => t.redirectWithAuth(h),
                        navigateAfterSignOut: () => r(m),
                        signInUrl: d,
                        userProfileUrl: u,
                        afterMultiSessionSingleSignOutUrl: h,
                        afterSignOutUrl: m,
                        afterSwitchSessionUrl: g,
                        userProfileMode: f || "modal",
                        menutItems: v
                    }
                },
                I = (0, a.createContext)(null),
                P = () => {
                    let e = (0, a.useContext)(I),
                        {
                            navigate: t
                        } = (0, p.useRouter)(),
                        {
                            displayConfig: r
                        } = (0, j.O)();
                    if (!e || "OrganizationSwitcher" !== e.componentName) throw Error("Clerk: useOrganizationSwitcherContext called outside OrganizationSwitcher.");
                    let {
                        componentName: n,
                        ...o
                    } = e, i = o.afterCreateOrganizationUrl || r.afterCreateOrganizationUrl, l = o.afterLeaveOrganizationUrl || r.afterLeaveOrganizationUrl, s = e => {
                        let {
                            organization: r,
                            user: n
                        } = e, o = c({
                            organization: r,
                            user: n
                        });
                        return o ? t(o) : Promise.resolve()
                    }, c = e => {
                        let {
                            organization: t,
                            user: r
                        } = e;
                        return "function" == typeof o.afterSelectPersonalUrl && r ? o.afterSelectPersonalUrl(r) : "function" == typeof o.afterSelectOrganizationUrl && t ? o.afterSelectOrganizationUrl(t) : o.afterSelectPersonalUrl && r ? (0, m.Q8)({
                            urlWithParam: o.afterSelectPersonalUrl,
                            entity: r
                        }) : o.afterSelectOrganizationUrl && t ? (0, m.Q8)({
                            urlWithParam: o.afterSelectOrganizationUrl,
                            entity: t
                        }) : void 0
                    }, d = o.organizationProfileUrl && !o.organizationProfileMode ? "navigation" : o.organizationProfileMode, u = o.createOrganizationUrl && !o.createOrganizationMode ? "navigation" : o.createOrganizationMode;
                    return { ...o,
                        hidePersonal: o.hidePersonal || !1,
                        organizationProfileMode: d || "modal",
                        createOrganizationMode: u || "modal",
                        skipInvitationScreen: o.skipInvitationScreen || !1,
                        hideSlug: o.hideSlug || !1,
                        afterCreateOrganizationUrl: i,
                        afterLeaveOrganizationUrl: l,
                        navigateOrganizationProfile: () => t(o.organizationProfileUrl || r.organizationProfileUrl),
                        navigateCreateOrganization: () => t(o.createOrganizationUrl || r.createOrganizationUrl),
                        navigateAfterSelectOrganization: e => s({
                            organization: e
                        }),
                        navigateAfterSelectPersonal: e => s({
                            user: e
                        }),
                        afterSelectOrganizationUrl: e => c({
                            organization: e
                        }),
                        afterSelectPersonalUrl: e => c({
                            user: e
                        }),
                        componentName: n
                    }
                },
                A = (0, a.createContext)(null),
                B = () => {
                    let e = (0, a.useContext)(A),
                        {
                            navigate: t
                        } = (0, p.useRouter)(),
                        {
                            displayConfig: r
                        } = (0, j.O)();
                    if (!e || "OrganizationList" !== e.componentName) throw Error("Clerk: useOrganizationListContext called outside OrganizationList.");
                    let {
                        componentName: n,
                        ...o
                    } = e, i = o.afterCreateOrganizationUrl || r.afterCreateOrganizationUrl, l = e => {
                        let {
                            organization: r,
                            user: n
                        } = e;
                        return "function" == typeof o.afterSelectPersonalUrl && n ? t(o.afterSelectPersonalUrl(n)) : "function" == typeof o.afterSelectOrganizationUrl && r ? t(o.afterSelectOrganizationUrl(r)) : o.afterSelectPersonalUrl && n ? t((0, m.Q8)({
                            urlWithParam: o.afterSelectPersonalUrl,
                            entity: n
                        })) : o.afterSelectOrganizationUrl && r ? t((0, m.Q8)({
                            urlWithParam: o.afterSelectOrganizationUrl,
                            entity: r
                        })) : Promise.resolve()
                    };
                    return { ...o,
                        afterCreateOrganizationUrl: i,
                        skipInvitationScreen: o.skipInvitationScreen || !1,
                        hideSlug: o.hideSlug || !1,
                        hidePersonal: o.hidePersonal || !1,
                        navigateAfterCreateOrganization: e => "function" == typeof o.afterCreateOrganizationUrl ? t(o.afterCreateOrganizationUrl(e)) : o.afterCreateOrganizationUrl ? t((0, m.Q8)({
                            urlWithParam: o.afterCreateOrganizationUrl,
                            entity: e
                        })) : t(r.afterCreateOrganizationUrl),
                        navigateAfterSelectOrganization: e => l({
                            organization: e
                        }),
                        navigateAfterSelectPersonal: e => l({
                            user: e
                        }),
                        componentName: n
                    }
                };
            var T = r(1673);
            let Z = (0, a.createContext)(null),
                R = () => {
                    let e = (0, a.useContext)(Z),
                        {
                            navigate: t
                        } = (0, p.useRouter)(),
                        {
                            displayConfig: r
                        } = (0, j.O)(),
                        n = (0, o.cL)();
                    if (!e || "OrganizationProfile" !== e.componentName) throw Error("Clerk: useOrganizationProfileContext called outside OrganizationProfile.");
                    let {
                        componentName: i,
                        customPages: l,
                        ...s
                    } = e, c = (0, a.useMemo)(() => (0, y.sn)(l || [], n), [l]), d = c.routes[0].id === T.bm.MEMBERS, u = c.routes[0].id === T.bm.GENERAL;
                    return { ...s,
                        pages: c,
                        navigateAfterLeaveOrganization: () => t(s.afterLeaveOrganizationUrl || r.afterLeaveOrganizationUrl),
                        componentName: i,
                        navigateToGeneralPageRoot: () => t(u ? "../" : d ? "./organization-general" : "../organization-general"),
                        isMembersPageRoot: d,
                        isGeneralPageRoot: u
                    }
                },
                z = (0, a.createContext)(null),
                L = () => {
                    let e = (0, a.useContext)(z),
                        {
                            navigate: t
                        } = (0, p.useRouter)(),
                        {
                            displayConfig: r
                        } = (0, j.O)();
                    if (!e || "CreateOrganization" !== e.componentName) throw Error("Clerk: useCreateOrganizationContext called outside CreateOrganization.");
                    let {
                        componentName: n,
                        ...o
                    } = e;
                    return { ...o,
                        skipInvitationScreen: o.skipInvitationScreen || !1,
                        hideSlug: o.hideSlug || !1,
                        navigateAfterCreateOrganization: e => "function" == typeof o.afterCreateOrganizationUrl ? t(o.afterCreateOrganizationUrl(e)) : o.afterCreateOrganizationUrl ? t((0, m.Q8)({
                            urlWithParam: o.afterCreateOrganizationUrl,
                            entity: e
                        })) : t(r.afterCreateOrganizationUrl),
                        componentName: n
                    }
                },
                E = (0, a.createContext)(null),
                D = () => {
                    let e = (0, a.useContext)(E),
                        t = N(),
                        {
                            displayConfig: r
                        } = (0, j.O)(),
                        {
                            queryParams: n
                        } = (0, p.useRouter)();
                    if (!e || "GoogleOneTap" !== e.componentName) throw Error("Clerk: useGoogleOneTapContext called outside GoogleOneTap.");
                    let {
                        componentName: o,
                        ...i
                    } = e, l = (0, a.useCallback)(e => {
                        let o = new d.O(t, { ...i,
                                signInFallbackRedirectUrl: e,
                                signUpFallbackRedirectUrl: e
                            }, n),
                            a = t.signUpUrl || r.signUpUrl,
                            l = t.signInUrl || r.signInUrl,
                            s = o.getPreservedSearchParams();
                        l = (0, c.KV)({
                            base: l,
                            hashSearchParams: [n, s]
                        }, {
                            stringify: !0
                        }), a = (0, c.KV)({
                            base: a,
                            hashSearchParams: [n, s]
                        }, {
                            stringify: !0
                        });
                        let u = o.getAfterSignInUrl(),
                            p = o.getAfterSignUpUrl(),
                            m = (0, c.KV)({
                                base: a,
                                hashPath: "/continue",
                                hashSearch: new URLSearchParams({
                                    sign_up_force_redirect_url: p
                                }).toString()
                            }, {
                                stringify: !0
                            }),
                            h = (0, c.KV)({
                                base: l,
                                hashPath: "/factor-one",
                                hashSearch: new URLSearchParams({
                                    sign_in_force_redirect_url: u
                                }).toString()
                            }, {
                                stringify: !0
                            }),
                            g = (0, c.KV)({
                                base: l,
                                hashPath: "/factor-two",
                                hashSearch: new URLSearchParams({
                                    sign_in_force_redirect_url: u
                                }).toString()
                            }, {
                                stringify: !0
                            });
                        return {
                            signInUrl: l,
                            signUpUrl: a,
                            firstFactorUrl: h,
                            secondFactorUrl: g,
                            continueSignUpUrl: m,
                            signInForceRedirectUrl: u,
                            signUpForceRedirectUrl: p
                        }
                    }, [i, r.signInUrl, r.signUpUrl, t, n]);
                    return { ...i,
                        componentName: o,
                        generateCallbackUrls: l
                    }
                },
                O = ["email_address"],
                F = (0, a.createContext)(null),
                M = () => {
                    let e = (0, a.useContext)(F),
                        {
                            displayConfig: t
                        } = (0, j.O)(),
                        r = N(),
                        {
                            queryString: n
                        } = (0, p.useRouter)(),
                        o = (0, a.useMemo)(() => (0, m.x6)(n, O), []);
                    if (!e || "Waitlist" !== e.componentName) throw Error("Clerk: useWaitlistContext called outside Waitlist.");
                    let {
                        componentName: i,
                        ...l
                    } = e, s = l.signInUrl || r.signInUrl || t.signInUrl;
                    return s = (0, c.KV)({
                        base: s
                    }, {
                        stringify: !0
                    }), { ...l,
                        componentName: i,
                        signInUrl: s,
                        initialValues: { ...o
                        }
                    }
                };

            function U(e) {
                let {
                    componentName: t,
                    props: r,
                    children: o
                } = e;
                switch (t) {
                    case "SignIn":
                        return (0, n.tZ)(h.Provider, {
                            value: {
                                componentName: t,
                                ...r
                            },
                            children: o
                        });
                    case "SignUp":
                        return (0, n.tZ)(f.Provider, {
                            value: {
                                componentName: t,
                                ...r
                            },
                            children: o
                        });
                    case "UserProfile":
                        return (0, n.tZ)(x.Provider, {
                            value: {
                                componentName: t,
                                ...r
                            },
                            children: o
                        });
                    case "UserVerification":
                        return (0, n.tZ)(S.Provider, {
                            value: {
                                componentName: t,
                                ...r
                            },
                            children: o
                        });
                    case "UserButton":
                        return (0, n.tZ)(k.Provider, {
                            value: {
                                componentName: t,
                                ...r
                            },
                            children: o
                        });
                    case "OrganizationSwitcher":
                        return (0, n.tZ)(I.Provider, {
                            value: {
                                componentName: t,
                                ...r
                            },
                            children: o
                        });
                    case "OrganizationList":
                        return (0, n.tZ)(A.Provider, {
                            value: {
                                componentName: t,
                                ...r
                            },
                            children: o
                        });
                    case "OrganizationProfile":
                        return (0, n.tZ)(Z.Provider, {
                            value: {
                                componentName: t,
                                ...r
                            },
                            children: o
                        });
                    case "CreateOrganization":
                        return (0, n.tZ)(z.Provider, {
                            value: {
                                componentName: t,
                                ...r
                            },
                            children: o
                        });
                    case "GoogleOneTap":
                        return (0, n.tZ)(E.Provider, {
                            value: {
                                componentName: t,
                                ...r
                            },
                            children: o
                        });
                    case "Waitlist":
                        return (0, n.tZ)(F.Provider, {
                            value: {
                                componentName: t,
                                ...r
                            },
                            children: o
                        });
                    default:
                        throw Error("Unknown component context: ".concat(t))
                }
            }
            var j = r(5747);
            let V = a.createContext({});

            function W(e) {
                let {
                    children: t,
                    value: r
                } = e;
                return (0, n.tZ)(V.Provider, {
                    value: r,
                    children: t
                })
            }

            function N() {
                let e = a.useContext(V);
                if (void 0 === e) throw Error("useOptions must be used within an OptionsContext");
                return e
            }

            function H(e) {
                let t = t => void 0 === (0, o.Tt)() ? null : (0, n.tZ)(e, { ...t
                    }),
                    r = e.displayName || e.name || "Component";
                return e.displayName = r, t.displayName = r, t
            }

            function X() {
                let e = (0, o.sX)();
                return (0, o.LB)(e, o.RY), e.signIn
            }

            function K() {
                let e = (0, o.sX)();
                return (0, o.LB)(e, o.RY), e.signUp
            }

            function Y(e) {
                let t = e.clerk;
                (0, m.MN)(t);
                let [r, i] = a.useState({
                    client: t.client,
                    session: t.session,
                    user: t.user,
                    organization: t.organization
                });
                a.useEffect(() => t.addListener(e => i({ ...e
                })), []);
                let {
                    client: l,
                    session: s,
                    user: c,
                    organization: d
                } = r, u = a.useMemo(() => ({
                    value: t
                }), []), p = a.useMemo(() => ({
                    value: l
                }), [l]), h = a.useMemo(() => ({
                    value: s
                }), [s]), g = a.useMemo(() => ({
                    value: c
                }), [c]), f = a.useMemo(() => ({
                    value: {
                        organization: d
                    }
                }), [d]);
                return (0, n.tZ)(o.b5.Provider, {
                    value: u,
                    children: (0, n.tZ)(o.RY.Provider, {
                        value: p,
                        children: (0, n.tZ)(o.B3.Provider, {
                            value: h,
                            children: (0, n.tZ)(o.f0, { ...f.value,
                                swrConfig: e.swrConfig,
                                children: (0, n.tZ)(o.St.Provider, {
                                    value: g,
                                    children: e.children
                                })
                            })
                        })
                    })
                })
            }
            let q = (0, a.createContext)({
                acceptedInvitations: [],
                setAcceptedInvitations: () => {}
            });

            function G(e) {
                let {
                    children: t
                } = e, [r, o] = (0, a.useState)([]);
                return (0, n.tZ)(q.Provider, {
                    value: {
                        acceptedInvitations: r,
                        setAcceptedInvitations: o
                    },
                    children: t
                })
            }

            function J() {
                return (0, a.useContext)(q)
            }
        },
        8555: function(e, t, r) {
            r.d(t, {
                LB: () => i,
                MN: () => a,
                Q8: () => s,
                x6: () => l
            });
            var n = r(5027),
                o = r(4152);

            function a(e) {
                e || (0, o.G6)()
            }

            function i(e, t) {
                e || (0, o.k2)(t)
            }

            function l(e, t) {
                let r = {};
                return new URLSearchParams(e).forEach((e, o) => {
                    t.includes(o) && "string" == typeof e && (r[(0, n.TD)(o)] = e)
                }), r
            }
            let s = (0, r(1235).OY)({
                regex: /:(\w+)/
            })
        },
        6092: function(e, t, r) {
            r.d(t, {
                M: () => L,
                x: () => E
            });
            var n = r(9755),
                o = r(4914);
            r(9144);
            var a = r(1826),
                i = r(39);
            let l = "0px 0px 0px 1px",
                s = e => "".concat(l, " ").concat(e, ", 0px 1px 1px 0px rgba(255, 255, 255, 0.07) inset, 0px 2px 3px 0px rgba(34, 42, 53, 0.20), 0px 1px 1px 0px rgba(0, 0, 0, 0.24)"),
                c = e => "".concat(l, " ").concat(e, ", 0px 2px 3px -1px rgba(0, 0, 0, 0.08), 0px 1px 0px 0px rgba(0, 0, 0, 0.02)"),
                d = e => ({
                    borderWidth: 0,
                    boxShadow: "".concat(e.shadows.$cardContentShadow, ", ").concat(l, " ").concat(e.colors.$neutralAlpha50)
                }),
                u = (e, t) => {
                    let r = ["0px 0px 0px 1px ".concat(t.idle1), e.shadows.$input.replace("{{color}}", t.idle2)].toString(),
                        n = ["0px 0px 0px 1px ".concat(t.hover1), e.shadows.$input.replace("{{color}}", t.hover2)].toString();
                    return {
                        boxShadow: r,
                        "&:hover": {
                            boxShadow: n
                        },
                        "&:focus-within": {
                            boxShadow: [n, e.shadows.$focusRing.replace("{{color}}", t.focus)].toString()
                        }
                    }
                },
                p = (e, t) => {
                    let r = ["0px 0px 0px 1px ".concat(t.idle1), e.shadows.$input.replace("{{color}}", t.idle2)].toString(),
                        n = ["0px 0px 0px 1px ".concat(t.hover1), e.shadows.$input.replace("{{color}}", t.hover2)].toString();
                    return {
                        boxShadow: r,
                        "&:hover": {
                            boxShadow: n
                        },
                        "&:focus-visible": {
                            boxShadow: [n, e.shadows.$focusRing.replace("{{color}}", t.focus)].toString()
                        }
                    }
                },
                m = e => ({
                    borderWidth: 0,
                    ...u(e, {
                        idle1: e.colors.$neutralAlpha150,
                        idle2: e.colors.$neutralAlpha100,
                        hover1: e.colors.$neutralAlpha300,
                        hover2: e.colors.$neutralAlpha150,
                        focus: e.colors.$neutralAlpha150
                    }),
                    '&[data-feedback="error"]': u(e, {
                        idle1: e.colors.$dangerAlpha400,
                        idle2: e.colors.$dangerAlpha200,
                        hover1: e.colors.$dangerAlpha500,
                        hover2: e.colors.$dangerAlpha200,
                        focus: e.colors.$dangerAlpha200
                    }),
                    '&[data-feedback="warning"]': u(e, {
                        idle1: e.colors.$warningAlpha400,
                        idle2: e.colors.$warningAlpha200,
                        hover1: e.colors.$warningAlpha500,
                        hover2: e.colors.$warningAlpha200,
                        focus: e.colors.$warningAlpha200
                    }),
                    '&[data-feedback="success"]': u(e, {
                        idle1: e.colors.$successAlpha400,
                        idle2: e.colors.$successAlpha200,
                        hover1: e.colors.$successAlpha500,
                        hover2: e.colors.$successAlpha200,
                        focus: e.colors.$successAlpha200
                    })
                }),
                h = {
                    elements: e => {
                        let {
                            theme: t
                        } = e;
                        return {
                            button: {
                                '&[data-variant="solid"]': {
                                    borderWidth: "0px",
                                    "&:after": {
                                        position: "absolute",
                                        content: '""',
                                        borderRadius: "inherit",
                                        zIndex: -1,
                                        inset: 0,
                                        opacity: 1,
                                        transitionProperty: t.transitionProperty.$common,
                                        transitionDuration: t.transitionDuration.$controls,
                                        background: "linear-gradient(180deg, ".concat(t.colors.$whiteAlpha150, " 0%, ").concat(t.colors.$transparent, " 100%)")
                                    },
                                    "&:hover::after": {
                                        opacity: 0
                                    },
                                    "&:active::after": {
                                        opacity: 1
                                    },
                                    '&[data-color="primary"]': {
                                        boxShadow: s(t.colors.$primary500),
                                        "&:focus": {
                                            boxShadow: [s(t.colors.$primary500), t.shadows.$focusRing.replace("{{color}}", t.colors.$neutralAlpha200)].toString()
                                        }
                                    },
                                    '&[data-color="danger"]': {
                                        boxShadow: s(t.colors.$danger500),
                                        "&:focus": {
                                            boxShadow: [s(t.colors.$danger500), t.shadows.$focusRing.replace("{{color}}", t.colors.$dangerAlpha200)].toString()
                                        }
                                    }
                                },
                                '&[data-variant="outline"]': {
                                    borderWidth: 0,
                                    boxShadow: c(t.colors.$neutralAlpha100),
                                    "&:focus": {
                                        boxShadow: [c(t.colors.$neutralAlpha100), t.shadows.$focusRing.replace("{{color}}", t.colors.$neutralAlpha200)].toString()
                                    }
                                }
                            },
                            badge: {
                                borderWidth: 0,
                                margin: "1px",
                                '&[data-color="primary"]': {
                                    boxShadow: "".concat(l, " ").concat(t.colors.$neutralAlpha150, ", ").concat(t.shadows.$badge)
                                },
                                '&[data-color="danger"]': {
                                    boxShadow: "".concat(l, " ").concat(t.colors.$dangerAlpha300, ", ").concat(t.shadows.$badge)
                                },
                                '&[data-color="success"]': {
                                    boxShadow: "".concat(l, " ").concat(t.colors.$successAlpha300, ", ").concat(t.shadows.$badge)
                                },
                                '&[data-color="warning"]': {
                                    boxShadow: "".concat(l, " ").concat(t.colors.$warningAlpha300, ", ").concat(t.shadows.$badge)
                                }
                            },
                            input: {
                                '&[data-variant="default"]': { ...m(t)
                                }
                            },
                            checkbox: { ...p(t, {
                                    idle1: t.colors.$neutralAlpha150,
                                    idle2: t.colors.$neutralAlpha100,
                                    hover1: t.colors.$neutralAlpha300,
                                    hover2: t.colors.$neutralAlpha150,
                                    focus: t.colors.$neutralAlpha150
                                }),
                                padding: t.space.$1,
                                width: t.sizes.$3x5,
                                height: t.sizes.$3x5,
                                appearance: "none",
                                borderRadius: t.radii.$sm,
                                border: "none",
                                "&:checked": {
                                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='16' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.25 8L6.5 9.75L9.75 4.25' stroke='".concat(t.colors.$whiteAlpha900, "' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E\")"),
                                    borderColor: t.colors.$transparent,
                                    backgroundColor: t.colors.$primary900,
                                    backgroundSize: "100% 100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                }
                            },
                            tagInputContainer: { ...m(t)
                            },
                            tagPillContainer: {
                                borderWidth: 0,
                                boxShadow: "".concat(l, " ").concat(t.colors.$neutralAlpha150, ", ").concat(t.shadows.$badge)
                            },
                            phoneInputBox: { ...m(t)
                            },
                            formInputGroup: { ...m(t)
                            },
                            selectSearchInput__countryCode: {
                                boxShadow: "none",
                                "&:focus": {
                                    boxShadow: "none"
                                }
                            },
                            cardBox: {
                                borderWidth: 0,
                                boxShadow: "".concat(t.shadows.$cardBoxShadow, ", ").concat(l, " ").concat(t.colors.$neutralAlpha100)
                            },
                            popoverBox: {
                                borderWidth: 0,
                                boxShadow: "".concat(t.shadows.$cardBoxShadow, ", ").concat(l, " ").concat(t.colors.$neutralAlpha100)
                            },
                            card: { ...d(t)
                            },
                            scrollBox: { ...d(t)
                            },
                            userButtonPopoverMain: { ...d(t)
                            },
                            organizationSwitcherPopoverMain: { ...d(t)
                            },
                            menuList: {
                                borderWidth: 0,
                                boxShadow: "".concat(t.shadows.$menuShadow, ", ").concat(l, " ").concat(t.colors.$neutralAlpha100)
                            },
                            actionCard: {
                                borderWidth: 0,
                                boxShadow: "".concat(t.shadows.$actionCardShadow, ", ").concat(l, " ").concat(t.colors.$neutralAlpha100)
                            },
                            table: {
                                borderWidth: 0,
                                boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(25, 28, 33, 0.12), 0px 0px 0px 1px ".concat(t.colors.$neutralAlpha100)
                            }
                        }
                    }
                };
            var g = r(2635),
                f = r(2539);
            let v = e => {
                    let t = e.variables || {},
                        r = (0, f.QD)(t.colorPrimary, "primary"),
                        n = (0, f.Ii)(null == r ? void 0 : r.primary500, "primaryAlpha"),
                        o = (0, f.QD)(t.colorDanger, "danger"),
                        a = (0, f.Ii)(null == o ? void 0 : o.danger500, "dangerAlpha"),
                        i = (0, f.QD)(t.colorSuccess, "success"),
                        l = (0, f.Ii)(null == i ? void 0 : i.success500, "successAlpha"),
                        s = (0, f.QD)(t.colorWarning, "warning"),
                        c = (0, f.Ii)(null == s ? void 0 : s.warning500, "warningAlpha");
                    return (0, f.Yb)({ ...r,
                        ...n,
                        ...o,
                        ...a,
                        ...i,
                        ...l,
                        ...s,
                        ...c,
                        ...(0, f.Ii)(t.colorNeutral, "neutralAlpha"),
                        primaryHover: f.O9.adjustForLightness(null == r ? void 0 : r.primary500),
                        colorTextOnPrimaryBackground: b(t.colorTextOnPrimaryBackground),
                        colorText: b(t.colorText),
                        colorTextSecondary: b(t.colorTextSecondary) || f.O9.makeTransparent(t.colorText, .35),
                        colorInputText: b(t.colorInputText),
                        colorBackground: b(t.colorBackground),
                        colorInputBackground: b(t.colorInputBackground),
                        colorShimmer: b(t.colorShimmer)
                    })
                },
                b = e => e ? f.O9.toHslaString(e) : void 0,
                y = e => {
                    let {
                        borderRadius: t
                    } = e.variables || {};
                    if (void 0 === t) return;
                    let r = "none" === t ? "0" : t,
                        {
                            numericValue: n,
                            unit: o = "rem"
                        } = _(r);
                    return {
                        sm: (.66 * n).toString() + o,
                        md: r,
                        lg: (1.33 * n).toString() + o,
                        xl: (2 * n).toString() + o
                    }
                },
                x = e => {
                    let {
                        spacingUnit: t
                    } = e.variables || {};
                    if (void 0 === t) return;
                    let {
                        numericValue: r,
                        unit: n
                    } = _(t);
                    return (0, f.sq)(g.Mx.map(e => {
                        let t = Number.parseFloat(e.replace("x", "."));
                        return [e, "".concat(t / .5 * .125 * r).concat(n)]
                    }))
                },
                w = e => {
                    let {
                        fontSize: t
                    } = e.variables || {};
                    if (void 0 === t) return;
                    let {
                        numericValue: r,
                        unit: n = "rem"
                    } = _(t);
                    return {
                        xs: (.8 * r).toString() + n,
                        sm: (.9 * r).toString() + n,
                        md: t,
                        lg: (1.3 * r).toString() + n,
                        xl: (1.85 * r).toString() + n
                    }
                },
                S = e => {
                    let {
                        fontWeight: t
                    } = e.variables || {};
                    return (0, f.Yb)({ ...t
                    })
                },
                C = e => {
                    let {
                        fontFamily: t,
                        fontFamilyButtons: r
                    } = e.variables || {};
                    return (0, f.Yb)({
                        main: t,
                        buttons: r
                    })
                },
                _ = e => {
                    let t = Number.parseFloat(e),
                        r = e.replace(t.toString(), "") || void 0;
                    return {
                        numericValue: t,
                        unit: r
                    }
                },
                k = {
                    logoPlacement: "inside",
                    socialButtonsPlacement: "top",
                    socialButtonsVariant: "auto",
                    logoImageUrl: "",
                    logoLinkUrl: "",
                    showOptionalFields: !0,
                    helpPageUrl: "",
                    privacyPageUrl: "",
                    termsPageUrl: "",
                    shimmer: !0,
                    animations: !0,
                    unsafe_disableDevelopmentModeWarnings: !1
                },
                $ = {
                    theme: "auto",
                    size: "normal",
                    language: ""
                },
                I = e => {
                    let {
                        globalAppearance: t,
                        appearance: r,
                        appearanceKey: n
                    } = e, o = [];
                    [t, null == t ? void 0 : t[n], r].forEach(e => P(e, o));
                    let a = Z(o),
                        i = B(o),
                        l = T(o);
                    return o.find(e => !!e.simpleStyles) || o.unshift(h), {
                        parsedElements: A(o.map(e => {
                            if (!e.elements || "function" != typeof e.elements) return e;
                            let t = { ...e
                            };
                            return t.elements = e.elements({
                                theme: a
                            }), t
                        })),
                        parsedInternalTheme: a,
                        parsedLayout: i,
                        parsedCaptcha: l
                    }
                },
                P = (e, t) => {
                    e && ((Array.isArray(e.baseTheme) ? e.baseTheme : [e.baseTheme]).forEach(e => P(e, t)), t.push(e))
                },
                A = e => e.map(e => ({ ...null == e ? void 0 : e.elements
                })),
                B = e => ({ ...k,
                    ...e.reduce((e, t) => ({ ...e,
                        ...t.layout
                    }), {})
                }),
                T = e => ({ ...$,
                    ...e.reduce((e, t) => ({ ...e,
                        ...t.captcha
                    }), {})
                }),
                Z = e => {
                    let t = {};
                    return (0, a.EB)({ ...i.$4
                    }, t), e.forEach(e => {
                        (0, a.EB)(R(e), t)
                    }), t
                },
                R = e => {
                    if (!e) return {};
                    let t = { ...v(e)
                        },
                        r = { ...y(e)
                        },
                        n = { ...x(e)
                        },
                        o = { ...w(e)
                        },
                        a = { ...S(e)
                        },
                        l = { ...C(e)
                        };
                    return (0, i.cS)({
                        colors: t,
                        radii: r,
                        space: n,
                        fontSizes: o,
                        fontWeights: a,
                        fonts: l
                    })
                },
                [z, L] = (0, o.uH)("AppearanceContext"),
                E = e => {
                    let t = (0, o.I7)(() => ({
                        value: I(e)
                    }), [e.appearance, e.globalAppearance]);
                    return (0, n.tZ)(z.Provider, {
                        value: t,
                        children: e.children
                    })
                }
        },
        342: function(e, t, r) {
            r.d(t, {
                ZS: () => u,
                fI: () => b,
                u8: () => i,
                vn: () => v
            });
            var n = r(901);
            let o = Object.freeze({
                    loading: " ".concat(n.jW, "loading"),
                    error: " ".concat(n.jW, "error"),
                    open: " ".concat(n.jW, "open"),
                    active: " ".concat(n.jW, "active")
                }),
                a = Object.freeze({
                    loading: 2,
                    error: 2,
                    open: 2,
                    active: 2
                }),
                i = (e, t, r, n) => {
                    let o = h(n),
                        a = "",
                        i = [];
                    return a = m(a = d(a = c(a = s(a = l(a, t), t, r), o), n), e, t, r, o), p(i, e, t, r, o), {
                        className: a,
                        css: i
                    }
                },
                l = (e, t) => {
                    for (let r = t.length - 1; r >= 0; r--) e += t[r].targettableClassname + " ";
                    return e.trimEnd()
                },
                s = (e, t, r) => {
                    if (!r) return e;
                    for (let n = t.length - 1; n >= 0; n--) e = e + " " + t[n].getTargettableIdClassname(r);
                    return e
                },
                c = (e, t) => t ? e + o[t] : e,
                d = (e, t) => t && t.isRequired ? e + " ".concat(n.jW, "required") : e,
                u = (e, t) => e + (t ? " " + t : "") + " \uD83D\uDD12️",
                p = (e, t, r, n, o) => {
                    for (let a = 0; a < r.length; a++)
                        for (let i = 0; i < t.length; i++) x(e, t[i], r[a], n, o)
                },
                m = (e, t, r, n, o) => {
                    for (let a = 0; a < r.length; a++)
                        for (let i = 0; i < t.length; i++) e = y(e, t[i], r[a], n, o);
                    return e
                },
                h = e => e ? e.isLoading ? "loading" : e.hasError ? "error" : e.isOpen ? "open" : e.isActive ? "active" : void 0 : void 0,
                g = (e, t) => "string" == typeof t ? e + " " + t : e,
                f = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    r ? t && "object" == typeof t && e.push({
                        ["&".repeat(r)]: t
                    }) : t && "object" == typeof t && e.push(t)
                },
                v = e => n.jW + e.flow + "-root",
                b = e => e.part ? n.jW + e.flow + "-" + e.part : "",
                y = (e, t, r, n, o) => (t && (e = g(e, t[r.objectKey]), n && (e = g(e, t[r.getObjectKeyWithId(n)])), o && (e = g(e, t[r.getObjectKeyWithState(o)])), n && o && (e = g(e, t[r.getObjectKeyWithIdAndState(n, o)]))), e),
                x = (e, t, r, n, o) => {
                    t && (f(e, t[r.objectKey]), n && f(e, t[r.getObjectKeyWithId(n)]), o && f(e, t[r.getObjectKeyWithState(o)], a[o]), n && o && f(e, t[r.getObjectKeyWithIdAndState(n, o)], a[o]))
                }
        },
        901: function(e, t, r) {
            r.d(t, {
                jW: () => o,
                tp: () => c
            });
            var n = r(2539);
            let o = "cl-",
                a = (0, n.Nr)()(["button", "input", "checkbox", "radio", "table", "rootBox", "cardBox", "card", "footerItem", "popoverBox", "actionCard", "logoBox", "logoImage", "header", "headerTitle", "headerSubtitle", "main", "footer", "footerAction", "footerActionText", "footerActionLink", "footerPages", "footerPagesLink", "backRow", "backLink", "socialButtonsRoot", "socialButtons", "socialButtonsIconButton", "socialButtonsBlockButton", "socialButtonsBlockButtonText", "socialButtonsProviderIcon", "socialButtonsProviderInitialIcon", "enterpriseButtonsProviderIcon", "providerIcon", "providerInitialIcon", "alternativeMethods", "alternativeMethodsBlockButton", "alternativeMethodsBlockButtonText", "alternativeMethodsBlockButtonArrow", "otpCodeField", "otpCodeFieldInputs", "otpCodeFieldInput", "otpCodeFieldErrorText", "formResendCodeLink", "dividerRow", "dividerText", "dividerLine", "formHeader", "formHeaderTitle", "formHeaderSubtitle", "verificationLinkStatusBox", "verificationLinkStatusIconBox", "verificationLinkStatusIcon", "verificationLinkStatusText", "form", "formContainer", "formFieldRow", "formField", "formFieldLabelRow", "formFieldLabel", "formFieldRadioGroup", "formFieldRadioGroupItem", "formFieldRadioInput", "formFieldRadioLabel", "formFieldRadioLabelTitle", "formFieldRadioLabelDescription", "formFieldCheckboxInput", "formFieldCheckboxLabel", "formFieldAction", "formFieldInput", "formFieldErrorText", "formFieldWarningText", "formFieldSuccessText", "formFieldInfoText", "formFieldHintText", "formButtonPrimary", "formButtonReset", "formFieldInputGroup", "formFieldInputShowPasswordButton", "formFieldInputShowPasswordIcon", "formFieldInputCopyToClipboardButton", "formFieldInputCopyToClipboardIcon", "phoneInputBox", "formInputGroup", "avatarBox", "avatarImage", "avatarImageActions", "avatarImageActionsUpload", "avatarImageActionsRemove", "userButtonBox", "userButtonOuterIdentifier", "userButtonTrigger", "userButtonAvatarBox", "userButtonAvatarImage", "userButtonPopoverRootBox", "userButtonPopoverCard", "userButtonPopoverMain", "userButtonPopoverActions", "userButtonPopoverActionButton", "userButtonPopoverActionButtonIconBox", "userButtonPopoverActionButtonIcon", "userButtonPopoverCustomItemButton", "userButtonPopoverCustomItemButtonIconBox", "userButtonPopoverActionItemButtonIcon", "userButtonPopoverFooter", "userButtonPopoverFooterPagesLink", "organizationSwitcherTrigger", "organizationSwitcherTriggerIcon", "organizationSwitcherPopoverRootBox", "organizationSwitcherPopoverCard", "organizationSwitcherPopoverMain", "organizationSwitcherPopoverActions", "organizationSwitcherPopoverInvitationActions", "organizationSwitcherPopoverInvitationActionsBox", "organizationSwitcherPopoverActionButton", "organizationSwitcherPreviewButton", "organizationSwitcherInvitationAcceptButton", "organizationSwitcherPopoverActionButtonIconBox", "organizationSwitcherPopoverActionButtonIcon", "organizationSwitcherPopoverFooter", "organizationProfileMembersSearchInputIcon", "organizationProfileMembersSearchInput", "organizationListPreviewItems", "organizationListPreviewItem", "organizationListPreviewButton", "organizationListPreviewItemActionButton", "organizationListCreateOrganizationActionButton", "userPreview", "userPreviewAvatarContainer", "userPreviewAvatarBox", "userPreviewAvatarImage", "userPreviewAvatarIcon", "userPreviewTextContainer", "userPreviewMainIdentifier", "userPreviewSecondaryIdentifier", "organizationPreview", "organizationPreviewAvatarContainer", "organizationPreviewAvatarBox", "organizationPreviewAvatarImage", "organizationPreviewTextContainer", "organizationPreviewMainIdentifier", "organizationPreviewSecondaryIdentifier", "organizationAvatarUploaderContainer", "membersPageInviteButton", "identityPreview", "identityPreviewText", "identityPreviewEditButton", "identityPreviewEditButtonIcon", "passkeyIcon", "accountSwitcherActionButton", "accountSwitcherActionButtonIconBox", "accountSwitcherActionButtonIcon", "alert", "alertIcon", "alertText", "alertTextContainer", "tagInputContainer", "tagPillIcon", "tagPillContainer", "tabPanel", "tabButton", "tabListContainer", "tableHead", "paginationButton", "paginationButtonIcon", "paginationRowText", "selectButton", "selectSearchInput", "selectButtonIcon", "selectOptionsContainer", "selectOption", "menuButton", "menuButtonEllipsis", "menuList", "menuItem", "modalBackdrop", "modalContent", "modalCloseButton", "profileSection", "profileSectionItemList", "profileSectionItem", "profileSectionHeader", "profileSectionTitle", "profileSectionTitleText", "profileSectionSubtitle", "profileSectionSubtitleText", "profileSectionContent", "profileSectionPrimaryButton", "profilePage", "formattedPhoneNumber", "formattedPhoneNumberFlag", "formattedPhoneNumberText", "formattedDate", "scrollBox", "navbar", "navbarButtons", "navbarButton", "navbarButtonIcon", "navbarButtonText", "navbarMobileMenuRow", "navbarMobileMenuButton", "navbarMobileMenuButtonIcon", "pageScrollBox", "page", "activeDevice", "activeDeviceListItem", "activeDeviceIcon", "impersonationFab", "impersonationFabIcon", "impersonationFabIconContainer", "impersonationFabTitle", "impersonationFabActionLink", "invitationsSentIconBox", "invitationsSentIcon", "qrCodeRow", "qrCodeContainer", "badge", "notificationBadge", "buttonArrowIcon", "spinner"]).map(e => e.replace(/-./g, e => e[1].toUpperCase())),
                i = e => o + e,
                l = e => e.replace(/([-][a-z])/, e => e[1].toUpperCase()),
                s = e => {
                    let t = l(e);
                    return {
                        objectKey: t,
                        targettableClassname: i(e),
                        getTargettableIdClassname: t => i(e) + "__" + t.id,
                        getObjectKeyWithState: e => t + "__" + e,
                        getObjectKeyWithId: e => t + "__" + e.id,
                        getObjectKeyWithIdAndState: (e, r) => t + "__" + e.id + "__" + r,
                        setId: e => e ? {
                            id: e,
                            __type: "id"
                        } : void 0
                    }
                },
                c = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                        t = e.map(e => [l(e), s(e)]);
                    return (0, n.sq)(t)
                }()
        },
        3064: function(e, t, r) {
            r.r(t), r.d(t, {
                localizationKeys: () => n.u1,
                AppearanceProvider: () => y.x,
                Flex: () => w,
                Table: () => N,
                descriptors: () => a.tp,
                Text: () => P,
                Form: () => M,
                Grid: () => C,
                Heading: () => $,
                Input: () => Z,
                SimpleButton: () => k,
                Th: () => Y,
                FormLabel: () => L,
                Box: () => x,
                Flow: () => b,
                FormErrorText: () => E,
                Link: () => I,
                FormInfoText: () => F,
                FormWarningText: () => O,
                Tr: () => K,
                CheckboxInput: () => R,
                NotificationBadge: () => W,
                useLocalizations: () => n.zJ,
                AlertIcon: () => T,
                Alert: () => B,
                Icon: () => U,
                Image: () => A,
                Span: () => G,
                FormSuccessText: () => D,
                Spinner: () => j,
                generateFlowPartClassname: () => v.fI,
                Button: () => _,
                Badge: () => V,
                Col: () => S,
                Tbody: () => X,
                Td: () => q,
                Thead: () => H,
                RadioInput: () => z,
                useAppearance: () => y.M
            });
            var n = r(1085),
                o = r(2882),
                a = r(901),
                i = r(4569),
                l = r(9755),
                s = r(9144),
                c = r(1235);
            let d = ["https://img.clerk.com/", "https://img.clerkstage.dev/", "https://img.lclclerk.com/"],
                u = e => !!d.some(t => null == e ? void 0 : e.includes(t)),
                p = e => {
                    let {
                        src: t,
                        width: r,
                        xDescriptors: n
                    } = e;
                    return t ? n.map(e => "".concat(m({
                        src: t,
                        width: r * e
                    }), " ").concat(e, "x")).toString() : ""
                },
                m = e => {
                    let {
                        src: t,
                        width: r
                    } = e;
                    if (!(0, c.jv)(t) || (0, c.pU)(t)) return t;
                    let n = new URL(t);
                    return r && n.searchParams.append("width", null == r ? void 0 : r.toString()), n.href
                },
                h = e => s.forwardRef((t, r) => {
                    let {
                        elementId: n,
                        elementDescriptor: o,
                        localizationKey: a,
                        ...i
                    } = t;
                    return (0, l.tZ)(e, { ...i,
                        ref: r
                    })
                });
            var g = r(5332),
                f = r(5295),
                v = r(342);
            let b = {
                Root: e => (0, l.tZ)(g.FlowMetadataProvider, {
                    flow: e.flow,
                    children: (0, l.tZ)(f.InternalThemeProvider, {
                        children: (0, l.tZ)(g.InvisibleRootBox, {
                            elementDescriptor: a.tp.rootBox,
                            className: (0, v.vn)(e),
                            ...e
                        })
                    })
                }),
                Part: e => {
                    let {
                        flow: t
                    } = (0, g.useFlowMetadata)();
                    return (0, l.tZ)(g.FlowMetadataProvider, {
                        flow: t,
                        part: e.part,
                        children: (0, l.tZ)(f.InternalThemeProvider, {
                            children: e.children
                        })
                    })
                }
            };
            var y = r(6092);
            let x = (0, i.P)(h(o.xu)),
                w = (0, i.P)(h(o.kC)),
                S = (0, i.P)(h(o.JX)),
                C = (0, i.P)(h(o.rj)),
                _ = (0, i.P)((0, n.W5)(h(o.zx)), {
                    defaultDescriptor: a.tp.button
                }),
                k = (0, i.P)((0, n.W5)(h(o.rF)), {
                    defaultDescriptor: a.tp.button
                }),
                $ = (0, i.P)((0, n.W5)(h(o.X6))),
                I = (0, i.P)((0, n.W5)(h(o.rU))),
                P = (0, i.P)((0, n.W5)(h(o.xv))),
                A = (0, i.P)(h((e => {
                    let t = s.forwardRef((t, r) => {
                            let {
                                src: n,
                                size: o = 80,
                                xDescriptors: a = [1, 2],
                                ...i
                            } = t, s = u(n);
                            return (0, l.tZ)(e, {
                                srcSet: s ? p({
                                    src: n,
                                    width: o,
                                    xDescriptors: a
                                }) : void 0,
                                src: s ? m({
                                    src: n,
                                    width: 2 * o
                                }) : n,
                                ...i,
                                ref: r
                            })
                        }),
                        r = e.displayName || e.name || "Component";
                    return t.displayName = "Responsive".concat(r).replace("_", ""), t
                })(o.Ee))),
                B = (0, i.P)(h(o.bZ)),
                T = (0, i.P)(h(o.zM)),
                Z = (0, i.P)(h(o.II), {
                    defaultDescriptor: a.tp.input
                }),
                R = (0, i.P)(h(o.I0), {
                    defaultDescriptor: a.tp.checkbox
                }),
                z = (0, i.P)(h(o.NA), {
                    defaultDescriptor: a.tp.radio
                }),
                L = (0, i.P)((0, n.W5)(h(o.lX))),
                E = (0, i.P)((0, n.W5)(h(o.jo))),
                D = (0, i.P)((0, n.W5)(h(o.Xc))),
                O = (0, i.P)((0, n.W5)(h(o.ZD))),
                F = (0, i.P)((0, n.W5)(h(o.Zh))),
                M = (0, i.P)(h(o.l0)),
                U = (0, i.P)(h(o.JO)),
                j = (0, i.P)(h(o.$j)),
                V = (0, i.P)((0, n.W5)(h(o.Ct)), {
                    defaultDescriptor: a.tp.badge
                }),
                W = (0, i.P)((0, n.W5)(h(o.Cc)), {
                    defaultDescriptor: a.tp.notificationBadge
                }),
                N = (0, i.P)(h(o.iA), {
                    defaultDescriptor: a.tp.table
                }),
                H = (0, i.P)(h(o.hr)),
                X = (0, i.P)(h(o.p3)),
                K = (0, i.P)(h(o.Tr)),
                Y = (0, i.P)((0, n.W5)(h(o.Th))),
                q = (0, i.P)((0, n.W5)(h(o.Td))),
                G = (0, i.P)((0, n.W5)(h(o.Dr)))
        },
        4569: function(e, t, r) {
            r.d(t, {
                P: () => l
            });
            var n = r(9755),
                o = r(9144),
                a = r(6092),
                i = r(342);
            let l = (e, t) => {
                let {
                    defaultStyles: r,
                    defaultDescriptor: l
                } = t || {}, s = o.forwardRef((t, o) => {
                    let {
                        elementDescriptor: s,
                        elementId: c,
                        sx: d,
                        className: u,
                        ...p
                    } = t, {
                        parsedElements: m
                    } = (0, a.M)(), h = [l, ...Array.isArray(s) ? s : [s]].filter(e => e);
                    if (!h.length) return (0, n.tZ)(e, {
                        css: d,
                        ...p,
                        className: u,
                        ref: o
                    });
                    let g = (0, i.u8)(m, h, c, t),
                        f = (0, i.ZS)(g.className, u);
                    return g.css.unshift(r, d), (0, n.tZ)(e, {
                        elementId: c,
                        css: g.css,
                        className: f,
                        ...p,
                        ref: o
                    })
                }), c = e.displayName || e.name || "Component";
                return s.displayName = "Customizable".concat(c).replace("_", ""), s
            }
        },
        4709: function(e, t, r) {
            r.d(t, {
                FR: () => d,
                XC: () => s
            });
            var n = r(9755),
                o = r(4914),
                a = r(9144),
                i = r(5332);
            let [l, s, c] = (0, o.uH)("ActionContext"), d = e => {
                let {
                    animate: t = !0,
                    children: r,
                    value: o,
                    onChange: s
                } = e, [c, d] = (0, a.useState)(null), u = (0, a.useCallback)(() => {
                    s ? s(null) : d(null)
                }, [s]), p = (0, a.useCallback)(e => {
                    s ? s(e) : d(e)
                }, [s]), m = (0, n.tZ)(l.Provider, {
                    value: {
                        value: {
                            active: void 0 !== o ? o : c,
                            open: p,
                            close: u
                        }
                    },
                    children: r
                });
                return t ? (0, n.tZ)(i.Animated, {
                    children: m
                }) : m
            }
        },
        9805: function(e, t, r) {
            r.d(t, {
                a: () => c
            });
            var n = r(9755),
                o = r(3064);
            let a = e => ({
                neutral: {
                    backgroundColor: e.colors.$colorBackground
                },
                destructive: {
                    backgroundColor: e.colors.$neutralAlpha50
                }
            });
            var i = r(4709),
                l = r(9144);
            let s = l.forwardRef((e, t) => (0, n.tZ)("div", {
                    ref: t,
                    ...e
                })),
                c = {
                    Root: i.FR,
                    Card: e => {
                        let {
                            children: t,
                            sx: r,
                            variant: i = "neutral",
                            ...l
                        } = e;
                        return (0, n.tZ)(o.Col, {
                            elementDescriptor: o.descriptors.actionCard,
                            sx: [e => ({
                                boxShadow: e.shadows.$actionCardShadow,
                                gap: e.space.$4,
                                borderRadius: e.radii.$lg,
                                padding: "".concat(e.space.$4, " ").concat(e.space.$5),
                                borderWidth: e.borderWidths.$normal,
                                borderStyle: e.borderStyles.$solid,
                                borderColor: e.colors.$neutralAlpha100,
                                ...a(e)[i]
                            }), r],
                            ...l,
                            children: t
                        })
                    },
                    Trigger: e => {
                        let {
                            children: t,
                            value: r,
                            hideOnActive: n = !0
                        } = e, {
                            active: o,
                            open: a
                        } = (0, i.XC)(), s = l.Children.only(t);
                        if (!(0, l.isValidElement)(s)) throw Error("Children of ActionTrigger must be a valid element");
                        return n && o === r ? null : (0, l.cloneElement)(s, {
                            onClick: async () => {
                                var e, t;
                                await (null === (e = (t = s.props).onClick) || void 0 === e ? void 0 : e.call(t)), a(r)
                            }
                        })
                    },
                    Open: e => {
                        let {
                            children: t,
                            value: r
                        } = e, {
                            active: o
                        } = (0, i.XC)(), a = (0, l.useRef)(null);
                        return ((0, l.useEffect)(() => {
                            let e = a.current,
                                t = new MutationObserver(() => {
                                    t.disconnect(), e && setTimeout(() => {
                                        e.scrollIntoView({
                                            behavior: "smooth",
                                            block: "center"
                                        })
                                    }, 300)
                                });
                            return o === r && e && t.observe(e, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }), () => t.disconnect()
                        }, [o, r]), o !== r) ? null : (0, n.tZ)(s, {
                            ref: a,
                            children: t
                        })
                    },
                    Closed: e => {
                        let {
                            children: t,
                            value: r
                        } = e, n = Array.isArray(r) ? r : [r], {
                            active: o
                        } = (0, i.XC)();
                        return o && n.includes(o) ? null : t
                    }
                }
        },
        3423: function(e, t, r) {
            r.d(t, {
                S: () => l
            });
            var n = r(9755),
                o = r(9144),
                a = r(3935);
            r(7140);
            var i = r(3064);
            let l = () => {
                let e = (0, o.useRef)(null),
                    t = (0, o.useRef)("0"),
                    r = (0, o.useRef)("unset"),
                    l = (0, o.useRef)("unset"),
                    {
                        parsedCaptcha: s
                    } = (0, i.useAppearance)(),
                    {
                        locale: c
                    } = (0, i.useLocalizations)(),
                    d = null == s ? void 0 : s.theme,
                    u = null == s ? void 0 : s.size,
                    p = (null == s ? void 0 : s.language) || c;
                return (0, o.useEffect)(() => {
                    if (!e.current) return;
                    let n = new MutationObserver(n => {
                        n.forEach(n => {
                            let o = n.target;
                            "attributes" === n.type && "style" === n.attributeName && e.current && (t.current = o.style.maxHeight || "0", r.current = o.style.minHeight || "unset", l.current = o.style.marginBottom || "unset")
                        })
                    });
                    return n.observe(e.current, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    }), () => n.disconnect()
                }, []), (0, n.tZ)(i.Box, {
                    ref: e,
                    id: a.M,
                    style: {
                        display: "block",
                        alignSelf: "center",
                        maxHeight: t.current,
                        minHeight: r.current,
                        marginBottom: l.current
                    },
                    "data-cl-theme": d,
                    "data-cl-size": u,
                    "data-cl-language": p
                })
            }
        },
        8191: function(e, t, r) {
            r.d(t, {
                h5: () => i,
                nX: () => l,
                ug: () => o
            });
            let n = [
                    ["United States", "us", "1", "(...) ...-....", 100],
                    ["United Kingdom", "gb", "44", ".... ......", 100],
                    ["India", "in", "91", ".....-.....", 100],
                    ["Canada", "ca", "1", "(...) ...-....", 100],
                    ["Germany", "de", "49", "... .......", 100],
                    ["France", "fr", "33", ". .. .. .. ..", 100],
                    ["Russia", "ru", "7", "... ...-..-..", 100],
                    ["Afghanistan", "af", "93"],
                    ["Albania", "al", "355"],
                    ["Algeria ", "dz", "213"],
                    ["American Samoa", "as", "1684"],
                    ["Andorra", "ad", "376"],
                    ["Angola", "ao", "244"],
                    ["Anguilla", "ai", "1264"],
                    ["Antigua and Barbuda", "ag", "1268"],
                    ["Argentina", "ar", "54"],
                    ["Armenia", "am", "374"],
                    ["Aruba", "aw", "297"],
                    ["Australia", "au", "61", "... ... ..."],
                    ["Austria", "at", "43"],
                    ["Azerbaijan", "az", "994"],
                    ["Bahamas", "bs", "1242"],
                    ["Bahrain", "bh", "973"],
                    ["Bangladesh", "bd", "880"],
                    ["Barbados", "bb", "1246"],
                    ["Belarus", "by", "375"],
                    ["Belgium", "be", "32", "... .. .. .."],
                    ["Belize", "bz", "501"],
                    ["Benin", "bj", "229"],
                    ["Bermuda", "bm", "1441"],
                    ["Bhutan", "bt", "975"],
                    ["Bolivia", "bo", "591"],
                    ["Bosnia and Herzegovina", "ba", "387"],
                    ["Botswana", "bw", "267"],
                    ["Brazil", "br", "55"],
                    ["British Indian Ocean Territory", "io", "246"],
                    ["British Virgin Islands", "vg", "1284"],
                    ["Brunei", "bn", "673"],
                    ["Bulgaria", "bg", "359"],
                    ["Burkina Faso", "bf", "226"],
                    ["Burundi", "bi", "257"],
                    ["Cambodia", "kh", "855"],
                    ["Cameroon", "cm", "237"],
                    ["Cape Verde", "cv", "238"],
                    ["Caribbean Netherlands", "bq", "599"],
                    ["Cayman Islands", "ky", "1345"],
                    ["Central African Republic", "cf", "236"],
                    ["Chad", "td", "235"],
                    ["Chile", "cl", "56"],
                    ["China", "cn", "86", "...-....-...."],
                    ["Colombia", "co", "57"],
                    ["Comoros", "km", "269"],
                    ["Congo", "cd", "243"],
                    ["Congo", "cg", "242"],
                    ["Cook Islands", "ck", "682"],
                    ["Costa Rica", "cr", "506", "....-...."],
                    ["C\xf4te d’Ivoire", "ci", "225"],
                    ["Croatia", "hr", "385"],
                    ["Cuba", "cu", "53"],
                    ["Cura\xe7ao", "cw", "599"],
                    ["Cyprus", "cy", "357"],
                    ["Czech Republic", "cz", "420"],
                    ["Denmark", "dk", "45", ".. .. .. .."],
                    ["Djibouti", "dj", "253"],
                    ["Dominica", "dm", "1767"],
                    ["Dominican Republic", "do", "1"],
                    ["Ecuador", "ec", "593"],
                    ["Egypt", "eg", "20"],
                    ["El Salvador", "sv", "503", "....-...."],
                    ["Equatorial Guinea", "gq", "240"],
                    ["Eritrea", "er", "291"],
                    ["Estonia", "ee", "372"],
                    ["Ethiopia", "et", "251"],
                    ["Falkland Islands", "fk", "500"],
                    ["Faroe Islands", "fo", "298"],
                    ["Fiji", "fj", "679"],
                    ["Finland", "fi", "358", ".. ... .. .."],
                    ["French Guiana", "gf", "594"],
                    ["French Polynesia", "pf", "689"],
                    ["Gabon", "ga", "241"],
                    ["Gambia", "gm", "220"],
                    ["Georgia", "ge", "995"],
                    ["Ghana", "gh", "233"],
                    ["Gibraltar", "gi", "350"],
                    ["Greece", "gr", "30", "... ......."],
                    ["Greenland", "gl", "299"],
                    ["Grenada", "gd", "1473"],
                    ["Guadeloupe", "gp", "590"],
                    ["Guam", "gu", "1671"],
                    ["Guatemala", "gt", "502", "....-...."],
                    ["Guinea", "gn", "224"],
                    ["Guinea-Bissau", "gw", "245"],
                    ["Guyana", "gy", "592"],
                    ["Haiti", "ht", "509", "....-...."],
                    ["Honduras", "hn", "504"],
                    ["Hong Kong", "hk", "852", ".... ...."],
                    ["Hungary", "hu", "36"],
                    ["Iceland", "is", "354", "... ...."],
                    ["Indonesia", "id", "62"],
                    ["Iran", "ir", "98"],
                    ["Iraq", "iq", "964"],
                    ["Ireland", "ie", "353", ".. ......."],
                    ["Israel", "il", "972"],
                    ["Italy", "it", "39", "... ......"],
                    ["Jamaica", "jm", "1876"],
                    ["Japan", "jp", "81", "... .. ...."],
                    ["Jordan", "jo", "962"],
                    ["Kazakhstan", "kz", "7", "... ...-..-.."],
                    ["Kenya", "ke", "254"],
                    ["Kiribati", "ki", "686"],
                    ["Kuwait", "kw", "965"],
                    ["Kyrgyzstan", "kg", "996"],
                    ["Laos", "la", "856"],
                    ["Latvia", "lv", "371"],
                    ["Lebanon", "lb", "961"],
                    ["Lesotho", "ls", "266"],
                    ["Liberia", "lr", "231"],
                    ["Libya", "ly", "218"],
                    ["Liechtenstein", "li", "423"],
                    ["Lithuania", "lt", "370"],
                    ["Luxembourg", "lu", "352"],
                    ["Macau", "mo", "853"],
                    ["Macedonia", "mk", "389"],
                    ["Madagascar", "mg", "261"],
                    ["Malawi", "mw", "265"],
                    ["Malaysia", "my", "60", "..-....-...."],
                    ["Maldives", "mv", "960"],
                    ["Mali", "ml", "223"],
                    ["Malta", "mt", "356"],
                    ["Marshall Islands", "mh", "692"],
                    ["Martinique", "mq", "596"],
                    ["Mauritania", "mr", "222"],
                    ["Mauritius", "mu", "230"],
                    ["Mexico", "mx", "52"],
                    ["Micronesia", "fm", "691"],
                    ["Moldova", "md", "373"],
                    ["Monaco", "mc", "377"],
                    ["Mongolia", "mn", "976"],
                    ["Montenegro", "me", "382"],
                    ["Montserrat", "ms", "1664"],
                    ["Morocco", "ma", "212"],
                    ["Mozambique", "mz", "258"],
                    ["Myanmar", "mm", "95"],
                    ["Namibia", "na", "264"],
                    ["Nauru", "nr", "674"],
                    ["Nepal", "np", "977"],
                    ["Netherlands", "nl", "31", ".. ........"],
                    ["New Caledonia", "nc", "687"],
                    ["New Zealand", "nz", "64", "...-...-...."],
                    ["Nicaragua", "ni", "505"],
                    ["Niger", "ne", "227"],
                    ["Nigeria", "ng", "234"],
                    ["Niue", "nu", "683"],
                    ["Norfolk Island", "nf", "672"],
                    ["North Korea", "kp", "850"],
                    ["Northern Mariana Islands", "mp", "1670"],
                    ["Norway", "no", "47", "... .. ..."],
                    ["Oman", "om", "968"],
                    ["Pakistan", "pk", "92", "...-......."],
                    ["Palau", "pw", "680"],
                    ["Palestine", "ps", "970"],
                    ["Panama", "pa", "507"],
                    ["Papua New Guinea", "pg", "675"],
                    ["Paraguay", "py", "595"],
                    ["Peru", "pe", "51"],
                    ["Philippines", "ph", "63", "... ...."],
                    ["Poland", "pl", "48", "...-...-..."],
                    ["Portugal", "pt", "351"],
                    ["Puerto Rico", "pr", "1"],
                    ["Qatar", "qa", "974"],
                    ["R\xe9union", "re", "262"],
                    ["Romania", "ro", "40"],
                    ["Rwanda", "rw", "250"],
                    ["Saint Barth\xe9lemy", "bl", "590"],
                    ["Saint Helena", "sh", "290"],
                    ["Saint Kitts and Nevis", "kn", "1869"],
                    ["Saint Lucia", "lc", "1758"],
                    ["Saint Martin", "mf", "590"],
                    ["Saint Pierre and Miquelon", "pm", "508"],
                    ["Saint Vincent and the Grenadines", "vc", "1784"],
                    ["Samoa", "ws", "685"],
                    ["San Marino", "sm", "378"],
                    ["S\xe3o Tom\xe9 and Pr\xedncipe", "st", "239"],
                    ["Saudi Arabia", "sa", "966"],
                    ["Senegal", "sn", "221"],
                    ["Serbia", "rs", "381"],
                    ["Seychelles", "sc", "248"],
                    ["Sierra Leone", "sl", "232"],
                    ["Singapore", "sg", "65", "....-...."],
                    ["Sint Maarten", "sx", "1721"],
                    ["Slovakia", "sk", "421"],
                    ["Slovenia", "si", "386"],
                    ["Solomon Islands", "sb", "677"],
                    ["Somalia", "so", "252"],
                    ["South Africa", "za", "27"],
                    ["South Korea", "kr", "82"],
                    ["South Sudan", "ss", "211"],
                    ["Spain", "es", "34", "... ... ..."],
                    ["Sri Lanka", "lk", "94"],
                    ["Sudan", "sd", "249"],
                    ["Suriname", "sr", "597"],
                    ["Swaziland", "sz", "268"],
                    ["Sweden", "se", "46", ".. ... .. .."],
                    ["Switzerland", "ch", "41", ".. ... .. .."],
                    ["Syria", "sy", "963"],
                    ["Taiwan", "tw", "886"],
                    ["Tajikistan", "tj", "992"],
                    ["Tanzania", "tz", "255"],
                    ["Thailand", "th", "66"],
                    ["Timor-Leste", "tl", "670"],
                    ["Togo", "tg", "228"],
                    ["Tokelau", "tk", "690"],
                    ["Tonga", "to", "676"],
                    ["Trinidad and Tobago", "tt", "1868"],
                    ["Tunisia", "tn", "216"],
                    ["Turkey", "tr", "90", "... ... .. .."],
                    ["Turkmenistan", "tm", "993"],
                    ["Turks and Caicos Islands", "tc", "1649"],
                    ["Tuvalu", "tv", "688"],
                    ["U.S. Virgin Islands", "vi", "1340"],
                    ["Uganda", "ug", "256"],
                    ["Ukraine", "ua", "380"],
                    ["United Arab Emirates", "ae", "971"],
                    ["Uruguay", "uy", "598"],
                    ["Uzbekistan", "uz", "998"],
                    ["Vanuatu", "vu", "678"],
                    ["Vatican City", "va", "39", ".. .... ...."],
                    ["Venezuela", "ve", "58"],
                    ["Vietnam", "vn", "84"],
                    ["Wallis and Futuna", "wf", "681"],
                    ["Yemen", "ye", "967"],
                    ["Zambia", "zm", "260"],
                    ["Zimbabwe", "zw", "263"]
                ],
                o = {
                    us: new Set(["907", "205", "251", "256", "334", "479", "501", "870", "480", "520", "602", "623", "928", "209", "213", "310", "323", "408", "415", "510", "530", "559", "562", "619", "626", "650", "661", "707", "714", "760", "805", "818", "831", "858", "909", "916", "925", "949", "951", "303", "719", "970", "203", "860", "202", "302", "239", "305", "321", "352", "386", "407", "561", "727", "772", "813", "850", "863", "904", "941", "954", "229", "404", "478", "706", "770", "912", "808", "319", "515", "563", "641", "712", "208", "217", "309", "312", "618", "630", "708", "773", "815", "847", "219", "260", "317", "574", "765", "812", "316", "620", "785", "913", "270", "502", "606", "859", "225", "318", "337", "504", "985", "413", "508", "617", "781", "978", "301", "410", "207", "231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "989", "218", "320", "507", "612", "651", "763", "952", "314", "417", "573", "636", "660", "816", "228", "601", "662", "406", "252", "336", "704", "828", "910", "919", "701", "308", "402", "603", "201", "609", "732", "856", "908", "973", "505", "575", "702", "775", "212", "315", "516", "518", "585", "607", "631", "716", "718", "845", "914", "216", "330", "419", "440", "513", "614", "740", "937", "405", "580", "918", "503", "541", "215", "412", "570", "610", "717", "724", "814", "401", "803", "843", "864", "605", "423", "615", "731", "865", "901", "931", "210", "214", "254", "281", "325", "361", "409", "432", "512", "713", "806", "817", "830", "903", "915", "936", "940", "956", "972", "979", "435", "801", "276", "434", "540", "703", "757", "804", "802", "206", "253", "360", "425", "509", "262", "414", "608", "715", "920", "304", "307"]),
                    ca: new Set(["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"])
                },
                a = e => {
                    let [t, r, n, o = "", a = 0] = e;
                    return {
                        name: t,
                        iso: r,
                        code: n,
                        pattern: o,
                        priority: a
                    }
                },
                i = n.reduce((e, t) => e.set(t[1], a(t)), new Map),
                l = n.reduce((e, t) => {
                    let r = t[2],
                        n = a(t);
                    if (e.has(r)) {
                        var o;
                        null === (o = e.get(r)) || void 0 === o || o.push(n)
                    } else e.set(r, [n]);
                    return e
                }, new Map)
        },
        7348: function(e, t, r) {
            r.d(t, {
                h: () => a
            });
            var n = r(9144),
                o = r(8315);
            let a = e => {
                let t = n.useRef(document.createElement("div"));
                return n.useEffect(() => (document.body.appendChild(t.current), () => {
                    document.body.removeChild(t.current)
                }), []), (0, o.createPortal)(e.children, t.current)
            }
        },
        3929: function(e, t, r) {
            r.d(t, {
                r: () => a
            });
            var n = r(9755),
                o = r(3064);
            let a = e => (0, n.tZ)(o.Col, { ...e,
                sx: e => ({
                    boxSizing: "border-box",
                    width: "fit-content",
                    color: e.colors.$colorText,
                    fontFamily: e.fonts.$main,
                    fontStyle: e.fontStyles.$normal
                })
            })
        },
        138: function(e, t, r) {
            r.d(t, {
                L: () => p
            });
            var n = r(9755),
                o = r(9144),
                a = r(8969),
                i = r(3064),
                l = r(2762),
                s = r(5295),
                c = r(2539),
                d = r(9037);
            let u = e => e.startsWith("web3_"),
                p = o.memo(e => {
                    var t, r;
                    let {
                        oauthCallback: o,
                        web3Callback: p,
                        enableOAuthProviders: g = !0,
                        enableWeb3Providers: f = !0
                    } = e, {
                        web3Strategies: v,
                        authenticatableOauthStrategies: b,
                        strategyToDisplayData: y
                    } = (0, l.vO)(), x = (0, d.v)(), {
                        socialButtonsVariant: w
                    } = (0, i.useAppearance)().parsedLayout, S = [...g ? b : [], ...f ? v : []];
                    if (!S.length) return null;
                    let C = function(e, t) {
                            if (e.length <= 6) return [e];
                            let r = Math.ceil(e.length / 6),
                                n = Math.ceil(e.length / r),
                                o = Array.from({
                                    length: r
                                }, () => []),
                                a = 0;
                            for (let t of e) o[a].push(t), o[a].length === n && a++;
                            return o
                        }([...S], 6),
                        _ = null !== (r = null === (t = C.at(0)) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0,
                        k = "blockButton" === w || "iconButton" !== w && S.length <= 2,
                        $ = e => async () => {
                            x.setLoading(e);
                            try {
                                u(e) ? await p(e) : await o(e)
                            } catch {
                                await (0, c._v)(1e3), x.setIdle()
                            }
                            await (0, c._v)(5e3), x.setIdle()
                        },
                        I = k ? h : m;
                    return (0, n.tZ)(i.Flex, {
                        direction: "col",
                        gap: 2,
                        elementDescriptor: i.descriptors.socialButtonsRoot,
                        children: C.map((e, t) => (0, n.tZ)(i.Grid, {
                            elementDescriptor: i.descriptors.socialButtons,
                            gap: 2,
                            sx: r => ({
                                justifyContent: "center",
                                [s.mqu.sm]: {
                                    gridTemplateColumns: "repeat(1, 1fr)"
                                },
                                gridTemplateColumns: S.length < 1 ? "repeat(1, 1fr)" : "repeat(".concat(e.length, ", ").concat(0 === t ? "1fr" : "calc((100% - (".concat(_, " - 1) * ").concat(r.sizes.$2, ") / ").concat(_, ")"), ")")
                            }),
                            children: e.map(e => {
                                let t = 1 === S.length ? "Continue with ".concat(y[e].name) : y[e].name,
                                    r = 1 === S.length ? (0, i.localizationKeys)("socialButtonsBlockButton", {
                                        provider: y[e].name
                                    }) : (0, i.localizationKeys)("socialButtonsBlockButtonManyInView", {
                                        provider: y[e].name
                                    }),
                                    o = y[e].iconUrl ? (0, n.tZ)(i.Image, {
                                        elementDescriptor: [i.descriptors.providerIcon, i.descriptors.socialButtonsProviderIcon],
                                        elementId: i.descriptors.socialButtonsProviderIcon.setId(y[e].id),
                                        isLoading: x.loadingMetadata === e,
                                        isDisabled: x.isLoading,
                                        src: y[e].iconUrl,
                                        alt: "Sign in with ".concat(y[e].name),
                                        sx: e => ({
                                            width: e.sizes.$4,
                                            height: "auto",
                                            maxWidth: "100%"
                                        })
                                    }) : (0, n.tZ)(a.e_, {
                                        id: y[e].id,
                                        value: y[e].name,
                                        isLoading: x.loadingMetadata === e,
                                        isDisabled: x.isLoading
                                    });
                                return (0, n.tZ)(I, {
                                    id: y[e].id,
                                    onClick: $(e),
                                    isLoading: x.loadingMetadata === e,
                                    isDisabled: x.isLoading,
                                    label: t,
                                    textLocalizationKey: r,
                                    icon: o
                                }, e)
                            })
                        }, e.join("-")))
                    })
                }),
                m = (0, o.forwardRef)((e, t) => {
                    let {
                        icon: r,
                        label: o,
                        id: a,
                        textLocalizationKey: l,
                        ...s
                    } = e;
                    return (0, n.tZ)(i.Button, {
                        ref: t,
                        elementDescriptor: i.descriptors.socialButtonsIconButton,
                        elementId: i.descriptors.socialButtonsIconButton.setId(a),
                        textVariant: "buttonLarge",
                        variant: "outline",
                        colorScheme: "neutral",
                        sx: e => ({
                            minHeight: e.sizes.$8,
                            width: "100%"
                        }),
                        ...s,
                        children: r
                    })
                }),
                h = (0, o.forwardRef)((e, t) => {
                    let {
                        id: r,
                        icon: a,
                        isLoading: l,
                        label: s,
                        textLocalizationKey: c,
                        ...d
                    } = e, u = (0, o.isValidElement)(a);
                    return (0, n.tZ)(i.SimpleButton, {
                        elementDescriptor: i.descriptors.socialButtonsBlockButton,
                        elementId: i.descriptors.socialButtonsBlockButton.setId(r),
                        variant: "outline",
                        block: !0,
                        isLoading: l,
                        ref: t,
                        ...d,
                        sx: t => [{
                            gap: t.space.$4,
                            position: "relative",
                            justifyContent: "flex-start"
                        }, e.sx],
                        children: (0, n.BX)(i.Flex, {
                            justify: "center",
                            align: "center",
                            as: "span",
                            gap: 3,
                            sx: {
                                width: "100%",
                                overflow: "hidden"
                            },
                            children: [(l || a) && (0, n.tZ)(i.Flex, {
                                as: "span",
                                center: !0,
                                sx: e => ({
                                    flex: "0 0 ".concat(e.space.$4)
                                }),
                                children: l ? (0, n.tZ)(i.Spinner, {
                                    size: "sm",
                                    elementDescriptor: i.descriptors.spinner
                                }) : !u && a ? (0, n.tZ)(i.Icon, {
                                    icon: a,
                                    sx: [e => ({
                                        color: e.colors.$neutralAlpha600,
                                        width: e.sizes.$4,
                                        position: "absolute"
                                    })]
                                }) : a
                            }), (0, n.tZ)(i.Text, {
                                elementDescriptor: i.descriptors.socialButtonsBlockButtonText,
                                elementId: i.descriptors.socialButtonsBlockButtonText.setId(r),
                                as: "span",
                                truncate: !0,
                                variant: "buttonLarge",
                                localizationKey: c,
                                children: s
                            })]
                        })
                    })
                })
        },
        9037: function(e, t, r) {
            r.d(t, {
                v: () => u,
                $p: () => p,
                w$: () => g,
                TJ: () => v,
                wu: () => d,
                Li: () => h
            });
            var n = r(9755),
                o = r(4914),
                a = r(9144),
                i = r(3064),
                l = r(2762);
            let [s, c] = (0, o.uH)("CardState"), d = e => {
                var t, r;
                let {
                    translateError: o
                } = (0, i.useLocalizations)(), [c, d] = (0, l.FH)({
                    status: "idle",
                    metadata: void 0,
                    error: o((null === (r = window) || void 0 === r ? void 0 : null === (t = r.Clerk) || void 0 === t ? void 0 : t.__internal_last_error) || void 0)
                }), u = a.useMemo(() => ({
                    value: {
                        state: c,
                        setState: d
                    }
                }), [c, d]);
                return (0, n.tZ)(s.Provider, {
                    value: u,
                    children: e.children
                })
            }, u = () => {
                let {
                    state: e,
                    setState: t
                } = c(), {
                    translateError: r
                } = (0, i.useLocalizations)(), n = e => t(t => ({ ...t,
                    status: "idle",
                    metadata: e
                })), o = e => t(t => ({ ...t,
                    status: "loading",
                    metadata: e
                })), a = async (e, t) => (o(t), ("function" == typeof e ? e() : e).then(e => e).finally(() => n(t)));
                return {
                    setIdle: n,
                    setError: e => t(t => ({ ...t,
                        error: r(e)
                    })),
                    setLoading: o,
                    runAsync: a,
                    loadingMetadata: "loading" === e.status ? e.metadata : void 0,
                    error: e.error ? e.error : void 0,
                    isLoading: "loading" === e.status,
                    isIdle: "idle" === e.status,
                    state: e
                }
            }, p = e => t => (0, n.tZ)(d, {
                children: (0, n.tZ)(e, { ...t
                })
            }), [m, h] = (0, o.uH)("FlowMetadata"), g = e => {
                let {
                    flow: t,
                    part: r
                } = e, o = a.useMemo(() => ({
                    value: e
                }), [t, r]);
                return (0, n.tZ)(m.Provider, {
                    value: o,
                    children: e.children
                })
            };
            var f = r(4170);
            let v = e => t => null == (0, f.Zm)() ? (0, n.tZ)(f.RB, {
                children: (0, n.tZ)(e, { ...t
                })
            }) : (0, n.tZ)(e, { ...t
            })
        },
        5332: function(e, t, r) {
            r.r(t), r.d(t, {
                IconButton: () => U,
                OTPCodeControl: () => ed,
                Avatar: () => _,
                Actions: () => s,
                CardStateProvider: () => i.wu,
                RootBox: () => tK.r,
                ProfileCard: () => tW,
                SocialButtonsReversibleContainerWithDivider: () => tN,
                Tabs: () => ra,
                TagInput: () => ru,
                Animated: () => g,
                FullHeightLoader: () => eG,
                LegalCheckbox: () => ti,
                fileToBase64: () => I,
                BlockWithTrailingComponent: () => z,
                PreviewButton: () => tV,
                OrganizationPreview: () => tB,
                NavBar: () => tS,
                VerificationLink: () => rv,
                usePagination: () => tT,
                UserPreview: () => tM,
                ProfileSection: () => tJ,
                SelectNoResults: () => t8,
                useFlowMetadata: () => i.Li,
                useUnsafeNavbarContext: () => tx,
                MenuStateCtx: () => tu,
                ModalContext: () => X,
                _: () => K,
                FormButtonContainer: () => eY,
                InformationBox: () => e8,
                IconCircle: () => e1,
                useUnsafeModalContext: () => Y,
                ReversibleContainer: () => tH,
                SuccessPage: () => rt,
                OTPResendButton: () => ec,
                BackLink: () => R,
                FormButtons: () => eK,
                SmallAction: () => u,
                TileButton: () => rh,
                withFloatingTree: () => i.TJ,
                LoadingCardContainer: () => ts,
                LoadingCard: () => tc,
                PersonalWorkspacePreview: () => tU,
                NavbarContextProvider: () => tw,
                NavbarMenuButtonRow: () => t$,
                Popover: () => H,
                DevModeNotice: () => O,
                SectionHeader: () => tQ,
                Select: () => t6,
                TabPanels: () => rs,
                TimerButton: () => en,
                Header: () => ev,
                VerificationCodeCard: () => rg,
                useNavbarContext: () => ty,
                Divider: () => em,
                SelectOptionList: () => t9,
                AvatarUploader: () => Z,
                Form: () => eW,
                MenuTrigger: () => th,
                ThreeDotsMenu: () => rm,
                DevModeOverlay: () => D,
                FormattedPhoneNumberText: () => eH,
                ApplicationLogo: () => x,
                InputWithIcon: () => e9,
                ArrowBlockButton: () => S,
                ProfileSectionActionMenuItem: () => tq,
                VerificationLinkCard: () => rf,
                useFormState: () => ej,
                Card: () => et,
                ErrorCard: () => eb,
                IdentityPreview: () => e5,
                withAvatarShimmer: () => rb,
                FlowMetadataProvider: () => i.w$,
                MenuList: () => tf,
                NavigateToFlowStartButton: () => tI,
                SmallActions: () => c,
                TabPanel: () => rc,
                UserAvatar: () => tF,
                ExtraSmallAction: () => d,
                Modal: () => q,
                OTPRoot: () => es,
                Gauge: () => e0,
                NavbarContext: () => tb,
                useCardState: () => i.v,
                Alert: () => m,
                SectionSubHeader: () => t0,
                Tab: () => rl,
                Menu: () => tm,
                ProfileSectionActionMenu: () => tG,
                TabsList: () => ri,
                SelectButton: () => re,
                useFieldOTP: () => eo,
                OrganizationAvatar: () => tP,
                MenuItem: () => tv,
                useMenuState: () => tp,
                FormattedPhoneNumber: () => eN,
                InvisibleRootBox: () => tr,
                PopoverCard: () => tj,
                Pagination: () => tD,
                withCardStateProvider: () => i.$p,
                Action: () => p,
                FormContainer: () => eq,
                ClipboardInput: () => er
            });
            var n = r(9755),
                o = r(9144),
                a = r(3064),
                i = r(9037),
                l = r(2762);
            let s = e => {
                    let {
                        sx: t,
                        ...r
                    } = e;
                    return (0, n.tZ)(a.Col, {
                        sx: [e => ({
                            "> button,div": {
                                border: "0 solid ".concat(e.colors.$neutralAlpha100)
                            },
                            ">:not([hidden],:empty)~:not([hidden],:empty)": {
                                borderTopWidth: "1px",
                                borderBottomWidth: "0"
                            }
                        }), t],
                        ...r
                    })
                },
                c = e => (0, n.tZ)(a.Col, { ...e
                }),
                d = e => {
                    let t = (0, i.v)(),
                        r = (0, l._m)(),
                        {
                            icon: o,
                            onClick: s,
                            iconElementDescriptor: c,
                            sx: d,
                            iconElementId: u,
                            iconSx: p,
                            iconBoxElementDescriptor: m,
                            iconBoxElementId: h,
                            iconBoxSx: g,
                            trailing: f,
                            spinnerSize: v,
                            ...b
                        } = e,
                        y = async e => {
                            t.setLoading(), r.setLoading();
                            try {
                                await (null == s ? void 0 : s(e))
                            } finally {
                                t.setIdle(), r.setIdle()
                            }
                        };
                    return (0, n.BX)(a.SimpleButton, {
                        size: "xs",
                        variant: "outline",
                        hoverAsFocus: !0,
                        sx: [e => ({
                            borderRadius: e.radii.$lg,
                            gap: 0,
                            justifyContent: "center",
                            padding: e.space.$1
                        }), d],
                        isDisabled: t.isLoading,
                        onClick: y,
                        role: "menuitem",
                        ...b,
                        children: [(0, n.tZ)(a.Flex, {
                            elementDescriptor: m,
                            elementId: h,
                            justify: "center",
                            as: "span",
                            children: r.isLoading ? (0, n.tZ)(a.Spinner, {
                                size: v || "xs",
                                elementDescriptor: a.descriptors.spinner
                            }) : (0, n.tZ)(a.Icon, {
                                elementDescriptor: c,
                                elementId: u,
                                icon: o,
                                sx: [e => ({
                                    width: e.sizes.$4,
                                    height: e.sizes.$4
                                }), p]
                            })
                        }), f]
                    })
                },
                u = e => {
                    let {
                        sx: t,
                        iconBoxSx: r,
                        iconSx: o,
                        ...a
                    } = e;
                    return (0, n.tZ)(p, {
                        size: "xs",
                        variant: "outline",
                        textVariant: "buttonSmall",
                        sx: [e => ({
                            borderRadius: e.radii.$lg,
                            gap: e.space.$0x5,
                            justifyContent: "center",
                            flex: "1 1 0",
                            padding: "".concat(e.space.$1, " ").concat(e.space.$1x5)
                        }), t],
                        iconSx: [e => ({
                            width: e.sizes.$4,
                            height: e.sizes.$4
                        }), o],
                        iconBoxSx: [{
                            flex: "unset"
                        }, r],
                        ...a
                    })
                },
                p = e => {
                    let t = (0, i.v)(),
                        r = (0, l._m)(),
                        {
                            t: o
                        } = (0, a.useLocalizations)(),
                        {
                            icon: s,
                            label: c,
                            onClick: d,
                            iconElementDescriptor: u,
                            sx: p,
                            iconElementId: m,
                            iconSx: h,
                            iconBoxElementDescriptor: g,
                            iconBoxElementId: f,
                            iconBoxSx: v,
                            trailing: b,
                            spinnerSize: y,
                            ...x
                        } = e,
                        w = async e => {
                            t.setLoading(), r.setLoading();
                            try {
                                await (null == d ? void 0 : d(e))
                            } finally {
                                t.setIdle(), r.setIdle()
                            }
                        };
                    return (0, n.BX)(a.Button, {
                        size: "md",
                        variant: "ghost",
                        colorScheme: "neutral",
                        textVariant: "buttonLarge",
                        hoverAsFocus: !0,
                        focusRing: !1,
                        sx: [e => ({
                            flex: "1",
                            borderRadius: 0,
                            gap: e.space.$4,
                            justifyContent: "flex-start"
                        }), p],
                        isDisabled: t.isLoading,
                        onClick: w,
                        role: "menuitem",
                        ...x,
                        children: [(0, n.tZ)(a.Flex, {
                            elementDescriptor: g,
                            elementId: f,
                            justify: "center",
                            as: "span",
                            sx: [e => ({
                                flex: "0 0 ".concat(e.sizes.$9),
                                gap: e.space.$2,
                                alignItems: "center"
                            }), v],
                            children: r.isLoading ? (0, n.tZ)(a.Spinner, {
                                size: y || "xs",
                                elementDescriptor: a.descriptors.spinner,
                                sx: e => ({
                                    marginRight: e.space.$1
                                })
                            }) : (0, n.tZ)(a.Icon, {
                                elementDescriptor: u,
                                elementId: m,
                                icon: s,
                                sx: [e => ({
                                    width: e.sizes.$4,
                                    height: "auto",
                                    maxWidth: "100%"
                                }), h]
                            })
                        }), c ? o(c) : null, b]
                    })
                },
                m = e => {
                    let {
                        children: t,
                        title: r,
                        subtitle: o,
                        variant: i = "warning",
                        ...l
                    } = e;
                    return t || r || o ? (0, n.BX)(a.Alert, {
                        elementDescriptor: a.descriptors.alert,
                        elementId: a.descriptors.alert.setId(i),
                        colorScheme: i,
                        align: "start",
                        ...l,
                        sx: [e => ({
                            backgroundColor: e.colors.$warningAlpha100
                        }), l.sx],
                        children: [(0, n.tZ)(a.AlertIcon, {
                            elementId: a.descriptors.alert.setId(i),
                            elementDescriptor: a.descriptors.alertIcon,
                            variant: i,
                            colorScheme: i,
                            sx: {
                                flexShrink: "0"
                            }
                        }), (0, n.BX)(a.Col, {
                            elementDescriptor: a.descriptors.alertTextContainer,
                            elementId: a.descriptors.alertTextContainer.setId(i),
                            gap: 1,
                            children: [(0, n.tZ)(a.Text, {
                                elementDescriptor: a.descriptors.alertText,
                                elementId: a.descriptors.alert.setId(i),
                                colorScheme: "danger" === i ? "danger" : "warning" === i ? "warning" : "secondary",
                                variant: "body",
                                localizationKey: r,
                                sx: {
                                    textAlign: "left"
                                },
                                children: t
                            }), o && (0, n.tZ)(a.Text, {
                                elementDescriptor: a.descriptors.alertText,
                                elementId: a.descriptors.alert.setId(i),
                                colorScheme: "danger" === i ? "danger" : "secondary",
                                variant: "body",
                                localizationKey: o
                            })]
                        })]
                    }) : null
                };
            var h = r(7627);
            let g = e => {
                let {
                    children: t,
                    asChild: r
                } = e, {
                    animations: i
                } = (0, a.useAppearance)().parsedLayout, [l] = (0, h.u)();
                return r ? (0, o.cloneElement)(t, {
                    ref: i ? l : null
                }) : (0, n.tZ)("div", {
                    ref: i ? l : null,
                    children: t
                })
            };
            var f = r(7571),
                v = r(4676);
            let b = e => {
                    let {
                        to: t,
                        onClick: r,
                        ...o
                    } = e, i = (0, v.useRouter)(), l = i.resolve(t || i.indexPath);
                    return (0, n.tZ)(a.Link, { ...o,
                        onClick: e => (e.preventDefault(), r && !t) ? r(e) : i.navigate(l.href),
                        href: l.href
                    })
                },
                y = (e, t) => {
                    let r = 16 * Number.parseFloat(t.replace("rem", ""));
                    if (!e.current) return r;
                    let n = e.current.naturalWidth / e.current.naturalHeight,
                        o = "".concat(r, "px");
                    return n <= 1 ? o = "".concat(2 * r, "px") : n > 1 && n <= 2 && (o = "".concat(2 * r / n, "px")), o
                },
                x = e => {
                    let t = o.useRef(null),
                        [r, i] = o.useState(!1),
                        {
                            logoImageUrl: l,
                            applicationName: s,
                            homeUrl: c
                        } = (0, f.useEnvironment)().displayConfig,
                        {
                            parsedLayout: d
                        } = (0, a.useAppearance)(),
                        u = d.logoImageUrl || l,
                        p = d.logoLinkUrl || c;
                    if (!u) return null;
                    let m = (0, n.tZ)(a.Image, {
                        ref: t,
                        elementDescriptor: a.descriptors.logoImage,
                        alt: s,
                        src: u,
                        size: 200,
                        onLoad: () => i(!0),
                        sx: {
                            display: r ? "inline-block" : "none",
                            height: "100%",
                            width: "100%",
                            objectFit: "contain"
                        }
                    });
                    return (0, n.tZ)(a.Flex, {
                        elementDescriptor: a.descriptors.logoBox,
                        ...e,
                        sx: [e => ({
                            height: y(t, e.sizes.$6),
                            justifyContent: "center"
                        }), e.sx],
                        children: p ? (0, n.tZ)(b, {
                            sx: {
                                justifyContent: "center"
                            },
                            to: p,
                            children: m
                        }) : m
                    })
                };
            var w = r(8655);
            let S = o.forwardRef((e, t) => {
                let {
                    rightIcon: r = w.LZ,
                    rightIconSx: i,
                    leftIcon: l,
                    leftIconSx: s,
                    leftIconElementId: c,
                    leftIconElementDescriptor: d,
                    isLoading: u,
                    children: p,
                    textElementDescriptor: m,
                    textElementId: h,
                    spinnerElementDescriptor: g,
                    spinnerElementId: f,
                    arrowElementDescriptor: v,
                    arrowElementId: b,
                    textLocalizationKey: y,
                    childrenSx: x,
                    badge: S,
                    textVariant: C = "buttonSmall",
                    ..._
                } = e, k = (0, o.isValidElement)(l);
                return (0, n.BX)(a.SimpleButton, {
                    variant: "outline",
                    block: !0,
                    isLoading: u,
                    ..._,
                    ref: t,
                    sx: t => [{
                        gap: t.space.$1,
                        position: "relative",
                        justifyContent: "center",
                        borderColor: t.colors.$neutralAlpha100,
                        alignItems: "center",
                        padding: "".concat(t.space.$1x5, " ").concat(t.space.$3, " ").concat(t.space.$1x5, " ").concat(t.space.$2x5),
                        "--arrow-opacity": "0",
                        "--arrow-transform": "translateX(-".concat(t.space.$2, ");"),
                        "&:hover,&:focus ": {
                            "--arrow-opacity": "0.5",
                            "--arrow-transform": "translateX(0px);"
                        }
                    }, e.sx],
                    children: [(u || l) && (0, n.tZ)(a.Flex, {
                        as: "span",
                        sx: e => ({
                            flex: "0 0 ".concat(e.space.$5)
                        }),
                        children: u ? (0, n.tZ)(a.Spinner, {
                            elementDescriptor: g,
                            elementId: f,
                            size: "md"
                        }) : !k && l ? (0, n.tZ)(a.Icon, {
                            elementDescriptor: d,
                            elementId: c,
                            icon: l,
                            sx: [e => ({
                                width: e.sizes.$5
                            }), s]
                        }) : l
                    }), (0, n.BX)(a.Flex, {
                        gap: 2,
                        as: "span",
                        sx: [{
                            overflow: "hidden"
                        }, x],
                        children: [(0, n.tZ)(a.Text, {
                            elementDescriptor: m,
                            elementId: h,
                            as: "span",
                            truncate: !0,
                            variant: C,
                            localizationKey: y,
                            children: p
                        }), S]
                    }), (0, n.tZ)(a.Icon, {
                        elementDescriptor: v,
                        elementId: b,
                        icon: r,
                        sx: [e => ({
                            transition: "all 100ms ease",
                            minWidth: e.sizes.$4,
                            minHeight: e.sizes.$4,
                            width: "1em",
                            height: "1em",
                            opacity: "var(--arrow-opacity)",
                            transform: "var(--arrow-transform)"
                        }), i]
                    })]
                })
            });
            var C = r(5295);
            let _ = e => {
                    let {
                        size: t = () => 26,
                        title: r,
                        initials: i,
                        imageUrl: l,
                        rounded: s = !0,
                        imageFetchSize: c = 80,
                        sx: d,
                        boxElementDescriptor: u,
                        imageElementDescriptor: p
                    } = e, [m, h] = o.useState(!1), g = i && (!l || m) ? (0, n.tZ)(k, {
                        initials: i
                    }) : (0, n.tZ)(a.Image, {
                        elementDescriptor: [p, a.descriptors.avatarImage],
                        title: r,
                        alt: "".concat(r, "'s logo"),
                        src: l || "",
                        sx: {
                            objectFit: "cover",
                            width: "100%",
                            height: "100%"
                        },
                        onError: () => h(!0),
                        size: c
                    });
                    return (0, n.BX)(a.Flex, {
                        as: "span",
                        elementDescriptor: [u, a.descriptors.avatarBox],
                        sx: [e => ({
                            flexShrink: 0,
                            borderRadius: s ? e.radii.$circle : e.radii.$avatar,
                            overflow: "hidden",
                            width: t(e),
                            height: t(e),
                            backgroundColor: e.colors.$avatarBackground,
                            backgroundClip: "padding-box",
                            position: "relative"
                        }), d],
                        children: [g, (0, n.tZ)(a.Box, {
                            as: "span",
                            sx: e => ({
                                overflow: "hidden",
                                background: e.colors.$colorShimmer,
                                position: "absolute",
                                width: "25%",
                                height: "100%",
                                transition: "all ".concat(e.transitionDuration.$slow, " ").concat(e.transitionTiming.$easeOut),
                                transform: "var(--cl-shimmer-hover-transform, skewX(-45deg) translateX(-300%))",
                                ":after": {
                                    display: "block",
                                    boxSizing: "border-box",
                                    content: "''",
                                    position: "absolute",
                                    width: "400%",
                                    height: "100%",
                                    transform: "var(--cl-shimmer-hover-after-transform, skewX(45deg) translateX(75%))",
                                    transition: "all ".concat(e.transitionDuration.$slow, " ").concat(e.transitionTiming.$easeOut),
                                    borderWidth: e.borderWidths.$heavy,
                                    borderStyle: e.borderStyles.$solid,
                                    borderColor: e.colors.$colorShimmer,
                                    borderRadius: s ? e.radii.$circle : e.radii.$avatar
                                }
                            })
                        })]
                    })
                },
                k = e => {
                    let t = e.initials;
                    return (0, n.tZ)(a.Text, {
                        as: "span",
                        sx: { ...C.common.centeredFlex("inline-flex"),
                            width: "100%"
                        },
                        children: t
                    })
                };
            var $ = r(2539);
            let I = e => new Promise((t, r) => {
                    let n = new FileReader;
                    n.readAsDataURL(e), n.onload = () => t(n.result), n.onerror = e => r(e)
                }),
                P = Object.freeze(["image/png", "image/jpeg", "image/gif", "image/webp"]),
                A = e => P.includes(e.type),
                B = e => e.size <= 1e7,
                T = e => A(e) && B(e),
                Z = e => {
                    let [t, r] = o.useState(!1), [l, s] = o.useState(), c = (0, i.v)(), d = o.useRef(null), u = () => {
                        var e;
                        return null === (e = d.current) || void 0 === e ? void 0 : e.click()
                    }, {
                        onAvatarChange: p,
                        onAvatarRemove: m,
                        title: h,
                        avatarPreview: g,
                        avatarPreviewPlaceholder: f,
                        ...v
                    } = e, b = () => {
                        r(!t)
                    }, y = e => null === e ? s("") : (I(e).then(s), c.setLoading(), p(e).then(() => {
                        b(), c.setIdle()
                    }).catch(e => (0, $.S3)(e, [], c.setError))), x = async () => (c.setLoading(), await y(null), null == m ? void 0 : m()), w = async e => {
                        e && T(e) && await y(e)
                    }, S = l ? o.cloneElement(g, {
                        imageUrl: l
                    }) : f ? o.cloneElement(f, {
                        onClick: u
                    }) : g;
                    return (0, n.BX)(a.Col, {
                        gap: 4,
                        children: [(0, n.tZ)("input", {
                            type: "file",
                            accept: P.join(","),
                            style: {
                                display: "none"
                            },
                            ref: d,
                            onChange: e => {
                                var t;
                                return w(null === (t = e.currentTarget.files) || void 0 === t ? void 0 : t[0])
                            }
                        }), (0, n.BX)(a.Flex, {
                            gap: 4,
                            align: "center",
                            ...v,
                            children: [S, (0, n.BX)(a.Col, {
                                gap: 1,
                                children: [(0, n.BX)(a.Flex, {
                                    elementDescriptor: a.descriptors.avatarImageActions,
                                    gap: 2,
                                    children: [(0, n.tZ)(a.SimpleButton, {
                                        elementDescriptor: a.descriptors.avatarImageActionsUpload,
                                        localizationKey: (0, a.localizationKeys)("userProfile.profilePage.imageFormSubtitle"),
                                        isDisabled: c.isLoading,
                                        variant: "outline",
                                        size: "xs",
                                        onClick: u
                                    }), !!m && !t && (0, n.tZ)(a.Button, {
                                        elementDescriptor: a.descriptors.avatarImageActionsRemove,
                                        localizationKey: (0, a.localizationKeys)("userProfile.profilePage.imageFormDestructiveActionSubtitle"),
                                        isDisabled: c.isLoading,
                                        sx: e => ({
                                            color: e.colors.$danger500
                                        }),
                                        variant: "ghost",
                                        colorScheme: "danger",
                                        onClick: x
                                    })]
                                }), (0, n.tZ)(a.Text, {
                                    colorScheme: "secondary",
                                    sx: e => ({
                                        fontSize: e.fontSizes.$sm
                                    }),
                                    localizationKey: (0, a.localizationKeys)("userProfile.profilePage.fileDropAreaHint")
                                })]
                            })]
                        })]
                    })
                },
                R = e => {
                    let {
                        boxElementDescriptor: t,
                        linkElementDescriptor: r,
                        ...o
                    } = e;
                    return (0, n.tZ)(a.Flex, {
                        elementDescriptor: t,
                        sx: e => ({
                            margin: "".concat(e.space.$none, " auto")
                        }),
                        children: (0, n.tZ)(b, { ...o,
                            children: (0, n.tZ)(a.Text, {
                                localizationKey: (0, a.localizationKeys)("backButton"),
                                elementDescriptor: r,
                                variant: "body"
                            })
                        })
                    })
                },
                z = e => {
                    let {
                        isLoading: t,
                        children: r,
                        trailingComponent: o,
                        textElementDescriptor: i,
                        textElementId: l,
                        textLocalizationKey: s,
                        badge: c,
                        ...d
                    } = e;
                    return (0, n.BX)(a.Box, {
                        isLoading: t,
                        ...d,
                        sx: t => [{
                            borderRadius: t.radii.$md,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: t.space.$4,
                            position: "relative",
                            justifyContent: "flex-start",
                            borderColor: t.colors.$neutralAlpha200
                        }, e.sx],
                        children: [(0, n.BX)(a.Flex, {
                            justify: "start",
                            align: "center",
                            gap: 2,
                            sx: {
                                flexGrow: "1",
                                overflow: "hidden"
                            },
                            children: [(0, n.tZ)(a.Text, {
                                elementDescriptor: i,
                                elementId: l,
                                as: "span",
                                truncate: !0,
                                variant: "buttonSmall",
                                localizationKey: s,
                                children: r
                            }), c]
                        }), o]
                    })
                },
                L = o.memo(e => (0, n.tZ)(m, {
                    variant: "danger",
                    sx: e => ({
                        animation: "".concat(C.animations.textInBig, " ").concat(e.transitionDuration.$slow)
                    }),
                    ...e
                }));
            var E = r(143);
            let D = e => {
                    let {
                        gradient: t = 60
                    } = e, {
                        showDevModeNotice: r
                    } = (0, E.n)();
                    return r ? (0, n.tZ)(a.Box, {
                        sx: e => ({
                            userSelect: "none",
                            pointerEvents: "none",
                            inset: 0,
                            position: "absolute",
                            background: "repeating-linear-gradient(-45deg,".concat(e.colors.$warningAlpha100, ",").concat(e.colors.$warningAlpha100, " 6px,").concat(e.colors.$warningAlpha150, " 6px,").concat(e.colors.$warningAlpha150, " 12px)"),
                            maskImage: "linear-gradient(transparent ".concat(t, "%, black)")
                        })
                    }) : null
                },
                O = e => {
                    let {
                        sx: t
                    } = e, {
                        showDevModeNotice: r
                    } = (0, E.n)();
                    return r ? (0, n.tZ)(a.Text, {
                        sx: [e => ({
                            color: e.colors.$warning500,
                            fontWeight: e.fontWeights.$semibold,
                            padding: e.space.$1x5
                        }), t],
                        children: "Development mode"
                    }) : null
                },
                F = o.memo(o.forwardRef((e, t) => {
                    let {
                        sx: r,
                        outerSx: o,
                        withFooterPages: i = !1,
                        withDevOverlay: l = !1,
                        devModeNoticeSx: s,
                        ...c
                    } = e, {
                        displayConfig: d
                    } = (0, f.useEnvironment)(), {
                        showDevModeNotice: u
                    } = (0, E.n)();
                    return d.branded || i || u ? (0, n.BX)(a.Box, {
                        sx: [{
                            width: "100%",
                            position: "relative",
                            isolation: "isolate"
                        }, o],
                        children: [l && (0, n.tZ)(D, {
                            gradient: 0
                        }), (0, n.BX)(a.Col, {
                            sx: e => ({
                                gap: d.branded || i ? e.space.$2 : 0,
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 1,
                                position: "relative"
                            }),
                            children: [(d.branded || i) && (0, n.BX)(a.Flex, {
                                sx: [{
                                    ":has(div:only-child)": {
                                        justifyContent: "center"
                                    },
                                    justifyContent: "space-between",
                                    width: "100%"
                                }, r],
                                ...c,
                                ref: t,
                                children: [d.branded && (0, n.tZ)(a.Flex, {
                                    gap: 1,
                                    align: "center",
                                    justify: "center",
                                    sx: e => ({
                                        color: e.colors.$colorTextSecondary
                                    }),
                                    children: (0, n.BX)(n.HY, {
                                        children: [(0, n.tZ)(a.Text, {
                                            variant: "buttonSmall",
                                            children: "Secured by"
                                        }), (0, n.tZ)(M, {})]
                                    })
                                }), i && (0, n.tZ)(et.FooterLinks, {})]
                            }), (0, n.tZ)(O, {
                                sx: s
                            })]
                        })]
                    }) : null
                })),
                M = () => (0, n.tZ)(a.Link, {
                    href: "https://www.clerk.com?utm_source=clerk&utm_medium=components",
                    colorScheme: "inherit",
                    isExternal: !0,
                    "aria-label": "Clerk logo",
                    children: (0, n.tZ)(a.Icon, {
                        icon: w.cN,
                        sx: e => ({
                            width: e.sizes.$12,
                            height: e.sizes.$3x5
                        })
                    })
                }),
                U = e => {
                    let {
                        children: t,
                        icon: r,
                        localizationKey: i,
                        iconElementDescriptor: l,
                        ...s
                    } = e, {
                        t: c
                    } = (0, a.useLocalizations)(), d = c(i), u = (0, o.isValidElement)(r) ? (0, o.cloneElement)(r, {
                        "aria-hidden": !0,
                        focusable: !1
                    }) : (0, n.tZ)(a.Icon, {
                        elementDescriptor: l,
                        icon: r,
                        size: "md"
                    });
                    return (0, n.tZ)(a.Button, { ...s,
                        children: (0, n.BX)(n.HY, {
                            children: [u, d || t]
                        })
                    })
                };
            var j = r(4914);
            let V = 0,
                W = () => {};
            var N = r(4170);
            let H = e => {
                    let {
                        context: t,
                        initialFocus: r,
                        order: o = ["reference", "content"],
                        nodeId: a,
                        isOpen: i,
                        portal: l = !0,
                        children: s
                    } = e;
                    return l ? (0, n.tZ)(N.mN, {
                        id: a,
                        children: (0, n.tZ)(N.ll, {
                            children: i && (0, n.tZ)(N.wD, {
                                context: t,
                                initialFocus: r,
                                order: o,
                                children: (0, n.tZ)(n.HY, {
                                    children: s
                                })
                            })
                        })
                    }) : (0, n.tZ)(N.mN, {
                        id: a,
                        children: i && (0, n.tZ)(N.wD, {
                            context: t,
                            initialFocus: r,
                            order: o,
                            children: (0, n.tZ)(n.HY, {
                                children: s
                            })
                        })
                    })
                },
                [X, K, Y] = (0, j.uH)("ModalContext"),
                q = (0, i.TJ)(e => {
                    let {
                        disableScrollLock: t,
                        enableScrollLock: r
                    } = {
                        enableScrollLock: () => {
                            1 == ++V && (W = function() {
                                let e = /iP(hone|ad|od)|iOS/.test(function() {
                                        let e = navigator.userAgentData;
                                        return (null == e ? void 0 : e.platform) ? e.platform : navigator.platform
                                    }()),
                                    t = document.body.style,
                                    r = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight",
                                    n = window.innerWidth - document.documentElement.clientWidth,
                                    o = t.left ? parseFloat(t.left) : window.scrollX,
                                    a = t.top ? parseFloat(t.top) : window.scrollY;
                                if (t.overflow = "hidden", n && (t[r] = "".concat(n, "px")), e) {
                                    var i, l;
                                    let e = (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.offsetLeft) || 0,
                                        r = (null === (l = window.visualViewport) || void 0 === l ? void 0 : l.offsetTop) || 0;
                                    Object.assign(t, {
                                        position: "fixed",
                                        top: "".concat(-(a - Math.floor(r)), "px"),
                                        left: "".concat(-(o - Math.floor(e)), "px"),
                                        right: "0"
                                    })
                                }
                                return () => {
                                    Object.assign(t, {
                                        overflow: "",
                                        [r]: ""
                                    }), e && (Object.assign(t, {
                                        position: "",
                                        top: "",
                                        left: "",
                                        right: ""
                                    }), window.scrollTo(o, a))
                                }
                            }())
                        },
                        disableScrollLock: () => {
                            0 == --V && W()
                        }
                    }, {
                        handleClose: i,
                        handleOpen: s,
                        contentSx: c,
                        containerSx: d,
                        canCloseModal: u,
                        id: p,
                        style: m
                    } = e, h = (0, o.useRef)(null), {
                        floating: g,
                        isOpen: f,
                        context: v,
                        nodeId: b,
                        toggle: y
                    } = (0, l.Sv)({
                        defaultOpen: !0,
                        autoUpdate: !1,
                        outsidePress: e => e.target === h.current,
                        canCloseModal: u
                    });
                    o.useEffect(() => {
                        f ? null == s || s() : null == i || i()
                    }, [f]);
                    let x = o.useMemo(() => ({
                        value: !1 === u ? {} : {
                            toggle: y
                        }
                    }), [y, u]);
                    return (0, j.Gw)(() => (r(), () => {
                        t()
                    }), []), (0, n.tZ)(H, {
                        nodeId: b,
                        context: v,
                        isOpen: f,
                        children: (0, n.tZ)(X.Provider, {
                            value: x,
                            children: (0, n.tZ)(a.Flex, {
                                id: p,
                                ref: h,
                                elementDescriptor: a.descriptors.modalBackdrop,
                                style: m,
                                sx: [e => ({
                                    animation: "".concat(C.animations.fadeIn, " 150ms ").concat(e.transitionTiming.$common),
                                    zIndex: e.zIndices.$modal,
                                    backgroundColor: e.colors.$modalBackdrop,
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    overflow: "auto",
                                    width: "100vw",
                                    height: ["100vh", "-webkit-fill-available"],
                                    position: "fixed",
                                    left: 0,
                                    top: 0
                                }), d],
                                children: (0, n.tZ)(a.Flex, {
                                    elementDescriptor: a.descriptors.modalContent,
                                    ref: g,
                                    "aria-modal": "true",
                                    role: "dialog",
                                    sx: [e => ({
                                        position: "relative",
                                        outline: 0,
                                        animation: "".concat(C.animations.modalSlideAndFade, " 180ms ").concat(e.transitionTiming.$easeOut),
                                        margin: "".concat(e.space.$16, " 0"),
                                        [C.mqu.sm]: {
                                            margin: "".concat(e.space.$10, " 0")
                                        }
                                    }), c],
                                    children: e.children
                                })
                            })
                        })
                    })
                }),
                G = o.forwardRef((e, t) => {
                    let {
                        children: r,
                        sx: o,
                        ...l
                    } = e, s = (0, i.Li)(), {
                        toggle: c
                    } = Y(), {
                        maintenanceMode: d
                    } = (0, f.useEnvironment)(), u = (0, i.v)(), {
                        t: p
                    } = (0, a.useLocalizations)();
                    return (0, n.BX)(a.Flex, {
                        direction: "col",
                        className: (0, a.generateFlowPartClassname)(s),
                        elementDescriptor: a.descriptors.card,
                        sx: [e => ({
                            backgroundColor: e.colors.$colorBackground,
                            transitionProperty: e.transitionProperty.$common,
                            transitionDuration: "200ms",
                            textAlign: "center",
                            zIndex: e.zIndices.$card,
                            borderWidth: e.borderWidths.$normal,
                            borderStyle: e.borderStyles.$solid,
                            borderColor: e.colors.$neutralAlpha50,
                            boxShadow: e.shadows.$cardContentShadow,
                            borderRadius: e.radii.$lg,
                            position: "relative",
                            padding: "".concat(e.space.$8, " ").concat(e.space.$10),
                            justifyContent: "center",
                            alignContent: "center"
                        }), o],
                        gap: 8,
                        ref: t,
                        ...l,
                        children: [c && (0, n.tZ)(U, {
                            elementDescriptor: a.descriptors.modalCloseButton,
                            variant: "ghost",
                            "aria-label": "Close modal",
                            onClick: c,
                            icon: (0, n.tZ)(a.Icon, {
                                icon: w.x8,
                                size: "xs"
                            }),
                            sx: e => ({
                                color: e.colors.$colorTextSecondary,
                                zIndex: e.zIndices.$modal,
                                position: "absolute",
                                top: e.space.$2,
                                right: e.space.$2,
                                padding: e.space.$3
                            })
                        }), d && !u.error && (0, n.tZ)(L, {
                            variant: "warning",
                            children: p((0, a.localizationKeys)("maintenanceMode"))
                        }), r]
                    })
                }),
                J = o.forwardRef((e, t) => {
                    let {
                        children: r,
                        isProfileFooter: o = !1,
                        sx: i,
                        ...l
                    } = e, {
                        displayConfig: s
                    } = (0, f.useEnvironment)(), {
                        branded: c
                    } = s, {
                        showDevModeNotice: d
                    } = (0, E.n)(), {
                        helpPageUrl: u,
                        privacyPageUrl: p,
                        termsPageUrl: m
                    } = (0, a.useAppearance)().parsedLayout, h = o ? c : !!(c || u || p || m);
                    return r || h || d ? (0, n.BX)(a.Flex, {
                        direction: "col",
                        align: "center",
                        justify: "center",
                        elementDescriptor: a.descriptors.footer,
                        sx: [e => ({
                            marginTop: "-".concat(e.space.$2),
                            paddingTop: e.space.$2,
                            background: C.common.mergedColorsBackground($.O9.setAlpha(e.colors.$colorBackground, 1), e.colors.$neutralAlpha50),
                            "&:empty": {
                                padding: 0,
                                marginTop: 0
                            }
                        }), !o && (e => ({
                            ">:first-of-type": {
                                padding: "".concat(e.space.$4, " ").concat(e.space.$8, " ").concat(e.space.$4, " ").concat(e.space.$8)
                            },
                            ">:not(:first-of-type)": {
                                padding: "".concat(e.space.$4, " ").concat(e.space.$8),
                                borderTopWidth: e.borderWidths.$normal,
                                borderTopStyle: e.borderStyles.$solid,
                                borderTopColor: e.colors.$neutralAlpha100
                            }
                        })), i],
                        ...l,
                        ref: t,
                        children: [r, (0, n.tZ)(et.ClerkAndPagesTag, {
                            withFooterPages: h && !o,
                            devModeNoticeSx: e => ({
                                padding: e.space.$none
                            }),
                            outerSx: o ? e => ({
                                padding: "".concat(e.space.$4, " ").concat(e.space.$8)
                            }) : void 0,
                            withDevOverlay: !0
                        })]
                    }) : null
                }),
                Q = e => (0, n.tZ)(a.Link, {
                    elementDescriptor: a.descriptors.footerPagesLink,
                    ...e,
                    colorScheme: "neutral",
                    variant: "buttonSmall"
                }),
                ee = o.memo(() => {
                    let {
                        helpPageUrl: e,
                        privacyPageUrl: t,
                        termsPageUrl: r
                    } = (0, a.useAppearance)().parsedLayout;
                    return e || t || r ? (0, n.BX)(a.Flex, {
                        elementDescriptor: a.descriptors.footerPages,
                        justify: "between",
                        sx: e => ({
                            gap: e.space.$3,
                            [C.mqu.sm]: {
                                gap: e.space.$2
                            }
                        }),
                        children: [e && (0, n.tZ)(Q, {
                            localizationKey: (0, a.localizationKeys)("footerPageLink__help"),
                            elementId: a.descriptors.footerPagesLink.setId("help"),
                            isExternal: !0,
                            href: e
                        }), t && (0, n.tZ)(Q, {
                            localizationKey: (0, a.localizationKeys)("footerPageLink__privacy"),
                            elementId: a.descriptors.footerPagesLink.setId("privacy"),
                            isExternal: !0,
                            href: t
                        }), r && (0, n.tZ)(Q, {
                            localizationKey: (0, a.localizationKeys)("footerPageLink__terms"),
                            elementId: a.descriptors.footerPagesLink.setId("terms"),
                            isExternal: !0,
                            href: r
                        })]
                    }) : null
                }),
                et = {
                    Root: o.forwardRef((e, t) => {
                        let {
                            sx: r,
                            children: o,
                            ...l
                        } = e, s = (0, a.useAppearance)(), c = (0, i.Li)();
                        return (0, n.BX)(n.HY, {
                            children: ["outside" === s.parsedLayout.logoPlacement && (0, n.tZ)(x, {
                                sx: e => ({
                                    position: "relative",
                                    [C.mqu.sm]: {
                                        margin: "0 0 ".concat(e.space.$7, " 0")
                                    }
                                })
                            }), (0, n.tZ)(a.Col, {
                                elementDescriptor: [a.descriptors.cardBox, e.elementDescriptor],
                                className: (0, a.generateFlowPartClassname)(c),
                                ref: t,
                                sx: [e => ({
                                    isolation: "isolate",
                                    maxWidth: "calc(100vw - ".concat(e.sizes.$10, ")"),
                                    width: e.sizes.$100,
                                    borderWidth: e.borderWidths.$normal,
                                    borderStyle: e.borderStyles.$solid,
                                    borderColor: e.colors.$neutralAlpha100,
                                    boxShadow: e.shadows.$cardBoxShadow,
                                    borderRadius: e.radii.$xl,
                                    color: e.colors.$colorText,
                                    position: "relative",
                                    overflow: "hidden"
                                }), r],
                                ...l,
                                children: o
                            })]
                        })
                    }),
                    Content: G,
                    Footer: J,
                    Alert: L,
                    Action: e => {
                        let {
                            elementId: t,
                            sx: r,
                            ...o
                        } = e;
                        return (0, n.tZ)(a.Flex, {
                            elementDescriptor: a.descriptors.footerAction,
                            elementId: a.descriptors.footerAction.setId(t),
                            ...o,
                            gap: 1,
                            sx: [e => ({
                                margin: "".concat(e.space.$none, " auto")
                            }), r]
                        })
                    },
                    ActionLink: e => (0, n.tZ)(b, {
                        elementDescriptor: a.descriptors.footerActionLink,
                        ...e,
                        colorScheme: "primary",
                        variant: "buttonLarge"
                    }),
                    ActionText: e => (0, n.tZ)(a.Text, {
                        elementDescriptor: a.descriptors.footerActionText,
                        ...e,
                        as: "span",
                        variant: "body",
                        colorScheme: "secondary"
                    }),
                    FooterLinks: ee,
                    ClerkAndPagesTag: F
                },
                er = e => {
                    let {
                        id: t,
                        value: r,
                        ...o
                    } = e, {
                        onCopy: i,
                        hasCopied: s
                    } = (0, l.VP)(r);
                    return (0, n.BX)(a.Flex, {
                        direction: "col",
                        justify: "center",
                        sx: {
                            position: "relative"
                        },
                        children: [(0, n.tZ)(a.Input, { ...o,
                            value: r,
                            isDisabled: !0,
                            sx: e => ({
                                paddingRight: e.space.$8
                            })
                        }), (0, n.tZ)(a.Button, {
                            elementDescriptor: a.descriptors.formFieldInputCopyToClipboardButton,
                            variant: "ghost",
                            tabIndex: -1,
                            onClick: i,
                            sx: {
                                position: "absolute",
                                right: 0
                            },
                            children: (0, n.tZ)(a.Icon, {
                                elementDescriptor: a.descriptors.formFieldInputCopyToClipboardIcon,
                                icon: s ? w.qy : w.TU,
                                size: "sm"
                            })
                        })]
                    })
                },
                en = e => {
                    let {
                        t
                    } = (0, a.useLocalizations)(), {
                        onClick: r,
                        throttleTimeInSec: i = 30,
                        startDisabled: l,
                        children: s,
                        localizationKey: c,
                        showCounter: d = !0,
                        ...u
                    } = e, [p, m] = o.useState(0), h = o.useRef(void 0);
                    (0, j.Gw)(() => {
                        l && g()
                    }, []), (0, o.useEffect)(() => () => clearInterval(h.current), []);
                    let g = () => {
                        m(i), h.current = window.setInterval(() => {
                            m(e => (1 === e && clearInterval(h.current), e - 1))
                        }, 1e3)
                    };
                    return (0, n.BX)(a.Button, {
                        variant: "link",
                        ...u,
                        textVariant: "buttonSmall",
                        isDisabled: p > 0 || e.isDisabled,
                        onClick: e => {
                            !p && (null == r || r(e), g())
                        },
                        children: [t(c) || s, p && d ? " (".concat(p, ")") : ""]
                    })
                },
                eo = e => {
                    let t = (0, i.v)(),
                        {
                            id: r = "code",
                            onCodeEntryFinished: n,
                            onResendCodeClicked: a,
                            onResolve: s
                        } = e,
                        c = (0, $.Yp)(r, ""),
                        d = ea(c),
                        u = (0, l._m)(),
                        p = async e => {
                            c.setSuccess("success"), await (0, $._v)(750), await (null == s ? void 0 : s(e))
                        },
                        m = async e => {
                            (0, $.S3)(e, [c], t.setError), u.setIdle(), await (0, $._v)(750), d.reset()
                        };
                    d.onCodeEntryFinished(e => {
                        u.setLoading(), c.clearFeedback(), n(e, p, m)
                    });
                    let h = (0, o.useCallback)(e => {
                        d.reset(), null == a || a(e)
                    }, [d, a]);
                    return {
                        isLoading: u.isLoading,
                        otpControl: d,
                        onResendCode: a ? h : void 0,
                        onFakeContinue: () => {
                            c.clearFeedback(), n("", p, m)
                        }
                    }
                },
                ea = (e, t) => {
                    let r = o.useRef(),
                        n = o.useRef(),
                        a = e.value,
                        {
                            feedback: i,
                            feedbackType: l,
                            onChange: s,
                            clearFeedback: c
                        } = e,
                        {
                            length: d = 6
                        } = t || {},
                        [u, p] = o.useState(() => a ? a.split("").slice(0, d) : Array.from({
                            length: d
                        }, () => ""));
                    return o.useEffect(() => {
                        if (u.filter(e => e).length === d) {
                            var e;
                            let t = u.map(e => e || " ").join("");
                            null === (e = n.current) || void 0 === e || e.call(n, t)
                        } else {
                            let e = u.join("");
                            null == s || s({
                                target: {
                                    value: e
                                }
                            })
                        }
                    }, [u.toString()]), {
                        otpInputProps: {
                            length: d,
                            values: u,
                            setValues: p,
                            feedback: i,
                            feedbackType: l,
                            clearFeedback: c,
                            ref: r
                        },
                        onCodeEntryFinished: e => {
                            n.current = e
                        },
                        reset: () => {
                            var e;
                            return null === (e = r.current) || void 0 === e ? void 0 : e.reset()
                        }
                    }
                },
                [ei, el] = (0, j.uH)("OTPInputContext"),
                es = e => {
                    let {
                        children: t,
                        ...r
                    } = e;
                    return (0, n.tZ)(ei.Provider, {
                        value: {
                            value: r
                        },
                        children: t
                    })
                },
                ec = () => {
                    let {
                        resendButton: e,
                        onResendCode: t,
                        isLoading: r,
                        otpControl: o
                    } = el();
                    return t ? (0, n.tZ)(en, {
                        elementDescriptor: a.descriptors.formResendCodeLink,
                        onClick: t,
                        startDisabled: !0,
                        isDisabled: "success" === o.otpInputProps.feedbackType || r,
                        showCounter: "success" !== o.otpInputProps.feedbackType,
                        localizationKey: e
                    }) : null
                },
                ed = o.forwardRef((e, t) => {
                    let [r, i] = o.useState(!1), l = o.useRef([]), s = o.useRef(!1), {
                        otpControl: c,
                        isLoading: d,
                        isDisabled: u,
                        centerAlign: p = !0
                    } = el(), {
                        feedback: m,
                        values: h,
                        setValues: g,
                        feedbackType: f,
                        length: v
                    } = c.otpInputProps;
                    o.useImperativeHandle(t, () => ({
                        reset: () => {
                            g(h.map(() => "")), i(!1), setTimeout(() => x(0), 0)
                        }
                    })), o.useLayoutEffect(() => {
                        setTimeout(() => x(0), 0)
                    }, []), o.useEffect(() => {
                        m && i(!0)
                    }, [m]);
                    let b = e => {
                            let {
                                eventValue: t,
                                inputPosition: r
                            } = e, n = (t || "").split("");
                            if (0 !== n.length && n.every(e => ep(e))) {
                                if (n.length === v) {
                                    g([...n]), x(v - 1);
                                    return
                                }
                                g(h.map((e, t) => t < r ? e : n[t - r] || e)), x(r + n.length)
                            }
                        },
                        y = (e, t) => {
                            let r = [...h];
                            r[e] = t, g(r)
                        },
                        x = e => {
                            let t = Math.min(Math.max(0, e), l.current.length - 1),
                                r = l.current[t];
                            r && (r.focus(), h[t] && r.select())
                        },
                        w = e => t => {
                            if (t.preventDefault(), !s.current) {
                                x(0), s.current = !0;
                                return
                            }
                            x(e)
                        },
                        S = e => t => {
                            t.preventDefault(), b({
                                eventValue: t.target.value || "",
                                inputPosition: e
                            })
                        },
                        C = e => t => {
                            t.preventDefault(), ep(t.target.value) && x(e + 1)
                        },
                        _ = e => t => {
                            t.preventDefault(), b({
                                eventValue: t.clipboardData.getData("text/plain") || "",
                                inputPosition: e
                            })
                        },
                        k = e => t => {
                            switch (t.key) {
                                case "Backspace":
                                    t.preventDefault(), y(e, ""), x(e - 1);
                                    return;
                                case "ArrowLeft":
                                    t.preventDefault(), x(e - 1);
                                    return;
                                case "ArrowRight":
                                    t.preventDefault(), x(e + 1);
                                    return;
                                case " ":
                                    t.preventDefault();
                                    return
                            }
                        },
                        $ = p ? {
                            justifyContent: "center",
                            alignItems: "center"
                        } : {};
                    return (0, n.tZ)(a.Flex, {
                        isLoading: d,
                        hasError: "error" === f,
                        elementDescriptor: a.descriptors.otpCodeFieldInputs,
                        gap: 2,
                        sx: e => ({
                            direction: "ltr",
                            padding: e.space.$1,
                            marginLeft: "-".concat(e.space.$1),
                            ...$
                        }),
                        children: h.map((e, t) => (0, n.tZ)(eu, {
                            elementDescriptor: a.descriptors.otpCodeFieldInput,
                            value: e,
                            onClick: w(t),
                            onChange: S(t),
                            onKeyDown: k(t),
                            onInput: C(t),
                            onPaste: _(t),
                            id: "digit-".concat(t, "-field"),
                            ref: e => l.current[t] = e,
                            autoFocus: 0 === t || void 0,
                            autoComplete: "one-time-code",
                            "aria-label": "".concat(0 === t ? "Enter verification code. " : "", "Digit ").concat(t + 1),
                            isDisabled: u || d || r || "success" === f,
                            hasError: "error" === f,
                            isSuccessfullyFilled: "success" === f,
                            type: "text",
                            inputMode: "numeric",
                            name: "codeInput-".concat(t)
                        }, t))
                    })
                }),
                eu = o.forwardRef((e, t) => {
                    let {
                        isSuccessfullyFilled: r,
                        ...o
                    } = e;
                    return (0, n.tZ)(a.Input, {
                        ref: t,
                        type: "text",
                        sx: t => ({
                            textAlign: "center",
                            ...C.common.textVariants(t).h2,
                            padding: "".concat(t.space.$0x5, " 0"),
                            boxSizing: "border-box",
                            height: t.space.$10,
                            width: t.space.$10,
                            borderRadius: t.radii.$md,
                            ...r ? {
                                borderColor: t.colors.$success500
                            } : C.common.borderColor(t, e),
                            backgroundColor: "unset",
                            "&:focus": {},
                            [C.mqu.sm]: {
                                height: t.space.$8,
                                width: t.space.$8
                            }
                        }),
                        ...o
                    })
                }),
                ep = e => void 0 != e && Number.isInteger(+e),
                em = e => {
                    let {
                        dividerText: t,
                        ...r
                    } = e;
                    return (0, n.BX)(a.Flex, {
                        center: !0,
                        elementDescriptor: a.descriptors.dividerRow,
                        ...r,
                        children: [(0, n.tZ)(eh, {}), (0, n.tZ)(a.Text, {
                            localizationKey: t || (0, a.localizationKeys)("dividerText"),
                            elementDescriptor: a.descriptors.dividerText,
                            variant: "body",
                            colorScheme: "secondary",
                            sx: e => ({
                                margin: "0 ".concat(e.space.$4)
                            })
                        }), (0, n.tZ)(eh, {})]
                    })
                },
                eh = () => (0, n.tZ)(a.Flex, {
                    elementDescriptor: a.descriptors.dividerLine,
                    sx: e => ({
                        flex: "1",
                        height: "1px",
                        backgroundColor: e.colors.$neutralAlpha100
                    })
                });
            var eg = r(3234);
            let ef = o.memo(o.forwardRef((e, t) => {
                    let {
                        sx: r,
                        children: o,
                        contentSx: i,
                        gap: l = 6,
                        showLogo: s = !1,
                        ...c
                    } = e, d = "inside" === (0, a.useAppearance)().parsedLayout.logoPlacement && s;
                    return (0, n.BX)(a.Col, {
                        ref: t,
                        elementDescriptor: a.descriptors.header,
                        gap: l,
                        sx: r,
                        ...c,
                        children: [d && (0, n.tZ)(x, {}), (0, n.tZ)(a.Col, {
                            gap: 1,
                            sx: i,
                            ...c,
                            children: o
                        })]
                    })
                })),
                ev = {
                    Root: ef,
                    Title: o.memo(e => {
                        let {
                            sx: t,
                            textVariant: r = "h2",
                            ...o
                        } = e;
                        return (0, n.tZ)(a.Heading, {
                            elementDescriptor: a.descriptors.headerTitle,
                            textVariant: r,
                            sx: t,
                            ...o
                        })
                    }),
                    Subtitle: o.memo(e => {
                        let {
                            sx: t,
                            ...r
                        } = e;
                        return (0, n.tZ)(a.Text, {
                            elementDescriptor: a.descriptors.headerSubtitle,
                            variant: "body",
                            colorScheme: "secondary",
                            sx: [{
                                wordWrap: "break-word"
                            }, t],
                            ...r
                        })
                    })
                },
                eb = e => {
                    let {
                        shouldNavigateBack: t = !0
                    } = e, r = (0, i.v)(), {
                        navigate: o
                    } = (0, v.useRouter)(), l = (0, eg.H)();
                    return (0, n.tZ)(a.Flow.Part, {
                        part: "havingTrouble",
                        children: (0, n.BX)(et.Root, {
                            children: [(0, n.BX)(et.Content, {
                                children: [(0, n.BX)(ev.Root, {
                                    showLogo: !0,
                                    children: [(0, n.tZ)(ev.Title, {
                                        localizationKey: e.cardTitle || "Error"
                                    }), e.cardSubtitle && (0, n.tZ)(ev.Subtitle, {
                                        localizationKey: e.cardSubtitle
                                    })]
                                }), (0, n.tZ)(et.Alert, {
                                    children: r.error
                                }), (0, n.BX)(a.Flex, {
                                    direction: "col",
                                    elementDescriptor: a.descriptors.main,
                                    gap: 4,
                                    children: [e.message && (0, n.tZ)(a.Text, {
                                        colorScheme: "secondary",
                                        localizationKey: e.message
                                    }), (0, n.tZ)(a.Button, {
                                        localizationKey: (0, a.localizationKeys)("signIn.alternativeMethods.getHelp.blockButton__emailSupport"),
                                        onClick: () => {
                                            window.location.href = "mailto:".concat(l)
                                        },
                                        hasArrow: !0
                                    }), t ? (0, n.tZ)(et.Action, {
                                        elementId: "alternativeMethods",
                                        children: (0, n.tZ)(et.ActionLink, {
                                            localizationKey: (0, a.localizationKeys)("backButton"),
                                            onClick: r => {
                                                if (e.onBackLinkClick) return e.onBackLinkClick(r);
                                                t && o("../")
                                            }
                                        })
                                    }) : null]
                                })]
                            }), (0, n.tZ)(et.Footer, {})]
                        })
                    })
                };
            var ey = r(763),
                ex = r(5027);
            let ew = e => {
                    let {
                        feedback: t
                    } = e, [r, n] = (0, o.useState)(0);
                    return {
                        height: r,
                        calculateHeight: (0, o.useCallback)(e => {
                            e && n(e.scrollHeight + 2 * e.offsetTop)
                        }, [t])
                    }
                },
                eS = e => {
                    var t, r, i, s, c, d, u, p, m, h;
                    let {
                        id: g,
                        elementDescriptors: f,
                        sx: v,
                        feedback: b,
                        feedbackType: y = "info",
                        center: x = !1,
                        errorMessageId: w
                    } = e, S = (0, o.useRef)({
                        a: void 0,
                        b: void 0
                    }), {
                        getFormTextAnimation: _
                    } = function() {
                        let e = (0, l.Tb)(),
                            {
                                animations: t
                            } = (0, a.useAppearance)().parsedLayout;
                        return {
                            getFormTextAnimation: (0, o.useCallback)((r, n) => {
                                if (e || !t) return {
                                    animation: "none"
                                };
                                let o = (null == n ? void 0 : n.inDelay) ? C.animations.inDelayAnimation : C.animations.inAnimation;
                                return e => ({
                                    animation: "".concat(r ? o : C.animations.outAnimation, " ").concat(e.transitionDuration.$textField, " ").concat(e.transitionTiming.$common),
                                    transitionProperty: "height",
                                    transitionDuration: e.transitionDuration.$slow,
                                    transitionTimingFunction: e.transitionTiming.$common
                                })
                            }, [e])
                        }
                    }(), k = {
                        error: a.descriptors.formFieldErrorText,
                        warning: a.descriptors.formFieldWarningText,
                        info: a.descriptors.formFieldInfoText,
                        success: a.descriptors.formFieldSuccessText
                    }, $ = (0, o.useMemo)(() => {
                        var e;
                        let t;
                        let r = S.current;
                        return t = (null === (e = r.a) || void 0 === e ? void 0 : e.shouldEnter) ? {
                            a: { ...r.a,
                                shouldEnter: !1
                            },
                            b: {
                                feedback: b,
                                feedbackType: y,
                                shouldEnter: !0
                            }
                        } : {
                            a: {
                                feedback: b,
                                feedbackType: y,
                                shouldEnter: !0
                            },
                            b: { ...r.b,
                                shouldEnter: !1
                            }
                        }, S.current = t, t
                    }, [b, y]), {
                        calculateHeight: I,
                        height: P
                    } = ew({
                        feedback: (null === (t = $.a) || void 0 === t ? void 0 : t.feedback) || ""
                    }), {
                        calculateHeight: A,
                        height: B
                    } = ew({
                        feedback: (null === (r = $.b) || void 0 === r ? void 0 : r.feedback) || ""
                    }), T = (0, o.useRef)(Math.max(P, B)), Z = (0, o.useMemo)(() => {
                        let e = Math.max(P, B, T.current);
                        return T.current = e, e
                    }, [P, B]), R = e => {
                        var t;
                        if (!e) return {};
                        let r = (null == f ? void 0 : f[e]) || k[e];
                        return {
                            elementDescriptor: r,
                            elementId: g ? null == r ? void 0 : null === (t = r.setId) || void 0 === t ? void 0 : t.call(r, g) : void 0,
                            id: "error" === e ? w : void 0
                        }
                    }, z = {
                        error: a.FormErrorText,
                        info: a.FormInfoText,
                        success: a.FormSuccessText,
                        warning: a.FormWarningText
                    }, L = z[(null === (i = $.a) || void 0 === i ? void 0 : i.feedbackType) || "info"], E = z[(null === (s = $.b) || void 0 === s ? void 0 : s.feedbackType) || "info"];
                    return (0, n.BX)(a.Flex, {
                        style: {
                            height: b ? Z : 0,
                            position: "relative"
                        },
                        center: x,
                        sx: [_(!!b), v],
                        children: [(0, n.tZ)(L, { ...R(null === (c = $.a) || void 0 === c ? void 0 : c.feedbackType),
                            ref: I,
                            sx: [() => {
                                var e;
                                return {
                                    visibility: (null === (e = $.a) || void 0 === e ? void 0 : e.shouldEnter) ? "visible" : "hidden"
                                }
                            }, _(!!(null === (d = $.a) || void 0 === d ? void 0 : d.shouldEnter), {
                                inDelay: !0
                            })],
                            localizationKey: (0, ex.MI)(null === (u = $.a) || void 0 === u ? void 0 : u.feedback)
                        }), (0, n.tZ)(E, { ...R(null === (p = $.b) || void 0 === p ? void 0 : p.feedbackType),
                            ref: A,
                            sx: [() => {
                                var e;
                                return {
                                    visibility: (null === (e = $.b) || void 0 === e ? void 0 : e.shouldEnter) ? "visible" : "hidden"
                                }
                            }, _(!!(null === (m = $.b) || void 0 === m ? void 0 : m.shouldEnter), {
                                inDelay: !0
                            })],
                            localizationKey: (0, ex.MI)(null === (h = $.b) || void 0 === h ? void 0 : h.feedback)
                        })]
                    })
                },
                eC = (0, o.forwardRef)((e, t) => {
                    let {
                        sx: r,
                        groupPrefix: o,
                        groupSuffix: i,
                        ...l
                    } = e, s = o ? {
                        borderTopLeftRadius: "0",
                        borderBottomLeftRadius: "0"
                    } : {
                        borderTopRightRadius: "0",
                        borderBottomRightRadius: "0"
                    }, c = e => ({
                        paddingInline: e.space.$2,
                        borderTopRightRadius: "0",
                        borderBottomRightRadius: "0",
                        width: "fit-content",
                        display: "flex",
                        alignItems: "center"
                    });
                    return (0, n.BX)(a.Flex, {
                        elementDescriptor: a.descriptors.formInputGroup,
                        direction: "row",
                        hasError: l.hasError,
                        sx: e => ({
                            position: "relative",
                            zIndex: 1,
                            ...C.common.borderVariants(e).normal,
                            ":focus-within": { ...C.common.borderVariants(e, {
                                    focusRignt: !0
                                }).normal["&:focus"]
                            }
                        }),
                        children: [o && (0, n.tZ)(a.Text, {
                            colorScheme: "secondary",
                            sx: c,
                            children: o
                        }), (0, n.tZ)(a.Input, {
                            maxLength: 25,
                            sx: [{ ...s
                            }, r],
                            variant: "unstyled",
                            ref: t,
                            ...l
                        }), i && (0, n.tZ)(a.Text, {
                            colorScheme: "secondary",
                            sx: c,
                            children: i
                        })]
                    })
                });
            var e_ = r(753),
                ek = r(9067);
            let e$ = (0, o.forwardRef)((e, t) => {
                let [r, i] = o.useState(!0), {
                    id: l,
                    onChange: s,
                    validatePassword: c = !1,
                    setInfo: d,
                    setSuccess: u,
                    setWarning: p,
                    setError: m,
                    setHasPassedComplexity: h,
                    ...g
                } = e, v = (0, o.useRef)(null), [b, y] = (0, o.useState)(null), {
                    userSettings: {
                        passwordSettings: x
                    }
                } = (0, f.useEnvironment)(), {
                    t: S
                } = (0, a.useLocalizations)(), {
                    validatePassword: C
                } = (0, ek.i)({ ...x,
                    validatePassword: c
                }, {
                    onValidationSuccess: () => u(S((0, a.localizationKeys)("unstable__errors.zxcvbn.goodPassword"))),
                    onValidationError: e => m(e),
                    onValidationWarning: e => p(e),
                    onValidationInfo: e => {
                        v.current && (v.current === document.activeElement ? d(e) : m(e))
                    },
                    onValidationComplexity: e => h(e)
                });
                return (0, n.BX)(a.Flex, {
                    elementDescriptor: a.descriptors.formFieldInputGroup,
                    direction: "col",
                    justify: "center",
                    sx: {
                        position: "relative"
                    },
                    children: [(0, n.tZ)(a.Input, { ...g,
                        onChange: e => (b && clearTimeout(b), y(setTimeout(() => {
                            C(e.target.value)
                        }, e_.hz)), null == s ? void 0 : s(e)),
                        onBlur: e => {
                            var t;
                            null === (t = g.onBlur) || void 0 === t || t.call(g, e), C(e.target.value)
                        },
                        onFocus: e => {
                            var t;
                            null === (t = g.onFocus) || void 0 === t || t.call(g, e), C(e.target.value)
                        },
                        ref: (0, $.lq)(t, v),
                        type: r ? "password" : "text",
                        sx: e => ({
                            paddingRight: e.space.$10
                        })
                    }), (0, n.tZ)(U, {
                        elementDescriptor: a.descriptors.formFieldInputShowPasswordButton,
                        iconElementDescriptor: a.descriptors.formFieldInputShowPasswordIcon,
                        "aria-label": "".concat(r ? "Show" : "Hide", " password"),
                        variant: "ghost",
                        size: "xs",
                        tabIndex: -1,
                        onClick: () => i(e => !e),
                        sx: e => ({
                            position: "absolute",
                            right: 0,
                            marginRight: e.space.$1,
                            color: e.colors.$neutralAlpha400
                        }),
                        icon: r ? w.bA : w.N6
                    })]
                })
            });
            var eI = r(8191);
            let eP = (e, t) => {
                    if (!e) return "";
                    let r = eI.h5.get(t);
                    return (0, $.un)(e, null == r ? void 0 : r.pattern, null == r ? void 0 : r.code)
                },
                eA = e => {
                    let [t, r] = o.useState(() => {
                        let {
                            number: t
                        } = (0, $.y3)(e.initPhoneWithCode || "");
                        return t
                    }), [n, a] = o.useState((0, $.y3)(e.initPhoneWithCode || "").number ? (0, $.y3)(e.initPhoneWithCode || "").iso : e.locationBasedCountryIso || "us");
                    o.useEffect(() => {
                        r((0, $.yy)(t))
                    }, [n, t]);
                    let i = o.useMemo(() => {
                            var e;
                            if (!t) return "";
                            let r = (null === (e = eI.h5.get(n)) || void 0 === e ? void 0 : e.code) || "1";
                            return "+" + (0, $.yy)("".concat(r).concat(t))
                        }, [n, t]),
                        l = o.useMemo(() => eP(t, n), [n, t]),
                        s = o.useCallback(e => {
                            let {
                                iso: t,
                                number: n
                            } = (0, $.y3)(e);
                            r(n), a(t)
                        }, [n, t]);
                    return {
                        setNumber: r,
                        setIso: a,
                        setNumberAndIso: s,
                        iso: n,
                        number: t,
                        numberWithCode: i,
                        formattedNumber: l
                    }
                },
                eB = [...eI.h5.values()].map(e => ({
                    searchTerm: "".concat(e.iso, " ").concat(e.name, " ").concat(e.code),
                    value: "".concat(e.iso, " ").concat(e.name, " ").concat(e.code),
                    country: e
                })),
                eT = (0, o.forwardRef)((e, t) => {
                    let {
                        onChange: r,
                        value: i,
                        locationBasedCountryIso: l,
                        feedbackType: s,
                        sx: c,
                        ...d
                    } = e, u = (0, o.useRef)(null), p = (0, o.useRef)(null), {
                        setNumber: m,
                        setIso: h,
                        setNumberAndIso: g,
                        numberWithCode: f,
                        iso: v,
                        formattedNumber: b
                    } = eA({
                        initPhoneWithCode: i,
                        locationBasedCountryIso: l
                    }), y = (0, o.useMemo)(() => eB.find(e => e.country.iso === v) || eB[0], [v]);
                    return (0, o.useEffect)(() => {
                        null == r || r({
                            target: {
                                value: f
                            }
                        })
                    }, [f]), (0, n.BX)(a.Flex, {
                        elementDescriptor: a.descriptors.phoneInputBox,
                        direction: "row",
                        hasError: d.hasError,
                        "data-feedback": s,
                        ref: p,
                        sx: e => ({ ...C.common.borderVariants(e, {
                                hasError: d.hasError
                            }).normal,
                            position: "relative",
                            borderRadius: e.radii.$md,
                            zIndex: 1,
                            "&:focus-within": { ...C.common.borderVariants(e, {
                                    hasError: d.hasError
                                }).normal["&:focus"]
                            }
                        }),
                        children: [(0, n.BX)(t6, {
                            elementId: "countryCode",
                            value: y.value,
                            options: eB,
                            portal: !0,
                            referenceElement: p,
                            renderOption: (e, t, r) => (0, n.tZ)(eZ, {
                                sx: e => ({
                                    "&:hover": {
                                        backgroundColor: e.colors.$neutralAlpha100
                                    },
                                    '&[data-focused="true"]': {
                                        backgroundColor: e.colors.$neutralAlpha150
                                    }
                                }),
                                isSelected: r,
                                country: e.country
                            }),
                            onChange: e => {
                                var t;
                                h(e.country.iso), null === (t = u.current) || void 0 === t || t.focus()
                            },
                            noResultsMessage: "No countries found",
                            searchPlaceholder: "Search country or code",
                            comparator: (e, t) => t.searchTerm.toLowerCase().includes(e.toLowerCase()),
                            children: [(0, n.tZ)(re, {
                                variant: "ghost",
                                sx: e => ({
                                    borderWidth: "0",
                                    borderRadius: e.radii.$md,
                                    borderBottomRightRadius: "0",
                                    borderTopRightRadius: "0",
                                    paddingRight: e.space.$2,
                                    ":focus": {
                                        zIndex: 2,
                                        boxShadow: "none"
                                    },
                                    ":active": {
                                        zIndex: 2
                                    }
                                }),
                                hoverAsFocus: !0,
                                isDisabled: d.isDisabled,
                                icon: w.OG,
                                iconSx: e => ({
                                    color: d.isDisabled ? e.colors.$neutralAlpha300 : e.colors.$neutralAlpha500
                                }),
                                children: (0, n.tZ)(a.Text, {
                                    colorScheme: "body",
                                    as: "span",
                                    sx: {
                                        textTransform: "uppercase"
                                    },
                                    children: v
                                })
                            }), (0, n.tZ)(t9, {
                                sx: {
                                    padding: "0 0"
                                },
                                containerSx: e => ({
                                    gap: 0,
                                    padding: "".concat(e.space.$0x5, " 0")
                                })
                            })]
                        }), (0, n.BX)(a.Flex, {
                            sx: {
                                position: "relative",
                                width: "100%"
                            },
                            children: [(0, n.BX)(a.Text, {
                                sx: t => ({
                                    display: "flex",
                                    alignItems: "center",
                                    pointerEvents: "none",
                                    paddingLeft: t.space.$0x5,
                                    opacity: e.isDisabled ? t.opacity.$disabled : 1
                                }),
                                children: ["+", y.country.code]
                            }), (0, n.tZ)(a.Input, {
                                value: b,
                                variant: "unstyled",
                                onPaste: e => {
                                    e.preventDefault();
                                    let t = e.clipboardData.getData("text");
                                    t.includes("+") ? g(t) : m(t)
                                },
                                onChange: e => {
                                    let t = e.target.value;
                                    t.includes("+") ? g(t) : m(t)
                                },
                                maxLength: 25,
                                type: "tel",
                                sx: [e => ({
                                    boxShadow: "none",
                                    height: "100%",
                                    transitionProperty: e.transitionProperty.$common,
                                    transitionTimingFunction: e.transitionTiming.$common,
                                    transitionDuration: e.transitionDuration.$focusRing,
                                    "&[type=tel]": {
                                        borderRadius: e.radii.$md,
                                        borderWidth: 0,
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                        paddingLeft: e.space.$1,
                                        "&:focus": {
                                            borderColor: "unset",
                                            boxShadow: "unset"
                                        }
                                    }
                                }), c],
                                ref: (0, $.lq)(u, t),
                                ...d
                            })]
                        })]
                    })
                }),
                eZ = (0, o.memo)(e => {
                    let {
                        country: t,
                        isSelected: r,
                        sx: o,
                        ...i
                    } = e;
                    return (0, n.BX)(a.Flex, {
                        center: !0,
                        sx: [e => ({
                            width: "100%",
                            gap: e.space.$2,
                            padding: "".concat(e.space.$1x5, " ").concat(e.space.$4),
                            color: e.colors.$colorText
                        }), o],
                        ...i,
                        children: [(0, n.tZ)(a.Icon, {
                            icon: w.Jr,
                            size: "sm",
                            sx: {
                                visibility: r ? "visible" : "hidden"
                            }
                        }), (0, n.tZ)(a.Text, {
                            as: "div",
                            sx: {
                                width: "100%",
                                textAlign: "left"
                            },
                            children: t.name
                        }), (0, n.BX)(a.Text, {
                            colorScheme: "secondary",
                            children: ["+", t.code]
                        })]
                    })
                }),
                eR = (0, o.forwardRef)((e, t) => {
                    let {
                        __internal_country: r
                    } = (0, j.cL)();
                    return (0, n.tZ)(eT, { ...e,
                        locationBasedCountryIso: r,
                        ref: t
                    })
                }),
                ez = (0, o.forwardRef)((e, t) => {
                    let r = (0, ey.YV)(),
                        {
                            value: o,
                            placeholder: i,
                            ...l
                        } = (0, ey.X2)(r);
                    return (0, n.tZ)(a.RadioInput, {
                        ref: t,
                        ...l,
                        elementDescriptor: a.descriptors.formFieldRadioInput,
                        id: e.id,
                        focusRing: !1,
                        sx: e => ({
                            width: "fit-content",
                            marginTop: e.space.$0x5
                        }),
                        value: e.value,
                        checked: e.value === o
                    })
                }),
                eL = e => (0, n.BX)(a.FormLabel, {
                    elementDescriptor: a.descriptors.formFieldRadioLabel,
                    htmlFor: e.id,
                    sx: e => ({
                        padding: "".concat(e.space.$none, " ").concat(e.space.$2),
                        display: "flex",
                        flexDirection: "column"
                    }),
                    children: [(0, n.tZ)(a.Text, {
                        elementDescriptor: a.descriptors.formFieldRadioLabelTitle,
                        variant: "subtitle",
                        localizationKey: e.label
                    }), e.description && (0, n.tZ)(a.Text, {
                        elementDescriptor: a.descriptors.formFieldRadioLabelDescription,
                        colorScheme: "secondary",
                        localizationKey: e.description
                    })]
                }),
                eE = (0, o.forwardRef)((e, t) => {
                    let r = (0, o.useId)();
                    return (0, n.BX)(a.Flex, {
                        elementDescriptor: a.descriptors.formFieldRadioGroupItem,
                        align: "start",
                        children: [(0, n.tZ)(ez, {
                            id: r,
                            ref: t,
                            value: e.value
                        }), (0, n.tZ)(eL, {
                            id: r,
                            label: e.label,
                            description: e.description
                        })]
                    })
                }),
                eD = (0, o.forwardRef)((e, t) => {
                    let {
                        t: r
                    } = (0, a.useLocalizations)(), o = (0, ey.YV)(), {
                        placeholder: i,
                        ...l
                    } = (0, ey.X2)(o);
                    return (0, n.tZ)(eR, {
                        ref: t,
                        elementDescriptor: a.descriptors.formFieldInput,
                        elementId: a.descriptors.formFieldInput.setId(o.fieldId),
                        ...l,
                        feedbackType: o.feedbackType,
                        placeholder: r(i)
                    })
                }),
                eO = (0, o.forwardRef)((e, t) => {
                    let {
                        t: r
                    } = (0, a.useLocalizations)(), o = (0, ey.YV)(), {
                        placeholder: i,
                        ...l
                    } = (0, ey.X2)(o, ["validatePassword", "setError", "setWarning", "setSuccess", "setInfo", "setHasPassedComplexity"]);
                    return (0, n.tZ)(e$, {
                        ref: t,
                        elementDescriptor: a.descriptors.formFieldInput,
                        elementId: a.descriptors.formFieldInput.setId(o.fieldId),
                        ...l,
                        placeholder: r(i)
                    })
                }),
                eF = (0, o.forwardRef)((e, t) => {
                    let {
                        elementDescriptor: r,
                        elementId: o
                    } = e, i = (0, ey.YV)(), {
                        placeholder: l,
                        ...s
                    } = (0, ey.X2)(i);
                    return (0, n.tZ)(a.CheckboxInput, {
                        ref: t,
                        ...s,
                        elementDescriptor: r || a.descriptors.formFieldInput,
                        elementId: o || a.descriptors.formFieldInput.setId(i.fieldId),
                        focusRing: !1,
                        sx: e => ({
                            width: "fit-content",
                            flexShrink: 0,
                            marginTop: e.space.$0x5
                        })
                    })
                }),
                eM = {
                    Root: e => {
                        let t = (0, i.v)(),
                            {
                                children: r,
                                isDisabled: o,
                                ...a
                            } = e,
                            l = o || t.isLoading,
                            s = { ...a,
                                isDisabled: l
                            };
                        return (0, n.tZ)(ey.aS, { ...s,
                            children: r
                        })
                    },
                    Label: e => {
                        let {
                            isRequired: t,
                            id: r,
                            label: o,
                            isDisabled: i,
                            hasError: l
                        } = (0, ey.YV)();
                        return e.localizationKey || o || e.children ? (0, n.tZ)(a.FormLabel, {
                            localizationKey: e.localizationKey || o,
                            elementDescriptor: a.descriptors.formFieldLabel,
                            elementId: a.descriptors.formFieldLabel.setId(r),
                            hasError: !!l,
                            isDisabled: i,
                            isRequired: t,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: e.children
                        }) : null
                    },
                    LabelRow: e => {
                        let {
                            fieldId: t
                        } = (0, ey.YV)();
                        return (0, n.tZ)(a.Flex, {
                            justify: "between",
                            align: "center",
                            elementDescriptor: a.descriptors.formFieldLabelRow,
                            elementId: a.descriptors.formFieldLabelRow.setId(t),
                            children: e.children
                        })
                    },
                    Input: (0, o.forwardRef)((e, t) => {
                        let {
                            t: r
                        } = (0, a.useLocalizations)(), o = (0, ey.YV)(), {
                            placeholder: i,
                            ...l
                        } = (0, ey.X2)(o);
                        return (0, n.tZ)(a.Input, {
                            ref: t,
                            elementDescriptor: a.descriptors.formFieldInput,
                            elementId: a.descriptors.formFieldInput.setId(o.fieldId),
                            ...l,
                            placeholder: r(i)
                        })
                    }),
                    PasswordInput: eO,
                    PhoneInput: eD,
                    InputGroup: (0, o.forwardRef)((e, t) => {
                        let {
                            t: r
                        } = (0, a.useLocalizations)(), o = (0, ey.YV)(), {
                            placeholder: i,
                            ...l
                        } = (0, ey.X2)(o);
                        return (0, n.tZ)(eC, {
                            ref: t,
                            elementDescriptor: a.descriptors.formFieldInput,
                            elementId: a.descriptors.formFieldInput.setId(o.fieldId),
                            ...l,
                            groupPrefix: e.groupPrefix,
                            groupSuffix: e.groupSuffix,
                            placeholder: r(i)
                        })
                    }),
                    RadioItem: eE,
                    CheckboxIndicator: eF,
                    CheckboxLabel: e => {
                        let {
                            label: t,
                            id: r
                        } = (0, ey.YV)();
                        return t ? (0, n.tZ)(eL, {
                            label: t,
                            id: r,
                            description: e.description
                        }) : null
                    },
                    Action: e => {
                        let {
                            fieldId: t,
                            isDisabled: r
                        } = (0, ey.YV)();
                        return e.localizationKey || e.children ? (0, n.tZ)(a.Link, {
                            localizationKey: e.localizationKey,
                            elementDescriptor: a.descriptors.formFieldAction,
                            elementId: a.descriptors.formFieldLabel.setId(t),
                            isDisabled: r,
                            colorScheme: "primary",
                            variant: "buttonSmall",
                            onClick: t => {
                                var r;
                                t.preventDefault(), null === (r = e.onClick) || void 0 === r || r.call(e, t)
                            },
                            children: e.children
                        }) : null
                    },
                    AsOptional: () => {
                        let {
                            fieldId: e,
                            isDisabled: t
                        } = (0, ey.YV)();
                        return (0, n.tZ)(a.Text, {
                            localizationKey: (0, a.localizationKeys)("formFieldHintText__optional"),
                            elementDescriptor: a.descriptors.formFieldHintText,
                            elementId: a.descriptors.formFieldHintText.setId(e),
                            as: "span",
                            variant: "caption",
                            colorScheme: "secondary",
                            isDisabled: t
                        })
                    },
                    LabelIcon: e => {
                        let {
                            t
                        } = (0, a.useLocalizations)();
                        return e.icon ? (0, n.tZ)(a.Flex, {
                            as: "span",
                            title: t((0, a.localizationKeys)("formFieldHintText__slug")),
                            sx: {
                                marginRight: "auto"
                            },
                            children: (0, n.tZ)(a.Icon, {
                                icon: e.icon,
                                sx: e => ({
                                    marginLeft: e.space.$0x5,
                                    color: e.colors.$neutralAlpha400,
                                    width: e.sizes.$4,
                                    height: e.sizes.$4
                                })
                            })
                        }) : null
                    },
                    Feedback: e => {
                        let {
                            fieldId: t,
                            debouncedFeedback: r,
                            errorMessageId: o
                        } = (0, ey.YV)();
                        return (0, n.tZ)(eS, {
                            center: e.center,
                            errorMessageId: o,
                            ...r,
                            elementDescriptors: e.elementDescriptors,
                            id: t
                        })
                    },
                    OTPRoot: es,
                    OTPCodeControl: ed,
                    OTPResendButton: ec
                },
                [eU, ej] = (0, j.uH)("FormState"),
                eV = e => {
                    let {
                        isOptional: t,
                        icon: r,
                        actionLabel: o,
                        children: i,
                        onActionClicked: l,
                        ...s
                    } = e;
                    return (0, n.tZ)(eM.Root, { ...s,
                        children: (0, n.BX)(a.Col, {
                            elementDescriptor: a.descriptors.formField,
                            elementId: a.descriptors.formField.setId(s.id),
                            sx: {
                                position: "relative",
                                flex: "1 1 auto"
                            },
                            children: [(0, n.BX)(a.Flex, {
                                direction: "col",
                                sx: e => ({
                                    gap: e.space.$2
                                }),
                                children: [(0, n.BX)(eM.LabelRow, {
                                    children: [(0, n.tZ)(eM.Label, {}), (0, n.tZ)(eM.LabelIcon, {
                                        icon: r
                                    }), !o && t && (0, n.tZ)(eM.AsOptional, {}), o && (0, n.tZ)(eM.Action, {
                                        localizationKey: o,
                                        onClick: l
                                    }), (0, n.tZ)(eM.Action, {})]
                                }), i]
                            }), (0, n.tZ)(eM.Feedback, {})]
                        })
                    })
                },
                eW = {
                    Root: e => {
                        let t = (0, i.v)(),
                            r = (0, l._m)(),
                            [s, c] = (0, o.useState)(!1),
                            d = async n => {
                                if (n.preventDefault(), n.stopPropagation(), e.onSubmit) try {
                                    t.setLoading(), r.setLoading(), c(!0), await e.onSubmit(n)
                                } finally {
                                    t.setIdle(), r.setIdle()
                                }
                            },
                            u = o.useMemo(() => ({
                                value: {
                                    isLoading: r.isLoading,
                                    isDisabled: t.isLoading || r.isLoading,
                                    submittedWithEnter: s
                                }
                            }), [t.isLoading, r.isLoading, s]);
                        return (0, n.tZ)(eU.Provider, {
                            value: u,
                            children: (0, n.BX)(a.Form, {
                                elementDescriptor: a.descriptors.form,
                                gap: 6,
                                ...e,
                                onSubmit: d,
                                children: [(0, n.tZ)("button", {
                                    type: "submit",
                                    "aria-hidden": !0,
                                    style: {
                                        visibility: "hidden",
                                        position: "absolute"
                                    }
                                }), e.children]
                            })
                        })
                    },
                    ControlRow: e => {
                        let {
                            elementId: t,
                            ...r
                        } = e;
                        return (0, n.tZ)(a.Flex, {
                            elementDescriptor: a.descriptors.formFieldRow,
                            elementId: a.descriptors.formFieldRow.setId(t),
                            justify: "between",
                            gap: 4,
                            ...r
                        })
                    },
                    PlainInput: e => (0, n.tZ)(eV, { ...e,
                        children: (0, n.tZ)(eM.Input, {})
                    }),
                    PasswordInput: (0, o.forwardRef)((e, t) => (0, n.tZ)(eV, { ...e,
                        children: (0, n.tZ)(eM.PasswordInput, {
                            ref: t
                        })
                    })),
                    PhoneInput: e => (0, n.tZ)(eV, { ...e,
                        children: (0, n.tZ)(eM.PhoneInput, {})
                    }),
                    OTPInput: e => {
                        let {
                            ref: t,
                            ...r
                        } = e.otpControl.otpInputProps, {
                            centerAlign: o = !0
                        } = e;
                        return (0, n.tZ)(eM.Root, { ...r,
                            children: (0, n.tZ)(eM.OTPRoot, { ...e,
                                children: (0, n.BX)(a.Col, {
                                    elementDescriptor: a.descriptors.form,
                                    gap: 2,
                                    align: o ? "center" : "start",
                                    children: [(0, n.BX)(a.Flex, {
                                        elementDescriptor: a.descriptors.otpCodeField,
                                        isLoading: e.isLoading,
                                        hasError: "error" === e.otpControl.otpInputProps.feedbackType,
                                        direction: "col",
                                        children: [(0, n.tZ)(eM.OTPCodeControl, {
                                            ref: t
                                        }), (0, n.tZ)(eM.Feedback, {
                                            center: !0,
                                            elementDescriptors: {
                                                error: a.descriptors.otpCodeFieldErrorText
                                            }
                                        })]
                                    }), (0, n.tZ)(eM.OTPResendButton, {})]
                                })
                            })
                        })
                    },
                    InputGroup: e => {
                        let {
                            groupSuffix: t,
                            groupPrefix: r,
                            ...o
                        } = e;
                        return (0, n.tZ)(eV, { ...o,
                            children: (0, n.tZ)(eM.InputGroup, {
                                groupSuffix: t,
                                groupPrefix: r
                            })
                        })
                    },
                    RadioGroup: e => {
                        let {
                            radioOptions: t,
                            ...r
                        } = e;
                        return (0, n.BX)(eM.Root, { ...r,
                            children: [(0, n.tZ)(a.Col, {
                                elementDescriptor: a.descriptors.formFieldRadioGroup,
                                gap: 3,
                                children: null == t ? void 0 : t.map(e => {
                                    let {
                                        value: t,
                                        description: r,
                                        label: o
                                    } = e;
                                    return (0, n.tZ)(a.Flex, {
                                        sx: e => ({
                                            borderWidth: e.borderWidths.$normal,
                                            borderStyle: e.borderStyles.$solid,
                                            borderColor: e.colors.$neutralAlpha100,
                                            borderRadius: e.radii.$md,
                                            padding: e.space.$2
                                        }),
                                        children: (0, n.tZ)(eM.RadioItem, {
                                            value: t,
                                            label: o,
                                            description: r
                                        })
                                    }, t)
                                })
                            }), (0, n.tZ)(eM.Feedback, {})]
                        })
                    },
                    Checkbox: e => (0, n.tZ)(eM.Root, { ...e,
                        children: (0, n.BX)(a.Flex, {
                            align: "start",
                            children: [(0, n.tZ)(eM.CheckboxIndicator, {}), (0, n.tZ)(eM.CheckboxLabel, {
                                description: e.description
                            })]
                        })
                    }),
                    SubmitButton: e => {
                        let {
                            isLoading: t,
                            isDisabled: r
                        } = ej();
                        return (0, n.tZ)(a.Button, {
                            elementDescriptor: a.descriptors.formButtonPrimary,
                            block: !0,
                            textVariant: "buttonLarge",
                            isLoading: t,
                            isDisabled: r,
                            type: "submit",
                            ...e,
                            localizationKey: e.localizationKey || (0, a.localizationKeys)("formButtonPrimary")
                        })
                    },
                    ResetButton: e => {
                        let {
                            isLoading: t,
                            isDisabled: r
                        } = ej();
                        return (0, n.tZ)(a.Button, {
                            elementDescriptor: a.descriptors.formButtonReset,
                            block: !0,
                            variant: "ghost",
                            type: "reset",
                            isDisabled: t || r,
                            ...e
                        })
                    }
                },
                eN = e => {
                    let t = (0, $.L_)(e.value),
                        r = (0, $.uz)((0, $.y3)(e.value).iso);
                    return (0, n.BX)(a.Flex, {
                        elementDescriptor: a.descriptors.formattedPhoneNumber,
                        gap: 4,
                        children: [(0, n.tZ)(a.Text, {
                            elementDescriptor: a.descriptors.formattedPhoneNumberFlag,
                            sx: e => ({
                                fontSize: e.fontSizes.$sm
                            }),
                            children: r
                        }), (0, n.tZ)(a.Text, {
                            elementDescriptor: a.descriptors.formattedPhoneNumberText,
                            children: t
                        })]
                    })
                },
                eH = e => {
                    let t = (0, $.L_)(e.value);
                    return (0, n.tZ)(a.Text, {
                        as: "span",
                        elementDescriptor: a.descriptors.formattedPhoneNumberText,
                        children: t
                    })
                };
            var eX = r(1085);
            let eK = e => {
                    let {
                        isDisabled: t,
                        onReset: r,
                        submitLabel: o,
                        resetLabel: a,
                        ...i
                    } = e, {
                        navigateToFlowStart: s
                    } = (0, l.zk)();
                    return (0, n.BX)(eY, {
                        children: [(0, n.tZ)(eW.SubmitButton, {
                            block: !1,
                            isDisabled: t,
                            localizationKey: o || (0, eX.u1)("userProfile.formButtonPrimary__save"),
                            ...i
                        }), (0, n.tZ)(eW.ResetButton, {
                            localizationKey: a || (0, eX.u1)("userProfile.formButtonReset"),
                            block: !1,
                            onClick: r || s
                        })]
                    })
                },
                eY = e => (0, n.tZ)(a.Flex, {
                    direction: "rowReverse",
                    gap: 2,
                    ...e,
                    children: e.children
                }),
                eq = e => {
                    let {
                        headerTitle: t,
                        headerTitleTextVariant: r = "h3",
                        headerSubtitle: o,
                        headerSubtitleTextVariant: l = "body",
                        children: s,
                        sx: c,
                        ...d
                    } = e, u = (0, i.v)();
                    return (0, n.BX)(a.Col, {
                        elementDescriptor: a.descriptors.formContainer,
                        gap: 4,
                        ...d,
                        sx: [c],
                        children: [(t || o) && (0, n.BX)(ev.Root, {
                            children: [t && (0, n.tZ)(ev.Title, {
                                localizationKey: t,
                                textVariant: r
                            }), o && (0, n.tZ)(ev.Subtitle, {
                                localizationKey: o,
                                variant: l
                            })]
                        }), (0, n.tZ)(et.Alert, {
                            children: u.error
                        }), (0, n.tZ)(a.Col, {
                            gap: 8,
                            children: s
                        })]
                    })
                },
                eG = () => (0, n.tZ)(a.Flex, {
                    center: !0,
                    sx: {
                        height: "100%"
                    },
                    children: (0, n.tZ)(a.Spinner, {
                        colorScheme: "primary",
                        size: "lg",
                        elementDescriptor: a.descriptors.spinner
                    })
                });
            var eJ = r(39);
            let eQ = {
                    xs: {
                        svgSize: 24,
                        textSize: eJ.$4.fontSizes.$xs
                    },
                    sm: {
                        svgSize: 32,
                        textSize: eJ.$4.fontSizes.$sm
                    },
                    md: {
                        svgSize: 52,
                        textSize: eJ.$4.fontSizes.$md
                    },
                    lg: {
                        svgSize: 64,
                        textSize: eJ.$4.fontSizes.$lg
                    },
                    xl: {
                        svgSize: 96,
                        textSize: eJ.$4.fontSizes.$xl
                    }
                },
                e0 = o.memo(e => {
                    let {
                        value: t,
                        limit: r,
                        size: o = "sm"
                    } = e, {
                        textSize: i,
                        svgSize: l
                    } = eQ[o], s = l / 2, c = e.strokeWidth || l / 10, d = s - c / 2, u = 2 * Math.PI * d, p = t / r * u;
                    return (0, n.BX)(a.Col, {
                        center: !0,
                        sx: e => ({
                            "--cl-gauge-inner-stroke-color": e.colors.$neutralAlpha900,
                            "--cl-gauge-outter-stroke-color": e.colors.$neutralAlpha300,
                            "> svg": {
                                transform: "rotate(-90deg)"
                            }
                        }),
                        children: [(0, n.BX)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 ".concat(l, " ").concat(l),
                            children: [(0, n.tZ)("circle", {
                                r: d,
                                cx: s,
                                cy: s,
                                strokeWidth: c,
                                fill: "transparent",
                                stroke: "var(--cl-gauge-outter-stroke-color)",
                                strokeLinecap: "round"
                            }), t >= 0 ? (0, n.tZ)("circle", {
                                r: d,
                                cx: s,
                                cy: s,
                                strokeWidth: c,
                                strokeDasharray: u + " " + u,
                                strokeDashoffset: u - p,
                                fill: "transparent",
                                stroke: "var(--cl-gauge-inner-stroke-color)",
                                strokeLinecap: "round"
                            }) : null]
                        }), (0, n.tZ)(a.Text, {
                            as: "div",
                            sx: e => ({
                                position: "absolute",
                                display: "flex",
                                fontSize: i,
                                color: e.colors.$neutralAlpha900
                            }),
                            children: t
                        })]
                    })
                }),
                e1 = e => {
                    let {
                        icon: t,
                        boxElementDescriptor: r,
                        iconElementDescriptor: o,
                        sx: i,
                        ...l
                    } = e;
                    return (0, n.tZ)(a.Flex, {
                        center: !0,
                        elementDescriptor: r,
                        sx: [e => ({
                            backgroundColor: e.colors.$neutralAlpha50,
                            width: e.sizes.$16,
                            height: e.sizes.$16,
                            borderRadius: e.radii.$circle
                        }), i],
                        ...l,
                        children: (0, n.tZ)(a.Icon, {
                            elementDescriptor: o,
                            icon: t,
                            size: "lg",
                            sx: e => ({
                                color: e.colors.$neutralAlpha600
                            })
                        })
                    })
                };
            var e2 = r(6096);
            let e5 = e => {
                    let {
                        avatarUrl: t = (0, e2.WY)("avatar_placeholder", "jpeg"),
                        identifier: r,
                        onClick: i,
                        ...l
                    } = e, s = o.useRef({
                        avatarUrl: t,
                        identifier: (0, $.HT)(r)
                    }), c = i && (0, n.tZ)(a.Button, {
                        elementDescriptor: a.descriptors.identityPreviewEditButton,
                        variant: "link",
                        textVariant: "buttonSmall",
                        onClick: i,
                        "aria-label": "Edit",
                        children: (0, n.tZ)(a.Icon, {
                            elementDescriptor: a.descriptors.identityPreviewEditButtonIcon,
                            icon: w.ET
                        })
                    });
                    if (!s.current.identifier) return (0, n.tZ)(e7, { ...l,
                        children: c
                    });
                    if ((0, $.Sj)(s.current.identifier) || !s.current.identifier.startsWith("+")) return (0, n.BX)(e7, { ...l,
                        children: [(0, n.tZ)(e6, { ...s.current
                        }), c]
                    });
                    let d = (0, $.y3)(s.current.identifier || ""),
                        u = (0, $.uz)(d.iso);
                    return (0, n.BX)(e7, { ...l,
                        children: [(0, n.tZ)(e4, {
                            identifier: s.current.identifier,
                            flag: u
                        }), c]
                    })
                },
                e3 = e => (0, n.tZ)(a.Text, {
                    elementDescriptor: a.descriptors.identityPreviewText,
                    colorScheme: "secondary",
                    truncate: !0,
                    ...e
                }),
                e6 = e => (0, n.tZ)(e3, {
                    children: e.identifier
                }),
                e4 = e => (0, n.BX)(n.HY, {
                    children: [(0, n.tZ)(a.Text, {
                        sx: e => ({
                            fontSize: e.fontSizes.$sm
                        }),
                        children: e.flag
                    }), (0, n.tZ)(e3, {
                        children: e.identifier
                    })]
                }),
                e7 = e => (0, n.tZ)(a.Flex, {
                    elementDescriptor: a.descriptors.identityPreview,
                    align: "center",
                    gap: 2,
                    sx: {
                        justifyContent: "center"
                    },
                    ...e
                });

            function e8(e) {
                return (0, n.BX)(a.Flex, {
                    sx: e => ({
                        gap: e.space.$2,
                        padding: "".concat(e.space.$3, " ").concat(e.space.$4),
                        backgroundColor: e.colors.$neutralAlpha50,
                        borderRadius: e.radii.$md
                    }),
                    children: [(0, n.tZ)(a.Icon, {
                        icon: w.I$,
                        sx: e => ({
                            opacity: e.opacity.$disabled
                        })
                    }), (0, n.tZ)(a.Text, {
                        localizationKey: e.message,
                        sx: e => ({
                            color: e.colors.$colorTextSecondary
                        })
                    })]
                })
            }
            let e9 = o.forwardRef((e, t) => {
                let {
                    leftIcon: r,
                    sx: o,
                    ...i
                } = e;
                return (0, n.BX)(a.Flex, {
                    center: !0,
                    sx: {
                        width: "100%",
                        position: "relative"
                    },
                    children: [r ? (0, n.tZ)(a.Box, {
                        sx: e => [{
                            position: "absolute",
                            left: e.space.$3x5,
                            width: e.sizes.$3x5,
                            height: e.sizes.$3x5,
                            pointerEvents: "none",
                            display: "grid",
                            placeContent: "center",
                            "& svg": {
                                position: "absolute",
                                width: "100%",
                                height: "100%"
                            }
                        }],
                        children: r
                    }) : null, (0, n.tZ)(a.Input, { ...i,
                        sx: [e => ({
                            width: "100%",
                            paddingLeft: e.space.$10
                        }), o],
                        ref: t
                    })]
                })
            });
            var te = r(4569);
            let tt = o.memo(e => {
                    let [t, r] = o.useState(!0), a = o.useRef(null);
                    return o.useEffect(() => {
                        let n = a.current;
                        n && (t && r(!1), n.className = e.className)
                    }, [e.className]), (0, n.BX)(n.HY, {
                        children: [e.children, t && (0, n.tZ)("span", {
                            ref: e => a.current = e ? e.parentElement : a.current,
                            "aria-hidden": !0,
                            style: {
                                display: "none"
                            }
                        })]
                    })
                }),
                tr = (0, te.P)(tt, {
                    defaultStyles: e => ({
                        boxSizing: "border-box",
                        width: "fit-content",
                        fontFamily: e.fonts.$main,
                        fontStyle: e.fontStyles.$normal
                    })
                }),
                tn = /\[([^\]]+)\]\(([^)]+)\)/g,
                to = (0, o.memo)(e => {
                    let {
                        text: t,
                        ...r
                    } = e, i = (0, o.useMemo)(() => r, [r]);
                    return (0, o.useMemo)(() => {
                        let e = [],
                            r = 0;
                        return t.replace(tn, (o, l, s, c) => (c > r && e.push(t.slice(r, c)), e.push((0, n.tZ)(a.Link, {
                            href: s,
                            ...i,
                            children: l
                        }, c)), r = c + o.length, o)), r < t.length && e.push(t.slice(r)), e
                    }, [t, i])
                }),
                ta = e => {
                    let t;
                    let {
                        termsUrl: r,
                        privacyPolicyUrl: o
                    } = e, {
                        t: i
                    } = (0, a.useLocalizations)(), l = (0, ey.YV)(), {
                        placeholder: s,
                        ...c
                    } = (0, ey.X2)(l);
                    return r && o ? t = (0, a.localizationKeys)("signUp.legalConsent.checkbox.label__termsOfServiceAndPrivacyPolicy", {
                        termsOfServiceLink: e.termsUrl,
                        privacyPolicyLink: e.privacyPolicyUrl
                    }) : r ? t = (0, a.localizationKeys)("signUp.legalConsent.checkbox.label__onlyTermsOfService", {
                        termsOfServiceLink: e.termsUrl
                    }) : o && (t = (0, a.localizationKeys)("signUp.legalConsent.checkbox.label__onlyPrivacyPolicy", {
                        privacyPolicyLink: e.privacyPolicyUrl
                    })), (0, n.tZ)(a.FormLabel, {
                        elementDescriptor: a.descriptors.formFieldCheckboxLabel,
                        htmlFor: c.id,
                        isDisabled: c.isDisabled,
                        sx: e => ({
                            paddingLeft: e.space.$1x5,
                            textAlign: "left"
                        }),
                        children: (0, n.tZ)(a.Text, {
                            variant: "body",
                            as: "span",
                            children: (0, n.tZ)(to, {
                                text: i(t),
                                isExternal: !0,
                                sx: e => ({
                                    textDecoration: "underline",
                                    textUnderlineOffset: e.space.$1
                                })
                            })
                        })
                    })
                },
                ti = e => {
                    let {
                        displayConfig: t
                    } = (0, f.useEnvironment)(), {
                        parsedLayout: r
                    } = (0, a.useAppearance)(), o = r.termsPageUrl || t.termsUrl, i = r.privacyPageUrl || t.privacyPolicyUrl;
                    return (0, n.tZ)(eM.Root, { ...e,
                        children: (0, n.BX)(a.Flex, {
                            justify: "center",
                            children: [(0, n.tZ)(eM.CheckboxIndicator, {
                                elementDescriptor: a.descriptors.formFieldCheckboxInput,
                                elementId: a.descriptors.formFieldInput.setId("legalAccepted")
                            }), (0, n.tZ)(ta, {
                                termsUrl: o,
                                privacyPolicyUrl: i
                            })]
                        })
                    })
                };
            var tl = r(3423);
            let ts = e => {
                    let {
                        children: t
                    } = e;
                    return (0, n.BX)(a.Flex, {
                        direction: "col",
                        center: !0,
                        elementDescriptor: a.descriptors.main,
                        gap: 8,
                        sx: e => ({
                            marginTop: e.space.$16,
                            marginBottom: e.space.$13
                        }),
                        children: [(0, n.tZ)(a.Spinner, {
                            size: "xl",
                            colorScheme: "primary",
                            elementDescriptor: a.descriptors.spinner
                        }), t]
                    })
                },
                tc = (0, i.$p)(() => {
                    let e = (0, i.v)();
                    return (0, n.BX)(et.Root, {
                        children: [(0, n.BX)(et.Content, {
                            children: [(0, n.tZ)(et.Alert, {
                                children: e.error
                            }), (0, n.tZ)(ts, {}), (0, n.tZ)(tl.S, {})]
                        }), (0, n.tZ)(et.Footer, {})]
                    })
                });
            var td = r(6747);
            let [tu, tp] = (0, j.uH)("MenuState"), tm = (0, i.TJ)(e => {
                let {
                    popoverPlacement: t = "bottom-end",
                    elementId: r,
                    ...a
                } = e, i = (0, l.Sv)({
                    placement: t,
                    offset: 8,
                    shoudFlip: !0
                }), s = o.useMemo(() => ({
                    value: {
                        popoverCtx: i,
                        elementId: r
                    }
                }), [{ ...i
                }, r]);
                return (0, n.tZ)(tu.Provider, {
                    value: s,
                    ...a
                })
            }), th = e => {
                let {
                    children: t,
                    arialLabel: r
                } = e, {
                    popoverCtx: n,
                    elementId: i
                } = tp(), {
                    reference: l,
                    toggle: s,
                    isOpen: c
                } = n, d = "function" == typeof r ? r(c) : r;
                return (0, o.isValidElement)(t) ? (0, o.cloneElement)(t, {
                    ref: l,
                    elementDescriptor: t.props.elementDescriptor || a.descriptors.menuButton,
                    elementId: t.props.elementId || a.descriptors.menuButton.setId(i),
                    "aria-label": d,
                    "aria-expanded": c,
                    onClick: e => {
                        var r, n;
                        null === (n = t.props) || void 0 === n || null === (r = n.onClick) || void 0 === r || r.call(n, e), s()
                    }
                }) : null
            }, tg = (e, t, r) => {
                let n = (null == r ? void 0 : r.countSelf) ? e.tagName : "",
                    o = e;
                for (; o && "BUTTON" !== n.toUpperCase();) {
                    var a;
                    n = null !== (a = null == (o = o["prev" === t ? "previousElementSibling" : "nextElementSibling"]) ? void 0 : o.tagName) && void 0 !== a ? a : ""
                }
                return o
            }, tf = e => {
                let {
                    sx: t,
                    asPortal: r,
                    ...i
                } = e, {
                    popoverCtx: l,
                    elementId: s
                } = tp(), {
                    floating: c,
                    styles: d,
                    isOpen: u,
                    context: p,
                    nodeId: m
                } = l, h = (0, o.useRef)(null);
                return (0, o.useLayoutEffect)(() => {
                    c(h.current)
                }, [u]), (0, n.tZ)(H, {
                    context: p,
                    nodeId: m,
                    isOpen: u,
                    portal: r,
                    children: (0, n.tZ)(a.Col, {
                        elementDescriptor: a.descriptors.menuList,
                        elementId: a.descriptors.menuList.setId(s),
                        ref: h,
                        role: "menu",
                        onKeyDown: e => {
                            let t = h.current;
                            if (t && t === document.activeElement && "ArrowDown" === e.key) {
                                var r;
                                return e.preventDefault(), null === (r = tg(t.children[0], "next", {
                                    countSelf: !0
                                })) || void 0 === r ? void 0 : r.focus()
                            }
                        },
                        sx: [e => ({
                            backgroundColor: td.O.makeSolid(e.colors.$colorBackground),
                            borderWidth: e.borderWidths.$normal,
                            borderStyle: e.borderStyles.$solid,
                            borderColor: e.colors.$neutralAlpha50,
                            outline: "none",
                            borderRadius: e.radii.$md,
                            padding: e.space.$0x5,
                            overflow: "hidden",
                            top: "calc(100% + ".concat(e.space.$2, ")"),
                            animation: "".concat(C.animations.dropdownSlideInScaleAndFade, " ").concat(e.transitionDuration.$slower, " ").concat(e.transitionTiming.$slowBezier),
                            transformOrigin: "top center",
                            boxShadow: e.shadows.$menuShadow,
                            zIndex: e.zIndices.$dropdown,
                            gap: e.space.$0x5
                        }), t],
                        style: d,
                        ...i
                    })
                })
            }, tv = e => {
                let {
                    sx: t,
                    onClick: r,
                    destructive: i,
                    closeAfterClick: l = !0,
                    ...s
                } = e, {
                    popoverCtx: c,
                    elementId: d
                } = tp(), {
                    toggle: u
                } = c, p = (0, o.useRef)(null);
                return (0, n.tZ)(a.SimpleButton, {
                    ref: p,
                    elementDescriptor: a.descriptors.menuItem,
                    elementId: a.descriptors.menuItem.setId(d),
                    hoverAsFocus: !0,
                    variant: "ghost",
                    colorScheme: i ? "danger" : "neutral",
                    role: "menuitem",
                    onKeyDown: e => {
                        let t = p.current;
                        if (!t) return;
                        let r = e.key;
                        if ("ArrowUp" !== r && "ArrowDown" !== r) return;
                        e.preventDefault();
                        let n = tg(t, "ArrowUp" === r ? "prev" : "next");
                        null == n || n.focus()
                    },
                    focusRing: !1,
                    onClick: e => {
                        null == r || r(e), l && u()
                    },
                    sx: [e => ({
                        justifyContent: "start",
                        borderRadius: e.radii.$sm,
                        padding: "".concat(e.space.$1, " ").concat(e.space.$3)
                    }), t],
                    ...s
                })
            }, [tb, ty, tx] = (0, j.uH)("NavbarContext"), tw = e => {
                let [t, r] = o.useState(!1), a = o.useCallback(() => r(!0), []), i = o.useCallback(() => r(!1), []), l = o.useMemo(() => ({
                    value: {
                        isOpen: t,
                        open: a,
                        close: i
                    }
                }), [t]);
                return (0, n.tZ)(tb.Provider, {
                    value: l,
                    children: e.children
                })
            }, tS = e => {
                let {
                    contentRef: t,
                    title: r,
                    description: i,
                    routes: s,
                    header: c
                } = e, {
                    close: d
                } = ty(), {
                    navigate: u
                } = (0, v.useRouter)(), {
                    navigateToFlowStart: p
                } = (0, l.zk)(), m = (0, v.useRouter)(), h = e => (null == e ? void 0 : e.external) ? () => u(e.path) : () => g(e), g = async e => {
                    t.current && (d(), "/" === e.path ? await p() : await u(e.path))
                }, f = (0, o.useCallback)(e => {
                    if (e.external) return !1;
                    let t = m.currentPath === m.fullPath && "/" === e.path,
                        r = m.matches(e.path);
                    return t || r
                }, [m.currentPath]), b = (0, n.tZ)(a.Col, {
                    elementDescriptor: a.descriptors.navbarButtons,
                    sx: e => ({
                        gap: e.space.$0x5
                    }),
                    children: s.map(e => (0, n.tZ)(tk, {
                        elementDescriptor: a.descriptors.navbarButton,
                        elementId: a.descriptors.navbarButton.setId(e.id),
                        iconElementDescriptor: a.descriptors.navbarButtonIcon,
                        iconElementId: a.descriptors.navbarButtonIcon.setId(e.id),
                        onClick: h(e),
                        icon: e.icon,
                        isActive: f(e),
                        sx: e => ({
                            padding: "".concat(e.space.$1x5, " ").concat(e.space.$3),
                            minHeight: e.space.$8
                        }),
                        children: (0, n.tZ)(a.Span, {
                            elementDescriptor: a.descriptors.navbarButtonText,
                            elementId: a.descriptors.navbarButtonText.setId(e.id),
                            localizationKey: e.name
                        })
                    }, e.id))
                });
                return (0, n.BX)(n.HY, {
                    children: [(0, n.BX)(tC, {
                        title: r,
                        description: i,
                        children: [c, b]
                    }), (0, n.BX)(t_, {
                        children: [c, b]
                    })]
                })
            }, tC = e => {
                let {
                    title: t,
                    description: r
                } = e;
                return (0, n.BX)(a.Col, {
                    elementDescriptor: a.descriptors.navbar,
                    sx: e => ({
                        [C.mqu.md]: {
                            display: "none"
                        },
                        flex: "0 0 ".concat(e.space.$57),
                        width: e.sizes.$57,
                        position: "relative",
                        maxWidth: e.space.$57,
                        background: C.common.mergedColorsBackground($.O9.setAlpha(e.colors.$colorBackground, 1), e.colors.$neutralAlpha50),
                        padding: "".concat(e.space.$6, " ").concat(e.space.$5, " ").concat(e.space.$4, " ").concat(e.space.$3),
                        marginRight: "-".concat(e.space.$2),
                        color: e.colors.$colorText,
                        justifyContent: "space-between"
                    }),
                    children: [(0, n.tZ)(D, {}), (0, n.BX)(a.Col, {
                        sx: e => ({
                            gap: e.space.$6,
                            flex: "0 0 ".concat(e.space.$60)
                        }),
                        children: [(0, n.BX)(a.Col, {
                            sx: e => ({
                                gap: e.space.$0x5,
                                padding: "".concat(e.space.$none, " ").concat(e.space.$3)
                            }),
                            children: [(0, n.tZ)(a.Heading, {
                                as: "h1",
                                localizationKey: t
                            }), (0, n.tZ)(a.Text, {
                                colorScheme: "secondary",
                                localizationKey: r
                            })]
                        }), e.children]
                    }), (0, n.tZ)(et.ClerkAndPagesTag, {
                        sx: {
                            width: "fit-content"
                        }
                    })]
                })
            }, t_ = (0, i.TJ)(e => {
                let t = ty(),
                    {
                        floating: r,
                        isOpen: i,
                        open: s,
                        close: c,
                        nodeId: d,
                        context: u
                    } = (0, l.Sv)({
                        defaultOpen: !1,
                        autoUpdate: !1
                    });
                return o.useEffect(() => {
                    t.isOpen ? s() : c()
                }, [t.isOpen]), o.useEffect(() => {
                    i || t.close()
                }, [i]), (0, n.tZ)(H, {
                    nodeId: d,
                    context: u,
                    isOpen: i,
                    portal: !1,
                    children: (0, n.tZ)(a.Col, {
                        sx: e => ({
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            width: "100%",
                            zIndex: e.zIndices.$navbar,
                            overflow: "hidden",
                            color: e.colors.$colorText
                        }),
                        children: (0, n.tZ)(a.Col, {
                            ref: r,
                            elementDescriptor: a.descriptors.navbar,
                            tabIndex: 0,
                            sx: e => ({
                                outline: 0,
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                width: e.space.$60,
                                backgroundColor: $.O9.makeSolid(e.colors.$colorBackground),
                                borderTopRightRadius: e.radii.$lg,
                                borderBottomRightRadius: e.radii.$lg,
                                padding: "".concat(e.space.$10, " ").concat(e.space.$6),
                                animation: "".concat(C.animations.navbarSlideIn, " ").concat(e.transitionDuration.$slower, " ").concat(e.transitionTiming.$slowBezier),
                                borderRightWidth: e.borderWidths.$normal,
                                borderRightStyle: e.borderStyles.$solid,
                                borderRightColor: e.colors.$neutralAlpha150,
                                boxShadow: e.shadows.$cardContentShadow
                            }),
                            children: e.children
                        })
                    })
                })
            }), tk = e => {
                let {
                    icon: t,
                    children: r,
                    isActive: o,
                    iconElementDescriptor: i,
                    iconElementId: l,
                    sx: s,
                    ...c
                } = e;
                return (0, n.BX)(a.Button, {
                    variant: "unstyled",
                    colorScheme: o ? "primary" : "neutral",
                    textVariant: "buttonLarge",
                    size: "md",
                    isActive: o,
                    focusRing: !1,
                    ...c,
                    sx: [e => ({
                        gap: e.space.$3,
                        justifyContent: "flex-start",
                        backgroundColor: o ? e.colors.$neutralAlpha100 : void 0,
                        color: o ? e.colors.$primary500 : e.colors.$neutralAlpha600,
                        "&:hover": {
                            backgroundColor: o ? void 0 : e.colors.$neutralAlpha25
                        },
                        "&:focus": {
                            backgroundColor: o ? void 0 : e.colors.$neutralAlpha50
                        },
                        opacity: o ? 1 : .6
                    }), s],
                    children: [(0, n.tZ)(a.Icon, {
                        elementDescriptor: i,
                        elementId: l,
                        icon: t,
                        sx: {
                            opacity: o ? 1 : .7
                        }
                    }), r]
                })
            }, t$ = e => {
                let {
                    navbarTitleLocalizationKey: t,
                    ...r
                } = e, {
                    open: o
                } = tx(), {
                    t: i
                } = (0, a.useLocalizations)();
                return o ? (0, n.tZ)(a.Flex, {
                    elementDescriptor: a.descriptors.navbarMobileMenuRow,
                    sx: e => ({
                        display: "none",
                        background: C.common.mergedColorsBackground($.O9.setAlpha(e.colors.$colorBackground, 1), e.colors.$neutralAlpha50),
                        padding: "".concat(e.space.$2, " ").concat(e.space.$3, " ").concat(e.space.$4, " ").concat(e.space.$3),
                        marginBottom: "-".concat(e.space.$2),
                        [C.mqu.md]: {
                            display: "flex"
                        }
                    }),
                    children: (0, n.BX)(a.Button, {
                        elementDescriptor: a.descriptors.navbarMobileMenuButton,
                        ...r,
                        onClick: o,
                        size: "xs",
                        textVariant: "h2",
                        variant: "ghost",
                        sx: e => ({
                            color: e.colors.$colorText,
                            gap: e.space.$2x5,
                            width: "fit-content",
                            alignItems: "center",
                            justifyContent: "center"
                        }),
                        children: [(0, n.tZ)(a.Icon, {
                            elementDescriptor: a.descriptors.navbarMobileMenuButtonIcon,
                            icon: w.v2,
                            size: "md"
                        }), i(t)]
                    })
                }) : null
            }, tI = e => {
                let {
                    navigateToFlowStart: t
                } = (0, l.zk)();
                return (0, n.tZ)(a.Button, {
                    textVariant: "buttonSmall",
                    variant: "ghost",
                    onClick: t,
                    ...e
                })
            }, tP = e => {
                let {
                    name: t = "",
                    imageUrl: r,
                    ...o
                } = e;
                return (0, n.tZ)(_, {
                    title: t,
                    initials: (t || " ")[0],
                    imageUrl: r,
                    rounded: !1,
                    ...o
                })
            };
            var tA = r(5872);
            let tB = e => {
                    var t;
                    let {
                        organization: r,
                        size: o = "md",
                        icon: i,
                        rounded: l = !1,
                        fetchRoles: s = !1,
                        badge: c,
                        sx: d,
                        user: u,
                        avatarSx: p,
                        mainIdentifierSx: m,
                        mainIdentifierVariant: h,
                        elementId: g,
                        ...f
                    } = e, {
                        localizeCustomRole: v
                    } = (0, tA.q)(), {
                        options: b
                    } = (0, tA.e)(s), y = null == u ? void 0 : u.organizationMemberships.find(e => e.organization.id === r.id), x = null == b ? void 0 : null === (t = b.find(e => e.value === (null == y ? void 0 : y.role))) || void 0 === t ? void 0 : t.label, w = v(null == y ? void 0 : y.role) || x;
                    return (0, n.BX)(a.Flex, {
                        elementDescriptor: a.descriptors.organizationPreview,
                        elementId: a.descriptors.organizationPreview.setId(g),
                        gap: 3,
                        align: "center",
                        as: "span",
                        sx: [{
                            minWidth: "0"
                        }, d],
                        ...f,
                        children: [(0, n.BX)(a.Flex, {
                            elementDescriptor: a.descriptors.organizationPreviewAvatarContainer,
                            elementId: a.descriptors.organizationPreviewAvatarContainer.setId(g),
                            justify: "center",
                            as: "span",
                            sx: {
                                position: "relative"
                            },
                            children: [(0, n.tZ)(tP, {
                                boxElementDescriptor: a.descriptors.organizationPreviewAvatarBox,
                                imageElementDescriptor: a.descriptors.organizationPreviewAvatarImage,
                                ...r,
                                size: e => ({
                                    xs: e.sizes.$5,
                                    sm: e.sizes.$8,
                                    md: e.sizes.$9,
                                    lg: e.sizes.$12
                                })[o],
                                sx: p,
                                rounded: l
                            }), i && (0, n.tZ)(a.Flex, {
                                sx: {
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0
                                },
                                children: i
                            })]
                        }), (0, n.BX)(a.Flex, {
                            elementDescriptor: a.descriptors.organizationPreviewTextContainer,
                            elementId: a.descriptors.organizationPreviewTextContainer.setId(g),
                            direction: "col",
                            justify: "center",
                            as: "span",
                            sx: {
                                minWidth: "0px",
                                textAlign: "left"
                            },
                            children: [(0, n.BX)(a.Text, {
                                elementDescriptor: a.descriptors.organizationPreviewMainIdentifier,
                                elementId: a.descriptors.organizationPreviewMainIdentifier.setId(g),
                                variant: h || ({
                                    xs: "subtitle",
                                    sm: "caption",
                                    md: "subtitle",
                                    lg: "h1"
                                })[o],
                                as: "span",
                                truncate: !0,
                                sx: m,
                                title: r.name,
                                children: [r.name, " ", c]
                            }), w && (0, n.tZ)(a.Text, {
                                elementDescriptor: a.descriptors.organizationPreviewSecondaryIdentifier,
                                elementId: a.descriptors.organizationPreviewSecondaryIdentifier.setId(g),
                                as: "span",
                                localizationKey: w,
                                truncate: !0
                            })]
                        })]
                    })
                },
                tT = e => {
                    let {
                        defaultPage: t = 1
                    } = e || {}, [r, n] = (0, o.useState)(t);
                    return {
                        page: r,
                        changePage: n
                    }
                },
                tZ = e => {
                    let {
                        sx: t,
                        isActive: r,
                        icon: o,
                        children: i,
                        ...l
                    } = e;
                    return (0, n.BX)(a.Button, {
                        size: "xs",
                        variant: "outline",
                        sx: e => [{
                            color: e.colors.$colorText,
                            opacity: r ? 1 : e.opacity.$inactive,
                            padding: "".concat(e.space.$0x5, " ").concat(e.space.$0x5)
                        }, t],
                        elementDescriptor: a.descriptors.paginationButton,
                        ...l,
                        children: [o && (0, n.tZ)(a.Icon, {
                            size: "md",
                            elementDescriptor: a.descriptors.paginationButtonIcon,
                            icon: e.icon
                        }), i]
                    })
                },
                tR = e => {
                    var t, r, o, i;
                    let {
                        rowInfo: {
                            startingRow: l,
                            endingRow: s,
                            allRowsCount: c
                        }
                    } = e;
                    return (0, n.BX)(a.Text, {
                        children: [(0, n.tZ)(a.Text, {
                            as: "span",
                            elementDescriptor: a.descriptors.paginationRowText,
                            elementId: null === (t = a.descriptors.paginationRowText) || void 0 === t ? void 0 : t.setId("displaying"),
                            sx: e => ({
                                opacity: e.opacity.$inactive
                            }),
                            localizationKey: (0, a.localizationKeys)("paginationRowText__displaying"),
                            colorScheme: "secondary"
                        }), " ", (0, n.tZ)(a.Text, {
                            as: "span",
                            elementDescriptor: a.descriptors.paginationRowText,
                            elementId: null === (r = a.descriptors.paginationRowText) || void 0 === r ? void 0 : r.setId("rowsCount"),
                            sx: e => ({
                                fontWeight: e.fontWeights.$medium
                            }),
                            children: l === s && [0, 1].includes(l) ? l : "".concat(l, " – ").concat(s)
                        }), " ", (0, n.tZ)(a.Text, {
                            as: "span",
                            elementDescriptor: a.descriptors.paginationRowText,
                            elementId: null === (o = a.descriptors.paginationRowText) || void 0 === o ? void 0 : o.setId("displaying"),
                            sx: e => ({
                                opacity: e.opacity.$inactive
                            }),
                            localizationKey: (0, a.localizationKeys)("paginationRowText__of")
                        }), " ", (0, n.tZ)(a.Text, {
                            as: "span",
                            elementDescriptor: a.descriptors.paginationRowText,
                            elementId: null === (i = a.descriptors.paginationRowText) || void 0 === i ? void 0 : i.setId("allRowsCount"),
                            children: c
                        })]
                    })
                },
                tz = (e, t, r, n) => Math.abs(e - t) <= r || t === n || 1 === t,
                tL = (e, t, r) => Math.abs(e - t) === r + 1,
                tE = () => (0, n.tZ)(a.Flex, {
                    center: !0,
                    children: (0, n.tZ)(a.Text, {
                        colorScheme: "secondary",
                        children: "..."
                    })
                }),
                tD = e => {
                    let {
                        page: t,
                        count: r,
                        rowInfo: o,
                        siblingCount: i = 1,
                        onChange: l
                    } = e, {
                        t: s
                    } = (0, a.useLocalizations)();
                    return (0, n.BX)(a.Flex, {
                        justify: o ? "between" : "center",
                        align: "center",
                        sx: e => ({
                            fontSize: e.fontSizes.$sm,
                            "*": {
                                fontSize: "inherit"
                            },
                            [C.mqu.sm]: {
                                flexDirection: "column",
                                gap: e.space.$2
                            }
                        }),
                        children: [o && (0, n.tZ)(tR, {
                            rowInfo: o
                        }), (0, n.BX)(a.Flex, {
                            gap: 2,
                            align: "center",
                            sx: {
                                display: "inline-flex"
                            },
                            children: [(0, n.tZ)(tZ, {
                                isDisabled: t <= 1,
                                icon: w.W,
                                "aria-label": s((0, a.localizationKeys)("paginationButton__previous")),
                                onClick: () => {
                                    null == l || l(t - 1)
                                }
                            }), (0, $.w6)(1, r).map(e => tz(t, e, i, r) ? (0, n.tZ)(tZ, {
                                isActive: e === t,
                                variant: "ghost",
                                onClick: () => {
                                    null == l || l(e)
                                },
                                children: e
                            }, e) : tL(t, e, i) ? (0, n.tZ)(tE, {}, e) : null), (0, n.tZ)(tZ, {
                                isDisabled: t >= r || t < 1,
                                icon: w.TZ,
                                "aria-label": s((0, a.localizationKeys)("paginationButton__next")),
                                onClick: () => {
                                    null == l || l(t + 1)
                                }
                            })]
                        })]
                    })
                };
            var tO = r(5878);
            let tF = e => {
                    let {
                        name: t,
                        firstName: r,
                        lastName: o,
                        avatarUrl: a,
                        imageUrl: i,
                        ...l
                    } = e, s = (0, tO.Pp)({
                        name: t,
                        firstName: r,
                        lastName: o
                    }), c = (0, tO.Qm)({
                        name: t,
                        firstName: r,
                        lastName: o
                    });
                    return (0, n.tZ)(_, {
                        title: s,
                        initials: c,
                        imageUrl: a || i,
                        ...l
                    })
                },
                tM = e => {
                    var t;
                    let {
                        user: r,
                        externalAccount: o,
                        samlAccount: i,
                        size: l = "md",
                        showAvatar: s = !0,
                        icon: c,
                        iconSx: d,
                        rounded: u = !0,
                        imageUrl: p,
                        badge: m,
                        elementId: h,
                        sx: g,
                        title: f,
                        subtitle: v,
                        avatarSx: b,
                        mainIdentifierSx: y,
                        mainIdentifierVariant: x,
                        ...w
                    } = e, {
                        t: S
                    } = (0, a.useLocalizations)(), C = (0, tO.Pp)({ ...r
                    }) || (0, tO.Pp)({ ...o
                    }) || (0, tO.Pp)({ ...i
                    }), _ = (0, tO.xC)({ ...r
                    }) || (null == o ? void 0 : null === (t = o.accountIdentifier) || void 0 === t ? void 0 : t.call(o)) || (null == i ? void 0 : i.emailAddress), k = S(f), $ = p || (null == r ? void 0 : r.imageUrl) || (null == o ? void 0 : o.imageUrl), I = e => ({
                        xs: e.sizes.$5,
                        sm: e.sizes.$8,
                        md: e.sizes.$9,
                        lg: e.sizes.$12
                    })[l], P = k || C || _;
                    return (0, n.BX)(a.Flex, {
                        elementDescriptor: a.descriptors.userPreview,
                        elementId: a.descriptors.userPreview.setId(h),
                        align: "center",
                        as: "span",
                        sx: [e => ({
                            minWidth: "0px",
                            width: "fit-content",
                            gap: e.space.$4
                        }), g],
                        ...w,
                        children: [$ ? s ? (0, n.BX)(a.Flex, {
                            elementDescriptor: a.descriptors.userPreviewAvatarContainer,
                            elementId: a.descriptors.userPreviewAvatarContainer.setId(h),
                            justify: "center",
                            as: "span",
                            sx: {
                                position: "relative"
                            },
                            children: [(0, n.tZ)(tF, {
                                boxElementDescriptor: a.descriptors.userPreviewAvatarBox,
                                imageElementDescriptor: a.descriptors.userPreviewAvatarImage,
                                ...r,
                                ...o,
                                ...i,
                                name: C,
                                avatarUrl: $,
                                size: I,
                                sx: b,
                                rounded: u
                            }), c && (0, n.tZ)(a.Flex, {
                                elementDescriptor: a.descriptors.userPreviewAvatarIcon,
                                sx: [{
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0
                                }, d],
                                as: "span",
                                children: c
                            })]
                        }) : (0, n.tZ)(a.Flex, {
                            elementDescriptor: a.descriptors.userPreviewAvatarContainer,
                            elementId: a.descriptors.userPreviewAvatarContainer.setId(h),
                            justify: "center",
                            as: "span",
                            sx: e => ({
                                height: I(e)
                            })
                        }) : null, (0, n.BX)(a.Flex, {
                            elementDescriptor: a.descriptors.userPreviewTextContainer,
                            elementId: a.descriptors.userPreviewTextContainer.setId(h),
                            direction: "col",
                            justify: "center",
                            as: "span",
                            sx: {
                                minWidth: "0px",
                                textAlign: "left"
                            },
                            children: [(0, n.BX)(a.Text, {
                                elementDescriptor: a.descriptors.userPreviewMainIdentifier,
                                elementId: a.descriptors.userPreviewMainIdentifier.setId(h),
                                variant: x || ({
                                    xs: "subtitle",
                                    sm: "caption",
                                    md: "subtitle",
                                    lg: "h1"
                                })[l],
                                as: "span",
                                sx: [e => ({
                                    display: "flex",
                                    gap: e.sizes.$1,
                                    alignItems: "center"
                                }), y],
                                children: [P && (0, n.tZ)(a.Text, {
                                    as: "span",
                                    truncate: !0,
                                    sx: {
                                        fontWeight: "inherit"
                                    },
                                    children: P
                                }), m]
                            }), (v || C && _) && (0, n.tZ)(a.Text, {
                                elementDescriptor: a.descriptors.userPreviewSecondaryIdentifier,
                                elementId: a.descriptors.userPreviewSecondaryIdentifier.setId(h),
                                truncate: !0,
                                as: "span",
                                localizationKey: v || _
                            })]
                        })]
                    })
                },
                tU = e => (0, n.tZ)(tM, {
                    elementId: "personalWorkspace",
                    rounded: !1,
                    ...e
                }),
                tj = {
                    Root: o.forwardRef((e, t) => {
                        let {
                            elementDescriptor: r,
                            shouldEntryAnimate: o = !0,
                            ...i
                        } = e;
                        return (0, n.tZ)(a.Flow.Part, {
                            part: "popover",
                            children: (0, n.tZ)(et.Root, {
                                elementDescriptor: [a.descriptors.popoverBox, r],
                                ...i,
                                ref: t,
                                sx: [e => ({
                                    width: e.sizes.$94,
                                    maxWidth: "calc(100vw - ".concat(e.sizes.$8, ")"),
                                    zIndex: e.zIndices.$modal,
                                    borderRadius: e.radii.$xl,
                                    outline: "none"
                                }), e => ({
                                    animation: o ? "".concat(C.animations.dropdownSlideInScaleAndFade, " ").concat(e.transitionDuration.$fast) : void 0
                                })],
                                children: e.children
                            })
                        })
                    }),
                    Content: e => {
                        let {
                            sx: t,
                            ...r
                        } = e;
                        return (0, n.tZ)(a.Flex, {
                            direction: "col",
                            sx: [e => ({
                                backgroundColor: e.colors.$colorBackground,
                                overflow: "hidden",
                                borderRadius: e.radii.$lg,
                                zIndex: e.zIndices.$card,
                                borderWidth: e.borderWidths.$normal,
                                borderStyle: e.borderStyles.$solid,
                                borderColor: e.colors.$neutralAlpha50,
                                boxShadow: e.shadows.$cardContentShadow
                            }), t],
                            ...r,
                            children: e.children
                        })
                    },
                    Footer: e => {
                        let {
                            sx: t,
                            children: r,
                            ...o
                        } = e, {
                            branded: i
                        } = (0, f.useEnvironment)().displayConfig, {
                            privacyPageUrl: l,
                            termsPageUrl: s,
                            helpPageUrl: c
                        } = (0, a.useAppearance)().parsedLayout;
                        return (0, n.BX)(a.Col, {
                            justify: "between",
                            sx: [e => ({
                                background: C.common.mergedColorsBackground($.O9.setAlpha(e.colors.$colorBackground, 1), e.colors.$neutralAlpha50),
                                marginTop: "-".concat(e.space.$2),
                                paddingTop: e.space.$2,
                                "&:empty": {
                                    padding: 0,
                                    marginTop: 0
                                },
                                ">:not(:first-of-type)": {
                                    padding: "".concat(e.space.$4, " ").concat(e.space.$8),
                                    borderTopWidth: e.borderWidths.$normal,
                                    borderTopStyle: e.borderStyles.$solid,
                                    borderTopColor: e.colors.$neutralAlpha100
                                }
                            }), t],
                            ...o,
                            children: [r, (0, n.tZ)(et.ClerkAndPagesTag, {
                                outerSx: e => ({
                                    padding: "".concat(e.space.$4, " ").concat(e.space.$8)
                                }),
                                withFooterPages: !!(i || l || s || c),
                                devModeNoticeSx: e => ({
                                    padding: e.space.$none
                                }),
                                withDevOverlay: !0
                            })]
                        })
                    }
                },
                tV = e => {
                    let {
                        sx: t,
                        children: r,
                        icon: o,
                        iconProps: l,
                        showIconOnHover: s = !0,
                        ...c
                    } = e, d = (0, i.v)(), {
                        sx: u,
                        ...p
                    } = l || {};
                    return (0, n.BX)(a.Button, {
                        variant: "ghost",
                        colorScheme: "neutral",
                        focusRing: !1,
                        block: !0,
                        hoverAsFocus: !0,
                        isDisabled: d.isLoading,
                        sx: [e => ({
                            justifyContent: "space-between",
                            padding: "".concat(e.space.$4, " ").concat(e.space.$5),
                            borderRadius: 0,
                            ...s ? {
                                ":hover > svg": {
                                    visibility: "initial"
                                }
                            } : {}
                        }), t],
                        ...c,
                        children: [r, o && (0, n.tZ)(a.Icon, {
                            icon: o,
                            sx: [e => ({
                                color: e.colors.$colorTextSecondary,
                                marginLeft: e.space.$2,
                                visibility: s ? "hidden" : "initial"
                            }), u],
                            ...p
                        })]
                    })
                },
                tW = {
                    Root: o.forwardRef((e, t) => {
                        let {
                            sx: r,
                            children: o,
                            ...i
                        } = e, {
                            toggle: l
                        } = Y();
                        return (0, n.BX)(et.Root, {
                            ref: t,
                            sx: [e => ({
                                width: e.sizes.$220,
                                maxWidth: "calc(100vw - ".concat(e.sizes.$8, ")"),
                                display: "flex",
                                flexDirection: "row",
                                [C.mqu.md]: {
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                overflow: "hidden",
                                height: e.sizes.$176,
                                position: "relative"
                            }), r],
                            ...i,
                            children: [l && (0, n.tZ)(a.Box, {
                                sx: e => ({
                                    [C.mqu.md]: {
                                        padding: "".concat(e.space.$1x5, " ").concat(e.space.$2),
                                        top: e.space.$none,
                                        right: e.space.$none
                                    },
                                    zIndex: e.zIndices.$modal,
                                    position: "absolute",
                                    top: e.space.$2,
                                    right: e.space.$2
                                }),
                                children: (0, n.tZ)(U, {
                                    elementDescriptor: a.descriptors.modalCloseButton,
                                    variant: "ghost",
                                    "aria-label": "Close modal",
                                    onClick: l,
                                    icon: (0, n.tZ)(a.Icon, {
                                        icon: w.x8,
                                        size: "sm"
                                    }),
                                    sx: e => ({
                                        color: e.colors.$colorTextSecondary,
                                        padding: e.space.$3
                                    })
                                })
                            }), o, (0, n.tZ)(et.Footer, {
                                isProfileFooter: !0,
                                sx: {
                                    display: "none",
                                    [C.mqu.md]: {
                                        display: "flex"
                                    }
                                }
                            })]
                        })
                    }),
                    Content: e => {
                        let {
                            contentRef: t,
                            children: r
                        } = e, i = (0, v.useRouter)(), l = o.useRef(0);
                        return o.useEffect(() => {
                            var e;
                            let r = e => {
                                let t = e.target;
                                t.scrollTop && (l.current = t.scrollTop)
                            };
                            return null == t || null === (e = t.current) || void 0 === e || e.addEventListener("scroll", r), () => {
                                var e;
                                return null == t ? void 0 : null === (e = t.current) || void 0 === e ? void 0 : e.removeEventListener("scroll", r)
                            }
                        }, []), o.useLayoutEffect(() => {
                            l.current && (null == t ? void 0 : t.current) && (t.current.scrollTop = l.current)
                        }, [i.currentPath]), (0, n.tZ)(a.Col, {
                            elementDescriptor: a.descriptors.scrollBox,
                            sx: e => ({
                                backgroundColor: e.colors.$colorBackground,
                                position: "relative",
                                borderRadius: e.radii.$lg,
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                borderWidth: e.borderWidths.$normal,
                                borderStyle: e.borderStyles.$solid,
                                borderColor: e.colors.$neutralAlpha50,
                                boxShadow: e.shadows.$cardContentShadow
                            }),
                            children: (0, n.tZ)(a.Col, {
                                elementDescriptor: a.descriptors.pageScrollBox,
                                sx: e => ({
                                    flex: "1",
                                    scrollbarGutter: "stable",
                                    paddingTop: e.space.$7,
                                    paddingBottom: e.space.$7,
                                    paddingLeft: e.space.$8,
                                    paddingRight: e.space.$6,
                                    [C.mqu.sm]: {
                                        padding: "".concat(e.space.$8, " ").concat(e.space.$5)
                                    },
                                    ...C.common.maxHeightScroller(e)
                                }),
                                ref: t,
                                children: r
                            })
                        })
                    }
                },
                tN = e => {
                    let t = (0, a.useAppearance)(),
                        r = tX(o.Children.toArray(e.children), e => (0, n.tZ)(em, {}, "divider".concat(e)));
                    return (0, n.tZ)(tH, {
                        reverse: "bottom" === t.parsedLayout.socialButtonsPlacement,
                        ...e,
                        children: r
                    })
                },
                tH = e => {
                    let {
                        children: t,
                        reverse: r
                    } = e;
                    return (0, n.tZ)(n.HY, {
                        children: r ? o.Children.toArray(t).reverse() : t
                    })
                },
                tX = (e, t) => e.reduce((r, n, o) => o === e.length - 1 ? [...r, n] : [...r, n, t(o)], []);
            var tK = r(3929);
            let tY = (0, o.forwardRef)((e, t) => {
                    let {
                        children: r,
                        leftIcon: o = w.v3,
                        id: i,
                        sx: l,
                        localizationKey: s,
                        ...c
                    } = e;
                    return (0, n.tZ)(S, {
                        elementDescriptor: a.descriptors.profileSectionPrimaryButton,
                        elementId: a.descriptors.profileSectionPrimaryButton.setId(i),
                        variant: "ghost",
                        sx: [e => ({
                            textWrap: "nowrap",
                            justifyContent: "start",
                            height: e.sizes.$8
                        }), l],
                        textLocalizationKey: s,
                        leftIcon: o,
                        leftIconSx: e => ({
                            width: e.sizes.$4,
                            height: e.sizes.$4
                        }),
                        ref: t,
                        ...c,
                        children: r
                    })
                }),
                tq = e => {
                    let {
                        children: t,
                        isLoading: r,
                        localizationKey: i,
                        sx: l,
                        leftIcon: s,
                        leftIconSx: c,
                        ...d
                    } = e, u = (0, o.isValidElement)(s);
                    return (0, n.BX)(tv, {
                        sx: [e => ({
                            padding: "".concat(e.space.$1x5, " ").concat(e.space.$2)
                        }), l],
                        isLoading: r,
                        ...d,
                        children: [(r || s) && (0, n.tZ)(a.Flex, {
                            as: "span",
                            sx: e => ({
                                flex: "0 0 ".concat(e.space.$4)
                            }),
                            children: r ? (0, n.tZ)(a.Spinner, {
                                elementDescriptor: a.descriptors.spinner,
                                size: "sm"
                            }) : !u && s ? (0, n.tZ)(a.Icon, {
                                icon: s,
                                sx: [e => ({
                                    color: e.colors.$neutralAlpha600,
                                    width: e.sizes.$5
                                }), c]
                            }) : s
                        }), (0, n.tZ)(a.Text, {
                            localizationKey: i
                        })]
                    })
                },
                tG = e => {
                    let {
                        children: t,
                        triggerLocalizationKey: r,
                        id: o,
                        triggerSx: i,
                        onClick: l
                    } = e;
                    return (0, n.tZ)(a.Flex, {
                        sx: {
                            position: "relative"
                        },
                        children: (0, n.BX)(tm, {
                            elementId: o,
                            children: [(0, n.tZ)(th, {
                                children: (0, n.tZ)(tY, {
                                    id: o,
                                    textLocalizationKey: r,
                                    sx: [e => ({
                                        justifyContent: "start",
                                        height: e.sizes.$8
                                    }), i],
                                    leftIcon: w.v3,
                                    leftIconSx: e => ({
                                        width: e.sizes.$4,
                                        height: e.sizes.$4
                                    }),
                                    onClick: l
                                })
                            }), (0, n.tZ)(tf, {
                                asPortal: !1,
                                sx: e => ({
                                    width: "100%",
                                    padding: e.space.$1
                                }),
                                children: t
                            })]
                        })
                    })
                },
                tJ = {
                    Root: e => {
                        let {
                            title: t,
                            centered: r = !0,
                            children: i,
                            id: l,
                            sx: s,
                            ...c
                        } = e, d = (0, o.useRef)(null), [u, p] = (0, o.useState)(0);
                        return (0, o.useLayoutEffect)(() => {
                            let e = d.current;
                            e && p(e.clientHeight + e.clientTop || 0)
                        }, []), (0, n.BX)(a.Flex, {
                            elementDescriptor: a.descriptors.profileSection,
                            elementId: a.descriptors.profileSection.setId(l),
                            sx: [e => ({
                                flexDirection: "row-reverse",
                                borderTopWidth: e.borderWidths.$normal,
                                borderTopStyle: e.borderStyles.$solid,
                                borderTopColor: e.colors.$neutralAlpha100,
                                paddingTop: e.space.$4,
                                paddingBottom: e.space.$4,
                                gap: e.space.$6,
                                [C.mqu.lg]: {
                                    flexDirection: "column-reverse",
                                    gap: e.space.$2
                                }
                            }), s],
                            ...c,
                            children: [(0, n.tZ)(a.Col, {
                                elementDescriptor: a.descriptors.profileSectionContent,
                                elementId: a.descriptors.profileSectionContent.setId(l),
                                gap: 2,
                                ref: d,
                                sx: {
                                    minWidth: 0,
                                    width: "100%",
                                    "+ *": {
                                        "--clerk-height": "".concat(u, "px")
                                    }
                                },
                                children: i
                            }), (0, n.tZ)(a.Col, {
                                elementDescriptor: a.descriptors.profileSectionHeader,
                                elementId: a.descriptors.profileSectionHeader.setId(l),
                                sx: e => ({
                                    padding: r ? void 0 : "".concat(e.space.$1x5, " 0"),
                                    gap: e.space.$1,
                                    width: e.space.$66,
                                    alignSelf: u ? "self-start" : r ? "center" : void 0,
                                    marginTop: r ? "calc(var(--clerk-height)/2)" : void 0,
                                    transform: u && r ? "translateY(-50%)" : void 0,
                                    [C.mqu.lg]: {
                                        alignSelf: "self-start",
                                        marginTop: "unset",
                                        transform: "none",
                                        padding: 0
                                    }
                                }),
                                children: (0, n.tZ)(tQ, {
                                    localizationKey: t,
                                    elementDescriptor: a.descriptors.profileSectionTitle,
                                    elementId: a.descriptors.profileSectionTitle.setId(l),
                                    textElementDescriptor: a.descriptors.profileSectionTitleText,
                                    textElementId: a.descriptors.profileSectionTitleText.setId(l)
                                })
                            })]
                        })
                    },
                    ItemList: e => {
                        let {
                            children: t,
                            id: r,
                            disableAnimation: o = !1,
                            ...i
                        } = e, l = (0, n.tZ)(a.Col, {
                            elementDescriptor: a.descriptors.profileSectionItemList,
                            elementId: a.descriptors.profileSectionItemList.setId(r),
                            sx: e => ({
                                gap: e.space.$0x5
                            }),
                            ...i,
                            children: t
                        });
                        return o ? l : (0, n.tZ)(g, {
                            asChild: !0,
                            children: l
                        })
                    },
                    Item: e => {
                        let {
                            children: t,
                            id: r,
                            sx: o,
                            hoverable: i,
                            ...l
                        } = e;
                        return (0, n.tZ)(a.Flex, {
                            elementDescriptor: a.descriptors.profileSectionItem,
                            elementId: a.descriptors.profileSectionItem.setId(r),
                            sx: [e => ({
                                justifyContent: "space-between",
                                width: "100%",
                                alignItems: "center",
                                padding: "".concat(e.space.$1, " ").concat(e.space.$1, " ").concat(e.space.$1, " ").concat(e.space.$2x5),
                                gap: e.space.$2,
                                ...i && {
                                    borderRadius: e.radii.$lg,
                                    ":hover": {
                                        backgroundColor: e.colors.$neutralAlpha50
                                    }
                                }
                            }), o],
                            ...l,
                            children: t
                        })
                    },
                    Button: e => {
                        let {
                            children: t,
                            id: r,
                            sx: o,
                            ...i
                        } = e;
                        return (0, n.tZ)(a.Button, {
                            elementDescriptor: a.descriptors.profileSectionPrimaryButton,
                            elementId: a.descriptors.profileSectionPrimaryButton.setId(r),
                            variant: "ghost",
                            sx: [e => ({
                                whiteSpace: "nowrap",
                                justifyContent: "start",
                                gap: e.space.$2,
                                padding: "".concat(e.space.$1x5, " ").concat(e.space.$3, " ").concat(e.space.$1x5, " ").concat(e.space.$2x5)
                            }), o],
                            ...i,
                            children: t
                        })
                    },
                    ArrowButton: tY,
                    ActionMenu: tG,
                    ActionMenuItem: tq
                },
                tQ = e => {
                    let {
                        textElementDescriptor: t,
                        textElementId: r,
                        localizationKey: o,
                        ...i
                    } = e;
                    return (0, n.tZ)(a.Flex, { ...i,
                        children: (0, n.tZ)(a.Text, {
                            localizationKey: o,
                            variant: "subtitle",
                            elementDescriptor: t,
                            elementId: r
                        })
                    })
                },
                t0 = e => {
                    let {
                        textElementDescriptor: t,
                        textElementId: r,
                        localizationKey: o,
                        ...i
                    } = e;
                    return (0, n.tZ)(a.Flex, { ...i,
                        sx: e => ({
                            padding: "".concat(e.space.$2, " ").concat(e.space.$none)
                        }),
                        children: (0, n.tZ)(a.Text, {
                            localizationKey: o,
                            colorScheme: "secondary",
                            elementDescriptor: t,
                            elementId: r
                        })
                    })
                },
                [t1, t2] = (0, j.uH)("SelectState"),
                t5 = (e, t, r) => (0, n.tZ)(a.Flex, {
                    sx: e => ({
                        width: "100%",
                        padding: "".concat(e.space.$2, " ").concat(e.space.$4),
                        margin: "0 ".concat(e.space.$1),
                        borderRadius: e.radii.$md,
                        ...r && {
                            backgroundColor: e.colors.$neutralAlpha100
                        },
                        "&:hover": {
                            backgroundColor: e.colors.$neutralAlpha100
                        }
                    }),
                    children: (0, n.tZ)(a.Text, {
                        truncate: !0,
                        children: e.label || e.value
                    })
                }),
                t3 = e => e.label || e.value,
                t6 = (0, i.TJ)(e => {
                    let {
                        value: t,
                        options: r,
                        onChange: a,
                        renderOption: i,
                        noResultsMessage: s,
                        comparator: c,
                        placeholder: d = "Select an option",
                        searchPlaceholder: u,
                        elementId: p,
                        children: m,
                        portal: h = !1,
                        referenceElement: g = null,
                        ...f
                    } = e, v = (0, l.Sv)({
                        autoUpdate: !0,
                        adjustToReferenceWidth: !!g,
                        referenceElement: g
                    }), b = v.toggle, y = o.useRef(null), x = (0, l.dw)({
                        items: r,
                        comparator: c || (() => !0)
                    }), w = o.useCallback(e => {
                        null == a || a(e), b()
                    }, [b, a]), S = (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)(t9, {}), (0, n.tZ)(re, {})]
                    });
                    return (0, n.tZ)(t1.Provider, {
                        value: {
                            value: {
                                popoverCtx: v,
                                searchInputCtx: x,
                                selectedOption: r.find(e => e.value === t) || null,
                                noResultsMessage: s,
                                focusedItemRef: y,
                                value: t,
                                renderOption: i || t5,
                                buttonRenderOption: i || t3,
                                placeholder: d,
                                searchPlaceholder: u,
                                comparator: c,
                                select: w,
                                onTriggerClick: b,
                                elementId: p,
                                portal: h
                            }
                        },
                        ...f,
                        children: o.Children.count(m) ? m : S
                    })
                }),
                t4 = o.memo(o.forwardRef((e, t) => {
                    let {
                        option: r,
                        renderOption: i,
                        isSelected: l,
                        index: s,
                        handleSelect: c,
                        isFocused: d,
                        elementId: u
                    } = e;
                    return (0, n.tZ)(a.Flex, {
                        ref: t,
                        sx: {
                            userSelect: "none",
                            cursor: "pointer"
                        },
                        onClick: () => {
                            c(r)
                        },
                        children: o.cloneElement(i(r, s, l), {
                            elementDescriptor: a.descriptors.selectOption,
                            elementId: a.descriptors.selectOption.setId(u),
                            "data-selected": l,
                            "data-focused": d
                        })
                    })
                })),
                t7 = e => {
                    let {
                        sx: t,
                        ...r
                    } = e;
                    o.useEffect(() => () => e.onChange({
                        target: {
                            value: ""
                        }
                    }), []);
                    let {
                        elementId: i
                    } = t2();
                    return (0, n.tZ)(a.Flex, {
                        sx: e => ({
                            padding: e.space.$0x5
                        }),
                        children: (0, n.tZ)(a.Input, {
                            elementDescriptor: a.descriptors.selectSearchInput,
                            elementId: a.descriptors.selectSearchInput.setId(i),
                            focusRing: !1,
                            variant: "unstyled",
                            sx: [e => ({
                                borderRadius: e.radii.$md,
                                backgroundColor: e.colors.$neutralAlpha100,
                                padding: e.space.$2
                            }), t],
                            ...r
                        })
                    })
                },
                t8 = e => {
                    let {
                        sx: t,
                        ...r
                    } = e;
                    return (0, n.tZ)(a.Text, {
                        as: "div",
                        sx: [e => ({
                            width: "100%",
                            padding: "".concat(e.space.$1, " ").concat(e.space.$2, " ").concat(e.space.$2, " ").concat(e.space.$2)
                        }), t],
                        ...r
                    })
                },
                t9 = e => {
                    let {
                        containerSx: t,
                        sx: r,
                        ...i
                    } = e, {
                        popoverCtx: l,
                        searchInputCtx: s,
                        value: c,
                        renderOption: d,
                        searchPlaceholder: u,
                        comparator: p,
                        focusedItemRef: m,
                        noResultsMessage: h,
                        select: g,
                        onTriggerClick: f,
                        elementId: v,
                        portal: b
                    } = t2(), {
                        filteredItems: y,
                        searchInputProps: x
                    } = s, [w, S] = (0, o.useState)(0), {
                        isOpen: _,
                        floating: k,
                        styles: I,
                        nodeId: P,
                        context: A
                    } = l, B = o.useRef(null);
                    return o.useEffect(() => {
                        var e, t;
                        if (!_) {
                            S(-1);
                            return
                        }
                        null === (t = m.current) || void 0 === t || null === (e = t.scrollIntoView) || void 0 === e || e.call(t, {
                            block: "nearest"
                        })
                    }, [w, _]), o.useEffect(() => S(0), [y.length]), o.useEffect(() => {
                        var e, t, r;
                        if (p || null == B || null === (e = B.current) || void 0 === e || e.focus(), _) {
                            S(y.findIndex(e => e.value === c)), null === (r = m.current) || void 0 === r || null === (t = r.scrollIntoView) || void 0 === t || t.call(r, {
                                block: "nearest"
                            });
                            return
                        }
                    }, [_]), (0, n.tZ)(H, {
                        nodeId: P,
                        context: A,
                        isOpen: _,
                        portal: b || !1,
                        order: ["content"],
                        children: (0, n.BX)(a.Flex, {
                            elementDescriptor: a.descriptors.selectOptionsContainer,
                            elementId: a.descriptors.selectOptionsContainer.setId(v),
                            ref: k,
                            onKeyDown: e => "ArrowUp" === e.key ? (e.preventDefault(), _) ? S(function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                return 0 === e ? y.length - 1 : e - 1
                            }) : f() : "ArrowDown" === e.key ? (e.preventDefault(), _) ? S(function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                return e === y.length - 1 ? 0 : e + 1
                            }) : f() : "Enter" === e.key && w >= 0 ? (e.preventDefault(), g(y[w])) : void 0,
                            direction: "col",
                            justify: "start",
                            sx: [e => ({
                                backgroundColor: $.O9.makeSolid(e.colors.$colorBackground),
                                borderRadius: e.radii.$lg,
                                overflow: "hidden",
                                animation: "".concat(C.animations.dropdownSlideInScaleAndFade, " ").concat(e.transitionDuration.$slower, " ").concat(e.transitionTiming.$slowBezier),
                                transformOrigin: "top center",
                                boxShadow: e.shadows.$menuShadow,
                                zIndex: e.zIndices.$dropdown
                            }), r],
                            style: { ...I,
                                left: I.left - 1
                            },
                            children: [p && (0, n.tZ)(t7, {
                                placeholder: u,
                                ...x
                            }), (0, n.BX)(a.Flex, {
                                ref: B,
                                direction: "col",
                                tabIndex: p ? void 0 : 0,
                                sx: [e => ({
                                    gap: e.space.$0x5,
                                    outline: "none",
                                    overflowY: "auto",
                                    maxHeight: "18vh",
                                    padding: "".concat(e.space.$0x5, " ").concat(e.space.$0x5)
                                }), t],
                                ...i,
                                children: [y.map((e, t) => {
                                    let r = t === w,
                                        o = c === e.value;
                                    return (0, n.tZ)(t4, {
                                        index: t,
                                        ref: r ? m : void 0,
                                        option: e,
                                        renderOption: d,
                                        isSelected: o,
                                        isFocused: r,
                                        handleSelect: g,
                                        elementId: v
                                    }, e.value)
                                }), h && 0 === y.length && (0, n.tZ)(t8, {
                                    children: h
                                })]
                            })]
                        })
                    })
                },
                re = e => {
                    let {
                        sx: t,
                        children: r,
                        icon: o,
                        iconSx: i,
                        ...l
                    } = e, {
                        popoverCtx: s,
                        onTriggerClick: c,
                        buttonRenderOption: d,
                        selectedOption: u,
                        placeholder: p,
                        elementId: m
                    } = t2(), {
                        reference: h
                    } = s, g = r;
                    return r || (g = u ? d(u) : (0, n.tZ)(a.Text, {
                        as: "span",
                        sx: e => ({
                            opacity: e.opacity.$inactive
                        }),
                        children: p
                    })), (0, n.BX)(a.Button, {
                        elementDescriptor: a.descriptors.selectButton,
                        elementId: a.descriptors.selectButton.setId(m),
                        ref: h,
                        variant: "outline",
                        textVariant: "buttonLarge",
                        onClick: c,
                        sx: [e => ({
                            gap: e.space.$2,
                            paddingLeft: e.space.$3x5,
                            paddingRight: e.space.$3x5,
                            alignItems: "center",
                            "> *": {
                                pointerEvents: "none"
                            }
                        }), t],
                        ...l,
                        children: [g, (0, n.tZ)(a.Icon, {
                            elementDescriptor: a.descriptors.selectButtonIcon,
                            elementId: a.descriptors.selectButtonIcon.setId(m),
                            size: "md",
                            icon: o || w._M,
                            sx: i
                        })]
                    })
                },
                rt = e => {
                    let {
                        text: t,
                        title: r,
                        finishLabel: o,
                        onFinish: i,
                        contents: s,
                        ...c
                    } = e, {
                        navigateToFlowStart: d
                    } = (0, l.zk)();
                    return (0, n.BX)(a.Col, { ...c,
                        gap: 4,
                        children: [(0, n.tZ)(ev.Root, {
                            children: (0, n.tZ)(ev.Title, {
                                localizationKey: r,
                                textVariant: "subtitle"
                            })
                        }), (0, n.tZ)(a.Col, {
                            gap: 4,
                            children: Array.isArray(t) ? t.map(e => (0, n.tZ)(a.Text, {
                                localizationKey: e,
                                colorScheme: "secondary",
                                sx: e => ({
                                    display: "inline",
                                    ":not(:last-of-type)": {
                                        marginRight: e.sizes.$1
                                    }
                                })
                            }, e.key)) : (0, n.tZ)(a.Text, {
                                localizationKey: t,
                                colorScheme: "secondary"
                            })
                        }), s, (0, n.tZ)(eY, {
                            children: (0, n.tZ)(a.Button, {
                                autoFocus: !0,
                                localizationKey: o || (0, eX.u1)("userProfile.formButtonPrimary__finish"),
                                elementDescriptor: a.descriptors.formButtonPrimary,
                                onClick: i || d
                            })
                        })]
                    })
                },
                [rr, rn] = (0, j.uH)("TabsContext"),
                ro = e => {
                    let t = o.useMemo(() => ({
                        value: e.value
                    }), [e.value.selectedIndex, e.value.setFocusedIndex]);
                    return (0, n.tZ)(rr.Provider, {
                        value: t,
                        children: e.children
                    })
                },
                ra = e => {
                    let {
                        defaultIndex: t = 0,
                        children: r
                    } = e, [a, i] = o.useState(t), [l, s] = o.useState(-1);
                    return (0, n.tZ)(ro, {
                        value: {
                            selectedIndex: a,
                            setSelectedIndex: i,
                            focusedIndex: l,
                            setFocusedIndex: s
                        },
                        children: r
                    })
                },
                ri = e => {
                    let {
                        children: t,
                        sx: r,
                        ...i
                    } = e, {
                        setSelectedIndex: l,
                        selectedIndex: s,
                        setFocusedIndex: c
                    } = rn(), d = 0, u = (0, $.WR)(t).map(e => {
                        let t = o.cloneElement(e, {
                            tabIndex: e.type === rl ? d : void 0
                        });
                        return d++, t
                    });
                    return (0, n.tZ)(a.Flex, {
                        elementDescriptor: a.descriptors.tabListContainer,
                        onKeyDown: e => {
                            let t = u.filter(e => {
                                    var t;
                                    return !(null === (t = e.props) || void 0 === t ? void 0 : t.isDisabled) && e.type === rl
                                }).map(e => e.props.tabIndex),
                                r = t.length,
                                n = t.indexOf(s);
                            if ("ArrowLeft" === e.key) {
                                let e = 0 === n ? t[r - 1] : t[n - 1];
                                return c(e), l(e)
                            }
                            if ("ArrowRight" === e.key) {
                                let e = r - 1 === n ? t[0] : t[n + 1];
                                return c(e), l(e)
                            }
                        },
                        role: "tablist",
                        sx: [e => ({
                            borderBottomStyle: e.borderStyles.$solid,
                            borderBottomWidth: e.borderWidths.$normal,
                            borderColor: e.colors.$neutralAlpha100
                        }), r],
                        ...i,
                        children: u
                    })
                },
                rl = e => {
                    let {
                        t
                    } = (0, a.useLocalizations)(), {
                        children: r,
                        sx: i,
                        tabIndex: l,
                        isDisabled: s,
                        localizationKey: c,
                        ...d
                    } = e;
                    if (void 0 === l) throw Error("Tab component must be a direct child of TabList.");
                    let {
                        setSelectedIndex: u,
                        selectedIndex: p,
                        focusedIndex: m,
                        setFocusedIndex: h
                    } = rn(), g = o.useRef(null), f = l === p, v = l === m;
                    return o.useEffect(() => {
                        s && 0 === l && u(l + 1)
                    }, []), o.useEffect(() => {
                        g.current && v && g.current.focus()
                    }, [v]), (0, n.BX)(a.Button, {
                        elementDescriptor: a.descriptors.tabButton,
                        onClick: () => {
                            u(l), h(-1)
                        },
                        isDisabled: s,
                        tabIndex: f ? 0 : -1,
                        variant: "ghost",
                        "aria-selected": f,
                        id: "cl-tab-".concat(l),
                        "aria-controls": "cl-tabpanel-".concat(l),
                        role: "tab",
                        ref: g,
                        sx: [e => ({
                            background: e.colors.$transparent,
                            color: f ? e.colors.$primary500 : e.colors.$neutralAlpha700,
                            gap: e.space.$1x5,
                            fontWeight: e.fontWeights.$medium,
                            borderBottomWidth: f ? e.borderWidths.$normal : 0,
                            borderBottomStyle: e.borderStyles.$solid,
                            borderBottomColor: e.colors.$primary500,
                            marginBottom: f ? "-1px" : 0,
                            borderRadius: 0,
                            padding: "".concat(e.space.$2x5, " ").concat(e.space.$0x25),
                            width: "fit-content",
                            "&:hover, :focus": {
                                backgroundColor: e.colors.$transparent,
                                boxShadow: "none"
                            }
                        }), i],
                        ...d,
                        children: [t(c), r]
                    })
                },
                rs = e => {
                    let {
                        children: t
                    } = e, r = (0, $.WR)(t).map((e, t) => o.cloneElement(e, {
                        tabIndex: t
                    }));
                    return (0, n.tZ)(n.HY, {
                        children: r
                    })
                },
                rc = e => {
                    let {
                        tabIndex: t,
                        sx: r,
                        children: o,
                        ...i
                    } = e;
                    if (void 0 === t) throw Error("TabPanel component must be a direct child of TabPanels.");
                    let {
                        selectedIndex: l
                    } = rn();
                    return t !== l ? null : (0, n.tZ)(a.Flex, {
                        elementDescriptor: a.descriptors.tabPanel,
                        id: "cl-tabpanel-".concat(t),
                        role: "tabpanel",
                        tabIndex: 0,
                        "aria-labelledby": "cl-tab-".concat(t),
                        sx: [{
                            outline: 0
                        }, r],
                        ...i,
                        children: o
                    })
                },
                rd = e => e.trim(),
                ru = e => {
                    let {
                        t
                    } = (0, a.useLocalizations)(), {
                        sx: r,
                        placeholder: i,
                        validate: l = () => !0,
                        value: s,
                        onChange: c,
                        autoFocus: d,
                        validateUnsubmittedEmail: u = () => null,
                        ...p
                    } = e, m = s.split(",").map(rd).filter(Boolean), h = new Set(m), g = o.useRef(!0), f = o.useRef(null), [v, b] = o.useState(""), y = e => {
                        c({
                            target: {
                                value: e.join(",")
                            }
                        }), _(), u("")
                    }, x = e => {
                        y(m.filter(t => t !== e))
                    }, w = () => {
                        y(m.slice(0, -1))
                    }, S = e => {
                        let t = (Array.isArray(e) ? [...e] : [e]).map(rd).filter(Boolean).filter(l).filter(e => !h.has(e));
                        t.length && (y([...m, ...t]), b(""), _())
                    }, _ = () => {
                        var e;
                        null === (e = f.current) || void 0 === e || e.focus()
                    };
                    return (0, n.BX)(a.Flex, {
                        elementDescriptor: a.descriptors.tagInputContainer,
                        align: "start",
                        gap: 2,
                        wrap: "wrap",
                        onClick: _,
                        onFocus: _,
                        sx: [e => ({
                            maxWidth: "100%",
                            padding: "".concat(e.space.$1x5, " ").concat(e.space.$2),
                            backgroundColor: e.colors.$colorInputBackground,
                            color: e.colors.$colorInputText,
                            minHeight: e.sizes.$20,
                            maxHeight: e.sizes.$60,
                            overflowY: "auto",
                            cursor: "text",
                            justifyItems: "center",
                            ...C.common.borderVariants(e).normal
                        }), r],
                        ...p,
                        children: [m.map(e => (0, n.tZ)(rp, {
                            onRemoveClick: () => x(e),
                            children: e
                        }, e)), (0, n.tZ)(a.Input, {
                            ref: f,
                            value: v,
                            type: "email",
                            "data-testid": "tag-input",
                            placeholder: m.length ? void 0 : t(i),
                            onKeyDown: e => {
                                let {
                                    key: t
                                } = e;
                                ("," === t || " " === t || "Enter" === t) && v.length ? (e.preventDefault(), S(v)) : "Backspace" === t && !v.length && m.length && g.current && (e.preventDefault(), w()), g.current = !1
                            },
                            onKeyUp: () => {
                                g.current = !0
                            },
                            onChange: e => {
                                b(e.target.value), u(e.target.value)
                            },
                            onPaste: e => {
                                e.preventDefault(), S((e.clipboardData.getData("text") || "").split(/,| |\n|\t/).filter(Boolean).map(e => e.trim()))
                            },
                            onBlur: e => {
                                e.preventDefault(), S(v)
                            },
                            focusRing: !1,
                            autoFocus: d,
                            variant: "unstyled",
                            sx: e => ({
                                flexGrow: 1,
                                borderWidth: 0,
                                width: "initial",
                                padding: 0,
                                lineHeight: e.space.$5,
                                paddingLeft: e.space.$1,
                                "::placeholder": {
                                    color: e.colors.$colorTextSecondary
                                },
                                boxShadow: "none",
                                ":hover": {
                                    boxShadow: "none"
                                }
                            })
                        })]
                    })
                },
                rp = e => {
                    let {
                        onRemoveClick: t,
                        children: r,
                        ...o
                    } = e;
                    return (0, n.BX)(a.Flex, {
                        elementDescriptor: a.descriptors.tagPillContainer,
                        onClick: t,
                        gap: 1,
                        center: !0,
                        ...o,
                        sx: e => ({
                            padding: "".concat(e.space.$0x5, " ").concat(e.space.$1x5),
                            borderRadius: e.radii.$sm,
                            color: e.colors.$primary500,
                            backgroundColor: e.colors.$neutralAlpha50,
                            boxShadow: e.shadows.$badge,
                            borderWidth: e.borderWidths.$normal,
                            borderStyle: e.borderStyles.$solid,
                            borderColor: e.colors.$neutralAlpha100,
                            display: "inline-flex",
                            marginRight: "1px",
                            cursor: "pointer",
                            ":hover": {
                                backgroundColor: e.colors.$neutralAlpha100
                            },
                            ":hover svg": {
                                color: e.colors.$danger500
                            },
                            overflow: "hidden"
                        }),
                        children: [(0, n.tZ)(a.Text, {
                            truncate: !0,
                            variant: "buttonSmall",
                            children: r
                        }), (0, n.tZ)(a.Icon, {
                            elementDescriptor: a.descriptors.tagPillIcon,
                            size: "md",
                            icon: w.v3,
                            sx: e => ({
                                color: e.colors.$colorTextSecondary,
                                transform: "translateY(0px) rotate(45deg)"
                            })
                        })]
                    })
                },
                rm = e => {
                    let {
                        actions: t,
                        elementId: r
                    } = e;
                    return (0, n.BX)(tm, {
                        elementId: r,
                        children: [(0, n.tZ)(th, {
                            arialLabel: e => "".concat(e ? "Close" : "Open", " menu"),
                            children: (0, n.tZ)(a.Button, {
                                sx: e => ({
                                    padding: e.space.$0x5,
                                    boxSizing: "content-box",
                                    opacity: e.opacity.$inactive,
                                    ":hover": {
                                        opacity: 1
                                    }
                                }),
                                variant: "ghost",
                                colorScheme: "neutral",
                                elementDescriptor: [a.descriptors.menuButton, a.descriptors.menuButtonEllipsis],
                                children: (0, n.tZ)(a.Icon, {
                                    icon: w.g4,
                                    sx: e => ({
                                        width: "auto",
                                        height: e.sizes.$5
                                    })
                                })
                            })
                        }), (0, n.tZ)(tf, {
                            children: t.map((e, t) => (0, n.tZ)(tv, {
                                destructive: e.isDestructive,
                                onClick: e.onClick,
                                isDisabled: e.isDisabled,
                                localizationKey: e.label
                            }, t))
                        })]
                    })
                },
                rh = e => {
                    let {
                        icon: t,
                        ...r
                    } = e;
                    return (0, n.tZ)(a.Button, {
                        variant: "outline",
                        sx: [e => ({
                            borderColor: e.colors.$neutralAlpha200
                        }), e.sx],
                        ...r,
                        children: (0, n.BX)(a.Col, {
                            center: !0,
                            gap: 2,
                            children: [(0, n.tZ)(a.Icon, {
                                icon: t
                            }), (0, n.tZ)(a.Text, {
                                children: e.children
                            })]
                        })
                    })
                },
                rg = e => {
                    let {
                        showAlternativeMethods: t = !0,
                        children: r
                    } = e, o = (0, i.v)(), l = eo({
                        onCodeEntryFinished: (t, r, n) => {
                            e.onCodeEntryFinishedAction(t, r, n)
                        },
                        onResendCodeClicked: e.onResendCodeClicked
                    });
                    return (0, n.BX)(et.Root, {
                        children: [(0, n.BX)(et.Content, {
                            children: [(0, n.BX)(ev.Root, {
                                children: [(0, n.tZ)(ev.Title, {
                                    localizationKey: e.cardTitle
                                }), (0, n.tZ)(ev.Subtitle, {
                                    localizationKey: e.cardSubtitle
                                }), (0, n.tZ)(e5, {
                                    identifier: e.safeIdentifier,
                                    avatarUrl: e.profileImageUrl,
                                    onClick: e.onBackLinkClicked ? void 0 : e.onIdentityPreviewEditClicked
                                })]
                            }), (0, n.tZ)(et.Alert, {
                                children: o.error
                            }), r, (0, n.BX)(a.Col, {
                                elementDescriptor: a.descriptors.main,
                                gap: 8,
                                children: [(0, n.tZ)(eW.OTPInput, { ...l,
                                    label: e.inputLabel,
                                    resendButton: e.resendButton
                                }), (0, n.BX)(a.Col, {
                                    gap: 3,
                                    children: [(0, n.tZ)(a.Button, {
                                        elementDescriptor: a.descriptors.formButtonPrimary,
                                        block: !0,
                                        hasArrow: !0,
                                        isLoading: l.isLoading,
                                        localizationKey: (0, a.localizationKeys)("formButtonPrimary"),
                                        onClick: l.onFakeContinue
                                    }), t && e.onShowAlternativeMethodsClicked && (0, n.tZ)(et.Action, {
                                        elementId: "alternativeMethods",
                                        children: (0, n.tZ)(et.ActionLink, {
                                            localizationKey: (0, a.localizationKeys)("footerActionLink__useAnotherMethod"),
                                            onClick: e.onShowAlternativeMethodsClicked
                                        })
                                    })]
                                })]
                            })]
                        }), (0, n.tZ)(et.Footer, {})]
                    })
                },
                rf = e => {
                    let {
                        navigate: t
                    } = (0, v.useRouter)(), r = (0, i.v)();
                    return (0, n.tZ)(a.Flow.Part, {
                        part: "emailLinkVerify",
                        children: (0, n.BX)(et.Root, {
                            children: [(0, n.BX)(et.Content, {
                                children: [(0, n.BX)(ev.Root, {
                                    showLogo: !0,
                                    children: [(0, n.tZ)(ev.Title, {
                                        localizationKey: e.cardTitle
                                    }), (0, n.BX)(rv, {
                                        formSubtitle: e.formSubtitle,
                                        resendButton: e.resendButton,
                                        onResendCodeClicked: e.onResendCodeClicked,
                                        children: [" ", (0, n.tZ)(e5, {
                                            identifier: e.safeIdentifier,
                                            avatarUrl: e.profileImageUrl,
                                            onClick: () => t("../")
                                        })]
                                    })]
                                }), (0, n.tZ)(et.Alert, {
                                    children: r.error
                                }), (0, n.tZ)(et.Action, {
                                    elementId: "alternativeMethods",
                                    children: e.onShowAlternativeMethodsClicked && (0, n.tZ)(et.ActionLink, {
                                        localizationKey: (0, a.localizationKeys)("footerActionLink__useAnotherMethod"),
                                        onClick: e.onShowAlternativeMethodsClicked
                                    })
                                })]
                            }), (0, n.tZ)(et.Footer, {})]
                        })
                    })
                },
                rv = e => {
                    let t = (0, i.v)();
                    return (0, n.BX)(a.Col, {
                        elementDescriptor: a.descriptors.form,
                        gap: 1,
                        children: [(0, n.BX)(a.Col, {
                            elementDescriptor: a.descriptors.formHeader,
                            gap: 1,
                            children: [!!e.formSubtitle && (0, n.tZ)(a.Text, {
                                localizationKey: e.formSubtitle,
                                elementDescriptor: a.descriptors.formHeaderSubtitle,
                                colorScheme: "secondary"
                            }), e.children]
                        }), (0, n.tZ)(en, {
                            localizationKey: e.resendButton,
                            elementDescriptor: a.descriptors.formResendCodeLink,
                            onClick: e.onResendCodeClicked,
                            startDisabled: !0,
                            isDisabled: t.isLoading,
                            throttleTimeInSec: 60,
                            sx: e => ({
                                marginTop: e.space.$4,
                                width: "100%"
                            })
                        })]
                    })
                },
                rb = e => (0, o.forwardRef)((t, r) => {
                    let {
                        parsedLayout: o
                    } = (0, a.useAppearance)();
                    return (0, n.tZ)(e, { ...t,
                        ref: r,
                        sx: [o.shimmer ? {
                            ":hover": {
                                "--cl-shimmer-hover-transform": "skew(-45deg) translateX(600%)",
                                "--cl-shimmer-hover-after-transform": "skewX(45deg) translateX(-150%)"
                            }
                        } : {}, t.sx]
                    })
                })
        },
        39: function(e, t, r) {
            r.d(t, {
                $4: () => C,
                cS: () => n
            });
            let n = e => {
                    let t = {};
                    for (let r in e)
                        for (let n in t[r] = {}, e[r]) t[r]["$" + n] = e[r][n];
                    return Object.freeze(t)
                },
                o = Object.freeze({
                    solid: "solid",
                    dashed: "dashed"
                }),
                a = Object.freeze({
                    normal: "1px",
                    heavy: "2px"
                });
            var i = r(4929);
            let l = Object.freeze({
                    whiteAlpha25: "hsla(0, 0%, 100%, 0.02)",
                    whiteAlpha50: "hsla(0, 0%, 100%, 0.03)",
                    whiteAlpha100: "hsla(0, 0%, 100%, 0.07)",
                    whiteAlpha150: "hsla(0, 0%, 100%, 0.11)",
                    whiteAlpha200: "hsla(0, 0%, 100%, 0.15)",
                    whiteAlpha300: "hsla(0, 0%, 100%, 0.28)",
                    whiteAlpha400: "hsla(0, 0%, 100%, 0.41)",
                    whiteAlpha500: "hsla(0, 0%, 100%, 0.53)",
                    whiteAlpha600: "hsla(0, 0%, 100%, 0.62)",
                    whiteAlpha700: "hsla(0, 0%, 100%, 0.73)",
                    whiteAlpha750: "hsla(0, 0%, 100%, 0.78)",
                    whiteAlpha800: "hsla(0, 0%, 100%, 0.81)",
                    whiteAlpha850: "hsla(0, 0%, 100%, 0.84)",
                    whiteAlpha900: "hsla(0, 0%, 100%, 0.87)",
                    whiteAlpha950: "hsla(0, 0%, 100%, 0.92)"
                }),
                s = Object.freeze({
                    neutralAlpha25: "hsla(0, 0%, 0%, 0.02)",
                    neutralAlpha50: "hsla(0, 0%, 0%, 0.03)",
                    neutralAlpha100: "hsla(0, 0%, 0%, 0.07)",
                    neutralAlpha150: "hsla(0, 0%, 0%, 0.11)",
                    neutralAlpha200: "hsla(0, 0%, 0%, 0.15)",
                    neutralAlpha300: "hsla(0, 0%, 0%, 0.28)",
                    neutralAlpha400: "hsla(0, 0%, 0%, 0.41)",
                    neutralAlpha500: "hsla(0, 0%, 0%, 0.53)",
                    neutralAlpha600: "hsla(0, 0%, 0%, 0.62)",
                    neutralAlpha700: "hsla(0, 0%, 0%, 0.73)",
                    neutralAlpha750: "hsla(0, 0%, 0%, 0.78)",
                    neutralAlpha800: "hsla(0, 0%, 0%, 0.81)",
                    neutralAlpha850: "hsla(0, 0%, 0%, 0.84)",
                    neutralAlpha900: "hsla(0, 0%, 0%, 0.87)",
                    neutralAlpha950: "hsla(0, 0%, 0%, 0.92)"
                }),
                c = Object.freeze({
                    avatarBorder: s.neutralAlpha200,
                    avatarBackground: s.neutralAlpha400,
                    modalBackdrop: s.neutralAlpha700,
                    ...s,
                    ...l,
                    colorBackground: "white",
                    colorInputBackground: "white",
                    colorText: "#212126",
                    colorTextSecondary: "#747686",
                    colorInputText: "#131316",
                    colorTextOnPrimaryBackground: "white",
                    colorShimmer: "rgba(255, 255, 255, 0.36)",
                    transparent: "transparent",
                    white: "white",
                    black: "black",
                    primary50: "#B9BDBC",
                    primary100: "#9EA1A2",
                    primary200: "#828687",
                    primary300: "#66696D",
                    primary400: "#4B4D52",
                    primary500: "#2F3037",
                    primary600: "#2A2930",
                    primary700: "#25232A",
                    primary800: "#201D23",
                    primary900: "#1B171C",
                    primaryHover: "#3B3C45",
                    ...(0, i.I)("#2F3037", "primaryAlpha"),
                    danger50: "#FEF2F2",
                    danger100: "#FEE5E5",
                    danger200: "#FECACA",
                    danger300: "#FCA5A5",
                    danger400: "#F87171",
                    danger500: "#EF4444",
                    danger600: "#DC2626",
                    danger700: "#B91C1C",
                    danger800: "#991B1B",
                    danger900: "#7F1D1D",
                    danger950: "#450A0A",
                    ...(0, i.I)("#EF4444", "dangerAlpha"),
                    warning50: "#FFF6ED",
                    warning100: "#FFEBD5",
                    warning200: "#FED1AA",
                    warning300: "#FDB674",
                    warning400: "#F98C49",
                    warning500: "#F36B16",
                    warning600: "#EA520C",
                    warning700: "#C23A0C",
                    warning800: "#9A2F12",
                    warning900: "#7C2912",
                    warning950: "#431207",
                    ...(0, i.I)("#F36B16", "warningAlpha"),
                    success50: "#F0FDF2",
                    success100: "#DCFCE2",
                    success200: "#BBF7C6",
                    success300: "#86EF9B",
                    success400: "#4ADE68",
                    success500: "#22C543",
                    success600: "#16A332",
                    success700: "#15802A",
                    success800: "#166527",
                    success900: "#145323",
                    success950: "#052E0F",
                    ...(0, i.I)("#22C543", "successAlpha")
                }),
                d = Object.freeze({
                    sm: "24%",
                    disabled: "50%",
                    inactive: "62%"
                }),
                u = Object.freeze({
                    menuShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.08), 0px 15px 35px -5px rgba(25, 28, 33, 0.20)",
                    fabShadow: "0px 12px 24px rgba(0, 0, 0, 0.32)",
                    buttonShadow: "0px 1px 1px 0px rgba(255, 255, 255, 0.07) inset, 0px 2px 3px 0px rgba(34, 42, 53, 0.20), 0px 1px 1px 0px rgba(0, 0, 0, 0.24)",
                    cardBoxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.08), 0px 15px 35px -5px rgba(25, 28, 33, 0.20)",
                    cardContentShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(25, 28, 33, 0.06)",
                    actionCardShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.12), 0px 4px 8px 0px rgba(106, 115, 133, 0.12)",
                    outlineButtonShadow: "0px 2px 3px -1px rgba(0, 0, 0, 0.08), 0px 1px 0px 0px rgba(0, 0, 0, 0.02)",
                    input: "0px 0px 1px 0px {{color}}",
                    focusRing: "0px 0px 0px 4px {{color}}",
                    badge: "0px 2px 0px -1px rgba(0, 0, 0, 0.04)",
                    tableBodyShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.12)"
                });
            var p = r(2635);
            let m = Object.freeze({
                    slowest: "600ms",
                    slower: "280ms",
                    slow: "200ms",
                    fast: "120ms",
                    focusRing: "200ms",
                    controls: "100ms",
                    textField: "450ms"
                }),
                h = Object.freeze({
                    common: "background-color,background,border-color,color,fill,stroke,opacity,box-shadow,transform"
                }),
                g = Object.freeze({
                    common: "ease",
                    easeOut: "ease-out",
                    slowBezier: "cubic-bezier(0.16, 1, 0.3, 1)"
                }),
                f = Object.freeze({
                    normal: 400,
                    medium: 500,
                    semibold: 600,
                    bold: 700
                }),
                v = Object.freeze({
                    normal: "normal",
                    extraSmall: "1.33333",
                    small: "1.38462",
                    medium: "1.41176",
                    large: "1.45455"
                }),
                b = Object.freeze({
                    normal: "normal"
                }),
                y = Object.freeze({
                    xs: "0.6875rem",
                    sm: "0.75rem",
                    md: "0.8125rem",
                    lg: "1.0625rem",
                    xl: "1.5rem"
                }),
                x = Object.freeze({
                    normal: "normal"
                }),
                w = Object.freeze({
                    main: "inherit",
                    buttons: "inherit"
                }),
                S = Object.freeze({
                    card: "10",
                    navbar: "100",
                    fab: "9000",
                    modal: "10000",
                    dropdown: "11000"
                }),
                C = n(Object.freeze({
                    colors: c,
                    fonts: w,
                    fontStyles: x,
                    fontSizes: y,
                    fontWeights: f,
                    letterSpacings: b,
                    lineHeights: v,
                    radii: p.pD,
                    sizes: p.J7,
                    space: p.Dh,
                    shadows: u,
                    transitionProperty: h,
                    transitionTiming: g,
                    transitionDuration: m,
                    opacity: d,
                    borderStyles: o,
                    borderWidths: a,
                    zIndices: S
                }))
        },
        2635: function(e, t, r) {
            r.d(t, {
                Dh: () => a,
                J7: () => i,
                Mx: () => s,
                pD: () => l
            });
            let n = Object.freeze({
                    none: "0",
                    xxs: "0.5px",
                    px: "1px"
                }),
                o = Object.freeze({
                    "0x25": "0.0625rem",
                    "0x5": "0.125rem",
                    1: "0.25rem",
                    "1x5": "0.375rem",
                    2: "0.5rem",
                    "2x5": "0.625rem",
                    3: "0.75rem",
                    "3x25": "0.8125rem",
                    "3x5": "0.875rem",
                    4: "1rem",
                    "4x25": "1.0625rem",
                    5: "1.25rem",
                    "5x5": "1.375rem",
                    6: "1.5rem",
                    7: "1.75rem",
                    "7x5": "1.875rem",
                    8: "2rem",
                    "8x5": "2.125rem",
                    9: "2.25rem",
                    10: "2.5rem",
                    12: "3rem",
                    13: "3.5rem",
                    16: "4rem",
                    17: "4.25rem",
                    20: "5rem",
                    24: "6rem",
                    28: "7rem",
                    32: "8rem",
                    36: "9rem",
                    40: "10rem",
                    44: "11rem",
                    48: "12rem",
                    52: "13rem",
                    56: "14rem",
                    57: "14.25rem",
                    60: "15rem",
                    66: "16.5rem",
                    94: "23.5rem",
                    100: "25rem",
                    108: "27rem",
                    120: "30rem",
                    140: "35rem",
                    160: "40rem",
                    176: "44rem",
                    220: "55rem"
                }),
                a = Object.freeze({ ...n,
                    ...o
                }),
                i = Object.freeze({ ...a
                }),
                l = Object.freeze({
                    none: "0px",
                    circle: "50%",
                    avatar: "0.375rem",
                    sm: "0.25rem",
                    md: "0.375rem",
                    lg: "0.5rem",
                    xl: "0.75rem",
                    halfHeight: "99999px"
                }),
                s = Object.keys(o)
        },
        2762: function(e, t, r) {
            r.d(t, {
                VP: () => s,
                Sv: () => b,
                YD: () => u,
                ib: () => d.ib,
                Fm: () => o,
                Nr: () => S,
                p5: () => h.p,
                E2: () => a.E,
                vO: () => c.v,
                _m: () => m,
                _6: () => C._,
                Tb: () => x,
                eq: () => $,
                zk: () => k,
                FH: () => p,
                dw: () => w
            });
            var n = r(9144);
            let o = (e, t) => {
                n.useEffect(() => {
                    let r = [e].flat().filter(e => !!e);
                    if (r.length) return r.forEach(e => window.addEventListener(e, t)), () => {
                        r.forEach(e => window.removeEventListener(e, t))
                    }
                }, [e, t])
            };
            var a = r(4814),
                i = r(472),
                l = r.n(i);

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    [r, o] = (0, n.useState)(!1),
                    {
                        timeout: a = 1500,
                        ...i
                    } = "number" == typeof t ? {
                        timeout: t
                    } : t,
                    s = (0, n.useCallback)(() => {
                        o(l()(e, i))
                    }, [e, i]);
                return (0, n.useEffect)(() => {
                    let e = null;
                    return r && (e = window.setTimeout(() => {
                        o(!1)
                    }, a)), () => {
                        e && window.clearTimeout(e)
                    }
                }, [a, r]), {
                    value: e,
                    onCopy: s,
                    hasCopied: r
                }
            }
            var c = r(9693),
                d = r(7432);
            let u = e => {
                let [t, r] = (0, n.useState)(!1), o = (0, n.useRef)(null), a = Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0], i = (0, n.useRef)();
                return i.current = e.onChange, {
                    inView: t,
                    ref: (0, n.useCallback)(t => {
                        if (!t) {
                            o.current && o.current.disconnect();
                            return
                        }
                        o.current = new IntersectionObserver(e => {
                            e.forEach(e => {
                                let t = e.isIntersecting && a.some(t => e.intersectionRatio >= t);
                                r(t), i.current && i.current(t, e)
                            })
                        }, {
                            root: e.root,
                            rootMargin: e.rootMargin,
                            threshold: a
                        }), o.current.observe(t)
                    }, [])
                }
            };

            function p(e) {
                let [t, r] = n.useState(e), o = n.useRef(!0);
                return n.useEffect(() => () => {
                    o.current = !1
                }, []), [t, n.useCallback(e => {
                    o.current && r(e)
                }, [])]
            }
            let m = e => {
                let [t, r] = p({
                    status: "idle",
                    metadata: void 0,
                    ...e
                });
                return {
                    status: t.status,
                    setIdle: e => r({
                        status: "idle",
                        metadata: e
                    }),
                    setError: e => r({
                        status: "error",
                        metadata: e
                    }),
                    setLoading: e => r({
                        status: "loading",
                        metadata: e
                    }),
                    loadingMetadata: "loading" === t.status ? t.metadata : void 0,
                    isLoading: "loading" === t.status,
                    isIdle: "idle" === t.status
                }
            };
            var h = r(9067);
            r(3824);
            var g = r(4170),
                f = r(6089),
                v = r(2390);
            let b = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            bubbles: t = !1,
                            shoudFlip: r = !0,
                            outsidePress: o,
                            adjustToReferenceWidth: a = !1,
                            referenceElement: i,
                            canCloseModal: l
                        } = e,
                        [s, c] = n.useState(e.defaultOpen || !1),
                        d = (0, g.jV)(),
                        {
                            update: u,
                            refs: p,
                            strategy: m,
                            x: h,
                            y: b,
                            context: y
                        } = (0, g.YF)({
                            open: s,
                            onOpenChange: c,
                            elements: {
                                reference: null == i ? void 0 : i.current
                            },
                            nodeId: d,
                            whileElementsMounted: !1 === e.autoUpdate ? void 0 : f.Me,
                            placement: e.placement || "bottom-start",
                            middleware: [(0, v.cv)(e.offset || 6), r && (0, v.RR)(), (0, v.uY)(), (0, v.dp)({
                                apply(e) {
                                    let {
                                        elements: t
                                    } = e;
                                    if (a) {
                                        let e = t.reference;
                                        t.floating.style.width = e ? "".concat(null == e ? void 0 : e.offsetWidth, "px") : ""
                                    }
                                }
                            })]
                        }),
                        {
                            setReference: x,
                            setFloating: w
                        } = p;
                    (0, g.bQ)(y, {
                        enabled: !1 !== l,
                        bubbles: t,
                        outsidePress: o
                    }), (0, n.useEffect)(() => {
                        e.defaultOpen && u()
                    }, []);
                    let S = n.useCallback(() => c(e => !e), [c]);
                    return {
                        reference: x,
                        floating: w,
                        toggle: S,
                        open: n.useCallback(() => c(!0), [c]),
                        nodeId: d,
                        close: n.useCallback(() => c(!1), [c]),
                        isOpen: s,
                        styles: {
                            position: m,
                            top: null != b ? b : 0,
                            left: null != h ? h : 0
                        },
                        context: y
                    }
                },
                y = "(prefers-reduced-motion: no-preference)";

            function x() {
                let [e, t] = (0, n.useState)(!0);
                return (0, n.useEffect)(() => {
                    var e;
                    let r = window.matchMedia(y);
                    t(!window.matchMedia(y).matches);
                    let n = e => {
                            t(!e.matches)
                        },
                        o = (e, t) => "addEventListener" in r ? r.removeEventListener(e, t) : r.removeListener(t);
                    return e = "change", "addEventListener" in r ? r.addEventListener(e, n) : r.addListener(n), () => o("change", n)
                }, []), e
            }
            let w = e => {
                let {
                    items: t,
                    comparator: r,
                    searchTermForItem: o
                } = e, [a, i] = n.useState(""), l = n.useMemo(() => t.reduce((e, t) => (e.set(t, null == o ? void 0 : o(t)), e), new Map), [t]), s = n.useMemo(() => a ? t.filter(e => r(a, e, l.get(e))) : t, [t, a]);
                return {
                    searchInputProps: {
                        onChange: e => i(e.target.value || ""),
                        value: a
                    },
                    filteredItems: s
                }
            };

            function S(e, t) {
                let [r, o] = (0, n.useState)(e), [a, i] = (0, n.useState)(void 0);
                return (0, n.useEffect)(() => (a && (clearTimeout(a), i(void 0)), i(setTimeout(() => {
                    o(e), i(void 0)
                }, t || 500)), () => {
                    a && (clearTimeout(a), i(void 0))
                }), [JSON.stringify(e), t]), r
            }
            var C = r(1139),
                _ = r(4676);
            let k = () => {
                let e = (0, _.useRouter)();
                return {
                    navigateToFlowStart: async () => {
                        var t, r;
                        let n = e.indexPath;
                        return n !== e.currentPath ? e.navigate(n) : (null === (t = e.urlStateParam) || void 0 === t ? void 0 : t.path) ? e.navigate("/" + e.basePath + (null === (r = e.urlStateParam) || void 0 === r ? void 0 : r.startPath)) : void 0
                    }
                }
            };

            function $(e) {
                let {
                    startEnterpriseSSOLinkFlow: t,
                    cancelEnterpriseSSOLinkFlow: r
                } = n.useMemo(() => e.createEnterpriseSSOLinkFlow(), [e]);
                return n.useEffect(() => r, []), {
                    startEnterpriseSSOLinkFlow: t,
                    cancelEnterpriseSSOLinkFlow: r
                }
            }
        },
        1752: function(e, t, r) {
            r.d(t, {
                l: () => l
            });
            var n = r(2208),
                o = r(5518),
                a = r(2539),
                i = r(9693);

            function l(e) {
                let {
                    filterOutFactor: t,
                    supportedFirstFactors: r
                } = e, {
                    strategies: l
                } = (0, i.v)(), s = r || [], c = s.filter(e => e.strategy !== (null == t ? void 0 : t.strategy) && !(0, o.Vh)(e.strategy)).length + l.length > 0, d = s.filter(e => !e.strategy.startsWith("oauth_") && e.strategy !== (null == t ? void 0 : t.strategy)).filter(e => (0, o.xT)(e)).filter(e => "passkey" !== e.strategy || (0, n.iW)()).sort(a.U6);
                return {
                    hasAnyStrategy: c,
                    hasFirstParty: !!d,
                    firstPartyFactors: d
                }
            }
        },
        143: function(e, t, r) {
            r.d(t, {
                n: () => i
            });
            var n = r(9144),
                o = r(7571),
                a = r(3064);

            function i() {
                let {
                    displayConfig: e,
                    isDevelopmentOrStaging: t
                } = (0, o.useEnvironment)(), r = t(), {
                    unsafe_disableDevelopmentModeWarnings: i = !1
                } = (0, a.useAppearance)().parsedLayout, l = r && i;
                return {
                    showDevModeNotice: (0, n.useMemo)(() => !l && e.showDevModeWarning, [l, e])
                }
            }
        },
        4814: function(e, t, r) {
            r.d(t, {
                E: () => o
            });
            var n = r(9144);

            function o(e) {
                let {
                    startEmailLinkFlow: t,
                    cancelEmailLinkFlow: r
                } = n.useMemo(() => e.createEmailLinkFlow(), [e]);
                return n.useEffect(() => r, []), {
                    startEmailLinkFlow: t,
                    cancelEmailLinkFlow: r
                }
            }
        },
        9693: function(e, t, r) {
            r.d(t, {
                v: () => p
            });
            var n = r(6096);
            r(4310);
            var o = [{
                    provider: "google",
                    strategy: "oauth_google",
                    name: "Google",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/google"
                }, {
                    provider: "discord",
                    strategy: "oauth_discord",
                    name: "Discord",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/discord"
                }, {
                    provider: "facebook",
                    strategy: "oauth_facebook",
                    name: "Facebook",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/facebook"
                }, {
                    provider: "twitch",
                    strategy: "oauth_twitch",
                    name: "Twitch",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/twitch"
                }, {
                    provider: "twitter",
                    strategy: "oauth_twitter",
                    name: "Twitter",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/twitter"
                }, {
                    provider: "microsoft",
                    strategy: "oauth_microsoft",
                    name: "Microsoft",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/microsoft"
                }, {
                    provider: "tiktok",
                    strategy: "oauth_tiktok",
                    name: "TikTok",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/tiktok"
                }, {
                    provider: "linkedin",
                    strategy: "oauth_linkedin",
                    name: "LinkedIn",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/linkedin"
                }, {
                    provider: "linkedin_oidc",
                    strategy: "oauth_linkedin_oidc",
                    name: "LinkedIn",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/linkedin-oidc"
                }, {
                    provider: "github",
                    strategy: "oauth_github",
                    name: "GitHub",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/github"
                }, {
                    provider: "gitlab",
                    strategy: "oauth_gitlab",
                    name: "GitLab",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/gitlab"
                }, {
                    provider: "dropbox",
                    strategy: "oauth_dropbox",
                    name: "Dropbox",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/dropbox"
                }, {
                    provider: "atlassian",
                    strategy: "oauth_atlassian",
                    name: "Atlassian",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/atlassian"
                }, {
                    provider: "bitbucket",
                    strategy: "oauth_bitbucket",
                    name: "Bitbucket",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/bitbucket"
                }, {
                    provider: "hubspot",
                    strategy: "oauth_hubspot",
                    name: "HubSpot",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/hubspot"
                }, {
                    provider: "notion",
                    strategy: "oauth_notion",
                    name: "Notion",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/notion"
                }, {
                    provider: "apple",
                    strategy: "oauth_apple",
                    name: "Apple",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/apple"
                }, {
                    provider: "line",
                    strategy: "oauth_line",
                    name: "LINE",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/line"
                }, {
                    provider: "instagram",
                    strategy: "oauth_instagram",
                    name: "Instagram",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/instagram"
                }, {
                    provider: "coinbase",
                    strategy: "oauth_coinbase",
                    name: "Coinbase",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/coinbase"
                }, {
                    provider: "spotify",
                    strategy: "oauth_spotify",
                    name: "Spotify",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/spotify"
                }, {
                    provider: "xero",
                    strategy: "oauth_xero",
                    name: "Xero",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/xero"
                }, {
                    provider: "box",
                    strategy: "oauth_box",
                    name: "Box",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/box"
                }, {
                    provider: "slack",
                    strategy: "oauth_slack",
                    name: "Slack",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/slack"
                }, {
                    provider: "linear",
                    strategy: "oauth_linear",
                    name: "Linear",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/linear"
                }, {
                    provider: "x",
                    strategy: "oauth_x",
                    name: "X / Twitter",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/x-twitter-v2"
                }, {
                    provider: "enstall",
                    strategy: "oauth_enstall",
                    name: "Enstall",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/enstall"
                }, {
                    provider: "huggingface",
                    strategy: "oauth_huggingface",
                    name: "Hugging Face",
                    docsUrl: "https://clerk.com/docs/authentication/social-connections/huggingface"
                }],
                a = [{
                    provider: "metamask",
                    strategy: "web3_metamask_signature",
                    name: "MetaMask"
                }, {
                    provider: "coinbase_wallet",
                    strategy: "web3_coinbase_wallet_signature",
                    name: "Coinbase Wallet"
                }, {
                    provider: "okx_wallet",
                    strategy: "web3_okx_wallet_signature",
                    name: "OKX Wallet"
                }],
                i = r(5747),
                l = r(2539);
            let s = o.map(e => e.strategy),
                c = a.map(e => e.strategy),
                d = (0, l.sq)([...o, ...a].map(e => [e.provider, {
                    strategy: e.strategy,
                    name: e.name,
                    iconUrl: (0, n.WY)(e.provider)
                }])),
                u = (0, l.sq)([...o, ...a].map(e => [e.strategy, {
                    id: e.provider,
                    name: e.name,
                    iconUrl: (0, n.WY)(e.provider)
                }])),
                p = () => {
                    let {
                        socialProviderStrategies: e,
                        web3FirstFactors: t,
                        authenticatableSocialStrategies: r,
                        social: n
                    } = (0, i.O)().userSettings, o = e.filter(e => s.includes(e)), a = e.filter(e => !s.includes(e) && e.startsWith("oauth_custom_")), l = r.filter(e => s.includes(e)), p = r.filter(e => !s.includes(e) && e.startsWith("oauth_custom_")), m = Object.keys(n).filter(e => e.startsWith("oauth_custom_")), h = e.filter(e => !s.includes(e) || e.startsWith("oauth_custom_"));
                    m.forEach(e => {
                        d[e.replace("oauth_", "")] = {
                            strategy: e,
                            name: n[e].name,
                            iconUrl: n[e].logo_url || ""
                        }
                    }), h.forEach(e => {
                        let t = e.replace("oauth_", "");
                        u[e] = {
                            id: t,
                            iconUrl: n[e].logo_url || "",
                            name: n[e].name
                        }
                    });
                    let g = [...l, ...p];
                    g.sort((e, t) => {
                        let r = e.replace(/^oauth_custom_|^oauth_/, ""),
                            n = t.replace(/^oauth_custom_|^oauth_/, "");
                        return r.localeCompare(n)
                    });
                    let f = t.filter(e => c.includes(e));
                    return {
                        strategies: [...o, ...f, ...a],
                        web3Strategies: f,
                        authenticatableOauthStrategies: g,
                        strategyToDisplayData: u,
                        providerToDisplayData: d
                    }
                }
        },
        7432: function(e, t, r) {
            r.d(t, {
                ib: () => s
            });
            var n = r(9144);
            let o = new Map,
                a = new Set,
                i = e => "string" == typeof e ? e : JSON.stringify(e),
                l = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                        r = t(e),
                        l = (0, n.useCallback)(() => o.get(r), [r]),
                        s = (0, n.useCallback)(e => {
                            o.set(r, e), a.forEach(e => e())
                        }, [r]),
                        c = (0, n.useCallback)(() => {
                            s({
                                isLoading: !1,
                                isValidating: !1,
                                data: null,
                                error: null,
                                cachedAt: void 0
                            })
                        }, [s]);
                    return {
                        getCache: l,
                        setCache: s,
                        subscribeCache: (0, n.useCallback)(e => (a.add(e), () => a.delete(e)), []),
                        clearCache: c
                    }
                },
                s = (e, t, r) => {
                    var o;
                    let {
                        subscribeCache: a,
                        getCache: s,
                        setCache: c,
                        clearCache: d
                    } = l(t), u = null !== (o = null == r ? void 0 : r.staleTime) && void 0 !== o ? o : 12e4, p = (null == r ? void 0 : r.throttleTime) || 0, m = (0, n.useRef)(e);
                    if (p < 0) throw Error("ClerkJS: A negative value for `throttleTime` is not allowed ");
                    let h = (0, n.useSyncExternalStore)(a, s);
                    return (0, n.useEffect)(() => {
                        var e, n, o, a, i, l, d;
                        let h = !m.current,
                            g = void 0 === (null === (e = s()) || void 0 === e ? void 0 : e.cachedAt) || Date.now() - ((null === (n = s()) || void 0 === n ? void 0 : n.cachedAt) || 0) >= u,
                            f = null !== (l = null === (o = s()) || void 0 === o ? void 0 : o.isValidating) && void 0 !== l && l;
                        if (h || !g || f) return;
                        let v = performance.now();
                        c({
                            data: null !== (d = null === (a = s()) || void 0 === a ? void 0 : a.data) && void 0 !== d ? d : null,
                            isLoading: !(null === (i = s()) || void 0 === i ? void 0 : i.data),
                            isValidating: !0,
                            error: null
                        }), m.current(t).then(e => {
                            if (void 0 !== e) {
                                let t = Array.isArray(e) ? e : "object" == typeof e ? { ...e
                                } : e;
                                setTimeout(() => {
                                    var e;
                                    c({
                                        data: t,
                                        isLoading: !1,
                                        isValidating: !1,
                                        error: null,
                                        cachedAt: Date.now()
                                    }), null == r || null === (e = r.onSuccess) || void 0 === e || e.call(r, t)
                                }, p - (performance.now() - v))
                            }
                        }).catch(() => {
                            var e, t;
                            c({
                                data: null !== (t = null === (e = s()) || void 0 === e ? void 0 : e.data) && void 0 !== t ? t : null,
                                isLoading: !1,
                                isValidating: !1,
                                error: !0,
                                cachedAt: Date.now()
                            })
                        })
                    }, [i(t), c, s]), { ...h,
                        setCache: c,
                        invalidate: d
                    }
                }
        },
        5872: function(e, t, r) {
            r.d(t, {
                e: () => s,
                q: () => c
            });
            var n = r(4914),
                o = r(1085),
                a = r(2539),
                i = r(7432);
            let l = {
                    pageSize: 20
                },
                s = function() {
                    var e;
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        {
                            organization: r
                        } = (0, n.o8)(),
                        {
                            data: o,
                            isLoading: a
                        } = (0, i.ib)(t && (null == r ? void 0 : r.id) ? e => {
                            let {
                                pageSize: t,
                                initialPage: n
                            } = e;
                            return r.getRoles({
                                pageSize: t,
                                initialPage: n
                            })
                        } : void 0, { ...l,
                            orgId: null == r ? void 0 : r.id
                        });
                    return {
                        isLoading: a,
                        options: null == o ? void 0 : null === (e = o.data) || void 0 === e ? void 0 : e.map(e => ({
                            value: e.key,
                            label: e.name
                        }))
                    }
                },
                c = () => {
                    let {
                        t: e
                    } = (0, o.zJ)();
                    return {
                        localizeCustomRole: t => e((0, a.Oi)(t)) || e((0, a.JD)(t))
                    }
                }
        },
        4264: function(e, t, r) {
            r.d(t, {
                j: () => o
            });
            var n = r(4914);
            let o = e => {
                let t = (0, n.cL)().client.signedInSessions;
                return {
                    signedInSessions: t,
                    otherSessions: t.filter(t => {
                        var r, n;
                        return (null === (r = t.user) || void 0 === r ? void 0 : r.id) !== (null === (n = e.user) || void 0 === n ? void 0 : n.id)
                    })
                }
            }
        },
        9067: function(e, t, r) {
            r.d(t, {
                i: () => s,
                p: () => c
            });
            var n = r(1826),
                o = r(9144),
                a = r(33),
                i = r(1085),
                l = r(3824);
            let s = (e, t) => {
                    let {
                        t: r,
                        locale: s
                    } = (0, i.zJ)(), {
                        onValidationError: c = n.ZT,
                        onValidationSuccess: d = n.ZT,
                        onValidationWarning: u = n.ZT,
                        onValidationInfo: p = n.ZT,
                        onValidationComplexity: m
                    } = t || {}, h = (0, o.useCallback)(t => {
                        var n, o, a;
                        if (Object.values((null == t ? void 0 : t.complexity) || {}).length > 0) {
                            let n = (0, l.e)({
                                config: e,
                                t: r,
                                failedValidations: t.complexity,
                                locale: s
                            });
                            return (null === (a = t.complexity) || void 0 === a ? void 0 : a.min_length) ? p(n) : c(n)
                        }
                        return (null == t ? void 0 : null === (n = t.strength) || void 0 === n ? void 0 : n.state) === "fail" ? c(t.strength.keys.map(e => r((0, i.u1)(e))).join(" ")) : (null == t ? void 0 : null === (o = t.strength) || void 0 === o ? void 0 : o.state) === "pass" ? u(t.strength.keys.map(e => r((0, i.u1)(e))).join(" ")) : d()
                    }, [t, r, s]);
                    return {
                        validatePassword: (0, o.useMemo)(() => (0, a.z)(e, {
                            onValidation: h,
                            onValidationComplexity: m
                        }), [h])
                    }
                },
                c = e => {
                    let {
                        passwordField: t,
                        confirmPasswordField: r
                    } = e, {
                        t: n
                    } = (0, i.zJ)(), a = (0, o.useCallback)(e => t.value === e, [t.value]), l = (0, o.useMemo)(() => a(r.value), [a, r.value]);
                    return {
                        setConfirmPasswordFeedback: (0, o.useCallback)(e => {
                            a(e) ? r.setSuccess(n((0, i.u1)("formFieldError__matchingPasswords"))) : r.setError(n((0, i.u1)("formFieldError__notMatchingPasswords")))
                        }, [r.setError, r.setSuccess, n, a]),
                        isPasswordMatch: l
                    }
                }
        },
        3824: function(e, t, r) {
            r.d(t, {
                e: () => i
            }), r(9144);
            var n = r(1085),
                o = r(2539);
            let a = {
                    max_length: ["unstable__errors.passwordComplexity.maximumLength", "length"],
                    min_length: ["unstable__errors.passwordComplexity.minimumLength", "length"],
                    require_numbers: "unstable__errors.passwordComplexity.requireNumbers",
                    require_lowercase: "unstable__errors.passwordComplexity.requireLowercase",
                    require_uppercase: "unstable__errors.passwordComplexity.requireUppercase",
                    require_special_char: "unstable__errors.passwordComplexity.requireSpecialCharacter"
                },
                i = e => {
                    let {
                        config: t,
                        failedValidations: r,
                        locale: i,
                        t: l
                    } = e;
                    if (!r || 0 === Object.keys(r).length) return "";
                    let s = (null == r ? void 0 : r.min_length) || !1,
                        c = Object.entries(r).filter(e => !s || "min_length" === e[0]).filter(e => {
                            let [, t] = e;
                            return !!t
                        }).map(e => {
                            let [r] = e, o = a[r];
                            if (Array.isArray(o)) {
                                let [e, a] = o;
                                return l((0, n.u1)(e, {
                                    [a]: t[r]
                                }))
                            }
                            return l((0, n.u1)(o))
                        }),
                        d = (0, o.z$)(c, i);
                    return (0, o.$M)("".concat(l((0, n.u1)("unstable__errors.passwordComplexity.sentencePrefix")), " ").concat(d))
                }
        },
        4875: function(e, t, r) {
            r.d(t, {
                E: () => l
            });
            var n = r(4914),
                o = r(9144),
                a = r(7571),
                i = r(4676);
            let l = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3,
                    {
                        queryString: t
                    } = (0, i.useRouter)(),
                    {
                        setActive: r
                    } = (0, n.cL)(),
                    {
                        afterSignInUrl: l
                    } = (0, a.useSignInContext)();
                (0, o.useEffect)(() => {
                    let n;
                    let o = new URLSearchParams(t).get("createdSessionId");
                    return o && (n = setTimeout(() => {
                        r({
                            session: o,
                            redirectUrl: l
                        })
                    }, e)), () => {
                        n && clearTimeout(n)
                    }
                }, [r, l, t])
            }
        },
        3234: function(e, t, r) {
            r.d(t, {
                H: () => l
            });
            var n = r(4914),
                o = r(9144),
                a = r(1235),
                i = r(7571);

            function l() {
                let e = (0, n.cL)(),
                    {
                        supportEmail: t
                    } = (0, i.useOptions)(),
                    {
                        displayConfig: r
                    } = (0, i.useEnvironment)(),
                    {
                        supportEmail: l
                    } = r;
                return o.useMemo(() => t || l || (0, a.aR)({
                    localPart: "support",
                    frontendApi: e.frontendApi
                }), [e.frontendApi, t, l])
            }
        },
        8655: function(e, t, r) {
            r.d(t, {
                v3: () => tu,
                I$: () => e6,
                mm: () => eS,
                iU: () => eT,
                bA: () => e5,
                IG: () => tX,
                nR: () => ty,
                oX: () => tv,
                x8: () => eF,
                lv: () => tg,
                xP: () => e7,
                ET: () => tc,
                Jr: () => tA,
                Yt: () => tn,
                bR: () => eG,
                gO: () => tY,
                p8: () => ek,
                n5: () => tI,
                Q: () => tN,
                _M: () => eL,
                cp: () => tV,
                v2: () => ta,
                OG: () => tT,
                Qi: () => eX,
                N6: () => e1,
                TZ: () => tU,
                ij: () => tl,
                Kh: () => tD,
                UW: () => tL,
                eu: () => eV,
                SV: () => eQ,
                z6: () => tG,
                g4: () => tw,
                LZ: () => e_,
                W: () => tF,
                qy: () => tC,
                tc: () => eU,
                GT: () => eY,
                TU: () => eD,
                ds: () => tm,
                Nj: () => eA,
                fU: () => eR,
                kh: () => e9,
                cN: () => tt,
                CK: () => tR,
                Fh: () => eN,
                gq: () => tk,
                hc: () => eI
            });
            var n, o, a, i, l, s, c, d, u, p, m, h, g, f, v, b, y, x, w, S, C, _, k, $, I, P, A, B, T, Z, R, z, L, E, D, O, F, M, U, j, V, W, N, H, X, K, Y, q, G, J, Q, ee, et, er, en, eo, ea, ei, el, es, ec, ed, eu, ep, em, eh, eg, ef, ev, eb, ey, ex = r(9144);

            function ew() {
                return (ew = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eS = e => ex.createElement("svg", ew({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 24"
            }, e), n || (n = ex.createElement("circle", {
                cx: 18,
                cy: 12,
                r: 11.5,
                fillOpacity: .1,
                strokeOpacity: .4,
                stroke: "currentColor",
                strokeDasharray: "2 2"
            })), o || (o = ex.createElement("path", {
                d: "M18.75 7.75a.75.75 0 1 0-1.5 0v3.5h-3.5a.75.75 0 1 0 0 1.5h3.5v3.5a.75.75 0 1 0 1.5 0v-3.5h3.5a.75.75 0 1 0 0-1.5h-3.5v-3.5Z"
            })));

            function eC() {
                return (eC = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let e_ = e => ex.createElement("svg", eC({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 20 20"
                }, e), a || (a = ex.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M3.3 10h13.4m-5-5 5 5-5 5"
                }))),
                ek = e => ex.createElement("svg", e, i || (i = ex.createElement("path", {
                    fill: "currentColor",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "m7.25 5-3.5-2.25v4.5L7.25 5Z"
                })));

            function e$() {
                return (e$ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eI = e => ex.createElement("svg", e$({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), l || (l = ex.createElement("path", {
                d: "M7 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            })), s || (s = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4 2c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2h8c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2H4Zm3 9a3.002 3.002 0 0 0 2.906-2.25H12a.75.75 0 0 0 0-1.5H9.906A3.002 3.002 0 0 0 4 8c0 .941.438 1.785 1.117 2.336A2.985 2.985 0 0 0 7 11Z"
            })));

            function eP() {
                return (eP = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eA = e => ex.createElement("svg", eP({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 12"
            }, e), c || (c = ex.createElement("path", {
                fill: "currentColor",
                d: "M2 0a2 2 0 0 0-2 2v1h16V2a2 2 0 0 0-2-2H2Z"
            })), d || (d = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M16 5H0v5c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5ZM2 9c0-.6.4-1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm5-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H7Z",
                clipRule: "evenodd"
            })));

            function eB() {
                return (eB = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eT = e => ex.createElement("svg", eB({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16"
            }, e), u || (u = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M14.4 4v6.4a1.6 1.6 0 0 1-1.6 1.6h-4l-4 3.2V12H3.2a1.6 1.6 0 0 1-1.6-1.6V4a1.6 1.6 0 0 1 1.6-1.6h9.6A1.6 1.6 0 0 1 14.4 4ZM5.6 6.4H4V8h1.6V6.4Zm1.6 0h1.6V8H7.2V6.4Zm4.8 0h-1.6V8H12V6.4Z",
                clipRule: "evenodd"
            })));

            function eZ() {
                return (eZ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eR = e => ex.createElement("svg", eZ({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 20 20"
            }, e), p || (p = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.58l-1.3-1.3a1 1 0 0 0-1.4 1.42l2 2a1 1 0 0 0 1.4 0l4-4Z",
                clipRule: "evenodd"
            })));

            function ez() {
                return (ez = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eL = e => ex.createElement("svg", ez({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), m || (m = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.24 6.2a.75.75 0 0 1 1.06.04l2.698 2.906 2.45-2.655a.744.744 0 0 1 .022-.021l.25-.25a.75.75 0 1 1 1.06 1.06l-.24.24-2.989 3.239a.75.75 0 0 1-1.1.001L4.2 7.26A.75.75 0 0 1 4.24 6.2Z"
            })));

            function eE() {
                return (eE = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eD = e => ex.createElement("svg", eE({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 12 16"
            }, e), h || (h = ex.createElement("path", {
                fill: "currentColor",
                d: "M4 1c0-.6.4-1 1-1h2a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z"
            })), g || (g = ex.createElement("path", {
                fill: "currentColor",
                d: "M2 1a2 2 0 0 0-2 2v11c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z"
            })));

            function eO() {
                return (eO = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eF = e => ex.createElement("svg", eO({
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 10 10"
            }, e), f || (f = ex.createElement("path", {
                d: "M1.791.722a.756.756 0 0 0-1.07 1.07L3.932 5 .72 8.209a.756.756 0 1 0 1.07 1.07L5 6.068l3.209 3.21a.756.756 0 0 0 1.07-1.07L6.068 5l3.21-3.209a.756.756 0 1 0-1.07-1.07L5 3.932 1.791.72Z",
                fill: "currentColor"
            })));

            function eM() {
                return (eM = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eU = e => ex.createElement("svg", eM({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), v || (v = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.559 2.536A.667.667 0 0 1 7.212 2h1.574a.667.667 0 0 1 .653.536l.22 1.101c.466.178.9.429 1.287.744l1.065-.36a.667.667 0 0 1 .79.298l.787 1.362a.666.666 0 0 1-.136.834l-.845.742c.079.492.079.994 0 1.486l.845.742a.666.666 0 0 1 .137.833l-.787 1.363a.667.667 0 0 1-.791.298l-1.065-.36c-.386.315-.82.566-1.286.744l-.22 1.101a.666.666 0 0 1-.654.536H7.212a.666.666 0 0 1-.653-.536l-.22-1.101a4.664 4.664 0 0 1-1.287-.744l-1.065.36a.666.666 0 0 1-.79-.298L2.41 10.32a.667.667 0 0 1 .136-.834l.845-.743a4.7 4.7 0 0 1 0-1.485l-.845-.742a.667.667 0 0 1-.137-.833l.787-1.363a.667.667 0 0 1 .791-.298l1.065.36c.387-.315.821-.566 1.287-.744l.22-1.101ZM7.999 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            })));

            function ej() {
                return (ej = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eV = e => ex.createElement("svg", ej({
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 32 32"
            }, e), b || (b = ex.createElement("path", {
                d: "M2.91 1.452c0-.58.077-.83.23-1.079C3.33.166 3.6 0 4.212 0h23.617c.536 0 .765.124.957.332.191.207.268.498.268 1.12v17.013c0 .58-.077.83-.192.996a1.06 1.06 0 0 1-.37.338.968.968 0 0 1-.472.118H3.905c-.306 0-.612-.125-.765-.415-.153-.166-.23-.415-.23-1.037V1.452Z",
                fill: "#000"
            })), y || (y = ex.createElement("path", {
                d: "M3.445 19.334h25.072c.115 0 .23-.083.306-.166.077-.083.077-.207.077-.58V1.45c0-.498-.038-.83-.23-.995-.191-.208-.383-.29-.842-.29H4.211c-.498 0-.766.124-.957.331-.153.166-.192.415-.192.954v17.137c0 .374 0 .498.077.581.077.083.191.166.306.166Z",
                fill: "#575757"
            })), x || (x = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.999.912a.109.109 0 0 0 .117.006.119.119 0 0 0 .045-.046.132.132 0 0 0 0-.128.119.119 0 0 0-.045-.046.108.108 0 0 0-.117.006.109.109 0 0 0-.118-.006.12.12 0 0 0-.044.046.132.132 0 0 0 0 .128.12.12 0 0 0 .044.046.108.108 0 0 0 .118-.006Z",
                fill: "#000",
                stroke: "#000",
                strokeWidth: .3
            })), w || (w = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 19.5v-.207h32v.207s-.727.25-1.531.332c-.536.042-1.416.166-3.407.166H5.091c-1.723 0-3.177-.124-3.828-.207C.613 19.708 0 19.5 0 19.5Z",
                fill: "#444"
            })), S || (S = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.941 1.328h24.115v16.349H3.941V1.328Z",
                fill: "#000"
            })));

            function eW() {
                return (eW = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eN = e => ex.createElement("svg", eW({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "670.6 72.3 84 76"
            }, e), C || (C = ex.createElement("path", {
                fill: "var(--cl-chassis-screen, #6D6D6D)",
                fillRule: "evenodd",
                d: "M712.5 107.2v-.6h.1l.2.1v7.2a.1.1 0 0 1-.2.2l-.1-.3v-6.6Z",
                clipRule: "evenodd"
            })), _ || (_ = ex.createElement("path", {
                fill: "var(--cl-chassis-back, #6D6D6D)",
                fillRule: "evenodd",
                d: "M697.4 100v-.7h-.2a.1.1 0 0 0-.1.2v4.4s0 .2.2.2V100Z",
                clipRule: "evenodd"
            })), k || (k = ex.createElement("path", {
                fill: "var(--cl-chassis-screen, #6D6D6D)",
                fillRule: "evenodd",
                d: "M697.4 94v-.7h-.2a.1.1 0 0 0-.1.2v4.4s0 .2.2.2V94Z",
                clipRule: "evenodd"
            })), $ || ($ = ex.createElement("path", {
                fill: "var(--cl-chassis-back, #363636)",
                d: "M722.7 78.6c3.6 0 5.5 2.1 5.5 5.7v52.4c0 3.4-2.3 5.3-5.8 5.3H703c-3.8 0-5.8-2.4-5.7-5.4V84.3c0-3.6 2-5.7 5.6-5.7h19.8Z"
            })), I || (I = ex.createElement("path", {
                fill: "var(--cl-chassis-screen, #363636)",
                stroke: "var(--cl-chassis-bottom, black)",
                strokeWidth: .5,
                d: "M722.3 79.2c3.7 0 5.4 1.8 5.4 5.4v52c0 3.2-2.2 5-5.5 5h-19c-3.2 0-5.4-2-5.4-5v-52c0-3.6 1.8-5.4 5.5-5.4h19Z"
            })), P || (P = ex.createElement("path", {
                fill: "var(--cl-screen, black)",
                fillRule: "evenodd",
                d: "M704.9 80.3c.2 0 .3.1.3.4v.2c0 .9.8 1.7 1.6 1.7h11.8c1 0 1.7-.8 1.7-1.7v-.2c0-.3.1-.4.3-.4h3c1.6 0 3 1.7 3 3.3V137c0 1.7-1.5 3.3-3.4 3.3h-21c-2.1 0-3.3-1.3-3.3-3.2V83.6c0-1.6 1.3-3.3 2.9-3.3h3Z",
                clipRule: "evenodd"
            })), A || (A = ex.createElement("path", {
                fillRule: "evenodd",
                d: "M715.3 81.2a.3.3 0 0 0-.2-.4.3.3 0 1 0-.2.6.3.3 0 0 0 .4-.2Zm-5.1-.2c0 .2 0 .3.2.3h2.9a.3.3 0 0 0 .2-.3.3.3 0 0 0-.2-.2h-2.9a.3.3 0 0 0-.2.2Z",
                clipRule: "evenodd"
            })));

            function eH() {
                return (eH = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eX = e => ex.createElement("svg", eH({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16"
            }, e), B || (B = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM5 7H3v2h2V7Zm8 0h-2v2h2V7ZM7 7h2v2H7V7Z",
                clipRule: "evenodd"
            })));

            function eK() {
                return (eK = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eY = e => ex.createElement("svg", eK({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), T || (T = ex.createElement("path", {
                d: "M2.75 2.75A1.75 1.75 0 0 0 1 4.5v1.016l6.51 3.693a1.094 1.094 0 0 0 .98 0L15 5.517V4.5a1.75 1.75 0 0 0-1.75-1.75H2.75Z",
                fill: "#42434D"
            })), Z || (Z = ex.createElement("path", {
                d: "m15 6.984-5.924 3.4a2.406 2.406 0 0 1-2.152 0L1 6.983V11.5a1.75 1.75 0 0 0 1.75 1.75h10.5A1.75 1.75 0 0 0 15 11.5V6.984Z",
                fill: "#42434D"
            })));

            function eq() {
                return (eq = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eG = e => ex.createElement("svg", eq({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 14 14"
            }, e), R || (R = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M13.4 7A6.4 6.4 0 1 1 .6 7a6.4 6.4 0 0 1 12.8 0Zm-5.6 3.2a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0ZM7 3a.8.8 0 0 0-.8.8V7a.8.8 0 0 0 1.6 0V3.8A.8.8 0 0 0 7 3Z",
                clipRule: "evenodd"
            })));

            function eJ() {
                return (eJ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let eQ = e => ex.createElement("svg", eJ({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), z || (z = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.866 3.012a.988.988 0 0 0-1.732 0L2.13 12.004c-.372.67.106 1.496.866 1.496h10.01c.76 0 1.238-.827.866-1.496L8.866 3.012Zm-1.66 5.74a.798.798 0 0 0 1.593 0l.14-2.254a.94.94 0 1 0-1.875 0l.141 2.253Zm.046 2.498a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
            })));

            function e0() {
                return (e0 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let e1 = e => ex.createElement("svg", e0({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), L || (L = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.732 3.126a.48.48 0 0 0-.662.011.465.465 0 0 0-.012.651l9.211 9.063a.477.477 0 0 0 .527.115.479.479 0 0 0 .263-.26.46.46 0 0 0-.117-.518l-1.108-1.09A6.278 6.278 0 0 0 13.93 8.36a1.016 1.016 0 0 0 0-.74 6.27 6.27 0 0 0-2.333-2.909A6.428 6.428 0 0 0 8 3.613a6.407 6.407 0 0 0-3.014.747L3.732 3.126Zm2.84 2.794.694.682a1.61 1.61 0 0 1 1.858.28A1.54 1.54 0 0 1 9.41 8.71l.693.683a2.47 2.47 0 0 0-.304-3.174 2.573 2.573 0 0 0-3.226-.3Z"
            })), E || (E = ex.createElement("path", {
                d: "m8.476 10.445 1.602 1.576a6.437 6.437 0 0 1-2.077.342c-2.705 0-5.014-1.662-5.931-4.006a1.016 1.016 0 0 1 0-.741c.31-.79.78-1.51 1.382-2.115l2.052 2.02c-.078.4-.054.813.067 1.203.122.39.34.744.632 1.033a2.58 2.58 0 0 0 2.272.688Z"
            })));

            function e2() {
                return (e2 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let e5 = e => ex.createElement("svg", e2({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), D || (D = ex.createElement("path", {
                d: "M8 9.607c.421 0 .825-.17 1.123-.47a1.617 1.617 0 0 0 0-2.273 1.578 1.578 0 0 0-2.246 0 1.617 1.617 0 0 0 0 2.272c.298.302.702.471 1.123.471Z"
            })), O || (O = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.07 8.38a1.073 1.073 0 0 1 0-.763 6.42 6.42 0 0 1 2.334-2.99A6.302 6.302 0 0 1 8 3.5c2.704 0 5.014 1.71 5.93 4.12.094.246.093.518 0 .763a6.418 6.418 0 0 1-2.334 2.99A6.301 6.301 0 0 1 8 12.5c-2.704 0-5.013-1.71-5.93-4.12ZM10.54 8c0 .682-.267 1.336-.743 1.818A2.526 2.526 0 0 1 8 10.571c-.674 0-1.32-.27-1.796-.753A2.587 2.587 0 0 1 5.459 8c0-.682.268-1.336.745-1.818A2.525 2.525 0 0 1 8 5.429c.674 0 1.32.27 1.797.753.476.482.744 1.136.744 1.818Z"
            })));

            function e3() {
                return (e3 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let e6 = e => ex.createElement("svg", e3({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16"
            }, e), F || (F = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M14.4 8A6.4 6.4 0 1 1 1.6 8a6.4 6.4 0 0 1 12.8 0ZM8.8 4.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0ZM7.2 7.2a.8.8 0 1 0 0 1.6v2.4a.8.8 0 0 0 .8.8h.8a.8.8 0 0 0 0-1.6V8a.8.8 0 0 0-.8-.8h-.8Z",
                clipRule: "evenodd"
            })));

            function e4() {
                return (e4 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let e7 = e => ex.createElement("svg", e4({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16"
            }, e), M || (M = ex.createElement("path", {
                fill: "currentColor",
                d: "M10.068 3.668a1.6 1.6 0 0 1 2.263 2.263l-2.4 2.4a1.6 1.6 0 0 1-2.263 0 .8.8 0 1 0-1.131 1.131 3.2 3.2 0 0 0 4.525 0l2.4-2.4a3.2 3.2 0 1 0-4.525-4.525l-1.2 1.2a.8.8 0 1 0 1.131 1.131l1.2-1.2Z"
            })), U || (U = ex.createElement("path", {
                fill: "currentColor",
                d: "M6.068 7.668a1.6 1.6 0 0 1 2.263 0 .8.8 0 1 0 1.131-1.131 3.2 3.2 0 0 0-4.525 0l-2.4 2.4a3.2 3.2 0 0 0 4.525 4.525l1.2-1.2a.8.8 0 0 0-1.131-1.131l-1.2 1.2a1.6 1.6 0 0 1-2.263-2.263l2.4-2.4Z"
            })));

            function e8() {
                return (e8 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let e9 = e => ex.createElement("svg", e8({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16"
            }, e), j || (j = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M4 7.2V5.6a4 4 0 1 1 8 0v1.6a1.6 1.6 0 0 1 1.6 1.6v4a1.6 1.6 0 0 1-1.6 1.6H4a1.6 1.6 0 0 1-1.6-1.6v-4A1.6 1.6 0 0 1 4 7.2Zm6.4-1.6v1.6H5.6V5.6a2.4 2.4 0 0 1 4.8 0Z",
                clipRule: "evenodd"
            })));

            function te() {
                return (te = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tt = e => ex.createElement("svg", te({
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 50 14"
            }, e), V || (V = ex.createElement("ellipse", {
                cx: 7.889,
                cy: 7,
                rx: 2.187,
                ry: 2.188,
                fill: "currentColor"
            })), W || (W = ex.createElement("path", {
                d: "M11.83 12.18a.415.415 0 0 1-.05.64A6.967 6.967 0 0 1 7.888 14a6.967 6.967 0 0 1-3.891-1.18.415.415 0 0 1-.051-.64l1.598-1.6a.473.473 0 0 1 .55-.074 3.92 3.92 0 0 0 1.794.431 3.92 3.92 0 0 0 1.792-.43.473.473 0 0 1 .551.074l1.599 1.598Z",
                fill: "currentColor"
            })), N || (N = ex.createElement("path", {
                opacity: .5,
                d: "M11.78 1.18a.415.415 0 0 1 .05.64l-1.598 1.6a.473.473 0 0 1-.55.073 3.937 3.937 0 0 0-5.3 5.3.473.473 0 0 1-.074.55L2.71 10.942a.415.415 0 0 1-.641-.051 7 7 0 0 1 9.71-9.71Z",
                fill: "currentColor"
            })), H || (H = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.748 1.422c0-.06.05-.11.11-.11h1.64c.06 0 .11.05.11.11v11.156a.11.11 0 0 1-.11.11h-1.64a.11.11 0 0 1-.11-.11V1.422Zm-2.315 8.9a.112.112 0 0 0-.15.004 2.88 2.88 0 0 1-.884.569c-.36.148-.747.222-1.137.219-.33.01-.658-.047-.965-.166a2.422 2.422 0 0 1-.817-.527c-.424-.432-.668-1.05-.668-1.785 0-1.473.98-2.48 2.45-2.48.394-.005.785.074 1.144.234.325.144.617.35.86.607.04.044.11.049.155.01l1.108-.959a.107.107 0 0 0 .01-.152c-.832-.93-2.138-1.412-3.379-1.412-2.499 0-4.27 1.686-4.27 4.166 0 1.227.44 2.26 1.182 2.99.743.728 1.801 1.157 3.022 1.157 1.53 0 2.763-.587 3.485-1.34a.107.107 0 0 0-.009-.155l-1.137-.98Zm13.212-1.14a.108.108 0 0 1-.107.096H28.79a.106.106 0 0 0-.104.132c.286 1.06 1.138 1.701 2.302 1.701a2.59 2.59 0 0 0 1.136-.236 2.55 2.55 0 0 0 .862-.645.08.08 0 0 1 .112-.01l1.155 1.006c.044.039.05.105.013.15-.698.823-1.828 1.42-3.38 1.42-2.386 0-4.185-1.651-4.185-4.162 0-1.232.424-2.264 1.13-2.994.373-.375.82-.67 1.314-.87a3.968 3.968 0 0 1 1.557-.285c2.419 0 3.983 1.701 3.983 4.05a6.737 6.737 0 0 1-.04.647Zm-5.924-1.524a.104.104 0 0 0 .103.133h3.821c.07 0 .123-.066.103-.134-.26-.901-.921-1.503-1.947-1.503a2.13 2.13 0 0 0-.88.16 2.1 2.1 0 0 0-.733.507 2.242 2.242 0 0 0-.467.837Zm11.651-3.172c.061-.001.11.048.11.109v1.837a.11.11 0 0 1-.117.109 7.17 7.17 0 0 0-.455-.024c-1.43 0-2.27 1.007-2.27 2.329v3.732a.11.11 0 0 1-.11.11h-1.64a.11.11 0 0 1-.11-.11v-7.87c0-.06.049-.109.11-.109h1.64c.06 0 .11.05.11.11v1.104a.011.011 0 0 0 .02.007c.64-.857 1.587-1.333 2.587-1.333l.125-.001Zm4.444 4.81a.035.035 0 0 1 .056.006l2.075 3.334a.11.11 0 0 0 .093.052h1.865a.11.11 0 0 0 .093-.168L46.152 7.93a.11.11 0 0 1 .012-.131l2.742-3.026a.11.11 0 0 0-.081-.183h-1.946a.11.11 0 0 0-.08.036l-3.173 3.458a.11.11 0 0 1-.19-.074V1.422a.11.11 0 0 0-.11-.11h-1.64a.11.11 0 0 0-.11.11v11.156c0 .06.05.11.11.11h1.64a.11.11 0 0 0 .11-.11v-1.755a.11.11 0 0 1 .03-.075l1.35-1.452Z",
                fill: "currentColor"
            })));

            function tr() {
                return (tr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tn = e => ex.createElement("svg", tr({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 14 14"
            }, e), X || (X = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M5.4 2.2a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4ZM.6 5.4a4.8 4.8 0 1 1 8.7 2.8l3.9 3.8a.8.8 0 0 1-1.2 1.2L8.2 9.3A4.8 4.8 0 0 1 .6 5.4Z",
                clipRule: "evenodd"
            })));

            function to() {
                return (to = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let ta = e => ex.createElement("svg", to({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), K || (K = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 1 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 1 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
            })));

            function ti() {
                return (ti = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tl = e => ex.createElement("svg", ti({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16"
            }, e), Y || (Y = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M5.6 1.6A1.6 1.6 0 0 0 4 3.2v9.6a1.6 1.6 0 0 0 1.6 1.6h4.8a1.6 1.6 0 0 0 1.6-1.6V3.2a1.6 1.6 0 0 0-1.6-1.6H5.6ZM8 12.8a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z",
                clipRule: "evenodd"
            })));

            function ts() {
                return (ts = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tc = e => ex.createElement("svg", ts({
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 17 16"
            }, e), q || (q = ex.createElement("path", {
                d: "M13.598 5.108c-.418.419-.628.628-.847.669-.22.04-.364-.104-.652-.392l-.984-.984c-.288-.288-.432-.432-.392-.652.04-.22.25-.428.669-.847l.226-.227c.419-.418.628-.628.848-.668.22-.04.364.103.652.392l.983.983c.289.288.433.432.392.652-.04.22-.25.429-.668.848l-.227.226ZM4.66 13.688l-1.206.223c-.5.092-.75.138-.876.011-.127-.126-.08-.376.011-.876l.223-1.206c.04-.217.06-.325.118-.43.058-.105.15-.196.33-.377l5.554-5.554c.419-.418.628-.628.848-.668.22-.04.364.103.652.392l.983.983c.289.288.433.432.392.652-.04.22-.25.429-.668.848l-5.554 5.553c-.181.182-.272.273-.377.331-.105.058-.213.078-.43.118ZM9.25 12.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z",
                fill: "currentColor"
            })));

            function td() {
                return (td = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tu = e => ex.createElement("svg", td({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), G || (G = ex.createElement("path", {
                d: "M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 1 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
            })));

            function tp() {
                return (tp = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tm = e => ex.createElement("svg", tp({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16"
            }, e), J || (J = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M6 7.6v-.8a2 2 0 0 1 4 0v.8a.8.8 0 0 1 .8.8v2a.8.8 0 0 1-.8.8H6a.8.8 0 0 1-.8-.8v-2a.8.8 0 0 1 .8-.8Zm3.2-.8v.8H6.8v-.8a1.2 1.2 0 0 1 2.4 0Z",
                clipRule: "evenodd"
            })), Q || (Q = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M13.07 2.9a7.2 7.2 0 1 0 .02 10.19s.42-.47 0-.89-.88 0-.88 0a5.95 5.95 0 1 1-.02-8.42l-1.04 1.04c-.25.24-.16.44.18.44h2.5c.63 0 .63 0 .63-.63v-2.5c0-.34-.2-.43-.44-.18l-.95.94Z",
                clipRule: "evenodd"
            })));

            function th() {
                return (th = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tg = e => ex.createElement("svg", th({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), ee || (ee = ex.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.6 2.604A2.045 2.045 0 0 1 4.052 2h3.417c.544 0 1.066.217 1.45.604.385.387.601.911.601 1.458v.69c0 .413-.334.75-.746.75a.748.748 0 0 1-.745-.75v-.69a.564.564 0 0 0-.56-.562H4.051a.558.558 0 0 0-.56.563v7.875a.564.564 0 0 0 .56.562h3.417a.558.558 0 0 0 .56-.563v-.671c0-.415.333-.75.745-.75s.746.335.746.75v.671c0 .548-.216 1.072-.6 1.459a2.045 2.045 0 0 1-1.45.604H4.05a2.045 2.045 0 0 1-1.45-.604A2.068 2.068 0 0 1 2 11.937V4.064c0-.548.216-1.072.6-1.459Zm8.386 3.116a.743.743 0 0 1 1.055 0l1.74 1.75a.753.753 0 0 1 0 1.06l-1.74 1.75a.743.743 0 0 1-1.055 0 .753.753 0 0 1 0-1.06l.467-.47H5.858A.748.748 0 0 1 5.112 8c0-.414.334-.75.746-.75h5.595l-.467-.47a.753.753 0 0 1 0-1.06Z"
            })));

            function tf() {
                return (tf = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tv = e => ex.createElement("svg", tf({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 18 20"
            }, e), et || (et = ex.createElement("path", {
                d: "M6.6 4a1.2 1.2 0 0 0 0 2.4h6.7l-1.55 1.55a1.2 1.2 0 0 0 1.7 1.7l3.6-3.6a1.2 1.2 0 0 0 0-1.7l-3.6-3.6a1.2 1.2 0 1 0-1.7 1.7L13.3 4H6.6Zm4.8 12a1.2 1.2 0 1 0 0-2.4H4.7l1.55-1.55a1.2 1.2 0 1 0-1.7-1.7l-3.6 3.6a1.2 1.2 0 0 0 0 1.7l3.6 3.6a1.2 1.2 0 1 0 1.7-1.7L4.7 16h6.7Z"
            })));

            function tb() {
                return (tb = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let ty = e => ex.createElement("svg", tb({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), er || (er = ex.createElement("path", {
                d: "M9.53 4.47a.75.75 0 0 0-1.06 1.06l1.72 1.72H4a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3Z"
            })));

            function tx() {
                return (tx = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tw = e => ex.createElement("svg", tx({
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20"
            }, e), en || (en = ex.createElement("g", {
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round"
            }, ex.createElement("path", {
                d: "M10.01 10H10M4.01 10H4M16.01 10H16"
            }))));

            function tS() {
                return (tS = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tC = e => ex.createElement("svg", tS({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), eo || (eo = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.748 2.91a.48.48 0 0 1 .124.083c.088.082.14.193.126.31v4.054a7.58 7.58 0 0 1-1.227 4.147c-.99 1.52-3.778 3.038-4.563 3.445a.45.45 0 0 1-.416 0c-.785-.407-3.576-1.925-4.565-3.445A7.61 7.61 0 0 1 2 7.357V3.303a.43.43 0 0 1 .14-.31.484.484 0 0 1 .334-.13h.027c2.162 0 4.132-.655 5.148-1.714A.485.485 0 0 1 8.004 1c.137 0 .266.054.355.149 1.016 1.056 2.99 1.714 5.148 1.714h.027c.076 0 .149.016.214.046Zm-2.695 3.097a.75.75 0 0 0-1.106-1.014c-.9.983-1.363 1.624-2.013 2.787-.218.39-.442.876-.626 1.305l-1.242-1.43a.75.75 0 0 0-1.132.982l2.042 2.354a.75.75 0 0 0 1.269-.227v-.003l.005-.011.018-.046a22.354 22.354 0 0 1 .305-.762c.199-.474.447-1.03.67-1.43.594-1.062.988-1.608 1.81-2.505Z"
            })));

            function t_() {
                return (t_ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tk = e => ex.createElement("svg", t_({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24"
            }, e), ea || (ea = ex.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-7-5-5m0 0L7 8m5-5v12"
            })));

            function t$() {
                return (t$ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tI = e => ex.createElement("svg", t$({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 16 16"
            }, e), ei || (ei = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-2.585 2.894c.154.25.107.568-.083.792A5.675 5.675 0 0 1 8 13.688a5.675 5.675 0 0 1-4.332-2.002c-.19-.224-.237-.543-.083-.792.087-.14.189-.271.306-.392.46-.469 1.087-.986 1.703-1.102.514-.097.899.056 1.298.214.331.132.673.267 1.108.267.435 0 .777-.135 1.108-.267.4-.158.784-.31 1.298-.214.616.116 1.243.633 1.703 1.102.117.12.22.252.306.392ZM8 8.919c1.329 0 2.406-1.559 2.406-2.888a2.406 2.406 0 1 0-4.812 0C5.594 7.361 6.67 8.92 8 8.92Z"
            })));

            function tP() {
                return (tP = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tA = e => ex.createElement("svg", tP({
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 10 10"
            }, e), el || (el = ex.createElement("path", {
                d: "m1 6 3 3 5-8",
                stroke: "currentColor",
                strokeWidth: 1.25,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })));

            function tB() {
                return (tB = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tT = e => ex.createElement("svg", tB({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), es || (es = ex.createElement("path", {
                d: "M5.53 9.22a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06L8 11.69 5.53 9.22ZM5.53 6.78a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L8 4.31 5.53 6.78Z"
            })));

            function tZ() {
                return (tZ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tR = e => ex.createElement("svg", tZ({
                viewBox: "0 0 12 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ec || (ec = ex.createElement("path", {
                d: "M7.94 10.23v2.078a.687.687 0 0 1-.682.692h-5.91a.676.676 0 0 1-.482-.203.698.698 0 0 1-.2-.49V4.463c0-.383.306-.693.682-.693h1.137c.304 0 .609.026.909.077m4.545 6.385h2.046c.376 0 .682-.31.682-.693v-3c0-2.744-1.966-5.022-4.546-5.462A5.41 5.41 0 0 0 5.212 1H4.076a.687.687 0 0 0-.682.692v2.154m4.545 6.385H4.076a.677.677 0 0 1-.482-.203.698.698 0 0 1-.2-.49V3.846m7.273 4.077V6.77c0-.55-.216-1.079-.6-1.468a2.03 2.03 0 0 0-1.446-.609h-.909a.677.677 0 0 1-.482-.202.698.698 0 0 1-.2-.49v-.923a2.105 2.105 0 0 0-.599-1.469A2.043 2.043 0 0 0 4.985 1h-.682",
                stroke: "currentColor",
                strokeWidth: 1.2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })));

            function tz() {
                return (tz = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tL = e => ex.createElement("svg", tz({
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 14 14"
            }, e), ed || (ed = ex.createElement("path", {
                d: "M1 10v1.5A1.5 1.5 0 0 0 2.5 13h9a1.5 1.5 0 0 0 1.5-1.5V10m-3-3-3 3m0 0L4 7m3 3V1",
                stroke: "currentColor",
                strokeWidth: 1.2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })));

            function tE() {
                return (tE = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tD = e => ex.createElement("svg", tE({
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 13 14"
            }, e), eu || (eu = ex.createElement("path", {
                d: "M3.107 8.126c-.147.018-.294.038-.44.059m.44-.06c2.142-.27 4.31-.27 6.453 0m-6.453 0-.233 2.567M9.56 8.126c.147.018.293.038.44.059m-.44-.06.232 2.567.14 1.553a.697.697 0 0 1-.407.696.684.684 0 0 1-.277.059H3.419a.69.69 0 0 1-.684-.755l.14-1.553m0 0h-.667a1.37 1.37 0 0 1-.972-.405 1.39 1.39 0 0 1-.403-.98V5.435c0-.665.47-1.24 1.123-1.338.389-.059.778-.11 1.169-.152m6.666 6.748h.667a1.367 1.367 0 0 0 .972-.405 1.386 1.386 0 0 0 .403-.98V5.435c0-.665-.469-1.24-1.122-1.338-.389-.059-.779-.11-1.17-.152m0 0a29.456 29.456 0 0 0-6.416 0m6.417 0V1.692A.69.69 0 0 0 8.854 1H3.813a.69.69 0 0 0-.688.692v2.252M10 6.077h.005v.005H10v-.005Zm-1.833 0h.005v.005h-.005v-.005Z",
                stroke: "currentColor",
                strokeWidth: 1.2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })));

            function tO() {
                return (tO = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tF = e => ex.createElement("svg", tO({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), ep || (ep = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.55 4.24a.75.75 0 0 1-.04 1.06L6.604 7.998l2.655 2.45a.744.744 0 0 1 .021.022l.25.25a.75.75 0 1 1-1.06 1.06l-.24-.24-3.239-2.989a.75.75 0 0 1-.001-1.1l3.5-3.25a.75.75 0 0 1 1.06.039Z"
            })));

            function tM() {
                return (tM = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tU = e => ex.createElement("svg", tM({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), em || (em = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.45 11.76a.75.75 0 0 1 .04-1.06l2.906-2.698-2.655-2.45a.756.756 0 0 1-.021-.022l-.25-.25a.75.75 0 0 1 1.06-1.06l.24.24 3.239 2.989a.75.75 0 0 1 .001 1.1l-3.5 3.25a.75.75 0 0 1-1.06-.039Z"
            })));

            function tj() {
                return (tj = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tV = e => ex.createElement("svg", tj({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), eh || (eh = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.875 13.688V2.312h-.219a.656.656 0 1 1 0-1.312h10.688a.656.656 0 0 1 0 1.313h-.219v11.374h.219a.656.656 0 1 1 0 1.313h-2.942a.656.656 0 0 1-.656-.656v-2.188a.656.656 0 0 0-.656-.656H6.902a.656.656 0 0 0-.656.656v2.188A.656.656 0 0 1 5.59 15H2.656a.656.656 0 1 1 0-1.313h.219Zm2.496-9.626a.438.438 0 0 1 .438-.437h.875a.437.437 0 0 1 .437.438v.875a.437.437 0 0 1-.437.437h-.875a.437.437 0 0 1-.438-.438v-.875Zm.438 3.063a.437.437 0 0 0-.438.438v.875a.438.438 0 0 0 .438.437h.875a.437.437 0 0 0 .437-.438v-.874a.437.437 0 0 0-.437-.438h-.875ZM8.87 4.062a.438.438 0 0 1 .438-.437h.875a.438.438 0 0 1 .437.438v.875a.438.438 0 0 1-.437.437h-.875a.437.437 0 0 1-.438-.438v-.875Zm.438 3.063a.437.437 0 0 0-.438.438v.875a.438.438 0 0 0 .438.437h.875a.438.438 0 0 0 .437-.438v-.874a.438.438 0 0 0-.437-.438h-.875Z"
            })));

            function tW() {
                return (tW = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tN = e => ex.createElement("svg", tW({
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), eg || (eg = ex.createElement("path", {
                d: "M9.167 5.035c0 1.503-1.22 3.266-2.723 3.266S3.722 6.538 3.722 5.035a2.722 2.722 0 0 1 5.445 0ZM1 12.736c0-.797.12-1.804.796-2.643.562-.698 1.23-1.116 1.926-1.247 1.066-.2 1.638.544 2.722.544 1.085 0 1.657-.745 2.723-.544.697.13 1.364.55 1.926 1.247.676.84.796 1.846.796 2.643a.95.95 0 0 1-.95.951H1.95A.95.95 0 0 1 1 12.736Z"
            })), ef || (ef = ex.createElement("path", {
                d: "M8.982 7.712c-.088.111-.182.22-.282.324a2.698 2.698 0 0 1 1.21.232c1.336-.247 2.368-1.85 2.368-3.233a2.722 2.722 0 0 0-3.5-2.61 3.491 3.491 0 0 1 1.166 2.61c0 .945-.375 1.927-.962 2.677ZM12.382 13.688c.18-.274.285-.6.285-.952 0-.942-.152-2.21-1.019-3.187-.21-.239-.377-.371-.598-.555.37-.138.75-.238 1.228-.148.697.13 1.364.55 1.926 1.247.676.84.796 1.846.796 2.643a.95.95 0 0 1-.95.951h-1.668Z"
            })));

            function tH() {
                return (tH = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tX = e => ex.createElement("svg", tH({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 48 48"
            }, e), ev || (ev = ex.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 3.6,
                d: "M11.127 39.944c.442-.987.847-1.989 1.218-3.01M30.3 43.801c.723-1.89 1.197-4.02 1.725-5.962M16.165 5.997a20.528 20.528 0 0 1 9.432-1.77 20.308 20.308 0 0 1 9.176 2.687c2.764 1.602 5.042 3.83 6.622 6.472C42.974 16.03 43.802 19 43.8 22.022c0 3.94-.335 7.807-.98 11.58l-2.02 10.2M4.2 30.985a35.346 35.346 0 0 0 1.15-8.963c0-3.875 1.336-7.463 3.605-10.386m15.62 10.383c.008 7.484-1.62 14.893-4.775 21.782m-5.056-17.4c.144-1.442.218-2.902.218-4.38 0-2.362 1.013-4.628 2.815-6.299 1.803-1.67 4.248-2.609 6.797-2.609 2.55 0 4.995.939 6.797 2.61 1.803 1.67 2.816 3.936 2.816 6.298 0 1.084-.028 2.161-.087 3.232l-.687 4.186"
            })));

            function tK() {
                return (tK = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tY = e => ex.createElement("svg", tK({
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 48"
            }, e), eb || (eb = ex.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.996 16.178A13.439 13.439 0 0 0 10.5 24c0 7.456 6.044 13.5 13.5 13.5 2.916 0 5.615-.924 7.822-2.496L12.996 16.178Zm3.182-3.182 18.826 18.826A13.439 13.439 0 0 0 37.5 24c0-7.456-6.044-13.5-13.5-13.5-2.916 0-5.615.924-7.822 2.496Zm20.55 23.731A17.944 17.944 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24s8.059 18 18 18c4.97 0 9.468-2.014 12.725-5.27l.003-.002v-.001Z",
                fill: "#EF4444"
            })));

            function tq() {
                return (tq = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            let tG = e => ex.createElement("svg", tq({
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 17 16"
            }, e), ey || (ey = ex.createElement("path", {
                d: "M12.25 11.66h0M8.5 13.25h0M3.25 8h0M4.75 4.33h0M4.75 11.66h0M8.5 2.75v0M13.75 8h0M12.25 4.33h0M13.75 8c0-2.9-2.35-5.25-5.25-5.25",
                stroke: "#747686",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        },
        5681: function(e, t, r) {
            r.r(t), r.d(t, {
                createRoot: () => n.createRoot
            }), r(7571);
            var n = r(9068)
        },
        1085: function(e, t, r) {
            let n, o;
            r.d(t, {
                u1: () => x.u,
                W5: () => k,
                zJ: () => $
            });
            var a = r(9755),
                i = r(3531),
                l = r(9144),
                s = r(7571),
                c = r(2539),
                d = r(4914),
                u = r(8387);
            let p = {
                    titleize: r(5027).MI,
                    timeString: (e, t) => {
                        try {
                            return new Intl.DateTimeFormat(t || "en-US", {
                                timeStyle: "short"
                            }).format((0, u.P9)(e))
                        } catch (e) {
                            return console.warn(e), ""
                        }
                    },
                    weekday: (e, t, r) => {
                        try {
                            return new Intl.DateTimeFormat(t || "en-US", {
                                weekday: r || "long"
                            }).format((0, u.P9)(e))
                        } catch (e) {
                            return console.warn(e), ""
                        }
                    },
                    numeric: (e, t) => {
                        try {
                            return new Intl.DateTimeFormat(t || "en-US").format((0, u.P9)(e))
                        } catch (e) {
                            return console.warn(e), ""
                        }
                    },
                    link: (e, t) => "[".concat(t, "](").concat(e, ")")
                },
                m = (e, t) => {
                    if (!e) return "";
                    let {
                        normalisedString: r,
                        expressions: n
                    } = g(e, t);
                    return f(r, n, t)
                },
                h = () => {
                    var e, t;
                    let {
                        applicationName: r
                    } = (0, s.useEnvironment)().displayConfig, {
                        client: n,
                        user: o
                    } = (0, d.cL)(), {
                        signIn: a
                    } = n || {};
                    return {
                        applicationName: r,
                        "signIn.identifier": (null == a ? void 0 : a.identifier) || "",
                        "user.username": (null == o ? void 0 : o.username) || "",
                        "user.firstName": (null == o ? void 0 : o.firstName) || "",
                        "user.lastName": (null == o ? void 0 : o.lastName) || "",
                        "user.primaryEmailAddress": (null == o ? void 0 : null === (e = o.primaryEmailAddress) || void 0 === e ? void 0 : e.emailAddress) || "",
                        "user.primaryPhoneNumber": (null == o ? void 0 : null === (t = o.primaryPhoneNumber) || void 0 === t ? void 0 : t.phoneNumber) || ""
                    }
                },
                g = (e, t) => {
                    let r = (e.match(/{{.+?}}/g) || []).map(e => e.replace(/[{}]/g, "")).map(e => e.split("|").map(e => e.trim())).filter(e => e[0] in t).map(e => {
                            let [t, ...r] = e;
                            return {
                                token: t,
                                modifiers: r.map(e => b(e)).filter(e => v(e.modifierName))
                            }
                        }),
                        n = e;
                    return r.forEach(e => {
                        let {
                            token: t
                        } = e;
                        n = n.replace(/{{.+?}}/, "_++".concat(t, "++_"))
                    }), {
                        expressions: r,
                        normalisedString: n
                    }
                },
                f = (e, t, r) => (t.forEach(t => {
                    let {
                        token: n,
                        modifiers: o
                    } = t, a = o.reduce((e, t) => {
                        try {
                            return p[t.modifierName](e, ...t.params)
                        } catch (e) {
                            return console.warn(e), ""
                        }
                    }, r[n]);
                    e = e.replace("_++".concat(n, "++_"), a)
                }), e),
                v = e => Object.prototype.hasOwnProperty.call(p, e),
                b = e => {
                    let t = e.split(/[(,)]/g).map(e => e.trim()).filter(e => !!e);
                    if (1 === t.length) {
                        let [e] = t;
                        return {
                            modifierName: e,
                            params: []
                        }
                    } {
                        let [e, ...r] = t;
                        return {
                            modifierName: e,
                            params: r.map(e => e.replace(/['"]+/g, ""))
                        }
                    }
                },
                y = {
                    locale: "en-US",
                    backButton: "Back",
                    badge__default: "Default",
                    badge__otherImpersonatorDevice: "Other impersonator device",
                    badge__primary: "Primary",
                    badge__requiresAction: "Requires action",
                    badge__thisDevice: "This device",
                    badge__unverified: "Unverified",
                    badge__userDevice: "User device",
                    badge__you: "You",
                    createOrganization: {
                        formButtonSubmit: "Create organization",
                        invitePage: {
                            formButtonReset: "Skip"
                        },
                        title: "Create organization"
                    },
                    dates: {
                        lastDay: "Yesterday at {{ date | timeString('en-US') }}",
                        next6Days: "{{ date | weekday('en-US','long') }} at {{ date | timeString('en-US') }}",
                        nextDay: "Tomorrow at {{ date | timeString('en-US') }}",
                        numeric: "{{ date | numeric('en-US') }}",
                        previous6Days: "Last {{ date | weekday('en-US','long') }} at {{ date | timeString('en-US') }}",
                        sameDay: "Today at {{ date | timeString('en-US') }}"
                    },
                    dividerText: "or",
                    footerActionLink__useAnotherMethod: "Use another method",
                    footerPageLink__help: "Help",
                    footerPageLink__privacy: "Privacy",
                    footerPageLink__terms: "Terms",
                    formButtonPrimary: "Continue",
                    formButtonPrimary__verify: "Verify",
                    formFieldAction__forgotPassword: "Forgot password?",
                    formFieldError__matchingPasswords: "Passwords match.",
                    formFieldError__notMatchingPasswords: "Passwords don't match.",
                    formFieldError__verificationLinkExpired: "The verification link expired. Please request a new link.",
                    formFieldHintText__optional: "Optional",
                    formFieldHintText__slug: "A slug is a human-readable ID that must be unique. It’s often used in URLs.",
                    formFieldInputPlaceholder__backupCode: "Enter backup code",
                    formFieldInputPlaceholder__confirmDeletionUserAccount: "Delete account",
                    formFieldInputPlaceholder__emailAddress: "Enter your email address",
                    formFieldInputPlaceholder__emailAddress_username: "Enter email or username",
                    formFieldInputPlaceholder__emailAddresses: "example@email.com, example2@email.com",
                    formFieldInputPlaceholder__firstName: "First name",
                    formFieldInputPlaceholder__lastName: "Last name",
                    formFieldInputPlaceholder__organizationDomain: "example.com",
                    formFieldInputPlaceholder__organizationDomainEmailAddress: "you@example.com",
                    formFieldInputPlaceholder__organizationName: "Organization name",
                    formFieldInputPlaceholder__organizationSlug: "my-org",
                    formFieldInputPlaceholder__password: "Enter your password",
                    formFieldInputPlaceholder__phoneNumber: "Enter your phone number",
                    formFieldInputPlaceholder__username: void 0,
                    formFieldLabel__automaticInvitations: "Enable automatic invitations for this domain",
                    formFieldLabel__backupCode: "Backup code",
                    formFieldLabel__confirmDeletion: "Confirmation",
                    formFieldLabel__confirmPassword: "Confirm password",
                    formFieldLabel__currentPassword: "Current password",
                    formFieldLabel__emailAddress: "Email address",
                    formFieldLabel__emailAddress_username: "Email address or username",
                    formFieldLabel__emailAddresses: "Email addresses",
                    formFieldLabel__firstName: "First name",
                    formFieldLabel__lastName: "Last name",
                    formFieldLabel__newPassword: "New password",
                    formFieldLabel__organizationDomain: "Domain",
                    formFieldLabel__organizationDomainDeletePending: "Delete pending invitations and suggestions",
                    formFieldLabel__organizationDomainEmailAddress: "Verification email address",
                    formFieldLabel__organizationDomainEmailAddressDescription: "Enter an email address under this domain to receive a code and verify this domain.",
                    formFieldLabel__organizationName: "Name",
                    formFieldLabel__organizationSlug: "Slug",
                    formFieldLabel__passkeyName: "Name of passkey",
                    formFieldLabel__password: "Password",
                    formFieldLabel__phoneNumber: "Phone number",
                    formFieldLabel__role: "Role",
                    formFieldLabel__signOutOfOtherSessions: "Sign out of all other devices",
                    formFieldLabel__username: "Username",
                    impersonationFab: {
                        action__signOut: "Sign out",
                        title: "Signed in as {{identifier}}"
                    },
                    maintenanceMode: "We are currently undergoing maintenance, but don't worry, it shouldn't take more than a few minutes.",
                    membershipRole__admin: "Admin",
                    membershipRole__basicMember: "Member",
                    membershipRole__guestMember: "Guest",
                    organizationList: {
                        action__createOrganization: "Create organization",
                        action__invitationAccept: "Join",
                        action__suggestionsAccept: "Request to join",
                        createOrganization: "Create Organization",
                        invitationAcceptedLabel: "Joined",
                        subtitle: "to continue to {{applicationName}}",
                        suggestionsAcceptedLabel: "Pending approval",
                        title: "Choose an account",
                        titleWithoutPersonal: "Choose an organization"
                    },
                    organizationProfile: {
                        badge__automaticInvitation: "Automatic invitations",
                        badge__automaticSuggestion: "Automatic suggestions",
                        badge__manualInvitation: "No automatic enrollment",
                        badge__unverified: "Unverified",
                        createDomainPage: {
                            subtitle: "Add the domain to verify. Users with email addresses at this domain can join the organization automatically or request to join.",
                            title: "Add domain"
                        },
                        invitePage: {
                            detailsTitle__inviteFailed: "The invitations could not be sent. There are already pending invitations for the following email addresses: {{email_addresses}}.",
                            formButtonPrimary__continue: "Send invitations",
                            selectDropdown__role: "Select role",
                            subtitle: "Enter or paste one or more email addresses, separated by spaces or commas.",
                            successMessage: "Invitations successfully sent",
                            title: "Invite new members"
                        },
                        membersPage: {
                            action__invite: "Invite",
                            action__search: "Search",
                            activeMembersTab: {
                                menuAction__remove: "Remove member",
                                tableHeader__actions: "Actions",
                                tableHeader__joined: "Joined",
                                tableHeader__role: "Role",
                                tableHeader__user: "User"
                            },
                            detailsTitle__emptyRow: "No members to display",
                            invitationsTab: {
                                autoInvitations: {
                                    headerSubtitle: "Invite users by connecting an email domain with your organization. Anyone who signs up with a matching email domain will be able to join the organization anytime.",
                                    headerTitle: "Automatic invitations",
                                    primaryButton: "Manage verified domains"
                                },
                                table__emptyRow: "No invitations to display"
                            },
                            invitedMembersTab: {
                                menuAction__revoke: "Revoke invitation",
                                tableHeader__invited: "Invited"
                            },
                            requestsTab: {
                                autoSuggestions: {
                                    headerSubtitle: "Users who sign up with a matching email domain, will be able to see a suggestion to request to join your organization.",
                                    headerTitle: "Automatic suggestions",
                                    primaryButton: "Manage verified domains"
                                },
                                menuAction__approve: "Approve",
                                menuAction__reject: "Reject",
                                tableHeader__requested: "Requested access",
                                table__emptyRow: "No requests to display"
                            },
                            start: {
                                headerTitle__invitations: "Invitations",
                                headerTitle__members: "Members",
                                headerTitle__requests: "Requests"
                            }
                        },
                        navbar: {
                            description: "Manage your organization.",
                            general: "General",
                            members: "Members",
                            title: "Organization"
                        },
                        profilePage: {
                            dangerSection: {
                                deleteOrganization: {
                                    actionDescription: 'Type "{{organizationName}}" below to continue.',
                                    messageLine1: "Are you sure you want to delete this organization?",
                                    messageLine2: "This action is permanent and irreversible.",
                                    successMessage: "You have deleted the organization.",
                                    title: "Delete organization"
                                },
                                leaveOrganization: {
                                    actionDescription: 'Type "{{organizationName}}" below to continue.',
                                    messageLine1: "Are you sure you want to leave this organization? You will lose access to this organization and its applications.",
                                    messageLine2: "This action is permanent and irreversible.",
                                    successMessage: "You have left the organization.",
                                    title: "Leave organization"
                                },
                                title: "Danger"
                            },
                            domainSection: {
                                menuAction__manage: "Manage",
                                menuAction__remove: "Delete",
                                menuAction__verify: "Verify",
                                primaryButton: "Add domain",
                                subtitle: "Allow users to join the organization automatically or request to join based on a verified email domain.",
                                title: "Verified domains"
                            },
                            successMessage: "The organization has been updated.",
                            title: "Update profile"
                        },
                        removeDomainPage: {
                            messageLine1: "The email domain {{domain}} will be removed.",
                            messageLine2: "Users won’t be able to join the organization automatically after this.",
                            successMessage: "{{domain}} has been removed.",
                            title: "Remove domain"
                        },
                        start: {
                            headerTitle__general: "General",
                            headerTitle__members: "Members",
                            profileSection: {
                                primaryButton: "Update profile",
                                title: "Organization Profile",
                                uploadAction__title: "Logo"
                            }
                        },
                        verifiedDomainPage: {
                            dangerTab: {
                                calloutInfoLabel: "Removing this domain will affect invited users.",
                                removeDomainActionLabel__remove: "Remove domain",
                                removeDomainSubtitle: "Remove this domain from your verified domains",
                                removeDomainTitle: "Remove domain"
                            },
                            enrollmentTab: {
                                automaticInvitationOption__description: "Users are automatically invited to join the organization when they sign-up and can join anytime.",
                                automaticInvitationOption__label: "Automatic invitations",
                                automaticSuggestionOption__description: "Users receive a suggestion to request to join, but must be approved by an admin before they are able to join the organization.",
                                automaticSuggestionOption__label: "Automatic suggestions",
                                calloutInfoLabel: "Changing the enrollment mode will only affect new users.",
                                calloutInvitationCountLabel: "Pending invitations sent to users: {{count}}",
                                calloutSuggestionCountLabel: "Pending suggestions sent to users: {{count}}",
                                manualInvitationOption__description: "Users can only be invited manually to the organization.",
                                manualInvitationOption__label: "No automatic enrollment",
                                subtitle: "Choose how users from this domain can join the organization."
                            },
                            start: {
                                headerTitle__danger: "Danger",
                                headerTitle__enrollment: "Enrollment options"
                            },
                            subtitle: "The domain {{domain}} is now verified. Continue by selecting enrollment mode.",
                            title: "Update {{domain}}"
                        },
                        verifyDomainPage: {
                            formSubtitle: "Enter the verification code sent to your email address",
                            formTitle: "Verification code",
                            resendButton: "Didn't receive a code? Resend",
                            subtitle: "The domain {{domainName}} needs to be verified via email.",
                            subtitleVerificationCodeScreen: "A verification code was sent to {{emailAddress}}. Enter the code to continue.",
                            title: "Verify domain"
                        }
                    },
                    organizationSwitcher: {
                        action__createOrganization: "Create organization",
                        action__invitationAccept: "Join",
                        action__manageOrganization: "Manage",
                        action__suggestionsAccept: "Request to join",
                        notSelected: "No organization selected",
                        personalWorkspace: "Personal account",
                        suggestionsAcceptedLabel: "Pending approval"
                    },
                    paginationButton__next: "Next",
                    paginationButton__previous: "Previous",
                    paginationRowText__displaying: "Displaying",
                    paginationRowText__of: "of",
                    reverification: {
                        alternativeMethods: {
                            actionLink: "Get help",
                            actionText: "Don’t have any of these?",
                            blockButton__backupCode: "Use a backup code",
                            blockButton__passkey: "Use your passkey",
                            blockButton__emailCode: "Email code to {{identifier}}",
                            blockButton__password: "Continue with your password",
                            blockButton__phoneCode: "Send SMS code to {{identifier}}",
                            blockButton__totp: "Use your authenticator app",
                            getHelp: {
                                blockButton__emailSupport: "Email support",
                                content: "If you have trouble verifying your account, email us and we will work with you to restore access as soon as possible.",
                                title: "Get help"
                            },
                            subtitle: "Facing issues? You can use any of these methods for verification.",
                            title: "Use another method"
                        },
                        backupCodeMfa: {
                            subtitle: "Enter the backup code you received when setting up two-step authentication",
                            title: "Enter a backup code"
                        },
                        passkey: {
                            subtitle: "Using your passkey confirms your identity. Your device may ask for your fingerprint, face, or screen lock.",
                            title: "Use your passkey",
                            blockButton__passkey: "Use your passkey"
                        },
                        emailCode: {
                            formTitle: "Verification code",
                            resendButton: "Didn't receive a code? Resend",
                            subtitle: "Enter the code sent to your email to continue",
                            title: "Verification required"
                        },
                        noAvailableMethods: {
                            message: "Cannot proceed with verification. No suitable authentication factor is configured",
                            subtitle: "An error occurred",
                            title: "Cannot verify your account"
                        },
                        password: {
                            actionLink: "Use another method",
                            subtitle: "Enter your password to continue",
                            title: "Verification required"
                        },
                        phoneCode: {
                            formTitle: "Verification code",
                            resendButton: "Didn't receive a code? Resend",
                            subtitle: "Enter the code sent to your phone to continue",
                            title: "Verification required"
                        },
                        phoneCodeMfa: {
                            formTitle: "Verification code",
                            resendButton: "Didn't receive a code? Resend",
                            subtitle: "Enter the code sent to your phone to continue",
                            title: "Verification required"
                        },
                        totpMfa: {
                            formTitle: "Verification code",
                            subtitle: "Enter the code generated by your authenticator app to continue",
                            title: "Verification required"
                        }
                    },
                    signIn: {
                        accountSwitcher: {
                            action__addAccount: "Add account",
                            action__signOutAll: "Sign out of all accounts",
                            subtitle: "Select the account with which you wish to continue.",
                            title: "Choose an account"
                        },
                        alternativeMethods: {
                            actionLink: "Get help",
                            actionText: "Don’t have any of these?",
                            blockButton__backupCode: "Use a backup code",
                            blockButton__emailCode: "Email code to {{identifier}}",
                            blockButton__emailLink: "Email link to {{identifier}}",
                            blockButton__passkey: "Sign in with your passkey",
                            blockButton__password: "Sign in with your password",
                            blockButton__phoneCode: "Send SMS code to {{identifier}}",
                            blockButton__totp: "Use your authenticator app",
                            getHelp: {
                                blockButton__emailSupport: "Email support",
                                content: "If you have trouble signing into your account, email us and we will work with you to restore access as soon as possible.",
                                title: "Get help"
                            },
                            subtitle: "Facing issues? You can use any of these methods to sign in.",
                            title: "Use another method"
                        },
                        backupCodeMfa: {
                            subtitle: "Your backup code is the one you got when setting up two-step authentication.",
                            title: "Enter a backup code"
                        },
                        emailCode: {
                            formTitle: "Verification code",
                            resendButton: "Didn't receive a code? Resend",
                            subtitle: "to continue to {{applicationName}}",
                            title: "Check your email"
                        },
                        emailLink: {
                            clientMismatch: {
                                subtitle: "To continue, open the verification link on the device and browser from which you initiated the sign-in",
                                title: "Verification link is invalid for this device"
                            },
                            expired: {
                                subtitle: "Return to the original tab to continue.",
                                title: "This verification link has expired"
                            },
                            failed: {
                                subtitle: "Return to the original tab to continue.",
                                title: "This verification link is invalid"
                            },
                            formSubtitle: "Use the verification link sent to your email",
                            formTitle: "Verification link",
                            loading: {
                                subtitle: "You will be redirected soon",
                                title: "Signing in..."
                            },
                            resendButton: "Didn't receive a link? Resend",
                            subtitle: "to continue to {{applicationName}}",
                            title: "Check your email",
                            unusedTab: {
                                title: "You may close this tab"
                            },
                            verified: {
                                subtitle: "You will be redirected soon",
                                title: "Successfully signed in"
                            },
                            verifiedSwitchTab: {
                                subtitle: "Return to original tab to continue",
                                subtitleNewTab: "Return to the newly opened tab to continue",
                                titleNewTab: "Signed in on other tab"
                            }
                        },
                        forgotPassword: {
                            formTitle: "Reset password code",
                            resendButton: "Didn't receive a code? Resend",
                            subtitle: "to reset your password",
                            subtitle_email: "First, enter the code sent to your email address",
                            subtitle_phone: "First, enter the code sent to your phone",
                            title: "Reset password"
                        },
                        forgotPasswordAlternativeMethods: {
                            blockButton__resetPassword: "Reset your password",
                            label__alternativeMethods: "Or, sign in with another method",
                            title: "Forgot Password?"
                        },
                        noAvailableMethods: {
                            message: "Cannot proceed with sign in. There's no available authentication factor.",
                            subtitle: "An error occurred",
                            title: "Cannot sign in"
                        },
                        passkey: {
                            subtitle: "Using your passkey confirms it's you. Your device may ask for your fingerprint, face or screen lock.",
                            title: "Use your passkey"
                        },
                        password: {
                            actionLink: "Use another method",
                            subtitle: "Enter the password associated with your account",
                            title: "Enter your password"
                        },
                        passwordPwned: {
                            title: "Password compromised"
                        },
                        phoneCode: {
                            formTitle: "Verification code",
                            resendButton: "Didn't receive a code? Resend",
                            subtitle: "to continue to {{applicationName}}",
                            title: "Check your phone"
                        },
                        phoneCodeMfa: {
                            formTitle: "Verification code",
                            resendButton: "Didn't receive a code? Resend",
                            subtitle: "To continue, please enter the verification code sent to your phone",
                            title: "Check your phone"
                        },
                        resetPassword: {
                            formButtonPrimary: "Reset Password",
                            requiredMessage: "For security reasons, it is required to reset your password.",
                            successMessage: "Your password was successfully changed. Signing you in, please wait a moment.",
                            title: "Set new password"
                        },
                        resetPasswordMfa: {
                            detailsLabel: "We need to verify your identity before resetting your password."
                        },
                        start: {
                            actionLink: "Sign up",
                            actionLink__join_waitlist: "Join waitlist",
                            actionLink__use_email: "Use email",
                            actionLink__use_email_username: "Use email or username",
                            actionLink__use_passkey: "Use passkey instead",
                            actionLink__use_phone: "Use phone",
                            actionLink__use_username: "Use username",
                            actionText: "Don’t have an account?",
                            actionText__join_waitlist: "Want early access?",
                            subtitle: "Welcome back! Please sign in to continue",
                            subtitleCombined: void 0,
                            title: "Sign in to {{applicationName}}",
                            titleCombined: "Continue to {{applicationName}}"
                        },
                        totpMfa: {
                            formTitle: "Verification code",
                            subtitle: "To continue, please enter the verification code generated by your authenticator app",
                            title: "Two-step verification"
                        }
                    },
                    signInEnterPasswordTitle: "Enter your password",
                    signUp: {
                        continue: {
                            actionLink: "Sign in",
                            actionText: "Already have an account?",
                            subtitle: "Please fill in the remaining details to continue.",
                            title: "Fill in missing fields"
                        },
                        emailCode: {
                            formSubtitle: "Enter the verification code sent to your email address",
                            formTitle: "Verification code",
                            resendButton: "Didn't receive a code? Resend",
                            subtitle: "Enter the verification code sent to your email",
                            title: "Verify your email"
                        },
                        emailLink: {
                            clientMismatch: {
                                subtitle: "To continue, open the verification link on the device and browser from which you initiated the sign-up",
                                title: "Verification link is invalid for this device"
                            },
                            formSubtitle: "Use the verification link sent to your email address",
                            formTitle: "Verification link",
                            loading: {
                                title: "Signing up..."
                            },
                            resendButton: "Didn't receive a link? Resend",
                            subtitle: "to continue to {{applicationName}}",
                            title: "Verify your email",
                            verified: {
                                title: "Successfully signed up"
                            },
                            verifiedSwitchTab: {
                                subtitle: "Return to the newly opened tab to continue",
                                subtitleNewTab: "Return to previous tab to continue",
                                title: "Successfully verified email"
                            }
                        },
                        legalConsent: {
                            checkbox: {
                                label__onlyPrivacyPolicy: 'I agree to the {{ privacyPolicyLink || link("Privacy Policy") }}',
                                label__onlyTermsOfService: 'I agree to the {{ termsOfServiceLink || link("Terms of Service") }}',
                                label__termsOfServiceAndPrivacyPolicy: 'I agree to the {{ termsOfServiceLink || link("Terms of Service") }} and {{ privacyPolicyLink || link("Privacy Policy") }}'
                            },
                            continue: {
                                subtitle: "Please read and accept the terms to continue",
                                title: "Legal consent"
                            }
                        },
                        phoneCode: {
                            formSubtitle: "Enter the verification code sent to your phone number",
                            formTitle: "Verification code",
                            resendButton: "Didn't receive a code? Resend",
                            subtitle: "Enter the verification code sent to your phone",
                            title: "Verify your phone"
                        },
                        restrictedAccess: {
                            actionLink: "Sign in",
                            actionText: "Already have an account?",
                            blockButton__emailSupport: "Email support",
                            blockButton__joinWaitlist: "Join waitlist",
                            subtitle: "Sign ups are currently disabled. If you believe you should have access, please contact support.",
                            subtitleWaitlist: "Sign ups are currently disabled. To be the first to know when we launch, join the waitlist.",
                            title: "Access restricted"
                        },
                        start: {
                            actionLink: "Sign in",
                            actionLink__use_email: "Use email instead",
                            actionLink__use_phone: "Use phone instead",
                            actionText: "Already have an account?",
                            subtitle: "Welcome! Please fill in the details to get started.",
                            subtitleCombined: "Welcome! Please fill in the details to get started.",
                            title: "Create your account",
                            titleCombined: "Create your account"
                        }
                    },
                    socialButtonsBlockButton: "Continue with {{provider|titleize}}",
                    socialButtonsBlockButtonManyInView: "{{provider|titleize}}",
                    unstable__errors: {
                        already_a_member_in_organization: "{{email}} is already a member of the organization.",
                        captcha_invalid: "Sign up unsuccessful due to failed security validations. Please refresh the page to try again or reach out to support for more assistance.",
                        captcha_unavailable: "Sign up unsuccessful due to failed bot validation. Please refresh the page to try again or reach out to support for more assistance.",
                        form_code_incorrect: void 0,
                        form_identifier_exists__email_address: "This email address is taken. Please try another.",
                        form_identifier_exists__phone_number: "This phone number is taken. Please try another.",
                        form_identifier_exists__username: "This username is taken. Please try another.",
                        form_identifier_not_found: "No account found with this identifier. Please check and try again.",
                        form_param_format_invalid: "The value entered is in an invalid format. Please check and correct it.",
                        form_param_format_invalid__email_address: "Email address must be a valid email address.",
                        form_param_format_invalid__phone_number: "Phone number must be in a valid international format.",
                        form_param_max_length_exceeded__first_name: "First name should not exceed 256 characters.",
                        form_param_max_length_exceeded__last_name: "Last name should not exceed 256 characters.",
                        form_param_max_length_exceeded__name: "Name should not exceed 256 characters.",
                        form_param_nil: "This field is required and cannot be empty.",
                        form_param_value_invalid: "The value entered is invalid. Please correct it.",
                        form_password_incorrect: "The password you entered is incorrect. Please try again.",
                        form_password_length_too_short: "Your password is too short. It must be at least 8 characters long.",
                        form_password_not_strong_enough: "Your password is not strong enough.",
                        form_password_pwned: "This password has been found as part of a breach and can not be used, please try another password instead.",
                        form_password_pwned__sign_in: "This password has been found as part of a breach and can not be used, please reset your password.",
                        form_password_size_in_bytes_exceeded: "Your password has exceeded the maximum number of bytes allowed, please shorten it or remove some special characters.",
                        form_password_validation_failed: "Incorrect Password",
                        form_username_invalid_character: "Your username contains invalid characters. Please use only letters, numbers, and underscores.",
                        form_username_invalid_length: "Your username must be between {{min_length}} and {{max_length}} characters long.",
                        identification_deletion_failed: "You cannot delete your last identification.",
                        not_allowed_access: "You do not have permission to access this page. Please contact support if you believe this is an error.",
                        organization_domain_blocked: "This is a blocked email provider domain. Please use a different one.",
                        organization_domain_common: "This is a common email provider domain. Please use a different one.",
                        organization_domain_exists_for_enterprise_connection: "This domain is already used for your organization’s SSO",
                        organization_membership_quota_exceeded: "You have reached your limit of organization memberships, including outstanding invitations.",
                        organization_minimum_permissions_needed: "There has to be at least one organization member with the minimum required permissions.",
                        passkey_already_exists: "A passkey is already registered with this device.",
                        passkey_not_supported: "Passkeys are not supported on this device.",
                        passkey_pa_not_supported: "Registration requires a platform authenticator but the device does not support it.",
                        passkey_registration_cancelled: "Passkey registration was cancelled or timed out.",
                        passkey_retrieval_cancelled: "Passkey verification was cancelled or timed out.",
                        passwordComplexity: {
                            maximumLength: "less than {{length}} characters",
                            minimumLength: "{{length}} or more characters",
                            requireLowercase: "a lowercase letter",
                            requireNumbers: "a number",
                            requireSpecialCharacter: "a special character",
                            requireUppercase: "an uppercase letter",
                            sentencePrefix: "Your password must contain"
                        },
                        phone_number_exists: "This phone number is taken. Please try another.",
                        web3_missing_identifier: "A Web3 Wallet extension cannot be found. Please install one to continue.",
                        zxcvbn: {
                            couldBeStronger: "Your password works, but could be stronger. Try adding more characters.",
                            goodPassword: "Your password meets all the necessary requirements.",
                            notEnough: "Your password is not strong enough.",
                            suggestions: {
                                allUppercase: "Capitalize some, but not all letters.",
                                anotherWord: "Add more words that are less common.",
                                associatedYears: "Avoid years that are associated with you.",
                                capitalization: "Capitalize more than the first letter.",
                                dates: "Avoid dates and years that are associated with you.",
                                l33t: "Avoid predictable letter substitutions like '@' for 'a'.",
                                longerKeyboardPattern: "Use longer keyboard patterns and change typing direction multiple times.",
                                noNeed: "You can create strong passwords without using symbols, numbers, or uppercase letters.",
                                pwned: "If you use this password elsewhere, you should change it.",
                                recentYears: "Avoid recent years.",
                                repeated: "Avoid repeated words and characters.",
                                reverseWords: "Avoid reversed spellings of common words.",
                                sequences: "Avoid common character sequences.",
                                useWords: "Use multiple words, but avoid common phrases."
                            },
                            warnings: {
                                common: "This is a commonly used password.",
                                commonNames: "Common names and surnames are easy to guess.",
                                dates: "Dates are easy to guess.",
                                extendedRepeat: 'Repeated character patterns like "abcabcabc" are easy to guess.',
                                keyPattern: "Short keyboard patterns are easy to guess.",
                                namesByThemselves: "Single names or surnames are easy to guess.",
                                pwned: "Your password was exposed by a data breach on the Internet.",
                                recentYears: "Recent years are easy to guess.",
                                sequences: 'Common character sequences like "abc" are easy to guess.',
                                similarToCommon: "This is similar to a commonly used password.",
                                simpleRepeat: 'Repeated characters like "aaa" are easy to guess.',
                                straightRow: "Straight rows of keys on your keyboard are easy to guess.",
                                topHundred: "This is a frequently used password.",
                                topTen: "This is a heavily used password.",
                                userInputs: "There should not be any personal or page related data.",
                                wordByItself: "Single words are easy to guess."
                            }
                        }
                    },
                    userButton: {
                        action__addAccount: "Add account",
                        action__manageAccount: "Manage account",
                        action__signOut: "Sign out",
                        action__signOutAll: "Sign out of all accounts"
                    },
                    userProfile: {
                        backupCodePage: {
                            actionLabel__copied: "Copied!",
                            actionLabel__copy: "Copy all",
                            actionLabel__download: "Download .txt",
                            actionLabel__print: "Print",
                            infoText1: "Backup codes will be enabled for this account.",
                            infoText2: "Keep the backup codes secret and store them securely. You may regenerate backup codes if you suspect they have been compromised.",
                            subtitle__codelist: "Store them securely and keep them secret.",
                            successMessage: "Backup codes are now enabled. You can use one of these to sign in to your account, if you lose access to your authentication device. Each code can only be used once.",
                            successSubtitle: "You can use one of these to sign in to your account, if you lose access to your authentication device.",
                            title: "Add backup code verification",
                            title__codelist: "Backup codes"
                        },
                        connectedAccountPage: {
                            formHint: "Select a provider to connect your account.",
                            formHint__noAccounts: "There are no available external account providers.",
                            removeResource: {
                                messageLine1: "{{identifier}} will be removed from this account.",
                                messageLine2: "You will no longer be able to use this connected account and any dependent features will no longer work.",
                                successMessage: "{{connectedAccount}} has been removed from your account.",
                                title: "Remove connected account"
                            },
                            socialButtonsBlockButton: "{{provider|titleize}}",
                            successMessage: "The provider has been added to your account",
                            title: "Add connected account"
                        },
                        deletePage: {
                            actionDescription: 'Type "Delete account" below to continue.',
                            confirm: "Delete account",
                            messageLine1: "Are you sure you want to delete your account?",
                            messageLine2: "This action is permanent and irreversible.",
                            title: "Delete account"
                        },
                        emailAddressPage: {
                            emailCode: {
                                formHint: "An email containing a verification code will be sent to this email address.",
                                formSubtitle: "Enter the verification code sent to {{identifier}}",
                                formTitle: "Verification code",
                                resendButton: "Didn't receive a code? Resend",
                                successMessage: "The email {{identifier}} has been added to your account."
                            },
                            emailLink: {
                                formHint: "An email containing a verification link will be sent to this email address.",
                                formSubtitle: "Click on the verification link in the email sent to {{identifier}}",
                                formTitle: "Verification link",
                                resendButton: "Didn't receive a link? Resend",
                                successMessage: "The email {{identifier}} has been added to your account."
                            },
                            enterpriseSSOLink: {
                                formButton: "Click to sign-in",
                                formSubtitle: "Complete the sign-in with {{identifier}}"
                            },
                            formHint: "You'll need to verify this email address before it can be added to your account.",
                            removeResource: {
                                messageLine1: "{{identifier}} will be removed from this account.",
                                messageLine2: "You will no longer be able to sign in using this email address.",
                                successMessage: "{{emailAddress}} has been removed from your account.",
                                title: "Remove email address"
                            },
                            title: "Add email address",
                            verifyTitle: "Verify email address"
                        },
                        formButtonPrimary__add: "Add",
                        formButtonPrimary__continue: "Continue",
                        formButtonPrimary__finish: "Finish",
                        formButtonPrimary__remove: "Remove",
                        formButtonPrimary__save: "Save",
                        formButtonReset: "Cancel",
                        mfaPage: {
                            formHint: "Select a method to add.",
                            title: "Add two-step verification"
                        },
                        mfaPhoneCodePage: {
                            backButton: "Use existing number",
                            primaryButton__addPhoneNumber: "Add phone number",
                            removeResource: {
                                messageLine1: "{{identifier}} will be no longer receiving verification codes when signing in.",
                                messageLine2: "Your account may not be as secure. Are you sure you want to continue?",
                                successMessage: "SMS code two-step verification has been removed for {{mfaPhoneCode}}",
                                title: "Remove two-step verification"
                            },
                            subtitle__availablePhoneNumbers: "Select an existing phone number to register for SMS code two-step verification or add a new one.",
                            subtitle__unavailablePhoneNumbers: "There are no available phone numbers to register for SMS code two-step verification, please add a new one.",
                            successMessage1: "When signing in, you will need to enter a verification code sent to this phone number as an additional step.",
                            successMessage2: "Save these backup codes and store them somewhere safe. If you lose access to your authentication device, you can use backup codes to sign in.",
                            successTitle: "SMS code verification enabled",
                            title: "Add SMS code verification"
                        },
                        mfaTOTPPage: {
                            authenticatorApp: {
                                buttonAbleToScan__nonPrimary: "Scan QR code instead",
                                buttonUnableToScan__nonPrimary: "Can’t scan QR code?",
                                infoText__ableToScan: "Set up a new sign-in method in your authenticator app and scan the following QR code to link it to your account.",
                                infoText__unableToScan: "Set up a new sign-in method in your authenticator and enter the Key provided below.",
                                inputLabel__unableToScan1: "Make sure Time-based or One-time passwords is enabled, then finish linking your account.",
                                inputLabel__unableToScan2: "Alternatively, if your authenticator supports TOTP URIs, you can also copy the full URI."
                            },
                            removeResource: {
                                messageLine1: "Verification codes from this authenticator will no longer be required when signing in.",
                                messageLine2: "Your account may not be as secure. Are you sure you want to continue?",
                                successMessage: "Two-step verification via authenticator application has been removed.",
                                title: "Remove two-step verification"
                            },
                            successMessage: "Two-step verification is now enabled. When signing in, you will need to enter a verification code from this authenticator as an additional step.",
                            title: "Add authenticator application",
                            verifySubtitle: "Enter verification code generated by your authenticator",
                            verifyTitle: "Verification code"
                        },
                        mobileButton__menu: "Menu",
                        navbar: {
                            account: "Profile",
                            description: "Manage your account info.",
                            security: "Security",
                            title: "Account"
                        },
                        passkeyScreen: {
                            removeResource: {
                                messageLine1: "{{name}} will be removed from this account.",
                                title: "Remove passkey"
                            },
                            subtitle__rename: "You can change the passkey name to make it easier to find.",
                            title__rename: "Rename Passkey"
                        },
                        passwordPage: {
                            checkboxInfoText__signOutOfOtherSessions: "It is recommended to sign out of all other devices which may have used your old password.",
                            readonly: "Your password can currently not be edited because you can sign in only via the enterprise connection.",
                            successMessage__set: "Your password has been set.",
                            successMessage__signOutOfOtherSessions: "All other devices have been signed out.",
                            successMessage__update: "Your password has been updated.",
                            title__set: "Set password",
                            title__update: "Update password"
                        },
                        phoneNumberPage: {
                            infoText: "A text message containing a verification code will be sent to this phone number. Message and data rates may apply.",
                            removeResource: {
                                messageLine1: "{{identifier}} will be removed from this account.",
                                messageLine2: "You will no longer be able to sign in using this phone number.",
                                successMessage: "{{phoneNumber}} has been removed from your account.",
                                title: "Remove phone number"
                            },
                            successMessage: "{{identifier}} has been added to your account.",
                            title: "Add phone number",
                            verifySubtitle: "Enter the verification code sent to {{identifier}}",
                            verifyTitle: "Verify phone number"
                        },
                        profilePage: {
                            fileDropAreaHint: "Recommended size 1:1, up to 10MB.",
                            imageFormDestructiveActionSubtitle: "Remove",
                            imageFormSubtitle: "Upload",
                            imageFormTitle: "Profile image",
                            readonly: "Your profile information has been provided by the enterprise connection and cannot be edited.",
                            successMessage: "Your profile has been updated.",
                            title: "Update profile"
                        },
                        start: {
                            activeDevicesSection: {
                                destructiveAction: "Sign out of device",
                                title: "Active devices"
                            },
                            connectedAccountsSection: {
                                actionLabel__connectionFailed: "Reconnect",
                                actionLabel__reauthorize: "Authorize now",
                                destructiveActionTitle: "Remove",
                                primaryButton: "Connect account",
                                subtitle__disconnected: "This account has been disconnected.",
                                subtitle__reauthorize: "The required scopes have been updated, and you may be experiencing limited functionality. Please re-authorize this application to avoid any issues",
                                title: "Connected accounts"
                            },
                            dangerSection: {
                                deleteAccountButton: "Delete account",
                                title: "Delete account"
                            },
                            emailAddressesSection: {
                                destructiveAction: "Remove email",
                                detailsAction__nonPrimary: "Set as primary",
                                detailsAction__primary: "Complete verification",
                                detailsAction__unverified: "Verify",
                                primaryButton: "Add email address",
                                title: "Email addresses"
                            },
                            enterpriseAccountsSection: {
                                title: "Enterprise accounts"
                            },
                            headerTitle__account: "Profile details",
                            headerTitle__security: "Security",
                            mfaSection: {
                                backupCodes: {
                                    actionLabel__regenerate: "Regenerate",
                                    headerTitle: "Backup codes",
                                    subtitle__regenerate: "Get a fresh set of secure backup codes. Prior backup codes will be deleted and cannot be used.",
                                    title__regenerate: "Regenerate backup codes"
                                },
                                phoneCode: {
                                    actionLabel__setDefault: "Set as default",
                                    destructiveActionLabel: "Remove"
                                },
                                primaryButton: "Add two-step verification",
                                title: "Two-step verification",
                                totp: {
                                    destructiveActionTitle: "Remove",
                                    headerTitle: "Authenticator application"
                                }
                            },
                            passkeysSection: {
                                menuAction__destructive: "Remove",
                                menuAction__rename: "Rename",
                                primaryButton: "Add a passkey",
                                title: "Passkeys"
                            },
                            passwordSection: {
                                primaryButton__setPassword: "Set password",
                                primaryButton__updatePassword: "Update password",
                                title: "Password"
                            },
                            phoneNumbersSection: {
                                destructiveAction: "Remove phone number",
                                detailsAction__nonPrimary: "Set as primary",
                                detailsAction__primary: "Complete verification",
                                detailsAction__unverified: "Verify phone number",
                                primaryButton: "Add phone number",
                                title: "Phone numbers"
                            },
                            profileSection: {
                                primaryButton: "Update profile",
                                title: "Profile"
                            },
                            usernameSection: {
                                primaryButton__setUsername: "Set username",
                                primaryButton__updateUsername: "Update username",
                                title: "Username"
                            },
                            web3WalletsSection: {
                                destructiveAction: "Remove wallet",
                                primaryButton: "Connect wallet",
                                title: "Web3 wallets"
                            }
                        },
                        usernamePage: {
                            successMessage: "Your username has been updated.",
                            title__set: "Set username",
                            title__update: "Update username"
                        },
                        web3WalletPage: {
                            removeResource: {
                                messageLine1: "{{identifier}} will be removed from this account.",
                                messageLine2: "You will no longer be able to sign in using this web3 wallet.",
                                successMessage: "{{web3Wallet}} has been removed from your account.",
                                title: "Remove web3 wallet"
                            },
                            subtitle__availableWallets: "Select a web3 wallet to connect to your account.",
                            subtitle__unavailableWallets: "There are no available web3 wallets.",
                            successMessage: "The wallet has been added to your account.",
                            title: "Add web3 wallet",
                            web3WalletButtonsBlockButton: "{{provider|titleize}}"
                        }
                    },
                    waitlist: {
                        start: {
                            actionLink: "Sign in",
                            actionText: "Already have access?",
                            formButton: "Join the waitlist",
                            subtitle: "Enter your email address and we’ll let you know when your spot is ready",
                            title: "Join the waitlist"
                        },
                        success: {
                            message: "You will be redirected soon...",
                            subtitle: "We’ll be in touch when your spot is ready",
                            title: "Thanks for joining the waitlist!"
                        }
                    }
                };
            var x = r(5059),
                w = r(1826),
                S = r(4662);
            let C = (e, t) => {
                    if (!n || o && o !== e && !(0, S.J)(e, o)) {
                        o = e;
                        let r = {};
                        (0, w.EB)(t, r), (0, w.EB)(e, r), n = r
                    }
                    return n
                },
                _ = () => {
                    let {
                        localization: e
                    } = (0, s.useOptions)();
                    return C(e || {}, y)
                },
                k = e => {
                    let t = l.forwardRef((t, r) => {
                            let n = _(),
                                {
                                    localizationKey: o,
                                    ...i
                                } = t,
                                l = h();
                            return o ? "string" == typeof o ? (0, a.tZ)(e, { ...i,
                                ref: r,
                                children: o
                            }) : (0, a.tZ)(e, { ...i,
                                ref: r,
                                "data-localization-key": I(o),
                                children: P(o, n, l) || i.children
                            }) : (0, a.tZ)(e, { ...i,
                                ref: r
                            })
                        }),
                        r = e.displayName || e.name || "Component";
                    return t.displayName = "Localizable".concat(r).replace("_", ""), t
                },
                $ = () => {
                    let {
                        localization: e
                    } = (0, s.useOptions)(), t = _(), r = h(), n = e => e && "string" != typeof e ? P(e, t, r) : e || "";
                    return {
                        t: n,
                        translateError: e => {
                            if (!e || "string" == typeof e) return n(e);
                            if ((0, i.uX)(e)) return n((0, x.u)("unstable__errors.".concat(e.code))) || e.message;
                            let {
                                code: t,
                                message: r,
                                longMessage: o,
                                meta: a
                            } = e || {}, {
                                paramName: l = ""
                            } = a || {};
                            return t ? n((0, x.u)("unstable__errors.".concat(t, "__").concat(l))) || n((0, x.u)("unstable__errors.".concat(t))) || o || r : ""
                        },
                        locale: (null == e ? void 0 : e.locale) || (null == y ? void 0 : y.locale)
                    }
                },
                I = e => e.key,
                P = (e, t, r) => {
                    let n = e.key,
                        o = (0, c.Ai)(t, n),
                        a = e.params;
                    return m(o || "", { ...r,
                        ...a
                    })
                }
        },
        5059: function(e, t, r) {
            r.d(t, {
                u: () => n
            });
            let n = (e, t) => ({
                key: e,
                params: t
            })
        },
        4750: function(e, t, r) {
            r.r(t), r.d(t, {
                Portal: () => p,
                VirtualBodyRootPortal: () => m
            });
            var n = r(623),
                o = r(9755),
                a = r(9144),
                i = r(8315),
                l = r(753),
                s = r(4152),
                c = r(2073),
                d = r(7571),
                u = r(4676);

            function p(e) {
                let {
                    props: t,
                    component: r,
                    componentName: n,
                    node: p
                } = e, m = { ...t,
                    ...(0, c.L)({
                        routing: null == t ? void 0 : t.routing,
                        path: null == t ? void 0 : t.path
                    })
                }, h = (0, o.tZ)(d.ComponentContextProvider, {
                    componentName: n,
                    props: m,
                    children: (0, o.tZ)(a.Suspense, {
                        fallback: "",
                        children: a.createElement(r, m)
                    })
                });
                return (null == m ? void 0 : m.routing) === "path" ? ((null == m ? void 0 : m.path) || (0, s.yI)(n), i.createPortal((0, o.tZ)(u.PathRouter, {
                    preservedParams: l.Yt,
                    basePath: m.path,
                    children: h
                }), p)) : i.createPortal((0, o.tZ)(u.HashRouter, {
                    preservedParams: l.Yt,
                    children: h
                }), p)
            }
            class m extends a.PureComponent {
                componentDidMount() {
                    document.body.appendChild(this.elRef)
                }
                componentWillUnmount() {
                    document.body.removeChild(this.elRef)
                }
                render() {
                    let {
                        props: e,
                        startPath: t,
                        component: r,
                        componentName: n
                    } = this.props;
                    return i.createPortal((0, o.tZ)(u.VirtualRouter, {
                        startPath: t,
                        children: (0, o.tZ)(d.ComponentContextProvider, {
                            componentName: n,
                            props: null != e ? e : {},
                            children: (0, o.tZ)(a.Suspense, {
                                fallback: "",
                                children: a.createElement(r, e)
                            })
                        })
                    }), this.elRef)
                }
                constructor(...e) {
                    super(...e), (0, n._)(this, "elRef", document.createElement("div"))
                }
            }
        },
        763: function(e, t, r) {
            r.d(t, {
                aS: () => c,
                X2: () => d,
                YV: () => s
            });
            var n = r(9755),
                o = r(4914),
                a = r(9144),
                i = r(6788);
            let [l, , s] = (0, o.uH)("FormFieldContext"), c = e => {
                let {
                    id: t,
                    isRequired: r = !1,
                    isDisabled: o = !1,
                    setError: s,
                    setSuccess: c,
                    setWarning: d,
                    setHasPassedComplexity: u,
                    setInfo: p,
                    clearFeedback: m,
                    children: h,
                    feedbackType: g,
                    feedback: f,
                    isFocused: v,
                    ...b
                } = e, y = "".concat(t, "-field"), {
                    debounced: x
                } = (0, i.V2)({
                    feedback: f,
                    feedbackType: g,
                    isFocused: v
                }), w = "error" === x.feedbackType, S = w ? "error-".concat(t) : "", C = a.useMemo(() => ({
                    isRequired: r,
                    isDisabled: o,
                    hasError: w,
                    id: y,
                    fieldId: t,
                    errorMessageId: S,
                    setError: s,
                    setSuccess: c,
                    setWarning: d,
                    setInfo: p,
                    clearFeedback: m,
                    setHasPassedComplexity: u,
                    feedbackType: g,
                    feedback: f,
                    isFocused: v
                }), [r, w, y, t, S, o, s, c, d, p, m, u, g, f, v]);
                return (0, n.tZ)(l.Provider, {
                    value: {
                        value: { ...C,
                            ...b,
                            debouncedFeedback: x
                        }
                    },
                    children: e.children
                })
            }, d = (e, t) => {
                let {
                    radioOptions: r,
                    validatePassword: n,
                    hasPassedComplexity: o,
                    isFocused: a,
                    feedback: i,
                    feedbackType: l,
                    setHasPassedComplexity: s,
                    setWarning: c,
                    setSuccess: d,
                    setError: u,
                    setInfo: p,
                    errorMessageId: m,
                    fieldId: h,
                    label: g,
                    clearFeedback: f,
                    infoText: v,
                    debouncedFeedback: b,
                    ignorePasswordManager: y,
                    transformer: x,
                    ...w
                } = e;
                return null == t || t.forEach(t => {
                    w[t] = e[t]
                }), w
            };
            r(6819)
        },
        6819: function(e, t, r) {
            r.d(t, {
                G: () => o
            });
            var n = r(9144);

            function o(e) {
                return {
                    onChange: function(t) {
                        t.persist(), "function" == typeof e && e(t)
                    },
                    ref: n.useRef(null)
                }
            }
        },
        2882: function(e, t, r) {
            r.d(t, {
                Cc: () => em,
                l0: () => Z,
                zM: () => x,
                JX: () => m,
                rj: () => X,
                Th: () => eT,
                iA: () => eC,
                hr: () => eZ,
                JO: () => Q,
                II: () => eo,
                $j: () => ex,
                Ct: () => _,
                Xc: () => M,
                rF: () => T,
                xu: () => s,
                NA: () => ei,
                Zh: () => U,
                zx: () => B,
                Ee: () => ee,
                I0: () => ea,
                Tr: () => eR,
                rU: () => ec,
                p3: () => e_,
                bZ: () => f,
                kC: () => p,
                X6: () => q,
                ZD: () => W,
                lX: () => V,
                Dr: () => eh,
                Td: () => eI,
                jo: () => O,
                xv: () => E
            });
            var n = r(9755),
                o = r(5295),
                a = r(9144);
            let i = e => {
                    let {
                        hasError: t,
                        isDisabled: r,
                        isLoading: n,
                        isOpen: o,
                        isActive: a,
                        ...i
                    } = e;
                    return {
                        "data-error": t || void 0,
                        "data-disabled": r || void 0,
                        "data-loading": n || void 0,
                        "data-open": o || void 0,
                        "data-active": a || void 0,
                        ...i
                    }
                },
                {
                    applyVariants: l
                } = (0, o.createVariants)(() => ({
                    base: {
                        boxSizing: "border-box"
                    },
                    variants: {}
                })),
                s = a.forwardRef((e, t) => {
                    let {
                        as: r = "div",
                        ...o
                    } = e;
                    return (0, n.tZ)(r, { ...i(o),
                        css: l(e),
                        ref: t
                    })
                }),
                c = (e, t) => {
                    var r, n;
                    return (null === (n = navigator) || void 0 === n ? void 0 : null === (r = n.userAgent) || void 0 === r ? void 0 : r.match(/(iphone|ipad).+(os).*(\s13_).+safari/i)) ? {
                        '& > *:not([hidden]):not([style*="visibility: hidden"]) + *:not([hidden]):not([style*="visibility: hidden"])': {
                            marginLeft: "row" === t ? e : void 0,
                            marginTop: "col" === t ? e : void 0
                        }
                    } : {
                        gap: e
                    }
                },
                {
                    applyVariants: d,
                    filterProps: u
                } = (0, o.createVariants)((e, t) => {
                    let r = "col" === t.flexDirection || "colReverse" === t.flexDirection || "col" === t.direction || "colReverse" === t.direction ? "col" : "row";
                    return {
                        base: {
                            display: "flex"
                        },
                        variants: {
                            direction: {
                                row: {
                                    flexDirection: "row"
                                },
                                col: {
                                    flexDirection: "column"
                                },
                                rowReverse: {
                                    flexDirection: "row-reverse"
                                },
                                columnReverse: {
                                    flexDirection: "column-reverse"
                                }
                            },
                            align: {
                                start: {
                                    alignItems: "flex-start"
                                },
                                center: {
                                    alignItems: "center"
                                },
                                end: {
                                    alignItems: "flex-end"
                                },
                                stretch: {
                                    alignItems: "stretch"
                                },
                                baseline: {
                                    alignItems: "baseline"
                                }
                            },
                            justify: {
                                start: {
                                    justifyContent: "flex-start"
                                },
                                center: {
                                    justifyContent: "center"
                                },
                                end: {
                                    justifyContent: "flex-end"
                                },
                                between: {
                                    justifyContent: "space-between"
                                }
                            },
                            wrap: {
                                noWrap: {
                                    flexWrap: "nowrap"
                                },
                                wrap: {
                                    flexWrap: "wrap"
                                },
                                wrapReverse: {
                                    flexWrap: "wrap-reverse"
                                }
                            },
                            gap: {
                                1: c(e.space.$1, r),
                                2: c(e.space.$2, r),
                                3: c(e.space.$3, r),
                                4: c(e.space.$4, r),
                                5: c(e.space.$5, r),
                                6: c(e.space.$6, r),
                                7: c(e.space.$7, r),
                                8: c(e.space.$8, r),
                                9: c(e.space.$9, r)
                            },
                            center: {
                                true: {
                                    justifyContent: "center",
                                    alignItems: "center"
                                }
                            }
                        },
                        defaultVariants: {
                            direction: "row",
                            align: "stretch",
                            justify: "start",
                            wrap: "noWrap"
                        }
                    }
                }),
                p = a.forwardRef((e, t) => (0, n.tZ)(s, { ...u(e),
                    css: d(e),
                    ref: t
                })),
                m = a.forwardRef((e, t) => (0, n.tZ)(p, { ...e,
                    direction: "col",
                    ref: t
                })),
                {
                    applyVariants: h,
                    filterProps: g
                } = (0, o.createVariants)(e => ({
                    base: {
                        padding: "".concat(e.space.$3, " ").concat(e.space.$4),
                        backgroundColor: e.colors.$neutralAlpha50,
                        ...o.common.borderVariants(e).normal
                    },
                    variants: {
                        colorScheme: {
                            danger: {
                                color: e.colors.$danger500,
                                backgroundColor: e.colors.$dangerAlpha50,
                                ...o.common.borderVariants(e, {
                                    hasError: !0
                                }).normal
                            },
                            warning: {}
                        }
                    }
                })),
                f = e => (0, n.tZ)(p, {
                    align: "center",
                    justify: "start",
                    ...g(e),
                    css: h(e),
                    children: e.children
                });
            var v = r(8655);
            let {
                applyVariants: b,
                filterProps: y
            } = (0, o.createVariants)(e => ({
                base: {
                    marginRight: e.space.$2x5,
                    width: e.sizes.$4,
                    height: e.sizes.$4
                },
                variants: {
                    colorScheme: {
                        danger: {
                            color: e.colors.$danger500
                        },
                        warning: {
                            color: e.colors.$warning500
                        },
                        success: {
                            color: e.colors.$success500
                        },
                        primary: {
                            color: e.colors.$primary500
                        }
                    }
                }
            })), x = e => {
                let {
                    variant: t,
                    ...r
                } = e, o = v.SV;
                return (0, n.tZ)(o, { ...y(r),
                    css: b(e)
                })
            }, w = (0, o.createCssVariables)("accent", "bg", "borderColor"), {
                applyVariants: S,
                filterProps: C
            } = (0, o.createVariants)(e => ({
                base: {
                    color: w.accent,
                    flexShrink: 0,
                    backgroundColor: w.bg,
                    boxShadow: e.shadows.$badge,
                    borderWidth: e.borderWidths.$normal,
                    borderStyle: e.borderStyles.$solid,
                    borderColor: w.borderColor,
                    borderRadius: e.radii.$sm,
                    padding: "".concat(e.space.$0x25, " ").concat(e.space.$1x5),
                    display: "inline-flex",
                    marginRight: "1px"
                },
                variants: {
                    textVariant: { ...o.common.textVariants(e)
                    },
                    colorScheme: {
                        primary: {
                            [w.accent]: e.colors.$neutralAlpha600,
                            [w.bg]: e.colors.$neutralAlpha50,
                            [w.borderColor]: e.colors.$neutralAlpha150
                        },
                        danger: {
                            [w.accent]: e.colors.$danger500,
                            [w.bg]: e.colors.$dangerAlpha50,
                            [w.borderColor]: e.colors.$dangerAlpha300
                        },
                        success: {
                            [w.accent]: e.colors.$success500,
                            [w.bg]: e.colors.$successAlpha50,
                            [w.borderColor]: e.colors.$successAlpha300
                        },
                        warning: {
                            [w.accent]: e.colors.$warning500,
                            [w.bg]: e.colors.$warningAlpha50,
                            [w.borderColor]: e.colors.$warningAlpha300
                        }
                    }
                },
                defaultVariants: {
                    colorScheme: "primary",
                    textVariant: "caption"
                }
            })), _ = e => (0, n.tZ)(p, { ...C(e),
                center: !0,
                as: "span",
                css: S(e),
                "data-color": e.colorScheme || "primary"
            });
            var k = r(3064);
            let $ = (0, o.createCssVariables)("accent", "accentHover", "accentContrast", "alpha", "border"),
                {
                    applyVariants: I,
                    filterProps: P
                } = (0, o.createVariants)((e, t) => ({
                    base: {
                        margin: 0,
                        padding: 0,
                        borderWidth: 0,
                        outline: 0,
                        userSelect: "none",
                        cursor: "pointer",
                        backgroundColor: "unset",
                        color: "currentColor",
                        borderRadius: e.radii.$md,
                        position: "relative",
                        isolation: "isolate",
                        ...o.common.centeredFlex("inline-flex"),
                        ...o.common.disabled(e),
                        transitionProperty: e.transitionProperty.$common,
                        transitionDuration: e.transitionDuration.$controls
                    },
                    variants: {
                        textVariant: o.common.textVariants(e),
                        size: {
                            iconLg: {
                                width: e.sizes.$13
                            },
                            xs: {
                                padding: "".concat(e.space.$1, " ").concat(e.space.$3)
                            },
                            sm: {
                                padding: "".concat(e.space.$1x5, " ").concat(e.space.$3)
                            },
                            md: {
                                padding: "".concat(e.space.$2x5, " ").concat(e.space.$5)
                            }
                        },
                        colorScheme: {
                            primary: {
                                [$.accent]: e.colors.$primary500,
                                [$.accentHover]: e.colors.$primaryHover,
                                [$.border]: e.colors.$primary500,
                                [$.accentContrast]: e.colors.$colorTextOnPrimaryBackground,
                                [$.alpha]: e.colors.$neutralAlpha50
                            },
                            neutral: {
                                [$.accent]: e.colors.$neutralAlpha600,
                                [$.accentHover]: e.colors.$neutralAlpha700,
                                [$.border]: e.colors.$neutralAlpha200,
                                [$.accentContrast]: e.colors.$white,
                                [$.alpha]: e.colors.$neutralAlpha50
                            },
                            danger: {
                                [$.accent]: e.colors.$danger500,
                                [$.accentHover]: e.colors.$danger600,
                                [$.accentContrast]: e.colors.$white,
                                [$.border]: e.colors.$danger500,
                                [$.alpha]: e.colors.$dangerAlpha50
                            }
                        },
                        variant: {
                            solid: {
                                backgroundColor: $.accent,
                                color: $.accentContrast,
                                boxShadow: e.shadows.$buttonShadow,
                                borderWidth: e.borderWidths.$normal,
                                borderStyle: e.borderStyles.$solid,
                                borderColor: $.accent,
                                "&:hover": {
                                    backgroundColor: $.accentHover
                                },
                                "&:focus": t.hoverAsFocus ? {
                                    backgroundColor: $.accentHover
                                } : void 0
                            },
                            outline: {
                                borderWidth: e.borderWidths.$normal,
                                borderStyle: e.borderStyles.$solid,
                                borderColor: e.colors.$neutralAlpha100,
                                color: e.colors.$neutralAlpha600,
                                "&:hover": {
                                    backgroundColor: e.colors.$neutralAlpha50
                                },
                                "&:focus": t.hoverAsFocus ? {
                                    backgroundColor: e.colors.$neutralAlpha50
                                } : void 0,
                                boxShadow: e.shadows.$outlineButtonShadow
                            },
                            ghost: {
                                color: $.accent,
                                "&:hover": {
                                    backgroundColor: $.alpha,
                                    color: $.accentHover
                                },
                                "&:focus": t.hoverAsFocus ? {
                                    backgroundColor: $.alpha,
                                    color: $.accentHover
                                } : void 0
                            },
                            link: {
                                minHeight: "fit-content",
                                height: "fit-content",
                                width: "fit-content",
                                textTransform: "none",
                                padding: 0,
                                color: e.colors.$primary500,
                                "&:hover": {
                                    textDecoration: "underline"
                                },
                                "&:focus": t.hoverAsFocus ? {
                                    textDecoration: "underline"
                                } : void 0
                            },
                            linkDanger: {
                                minHeight: "fit-content",
                                height: "fit-content",
                                width: "fit-content",
                                textTransform: "none",
                                padding: 0,
                                color: e.colors.$danger500,
                                "&:hover": {
                                    textDecoration: "underline"
                                },
                                "&:focus": t.hoverAsFocus ? {
                                    textDecoration: "underline"
                                } : void 0
                            },
                            unstyled: {},
                            roundWrapper: {
                                padding: 0,
                                margin: 0,
                                height: "unset",
                                width: "unset",
                                minHeight: "unset"
                            }
                        },
                        block: {
                            true: {
                                width: "100%"
                            }
                        },
                        focusRing: {
                            true: { ...o.common.focusRing(e)
                            }
                        }
                    },
                    defaultVariants: {
                        textVariant: "buttonLarge",
                        variant: "solid",
                        colorScheme: "primary",
                        size: "sm",
                        focusRing: !0
                    }
                })),
                A = e => {
                    let {
                        children: t
                    } = e;
                    return (0, n.BX)(p, {
                        align: "center",
                        as: "span",
                        children: [t, (0, n.tZ)(k.Icon, {
                            elementDescriptor: k.descriptors.buttonArrowIcon,
                            icon: v.p8,
                            sx: e => ({
                                marginLeft: e.space.$2,
                                width: e.sizes.$2x5,
                                height: e.sizes.$2x5,
                                opacity: e.opacity.$inactive
                            })
                        })]
                    })
                },
                B = a.forwardRef((e, t) => {
                    let r = { ...e,
                            isDisabled: e.isDisabled || e.isLoading
                        },
                        {
                            isLoading: o,
                            isDisabled: a,
                            hoverAsFocus: l,
                            loadingText: s,
                            children: c,
                            hasArrow: d,
                            onClick: u,
                            ...m
                        } = P(r);
                    return (0, n.BX)("button", { ...i(m),
                        type: void 0,
                        onClick: e => ("submit" !== m.type && e.preventDefault(), null == u ? void 0 : u(e)),
                        disabled: a,
                        css: I(r),
                        "data-variant": e.variant || "solid",
                        "data-color": e.colorScheme || "primary",
                        ref: t,
                        children: [o && (0, n.BX)(p, {
                            as: "span",
                            gap: 2,
                            center: !0,
                            css: {
                                position: "relative"
                            },
                            children: [(0, n.tZ)(k.Spinner, {
                                "aria-label": s || "Loading",
                                elementDescriptor: k.descriptors.spinner,
                                sx: {
                                    position: s ? void 0 : "absolute"
                                }
                            }), s || (0, n.tZ)("span", {
                                style: {
                                    display: "inline-flex",
                                    visibility: "hidden"
                                },
                                children: c
                            })]
                        }), !o && (d ? (0, n.tZ)(A, {
                            children: c
                        }) : c)]
                    })
                }),
                T = a.forwardRef((e, t) => {
                    let r = { ...e,
                            isDisabled: e.isDisabled || e.isLoading
                        },
                        {
                            loadingText: o,
                            isDisabled: a,
                            hoverAsFocus: l,
                            children: s,
                            onClick: c,
                            ...d
                        } = P(r);
                    return (0, n.tZ)("button", { ...i(d),
                        type: void 0,
                        onClick: e => ("submit" !== d.type && e.preventDefault(), null == c ? void 0 : c(e)),
                        css: I(r),
                        disabled: a,
                        "data-variant": e.variant || "solid",
                        "data-color": e.colorScheme || "primary",
                        ref: t,
                        children: s
                    })
                }),
                Z = a.forwardRef((e, t) => (0, n.tZ)(p, {
                    direction: "col",
                    as: "form",
                    ...e,
                    ref: t
                }));
            var R = r(763);
            let {
                applyVariants: z,
                filterProps: L
            } = (0, o.createVariants)(e => ({
                base: {
                    boxSizing: "border-box",
                    margin: 0,
                    fontSize: "inherit",
                    ...o.common.disabled(e)
                },
                variants: {
                    variant: o.common.textVariants(e),
                    colorScheme: {
                        body: {
                            color: e.colors.$colorText
                        },
                        onPrimaryBg: {
                            color: e.colors.$colorTextOnPrimaryBackground
                        },
                        danger: {
                            color: e.colors.$danger500
                        },
                        success: {
                            color: e.colors.$success500
                        },
                        warning: {
                            color: e.colors.$warning500
                        },
                        secondary: {
                            color: e.colors.$colorTextSecondary
                        },
                        inherit: {
                            color: "inherit"
                        }
                    },
                    truncate: {
                        true: {
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden"
                        }
                    }
                },
                defaultVariants: {
                    variant: "body",
                    colorScheme: "inherit"
                }
            })), E = a.forwardRef((e, t) => {
                let {
                    as: r = "p",
                    ...o
                } = e;
                return (0, n.tZ)(r, { ...i(L(o)),
                    css: z(e),
                    ref: t
                })
            }), {
                applyVariants: D
            } = (0, o.createVariants)(e => ({
                base: {
                    marginTop: e.sizes.$1x5,
                    animation: "".concat(o.animations.textInSmall, " ").concat(e.transitionDuration.$fast),
                    display: "flex",
                    gap: e.sizes.$1,
                    position: "absolute",
                    top: "0",
                    textAlign: "left"
                },
                variants: {}
            })), O = (0, a.forwardRef)((e, t) => {
                let {
                    hasError: r,
                    errorMessageId: o
                } = (0, R.YV)() || {};
                if (!r && !e.children) return null;
                let {
                    children: a,
                    ...i
                } = e;
                return (0, n.BX)(E, {
                    ref: t,
                    colorScheme: "danger",
                    "aria-live": "polite",
                    id: o,
                    ...i,
                    css: D(e),
                    children: [(0, n.tZ)(k.Icon, {
                        colorScheme: "danger",
                        icon: v.bR
                    }), a]
                })
            }), {
                applyVariants: F
            } = (0, o.createVariants)(e => ({
                base: {
                    marginTop: e.sizes.$1x5,
                    animation: "".concat(o.animations.textInSmall, " ").concat(e.transitionDuration.$fast),
                    display: "flex",
                    gap: e.sizes.$1,
                    position: "absolute",
                    top: "0",
                    textAlign: "left"
                },
                variants: {}
            })), M = (0, a.forwardRef)((e, t) => {
                let {
                    children: r,
                    ...o
                } = e;
                return (0, n.BX)(E, {
                    ref: t,
                    colorScheme: "secondary",
                    "aria-live": "polite",
                    ...o,
                    css: F(e),
                    children: [(0, n.tZ)(k.Icon, {
                        colorScheme: "success",
                        icon: v.fU
                    }), r]
                })
            }), U = (0, a.forwardRef)((e, t) => {
                let {
                    hasError: r,
                    errorMessageId: o
                } = (0, R.YV)() || {};
                return r || e.children ? (0, n.tZ)(E, {
                    ref: t,
                    colorScheme: "secondary",
                    "aria-live": "polite",
                    id: o,
                    ...e,
                    css: F(e)
                }) : null
            }), {
                applyVariants: j
            } = (0, o.createVariants)(e => ({
                base: {
                    color: e.colors.$colorText,
                    ...o.common.textVariants(e).subtitle,
                    ...o.common.disabled(e)
                },
                variants: {}
            })), V = e => {
                let {
                    id: t
                } = (0, R.YV)(), {
                    isRequired: r,
                    htmlFor: o,
                    ...a
                } = e;
                return (0, n.tZ)("label", { ...i(a),
                    htmlFor: null != o ? o : t,
                    css: j(e),
                    children: e.children
                })
            }, W = (0, a.forwardRef)((e, t) => {
                let {
                    children: r,
                    ...o
                } = e;
                return (0, n.BX)(E, {
                    ref: t,
                    colorScheme: "secondary",
                    "aria-live": "polite",
                    ...o,
                    css: F(e),
                    children: [(0, n.tZ)(k.Icon, {
                        colorScheme: "warning",
                        icon: v.bR
                    }), r]
                })
            }), {
                applyVariants: N,
                filterProps: H
            } = (0, o.createVariants)(e => ({
                base: {
                    display: "grid"
                },
                variants: {
                    align: {
                        start: {
                            alignItems: "flex-start"
                        },
                        center: {
                            alignItems: "center"
                        },
                        end: {
                            alignItems: "flex-end"
                        },
                        stretch: {
                            alignItems: "stretch"
                        },
                        baseline: {
                            alignItems: "baseline"
                        }
                    },
                    justify: {
                        start: {
                            justifyContent: "flex-start"
                        },
                        center: {
                            justifyContent: "center"
                        },
                        end: {
                            justifyContent: "flex-end"
                        },
                        between: {
                            justifyContent: "space-between"
                        },
                        around: {
                            justifyContent: "space-around"
                        },
                        stretch: {
                            justifyContent: "stretch"
                        }
                    },
                    columns: {
                        1: {
                            gridTemplateColumns: "1fr"
                        },
                        2: {
                            gridTemplateColumns: "repeat(2, 1fr)"
                        },
                        3: {
                            gridTemplateColumns: "repeat(3, 1fr)"
                        },
                        4: {
                            gridTemplateColumns: "repeat(4, 1fr)"
                        },
                        6: {
                            gridTemplateColumns: "repeat(6, 1fr)"
                        }
                    },
                    gap: {
                        1: {
                            gap: e.space.$1
                        },
                        2: {
                            gap: e.space.$2
                        },
                        3: {
                            gap: e.space.$3
                        },
                        4: {
                            gap: e.space.$4
                        },
                        5: {
                            gap: e.space.$5
                        },
                        6: {
                            gap: e.space.$6
                        },
                        7: {
                            gap: e.space.$7
                        },
                        8: {
                            gap: e.space.$8
                        },
                        9: {
                            gap: e.space.$9
                        }
                    }
                },
                defaultVariants: {
                    align: "stretch",
                    justify: "stretch",
                    wrap: "noWrap"
                }
            })), X = a.forwardRef((e, t) => (0, n.tZ)(s, { ...H(e),
                css: N(e),
                ref: t
            })), {
                applyVariants: K,
                filterProps: Y
            } = (0, o.createVariants)(e => ({
                base: {
                    boxSizing: "border-box",
                    color: "".concat(e.colors.$colorText),
                    margin: 0
                },
                variants: {
                    textVariant: { ...o.common.textVariants(e)
                    }
                },
                defaultVariants: {
                    as: "h1",
                    textVariant: "h1"
                }
            })), q = e => {
                let {
                    as: t = "h1",
                    ...r
                } = e;
                return (0, n.tZ)(t, { ...Y(r),
                    css: K(e)
                })
            }, {
                applyVariants: G,
                filterProps: J
            } = (0, o.createVariants)(e => ({
                base: {
                    flexShrink: 0
                },
                variants: {
                    size: {
                        xs: {
                            width: e.sizes.$2x5,
                            height: e.sizes.$2x5
                        },
                        sm: {
                            width: e.sizes.$3,
                            height: e.sizes.$3
                        },
                        md: {
                            width: e.sizes.$4,
                            height: e.sizes.$4
                        },
                        lg: {
                            width: e.sizes.$5,
                            height: e.sizes.$5
                        }
                    },
                    colorScheme: {
                        success: {
                            color: e.colors.$success500
                        },
                        danger: {
                            color: e.colors.$danger500
                        },
                        warning: {
                            color: e.colors.$warning500
                        },
                        neutral: {
                            color: e.colors.$neutralAlpha400
                        }
                    }
                },
                defaultVariants: {
                    size: "md"
                }
            })), Q = e => {
                let {
                    icon: t,
                    ...r
                } = e;
                return (0, n.tZ)(t, { ...J(r),
                    css: G(e)
                })
            }, ee = a.forwardRef((e, t) => (0, n.tZ)("img", {
                crossOrigin: "anonymous",
                ...i(e),
                ref: t
            }));
            var et = r(6819);
            let {
                applyVariants: er,
                filterProps: en
            } = (0, o.createVariants)((e, t) => ({
                base: {
                    boxSizing: "border-box",
                    margin: 0,
                    padding: "".concat(e.space.$1x5, " ").concat(e.space.$3),
                    backgroundColor: e.colors.$colorInputBackground,
                    color: e.colors.$colorInputText,
                    outline: "transparent solid 2px",
                    outlineOffset: "2px",
                    maxHeight: e.sizes.$9,
                    width: "checkbox" === t.type ? e.sizes.$4 : "100%",
                    aspectRatio: "checkbox" === t.type ? "1/1" : "unset",
                    accentColor: e.colors.$primary500,
                    ...o.common.textVariants(e).body,
                    ...o.common.disabled(e),
                    [o.mqu.ios]: {
                        fontSize: e.fontSizes.$lg,
                        '&:not([type="checkbox"]):not([type="radio"])': {
                            WebkitAppearance: "none"
                        }
                    },
                    ":autofill": {
                        animationName: "onAutoFillStart"
                    },
                    "::placeholder": {
                        color: e.colors.$colorTextSecondary
                    }
                },
                variants: {
                    variant: {
                        default: { ...o.common.borderVariants(e, t).normal
                        },
                        unstyled: {
                            borderWidth: 0,
                            boxShadow: "unset",
                            backgroundColor: "transparent"
                        }
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            })), eo = a.forwardRef((e, t) => {
                let r = (0, R.YV)() || {},
                    {
                        errorMessageId: o,
                        ignorePasswordManager: a,
                        feedbackType: i,
                        ...l
                    } = (0, R.X2)(r, ["errorMessageId", "ignorePasswordManager", "feedbackType"]),
                    s = en({ ...e,
                        hasError: e.hasError || l.hasError
                    }),
                    {
                        onChange: c
                    } = (0, et.G)(s.onChange),
                    {
                        isDisabled: d,
                        hasError: u,
                        focusRing: p,
                        isRequired: m,
                        type: h,
                        ...g
                    } = s,
                    f = d || l.isDisabled,
                    v = m || l.isRequired,
                    b = u || l.hasError;
                return (0, n.tZ)("input", { ...g,
                    ..."email" === h ? {
                        type: "text",
                        pattern: "^.*@[a-zA-Z0-9\\-]+\\.[a-zA-Z0-9\\-\\.]+$"
                    } : {
                        type: h || "text"
                    },
                    ...a ? {
                        "data-1p-ignore": !0
                    } : void 0,
                    ref: t,
                    onChange: c,
                    disabled: d,
                    required: v,
                    id: e.id || l.id,
                    "aria-invalid": b,
                    "aria-describedby": o || void 0,
                    "aria-required": v,
                    "aria-disabled": f,
                    "data-feedback": i,
                    "data-variant": e.variant || "default",
                    css: er(e)
                })
            }), ea = a.forwardRef((e, t) => (0, n.tZ)(eo, { ...e,
                type: "checkbox",
                ref: t
            })), ei = a.forwardRef((e, t) => (0, n.tZ)(eo, { ...e,
                type: "radio",
                ref: t
            })), {
                applyVariants: el,
                filterProps: es
            } = (0, o.createVariants)(e => ({
                base: {
                    boxSizing: "border-box",
                    display: "inline-flex",
                    alignItems: "center",
                    margin: 0,
                    cursor: "pointer",
                    ...o.common.disabled(e),
                    textDecoration: "none",
                    "&:hover": {
                        textDecoration: "underline"
                    }
                },
                variants: {
                    variant: o.common.textVariants(e),
                    colorScheme: {
                        primary: {
                            color: e.colors.$primary500,
                            "&:hover": {
                                color: e.colors.$primary400
                            },
                            "&:active": {
                                color: e.colors.$primary600
                            }
                        },
                        danger: {
                            color: e.colors.$danger500,
                            "&:hover": {
                                color: e.colors.$danger400
                            },
                            "&:active": {
                                color: e.colors.$danger600
                            }
                        },
                        neutral: {
                            color: e.colors.$colorTextSecondary
                        },
                        inherit: {
                            color: "inherit"
                        }
                    }
                },
                defaultVariants: {
                    colorScheme: "primary",
                    variant: "body"
                }
            })), ec = e => {
                let {
                    isExternal: t,
                    children: r,
                    href: o,
                    onClick: a,
                    ...l
                } = e, s = a ? e => {
                    o || e.preventDefault(), a(e)
                } : void 0;
                return (0, n.tZ)("a", { ...i(es(l)),
                    onClick: s,
                    href: o || "",
                    target: o && t ? "_blank" : void 0,
                    rel: o && t ? "noopener" : void 0,
                    css: el(e),
                    children: r
                })
            }, ed = (0, o.createCssVariables)("accent", "bg", "borderColor"), {
                applyVariants: eu,
                filterProps: ep
            } = (0, o.createVariants)(e => ({
                base: {
                    color: ed.accent,
                    background: ed.bg,
                    borderWidth: e.borderWidths.$normal,
                    borderStyle: e.borderStyles.$solid,
                    borderRadius: e.radii.$lg,
                    borderColor: ed.borderColor,
                    height: e.space.$4,
                    minWidth: e.space.$5,
                    padding: "".concat(e.space.$0x5, " ").concat(e.space.$1),
                    display: "inline-flex"
                },
                variants: {
                    textVariant: { ...o.common.textVariants(e)
                    },
                    colorScheme: {
                        primary: {
                            [ed.accent]: e.colors.$colorTextOnPrimaryBackground,
                            [ed.bg]: "linear-gradient(180deg, ".concat(e.colors.$whiteAlpha300, " 0%, ").concat(e.colors.$transparent, " 100%), ").concat(e.colors.$primary500),
                            borderWidth: 0
                        },
                        outline: {
                            [ed.accent]: e.colors.$neutralAlpha600,
                            [ed.bg]: "transparent",
                            [ed.borderColor]: e.colors.$neutralAlpha150
                        }
                    }
                },
                defaultVariants: {
                    colorScheme: "primary",
                    textVariant: "caption"
                }
            })), em = e => (0, n.tZ)(p, { ...ep(e),
                center: !0,
                as: "span",
                css: [eu(e), {
                    lineHeight: 0
                }]
            }), eh = a.forwardRef((e, t) => (0, n.tZ)("span", { ...e,
                ref: t
            })), {
                size: eg,
                thickness: ef,
                speed: ev
            } = (0, o.createCssVariables)("speed", "size", "thickness"), {
                applyVariants: eb,
                filterProps: ey
            } = (0, o.createVariants)(e => ({
                base: {
                    display: "inline-block",
                    borderRadius: "99999px",
                    borderTop: "".concat(ef, " solid currentColor"),
                    borderRight: "".concat(ef, " solid currentColor"),
                    borderBottomWidth: ef,
                    borderLeftWidth: ef,
                    borderBottomStyle: "solid",
                    borderLeftStyle: "solid",
                    borderBottomColor: e.colors.$transparent,
                    borderLeftColor: e.colors.$transparent,
                    opacity: 1,
                    animation: "".concat(o.animations.spinning, " ").concat(ev, " linear 0s infinite normal none running"),
                    width: [eg],
                    height: [eg],
                    minWidth: [eg],
                    minHeight: [eg]
                },
                variants: {
                    colorScheme: {
                        primary: {
                            borderTopColor: e.colors.$primary500,
                            borderRightColor: e.colors.$primary500,
                            opacity: 1
                        },
                        neutral: {
                            borderTopColor: e.colors.$neutralAlpha700,
                            borderRightColor: e.colors.$neutralAlpha700,
                            opacity: 1
                        }
                    },
                    thickness: {
                        sm: {
                            [ef]: e.sizes.$0x5
                        },
                        md: {
                            [ef]: e.sizes.$1
                        }
                    },
                    size: {
                        xs: {
                            [eg]: e.sizes.$3
                        },
                        sm: {
                            [eg]: e.sizes.$4
                        },
                        md: {
                            [eg]: e.sizes.$5
                        },
                        lg: {
                            [eg]: e.sizes.$6
                        },
                        xl: {
                            [eg]: e.sizes.$8
                        }
                    },
                    speed: {
                        slow: {
                            [ev]: "600ms"
                        },
                        normal: {
                            [ev]: "400ms"
                        }
                    }
                },
                defaultVariants: {
                    speed: "normal",
                    thickness: "sm",
                    size: "sm"
                }
            })), ex = e => (0, n.tZ)("span", { ...ey(e),
                css: eb(e),
                "aria-busy": !0,
                "aria-live": "polite"
            }), {
                applyVariants: ew,
                filterProps: eS
            } = (0, o.createVariants)(e => ({
                base: {
                    borderSpacing: "0",
                    borderCollapse: "separate",
                    borderWidth: e.borderWidths.$normal,
                    borderStyle: e.borderStyles.$solid,
                    borderColor: e.colors.$neutralAlpha100,
                    borderRadius: e.radii.$lg,
                    boxShadow: e.shadows.$tableBodyShadow,
                    width: "100%",
                    ">:not([hidden])~:not([hidden])": {
                        borderBottomWidth: "0px",
                        borderTopWidth: "1px",
                        borderStyle: "solid",
                        borderLeftWidth: "0px",
                        borderRightWidth: "0px",
                        borderColor: e.colors.$neutralAlpha100
                    },
                    "td:not(:first-of-type)": {
                        paddingLeft: e.space.$2
                    },
                    "th:not(:first-of-type)": {
                        paddingLeft: e.space.$2
                    },
                    "tr > td": {
                        borderTopWidth: e.borderWidths.$normal,
                        borderTopStyle: e.borderStyles.$solid,
                        borderTopColor: e.colors.$neutralAlpha100,
                        paddingBottom: e.space.$2,
                        paddingTop: e.space.$2,
                        paddingLeft: e.space.$4,
                        paddingRight: e.space.$4
                    },
                    "tbody > :not([hidden])~:not([hidden])": {
                        borderBottomWidth: "0px",
                        borderTopWidth: "1px",
                        borderStyle: "solid",
                        borderLeftWidth: "0px",
                        borderRightWidth: "0px",
                        borderColor: e.colors.$neutralAlpha100
                    },
                    "tr:hover td:first-of-type": {
                        borderBottomLeftRadius: e.radii.$lg
                    },
                    "tr:hover td:last-of-type": {
                        borderBottomRightRadius: e.radii.$lg
                    },
                    "tr > th:first-of-type": {
                        paddingLeft: e.space.$5
                    },
                    "thead::after": {
                        content: '""',
                        display: "block"
                    }
                },
                variants: {}
            })), eC = a.forwardRef((e, t) => (0, n.tZ)(s, {
                as: "table",
                ...eS(e),
                css: ew(e),
                ref: t
            })), e_ = a.forwardRef((e, t) => (0, n.tZ)(s, {
                as: "tbody",
                ...e,
                ref: t
            })), {
                applyVariants: ek,
                filterProps: e$
            } = (0, o.createVariants)(e => ({
                base: {
                    fontSize: e.fontSizes.$xs,
                    fontWeight: e.fontWeights.$normal,
                    color: e.colors.$colorText
                },
                variants: {}
            })), eI = a.forwardRef((e, t) => (0, n.tZ)(s, {
                as: "td",
                ...e$(e),
                css: ek(e),
                ref: t
            }));
            var eP = r(2539);
            let {
                applyVariants: eA,
                filterProps: eB
            } = (0, o.createVariants)(e => ({
                base: {
                    textAlign: "left",
                    fontSize: e.fontSizes.$sm,
                    fontWeight: e.fontWeights.$normal,
                    color: eP.O9.setAlpha(e.colors.$colorText, .62),
                    padding: "".concat(e.space.$2, " ").concat(e.space.$4)
                },
                variants: {}
            })), eT = a.forwardRef((e, t) => (0, n.tZ)(s, {
                as: "th",
                ...eB(e),
                css: eA(e),
                ref: t
            })), eZ = a.forwardRef((e, t) => (0, n.tZ)(s, {
                as: "thead",
                ...e,
                ref: t
            })), eR = a.forwardRef((e, t) => (0, n.tZ)(s, {
                as: "tr",
                ...e,
                ref: t
            }))
        },
        5117: function(e, t, r) {
            r.d(t, {
                X: () => o,
                t: () => a
            });
            var n = r(9144);
            let o = n.createContext(null);
            o.displayName = "RouteContext";
            let a = () => {
                let e = n.useContext(o);
                if (!e) throw Error("useRouter called while Router is null");
                return e
            }
        },
        4676: function(e, t, r) {
            r.r(t), r.d(t, {
                PathRouter: () => b,
                RouteContext: () => n.X,
                VirtualRouter: () => x,
                useRouter: () => n.t,
                VIRTUAL_ROUTER_BASE_PATH: () => y,
                HashRouter: () => v,
                Switch: () => w,
                Route: () => h,
                hashRouterBase: () => f
            });
            var n = r(5117),
                o = r(9755),
                a = r(9144),
                i = r(1235),
                l = r(4914),
                s = r(2762);
            let c = (e, t, r, n) => {
                let o = e;
                r && (o = t, n || (o += "/" + r)), o.startsWith("//") && (o = o.substr(1));
                let a = t + (r ? "/" + r : "");
                return a.startsWith("//") && (a = a.substr(1)), [o, a]
            };

            function d(e, t) {
                let r = [];
                return function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            decode: n = e => e
                        } = r;
                    return function(r) {
                        let o = e.exec(r);
                        if (!o) return !1;
                        let {
                            0: a,
                            index: i
                        } = o, l = Object.create(null);
                        for (let e = 1; e < o.length; e++) {
                            if (void 0 === o[e]) continue;
                            let r = t[e - 1];
                            "*" === r.modifier || "+" === r.modifier ? l[r.name] = o[e].split(r.prefix + r.suffix).map(e => n(e, r)) : l[r.name] = n(o[e], r)
                        }
                        return {
                            path: a,
                            index: i,
                            params: l
                        }
                    }
                }(function e(t, r, n) {
                    var o, a, i;
                    return t instanceof RegExp ? function(e, t) {
                        if (!t) return e;
                        let r = e.source.match(/\((?!\?)/g);
                        if (r)
                            for (let e = 0; e < r.length; e++) t.push({
                                name: e,
                                prefix: "",
                                suffix: "",
                                modifier: "",
                                pattern: ""
                            });
                        return e
                    }(t, r) : Array.isArray(t) ? function(t, r, n) {
                        let o = t.map(t => e(t, r, n).source);
                        return new RegExp("(?:".concat(o.join("|"), ")"), p(n))
                    }(t, r, n) : function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                strict: n = !1,
                                start: o = !0,
                                end: a = !0,
                                encode: i = e => e
                            } = r,
                            l = "[".concat(u(r.endsWith || ""), "]|$"),
                            s = "[".concat(u(r.delimiter || "/#?"), "]"),
                            c = o ? "^" : "";
                        for (let r of e)
                            if ("string" == typeof r) c += u(i(r));
                            else {
                                let e = u(i(r.prefix)),
                                    n = u(i(r.suffix));
                                if (r.pattern) {
                                    if (t && t.push(r), e || n) {
                                        if ("+" === r.modifier || "*" === r.modifier) {
                                            let t = "*" === r.modifier ? "?" : "";
                                            c += "(?:".concat(e, "((?:").concat(r.pattern, ")(?:").concat(n).concat(e, "(?:").concat(r.pattern, "))*)").concat(n, ")").concat(t)
                                        } else c += "(?:".concat(e, "(").concat(r.pattern, ")").concat(n, ")").concat(r.modifier)
                                    } else c += "(".concat(r.pattern, ")").concat(r.modifier)
                                } else c += "(?:".concat(e).concat(n, ")").concat(r.modifier)
                            }
                        if (a) n || (c += "".concat(s, "?")), c += r.endsWith ? "(?=".concat(l, ")") : "$";
                        else {
                            let t = e[e.length - 1],
                                r = "string" == typeof t ? s.indexOf(t[t.length - 1]) > -1 : void 0 === t;
                            n || (c += "(?:".concat(s, "(?=").concat(l, "))?")), r || (c += "(?=".concat(s, "|").concat(l, ")"))
                        }
                        return new RegExp(c, p(r))
                    }(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = function(e) {
                                let t = [],
                                    r = 0;
                                for (; r < e.length;) {
                                    let n = e[r];
                                    if ("*" === n || "+" === n || "?" === n) {
                                        t.push({
                                            type: "MODIFIER",
                                            index: r,
                                            value: e[r++]
                                        });
                                        continue
                                    }
                                    if ("\\" === n) {
                                        t.push({
                                            type: "ESCAPED_CHAR",
                                            index: r++,
                                            value: e[r++]
                                        });
                                        continue
                                    }
                                    if ("{" === n) {
                                        t.push({
                                            type: "OPEN",
                                            index: r,
                                            value: e[r++]
                                        });
                                        continue
                                    }
                                    if ("}" === n) {
                                        t.push({
                                            type: "CLOSE",
                                            index: r,
                                            value: e[r++]
                                        });
                                        continue
                                    }
                                    if (":" === n) {
                                        let n = "",
                                            o = r + 1;
                                        for (; o < e.length;) {
                                            let t = e.charCodeAt(o);
                                            if (t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 || 95 === t) {
                                                n += e[o++];
                                                continue
                                            }
                                            break
                                        }
                                        if (!n) throw TypeError("Missing parameter name at ".concat(r));
                                        t.push({
                                            type: "NAME",
                                            index: r,
                                            value: n
                                        }), r = o;
                                        continue
                                    }
                                    if ("(" === n) {
                                        let n = 1,
                                            o = "",
                                            a = r + 1;
                                        if ("?" === e[a]) throw TypeError('Pattern cannot start with "?" at '.concat(a));
                                        for (; a < e.length;) {
                                            if ("\\" === e[a]) {
                                                o += e[a++] + e[a++];
                                                continue
                                            }
                                            if (")" === e[a]) {
                                                if (0 == --n) {
                                                    a++;
                                                    break
                                                }
                                            } else if ("(" === e[a] && (n++, "?" !== e[a + 1])) throw TypeError("Capturing groups are not allowed at ".concat(a));
                                            o += e[a++]
                                        }
                                        if (n) throw TypeError("Unbalanced pattern at ".concat(r));
                                        if (!o) throw TypeError("Missing pattern at ".concat(r));
                                        t.push({
                                            type: "PATTERN",
                                            index: r,
                                            value: o
                                        }), r = a;
                                        continue
                                    }
                                    t.push({
                                        type: "CHAR",
                                        index: r,
                                        value: e[r++]
                                    })
                                }
                                return t.push({
                                    type: "END",
                                    index: r,
                                    value: ""
                                }), t
                            }(e),
                            {
                                prefixes: n = "./"
                            } = t,
                            o = "[^".concat(u(t.delimiter || "/#?"), "]+?"),
                            a = [],
                            i = 0,
                            l = 0,
                            s = "",
                            c = e => {
                                if (l < r.length && r[l].type === e) return r[l++].value
                            },
                            d = e => {
                                let t = c(e);
                                if (void 0 !== t) return t;
                                let {
                                    type: n,
                                    index: o
                                } = r[l];
                                throw TypeError("Unexpected ".concat(n, " at ").concat(o, ", expected ").concat(e))
                            },
                            p = () => {
                                let e, t = "";
                                for (; e = c("CHAR") || c("ESCAPED_CHAR");) t += e;
                                return t
                            };
                        for (; l < r.length;) {
                            let e = c("CHAR"),
                                t = c("NAME"),
                                r = c("PATTERN");
                            if (t || r) {
                                let l = e || ""; - 1 === n.indexOf(l) && (s += l, l = ""), s && (a.push(s), s = ""), a.push({
                                    name: t || i++,
                                    prefix: l,
                                    suffix: "",
                                    pattern: r || o,
                                    modifier: c("MODIFIER") || ""
                                });
                                continue
                            }
                            let l = e || c("ESCAPED_CHAR");
                            if (l) {
                                s += l;
                                continue
                            }
                            if (s && (a.push(s), s = ""), c("OPEN")) {
                                let e = p(),
                                    t = c("NAME") || "",
                                    r = c("PATTERN") || "",
                                    n = p();
                                d("CLOSE"), a.push({
                                    name: t || (r ? i++ : ""),
                                    pattern: t && !r ? o : r,
                                    prefix: e,
                                    suffix: n,
                                    modifier: c("MODIFIER") || ""
                                });
                                continue
                            }
                            d("END")
                        }
                        return a
                    }(t, n), r, n)
                }(e, r, t), r, t)
            }

            function u(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function p(e) {
                return e && e.sensitive ? "" : "i"
            }
            let m = e => {
                let {
                    canActivate: t,
                    children: r
                } = e, {
                    navigateToFlowStart: n
                } = (0, s.zk)(), i = (0, l.cL)();
                return (a.useEffect(() => {
                    t(i) || n()
                }), t(i)) ? (0, o.tZ)(o.HY, {
                    children: r
                }) : null
            };

            function h(e) {
                let t = (0, n.t)();
                if (!e.children) return null;
                if (!e.index && !e.path) return (0, o.tZ)(o.HY, {
                    children: e.children
                });
                if (!t.matches(e.path, e.index)) return null;
                let [r, a] = c(t.indexPath, t.fullPath, e.path, e.index), l = function(e) {
                    let {
                        searchParams: t
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = new URL(e, window.location.origin + a + "/");
                    return t && (r.search = t.toString()), r.pathname = (0, i.Os)(r.pathname), r
                }, s = (e, n) => {
                    let [o, l] = c(r, a, e, n), s = (0, i.Os)(t.currentPath), u = e && d(l + "/:foo*")(s) || n && d(o)(s) || n && d(l)(s) || !1;
                    return !1 !== u && u.params
                }, u = t.getMatchData(e.path, e.index) || {}, p = {};
                for (let [e, t] of Object.entries(u)) p[e] = t;
                let h = (e.flowStart ? (0, i.hb)(t.fullPath).replace("/" + t.basePath, "") : t.flowStartPath) || t.startPath;
                return (0, o.tZ)(n.X.Provider, {
                    value: {
                        basePath: t.basePath,
                        startPath: t.startPath,
                        flowStartPath: h,
                        indexPath: r,
                        fullPath: a,
                        currentPath: t.currentPath,
                        queryParams: t.queryParams,
                        queryString: t.queryString,
                        baseNavigate: t.baseNavigate,
                        getMatchData: s,
                        matches: (e, t) => !!s(e, t),
                        resolve: l,
                        navigate: function(e) {
                            let {
                                searchParams: r
                            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = l(e, {
                                searchParams: r
                            });
                            return t.baseNavigate(n)
                        },
                        refresh: t.refresh,
                        params: p,
                        urlStateParam: t.urlStateParam
                    },
                    children: e.canActivate ? (0, o.tZ)(m, {
                        canActivate: e.canActivate,
                        children: e.children
                    }) : e.children
                })
            }
            let g = e => {
                    let {
                        basePath: t,
                        startPath: r,
                        getPath: u,
                        getQueryString: p,
                        internalNavigate: m,
                        refreshEvents: g,
                        preservedParams: f,
                        urlStateParam: v,
                        children: b
                    } = e, {
                        navigate: y
                    } = (0, l.cL)(), [x, w] = a.useState({
                        path: u(),
                        queryString: p()
                    }), S = x.path, C = x.queryString, _ = (0, i.vl)(x.queryString), k = (e, t) => {
                        let [r, n] = c("", "", e, t), o = (0, i.Os)(S), a = e && d(n + "/:foo*")(o) || t && d(r)(o) || t && d(n)(o) || !1;
                        return !1 !== a && a.params
                    }, $ = a.useCallback(() => {
                        let e = u(),
                            t = p();
                        (e !== S || t !== C) && w({
                            path: e,
                            queryString: t
                        })
                    }, [S, C, u, p]);
                    (0, s.Fm)(g, $);
                    let I = async e => {
                        if (!e) return;
                        let r = e.origin !== window.location.origin;
                        if (!e.pathname.startsWith("/" + t) || r) {
                            let t = await y(e.href);
                            return $(), t
                        }
                        if (f) {
                            let t = (0, i.vl)(e.search);
                            f.forEach(e => {
                                !t[e] && _[e] && (t[e] = _[e])
                            }), e.search = (0, i.f0)(t)
                        }
                        let n = await m(e, {
                            metadata: {
                                navigationType: "internal"
                            }
                        });
                        return w({
                            path: e.pathname,
                            queryString: e.search
                        }), n
                    };
                    return (0, o.tZ)(n.X.Provider, {
                        value: {
                            basePath: t,
                            startPath: r,
                            flowStartPath: r,
                            fullPath: "",
                            indexPath: "",
                            currentPath: S,
                            queryString: C,
                            queryParams: _,
                            getMatchData: k.bind(void 0),
                            matches: ((e, t) => !!k(e, t)).bind(void 0),
                            baseNavigate: I.bind(void 0),
                            navigate: async () => {},
                            resolve: (e => new URL(e, window.location.origin)).bind(void 0),
                            refresh: $.bind(void 0),
                            params: {},
                            urlStateParam: v
                        },
                        children: (0, o.tZ)(h, {
                            path: t,
                            children: b
                        })
                    })
                },
                f = "CLERK-ROUTER/HASH",
                v = e => {
                    let {
                        preservedParams: t,
                        children: r
                    } = e, n = async e => {
                        if (e) return window.location.hash = (0, i.M)(e).substring(1 + f.length), Promise.resolve()
                    }, a = () => new URL((0, i.eT)(window.location.hash) ? window.location.origin + window.location.hash.substring(1) : window.location.origin);
                    return (0, o.tZ)(g, {
                        getPath: () => "/" === a().pathname ? "/" + f : "/" + f + a().pathname,
                        basePath: f,
                        startPath: "",
                        getQueryString: () => a().search,
                        internalNavigate: n,
                        refreshEvents: ["popstate", "hashchange"],
                        preservedParams: t,
                        children: r
                    })
                },
                b = e => {
                    let {
                        basePath: t,
                        preservedParams: r,
                        children: n
                    } = e, {
                        navigate: s
                    } = (0, l.cL)(), [c, d] = a.useState(!1);
                    if (!s) throw Error("Clerk: Missing navigate option.");
                    let u = (e, t) => {
                        if (e) return s((0, i.M)(e), t)
                    };
                    return (a.useEffect(() => {
                        (async () => {
                            if ((0, i.eT)(window.location.hash)) {
                                let e = (0, i.z9)(new URL(window.location.href));
                                await u(e.href, {
                                    replace: !0
                                }), d(!0)
                            }
                        })()
                    }, [d, s, window.location.hash]), (0, i.eT)(window.location.hash) && !c) ? null : (0, o.tZ)(g, {
                        basePath: t.substring(1),
                        startPath: "",
                        getPath: () => window.location.pathname,
                        getQueryString: () => window.location.search,
                        internalNavigate: u,
                        refreshEvents: ["popstate"],
                        preservedParams: r,
                        children: n
                    })
                },
                y = "CLERK-ROUTER/VIRTUAL",
                x = e => {
                    let {
                        startPath: t,
                        preservedParams: r,
                        onExternalNavigate: n,
                        children: i
                    } = e, {
                        __internal_addNavigationListener: c
                    } = (0, l.cL)(), [d, u] = a.useState(new URL("/" + y + t, window.location.origin)), {
                        urlStateParam: p,
                        removeQueryParam: m
                    } = (0, s._6)();
                    return (0, a.useEffect)(() => {
                        let e = () => {};
                        return n && (e = c(n)), () => {
                            e()
                        }
                    }, []), p.componentName && m(), (0, o.tZ)(g, {
                        getPath: () => d.pathname,
                        basePath: y,
                        startPath: t,
                        getQueryString: () => d.search,
                        internalNavigate: e => {
                            e && u(e)
                        },
                        preservedParams: r,
                        urlStateParam: p,
                        children: i
                    })
                };

            function w(e) {
                let {
                    children: t
                } = e, r = (0, n.t)(), i = null;
                return a.Children.forEach(t, e => {
                    if (i || !(e && a.isValidElement(e) && "object" == typeof e && e.type === h)) return;
                    let {
                        index: t,
                        path: n
                    } = e.props;
                    (!t && !n || r.matches(n, t)) && (i = e)
                }), (0, o.tZ)(o.HY, {
                    children: i
                })
            }
        },
        6560: function(e, t, r) {
            r.r(t), r.d(t, {
                StyleCacheProvider: () => s
            });
            var n = r(9755),
                o = r(1036),
                a = r(5992),
                i = r(9144);
            let l = document.querySelector("style#cl-style-insertion-point"),
                s = e => {
                    let t = (0, i.useMemo)(() => (0, o.Z)({
                        key: "cl-internal",
                        prepend: !l,
                        insertionPoint: l || void 0,
                        nonce: e.nonce
                    }), [e.nonce]);
                    return (0, n.tZ)(a.C, {
                        value: t,
                        children: e.children
                    })
                }
        },
        5295: function(e, t, r) {
            r.r(t), r.d(t, {
                createVariants: () => c,
                InternalThemeProvider: () => i,
                createCssVariables: () => b,
                mqu: () => K,
                animations: () => H,
                common: () => x
            });
            var n = r(9755),
                o = r(5992);
            r(9144);
            var a = r(3064);
            let i = e => {
                let {
                    parsedInternalTheme: t
                } = (0, a.useAppearance)();
                return (0, n.tZ)(o.a, {
                    theme: t,
                    children: e.children
                })
            };
            var l = r(1826),
                s = r(2539);
            let c = e => {
                    let t = (0, s.dC)(),
                        r = Object.keys(e(t, t).variants || {});
                    return {
                        applyVariants: function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return r => {
                                let {
                                    base: n,
                                    variants: o = {},
                                    compoundVariants: a = [],
                                    defaultVariants: i = {}
                                } = e(r, t), l = g(o, t, i), s = {};
                                return u(s, n), p(s, l, o), m(s, l, a), h(s), s
                            }
                        },
                        filterProps: e => d(e, r)
                    }
                },
                d = (e, t) => {
                    let r = { ...e
                    };
                    for (let e of t) delete r[e];
                    return r
                },
                u = (e, t) => {
                    t && "object" == typeof t && Object.assign(e, t)
                },
                p = (e, t, r) => {
                    for (let n in t)(0, l.EB)(r[n][t[n]], e)
                },
                m = (e, t, r) => {
                    for (let n of r) f(n, t) && (0, l.EB)(n.styles, e)
                },
                h = e => {
                    for (let t in e) t.startsWith("var(") && (e[t.slice(4, -1)] = e[t], delete e[t])
                },
                g = (e, t, r) => {
                    let n = {};
                    for (let o in e) o in t ? n[o] = t[o] : o in r && (n[o] = r[o]);
                    return n
                },
                f = (e, t) => {
                    let {
                        condition: r
                    } = e;
                    for (let e in r)
                        if (r[e] !== t[e]) return !1;
                    return !0
                };
            var v = r(2041);
            let b = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return (0, v.s)(t.map(e => [e, "var(--".concat(e, ")")]))
                },
                y = e => ({
                    "::-webkit-scrollbar": {
                        background: "transparent",
                        width: "8px",
                        height: "8px"
                    },
                    "::-webkit-scrollbar-thumb": {
                        background: e.colors.$neutralAlpha500
                    },
                    "::-webkit-scrollbar-track": {
                        background: "transparent"
                    }
                }),
                x = {
                    textVariants: e => {
                        let t = {
                                fontFamily: "inherit",
                                letterSpacing: e.letterSpacings.$normal
                            },
                            r = { ...t,
                                fontWeight: e.fontWeights.$semibold,
                                fontSize: e.fontSizes.$xl,
                                lineHeight: e.lineHeights.$extraSmall
                            },
                            n = { ...t,
                                fontWeight: e.fontWeights.$bold,
                                fontSize: e.fontSizes.$lg,
                                lineHeight: e.lineHeights.$medium
                            },
                            o = { ...t,
                                fontWeight: e.fontWeights.$bold,
                                fontSize: e.fontSizes.$md,
                                lineHeight: e.lineHeights.$small
                            },
                            a = { ...t,
                                fontWeight: e.fontWeights.$medium,
                                fontSize: e.fontSizes.$md,
                                lineHeight: e.lineHeights.$small
                            },
                            i = { ...t,
                                fontWeight: e.fontWeights.$normal,
                                fontSize: e.fontSizes.$md,
                                lineHeight: e.lineHeights.$small
                            },
                            l = { ...t,
                                fontWeight: e.fontWeights.$medium,
                                fontSize: e.fontSizes.$xs,
                                lineHeight: e.lineHeights.$large
                            };
                        return {
                            h1: r,
                            h2: n,
                            h3: o,
                            subtitle: a,
                            body: i,
                            caption: l,
                            buttonLarge: { ...t,
                                fontWeight: e.fontWeights.$medium,
                                fontSize: e.fontSizes.$md,
                                lineHeight: e.lineHeights.$small,
                                fontFamily: e.fonts.$buttons
                            },
                            buttonSmall: { ...t,
                                fontWeight: e.fontWeights.$medium,
                                fontSize: e.fontSizes.$sm,
                                lineHeight: e.lineHeights.$extraSmall,
                                fontFamily: e.fonts.$buttons
                            }
                        }
                    },
                    borderVariants: (e, t) => {
                        let r = (null == t ? void 0 : t.hasError) ? e.colors.$dangerAlpha500 : e.colors.$neutralAlpha300,
                            n = e.shadows.$input.replace("{{color}}", (null == t ? void 0 : t.hasError) ? e.colors.$dangerAlpha200 : e.colors.$neutralAlpha150),
                            o = (null == t ? void 0 : t.focusRing) === !1 ? {} : {
                                "&:focus": {
                                    borderColor: r,
                                    WebkitTapHighlightColor: "transparent",
                                    boxShadow: [n, e.shadows.$focusRing.replace("{{color}}", (null == t ? void 0 : t.hasError) ? e.colors.$dangerAlpha200 : e.colors.$neutralAlpha150)].toString()
                                }
                            };
                        return {
                            normal: {
                                borderRadius: e.radii.$md,
                                borderWidth: e.borderWidths.$normal,
                                borderStyle: e.borderStyles.$solid,
                                borderColor: (null == t ? void 0 : t.hasError) ? e.colors.$dangerAlpha500 : e.colors.$neutralAlpha150,
                                boxShadow: e.shadows.$input.replace("{{color}}", (null == t ? void 0 : t.hasError) ? e.colors.$neutralAlpha150 : e.colors.$neutralAlpha100),
                                transitionProperty: e.transitionProperty.$common,
                                transitionTimingFunction: e.transitionTiming.$common,
                                transitionDuration: e.transitionDuration.$focusRing,
                                "&:hover": {
                                    WebkitTapHighlightColor: "transparent",
                                    borderColor: r,
                                    boxShadow: n
                                },
                                ...o
                            }
                        }
                    },
                    focusRing: e => ({
                        "&:focus": {
                            "&::-moz-focus-inner": {
                                border: "0"
                            },
                            WebkitTapHighlightColor: "transparent",
                            boxShadow: e.shadows.$focusRing.replace("{{color}}", e.colors.$neutralAlpha200),
                            transitionProperty: e.transitionProperty.$common,
                            transitionTimingFunction: e.transitionTiming.$common,
                            transitionDuration: e.transitionDuration.$focusRing
                        }
                    }),
                    disabled: e => ({
                        "&:disabled,&[data-disabled]": {
                            cursor: "not-allowed",
                            pointerEvents: "none",
                            opacity: e.opacity.$disabled
                        }
                    }),
                    borderColor: (e, t) => ({
                        borderColor: (null == t ? void 0 : t.hasError) ? e.colors.$dangerAlpha500 : e.colors.$neutralAlpha150
                    }),
                    centeredFlex: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "flex";
                        return {
                            display: e,
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    },
                    maxHeightScroller: e => ({
                        height: "100%",
                        overflowY: "auto",
                        ...y(e)
                    }),
                    unstyledScrollbar: y,
                    mergedColorsBackground: (e, t) => "linear-gradient(".concat(t, ",").concat(t, "), linear-gradient(").concat(e, ", ").concat(e, ")")
                };
            var w = r(3534),
                S = r(7622);

            function C() {
                let e = (0, w._)(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }"]);
                return C = function() {
                    return e
                }, e
            }

            function _() {
                let e = (0, w._)(["\n  0% {\n    opacity: 0;\n    transform: scaleY(1) translateY(-6px);\n  }\n  100% {\n    opacity: 1;\n    transform: scaleY(1)  translateY(0px);\n  }\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function k() {
                let e = (0, w._)(["\n  0% {\n    opacity: 0;\n    transform: translateY(0.5rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]);
                return k = function() {
                    return e
                }, e
            }

            function $() {
                let e = (0, w._)(["\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n"]);
                return $ = function() {
                    return e
                }, e
            }

            function I() {
                let e = (0, w._)(["\n  0% {\n    opacity: 0;\n    transform: translateY(-5px);\n    max-height: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    max-height: 6rem;\n  }\n"]);
                return I = function() {
                    return e
                }, e
            }

            function P() {
                let e = (0, w._)(["\n  0% {\n    opacity: 0;\n    transform: translateY(-5px);\n    max-height: 0;\n  }\n  50% {\n    opacity: 0;\n    transform: translateY(-5px);\n    max-height: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    max-height: 6rem;\n  }\n"]);
                return P = function() {
                    return e
                }, e
            }

            function A() {
                let e = (0, w._)(["\n  0% {\n    opacity: 0;\n    transform: translateY(5px) scale(.5);\n  }\n\n  50% {\n    opacity: 1;\n    transform: translateY(0px) scale(1.2);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0px) scale(1);\n  }\n"]);
                return A = function() {
                    return e
                }, e
            }

            function B() {
                let e = (0, w._)(["\n  0% {\n    opacity:1;\n    transform: translateY(0px);\n    max-height: 6rem;\n    visibility: visible;\n  }  \n  100% {\n    opacity: 0;\n    transform: translateY(5px);\n    max-height: 0;\n    visibility: visible;\n  }\n"]);
                return B = function() {
                    return e
                }, e
            }

            function T() {
                let e = (0, w._)(["\n  0% {opacity: 0;max-height: 0;}\n  100% {opacity: 1;max-height: 3rem;}\n"]);
                return T = function() {
                    return e
                }, e
            }

            function Z() {
                let e = (0, w._)(["\n  0% {opacity: 0;max-height: 0;}\n  100% {opacity: 1;max-height: 8rem;}\n"]);
                return Z = function() {
                    return e
                }, e
            }

            function R() {
                let e = (0, w._)(["\n  0% {opacity: 0;max-height: 0;}\n  99% {opacity: 1;max-height: 10rem;}\n  100% {opacity: 1;max-height: unset;}\n"]);
                return R = function() {
                    return e
                }, e
            }

            function z() {
                let e = (0, w._)(["\n  0% {opacity: 0;max-height: 0;}\n  99% {opacity: 1;max-height: ", ";}\n  100% {opacity: 1;max-height: unset;}\n"]);
                return z = function() {
                    return e
                }, e
            }

            function L() {
                let e = (0, w._)(["\n  0% {opacity: 0; transform: translateX(-100%);}\n  100% {opacity: 1; transform: translateX(0);}\n"]);
                return L = function() {
                    return e
                }, e
            }
            let E = (0, S.F4)(C()),
                D = (0, S.F4)(_()),
                O = (0, S.F4)(k()),
                F = (0, S.F4)($()),
                M = (0, S.F4)(I()),
                U = (0, S.F4)(P()),
                j = (0, S.F4)(A()),
                V = (0, S.F4)(B()),
                W = (0, S.F4)(T()),
                N = (0, S.F4)(Z()),
                H = {
                    spinning: E,
                    dropdownSlideInScaleAndFade: D,
                    modalSlideAndFade: O,
                    fadeIn: F,
                    textInSmall: W,
                    textInBig: N,
                    blockBigIn: (0, S.F4)(R()),
                    expandIn: e => (0, S.F4)(z(), e),
                    navbarSlideIn: (0, S.F4)(L()),
                    inAnimation: M,
                    inDelayAnimation: U,
                    outAnimation: V,
                    notificationAnimation: j
                },
                X = Object.freeze({
                    xs: "21em",
                    sm: "30em",
                    md: "48em",
                    lg: "62em",
                    xl: "80em",
                    "2xl": "96em"
                }),
                K = {
                    ios: "@supports (-webkit-touch-callout: none)",
                    ...(0, v.s)(Object.entries(X).map(e => {
                        let [t, r] = e;
                        return [t, "@media (max-width: ".concat(r, ")")]
                    }))
                }
        },
        4929: function(e, t, r) {
            r.d(t, {
                I: () => c,
                Q: () => d
            });
            var n = r(6747),
                o = r(2041);
            let a = ["25", "50", "100", "150", "200", "300", "400"].reverse(),
                i = ["600", "700", "750", "800", "850", "900", "950"],
                l = [...[...a].reverse(), "500", ...i];

            function s() {
                return {
                    25: void 0,
                    50: void 0,
                    100: void 0,
                    150: void 0,
                    200: void 0,
                    300: void 0,
                    400: void 0,
                    500: void 0,
                    600: void 0,
                    700: void 0,
                    750: void 0,
                    800: void 0,
                    850: void 0,
                    900: void 0,
                    950: void 0
                }
            }
            let c = (e, t) => u(e, t, v),
                d = (e, t) => p(e, t, f),
                u = (e, t, r) => {
                    if (e) {
                        if ("object" == typeof e && !l.every(t => t in e)) throw Error("You need to provide all the following shades: " + l.join(", "));
                        return "object" == typeof e ? h(Object.keys(e).reduce((t, r) => (t[r] = n.O.toHslaColor(e[r]), t), s()), t) : h(r(n.O.toHslaColor(e)), t)
                    }
                },
                p = (e, t, r) => {
                    if (!e) return;
                    if ("object" == typeof e && !e["500"]) throw Error("You need to provide at least the 500 shade");
                    let n = g(e);
                    return h(m(r(n["500"]), n), t)
                },
                m = (e, t) => (0, o.s)(Object.entries(t).map(t => {
                    let [r, n] = t;
                    return [r, n || e[r]]
                })),
                h = (e, t) => {
                    let r = {};
                    for (let o in e) e[o] && (r[t + o] = n.O.toHslaString(e[o]));
                    return r
                },
                g = e => {
                    let t = "string" == typeof e ? {
                            500: e
                        } : e,
                        r = Object.keys(s()).map(e => [e, t[e] ? n.O.toHslaColor(t[e]) : void 0]);
                    return (0, o.s)(r)
                },
                f = e => {
                    let t = s();
                    t["500"] = e;
                    let r = (97 - e.l) / a.length,
                        o = (e.l - 12) / i.length;
                    return a.forEach((o, a) => t[o] = n.O.changeHslaLightness(e, (a + 1) * r)), i.map((r, a) => t[r] = n.O.changeHslaLightness(e, -((a + 1) * o * 1))), t
                },
                v = e => {
                    let t = s(),
                        r = n.O.setHslaAlpha(e, 0),
                        o = [.02, .03, .07, .11, .15, .28, .41, .53, .62, .73, .78, .81, .84, .87, .92];
                    return Object.keys(t).forEach((e, a) => t[e] = n.O.setHslaAlpha(r, o[a])), t
                }
        },
        6747: function(e, t, r) {
            r.d(t, {
                O: () => $
            });
            let n = /^#([a-f0-9]{3,4})$/i,
                o = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
                a = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
                i = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
                l = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
                s = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
                c = {
                    black: [0, 0, 0, 1],
                    blue: [0, 0, 255, 1],
                    red: [255, 0, 0, 1],
                    green: [0, 128, 0, 1],
                    grey: [128, 128, 128, 1],
                    gray: [128, 128, 128, 1],
                    white: [255, 255, 255, 1],
                    yellow: [255, 255, 0, 1],
                    transparent: [0, 0, 0, 0]
                },
                d = (e, t, r) => Math.min(Math.max(t, e), r),
                u = e => {
                    let t, r, l;
                    if (!e) return null;
                    let s = [0, 0, 0, 1];
                    if (t = e.match(o)) {
                        for (r = 0, l = t[2], t = t[1]; r < 3; r++) {
                            let e = 2 * r;
                            s[r] = parseInt(t.slice(e, e + 2), 16)
                        }
                        l && (s[3] = parseInt(l, 16) / 255)
                    } else if (t = e.match(n)) {
                        for (r = 0, l = (t = t[1])[3]; r < 3; r++) s[r] = parseInt(t[r] + t[r], 16);
                        l && (s[3] = parseInt(l + l, 16) / 255)
                    } else if (t = e.match(a)) {
                        for (r = 0; r < 3; r++) s[r] = parseInt(t[r + 1], 0);
                        t[4] && (t[5] ? s[3] = .01 * parseFloat(t[4]) : s[3] = parseFloat(t[4]))
                    } else if (t = e.match(i)) {
                        for (r = 0; r < 3; r++) s[r] = Math.round(2.55 * parseFloat(t[r + 1]));
                        t[4] && (t[5] ? s[3] = .01 * parseFloat(t[4]) : s[3] = parseFloat(t[4]))
                    } else if (e in c) return c[e];
                    else return null;
                    for (r = 0; r < 3; r++) s[r] = d(s[r], 0, 255);
                    return s[3] = d(s[3], 0, 1), s
                },
                p = e => {
                    if (!e) return null;
                    let t = e.match(l);
                    return t ? h(t) : null
                },
                m = function(e) {
                    if (!e) return null;
                    let t = e.match(s);
                    return t ? h(t) : null
                },
                h = e => {
                    let t = parseFloat(e[4]),
                        r = (parseFloat(e[1]) % 360 + 360) % 360,
                        n = d(parseFloat(e[2]), 0, 100);
                    return [r, n, d(parseFloat(e[3]), 0, 100), d(isNaN(t) ? 1 : t, 0, 1)]
                },
                g = e => {
                    var t;
                    return {
                        h: e[0],
                        s: e[1],
                        l: e[2],
                        a: null !== (t = e[3]) && void 0 !== t ? t : 1
                    }
                },
                f = e => {
                    var t;
                    let r, n, o, a;
                    let i = e[0] / 360,
                        l = e[1] / 100,
                        s = e[2] / 100,
                        c = null !== (t = e[3]) && void 0 !== t ? t : 1,
                        d = l + s;
                    d > 1 && (l /= d, s /= d);
                    let u = Math.floor(6 * i),
                        p = 1 - s;
                    r = 6 * i - u, (1 & u) != 0 && (r = 1 - r);
                    let m = l + r * (p - l);
                    switch (u) {
                        default:
                            case 6:
                            case 0:
                            n = p,
                        o = m,
                        a = l;
                        break;
                        case 1:
                                n = m,
                            o = p,
                            a = l;
                            break;
                        case 2:
                                n = l,
                            o = p,
                            a = m;
                            break;
                        case 3:
                                n = l,
                            o = m,
                            a = p;
                            break;
                        case 4:
                                n = m,
                            o = l,
                            a = p;
                            break;
                        case 5:
                                n = p,
                            o = l,
                            a = m
                    }
                    return [255 * n, 255 * o, 255 * a, c]
                },
                v = e => {
                    var t;
                    let r;
                    let n = e[0] / 255,
                        o = e[1] / 255,
                        a = e[2] / 255,
                        i = null !== (t = e[3]) && void 0 !== t ? t : 1,
                        l = Math.min(n, o, a),
                        s = Math.max(n, o, a),
                        c = s - l;
                    s === l ? r = 0 : n === s ? r = (o - a) / c : o === s ? r = 2 + (a - n) / c : a === s && (r = 4 + (n - o) / c), (r = Math.min(60 * r, 360)) < 0 && (r += 360);
                    let d = (l + s) / 2;
                    return {
                        h: Math.floor(r),
                        s: Math.floor(100 * (s === l ? 0 : d <= .5 ? c / (s + l) : c / (2 - s - l))),
                        l: Math.floor(100 * d),
                        a: i
                    }
                },
                b = e => v(f(e)),
                y = e => {
                    let {
                        h: t,
                        s: r,
                        l: n,
                        a: o
                    } = e;
                    return "hsla(".concat(t, ", ").concat(r, "%, ").concat(n, "%, ").concat(null != o ? o : 1, ")")
                },
                x = e => {
                    let t;
                    let r = e.substr(0, 3).toLowerCase();
                    if (!(t = "hsl" === r ? {
                            model: "hsl",
                            value: p(e)
                        } : "hwb" === r ? {
                            model: "hwb",
                            value: m(e)
                        } : {
                            model: "rgb",
                            value: u(e)
                        }) || !t.value) throw Error('Clerk: "'.concat(e, "\" cannot be used as a color within 'variables'. You can pass one of:\n- any valid hsl or hsla color\n- any valid rgb or rgba color\n- any valid hex color\n- any valid hwb color\n- ").concat(Object.keys(c).join(", "), "\n"));
                    return t
                },
                w = e => {
                    let {
                        model: t,
                        value: r
                    } = x(e);
                    switch (t) {
                        case "hsl":
                            return g(r);
                        case "hwb":
                            return b(r);
                        case "rgb":
                            return v(r)
                    }
                },
                S = e => "string" == typeof e ? y(w(e)) : y(e),
                C = (e, t) => ({ ...e,
                    l: e.l + t
                }),
                _ = (e, t) => ({ ...e,
                    a: t
                }),
                k = (e, t) => ({ ...e,
                    a: e.a ? e.a - t : void 0
                }),
                $ = {
                    toHslaColor: w,
                    toHslaString: S,
                    adjustForLightness: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
                        if (!e) return;
                        let r = $.toHslaColor(e);
                        return r ? (100 === r.l ? r.l = 95 : r.l = Math.min(r.l + 2 * t, 100), $.toHslaString(r)) : e
                    },
                    changeHslaLightness: C,
                    setHslaAlpha: _,
                    lighten: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (!e) return;
                        let r = w(e);
                        return S(C(r, r.l * t))
                    },
                    makeTransparent: function(e) {
                        var t;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (!e || "" === e.toString()) return;
                        let n = w(e);
                        return S(k(n, (null !== (t = n.a) && void 0 !== t ? t : 1) * r))
                    },
                    makeSolid: e => {
                        if (e) return S({ ...w(e),
                            a: 1
                        })
                    },
                    setAlpha: (e, t) => e.toString() ? S(_(w(e), t)) : e
                }
        },
        577: function(e, t, r) {
            r.d(t, {
                Q0: () => u,
                U6: () => p,
                b8: () => d,
                sZ: () => c
            });
            let n = e => e.reduce((e, t, r) => (e[t] = r, e), {}),
                o = n(["passkey", "password", "email_link", "email_code", "phone_code"]),
                a = n(["email_link", "email_code", "phone_code", "passkey", "password"]),
                i = n(["email_link", "email_code", "phone_code", "passkey", "password"]),
                l = n(["totp", "phone_code", "backup_code"]),
                s = e => (t, r) => {
                    let n = e[t.strategy],
                        o = e[r.strategy];
                    return void 0 === n || void 0 === o ? 0 : n - o
                },
                c = s(o),
                d = s(a),
                u = s(l),
                p = s(i)
        },
        2041: function(e, t, r) {
            r.d(t, {
                s: () => n
            });
            let n = e => [...e].reduce((e, t) => {
                let [r, n] = t;
                return e[r] = n, e
            }, {})
        },
        2539: function(e, t, r) {
            r.d(t, {
                uz: () => h,
                BG: () => ei,
                Oi: () => j,
                sn: () => el,
                Yp: () => $.Yp,
                fq: () => eL,
                y3: () => b,
                Nr: () => o,
                JD: () => U,
                zQ: () => Z,
                s2: () => u,
                QD: () => eS.Q,
                WR: () => O,
                qT: () => er,
                yy: () => f,
                w6: () => E,
                Qg: () => N,
                Q0: () => s.Q0,
                $M: () => q,
                un: () => g,
                L_: () => y,
                HT: () => C,
                Sj: () => S,
                S3: () => T,
                lq: () => H,
                Yb: () => _,
                U6: () => s.U6,
                ni: () => $.ni,
                dC: () => a,
                sq: () => n.s,
                Ii: () => eS.I,
                Z_: () => w,
                z$: () => G,
                _v: () => c,
                qi: () => X,
                Ai: () => k,
                O9: () => l.O,
                c8: () => eC,
                GM: () => Y,
                Ht: () => eD,
                k_: () => i.k_
            });
            var n = r(2041);
            let o = () => e => e,
                a = () => {
                    let e = new Proxy({}, {
                        get: (t, r) => r === Symbol.toPrimitive ? () => "" : r in Object.getPrototypeOf("") ? e => Object.getPrototypeOf("")[r].call("", e) : r === Symbol.toPrimitive ? () => "" : e
                    });
                    return e
                };
            var i = r(8545),
                l = r(6747),
                s = r(577);
            let c = e => new Promise(t => setTimeout(t, e)),
                d = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
                u = () => "undefined" != typeof window && void 0 !== window.document && !!(window.matchMedia("only screen and (max-width: 760px)").matches || d.test(navigator.userAgent) || "ontouchstart" in document.documentElement && navigator.userAgent.match(/Mobi/));
            var p = r(8191);
            let m = {};

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "us";
                if (m[e = e || t]) return m[e];
                let r = String.fromCodePoint(...[...e.toUpperCase()].map(e => e.codePointAt(0) + 127397));
                return m[e] = r, r
            }

            function g(e, t, r) {
                var n;
                if (!e || !t) return e;
                let o = [...f(e)].slice(0, 15 - ((n = (n = r) || "1").includes("+") ? n : "+" + n).length);
                if (o.length <= 3) return o.join("");
                let a = "";
                for (let e = 0; o.length > 0; e++) e > t.length - 1 ? a += o.shift() : a += "." === t[e] ? o.shift() : t[e];
                return a
            }

            function f(e) {
                return (e || "").replace(/[^\d]/g, "")
            }

            function v(e, t) {
                var r, n;
                if (!e || !p.h5.get(e) || !t) return !1;
                let o = t[0],
                    a = t.substring(1, 4);
                return o === (null === (r = p.h5.get(e)) || void 0 === r ? void 0 : r.code) && t.length - 1 === (((null === (n = p.h5.get(e)) || void 0 === n ? void 0 : n.pattern) || "").match(/\./g) || []).length && p.ug[e].has(a)
            }

            function b(e) {
                var t, r;
                let n = f(e),
                    o = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "us",
                            r = f(e);
                        return !r || r.length < 4 ? t : r.startsWith("1") && v("us", r) ? "us" : r.startsWith("1") && v("ca", r) ? "ca" : w(r).country.iso
                    }(n),
                    a = (null === (t = p.h5.get(o)) || void 0 === t ? void 0 : t.pattern) || "",
                    i = (null === (r = p.h5.get(o)) || void 0 === r ? void 0 : r.code) || "",
                    l = n.slice(i.length),
                    s = "+".concat(i, " ").concat(g(l, a, i));
                return {
                    iso: o,
                    pattern: a,
                    code: i,
                    number: l,
                    formattedNumberWithCode: s
                }
            }

            function y(e) {
                let t = b(e);
                return "+".concat(t.code, " ").concat(g(t.number, t.pattern, t.code))
            }
            let x = (e, t) => t.priority - e.priority;

            function w(e) {
                let t = f(e),
                    r = [];
                for (let e of [4, 3, 2, 1]) {
                    let n = t.substring(0, e),
                        o = p.nX.get(n) || [];
                    o.length && r.push(...o)
                }
                let n = p.h5.get("us"),
                    o = r.sort(x)[0] || n;
                return {
                    number: t.slice((null == o ? void 0 : o.code.length) || 0),
                    country: o
                }
            }
            let S = e => e && e.includes("**"),
                C = e => !e || e.includes("@") || S(e) || e.match(/[a-zA-Z]/) ? e : y(e),
                _ = e => (Object.keys(e).forEach(t => void 0 === e[t] && delete e[t]), e),
                k = (e, t) => {
                    let r = (t || "").split("."),
                        n = e;
                    for (let e = 0; e < r.length; e++)
                        if (void 0 === (n = n[r[e]])) return;
                    return n
                };
            var $ = r(6788),
                I = r(5027),
                P = r(7771);
            let A = e => e[0];

            function B(e) {
                return (e || []).reduce((e, t) => (t.meta.paramName ? e.fieldErrors.push(t) : e.globalErrors.push(t), e), {
                    fieldErrors: [],
                    globalErrors: []
                })
            }
            let T = (e, t, r) => {
                if (!(0, P.sZ)(e)) throw e;
                return (0, P.ZC)(e) ? R(e, t, r) : (0, P.kD)(e) ? z(e, t, r) : (0, P.uX)(e) && "reverification_cancelled" === e.code ? void 0 : (0, P.uX)(e) ? L(e, t, r) : void 0
            };

            function Z(e) {
                if (!(0, P.kD)(e)) return;
                let {
                    fieldErrors: t
                } = B(e.errors);
                if (t.length) return t[0]
            }
            let R = (e, t, r) => null == r ? void 0 : r(e.message),
                z = (e, t, r) => {
                    var n, o;
                    if (!(0, P.kD)(e)) return;
                    let {
                        fieldErrors: a,
                        globalErrors: i
                    } = B(e.errors);
                    if (n = t, !(o = a) || o.length < 1 || n.forEach(e => {
                            let t = null == e ? void 0 : e.buildErrorMessage;
                            t || (t = A);
                            let r = o.filter(t => t.meta.paramName === e.id || (0, I.TD)(t.meta.paramName) === e.id),
                                n = t(r);
                            r.length && n ? e.setError(n) : e.clearFeedback()
                        }), r) {
                        r(void 0);
                        let e = i[0];
                        e && r(e)
                    }
                },
                L = (e, t, r) => {
                    (0, P.uX)(e) && r && (r(void 0), e && r(e))
                },
                E = (e, t) => Array.from({
                    length: t - e + 1
                }, (t, r) => e + r);
            var D = r(9144);

            function O(e) {
                return D.Children.toArray(e).filter(e => D.isValidElement(e))
            }
            var F = r(5059);
            let M = {
                    basic_member: (0, F.u)("membershipRole__basicMember"),
                    guest_member: (0, F.u)("membershipRole__guestMember"),
                    admin: (0, F.u)("membershipRole__admin")
                },
                U = e => {
                    if (e) return M[e]
                },
                j = e => {
                    if (e) return (0, F.u)("roles.".concat(e))
                };
            var V = r(8387),
                W = r(1085);
            let N = e => {
                    let t = (0, V.lY)({
                        date: e || new Date,
                        relativeTo: new Date
                    });
                    if (!t) return "";
                    switch (t.relativeDateCase) {
                        case "previous6Days":
                            return (0, W.u1)("dates.previous6Days", {
                                date: t.date
                            });
                        case "lastDay":
                            return (0, W.u1)("dates.lastDay", {
                                date: t.date
                            });
                        case "sameDay":
                            return (0, W.u1)("dates.sameDay", {
                                date: t.date
                            });
                        case "nextDay":
                            return (0, W.u1)("dates.nextDay", {
                                date: t.date
                            });
                        case "next6Days":
                            return (0, W.u1)("dates.next6Days", {
                                date: t.date
                            });
                        default:
                            return (0, W.u1)("dates.numeric", {
                                date: t.date
                            })
                    }
                },
                H = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return e => {
                        for (let r of t) r && (r.current = e)
                    }
                },
                X = e => e.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                K = e => ({
                    form_password_length_too_long: ["unstable__errors.passwordComplexity.maximumLength", "length", e.max_length],
                    form_password_length_too_short: ["unstable__errors.passwordComplexity.minimumLength", "length", e.min_length],
                    form_password_no_uppercase: "unstable__errors.passwordComplexity.requireUppercase",
                    form_password_no_lowercase: "unstable__errors.passwordComplexity.requireLowercase",
                    form_password_no_number: "unstable__errors.passwordComplexity.requireNumbers",
                    form_password_no_special_char: "unstable__errors.passwordComplexity.requireSpecialCharacter"
                }),
                Y = (e, t) => {
                    var r, n, o, a, i, l, s, c;
                    if (!t) return e[0].longMessage;
                    let {
                        t: d,
                        locale: u,
                        passwordSettings: p
                    } = t;
                    if ((null == e ? void 0 : null === (r = e[0]) || void 0 === r ? void 0 : r.code) === "form_password_size_in_bytes_exceeded" || (null == e ? void 0 : null === (n = e[0]) || void 0 === n ? void 0 : n.code) === "form_password_pwned") return "".concat(d((0, F.u)("unstable__errors.".concat(null == e ? void 0 : null === (a = e[0]) || void 0 === a ? void 0 : a.code))) || (null == e ? void 0 : null === (i = e[0]) || void 0 === i ? void 0 : i.message));
                    if ((null == e ? void 0 : null === (o = e[0]) || void 0 === o ? void 0 : o.code) === "form_password_not_strong_enough") {
                        let t = null === (c = e[0].meta) || void 0 === c ? void 0 : null === (s = c.zxcvbn) || void 0 === s ? void 0 : null === (l = s.suggestions) || void 0 === l ? void 0 : l.map(e => d((0, F.u)("unstable__errors.zxcvbn.suggestions.".concat(e.code)))).join(" ");
                        return "".concat(d((0, F.u)("unstable__errors.zxcvbn.notEnough")), " ").concat(t)
                    }
                    let m = e.filter(e => "form_password_length_too_short" === e.code),
                        h = G((m.length ? m : e).map(e => {
                            let t = K(p)[e.code];
                            if (Array.isArray(t)) {
                                let [e, r, n] = t;
                                return d((0, F.u)(e, {
                                    [r]: n
                                }))
                            }
                            return d((0, F.u)(t))
                        }), u);
                    return q("".concat(d((0, F.u)("unstable__errors.passwordComplexity.sentencePrefix")), " ").concat(h))
                },
                q = e => e ? e.endsWith(".") ? e : "".concat(e, ".") : "",
                G = (e, t) => {
                    let r;
                    return (0, i.k_)(t) ? new Intl.ListFormat(t, {
                        style: "long",
                        type: "conjunction"
                    }).format(e) : e.join(", ")
                };
            var J = r(9755),
                Q = r(1235),
                ee = r(1673),
                et = r(8655);
            let er = e => {
                let {
                    mount: t,
                    unmount: r,
                    ...n
                } = e, o = (0, D.useRef)(null);
                return (0, D.useEffect)(() => {
                    let e;
                    return o.current && (e = o.current, t(o.current)), () => {
                        r(e)
                    }
                }, [o.current]), (0, J.tZ)("div", {
                    ref: o,
                    ...n
                })
            };
            var en = r(1826);
            let eo = e => {
                    var t;
                    return (0, en.vf)() || (null === (t = e.sdkMetadata) || void 0 === t ? void 0 : t.environment) === "development"
                },
                ea = e => {
                    if (!e) throw Error("Clerk: URL is required for custom links");
                    return (0, Q.jv)(e) ? e : "/" === e.charAt(0) ? e : "/".concat(e)
                },
                ei = (e, t) => es({
                    customPages: e,
                    getDefaultRoutes: ex,
                    setFirstPathToRoot: ed,
                    excludedPathsFromDuplicateWarning: []
                }, t),
                el = (e, t) => es({
                    customPages: e,
                    getDefaultRoutes: ew,
                    setFirstPathToRoot: eu,
                    excludedPathsFromDuplicateWarning: []
                }, t),
                es = (e, t) => {
                    let {
                        customPages: r,
                        getDefaultRoutes: n,
                        setFirstPathToRoot: o,
                        excludedPathsFromDuplicateWarning: a
                    } = e, {
                        INITIAL_ROUTES: i,
                        pageToRootNavbarRouteMap: l,
                        validReorderItemLabels: s
                    } = n();
                    eo(t) && ep(r, s);
                    let {
                        allRoutes: c,
                        contents: d
                    } = ec({
                        customPages: r.filter(e => !!eh(e, s) || (eo(t) && console.error("Clerk: Invalid custom page data: ", e), !1)),
                        defaultRoutes: i
                    });
                    ey(c);
                    let u = o(c);
                    return eo(t) && em(u, a), {
                        routes: u,
                        contents: d,
                        pageToRootNavbarRouteMap: l
                    }
                },
                ec = e => {
                    let {
                        customPages: t,
                        defaultRoutes: r
                    } = e, n = r.map(e => e), o = [], a = t.map((e, t) => {
                        if (ef(e)) return {
                            name: e.label,
                            id: "custom-page-".concat(t),
                            icon: t => (0, J.tZ)(er, {
                                mount: e.mountIcon,
                                unmount: e.unmountIcon,
                                ...t
                            }),
                            path: ea(e.url),
                            external: !0
                        };
                        if (eg(e)) {
                            let r = eb(e.url);
                            return o.push({
                                url: r,
                                mount: e.mount,
                                unmount: e.unmount
                            }), {
                                name: e.label,
                                id: "custom-page-".concat(t),
                                icon: t => (0, J.tZ)(er, {
                                    mount: e.mountIcon,
                                    unmount: e.unmountIcon,
                                    ...t
                                }),
                                path: r
                            }
                        }
                        let a = r.find(t => t.id === e.label);
                        return n = n.filter(t => {
                            let {
                                id: r
                            } = t;
                            return r !== e.label
                        }), { ...a
                        }
                    });
                    return {
                        allRoutes: [...n, ...a],
                        contents: o
                    }
                },
                ed = e => e.map((e, t) => 0 === t ? { ...e,
                    path: "/"
                } : e),
                eu = e => e.map((e, t) => 0 === t ? { ...e,
                    path: "/"
                } : e),
                ep = (e, t) => {
                    e.filter(e => ev(e, t)).reduce((e, t) => (e.includes(t.label) && console.error('Clerk: The "'.concat(t.label, '" item is used more than once when reordering pages. This may cause unexpected behavior.')), [...e, t.label]), [])
                },
                em = (e, t) => {
                    let r = e.filter(e => {
                        let {
                            external: r,
                            path: n
                        } = e;
                        return !r && t.every(e => e !== n)
                    }).map(e => {
                        let {
                            path: t
                        } = e;
                        return t
                    });
                    r.filter((e, t) => r.indexOf(e) !== t).forEach(e => {
                        console.error('Clerk: Duplicate path "'.concat(e, '" found in custom pages. This may cause unexpected behavior.'))
                    })
                },
                eh = (e, t) => eg(e) || ef(e) || ev(e, t),
                eg = e => !!e.url && !!e.label && !!e.mount && !!e.unmount && !!e.mountIcon && !!e.unmountIcon,
                ef = e => !!e.url && !!e.label && !e.mount && !e.unmount && !!e.mountIcon && !!e.unmountIcon,
                ev = (e, t) => !e.url && !e.mount && !e.unmount && !e.mountIcon && !e.unmountIcon && t.some(t => t === e.label),
                eb = e => {
                    if (!e) throw Error("Clerk: URL is required for custom pages");
                    if ((0, Q.jv)(e)) throw Error("Clerk: Absolute URLs are not supported for custom pages");
                    return "/" === e.charAt(0) && e.length > 1 ? e.substring(1) : e
                },
                ey = e => {
                    if (e[0].external) throw Error("Clerk: The first route cannot be a custom external link component")
                },
                ex = () => {
                    let e = [{
                            name: (0, W.u1)("userProfile.navbar.account"),
                            id: ee.xM.ACCOUNT,
                            icon: et.n5,
                            path: "account"
                        }, {
                            name: (0, W.u1)("userProfile.navbar.security"),
                            id: ee.xM.SECURITY,
                            icon: et.qy,
                            path: "security"
                        }],
                        t = {
                            profile: e.find(e => e.id === ee.xM.ACCOUNT),
                            "email-address": e.find(e => e.id === ee.xM.ACCOUNT),
                            "phone-number": e.find(e => e.id === ee.xM.ACCOUNT),
                            "connected-account": e.find(e => e.id === ee.xM.ACCOUNT),
                            "web3-wallet": e.find(e => e.id === ee.xM.ACCOUNT),
                            username: e.find(e => e.id === ee.xM.ACCOUNT),
                            "multi-factor": e.find(e => e.id === ee.xM.SECURITY),
                            password: e.find(e => e.id === ee.xM.SECURITY)
                        },
                        r = e.map(e => e.id);
                    return {
                        INITIAL_ROUTES: e,
                        pageToRootNavbarRouteMap: t,
                        validReorderItemLabels: r
                    }
                },
                ew = () => {
                    let e = [{
                            name: (0, W.u1)("organizationProfile.navbar.general"),
                            id: ee.bm.GENERAL,
                            icon: et.cp,
                            path: "organization-general"
                        }, {
                            name: (0, W.u1)("organizationProfile.navbar.members"),
                            id: ee.bm.MEMBERS,
                            icon: et.Q,
                            path: "organization-members"
                        }],
                        t = {
                            "invite-members": e.find(e => e.id === ee.bm.MEMBERS),
                            domain: e.find(e => e.id === ee.bm.GENERAL),
                            profile: e.find(e => e.id === ee.bm.GENERAL),
                            leave: e.find(e => e.id === ee.bm.GENERAL),
                            delete: e.find(e => e.id === ee.bm.GENERAL)
                        },
                        r = e.map(e => e.id);
                    return {
                        INITIAL_ROUTES: e,
                        pageToRootNavbarRouteMap: t,
                        validReorderItemLabels: r
                    }
                };
            var eS = r(4929);
            let eC = (e, t) => e_({
                    customMenuItems: e,
                    getDefaultMenuItems: e$
                }, t),
                e_ = (e, t) => {
                    let {
                        customMenuItems: r,
                        getDefaultMenuItems: n
                    } = e, {
                        INITIAL_MENU_ITEMS: o,
                        validReorderItemLabels: a
                    } = n(), i = r.filter(e => !!eI(e, a) || (eo(t) && console.error("Clerk: Invalid custom menu item:", e), !1));
                    eo(t) && (eZ(r, a), eR(i));
                    let {
                        menuItems: l
                    } = ek({
                        customMenuItems: i,
                        defaultMenuItems: o
                    });
                    return l
                },
                ek = e => {
                    let {
                        customMenuItems: t,
                        defaultMenuItems: r
                    } = e, n = r.map(e => e), o = [...t.map((e, t) => {
                        if (eB(e)) return {
                            name: e.label,
                            id: "custom-menutItem-".concat(t),
                            icon: t => (0, J.tZ)(er, {
                                mount: e.mountIcon,
                                unmount: e.unmountIcon,
                                ...t
                            }),
                            path: ea(e.href)
                        };
                        if (eP(e)) return {
                            name: e.label,
                            id: "custom-menutItem-".concat(t),
                            icon: t => (0, J.tZ)(er, {
                                mount: e.mountIcon,
                                unmount: e.unmountIcon,
                                ...t
                            }),
                            onClick: null == e ? void 0 : e.onClick
                        };
                        if (eA(e)) return {
                            name: e.label,
                            id: "custom-menutItem-".concat(t),
                            icon: t => (0, J.tZ)(er, {
                                mount: e.mountIcon,
                                unmount: e.unmountIcon,
                                ...t
                            }),
                            open: e.open
                        };
                        let o = r.find(t => t.id === e.label);
                        return n = n.filter(t => t.id !== e.label), { ...o
                        }
                    }), ...n];
                    return t.some(e => e.label === ee.Zb.MANAGE_ACCOUNT) || o.sort(e => e.id === ee.Zb.MANAGE_ACCOUNT ? -1 : 0), {
                        menuItems: o
                    }
                },
                e$ = () => {
                    let e = [{
                            name: (0, W.u1)("userButton.action__manageAccount"),
                            id: ee.Zb.MANAGE_ACCOUNT,
                            icon: et.tc
                        }, {
                            name: (0, W.u1)("userButton.action__signOut"),
                            id: ee.Zb.SIGN_OUT,
                            icon: et.lv
                        }],
                        t = e.map(e => e.id);
                    return {
                        INITIAL_MENU_ITEMS: e,
                        validReorderItemLabels: t
                    }
                },
                eI = (e, t) => (eB(e) || eP(e) || eA(e) || eT(e, t)) && "string" == typeof e.label,
                eP = e => !!e.label && !!e.onClick && !e.mount && !e.unmount && !!e.mountIcon && !!e.unmountIcon,
                eA = e => !!e.label && !!e.open && !e.mount && !e.unmount && !!e.mountIcon && !!e.unmountIcon,
                eB = e => !!e.href && !!e.label && !e.mount && !e.unmount && !!e.mountIcon && !!e.unmountIcon,
                eT = (e, t) => !e.mount && !e.unmount && !e.mountIcon && !e.unmountIcon && t.some(t => t === e.label),
                eZ = (e, t) => {
                    e.filter(e => eT(e, t)).reduce((e, t) => (e.includes(t.label) && console.error('Clerk: The "'.concat(t.label, '" item is used more than once when reordering pages. This may cause unexpected behavior.')), [...e, t.label]), [])
                },
                eR = e => {
                    let t = e.map(e => e.label),
                        r = t.filter((e, r) => t.indexOf(e) !== r);
                    r.length > 0 && console.warn("Clerk: Duplicate custom menu item labels found: ".concat(r.join(", ")))
                },
                ez = "form_username_invalid_length",
                eL = (e, t) => {
                    let {
                        t: r,
                        usernameSettings: n
                    } = t, o = e[0];
                    return t && (null == o ? void 0 : o.code) === ez ? r((0, W.u1)("unstable__errors.".concat(ez), {
                        min_length: n.min_length,
                        max_length: n.max_length
                    })) : o
                };
            var eE = r(3531);
            let eD = (e, t) => {
                var r;
                return (0, eE.kD)(e) && (null === (r = e.errors[0].meta) || void 0 === r ? void 0 : r.paramName) === "identifier" && "form_param_nil" === e.errors[0].code ? T(new eE.w$("A Web3 Wallet extension cannot be found. Please install one to continue.", {
                    code: "web3_missing_identifier"
                }), [], t) : T(e, [], t)
            }
        },
        8545: function(e, t, r) {
            function n(e) {
                return "ListFormat" in Intl && function(e) {
                    if (!e) return !1;
                    let t = Array.isArray(e) ? e : [e];
                    return Intl.ListFormat.supportedLocalesOf(t).length === t.length
                }(e)
            }

            function o(e, t) {
                return "NumberFormat" in Intl && function(e) {
                    if (!e) return !1;
                    try {
                        return Intl.NumberFormat.supportedLocalesOf(e).length > 0
                    } catch {
                        return !1
                    }
                }(t) ? new Intl.NumberFormat(t, {
                    notation: "compact"
                }).format(e) : e.toString()
            }
            r.d(t, {
                $p: () => o,
                k_: () => n
            })
        },
        6788: function(e, t, r) {
            r.d(t, {
                V2: () => d,
                Yp: () => s,
                ni: () => c
            });
            var n = r(9144),
                o = r(2762),
                a = r(1085);
            let i = e => e.trim(),
                l = (e, t) => {
                    let r = e;
                    for (let e = 0; e < t.length; e++) r = t[e](r);
                    return r
                },
                s = (e, t, r) => {
                    let o = r || {
                            type: "text",
                            label: "",
                            isRequired: !1,
                            placeholder: "",
                            options: [],
                            defaultChecked: !1
                        },
                        s = [];
                    o.transformer && s.push(o.transformer), "email" === o.type && s.push(i);
                    let {
                        translateError: c,
                        t: d
                    } = (0, a.zJ)(), [u, p] = (0, n.useState)(l(t, s)), [m, h] = (0, n.useState)(!1), [g, f] = (0, n.useState)((null == o ? void 0 : o.defaultChecked) || !1), [v, b] = (0, n.useState)(!1), [y, x] = (0, n.useState)({
                        message: "",
                        type: "info"
                    }), w = e => {
                        x({
                            message: c(e),
                            type: "error"
                        })
                    }, {
                        defaultChecked: S,
                        validatePassword: C,
                        buildErrorMessage: _,
                        ...k
                    } = o, $ = {
                        id: e,
                        name: e,
                        value: u,
                        checked: g,
                        setSuccess: e => {
                            x({
                                message: e,
                                type: "success"
                            })
                        },
                        setError: w,
                        onChange: e => (null == o ? void 0 : o.type) === "checkbox" ? f(e.target.checked) : p(l(e.target.value || "", s)),
                        onBlur: () => {
                            h(!1)
                        },
                        onFocus: () => {
                            h(!0)
                        },
                        setWarning: e => {
                            x({
                                message: c(e),
                                type: "warning"
                            })
                        },
                        feedback: y.message || d(o.infoText),
                        feedbackType: y.type,
                        setInfo: e => {
                            x({
                                message: e,
                                type: "info"
                            })
                        },
                        clearFeedback: () => {
                            x({
                                message: "",
                                type: "info"
                            })
                        },
                        hasPassedComplexity: v,
                        setHasPassedComplexity: b,
                        validatePassword: "password" === o.type ? o.validatePassword : void 0,
                        isFocused: m,
                        ...k
                    };
                    return {
                        props: $,
                        ...$,
                        buildErrorMessage: _,
                        setError: w,
                        setValue: e => p(e || ""),
                        setChecked: e => f(e)
                    }
                },
                c = e => {
                    let t = {};
                    return e.forEach(e => {
                        t[e.id] = "checkbox" !== e.type ? e.value : e.checked
                    }), t
                },
                d = e => {
                    let {
                        feedback: t = "",
                        delayInMs: r = 100,
                        feedbackType: n = "info",
                        isFocused: a = !1
                    } = e || {}, i = !a && ["info", "warning"].includes(n);
                    return {
                        debounced: (0, o.Nr)({
                            feedback: i ? "" : t,
                            feedbackType: i ? "info" : n
                        }, r)
                    }
                }
        },
        2073: function(e, t, r) {
            r.d(t, {
                L: () => o
            });
            var n = r(4152);
            let o = e => {
                let {
                    routing: t,
                    path: r
                } = e;
                return r && !t ? {
                    routing: "path",
                    path: r
                } : "path" !== t && r ? (0, n.PQ)(t) : {
                    routing: t,
                    path: r
                }
            }
        },
        5758: function(e, t, r) {
            r.d(t, {
                g: () => a
            });
            var n = r(5774),
                o = r(4152);
            async function a() {
                if (!window.google) try {
                    await (0, n.v)("https://accounts.google.com/gsi/client", {
                        defer: !0
                    })
                } catch {
                    (0, o.FI)("Google Identity Services")
                }
                return window.google
            }
        },
        6096: function(e, t, r) {
            r.d(t, {
                WY: () => n.WY
            });
            var n = r(6182);
            r(4310)
        }
    }
]);