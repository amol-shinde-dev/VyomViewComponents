(function () {
    'use strict';
    
    angular.module('com.vyom.vyomlib.view-components.custom-card')
        .directive('comVyomVyomlibCustomCardDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/custom-card/com-vyom-vyomlib-custom-card-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();