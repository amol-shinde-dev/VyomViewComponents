// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.kanbanadv').factory('comVyomVyomlibKanbanadvDesign',
        function (comVyomVyomlibKanbanadvModel, rxGUID, RX_DEFINITION_PICKER) {
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
                // var defaultMBGColor = _.find(componentDescriptor.propertiesByName, {
                //     name: 'color'
                // }).defaultValue;

                return {
                    recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                    ID: componentDefinition.propertiesByName.ID,
                    summary: componentDefinition.propertiesByName.summary
                };
            }

            // Defining the parameters types with helper.
            function getRxInspector() {
                return {
                    inputs: {
                        rxData: {
                            recordDefinitionName: {
                                label: 'Record Definition Name',
                                type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                                definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                                group: 'general',
                                index: 1
                            },
                            ID: {
                                label: 'ID',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 2
                            },
                            summary: {
                                label: 'summary',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 3
                            },
                            priority: {
                                label: 'priority',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 4
                            },
                            dropcardworking_GUID: {
                                label: 'dropcardworking_GUID',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 5
                            },
                            ViewGuid: {
                                label: 'ViewGuid',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 6
                            },
                            CreateTicket: {
                                label: 'CreateTicket',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 7
                            },
                            Status: {
                                label: 'Status',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 8
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
                //  should return a model instance
                getModel: function (componentDefinition, componentDescriptor) {
                    return new comVyomVyomlibKanbanadvModel(getRxConfig(componentDefinition, componentDescriptor));
                }
            };
        });
})();