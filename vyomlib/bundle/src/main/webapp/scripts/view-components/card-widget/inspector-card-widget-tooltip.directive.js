// This directive is used at design time to choose a field.
(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.card-widget')
    .directive('comVyomVyomlibInspectorCardWidgetTooltip', function (RX_RECORD_DEFINITION, $timeout) {
      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/card-widget/com-vyom-vyomlib-inspector-card-widget-tooltip.directive.html',

        link: function ($scope) {

          $scope.data = {
            fields: [],
            selectedField: null
          };

          $scope.names = ["Hide", "Show"];

          function initMaxStarValue() {
            $scope.HChange = $scope.cell.prop($scope.path);
          }

          // Saving the parameter
          function saveMaxStarValue() {
            $scope.cell.prop($scope.path, $scope.HChange);
          }

          // We watch "$scope.minSliderValue" to save it.
          $scope.$watch('HChange', saveMaxStarValue)
          initMaxStarValue();
        }
      };
    });
})();