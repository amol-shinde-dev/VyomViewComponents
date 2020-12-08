(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.registration')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Registration',
                    group: 'Vyomlib',
                    icon: 'word_square',
                    type: 'com-vyom-vyomlib-registration',
                    designType: 'com-vyom-vyomlib-registration-design',
                    bundleId: 'com.vyom.vyomlib',
                    // propertiesByName: [
                    //     {
                    //         name: 'inputParameter',
                    //         type: 'string',
                    //         isConfig: true,     // Input parameter
                    //         //  isProperty: false,  // Not an output parameter
                    //         isRequired: true,  // required
                    //         // enableExpressionEvaluation: true    // The expression will be evaluated.
                    //     },
                    //     {
                    //         name: 'inputColor',
                    //         type: 'string',
                    //         isConfig: true,     // Input parameter
                    //         // isProperty: true,  // Not an output paramete
                    //         isRequired: true,  // required
                    //         // enableExpressionEvaluation: true    // The expression will be evaluated.
                    //     },
                    //     {
                    //         name: 'outputParameter',
                    //         type: 'string',
                    //         isConfig: false,
                    //         isProperty: true, //output parameter
                    //         isRequired: false, //not required
                    //     }
                    // ]
                }
            ]);
        });
})();