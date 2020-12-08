// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.marquee3').directive('comVyomVyomlibInspectorMarquee3Behavior', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/marquee3/com-vyom-vyomlib-inspector-marquee3-behavior.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };
           
            $scope.names = ["scroll","slide","alternate"];
            



                
              
                
                
        
                          
                function initMaxStarValue() {
                   $scope.MBehavior = $scope.cell.prop($scope.path);
                   
                }

                // Saving the parameter
                function saveMaxStarValue() {
                    $scope.cell.prop($scope.path, $scope.MBehavior);
           
                }

                // We watch "$scope.minSliderValue" to save it.
                $scope.$watch('MBehavior', saveMaxStarValue)
   

                initMaxStarValue();
            }
        };
    });
})();