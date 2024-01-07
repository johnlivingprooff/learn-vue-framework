const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            middleName: '',
            lastName: "Doe",
            url: 'https://bing.com',
            raw_html: '<a href="https://ogle.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        updateLastName(msg, event) {
            // console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
    },
    watch: {
        age(new_val, old_val) {
            setTimeout(() => {
                this.age = 21
            }, 4000)
        }
    }
}).mount('#app')

// setTimeout(() =>{
//     vm.firstName = 'Bob';
// }, 2000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: "james",
//             lastName: "doe"
//         }
//     }
// }).mount('#app01')