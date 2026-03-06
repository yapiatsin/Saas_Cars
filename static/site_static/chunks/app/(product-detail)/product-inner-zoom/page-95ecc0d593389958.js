(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4264], {
        864: (e, r, s) => {
            "use strict";
            s.d(r, {
                default: () => m
            });
            var t = s(5155),
                i = s(2115),
                o = s(4105),
                a = s(7677),
                n = s(4534),
                l = s(3754),
                d = s(6766);
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
                let [e, r] = (0, i.useState)(null), m = (0, i.useRef)(null);
                return (0, i.useEffect)(() => {
                    let e = new n.A({
                        gallery: "#gallery-swiper-started",
                        children: ".item",
                        pswpModule: () => s.e(2958).then(s.bind(s, 6438))
                    });
                    return e.init(), m.current = e, () => {
                        e.destroy()
                    }
                }, []), (0, i.useEffect)(() => {
                    if (window.innerWidth >= 1200) return (() => {
                        let e = document.querySelectorAll(".tf-image-zoom-inner"),
                            r = document.querySelector(".tf-product-zoom-inner");
                        e.forEach(e => {
                            new l.A(e, {
                                paneContainer: r,
                                zoomFactor: 2,
                                inlinePane: !1,
                                containInline: !1
                            })
                        })
                    })(), () => {}
                }, []), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(a.RC, {
                        className: "swiper tf-product-media-main tf-product-zoom-inner",
                        id: "gallery-swiper-started",
                        thumbs: {
                            swiper: e
                        },
                        modules: [o.WO],
                        children: c.map((e, r) => (0, t.jsx)(a.qr, {
                            className: "swiper-slide",
                            "data-color": "gray",
                            children: (0, t.jsx)("a", {
                                href: e.src,
                                target: "_blank",
                                className: "item",
                                "data-pswp-width": "600px",
                                "data-pswp-height": "800px",
                                children: (0, t.jsx)(d.default, {
                                    className: "tf-image-zoom-inner lazyload",
                                    src: e.src,
                                    "data-zoom": e.src,
                                    alt: "",
                                    width: 652,
                                    height: 652
                                })
                            })
                        }))
                    }), (0, t.jsx)("div", {
                        className: "container-swiper",
                        children: (0, t.jsx)(a.RC, {
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
                            children: c.map((e, r) => (0, t.jsx)(a.qr, {
                                className: "swiper-slide stagger-item",
                                "data-color": e.color,
                                children: (0, t.jsx)("div", {
                                    className: "item",
                                    children: (0, t.jsx)(d.default, {
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
        },
        6852: (e, r, s) => {
            Promise.resolve().then(s.bind(s, 6864)), Promise.resolve().then(s.bind(s, 2988)), Promise.resolve().then(s.bind(s, 3603)), Promise.resolve().then(s.bind(s, 5736)), Promise.resolve().then(s.bind(s, 3340)), Promise.resolve().then(s.bind(s, 2867)), Promise.resolve().then(s.bind(s, 3899)), Promise.resolve().then(s.bind(s, 7526)), Promise.resolve().then(s.bind(s, 1208)), Promise.resolve().then(s.bind(s, 8810)), Promise.resolve().then(s.bind(s, 864)), Promise.resolve().then(s.t.bind(s, 6874, 23)), Promise.resolve().then(s.t.bind(s, 3063, 23))
        }
    },
    e => {
        var r = r => e(e.s = r);
        e.O(0, [5270, 2357, 1463, 2331, 2867, 31, 5120, 9561, 8441, 1684, 7358], () => r(6852)), _N_E = e.O()
    }
]);