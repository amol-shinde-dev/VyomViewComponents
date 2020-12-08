(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.kanbanadv')
        .directive('comVyomVyomlibKanbanadvDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/kanbanadv/com-vyom-vyomlib-kanbanadv-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();