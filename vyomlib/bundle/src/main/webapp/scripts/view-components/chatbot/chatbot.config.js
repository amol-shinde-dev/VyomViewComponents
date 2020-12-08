(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.chatbot')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'chatbot',
                    group: 'vyomlib',
                    icon: 'layout_preview',
                    type: 'com-vyom-vyomlib-chatbot',
                    designType: 'com-vyom-vyomlib-chatbot-design',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        {
                            name: 'url',
                            label: 'Url',
                            isConfig: true,
                            isRequired: true,
                            enableExpressionEvaluation: true
                        }
                    ]
                }
            ]);
        });
})();