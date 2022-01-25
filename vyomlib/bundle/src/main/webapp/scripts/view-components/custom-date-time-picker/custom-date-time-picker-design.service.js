(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.custom-date-time-picker').factory('comVyomVyomlibCustomDateTimePickerDesign', function (comVyomVyomlibCustomDateTimePickerModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }


        function getRxData(componentDefinition, componentDescriptor) {


            return {

                label: componentDefinition.propertiesByName.label,
                value: componentDefinition.propertiesByName.value,
                timeDisabled: (componentDefinition.propertiesByName.timeDisabled == 'true') ? true : false,
                timeHidden: (componentDefinition.propertiesByName.timeHidden == 'true') ? true : false,
                styles: componentDefinition.propertiesByName.styles,
                minDate: componentDefinition.propertiesByName.minDate,
                maxDate: componentDefinition.propertiesByName.maxDate

            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {

                        label: {
                            label: "Display Label",
                            type: "rx-inspector-expression-node-field",
                            group: "general",
                            index: 1
                        },
                        value: {
                            label: "Value",
                            type: "rx-inspector-expression-node-field",
                            tooltip: "format(yyyy-MM-dd HH:mm:ss)",
                            group: "general",
                            index: 2
                        },
                        timeDisabled: {
                            label: "Time Disabled",
                            type: "rx-inspector-optional-expression",
                            group: "general",
                            index: 3,

                        },
                        timeHidden: {
                            label: "Time Hidden",
                            type: "rx-inspector-optional-expression",
                            group: "general",
                            index: 4
                        },
                        styles: {
                            label: "CSS Classes",
                            placeholderText: "Add CSS classes",
                            type: "rx-inspector-tag-input",
                            tooltip: "Enter custom CSS classes to apply to this view component.",
                            live: !1,
                            group: "general",
                            index: 5
                        },
                        minDate: {
                            label: "Min Date",
                            type: "rx-inspector-expression-node-field",
                            tooltip: "format(yyyy-MM-dd HH:mm:ss)",
                            group: "general",
                            index: 6
                        },
                        maxDate: {
                            label: "maxDate",
                            type: "rx-inspector-expression-node-field",
                            tooltip: "format(yyyy-MM-dd HH:mm:ss)",
                            group: "general",
                            index: 7
                        },
                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            // should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibCustomDateTimePickerModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
