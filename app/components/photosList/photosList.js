'use strict';

angular.module('myApp').component('photosList', {
  replace: true,
  templateUrl: 'components/photosList/photosList.html',
  controller: PhotosListController
});

function PhotosListController($scope, photosListService) {

  photosListService.loadList().then(function(data) {
    $scope.photosList = data;
  });

}
