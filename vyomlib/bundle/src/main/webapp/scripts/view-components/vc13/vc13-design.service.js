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
            var defaultbuttonTextColor = _.find(componentDescriptor.propertiesByName, {
                name: 'buttonTextColor'
            }).defaultValue;
            
            


            return {
                buttonlabel: componentDefinition.propertiesByName.buttonlabel || defaultbuttonlabel,
                buttonColor:componentDefinition.propertiesByName.buttonColor ||defaultbuttonColor,
                buttonSize:componentDefinition.propertiesByName.buttonSize|| defaultbuttonSize,
                buttonTextColor:componentDefinition.propertiesByName.buttonTextColor || defaultbuttonTextColor
                
                
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
                            type: 'com-vyom-vyomlib-inspector-vc13-bcolor',
                            group: 'general',
                            index: 3
                        },
                        buttonSize: {
                            label: 'buttonSize',
                            type: 'com-vyom-vyomlib-inspector-vc13-bsize',
                            group: 'general',
                            index: 4
                        },
                        buttonTextColor: {
                            label: 'buttonTextColor',
                            type: 'com-vyom-vyomlib-inspector-vc13-btextcolor',
                            group: 'general',
                            index: 5
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