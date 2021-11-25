var app = document.getElementById("app")

app.innerHTML = `<div>
                    <div class="loader"></div>
                </div>

                <main class="flex-grow md:flex">
                    <div class="absolute p-16 inset-0 flex items-center">
                        <div class="navbar py-2 px-3">
                            <a id="theme-button" class="navbar-item rounded-full mr-1 social-button-color" href="cripto.html" target="_blank"><i class="fab fa-bitcoin"></i></a>
                            <a class="navbar-item rounded mr-1 social-button-color" href="https://repeatpay.ga/cool" target="_blank"><i class="fas fa-donate"></i></a>
                        </div>
                        <div class="w-full text-left">
                            <div class="font-bold text-3xl main-text-color">COOL#7673</div>
                            <div class="font-normal text-x1 description-color">
                                I'm 16 y/o developer, student & designer.
                            </div>
                            <div class="mt-2 mr-10 font-semibold text-sm">
                                <a href="https://github.com/ygtdev" target="_blank" class="mt-2 mr-4 inline-block social-button-color social-button">
                                    <i class="fab fa-github mr-1"></i>ygtdev
                                </a>
                                <a href="https://discord.com/users/150612752610754560" target="_blank" class="mt-2 mr-4 inline-block social-button-color social-button">
                                    <i class="fab fa-discord mr-1"></i>COOL#7673
                                </a>
                                <a href="https://open.spotify.com/user/21vwplhnoyw5iav2kibidsosi" target="_blank" class="mt-2 mr-4 inline-block social-button-color social-button">
                                    <i class="fab fa-spotify mr-1"></i>COOL
                                </a>
                            </div>
                            <div id="statusContent" class="mt-2 mr-10 font-semibold text-sm rounded-md">
                                <div id="discordContent" class="font-bold text-x1 description-color"></div>
                                <div id="spotifyContent" class="font-bold text-x1 description-color"></div>
                            </div>
                        </div>
                    </div>
                </main>
                `

$(window).on("load",function(){
    $(".loader").fadeOut("slow");
});