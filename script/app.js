const myApp = new Vue({
    el: "#app",
    data: {
        navbarLinks: [
            {
                name: "home",
                type: "link",
                status: "old",
                link: "#"
            },
            {
                name: "about",
                type: "link",
                status: "old",
                link: "#"
            },
            {
                name: "prices",
                type: "link",
                status: "old",
                link: "#"
            },
            {
                name: "courses",
                type: "link",
                status: "new",
                link: "#"
            },
            {
                name: "location",
                type: "link",
                status: "old",
                link: "#"
            },
            {
                name: "blog",
                type: "link",
                status: "old",
                link: "#"
            },
            {
                name: "book now",
                type: "button",
                link: ""
            },
        ],
        formList: [
            "Your Name*",
            "Email*",
            "Telephone",
            "Locacion",
        ],
        requestCallbackReceived: [],
    },

    methods: {

    },
})