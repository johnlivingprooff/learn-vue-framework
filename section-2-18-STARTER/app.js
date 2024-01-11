const vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectColor: '',
            size: '150',
        }
    },
    computed: {
        circle_class() {
            return {
                purple: this.isPurple
            }
        },
        styling() {
            return {
                width: this.size + 'px',
                height: this.size + 'px',
                lineHeight: this.size + 'px',
            }
        },
        transformed() {
	        return {
	            transform: 'rotate(50deg)',            
            }
        },
    },
}).mount('#app')
