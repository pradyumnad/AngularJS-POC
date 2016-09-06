describe('box component', function() {
  var $componentController,
      scope,
      $rootScope,
      $compile,
      dirElement,
      isolateScope,
      controller;

  beforeEach(function() {
    module('myApp');
    module('dir-templates');

    inject(function(_$componentController_, _$rootScope_, _$compile_) {
      $componentController = _$componentController_;
      $rootScope = _$rootScope_;
      $compile = _$compile_;
      scope = $rootScope.$new();
      scope.content = "Hello";
      dirElement = compileElement("<box-component><message content='{{content}}'/></box-component>");
      isolateScope = dirElement.isolateScope();
    });
  });

  function compileElement(html) {
    var element = angular.element(html);
    var compiledElement = $compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  describe('list', function() {
    it('should have one element', function() {
      controller = $componentController('boxComponent', {$scope: scope}, null);
      expect(isolateScope.$ctrl.messages.length).toBe(1);
    });

    it('should have the content added', function() {
      controller = $componentController('boxComponent', {$scope: scope}, null);
      expect(isolateScope.$ctrl.messages).toEqual(["Hello"]);
    });

    it('should have an empty content added', function() {
      scope.content = "";
      dirElement = compileElement("<box-component><message content='{{content}}'/></box-component>");
      isolateScope = dirElement.isolateScope();
      controller = $componentController('boxComponent', {$scope: scope}, null);

      expect(isolateScope.$ctrl.messages).toEqual([""]);
    });
  });
});
