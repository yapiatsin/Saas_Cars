(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6572], {
        312: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => d
            });
            var c = a(5155),
                l = a(2115),
                r = a(6766),
                i = a(31),
                m = a(8001);

            function d() {
                let {
                    removeFromCompareItem: e,
                    compareItem: s,
                    addProductToCart: a,
                    isAddedToCartProducts: d
                } = (0, i.F)(), [t, o] = (0, l.useState)([]);
                return (0, l.useEffect)(() => {
                    o([...m.Oi.filter(e => s.includes(e.id))])
                }, [s]), (0, c.jsx)("div", {
                    className: "tf-sp-2",
                    children: (0, c.jsx)("div", {
                        className: "container",
                        children: (0, c.jsx)("div", {
                            className: "tf-compare",
                            children: (0, c.jsx)("table", {
                                className: "tf-table-compare",
                                children: (0, c.jsxs)("tbody", {
                                    children: [(0, c.jsxs)("tr", {
                                        className: "tf-compare-row row-info",
                                        children: [(0, c.jsx)("td", {
                                            className: "tf-compare-col",
                                            children: (0, c.jsx)("h6", {
                                                className: "fw-semibold",
                                                children: "Product Name"
                                            })
                                        }), t.map((s, a) => (0, c.jsx)("td", {
                                            className: "tf-compare-col tf-compare-info",
                                            children: (0, c.jsxs)("div", {
                                                className: "compare-item_info",
                                                children: [(0, c.jsx)("a", {
                                                    href: "#",
                                                    className: "text-line-clamp-2 body-md-2 fw-semibold text-secondary link",
                                                    children: s.title
                                                }), (0, c.jsx)("span", {
                                                    className: "icon",
                                                    onClick: () => e(s.id),
                                                    children: (0, c.jsx)("i", {
                                                        className: "icon-close remove link cs-pointer"
                                                    })
                                                })]
                                            })
                                        }, a))]
                                    }), (0, c.jsxs)("tr", {
                                        className: "tf-compare-row row-image",
                                        children: [(0, c.jsx)("td", {
                                            className: "tf-compare-col",
                                            children: (0, c.jsx)("h6", {
                                                className: "fw-semibold",
                                                children: "Image"
                                            })
                                        }), t.map((e, s) => (0, c.jsx)("td", {
                                            className: "tf-compare-col tf-compare-image",
                                            children: (0, c.jsx)("a", {
                                                href: "#",
                                                className: "image",
                                                children: (0, c.jsx)(r.default, {
                                                    src: e.imgSrc,
                                                    alt: "Image",
                                                    className: "lazyload",
                                                    width: 500,
                                                    height: 500
                                                })
                                            })
                                        }, s))]
                                    }), (0, c.jsxs)("tr", {
                                        className: "tf-compare-row",
                                        children: [(0, c.jsx)("td", {
                                            className: "tf-compare-col",
                                            children: (0, c.jsx)("h6", {
                                                className: "fw-semibold",
                                                children: "SKU"
                                            })
                                        }), t.map((e, s) => (0, c.jsx)("td", {
                                            className: "tf-compare-col",
                                            children: (0, c.jsx)("span", {
                                                children: "0047"
                                            })
                                        }, s))]
                                    }), (0, c.jsxs)("tr", {
                                        className: "tf-compare-row",
                                        children: [(0, c.jsx)("td", {
                                            className: "tf-compare-col",
                                            children: (0, c.jsx)("h6", {
                                                className: "fw-semibold",
                                                children: "Price"
                                            })
                                        }), t.map((e, s) => (0, c.jsx)("td", {
                                            className: "tf-compare-col",
                                            children: (0, c.jsxs)("p", {
                                                className: "price-wrap fw-medium flex-nowrap",
                                                children: [(0, c.jsxs)("span", {
                                                    className: "new-price price-text fw-medium mb-0",
                                                    children: ["$", e.price.toFixed(3)]
                                                }), e.oldPrice && (0, c.jsxs)("span", {
                                                    className: "old-price body-md-2 text-main-2 fw-normal",
                                                    children: ["$", e.oldPrice.toFixed(3)]
                                                })]
                                            })
                                        }, s))]
                                    }), (0, c.jsxs)("tr", {
                                        className: "tf-compare-row",
                                        children: [(0, c.jsx)("td", {
                                            className: "tf-compare-col",
                                            children: (0, c.jsx)("h6", {
                                                className: "fw-semibold",
                                                children: "Dimensions"
                                            })
                                        }), t.map((e, s) => (0, c.jsx)("td", {
                                            className: "tf-compare-col",
                                            children: (0, c.jsx)("span", {
                                                children: "N/A"
                                            })
                                        }, s))]
                                    }), (0, c.jsxs)("tr", {
                                        className: "tf-compare-row",
                                        children: [(0, c.jsx)("td", {
                                            className: "tf-compare-col",
                                            children: (0, c.jsx)("h6", {
                                                className: "fw-semibold",
                                                children: "Add To Cart"
                                            })
                                        }), t.map((e, s) => (0, c.jsx)("td", {
                                            className: "tf-compare-col",
                                            children: (0, c.jsx)("a", {
                                                href: "#shoppingCart",
                                                "data-bs-toggle": "offcanvas",
                                                className: "tf-btn btn-gray text-nowrap",
                                                onClick: () => a(e.id),
                                                children: (0, c.jsx)("span", {
                                                    className: "text-white",
                                                    children: d(e.id) ? "Already Added" : "Add to Cart"
                                                })
                                            })
                                        }, s))]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        1384: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 2988)), Promise.resolve().then(a.bind(a, 3603)), Promise.resolve().then(a.bind(a, 3340)), Promise.resolve().then(a.bind(a, 2867)), Promise.resolve().then(a.bind(a, 3899)), Promise.resolve().then(a.bind(a, 7526)), Promise.resolve().then(a.bind(a, 312)), Promise.resolve().then(a.t.bind(a, 6874, 23)), Promise.resolve().then(a.t.bind(a, 3063, 23))
        },
        5695: (e, s, a) => {
            "use strict";
            var c = a(8999);
            a.o(c, "usePathname") && a.d(s, {
                usePathname: function() {
                    return c.usePathname
                }
            })
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [5270, 2331, 2867, 31, 5120, 8441, 1684, 7358], () => s(1384)), _N_E = e.O()
    }
]);