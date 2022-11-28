// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.event-calendar').factory('comVyomVyomlibEventCalendarDesign', function (comVyomVyomlibEventCalendarModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Innovation Studio parameters.
        // We can also setup default values.
        function getRxData(componentDefinition, componentDescriptor) {


            return {

                recordDefinitionFullName: componentDefinition.propertiesByName.recordDefinitionFullName,
                eventName: componentDefinition.propertiesByName.eventName,
                startDate: componentDefinition.propertiesByName.startDate,
                endDate: componentDefinition.propertiesByName.endDate,
                url: componentDefinition.propertiesByName.url,
                filterExp: componentDefinition.propertiesByName.filterExp,
                calendarInstance: componentDefinition.guid || rxGUID.generate(),
                buttonGuid: componentDefinition.propertiesByName.buttonGuid,
                availabiltySeats: componentDefinition.propertiesByName.availabiltySeats


            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {

                        recordDefinitionFullName: {
                            label: 'Record Definition Name',
                            type: 'rx-inspector-definition-picker',
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.record.type,
                            group: 'General',
                            index: 1
                        },
                        eventName: {
                            label: 'Event Name',
                            type: 'com-vyom-vyomlib-inspector-event-calendar-fields',
                            group: 'General',
                            index: 2
                        },
                        startDate: {
                            label: 'Start Date',
                            type: 'com-vyom-vyomlib-inspector-event-calendar-fields',
                            group: 'General',
                            index: 3
                        },

                        endDate: {
                            label: 'End Date',
                            type: 'com-vyom-vyomlib-inspector-event-calendar-fields',
                            group: 'General',
                            index: 4
                        },

                        url: {
                            label: 'URL',
                            type: 'com-vyom-vyomlib-inspector-event-calendar-fields',
                            group: 'General',
                            index: 5

                        },

                        filterExp: {
                            label: 'Filter',
                            type: 'rx-inspector-expression-node-field',
                            group: 'General',
                            index: 6
                        },
                        calendarInstance: {
                            label: 'Calendar Instance',
                            type: 'rx-inspector-expression-node-field',
                            group: 'General',
                            index: 7
                        },
                        buttonGuid: {
                            label: 'Button Guid',
                            type: 'rx-inspector-expression-node-field',
                            group: 'General',
                            index: 8
                        },
                        availabiltySeats: {
                            label: 'Availabilty Seats',
                            type: 'com-vyom-vyomlib-inspector-event-calendar-fields',
                            group: 'General',
                            index: 9
                        }

                    }
                },
                groups: {

                    General: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibEventCalendarModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
