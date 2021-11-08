(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.nvd3-barchart')
    .directive('comVyomVyomlibNvd3BarchartDesign', function () {
      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/nvd3-barchart/com-vyom-vyomlib-nvd3-barchart-design.html',

        scope: {
          rxConfiguration: '='
        }
      };
    });
})();
