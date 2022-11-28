(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.icona-v2')
        .directive('comVyomVyomlibIconaV2Design', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/icona-v2/com-vyom-vyomlib-icona-v2-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
