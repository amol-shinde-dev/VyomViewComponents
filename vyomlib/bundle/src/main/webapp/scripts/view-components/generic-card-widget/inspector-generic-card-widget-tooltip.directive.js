// This directive is used at design time to choose a field.
(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.generic-card-widget')
    .directive('comVyomVyomlibInspectorGenericCardWidgetTooltip', function (RX_RECORD_DEFINITION, $timeout) {
      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/generic-card-widget/com-vyom-vyomlib-inspector-generic-card-widget-bgcolor.directive.html',

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