(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.iframe')
        .directive('comVyomVyomlibIframeDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/iframe/com-vyom-vyomlib-iframe-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();