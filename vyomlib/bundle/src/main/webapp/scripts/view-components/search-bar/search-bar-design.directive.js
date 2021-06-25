(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.search-bar').directive('comVyomVyomlibSearchBarDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/search-bar/com-vyom-vyomlib-search-bar-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();