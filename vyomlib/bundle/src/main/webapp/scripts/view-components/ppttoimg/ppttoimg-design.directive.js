(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.ppttoimg')
        .directive('comVyomVyomlibPpttoimgDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/ppttoimg/com-vyom-vyomlib-ppttoimg-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
