const lanyard = new WebSocket('wss://api.lanyard.rest/socket');
var retval = {
    received: false,
    api: {}
};

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

setInterval(() => {
    if (retval.received) {
        lanyard.send(
            JSON.stringify({
                op: 3,
            })
        );
    }
}, 30000);

lanyard.onmessage = function(event) {
    retval = {
        received: true,
        api: JSON.parse(event.data)
    };

    if (retval.api.t === 'INIT_STATE' || retval.api.t === 'PRESENCE_UPDATE') {
        updatePresence();
    }
};

updatePresence = function() {
    var statusData = {
        discord: {
            name: retval.api.d.discord_user.username || 'Bilinmiyor',
            tag: retval.api.d.discord_user.discriminator || '0000',
            avatar: `https://cdn.discordapp.com/avatars/${retval.api.d.discord_user.id}/${retval.api.d.discord_user.avatar}.${
                retval.api.d.discord_user.avatar?.startsWith("a_") ? "gif" : "png"
            }?size=512` || 'Bilinmiyor',
            status: retval.api.d.discord_status === 'dnd' ? `border-red-500` : retval.api.d.discord_status === 'idle' ? `border-yellow-500` : retval.api.d.discord_status === 'online' ? `border-green-500` : retval.api.d.discord_status === 'offline' ? `border-gray-500` : `border-gray-500` || 'border-gray-500',
        },
        spotify: {
            status: retval.api.d.listening_to_spotify ? `${retval.api.d.spotify.song.split("(")[0]} by ${retval.api.d.spotify.artist.split(";")[0].split(",")[0]}` : 'Not listening to anything',
            albumImg: retval.api.d.listening_to_spotify ? retval.api.d.spotify.album_art_url.split("(")[0] : 'https://cdn.dont-ping.me/api/😴🦕👻🤘🤖.png',
            songUrl: retval.api.d.listening_to_spotify ? `https://open.spotify.com/track/${retval.api.d.spotify.track_id}` : '404',
            trackerPercentage: function() {
                const listenTime = Math.floor((Date.now() - retval.api.d.spotify.timestamps.start) / 1000);
                const totalTime = Math.floor((retval.api.d.spotify.timestamps.end - retval.api.d.spotify.timestamps.start) / 1000);
                const progress = Math.floor((listenTime * 100) / totalTime);
                return `${progress}%`
            },
        },
    }

    $('#app').html(`
        <main class="relative w-full h-screen flex justify-center items-center ease-in transition-all">
            <div class="absolute left-0 m-[8%] text-left text-white">
                <div class="flex mb-2 font-inter">
                    <img class="rounded-full h-[4rem] border-2 ${statusData.discord.status}" src="${statusData.discord.avatar}">
                    <a class="ml-4 relative flex justify-center items-center ease-in transition-all hover:scale-105" href="https://discord.com/users/${retval.api.d.discord_user.id}" target="_blank">
                        <div>
                            <div class="font-semibold text-2xl leading-tight">${statusData.discord.name}</div>
                            <div class="font-bold text-sm text-white/40">#${statusData.discord.tag}</div>
                        </div>
                    </a>
                </div>
                <div id="typewriter" class="font-inter font-semibold text-sm text-white/80">
                    Hi there! I'm developer, student & designer.
                </div>
                <div class="flex rounded-lg border-[1px] border-[#A3BFFA] p-2 pr-6 mt-4 w-fit ease-in transition-all hover:scale-105">
                    <div>
                        <img class="rounded-md h-[4rem]" src="${statusData.spotify.albumImg}">
                    </div>
                    <div class="relative flex justify-center items-center ml-4 text-sm font-bold text-white/70">
                        <div>
                            <div>
                                <i class="fab fa-spotify ${retval.api.d.listening_to_spotify ? 'text-green-500' : 'text-gray-500'} ml-1 mr-1"></i><a href="${statusData.spotify.songUrl}" target="_blank" class="hover:underline">${statusData.spotify.status}</a>
                            </div>
                            <div class="mx-1 my-2 h-1 w-full rounded-lg bg-white/40">
                                <div class="bg-white rounded-lg h-full" style="width: ${statusData.spotify.trackerPercentage()};"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-1 font-semibold text-sm text-[#A3BFFA] flex gap-1">
                    <a href="/crypto" target="_blank" class="hover:text-[#869ed1] ease-in transition-all">
                        <i class="fab fa-bitcoin"></i>
                    </a>
                    <a href="https://github.com/ygtdev" target="_blank" class="hover:text-[#869ed1] ease-in transition-all">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://open.spotify.com/user/21vwplhnoyw5iav2kibidsosi" target="_blank" class="hover:text-[#869ed1] ease-in transition-all">
                        <i class="fab fa-spotify"></i>
                    </a>
                    <a href="https://steamcommunity.com/id/404COOL/" target="_blank" class="hover:text-[#869ed1] ease-in transition-all">
                        <i class="fab fa-steam"></i>
                    </a>
                </div>
            </div>
        </main>
    `).animate({
        opacity: 1
    }, 500)
}