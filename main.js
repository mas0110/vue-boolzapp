const {
    createApp 
} = Vue 

createApp({
    data() {
        return {
            amici: [{

                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            // {
                // name: 'Fabio',
                // avatar: './img/avatar_2.jpg',
                // visible: true,
                // messages: [{
                        // date: '20/03/2020 16:30:00',
                        // message: 'Ciao come stai?',
                        // status: 'sent'
                    // },
                    // {
                        // date: '20/03/2020 16:30:55',
                        // message: 'Bene grazie! Stasera ci vediamo?',
                        // status: 'received',
                        // date: '10/01/2020 16:15:22',
                        // message: 'Tutto fatto!',
                        // status: 'received'
                    // }
                // ],
            // },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            },
        ],

            answer:["si","ok","va bene","No","come vuoi",],
            currentName:'Michele',
            currentImg: "./img/avatar_1.jpg",
            activeChat: 0,
            newMex:[],
            currentChat:"",
            searchtext:'',
            showPopup: false,
            excludedIndex: null,
            newMessage: "",

        }
    },
    created(){

    },
    methods:{
        changeChat(index){
            this.currentName = this.amici[index].name
            this.currentImg = this.amici[index].avatar
            this.activeChat = index
            console.log(this.currentName)
        },
        addMex(){
            if (this.newMessage !== '') {
                this.amici[this.activeChat].messages.push({
                  date: new Date().toLocaleString(),
                  message: this.newMessage,
                  status: 'sent',
                });
                this.newMessage = ''
            }
            setTimeout(() =>{
                if (this.amici[this.activeChat].messages.push !== '') {
                    this.amici[this.activeChat].messages.push({
                      date: new Date().toLocaleString(),
                      message: this.getRandomAnswer(),
                      status: "received",
                    });
                };
            },1000);
        },
        getRandomAnswer() {
            const randomIndex = Math.floor(Math.random() * this.answer.length);
            return this.answer[randomIndex];
        },
        searchContact(){

            this.amici.forEach(element => {
                if(element.name.toLowerCase().includes( this.searchtext.toLowerCase () )){
                    element.visible = true;
                }else{
                    element.visible = false;
                }
            });
        },
        togglePopup(index){
            this.showPopup = !this.showPopup;
            this.excludedIndex = index;
        },
        deleteMex(index){
            this.amici.forEach(element => {
                if (index >= 0 && index < element.messages.length) {
                    element.messages.splice(index, 1);
                }
                this.showPopup = false;
              });
        }
    },
}).mount('#app')