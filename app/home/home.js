'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/main.html',
    controller: 'HomeCtrl',
    title:'Home'
  });
}])

.controller('HomeCtrl', ['$scope','$rootScope','$route', function($scope, $rootScope, $route) {
  $rootScope.title = $route.current.title;
}]);