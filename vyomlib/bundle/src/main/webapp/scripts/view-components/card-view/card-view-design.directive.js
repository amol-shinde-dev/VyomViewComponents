(function () {
  'use strict';
  angular.module('com.vyom.vyomlib.view-components.card-view')
    .directive('comVyomVyomlibCardViewDesign', function () {

      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/card-view/com-vyom-vyomlib-card-view-design.directive.html',

        scope: {
          rxConfiguration: '='
        }
      };
    });
})();