(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.d3-gauge')
    .directive('comVyomVyomlibD3GaugeDesign', function () {
      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/d3-gauge/com-vyom-vyomlib-d3-gauge-design.html',

        scope: {
          rxConfiguration: '='
        }
      };
    });
})();
