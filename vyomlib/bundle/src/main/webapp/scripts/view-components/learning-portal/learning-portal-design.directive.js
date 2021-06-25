(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.learning-portal')
        .directive('comVyomVyomlibLearningPortalDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/learning-portal/com-vyom-vyomlib-learning-portal-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
