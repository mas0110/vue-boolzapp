const {
    createApp 
} = Vue 

createApp({
    data() {
        return {
            amici:[
                {
                    name:'Michele',
                    img:'./img/avatar_1.jpg'
                },
                {
                    name:'fabio',
                    img:'./img/avatar_3.jpg'
                },
                {
                    name:'claudia',
                    img:'./img/avatar_4.jpg'
                },
                {
                    name:'Samuele',
                    img:'./img/avatar_5.jpg'
                },
                {
                    name:'Alessandro B.',
                    img:'./img/avatar_6.jpg'
                },
                {
                    name:'Alessandro L.',
                    img:'./img/avatar_7.jpg'
                },
                {
                    name:'Federica',
                    img:'./img/avatar_io.jpg'
                },
                {
                    name:'Davide',
                    img:'./img/avatar_8.jpg'
                },
            ]
        }
    },
    created(){

    },
    methods:{
    },
}).mount('#app')