'use strict';

angular.module('phonecat').directive('lowercase', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {

      function parser(text) {
        return parseFloat(text.replace(/[,]/, '.'));
      }

      function formatter(number) {
        if (number)
          return number.toString().replace(/[.]/, ',');
        else
          return number;
      }
      ngModel.$parsers.push(parser);
      ngModel.$formatters.push(formatter);
    }
  };
});