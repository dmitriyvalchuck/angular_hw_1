'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    title:'Photo'
  });
}])

.controller('View2Ctrl', ['$scope','$rootScope','$route', function($scope, $rootScope, $route) {
  $rootScope.title = $route.current.title;
}]);