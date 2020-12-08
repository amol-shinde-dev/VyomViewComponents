(function () {
    'use strict';
    
    angular.module('com.vyom.vyomlib.view-components.kanban2')
        .directive('comVyomVyomlibKanban2Design', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/kanban2/com-vyom-vyomlib-kanban2-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();