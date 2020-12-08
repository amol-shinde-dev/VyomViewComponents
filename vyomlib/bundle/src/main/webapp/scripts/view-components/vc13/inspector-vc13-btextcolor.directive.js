// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc13').directive('comVyomVyomlibInspectorVc13Btextcolor', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc13/com-vyom-vyomlib-inspector-vc13-btextcolor.directive.html',

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