(function() {
  'use strict';

  angular
    .module('app')
    .run(routerRun)
    .config(routerConfig);

  /** @ngInject */
  function routerRun($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/blank');

    $stateProvider
      .state('root', {
        abstract: true,
        url: '', /* this has to be empty */
        templateUrl: 'app/beyond/beyond.layout.html'
      })
      .state('root.blank', {
        url: '/blank',
        templateUrl: 'app/beyond/beyond.blank.html',
        ncyBreadcrumb: {
          label: 'Blank Page'
        }
      })
      .state('root.dump', {
        url: '/dump',
        controller: 'DumpController',
        templateUrl: 'app/components/dump/dump.html',
        ncyBreadcrumb: {
          label: 'Dump Page'
        }
      })
      .state('root.dump-child', {
        url: '/dump/dump-child',
        controller: 'DumpController',
        templateUrl: 'app/components/dump/dump.html',
        ncyBreadcrumb: {
          label: 'Dump Child Page',
          parent: 'root.dump' 
        }
      })
      ;

    
  }

})();
