(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.search-bar')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Search Bar ',
                group: 'vyomlib',
                icon: 'table_plug',
                type: 'com-vyom-vyomlib-search-bar', // the name of runtime directive
                designType: 'com-vyom-vyomlib-search-bar-design', // register design directive
                designManagerService: 'comVyomVyomlibSearchBarDesign',
                bundleId: 'com.vyom.vyomlib',

                // define component input parameters
                propertiesByName: [
                    {
                        name: 'recordDefinitionName',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                    },
                    {
                        name: 'textFieldID',
                        isConfig: true,
                        type: "string",
                        isRequired: false
                    },
                    {
                        name: 'icon',
                        isConfig: true,
                        type: "string",
                        isRequired: false
                    },
                    {
                        name: 'serviceRequestURL',
                        isConfig: true,
                        type: "string",
                        isRequired: false
                    },
                    {
                        name: 'category',
                        isConfig: true,
                        type: "string",
                        isRequired: false
                    },
                    {
                        name: 'policyrecordDefinitionName',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                    },
                    {
                        name: 'policyname',
                        isConfig: true,
                        type: "string",
                        isRequired: false
                    },
                    {
                        name: 'policyurl',
                        isConfig: true,
                        type: "string",
                        isRequired: false
                    },
                    {
                        name: 'policyIcon',
                        isConfig: true,
                        type: "string",
                        isRequired: false
                    },
                    {
                        name: 'articlerecordDefinitionName',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                    },
                    {
                        name: 'articlename',
                        isConfig: true,
                        type: "string",
                        isRequired: false
                    },
                    {
                        name: 'articleurl',
                        isConfig: true,
                        type: "string",
                        isRequired: false
                    },
                    {
                        name: 'articleIcon',
                        isConfig: true,
                        type: "string",
                        isRequired: false
                    }
                    /*,
                                        {
                                            name: 'searchText',
                                            isConfig: true,
                                            type: "string",
                                            isRequired: false
                                        }*/
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();
