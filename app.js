var app = angular.module('myApp', []);

(function() {
  app.controller('MainCtrl', MainCtrl);

  function MainCtrl($scope) {
    $scope.items = [
      'hey',
      'howdie',
      'yolo'
    ];
  }
})();
