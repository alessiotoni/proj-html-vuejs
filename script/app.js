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
                imgUrl: "../../public/images/driving_preview-400x300.jpg",
                title: "courses",
                status: "new"
            },
            {
                imgUrl: "../../public/images/courses-passplus-200x200.jpg",
                title: "pass pluss",
                status: ""
            },
            {
                imgUrl: "../../public/images/course-intensive-200x200.jpg",
                title: "intensive course",
                status: ""
            },
            {
                imgUrl: "../../public/images/courses-instructor-200x200.jpg",
                title: "instructor",
                status: ""
            },
        ],
        instructors: [
            {
                img: "../../public/images/instructor-mikehart-400x254.jpg",
                name: "mike hart",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                img: "../../public/images/instructor-johnsmith-400x254.jpg",
                name: "john smith",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit.",
            },
            {
                img: "../../public/images/instructor-angelahart-400x254.jpg",
                name: "angela hart",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia beatae reiciendis consectetur.",
            },
        ],
        testimonials: [
            {
                img: "../../public/images/testimonial-sophia.png",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit.",
                name: "sophia jones",
            },
            {
                img: "../../public/images/testimonial-kelly.png",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit. Lorem ipsum adipisicing elit. elit sit amet consectetur adipisicing elit. Lorem ipsum adipisicing elit.",
                name: "kelly jones",
            },
            {
                img: "../../public/images/testimonial-kate.png",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit. Lorem ipsum consectetur adipisicing elit.",
                name: "kate jones",
            },
            {
                img: "../../public/images/testimonial-harold.png",
                description: "Lorem ipsum dolor sit amet consectetur  elit sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur  elit sit amet consectetur adipisicing elit.",
                name: "harold jones",
            },
        ],
        testimonialActive: 0,
        showCard: 0,
    },


    methods: {
        showLearnMore(index) {
            this.showCard = index
            console.log(index)
        },
        changeTestimonials(item, index) {
            this.testimonialActive = index
        }
    },
})