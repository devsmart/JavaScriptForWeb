var weatherApp = angular.module('myWeather', []);
//API Key -- c18030c054e1d6bca15d3b05021e5878

weatherApp.controller('weatherController', function ($scope) {

        $scope.location = 'Colombo';

        $scope.btnShow_click = function () {
            $scope.$broadcast('location-changed', $scope.location);
        };
        $scope.text_keyUp = function (e) {
           if(e.keyCode ==13){
               $scope.btnShow_click();
           }
        }
    }
);

weatherApp.service('weatherService', function ($http) {
    this.ApiKey = 'c18030c054e1d6bca15d3b05021e5878';
    this.getCurrentWeather = function (location) {
        var results = $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + this.ApiKey + '&units=metric')
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (exception) {
                console.error(exception);
            });

        return results;
    };

    this.getWeatherForcast = function (location) {
        var results = $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=' + this.ApiKey + '&units=metric')
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (exception) {
                console.error(exception);
            });

        return results;
    };
});

weatherApp.directive('weatherToday', function () {
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
            }
        },
        templateUrl: 'weather-today.tpl.html'
    }
});

weatherApp.directive('weatherForecast', function () {
    return {
        restrict: 'E',
        controller: function ($scope, weatherService) {
            $scope.forcastData = [];
            function getData(location) {
                weatherService.getWeatherForcast($scope.location).then(function (forecastInfo) {
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
        templateUrl: 'weather-forecast.tpl.html'
    }
});


