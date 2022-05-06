(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.custom-date-time-picker')
        .config(function (rxViewComponentProvider, RX_RECORD_DEFINITION) {
            var starRatingDescriptor = {
                name: 'Custom Calendar(Date/Time)',
                group: 'vyomlib',
                icon: 'calendar_clock_o',
                type: 'com-vyom-vyomlib-custom-date-time-picker', // the name of runtime directive
                designType: 'com-vyom-vyomlib-custom-date-time-picker-design', // register design directive
                designManagerService: 'comVyomVyomlibCustomDateTimePickerDesign',
                canBeEmbeddedInRecordEditor: true,

                bundleId: 'com.vyom.vyomlib',


                propertiesByName: [


                    {

                        name: 'label',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                },
                    {

                        name: 'value',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                }
                    , {

                        name: 'timeDisabled',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                }
                    , {

                        name: 'timeHidden',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                }, {

                        name: 'styles',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                },
                    {

                        name: 'minDate',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                },
                    {

                        name: 'maxDate',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                },
                    {

                        name: 'isRequiredField',
                        isConfig: true,

                },
                    {

                        name: 'dateOutput',
                        isProperty: true,

                },
                    {

                        name: 'currentTimezone',
                        isProperty: true,

                }

                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();
