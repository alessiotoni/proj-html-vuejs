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
        learnMoreList: [
            {
                imgUrl: "./public/images/driving_preview-400x300.jpg",
                title: "courses",
                status: "new"
            },
            {
                imgUrl: "./public/images/courses-passplus-200x200.jpg",
                title: "pass pluss",
                status: ""
            },
            {
                imgUrl: "./public/images/course-intensive-200x200.jpg",
                title: "intensive course",
                status: ""
            },
            {
                imgUrl: "./public/images/courses-instructor-200x200.jpg",
                title: "instructor",
                status: ""
            },
        ],
        instructors: [
            {
                img: "./public/images/instructor-mikehart-400x254.jpg",
                name: "mike hart",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                img: "./public/images/instructor-johnsmith-400x254.jpg",
                name: "john smith",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit.",
            },
            {
                img: "./public/images/instructor-angelahart-400x254.jpg",
                name: "angela hart",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia beatae reiciendis consectetur.",
            },
        ],
        testimonials: [
            {
                img: "./public/images/testimonial-sophia.png",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sit sit amet consectetur adipisicing elit.",
                name: "sophia jones",
            },
            {
                img: "./public/images/testimonial-kelly.png",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil incidunt ipsam, deserunt adipisci fuga blanditiis suscipit eligendi, temporibus nobis eos dolor et consectetur veritatis quis vel.",
                name: "kelly jones",
            },
            {
                img: "./public/images/testimonial-kate.png",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aut quod nemo illo optio error quisquam culpa.",
                name: "kate jones",
            },
            {
                img: "./public/images/testimonial-harold.png",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis architecto numquam consequatur aspernatur, pariatur illo quam repudiandae, quidem alias doloremque suscipit sunt expedita, dolorem impedit eius ullam vero eveniet temporibus.",
                name: "harold jones",
            },
        ],
        footerLinks: [
            {
                icon: "<i class='fa fa-arrow-circle-o-right' aria-hidden='true'></i>",
                title: "Pass plus"
            },
            {
                icon: "<i class='fa fa-arrow-circle-o-right' aria-hidden='true'></i>",
                title: "Intensive Course"
            },
            {
                icon: "<i class='fa fa-arrow-circle-o-right' aria-hidden='true'></i>",
                title: "Automatic"
            },
            {
                icon: "<i class='fa fa-arrow-circle-o-right' aria-hidden='true'></i>",
                title: "Instructor Training"
            },
        ],
        commentsListFirst: [],
        commentsListSecond: ["ottima esperienza","lo consiglio","da migliorare","voto 5","Lorem ipsum dolor sit amet consectetur adipisicing elit."],
        emailsNewsletter: [],
        utentCallBack: [],

        emailIsValid: true,
        dataIsValid: true,
        requireReceived: false,
        emailReceived: false,
        requestDataName: false,
        requestDataEmail: false,
        showCommentsFirst: false,
        showCommentsSecond: false,

        testimonialActive: 0,
        showCard: 0,
        pageActive: 0,

        emailForNewsletter: "",
        callBackData: {
            name: "",
            email: "",
            telephone: "",
            location: "",
        },

    },


    methods: {
        isAString(string) {

            if (string == "") {
                return false
            }

            for (let i = 0; i < string.length; i++) {

                if (!Number.isNaN(parseInt(string[i]))) {

                    return false;

                }
            }
            return true
        },
        isAEmail(string){
            if (string.includes("@")) {
                return true
            }
            return false
        },
        showLearnMore(index) {
            this.showCard = index
        },
        changeTestimonials(item, index) {
            this.testimonialActive = index
        },
        sendEmail() {
            if (!this.emailForNewsletter) {
                return;
            };

            const isAEmail = this.isAEmail(this.emailForNewsletter)
            
            if (isAEmail) {

                this.emailsNewsletter.push(this.emailForNewsletter);
                this.emailForNewsletter = "";
    
                this.emailReceived = true
    
                setTimeout(() => {

                    this.emailReceived = false
    
                }, 2000)
                
            } else {
                this.emailIsValid = false

                setTimeout(() => {

                    this.emailIsValid = true
    
                }, 2000)
            }





        },
        requestACallback() {

            const utent = this.callBackData
            const isAString = this.isAString(utent.name)
            const isAEmail = this.isAEmail(utent.email)

            if (!isAString || !isAEmail) {

                this.dataIsValid = false

                if (!isAString) {
                    this.requestDataName = true
                } else {
                    this.requestDataName = false
                }

                if (!isAEmail) {
                    this.requestDataEmail = true
                } else {
                    this.requestDataEmail = false
                }

                setTimeout(() => {
                    this.dataIsValid = true
                }, 2000)

                return
                
            }

            this.utentCallBack.push(this.callBackData)

            const reset = {
                name: "",
                email: "",
                telephone: "",
                location: "",
            };

            this.requireReceived = true
            this.requestDataName = false
            this.requestDataEmail = false
            
            this.callBackData = reset;

            setTimeout(() => {

                this.requireReceived = false

            }, 2000)

        },
        changePage(el, i){
            this.pageActive = i
        },
        nextTestimonial() {
            if (this.testimonialActive < (this.testimonials.length - 1)) {
                this.testimonialActive++;

            } else {
                this.testimonialActive = 0;
            }

        },
        previousTestimonial() {
            this.testimonialActive--;
            if (this.testimonialActive < 0) {
                this.testimonialActive = (this.testimonials.length - 1);
            }

        },
        showComments(x) {
            if (x == "first") {
                this.showCommentsFirst = !this.showCommentsFirst
                return
            }
            if (x == "second") {
                this.showCommentsSecond = !this.showCommentsSecond
                return
            }
        },
        closeComments(x) {
            if (x == "first") {
                this.showCommentsFirst = false
                return
            }
            if (x == "second") {
                this.showCommentsSecond = false
                return
            }
        }
        
    },

    mounted() {

    }
})