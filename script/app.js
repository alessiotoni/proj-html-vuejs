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
        emailIsValid: true,
        nameIsValid: true,
        emailsNewsletter: [],
        testimonialActive: 0,
        showCard: 0,
        requireReceived: false,
        emailReceived: false,
        emailForNewsletter: "",
        callBackData: {
            name: "",
            email: "",
            telephone: "",
            location: "",
        },
        utentCallBack: [],
        pageActive: 0,

    },


    methods: {
        isAString(string) {

            for (let i = 0; i < string.length; i++) {

                if (!Number.isNaN(parseInt(string[i]))) {

                    return false;

                }
            }
            return true
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
            
            if (this.emailForNewsletter.includes('@')) {

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

            const nameUtent = this.callBackData.name
            const isAString = this.isAString(nameUtent)
            
            if (!isAString) {

                this.nameIsValid = false

                setTimeout(() => {
                    this.nameIsValid = true
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

        }
    },

    mounted() {

    }
})