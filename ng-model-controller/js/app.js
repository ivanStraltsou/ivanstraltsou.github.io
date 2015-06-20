define(['angular'], function(ng) {
                  console.log(ng)

    return ['$scope', 'rcCurrencyService', function($scope, $rcCurrencyService) {
            $scope.model = 123456.7;

            $scope.newModel = '';

            $scope.changeModel = function() {
                $scope.model = $scope.newModel;
                $scope.rcCurrencyFormat = $rcCurrencyService.format($scope.model, false);
            };

            this.test = $scope.test = function() {
                $scope.model = 123;
            };

            $scope.options = [
                { id: 1, value: 1000.5 },
                { id: 2, value: 123456.7 }
            ];

            //            $scope.selected = $scope.options[1];
        }];

});
