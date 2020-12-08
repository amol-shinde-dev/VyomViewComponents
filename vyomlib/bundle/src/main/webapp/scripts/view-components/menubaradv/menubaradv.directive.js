(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.menubaradv')
        .directive('comVyomVyomlibMenubaradv', function ($sce) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/menubaradv/com-vyom-vyomlib-menubaradv.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    $scope.trustSrc = function (url) {
                        return $sce.trustAsResourceUrl(url);
                    };

                    $scope.url = $scope.rxConfiguration.propertiesByName.url;
                }
            };
        });
})();