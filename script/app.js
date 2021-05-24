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
        learnMoreList: [
            {
                imgUrl: "../public/images/driving_preview-400x300.jpg",
                title: "courses",
                status: "new"
            },
            {
                imgUrl: "/public/images/courses-passplus-200x200.jpg",
                title: "pass pluss",
                status: ""
            },
            {
                imgUrl: "/public/images/course-intensive-200x200.jpg",
                title: "intensive course",
                status: ""
            },
            {
                imgUrl: "/public/images/courses-instructor-200x200.jpg",
                title: "instructor",
                status: ""
            },
        ],
        showCard: 0,
    },


    methods: {
        showLearnMore(index) {
            this.showCard = index
            console.log(index)
        }
    },
})