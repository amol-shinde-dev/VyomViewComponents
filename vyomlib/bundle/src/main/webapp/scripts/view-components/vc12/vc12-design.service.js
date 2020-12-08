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
                processDefinitionName1: componentDefinition.propertiesByName.processDefinitionName1,
                InputVariable1: componentDefinition.propertiesByName.InputVariable1,
                processDefinitionName2: componentDefinition.propertiesByName.processDefinitionName2,
                InputVariable2: componentDefinition.propertiesByName.InputVariable2,
                processDefinitionName3: componentDefinition.propertiesByName.processDefinitionName3,
                InputVariable3: componentDefinition.propertiesByName.InputVariable3,
                processDefinitionName4: componentDefinition.propertiesByName.processDefinitionName4,
                InputVariable4: componentDefinition.propertiesByName.InputVariable4,
                processDefinitionName5: componentDefinition.propertiesByName.processDefinitionName5,
                InputVariable5: componentDefinition.propertiesByName.InputVariable5,


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
                        },
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
                        },
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
                        },
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
                        },
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
                        },
                        InputVariable5: {
                            label: 'InputVariable',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 10
                        }

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
