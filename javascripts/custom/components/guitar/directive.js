var app = angular.module("guitar.components.guitar");

  app.directive("guitar", [function(){
    return{
      scope: {
        guitar:"=",
       

      },
      restrict : 'E',
      replace: true,

      templateUrl: "javascripts/custom/components/guitar/template.html",
      controller: "guitar.components.guitar.controller",

      link: function($scope, $element, $attributes){
      }
    };
  }]);