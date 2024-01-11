const vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectColor: '',
            size: '',
        }
    },
    computed: {
        circle_class() {
            return {
                purple: this.isPurple
            }
        }
    },
}).mount('#app')