const app = Vue.createApp({
    data() {
        return {
            loaded: false,
            date: '',
            user: {}
        }
    },
    watch: {
        user(newValue, oldValue) {
            this.loaded = true;
        }
      },
    computed: {
        statusIcon() {
            return this.user.status == 'Çevrimiçi' ? 'bg-green-400' : this.user.status == 'Boşta' ? 'bg-yellow-600' : this.user.status == 'Rahatsız Etmeyin' ? 'bg-red-500' : 'bg-gray-400'
        },
        statusText() {
            return this.user.status == 'Çevrimiçi' ? 'text-green-400' : this.user.status == 'Boşta' ? 'text-yellow-600' : this.user.status == 'Rahatsız Etmeyin' ? 'text-red-500' : 'text-gray-400'
        }
    },
    methods:{
        updateData: function() {
            const lanyard = new WebSocket('wss://api.lanyard.rest/socket');
            let api
    
            lanyard.onopen = function () {
                lanyard.send(
                    JSON.stringify({
                        op: 2,
                        d: {
                            subscribe_to_id: '150612752610754560',
                        },
                    })
                );
            };
    
            lanyard.onmessage = function (event) {
                api = JSON.parse(event.data);
            };

            setInterval(() => {
                this.date = moment().format('Do MMMM YYYY • h:mm:ss A')
                this.user = {
                    username: api.d.discord_user.username,
                    tag: api.d.discord_user.discriminator,
                    status: api.d.discord_status == 'online' ? 'Çevrimiçi' : api.d.discord_status == 'idle' ? 'Boşta' : api.d.discord_status == 'dnd' ? 'Rahatsız Etmeyin' : 'Görünmez',
                    avatar: `https://cdn.discordapp.com/avatars/${api.d.discord_user.id}/${api.d.discord_user.avatar}.${
                        api.d.discord_user.avatar?.startsWith('a_') ? 'gif' : 'png'
                    }?size=512` || 'Bilinmiyor',
                }
                console.log(this.user)
            }, 1000)
        },
    },
    created () {
        this.updateData()
    }
}).mount('#app')