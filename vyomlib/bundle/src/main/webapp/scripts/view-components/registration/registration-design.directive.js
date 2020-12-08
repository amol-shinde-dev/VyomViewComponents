(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.registration')
        .directive('comVyomVyomlibRegistrationDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/registration/com-vyom-vyomlib-registration-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();