(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc9')
    	.directive('comVyomVyomlibVc9Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc9/com-vyom-vyomlib-vc9-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();