'use strict';
var angularjsBlockTextFrontSlider = angular.module('angularjsTextFrontSliderApp', []);

    angularjsBlockTextFrontSlider.controller('angularjsTextSliderController', ['$scope', '$http', '$window', function($scope,$http,$window) {

    var dir = $window.location.href;
    dir = dir.split("/");
    dir = '/dmc7/json/testimonios_home/' + dir[dir.length-1];

    $http({
      method: 'GET',
      url: dir
    }).then(function successCallback(response) {
        $scope.items = response.data;
    });

  }]);

jQuery(document).ready(function() {
  angular.bootstrap(document.getElementById('angularjsTextFrontSlider'), ['angularjsTextFrontSliderApp']);
});
