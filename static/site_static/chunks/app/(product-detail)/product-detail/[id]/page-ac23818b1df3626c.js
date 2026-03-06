(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9653], {
        3272: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => u
            });
            var t = i(5155),
                a = i(2115),
                l = i(4105),
                r = i(7677),
                c = i(4534),
                n = i(3754),
                o = i(6766);
            let d = [{
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

            function m(e) {
                let {
                    firstIamge: s = d[0].src
                } = e, [m, h] = (0, a.useState)(null), x = (0, a.useRef)(null);
                return d[0].src = s, (0, a.useEffect)(() => {
                    let e = new c.A({
                        gallery: "#gallery-swiper-started",
                        children: ".item",
                        pswpModule: () => i.e(2958).then(i.bind(i, 6438))
                    });
                    return e.init(), x.current = e, () => {
                        e.destroy()
                    }
                }, []), (0, a.useEffect)(() => {
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
                        i = e => {
                            let s = e.target.closest(".section-image-zoom");
                            s && s.classList.remove("zoom-active")
                        };
                    return e.forEach(e => {
                        e.addEventListener("mouseover", s), e.addEventListener("mouseleave", i)
                    }), () => {
                        e.forEach(e => {
                            e.removeEventListener("mouseover", s), e.removeEventListener("mouseleave", i)
                        })
                    }
                }, []), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(r.RC, {
                        className: "swiper tf-product-media-main",
                        id: "gallery-swiper-started",
                        thumbs: {
                            swiper: m
                        },
                        modules: [l.WO],
                        children: d.map((e, s) => (0, t.jsx)(r.qr, {
                            className: "swiper-slide",
                            "data-color": "gray",
                            children: (0, t.jsx)("a", {
                                href: e.src,
                                target: "_blank",
                                className: "item",
                                "data-pswp-width": "600px",
                                "data-pswp-height": "800px",
                                children: (0, t.jsx)(o.default, {
                                    className: "tf-image-zoom lazyload",
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
                        children: (0, t.jsx)(r.RC, {
                            className: "swiper tf-product-media-thumbs other-image-zoom",
                            modules: [l.Vx, l.WO],
                            onSwiper: h,
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
                            children: d.map((e, s) => (0, t.jsx)(r.qr, {
                                className: "swiper-slide stagger-item",
                                "data-color": e.color,
                                children: (0, t.jsx)("div", {
                                    className: "item",
                                    children: (0, t.jsx)(o.default, {
                                        className: "lazyload",
                                        "data-src": e.src,
                                        alt: "",
                                        src: e.src,
                                        width: 652,
                                        height: 652
                                    })
                                })
                            }, s))
                        })
                    })]
                })
            }
            var h = i(6874),
                x = i.n(h),
                p = i(31);

            function u(e) {
                var s;
                let {
                    product: i
                } = e, [l, r] = (0, a.useState)(1), {
                    addProductToCart: c,
                    isAddedToCartProducts: n
                } = (0, p.F)();
                return (0, t.jsx)("section", {
                    children: (0, t.jsx)("div", {
                        className: "tf-main-product section-image-zoom",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsxs)("div", {
                                className: "row",
                                children: [(0, t.jsx)("div", {
                                    className: "col-md-6",
                                    children: (0, t.jsx)("div", {
                                        className: "tf-product-media-wrap thumbs-default sticky-top",
                                        children: (0, t.jsx)("div", {
                                            className: "thumbs-slider",
                                            children: (0, t.jsx)(m, {
                                                firstIamge: i.imgSrc
                                            })
                                        })
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-md-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "tf-product-info-wrap position-relative",
                                        children: [(0, t.jsx)("div", {
                                            className: "tf-zoom-main"
                                        }), (0, t.jsxs)("div", {
                                            className: "tf-product-info-list other-image-zoom flex-xxl-nowrap",
                                            children: [(0, t.jsxs)("div", {
                                                className: "tf-product-info-content",
                                                children: [(0, t.jsxs)("div", {
                                                    className: "infor-heading",
                                                    children: [(0, t.jsxs)("p", {
                                                        className: "caption",
                                                        children: ["Categories:", (0, t.jsx)(x(), {
                                                            href: "/shop-default",
                                                            className: "link text-secondary",
                                                            children: "Consumer Electronics"
                                                        })]
                                                    }), (0, t.jsx)("h5", {
                                                        className: "product-info-name fw-semibold",
                                                        children: null !== (s = i.title) && void 0 !== s ? s : "Elite Gourmet EKT1001B Electric BPA-Free Glass Kettle,\n                        Cordless 360\xb0 Base"
                                                    }), (0, t.jsxs)("ul", {
                                                        className: "product-info-rate-wrap",
                                                        children: [(0, t.jsxs)("li", {
                                                            className: "star-review",
                                                            children: [(0, t.jsxs)("ul", {
                                                                className: "list-star",
                                                                children: [(0, t.jsx)("li", {
                                                                    children: (0, t.jsx)("i", {
                                                                        className: "icon-star"
                                                                    })
                                                                }), (0, t.jsx)("li", {
                                                                    children: (0, t.jsx)("i", {
                                                                        className: "icon-star"
                                                                    })
                                                                }), (0, t.jsx)("li", {
                                                                    children: (0, t.jsx)("i", {
                                                                        className: "icon-star"
                                                                    })
                                                                }), (0, t.jsx)("li", {
                                                                    children: (0, t.jsx)("i", {
                                                                        className: "icon-star"
                                                                    })
                                                                }), (0, t.jsx)("li", {
                                                                    children: (0, t.jsx)("i", {
                                                                        className: "icon-star text-main-4"
                                                                    })
                                                                })]
                                                            }), (0, t.jsx)("p", {
                                                                className: "caption text-main-2",
                                                                children: "Reviews (1.738)"
                                                            })]
                                                        }), (0, t.jsx)("li", {
                                                            children: (0, t.jsx)("p", {
                                                                className: "caption text-main-2",
                                                                children: "Sold: 349"
                                                            })
                                                        }), (0, t.jsx)("li", {
                                                            className: "d-flex",
                                                            children: (0, t.jsx)(x(), {
                                                                href: "/shop-default",
                                                                className: "caption text-secondary link",
                                                                children: "View shop"
                                                            })
                                                        })]
                                                    })]
                                                }), (0, t.jsxs)("div", {
                                                    className: "infor-center",
                                                    children: [(0, t.jsxs)("div", {
                                                        className: "product-info-price",
                                                        children: [(0, t.jsxs)("h4", {
                                                            className: "text-primary",
                                                            children: ["$", i.price.toFixed(2)]
                                                        }), " ", i.oldPrice && (0, t.jsxs)("span", {
                                                            className: "price-text text-main-2 old-price",
                                                            children: ["$", i.oldPrice.toFixed(2)]
                                                        })]
                                                    }), (0, t.jsxs)("ul", {
                                                        className: "product-fearture-list",
                                                        children: [(0, t.jsxs)("li", {
                                                            children: [(0, t.jsx)("p", {
                                                                className: "body-md-2 fw-semibold",
                                                                children: "Brand"
                                                            }), (0, t.jsx)("span", {
                                                                className: "body-text-3",
                                                                children: "Elite Gourmet"
                                                            })]
                                                        }), (0, t.jsxs)("li", {
                                                            children: [(0, t.jsx)("p", {
                                                                className: "body-md-2 fw-semibold",
                                                                children: "Capacity"
                                                            }), (0, t.jsx)("span", {
                                                                className: "body-text-3",
                                                                children: "1 Liters"
                                                            })]
                                                        }), (0, t.jsxs)("li", {
                                                            children: [(0, t.jsx)("p", {
                                                                className: "body-md-2 fw-semibold",
                                                                children: "Material"
                                                            }), (0, t.jsx)("span", {
                                                                className: "body-text-3",
                                                                children: "Glass"
                                                            })]
                                                        }), (0, t.jsxs)("li", {
                                                            children: [(0, t.jsx)("p", {
                                                                className: "body-md-2 fw-semibold",
                                                                children: "Wattage"
                                                            }), (0, t.jsx)("span", {
                                                                className: "body-text-3",
                                                                children: "1100 watts"
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, t.jsxs)("div", {
                                                    className: "infor-bottom",
                                                    children: [(0, t.jsx)("h6", {
                                                        className: "fw-semibold",
                                                        children: "About this item"
                                                    }), (0, t.jsxs)("ul", {
                                                        className: "product-about-list",
                                                        children: [(0, t.jsx)("li", {
                                                            children: (0, t.jsx)("p", {
                                                                className: "body-text-3",
                                                                children: "Here’s the quickest way to enjoy your delicious hot tea every single day."
                                                            })
                                                        }), (0, t.jsx)("li", {
                                                            children: (0, t.jsx)("p", {
                                                                className: "body-text-3",
                                                                children: "100% BPA - Free premium design meets excellent"
                                                            })
                                                        }), (0, t.jsx)("li", {
                                                            children: (0, t.jsx)("p", {
                                                                className: "body-text-3",
                                                                children: "No more messy accidents or spills"
                                                            })
                                                        }), (0, t.jsx)("li", {
                                                            children: (0, t.jsx)("p", {
                                                                className: "body-text-3",
                                                                children: "So easy & convenient that everyone can use it"
                                                            })
                                                        }), (0, t.jsx)("li", {
                                                            children: (0, t.jsx)("p", {
                                                                className: "body-text-3",
                                                                children: "This powerful 900-1100-Watt kettle has convenient capacity markings on the body lets you accurately"
                                                            })
                                                        }), (0, t.jsx)("li", {
                                                            children: (0, t.jsx)("p", {
                                                                className: "body-text-3",
                                                                children: "1 year limited warranty and us-based customer support team lets you buy with confidence."
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            }), (0, t.jsxs)("div", {
                                                className: "tf-product-info-choose-option sticky-top",
                                                children: [(0, t.jsxs)("div", {
                                                    className: "product-delivery",
                                                    children: [(0, t.jsxs)("p", {
                                                        className: "price-text fw-medium text-primary",
                                                        children: ["$", i.price.toFixed(2)]
                                                    }), (0, t.jsxs)("p", {
                                                        children: [(0, t.jsx)("i", {
                                                            className: "icon-delivery-2"
                                                        }), " Free shipping"]
                                                    }), (0, t.jsxs)("div", {
                                                        className: "shipping-to",
                                                        children: [(0, t.jsx)("p", {
                                                            className: "body-md-2",
                                                            children: "Shipping to:"
                                                        }), (0, t.jsx)("div", {
                                                            className: "tf-cur",
                                                            children: (0, t.jsx)("div", {
                                                                className: "tf-cur-item",
                                                                children: (0, t.jsxs)("select", {
                                                                    className: "select-default cs-pointer fw-semibold body-md-2",
                                                                    children: [(0, t.jsx)("option", {
                                                                        children: "Metro Manila"
                                                                    }), (0, t.jsx)("option", {
                                                                        children: "Metro Manila"
                                                                    })]
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                }), (0, t.jsxs)("div", {
                                                    className: "product-quantity",
                                                    children: [(0, t.jsx)("p", {
                                                        className: "title body-text-3",
                                                        children: "Quantity"
                                                    }), (0, t.jsxs)("div", {
                                                        className: "wg-quantity",
                                                        children: [(0, t.jsx)("button", {
                                                            className: "btn-quantity btn-decrease",
                                                            onClick: () => r(e => 1 == e ? 1 : e - 1),
                                                            children: (0, t.jsx)("i", {
                                                                className: "icon-minus"
                                                            })
                                                        }), (0, t.jsx)("input", {
                                                            className: "quantity-product",
                                                            type: "text",
                                                            readOnly: !0,
                                                            value: l
                                                        }), (0, t.jsx)("button", {
                                                            className: "btn-quantity btn-increase",
                                                            onClick: () => r(e => e + 1),
                                                            children: (0, t.jsx)("i", {
                                                                className: "icon-plus"
                                                            })
                                                        })]
                                                    })]
                                                }), (0, t.jsxs)("div", {
                                                    className: "product-color",
                                                    children: [(0, t.jsx)("p", {
                                                        className: "title body-text-3",
                                                        children: "Color"
                                                    }), (0, t.jsx)("div", {
                                                        className: "tf-select-color",
                                                        children: (0, t.jsxs)("select", {
                                                            className: "select-color",
                                                            children: [(0, t.jsx)("option", {
                                                                children: "Graphite Black"
                                                            }), (0, t.jsx)("option", {
                                                                children: "Graphite Blue"
                                                            })]
                                                        })
                                                    })]
                                                }), (0, t.jsxs)("div", {
                                                    className: "product-box-btn",
                                                    children: [(0, t.jsxs)("a", {
                                                        href: "#shoppingCart",
                                                        "data-bs-toggle": "offcanvas",
                                                        className: "tf-btn text-white",
                                                        onClick: () => c(i.id, l),
                                                        children: [n(i.id) ? "Already Added" : "Add to cart", (0, t.jsx)("i", {
                                                            className: "icon-cart-2"
                                                        })]
                                                    }), (0, t.jsx)(x(), {
                                                        href: "/shop-cart",
                                                        className: "tf-btn text-white btn-gray",
                                                        children: "Buy now"
                                                    })]
                                                }), (0, t.jsxs)("div", {
                                                    className: "product-detail",
                                                    children: [(0, t.jsx)("p", {
                                                        className: "caption",
                                                        children: "Details"
                                                    }), (0, t.jsxs)("p", {
                                                        className: "body-text-3",
                                                        children: [(0, t.jsx)("span", {
                                                            children: "Return policy: Eligible for Return, Refund or Replacement within 30 days of receipt"
                                                        }), (0, t.jsx)("span", {
                                                            children: "Support: Free Amazon tech support included"
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        3396: (e, s, i) => {
            Promise.resolve().then(i.bind(i, 6864)), Promise.resolve().then(i.bind(i, 2988)), Promise.resolve().then(i.bind(i, 3603)), Promise.resolve().then(i.bind(i, 5736)), Promise.resolve().then(i.bind(i, 3340)), Promise.resolve().then(i.bind(i, 2867)), Promise.resolve().then(i.bind(i, 3899)), Promise.resolve().then(i.bind(i, 7526)), Promise.resolve().then(i.bind(i, 3272)), Promise.resolve().then(i.bind(i, 1208)), Promise.resolve().then(i.bind(i, 8810)), Promise.resolve().then(i.t.bind(i, 6874, 23)), Promise.resolve().then(i.t.bind(i, 3063, 23))
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [5270, 2357, 1463, 2331, 2867, 31, 5120, 9561, 8441, 1684, 7358], () => s(3396)), _N_E = e.O()
    }
]);