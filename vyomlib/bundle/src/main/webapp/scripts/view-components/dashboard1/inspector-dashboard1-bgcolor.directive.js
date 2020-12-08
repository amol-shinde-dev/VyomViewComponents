// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dashboard1')
        .directive('comVyomVyomlibInspectorDashboard1Bgcolor', function (RX_RECORD_DEFINITION, $timeout) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/dashboard1/com-vyom-vyomlib-inspector-dashboard1-bgcolor.directive.html',

                link: function ($scope) {
                    $scope.data = {
                        fields: [],
                        selectedField: null
                    };

                    $scope.names = ["rosybrown", "navy", "skyblue", "blue", "red", "green", "orange", "lime", "gray", "black", "pink", "brown", "dark-grey", "purple",
                        "deep-purple", "indigo", "light-blue", "cyan", "teal", "light-green", "khaki", "yellow", "amber", "deep-orange", "light-grey"];

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
