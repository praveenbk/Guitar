angular.module("guitar.components.guitar")
	.controller("guitar.components.guitar.controller",[ "$scope",
		function($scope){
			$scope.selectString = function(string){
				$scope.selectedString = string;
			};
		}
]);