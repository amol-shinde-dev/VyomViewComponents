(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.comment-box')
        .directive('comVyomVyomlibCommentBoxDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/comment-box/com-vyom-vyomlib-comment-box-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
