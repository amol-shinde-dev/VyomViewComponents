(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.landing-console')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Landing Console',
                    group: 'vyomlib',
                    icon: 'field_autocomplete_search',
                    type: 'com-vyom-vyomlib-landing-console',
                    designType: 'com-vyom-vyomlib-landing-console-design',
                    designManagerService: 'comVyomVyomlibLandingConsoleDesign',
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
                            name: 'adminConfigurationLabel',
                            type: "string",
                            isConfig: true,
                            defaultValue: '"Published"',
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
                            name: 'cardBottomActionGuid',
                            isConfig: true,
            },

                        {

                            name: 'cardActionGuid',
                            isConfig: true,

}, {

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

                            name: 'Greetings',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },
                        {

                            name: 'titleColor',
                            isConfig: true,

                    },
                        {
                            name: 'search',
                            isConfig: true,
                            enableExpressionEvaluation: true
            },
                        {

                            name: 'BannerRecordDefinition',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    },
                        {

                            name: 'BannerInstanceId',
                            isConfig: true,

                            enableExpressionEvaluation: true

                    },

                        {

                            name: 'BannerImage',
                            isConfig: true,

                            enableExpressionEvaluation: true
                    },
                        {

                            name: 'BannerURL',
                            isConfig: true,
                            enableExpressionEvaluation: true
                    },
                        {

                            name: 'BannerCaption',
                            isConfig: true,
                            enableExpressionEvaluation: true
                    },
                        {

                            name: 'BannerSubCaption',
                            isConfig: true,
                            enableExpressionEvaluation: true
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

                        {

                            name: 'DataSet1Label',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    }, {

                            name: 'DataSet1',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    }, {

                            name: 'DataSet1Field',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },
                        {

                            name: 'dataset1searchfield',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },
                        {

                            name: 'dataset1displayfield',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },

                        {

                            name: 'DataSet2Label',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    }, {

                            name: 'DataSet2',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    }, {

                            name: 'DataSet2Field',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },

                        {

                            name: 'dataset2searchfield',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },
                        {

                            name: 'dataset2displayfield',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },





                ]
            }
        ]);
        });
})();
