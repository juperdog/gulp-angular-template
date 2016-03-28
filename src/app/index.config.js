(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $controllerProvider, $compileProvider, $filterProvider, $provide, $breadcrumbProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // //config from 
    // var app = angular.module('app');
    // app.controller = $controllerProvider.register;
    // app.directive = $compileProvider.directive;
    // app.filter = $filterProvider.register;
    // app.factory = $provide.factory;
    // app.service = $provide.service;
    // app.constant = $provide.constant;
    // app.value = $provide.value;

    // $breadcrumbProvider.setOptions({
    //   template: '<ul class="breadcrumb"><li><i class="fa fa-home"></i><a href="#">Home</a></li><li ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li></ul>'
    // });
  }

})();