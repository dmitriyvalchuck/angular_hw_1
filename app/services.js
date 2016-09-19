var myModule = angular.module('myApp');
myModule.factory('photosListService', ['$q', '$http', function(q, http) {
  var listData;
  var defer = q.defer();
  return {
    loadList: function() {
      if (listData) {
        defer.resolve(listData);
      }
      else {
        http.get('photos.json').success(function(data) {
          listData = data;
          defer.resolve(listData);
        });
      }
      return defer.promise;
    }
  };

}]);

