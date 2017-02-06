(function (module) {
    'use strict';

    module.directive('weatherToday', function () {
        return {
            restrict: 'E',
            controller: function ($scope, weatherService) {
                function getData(location) {
                    weatherService.getCurrentWeather(location).then(function (weatherInfo) {
                        $scope.data = weatherInfo;

                    }).catch(function (exception) {
                        console.error(exception);
                    });
                }

                $scope.$on('location-changed', function (event, data) {
                    getData(data);
                });
                $scope.init = function () {
                    getData($scope.location);
                };
            },
            templateUrl: 'weather-today/weather-today.tpl.html'
        };
    });


})(angular.module('myWeather.weather-today'));