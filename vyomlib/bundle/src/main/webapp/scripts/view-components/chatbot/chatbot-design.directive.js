(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.chatbot')
        .directive('comVyomVyomlibChatbotDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/chatbot/com-vyom-vyomlib-chatbot-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();