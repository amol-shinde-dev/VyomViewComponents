// This code is run at "design" phase, in Vyomlib Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.search-bar').factory('comVyomVyomlibSearchBarDesign', function (comVyomVyomlibSearchBarModel, rxGUID, RX_DEFINITION_PICKER) {
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
                recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                textFieldID: componentDefinition.propertiesByName.textFieldID,
                icon: componentDefinition.propertiesByName.icon,
                serviceRequestURL: componentDefinition.propertiesByName.serviceRequestURL,
                category: componentDefinition.propertiesByName.category,
				
				policyrecordDefinitionName: componentDefinition.propertiesByName.policyrecordDefinitionName,
                policyname: componentDefinition.propertiesByName.policyname,
				policyurl: componentDefinition.propertiesByName.policyurl,
				policyIcon: componentDefinition.propertiesByName.policyIcon,				
				
				articlerecordDefinitionName: componentDefinition.propertiesByName.articlerecordDefinitionName,
                articlename: componentDefinition.propertiesByName.articlename,
				articleurl: componentDefinition.propertiesByName.articleurl,
				articleIcon: componentDefinition.propertiesByName.articleIcon

            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        recordDefinitionName: {
                            label: 'Text Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 1
                        },
                        textFieldID: {
                            label: 'textFieldID',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 2
                        },
                        icon: {
                            label: 'icon',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 3
                        },
                        serviceRequestURL: {
                            label: 'Service Request URL',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 4
                        },
                        category: {
                            label: 'category',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 5
                        },
						policyrecordDefinitionName: {
                            label: 'Policy Article Record Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 6
                        },
                        policyname: {
                            label: 'Policy Name',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 7
                        },
                        policyurl: {
                            label: 'Policy URL',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 8
                        },
                        policyIcon: {
                            label: 'Policy Icon FieldID',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 9
                        },
						articlerecordDefinitionName: {
                            label: 'Knowledge Article Record Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 10
                        },
                        articlename: {
                            label: 'Article Name',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 11
                        },
                        articleurl: {
                            label: 'Article URL',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 12
                        },
                        articleIcon: {
                            label: 'Article Icon FieldID',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 13
                        }/*,
                        searchText: {
                            label: 'searchText',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 4
                        }*/
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
                return new comVyomVyomlibSearchBarModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();