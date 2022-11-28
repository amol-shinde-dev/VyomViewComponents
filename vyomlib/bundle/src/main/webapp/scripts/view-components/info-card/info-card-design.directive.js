(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.info-card')
        .directive('comVyomVyomlibInfoCardDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/info-card/com-vyom-vyomlib-info-card-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
