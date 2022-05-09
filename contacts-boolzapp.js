const app = new Vue({
    el:'#app',
    data:{

        utente:{
            name : 'Davide Manciucca',
            avatar :'mine'
        },
        users:[
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
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
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
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
                avatar: '_3',
                visible: true,
                messages: [
                    {
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
                avatar: '_4',
                visible: true,
                messages: [
                    {
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
                avatar: '_5',
                visible: true,
                messages: [
                    {
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
                avatar: '_6',
                visible: true,
                messages: [
                    {
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
                avatar: '_7',
                visible: true,
                messages: [
                    {
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
                avatar: '_8',
                visible: true,
                messages: [
                    {
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
            }
        ],
    indexUser :0,
    findChat:'',
    newText:''
    
    },
    methods:{
        // getMessage(index){
        //     const user = this.users[index];
        //     const messages = user.messages;
        //     const lastMsg = messages[messages.length - 1];
        //     return lastMsg.message;
        // },
       
        
        userChat(index){
            this.indexUser=index;

        },

        
        // sendMsgAction(){
        //     if(this.msgToSend > 0){
        //         this.users[thisindexUser].messages.push({
        //             date:'prova',
        //             message:this.msgToSend,
        //             status:'sent',
        //         });
        //         console.log(this.sendMsgAction);
        //         this.msgToSend='';
        //     }
        // }
        // sendInput(message,target){
        //     //SIMULIAMO LA REALTA' DOVE IL NOSTRO //MESSAGGIO VERRA' SPEDITO A UN SERVIZIO ESTERNO
        //     setTimeout(()=>{
        //         target.messages.push(message);
        //     },1000);

        // },

        // newInput(){

        //     const userMess = this.users[this.indexUser];
        //     const newInput ={
        //         date:'modificare data ',
        //         message:this.newText,
        //         status:'sent'
        //     }

        //     this.sendInput(newInput, userMess);
        //     this.newText=''
        //     setTimeout(()=>{
        //         this.randomAnswer(newInput)
        //     },0500);
           
        // },
        // randomAnswer(newInput){
        //     const answer = {
        //         date:'test',
        //         message:'Questa è una risposta! Provare con array di risposte casuali',
        //         status:'received'
        //     }
        //     this.sendInput(newInput, answer );
        // },

        sendInput(message,target){
            setTimeout(()=>{
                target.messages.push(message);
            },500);
        },
        newInput(){
            const contact = this.users[this.indexUser];
            const nuovoMessaggio={
                date:'prova data',
                message: this.newText,
                status: 'sent',
            }
            this.sendInput(nuovoMessaggio, contact);
            this.newText='',
            setTimeout(()=>{
                this.randomAnswer(contact);
            },0500);

        },
        randomAnswer(contact){
            const message= {
                date:'prova data',
                message:'okok',
                status:'received',

            }
            this.sendInput(contact, message);
        }
    }


})


