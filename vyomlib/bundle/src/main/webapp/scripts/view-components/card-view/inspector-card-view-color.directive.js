// This directive is used at design time to choose a field.
(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.card-view')
    .directive('comVyomVyomlibInspectorVardViewColor', function (RX_RECORD_DEFINITION, $timeout) {
      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/card-view/com-vyom-vyomlib-inspector-card-view-color.directive.html',

        link: function ($scope) {

          $scope.data = {
            fields: [],
            selectedField: null
          };



          // Getting the color from the color picker.
          $scope.hexPickerColor = "";

          function initColor() {
            $scope.hexPickerColor = $scope.cell.prop($scope.path);
          }

          // Saving the parameter
          $scope.saveColor = function () {
            $scope.cell.prop($scope.path, $scope.hexPickerColor);
          };

          initColor();
        }

      };
    });
})();