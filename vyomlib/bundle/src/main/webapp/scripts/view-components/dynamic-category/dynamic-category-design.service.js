// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dynamic-category')
        .factory('comVyomVyomlibDynamicCategoryDesign',
            function (comVyomVyomlibDynamicCategoryModel, rxGUID, RX_DEFINITION_PICKER) {
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
                    var defaultNavHeight = _.find(componentDescriptor.propertiesByName, {
                        name: 'navHeight'
                    }).defaultValue;
                    return {
                        // CategoryField: componentDefinition.propertiesByName.CategoryField,
                        recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                        CategoryField: componentDefinition.propertiesByName.CategoryField,
                        CategoryColor: componentDefinition.propertiesByName.CategoryColor,
                        actionguid: componentDefinition.propertiesByName.actionguid,
                        navHeight: componentDefinition.propertiesByName.navHeight || defaultNavHeight,
                    };
                }

                // Defining the parameters types with helper.
                function getRxInspector() {
                    return {
                        inputs: {
                            rxData: {
                                recordDefinitionName: {
                                    label: 'Record Name',
                                    type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                                    definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                                    group: 'Category',
                                    index: 1
                                }, CategoryField: {
                                    label: 'CategoryField',
                                    type: 'com-vyom-vyomlib-inspector-dynamic-category-fields',
                                    group: 'Category',
                                    index: 2
                                },
                                CategoryColor: {
                                    label: 'Color',
                                    type: 'com-vyom-vyomlib-inspector-portal-preview-bgcolor',
                                    group: 'Category',
                                    index: 3
                                },
                                actionguid: {
                                    label: 'Action Button Guid',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'Category',
                                    index: 4
                                },
                                navHeight: {
                                    label: 'Navigation arrow height',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'Category',
                                    index: 6
                                },
                            }
                        },
                        groups: {

                            Category: {
                                label: 'Category',
                                index: 1
                            },
                        }
                    };
                }

                return {
                    //  should return a model instance
                    getModel: function (componentDefinition, componentDescriptor) {
                        return new comVyomVyomlibDynamicCategoryModel(getRxConfig(componentDefinition, componentDescriptor));
                    }
                };
            });
})();
