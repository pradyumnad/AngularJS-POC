describe('MainCtrl', function() {
  beforeEach(module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('should have items list with 3 elements', function() {
      var $scope = {};
      var controller = $controller('MainCtrl', { $scope: $scope });
      expect($scope.items.length).toBe(3);
  });
});
