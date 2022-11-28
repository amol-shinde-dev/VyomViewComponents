// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.icona-v2').directive('comVyomVyomlibInspectorIconaV2Icon', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/icona-v2/com-vyom-vyomlib-inspector-icona-v2-icon.directive.html',

            link: function ($scope) {

                $scope.data = {
                    fields: [],
                    selectedField: null
                };
                $scope.names = ["home", "circles_arrows", "cloud_arrow_up", "comments", "user", "connection", "envelope", "download", "mailroom_shipping",
                               "gear", "hands_gear", "mapmarker_o", "tags", "magic_ball", "share", "check", "internet", "mapmarker"];






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
