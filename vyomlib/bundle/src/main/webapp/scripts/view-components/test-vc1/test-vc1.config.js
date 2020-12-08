(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.test-vc1')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Hierarchy',
                    group: 'vyomlib',
                    icon: 'word_square',
                    type: 'com-vyom-vyomlib-test-vc1',
                    designType: 'com-vyom-vyomlib-test-vc1-design',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        // {
                        //     name: 'inputParameter',
                        //     type: 'string',
                        //     isConfig: true,     // Input parameter
                        //     isRequired: true,  // required
                        // },
                        // {
                        //     name: 'inputColor',
                        //     type: 'string',
                        //     isConfig: true,     // Input parameter
                        //     isRequired: true,  // required
                        // },
                        // {
                        //     name: 'outputParameter',
                        //     type: 'string',
                        //     isConfig: false,
                        //     isProperty: true, //output parameter
                        //     isRequired: false, //not required
                        // }
                    ]
                }
            ]);
        });
})();