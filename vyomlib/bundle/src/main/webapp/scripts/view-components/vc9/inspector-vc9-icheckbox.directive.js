// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc9').directive('comVyomVyomlibInspectorVc9Icheckbox', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc9/com-vyom-vyomlib-inspector-vc9-icheckbox.directive.html',

            link: function ($scope) {
                
                   $scope.data = {
                    fields: [],
                    selectedField: null
                };
                $scope.names = ["true", "false"];
                
              
                
                
        
                          
                function initMaxStarValue() {
                   $scope.HIncident = $scope.cell.prop($scope.path);
                   
                }

                // Saving the parameter
                function saveMaxStarValue() {
                    $scope.cell.prop($scope.path, $scope.HIncident);
           
                }

                // We watch "$scope.minSliderValue" to save it.
                $scope.$watch('HIncident', saveMaxStarValue)
   

                initMaxStarValue();
                 $timeout(function () {
                    $scope.$broadcast('rzSliderForceRender');
                });
               
            }
          
        };
    });
})();