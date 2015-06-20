describe('app', function() {
    var $controller,
        $rootScope,
        controller,
        scope;

    // Load the myApp module, which contains the directive
    beforeEach(module('curr'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$controller_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function() {
        scope = $rootScope.$new();

        controller = $controller('controller', {
            $scope: scope
        });
    });

    it('Replaces the element with the appropriate content', function() {

        expect(scope.model).toEqual(123456.7);

    });

    it('method test', function() {
        controller.test();

        expect(scope.model).toEqual(123);
    });
});