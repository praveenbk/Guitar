var app = angular.module("guitar.components.tuner-addon");

  app.directive("tunerAddon", [function(){
    return{
      scope: {
        guitar: "=",
        selectedString: "=",
        selectedGuitar: "="
      },
      restrict : 'E',
      replace: true,

      templateUrl: "javascripts/custom/components/tuner-addon/template.html",
      controller: "guitar.components.tuner-addon.controller",

      link: function($scope, $element, $attributes){
      }
    };
  }]);