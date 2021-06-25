// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.recent-activity').directive('comVyomVyomlibInspectorRecentActivityIcon', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/recent-activity/com-vyom-vyomlib-inspector-recent-activity-icon.directive.html',

            link: function ($scope) {

                $scope.data = {
                    fields: [],
                    selectedField: null
                };



                $scope.names = ["asterisk", "plus", "minus", "euro", "cloud", "envelope", "pencil", "glass", "search", "user", "ok", "th", "home", "cog", "signal", "off", "download-alt", "refresh", "tags", "bookmark", "play", "filter", "wrench", "hourglass"];









                function init() {
                    $scope.HChange = $scope.cell.prop($scope.path);

                }

                // Saving the parameter
                function save() {
                    $scope.cell.prop($scope.path, $scope.HChange);

                }

                // We watch "$scope.minSliderValue" to save it.
                $scope.$watch('HChange', save)


                init();



            }

        };
    });
})();
