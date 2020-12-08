// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc13').directive('comVyomVyomlibInspectorVc13Bfont', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc13/com-vyom-vyomlib-inspector-vc13-bfont.directive.html',

            link: function ($scope) {
                
                   $scope.data = {
                    fields: [],
                    selectedField: null
                       
                       
                };
              
                  
                
            $scope.names = ["Verdana", "Geneva", "Arial", "Helvetica", "sans-serif","cursive","fantasy"];

                function initColor() {
                    $scope.selectedName = $scope.cell.prop($scope.path);
                    
                }

                // Saving the parameter
                $scope.saveColor = function () {
                    $scope.cell.prop($scope.path, $scope.selectedName);
                };
                
                $scope.$watch('selectedName', $scope.saveColor)

                initColor();
            }
          
        };
    });
})();