(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8990], {
        4438: (e, s, t) => {
            "use strict";
            t.d(s, {
                default: () => l
            });
            var i = t(5155),
                a = t(2115);

            function l() {
                let [e, s] = (0, a.useState)(!1), [t, l] = (0, a.useState)([{
                    id: 1,
                    title: "8500 Lorem Street",
                    firstName: "Themesflat",
                    lastName: "",
                    company: "Company",
                    address1: "8500 Lorem Street",
                    city: "Punchbowl",
                    region: "Chicago",
                    zipCode: "55030",
                    phone: "+8(800) 123 4567",
                    isDefault: !0
                }, {
                    id: 2,
                    title: "17 Yarran st",
                    firstName: "Onsus",
                    lastName: "",
                    company: "Company",
                    address1: "17 Yarran st",
                    city: "Count",
                    region: "Australia",
                    zipCode: "9226",
                    phone: "+6(800) 1234 3435",
                    isDefault: !1
                }]), [n, d] = (0, a.useState)(null), [r, c] = (0, a.useState)({
                    firstName: "",
                    lastName: "",
                    company: "",
                    address1: "",
                    city: "",
                    region: "",
                    zipCode: "",
                    phone: "",
                    isDefault: !1
                }), [o, h] = (0, a.useState)({
                    firstName: "",
                    lastName: "",
                    company: "",
                    address1: "",
                    city: "",
                    region: "",
                    zipCode: "",
                    phone: "",
                    isDefault: !1
                }), m = () => {
                    s(!1), c({
                        firstName: "",
                        lastName: "",
                        company: "",
                        address1: "",
                        city: "",
                        region: "",
                        zipCode: "",
                        phone: "",
                        isDefault: !1
                    })
                }, x = function(e) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "new",
                        {
                            id: t,
                            value: i,
                            type: a,
                            checked: l
                        } = e.target,
                        n = "checkbox" === a ? l : i;
                    "new" === s ? c(e => ({
                        ...e,
                        [t]: n
                    })) : h(e => ({
                        ...e,
                        [t]: n
                    }))
                }, u = e => {
                    d(e);
                    let s = t.find(s => s.id === e);
                    s && h({
                        firstName: s.firstName,
                        lastName: s.lastName,
                        company: s.company,
                        address1: s.address1,
                        city: s.city,
                        region: s.region,
                        zipCode: s.zipCode,
                        phone: s.phone,
                        isDefault: s.isDefault
                    })
                }, p = e => {
                    window.confirm("Are you sure you want to delete this address?") && l(s => s.filter(s => s.id !== e))
                };
                return (0, i.jsxs)("div", {
                    className: "my-account-content account-address",
                    children: [(0, i.jsxs)("h4", {
                        className: "fw-semibold mb-20",
                        children: ["Your addresses (", t.length, ")"]
                    }), (0, i.jsxs)("div", {
                        className: "widget-inner-address ",
                        children: [(0, i.jsx)("button", {
                            className: "tf-btn btn-add-address",
                            onClick: () => {
                                s(!0)
                            },
                            children: (0, i.jsx)("span", {
                                className: "text-white",
                                children: "Add new address"
                            })
                        }), (0, i.jsxs)("form", {
                            action: "#",
                            className: "wd-form-address show-form-address mb-20",
                            style: {
                                display: e ? "block" : "none"
                            },
                            onSubmit: e => {
                                if (e.preventDefault(), !r.firstName || !r.lastName || !r.address1 || !r.city || !r.region || !r.zipCode || !r.phone) {
                                    alert("Please fill in all required fields.");
                                    return
                                }
                                let s = t.length > 0 ? Math.max(...t.map(e => e.id)) + 1 : 1,
                                    i = {
                                        ...r,
                                        id: s,
                                        title: r.address1
                                    };
                                l(e => [...e, i]), m()
                            },
                            children: [(0, i.jsxs)("div", {
                                className: "form-content",
                                children: [(0, i.jsxs)("div", {
                                    className: "cols",
                                    children: [(0, i.jsxs)("fieldset", {
                                        children: [(0, i.jsx)("label", {
                                            htmlFor: "firstName",
                                            children: "First Name"
                                        }), (0, i.jsx)("input", {
                                            type: "text",
                                            id: "firstName",
                                            required: !0,
                                            value: r.firstName,
                                            onChange: e => x(e, "new")
                                        })]
                                    }), (0, i.jsxs)("fieldset", {
                                        children: [(0, i.jsx)("label", {
                                            htmlFor: "lastName",
                                            children: "Last Name"
                                        }), (0, i.jsx)("input", {
                                            type: "text",
                                            id: "lastName",
                                            required: !0,
                                            value: r.lastName,
                                            onChange: e => x(e, "new")
                                        })]
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "company",
                                        children: "Company"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "company",
                                        value: r.company,
                                        onChange: e => x(e, "new")
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "address1",
                                        children: "Address 1"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "address1",
                                        required: !0,
                                        value: r.address1,
                                        onChange: e => x(e, "new")
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "city",
                                        children: "City"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "city",
                                        required: !0,
                                        value: r.city,
                                        onChange: e => x(e, "new")
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "region",
                                        children: "Country/region"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "region",
                                        required: !0,
                                        value: r.region,
                                        onChange: e => x(e, "new")
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "zipCode",
                                        children: "Postal/ZIP code"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "zipCode",
                                        required: !0,
                                        value: r.zipCode,
                                        onChange: e => x(e, "new")
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "phone",
                                        children: "Phone"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "phone",
                                        required: !0,
                                        value: r.phone,
                                        onChange: e => x(e, "new")
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "tf-cart-checkbox",
                                    children: [(0, i.jsx)("input", {
                                        type: "checkbox",
                                        name: "set_def",
                                        className: "tf-check",
                                        id: "isDefault",
                                        checked: r.isDefault,
                                        onChange: e => x(e, "new")
                                    }), (0, i.jsx)("label", {
                                        htmlFor: "isDefault",
                                        children: "Set as default address"
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "box-btn",
                                children: [(0, i.jsx)("button", {
                                    className: "tf-btn btn-large",
                                    type: "submit",
                                    children: (0, i.jsx)("span", {
                                        className: "text-white",
                                        children: "Update"
                                    })
                                }), (0, i.jsx)("button", {
                                    type: "button",
                                    className: "tf-btn btn-large btn-hide-address d-inline-flex",
                                    onClick: m,
                                    children: (0, i.jsx)("span", {
                                        className: "text-white",
                                        children: "Cancel"
                                    })
                                })]
                            })]
                        }), (0, i.jsx)("ul", {
                            className: "list-account-address tf-grid-layout md-col-2",
                            children: t.map(e => (0, i.jsxs)("li", {
                                className: "account-address-item ".concat(n === e.id ? "editing" : ""),
                                children: [(0, i.jsx)("p", {
                                    className: "title title-sidebar fw-semibold",
                                    children: e.title
                                }), (0, i.jsxs)("div", {
                                    className: "info-detail",
                                    children: [(0, i.jsxs)("div", {
                                        className: "box-infor",
                                        children: [(0, i.jsxs)("p", {
                                            className: "title-sidebar",
                                            children: [e.firstName, " ", e.lastName]
                                        }), (0, i.jsx)("p", {
                                            className: "title-sidebar",
                                            children: e.company
                                        }), (0, i.jsx)("p", {
                                            className: "title-sidebar",
                                            children: e.address1
                                        }), (0, i.jsx)("p", {
                                            className: "title-sidebar",
                                            children: e.city
                                        }), (0, i.jsx)("p", {
                                            className: "title-sidebar",
                                            children: e.region
                                        }), (0, i.jsx)("p", {
                                            className: "title-sidebar",
                                            children: e.zipCode
                                        }), (0, i.jsx)("p", {
                                            className: "title-sidebar",
                                            children: e.phone
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "box-btn",
                                        children: [(0, i.jsx)("button", {
                                            className: "tf-btn btn-large btn-edit-address",
                                            onClick: () => u(e.id),
                                            disabled: null !== n,
                                            children: (0, i.jsx)("span", {
                                                className: "text-white",
                                                children: "Edit"
                                            })
                                        }), (0, i.jsx)("button", {
                                            className: "tf-btn btn-large btn-delete-address",
                                            onClick: () => p(e.id),
                                            disabled: null !== n,
                                            children: (0, i.jsx)("span", {
                                                className: "text-white",
                                                children: "Delete"
                                            })
                                        })]
                                    })]
                                })]
                            }, e.id))
                        }), n && (0, i.jsxs)("form", {
                            action: "#",
                            className: "wd-form-address edit-form-address show",
                            style: {
                                display: "block"
                            },
                            onSubmit: e => {
                                if (e.preventDefault(), !o.firstName || !o.lastName || !o.address1 || !o.city || !o.region || !o.zipCode || !o.phone) {
                                    alert("Please fill in all required fields for the edited address.");
                                    return
                                }
                                l(e => e.map(e => e.id === n ? {
                                    ...e,
                                    ...o,
                                    title: o.address1
                                } : e)), d(null)
                            },
                            children: [(0, i.jsxs)("div", {
                                className: "form-content",
                                children: [(0, i.jsxs)("div", {
                                    className: "cols",
                                    children: [(0, i.jsxs)("fieldset", {
                                        children: [(0, i.jsx)("label", {
                                            htmlFor: "firstName",
                                            children: "First Name"
                                        }), (0, i.jsx)("input", {
                                            type: "text",
                                            id: "firstName",
                                            required: !0,
                                            value: o.firstName,
                                            onChange: e => x(e, "edit")
                                        })]
                                    }), (0, i.jsxs)("fieldset", {
                                        children: [(0, i.jsx)("label", {
                                            htmlFor: "lastName",
                                            children: "Last Name"
                                        }), (0, i.jsx)("input", {
                                            type: "text",
                                            id: "lastName",
                                            required: !0,
                                            value: o.lastName,
                                            onChange: e => x(e, "edit")
                                        })]
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "company",
                                        children: "Company"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "company",
                                        value: o.company,
                                        onChange: e => x(e, "edit")
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "address1",
                                        children: "Address 1"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "address1",
                                        required: !0,
                                        value: o.address1,
                                        onChange: e => x(e, "edit")
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "city",
                                        children: "City"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "city",
                                        required: !0,
                                        value: o.city,
                                        onChange: e => x(e, "edit")
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "region",
                                        children: "Country/region"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "region",
                                        required: !0,
                                        value: o.region,
                                        onChange: e => x(e, "edit")
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "zipCode",
                                        children: "Postal/ZIP code"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "zipCode",
                                        required: !0,
                                        value: o.zipCode,
                                        onChange: e => x(e, "edit")
                                    })]
                                }), (0, i.jsxs)("fieldset", {
                                    children: [(0, i.jsx)("label", {
                                        htmlFor: "phone",
                                        children: "Phone"
                                    }), (0, i.jsx)("input", {
                                        type: "text",
                                        id: "phone",
                                        required: !0,
                                        value: o.phone,
                                        onChange: e => x(e, "edit")
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "tf-cart-checkbox",
                                    children: [(0, i.jsx)("input", {
                                        type: "checkbox",
                                        name: "set_def",
                                        className: "tf-check",
                                        id: "isDefault",
                                        checked: o.isDefault,
                                        onChange: e => x(e, "edit")
                                    }), (0, i.jsx)("label", {
                                        htmlFor: "isDefault",
                                        children: "Set as default address"
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "box-btn",
                                children: [(0, i.jsx)("button", {
                                    className: "tf-btn btn-large",
                                    type: "submit",
                                    children: (0, i.jsx)("span", {
                                        className: "text-white",
                                        children: "Update"
                                    })
                                }), (0, i.jsx)("button", {
                                    type: "button",
                                    className: "tf-btn btn-large btn-hide-edit-address d-inline-flex",
                                    onClick: () => {
                                        d(null)
                                    },
                                    children: (0, i.jsx)("span", {
                                        className: "text-white",
                                        children: "Cancel"
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        4446: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 2988)), Promise.resolve().then(t.bind(t, 3603)), Promise.resolve().then(t.bind(t, 4438)), Promise.resolve().then(t.bind(t, 3340)), Promise.resolve().then(t.bind(t, 2867)), Promise.resolve().then(t.bind(t, 3899)), Promise.resolve().then(t.bind(t, 7526)), Promise.resolve().then(t.t.bind(t, 6874, 23)), Promise.resolve().then(t.t.bind(t, 3063, 23))
        },
        5695: (e, s, t) => {
            "use strict";
            var i = t(8999);
            t.o(i, "usePathname") && t.d(s, {
                usePathname: function() {
                    return i.usePathname
                }
            })
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [5270, 2331, 2867, 5120, 8441, 1684, 7358], () => s(4446)), _N_E = e.O()
    }
]);