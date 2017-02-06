(function (module) {
    'use strict';

    module.controller('weatherController', function ($scope) {

            $scope.location = 'Colombo';

            $scope.btnShow_click = function () {
                $scope.$broadcast('location-changed', $scope.location);
            };
            $scope.text_keyUp = function (e) {
                if (e.keyCode === 13) {
                    $scope.btnShow_click();
                }
            };
        }
    );

})(angular.module('myWeather.weather'));