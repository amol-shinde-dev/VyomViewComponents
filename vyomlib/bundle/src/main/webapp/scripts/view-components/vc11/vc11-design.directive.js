(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc11')
    	.directive('comVyomVyomlibVc11Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc11/com-vyom-vyomlib-vc11-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();