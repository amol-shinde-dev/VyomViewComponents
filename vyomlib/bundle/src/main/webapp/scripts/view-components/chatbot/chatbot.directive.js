(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.chatbot')
        .directive('comVyomVyomlibChatbot', function ($sce) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/chatbot/com-vyom-vyomlib-chatbot.directive.html',

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