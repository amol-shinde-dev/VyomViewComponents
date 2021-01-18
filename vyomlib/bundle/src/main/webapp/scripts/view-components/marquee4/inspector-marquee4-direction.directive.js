// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.marquee4').directive('comVyomVyomlibInspectorMarquee4Direction', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/marquee4/com-vyom-vyomlib-inspector-marquee4-direction.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };


                $scope.names = ["up", "down", "left", "right"];









                function initValue() {
                    $scope.Mdirect = $scope.cell.prop($scope.path);

                }

                // Saving the parameter
                function saveValue() {
                    $scope.cell.prop($scope.path, $scope.Mdirect);

                }

                // We watch "$scope.minSliderValue" to save it.
                $scope.$watch('Mdirect', saveValue)


                initValue();
            }
        };
    });
})();
