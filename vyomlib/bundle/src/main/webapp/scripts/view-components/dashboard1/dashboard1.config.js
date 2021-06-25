(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dashboard1')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Know Me',
                group: 'vyomlib',
                icon: 'cloud_user',
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
                    }, {
                        name: 'trainingName',
                        isProperty: true, //Output parameter
                        isConfig: false,
                        isRequired: false
                    }, {
                        name: 'skillId',
                        isProperty: true, //Output parameter
                        isConfig: false, //input param
                        isRequired: false
                    }, {
                        name: 'secondCardTitle',
                        isProperty: false, //Output parameter
                        isConfig: true, //input param
                        isRequired: true
                    }, {
                        name: 'attachmentFieldId',
                        isProperty: false, //Output parameter
                        isConfig: true, //input param
                        isRequired: false
                    }, {
                        name: 'color1',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'text1',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'icon1',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'url1',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'description1',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'color2',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'text2',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'icon2',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'url2',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'description2',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'color3',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'text3',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'icon3',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'url3',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'description3',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'color4',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'text4',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'icon4',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'url4',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'description4',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'color5',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'text5',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'icon5',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'url5',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'description5',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'color6',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'text6',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'icon6',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'url6',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'description6',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'buttonGuid1',
                        type: 'string',
                        isConfig: true,
                    }, {
                        name: 'buttonGuid2',
                        type: 'string',
                        isConfig: true,
                    }

                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();