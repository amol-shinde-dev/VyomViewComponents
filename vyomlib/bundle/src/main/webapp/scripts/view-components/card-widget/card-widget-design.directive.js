(function () {
  'use strict';
  angular.module('com.vyom.vyomlib.view-components.card-widget')
    .directive('comVyomVyomlibCardWidgetDesign', function () {

      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/card-widget/com-vyom-vyomlib-card-widget-design.directive.html',

        scope: {
          rxConfiguration: '='
        }
      };
    });
})();