// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dashboard1')
        .factory('comVyomVyomlibDashboard1Design',
            function (comVyomVyomlibDashboard1Model, rxGUID, RX_DEFINITION_PICKER) {
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
                        User: componentDefinition.propertiesByName.User,
                        trainingName: componentDefinition.propertiesByName.trainingName,
                        CheckedTraining: componentDefinition.propertiesByName.CheckedTraining
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
                                User: {
                                    label: 'User record',
                                    type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                                    definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                                    group: 'general',
                                    index: 1
                                },
                                CheckedTraining: {
                                    label: 'CheckedTraining',
                                    type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                                    definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                                    group: 'general',
                                    index: 1
                                },
                                trainingName: {
                                    label: 'trainingName',
                                    type: 'rx-inspector-optional-expression',
                                    group: 'general',
                                    index: 1
                                },
                                color: {
                                    label: 'Color',
                                    type: 'rx-inspector-expression-node-field',
                                    //type: 'com-vyomlabs-new-custom-label.directive',
                                    group: 'general',
                                    index: 2
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
                        return new comVyomVyomlibDashboard1Model(getRxConfig(componentDefinition, componentDescriptor));
                    }
                };
            });
})();