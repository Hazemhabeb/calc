angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})


.controller('CalculatorCtrl', function($scope) {
  
  $scope.expression = '';
  $scope.clear = clear;
  $scope.input = input;
  $scope.calculate = calculate;
  

  function input(value) {
        if($scope.expression === '' || typeof($scope.expression) === 'undefined') {
            $scope.expression = value;
        } else {
            $scope.expression = $scope.expression + '' + value;
        }
  }

  function clear() {
    $scope.expression = '';
  }
  
    function calculate(expression) {
        $scope.expression = eval($scope.expression);
    }  

})
;
