(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.dynamic-category')
        .directive('comVyomVyomlibDynamicCategoryDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/dynamic-category/com-vyom-vyomlib-dynamic-category-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
