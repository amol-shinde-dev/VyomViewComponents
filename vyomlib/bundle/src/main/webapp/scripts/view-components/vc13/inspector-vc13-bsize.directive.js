// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc13').directive('comVyomVyomlibInspectorVc13Bsize', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc13/com-vyom-vyomlib-inspector-vc13-bsize.directive.html',

            link: function ($scope) {
                
                   $scope.data = {
                    fields: [],
                    selectedField: null
                };
              
                
                
                  $scope.minSliderValue = 0;
                $scope.slider_all_options = {};

                $scope.slider_all_options = {
                    minValue: 1,
                    options: {
                        floor: 1,
                        ceil: 100,
                        step: 10,
                        precision: 0,
                        draggableRange: false,
                        showSelectionBar: false,
                        hideLimitLabels: false,
                        readOnly: false,
                        disabled: false,
                        showTicks: false,
                        showTicksValues: false
                    }
                };

                function initMaxStarValue() {
                    $scope.minSliderValue = $scope.cell.prop($scope.path);
                }

                // Saving the parameter
                function saveMaxStarValue() {
                    $scope.cell.prop($scope.path, $scope.minSliderValue);
                }

                // We watch "$scope.minSliderValue" to save it.
                $scope.$watch('minSliderValue', saveMaxStarValue)

                initMaxStarValue();

                // Called else slider bullets are aligned to left.
                $timeout(function () {
                    $scope.$broadcast('rzSliderForceRender');
                });
            }
          
        };
    });
})();