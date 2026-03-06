(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9584], {
        235: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => h
            });
            var l = i(5155),
                a = i(8001);
            i(2115);
            var t = i(4105),
                c = i(7677),
                d = i(6874),
                r = i.n(d),
                o = i(6766),
                n = i(6883),
                m = i(9640),
                p = i(7501),
                x = i(9822);

            function h() {
                return (0, l.jsx)("section", {
                    className: "tf-sp-2",
                    children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [(0, l.jsxs)("div", {
                            className: "flat-title wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: [(0, l.jsx)("h5", {
                                className: "fw-semibold",
                                children: "Smart Home Appliances"
                            }), (0, l.jsxs)("div", {
                                className: "box-btn-slide relative",
                                children: [(0, l.jsx)("div", {
                                    className: "swiper-button-prev nav-swiper nav-prev-products snbp38",
                                    children: (0, l.jsx)("i", {
                                        className: "icon-arrow-left-lg"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "swiper-button-next nav-swiper nav-next-products snbn38",
                                    children: (0, l.jsx)("i", {
                                        className: "icon-arrow-right-lg"
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "slider-wrap style-2",
                            children: [(0, l.jsxs)("div", {
                                className: "width-item-1 banner-product-2 d-none d-xl-block wow fadeInLeft",
                                "data-wow-delay": "0s",
                                children: [(0, l.jsx)("a", {
                                    href: "#",
                                    className: "image h-100",
                                    children: (0, l.jsx)(o.default, {
                                        src: "/images/banner/banner-12.jpg",
                                        alt: "",
                                        className: "lazyload",
                                        width: 400,
                                        height: 650
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "content",
                                    children: [(0, l.jsx)("div", {
                                        className: "box-top",
                                        children: (0, l.jsx)("p", {
                                            className: "text-white body-text-3 text-uppercase fw-2",
                                            style: {
                                                letterSpacing: "9.8px"
                                            },
                                            children: "New arrival"
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "box-bottom",
                                        children: [(0, l.jsxs)(r(), {
                                            href: "/shop-default",
                                            className: "link h3 mb-0 lh-xl-49 text-white",
                                            children: ["Headset & ", (0, l.jsx)("br", {}), "Headphone"]
                                        }), (0, l.jsxs)("div", {
                                            className: "box-price",
                                            children: [(0, l.jsx)("span", {
                                                className: "text fw-2 price-text text-white",
                                                children: "Starting"
                                            }), (0, l.jsx)("span", {
                                                className: "h2 mb-0 fw-bold text-price",
                                                children: "$250"
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, l.jsxs)(c.RC, {
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
                                modules: [t.Vx, t.dK, t.xA],
                                pagination: {
                                    clickable: !0,
                                    el: ".spd38"
                                },
                                navigation: {
                                    prevEl: ".snbp38",
                                    nextEl: ".snbn38"
                                },
                                children: [a.c9.map(e => (0, l.jsx)(c.qr, {
                                    className: "swiper-slide",
                                    children: (0, l.jsxs)("div", {
                                        className: "card-product style-small style-img-border ".concat(e.animation ? "wow ".concat(e.animation) : ""),
                                        children: [(0, l.jsxs)("div", {
                                            className: "card-product-wrapper",
                                            children: [(0, l.jsxs)(r(), {
                                                href: "/product-detail/".concat(e.id),
                                                className: "product-img",
                                                children: [(0, l.jsx)(o.default, {
                                                    className: "img-product lazyload",
                                                    src: e.imgSrc,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                }), (0, l.jsx)(o.default, {
                                                    className: "img-hover lazyload",
                                                    src: e.imgHover,
                                                    alt: "image-product",
                                                    width: e.width,
                                                    height: e.height
                                                })]
                                            }), (0, l.jsxs)("ul", {
                                                className: "list-product-btn",
                                                children: [(0, l.jsx)("li", {
                                                    children: (0, l.jsx)(n.default, {
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
                                                    className: e.compareClass,
                                                    children: (0, l.jsx)(x.default, {
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
                                                    }), (0, l.jsx)(r(), {
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
                                    className: "d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd38"
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        1143: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => m
            });
            var l = i(5155),
                a = i(8001),
                t = i(7677),
                c = i(6874),
                d = i.n(c),
                r = i(6766),
                o = i(4105),
                n = i(3825);

            function m() {
                return (0, l.jsx)("section", {
                    className: "tf-sp-2 pt-xl-0",
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                            className: "section-wrap wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: [(0, l.jsxs)("div", {
                                className: "flat-title",
                                children: [(0, l.jsxs)("h5", {
                                    className: "fw-semibold text-primary flat-title-has-icon",
                                    children: [(0, l.jsx)("span", {
                                        className: "icon",
                                        children: (0, l.jsx)("i", {
                                            className: "icon-fire tf-ani-tada"
                                        })
                                    }), "Deal Of The Day"]
                                }), (0, l.jsxs)("div", {
                                    className: "box-btn-slide relative",
                                    children: [(0, l.jsx)("div", {
                                        className: "swiper-button-prev nav-swiper nav-prev-products snbp35",
                                        children: (0, l.jsx)("i", {
                                            className: "icon-arrow-left-lg"
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "swiper-button-next nav-swiper nav-next-products snbn35",
                                        children: (0, l.jsx)("i", {
                                            className: "icon-arrow-right-lg"
                                        })
                                    })]
                                })]
                            }), (0, l.jsxs)(t.RC, {
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
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    992: {
                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    }
                                },
                                modules: [o.Vx, o.dK],
                                pagination: {
                                    clickable: !0,
                                    el: ".spd35"
                                },
                                navigation: {
                                    prevEl: ".snbp35",
                                    nextEl: ".snbn35"
                                },
                                children: [a.xZ.map(e => (0, l.jsx)(t.qr, {
                                    className: "swiper-slide",
                                    children: (0, l.jsxs)("div", {
                                        className: "card-product style-img-border style-row type-row-2 flex-lg-row",
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
                                            }), (0, l.jsxs)("div", {
                                                className: "box-sale-wrap pst-default z-5",
                                                children: [(0, l.jsx)("p", {
                                                    className: "small-text",
                                                    children: "Sale"
                                                }), (0, l.jsxs)("p", {
                                                    className: "title-sidebar-2",
                                                    children: [e.salePercentage, "%"]
                                                })]
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "card-product-info gap-xxl-51",
                                            children: [(0, l.jsxs)("div", {
                                                className: "box-title",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "bg-white relative z-5",
                                                    children: [(0, l.jsx)("p", {
                                                        className: "caption text-main-2 font-2",
                                                        children: e.category
                                                    }), (0, l.jsx)(d(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "name-product product-title fw-semibold text-secondary link",
                                                        children: e.title
                                                    })]
                                                }), (0, l.jsxs)("p", {
                                                    className: "price-wrap fw-medium",
                                                    children: [(0, l.jsxs)("span", {
                                                        className: "new-price price-text fw-medium text-primary mb-0",
                                                        children: ["$", e.price.toFixed(3)]
                                                    }), (0, l.jsxs)("span", {
                                                        className: "old-price body-md-2 text-main-2 fw-normal",
                                                        children: ["$", e.oldPrice.toFixed(3)]
                                                    })]
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "box-infor-detail",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "product-progress-sale gap-0",
                                                    children: [(0, l.jsxs)("div", {
                                                        className: "box-quantity d-flex justify-content-between",
                                                        children: [(0, l.jsxs)("p", {
                                                            className: "text-avaiable body-small",
                                                            children: ["Availavle:", " ", (0, l.jsx)("span", {
                                                                className: "fw-bold",
                                                                children: e.available
                                                            })]
                                                        }), (0, l.jsxs)("p", {
                                                            className: "text-avaiable body-small",
                                                            children: ["Sold:", " ", (0, l.jsx)("span", {
                                                                className: "fw-bold",
                                                                children: e.sold
                                                            })]
                                                        })]
                                                    }), (0, l.jsx)("div", {
                                                        className: "progress-sold progress style-3",
                                                        role: "progressbar",
                                                        "aria-valuemin": 0,
                                                        "aria-valuemax": 100,
                                                        children: (0, l.jsx)("div", {
                                                            className: "progress-bar bg-primary",
                                                            style: {
                                                                width: e.progressWidth
                                                            }
                                                        })
                                                    })]
                                                }), (0, l.jsxs)("div", {
                                                    className: "countdown-box d-flex gap-10 flex-wrap",
                                                    children: [(0, l.jsxs)("div", {
                                                        className: "d-flex gap-10 flex-xxl-column gap-xxl-0",
                                                        children: [(0, l.jsx)("h6", {
                                                            className: "fw-semibold",
                                                            children: "Hurry Up"
                                                        }), (0, l.jsx)("p", {
                                                            className: "body-small text-main-2",
                                                            children: "offer ends in:"
                                                        })]
                                                    }), (0, l.jsx)("div", {
                                                        className: "js-countdown",
                                                        "data-timer": e.countdownTimer,
                                                        "data-labels": "Days,Hours,Mins,Secs",
                                                        children: (0, l.jsx)(n.default, {
                                                            style: 2
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                }, e.id)), (0, l.jsx)("div", {
                                    className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd35"
                                })]
                            })]
                        })
                    })
                })
            }
        },
        1846: (e, s, i) => {
            "use strict";
            i.d(s, {
                IQ: () => d,
                LZ: () => t,
                P9: () => c,
                Pm: () => r,
                TC: () => m,
                j0: () => o,
                jS: () => a,
                ld: () => n
            });
            var l = i(5155);
            let a = [{
                    imgSrc: "/images/collection/cls-category-1.jpg",
                    wowDelay: "0s",
                    productText: "on the headphones",
                    sale: "20%",
                    darkText: !1
                }, {
                    imgSrc: "/images/collection/cls-category-2.jpg",
                    wowDelay: "0.1s",
                    productText: "on the cameras",
                    sale: "15%",
                    darkText: !1
                }, {
                    imgSrc: "/images/collection/cls-category-3.jpg",
                    wowDelay: "0.2s",
                    productText: "on the phones",
                    sale: "28%",
                    darkText: !1
                }, {
                    imgSrc: "/images/collection/cls-category-4.jpg",
                    wowDelay: "0.3s",
                    productText: "on the watchs",
                    sale: "22%",
                    darkText: !0
                }],
                t = [{
                    img: "/images/collection/cls-grid-1.jpg",
                    title: "Laptops & Accessories"
                }, {
                    img: "/images/collection/cls-grid-2.jpg",
                    title: "Phones, Tablets & Accessories"
                }, {
                    img: "/images/collection/cls-grid-3.jpg",
                    title: "Apple Products"
                }, {
                    img: "/images/collection/cls-grid-4.jpg",
                    title: "Server & Workstation"
                }, {
                    img: "/images/collection/cls-grid-5.jpg",
                    title: "Game Controller"
                }, {
                    img: "/images/collection/cls-grid-6.jpg",
                    title: "Audio Equipments"
                }, {
                    img: "/images/collection/cls-grid-7.jpg",
                    title: "Storage & Digital Devices"
                }, {
                    img: "/images/collection/cls-grid-8.jpg",
                    title: "Audio Equipments"
                }],
                c = [{
                    imgSrc: "/images/collection/cls-category-1.jpg",
                    wowDelay: "0s",
                    textColor: "text-white",
                    product: "on the headphones",
                    sale: "20%"
                }, {
                    imgSrc: "/images/collection/cls-category-2.jpg",
                    wowDelay: "0.1s",
                    textColor: "text-white",
                    product: "on the cameras",
                    sale: "15%"
                }, {
                    imgSrc: "/images/collection/cls-category-3.jpg",
                    wowDelay: "0.2s",
                    textColor: "text-white",
                    product: "on the phones",
                    sale: "28%"
                }, {
                    imgSrc: "/images/collection/cls-category-4.jpg",
                    wowDelay: "0.3s",
                    textColor: "text-black",
                    product: "on the watchs",
                    sale: "22%"
                }],
                d = [{
                    imgSrc: "/images/collection/category-1.png",
                    title: "Laptops & accessories"
                }, {
                    imgSrc: "/images/collection/category-2.png",
                    title: "Phones & tablets"
                }, {
                    imgSrc: "/images/collection/category-3.png",
                    title: "Apple products"
                }, {
                    imgSrc: "/images/collection/category-4.png",
                    title: "Server & workstation"
                }, {
                    imgSrc: "/images/collection/category-5.png",
                    title: (0, l.jsxs)(l.Fragment, {
                        children: ["Game ", (0, l.jsx)("br", {
                            className: "d-none d-xl-block"
                        }), " controller"]
                    })
                }, {
                    imgSrc: "/images/collection/category-6.png",
                    title: (0, l.jsxs)(l.Fragment, {
                        children: ["Computer ", (0, l.jsx)("br", {
                            className: "d-none d-xl-block"
                        }), " screen"]
                    })
                }, {
                    imgSrc: "/images/collection/category-7.png",
                    title: "Network equipment"
                }, {
                    imgSrc: "/images/collection/category-8.png",
                    title: "Audio equipments"
                }, {
                    imgSrc: "/images/collection/category-9.png",
                    title: "Storage & digital devices"
                }, {
                    imgSrc: "/images/collection/category-10.png",
                    title: "Camera & smartHome"
                }, {
                    imgSrc: "/images/collection/category-1.png",
                    title: "Laptops & accessories"
                }],
                r = [{
                    img: "/images/collection/cls-grid-1.jpg",
                    title: "Laptops & Accessories"
                }, {
                    img: "/images/collection/cls-grid-2.jpg",
                    title: "Phones, Tablets & Accessories"
                }, {
                    img: "/images/collection/cls-grid-3.jpg",
                    title: "Apple Products"
                }, {
                    img: "/images/collection/cls-grid-4.jpg",
                    title: "Server & Workstation"
                }, {
                    img: "/images/collection/cls-grid-5.jpg",
                    title: "Game Controller"
                }, {
                    img: "/images/collection/cls-grid-6.jpg",
                    title: "Audio Equipments"
                }, {
                    img: "/images/collection/cls-grid-7.jpg",
                    title: "Storage & Digital Devices"
                }, {
                    img: "/images/collection/cls-grid-8.jpg",
                    title: "Audio Equipments"
                }],
                o = [{
                    imgSrc: "/images/collection/cls-category-1.jpg",
                    wowDelay: "0s",
                    title1: "catch big",
                    title2: "deals",
                    title3: "on the headphones",
                    sale: "20%",
                    whiteText: !0
                }, {
                    imgSrc: "/images/collection/cls-category-2.jpg",
                    wowDelay: "0.1s",
                    title1: "catch big",
                    title2: "deals",
                    title3: "on the cameras",
                    sale: "15%",
                    whiteText: !0
                }, {
                    imgSrc: "/images/collection/cls-category-3.jpg",
                    wowDelay: "0.2s",
                    title1: "catch big",
                    title2: "deals",
                    title3: "on the phones",
                    sale: "28%",
                    whiteText: !0
                }, {
                    imgSrc: "/images/collection/cls-category-4.jpg",
                    wowDelay: "0.3s",
                    title1: "catch big",
                    title2: "deals",
                    title3: "on the watchs",
                    sale: "22%",
                    whiteText: !1
                }],
                n = [{
                    imgSrc: "/images/collection/cls-grid-1.jpg",
                    title: "Laptops & Accessories"
                }, {
                    imgSrc: "/images/collection/cls-grid-2.jpg",
                    title: "Phones, Tablets & Accessories"
                }, {
                    imgSrc: "/images/collection/cls-grid-3.jpg",
                    title: "Apple Products"
                }, {
                    imgSrc: "/images/collection/cls-grid-4.jpg",
                    title: "Server & Workstation"
                }, {
                    imgSrc: "/images/collection/cls-grid-5.jpg",
                    title: "Game Controller"
                }, {
                    imgSrc: "/images/collection/cls-grid-6.jpg",
                    title: "Audio Equipments"
                }, {
                    imgSrc: "/images/collection/cls-grid-7.jpg",
                    title: "Storage & Digital Devices"
                }, {
                    imgSrc: "/images/collection/cls-grid-8.jpg",
                    title: "Audio Equipments"
                }],
                m = [{
                    imgSrc: "/images/collection/cls-grid-1.jpg",
                    title: "Laptops & Accessories"
                }, {
                    imgSrc: "/images/collection/cls-grid-2.jpg",
                    title: "Phones, Tablets & Accessories"
                }, {
                    imgSrc: "/images/collection/cls-grid-3.jpg",
                    title: "Apple Products"
                }, {
                    imgSrc: "/images/collection/cls-grid-4.jpg",
                    title: "Server & Workstation"
                }, {
                    imgSrc: "/images/collection/cls-grid-5.jpg",
                    title: "Game Controller"
                }, {
                    imgSrc: "/images/collection/cls-grid-6.jpg",
                    title: "Audio Equipments"
                }, {
                    imgSrc: "/images/collection/cls-grid-7.jpg",
                    title: "Storage & Digital Devices"
                }, {
                    imgSrc: "/images/collection/cls-grid-8.jpg",
                    title: "Audio Equipments"
                }]
        },
        2338: (e, s, i) => {
            "use strict";
            i.d(s, {
                U: () => a,
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
                a = [{
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
        3978: (e, s, i) => {
            Promise.resolve().then(i.bind(i, 6203)), Promise.resolve().then(i.bind(i, 5659)), Promise.resolve().then(i.bind(i, 4173)), Promise.resolve().then(i.bind(i, 2988)), Promise.resolve().then(i.bind(i, 6750)), Promise.resolve().then(i.bind(i, 3603)), Promise.resolve().then(i.bind(i, 9870)), Promise.resolve().then(i.bind(i, 441)), Promise.resolve().then(i.bind(i, 5736)), Promise.resolve().then(i.bind(i, 6708)), Promise.resolve().then(i.bind(i, 3340)), Promise.resolve().then(i.bind(i, 2867)), Promise.resolve().then(i.bind(i, 5595)), Promise.resolve().then(i.bind(i, 1143)), Promise.resolve().then(i.bind(i, 6044)), Promise.resolve().then(i.bind(i, 6606)), Promise.resolve().then(i.bind(i, 4291)), Promise.resolve().then(i.bind(i, 235)), Promise.resolve().then(i.t.bind(i, 6874, 23)), Promise.resolve().then(i.t.bind(i, 3063, 23))
        },
        4173: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => n
            });
            var l = i(5155),
                a = i(1846);
            i(2115);
            var t = i(7677),
                c = i(6874),
                d = i.n(c),
                r = i(6766),
                o = i(4105);

            function n(e) {
                let {
                    parentClass: s = ""
                } = e;
                return (0, l.jsx)("section", {
                    className: s,
                    children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [(0, l.jsxs)("div", {
                            className: "flat-title wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: [(0, l.jsx)("h5", {
                                className: "fw-semibold",
                                children: "Product Category"
                            }), (0, l.jsxs)("div", {
                                className: "box-btn-slide relative",
                                children: [(0, l.jsx)("div", {
                                    className: "swiper-button-prev nav-swiper nav-prev-products",
                                    children: (0, l.jsx)("i", {
                                        className: "icon-arrow-left-lg"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "swiper-button-next nav-swiper nav-next-products",
                                    children: (0, l.jsx)("i", {
                                        className: "icon-arrow-right-lg"
                                    })
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "box-btn-slide-2 sw-nav-effect wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: (0, l.jsxs)(t.RC, {
                                className: "swiper tf-sw-products slider-category",
                                breakpoints: {
                                    0: {
                                        slidesPerView: 2
                                    },
                                    575: {
                                        slidesPerView: 4
                                    },
                                    768: {
                                        slidesPerView: 7
                                    },
                                    992: {
                                        slidesPerView: 10
                                    }
                                },
                                modules: [o.dK],
                                pagination: {
                                    clickable: !0,
                                    el: ".spd2"
                                },
                                children: [a.IQ.map((e, s) => (0, l.jsx)(t.qr, {
                                    className: "swiper-slide",
                                    children: (0, l.jsxs)("div", {
                                        className: "wg-cls-2 hover-img",
                                        children: [(0, l.jsxs)(d(), {
                                            href: "/shop-default",
                                            className: "image img-style-2 overflow-visible",
                                            children: [(0, l.jsx)("span", {
                                                className: "tf-overlay"
                                            }), (0, l.jsx)(r.default, {
                                                src: e.imgSrc,
                                                alt: "",
                                                width: 296,
                                                height: 296
                                            })]
                                        }), (0, l.jsx)(d(), {
                                            href: "/shop-default",
                                            className: "link body-text-3",
                                            children: e.title
                                        })]
                                    })
                                }, s)), (0, l.jsx)("div", {
                                    className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd2"
                                })]
                            })
                        })]
                    })
                })
            }
        },
        4291: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => x
            });
            var l = i(5155),
                a = i(8001);
            i(2115);
            var t = i(6874),
                c = i.n(t),
                d = i(6766),
                r = i(6883),
                o = i(9640),
                n = i(7501),
                m = i(9822),
                p = i(1989);

            function x() {
                return (0, l.jsxs)("section", {
                    className: "tf-sp-6 position-relative",
                    children: [(0, l.jsx)("div", {
                        className: "relative z-5",
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsx)("div", {
                                className: "flat-title mb-20 wow fadeInUp",
                                "data-wow-delay": "0s",
                                children: (0, l.jsx)("h5", {
                                    className: "fw-semibold",
                                    children: "Hot Product"
                                })
                            }), (0, l.jsxs)("div", {
                                className: "grid-cls grid-cls-v2 wow fadeInUp",
                                "data-wow-delay": "0s",
                                children: [a.XV.slice(0, 1).map(e => (0, l.jsx)("div", {
                                    className: e.gridClass,
                                    children: (0, l.jsxs)("div", {
                                        className: "card-product style-3 style-row h-100 flex-sm-row",
                                        children: [(0, l.jsx)("div", {
                                            className: "card-product-wrapper",
                                            children: (0, l.jsxs)(c(), {
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
                                                    }), (0, l.jsx)(c(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "name-product body-md-2 fw-semibold text-secondary link line-clamp-xl-3",
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
                                                            children: (0, l.jsx)(r.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            className: "wishlist",
                                                            children: (0, l.jsx)(o.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(n.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(m.default, {
                                                                productId: e.id
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }, e.id)), (0, l.jsx)("div", {
                                    className: "grid-item2",
                                    children: (0, l.jsx)(p.default, {
                                        product: a.rw[1],
                                        parentClass: "card-product bg-white style-border type-bd-2 style-thums-2 h-100",
                                        typeClass: "type-right-2"
                                    })
                                }), a.XV.slice(1, 4).map(e => (0, l.jsx)("div", {
                                    className: e.gridClass,
                                    children: (0, l.jsxs)("div", {
                                        className: "card-product style-3 style-row h-100 flex-sm-row",
                                        children: [(0, l.jsx)("div", {
                                            className: "card-product-wrapper",
                                            children: (0, l.jsxs)(c(), {
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
                                                    }), (0, l.jsx)(c(), {
                                                        href: "/product-detail/".concat(e.id),
                                                        className: "name-product body-md-2 fw-semibold text-secondary link line-clamp-xl-3",
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
                                                            children: (0, l.jsx)(r.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            className: "wishlist",
                                                            children: (0, l.jsx)(o.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(n.default, {
                                                                productId: e.id
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(m.default, {
                                                                productId: e.id
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }, e.id))]
                            })]
                        })
                    }), (0, l.jsx)("div", {
                        className: "tf-overlay",
                        children: (0, l.jsx)(d.default, {
                            src: "/images/section/parallax-4.jpg",
                            alt: "",
                            className: "lazyload effect-paralax",
                            width: 1920,
                            height: 900
                        })
                    })]
                })
            }
        },
        6044: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => h
            });
            var l = i(5155),
                a = i(8001);
            i(2115);
            var t = i(7677),
                c = i(6874),
                d = i.n(c),
                r = i(6766),
                o = i(4105),
                n = i(6883),
                m = i(9640),
                p = i(7501),
                x = i(9822);

            function h() {
                return (0, l.jsx)("section", {
                    className: "tf-sp-2",
                    children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [(0, l.jsxs)("div", {
                            className: "flat-title wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: [(0, l.jsx)("h5", {
                                className: "fw-semibold",
                                children: "Trending Products"
                            }), (0, l.jsxs)("div", {
                                className: "box-btn-slide relative",
                                children: [(0, l.jsx)("div", {
                                    className: "swiper-button-prev nav-swiper nav-prev-products snbp36",
                                    children: (0, l.jsx)("i", {
                                        className: "icon-arrow-left-lg"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "swiper-button-next nav-swiper nav-next-products snbn36",
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
                                    slidesPerView: 5,
                                    spaceBetween: 30
                                }
                            },
                            spaceBetween: 15,
                            modules: [o.Vx, o.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd36"
                            },
                            navigation: {
                                prevEl: ".snbp36",
                                nextEl: ".snbn36"
                            },
                            children: [a.IM.map(e => (0, l.jsx)(t.qr, {
                                className: "swiper-slide",
                                children: (0, l.jsxs)("div", {
                                    className: "card-product ".concat(e.animation ? "wow ".concat(e.animation) : ""),
                                    ...e.wowDelay ? {
                                        "data-wow-delay": e.wowDelay
                                    } : {},
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
                                                children: (0, l.jsx)(n.default, {
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
                                                children: (0, l.jsx)(x.default, {
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
                                                }), (0, l.jsxs)("span", {
                                                    className: "old-price body-md-2 text-main-2 fw-normal",
                                                    children: ["$", e.oldPrice.toFixed(3)]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }, e.id)), (0, l.jsx)("div", {
                                className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd36"
                            })]
                        })]
                    })
                })
            }
        },
        6606: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => h
            });
            var l = i(5155),
                a = i(8001);
            i(2115);
            var t = i(7677),
                c = i(6874),
                d = i.n(c),
                r = i(6766),
                o = i(4105),
                n = i(6883),
                m = i(9640),
                p = i(7501),
                x = i(9822);

            function h() {
                return (0, l.jsx)("section", {
                    className: "tf-sp-2",
                    children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [(0, l.jsxs)("div", {
                            className: "flat-title wow fadeInUp",
                            "data-wow-delay": "0s",
                            children: [(0, l.jsx)("h5", {
                                className: "fw-semibold",
                                children: "Best Sellers"
                            }), (0, l.jsxs)("div", {
                                className: "box-btn-slide relative",
                                children: [(0, l.jsx)("div", {
                                    className: "swiper-button-prev nav-swiper nav-prev-products snbp37",
                                    children: (0, l.jsx)("i", {
                                        className: "icon-arrow-left-lg"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "swiper-button-next nav-swiper nav-next-products snbn37",
                                    children: (0, l.jsx)("i", {
                                        className: "icon-arrow-right-lg"
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)(t.RC, {
                            modules: [o.Vx, o.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd37"
                            },
                            navigation: {
                                prevEl: ".snbp37",
                                nextEl: ".snbn37"
                            },
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
                                    slidesPerView: 5,
                                    spaceBetween: 30
                                }
                            },
                            children: [a.P5.map(e => (0, l.jsx)(t.qr, {
                                className: "swiper-slide",
                                children: (0, l.jsxs)("div", {
                                    className: "card-product ".concat(e.animation ? "wow ".concat(e.animation) : ""),
                                    ...e.wowDelay ? {
                                        "data-wow-delay": e.wowDelay
                                    } : {},
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
                                                children: (0, l.jsx)(n.default, {
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
                                                children: (0, l.jsx)(x.default, {
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
                                                }), (0, l.jsxs)("span", {
                                                    className: "old-price body-md-2 text-main-2 fw-normal",
                                                    children: ["$", e.oldPrice.toFixed(3)]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }, e.id)), (0, l.jsx)("div", {
                                className: "d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd37"
                            })]
                        })]
                    })
                })
            }
        },
        6750: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => d
            });
            var l = i(5155),
                a = i(2338);
            i(2115);
            var t = i(4105),
                c = i(7677);

            function d(e) {
                let {
                    fullWidth: s = !1
                } = e;
                return (0, l.jsx)("div", {
                    className: "tf-sp-2 pt-0",
                    children: (0, l.jsx)("div", {
                        className: "container".concat(s ? "-full" : ""),
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
                            spaceBetween: 15,
                            modules: [t.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spf2"
                            },
                            children: [a.U.map((e, s) => (0, l.jsx)(c.qr, {
                                className: "swiper-slide",
                                children: (0, l.jsxs)("div", {
                                    className: "tf-icon-box wow fadeInLeft",
                                    "data-wow-delay": e.delay,
                                    children: [(0, l.jsx)("div", {
                                        className: "icon-box",
                                        children: (0, l.jsx)("i", {
                                            className: "".concat(e.iconClass, " text-black")
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "content",
                                        children: [(0, l.jsx)("p", {
                                            className: "body-text fw-semibold",
                                            children: e.title
                                        }), (0, l.jsx)("p", {
                                            className: "body-text-3 text-cl-1",
                                            children: "Velit ullamco elit et aliqua magna"
                                        })]
                                    })]
                                })
                            }, s)), (0, l.jsx)("div", {
                                className: "sw-pagination-iconbox sw-dot-default justify-content-center spf2"
                            })]
                        })
                    })
                })
            }
        },
        9870: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => m
            });
            var l = i(5155),
                a = i(8001),
                t = i(2115),
                c = i(7677),
                d = i(6874),
                r = i.n(d),
                o = i(6766),
                n = i(4105);

            function m() {
                return (0, l.jsx)("div", {
                    className: "themesFlat",
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)(c.RC, {
                            className: "swiper tf-sw-categories",
                            breakpoints: {
                                0: {
                                    slidesPerView: 1
                                },
                                575: {
                                    slidesPerView: 2
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
                            modules: [n.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd4"
                            },
                            children: [a.vw.map(e => (0, l.jsx)(c.qr, {
                                className: "swiper-slide",
                                children: (0, l.jsxs)(r(), {
                                    href: "/product-detail/".concat(e.id),
                                    className: "wg-product-view style-2 hover-img d-block",
                                    children: [(0, l.jsx)("div", {
                                        className: "image img-style",
                                        children: (0, l.jsx)(o.default, {
                                            src: e.imgSrc,
                                            alt: "",
                                            className: "lazyload",
                                            width: e.width,
                                            height: e.height
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "content",
                                        children: [(0, l.jsxs)("div", {
                                            className: "box-title",
                                            children: [(0, l.jsx)("p", {
                                                className: "tag body-md-2 fw-semibold ".concat(e.tagColor),
                                                children: e.tag
                                            }), (0, l.jsx)("h4", {
                                                className: "name link ".concat(e.textColor),
                                                children: e.title.split("\n").map((e, s) => (0, l.jsxs)(t.Fragment, {
                                                    children: [e, (0, l.jsx)("br", {})]
                                                }, s))
                                            }), (0, l.jsx)("p", {
                                                className: "caption lh-15 fw-3 ".concat(e.textColor),
                                                children: e.description.split("\n").map((e, s) => (0, l.jsxs)(t.Fragment, {
                                                    children: [e, (0, l.jsx)("br", {})]
                                                }, s))
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "box-price ".concat(e.priceColor, " fw-medium"),
                                            children: [(0, l.jsx)("span", {
                                                className: "text",
                                                children: "$"
                                            }), (0, l.jsx)("span", {
                                                className: "price",
                                                children: e.price.toLocaleString()
                                            })]
                                        })]
                                    })]
                                })
                            }, e.id)), (0, l.jsx)("div", {
                                className: "sw-dot-default sw-pagination-categories justify-content-center spd4"
                            })]
                        })
                    })
                })
            }
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [5270, 2357, 2331, 2867, 31, 2433, 7646, 4309, 8441, 1684, 7358], () => s(3978)), _N_E = e.O()
    }
]);