(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6214], {
        1085: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => o
            });
            var r = s(5155),
                i = s(2115);

            function o() {
                let [e, t] = (0, i.useState)(1);
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
                                onClick: () => t(e => 1 == e ? 1 : e - 1),
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
                                onClick: () => t(e => e + 1),
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
        1906: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 6864)), Promise.resolve().then(s.bind(s, 2988)), Promise.resolve().then(s.bind(s, 3603)), Promise.resolve().then(s.bind(s, 5736)), Promise.resolve().then(s.bind(s, 3340)), Promise.resolve().then(s.bind(s, 2867)), Promise.resolve().then(s.bind(s, 3899)), Promise.resolve().then(s.bind(s, 7526)), Promise.resolve().then(s.bind(s, 1085)), Promise.resolve().then(s.bind(s, 1208)), Promise.resolve().then(s.bind(s, 8810)), Promise.resolve().then(s.bind(s, 8033)), Promise.resolve().then(s.t.bind(s, 6874, 23)), Promise.resolve().then(s.t.bind(s, 3063, 23))
        },
        8033: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => m
            });
            var r = s(5155),
                i = s(2115),
                o = s(4105),
                a = s(7677),
                l = s(4534),
                n = s(3754),
                c = s(6766);
            let d = [{
                src: "/images/product/product-detail-7.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-8.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-9.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-10.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-11.jpg",
                color: "beige"
            }, {
                src: "/images/product/product-detail-12.jpg",
                color: "beige"
            }];

            function m() {
                let [e, t] = (0, i.useState)(null), m = (0, i.useRef)(null);
                return (0, i.useEffect)(() => {
                    let e = new l.A({
                        gallery: "#gallery-swiper-started",
                        children: ".item",
                        pswpModule: () => s.e(2958).then(s.bind(s, 6438))
                    });
                    return e.init(), m.current = e, () => {
                        e.destroy()
                    }
                }, []), (0, i.useEffect)(() => {
                    if (!(window.innerWidth >= 1200)) return;
                    (() => {
                        let e = document.querySelectorAll(".tf-image-zoom"),
                            t = document.querySelector(".tf-zoom-main");
                        e.forEach(e => {
                            new n.A(e, {
                                zoomFactor: 2,
                                paneContainer: t,
                                inlinePane: !1,
                                handleTouch: !1,
                                hoverBoundingBox: !0,
                                containInline: !0
                            })
                        })
                    })();
                    let e = document.querySelectorAll(".tf-image-zoom"),
                        t = e => {
                            let t = e.target.closest(".section-image-zoom");
                            t && t.classList.add("zoom-active")
                        },
                        s = e => {
                            let t = e.target.closest(".section-image-zoom");
                            t && t.classList.remove("zoom-active")
                        };
                    return e.forEach(e => {
                        e.addEventListener("mouseover", t), e.addEventListener("mouseleave", s)
                    }), () => {
                        e.forEach(e => {
                            e.removeEventListener("mouseover", t), e.removeEventListener("mouseleave", s)
                        })
                    }
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [" ", (0, r.jsx)(a.RC, {
                        className: "swiper tf-product-media-main",
                        id: "gallery-swiper-started",
                        thumbs: {
                            swiper: e
                        },
                        modules: [o.WO],
                        children: d.map((e, t) => (0, r.jsx)(a.qr, {
                            className: "swiper-slide",
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
                        }, t))
                    }), (0, r.jsx)(a.RC, {
                        className: "swiper tf-product-media-thumbs other-image-zoom",
                        modules: [o.Vx, o.WO],
                        onSwiper: t,
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
                                direction: "vertical"
                            }
                        },
                        children: d.map((e, t) => (0, r.jsx)(a.qr, {
                            className: "swiper-slide stagger-item",
                            "data-color": "gray",
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
                        }, t))
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [5270, 2357, 1463, 2331, 2867, 31, 5120, 9561, 8441, 1684, 7358], () => t(1906)), _N_E = e.O()
    }
]);