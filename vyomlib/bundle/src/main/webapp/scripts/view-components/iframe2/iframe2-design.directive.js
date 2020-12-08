(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.iframe2')
        .directive('comVyomVyomlibIframe2Design', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/iframe2/com-vyom-vyomlib-iframe2-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();