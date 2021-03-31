(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.embedded-chatbot').directive('comVyomVyomlibEmbeddedChatbot',
        function ($timeout) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/embedded-chatbot/com-vyom-vyomlib-embedded-chatbot.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config = $scope.rxConfiguration.propertiesByName;

                    $scope.botId = _config.chatbotId;

                    function prepareChatbot() {
                        displayChatbotIconInView(_config.baseUrl);
                    }

                    if (typeof displayChatbotIconInView === 'function') {
                        $timeout(prepareChatbot);
                    } else {
                        console.log('Cannot find method displayChatbotIconInView.');
                    }
                }
            };
        });
})();
