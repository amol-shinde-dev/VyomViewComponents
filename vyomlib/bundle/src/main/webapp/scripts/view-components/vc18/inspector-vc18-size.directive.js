// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc18').directive('comVyomVyomlibInspectorVc18Size', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc18/com-vyom-vyomlib-inspector-vc18-size.directive.html',

            link: function ($scope) {

                $scope.data = {
                    fields: [],
                    selectedField: null
                };
                $scope.names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];






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
