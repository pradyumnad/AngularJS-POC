(function() {
  app.component('boxComponent', {
    transclude: true,
    templateUrl: 'directives/box/box.html',
    controller: function() {
      var self = this;
      self.messages = [];
      this.addMessage = function(message) {
        self.messages.push(message);
      };
    }
  });

})();
