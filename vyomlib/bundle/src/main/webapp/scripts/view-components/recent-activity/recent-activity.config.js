(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.recent-activity')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Recent Activity',
                    group: 'vyomlib',
                    icon: 'activity_feed_clock_o',
                    type: 'com-vyom-vyomlib-recent-activity',
                    designType: 'com-vyom-vyomlib-recent-activity-design',
                    designManagerService: 'comVyomVyomlibRecentActivityDesign',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        {
                            name: 'Label1',
                            isConfig: true, // Input parameter
                            isRequired: true,
                            enableExpressionEvaluation: true,


                        },
                        {
                            name: 'URL1',
                            isConfig: true, // Input parameter
                            enableExpressionEvaluation: true


                        },

                        {
                            name: 'Icon1',
                            isConfig: true, // Input parameter


                        },

                        {
                            name: 'Color1',
                            isConfig: true, // Input parameter


                        },

                        {
                            name: 'Label2',
                            isConfig: true, // Input parameter
                            enableExpressionEvaluation: true,
                            isRequired: true,


                        },
                        {
                            name: 'URL2',
                            isConfig: true, // Input parameter
                            enableExpressionEvaluation: true

                        },
                        {
                            name: 'Icon2',
                            isConfig: true, // Input parameter


                        },

                        {
                            name: 'Color2',
                            isConfig: true, // Input parameter


                        },

                        {
                            name: 'Label3',
                            isConfig: true, // Input parameter
                            enableExpressionEvaluation: true,
                            isRequired: true,


                        },
                        {
                            name: 'URL3',
                            isConfig: true, // Input parameter
                            enableExpressionEvaluation: true


                        },
                        {
                            name: 'Icon3',
                            isConfig: true, // Input parameter


                        },

                        {
                            name: 'Color3',
                            isConfig: true, // Input parameter


                        },

                ]
            }
        ]);
        });
})();
