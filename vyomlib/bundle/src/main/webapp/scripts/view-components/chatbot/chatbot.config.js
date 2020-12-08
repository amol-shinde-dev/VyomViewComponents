(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.chatbot')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Chatbot',
                group: 'vyomlib',
                icon: 'at',
                type: 'com-vyom-vyomlib-chatbot',  // the name of runtime directive
                designType: 'com-vyom-vyomlib-chatbot-design', // register design directive
                bundleId: 'com.vyom.vyomlib',

                // define component properties
                propertiesByName: [

                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();