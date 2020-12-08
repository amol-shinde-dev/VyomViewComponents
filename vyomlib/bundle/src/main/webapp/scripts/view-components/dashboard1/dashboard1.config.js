(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dashboard1')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Dashboard1',
                group: 'vyomlib',
                icon: 'at',
                type: 'com-vyom-vyomlib-dashboard1',  // the name of runtime directive
                designType: 'com-vyom-vyomlib-dashboard1-design', // register design directive
                designManagerService: 'comVyomVyomlibDashboard1Design',
                bundleId: 'com.vyom.vyomlib',

                // define component properties
                propertiesByName: [
                    {
                        name: 'recordDefinitionName',
                        type: 'string',
                        isConfig: true,     // Input parameter
                        isRequired: true,  // required
                    },
                    {
                        name: 'User',
                        type: 'string',
                        isConfig: true,     // Input parameter
                        isRequired: true,  // required
                    },
                    {
                        name: 'CheckedTraining',
                        type: 'string',
                        isConfig: true,     // Input parameter
                        isRequired: true,  // required
                    },
                    {
                        name: 'Colour',
                        isConfig: true,
                        type: 'string'
                    },
                    {
                        name: 'trainingName',
                        isProperty: true, //Output parameter
                        isConfig: false,
                        isRequired: false
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();