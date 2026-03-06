(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5649], {
        1085: (e, s, t) => {
            "use strict";
            t.d(s, {
                default: () => o
            });
            var r = t(5155),
                i = t(2115);

            function o() {
                let [e, s] = (0, i.useState)(1);
                return (0, r.jsxs)("div", {
                    className: "tf-product-info-choose-option flex-xl-nowrap",
                    children: [(0, r.jsxs)("div", {
                        className: "product-quantity",
                        children: [(0, r.jsx)("p", {
                            className: "title body-text-3",
                            children: "Quantity"
                        }), (0, r.jsxs)("div", {
                            className: "wg-quantity",
                            children: [(0, r.jsx)("button", {
                                className: "btn-quantity btn-decrease",
                                onClick: () => s(e => 1 == e ? 1 : e - 1),
                                children: (0, r.jsx)("i", {
                                    className: "icon-minus"
                                })
                            }), (0, r.jsx)("input", {
                                className: "quantity-product",
                                type: "text",
                                readOnly: !0,
                                value: e
                            }), (0, r.jsx)("button", {
                                className: "btn-quantity btn-increase",
                                onClick: () => s(e => e + 1),
                                children: (0, r.jsx)("i", {
                                    className: "icon-plus"
                                })
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "product-color",
                        children: [(0, r.jsx)("p", {
                            className: "title body-text-3",
                            children: "Color"
                        }), (0, r.jsx)("div", {
                            className: "tf-select-color",
                            children: (0, r.jsxs)("select", {
                                className: "select-color",
                                children: [(0, r.jsx)("option", {
                                    children: "Graphite Black"
                                }), (0, r.jsx)("option", {
                                    children: "Graphite Blue"
                                })]
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: "product-box-btn",
                        children: (0, r.jsxs)("a", {
                            href: "#shoppingCart",
                            "data-bs-toggle": "offcanvas",
                            className: "tf-btn text-white",
                            children: ["Add to cart", (0, r.jsx)("i", {
                                className: "icon-cart-2"
                            })]
                        })
                    })]
                })
            }
        },
        1335: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 6864)), Promise.resolve().then(t.bind(t, 2988)), Promise.resolve().then(t.bind(t, 3603)), Promise.resolve().then(t.bind(t, 5736)), Promise.resolve().then(t.bind(t, 3340)), Promise.resolve().then(t.bind(t, 2867)), Promise.resolve().then(t.bind(t, 3899)), Promise.resolve().then(t.bind(t, 7526)), Promise.resolve().then(t.bind(t, 1085)), Promise.resolve().then(t.bind(t, 1208)), Promise.resolve().then(t.bind(t, 8810)), Promise.resolve().then(t.bind(t, 2310)), Promise.resolve().then(t.t.bind(t, 6874, 23)), Promise.resolve().then(t.t.bind(t, 3063, 23))
        },
        2310: (e, s, t) => {
            "use strict";
            t.d(s, {
                default: () => m
            });
            var r = t(5155),
                i = t(2115),
                o = t(4105),
                a = t(7677),
                l = t(4534),
                n = t(3754),
                c = t(6766);
            let d = [{
                src: "/images/product/product-detail-14.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-15.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-16.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-17.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-18.jpg",
                color: "beige"
            }, {
                src: "/images/product/product-detail-19.jpg",
                color: "beige"
            }];

            function m() {
                let [e, s] = (0, i.useState)(null), m = (0, i.useRef)(null);
                return (0, i.useEffect)(() => {
                    let e = new l.A({
                        gallery: "#gallery-swiper-started",
                        children: ".item",
                        pswpModule: () => t.e(2958).then(t.bind(t, 6438))
                    });
                    return e.init(), m.current = e, () => {
                        e.destroy()
                    }
                }, []), (0, i.useEffect)(() => {
                    if (!(window.innerWidth >= 1200)) return;
                    (() => {
                        let e = document.querySelectorAll(".tf-image-zoom"),
                            s = document.querySelector(".tf-zoom-main");
                        e.forEach(e => {
                            new n.A(e, {
                                zoomFactor: 2,
                                paneContainer: s,
                                inlinePane: !1,
                                handleTouch: !1,
                                hoverBoundingBox: !0,
                                containInline: !0
                            })
                        })
                    })();
                    let e = document.querySelectorAll(".tf-image-zoom"),
                        s = e => {
                            let s = e.target.closest(".section-image-zoom");
                            s && s.classList.add("zoom-active")
                        },
                        t = e => {
                            let s = e.target.closest(".section-image-zoom");
                            s && s.classList.remove("zoom-active")
                        };
                    return e.forEach(e => {
                        e.addEventListener("mouseover", s), e.addEventListener("mouseleave", t)
                    }), () => {
                        e.forEach(e => {
                            e.removeEventListener("mouseover", s), e.removeEventListener("mouseleave", t)
                        })
                    }
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: "container-swiper",
                        children: [(0, r.jsx)(a.RC, {
                            className: "swiper tf-product-media-main",
                            id: "gallery-swiper-started",
                            thumbs: {
                                swiper: e
                            },
                            modules: [o.WO],
                            children: d.map((e, s) => (0, r.jsx)(a.qr, {
                                className: "swiper-slide stagger-item",
                                "data-color": "gray",
                                children: (0, r.jsx)("a", {
                                    href: e.src,
                                    target: "_blank",
                                    className: "item",
                                    "data-pswp-width": "600px",
                                    "data-pswp-height": "800px",
                                    children: (0, r.jsx)(c.default, {
                                        className: "tf-image-zoom lazyload",
                                        src: e.src,
                                        "data-zoom": e.src,
                                        alt: "",
                                        width: 652,
                                        height: 652
                                    })
                                })
                            }))
                        }), " "]
                    }), (0, r.jsx)(a.RC, {
                        className: "swiper tf-product-media-thumbs other-image-zoom",
                        modules: [o.Vx, o.WO],
                        onSwiper: s,
                        spaceBetween: 10,
                        slidesPerView: "auto",
                        freeMode: !0,
                        watchSlidesProgress: !0,
                        observer: !0,
                        observeParents: !0,
                        direction: "horizontal",
                        navigation: {
                            nextEl: ".thumbs-next",
                            prevEl: ".thumbs-prev"
                        },
                        breakpoints: {
                            0: {
                                direction: "horizontal"
                            },
                            1200: {
                                direction: "horizontal"
                            }
                        },
                        children: d.map((e, s) => (0, r.jsx)(a.qr, {
                            className: "swiper-slide stagger-item",
                            "data-color": e.color,
                            children: (0, r.jsx)("div", {
                                className: "item",
                                children: (0, r.jsx)(c.default, {
                                    className: "lazyload",
                                    "data-src": e.src,
                                    alt: "",
                                    src: e.src,
                                    width: 652,
                                    height: 652
                                })
                            })
                        }, s))
                    })]
                })
            }
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [5270, 2357, 1463, 2331, 2867, 31, 5120, 9561, 8441, 1684, 7358], () => s(1335)), _N_E = e.O()
    }
]);