(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.nvd3-chart')
    .directive('comVyomVyomlibNvd3ChartPicker', function () {
      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/nvd3-chart/com-vyom-vyomlib-nvd3-chart-picker.directive.html',

        link: function ($scope) {
          $scope.color = $scope.cell.prop($scope.path);

          $scope.saveColor = function () {
            $scope.cell.prop($scope.path, $scope.color);
          }
        }
      };
    });
})();