(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.iframe2')
        .directive('comVyomVyomlibIframe2', function ($sce) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/iframe2/com-vyom-vyomlib-iframe2.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    $scope.trustSrc = function(url) {
                        return $sce.trustAsResourceUrl(url);
                    };

                    $scope.url = $scope.rxConfiguration.propertiesByName.url;
                   
                   $scope.containerWidth= $scope.rxConfiguration.propertiesByName.containerWidth;
                    $scope.containerHeight= $scope.rxConfiguration.propertiesByName.containerHeight;
                    $scope.iframeWidth= $scope.rxConfiguration.propertiesByName.iframeWidth;
                    $scope.iframeHeight= $scope.rxConfiguration.propertiesByName.iframeHeight;
                    $scope.iframeTop= $scope.rxConfiguration.propertiesByName.iframeTop;
                    $scope.iframeRight= $scope.rxConfiguration.propertiesByName.iframeRight;
                }
            };
        });
})();