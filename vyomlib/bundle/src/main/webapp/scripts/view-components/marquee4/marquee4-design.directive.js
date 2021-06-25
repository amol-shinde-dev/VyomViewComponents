(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.marquee4')
        .directive('comVyomVyomlibMarquee4Design', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/marquee4/com-vyom-vyomlib-marquee4-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
