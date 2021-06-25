// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc18').factory('comVyomVyomlibVc18Design', function (comVyomVyomlibVc18Model, rxGUID, RX_DEFINITION_PICKER) {
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
            var defaultIcon = _.find(componentDescriptor.propertiesByName, {
                name: 'Icon'
            }).defaultValue;
            var defaultTitle = _.find(componentDescriptor.propertiesByName, {
                name: 'Title'
            }).defaultValue;
            var defaultSize = _.find(componentDescriptor.propertiesByName, {
                name: 'Size'
            }).defaultValue;
            var defaultBGcolor = _.find(componentDescriptor.propertiesByName, {
                name: 'BGcolor'
            }).defaultValue;



            return {
                Url: componentDefinition.propertiesByName.Url,
                Icon: componentDefinition.propertiesByName.Icon || defaultIcon,
                Title: componentDefinition.propertiesByName.Title || defaultTitle,
                BGcolor: componentDefinition.propertiesByName.BGcolor || defaultBGcolor,
                Size: componentDefinition.propertiesByName.Size || defaultSize

            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {

                        Url: {
                            label: 'Url',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 1
                        },
                        Icon: {
                            label: 'Icon',
                            type: 'com-vyom-vyomlib-inspector-vc18-icon',
                            group: 'general',
                            index: 2
                        },
                        Title: {
                            label: 'Title',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 3
                        },
                        Size: {
                            label: 'Size',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "Size should be less than 100%.(eg.87%)",
                                placement: "left"
                            },
                            group: 'general',
                            index: 4
                        },
                        BGcolor: {
                            label: 'BGcolor',
                            type: 'com-vyom-vyomlib-inspector-vc18-bgcolor',
                            group: 'general',
                            index: 5
                        }

                    }
                },
                groups: {
                    general: {
                        label: 'general',
                        index: 1
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibVc18Model(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
