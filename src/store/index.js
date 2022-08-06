import { reactive } from 'vue'

export const store = reactive({
    personal: {
        discord_id: '150612752610754560',
        date_of_birth_date: '2005-11-05',
        links: [
            {
                label: 'GitHub Profile',
                description: 'My personal GitHub profile.',
                link: 'https://github.com/ygtdev',
                icon: 'fa-brands fa-github'
            },
            {
                label: 'Discord Server',
                description: 'My personal Discord server.',
                link: 'https://discord.gg/CCExrpU',
                icon: 'fa-brands fa-discord'
            },
        ]
    }
})