angular.module("guitarApp")

.controller("guitar.MasterController",["$scope", "guitar.data.Guitar",function($scope,Guitar){
	function init(){
		$scope.Guitar = new Guitar();
	};


	init();
}]);