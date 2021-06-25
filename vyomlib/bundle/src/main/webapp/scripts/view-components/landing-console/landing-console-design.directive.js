(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.landing-console')
    	.directive('comVyomVyomlibLandingConsoleDesign', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/landing-console/com-vyom-vyomlib-landing-console-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();