(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.custom-card')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Custom Card',
                group: 'vyomlib',
                icon: 'at',
                type: 'com-vyom-vyomlib-custom-card',  
                designType: 'com-vyom-vyomlib-custom-card-design', 
                bundleId: 'com.vyom.vyomlib',

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