(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.portal-preview')
        .directive('comVyomVyomlibPortalPreviewDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/portal-preview/com-vyom-vyomlib-portal-preview-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
