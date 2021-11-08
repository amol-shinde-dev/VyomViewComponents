// This directive is used at design time to choose a field.
(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.dynamic-star-rating')
    .directive('comVyomVyomlibInspectorDynamicStarRatingSize', function (RX_RECORD_DEFINITION, $timeout) {
      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/dynamic-star-rating/com-vyom-vyomlib-inspector-dynamic-star-rating-size.directive.html',

        link: function ($scope) {

          $scope.data = {
            fields: [],
            selectedField: null
          };

          $scope.names = ["fa-1x", "fa-2x", "fa-3x", "fa-4x", "fa-5x"];

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