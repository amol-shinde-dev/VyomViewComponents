(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.hierarchy')
        .directive('comVyomVyomlibHierarchyDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/hierarchy/com-vyom-vyomlib-hierarchy-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
