var statusIcon = document.getElementById("statusIcon");
var discordContent = document.getElementById("discordContent");

const lanyard = new WebSocket("wss://api.lanyard.rest/socket");

var api = {};
var received = false;

lanyard.onopen = function () {
    lanyard.send(
        JSON.stringify({
        op: 2,
        d: {
            subscribe_to_id: "150612752610754560",
        },
        })
    );
};

setInterval(() => {
    if (received) {
        lanyard.send(
            JSON.stringify({
                op: 3,
            })
        );
    }
}, 30000);

lanyard.onmessage = function (event) {
    received = true;
    api = JSON.parse(event.data);

    if (api.t === "INIT_STATE" || api.t === "PRESENCE_UPDATE") {
        update_presence();
    }
};

function update_presence() {
    if (statusIcon != null) {
        update_status(api.d.discord_status);
    }

    if (api.d.listening_to_spotify == true) {
        var artist = `${api.d.spotify.artist.split(";")[0].split(",")[0]}`;
        var song = `${api.d.spotify.song.split("(")[0]}`;
        var album_art_url = `${api.d.spotify.album_art_url.split("(")[0]}`;
        
        spotifyContent.innerHTML = `
                                    <div id="spotifyContentText" class="text-x1 description-color">
                                        <i class="fab fa-spotify text-green-500 ml-1 mr-1"></i> ${song} by ${artist}
                                    </div>
                                    <div id="spotifyContentImg" class="mt-2">
                                        <img class="rounded-md spotify-content-img" src="${album_art_url}">
                                    </div>
                                    `;

    } else {
        spotifyContent.innerHTML = `
                                    <div id="spotifyContentText" class="text-x1 description-color">
                                        <i class="fab fa-spotify text-green-500 ml-1 mr-1"></i> Not listening to anything
                                    </div>
                                    <div id="spotifyContentImg" class="mt-2">
                                        <img class="rounded-md spotify-content-img" src="https://cdn.dont-ping.me/api/😴🦕👻🤘🤖.png">
                                    </div>
                                    `;
    }

    if (api.d.discord_status === "dnd") {
        discordContent.innerHTML = `<span class="w-3 h-3 bg-red-500 rounded-full inline-flex ml-1 mr-1"></span> Online`;
    } else if (api.d.discord_status === "idle") {
        discordContent.innerHTML = `<span class="w-3 h-3 bg-yellow-500 rounded-full inline-flex ml-1 mr-1"></span> Online`;
    } else if (api.d.discord_status === "online") {
        discordContent.innerHTML = `<span class="w-3 h-3 bg-green-500 rounded-full inline-flex ml-1 mr-1"></span> Online`;
    } else if (api.d.discord_status === "offline") {
        discordContent.innerHTML = `<span class="w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1 mr-1"></span> Offline`;
    } else {
        discordContent.innerHTML = `<span class="w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1 mr-1"></span> Loading`;
    }
}