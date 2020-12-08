(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc13')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'Custom Button',
                group: 'vyomlib',
                icon: 'internet_plus_circle',
                type: 'com-vyom-vyomlib-vc13',  
                designType: 'com-vyom-vyomlib-vc13-design', 
                designManagerService: 'comVyomVyomlibVc13Design',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
                 
                        {
                            name: 'buttonGuid',
                            type: 'string',
                            isConfig: true,     // Input parameter
                            isProperty: false,  // Not an output parameter
                            isRequired: true,  // Not required
                            enableExpressionEvaluation: true    // The expression will be evaluated.
                        },
                        {
                            name: 'buttonlabel',
                            type: 'string',
                            isConfig: true,     // Input parameter
                            isProperty: false,  // Not an output parameter
                            isRequired: true,  // Not required
                            enableExpressionEvaluation: true,    // The expression will be evaluated.
                            defaultValue: '"ActionButton"'
                        },
                        {
                            name: 'buttonColor',
                            isConfig: true,
                            isRequired: true,
                            defaultValue: '#ff9805'
                        },
                        {
                            name: 'buttonTextColor',
                            isConfig: true,
                            isRequired: true,
                            defaultValue: '#4CAF50'
                        },
                        {
                            name: 'buttonSize',
                            isConfig: true,
                            isRequired: true,
                            defaultValue: '16'
                        }



                ]
            }
        ]);
    });
})();