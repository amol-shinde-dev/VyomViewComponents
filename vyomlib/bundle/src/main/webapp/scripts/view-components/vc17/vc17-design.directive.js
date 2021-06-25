(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc17')
    	.directive('comVyomVyomlibVc17Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc17/com-vyom-vyomlib-vc17-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();