(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.kanban1')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Kanban1',
                group: 'vyomlib',
                icon: 'at',
                type: 'com-vyom-vyomlib-kanban1',  // the name of runtime directive
                designType: 'com-vyom-vyomlib-kanban1-design', // register design directive
                bundleId: 'com.vyom.vyomlib',

                // define component properties
                propertiesByName: [
                    {
                        name: 'Colour',
                        isConfig: true,
                        type: 'string'

                    },

                  {  
                    name: 'buttonGuid1',
                    type: 'string',
                    isConfig: true,     // Input parameter
                    isProperty: false,  // Not an output parameter
                    isRequired: true,  // Not required
                    enableExpressionEvaluation: true    // The expression will be evaluated.
                  },
                  {  
                    name: 'ViewGuid',
                    type: 'string',
                    isConfig: true,     // Input parameter
                    isProperty: false,  // Not an output parameter
                    isRequired: true,  // Not required
                    enableExpressionEvaluation: true    // The expression will be evaluated.
                  },
                  {  
                    name: 'CreateTicket',
                    type: 'string',
                    isConfig: true,     // Input parameter
                    isProperty: false,  // Not an output parameter
                    isRequired: true,  // Not required
                    enableExpressionEvaluation: true    // The expression will be evaluated.
                  }
                    
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();