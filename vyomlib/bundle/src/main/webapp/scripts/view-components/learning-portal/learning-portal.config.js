(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.learning-portal')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Learning Portal',
                    group: 'vyomlib',
                    icon: 'training_room',
                    type: 'com-vyom-vyomlib-learning-portal',
                    designType: 'com-vyom-vyomlib-learning-portal-design',
                    designManagerService: 'comVyomVyomlibLearningPortalDesign',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        {

                            name: 'recordDefinitionFullName',
                            isConfig: true,

                    },
                        {

                            name: 'courseName',
                            isConfig: true,

                    },


                        {

                            name: 'supplierName',
                            isConfig: true,

                    },

                        {

                            name: 'supplierRating',
                            isConfig: true,

                    },
                        {

                            name: 'courseRating',
                            isConfig: true,

                    },
                        {

                            name: 'costPerHoursSuffix',
                            enableExpressionEvaluation: true,
                            isConfig: true,

                    },
                        {

                            name: 'totalCostPerHoursSuffix',
                            enableExpressionEvaluation: true,
                            isConfig: true,

                    },

                        {
                            name: 'perRowCardLength',
                            isConfig: true,
            },
                        {
                            name: 'cssClassesd',
                            isConfig: true,
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

                            name: 'BannerHeight',
                            defaultValue: 400,
                            isConfig: true,
                            enableExpressionEvaluation: true
                    },
                        {

                            name: 'greetings',
                            enableExpressionEvaluation: true,
                            isConfig: true,

                    },
                        {

                            name: 'searchPlaceholder',
                            enableExpressionEvaluation: true,
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

                            name: 'FilterExp',
                            isConfig: true,
                    },


                        {

                            name: 'supplierRating',
                            isConfig: true,

                    },


                        {

                            name: 'CardInstanceId',
                            isProperty: true,

                    },

                        {

                            name: 'firstDropDownDisplayField',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },
                        {

                            name: 'firstDropDownRecordDefinition',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },

                        {

                            name: 'secondDropDownDisplayField',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },
                        {

                            name: 'secondDropDownRecordDefinition',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },
                        {

                            name: 'thirdDropDownDisplayField',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },
                        {

                            name: 'thirdDropDownRecordDefinition',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },

                        {

                            name: 'fourthDropDownRecordDefinition',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },
                        {

                            name: 'fourthDropDownDisplayField',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },
                        {

                            name: 'fourthDropDownStoredField',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },

                        {

                            name: 'fifthDropDownRecordDefinition',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },
                        {

                            name: 'fifthDropDownDisplayField',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },
                        {

                            name: 'fifthDropDownStoredField',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },

                        {

                            name: 'sixthDropDownRecordDefinition',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },
                        {

                            name: 'sixthDropDownDisplayField',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },
                        {

                            name: 'sixthDropDownStoredField',
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },


                ]
            }
        ]);
        });
})();
