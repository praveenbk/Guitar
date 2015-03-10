angular.module("guitar.components.guitar-collector",[])
.controller('guitar.components.guitar-collector.controller', ["$scope","guitar.data.Guitar", function($scope, Guitar){
	$scope.Guitar = new Guitar();
}]);
