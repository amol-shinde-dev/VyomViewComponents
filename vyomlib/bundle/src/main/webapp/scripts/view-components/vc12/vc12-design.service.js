// This code is run at "design" phase, in BmcDashboard Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc12').factory('comVyomVyomlibVc12Design', function (comVyomVyomlibVc12Model, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Lab2 Studio parameters.
        // We can also setup default values.
        function getRxData(componentDefinition, componentDescriptor) {

            return {
                processDefinitionName: componentDefinition.propertiesByName.processDefinitionName,
                //processInputVariable: componentDefinition.propertiesByName.processInputVariable,
                /* processInputPredictiveTicketID: componentDefinition.propertiesByName.processInputPredictiveTicketID,
                processInputCompany: componentDefinition.propertiesByName.processInputCompany,
                processInputSource: componentDefinition.propertiesByName.processInputSource,
                processInputService: componentDefinition.propertiesByName.processInputService,
                processInputCI: componentDefinition.propertiesByName.processInputCI,
                processInputCICategoryType: componentDefinition.propertiesByName.processInputCICategoryType,
                processInputImpact: componentDefinition.propertiesByName.processInputImpact,
                processInputUrgency: componentDefinition.propertiesByName.processInputUrgency,
                processInputPriority: componentDefinition.propertiesByName.processInputPriority,
                processInputAssignedGroup: componentDefinition.propertiesByName.processInputAssignedGroup,
                processInputType: componentDefinition.propertiesByName.processInputType,
                processInputStatus: componentDefinition.propertiesByName.processInputStatus */

                //qualification: componentDefinition.propertiesByName.qualification,
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        processDefinitionName1: {
                            label: 'Process Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.process.type, //  define which definition user can select
                            group: 'general',
                            index: 1
                        }
                        ,
                        InputVariable1: {
                            label: 'InputVariable',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 2
                        },
                         processDefinitionName2: {
                            label: 'Process Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.process.type, //  define which definition user can select
                            group: 'general',
                            index: 3
                        }
                        ,
                        InputVariable2: {
                            label: 'InputVariable',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 4
                        },
                            processDefinitionName3: {
                            label: 'Process Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.process.type, //  define which definition user can select
                            group: 'general',
                            index: 5
                        }
                        ,
                        InputVariable3: {
                            label: 'InputVariable',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 6
                        },
                            processDefinitionName4: {
                            label: 'Process Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.process.type, //  define which definition user can select
                            group: 'general',
                            index: 7
                        }
                        ,
                        InputVariable4: {
                            label: 'InputVariable',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 8
                        },
                            processDefinitionName5: {
                            label: 'Process Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.process.type, //  define which definition user can select
                            group: 'general',
                            index: 9
                        }
                        ,
                        InputVariable5: {
                            label: 'InputVariable',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 10
                        }
                        /*,
                        processInputCompany: {
                            label: 'Process Input Company',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 3
                        },
                        processInputSource: {
                            label: 'Process Input Source',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 4
                        },
                        processInputService: {
                            label: 'Process Input Service',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 5
                        },
                        processInputCI: {
                            label: 'Process Input CI',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 6
                        },
                        processInputCICategoryType: {
                            label: 'Process Input CI Category Type',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 7
                        },
                        processInputImpact: {
                            label: 'Process Input Impact',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 8
                        },
                        processInputUrgency: {
                            label: 'Process Input Urgency',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 9
                        },
                   */
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
                return new comVyomVyomlibVc12Model(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();