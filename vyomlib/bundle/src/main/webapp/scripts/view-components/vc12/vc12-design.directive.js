(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc12')
    	.directive('comVyomVyomlibVc12Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc12/com-vyom-vyomlib-vc12-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();