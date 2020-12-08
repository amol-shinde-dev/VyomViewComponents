(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.custom-blog')
        .directive('comVyomVyomlibCustomBlogDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/custom-blog/com-vyom-vyomlib-custom-blog-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
