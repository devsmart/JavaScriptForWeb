describe('Module : myWeather.weather', function () {
    describe('Controller: weatherController', function () {
        var $scope;
        var controller;
        // load the controller's module
        beforeEach(function () {

            module("myWeather.weather");

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
});