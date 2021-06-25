(function() {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.service-health')
        .directive('comVyomVyomlibServiceHealthDesign', function() {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/service-health/com-vyom-vyomlib-service-health-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();