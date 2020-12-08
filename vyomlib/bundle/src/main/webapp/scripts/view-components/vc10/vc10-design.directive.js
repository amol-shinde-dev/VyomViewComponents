(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc10')
    	.directive('comVyomVyomlibVc10Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc10/com-vyom-vyomlib-vc10-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();