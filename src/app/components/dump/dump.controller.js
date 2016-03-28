(function() {
  'use strict';

  angular
    .module('app')
    .controller('DumpController', DumpController);

  /** @ngInject */
  function DumpController($scope) {
    var dump = $scope;
    dump.hello = "Hello world!";
  }
})();
