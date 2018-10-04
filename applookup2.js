var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
    .when("/info/:infoID", {
      templateUrl: "lookup2template.html",
      controller: "myCtrl"
    });
});

app.controller("myCtrl",
  function($scope, $routeParams, $http){
    $http.get('subjects.json')
    .then (
      function(response) {
        $scope.units = response.data;
      });

        $scope.viewInfoID = $routeParams.infoID;
      });
