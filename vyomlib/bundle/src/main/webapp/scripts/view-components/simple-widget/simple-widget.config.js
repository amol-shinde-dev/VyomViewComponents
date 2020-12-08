(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.simple-widget')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Simple Widget',
                    group: 'vyomlib',
                    icon: 'word_square',
                    type: 'com-vyom-vyomlib-simple-widget',
                    designType: 'com-vyom-vyomlib-simple-widget-design',
                    bundleId: 'com.vyom.vyomlib',

                    propertiesByName: [
                        {
                            name: 'URL1',
                            type: 'string',
                            isConfig: true,     // Input parameter
                          //  isProperty: false,  // Not an output parameter
                            // isRequired: true,  // required
                           // enableExpressionEvaluation: true    // The expression will be evaluated.
                        },
                        {
                            name: 'URL2',
                            type: 'string',
                            isConfig: true,     // Input parameter
                            // isProperty: true,  // Not an output paramete
                            // isRequired: true,  // required
                           // enableExpressionEvaluation: true    // The expression will be evaluated.
                        },
                        {
                            name: 'URL3',
                            type: 'string',
                            isConfig: false,
                            // isProperty: true, //output parameter
                            isRequired: false, //not required
                        },
                        {
                            name: 'URL4',
                            type: 'string',
                            isConfig: false,
                            // isProperty: true, //output parameter
                            isRequired: false, //not required
                        },
  
                        {  
                            name: 'ViewGuid1',
                            type: 'string',
                            isConfig: true,     // Input parameter
                            isProperty: false,  // Not an output parameter
                            isRequired: true,  // Not required
                            enableExpressionEvaluation: true    // The expression will be evaluated.
                          },
                    ]
                }
            ]);
        });
})();