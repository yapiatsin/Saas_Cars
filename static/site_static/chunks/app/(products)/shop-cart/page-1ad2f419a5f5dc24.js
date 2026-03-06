(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4382], {
        2071: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => n
            });
            var i = a(5155),
                t = a(4621);
            a(2115);
            var l = a(7677),
                r = a(6766),
                c = a(4105);

            function n() {
                return (0, i.jsx)("div", {
                    className: "themesFlat",
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsx)("div", {
                            className: "tf-cart-sold",
                            children: (0, i.jsx)("div", {
                                className: "notification-progress",
                                children: (0, i.jsxs)("div", {
                                    className: "delivery-progress",
                                    children: [(0, i.jsx)("div", {
                                        className: "progress",
                                        role: "progressbar",
                                        "aria-label": "Basic example",
                                        "aria-valuenow": 0,
                                        "aria-valuemin": 0,
                                        "aria-valuemax": 100,
                                        children: (0, i.jsx)("div", {
                                            className: "progress-bar",
                                            style: {
                                                width: "50%"
                                            }
                                        })
                                    }), (0, i.jsxs)("p", {
                                        className: "body-text-3",
                                        children: [(0, i.jsx)("i", {
                                            className: "icon-delivery-2 fs-24"
                                        }), "Free shipping on all orders over", (0, i.jsx)("span", {
                                            className: "fw-bold",
                                            children: "$250"
                                        })]
                                    })]
                                })
                            })
                        }), (0, i.jsxs)(l.RC, {
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
                            modules: [c.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd69"
                            },
                            children: [t.r.map((e, s) => (0, i.jsx)(l.qr, {
                                className: "swiper-slide",
                                children: (0, i.jsxs)("div", {
                                    className: "wg-testimonial",
                                    children: [(0, i.jsx)("div", {
                                        className: "entry_image",
                                        children: (0, i.jsx)(r.default, {
                                            src: e.imgSrc,
                                            alt: "",
                                            className: "lazyload",
                                            width: 100,
                                            height: 100
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "content",
                                        children: [(0, i.jsxs)("div", {
                                            className: "box-title",
                                            children: [(0, i.jsx)("a", {
                                                href: "#",
                                                className: "entry_name product-title link fw-semibold",
                                                children: e.name
                                            }), (0, i.jsxs)("ul", {
                                                className: "entry_meta",
                                                children: [(0, i.jsx)("li", {
                                                    children: (0, i.jsxs)("p", {
                                                        className: "body-small text-main-2",
                                                        children: ["Color: ", e.color]
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "br-line"
                                                }), (0, i.jsx)("li", {
                                                    children: (0, i.jsx)("p", {
                                                        className: "body-small text-main-2 fw-semibold",
                                                        children: e.verified ? "Verified Purchase" : ""
                                                    })
                                                })]
                                            }), (0, i.jsx)("ul", {
                                                className: "list-star",
                                                children: Array.from({
                                                    length: e.rating
                                                }).map((e, s) => (0, i.jsx)("li", {
                                                    children: (0, i.jsx)("i", {
                                                        className: "icon-star"
                                                    })
                                                }, s))
                                            })]
                                        }), (0, i.jsx)("p", {
                                            className: "entry_text",
                                            children: e.text
                                        }), (0, i.jsx)("p", {
                                            className: "entry_date body-small",
                                            children: e.date
                                        })]
                                    })]
                                })
                            }, s)), (0, i.jsx)("div", {
                                className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd69"
                            })]
                        })]
                    })
                })
            }
        },
        2338: (e, s, a) => {
            "use strict";
            a.d(s, {
                U: () => t,
                q: () => i
            });
            let i = [{
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
        4621: (e, s, a) => {
            "use strict";
            a.d(s, {
                h: () => t,
                r: () => i
            });
            let i = [{
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
        5695: (e, s, a) => {
            "use strict";
            var i = a(8999);
            a.o(i, "usePathname") && a.d(s, {
                usePathname: function() {
                    return i.usePathname
                }
            })
        },
        5736: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => h
            });
            var i = a(5155),
                t = a(8001);
            a(2115);
            var l = a(7677),
                r = a(6874),
                c = a.n(r),
                n = a(6766),
                d = a(4105),
                o = a(6883),
                m = a(9640),
                p = a(7501),
                u = a(9822);

            function h(e) {
                let {
                    parentClass: s = "tf-sp-2",
                    fullWidth: a = !1
                } = e;
                return (0, i.jsx)("section", {
                    className: s,
                    children: (0, i.jsxs)("div", {
                        className: "container".concat(a ? "-full" : ""),
                        children: [(0, i.jsxs)("div", {
                            className: "flat-title wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: [(0, i.jsx)("h5", {
                                className: "fw-semibold",
                                children: "Recently Viewed"
                            }), (0, i.jsxs)("div", {
                                className: "box-btn-slide relative",
                                children: [(0, i.jsx)("div", {
                                    className: "swiper-button-prev nav-swiper nav-prev-products snbp12",
                                    children: (0, i.jsx)("i", {
                                        className: "icon-arrow-left-lg"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "swiper-button-next nav-swiper nav-next-products snbn12",
                                    children: (0, i.jsx)("i", {
                                        className: "icon-arrow-right-lg"
                                    })
                                })]
                            })]
                        }), (0, i.jsxs)(l.RC, {
                            className: "swiper tf-sw-products",
                            breakpoints: {
                                0: {
                                    slidesPerView: 2
                                },
                                575: {
                                    slidesPerView: 3
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 30
                                }
                            },
                            spaceBetween: 15,
                            modules: [d.Vx, d.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd12"
                            },
                            navigation: {
                                prevEl: ".snbp12",
                                nextEl: ".snbn12"
                            },
                            children: [t.Kw.map(e => (0, i.jsx)(l.qr, {
                                className: "swiper-slide",
                                children: (0, i.jsxs)("div", {
                                    className: "card-product style-img-border ".concat(e.animation ? "wow " + e.animation : ""),
                                    "data-wow-delay": e.wowDelay || void 0,
                                    children: [(0, i.jsxs)("div", {
                                        className: "card-product-wrapper",
                                        children: [(0, i.jsxs)(c(), {
                                            href: "/product-detail/".concat(e.id),
                                            className: "product-img",
                                            children: [(0, i.jsx)(n.default, {
                                                className: "img-product lazyload",
                                                src: e.imgSrc,
                                                alt: "image-product",
                                                width: e.imgWidth,
                                                height: e.imgHeight
                                            }), (0, i.jsx)(n.default, {
                                                className: "img-hover lazyload",
                                                src: e.imgHover,
                                                alt: "image-product",
                                                width: e.hoverWidth,
                                                height: e.hoverHeight
                                            })]
                                        }), (0, i.jsxs)("ul", {
                                            className: "list-product-btn",
                                            children: [(0, i.jsx)("li", {
                                                children: (0, i.jsx)(o.default, {
                                                    tooltipClass: "tooltip-left",
                                                    productId: e.id
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "d-none d-sm-block wishlist",
                                                children: (0, i.jsx)(m.default, {
                                                    tooltipClass: "tooltip-left",
                                                    productId: e.id
                                                })
                                            }), (0, i.jsx)("li", {
                                                children: (0, i.jsx)(p.default, {
                                                    productId: e.id,
                                                    tooltipClass: "tooltip-left"
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "d-none d-sm-block",
                                                children: (0, i.jsx)(u.default, {
                                                    productId: e.id,
                                                    tooltipClass: "tooltip-left"
                                                })
                                            })]
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "card-product-info",
                                        children: (0, i.jsxs)("div", {
                                            className: "box-title",
                                            children: [(0, i.jsxs)("div", {
                                                className: "d-flex flex-column",
                                                children: [(0, i.jsx)("p", {
                                                    className: "caption text-main-2 font-2",
                                                    children: e.category
                                                }), (0, i.jsx)(c(), {
                                                    href: "/product-detail/".concat(e.id),
                                                    className: "name-product body-md-2 fw-semibold text-secondary link",
                                                    children: e.title
                                                })]
                                            }), (0, i.jsx)("p", {
                                                className: "price-wrap fw-medium",
                                                children: (0, i.jsxs)("span", {
                                                    className: "new-price price-text fw-medium",
                                                    children: ["$", e.price.toFixed(3)]
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }, e.id)), (0, i.jsx)("div", {
                                className: "d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd12"
                            })]
                        })]
                    })
                })
            }
        },
        6750: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => c
            });
            var i = a(5155),
                t = a(2338);
            a(2115);
            var l = a(4105),
                r = a(7677);

            function c(e) {
                let {
                    fullWidth: s = !1
                } = e;
                return (0, i.jsx)("div", {
                    className: "tf-sp-2 pt-0",
                    children: (0, i.jsx)("div", {
                        className: "container".concat(s ? "-full" : ""),
                        children: (0, i.jsxs)(r.RC, {
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
                            spaceBetween: 15,
                            modules: [l.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spf2"
                            },
                            children: [t.U.map((e, s) => (0, i.jsx)(r.qr, {
                                className: "swiper-slide",
                                children: (0, i.jsxs)("div", {
                                    className: "tf-icon-box wow fadeInLeft",
                                    "data-wow-delay": e.delay,
                                    children: [(0, i.jsx)("div", {
                                        className: "icon-box",
                                        children: (0, i.jsx)("i", {
                                            className: "".concat(e.iconClass, " text-black")
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "content",
                                        children: [(0, i.jsx)("p", {
                                            className: "body-text fw-semibold",
                                            children: e.title
                                        }), (0, i.jsx)("p", {
                                            className: "body-text-3 text-cl-1",
                                            children: "Velit ullamco elit et aliqua magna"
                                        })]
                                    })]
                                })
                            }, s)), (0, i.jsx)("div", {
                                className: "sw-pagination-iconbox sw-dot-default justify-content-center spf2"
                            })]
                        })
                    })
                })
            }
        },
        6883: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => l
            });
            var i = a(5155),
                t = a(31);

            function l(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, {
                    addProductToCart: l,
                    isAddedToCartProducts: r
                } = (0, t.F)();
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("a", {
                        href: "#shoppingCart",
                        "data-bs-toggle": "offcanvas",
                        onClick: () => l(s),
                        className: "box-icon add-to-cart btn-icon-action hover-tooltip ".concat(a),
                        children: [(0, i.jsx)("span", {
                            className: "icon icon-cart2"
                        }), (0, i.jsx)("span", {
                            className: "tooltip",
                            children: r(s) ? "Already Added" : "Add to Cart"
                        })]
                    })
                })
            }
        },
        7238: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 2988)), Promise.resolve().then(a.bind(a, 6750)), Promise.resolve().then(a.bind(a, 3603)), Promise.resolve().then(a.bind(a, 5736)), Promise.resolve().then(a.bind(a, 3340)), Promise.resolve().then(a.bind(a, 2867)), Promise.resolve().then(a.bind(a, 3899)), Promise.resolve().then(a.bind(a, 7526)), Promise.resolve().then(a.bind(a, 9993)), Promise.resolve().then(a.bind(a, 2071)), Promise.resolve().then(a.t.bind(a, 6874, 23)), Promise.resolve().then(a.t.bind(a, 3063, 23))
        },
        7501: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => r
            });
            var i = a(5155),
                t = a(31),
                l = a(8001);

            function r(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, r = l.Oi.filter(e => e.id == s)[0] || l.Oi[0], {
                    setQuickViewItem: c
                } = (0, t.F)();
                return (0, i.jsxs)("a", {
                    href: "#quickView",
                    "data-bs-toggle": "modal",
                    onClick: () => c(r),
                    className: "box-icon quickview btn-icon-action hover-tooltip ".concat(a),
                    children: [(0, i.jsx)("span", {
                        className: "icon icon-view"
                    }), (0, i.jsx)("span", {
                        className: "tooltip",
                        children: "Quick View"
                    })]
                })
            }
        },
        9640: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => l
            });
            var i = a(5155),
                t = a(31);

            function l(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, {
                    addToWishlist: l,
                    isAddedtoWishlist: r
                } = (0, t.F)();
                return (0, i.jsxs)("a", {
                    href: "#",
                    onClick: e => {
                        e.preventDefault(), l(s)
                    },
                    className: "box-icon btn-icon-action hover-tooltip ".concat(a),
                    children: [(0, i.jsx)("span", {
                        className: "icon ".concat(r(s) ? "icon-trash" : "icon-heart2", " ")
                    }), (0, i.jsxs)("span", {
                        className: "tooltip",
                        children: [" ", r(s) ? "Remove Wishlist" : "Add to Wishlist"]
                    })]
                })
            }
        },
        9822: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => l
            });
            var i = a(5155),
                t = a(31);

            function l(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, {
                    addToCompareItem: l,
                    isAddedtoCompareItem: r
                } = (0, t.F)();
                return (0, i.jsxs)("a", {
                    href: "#compare",
                    "data-bs-toggle": "offcanvas",
                    onClick: () => l(s),
                    className: "box-icon btn-icon-action hover-tooltip ".concat(a),
                    children: [(0, i.jsx)("span", {
                        className: "icon icon-compare1"
                    }), (0, i.jsxs)("span", {
                        className: "tooltip",
                        children: [" ", r(s) ? "Compared" : "Compare"]
                    })]
                })
            }
        },
        9993: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => n
            });
            var i = a(5155);
            a(2115);
            var t = a(6874),
                l = a.n(t),
                r = a(6766),
                c = a(31);

            function n() {
                let {
                    cartProducts: e,
                    setCartProducts: s,
                    totalPrice: a,
                    updateQuantity: t
                } = (0, c.F)(), n = e => {
                    s(s => [...s.filter(s => s.id != e)])
                };
                return (0, i.jsx)("div", {
                    className: "s-shoping-cart tf-sp-2",
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsx)("div", {
                            className: "checkout-status tf-sp-2 pt-0",
                            children: (0, i.jsxs)("div", {
                                className: "checkout-wrap",
                                children: [(0, i.jsx)("span", {
                                    className: "checkout-bar first"
                                }), (0, i.jsxs)("div", {
                                    className: "step-payment",
                                    children: [(0, i.jsx)("span", {
                                        className: "icon",
                                        children: (0, i.jsx)("i", {
                                            className: "icon-shop-cart-1"
                                        })
                                    }), (0, i.jsx)(l(), {
                                        href: "/shop-cart",
                                        className: "text-secondary body-text-3",
                                        children: "Shopping Cart"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "step-payment",
                                    children: [(0, i.jsx)("span", {
                                        className: "icon",
                                        children: (0, i.jsx)("i", {
                                            className: "icon-shop-cart-2"
                                        })
                                    }), (0, i.jsx)(l(), {
                                        href: "/checkout",
                                        className: "link-secondary body-text-3",
                                        children: "Shopping & Checkout"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "step-payment",
                                    children: [(0, i.jsx)("span", {
                                        className: "icon",
                                        children: (0, i.jsx)("i", {
                                            className: "icon-shop-cart-3"
                                        })
                                    }), (0, i.jsx)(l(), {
                                        href: "/order-details",
                                        className: "link-secondary body-text-3",
                                        children: "Confirmation"
                                    })]
                                })]
                            })
                        }), (0, i.jsxs)("form", {
                            onSubmit: e => e.preventDefault(),
                            className: "form-discount",
                            children: [(0, i.jsx)("div", {
                                className: "overflow-x-auto",
                                children: e.length ? (0, i.jsxs)("table", {
                                    className: "tf-table-page-cart",
                                    children: [(0, i.jsx)("thead", {
                                        children: (0, i.jsxs)("tr", {
                                            children: [(0, i.jsx)("th", {
                                                children: "Product"
                                            }), (0, i.jsx)("th", {
                                                children: "Price"
                                            }), (0, i.jsx)("th", {
                                                children: "Quantity"
                                            }), (0, i.jsx)("th", {
                                                children: "Total"
                                            }), (0, i.jsx)("th", {})]
                                        })
                                    }), (0, i.jsx)("tbody", {
                                        children: e.map((e, s) => (0, i.jsxs)("tr", {
                                            className: "tf-cart-item",
                                            children: [(0, i.jsxs)("td", {
                                                className: "tf-cart-item_product",
                                                children: [(0, i.jsx)("a", {
                                                    href: "#",
                                                    className: "img-box",
                                                    children: (0, i.jsx)(r.default, {
                                                        alt: "",
                                                        src: e.imgSrc,
                                                        width: 300,
                                                        height: 300
                                                    })
                                                }), (0, i.jsxs)("div", {
                                                    className: "cart-info",
                                                    children: [(0, i.jsx)("a", {
                                                        href: "#",
                                                        className: "cart-title body-md-2 fw-semibold link",
                                                        children: e.title
                                                    }), (0, i.jsxs)("div", {
                                                        className: "variant-box",
                                                        children: [(0, i.jsx)("p", {
                                                            className: "body-text-3",
                                                            children: "Color:"
                                                        }), (0, i.jsx)("div", {
                                                            className: "tf-select",
                                                            children: (0, i.jsxs)("select", {
                                                                children: [(0, i.jsx)("option", {
                                                                    children: "Yellow"
                                                                }), (0, i.jsx)("option", {
                                                                    children: "Green"
                                                                }), (0, i.jsx)("option", {
                                                                    children: "Black"
                                                                }), (0, i.jsx)("option", {
                                                                    children: "Red"
                                                                }), (0, i.jsx)("option", {
                                                                    children: "Beige"
                                                                }), (0, i.jsx)("option", {
                                                                    children: "Pink"
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            }), (0, i.jsx)("td", {
                                                "data-cart-title": "Price",
                                                className: "tf-cart-item_price",
                                                children: (0, i.jsxs)("p", {
                                                    className: "cart-price price-on-sale price-text fw-medium",
                                                    children: ["$", e.price.toFixed(2)]
                                                })
                                            }), (0, i.jsx)("td", {
                                                "data-cart-title": "Quantity",
                                                className: "tf-cart-item_quantity",
                                                children: (0, i.jsxs)("div", {
                                                    className: "wg-quantity",
                                                    children: [(0, i.jsx)("span", {
                                                        className: "btn-quantity btn-decrease",
                                                        onClick: () => t(e.id, e.quantity - 1),
                                                        children: (0, i.jsx)("i", {
                                                            className: "icon-minus"
                                                        })
                                                    }), (0, i.jsx)("input", {
                                                        className: "quantity-product",
                                                        type: "text",
                                                        name: "number",
                                                        value: e.quantity,
                                                        readOnly: !0
                                                    }), (0, i.jsx)("span", {
                                                        className: "btn-quantity btn-increase",
                                                        onClick: () => t(e.id, e.quantity + 1),
                                                        children: (0, i.jsx)("i", {
                                                            className: "icon-plus"
                                                        })
                                                    })]
                                                })
                                            }), (0, i.jsx)("td", {
                                                "data-cart-title": "Total",
                                                className: "tf-cart-item_total",
                                                children: (0, i.jsxs)("p", {
                                                    className: "cart-total total-price price-text fw-medium",
                                                    children: ["$", (e.price * e.quantity).toFixed(2)]
                                                })
                                            }), (0, i.jsx)("td", {
                                                "data-cart-title": "Remove",
                                                className: "remove-cart text-xxl-end",
                                                children: (0, i.jsx)("span", {
                                                    className: "remove icon icon-close link",
                                                    onClick: () => n(e.id)
                                                })
                                            })]
                                        }, s))
                                    })]
                                }) : (0, i.jsxs)("div", {
                                    className: "p-4",
                                    children: [(0, i.jsxs)("div", {
                                        className: "col-4",
                                        children: ["Your Cart is empty. Start adding favorite products to cart!", " "]
                                    }), (0, i.jsx)(l(), {
                                        className: "tf-btn mt-2 mb-3 text-white",
                                        style: {
                                            width: "fit-content"
                                        },
                                        href: "/shop-default",
                                        children: "Explore Products"
                                    })]
                                })
                            }), (0, i.jsxs)("div", {
                                className: "cart-bottom",
                                children: [(0, i.jsxs)("div", {
                                    className: "ip-discount-code",
                                    children: [(0, i.jsx)("input", {
                                        type: "text",
                                        placeholder: "Enter your cupon code",
                                        required: ""
                                    }), (0, i.jsx)("button", {
                                        type: "submit",
                                        className: "tf-btn btn-gray",
                                        children: (0, i.jsx)("span", {
                                            className: "text-white",
                                            children: "Apply coupon"
                                        })
                                    })]
                                }), (0, i.jsxs)("span", {
                                    className: "last-total-price main-title fw-semibold",
                                    children: ["Total: $", a.toFixed(2)]
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "box-btn",
                            children: [(0, i.jsx)(l(), {
                                href: "/product-grid",
                                className: "tf-btn btn-gray",
                                children: (0, i.jsx)("span", {
                                    className: "text-white",
                                    children: "Continue shopping"
                                })
                            }), (0, i.jsx)(l(), {
                                href: "/checkout",
                                className: "tf-btn",
                                children: (0, i.jsx)("span", {
                                    className: "text-white",
                                    children: "Proceed to checkout"
                                })
                            })]
                        })]
                    })
                })
            }
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [5270, 2357, 2331, 2867, 31, 5120, 8441, 1684, 7358], () => s(7238)), _N_E = e.O()
    }
]);