// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc17').directive('comVyomVyomlibInspectorVc17Icon', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc17/com-vyom-vyomlib-inspector-vc17-icon.directive.html',

            link: function ($scope) {
                
                   $scope.data = {
                    fields: [],
                    selectedField: null
                };
                $scope.names = ["home", "plus","asterisk","euro","user","pencil","envelope","download-alt","inbox",
                               "refresh","qrcode","tag","tags","bookmark","share","check"];
                
              
                
                
        
                          
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