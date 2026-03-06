(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4517], {
        717: (e, r, i) => {
            Promise.resolve().then(i.bind(i, 6864)), Promise.resolve().then(i.bind(i, 2988)), Promise.resolve().then(i.bind(i, 3603)), Promise.resolve().then(i.bind(i, 5736)), Promise.resolve().then(i.bind(i, 3340)), Promise.resolve().then(i.bind(i, 2867)), Promise.resolve().then(i.bind(i, 3899)), Promise.resolve().then(i.bind(i, 7526)), Promise.resolve().then(i.bind(i, 1208)), Promise.resolve().then(i.bind(i, 8810)), Promise.resolve().then(i.bind(i, 7143)), Promise.resolve().then(i.t.bind(i, 6874, 23)), Promise.resolve().then(i.t.bind(i, 3063, 23))
        },
        7143: (e, r, i) => {
            "use strict";
            i.d(r, {
                default: () => m
            });
            var s = i(5155),
                t = i(2115),
                o = i(4105),
                a = i(7677),
                n = i(4534),
                l = i(3754),
                d = i(6766);
            let c = [{
                src: "/images/product/product-detail-1.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-2.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-3.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-4.jpg",
                color: "gray"
            }, {
                src: "/images/product/product-detail-5.jpg",
                color: "beige"
            }, {
                src: "/images/product/product-detail-6.jpg",
                color: "beige"
            }];

            function m() {
                let [e, r] = (0, t.useState)(null), m = (0, t.useRef)(null);
                return (0, t.useEffect)(() => {
                    let e = new n.A({
                        gallery: "#gallery-swiper-started",
                        children: ".item",
                        pswpModule: () => i.e(2958).then(i.bind(i, 6438))
                    });
                    return e.init(), m.current = e, () => {
                        e.destroy()
                    }
                }, []), (0, t.useEffect)(() => {
                    if (window.innerWidth >= 1200) return document.querySelectorAll(".tf-image-zoom-magnifier").forEach(e => {
                        new l.A(e, {
                            zoomFactor: 2,
                            inlinePane: !0,
                            containInline: !1,
                            inlinePane: 35,
                            paneClass: "drift-pane"
                        })
                    }), document.body.classList.add("zoom-magnifier-containing"), () => {
                        document.body.classList.remove("zoom-magnifier-containing")
                    }
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(a.RC, {
                        className: "swiper tf-product-media-main tf-product-zoom-inner",
                        id: "gallery-swiper-started",
                        thumbs: {
                            swiper: e
                        },
                        modules: [o.WO],
                        children: c.map((e, r) => (0, s.jsx)(a.qr, {
                            className: "swiper-slide",
                            "data-color": "gray",
                            children: (0, s.jsx)("a", {
                                href: e.src,
                                target: "_blank",
                                className: "item",
                                "data-pswp-width": "600px",
                                "data-pswp-height": "800px",
                                children: (0, s.jsx)(d.default, {
                                    className: "tf-image-zoom-magnifier lazyload",
                                    src: e.src,
                                    "data-zoom": e.src,
                                    alt: "",
                                    width: 652,
                                    height: 652
                                })
                            })
                        }))
                    }), (0, s.jsx)("div", {
                        className: "container-swiper",
                        children: (0, s.jsx)(a.RC, {
                            className: "swiper tf-product-media-thumbs other-image-zoom",
                            modules: [o.Vx, o.WO],
                            onSwiper: r,
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
                            children: c.map((e, r) => (0, s.jsx)(a.qr, {
                                className: "swiper-slide stagger-item",
                                "data-color": e.color,
                                children: (0, s.jsx)("div", {
                                    className: "item",
                                    children: (0, s.jsx)(d.default, {
                                        className: "lazyload",
                                        "data-src": e.src,
                                        alt: "",
                                        src: e.src,
                                        width: 652,
                                        height: 652
                                    })
                                })
                            }, r))
                        })
                    })]
                })
            }
        }
    },
    e => {
        var r = r => e(e.s = r);
        e.O(0, [5270, 2357, 1463, 2331, 2867, 31, 5120, 9561, 8441, 1684, 7358], () => r(717)), _N_E = e.O()
    }
]);