(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.embedded-chatbot').directive('comVyomVyomlibEmbeddedChatbotDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/embedded-chatbot/com-vyom-vyomlib-embedded-chatbot-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();
