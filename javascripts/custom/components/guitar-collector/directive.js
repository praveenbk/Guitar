var app = angular.module("guitar.components.guitar-collector");

  app.directive("guitarCollector", [function(){
    return{
      scope: { },
      restrict: "E",
      replace: true,

      templateUrl: "javascripts/custom/components/guitar-collector/template.html",
      controller: "guitar.components.guitar-collector.controller",

      link: function($scope, $element, $attributes){
        // your DOM manipulation logic for this component goes here
      }
    };
  }]);