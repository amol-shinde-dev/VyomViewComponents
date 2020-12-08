(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc7')
    	.directive('comVyomVyomlibVc7Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc7/com-vyom-vyomlib-vc7-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();