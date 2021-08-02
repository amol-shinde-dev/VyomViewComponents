// This code is run at "design" phase, in Vyomlib Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.service-health')
        .factory('comVyomVyomlibServiceHealthDesign',
            function (comVyomVyomlibServiceHealthModel, rxGUID, RX_DEFINITION_PICKER) {
                function getRxConfig(componentDefinition, componentDescriptor) {
                    return {
                        id: componentDefinition.guid || rxGUID.generate(),
                        type: componentDefinition.type,
                        rxData: getRxData(componentDefinition, componentDescriptor),
                        rxInspector: getRxInspector()
                    };
                }

                // Getting configuration defined in App1 Studio parameters.
                // We can also setup default values.
                function getRxData(componentDefinition, componentDescriptor) {

                    return {
                        cardActionGuid: componentDefinition.propertiesByName.cardActionGuid,
                        // service
                        recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                        cardName: componentDefinition.propertiesByName.cardName,
                        status: componentDefinition.propertiesByName.status,
                        time: componentDefinition.propertiesByName.time,
                        availablePercent: componentDefinition.propertiesByName.availablePercent,
                        //incident
                        incidentRecordDefinition: componentDefinition.propertiesByName.incidentRecordDefinition,
                        incNumber: componentDefinition.propertiesByName.incNumber,
                        progressPercentage: componentDefinition.propertiesByName.progressPercentage,
                        incServiceName: componentDefinition.propertiesByName.incServiceName,
                        //change
                        changeRecordDefinition: componentDefinition.propertiesByName.changeRecordDefinition,
                        changeNumber: componentDefinition.propertiesByName.changeNumber,
                        changeProgressPercentage: componentDefinition.propertiesByName.changeProgressPercentage,
                        changeServiceName: componentDefinition.propertiesByName.changeServiceName,
                    };
                }

                // Defining the parameters types with helper.
                function getRxInspector() {
                    return {
                        inputs: {
                            rxData: {
                                cardActionGuid: {
                                    label: 'Action Button Guid',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'general',
                                    index: 1
                                },
                                // Services Record
                                recordDefinitionName: {
                                    label: 'Services Record Name',
                                    type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                                    definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                                    group: 'service',
                                    index: 1
                                },
                                cardName: {
                                    label: 'Service Name',
                                    type: 'com-vyom-vyomlib-inspector-service-health-fields',
                                    group: 'service',
                                    index: 2
                                },
                                status: {
                                    label: 'Service status',
                                    type: 'com-vyom-vyomlib-inspector-service-health-fields',
                                    group: 'service',
                                    index: 3
                                },
                                time: {
                                    label: 'Incident open time',
                                    type: 'com-vyom-vyomlib-inspector-service-health-fields',
                                    group: 'service',
                                    index: 4
                                },
                                availablePercent: {
                                    label: 'Calculated availability',
                                    type: 'com-vyom-vyomlib-inspector-service-health-fields',
                                    group: 'service',
                                    index: 5
                                },
                                // Incident Record
                                incidentRecordDefinition: {
                                    label: 'Incident Record Name',
                                    type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                                    definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                                    group: 'incident',
                                    index: 1
                                },
                                incNumber: {
                                    label: 'Incident Number',
                                    type: 'com-vyom-vyomlib-inspector-service-health-fields1',
                                    group: 'incident',
                                    index: 2
                                },
                                progressPercentage: {
                                    label: 'Progress percentage',
                                    type: 'com-vyom-vyomlib-inspector-service-health-fields1',
                                    group: 'incident',
                                    index: 3
                                },
                                incServiceName: {
                                    label: 'Incident Service',
                                    type: 'com-vyom-vyomlib-inspector-service-health-fields1',
                                    group: 'incident',
                                    index: 4
                                },

                                //Change Record
                                changeRecordDefinition: {
                                    label: 'Change Record Name',
                                    type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                                    definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                                    group: 'change',
                                    index: 1
                                },
                                changeNumber: {
                                    label: 'Change Number',
                                    type: 'com-vyom-vyomlib-inspector-service-health-fields3',
                                    group: 'change',
                                    index: 2
                                },
                                changeProgressPercentage: {
                                    label: 'Progress percentage',
                                    type: 'com-vyom-vyomlib-inspector-service-health-fields3',
                                    group: 'change',
                                    index: 3
                                },
                                changeServiceName: {
                                    label: 'Change service',
                                    type: 'com-vyom-vyomlib-inspector-service-health-fields3',
                                    group: 'change',
                                    index: 4
                                },
                            }
                        },
                        groups: {
                            general: {
                                label: 'General',
                                index: 1
                            },
                            service: {
                                label: 'Service Record',
                                index: 2
                            },
                            incident: {
                                label: 'Incident Record',
                                index: 3
                            },
                            change: {
                                label: 'Change Record',
                                index: 4
                            }
                        }
                    };
                }

                return {
                    //  should return a model instance
                    getModel: function (componentDefinition, componentDescriptor) {
                        return new comVyomVyomlibServiceHealthModel(getRxConfig(componentDefinition, componentDescriptor));
                    }
                };
            });
})();
