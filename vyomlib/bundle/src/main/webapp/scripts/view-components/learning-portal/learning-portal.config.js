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

                            name: 'regionName',
                            isConfig: true,

                    },
                        {

                            name: 'supplierName',
                            isConfig: true,

                    },
                        {

                            name: 'deliveryMethod',
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

                            name: 'cost',
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
                            isConfig: true,

                    },
                        {

                            name: 'searchPlaceholder',
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
                            isConfig: true

                    },
                        {

                            name: 'firstDropDownRecordDefinition',
                            isConfig: true

                    },

                        {

                            name: 'secondDropDownDisplayField',
                            isConfig: true

                    },
                        {

                            name: 'secondDropDownRecordDefinition',
                            isConfig: true

                    },
                        {

                            name: 'thirdDropDownDisplayField',
                            isConfig: true

                    },
                        {

                            name: 'thirdDropDownRecordDefinition',
                            isConfig: true

                    },
                        {

                            name: 'fourthDropDownDisplayField',
                            isConfig: true

                    },
                        {

                            name: 'fourthDropDownRecordDefinition',
                            isConfig: true

                    },
                        {

                            name: 'fifthDropDownDisplayField',
                            isConfig: true

                    },
                        {

                            name: 'fifthDropDownRecordDefinition',
                            isConfig: true

                    },
                        {

                            name: 'sixthDropDownRecordDefinition',
                            isConfig: true

                    },
                        {

                            name: 'sixthDropDownDisplayField',
                            isConfig: true

                    },
                        {

                            name: 'sixthDropDownStoredField',
                            isConfig: true

                    },


                ]
            }
        ]);
        });
})();
