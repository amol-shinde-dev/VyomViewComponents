// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc9').directive('comVyomVyomlibInspectorVc9Scheckbox', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc9/com-vyom-vyomlib-inspector-vc9-scheckbox.directive.html',

            link: function ($scope) {
                
                   $scope.data = {
                    fields: [],
                    selectedField: null
                };
                $scope.names = ["true", "false"];
                
                
              
                
                
        
                          
                function initMaxStarValue() {
                   $scope.HSubscriber = $scope.cell.prop($scope.path);
                   
                }

                // Saving the parameter
                function saveMaxStarValue() {
                    $scope.cell.prop($scope.path, $scope.HSubscriber);
           
                }

                // We watch "$scope.minSliderValue" to save it.
                $scope.$watch('HSubscriber', saveMaxStarValue)
   

                initMaxStarValue();
                $timeout(function () {
                    $scope.$broadcast('rzSliderForceRender');
                });
               
            }
          
        };
    });
})();