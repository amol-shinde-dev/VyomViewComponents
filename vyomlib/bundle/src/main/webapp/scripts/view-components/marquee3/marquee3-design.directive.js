(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.marquee3')
    	.directive('comVyomVyomlibMarquee3Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/marquee3/com-vyom-vyomlib-marquee3-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();