(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6409], {
        1947: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 2988)), Promise.resolve().then(a.bind(a, 6750)), Promise.resolve().then(a.bind(a, 3603)), Promise.resolve().then(a.bind(a, 5736)), Promise.resolve().then(a.bind(a, 3340)), Promise.resolve().then(a.bind(a, 2867)), Promise.resolve().then(a.bind(a, 3899)), Promise.resolve().then(a.bind(a, 7526)), Promise.resolve().then(a.bind(a, 9071)), Promise.resolve().then(a.t.bind(a, 6874, 23)), Promise.resolve().then(a.t.bind(a, 3063, 23))
        },
        2338: (e, s, a) => {
            "use strict";
            a.d(s, {
                U: () => l,
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
                l = [{
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
                default: () => p
            });
            var i = a(5155),
                l = a(8001);
            a(2115);
            var t = a(7677),
                c = a(6874),
                d = a.n(c),
                n = a(6766),
                r = a(4105),
                o = a(6883),
                m = a(9640),
                h = a(7501),
                x = a(9822);

            function p(e) {
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
                        }), (0, i.jsxs)(t.RC, {
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
                            modules: [r.Vx, r.dK],
                            pagination: {
                                clickable: !0,
                                el: ".spd12"
                            },
                            navigation: {
                                prevEl: ".snbp12",
                                nextEl: ".snbn12"
                            },
                            children: [l.Kw.map(e => (0, i.jsx)(t.qr, {
                                className: "swiper-slide",
                                children: (0, i.jsxs)("div", {
                                    className: "card-product style-img-border ".concat(e.animation ? "wow " + e.animation : ""),
                                    "data-wow-delay": e.wowDelay || void 0,
                                    children: [(0, i.jsxs)("div", {
                                        className: "card-product-wrapper",
                                        children: [(0, i.jsxs)(d(), {
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
                                                children: (0, i.jsx)(h.default, {
                                                    productId: e.id,
                                                    tooltipClass: "tooltip-left"
                                                })
                                            }), (0, i.jsx)("li", {
                                                className: "d-none d-sm-block",
                                                children: (0, i.jsx)(x.default, {
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
                                                }), (0, i.jsx)(d(), {
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
                default: () => d
            });
            var i = a(5155),
                l = a(2338);
            a(2115);
            var t = a(4105),
                c = a(7677);

            function d(e) {
                let {
                    fullWidth: s = !1
                } = e;
                return (0, i.jsx)("div", {
                    className: "tf-sp-2 pt-0",
                    children: (0, i.jsx)("div", {
                        className: "container".concat(s ? "-full" : ""),
                        children: (0, i.jsxs)(c.RC, {
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
                            children: [l.U.map((e, s) => (0, i.jsx)(c.qr, {
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
                default: () => t
            });
            var i = a(5155),
                l = a(31);

            function t(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, {
                    addProductToCart: t,
                    isAddedToCartProducts: c
                } = (0, l.F)();
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("a", {
                        href: "#shoppingCart",
                        "data-bs-toggle": "offcanvas",
                        onClick: () => t(s),
                        className: "box-icon add-to-cart btn-icon-action hover-tooltip ".concat(a),
                        children: [(0, i.jsx)("span", {
                            className: "icon icon-cart2"
                        }), (0, i.jsx)("span", {
                            className: "tooltip",
                            children: c(s) ? "Already Added" : "Add to Cart"
                        })]
                    })
                })
            }
        },
        7501: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => c
            });
            var i = a(5155),
                l = a(31),
                t = a(8001);

            function c(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, c = t.Oi.filter(e => e.id == s)[0] || t.Oi[0], {
                    setQuickViewItem: d
                } = (0, l.F)();
                return (0, i.jsxs)("a", {
                    href: "#quickView",
                    "data-bs-toggle": "modal",
                    onClick: () => d(c),
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
        9071: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => n
            });
            var i = a(5155);
            a(2115);
            var l = a(6874),
                t = a.n(l),
                c = a(6766),
                d = a(31);

            function n() {
                let {
                    cartProducts: e,
                    totalPrice: s
                } = (0, d.F)();
                return (0, i.jsx)("section", {
                    className: "tf-sp-2",
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsx)("div", {
                            className: "checkout-status tf-sp-2 pt-0",
                            children: (0, i.jsxs)("div", {
                                className: "checkout-wrap",
                                children: [(0, i.jsx)("span", {
                                    className: "checkout-bar next"
                                }), (0, i.jsxs)("div", {
                                    className: "step-payment",
                                    children: [(0, i.jsx)("span", {
                                        className: "icon",
                                        children: (0, i.jsx)("i", {
                                            className: "icon-shop-cart-1"
                                        })
                                    }), (0, i.jsx)(t(), {
                                        href: "/shop-cart",
                                        className: "link body-text-3",
                                        children: "Shopping Cart"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "step-payment",
                                    children: [(0, i.jsx)("span", {
                                        className: "icon",
                                        children: (0, i.jsx)("i", {
                                            className: "icon-shop-cart-2"
                                        })
                                    }), (0, i.jsx)(t(), {
                                        href: "/checkout",
                                        className: "text-secondary link body-text-3",
                                        children: "Shopping & Checkout"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "step-payment",
                                    children: [(0, i.jsx)("span", {
                                        className: "icon",
                                        children: (0, i.jsx)("i", {
                                            className: "icon-shop-cart-3"
                                        })
                                    }), (0, i.jsx)(t(), {
                                        href: "/order-details",
                                        className: "link body-text-3",
                                        children: "Confirmation"
                                    })]
                                })]
                            })
                        }), (0, i.jsxs)("div", {
                            className: "tf-checkout-wrap flex-lg-nowrap",
                            children: [(0, i.jsxs)("div", {
                                className: "page-checkout",
                                children: [(0, i.jsxs)("div", {
                                    className: "wrap",
                                    children: [(0, i.jsxs)("h5", {
                                        className: "title has-account",
                                        children: [(0, i.jsx)("span", {
                                            className: "fw-semibold",
                                            children: "Contact"
                                        }), (0, i.jsxs)("span", {
                                            className: "body-text-3",
                                            children: ["Have an account?", (0, i.jsx)("a", {
                                                href: "#register",
                                                "data-bs-toggle": "modal",
                                                className: "body-text-3 text-secondary link",
                                                children: "Login"
                                            })]
                                        })]
                                    }), (0, i.jsxs)("form", {
                                        action: "#",
                                        className: "form-checkout-contact",
                                        children: [(0, i.jsx)("label", {
                                            className: "body-md-2 fw-semibold",
                                            children: "Email or Phone"
                                        }), (0, i.jsx)("input", {
                                            className: "def",
                                            type: "text",
                                            placeholder: "Your contact",
                                            required: ""
                                        }), (0, i.jsx)("p", {
                                            className: "caption text-main-2 font-2",
                                            children: "Order information will be sent to your email"
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "wrap",
                                    children: [(0, i.jsx)("h5", {
                                        className: "title fw-semibold",
                                        children: "Delivery"
                                    }), (0, i.jsxs)("form", {
                                        action: "#",
                                        className: "def",
                                        children: [(0, i.jsxs)("fieldset", {
                                            children: [(0, i.jsx)("label", {
                                                children: "Country/Region"
                                            }), (0, i.jsx)("div", {
                                                className: "tf-select",
                                                children: (0, i.jsxs)("select", {
                                                    children: [(0, i.jsx)("option", {
                                                        children: "Select your Country/Region"
                                                    }), (0, i.jsx)("option", {
                                                        children: "American"
                                                    })]
                                                })
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "cols",
                                            children: [(0, i.jsxs)("fieldset", {
                                                children: [(0, i.jsx)("label", {
                                                    children: "First name"
                                                }), (0, i.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "e.g. Jonn",
                                                    required: ""
                                                })]
                                            }), (0, i.jsxs)("fieldset", {
                                                children: [(0, i.jsx)("label", {
                                                    children: "Last name"
                                                }), (0, i.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "e.g. Doe",
                                                    required: ""
                                                })]
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "cols",
                                            children: [(0, i.jsxs)("fieldset", {
                                                children: [(0, i.jsx)("label", {
                                                    children: "City"
                                                }), (0, i.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "e.g. New York",
                                                    required: ""
                                                })]
                                            }), (0, i.jsxs)("fieldset", {
                                                children: [(0, i.jsx)("label", {
                                                    children: "State"
                                                }), (0, i.jsx)("div", {
                                                    className: "tf-select",
                                                    children: (0, i.jsxs)("select", {
                                                        children: [(0, i.jsx)("option", {
                                                            children: "Select"
                                                        }), (0, i.jsx)("option", {
                                                            children: "Alabam"
                                                        }), (0, i.jsx)("option", {
                                                            children: "Alaska"
                                                        }), (0, i.jsx)("option", {
                                                            children: "California"
                                                        }), (0, i.jsx)("option", {
                                                            children: "Georgia"
                                                        }), (0, i.jsx)("option", {
                                                            children: "Washington"
                                                        })]
                                                    })
                                                })]
                                            }), (0, i.jsxs)("fieldset", {
                                                children: [(0, i.jsx)("label", {
                                                    children: "ZIP code"
                                                }), (0, i.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "e.g. 83254",
                                                    required: ""
                                                })]
                                            })]
                                        }), (0, i.jsxs)("fieldset", {
                                            children: [(0, i.jsx)("label", {
                                                children: "Address"
                                            }), (0, i.jsx)("input", {
                                                type: "email",
                                                placeholder: "Your detailed address",
                                                required: ""
                                            })]
                                        }), (0, i.jsxs)("fieldset", {
                                            children: [(0, i.jsx)("label", {
                                                children: "Order note"
                                            }), (0, i.jsx)("textarea", {
                                                placeholder: "Note on your order",
                                                defaultValue: ""
                                            })]
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "wrap",
                                    children: [(0, i.jsx)("h5", {
                                        className: "title",
                                        children: "Payment"
                                    }), (0, i.jsxs)("form", {
                                        action: "#",
                                        className: "form-payment",
                                        children: [(0, i.jsxs)("div", {
                                            className: "payment-box",
                                            id: "payment-box",
                                            children: [(0, i.jsxs)("div", {
                                                className: "payment-item payment-choose-card active",
                                                children: [(0, i.jsxs)("label", {
                                                    htmlFor: "credit-card-method",
                                                    className: "payment-header",
                                                    "data-bs-toggle": "collapse",
                                                    "data-bs-target": "#credit-card-payment",
                                                    "aria-controls": "credit-card-payment",
                                                    "aria-expanded": "true",
                                                    children: [(0, i.jsx)("span", {
                                                        className: "body-md-2 fw-semibold title",
                                                        children: "Select payment method"
                                                    }), (0, i.jsx)("input", {
                                                        type: "radio",
                                                        name: "payment-method",
                                                        className: "d-none tf-check-rounded",
                                                        id: "credit-card-method",
                                                        defaultChecked: ""
                                                    }), (0, i.jsx)("p", {
                                                        className: "select-payment",
                                                        children: "Mastercard"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    id: "credit-card-payment",
                                                    className: "collapse show",
                                                    "data-bs-parent": "#payment-box",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "payment-body",
                                                        children: [(0, i.jsxs)("fieldset", {
                                                            children: [(0, i.jsx)("label", {
                                                                children: "Credit Card number"
                                                            }), (0, i.jsx)("input", {
                                                                type: "text",
                                                                className: "number-credit-card",
                                                                placeholder: "xxxx   xxxx   xxxx   xxxx"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "cols",
                                                            children: [(0, i.jsxs)("fieldset", {
                                                                children: [(0, i.jsx)("label", {
                                                                    children: "Expiration date"
                                                                }), (0, i.jsx)("input", {
                                                                    type: "date"
                                                                })]
                                                            }), (0, i.jsxs)("fieldset", {
                                                                children: [(0, i.jsx)("label", {
                                                                    children: "CVV"
                                                                }), (0, i.jsx)("input", {
                                                                    type: "number",
                                                                    placeholder: "xxx"
                                                                })]
                                                            })]
                                                        }), (0, i.jsxs)("fieldset", {
                                                            children: [(0, i.jsx)("label", {
                                                                children: "Name on card"
                                                            }), (0, i.jsx)("input", {
                                                                type: "text",
                                                                placeholder: "e.g. JOHNDOE"
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "payment-item",
                                                children: [(0, i.jsxs)("label", {
                                                    htmlFor: "delivery-method",
                                                    className: "payment-header radio-item collapsed",
                                                    "data-bs-toggle": "collapse",
                                                    "data-bs-target": "#delivery-payment",
                                                    "aria-controls": "delivery-payment",
                                                    "aria-expanded": "false",
                                                    children: [(0, i.jsx)("input", {
                                                        type: "radio",
                                                        name: "payment-method",
                                                        className: "tf-check-rounded",
                                                        id: "delivery-method"
                                                    }), (0, i.jsx)("span", {
                                                        className: "body-text-3",
                                                        children: "Cash on delivery"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    id: "delivery-payment",
                                                    className: "collapse",
                                                    "data-bs-parent": "#payment-box"
                                                })]
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "box-btn",
                                            children: (0, i.jsx)(t(), {
                                                href: "/order-details",
                                                className: "tf-btn w-100",
                                                children: (0, i.jsx)("span", {
                                                    className: "text-white",
                                                    children: "Place order"
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                className: "flat-sidebar-checkout",
                                children: (0, i.jsxs)("div", {
                                    className: "sidebar-checkout-content",
                                    children: [(0, i.jsx)("h5", {
                                        className: "fw-semibold",
                                        children: "Order Summary"
                                    }), e.length ? (0, i.jsx)("ul", {
                                        className: "list-product",
                                        children: e.map((e, s) => (0, i.jsxs)("li", {
                                            className: "item-product",
                                            children: [(0, i.jsx)("a", {
                                                href: "#",
                                                className: "img-product",
                                                children: (0, i.jsx)(c.default, {
                                                    alt: "",
                                                    src: e.imgSrc,
                                                    width: 500,
                                                    height: 500
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "content-box",
                                                children: [(0, i.jsx)("a", {
                                                    href: "#",
                                                    className: "link-secondary body-md-2 fw-semibold",
                                                    children: e.title
                                                }), (0, i.jsxs)("p", {
                                                    className: "price-quantity price-text fw-semibold",
                                                    children: ["$", e.price.toFixed(2), (0, i.jsxs)("span", {
                                                        className: "body-md-2 text-main-2 fw-normal",
                                                        children: ["X", e.quantity]
                                                    })]
                                                }), (0, i.jsx)("p", {
                                                    className: "body-md-2 text-main-2",
                                                    children: "Gray"
                                                })]
                                            })]
                                        }, s))
                                    }) : (0, i.jsxs)("div", {
                                        className: "p-4",
                                        children: [(0, i.jsxs)("div", {
                                            className: "col-4",
                                            children: ["Your Cart is empty. Start adding favorite products to cart!", " "]
                                        }), (0, i.jsx)(t(), {
                                            className: "tf-btn mt-2 mb-3 text-white",
                                            style: {
                                                width: "fit-content"
                                            },
                                            href: "/shop-default",
                                            children: "Explore Products"
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "",
                                        children: [(0, i.jsx)("p", {
                                            className: "body-md-2 fw-semibold sub-type",
                                            children: "Discount code"
                                        }), (0, i.jsxs)("form", {
                                            action: "#",
                                            className: "ip-discount-code style-2",
                                            children: [(0, i.jsx)("input", {
                                                type: "text",
                                                className: "def",
                                                placeholder: "Your code",
                                                required: ""
                                            }), (0, i.jsx)("button", {
                                                type: "submit",
                                                className: "tf-btn btn-gray-2",
                                                children: (0, i.jsx)("span", {
                                                    children: "Apply"
                                                })
                                            })]
                                        })]
                                    }), (0, i.jsxs)("ul", {
                                        className: "sec-total-price",
                                        children: [(0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("span", {
                                                className: "body-text-3",
                                                children: "Sub total"
                                            }), (0, i.jsxs)("span", {
                                                className: "body-text-3",
                                                children: ["$", s.toFixed(2)]
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("span", {
                                                className: "body-text-3",
                                                children: "Shipping"
                                            }), (0, i.jsx)("span", {
                                                className: "body-text-3",
                                                children: "Free shipping"
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            children: [(0, i.jsx)("span", {
                                                className: "body-md-2 fw-semibold",
                                                children: "Total"
                                            }), (0, i.jsxs)("span", {
                                                className: "body-md-2 fw-semibold text-primary",
                                                children: ["$", s.toFixed(2)]
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        9640: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => t
            });
            var i = a(5155),
                l = a(31);

            function t(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, {
                    addToWishlist: t,
                    isAddedtoWishlist: c
                } = (0, l.F)();
                return (0, i.jsxs)("a", {
                    href: "#",
                    onClick: e => {
                        e.preventDefault(), t(s)
                    },
                    className: "box-icon btn-icon-action hover-tooltip ".concat(a),
                    children: [(0, i.jsx)("span", {
                        className: "icon ".concat(c(s) ? "icon-trash" : "icon-heart2", " ")
                    }), (0, i.jsxs)("span", {
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
            var i = a(5155),
                l = a(31);

            function t(e) {
                let {
                    productId: s,
                    tooltipClass: a = ""
                } = e, {
                    addToCompareItem: t,
                    isAddedtoCompareItem: c
                } = (0, l.F)();
                return (0, i.jsxs)("a", {
                    href: "#compare",
                    "data-bs-toggle": "offcanvas",
                    onClick: () => t(s),
                    className: "box-icon btn-icon-action hover-tooltip ".concat(a),
                    children: [(0, i.jsx)("span", {
                        className: "icon icon-compare1"
                    }), (0, i.jsxs)("span", {
                        className: "tooltip",
                        children: [" ", c(s) ? "Compared" : "Compare"]
                    })]
                })
            }
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [5270, 2357, 2331, 2867, 31, 5120, 8441, 1684, 7358], () => s(1947)), _N_E = e.O()
    }
]);