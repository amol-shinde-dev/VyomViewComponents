// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.custom-blog').factory('comVyomVyomlibCustomBlogDesign', function (comVyomVyomlibCustomBlogModel, rxGUID, RX_DEFINITION_PICKER) {
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
        // below code is used to return/store the edited data on view designer when clicked on Save
        function getRxData(componentDefinition, componentDescriptor) {



            return {

                recordDefinitionFullName: componentDefinition.propertiesByName.recordDefinitionFullName,
                HTMLField: componentDefinition.propertiesByName.HTMLField,
                RecInstanceId: componentDefinition.propertiesByName.RecInstanceId,
                editorInstance: componentDefinition.guid || rxGUID.generate(),

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
                        //obeserve that in below section, cutom type html is used which is designed 
                        HTMLField: {
                            label: 'HTML',
                            type: 'com-vyom-vyomlib-inspector-custom-blog-fields',
                            group: 'General',
                            index: 2
                        },
                        //obeserve that in below section, cutom type html is used which is designed 
                        RecInstanceId: {
                            label: 'Record Instance Id',
                            type: 'com-vyom-vyomlib-inspector-custom-blog-guid',
                            group: 'General',
                            index: 3
                        },
                        //obeserve that in below section, cutom type html is used which is designed 
                        editorInstance: {
                            label: 'editor Instance Id',
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
                return new comVyomVyomlibCustomBlogModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
