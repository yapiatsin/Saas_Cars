(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8974], {
        1850: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => x
            });
            var l = a(5155),
                i = a(9137),
                t = a(8001),
                c = a(7677),
                n = a(6874),
                d = a.n(n),
                r = a(6766),
                o = a(4105),
                m = a(6883),
                p = a(9640),
                h = a(7501),
                u = a(9822);

            function x() {
                return (0, l.jsxs)("section", {
                    className: "box-btn-slide-item",
                    children: [(0, l.jsxs)("div", {
                        className: "flat-title wow fadeInUp",
                        "data-wow-delay": "0s",
                        children: [(0, l.jsx)("h5", {
                            className: "fw-semibold",
                            children: "Weekly products"
                        }), (0, l.jsxs)("div", {
                            className: "box-btn-slide relative",
                            children: [(0, l.jsx)("div", {
                                className: "swiper-button-prev nav-swiper nav-prev-products snbp48",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-left-lg"
                                })
                            }), (0, l.jsx)("div", {
                                className: "swiper-button-next nav-swiper nav-next-products snbn48",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-right-lg"
                                })
                            })]
                        })]
                    }), (0, l.jsxs)(c.RC, {
                        modules: [o.Vx],
                        navigation: {
                            prevEl: ".snbp48",
                            nextEl: ".snbn48"
                        },
                        className: "swiper tf-sw-products",
                        spaceBetween: 30,
                        children: [(0, l.jsx)(c.qr, {
                            className: "swiper-slide",
                            children: (0, l.jsxs)("ul", {
                                className: "product-list-wrap wow fadeInUp",
                                "data-wow-delay": "0s",
                                children: [i.XW.map(e => (0, l.jsx)("li", {
                                    children: (0, l.jsxs)("div", {
                                        className: "news-item hover-img gap-10",
                                        children: [(0, l.jsx)(d(), {
                                            href: "/blog-detail",
                                            className: "entry_image img-style",
                                            children: (0, l.jsx)(r.default, {
                                                src: e.imgSrc,
                                                alt: "",
                                                className: "lazyload",
                                                width: e.width,
                                                height: e.height
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "content gap-0",
                                            children: [(0, l.jsx)("p", {
                                                className: "caption text-main-2",
                                                children: e.date
                                            }), (0, l.jsx)(d(), {
                                                href: "/blog-detail",
                                                className: "link fw-semibold body-md-2",
                                                children: e.title
                                            })]
                                        })]
                                    })
                                }, "blog-".concat(e.id))), t.Ix.map(e => (0, l.jsx)("li", {
                                    children: (0, l.jsxs)("div", {
                                        className: "card-product style-row row-small-2",
                                        children: [(0, l.jsx)("div", {
                                            className: "card-product-wrapper img-small",
                                            children: (0, l.jsxs)(d(), {
                                                href: "/product-detail/".concat(e.id),
                                                className: "product-img",
                                                children: [(0, l.jsx)(r.default, {
                                                    className: "img-product lazyload",
                                                    src: e.imgSrc,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                }), (0, l.jsx)(r.default, {
                                                    className: "img-hover lazyload",
                                                    src: e.imgHover,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                })]
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "card-product-info",
                                            children: (0, l.jsxs)("div", {
                                                className: "box-title",
                                                children: [(0, l.jsx)("div", {
                                                    className: "bg-white relative z-5",
                                                    children: (0, l.jsx)(d(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "name-product body-text-3 link",
                                                        children: e.title
                                                    })
                                                }), (0, l.jsxs)("div", {
                                                    className: "group-btn",
                                                    children: [(0, l.jsx)("p", {
                                                        className: "price-wrap fw-semibold",
                                                        children: (0, l.jsxs)("span", {
                                                            className: "new-price",
                                                            children: ["$", e.price.toFixed(3)]
                                                        })
                                                    }), (0, l.jsxs)("ul", {
                                                        className: "list-product-btn style-2 flex-row",
                                                        children: [(0, l.jsx)("li", {
                                                            children: (0, l.jsx)(m.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            className: "d-none d-sm-block wishlist",
                                                            children: (0, l.jsx)(p.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(h.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            className: "d-none d-sm-block",
                                                            children: (0, l.jsx)(u.default, {
                                                                productId: e.id
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }, "product-".concat(e.id)))]
                            })
                        }), (0, l.jsx)(c.qr, {
                            className: "swiper-slide",
                            children: (0, l.jsxs)("ul", {
                                className: "product-list-wrap",
                                children: [i.XW.map(e => (0, l.jsx)("li", {
                                    children: (0, l.jsxs)("div", {
                                        className: "news-item hover-img gap-10",
                                        children: [(0, l.jsx)(d(), {
                                            href: "/blog-detail",
                                            className: "entry_image img-style",
                                            children: (0, l.jsx)(r.default, {
                                                src: e.imgSrc,
                                                alt: "",
                                                className: "lazyload",
                                                width: e.width,
                                                height: e.height
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "content gap-0",
                                            children: [(0, l.jsx)("p", {
                                                className: "caption text-main-2",
                                                children: e.date
                                            }), (0, l.jsx)(d(), {
                                                href: "/blog-detail",
                                                className: "link fw-semibold body-md-2",
                                                children: e.title
                                            })]
                                        })]
                                    })
                                }, "blog-".concat(e.id))), t.Ix.map(e => (0, l.jsx)("li", {
                                    children: (0, l.jsxs)("div", {
                                        className: "card-product style-row row-small-2",
                                        children: [(0, l.jsx)("div", {
                                            className: "card-product-wrapper img-small",
                                            children: (0, l.jsxs)(d(), {
                                                href: "/product-detail/".concat(e.id),
                                                className: "product-img",
                                                children: [(0, l.jsx)(r.default, {
                                                    className: "img-product lazyload",
                                                    src: e.imgSrc,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                }), (0, l.jsx)(r.default, {
                                                    className: "img-hover lazyload",
                                                    src: e.imgHover,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                })]
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "card-product-info",
                                            children: (0, l.jsxs)("div", {
                                                className: "box-title",
                                                children: [(0, l.jsx)("div", {
                                                    className: "bg-white relative z-5",
                                                    children: (0, l.jsx)(d(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "name-product body-text-3 link",
                                                        children: e.title
                                                    })
                                                }), (0, l.jsxs)("div", {
                                                    className: "group-btn",
                                                    children: [(0, l.jsx)("p", {
                                                        className: "price-wrap fw-semibold",
                                                        children: (0, l.jsxs)("span", {
                                                            className: "new-price",
                                                            children: ["$", e.price.toFixed(3)]
                                                        })
                                                    }), (0, l.jsxs)("ul", {
                                                        className: "list-product-btn style-2 flex-row",
                                                        children: [(0, l.jsx)("li", {
                                                            children: (0, l.jsx)(m.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            className: "d-none d-sm-block wishlist",
                                                            children: (0, l.jsx)(p.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(h.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            className: "d-none d-sm-block",
                                                            children: (0, l.jsx)(u.default, {
                                                                productId: e.id
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }, "product-".concat(e.id)))]
                            })
                        })]
                    })]
                })
            }
        },
        1989: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => u
            });
            var l = a(5155),
                i = a(6766),
                t = a(6874),
                c = a.n(t),
                n = a(4105),
                d = a(7677),
                r = a(9640),
                o = a(7501),
                m = a(9822),
                p = a(2115),
                h = a(3825);
            let u = e => {
                let {
                    product: s,
                    parentClass: a = "card-product style-border style-thums-2 p-lg-30 wow fadeInUp",
                    typeClass: t = ""
                } = e, [u, x] = (0, p.useState)(null);
                return (0, l.jsxs)("div", {
                    className: a,
                    "data-wow-delay": 0,
                    children: [(0, l.jsxs)("div", {
                        className: "card-product-wrapper overflow-visible aspect-ratio-0",
                        children: [(0, l.jsxs)("div", {
                            className: "product-thumb-slider thumbs-right ".concat(t, " "),
                            children: [(0, l.jsx)(d.RC, {
                                thumbs: {
                                    swiper: u
                                },
                                className: "swiper tf-product-view-main ",
                                modules: [n.WO],
                                children: s.images.map((e, a) => (0, l.jsx)(d.qr, {
                                    className: "swiper-slide",
                                    children: (0, l.jsx)(c(), {
                                        href: "/product-detail/".concat(s.id),
                                        className: "d-block tf-image-view",
                                        children: (0, l.jsx)(i.default, {
                                            src: e,
                                            alt: s.title,
                                            className: "lazyload",
                                            width: 857,
                                            height: 482
                                        })
                                    })
                                }, "main-".concat(a)))
                            }), (0, l.jsx)(d.RC, {
                                className: "swiper tf-product-view-thumbs",
                                onSwiper: x,
                                direction: "horizontal",
                                spaceBetween: 10,
                                slidesPerView: "auto",
                                freeMode: !0,
                                watchSlidesProgress: !0,
                                observer: !0,
                                observeParents: !0,
                                nested: !0,
                                breakpoints: {
                                    0: {
                                        direction: "horizontal"
                                    },
                                    576: {
                                        direction: "vertical"
                                    }
                                },
                                modules: [n.U1, n.WO],
                                children: s.images.map((e, a) => (0, l.jsx)(d.qr, {
                                    className: "swiper-slide",
                                    children: (0, l.jsx)("div", {
                                        className: "item",
                                        children: (0, l.jsx)(i.default, {
                                            alt: s.title,
                                            src: e,
                                            width: 857,
                                            height: 482
                                        })
                                    })
                                }, "thumb-".concat(a)))
                            })]
                        }), s.discount && (0, l.jsxs)("div", {
                            className: "box-sale-wrap style-2 z-5",
                            children: [(0, l.jsx)("p", {
                                className: "small-text",
                                children: "Save"
                            }), (0, l.jsxs)("p", {
                                className: "title-sidebar-2",
                                children: ["$", s.discount.toFixed(3)]
                            })]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "card-product-info",
                        children: [(0, l.jsxs)("div", {
                            className: "box-title gap-xl-6",
                            children: [(0, l.jsx)("div", {
                                className: "d-flex flex-column",
                                children: (0, l.jsx)("h6", {
                                    className: "bg-white relative z-5",
                                    children: (0, l.jsx)(c(), {
                                        href: "/product-detail/".concat(s.id),
                                        className: "name-product fw-semibold text-secondary link",
                                        children: s.title
                                    })
                                })
                            }), (0, l.jsxs)("div", {
                                className: "group-btn",
                                children: [(0, l.jsxs)("p", {
                                    className: "price-wrap fw-medium",
                                    children: [(0, l.jsxs)("span", {
                                        className: "new-price h4 fw-normal text-primary mb-0",
                                        children: ["$", s.price.toFixed(3)]
                                    }), s.oldPrice && (0, l.jsxs)("span", {
                                        className: "old-price price-text text-main-2",
                                        children: ["$", s.oldPrice.toFixed(3)]
                                    })]
                                }), (0, l.jsxs)("ul", {
                                    className: "list-product-btn flex-row",
                                    children: [(0, l.jsx)("li", {}), (0, l.jsx)("li", {
                                        className: "wishlist",
                                        children: (0, l.jsx)(r.default, {
                                            productId: s.id
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(o.default, {
                                            productId: s.id
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(m.default, {
                                            productId: s.id
                                        })
                                    })]
                                })]
                            })]
                        }), s.countdown && (0, l.jsx)("div", {
                            className: "box-infor-detail gap-xl-20",
                            children: (0, l.jsx)("div", {
                                className: "countdown-box",
                                children: (0, l.jsx)("div", {
                                    className: "js-countdown",
                                    "data-timer": s.countdown,
                                    "data-labels": "Days,Hours,Mins,Secs",
                                    children: (0, l.jsx)(h.default, {
                                        style: 2
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
        },
        2038: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => u
            });
            var l = a(5155),
                i = a(8001);
            a(2115);
            var t = a(7677),
                c = a(6874),
                n = a.n(c),
                d = a(6766),
                r = a(4105),
                o = a(6883),
                m = a(9640),
                p = a(7501),
                h = a(9822);

            function u() {
                let e = [];
                for (let s = 0; s < i.Rk.length; s += 2) e.push({
                    id: Math.floor(s / 2) + 1,
                    products: [i.Rk[s], i.Rk[s + 1]].filter(Boolean),
                    delay: i.Rk[s].delay || "0s"
                });
                return (0, l.jsxs)("section", {
                    className: "tf-sp-2 box-btn-slide-item",
                    children: [(0, l.jsxs)("div", {
                        className: "flat-title wow fadeInUp",
                        "data-wow-delay": "0s",
                        children: [(0, l.jsx)("h5", {
                            className: "fw-semibold",
                            children: "Smart Home Appliances"
                        }), (0, l.jsxs)("div", {
                            className: "box-btn-slide relative",
                            children: [(0, l.jsx)("div", {
                                className: "swiper-button-prev nav-swiper nav-prev-products snbp51",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-left-lg"
                                })
                            }), (0, l.jsx)("div", {
                                className: "swiper-button-next nav-swiper nav-next-products snbn51",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-right-lg"
                                })
                            })]
                        })]
                    }), (0, l.jsxs)(t.RC, {
                        modules: [r.Vx, r.dK],
                        pagination: {
                            clickable: !0,
                            el: ".spd51"
                        },
                        navigation: {
                            prevEl: ".snbp51",
                            nextEl: ".snbn51"
                        },
                        className: "swiper tf-sw-products",
                        spaceBetween: 15,
                        breakpoints: {
                            0: {
                                slidesPerView: 1
                            },
                            575: {
                                slidesPerView: 2
                            },
                            768: {
                                spaceBetween: 20,
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        children: [e.map(e => (0, l.jsx)(t.qr, {
                            className: "swiper-slide",
                            children: (0, l.jsx)("ul", {
                                className: "product-list-wrap wow fadeInUp",
                                "data-wow-delay": e.delay,
                                children: e.products.map(e => (0, l.jsx)("li", {
                                    children: (0, l.jsxs)("div", {
                                        className: "card-product style-row row-small-2",
                                        children: [(0, l.jsx)("div", {
                                            className: "card-product-wrapper",
                                            children: (0, l.jsxs)(n(), {
                                                href: "/product-detail/".concat(e.id),
                                                className: "product-img",
                                                children: [(0, l.jsx)(d.default, {
                                                    className: "img-product lazyload",
                                                    src: e.imgSrc,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                }), (0, l.jsx)(d.default, {
                                                    className: "img-hover lazyload",
                                                    src: e.imgHover,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                })]
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "card-product-info",
                                            children: (0, l.jsxs)("div", {
                                                className: "box-title",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "bg-white relative z-5",
                                                    children: [(0, l.jsx)("p", {
                                                        className: "caption text-main-2 font-2",
                                                        children: e.category
                                                    }), (0, l.jsx)(n(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "name-product body-md-2 fw-semibold text-secondary link",
                                                        children: e.title
                                                    })]
                                                }), (0, l.jsxs)("div", {
                                                    className: "group-btn",
                                                    children: [(0, l.jsxs)("p", {
                                                        className: "price-wrap fw-medium",
                                                        children: [(0, l.jsxs)("span", {
                                                            className: "new-price price-text fw-medium",
                                                            children: ["$", e.price.toFixed(3)]
                                                        }), (0, l.jsxs)("span", {
                                                            className: "old-price body-md-2 text-main-2",
                                                            children: ["$", e.oldPrice.toFixed(3)]
                                                        })]
                                                    }), (0, l.jsxs)("ul", {
                                                        className: "list-product-btn flex-row",
                                                        children: [(0, l.jsx)("li", {
                                                            children: (0, l.jsx)(o.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            className: "wishlist",
                                                            children: (0, l.jsx)(m.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(p.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(h.default, {
                                                                productId: e.id
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }, e.id))
                            })
                        }, e.id)), (0, l.jsx)("div", {
                            className: "sw-dot-default sw-pagination-products justify-content-center spd51"
                        })]
                    })]
                })
            }
        },
        2338: (e, s, a) => {
            "use strict";
            a.d(s, {
                U: () => i,
                q: () => l
            });
            let l = [{
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
                i = [{
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
        2543: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => o
            });
            var l = a(5155),
                i = a(9137);
            a(2115);
            var t = a(7677),
                c = a(6874),
                n = a.n(c),
                d = a(6766),
                r = a(4105);

            function o() {
                return (0, l.jsxs)("section", {
                    className: "box-btn-slide-item",
                    children: [(0, l.jsxs)("div", {
                        className: "flat-title wow fadeInUp",
                        "data-wow-delay": "0s",
                        children: [(0, l.jsx)("h5", {
                            className: "fw-semibold",
                            children: "From the blog"
                        }), (0, l.jsxs)("div", {
                            className: "box-btn-slide relative",
                            children: [(0, l.jsx)("div", {
                                className: "swiper-button-prev nav-swiper nav-prev-products snbp45",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-left-lg"
                                })
                            }), (0, l.jsx)("div", {
                                className: "swiper-button-next nav-swiper nav-next-products snbn45",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-right-lg"
                                })
                            })]
                        })]
                    }), (0, l.jsx)(t.RC, {
                        modules: [r.Vx],
                        navigation: {
                            prevEl: ".snbp45",
                            nextEl: ".snbn45"
                        },
                        className: "swiper tf-sw-products",
                        spaceBetween: 30,
                        children: i.tv.map((e, s) => (0, l.jsx)(t.qr, {
                            className: "swiper-slide",
                            children: (0, l.jsxs)("div", {
                                className: "news-item hover-img gap-10".concat(e.hasAnimation ? " wow fadeInUp" : ""),
                                ...e.hasAnimation && {
                                    "data-wow-delay": e.wowDelay
                                },
                                children: [(0, l.jsxs)(n(), {
                                    href: "/blog-detail",
                                    className: "entry_image img-style relative",
                                    children: [(0, l.jsx)(d.default, {
                                        src: e.imgSrc,
                                        alt: "",
                                        className: "lazyload",
                                        width: 426,
                                        height: 240
                                    }), (0, l.jsx)("p", {
                                        className: "entry_tag text-black d-block body-text-3",
                                        children: e.tag
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "content gap-0",
                                    children: [(0, l.jsx)("p", {
                                        className: "caption text-main-2",
                                        children: e.date
                                    }), (0, l.jsx)(n(), {
                                        href: "/blog-detail",
                                        className: "link fw-semibold body-md-2",
                                        children: e.title
                                    })]
                                })]
                            })
                        }, s))
                    })]
                })
            }
        },
        3825: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => t
            });
            var l = a(5155),
                i = a(2115);
            let t = e => {
                let {
                    style: s = 1,
                    targetDate: a = "2025-06-31T23:59:59"
                } = e, [t, c] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    c(!0)
                }, []);
                let n = () => {
                        let e = +new Date(a) - +new Date;
                        return e > 0 ? {
                            days: Math.floor(e / 864e5),
                            hours: Math.floor(e / 36e5 % 24),
                            minutes: Math.floor(e / 1e3 / 60 % 60),
                            seconds: Math.floor(e / 1e3 % 60)
                        } : null
                    },
                    [d, r] = (0, i.useState)(n());
                return ((0, i.useEffect)(() => {
                    let e = setInterval(() => {
                        r(n())
                    }, 1e3);
                    return () => clearInterval(e)
                }, [a]), d) ? (0, l.jsxs)(l.Fragment, {
                    children: [t ? (0, l.jsxs)(l.Fragment, {
                        children: [1 == s && (0, l.jsxs)("div", {
                            "aria-hidden": "true",
                            className: "countdown__timer",
                            children: [(0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--0 js-countdown__value--0",
                                    children: d.days
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "D :"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--1 js-countdown__value--1",
                                    children: d.hours
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "H :"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--2 js-countdown__value--2",
                                    children: d.minutes
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "M :"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--3 js-countdown__value--3",
                                    children: d.seconds
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "S"
                                })]
                            })]
                        }), 2 == s && (0, l.jsxs)("div", {
                            "aria-hidden": "true",
                            className: "countdown__timer",
                            children: [(0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--0 js-countdown__value--0",
                                    children: d.days
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "Days"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--1 js-countdown__value--1",
                                    children: d.hours
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "Hours"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--2 js-countdown__value--2",
                                    children: d.minutes
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "Mins"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--3 js-countdown__value--3",
                                    children: d.seconds
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "Secs"
                                })]
                            })]
                        }), 3 == s && (0, l.jsxs)("div", {
                            "aria-hidden": "true",
                            className: "countdown__timer",
                            children: [(0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--0 js-countdown__value--0",
                                    children: d.days
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "DAYS"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--1 js-countdown__value--1",
                                    children: d.hours
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "HOURS"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--2 js-countdown__value--2",
                                    children: d.minutes
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "MINUTES"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--3 js-countdown__value--3",
                                    children: d.seconds
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "SECONDS"
                                })]
                            })]
                        }), 4 == s && (0, l.jsxs)("div", {
                            "aria-hidden": "true",
                            class: "countdown__timer",
                            children: [(0, l.jsxs)("span", {
                                class: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    class: "countdown__value countdown__value--2 js-countdown__value--2",
                                    children: d.minutes
                                }), (0, l.jsx)("span", {
                                    class: "countdown__label",
                                    children: ":"
                                })]
                            }), (0, l.jsxs)("span", {
                                class: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    class: "countdown__value countdown__value--3 js-countdown__value--3",
                                    children: d.seconds
                                }), (0, l.jsx)("span", {
                                    class: "countdown__label"
                                })]
                            })]
                        }), 5 == s && (0, l.jsxs)("div", {
                            "aria-hidden": "true",
                            className: "countdown__timer",
                            children: [(0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--0 js-countdown__value--0",
                                    children: d.days
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "d :"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--1 js-countdown__value--1",
                                    children: d.hours
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "h :"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--2 js-countdown__value--2",
                                    children: d.minutes
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "m :"
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "countdown__item",
                                children: [(0, l.jsx)("span", {
                                    className: "countdown__value countdown__value--3 js-countdown__value--3",
                                    children: d.seconds
                                }), (0, l.jsx)("span", {
                                    className: "countdown__label",
                                    children: "s"
                                })]
                            })]
                        })]
                    }) : "", 6 == s && (0, l.jsxs)("div", {
                        "aria-hidden": "true",
                        className: "countdown__timer",
                        children: [(0, l.jsxs)("span", {
                            className: "countdown__item",
                            children: [(0, l.jsx)("span", {
                                className: "countdown__value countdown__value--0 js-countdown__value--0",
                                children: d.days
                            }), (0, l.jsx)("span", {
                                className: "countdown__label",
                                children: "D"
                            })]
                        }), (0, l.jsxs)("span", {
                            className: "countdown__item",
                            children: [(0, l.jsx)("span", {
                                className: "countdown__value countdown__value--1 js-countdown__value--1",
                                children: d.hours
                            }), (0, l.jsx)("span", {
                                className: "countdown__label",
                                children: "H"
                            })]
                        }), (0, l.jsxs)("span", {
                            className: "countdown__item",
                            children: [(0, l.jsx)("span", {
                                className: "countdown__value countdown__value--2 js-countdown__value--2",
                                children: d.minutes
                            }), (0, l.jsx)("span", {
                                className: "countdown__label",
                                children: "M"
                            })]
                        }), (0, l.jsxs)("span", {
                            className: "countdown__item",
                            children: [(0, l.jsx)("span", {
                                className: "countdown__value countdown__value--3 js-countdown__value--3",
                                children: d.seconds
                            }), (0, l.jsx)("span", {
                                className: "countdown__label",
                                children: "S"
                            })]
                        })]
                    })]
                }) : (0, l.jsx)("div", {
                    children: "Time's up!"
                })
            }
        },
        4948: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => u
            });
            var l = a(5155),
                i = a(8001);
            a(2115);
            var t = a(7677),
                c = a(6874),
                n = a.n(c),
                d = a(6766),
                r = a(4105),
                o = a(6883),
                m = a(9640),
                p = a(7501),
                h = a(9822);

            function u() {
                return (0, l.jsxs)("section", {
                    className: "box-btn-slide-item",
                    children: [(0, l.jsxs)("div", {
                        className: "flat-title wow fadeInUp",
                        "data-wow-delay": "0s",
                        children: [(0, l.jsx)("h5", {
                            className: "fw-semibold",
                            children: "Best Seller"
                        }), (0, l.jsxs)("div", {
                            className: "box-btn-slide relative",
                            children: [(0, l.jsx)("div", {
                                className: "swiper-button-prev nav-swiper nav-prev-products snbp46",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-left-lg"
                                })
                            }), (0, l.jsx)("div", {
                                className: "swiper-button-next nav-swiper nav-next-products snbn46",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-right-lg"
                                })
                            })]
                        })]
                    }), (0, l.jsxs)(t.RC, {
                        modules: [r.Vx],
                        navigation: {
                            prevEl: ".snbp46",
                            nextEl: ".snbn46"
                        },
                        className: "swiper tf-sw-products",
                        spaceBetween: 30,
                        children: [(0, l.jsx)(t.qr, {
                            className: "swiper-slide",
                            children: (0, l.jsx)("ul", {
                                className: "product-list-wrap wow fadeInUp",
                                "data-wow-delay": "0s",
                                children: i.RG.map(e => (0, l.jsx)("li", {
                                    children: (0, l.jsxs)("div", {
                                        className: "card-product style-row row-small-2",
                                        children: [(0, l.jsx)("div", {
                                            className: "card-product-wrapper img-small",
                                            children: (0, l.jsxs)(n(), {
                                                href: "/product-detail/".concat(e.id),
                                                className: "product-img",
                                                children: [(0, l.jsx)(d.default, {
                                                    className: "img-product lazyload",
                                                    src: e.imgSrc,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                }), (0, l.jsx)(d.default, {
                                                    className: "img-hover lazyload",
                                                    src: e.imgHover,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                })]
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "card-product-info",
                                            children: (0, l.jsxs)("div", {
                                                className: "box-title",
                                                children: [(0, l.jsx)("div", {
                                                    className: "bg-white relative z-5",
                                                    children: (0, l.jsx)(n(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "name-product body-text-3 link",
                                                        children: e.title
                                                    })
                                                }), (0, l.jsxs)("div", {
                                                    className: "group-btn",
                                                    children: [(0, l.jsxs)("p", {
                                                        className: "price-wrap fw-semibold",
                                                        children: [(0, l.jsxs)("span", {
                                                            className: "new-price",
                                                            children: ["$", e.price.toFixed(3)]
                                                        }), e.oldPrice && (0, l.jsxs)("span", {
                                                            className: "old-price",
                                                            children: ["$", e.oldPrice.toFixed(3)]
                                                        })]
                                                    }), (0, l.jsxs)("ul", {
                                                        className: "list-product-btn style-2 flex-row",
                                                        children: [(0, l.jsx)("li", {
                                                            children: (0, l.jsx)(o.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            className: "d-none d-sm-block wishlist",
                                                            children: (0, l.jsx)(m.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(p.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            className: "d-none d-sm-block",
                                                            children: (0, l.jsx)(h.default, {
                                                                productId: e.id
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }, e.id))
                            })
                        }), (0, l.jsx)(t.qr, {
                            className: "swiper-slide",
                            children: (0, l.jsx)("ul", {
                                className: "product-list-wrap",
                                children: i.RG.map(e => (0, l.jsx)("li", {
                                    children: (0, l.jsxs)("div", {
                                        className: "card-product style-row row-small-2",
                                        children: [(0, l.jsx)("div", {
                                            className: "card-product-wrapper img-small",
                                            children: (0, l.jsxs)(n(), {
                                                href: "/product-detail/".concat(e.id),
                                                className: "product-img",
                                                children: [(0, l.jsx)(d.default, {
                                                    className: "img-product lazyload",
                                                    src: e.imgSrc,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                }), (0, l.jsx)(d.default, {
                                                    className: "img-hover lazyload",
                                                    src: e.imgHover,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                })]
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "card-product-info",
                                            children: (0, l.jsxs)("div", {
                                                className: "box-title",
                                                children: [(0, l.jsx)("div", {
                                                    className: "bg-white relative z-5",
                                                    children: (0, l.jsx)(n(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "name-product body-text-3 link",
                                                        children: e.title
                                                    })
                                                }), (0, l.jsxs)("div", {
                                                    className: "group-btn",
                                                    children: [(0, l.jsxs)("p", {
                                                        className: "price-wrap fw-semibold",
                                                        children: [(0, l.jsxs)("span", {
                                                            className: "new-price",
                                                            children: ["$", e.price.toFixed(3)]
                                                        }), e.oldPrice && (0, l.jsxs)("span", {
                                                            className: "old-price",
                                                            children: ["$", e.oldPrice.toFixed(3)]
                                                        })]
                                                    }), (0, l.jsxs)("ul", {
                                                        className: "list-product-btn style-2 flex-row",
                                                        children: [(0, l.jsx)("li", {
                                                            children: (0, l.jsx)(o.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            className: "d-none d-sm-block wishlist",
                                                            children: (0, l.jsx)(m.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(p.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            className: "d-none d-sm-block",
                                                            children: (0, l.jsx)(h.default, {
                                                                productId: e.id
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }, e.id))
                            })
                        })]
                    })]
                })
            }
        },
        5069: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => u
            });
            var l = a(5155),
                i = a(8001);
            a(2115);
            var t = a(7677),
                c = a(6874),
                n = a.n(c),
                d = a(6766),
                r = a(4105),
                o = a(6883),
                m = a(9640),
                p = a(7501),
                h = a(9822);

            function u() {
                return (0, l.jsxs)("section", {
                    className: "tf-sp-2 pt-0 box-btn-slide-item",
                    children: [(0, l.jsxs)("div", {
                        className: "flat-title wow fadeInUp",
                        "data-wow-delay": "0s",
                        children: [(0, l.jsx)("h5", {
                            className: "fw-semibold",
                            children: "Laptops, Computers & Tablets"
                        }), (0, l.jsxs)("div", {
                            className: "box-btn-slide relative",
                            children: [(0, l.jsx)("div", {
                                className: "swiper-button-prev nav-swiper nav-prev-products snbp50",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-left-lg"
                                })
                            }), (0, l.jsx)("div", {
                                className: "swiper-button-next nav-swiper nav-next-products snbn50",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-right-lg"
                                })
                            })]
                        })]
                    }), (0, l.jsxs)(t.RC, {
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
                                slidesPerView: 4,
                                spaceBetween: 30
                            }
                        },
                        spaceBetween: 15,
                        modules: [r.Vx, r.dK],
                        pagination: {
                            clickable: !0,
                            el: ".spd50"
                        },
                        navigation: {
                            prevEl: ".snbp50",
                            nextEl: ".snbn50"
                        },
                        children: [i.Yh.map(e => (0, l.jsx)(t.qr, {
                            className: "swiper-slide",
                            children: (0, l.jsxs)("div", {
                                className: "card-product wow fadeInUp",
                                "data-wow-delay": e.delay || "0s",
                                children: [(0, l.jsxs)("div", {
                                    className: "card-product-wrapper",
                                    children: [(0, l.jsxs)(n(), {
                                        href: "/product-detail/".concat(e.id),
                                        className: "product-img",
                                        children: [(0, l.jsx)(d.default, {
                                            className: "img-product lazyload",
                                            src: e.imgSrc,
                                            alt: "image-product",
                                            width: e.width,
                                            height: e.height
                                        }), (0, l.jsx)(d.default, {
                                            className: "img-hover lazyload",
                                            src: e.imgHover,
                                            alt: "image-product",
                                            width: e.width,
                                            height: e.height
                                        })]
                                    }), (0, l.jsxs)("ul", {
                                        className: "list-product-btn",
                                        children: [(0, l.jsx)("li", {
                                            children: (0, l.jsx)(o.default, {
                                                tooltipClass: "tooltip-left",
                                                productId: e.id
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "d-none d-sm-block wishlist",
                                            children: (0, l.jsx)(m.default, {
                                                tooltipClass: "tooltip-left",
                                                productId: e.id
                                            })
                                        }), (0, l.jsx)("li", {
                                            children: (0, l.jsx)(p.default, {
                                                productId: e.id,
                                                tooltipClass: "tooltip-left"
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "d-none d-sm-block",
                                            children: (0, l.jsx)(h.default, {
                                                productId: e.id,
                                                tooltipClass: "tooltip-left"
                                            })
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "card-product-info",
                                    children: (0, l.jsxs)("div", {
                                        className: "box-title",
                                        children: [(0, l.jsxs)("div", {
                                            className: "d-flex flex-column",
                                            children: [(0, l.jsx)("p", {
                                                className: "caption text-main-2 font-2",
                                                children: e.category
                                            }), (0, l.jsx)(n(), {
                                                href: "/product-detail/".concat(e.id),
                                                className: "name-product body-md-2 fw-semibold text-secondary link",
                                                children: e.title
                                            })]
                                        }), (0, l.jsxs)("p", {
                                            className: "price-wrap fw-medium",
                                            children: [(0, l.jsxs)("span", {
                                                className: "new-price price-text fw-medium mb-0",
                                                children: ["$", e.price.toFixed(3).replace(".", ",")]
                                            }), e.oldPrice && (0, l.jsxs)("span", {
                                                className: "old-price body-md-2 text-main-2 fw-normal",
                                                children: ["$", e.oldPrice.toFixed(3).replace(".", ",")]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }, e.id)), (0, l.jsx)("div", {
                            className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd50"
                        })]
                    })]
                })
            }
        },
        5659: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => t
            });
            var l = a(5155),
                i = a(31);

            function t() {
                let {
                    cartProducts: e
                } = (0, i.F)();
                return (0, l.jsx)(l.Fragment, {
                    children: e.length
                })
            }
        },
        5695: (e, s, a) => {
            "use strict";
            var l = a(8999);
            a.o(l, "usePathname") && a.d(s, {
                usePathname: function() {
                    return l.usePathname
                }
            })
        },
        6278: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 6883)), Promise.resolve().then(a.bind(a, 9822)), Promise.resolve().then(a.bind(a, 7501)), Promise.resolve().then(a.bind(a, 9640)), Promise.resolve().then(a.bind(a, 5659)), Promise.resolve().then(a.bind(a, 8762)), Promise.resolve().then(a.bind(a, 2988)), Promise.resolve().then(a.bind(a, 9136)), Promise.resolve().then(a.bind(a, 3603)), Promise.resolve().then(a.bind(a, 6708)), Promise.resolve().then(a.bind(a, 3340)), Promise.resolve().then(a.bind(a, 2867)), Promise.resolve().then(a.bind(a, 7526)), Promise.resolve().then(a.bind(a, 7206)), Promise.resolve().then(a.bind(a, 2543)), Promise.resolve().then(a.bind(a, 4948)), Promise.resolve().then(a.bind(a, 1850)), Promise.resolve().then(a.bind(a, 6336)), Promise.resolve().then(a.bind(a, 5069)), Promise.resolve().then(a.bind(a, 2038)), Promise.resolve().then(a.bind(a, 8891)), Promise.resolve().then(a.bind(a, 1989)), Promise.resolve().then(a.t.bind(a, 6874, 23)), Promise.resolve().then(a.t.bind(a, 3063, 23))
        },
        6336: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => x
            });
            var l = a(5155),
                i = a(8001),
                t = a(2115),
                c = a(7677),
                n = a(6874),
                d = a.n(n),
                r = a(6766),
                o = a(4105),
                m = a(6883),
                p = a(9640),
                h = a(7501),
                u = a(9822);

            function x() {
                let [e, s] = (0, t.useState)("Feature"), [a, n] = (0, t.useState)(i.RF);
                (0, t.useEffect)(() => {
                    n(i.RF.filter(s => s.filterTab.includes(e)))
                }, [e]);
                let x = e => {
                    s(e)
                };
                return (0, l.jsxs)("div", {
                    className: "tf-sp-2 flat-animate-tab box-btn-slide-item",
                    children: [(0, l.jsxs)("div", {
                        className: "flat-title wow fadeInUp",
                        "data-wow-delay": "0s",
                        children: [(0, l.jsx)("div", {
                            className: "flat-title-tab-default",
                            children: (0, l.jsx)("ul", {
                                className: "menu-tab-line",
                                role: "tablist",
                                children: [{
                                    id: 1,
                                    name: "Feature"
                                }, {
                                    id: 2,
                                    name: "Toprate"
                                }, {
                                    id: 3,
                                    name: "On sale"
                                }].map(s => (0, l.jsx)("li", {
                                    className: "nav-tab-item d-flex",
                                    onClick: () => x(s.name),
                                    children: (0, l.jsx)("a", {
                                        className: "tab-link main-title link fw-semibold ".concat(e === s.name ? "active" : ""),
                                        children: s.name
                                    })
                                }, s.id))
                            })
                        }), (0, l.jsxs)("div", {
                            className: "box-btn-slide relative",
                            children: [(0, l.jsx)("div", {
                                className: "swiper-button-prev nav-swiper nav-prev-products snbp49",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-left-lg"
                                })
                            }), (0, l.jsx)("div", {
                                className: "swiper-button-next nav-swiper nav-next-products snbn49",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-right-lg"
                                })
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: "tab-content",
                        children: (0, l.jsx)("div", {
                            className: "tab-pane active show",
                            id: "feature",
                            role: "tabpanel",
                            children: (0, l.jsxs)(c.RC, {
                                className: "swiper tf-sw-products",
                                spaceBetween: 15,
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
                                        slidesPerView: 4,
                                        spaceBetween: 30
                                    }
                                },
                                modules: [o.Vx, o.dK],
                                pagination: {
                                    clickable: !0,
                                    el: ".spd49"
                                },
                                navigation: {
                                    prevEl: ".snbp49",
                                    nextEl: ".snbn49"
                                },
                                children: [a.map((e, s) => (0, l.jsx)(c.qr, {
                                    className: "swiper-slide",
                                    children: (0, l.jsxs)("div", {
                                        className: "card-product ".concat(s < 5 ? "wow fadeInLeft" : ""),
                                        ...s < 5 && {
                                            "data-wow-delay": e.delay
                                        },
                                        children: [(0, l.jsxs)("div", {
                                            className: "card-product-wrapper",
                                            children: [(0, l.jsxs)(d(), {
                                                href: "/product-detail/".concat(e.id),
                                                className: "product-img",
                                                children: [(0, l.jsx)(r.default, {
                                                    className: "img-product lazyload",
                                                    src: e.imgSrc,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                }), (0, l.jsx)(r.default, {
                                                    className: "img-hover lazyload",
                                                    src: e.imgHover,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                })]
                                            }), (0, l.jsxs)("ul", {
                                                className: "list-product-btn",
                                                children: [(0, l.jsx)("li", {
                                                    children: (0, l.jsx)(m.default, {
                                                        tooltipClass: "tooltip-left",
                                                        productId: e.id
                                                    })
                                                }), (0, l.jsx)("li", {
                                                    className: "d-none d-sm-block wishlist",
                                                    children: (0, l.jsx)(p.default, {
                                                        tooltipClass: "tooltip-left",
                                                        productId: e.id
                                                    })
                                                }), (0, l.jsx)("li", {
                                                    children: (0, l.jsx)(h.default, {
                                                        productId: e.id,
                                                        tooltipClass: "tooltip-left"
                                                    })
                                                }), (0, l.jsx)("li", {
                                                    className: "d-none d-sm-block",
                                                    children: (0, l.jsx)(u.default, {
                                                        productId: e.id,
                                                        tooltipClass: "tooltip-left"
                                                    })
                                                })]
                                            })]
                                        }), (0, l.jsx)("div", {
                                            className: "card-product-info",
                                            children: (0, l.jsxs)("div", {
                                                className: "box-title",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "d-flex flex-column",
                                                    children: [(0, l.jsx)("p", {
                                                        className: "caption text-main-2 font-2",
                                                        children: e.category
                                                    }), (0, l.jsx)(d(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "name-product body-md-2 fw-semibold text-secondary link",
                                                        children: e.title
                                                    })]
                                                }), (0, l.jsxs)("p", {
                                                    className: "price-wrap fw-medium",
                                                    children: [(0, l.jsxs)("span", {
                                                        className: "new-price price-text fw-medium mb-0",
                                                        children: ["$", e.price.toFixed(3)]
                                                    }), e.oldPrice && (0, l.jsxs)("span", {
                                                        className: "old-price body-md-2 text-main-2 fw-normal",
                                                        children: ["$", e.oldPrice.toFixed(3)]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }, e.id)), (0, l.jsx)("div", {
                                    className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd49"
                                })]
                            })
                        })
                    })]
                })
            }
        },
        6708: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => t
            });
            var l = a(5155),
                i = a(31);

            function t() {
                let {
                    wishList: e
                } = (0, i.F)();
                return (0, l.jsx)(l.Fragment, {
                    children: e.length
                })
            }
        },
        6883: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => t
            });
            var l = a(5155),
                i = a(31);

            function t(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, {
                    addProductToCart: t,
                    isAddedToCartProducts: c
                } = (0, i.F)();
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("a", {
                        href: "#shoppingCart",
                        "data-bs-toggle": "offcanvas",
                        onClick: () => t(s),
                        className: "box-icon add-to-cart btn-icon-action hover-tooltip ".concat(a),
                        children: [(0, l.jsx)("span", {
                            className: "icon icon-cart2"
                        }), (0, l.jsx)("span", {
                            className: "tooltip",
                            children: c(s) ? "Already Added" : "Add to Cart"
                        })]
                    })
                })
            }
        },
        7206: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => r
            });
            var l = a(5155),
                i = a(6766),
                t = a(7677),
                c = a(6874),
                n = a.n(c),
                d = a(4105);

            function r() {
                return (0, l.jsx)("section", {
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)(t.RC, {
                            className: "swiper tf-sw-categories overflow-xxl-visible",
                            breakpoints: {
                                0: {
                                    slidesPerView: 1
                                },
                                575: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                }
                            },
                            spaceBetween: 15,
                            modules: [d.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd44"
                            },
                            children: [(0, l.jsx)(t.qr, {
                                className: "swiper-slide",
                                children: (0, l.jsxs)(n(), {
                                    href: "/shop-default",
                                    className: "banner-image-product-2 style-2 type-sp-2 hover-img d-block",
                                    children: [(0, l.jsx)("div", {
                                        className: "item-image img-style overflow-visible position3",
                                        children: (0, l.jsx)(i.default, {
                                            src: "/images/item/camera-1.png",
                                            alt: "",
                                            className: "lazyload",
                                            width: 231,
                                            height: 230
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "item-banner has-bg-img ps-xxl-3",
                                        style: {
                                            backgroundImage: "url(/images/banner/banner-24.jpg)"
                                        },
                                        children: (0, l.jsxs)("div", {
                                            className: "inner",
                                            children: [(0, l.jsxs)("div", {
                                                className: "box-sale-wrap box-price type-3 relative ps-0",
                                                children: [(0, l.jsx)("p", {
                                                    className: "small-text sub-price",
                                                    children: "From"
                                                }), (0, l.jsx)("p", {
                                                    className: "main-title-2 num-price",
                                                    children: "$1.399"
                                                })]
                                            }), (0, l.jsxs)("h4", {
                                                className: "name fw-normal text-white lh-lg-38 text-xxl-center text-line-clamp-2",
                                                children: ["ThinkPad X1", (0, l.jsx)("span", {
                                                    className: "fw-xxl-bold",
                                                    children: "Carbon"
                                                }), (0, l.jsx)("br", {
                                                    className: ""
                                                }), (0, l.jsx)("span", {
                                                    className: "fw-bold d-xxxl-none",
                                                    children: "4K HDR-Core i7 32GB"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), (0, l.jsx)(t.qr, {
                                className: "swiper-slide",
                                children: (0, l.jsxs)(n(), {
                                    href: "/shop-default",
                                    className: "banner-image-product-2 type-sp-2 hover-img d-block",
                                    children: [(0, l.jsx)("div", {
                                        className: "item-image img-style overflow-visible position2",
                                        children: (0, l.jsx)(i.default, {
                                            src: "/images/item/laptop.png",
                                            alt: "",
                                            className: "lazyload",
                                            width: 239,
                                            height: 227
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "item-banner has-bg-img",
                                        style: {
                                            backgroundImage: "url(/images/banner/banner-3.jpg)"
                                        },
                                        children: (0, l.jsxs)("div", {
                                            className: "inner justify-content-xl-end",
                                            children: [(0, l.jsxs)("div", {
                                                className: "box-sale-wrap type-3 relative",
                                                children: [(0, l.jsx)("p", {
                                                    className: "small-text",
                                                    children: "From"
                                                }), (0, l.jsx)("p", {
                                                    className: "main-title-2",
                                                    children: "$399"
                                                })]
                                            }), (0, l.jsxs)("h4", {
                                                className: "name fw-normal text-white lh-lg-38 text-xl-end",
                                                children: ["Lenovo ThinkBook", (0, l.jsx)("br", {}), (0, l.jsx)("span", {
                                                    className: "fw-bold",
                                                    children: " 8GB/MX450 2GB "
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "sw-dot-default sw-pagination-categories justify-content-center spd44"
                            })]
                        })
                    })
                })
            }
        },
        7501: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => c
            });
            var l = a(5155),
                i = a(31),
                t = a(8001);

            function c(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, c = t.Oi.filter(e => e.id == s)[0] || t.Oi[0], {
                    setQuickViewItem: n
                } = (0, i.F)();
                return (0, l.jsxs)("a", {
                    href: "#quickView",
                    "data-bs-toggle": "modal",
                    onClick: () => n(c),
                    className: "box-icon quickview btn-icon-action hover-tooltip ".concat(a),
                    children: [(0, l.jsx)("span", {
                        className: "icon icon-view"
                    }), (0, l.jsx)("span", {
                        className: "tooltip",
                        children: "Quick View"
                    })]
                })
            }
        },
        7526: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => c
            });
            var l = a(5155),
                i = a(2115);
            let t = [{
                rel: "",
                label: "All categories"
            }, {
                rel: "apple-products",
                label: "Apple products"
            }, {
                rel: "audio-equipments",
                label: "Audio Equipments"
            }, {
                rel: "camera-video",
                label: "Camera & Video"
            }, {
                rel: "game-room-furniture",
                label: "Game & Room Furniture"
            }, {
                rel: "gaming-accessories",
                label: "Gaming Accessories"
            }, {
                rel: "headphone",
                label: "Headphone"
            }, {
                rel: "laptop-tablet",
                label: "Laptop & Tablet"
            }, {
                rel: "server-workstation",
                label: "Server & Workstation"
            }, {
                rel: "smartphone",
                label: "Smartphone"
            }, {
                rel: "smartwatch",
                label: "Smartwatch"
            }, {
                rel: "storage-digital-devices",
                label: "Storage & Digital Devices"
            }, {
                rel: "tv-computer-screen",
                label: "TV & Computer Screen"
            }];

            function c(e) {
                let {
                    parentClass: s = "form-search-product style-2"
                } = e, [a, c] = (0, i.useState)(!1), [n, d] = (0, i.useState)("All categories"), r = (0, i.useRef)(null);
                return (0, i.useEffect)(() => {
                    let e = e => {
                        r.current && !r.current.contains(e.target) && c(!1)
                    };
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, []), (0, l.jsxs)("form", {
                    ref: r,
                    onSubmit: e => e.preventDefault(),
                    className: s,
                    children: [(0, l.jsxs)("div", {
                        className: "select-category ".concat(a ? "active" : ""),
                        children: [(0, l.jsx)("div", {
                            onClick: () => c(!0),
                            className: "tf-select-custom",
                            children: n
                        }), (0, l.jsxs)("ul", {
                            className: "select-options",
                            style: {
                                display: a ? "block" : "none"
                            },
                            children: [(0, l.jsxs)("div", {
                                className: "header-select-option",
                                children: [(0, l.jsx)("span", {
                                    children: "Select Categories"
                                }), (0, l.jsx)("span", {
                                    className: "close-option",
                                    onClick: () => c(!1),
                                    children: (0, l.jsx)("i", {
                                        className: "icon-close"
                                    })
                                })]
                            }), t.map((e, s) => (0, l.jsx)("li", {
                                rel: e.rel,
                                onClick: () => {
                                    d(e.label), c(!1)
                                },
                                children: e.label
                            }, s))]
                        }), (0, l.jsxs)("ul", {
                            className: "select-options",
                            children: [(0, l.jsx)("li", {
                                className: "link",
                                rel: "",
                                children: (0, l.jsx)("span", {
                                    children: "All categories"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "apple-products",
                                children: (0, l.jsx)("span", {
                                    children: "Apple products"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "audio-equipments",
                                children: (0, l.jsx)("span", {
                                    children: "Audio Equipments"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "camera-video",
                                children: (0, l.jsx)("span", {
                                    children: "Camera & Video"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "game-room-furniture",
                                children: (0, l.jsx)("span", {
                                    children: "Game & Room Furniture"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "gaming-accessories",
                                children: (0, l.jsx)("span", {
                                    children: "Gaming Accessories"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "headphone",
                                children: (0, l.jsx)("span", {
                                    children: "Headphone"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "laptop-tablet",
                                children: (0, l.jsx)("span", {
                                    children: "Laptop & Tablet"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "server-workstation",
                                children: (0, l.jsx)("span", {
                                    children: "Server & Workstation"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "smartphone",
                                children: (0, l.jsx)("span", {
                                    children: "Smartphone"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "smartwatch",
                                children: (0, l.jsx)("span", {
                                    children: "Smartwatch"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "storage-digital-devices",
                                children: (0, l.jsx)("span", {
                                    children: "Storage & Digital Devices"
                                })
                            }), (0, l.jsx)("li", {
                                className: "link",
                                rel: "tv-computer-screen",
                                children: (0, l.jsx)("span", {
                                    children: "TV & Computer Screen"
                                })
                            })]
                        })]
                    }), (0, l.jsx)("span", {
                        className: "br-line type-vertical bg-line"
                    }), (0, l.jsx)("fieldset", {
                        children: (0, l.jsx)("input", {
                            type: "text",
                            placeholder: "Search for products"
                        })
                    }), (0, l.jsx)("button", {
                        type: "submit",
                        className: "btn-submit-form",
                        children: (0, l.jsx)("i", {
                            className: "icon-search"
                        })
                    })]
                })
            }
        },
        8762: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => t
            });
            var l = a(5155),
                i = a(31);

            function t() {
                let {
                    compareItem: e
                } = (0, i.F)();
                return (0, l.jsx)(l.Fragment, {
                    children: e.length
                })
            }
        },
        8891: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => u
            });
            var l = a(5155),
                i = a(8001);
            a(2115);
            var t = a(7677),
                c = a(6874),
                n = a.n(c),
                d = a(6766),
                r = a(4105),
                o = a(6883),
                m = a(9640),
                p = a(7501),
                h = a(9822);

            function u() {
                return (0, l.jsxs)("section", {
                    className: "box-btn-slide-item",
                    children: [(0, l.jsxs)("div", {
                        className: "flat-title wow fadeInUp",
                        "data-wow-delay": "0s",
                        children: [(0, l.jsx)("h5", {
                            className: "fw-semibold",
                            children: "Recently Viewed"
                        }), (0, l.jsxs)("div", {
                            className: "box-btn-slide relative",
                            children: [(0, l.jsx)("div", {
                                className: "swiper-button-prev nav-swiper nav-prev-products snbp52",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-left-lg"
                                })
                            }), (0, l.jsx)("div", {
                                className: "swiper-button-next nav-swiper nav-next-products snbn52",
                                children: (0, l.jsx)("i", {
                                    className: "icon-arrow-right-lg"
                                })
                            })]
                        })]
                    }), (0, l.jsxs)(t.RC, {
                        modules: [r.Vx, r.dK],
                        pagination: {
                            clickable: !0,
                            el: ".spd52"
                        },
                        navigation: {
                            prevEl: ".snbp52",
                            nextEl: ".snbn52"
                        },
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
                                slidesPerView: 4,
                                spaceBetween: 30
                            }
                        },
                        spaceBetween: 15,
                        children: [i.K3.map(e => (0, l.jsx)(t.qr, {
                            className: "swiper-slide",
                            children: (0, l.jsxs)("div", {
                                className: "card-product wow fadeInUp ".concat(e.styleClass),
                                "data-wow-delay": e.delay,
                                children: [(0, l.jsxs)("div", {
                                    className: "card-product-wrapper",
                                    children: [(0, l.jsxs)(n(), {
                                        href: "/product-detail/".concat(e.id),
                                        className: "product-img",
                                        children: [(0, l.jsx)(d.default, {
                                            className: "img-product lazyload",
                                            src: e.imgSrc,
                                            alt: "image-product",
                                            width: e.width,
                                            height: e.height
                                        }), (0, l.jsx)(d.default, {
                                            className: "img-hover lazyload",
                                            src: e.imgHover,
                                            alt: "image-product",
                                            width: e.width,
                                            height: e.height
                                        })]
                                    }), (0, l.jsxs)("ul", {
                                        className: "list-product-btn",
                                        children: [(0, l.jsx)("li", {
                                            children: (0, l.jsx)(o.default, {
                                                tooltipClass: "tooltip-left",
                                                productId: e.id
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "d-none d-sm-block wishlist",
                                            children: (0, l.jsx)(m.default, {
                                                tooltipClass: "tooltip-left",
                                                productId: e.id
                                            })
                                        }), (0, l.jsx)("li", {
                                            children: (0, l.jsx)(p.default, {
                                                productId: e.id,
                                                tooltipClass: "tooltip-left"
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "d-none d-sm-block",
                                            children: (0, l.jsx)(h.default, {
                                                productId: e.id,
                                                tooltipClass: "tooltip-left"
                                            })
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "card-product-info",
                                    children: (0, l.jsxs)("div", {
                                        className: "box-title",
                                        children: [(0, l.jsxs)("div", {
                                            className: "d-flex flex-column",
                                            children: [(0, l.jsx)("p", {
                                                className: "caption text-main-2 font-2",
                                                children: e.category
                                            }), (0, l.jsx)(n(), {
                                                href: "/product-detail/".concat(e.id),
                                                className: "name-product body-md-2 fw-semibold text-secondary link",
                                                children: e.title
                                            })]
                                        }), (0, l.jsxs)("p", {
                                            className: "price-wrap fw-medium",
                                            children: [(0, l.jsxs)("span", {
                                                className: "new-price price-text fw-medium mb-0",
                                                children: ["$", e.price.toFixed(3)]
                                            }), (0, l.jsxs)("span", {
                                                className: "old-price body-md-2 text-main-2 fw-normal",
                                                children: ["$", e.oldPrice.toFixed(3)]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }, e.id)), (0, l.jsx)("div", {
                            className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd52"
                        })]
                    })]
                })
            }
        },
        9136: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => n
            });
            var l = a(5155),
                i = a(2338);
            a(2115);
            var t = a(4105),
                c = a(7677);

            function n(e) {
                let {
                    parentClass: s = "tf-sp-2 pt-0",
                    hacontainer: a = !0
                } = e;
                return (0, l.jsx)("div", {
                    className: s,
                    children: (0, l.jsx)("div", {
                        className: a ? "container" : "",
                        children: (0, l.jsxs)(c.RC, {
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
                            modules: [t.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd3"
                            },
                            children: [i.q.map((e, s) => (0, l.jsx)(c.qr, {
                                className: "swiper-slide",
                                children: (0, l.jsxs)("div", {
                                    className: "tf-icon-box wow fadeInLeft",
                                    "data-wow-delay": e.delay,
                                    children: [(0, l.jsx)("div", {
                                        className: "icon-box",
                                        children: (0, l.jsx)("i", {
                                            className: "icon ".concat(e.icon)
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "content",
                                        children: [(0, l.jsx)("p", {
                                            className: "body-text fw-semibold",
                                            children: e.title
                                        }), (0, l.jsx)("p", {
                                            className: "body-text-3",
                                            children: e.description
                                        })]
                                    })]
                                })
                            }, s)), (0, l.jsx)("div", {
                                className: "sw-pagination-iconbox sw-dot-default justify-content-center spd3"
                            })]
                        })
                    })
                })
            }
        },
        9137: (e, s, a) => {
            "use strict";
            a.d(s, {
                A9: () => t,
                XW: () => l,
                tg: () => c,
                tv: () => i
            });
            let l = [{
                    id: 1,
                    imgSrc: "/images/blog/blog-26.jpg",
                    width: 426,
                    height: 240,
                    date: "28 Apr 2022",
                    title: "GameConsole Destiny Special Edition"
                }],
                i = [{
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
                t = [{
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
                c = [{
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
        },
        9640: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => t
            });
            var l = a(5155),
                i = a(31);

            function t(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, {
                    addToWishlist: t,
                    isAddedtoWishlist: c
                } = (0, i.F)();
                return (0, l.jsxs)("a", {
                    href: "#",
                    onClick: e => {
                        e.preventDefault(), t(s)
                    },
                    className: "box-icon btn-icon-action hover-tooltip ".concat(a),
                    children: [(0, l.jsx)("span", {
                        className: "icon ".concat(c(s) ? "icon-trash" : "icon-heart2", " ")
                    }), (0, l.jsxs)("span", {
                        className: "tooltip",
                        children: [" ", c(s) ? "Remove Wishlist" : "Add to Wishlist"]
                    })]
                })
            }
        },
        9822: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => t
            });
            var l = a(5155),
                i = a(31);

            function t(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, {
                    addToCompareItem: t,
                    isAddedtoCompareItem: c
                } = (0, i.F)();
                return (0, l.jsxs)("a", {
                    href: "#compare",
                    "data-bs-toggle": "offcanvas",
                    onClick: () => t(s),
                    className: "box-icon btn-icon-action hover-tooltip ".concat(a),
                    children: [(0, l.jsx)("span", {
                        className: "icon icon-compare1"
                    }), (0, l.jsxs)("span", {
                        className: "tooltip",
                        children: [" ", c(s) ? "Compared" : "Compare"]
                    })]
                })
            }
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [5270, 2357, 2331, 2867, 31, 8441, 1684, 7358], () => s(6278)), _N_E = e.O()
    }
]);