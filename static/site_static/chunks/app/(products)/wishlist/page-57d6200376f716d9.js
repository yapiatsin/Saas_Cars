(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7526], {
        5695: (e, s, i) => {
            "use strict";
            var t = i(8999);
            i.o(t, "usePathname") && i.d(s, {
                usePathname: function() {
                    return t.usePathname
                }
            })
        },
        8566: (e, s, i) => {
            "use strict";
            i.d(s, {
                default: () => h
            });
            var t = i(5155),
                l = i(2115),
                a = i(6874),
                c = i.n(a),
                d = i(6766),
                r = i(31),
                n = i(8001);

            function h() {
                let {
                    wishList: e,
                    removeFromWishlist: s,
                    addProductToCart: i,
                    isAddedToCartProducts: a
                } = (0, r.F)(), [h, m] = (0, l.useState)(n.Oi);
                return (0, l.useEffect)(() => {
                    m([...n.Oi.filter(s => e.includes(s.id))])
                }, [e]), (0, t.jsx)("div", {
                    className: "tf-sp-2",
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsx)("div", {
                            className: "tf-wishlist",
                            children: h.length ? (0, t.jsxs)("table", {
                                className: "tf-table-wishlist",
                                children: [(0, t.jsx)("thead", {
                                    children: (0, t.jsxs)("tr", {
                                        children: [(0, t.jsx)("th", {
                                            className: "wishlist-item_remove"
                                        }), (0, t.jsx)("th", {
                                            className: "wishlist-item_image"
                                        }), (0, t.jsx)("th", {
                                            className: "wishlist-item_info",
                                            children: (0, t.jsx)("p", {
                                                className: "product-title fw-semibold",
                                                children: "Product Name"
                                            })
                                        }), (0, t.jsx)("th", {
                                            className: "wishlist-item_price",
                                            children: (0, t.jsx)("p", {
                                                className: "product-title fw-semibold",
                                                children: "Unit Price"
                                            })
                                        }), (0, t.jsx)("th", {
                                            className: "wishlist-item_stock",
                                            children: (0, t.jsx)("p", {
                                                className: "product-title fw-semibold",
                                                children: "Stock Status"
                                            })
                                        }), (0, t.jsx)("th", {
                                            className: "wishlist-item_action"
                                        })]
                                    })
                                }), (0, t.jsx)("tbody", {
                                    children: h.map((e, l) => (0, t.jsxs)("tr", {
                                        className: "wishlist-item",
                                        children: [(0, t.jsx)("td", {
                                            className: "wishlist-item_remove",
                                            onClick: () => s(e.id),
                                            children: (0, t.jsx)("i", {
                                                className: "icon-close remove link cs-pointer"
                                            })
                                        }), (0, t.jsx)("td", {
                                            className: "wishlist-item_image",
                                            children: (0, t.jsx)(c(), {
                                                href: "/product-detail/".concat(e.id),
                                                children: (0, t.jsx)(d.default, {
                                                    src: e.imgSrc,
                                                    alt: "Image",
                                                    className: "lazyload",
                                                    width: 500,
                                                    height: 500
                                                })
                                            })
                                        }), (0, t.jsx)("td", {
                                            className: "wishlist-item_info",
                                            children: (0, t.jsx)(c(), {
                                                className: "text-line-clamp-2 body-md-2 fw-semibold text-secondary link",
                                                href: "/product-detail/".concat(e.id),
                                                children: e.title
                                            })
                                        }), (0, t.jsx)("td", {
                                            className: "wishlist-item_price",
                                            children: (0, t.jsxs)("p", {
                                                className: "price-wrap fw-medium flex-nowrap",
                                                children: [(0, t.jsxs)("span", {
                                                    className: "new-price price-text fw-medium mb-0",
                                                    children: ["$", e.price.toFixed(3)]
                                                }), e.oldPrice && (0, t.jsxs)("span", {
                                                    className: "old-price body-md-2 text-main-2 fw-normal",
                                                    children: ["$", e.oldPrice.toFixed(3)]
                                                })]
                                            })
                                        }), (0, t.jsx)("td", {
                                            className: "wishlist-item_stock",
                                            children: (0, t.jsx)("span", {
                                                className: "wishlist-stock-status",
                                                children: "In Stock"
                                            })
                                        }), (0, t.jsx)("td", {
                                            className: "wishlist-item_action",
                                            children: (0, t.jsx)("a", {
                                                href: "#shoppingCart",
                                                "data-bs-toggle": "offcanvas",
                                                className: "tf-btn btn-gray",
                                                onClick: () => i(e.id),
                                                children: (0, t.jsx)("span", {
                                                    className: "text-white",
                                                    children: a(e.id) ? "Already Added" : "Add to Cart"
                                                })
                                            })
                                        })]
                                    }, l))
                                }), (0, t.jsx)("tfoot", {
                                    className: "d-none",
                                    children: (0, t.jsx)("tr", {
                                        children: (0, t.jsx)("td", {
                                            colSpan: 6,
                                            className: "text-center",
                                            children: "No products added to the wishlist"
                                        })
                                    })
                                })]
                            }) : (0, t.jsxs)("div", {
                                className: "p-4",
                                children: [(0, t.jsxs)("div", {
                                    className: "col-4",
                                    children: ["Your wishlist is empty. Start adding favorite products to wishlist!", " "]
                                }), (0, t.jsx)(c(), {
                                    className: "tf-btn mt-2 mb-3 text-white",
                                    style: {
                                        width: "fit-content"
                                    },
                                    href: "/shop-default",
                                    children: "Explore Products"
                                })]
                            })
                        })
                    })
                })
            }
        },
        9424: (e, s, i) => {
            Promise.resolve().then(i.bind(i, 2988)), Promise.resolve().then(i.bind(i, 3603)), Promise.resolve().then(i.bind(i, 3340)), Promise.resolve().then(i.bind(i, 2867)), Promise.resolve().then(i.bind(i, 3899)), Promise.resolve().then(i.bind(i, 7526)), Promise.resolve().then(i.bind(i, 8566)), Promise.resolve().then(i.t.bind(i, 6874, 23)), Promise.resolve().then(i.t.bind(i, 3063, 23))
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [5270, 2331, 2867, 31, 5120, 8441, 1684, 7358], () => s(9424)), _N_E = e.O()
    }
]);