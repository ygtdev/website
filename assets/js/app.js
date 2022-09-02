const app = Vue.createApp({
    data() {
        return {
            lanyardReady: false,
            time: '',
            userData: {}
        }
    },
    created() {
        this.updateData();
        console.log('%c COOL#0356', 'font-size: 2rem;');
    },
    watch: {
        userData(newValue, oldValue) {
            this.lanyardReady = true;
        },
    },
    computed: {
        timeIcon() {
            let hour = moment().format('h')
            return hour < 9 ? 'fa-bed' : 9 <= hour < 19 ? 'fa-graduation-cap' : 'fa-computer'
        },
        statusIconColor() {
            return this.userData.status == 'Online' ? 'bg-green-400' : this.userData.status == 'Idle' ? 'bg-yellow-500' : this.userData.status == 'Do Not Disturb' ? 'bg-red-400' : 'bg-gray-500'
        },
        statusTextColor() {
            return this.userData.status == 'Online' ? 'text-green-400' : this.userData.status == 'Idle' ? 'text-yellow-500' : this.userData.status == 'Do Not Disturb' ? 'text-red-400' : 'text-gray-500'
        }
    },
    methods: {
        updateData() {
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
                this.time = moment().format('Do MMMM YYYY • h:mm:ss A');
                this.userData = {
                    username: api.d.discord_user.username,
                    tag: api.d.discord_user.discriminator,
                    status: api.d.discord_status == 'online' ? 'Online' : api.d.discord_status == 'idle' ? 'Idle' : api.d.discord_status == 'dnd' ? 'Do Not Disturb' : 'Invisible',
                    avatar: `https://cdn.discordapp.com/avatars/${api.d.discord_user.id}/${api.d.discord_user.avatar}.${
                        api.d.discord_user.avatar?.startsWith('a_') ? 'gif' : 'png'
                    }?size=512` || 'Bilinmiyor',
                };
            }, 1000)
        }
    },
}).mount('#app');

tippy('#discordStatus', {
    content: 'Discord Status',
});

tippy('#currentActivity', {
    content: 'Current Activity',
});

tippy('#myHeart', {
    theme: 'gradient',
    content: 'It\'s Only My Heart',
});