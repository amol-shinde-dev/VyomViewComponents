(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.event-calendar')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Event Calendar',
                    group: 'vyomlib',
                    icon: 'calendar_server',
                    type: 'com-vyom-vyomlib-event-calendar',
                    designType: 'com-vyom-vyomlib-event-calendar-design',
                    designManagerService: 'comVyomVyomlibEventCalendarDesign',
                    bundleId: 'com.vyom.vyomlib',
                    canBeEmbeddedInRecordEditor: true,
                    propertiesByName: [
                        {

                            name: 'recordDefinitionFullName',
                            isConfig: true,
                            isRequired: true

                    }, {

                            name: 'eventName',
                            isConfig: true,


                    }, {

                            name: 'startDate',
                            isConfig: true,


                    }, {

                            name: 'endDate',
                            isConfig: true,


                    },
                        {

                            name: 'url',
                            isConfig: true,




                    },
                        {

                            name: 'filterExp',
                            isConfig: true,
                            enableExpressionEvaluation: true,


                    },

                        {

                            name: 'calendarInstance',
                            isConfig: true,




                        },

                        {

                            name: 'buttonGuid',
                            isConfig: true,




                        },
                        {

                            name: 'availabiltySeats',
                            isConfig: true,




                    },
                        {

                            name: 'eventInstanceId',
                            isProperty: true,


                        },





                ]
            }
        ]);
        });
})();
