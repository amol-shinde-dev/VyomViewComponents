(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.nvd3-chart')
    .directive('comVyomVyomlibNvd3ChartDesign', function () {
      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/nvd3-chart/com-vyom-vyomlib-nvd3-chart-design.html',

        scope: {
          rxConfiguration: '='
        }
      };
    });
})();
