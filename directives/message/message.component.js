(function () {
  app.component('message', {
    transclude: true,
    require: {
      box: '^boxComponent',
    },
    templateUrl: 'directives/message/message.html',
    controller: function() {
      this.$onInit = function() {
        this.box.addMessage(this.content);
        // console.log(this.content);
      };
    },
    bindings: {
      content: '@'
    }
  });
})();
