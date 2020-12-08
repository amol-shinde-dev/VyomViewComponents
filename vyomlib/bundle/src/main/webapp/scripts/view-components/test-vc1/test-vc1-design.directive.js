(function () {
    'use strict';
    
    angular.module('com.vyom.vyomlib.view-components.test-vc1')
        .directive('comVyomVyomlibTestVc1Design', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/test-vc1/com-vyom-vyomlib-test-vc1-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();