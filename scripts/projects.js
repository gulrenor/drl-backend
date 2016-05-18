// projects.js

var app = angular.module('website', ['angular.filter']);
var transact = "php/json-dump.php";
var statesQuery = 'php/states.php';

app.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get(transact)
    .success(function(data) {
      $scope.projects = data;
      console.log(data);
    });

/*
  $http.get(statesQuery)
    .success(function(data) {
      $scope.statesList = data;
    })
*/

  // Formats the image's URL
  $scope.appendExtension = function (filename) {
    var domain = 'http://www.drlarchitects.com';
    return domain + '/images/' + filename + '.jpg';
  };

  $scope.search = function(query) {
    console.log($scope.query);
    return query.searchString === $scope.query.searchString || query.otb === $scope.query.otb;
  };
}]);
