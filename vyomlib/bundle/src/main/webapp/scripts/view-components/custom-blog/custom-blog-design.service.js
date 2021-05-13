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
        function getRxData(componentDefinition, componentDescriptor) {

            var defaultEnableEditButton = _.find(componentDescriptor.propertiesByName, {
                name: 'enableEditButton'
            }).defaultValue;

            return {

                recordDefinitionFullName: componentDefinition.propertiesByName.recordDefinitionFullName,
                HTMLField: componentDefinition.propertiesByName.HTMLField,
                RecInstanceId: componentDefinition.propertiesByName.RecInstanceId,
                editorInstance: componentDefinition.guid || rxGUID.generate(),
                enableEditButton: componentDefinition.propertiesByName.enableEditButton || defaultEnableEditButton,
                enableEditPane: componentDefinition.propertiesByName.enableEditPane == 'true' ? true : false,
                headerNote: componentDefinition.propertiesByName.headerNote,
                tableWidth: componentDefinition.propertiesByName.tableWidth




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
                        HTMLField: {
                            label: 'HTML',
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

                        editorInstance: {
                            label: 'editor Instance Id',
                            type: 'rx-inspector-expression-node-field',
                            group: 'General',
                            index: 4
                        },

                        enableEditButton: {
                            label: 'View Edit Button',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "To enable edit button set values as (true/false).",
                                placement: "left"
                            },
                            group: 'General',
                            index: 5

                        },
                        enableEditPane: {
                            label: 'View Blog Header',
                            type: 'rx-inspector-toggle-field',
                            group: 'General',
                            index: 6

                        },
                        headerNote: {
                            label: 'Custom blog header note',
                            type: 'rx-inspector-expression-node-field',
                            group: 'General',
                            index: 7
                        },

                        tableWidth: {
                            label: 'Table width',
                            type: 'rx-inspector-select',
                            options: [{
                                value: "bodyCard",
                                content: "400px"
                            }, {
                                value: "bodyCard1",
                                content: "500px"
                            }, {
                                value: "bodyCard2",
                                content: "600px"
                            }, {
                                value: "bodyCard3",
                                content: "650px"
                            }, {
                                value: "bodyCard4",
                                content: "700px"
                            }, {
                                value: "bodyCard5",
                                content: "800px"
                            }, {
                                value: "bodyCard6",
                                content: "900px"
                            }, {
                                value: "bodyCard7",
                                content: "1000px"
                            }, {
                                value: " ",
                                content: "default"
                            }],
                            group: 'General',
                            index: 8
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
