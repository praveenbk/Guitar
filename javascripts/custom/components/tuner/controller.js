angular.module("guitar.components.tuner",[])
.controller('guitar.components.tuner.controller', ["$scope", function($scope){
		$scope.setNote = function(note){
			
			
			_.each($scope.guitar.strings, function(string){
				console.log(string.name);

				if(string.name == 'S'+$scope.string)
					string.note = note;
			});				
		};
}]);