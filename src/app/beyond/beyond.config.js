(function() {
  'use strict';

  angular
    .module('app')
    .config(beyondConfig);

  /** @ngInject */
  function beyondConfig($controllerProvider, $compileProvider, $filterProvider, $provide, $breadcrumbProvider) {

    //config from 
    var app = angular.module('app');
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;

    $breadcrumbProvider.setOptions({
      template: '<ul class="breadcrumb"><li><i class="fa fa-home"></i><a ui-sref="root.blank">Home</a></li><li ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li></ul>'
    });
  }

})();