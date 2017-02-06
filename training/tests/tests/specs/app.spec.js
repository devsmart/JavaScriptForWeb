/**
 * Created by harshana on 2/2/17.
 */

describe('Controller: weatherController', function () {
    var $scope;
    var controller;
    // load the controller's module
    beforeEach(function () {

        module("myWeather");

        inject(function (_$rootScope_, $controller) {
            $scope = _$rootScope_.$new();
            controller = $controller("weatherController", {$scope: $scope});
        });

    });


    //tests
    it("controller should be registered", function () {
        expect(controller).not.toBe(null);
        expect(controller).not.toBe(undefined);
    });

    it('should have values in settings', function () {
        expect($scope.location).not.toBe(undefined);
    });
});

describe('Service: weatherService', function () {

    var weatherService,
        $scope;
    beforeEach(function () {

        module("myWeather");

    });

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _weatherService_) {
        $scope = $rootScope.$new();
        weatherService = _weatherService_;
    }));

    it("controller should be registered", function () {
        expect(weatherService).not.toBe(null);
        expect(weatherService).not.toBe(undefined);
    });
    it('should have function called "getCurrentWeather"', function () {
        expect(weatherService.getCurrentWeather).not.toBe(undefined);
    });
    it('should have function called "getWeatherForcast"', function () {
        expect(weatherService.getWeatherForcast).not.toBe(undefined);
    });

});
