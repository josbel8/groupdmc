<div id="angularjsBlockVideo">
    <div>
        <ul data-orbit data-options="timer:false;
                                    slide_number:false;
                                    animation:fade;
                                    pause_on_hover:true;
                                    navigation_arrows:true;
                  bullets:false;" class="row">
            <li>
                <div ng-controller="Video1 as controller" class='video-slider'>
                    <videogular vg-theme="controller.config.theme">
                        <vg-media vg-src="controller.config.sources"
                                vg-tracks="controller.config.tracks">
                        </vg-media>

                        <vg-controls vg-autohide="controller.config.plugins.controls.autoHide" vg-autohide-time="controller.config.plugins.controls.autoHideTime">
                            <vg-play-pause-button></vg-play-pause-button>
                            <vg-scrub-bar>
                                <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
                            </vg-scrub-bar>
                            <vg-time-display>{{ timeLeft | date:'mm:ss':'+0000' }}</vg-time-display>
                            <vg-volume>
                                <vg-mute-button></vg-mute-button>
                                <vg-volume-bar></vg-volume-bar>
                            </vg-volume>
                        </vg-controls>

                        <vg-overlay-play></vg-overlay-play>
                        <vg-poster vg-url='controller.config.plugins.poster'></vg-poster>
                    </videogular>
                </div>
            </li>
            <li>
                <div ng-controller="Video2 as controller" class='video-slider'>
                    <videogular vg-theme="controller.config.theme">
                        <vg-media vg-src="controller.config.sources"
                                vg-tracks="controller.config.tracks">
                        </vg-media>

                        <vg-controls vg-autohide="controller.config.plugins.controls.autoHide" vg-autohide-time="controller.config.plugins.controls.autoHideTime">
                            <vg-play-pause-button></vg-play-pause-button>
                            <vg-scrub-bar>
                                <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
                            </vg-scrub-bar>
                            <vg-time-display>{{ timeLeft | date:'mm:ss':'+0000' }}</vg-time-display>
                            <vg-volume>
                                <vg-mute-button></vg-mute-button>
                                <vg-volume-bar></vg-volume-bar>
                            </vg-volume>
                        </vg-controls>

                        <vg-overlay-play></vg-overlay-play>
                        <vg-poster vg-url='controller.config.plugins.poster'></vg-poster>
                    </videogular>
                </div>
            </li>
            <li>
                <div ng-controller="Video3 as controller" class='video-slider'>
                    <videogular vg-theme="controller.config.theme">
                        <vg-media vg-src="controller.config.sources"
                                vg-tracks="controller.config.tracks">
                        </vg-media>

                        <vg-controls vg-autohide="controller.config.plugins.controls.autoHide" vg-autohide-time="controller.config.plugins.controls.autoHideTime">
                            <vg-play-pause-button></vg-play-pause-button>
                            <vg-scrub-bar>
                                <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
                            </vg-scrub-bar>
                            <vg-time-display>{{ timeLeft | date:'mm:ss':'+0000' }}</vg-time-display>
                            <vg-volume>
                                <vg-mute-button></vg-mute-button>
                                <vg-volume-bar></vg-volume-bar>
                            </vg-volume>
                        </vg-controls>

                        <vg-overlay-play></vg-overlay-play>
                        <vg-poster vg-url='controller.config.plugins.poster'></vg-poster>
                    </videogular>
                </div>
            </li>
            <li>
                <div ng-controller="Video4 as controller" class='video-slider'>
                    <videogular vg-theme="controller.config.theme">
                        <vg-media vg-src="controller.config.sources"
                                vg-tracks="controller.config.tracks">
                        </vg-media>

                        <vg-controls vg-autohide="controller.config.plugins.controls.autoHide" vg-autohide-time="controller.config.plugins.controls.autoHideTime">
                            <vg-play-pause-button></vg-play-pause-button>
                            <vg-scrub-bar>
                                <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
                            </vg-scrub-bar>
                            <vg-time-display>{{ timeLeft | date:'mm:ss':'+0000' }}</vg-time-display>
                            <vg-volume>
                                <vg-mute-button></vg-mute-button>
                                <vg-volume-bar></vg-volume-bar>
                            </vg-volume>
                        </vg-controls>

                        <vg-overlay-play></vg-overlay-play>
                        <vg-poster vg-url='controller.config.plugins.poster'></vg-poster>
                    </videogular>
                </div>
            </li>
        </ul>
    </div>
</div>
