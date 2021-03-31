// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.recent-activity').factory('comVyomVyomlibRecentActivityDesign', function (comVyomVyomlibRecentActivityModel, rxGUID, RX_DEFINITION_PICKER) {
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

                URL1: componentDefinition.propertiesByName.URL1,
                Label1: componentDefinition.propertiesByName.Label1,
                Icon1: componentDefinition.propertiesByName.Icon1,
                Color1: componentDefinition.propertiesByName.Color1,
                URL2: componentDefinition.propertiesByName.URL2,
                Label2: componentDefinition.propertiesByName.Label2,
                Icon2: componentDefinition.propertiesByName.Icon2,
                Color2: componentDefinition.propertiesByName.Color2,
                URL3: componentDefinition.propertiesByName.URL3,
                Label3: componentDefinition.propertiesByName.Label3,
                Icon3: componentDefinition.propertiesByName.Icon3,
                Color: componentDefinition.propertiesByName.Color3,

            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        URL1: {
                            label: 'URL',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "Enter URL with protocol eg.(http:// OR https:// )",
                                placement: "left"
                            },
                            group: 'firstActivity',
                            index: 1
                        },
                        Label1: {
                            label: 'Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'firstActivity',
                            index: 2
                        },
                        Icon1: {
                            label: 'Icon',
                            type: 'com-vyom-vyomlib-inspector-recent-activity-icon',
                            group: 'firstActivity',
                            index: 3
                        },
                        Color1: {
                            label: 'Color',
                            type: 'com-vyom-vyomlib-inspector-recent-activity-color',
                            group: 'firstActivity',
                            index: 4
                        },
                        URL2: {
                            label: 'URL',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "Enter URL with protocol eg.(http:// OR https:// )",
                                placement: "left"
                            },
                            group: 'secondActivity',
                            index: 1
                        },
                        Label2: {
                            label: 'Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'secondActivity',
                            index: 2
                        },

                        Icon2: {
                            label: 'Icon',
                            type: 'com-vyom-vyomlib-inspector-recent-activity-icon',
                            group: 'secondActivity',
                            index: 3
                        },
                        Color2: {
                            label: 'Color',
                            type: 'com-vyom-vyomlib-inspector-recent-activity-color',
                            group: 'secondActivity',
                            index: 4
                        },
                        URL3: {
                            label: 'URL',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "Enter URL with protocol eg.(http:// OR https:// )",
                                placement: "left"
                            },
                            group: 'thirdActivity',
                            index: 1
                        },
                        Label3: {
                            label: 'Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'thirdActivity',
                            index: 2
                        },
                        Icon3: {
                            label: 'Icon',
                            type: 'com-vyom-vyomlib-inspector-recent-activity-icon',
                            group: 'thirdActivity',
                            index: 3
                        },
                        Color3: {
                            label: 'Color',
                            type: 'com-vyom-vyomlib-inspector-recent-activity-color',
                            group: 'thirdActivity',
                            index: 4
                        },



                    }
                },
                groups: {
                    firstActivity: {
                        label: 'First Activity',
                        index: 1
                    },
                    secondActivity: {
                        label: 'Second Activity',
                        index: 2
                    },
                    thirdActivity: {
                        label: 'Third Activity',
                        index: 3
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibRecentActivityModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
