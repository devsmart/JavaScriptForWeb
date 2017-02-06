angular.module('myWeather.weather', []);
angular.module('myWeather.weather-forecast', []);
angular.module('myWeather.weather-today', []);
angular.module('myWeather.templates', []);

angular.module('myWeather.modules-all', [
    'myWeather.weather',
    'myWeather.weather-forecast',
    'myWeather.weather-today',
    'myWeather.templates'
]);
