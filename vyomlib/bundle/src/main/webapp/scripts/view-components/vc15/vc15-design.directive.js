(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc15')
    	.directive('comVyomVyomlibVc15Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc15/com-vyom-vyomlib-vc15-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();