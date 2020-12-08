(function () {
    'use strict';
    
    angular.module('com.vyom.vyomlib.view-components.kanban1')
        .directive('comVyomVyomlibKanban1Design', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/kanban1/com-vyom-vyomlib-kanban1-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();