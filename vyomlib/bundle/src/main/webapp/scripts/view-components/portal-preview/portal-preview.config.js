(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.portal-preview')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Portal Preview',
                    group: 'vyomlib',
                    icon: 'app_arrow_chart_up',
                    type: 'com-vyom-vyomlib-portal-preview',
                    designType: 'com-vyom-vyomlib-portal-preview-design',
                    designManagerService: 'comVyomVyomlibPortalPreviewDesign',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        {

                            name: 'recordDefinitionFullName',
                            isConfig: true,

                    },
                        {

                            name: 'ApplicationName',
                            isConfig: true,

                    },
                        {

                            name: 'Description',
                            isConfig: true,

                    }, {

                            name: 'Color',
                            isConfig: true,

                    }, {

                            name: 'tooltipHeader',
                            isConfig: true,

                    }, {

                            name: 'Icon',
                            isConfig: true,

                    }, {

                            name: 'tooltipDescription',
                            isConfig: true,

                    },
                        {
                            name: 'recordFlag',
                            isProperty: true, //Output parameter
                            isConfig: false,
                            enableExpressionEvaluation: true,
            },
                        {
                            name: 'adminConfiguration',
                            type: "boolean",
                            isConfig: true,
                            enableExpressionEvaluation: true
            },
                        {
                            name: 'cardVisible',
                            isConfig: true,
            },
                        {
                            name: 'cardErrorInformation',
                            isConfig: true,
            },
                        {
                            name: 'cardStatusNamedList',
                            isConfig: true,
            },

                        {
                            name: 'userApplicationNamedList',
                            isConfig: true,
            },

                        {

                            name: 'cardActionGuid',
                            isConfig: true,

},
                        {

                            name: 'cardSorting',
                            isConfig: true,

},
                        {

                            name: 'cardOrder',

                            isConfig: true,


},

                        {

                            name: 'cardStatus',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },
                        {

                            name: 'cardFavourite',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    }, {

                            name: 'cardScope',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    },
                        {

                            name: 'FilterExp',
                            isConfig: true,

                    },


                        {

                            name: 'SearchColor',
                            isConfig: true,

                    },
                        {

                            name: 'Greetings',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },
                        {

                            name: 'titleColor',
                            isConfig: true,

                    },
                        {

                            name: 'BannerURL',
                            isConfig: true,

                    },
                        {

                            name: 'BannerImage',
                            isConfig: true,

                    },

                        {

                            name: 'BannerScrollSpeed',
                            isConfig: true,
                            enableExpressionEvaluation: true,
                            defaultValue: "6000"

                    },
                        {

                            name: 'Views',
                            isConfig: true,

                    },
                        {

                            name: 'rateMeActionGuid',
                            isConfig: true,

                    },
                        {

                            name: 'ratingCount',
                            isConfig: true,

                    },
                        {

                            name: 'CardInstanceId',
                            isProperty: true,

                    },
                        {

                            name: 'CategoryField',
                            isConfig: true,
                    },
                        {

                            name: 'Category1',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    }, {

                            name: 'Category2',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    }, {

                            name: 'Category3',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    }, {

                            name: 'Category4',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    }, {

                            name: 'Category5',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    }, {

                            name: 'Category6',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    }, {

                            name: 'Category7',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    }, {

                            name: 'Category8',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    },
                        {

                            name: 'CategoryColor',
                            isConfig: true

                    },



                ]
            }
        ]);
        });
})();
