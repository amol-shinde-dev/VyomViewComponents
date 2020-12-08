(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.mypageadv')
        .directive('comVyomVyomlibMypageadvDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/mypageadv/com-vyom-vyomlib-mypageadv-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();