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
        ["$sce",'$window', function ($sce,$window) {

            var dir = $window.location.href;
            dir = dir.split("/");
            dir = dir[dir.length-1];
            dir = removeDiacritics(decodeURI(dir));

            this.config = {
                sources: [
                    {src: $sce.trustAsResourceUrl(rootFolder + "sites/default/files/"+dir+".mp4"), type: "video/mp4"}
                ],
                tracks: [
                    {}
                ],
                theme: rootFolder + "sites/all/modules/angularjs_block_video/js/videogular-themes-default/videogular.css",
                plugins: {
                    poster: rootFolder + "sites/default/files/poster-"+dir+"-video.png"
                }
            };
        }]
    );

jQuery(document).ready(function() {
  angular.bootstrap(document.getElementById('hotelBlockVideo'), ['angularjsBlockVideoApp']);
});