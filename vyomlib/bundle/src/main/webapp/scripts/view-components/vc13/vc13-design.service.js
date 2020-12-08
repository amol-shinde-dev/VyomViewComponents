// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc13').factory('comVyomVyomlibVc13Design', function (comVyomVyomlibVc13Model, rxGUID, RX_DEFINITION_PICKER) {
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
            var defaultbuttonlabel = _.find(componentDescriptor.propertiesByName, {
                name: 'buttonlabel'
            }).defaultValue;

            var defaultbuttonColor = _.find(componentDescriptor.propertiesByName, {
                name: 'buttonColor'
            }).defaultValue;
            var defaultbuttonSize = _.find(componentDescriptor.propertiesByName, {
                name: 'buttonSize'
            }).defaultValue;


            var defaultIconAllignment = _.find(componentDescriptor.propertiesByName, {
                name: 'IconAllignment'
            }).defaultValue;


            return {
                buttonGuid: componentDefinition.propertiesByName.buttonGuid,
                buttonlabel: componentDefinition.propertiesByName.buttonlabel || defaultbuttonlabel,
                buttonColor: componentDefinition.propertiesByName.buttonColor || defaultbuttonColor,
                buttonSize: componentDefinition.propertiesByName.buttonSize || defaultbuttonSize,

                fontFamily: componentDefinition.propertiesByName.fontFamily,
                buttonIcon: componentDefinition.propertiesByName.buttonIcon,
                IconAllignment: componentDefinition.propertiesByName.IconAllignment || defaultIconAllignment


            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {

                        buttonGuid: {
                            label: 'buttonGuid',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 1
                        },
                        buttonlabel: {
                            label: 'buttonlabel',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 2
                        },
                        buttonColor: {
                            label: 'buttonColor',
                            type: 'com-vyom-vyomlib-inspector-vc13-bcolor2',
                            group: 'general',
                            index: 3
                        },
                        buttonSize: {
                            label: 'buttonSize',
                            type: 'com-vyom-vyomlib-inspector-vc13-bsize2',
                            group: 'general',
                            index: 4
                        },
                        IconAllignment: {
                            label: 'IconAllignment',
                            type: 'com-vyom-vyomlib-inspector-vc13-ballignment',
                            group: 'general',
                            index: 5
                        },

                        buttonIcon: {
                            label: 'buttonIcon',
                            type: 'com-vyom-vyomlib-inspector-vc13-bicon',
                            group: 'general',
                            index: 7
                        },
                        fontFamily: {
                            label: 'fontFamily',
                            type: 'com-vyom-vyomlib-inspector-vc13-bfont',
                            group: 'general',
                            index: 8
                        }

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
                return new comVyomVyomlibVc13Model(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
