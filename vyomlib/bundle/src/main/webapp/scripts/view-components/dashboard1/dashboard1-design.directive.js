(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.dashboard1')
    	.directive('comVyomVyomlibDashboard1Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/dashboard1/com-vyom-vyomlib-dashboard1-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();