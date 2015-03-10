angular.module("guitar.data").factory('guitar.data.Guitar', function(){
    var collection = [];

  	function Guitar(){ };

    Guitar.initialStrings = function(){  
      return [{name:"S1", note:"A"},{name:"S2", note:"B"},{name:"S3", note:"C"},{name:"S4", note:"D"},{name:"S5", note:"E"},{name:"S6", note:"F"}];
    }
  
  	Guitar.prototype.add = function(name) {
    	collection.push({name:name,strings: Guitar.initialStrings() });
  	};
 
  	Guitar.prototype.remove = function(index) {
      console.log(index);
    	collection.splice(index, 1);
  	};

    Guitar.prototype.getCollection = function(){
      return collection;
    };


	return Guitar;
});