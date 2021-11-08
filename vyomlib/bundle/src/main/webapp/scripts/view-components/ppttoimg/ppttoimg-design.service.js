// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.ppttoimg').factory('comVyomVyomlibPpttoimgDesign', function (comVyomVyomlibPpttoimgModel, rxGUID, RX_DEFINITION_PICKER) {
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
                pptField: componentDefinition.propertiesByName.pptField,
                RecInstanceId: componentDefinition.propertiesByName.RecInstanceId,
                slideNumber: componentDefinition.propertiesByName.slideNumber,





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
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type,
                            group: 'General',
                            index: 1
                        },
                        pptField: {
                            label: 'PPT',
                            type: 'com-vyom-vyomlib-inspector-custom-blog-fields',
                            group: 'General',
                            index: 2
                        },
                        RecInstanceId: {
                            label: 'Record Instance Id',
                            type: 'rx-inspector-expression-node-field',
                            group: 'General',
                            index: 3
                        },

                        slideNumber: {
                            label: 'Slide Number',
                            type: 'rx-inspector-expression-node-field',
                            group: 'General',
                            index: 4
                        },




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
                return new comVyomVyomlibPpttoimgModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
