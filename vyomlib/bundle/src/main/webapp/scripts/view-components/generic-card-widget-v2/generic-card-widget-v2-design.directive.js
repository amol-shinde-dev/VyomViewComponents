(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.generic-card-widget-v2')
        .directive('comVyomVyomlibGenericCardWidgetV2Design', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/generic-card-widget-v2/com-vyom-vyomlib-generic-card-widget-v2-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
