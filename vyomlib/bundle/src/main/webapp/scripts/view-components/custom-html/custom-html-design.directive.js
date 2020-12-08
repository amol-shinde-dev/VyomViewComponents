(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.custom-html')
    	.directive('comVyomVyomlibCustomHtmlDesign', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/custom-html/com-vyom-vyomlib-custom-html-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();