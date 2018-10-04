var app = angular.module("myApp", []);
		
app.controller ("myCtrl", function ($scope){

	$scope.genNum = function () {
		$scope.status = "Start guessing.";
		return  Math.floor(Math.random() * 100) + 1;
	};
	
	$scope.chkNum = function () {
		if ($scope.numGuess > $scope.numSecret) $scope.status = "Guess lower.";
		if ($scope.numGuess < $scope.numSecret) $scope.status = "Guess higher.";
		if ($scope.numGuess == $scope.numSecret) $scope.status = "Got it!";
	};
	
	$scope.numGuess = 0;
	$scope.numSecret = $scope.genNum();

});