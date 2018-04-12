(function (e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return n(t, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math)
})("undefined" != typeof window ? window : this, function (e, n, t, o, i) {
    "use strict";
    var l = "fullpage-wrapper",
        a = "." + l,
        r = "fp-scrollable",
        s = "." + r,
        c = "fp-responsive",
        d = "fp-notransition",
        f = "fp-destroyed",
        u = "fp-enabled",
        h = "fp-viewing",
        p = "active",
        v = "." + p,
        g = "fp-completely",
        m = "." + g,
        S = ".section",
        w = "fp-section",
        y = "." + w,
        b = y + v,
        x = y + ":first",
        C = y + ":last",
        T = "fp-tableCell",
        I = "." + T,
        k = "fp-auto-height",
        L = "fp-normal-scroll",
        E = "fp-nav",
        M = "#" + E,
        O = "fp-tooltip",
        A = "." + O,
        R = "fp-show-active",
        B = ".slide",
        H = "fp-slide",
        z = "." + H,
        D = z + v,
        P = "fp-slides",
        q = "." + P,
        F = "fp-slidesContainer",
        V = "." + F,
        Y = "fp-table",
        U = "fp-slidesNav",
        W = "." + U,
        j = W + " a",
        N = "fp-controlArrow",
        X = "." + N,
        K = "fp-prev",
        Q = "." + K,
        G = N + " " + K,
        J = X + Q,
        Z = "fp-next",
        $ = "." + Z,
        _ = N + " " + Z,
        ee = X + $,
        ne = e(n),
        te = e(t),
        oe = {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0
        };
    e.fn.fullpage = function (r) {
        function s(n, t) {
            n || nt(0), ht("autoScrolling", n, t);
            var o = e(b);
            r.autoScrolling && !r.scrollBar ? (gt.css({
                overflow: "hidden",
                height: "100%"
            }), N(Yt.recordHistory, "internal"), kt.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), o.length && nt(o.position().top)) : (gt.css({
                overflow: "visible",
                height: "initial"
            }), N(!1, "internal"), kt.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), o.length && gt.scrollTop(o.position().top))
        }

        function N(e, n) {
            ht("recordHistory", e, n)
        }

        function Q(e, n) {
            ht("scrollingSpeed", e, n)
        }

        function Z(e, n) {
            ht("fitToSection", e, n)
        }

        function $(e) {
            r.lockAnchors = e
        }

        function le(e) {
            e ? (Kn(), Qn()) : (Xn(), Gn())
        }

        function ae(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function (e, t) {
                ot(n, t, "m")
            })) : n ? (le(!0), Jn()) : (le(!1), Zn())
        }

        function re(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function (e, t) {
                ot(n, t, "k")
            })) : r.keyboardScrolling = n
        }

        function se() {
            var n = e(b).prev(y);
            n.length || !r.loopTop && !r.continuousVertical || (n = e(y).last()), n.length && Ke(n, null, !0)
        }

        function ce() {
            var n = e(b).next(y);
            n.length || !r.loopBottom && !r.continuousVertical || (n = e(y).first()), n.length && Ke(n, null, !1)
        }

        function de(e, n) {
            Q(0, "internal"), fe(e, n), Q(Yt.scrollingSpeed, "internal")
        }

        function fe(e, n) {
            var t = Dn(e);
            "undefined" != typeof n ? qn(e, n) : t.length > 0 && Ke(t)
        }

        function ue(e) {
            je("right", e)
        }

        function he(e) {
            je("left", e)
        }

        function pe(n) {
            if (!kt.hasClass(f)) {
                Et = !0, Lt = ne.height(), e(y).each(function () {
                    var n = e(this).find(q),
                        t = e(this).find(z);
                    r.verticalCentered && e(this).find(I).css("height", Hn(e(this)) + "px"), e(this).css("height", Lt + "px"), r.scrollOverflow && (t.length ? t.each(function () {
                        Rn(e(this))
                    }) : Rn(e(this))), t.length > 1 && wn(n, n.find(D))
                });
                var t = e(b),
                    o = t.index(y);
                o && de(o + 1), Et = !1, e.isFunction(r.afterResize) && n && r.afterResize.call(kt), e.isFunction(r.afterReBuild) && !n && r.afterReBuild.call(kt)
            }
        }

        function ve(n) {
            var t = mt.hasClass(c);
            n ? t || (s(!1, "internal"), Z(!1, "internal"), e(M).hide(), mt.addClass(c), e.isFunction(r.afterResponsive) && r.afterResponsive.call(kt, n)) : t && (s(Yt.autoScrolling, "internal"), Z(Yt.autoScrolling, "internal"), e(M).show(), mt.removeClass(c), e.isFunction(r.afterResponsive) && r.afterResponsive.call(kt, n))
        }

        function ge() {
            r.css3 && (r.css3 = Nn()), r.scrollBar = r.scrollBar || r.hybrid, Se(), we(), ae(!0), s(r.autoScrolling, "internal"), Tn(), jn(), "complete" === t.readyState && an(), ne.on("load", an)
        }

        function me() {
            ne.on("scroll", Re).on("hashchange", rn).blur(pn).resize(Cn), te.keydown(sn).keyup(dn).on("click touchstart", M + " a", vn).on("click touchstart", j, gn).on("click", A, cn), e(y).on("click touchstart", X, hn), r.normalScrollElements && (te.on("mouseenter", r.normalScrollElements, function () {
                le(!1)
            }), te.on("mouseleave", r.normalScrollElements, function () {
                le(!0)
            }))
        }

        function Se() {
            var n = kt.find(r.sectionSelector);
            r.anchors.length || (r.anchors = n.filter("[data-anchor]").map(function () {
                return e(this).data("anchor").toString()
            }).get()), r.navigationTooltips.length || (r.navigationTooltips = n.filter("[data-tooltip]").map(function () {
                return e(this).data("tooltip").toString()
            }).get())
        }

        function we() {
            kt.css({
                height: "100%",
                position: "relative"
            }), kt.addClass(l), e("html").addClass(u), Lt = ne.height(), kt.removeClass(f), Ce(), e(y).each(function (n) {
                var t = e(this),
                    o = t.find(z),
                    i = o.length;
                be(t, n), xe(t, n), i > 0 ? ye(t, o, i) : r.verticalCentered && Bn(t)
            }), r.fixedElements && r.css3 && e(r.fixedElements).appendTo(mt), r.navigation && Ie(), Le(), r.scrollOverflow ? ("complete" === t.readyState && ke(), ne.on("load", ke)) : Oe()
        }

        function ye(n, t, o) {
            var i = 100 * o,
                l = 100 / o;
            t.wrapAll('<div class="' + F + '" />'), t.parent().wrap('<div class="' + P + '" />'), n.find(V).css("width", i + "%"), o > 1 && (r.controlArrows && Te(n), r.slidesNavigation && Vn(n, o)), t.each(function (n) {
                e(this).css("width", l + "%"), r.verticalCentered && Bn(e(this))
            });
            var a = n.find(D);
            a.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== a.index()) ? et(a, "internal") : t.eq(0).addClass(p)
        }

        function be(n, t) {
            t || 0 !== e(b).length || n.addClass(p), xt = e(b), n.css("height", Lt + "px"), r.paddingTop && n.css("padding-top", r.paddingTop), r.paddingBottom && n.css("padding-bottom", r.paddingBottom), "undefined" != typeof r.sectionsColor[t] && n.css("background-color", r.sectionsColor[t]), "undefined" != typeof r.anchors[t] && n.attr("data-anchor", r.anchors[t])
        }

        function xe(n, t) {
            "undefined" != typeof r.anchors[t] && n.hasClass(p) && Mn(r.anchors[t], t), r.menu && r.css3 && e(r.menu).closest(a).length && e(r.menu).appendTo(mt)
        }

        function Ce() {
            kt.find(r.sectionSelector).addClass(w), kt.find(r.slideSelector).addClass(H)
        }

        function Te(e) {
            e.find(q).after('<div class="' + G + '"></div><div class="' + _ + '"></div>'), "#fff" != r.controlArrowColor && (e.find(ee).css("border-color", "transparent transparent transparent " + r.controlArrowColor), e.find(J).css("border-color", "transparent " + r.controlArrowColor + " transparent transparent")), r.loopHorizontal || e.find(J).hide()
        }

        function Ie() {
            mt.append('<div id="' + E + '"><div class="fixed-tooltip"></div><ul></ul></div>');
            var n = e(M);
            n.addClass(function () {
                return r.showActiveTooltip ? R + " " + r.navigationPosition : r.navigationPosition
            });
            for (var t = 0; t < e(y).length; t++) {
                var o = "";
                r.anchors.length && (o = r.anchors[t]);
                var i = '<li><a href="#' + o + '"><span></span></a>',
                    l = r.navigationTooltips[t];
                "undefined" != typeof l && "" !== l && (i += '<div class="' + O + " " + r.navigationPosition + '">' + l + "</div>"), i += "</li>", n.find("ul").append(i)
            }
            e(M).css("margin-top", "-" + e(M).height() / 2 + "px"), e(M).find("li").eq(e(b).index(y)).find("a").addClass(p)
        }

        function ke() {
            e(y).each(function () {
                var n = e(this).find(z);
                n.length ? n.each(function () {
                    Rn(e(this))
                }) : Rn(e(this))
            }), Oe()
        }

        function Le() {
            kt.find('iframe[src*="youtube.com/embed/"]').each(function () {
                Ee(e(this), "enablejsapi=1")
            })
        }

        function Ee(e, n) {
            var t = e.attr("src");
            e.attr("src", t + Me(t) + n)
        }

        function Me(e) {
            return /\?/.test(e) ? "&" : "?"
        }

        function Oe() {
            var n = e(b);
            n.addClass(g), r.scrollOverflowHandler.afterRender && r.scrollOverflowHandler.afterRender(n), en(n), nn(n), r.scrollOverflowHandler.afterLoad(), Ae() && e.isFunction(r.afterLoad) && r.afterLoad.call(n, n.data("anchor"), n.index(y) + 1), e.isFunction(r.afterRender) && r.afterRender.call(kt)
        }

        function Ae() {
            var e = n.location.hash.replace("#", "").split("/"),
                t = Dn(decodeURIComponent(e[0]));
            return !t.length || t.length && t.index() === xt.index()
        }

        function Re() {
            var n;
            if (!r.autoScrolling || r.scrollBar) {
                var o = ne.scrollTop(),
                    i = ze(o),
                    l = 0,
                    a = o + ne.height() / 2,
                    s = mt.height() - ne.height() === o,
                    c = t.querySelectorAll(y);
                if (s) l = c.length - 1;
                else if (o)
                    for (var d = 0; d < c.length; ++d) {
                        var f = c[d];
                        f.offsetTop <= a && (l = d)
                    } else l = 0;
                if (He(i) && (e(b).hasClass(g) || e(b).addClass(g).siblings().removeClass(g)), n = e(c).eq(l), !n.hasClass(p)) {
                    Ut = !0;
                    var u, h, v = e(b),
                        m = v.index(y) + 1,
                        S = On(n),
                        w = n.data("anchor"),
                        x = n.index(y) + 1,
                        C = n.find(D);
                    C.length && (h = C.data("anchor"), u = C.index()), Ot && (n.addClass(p).siblings().removeClass(p), e.isFunction(r.onLeave) && r.onLeave.call(v, m, x, S), e.isFunction(r.afterLoad) && r.afterLoad.call(n, w, x), on(v), en(n), nn(n), Mn(w, x - 1), r.anchors.length && (wt = w), Yn(u, h, w, x)), clearTimeout(Dt), Dt = setTimeout(function () {
                        Ut = !1
                    }, 100)
                }
                r.fitToSection && (clearTimeout(Pt), Pt = setTimeout(function () {
                    r.fitToSection && Be()
                }, r.fitToSectionDelay))
            }
        }

        function Be() {
            Ot && (Et = !0, Ke(e(b)), Et = !1)
        }

        function He(n) {
            var t = e(b).position().top,
                o = t + ne.height();
            return "up" == n ? o >= ne.scrollTop() + ne.height() : t <= ne.scrollTop()
        }

        function ze(e) {
            var n = e > Wt ? "down" : "up";
            return Wt = e, Gt = e, n
        }

        function De(e, n) {
            try {
                r.scrollingCallback.call()
            } catch (e) { }
            if (Rt.m[e]) {
                var t = "down" === e ? "bottom" : "top",
                    o = "down" === e ? ce : se;
                if (n.length > 0) {
                    if (!r.scrollOverflowHandler.isScrolled(t, n)) return !0;
                    o()
                } else o()
            }
        }

        function Pe(e) {
            var n = e.originalEvent;
            !Fe(e.target) && r.autoScrolling && Ve(n) && e.preventDefault()
        }

        function qe(n) {
            var t = n.originalEvent,
                i = e(t.target).closest(y);
            if (!Fe(n.target) && Ve(t)) {
                r.autoScrolling && n.preventDefault();
                var l = r.scrollOverflowHandler.scrollable(i),
                    a = _n(t);
                Xt = a.y, Kt = a.x, i.find(q).length && o.abs(Nt - Kt) > o.abs(jt - Xt) ? !Ct && o.abs(Nt - Kt) > ne.outerWidth() / 100 * r.touchSensitivity && (Nt > Kt ? Rt.m.right && ue(i) : Rt.m.left && he(i)) : r.autoScrolling && Ot && o.abs(jt - Xt) > ne.height() / 100 * r.touchSensitivity && (jt > Xt ? De("down", l) : Xt > jt && De("up", l))
            }
        }

        function Fe(n, t) {
            t = t || 0;
            var o = e(n).parent();
            return !!(t < r.normalScrollElementTouchThreshold && o.is(r.normalScrollElements)) || t != r.normalScrollElementTouchThreshold && Fe(o, ++t)
        }

        function Ve(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }

        function Ye(e) {
            var n = e.originalEvent;
            if (r.fitToSection && gt.stop(), Ve(n)) {
                var t = _n(n);
                jt = t.y, Nt = t.x
            }
        }

        function Ue(e, n) {
            for (var t = 0, i = e.slice(o.max(e.length - n, 1)), l = 0; l < i.length; l++) t += i[l];
            return o.ceil(t / n)
        }

        function We(t) {
            var i = (new Date).getTime(),
                l = e(m).hasClass(L);
            if (r.autoScrolling && !bt && !l) {
                t = t || n.event;
                var a = t.wheelDelta || -t.deltaY || -t.detail,
                    s = o.max(-1, o.min(1, a)),
                    c = "undefined" != typeof t.wheelDeltaX || "undefined" != typeof t.deltaX,
                    d = o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) || o.abs(t.deltaX) < o.abs(t.deltaY) || !c;
                At.length > 149 && At.shift(), At.push(o.abs(a)), r.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
                var f = e(b),
                    u = r.scrollOverflowHandler.scrollable(f),
                    h = i - Qt;
                if (Qt = i, h > 200 && (At = []), Ot) {
                    var p = Ue(At, 10),
                        v = Ue(At, 70),
                        g = p >= v;
                    g && d && (s < 0 ? De("down", u) : De("up", u))
                }
                return !1
            }
            r.fitToSection && gt.stop()
        }

        function je(n, t) {
            var o = "undefined" == typeof t ? e(b) : t,
                i = o.find(q),
                l = i.find(z).length;
            if (!(!i.length || Ct || l < 2)) {
                var a = i.find(D),
                    s = null;
                if (s = "left" === n ? a.prev(z) : a.next(z), !s.length) {
                    if (!r.loopHorizontal) return;
                    s = "left" === n ? a.siblings(":last") : a.siblings(":first")
                }
                Ct = !0, wn(i, s, n)
            }
        }

        function Ne() {
            e(D).each(function () {
                et(e(this), "internal")
            })
        }

        function Xe(e) {
            var n = e.position(),
                t = n.top,
                o = n.top > Gt,
                i = t - Lt + e.outerHeight(),
                l = r.bigSectionsDestination;
            return e.outerHeight() > Lt ? (o || l) && "bottom" !== l || (t = i) : (o || Et && e.is(":last-child")) && (t = i), Gt = t, t
        }

        function Ke(n, t, o) {
            if ("undefined" != typeof n) {
                var i, l, a = Xe(n),
                    s = {
                        element: n,
                        callback: t,
                        isMovementUp: o,
                        dtop: a,
                        yMovement: On(n),
                        anchorLink: n.data("anchor"),
                        sectionIndex: n.index(y),
                        activeSlide: n.find(D),
                        activeSection: e(b),
                        leavingSection: e(b).index(y) + 1,
                        localIsResizing: Et
                    };
                s.activeSection.is(n) && !Et || r.scrollBar && ne.scrollTop() === s.dtop && !n.hasClass(k) || (s.activeSlide.length && (i = s.activeSlide.data("anchor"), l = s.activeSlide.index()), r.autoScrolling && r.continuousVertical && "undefined" != typeof s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && (s = Je(s)), e.isFunction(r.onLeave) && !s.localIsResizing && r.onLeave.call(s.activeSection, s.leavingSection, s.sectionIndex + 1, s.yMovement) === !1 || (s.localIsResizing || on(s.activeSection), r.scrollOverflowHandler.beforeLeave(), n.addClass(p).siblings().removeClass(p), en(n), r.scrollOverflowHandler.onLeave(), Ot = !1, Yn(l, i, s.anchorLink, s.sectionIndex), Qe(s), wt = s.anchorLink, Mn(s.anchorLink, s.sectionIndex)))
            }
        }

        function Qe(n) {
            if (r.css3 && r.autoScrolling && !r.scrollBar) {
                var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";
                zn(t, !0), r.scrollingSpeed ? (clearTimeout(Ht), Ht = setTimeout(function () {
                    $e(n)
                }, r.scrollingSpeed)) : $e(n)
            } else {
                var i = Ge(n);
                e(i.element).animate(i.options, r.scrollingSpeed, r.easing).promise().done(function () {
                    r.scrollBar ? setTimeout(function () {
                        $e(n)
                    }, 30) : $e(n)
                })
            }
        }

        function Ge(e) {
            var n = {};
            return r.autoScrolling && !r.scrollBar ? (n.options = {
                top: -e.dtop
            }, n.element = a) : (n.options = {
                scrollTop: e.dtop
            }, n.element = "html, body"), n
        }

        function Je(n) {
            return n.isMovementUp ? e(b).before(n.activeSection.nextAll(y)) : e(b).after(n.activeSection.prevAll(y).get().reverse()), nt(e(b).position().top), Ne(), n.wrapAroundElements = n.activeSection, n.dtop = n.element.position().top, n.yMovement = On(n.element), n
        }

        function Ze(n) {
            n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(x).before(n.wrapAroundElements) : e(C).after(n.wrapAroundElements), nt(e(b).position().top), Ne())
        }

        function $e(n) {
            Ze(n), e.isFunction(r.afterLoad) && !n.localIsResizing && r.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), r.scrollOverflowHandler.afterLoad(), n.localIsResizing || nn(n.element), n.element.addClass(g).siblings().removeClass(g), Ot = !0, e.isFunction(n.callback) && n.callback.call(this)
        }

        function _e(e, n) {
            e.attr(n, e.data(n)).removeAttr("data-" + n)
        }

        function en(n) {
            if (r.lazyLoading) {
                var t, o = ln(n);
                o.find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                    t = e(this), e.each(["src", "srcset"], function (e, n) {
                        var o = t.attr("data-" + n);
                        "undefined" != typeof o && o && _e(t, n)
                    }), t.is("source") && t.closest("video").get(0).load()
                })
            }
        }

        function nn(n) {
            var t = ln(n);
            t.find("video, audio").each(function () {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && tn(n), n.onload = function () {
                    n.hasAttribute("data-autoplay") && tn(n)
                }
            })
        }

        function tn(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function on(n) {
            var t = ln(n);
            t.find("video, audio").each(function () {
                var n = e(this).get(0);
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var n = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function ln(n) {
            var t = n.find(D);
            return t.length && (n = e(t)), n
        }

        function an() {
            var e = n.location.hash.replace("#", "").split("/"),
                t = decodeURIComponent(e[0]),
                o = decodeURIComponent(e[1]);
            t && (r.animateAnchor ? qn(t, o) : de(t, o))
        }

        function rn() {
            if (!Ut && !r.lockAnchors) {
                var e = n.location.hash.replace("#", "").split("/"),
                    t = decodeURIComponent(e[0]),
                    o = decodeURIComponent(e[1]),
                    i = "undefined" == typeof wt,
                    l = "undefined" == typeof wt && "undefined" == typeof o && !Ct;
                t.length && (t && t !== wt && !i || l || !Ct && yt != o) && qn(t, o)
            }
        }

        function sn(n) {
            clearTimeout(qt);
            var t = e(":focus");
            if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && r.keyboardScrolling && r.autoScrolling) {
                var o = n.which,
                    i = [40, 38, 32, 33, 34];
                e.inArray(o, i) > -1 && n.preventDefault(), bt = n.ctrlKey, qt = setTimeout(function () {
                    mn(n)
                }, 150)
            }
        }

        function cn() {
            e(this).prev().trigger("click")
        }

        function dn(e) {
            Mt && (bt = e.ctrlKey)
        }

        function fn(e) {
            2 == e.which && (Jt = e.pageY, kt.on("mousemove", Sn))
        }

        function un(e) {
            2 == e.which && kt.off("mousemove")
        }

        function hn() {
            var n = e(this).closest(y);
            e(this).hasClass(K) ? Rt.m.left && he(n) : Rt.m.right && ue(n)
        }

        function pn() {
            Mt = !1, bt = !1
        }

        function vn(n) {
            n.preventDefault();
            var t = e(this).parent().index();
            Ke(e(y).eq(t))
        }

        function gn(n) {
            n.preventDefault();
            var t = e(this).closest(y).find(q),
                o = t.find(z).eq(e(this).closest("li").index());
            wn(t, o)
        }

        function mn(n) {
            var t = n.shiftKey;
            if (Ot || !([37, 39].indexOf(n.which) < 0)) switch (n.which) {
                case 38:
                case 33:
                    Rt.k.up && se();
                    break;
                case 32:
                    if (t && Rt.k.up) {
                        se();
                        break
                    }
                case 40:
                case 34:
                    Rt.k.down && ce();
                    break;
                case 36:
                    Rt.k.up && fe(1);
                    break;
                case 35:
                    Rt.k.down && fe(e(y).length);
                    break;
                case 37:
                    Rt.k.left && he();
                    break;
                case 39:
                    Rt.k.right && ue();
                    break;
                default:
                    return
            }
        }

        function Sn(e) {
            Ot && (e.pageY < Jt && Rt.m.up ? se() : e.pageY > Jt && Rt.m.down && ce()), Jt = e.pageY
        }

        function wn(n, t, o) {
            var i = n.closest(y),
                l = {
                    slides: n,
                    destiny: t,
                    direction: o,
                    destinyPos: t.position(),
                    slideIndex: t.index(),
                    section: i,
                    sectionIndex: i.index(y),
                    anchorLink: i.data("anchor"),
                    slidesNav: i.find(W),
                    slideAnchor: Wn(t),
                    prevSlide: i.find(D),
                    prevSlideIndex: i.find(D).index(),
                    localIsResizing: Et
                };
            return l.xMovement = An(l.prevSlideIndex, l.slideIndex), l.localIsResizing || (Ot = !1), r.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && e.isFunction(r.onSlideLeave) && r.onSlideLeave.call(l.prevSlide, l.anchorLink, l.sectionIndex + 1, l.prevSlideIndex, l.xMovement, l.slideIndex) === !1 ? void (Ct = !1) : (t.addClass(p).siblings().removeClass(p), l.localIsResizing || (on(l.prevSlide), en(t)), !r.loopHorizontal && r.controlArrows && (i.find(J).toggle(0 !== l.slideIndex), i.find(ee).toggle(!t.is(":last-child"))), i.hasClass(p) && !l.localIsResizing && Yn(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex), void bn(n, l, !0))
        }

        function yn(n) {
            xn(n.slidesNav, n.slideIndex), n.localIsResizing || (e.isFunction(r.afterSlideLoad) && r.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex), Ot = !0, nn(n.destiny)), Ct = !1
        }

        function bn(e, n, t) {
            var i = n.destinyPos;
            if (r.css3) {
                var l = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                In(e.find(V)).css(tt(l)), zt = setTimeout(function () {
                    t && yn(n)
                }, r.scrollingSpeed, r.easing)
            } else e.animate({
                scrollLeft: o.round(i.left)
            }, r.scrollingSpeed, r.easing, function () {
                t && yn(n)
            })
        }

        function xn(e, n) {
            e.find(v).removeClass(p), e.find("li").eq(n).find("a").addClass(p)
        }

        function Cn() {
            if (Tn(), Tt) {
                var n = e(t.activeElement);
                if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = ne.height();
                    o.abs(i - Zt) > 20 * o.max(Zt, i) / 100 && (pe(!0), Zt = i)
                }
            } else clearTimeout(Bt), Bt = setTimeout(function () {
                pe(!0)
            }, 350)
        }

        function Tn() {
            var e = r.responsive || r.responsiveWidth,
                n = r.responsiveHeight,
                t = e && ne.outerWidth() < e,
                o = n && ne.height() < n;
            e && n ? ve(t || o) : e ? ve(t) : n && ve(o)
        }

        function In(e) {
            var n = "all " + r.scrollingSpeed + "ms " + r.easingcss3;
            return e.removeClass(d), e.css({
                "-webkit-transition": n,
                transition: n
            })
        }

        function kn(e) {
            return e.addClass(d)
        }

        function Ln(n, t) {
            r.navigation && (e(M).find(v).removeClass(p), n ? e(M).find('a[href="#' + n + '"]').addClass(p) : e(M).find("li").eq(t).find("a").addClass(p))
        }

        function En(n) {
            r.menu && (e(r.menu).find(v).removeClass(p), e(r.menu).find('[data-menuanchor="' + n + '"]').addClass(p))
        }

        function Mn(e, n) {
            En(e), Ln(e, n)
        }

        function On(n) {
            var t = e(b).index(y),
                o = n.index(y);
            return t == o ? "none" : t > o ? "up" : "down"
        }

        function An(e, n) {
            return e == n ? "none" : e > n ? "left" : "right"
        }

        function Rn(e) {
            if (!e.hasClass("fp-noscroll")) {
                e.css("overflow", "hidden");
                var n, t = r.scrollOverflowHandler,
                    o = t.wrapContent(),
                    i = e.closest(y),
                    l = t.scrollable(e);
                l.length ? n = t.scrollHeight(e) : (n = e.get(0).scrollHeight, r.verticalCentered && (n = e.find(I).get(0).scrollHeight));
                var a = Lt - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));
                n > a ? l.length ? t.update(e, a) : (r.verticalCentered ? e.find(I).wrapInner(o) : e.wrapInner(o), t.create(e, a)) : t.remove(e), e.css("overflow", "")
            }
        }

        function Bn(e) {
            e.hasClass(Y) || e.addClass(Y).wrapInner('<div class="' + T + '" style="height:' + Hn(e) + 'px;" />')
        }

        function Hn(e) {
            var n = Lt;
            if (r.paddingTop || r.paddingBottom) {
                var t = e;
                t.hasClass(w) || (t = e.closest(y));
                var o = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
                n = Lt - o
            }
            return n
        }

        function zn(e, n) {
            n ? In(kt) : kn(kt), kt.css(tt(e)), setTimeout(function () {
                kt.removeClass(d)
            }, 10)
        }

        function Dn(n) {
            if (!n) return [];
            var t = kt.find(y + '[data-anchor="' + n + '"]');
            return t.length || (t = e(y).eq(n - 1)), t
        }

        function Pn(e, n) {
            var t = n.find(q),
                o = t.find(z + '[data-anchor="' + e + '"]');
            return o.length || (o = t.find(z).eq(e)), o
        }

        function qn(e, n) {
            var t = Dn(e);
            t.length && ("undefined" == typeof n && (n = 0), e === wt || t.hasClass(p) ? Fn(t, n) : Ke(t, function () {
                Fn(t, n)
            }))
        }

        function Fn(e, n) {
            if ("undefined" != typeof n) {
                var t = e.find(q),
                    o = Pn(n, e);
                o.length && wn(t, o)
            }
        }

        function Vn(e, n) {
            e.append('<div class="' + U + '"><ul></ul></div>');
            var t = e.find(W);
            t.addClass(r.slidesNavPosition);
            for (var o = 0; o < n; o++) t.find("ul").append('<li><a href="#"><span></span></a></li>');
            t.css("margin-left", "-" + t.width() / 2 + "px"), t.find("li").first().find("a").addClass(p)
        }

        function Yn(e, n, t, o) {
            var i = "";
            r.anchors.length && !r.lockAnchors && (e ? ("undefined" != typeof t && (i = t), "undefined" == typeof n && (n = e), yt = n, Un(i + "/" + n)) : "undefined" != typeof e ? (yt = n, Un(t)) : Un(t)), jn()
        }

        function Un(e) {
            if (r.recordHistory) location.hash = e;
            else if (Tt || It) n.history.replaceState(i, i, "#" + e);
            else {
                var t = n.location.href.split("#")[0];
                n.location.replace(t + "#" + e)
            }
        }

        function Wn(e) {
            var n = e.data("anchor"),
                t = e.index();
            return "undefined" == typeof n && (n = t), n
        }

        function jn() {
            var n = e(b),
                t = n.find(D),
                o = Wn(n),
                i = Wn(t),
                l = String(o);
            t.length && (l = l + "-" + i), l = l.replace("/", "-").replace("#", "");
            var a = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");
            mt[0].className = mt[0].className.replace(a, ""), mt.addClass(h + "-" + l)
        }

        function Nn() {
            var e, o = t.createElement("p"),
                l = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            t.body.insertBefore(o, null);
            for (var a in l) o.style[a] !== i && (o.style[a] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(o).getPropertyValue(l[a]));
            return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e
        }

        function Xn() {
            t.addEventListener ? (t.removeEventListener("mousewheel", We, !1), t.removeEventListener("wheel", We, !1), t.removeEventListener("MozMousePixelScroll", We, !1)) : t.detachEvent("onmousewheel", We)
        }

        function Kn() {
            var e, o = "";
            n.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");
            var l = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == l ? t[e](o + "MozMousePixelScroll", We, !1) : t[e](o + l, We, !1)
        }

        function Qn() {
            kt.on("mousedown", fn).on("mouseup", un)
        }

        function Gn() {
            kt.off("mousedown", fn).off("mouseup", un)
        }

        function Jn() {
            (Tt || It) && (r.autoScrolling && mt.off(Vt.touchmove).on(Vt.touchmove, Pe), e(a).off(Vt.touchstart).on(Vt.touchstart, Ye).off(Vt.touchmove).on(Vt.touchmove, qe))
        }

        function Zn() {
            (Tt || It) && e(a).off(Vt.touchstart).off(Vt.touchmove)
        }

        function $n() {
            var e;
            return e = n.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }
        }

        function _n(e) {
            var n = [];
            return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, It && Ve(e) && r.scrollBar && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n
        }

        function et(e, n) {
            Q(0, "internal"), "undefined" != typeof n && (Et = !0), wn(e.closest(q), e), "undefined" != typeof n && (Et = !1), Q(Yt.scrollingSpeed, "internal")
        }

        function nt(e) {
            var n = o.round(e);
            if (r.css3 && r.autoScrolling && !r.scrollBar) {
                var t = "translate3d(0px, -" + n + "px, 0px)";
                zn(t, !1)
            } else r.autoScrolling && !r.scrollBar ? kt.css("top", -n) : gt.scrollTop(n)
        }

        function tt(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function ot(e, n, t) {
            switch (n) {
                case "up":
                    Rt[t].up = e;
                    break;
                case "down":
                    Rt[t].down = e;
                    break;
                case "left":
                    Rt[t].left = e;
                    break;
                case "right":
                    Rt[t].right = e;
                    break;
                case "all":
                    "m" == t ? ae(e) : re(e)
            }
        }

        function it(n) {
            s(!1, "internal"), ae(!1), re(!1), kt.addClass(f), clearTimeout(zt), clearTimeout(Ht), clearTimeout(Bt), clearTimeout(Dt), clearTimeout(Pt), ne.off("scroll", Re).off("hashchange", rn).off("resize", Cn), te.off("click touchstart", M + " a").off("mouseenter", M + " li").off("mouseleave", M + " li").off("click touchstart", j).off("mouseover", r.normalScrollElements).off("mouseout", r.normalScrollElements), e(y).off("click touchstart", X), clearTimeout(zt), clearTimeout(Ht), n && ut()
        }

        function lt() {
            ie.iScrollInstances[0].refresh()
        }

        function at() {
            ie.iScrollInstances[0].y - 200 <= ie.iScrollInstances[0].maxScrollY ? ie.iScrollInstances[0].scrollTo(0, ie.iScrollInstances[0].maxScrollY) : ie.iScrollInstances[0].scrollBy(0, -200)
        }

        function rt() {
            ie.iScrollInstances[0].y + 200 >= 0 ? ie.iScrollInstances[0].scrollTo(0, 0) : ie.iScrollInstances[0].scrollBy(0, 200)
        }

        function st() {
            ie.iScrollInstances[0].scrollTo(0, ie.iScrollInstances[0].maxScrollY)
        }

        function ct() {
            ie.iScrollInstances[0].scrollTo(0, 0)
        }

        function dt() {
            ie.iScrollInstances[0].disable()
        }

        function ft() {
            ie.iScrollInstances[0].enable()
        }

        function ut() {
            nt(0), kt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                _e(e(this), "src")
            }), kt.find("img[data-srcset]").each(function () {
                _e(e(this), "srcset")
            }), e(M + ", " + W + ", " + X).remove(), e(y).css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(z).css({
                width: ""
            }), kt.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), gt.css({
                overflow: "",
                height: ""
            }), e("html").removeClass(u), mt.removeClass(c), e.each(mt.get(0).className.split(/\s+/), function (e, n) {
                0 === n.indexOf(h) && mt.removeClass(n)
            }), e(y + ", " + z).each(function () {
                r.scrollOverflowHandler.remove(e(this)), e(this).removeClass(Y + " " + p)
            }), kn(kt), kt.find(I + ", " + V + ", " + q).each(function () {
                e(this).replaceWith(this.childNodes)
            }), kt.css({
                "-webkit-transition": "none",
                transition: "none"
            }), gt.scrollTop(0);
            var n = [w, H, F];
            e.each(n, function (n, t) {
                e("." + t).removeClass(t)
            })
        }

        function ht(e, n, t) {
            r[e] = n, "internal" !== t && (Yt[e] = n)
        }

        function pt() {
            var n = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
            return e("html").hasClass(u) ? void vt("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (r.continuousVertical && (r.loopTop || r.loopBottom) && (r.continuousVertical = !1, vt("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), r.scrollBar && r.scrollOverflow && vt("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !r.continuousVertical || !r.scrollBar && r.autoScrolling || (r.continuousVertical = !1, vt("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(n, function (e, n) {
                r[n] && vt("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + n)
            }), void e.each(r.anchors, function (n, t) {
                var o = te.find("[name]").filter(function () {
                    return e(this).attr("name") && e(this).attr("name").toLowerCase() == t.toLowerCase()
                }),
                    i = te.find("[id]").filter(function () {
                        return e(this).attr("id") && e(this).attr("id").toLowerCase() == t.toLowerCase()
                    });
                (i.length || o.length) && (vt("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && vt("error", '"' + t + '" is is being used by another element `id` property'), o.length && vt("error", '"' + t + '" is is being used by another element `name` property'))
            }))
        }

        function vt(e, n) {
            console && console[e] && console[e]("fullPage: " + n)
        }
        if (e("html").hasClass(u)) return void pt();
        var gt = e("html, body"),
            mt = e("body"),
            St = e.fn.fullpage;
        r = e.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: ie,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            sectionSelector: S,
            slideSelector: B,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            scrollingCallback: null,
            lazyLoading: !0
        }, r);
        var wt, yt, bt, xt, Ct = !1,
            Tt = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            It = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            kt = e(this),
            Lt = ne.height(),
            Et = !1,
            Mt = !0,
            Ot = !0,
            At = [],
            Rt = {};
        Rt.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, Rt.k = e.extend(!0, {}, Rt.m);
        var Bt, Ht, zt, Dt, Pt, qt, Ft = $n(),
            Vt = {
                touchmove: "ontouchmove" in n ? "touchmove" : Ft.move,
                touchstart: "ontouchstart" in n ? "touchstart" : Ft.down
            },
            Yt = e.extend(!0, {}, r);
        pt(), oe.click = It, oe = e.extend(oe, r.scrollOverflowOptions), e.extend(e.easing, {
            easeInOutCubic: function (e, n, t, o, i) {
                return (n /= i / 2) < 1 ? o / 2 * n * n * n + t : o / 2 * ((n -= 2) * n * n + 2) + t
            }
        }), e(this).length && (St.setAutoScrolling = s, St.setRecordHistory = N, St.setScrollingSpeed = Q, St.setFitToSection = Z, St.setLockAnchors = $, St.setMouseWheelScrolling = le, St.setAllowScrolling = ae, St.setKeyboardScrolling = re, St.moveSectionUp = se, St.moveSectionDown = ce, St.silentMoveTo = de, St.moveTo = fe, St.moveSlideRight = ue, St.moveSlideLeft = he, St.fitToSection = Be, St.reBuild = pe, St.setResponsive = ve, St.destroy = it, St.iScrollRefresh = lt, St.iScrollDown = at, St.iScrollUp = rt, St.iScrollDownToBottom = st, St.iScrollUpToTop = ct, St.iScrollDisable = dt, St.iScrollEnable = ft, St.lazyload = en, ge(), me());
        var Ut = !1,
            Wt = 0,
            jt = 0,
            Nt = 0,
            Xt = 0,
            Kt = 0,
            Qt = (new Date).getTime(),
            Gt = 0,
            Jt = 0,
            Zt = Lt
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
    }, IScroll.prototype.wheelOff = function () {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
    });
    var ie = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function (n) {
            var t = e(b).find(s);
            t.each(function () {
                var t = e(this).data("iscrollInstance");
                "undefined" != typeof t && t && (n ? t.wheelOn() : t.wheelOff())
            })
        },
        onLeave: function () {
            ie.toggleWheel(!1)
        },
        beforeLeave: function () {
            ie.onLeave()
        },
        afterLoad: function () {
            ie.toggleWheel(!0)
        },
        create: function (n, t) {
            var o = n.find(s);
            o.height(t), o.each(function () {
                var n = e(this),
                    t = n.data("iscrollInstance");
                t && e.each(ie.iScrollInstances, function () {
                    e(this).destroy()
                }), t = new IScroll(n.get(0), oe), ie.iScrollInstances.push(t), t.wheelOff(), n.data("iscrollInstance", t)
            })
        },
        isScrolled: function (e, n) {
            var t = n.data("iscrollInstance");
            return !t || ("top" === e ? t.y >= 0 && !n.scrollTop() : "bottom" === e ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0)
        },
        scrollable: function (e) {
            return e.find(q).length ? e.find(D).find(s) : e.find(s)
        },
        scrollHeight: function (e) {
            return e.find(s).children().first().get(0).scrollHeight
        },
        remove: function (e) {
            var n = e.find(s);
            if (n.length) {
                var t = n.data("iscrollInstance");
                t.destroy(), n.data("iscrollInstance", null)
            }
            e.find(s).children().first().children().first().unwrap().unwrap()
        },
        update: function (n, t) {
            clearTimeout(ie.refreshId), ie.refreshId = setTimeout(function () {
                e.each(ie.iScrollInstances, function () {
                    e(this).get(0).refresh()
                })
            }, 150), n.find(s).css("height", t + "px").parent().css("height", t + "px")
        },
        wrapContent: function () {
            return '<div class="' + r + '"><div class="fp-scroller"></div></div>'
        }
    }
});