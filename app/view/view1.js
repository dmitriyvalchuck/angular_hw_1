'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view/view1.html',
    controller: 'View1Ctrl',
    title:'view1'
  });
}])

.controller('View1Ctrl', ['$scope','$rootScope','$route', function($scope, $rootScope, $route) {
  //TODO Find better place to do this.
  $rootScope.title = $route.current.title;
}]);