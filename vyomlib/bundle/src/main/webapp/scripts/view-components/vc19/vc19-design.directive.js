(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc19')
    	.directive('comVyomVyomlibVc19Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc19/com-vyom-vyomlib-vc19-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();