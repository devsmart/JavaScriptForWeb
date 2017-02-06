describe('Module : myWeather.weather', function () {
    describe('Service: weatherService', function () {

        var weatherService,
            $scope;
        beforeEach(function () {

            module("myWeather.weather");

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
});

