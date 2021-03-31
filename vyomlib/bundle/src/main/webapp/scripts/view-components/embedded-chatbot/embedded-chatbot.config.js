(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.embedded-chatbot')
        .config(function (rxViewComponentProvider) {
            var accessGridDescriptor = {
                name: 'Embedded Chatbot',
                group: 'vyomlib',
                icon: 'android',
                type: 'com-vyom-vyomlib-embedded-chatbot',
                designType: 'com-vyom-vyomlib-embedded-chatbot-design',
                canBeEmbeddedInRecordEditor: true,
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
                    {
                        name: 'baseUrl',
                        isConfig: true,
                        isRequired: true,
                        enableExpressionEvaluation: true,
                        editor: 'rx-expression-field'
                    },
                    {
                        name: 'chatbotId',
                        isConfig: true,
                        isRequired: true,
                        enableExpressionEvaluation: true,
                        editor: 'rx-expression-field'
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(accessGridDescriptor);
        });
})();
