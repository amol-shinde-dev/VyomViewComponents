// This code is run at "design" phase, in BmcDashboard Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.comment-box').factory('comVyomVyomlibCommentBoxDesign', function (comVyomVyomlibCommentBoxModel, rxGUID, RX_DEFINITION_PICKER) {
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
                recordDefinitionFullName: componentDefinition.propertiesByName.recordDefinitionFullName,
                CommentField: componentDefinition.propertiesByName.CommentField,
                ApplicationName: componentDefinition.propertiesByName.ApplicationName,
                ApplicationNameField: componentDefinition.propertiesByName.ApplicationNameField,
                CommentInstanceId: componentDefinition.propertiesByName.CommentInstanceId,
                cssClasses: componentDefinition.propertiesByName.cssClasses






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
                        CommentField: {
                            label: 'Comment',
                            type: 'com-vyom-vyomlib-inspector-comment-box-fields',
                            group: 'General',
                            index: 2
                        },

                        ApplicationName: {
                            label: 'Application Name',
                            type: 'com-vyom-vyomlib-inspector-comment-box-guid',
                            group: 'General',
                            index: 3
                        },
                        ApplicationNameField: {
                            label: 'Application Name Field',
                            type: 'com-vyom-vyomlib-inspector-comment-box-fields',
                            group: 'General',
                            index: 5
                        },
                        CommentInstanceId: {
                            label: 'Comment Instance Id',
                            type: 'rx-inspector-expression-node-field',
                            group: 'General',
                            index: 6
                        },
                        cssClasses: {
                            label: 'CSS Classes',
                            type: 'rx-inspector-tag-input',
                            group: 'General',
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
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibCommentBoxModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
