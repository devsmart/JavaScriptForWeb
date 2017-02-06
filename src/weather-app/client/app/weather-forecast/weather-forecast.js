(function (module) {
    'use strict';

    module.directive('weatherForecast', function () {
        return {
            restrict: 'E',
            controller: function ($scope, weatherService) {
                $scope.forcastData = [];
                function getData(location) {
                    weatherService.getWeatherForcast(location).then(function (forecastInfo) {
                        $scope.forcastData = forecastInfo;

                    }).catch(function (exception) {
                        console.error(exception);
                    });
                }

                $scope.init = function () {
                    getData($scope.location);
                };

                $scope.$on('location-changed', function (event, data) {
                    getData(data);
                });
            },
            templateUrl: 'weather-forecast/weather-forecast.tpl.html'
        };
    });

})(angular.module('myWeather.weather-forecast'));