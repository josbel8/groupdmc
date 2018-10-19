'use strict';
var angularjsBlockVideo = angular.module('angularjsBlockVideoApp',
        [
            "ngSanitize",
            "com.2fdevs.videogular",
            "com.2fdevs.videogular.plugins.controls",
            "com.2fdevs.videogular.plugins.overlayplay",
            "com.2fdevs.videogular.plugins.poster"
        ]
    );

    angularjsBlockVideo.controller('Video1',
        ["$sce", function ($sce) {
            this.config = {
                sources: [
                    {src: $sce.trustAsResourceUrl("/dmc7/sites/default/files/hotel-boutique-isabel-la-catolica.mp4"), type: "video/mp4"}
                ],
                tracks: [
                    {}
                ],
                theme: "/dmc7/sites/all/modules/angularjs_block_video/js/videogular-themes-default/videogular.css",
                plugins: {
                    poster: "/dmc7/sites/default/files/poster-hotel-boutique-isabel-la-catolica-video.png"
                }
            };
        }]
    );

    angularjsBlockVideo.controller('Video2',
        ["$sce", function ($sce) {
            this.config = {
                sources: [
                    {src: $sce.trustAsResourceUrl("/dmc7/sites/default/files/guillermina-restaurant.mp4"), type: "video/mp4"}
                ],
                tracks: [
                    {}
                ],
                theme: "/dmc7/sites/all/modules/angularjs_block_video/js/videogular-themes-default/videogular.css",
                plugins: {
                    poster: "/dmc7/sites/default/files/poster-guillermina-restaurant-video.png"
                }
            };
        }]
    );

    angularjsBlockVideo.controller('Video3',
        ["$sce", function ($sce) {
            this.config = {
                sources: [
                    {src: $sce.trustAsResourceUrl("/dmc7/sites/default/files/juana-la-loca-restaurant.mp4"), type: "video/mp4"}
                ],
                tracks: [
                    {}
                ],
                theme: "/dmc7/sites/all/modules/angularjs_block_video/js/videogular-themes-default/videogular.css",
                plugins: {
                    poster: "/dmc7/sites/default/files/poster-juana-la-loca-restaurant-video.png"
                }
            };
        }]
    );

    angularjsBlockVideo.controller('Video4',
        ["$sce", function ($sce) {
            this.config = {
                sources: [
                    {src: $sce.trustAsResourceUrl("/dmc7/sites/default/files/dmc-catering.mp4"), type: "video/mp4"}
                ],
                tracks: [
                    {}
                ],
                theme: "/dmc7/sites/all/modules/angularjs_block_video/js/videogular-themes-default/videogular.css",
                plugins: {
                    poster: "/dmc7/sites/default/files/poster-dmc-catering-video.png"
                }
            };
        }]
    );

jQuery(document).ready(function() {
  angular.bootstrap(document.getElementById('angularjsBlockVideo'), ['angularjsBlockVideoApp']);
});
