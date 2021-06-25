(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc5')
        .directive('comVyomVyomlibVc5Design', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/vc5/com-vyom-vyomlib-vc5-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
