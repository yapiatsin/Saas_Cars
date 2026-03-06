(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [37], {
        889: (e, i, a) => {
            Promise.resolve().then(a.bind(a, 6864)), Promise.resolve().then(a.bind(a, 2988)), Promise.resolve().then(a.bind(a, 9136)), Promise.resolve().then(a.bind(a, 3603)), Promise.resolve().then(a.bind(a, 3340)), Promise.resolve().then(a.bind(a, 2867)), Promise.resolve().then(a.bind(a, 3899)), Promise.resolve().then(a.bind(a, 7526)), Promise.resolve().then(a.bind(a, 3559)), Promise.resolve().then(a.bind(a, 4556)), Promise.resolve().then(a.t.bind(a, 6874, 23)), Promise.resolve().then(a.t.bind(a, 3063, 23))
        },
        2338: (e, i, a) => {
            "use strict";
            a.d(i, {
                U: () => t,
                q: () => s
            });
            let s = [{
                    icon: "icon-delivery-2",
                    title: "Free delivery",
                    description: "Free Shipping for orders over $20",
                    delay: "0"
                }, {
                    icon: "icon-support-2",
                    title: "Support 24/7",
                    description: "24 hours a day, 7 days a week",
                    delay: "0.1s"
                }, {
                    icon: "icon-payment",
                    title: "Payment",
                    description: "Pay with Multiple Credit Cards",
                    delay: "0.2s"
                }, {
                    icon: "icon-reliable",
                    title: "Reliable",
                    description: "Trusted by 2000+ major brands",
                    delay: "0.3s"
                }, {
                    icon: "icon-check-3",
                    title: "Guarantee",
                    description: "Within 30 days for an exchange",
                    delay: "0.4s"
                }],
                t = [{
                    iconClass: "icon icon-delivery",
                    title: "Free delivery",
                    delay: "0s"
                }, {
                    iconClass: "icon icon-check-2",
                    title: "Support 24/7",
                    delay: "0.1s"
                }, {
                    iconClass: "icon icon-money-bag",
                    title: "Payment",
                    delay: "0.2s"
                }, {
                    iconClass: "icon icon-shield",
                    title: "Reliable",
                    delay: "0.3s"
                }, {
                    iconClass: "icon icon-accept",
                    title: "Guarantee",
                    delay: "0.4s"
                }]
        },
        3559: (e, i, a) => {
            "use strict";
            a.d(i, {
                default: () => o
            });
            var s = a(5155),
                t = a(9137);
            a(2115);
            var l = a(7677),
                r = a(6874),
                n = a.n(r),
                d = a(6766),
                c = a(4105);

            function o() {
                return (0, s.jsx)("section", {
                    className: "tf-sp-2",
                    children: (0, s.jsxs)("div", {
                        className: "container",
                        children: [(0, s.jsxs)("div", {
                            className: "flat-title wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: [(0, s.jsx)("h5", {
                                className: "fw-semibold",
                                children: "News"
                            }), (0, s.jsxs)("div", {
                                className: "box-btn-slide relative",
                                children: [(0, s.jsx)("div", {
                                    className: "swiper-button-prev nav-swiper nav-prev-products snbp65",
                                    children: (0, s.jsx)("i", {
                                        className: "icon-arrow-left-lg"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "swiper-button-next nav-swiper nav-next-products snbn65",
                                    children: (0, s.jsx)("i", {
                                        className: "icon-arrow-right-lg"
                                    })
                                })]
                            })]
                        }), (0, s.jsxs)(l.RC, {
                            modules: [c.Vx, c.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd65"
                            },
                            navigation: {
                                prevEl: ".snbp65",
                                nextEl: ".snbn65"
                            },
                            className: "swiper tf-sw-products",
                            breakpoints: {
                                0: {
                                    slidesPerView: 1
                                },
                                575: {
                                    slidesPerView: 2
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 30
                                }
                            },
                            spaceBetween: 15,
                            children: [t.tg.map((e, i) => (0, s.jsx)(l.qr, {
                                className: "swiper-slide",
                                children: (0, s.jsxs)("div", {
                                    className: "news-item hover-img wow fadeInUp",
                                    "data-wow-delay": e.wowDelay,
                                    children: [(0, s.jsx)(n(), {
                                        href: "/blog-detail",
                                        className: "entry_image img-style",
                                        children: (0, s.jsx)(d.default, {
                                            src: e.imgSrc,
                                            alt: "",
                                            className: "lazyload",
                                            width: 555,
                                            height: 312
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "content",
                                        children: [(0, s.jsxs)("div", {
                                            className: "entry_meta",
                                            children: [(0, s.jsxs)("div", {
                                                className: "tags",
                                                children: [(0, s.jsx)(d.default, {
                                                    alt: "",
                                                    src: "/images/folder.svg",
                                                    width: 16,
                                                    height: 16
                                                }), (0, s.jsx)("p", {
                                                    className: "caption fw-medium text-secondary",
                                                    children: e.tag
                                                })]
                                            }), (0, s.jsx)("div", {
                                                className: "date",
                                                children: (0, s.jsx)("p", {
                                                    className: "caption",
                                                    children: e.date
                                                })
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "entry_infor_news",
                                            children: [(0, s.jsx)("h6", {
                                                children: (0, s.jsx)("a", {
                                                    href: "#",
                                                    className: "link fw-semibold",
                                                    children: e.title
                                                })
                                            }), (0, s.jsx)("p", {
                                                className: "subs body-text-3",
                                                children: e.text
                                            })]
                                        })]
                                    })]
                                })
                            }, i)), (0, s.jsx)("div", {
                                className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd65"
                            })]
                        })]
                    })
                })
            }
        },
        4556: (e, i, a) => {
            "use strict";
            a.d(i, {
                default: () => d
            });
            var s = a(5155),
                t = a(4621),
                l = a(7677),
                r = a(6766),
                n = a(4105);

            function d() {
                return (0, s.jsx)("section", {
                    className: "tf-sp-2",
                    children: (0, s.jsxs)("div", {
                        className: "container",
                        children: [(0, s.jsxs)("div", {
                            className: "flat-title wow fadeInUp",
                            children: [(0, s.jsx)("h5", {
                                className: "fw-semibold",
                                children: "Customer Review"
                            }), (0, s.jsxs)("div", {
                                className: "box-btn-slide relative",
                                children: [(0, s.jsx)("div", {
                                    className: "swiper-button-prev nav-swiper nav-prev-products snbp66",
                                    children: (0, s.jsx)("i", {
                                        className: "icon-arrow-left-lg"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "swiper-button-next nav-swiper nav-next-products snbn66",
                                    children: (0, s.jsx)("i", {
                                        className: "icon-arrow-right-lg"
                                    })
                                })]
                            })]
                        }), (0, s.jsxs)(l.RC, {
                            className: "swiper tf-sw-products",
                            breakpoints: {
                                0: {
                                    slidesPerView: 1
                                },
                                575: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                }
                            },
                            spaceBetween: 15,
                            modules: [n.Vx, n.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd66"
                            },
                            navigation: {
                                prevEl: ".snbp66",
                                nextEl: ".snbn66"
                            },
                            children: [t.h.map((e, i) => (0, s.jsx)(l.qr, {
                                className: "swiper-slide",
                                children: (0, s.jsxs)("div", {
                                    className: "wg-testimonial wow fadeInUp".concat((e.wowDelay, "")),
                                    ...e.wowDelay ? {
                                        "data-wow-delay": e.wowDelay
                                    } : {},
                                    children: [(0, s.jsx)("div", {
                                        className: "entry_image",
                                        children: (0, s.jsx)(r.default, {
                                            src: e.imgSrc,
                                            alt: "",
                                            className: "lazyload",
                                            width: 100,
                                            height: 100
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "content",
                                        children: [(0, s.jsxs)("div", {
                                            className: "box-title",
                                            children: [(0, s.jsx)("a", {
                                                href: "#",
                                                className: "entry_name product-title link fw-semibold",
                                                children: e.name
                                            }), (0, s.jsxs)("ul", {
                                                className: "entry_meta",
                                                children: [(0, s.jsx)("li", {
                                                    children: (0, s.jsxs)("p", {
                                                        className: "body-small text-main-2",
                                                        children: ["Color: ", e.color]
                                                    })
                                                }), (0, s.jsx)("li", {
                                                    className: "br-line"
                                                }), (0, s.jsx)("li", {
                                                    children: e.verified && (0, s.jsx)("p", {
                                                        className: "body-small text-main-2 fw-semibold",
                                                        children: "Verified Purchase"
                                                    })
                                                })]
                                            }), (0, s.jsx)("ul", {
                                                className: "list-star",
                                                children: Array.from({
                                                    length: e.stars
                                                }).map((e, i) => (0, s.jsx)("li", {
                                                    children: (0, s.jsx)("i", {
                                                        className: "icon-star"
                                                    })
                                                }, i))
                                            })]
                                        }), (0, s.jsx)("p", {
                                            className: "entry_text",
                                            children: e.text
                                        }), (0, s.jsx)("p", {
                                            className: "entry_date body-small",
                                            children: e.date
                                        })]
                                    })]
                                })
                            }, i)), (0, s.jsx)("div", {
                                className: "sw-dot-default sw-pagination-products justify-content-center spd66"
                            })]
                        })]
                    })
                })
            }
        },
        4621: (e, i, a) => {
            "use strict";
            a.d(i, {
                h: () => t,
                r: () => s
            });
            let s = [{
                    imgSrc: "/images/avatar/review-1.jpg",
                    name: "Cameron Williamson",
                    color: "Black",
                    verified: !0,
                    rating: 5,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla iaculis velit, pharetra aliquet urna faucibus et. Vivamus blandit vulputate risus. Praesent at justo sed nibh interdum viverra at non magna",
                    date: "December 14, 2020 at 17:20"
                }, {
                    imgSrc: "/images/avatar/review-1.jpg",
                    name: "Cameron Williamson",
                    color: "Black",
                    verified: !0,
                    rating: 5,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla iaculis velit, pharetra aliquet urna faucibus et. Vivamus blandit vulputate risus. Praesent at justo sed nibh interdum viverra at non magna",
                    date: "December 14, 2020 at 17:20"
                }, {
                    imgSrc: "/images/avatar/review-1.jpg",
                    name: "Cameron Williamson",
                    color: "Black",
                    verified: !0,
                    rating: 5,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla iaculis velit, pharetra aliquet urna faucibus et. Vivamus blandit vulputate risus. Praesent at justo sed nibh interdum viverra at non magna",
                    date: "December 14, 2020 at 17:20"
                }],
                t = [{
                    wowDelay: "",
                    imgSrc: "/images/avatar/review-1.jpg",
                    name: "Cameron Williamson",
                    color: "Black",
                    verified: !0,
                    stars: 5,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla iaculis velit, pharetra aliquet urna faucibus et. Vivamus blandit vulputate risus. Praesent at justo sed nibh interdum viverra at non magna",
                    date: "December 14, 2020 at 17:20"
                }, {
                    wowDelay: "0.1s",
                    imgSrc: "/images/avatar/review-1.jpg",
                    name: "Cameron Williamson",
                    color: "Black",
                    verified: !0,
                    stars: 5,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla iaculis velit, pharetra aliquet urna faucibus et. Vivamus blandit vulputate risus. Praesent at justo sed nibh interdum viverra at non magna",
                    date: "December 14, 2020 at 17:20"
                }, {
                    wowDelay: "0.2s",
                    imgSrc: "/images/avatar/review-1.jpg",
                    name: "Cameron Williamson",
                    color: "Black",
                    verified: !0,
                    stars: 5,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla iaculis velit, pharetra aliquet urna faucibus et. Vivamus blandit vulputate risus. Praesent at justo sed nibh interdum viverra at non magna",
                    date: "December 14, 2020 at 17:20"
                }, {
                    wowDelay: "",
                    imgSrc: "/images/avatar/review-1.jpg",
                    name: "Cameron Williamson",
                    color: "Black",
                    verified: !0,
                    stars: 5,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla iaculis velit, pharetra aliquet urna faucibus et. Vivamus blandit vulputate risus. Praesent at justo sed nibh interdum viverra at non magna",
                    date: "December 14, 2020 at 17:20"
                }]
        },
        5695: (e, i, a) => {
            "use strict";
            var s = a(8999);
            a.o(s, "usePathname") && a.d(i, {
                usePathname: function() {
                    return s.usePathname
                }
            })
        },
        6864: (e, i, a) => {
            "use strict";
            a.d(i, {
                default: () => l
            });
            var s = a(5155);
            a(2115);
            var t = a(6766);

            function l(e) {
                let {
                    fullWidth: i = !1,
                    typeClass: a = ""
                } = e;
                return (0, s.jsx)("div", {
                    className: "themesFlat",
                    children: (0, s.jsx)("div", {
                        className: i ? "" : "container",
                        children: (0, s.jsx)("div", {
                            className: "line-bt line-tp",
                            children: (0, s.jsx)("div", {
                                className: "infiniteslide_wrap",
                                style: {
                                    overflow: "hidden"
                                },
                                children: (0, s.jsxs)("div", {
                                    className: "infiniteslide tf-brand ".concat(a),
                                    style: {
                                        display: "flex",
                                        flexFlow: "row",
                                        alignItems: "center",
                                        animation: "12.72s linear 0s infinite normal none running infiniteslider"
                                    },
                                    children: [(0, s.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/lead-ecommerce.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/global-brand.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/great-deal.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/walmart.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/rodem.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/fabric.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/sudo.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/ctaecom.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/lead-ecommerce.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/global-brand.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/great-deal.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/walmart.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/rodem.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/fabric.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/sudo.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/ctaecom.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/lead-ecommerce.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/global-brand.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/great-deal.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/walmart.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/rodem.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/fabric.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/sudo.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, s.jsx)(t.default, {
                                            alt: "brand",
                                            src: "/images/brand/ctaecom.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        9136: (e, i, a) => {
            "use strict";
            a.d(i, {
                default: () => n
            });
            var s = a(5155),
                t = a(2338);
            a(2115);
            var l = a(4105),
                r = a(7677);

            function n(e) {
                let {
                    parentClass: i = "tf-sp-2 pt-0",
                    hacontainer: a = !0
                } = e;
                return (0, s.jsx)("div", {
                    className: i,
                    children: (0, s.jsx)("div", {
                        className: a ? "container" : "",
                        children: (0, s.jsxs)(r.RC, {
                            className: "swiper tf-sw-iconbox",
                            breakpoints: {
                                0: {
                                    slidesPerView: 1
                                },
                                575: {
                                    slidesPerView: 2
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 20
                                }
                            },
                            modules: [l.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd3"
                            },
                            children: [t.q.map((e, i) => (0, s.jsx)(r.qr, {
                                className: "swiper-slide",
                                children: (0, s.jsxs)("div", {
                                    className: "tf-icon-box wow fadeInLeft",
                                    "data-wow-delay": e.delay,
                                    children: [(0, s.jsx)("div", {
                                        className: "icon-box",
                                        children: (0, s.jsx)("i", {
                                            className: "icon ".concat(e.icon)
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "content",
                                        children: [(0, s.jsx)("p", {
                                            className: "body-text fw-semibold",
                                            children: e.title
                                        }), (0, s.jsx)("p", {
                                            className: "body-text-3",
                                            children: e.description
                                        })]
                                    })]
                                })
                            }, i)), (0, s.jsx)("div", {
                                className: "sw-pagination-iconbox sw-dot-default justify-content-center spd3"
                            })]
                        })
                    })
                })
            }
        },
        9137: (e, i, a) => {
            "use strict";
            a.d(i, {
                A9: () => l,
                XW: () => s,
                tg: () => r,
                tv: () => t
            });
            let s = [{
                    id: 1,
                    imgSrc: "/images/blog/blog-26.jpg",
                    width: 426,
                    height: 240,
                    date: "28 Apr 2022",
                    title: "GameConsole Destiny Special Edition"
                }],
                t = [{
                    imgSrc: "/images/blog/blog-27.jpg",
                    tag: "Houseware",
                    date: "28 Apr 0222",
                    title: "Troubled by dust? 1/3 of it originates at home, includes skin cells and decomposing insects",
                    wowDelay: "0s",
                    hasAnimation: !0
                }, {
                    imgSrc: "/images/blog/blog-26.jpg",
                    tag: "Houseware",
                    date: "28 Apr 0222",
                    title: "Troubled by dust? 1/3 of it originates at home, includes skin cells and decomposing insects",
                    hasAnimation: !1
                }],
                l = [{
                    imgSrc: "/images/blog/blog-4.jpg",
                    delay: "0s",
                    title: "My Solution to Lost AirPods:The AirTags U1 Chip",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra nec nisi at varius. Praesent..."
                }, {
                    imgSrc: "/images/blog/blog-5.jpg",
                    delay: "0.1s",
                    title: "'Stranger Things'vs.'Obi-Wan Kenobi':Which Will You Watch Friday?",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra nec nisi at varius. Praesent..."
                }, {
                    imgSrc: "/images/blog/blog-6.jpg",
                    delay: "0.2s",
                    title: "'Dragon of Death'Unearthed in Argentina Is One of the Largest Pter...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra nec nisi at varius. Praesent..."
                }, {
                    imgSrc: "/images/blog/blog-2.jpg",
                    delay: "0.3s",
                    title: "'Dragon of Death'Unearthed in Argentina Is One of the Largest Pter...",
                    description: "Google faces EU break-up order over anti-competitive adtech practices"
                }, {
                    imgSrc: "/images/blog/blog-4.jpg",
                    delay: "0.4s",
                    title: "My Solution to Lost AirPods:The AirTags U1 Chip",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra nec nisi at varius. Praesent..."
                }],
                r = [{
                    imgSrc: "/images/blog/blog-4.jpg",
                    wowDelay: "0s",
                    tag: "Houseware",
                    date: "28 Apr 0222",
                    title: "My Solution to Lost AirPods:The AirTags U1 Chip",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra nec nisi at varius. Praesent..."
                }, {
                    imgSrc: "/images/blog/blog-5.jpg",
                    wowDelay: "0.1s",
                    tag: "Houseware",
                    date: "28 Apr 0222",
                    title: "'Stranger Things'vs.'Obi-Wan Kenobi':Which Will You Watch Friday?",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra nec nisi at varius. Praesent..."
                }, {
                    imgSrc: "/images/blog/blog-6.jpg",
                    wowDelay: "0.2s",
                    tag: "Houseware",
                    date: "28 Apr 0222",
                    title: "'Dragon of Death'Unearthed in Argentina Is One of the Largest Pter...",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra nec nisi at varius. Praesent..."
                }, {
                    imgSrc: "/images/blog/blog-1.jpg",
                    wowDelay: "0.3s",
                    tag: "Houseware",
                    date: "28 Apr 0222",
                    title: "'Dragon of Death'Unearthed in Argentina Is One of the Largest Pter...",
                    text: "Google faces EU break-up order over anti-competitive adtech practices"
                }, {
                    imgSrc: "/images/blog/blog-4.jpg",
                    wowDelay: "0.4s",
                    tag: "Houseware",
                    date: "28 Apr 0222",
                    title: "My Solution to Lost AirPods:The AirTags U1 Chip",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra nec nisi at varius. Praesent..."
                }]
        }
    },
    e => {
        var i = i => e(e.s = i);
        e.O(0, [5270, 2357, 2331, 2867, 5120, 8441, 1684, 7358], () => i(889)), _N_E = e.O()
    }
]);