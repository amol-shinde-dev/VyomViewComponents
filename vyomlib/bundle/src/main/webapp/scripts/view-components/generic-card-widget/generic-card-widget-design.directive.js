(function () {
  'use strict';
  angular.module('com.vyom.vyomlib.view-components.generic-card-widget')
    .directive('comVyomVyomlibGenericCardWidgetDesign', function () {

      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/generic-card-widget/com-vyom-vyomlib-generic-card-widget-design.directive.html',

        scope: {
          rxConfiguration: '='
        }
      };
    });
})();