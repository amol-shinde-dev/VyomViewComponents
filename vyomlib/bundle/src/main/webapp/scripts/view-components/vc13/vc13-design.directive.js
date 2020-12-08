(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc13')
    	.directive('comVyomVyomlibVc13Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc13/com-vyom-vyomlib-vc13-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();