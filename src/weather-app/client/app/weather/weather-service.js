(function (module) {
    'use strict';

    module.service('weatherService', function ($http) {
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

})(angular.module('myWeather.weather'));