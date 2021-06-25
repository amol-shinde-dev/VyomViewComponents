(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.iframe')
        .directive('comVyomVyomlibIframe', function ($sce) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/iframe/com-vyom-vyomlib-iframe.directive.html',

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