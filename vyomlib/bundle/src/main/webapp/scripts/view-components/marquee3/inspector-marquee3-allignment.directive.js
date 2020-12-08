// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.marquee3').directive('comVyomVyomlibInspectorMarquee3Allignment', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/marquee3/com-vyom-vyomlib-inspector-marquee3-allignment.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };
           
            $scope.names = ["left","right","center"];
            



                
              
                
                
        
                          
                function initMaxStarValue() {
                   $scope.Mallign = $scope.cell.prop($scope.path);
                   
                }

                // Saving the parameter
                function saveMaxStarValue() {
                    $scope.cell.prop($scope.path, $scope.Mallign);
           
                }

                // We watch "$scope.minSliderValue" to save it.
                $scope.$watch('Mallign', saveMaxStarValue)
   

                initMaxStarValue();
            }
        };
    });
})();