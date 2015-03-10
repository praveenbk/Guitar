var app = angular.module("guitar.components.tuner");

  app.directive("tuner", [function(){
    return{
      scope: {
        guitar: "=",
        string: "="
      },
      restrict : 'E',
      replace: true,

      templateUrl: "javascripts/custom/components/tuner/template.html",
      controller: "guitar.components.tuner.controller",

      link: function($scope, $element, $attributes){
      }
    };
  }]);