// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.marquee4').directive('comVyomVyomlibInspectorMarquee4Behavior', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/marquee4/com-vyom-vyomlib-inspector-marquee4-behavior.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };

                $scope.names = ["scroll", "slide", "alternate"];









                function initValue() {
                    $scope.MBehavior = $scope.cell.prop($scope.path);

                }

                // Saving the parameter
                function saveValue() {
                    $scope.cell.prop($scope.path, $scope.MBehavior);

                }

                // We watch "$scope.minSliderValue" to save it.
                $scope.$watch('MBehavior', saveValue)


                initValue();
            }
        };
    });
})();
