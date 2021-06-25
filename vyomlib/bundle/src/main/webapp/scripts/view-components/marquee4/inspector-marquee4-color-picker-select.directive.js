// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.marquee4').directive('comVyomVyomlibInspectorMarquee4ColorPickerSelect', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/marquee4/com-vyom-vyomlib-inspector-marquee4-color-picker-select.directive.html',

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
