(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.custom-card')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Custom Card',
                group: 'vyomlib',
                icon: 'at',
                type: 'com-vyom-vyomlib-custom-card',  // the name of runtime directive
                designType: 'com-vyom-vyomlib-custom-card-design', // register design directive
                bundleId: 'com.vyom.vyomlib',

                // define component properties
                propertiesByName: [
                    {
                        name: 'Colour',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'Height',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'Width',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'Icon',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'ImgHeight',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'ImgWidth',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'Text',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'URL',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'outputParameter',
                        isConfig: false,
                        isProperty: true
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();