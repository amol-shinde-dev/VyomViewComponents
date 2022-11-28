// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.icona-v2').factory('comVyomVyomlibIconaV2Design', function (comVyomVyomlibIconaV2Model, rxGUID, RX_DEFINITION_PICKER) {
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
                icon: componentDefinition.propertiesByName.icon,
                tooltipText: componentDefinition.propertiesByName.tooltipText,
                cssStyle: componentDefinition.propertiesByName.cssStyle

            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {

                        icon: {
                            label: 'Icon',
                            type: 'com-vyom-vyomlib-inspector-icona-v2-icon',
                            group: 'general',
                            index: 2
                        },
                        tooltipText: {
                            label: 'Tooltip Text',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 3
                        },
                        cssStyle: {
                            label: 'CSS Style (eg. font-size:100px;)',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 4
                        },


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
                return new comVyomVyomlibIconaV2Model(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
