(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.pwidget')
        .directive('comVyomVyomlibPwidgetDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/pwidget/com-vyom-vyomlib-pwidget-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
