(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.menubaradv')
        .directive('comVyomVyomlibMenubaradvDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/menubaradv/com-vyom-vyomlib-menubaradv-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();