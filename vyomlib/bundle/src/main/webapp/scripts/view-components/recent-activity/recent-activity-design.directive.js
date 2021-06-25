(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.recent-activity')
        .directive('comVyomVyomlibRecentActivityDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/recent-activity/com-vyom-vyomlib-recent-activity-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
