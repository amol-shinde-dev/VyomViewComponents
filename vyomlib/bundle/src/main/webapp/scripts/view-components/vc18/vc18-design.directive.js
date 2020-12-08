(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc18')
    	.directive('comVyomVyomlibVc18Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc18/com-vyom-vyomlib-vc18-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();