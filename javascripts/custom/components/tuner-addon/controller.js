angular.module("guitar.components.tuner-addon")
.controller("guitar.components.tuner-addon.controller", ["$scope", "guitar.data.Guitar", function($scope,Guitar){
	$scope.Guitar = new Guitar();

	$scope.selectGuitar = function(guitar){
		$scope.selectedGuitar = guitar;
	};
}]);