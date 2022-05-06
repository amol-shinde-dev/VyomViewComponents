// This directive is used at design time to choose a field.
(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.dynamic-category')
    .directive('comVyomVyomlibInspectorDynamicCategoryColor', function (RX_RECORD_DEFINITION, $timeout) {
      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/dynamic-category/com-vyom-vyomlib-inspector-dynamic-category-color.directive.html',

        link: function ($scope) {

          $scope.data = {
            fields: [],
            selectedField: null
          };

          $scope.names = ["erric_default", "blue", "red", "green", "orange", "lime", "gray", "black", "pink",
            "brown", "dark-grey", "purple", "deep-purple", "indigo", "light-blue", "cyan", "teal", "light-green",
            "khaki", "yellow", "amber", "deep-orange", "blue-grey", "light-grey", "success", "warning", "danger", "primary"];

          function initValue() {
            $scope.HChange = $scope.cell.prop($scope.path);
          }

          // Saving the parameter
          function saveValue() {
            $scope.cell.prop($scope.path, $scope.HChange);

          }

          // We watch "$scope.minSliderValue" to save it.
          $scope.$watch('HChange', saveValue)


          initValue();
        }

      };
    });
})();
