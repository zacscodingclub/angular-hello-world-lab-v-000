function MainController($scope) {
  $scope.name = "Name";
  $scope.email = "name@example.com";
  $scope.phone = "111-222-3333";
}

angular
  .module('app')
  .controller('MainController', MainController);
