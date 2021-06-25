// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc13').directive('comVyomVyomlibInspectorVc13Bsize2', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc13/com-vyom-vyomlib-inspector-vc13-bsize2.directive.html',

            link: function ($scope) {
                
                   $scope.data = {
                    fields: [],
                    selectedField: null
                };
              
                
                
                $scope.names = ["Small", "Large"];
                
                function initMaxStarValue() {
                    $scope.selectedName = $scope.cell.prop($scope.path);
                }

                // Saving the parameter
                function saveMaxStarValue() {
                    $scope.cell.prop($scope.path, $scope.selectedName);
                }

                // We watch "$scope.minSliderValue" to save it.
                $scope.$watch('selectedName', saveMaxStarValue)

                initMaxStarValue();

               
            }
          
        };
    });
})();