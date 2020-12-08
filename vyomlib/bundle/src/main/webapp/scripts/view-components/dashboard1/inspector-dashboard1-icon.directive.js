// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dashboard1')
        .directive('comVyomVyomlibInspectorDashboard1Icon', function (RX_RECORD_DEFINITION, $timeout) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/dashboard1/com-vyom-vyomlib-inspector-dashboard1-icon.directive.html',

                link: function ($scope) {
                    $scope.data = {
                        fields: [],
                        selectedField: null
                    };

                    $scope.names = ["action_button_cursor", "activity_feed_clock_o", "adjust_settings", "align_center", "align_left", "align_right", "android", "angle_down", "angle_down_square", "angle_left", "angle_right",
                        "angle_right_circle", "angle_right_circle_o", "angle_up"];

                    function initValue() {
                        $scope.HChange = $scope.cell.prop($scope.path);
                    }

                    function saveValue() {
                        $scope.cell.prop($scope.path, $scope.HChange);

                    }

                    $scope.$watch('HChange', saveValue)

                    initValue();
                }

            };
        });
})();
