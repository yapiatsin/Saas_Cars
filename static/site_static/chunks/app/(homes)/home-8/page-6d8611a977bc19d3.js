(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4725], {
        4682: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => o
            });
            var a = i(5155),
                l = i(8001);
            i(2115);
            var t = i(7677),
                d = i(6874),
                r = i.n(d),
                c = i(6766),
                n = i(4105);

            function o() {
                return (0, a.jsx)("section", {
                    className: "s-banner has-bg-img",
                    style: {
                        backgroundImage: "url(/images/banner/banner-23.jpg)",
                        backgroundPosition: "center"
                    },
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsxs)("div", {
                            className: "content-banner",
                            children: [(0, a.jsxs)("h1", {
                                className: "title fs-xxl-70 text-white",
                                children: [(0, a.jsx)("span", {
                                    className: "fw-2",
                                    children: "Game Console "
                                }), " ", (0, a.jsx)("br", {}), "Destiny Special Edition"]
                            }), (0, a.jsx)("h3", {
                                className: "text-third-2 fw-semibold font-2",
                                children: "$84.700"
                            }), (0, a.jsx)("div", {
                                className: "box-btn",
                                children: (0, a.jsxs)(r(), {
                                    href: "/shop-default",
                                    className: "tf-btn-icon style-white d-inline-flex",
                                    children: [(0, a.jsx)("i", {
                                        className: "icon-circle-chevron-right"
                                    }), (0, a.jsx)("span", {
                                        className: "price-text lh-xl-25 font-2",
                                        children: "Shop now"
                                    })]
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "box-btn-slide-2 sw-nav-effect type-pst-2",
                            children: [(0, a.jsxs)(t.RC, {
                                modules: [n.Vx, n.dK],
                                pagination: {
                                    clickable: !0,
                                    el: ".spd53"
                                },
                                navigation: {
                                    prevEl: ".snbp53",
                                    nextEl: ".snbn53"
                                },
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
                                        spaceBetween: 16
                                    }
                                },
                                spaceBetween: 15,
                                children: [l.Oo.map(e => (0, a.jsx)(t.qr, {
                                    className: "swiper-slide",
                                    children: (0, a.jsxs)("div", {
                                        className: "card-product style-3 style-row type-row-3 h-100 flex-sm-row align-items-start",
                                        children: [(0, a.jsx)("div", {
                                            className: "card-product-wrapper",
                                            children: (0, a.jsxs)(r(), {
                                                href: "/product-detail/".concat(e.id),
                                                className: "product-img",
                                                children: [(0, a.jsx)(c.default, {
                                                    className: "img-product lazyload",
                                                    src: e.imgSrc,
                                                    alt: "image-product",
                                                    width: 500,
                                                    height: 500
                                                }), (0, a.jsx)(c.default, {
                                                    className: "img-hover lazyload",
                                                    src: e.imgHover,
                                                    alt: "image-product",
                                                    width: 500,
                                                    height: 500
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "card-product-info",
                                            children: (0, a.jsxs)("div", {
                                                className: "box-title",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "bg-white relative z-5",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "caption text-main-2 font-2",
                                                        children: e.category
                                                    }), (0, a.jsx)(r(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "name-product body-md-2 fw-semibold text-secondary link line-clamp-xl-3",
                                                        children: e.title
                                                    })]
                                                }), (0, a.jsxs)("p", {
                                                    className: "price-wrap fw-medium",
                                                    children: [(0, a.jsxs)("span", {
                                                        className: "new-price price-text fw-medium",
                                                        children: ["$", e.price.toFixed(3)]
                                                    }), (0, a.jsxs)("span", {
                                                        className: "old-price body-md-2 text-main-2",
                                                        children: ["$", e.oldPrice.toFixed(3)]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "box-btn relative z-6",
                                                    children: (0, a.jsxs)(r(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "tf-btn style-3 hover-link-icon bg-primary btn-large",
                                                        children: [(0, a.jsx)("span", {
                                                            className: "body-md-2 fw-semibold",
                                                            children: "Shop now"
                                                        }), (0, a.jsx)("i", {
                                                            className: "icon-circle-chevron-right link-icon"
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                }, e.id)), (0, a.jsx)("div", {
                                    className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd53"
                                })]
                            }), (0, a.jsx)("div", {
                                className: "d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-products-2 snbp53",
                                children: (0, a.jsx)("i", {
                                    className: "icon-arrow-left-lg"
                                })
                            }), (0, a.jsx)("div", {
                                className: "d-none d-xl-flex swiper-button-next nav-swiper nav-next-products-2 snbn53",
                                children: (0, a.jsx)("i", {
                                    className: "icon-arrow-right-lg"
                                })
                            })]
                        })]
                    })
                })
            }
        },
        4797: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => p
            });
            var a = i(5155),
                l = i(8001);
            i(2115);
            var t = i(7677),
                d = i(6874),
                r = i.n(d),
                c = i(6766),
                n = i(4105),
                o = i(6883),
                m = i(9640),
                h = i(7501),
                x = i(9822);

            function p() {
                return (0, a.jsx)("section", {
                    className: "tf-sp-2 pt-xl-0",
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsxs)("div", {
                            className: "flat-title wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: [(0, a.jsx)("h5", {
                                className: "fw-semibold",
                                children: "New Products"
                            }), (0, a.jsxs)("div", {
                                className: "box-btn-slide relative",
                                children: [(0, a.jsx)("div", {
                                    className: "swiper-button-prev nav-swiper nav-prev-products snbp54",
                                    children: (0, a.jsx)("i", {
                                        className: "icon-arrow-left-lg"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "swiper-button-next nav-swiper nav-next-products snbn54",
                                    children: (0, a.jsx)("i", {
                                        className: "icon-arrow-right-lg"
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)(t.RC, {
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
                            modules: [n.Vx, n.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd54"
                            },
                            navigation: {
                                prevEl: ".snbp54",
                                nextEl: ".snbn54"
                            },
                            children: [l.HM.map(e => (0, a.jsx)(t.qr, {
                                className: "swiper-slide",
                                children: (0, a.jsxs)("div", {
                                    className: "card-product wow fadeInUp",
                                    "data-wow-delay": e.delay,
                                    children: [(0, a.jsxs)("div", {
                                        className: "card-product-wrapper",
                                        children: [(0, a.jsxs)(r(), {
                                            href: "/product-detail/".concat(e.id),
                                            className: "product-img",
                                            children: [(0, a.jsx)(c.default, {
                                                className: "img-product lazyload",
                                                src: e.imgSrc,
                                                alt: "image-product",
                                                width: 500,
                                                height: 500
                                            }), (0, a.jsx)(c.default, {
                                                className: "img-hover lazyload",
                                                src: e.imgHover,
                                                alt: "image-product",
                                                width: 500,
                                                height: 500
                                            })]
                                        }), (0, a.jsxs)("ul", {
                                            className: "list-product-btn",
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(o.default, {
                                                    tooltipClass: "tooltip-left",
                                                    productId: e.id
                                                })
                                            }), (0, a.jsx)("li", {
                                                className: "wishlist",
                                                children: (0, a.jsx)(m.default, {
                                                    tooltipClass: "tooltip-left",
                                                    productId: e.id
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(h.default, {
                                                    productId: e.id,
                                                    tooltipClass: "tooltip-left"
                                                })
                                            }), (0, a.jsx)("li", {
                                                className: "",
                                                children: (0, a.jsx)(x.default, {
                                                    productId: e.id,
                                                    tooltipClass: "tooltip-left"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "card-product-info",
                                        children: (0, a.jsxs)("div", {
                                            className: "box-title",
                                            children: [(0, a.jsxs)("div", {
                                                className: "d-flex flex-column",
                                                children: [(0, a.jsx)("p", {
                                                    className: "caption text-main-2 font-2",
                                                    children: e.category
                                                }), (0, a.jsx)(r(), {
                                                    href: "/product-detail/".concat(e.id),
                                                    className: "name-product body-md-2 fw-semibold text-secondary link",
                                                    children: e.title
                                                })]
                                            }), (0, a.jsxs)("p", {
                                                className: "price-wrap fw-medium",
                                                children: [(0, a.jsxs)("span", {
                                                    className: "new-price price-text fw-medium mb-0",
                                                    children: ["$", e.price.toFixed(3)]
                                                }), (0, a.jsxs)("span", {
                                                    className: "old-price body-md-2 text-main-2 fw-normal",
                                                    children: ["$", e.oldPrice.toFixed(3)]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }, e.id)), (0, a.jsx)("div", {
                                className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd54"
                            })]
                        })]
                    })
                })
            }
        },
        4836: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => p
            });
            var a = i(5155),
                l = i(8001);
            i(2115);
            var t = i(4105),
                d = i(7677),
                r = i(6874),
                c = i.n(r),
                n = i(6766),
                o = i(6883),
                m = i(9640),
                h = i(7501),
                x = i(9822);

            function p() {
                return (0, a.jsx)("section", {
                    className: "tf-sp-2",
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsxs)("div", {
                            className: "flat-title wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: [(0, a.jsx)("h5", {
                                className: "fw-semibold",
                                children: "New Arrivals"
                            }), (0, a.jsxs)("div", {
                                className: "box-btn-slide relative",
                                children: [(0, a.jsx)("div", {
                                    className: "swiper-button-prev nav-swiper nav-prev-products snbp600",
                                    children: (0, a.jsx)("i", {
                                        className: "icon-arrow-left-lg"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "swiper-button-next nav-swiper nav-next-products snbn600",
                                    children: (0, a.jsx)("i", {
                                        className: "icon-arrow-right-lg"
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "slider-wrap style-2",
                            children: [(0, a.jsxs)("div", {
                                className: "width-item-1 banner-product-2 d-none d-xl-block wow fadeInLeft",
                                "data-wow-delay": "0s",
                                children: [(0, a.jsx)("a", {
                                    href: "#",
                                    className: "image h-100",
                                    children: (0, a.jsx)(n.default, {
                                        src: "/images/banner/banner-20.jpg",
                                        alt: "",
                                        className: "lazyload",
                                        width: 800,
                                        height: 1300
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "content text-center",
                                    children: [(0, a.jsx)("div", {
                                        className: "box-top",
                                        children: (0, a.jsx)("p", {
                                            className: "text-white body-text-3 text-uppercase fw-2",
                                            style: {
                                                letterSpacing: "9.8px"
                                            },
                                            children: "New arrival"
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "box-bottom",
                                        children: [(0, a.jsxs)(c(), {
                                            href: "/shop-default",
                                            className: "link h3 mb-0 lh-xl-49 text-white",
                                            children: ["Redmi ", (0, a.jsx)("span", {
                                                className: "fw-2",
                                                children: "Note 9"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "box-price flex-column",
                                            children: [(0, a.jsx)("span", {
                                                className: "text fw-2 price-text text-white",
                                                children: "Starting"
                                            }), (0, a.jsx)("span", {
                                                className: "h2 mb-0 fw-bold text-third-2",
                                                children: "$2.250"
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, a.jsxs)(d.RC, {
                                modules: [t.Vx, t.dK, t.xA],
                                pagination: {
                                    clickable: !0,
                                    el: ".spd600"
                                },
                                navigation: {
                                    prevEl: ".snbp600",
                                    nextEl: ".snbn600"
                                },
                                className: "swiper width-item-2 tf-sw-products",
                                breakpoints: {
                                    0: {
                                        slidesPerView: 2
                                    },
                                    575: {
                                        slidesPerView: 3
                                    },
                                    768: {
                                        slidesPerView: 4
                                    },
                                    992: {
                                        slidesPerView: 4
                                    }
                                },
                                spaceBetween: 15,
                                grid: {
                                    rows: 2,
                                    fill: "row"
                                },
                                children: [l.A_.map(e => (0, a.jsx)(d.qr, {
                                    className: "swiper-slide",
                                    children: (0, a.jsxs)("div", {
                                        className: "card-product style-small style-img-border ",
                                        children: [(0, a.jsxs)("div", {
                                            className: "card-product-wrapper",
                                            children: [(0, a.jsxs)(c(), {
                                                href: "/product-detail/".concat(e.id),
                                                className: "product-img",
                                                children: [(0, a.jsx)(n.default, {
                                                    className: "img-product lazyload",
                                                    src: e.imgSrc,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                }), (0, a.jsx)(n.default, {
                                                    className: "img-hover lazyload",
                                                    src: e.imgHover,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                })]
                                            }), (0, a.jsxs)("ul", {
                                                className: "list-product-btn",
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)(o.default, {
                                                        tooltipClass: "tooltip-left",
                                                        productId: e.id
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    className: "d-none d-sm-block wishlist",
                                                    children: (0, a.jsx)(m.default, {
                                                        tooltipClass: "tooltip-left",
                                                        productId: e.id
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(h.default, {
                                                        productId: e.id,
                                                        tooltipClass: "tooltip-left"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    className: e.compareClass,
                                                    children: (0, a.jsx)(x.default, {
                                                        productId: e.id,
                                                        tooltipClass: "tooltip-left"
                                                    })
                                                })]
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "card-product-info",
                                            children: (0, a.jsxs)("div", {
                                                className: "box-title",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "d-flex flex-column",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "caption text-main-2 font-2",
                                                        children: e.category
                                                    }), (0, a.jsx)(c(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "name-product body-md-2 fw-semibold text-secondary link",
                                                        children: e.title
                                                    })]
                                                }), (0, a.jsxs)("p", {
                                                    className: "price-wrap fw-medium",
                                                    children: [(0, a.jsxs)("span", {
                                                        className: "new-price price-text fw-medium mb-0",
                                                        children: ["$", e.price.toFixed(3)]
                                                    }), (0, a.jsxs)("span", {
                                                        className: "old-price body-md-2 text-main-2 fw-normal",
                                                        children: ["$", e.oldPrice.toFixed(3)]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }, e.id)), (0, a.jsx)("div", {
                                    className: "d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd600"
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        5216: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => p
            });
            var a = i(5155),
                l = i(8001);
            i(2115);
            var t = i(7677),
                d = i(6874),
                r = i.n(d),
                c = i(6766),
                n = i(4105),
                o = i(6883),
                m = i(9640),
                h = i(7501),
                x = i(9822);

            function p() {
                return (0, a.jsx)("section", {
                    className: "tf-sp-2 pt-0",
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsxs)("div", {
                            className: "flat-title wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: [(0, a.jsx)("h5", {
                                className: "fw-semibold",
                                children: "On-Sale Products"
                            }), (0, a.jsxs)("div", {
                                className: "box-btn-slide relative",
                                children: [(0, a.jsx)("div", {
                                    className: "swiper-button-prev nav-swiper nav-prev-products snbp55",
                                    children: (0, a.jsx)("i", {
                                        className: "icon-arrow-left-lg"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "swiper-button-next nav-swiper nav-next-products snbn55",
                                    children: (0, a.jsx)("i", {
                                        className: "icon-arrow-right-lg"
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)(t.RC, {
                            modules: [n.Vx, n.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd55"
                            },
                            navigation: {
                                prevEl: ".snbp55",
                                nextEl: ".snbn55"
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
                                    slidesPerView: 5,
                                    spaceBetween: 30
                                }
                            },
                            spaceBetween: 15,
                            children: [l.Ox.map(e => (0, a.jsx)(t.qr, {
                                className: "swiper-slide",
                                children: (0, a.jsxs)("div", {
                                    className: "card-product wow fadeInUp",
                                    "data-wow-delay": e.delay,
                                    children: [(0, a.jsxs)("div", {
                                        className: "card-product-wrapper",
                                        children: [(0, a.jsxs)(r(), {
                                            href: "/product-detail/".concat(e.id),
                                            className: "product-img",
                                            children: [(0, a.jsx)(c.default, {
                                                className: "img-product lazyload",
                                                src: e.imgSrc,
                                                alt: "image-product",
                                                width: 500,
                                                height: 500
                                            }), (0, a.jsx)(c.default, {
                                                className: "img-hover lazyload",
                                                src: e.imgHover,
                                                alt: "image-product",
                                                width: 500,
                                                height: 500
                                            })]
                                        }), (0, a.jsxs)("ul", {
                                            className: "list-product-btn",
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(o.default, {
                                                    tooltipClass: "tooltip-left",
                                                    productId: e.id
                                                })
                                            }), (0, a.jsx)("li", {
                                                className: "wishlist",
                                                children: (0, a.jsx)(m.default, {
                                                    tooltipClass: "tooltip-left",
                                                    productId: e.id
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(h.default, {
                                                    productId: e.id,
                                                    tooltipClass: "tooltip-left"
                                                })
                                            }), (0, a.jsx)("li", {
                                                className: "",
                                                children: (0, a.jsx)(x.default, {
                                                    productId: e.id,
                                                    tooltipClass: "tooltip-left"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "card-product-info",
                                        children: (0, a.jsxs)("div", {
                                            className: "box-title",
                                            children: [(0, a.jsxs)("div", {
                                                className: "d-flex flex-column",
                                                children: [(0, a.jsx)("p", {
                                                    className: "caption text-main-2 font-2",
                                                    children: e.category
                                                }), (0, a.jsx)(r(), {
                                                    href: "/product-detail/".concat(e.id),
                                                    className: "name-product body-md-2 fw-semibold text-secondary link",
                                                    children: e.title
                                                })]
                                            }), (0, a.jsxs)("p", {
                                                className: "price-wrap fw-medium",
                                                children: [(0, a.jsxs)("span", {
                                                    className: "new-price price-text fw-medium mb-0",
                                                    children: ["$", e.price.toFixed(3)]
                                                }), (0, a.jsxs)("span", {
                                                    className: "old-price body-md-2 text-main-2 fw-normal",
                                                    children: ["$", e.oldPrice.toFixed(3)]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }, e.id)), (0, a.jsx)("div", {
                                className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd55"
                            })]
                        })]
                    })
                })
            }
        },
        5695: (e, s, i) => {
            "use strict";
            var a = i(8999);
            i.o(a, "usePathname") && i.d(s, {
                usePathname: function() {
                    return a.usePathname
                }
            })
        },
        6054: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => t
            });
            var a = i(5155),
                l = i(2115);

            function t(e) {
                let {
                    styleClass: s = ""
                } = e, [i, t] = (0, l.useState)(!1), d = (0, l.useRef)(null);
                return (0, l.useEffect)(() => {
                    let e = e => {
                        d.current && !d.current.contains(e.target) && t(!1)
                    };
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, []), (0, a.jsxs)("div", {
                    ref: d,
                    className: "nav-category-wrap ".concat(s),
                    children: [(0, a.jsxs)("div", {
                        onClick: () => t(e => !e),
                        className: "nav-title btn-active text-white link ".concat(i ? "active" : "", " "),
                        children: [(0, a.jsx)("i", {
                            className: "icon-menu-dots fs-20"
                        }), (0, a.jsx)("h6", {
                            className: "title fw-semibold",
                            children: "All Categories"
                        })]
                    }), (0, a.jsx)("nav", {
                        className: "category-menu active-item  ".concat(i ? "active" : ""),
                        children: (0, a.jsx)("div", {
                            className: "menu-category-menu-container",
                            children: (0, a.jsxs)("ul", {
                                id: "primary-menu",
                                className: "megamenu",
                                children: [(0, a.jsx)("li", {
                                    className: "menu-item",
                                    children: (0, a.jsxs)("a", {
                                        href: "#",
                                        children: [(0, a.jsx)("i", {
                                            className: "icon-clothing fs-20"
                                        }), (0, a.jsx)("span", {
                                            children: "Apparel"
                                        })]
                                    })
                                }), (0, a.jsx)("li", {
                                    className: "menu-item",
                                    children: (0, a.jsxs)("a", {
                                        href: "#",
                                        children: [(0, a.jsx)("span", {
                                            className: "icon",
                                            children: (0, a.jsxs)("svg", {
                                                width: 20,
                                                height: 20,
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0, a.jsxs)("g", {
                                                    clipPath: "url(#clip0_1739_24868)",
                                                    children: [(0, a.jsx)("mask", {
                                                        id: "mask0_1739_24868",
                                                        style: {
                                                            maskType: "luminance"
                                                        },
                                                        maskUnits: "userSpaceOnUse",
                                                        x: 0,
                                                        y: 0,
                                                        width: 20,
                                                        height: 20,
                                                        children: (0, a.jsx)("path", {
                                                            d: "M19.4999 19.5V0.500059H0.5V19.5H19.4999Z",
                                                            fill: "white",
                                                            stroke: "white"
                                                        })
                                                    }), (0, a.jsxs)("g", {
                                                        mask: "url(#mask0_1739_24868)",
                                                        children: [(0, a.jsx)("path", {
                                                            d: "M17.5037 10.9552C17.5037 15.6269 13.7165 19.4141 9.04482 19.4141C4.37311 19.4141 0.585938 15.6269 0.585938 10.9552C0.585938 6.28348 4.37311 2.49634 9.04482 2.49634",
                                                            stroke: "black",
                                                            strokeMiterlimit: 10
                                                        }), (0, a.jsx)("path", {
                                                            d: "M10.336 10.9553C10.336 11.6694 9.75791 12.2483 9.04483 12.2483C8.33171 12.2483 7.75366 11.6694 7.75366 10.9553C7.75366 10.2412 8.33171 9.66232 9.04483 9.66232C9.75791 9.66232 10.336 10.2412 10.336 10.9553Z",
                                                            stroke: "black",
                                                            strokeMiterlimit: 10,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }), (0, a.jsx)("path", {
                                                            d: "M14.6223 10.9551C14.6223 7.82548 12.2025 5.35873 9.03296 5.35873L9.04491 0.585891C14.5859 0.585891 19.4141 4.94236 19.4141 10.9551H14.6223Z",
                                                            stroke: "black",
                                                            strokeMiterlimit: 10,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }), (0, a.jsx)("path", {
                                                            d: "M12.5154 10.9552C12.5154 12.8813 10.9562 14.4426 9.03282 14.4426C7.10939 14.4426 5.55017 12.8813 5.55017 10.9552C5.55017 9.02913 7.10939 7.46777 9.03282 7.46777C10.9562 7.46777 12.5154 9.02913 12.5154 10.9552Z",
                                                            stroke: "black",
                                                            strokeMiterlimit: 10,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }), (0, a.jsx)("path", {
                                                            d: "M9.0448 16.6132V17.3433",
                                                            stroke: "black",
                                                            strokeMiterlimit: 10,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }), (0, a.jsx)("path", {
                                                            d: "M2.6283 10.9551H3.35837",
                                                            stroke: "black",
                                                            strokeMiterlimit: 10,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }), (0, a.jsx)("path", {
                                                            d: "M4.50122 15.3274L5.01747 14.8111",
                                                            stroke: "black",
                                                            strokeMiterlimit: 10,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }), (0, a.jsx)("path", {
                                                            d: "M13.1156 14.8111L13.6318 15.3274",
                                                            stroke: "black",
                                                            strokeMiterlimit: 10,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }), (0, a.jsx)("path", {
                                                            d: "M5.16481 6.86035L4.64856 6.3441",
                                                            stroke: "black",
                                                            strokeMiterlimit: 10,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("defs", {
                                                    children: (0, a.jsx)("clipPath", {
                                                        id: "clip0_1739_24868",
                                                        children: (0, a.jsx)("rect", {
                                                            width: 20,
                                                            height: 20,
                                                            fill: "white"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, a.jsx)("span", {
                                            children: "Automotive parts"
                                        })]
                                    })
                                }), (0, a.jsx)("li", {
                                    className: "menu-item",
                                    children: (0, a.jsxs)("a", {
                                        href: "#",
                                        children: [(0, a.jsx)("i", {
                                            className: "icon-beauti fs-20"
                                        }), (0, a.jsx)("span", {
                                            children: "Beauty & personal care"
                                        })]
                                    })
                                }), (0, a.jsx)("li", {
                                    className: "menu-item",
                                    children: (0, a.jsxs)("a", {
                                        href: "#",
                                        children: [(0, a.jsx)("i", {
                                            className: "icon-computer fs-20"
                                        }), (0, a.jsx)("span", {
                                            children: "Consumer Electronics"
                                        })]
                                    })
                                }), (0, a.jsx)("li", {
                                    className: "menu-item",
                                    children: (0, a.jsxs)("a", {
                                        href: "#",
                                        children: [(0, a.jsx)("i", {
                                            className: "icon-sofa fs-20"
                                        }), (0, a.jsx)("span", {
                                            children: "Furniture"
                                        })]
                                    })
                                }), (0, a.jsx)("li", {
                                    className: "menu-item",
                                    children: (0, a.jsxs)("a", {
                                        href: "#",
                                        children: [(0, a.jsx)("i", {
                                            className: "icon-computer-wifi fs-20"
                                        }), (0, a.jsx)("span", {
                                            children: "Home products"
                                        })]
                                    })
                                }), (0, a.jsx)("li", {
                                    className: "menu-item",
                                    children: (0, a.jsxs)("a", {
                                        href: "#",
                                        children: [(0, a.jsx)("i", {
                                            className: "icon-machine fs-20"
                                        }), (0, a.jsx)("span", {
                                            children: "Machinery"
                                        })]
                                    })
                                }), (0, a.jsx)("li", {
                                    className: "menu-item",
                                    children: (0, a.jsxs)("a", {
                                        href: "#",
                                        children: [(0, a.jsx)("i", {
                                            className: "icon-jewelry fs-20"
                                        }), (0, a.jsx)("span", {
                                            children: "Timepieces, jewelry & eyewear"
                                        })]
                                    })
                                }), (0, a.jsx)("li", {
                                    className: "menu-item",
                                    children: (0, a.jsxs)("a", {
                                        href: "#",
                                        children: [(0, a.jsx)("i", {
                                            className: "icon-tool fs-20"
                                        }), (0, a.jsx)("span", {
                                            children: "Tool & hardware"
                                        })]
                                    })
                                }), (0, a.jsx)("li", {
                                    className: "menu-item",
                                    children: (0, a.jsxs)("a", {
                                        href: "#",
                                        children: [(0, a.jsx)("i", {
                                            className: "icon-best-seller fs-20"
                                        }), (0, a.jsx)("span", {
                                            children: "Bestseller"
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        6267: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => u
            });
            var a = i(5155),
                l = i(8001),
                t = i(2115),
                d = i(7677),
                r = i(6874),
                c = i.n(r),
                n = i(6766),
                o = i(4105),
                m = i(6883),
                h = i(9640),
                x = i(7501),
                p = i(9822);

            function u() {
                let [e, s] = (0, t.useState)("Feature"), [i, r] = (0, t.useState)(l.Rl.reduce((e, s, i) => {
                    let a = Math.floor(i / 2);
                    return e[a] || (e[a] = {
                        id: a + 1,
                        wowDelay: s.wowDelay,
                        products: []
                    }), e[a].products.push(s), e
                }, []));
                (0, t.useEffect)(() => {
                    r(l.Rl.filter(s => s.filterTab.includes(e)).reduce((e, s, i) => {
                        let a = Math.floor(i / 2);
                        return e[a] || (e[a] = {
                            id: a + 1,
                            wowDelay: s.wowDelay,
                            products: []
                        }), e[a].products.push(s), e
                    }, []))
                }, [e]);
                let u = e => {
                    s(e)
                };
                return (0, a.jsx)("div", {
                    className: "tf-sp-2 flat-animate-tab",
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsx)("div", {
                            className: "flat-title wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: (0, a.jsx)("div", {
                                className: "flat-title-tab-default",
                                children: (0, a.jsx)("ul", {
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
                                    }].map(s => (0, a.jsx)("li", {
                                        className: "nav-tab-item d-flex",
                                        onClick: () => u(s.name),
                                        children: (0, a.jsx)("a", {
                                            className: "tab-link main-title link fw-semibold ".concat(e === s.name ? "active" : ""),
                                            children: s.name
                                        })
                                    }, s.id))
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "tab-content",
                            children: (0, a.jsx)("div", {
                                className: "tab-pane active show",
                                id: "feature",
                                role: "tabpanel",
                                children: (0, a.jsxs)(d.RC, {
                                    modules: [o.dK],
                                    pagination: {
                                        clickable: !0,
                                        el: ".spd56"
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
                                    children: [i.map(e => (0, a.jsx)(d.qr, {
                                        className: "swiper-slide",
                                        children: (0, a.jsx)("ul", {
                                            className: "product-list-wrap wow fadeInUp",
                                            "data-wow-delay": e.wowDelay,
                                            children: e.products.map(e => (0, a.jsx)("li", {
                                                children: (0, a.jsxs)("div", {
                                                    className: "card-product style-row row-small-2",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "card-product-wrapper",
                                                        children: (0, a.jsxs)(c(), {
                                                            href: "/product-detail/".concat(e.id),
                                                            className: "product-img",
                                                            children: [(0, a.jsx)(n.default, {
                                                                className: "img-product lazyload",
                                                                src: e.imgSrc,
                                                                alt: "image-product",
                                                                width: e.width,
                                                                height: e.height
                                                            }), (0, a.jsx)(n.default, {
                                                                className: "img-hover lazyload",
                                                                src: e.imgHover,
                                                                alt: "image-product",
                                                                width: e.width,
                                                                height: e.height
                                                            })]
                                                        })
                                                    }), (0, a.jsx)("div", {
                                                        className: "card-product-info",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "box-title",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "bg-white relative z-5",
                                                                children: [(0, a.jsx)("p", {
                                                                    className: "caption text-main-2 font-2",
                                                                    children: e.category
                                                                }), (0, a.jsx)(c(), {
                                                                    href: "/product-detail/".concat(e.id),
                                                                    className: "name-product body-md-2 fw-semibold text-secondary link",
                                                                    children: e.title
                                                                })]
                                                            }), (0, a.jsxs)("div", {
                                                                className: "group-btn",
                                                                children: [(0, a.jsxs)("p", {
                                                                    className: "price-wrap fw-medium",
                                                                    children: [(0, a.jsxs)("span", {
                                                                        className: "new-price price-text fw-medium",
                                                                        children: ["$", e.price.toFixed(3)]
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "old-price body-md-2 text-main-2",
                                                                        children: ["$", e.oldPrice.toFixed(3)]
                                                                    })]
                                                                }), (0, a.jsxs)("ul", {
                                                                    className: "list-product-btn flex-row",
                                                                    children: [(0, a.jsx)("li", {
                                                                        children: (0, a.jsx)(m.default, {
                                                                            productId: e.id
                                                                        })
                                                                    }), (0, a.jsx)("li", {
                                                                        className: "wishlist",
                                                                        children: (0, a.jsx)(h.default, {
                                                                            productId: e.id
                                                                        })
                                                                    }), (0, a.jsx)("li", {
                                                                        children: (0, a.jsx)(x.default, {
                                                                            productId: e.id
                                                                        })
                                                                    }), (0, a.jsx)("li", {
                                                                        className: "",
                                                                        children: (0, a.jsx)(p.default, {
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
                                    }, e.id)), (0, a.jsx)("div", {
                                        className: "sw-dot-default sw-pagination-products justify-content-center spd56"
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        6864: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => t
            });
            var a = i(5155);
            i(2115);
            var l = i(6766);

            function t(e) {
                let {
                    fullWidth: s = !1,
                    typeClass: i = ""
                } = e;
                return (0, a.jsx)("div", {
                    className: "themesFlat",
                    children: (0, a.jsx)("div", {
                        className: s ? "" : "container",
                        children: (0, a.jsx)("div", {
                            className: "line-bt line-tp",
                            children: (0, a.jsx)("div", {
                                className: "infiniteslide_wrap",
                                style: {
                                    overflow: "hidden"
                                },
                                children: (0, a.jsxs)("div", {
                                    className: "infiniteslide tf-brand ".concat(i),
                                    style: {
                                        display: "flex",
                                        flexFlow: "row",
                                        alignItems: "center",
                                        animation: "12.72s linear 0s infinite normal none running infiniteslider"
                                    },
                                    children: [(0, a.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/lead-ecommerce.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/global-brand.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/great-deal.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/walmart.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/rodem.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/fabric.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/sudo.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/ctaecom.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/lead-ecommerce.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/global-brand.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/great-deal.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/walmart.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/rodem.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/fabric.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/sudo.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/ctaecom.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/lead-ecommerce.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/global-brand.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/great-deal.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/walmart.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/rodem.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/fabric.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
                                            alt: "brand",
                                            src: "/images/brand/sudo.svg",
                                            width: 159,
                                            height: 100
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "brand-item infiniteslide_clone",
                                        style: {
                                            flex: "0 0 auto",
                                            display: "block"
                                        },
                                        children: (0, a.jsx)(l.default, {
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
        7359: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => p
            });
            var a = i(5155),
                l = i(8001);
            i(2115);
            var t = i(7677),
                d = i(6874),
                r = i.n(d),
                c = i(6766),
                n = i(4105),
                o = i(6883),
                m = i(9640),
                h = i(7501),
                x = i(9822);

            function p() {
                return (0, a.jsx)("section", {
                    className: "tf-sp-2 pt-0",
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsxs)("div", {
                            className: "flat-title wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: [(0, a.jsx)("h5", {
                                className: "fw-semibold",
                                children: "Features Products"
                            }), (0, a.jsxs)("div", {
                                className: "box-btn-slide relative",
                                children: [(0, a.jsx)("div", {
                                    className: "swiper-button-prev nav-swiper nav-prev-products snbp62",
                                    children: (0, a.jsx)("i", {
                                        className: "icon-arrow-left-lg"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "swiper-button-next nav-swiper nav-next-products snbn62",
                                    children: (0, a.jsx)("i", {
                                        className: "icon-arrow-right-lg"
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)(t.RC, {
                            className: "swiper tf-sw-products",
                            modules: [n.Vx, n.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd62"
                            },
                            navigation: {
                                prevEl: ".snbp62",
                                nextEl: ".snbn62"
                            },
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
                            children: [l.tw.map(e => (0, a.jsx)(t.qr, {
                                className: "swiper-slide",
                                children: (0, a.jsxs)("div", {
                                    className: "card-product wow fadeInUp",
                                    "data-wow-delay": e.delay,
                                    children: [(0, a.jsxs)("div", {
                                        className: "card-product-wrapper",
                                        children: [(0, a.jsxs)(r(), {
                                            href: "/product-detail/".concat(e.id),
                                            className: "product-img",
                                            children: [(0, a.jsx)(c.default, {
                                                className: "img-product lazyload",
                                                src: e.imgSrc,
                                                alt: "image-product",
                                                width: 500,
                                                height: 500
                                            }), (0, a.jsx)(c.default, {
                                                className: "img-hover lazyload",
                                                src: e.imgHover,
                                                alt: "image-product",
                                                width: 500,
                                                height: 500
                                            })]
                                        }), (0, a.jsxs)("ul", {
                                            className: "list-product-btn",
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(o.default, {
                                                    tooltipClass: "tooltip-left",
                                                    productId: e.id
                                                })
                                            }), (0, a.jsx)("li", {
                                                className: "wishlist",
                                                children: (0, a.jsx)(m.default, {
                                                    tooltipClass: "tooltip-left",
                                                    productId: e.id
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(h.default, {
                                                    productId: e.id,
                                                    tooltipClass: "tooltip-left"
                                                })
                                            }), (0, a.jsx)("li", {
                                                className: "",
                                                children: (0, a.jsx)(x.default, {
                                                    productId: e.id,
                                                    tooltipClass: "tooltip-left"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "card-product-info",
                                        children: (0, a.jsxs)("div", {
                                            className: "box-title",
                                            children: [(0, a.jsxs)("div", {
                                                className: "d-flex flex-column",
                                                children: [(0, a.jsx)("p", {
                                                    className: "caption text-main-2 font-2",
                                                    children: e.category
                                                }), (0, a.jsx)(r(), {
                                                    href: "/product-detail/".concat(e.id),
                                                    className: "name-product body-md-2 fw-semibold text-secondary link",
                                                    children: e.title
                                                })]
                                            }), (0, a.jsxs)("p", {
                                                className: "price-wrap fw-medium",
                                                children: [(0, a.jsxs)("span", {
                                                    className: "new-price price-text fw-medium mb-0",
                                                    children: ["$", e.price.toFixed(3)]
                                                }), (0, a.jsxs)("span", {
                                                    className: "old-price body-md-2 text-main-2 fw-normal",
                                                    children: ["$", e.oldPrice.toFixed(3)]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }, e.id)), (0, a.jsx)("div", {
                                className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd62"
                            })]
                        })]
                    })
                })
            }
        },
        7526: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => d
            });
            var a = i(5155),
                l = i(2115);
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

            function d(e) {
                let {
                    parentClass: s = "form-search-product style-2"
                } = e, [i, d] = (0, l.useState)(!1), [r, c] = (0, l.useState)("All categories"), n = (0, l.useRef)(null);
                return (0, l.useEffect)(() => {
                    let e = e => {
                        n.current && !n.current.contains(e.target) && d(!1)
                    };
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, []), (0, a.jsxs)("form", {
                    ref: n,
                    onSubmit: e => e.preventDefault(),
                    className: s,
                    children: [(0, a.jsxs)("div", {
                        className: "select-category ".concat(i ? "active" : ""),
                        children: [(0, a.jsx)("div", {
                            onClick: () => d(!0),
                            className: "tf-select-custom",
                            children: r
                        }), (0, a.jsxs)("ul", {
                            className: "select-options",
                            style: {
                                display: i ? "block" : "none"
                            },
                            children: [(0, a.jsxs)("div", {
                                className: "header-select-option",
                                children: [(0, a.jsx)("span", {
                                    children: "Select Categories"
                                }), (0, a.jsx)("span", {
                                    className: "close-option",
                                    onClick: () => d(!1),
                                    children: (0, a.jsx)("i", {
                                        className: "icon-close"
                                    })
                                })]
                            }), t.map((e, s) => (0, a.jsx)("li", {
                                rel: e.rel,
                                onClick: () => {
                                    c(e.label), d(!1)
                                },
                                children: e.label
                            }, s))]
                        }), (0, a.jsxs)("ul", {
                            className: "select-options",
                            children: [(0, a.jsx)("li", {
                                className: "link",
                                rel: "",
                                children: (0, a.jsx)("span", {
                                    children: "All categories"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "apple-products",
                                children: (0, a.jsx)("span", {
                                    children: "Apple products"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "audio-equipments",
                                children: (0, a.jsx)("span", {
                                    children: "Audio Equipments"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "camera-video",
                                children: (0, a.jsx)("span", {
                                    children: "Camera & Video"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "game-room-furniture",
                                children: (0, a.jsx)("span", {
                                    children: "Game & Room Furniture"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "gaming-accessories",
                                children: (0, a.jsx)("span", {
                                    children: "Gaming Accessories"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "headphone",
                                children: (0, a.jsx)("span", {
                                    children: "Headphone"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "laptop-tablet",
                                children: (0, a.jsx)("span", {
                                    children: "Laptop & Tablet"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "server-workstation",
                                children: (0, a.jsx)("span", {
                                    children: "Server & Workstation"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "smartphone",
                                children: (0, a.jsx)("span", {
                                    children: "Smartphone"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "smartwatch",
                                children: (0, a.jsx)("span", {
                                    children: "Smartwatch"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "storage-digital-devices",
                                children: (0, a.jsx)("span", {
                                    children: "Storage & Digital Devices"
                                })
                            }), (0, a.jsx)("li", {
                                className: "link",
                                rel: "tv-computer-screen",
                                children: (0, a.jsx)("span", {
                                    children: "TV & Computer Screen"
                                })
                            })]
                        })]
                    }), (0, a.jsx)("span", {
                        className: "br-line type-vertical bg-line"
                    }), (0, a.jsx)("fieldset", {
                        children: (0, a.jsx)("input", {
                            type: "text",
                            placeholder: "Search for products"
                        })
                    }), (0, a.jsx)("button", {
                        type: "submit",
                        className: "btn-submit-form",
                        children: (0, a.jsx)("i", {
                            className: "icon-search"
                        })
                    })]
                })
            }
        },
        7948: (e, s, i) => {
            Promise.resolve().then(i.bind(i, 6883)), Promise.resolve().then(i.bind(i, 9822)), Promise.resolve().then(i.bind(i, 7501)), Promise.resolve().then(i.bind(i, 9640)), Promise.resolve().then(i.bind(i, 6203)), Promise.resolve().then(i.bind(i, 6864)), Promise.resolve().then(i.bind(i, 5659)), Promise.resolve().then(i.bind(i, 9395)), Promise.resolve().then(i.bind(i, 2988)), Promise.resolve().then(i.bind(i, 3603)), Promise.resolve().then(i.bind(i, 5736)), Promise.resolve().then(i.bind(i, 6708)), Promise.resolve().then(i.bind(i, 3340)), Promise.resolve().then(i.bind(i, 2867)), Promise.resolve().then(i.bind(i, 6054)), Promise.resolve().then(i.bind(i, 7526)), Promise.resolve().then(i.bind(i, 4836)), Promise.resolve().then(i.bind(i, 7359)), Promise.resolve().then(i.bind(i, 4682)), Promise.resolve().then(i.bind(i, 4797)), Promise.resolve().then(i.bind(i, 5216)), Promise.resolve().then(i.bind(i, 6267)), Promise.resolve().then(i.t.bind(i, 6874, 23)), Promise.resolve().then(i.t.bind(i, 3063, 23))
        },
        9395: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => t
            });
            var a = i(5155),
                l = i(31);

            function t() {
                let {
                    totalPrice: e
                } = (0, l.F)();
                return (0, a.jsxs)(a.Fragment, {
                    children: ["$", e.toFixed(3)]
                })
            }
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [5270, 2357, 2331, 2867, 31, 2433, 8441, 1684, 7358], () => s(7948)), _N_E = e.O()
    }
]);