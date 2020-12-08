(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.mypageadv')
        .directive('comVyomVyomlibMypageadv', function ($sce) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/mypageadv/com-vyom-vyomlib-mypageadv.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    $scope.trustSrc = function(url) {
                        return $sce.trustAsResourceUrl(url);
                    };

                    $scope.url = $scope.rxConfiguration.propertiesByName.url;
                }
            };
        });
})();