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
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
        updateLastName(msg, event) {
            console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    },
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