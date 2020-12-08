// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc10').factory('comVyomVyomlibVc10Design', function (comVyomVyomlibVc10Model, rxGUID, RX_DEFINITION_PICKER) {
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
            var defaultSubscriber = _.find(componentDescriptor.propertiesByName, {
                name: 'subscribers'
            }).defaultValue;
            var defaultIncident = _.find(componentDescriptor.propertiesByName, {
                name: 'incidents'
            }).defaultValue;
            var defaultChange = _.find(componentDescriptor.propertiesByName, {
                name: 'changes'
            }).defaultValue;
             var defaultcountry1label = _.find(componentDescriptor.propertiesByName, {
                name: 'country1label'
            }).defaultValue;
             var defaultcountry1value = _.find(componentDescriptor.propertiesByName, {
                name: 'country1value'
            }).defaultValue; 
             var defaultcountry2label = _.find(componentDescriptor.propertiesByName, {
                name: 'country2label'
            }).defaultValue;
            var defaultcountry2value = _.find(componentDescriptor.propertiesByName, {
                name: 'country2value'
            }).defaultValue;
            var defaultcountry3label = _.find(componentDescriptor.propertiesByName, {
                name: 'country3label'
            }).defaultValue;
            var defaultcountry3value = _.find(componentDescriptor.propertiesByName, {
                name: 'country3value'
            }).defaultValue;


            return {
                subscribers: componentDefinition.propertiesByName.subscribers || defaultSubscriber,
                incidents: componentDefinition.propertiesByName.incidents || defaultIncident,
                changes: componentDefinition.propertiesByName.changes || defaultChange,
                 country1label:componentDefinition.propertiesByName.country1label || defaultcountry1label,
                country1value:componentDefinition.propertiesByName.country1value || defaultcountry1value,
                 country2label:componentDefinition.propertiesByName.country2label || defaultcountry2label,
                country2value:componentDefinition.propertiesByName.country2value || defaultcountry2value,
                country3label:componentDefinition.propertiesByName.country3label || defaultcountry3label,
                country3value:componentDefinition.propertiesByName.country3value || defaultcountry3value
                
               
                
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                       
                        subscribers: {
                            label: 'subscribers',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 1
                        },
                        incidents: {
                            label: 'incidents',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 2
                        },
                        changes: {
                            label: 'changes',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 3
                        },
                        country1label: {
                            label: 'Country1 Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 4
                        },
                        country1value: {
                            label: 'Country1 Value',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 5
                        },
                         country2label: {
                            label: 'Country2 Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 6
                        },
                        country2value: {
                            label: 'Country2 Value',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 7
                        },
                        country3label: {
                            label: 'Country3 Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 8
                        },
                        country3value: {
                            label: 'Country3 Value',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 9
                        },
                        incidentaction: {
                            label: 'incidentaction',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 10
                        },
                        subscriberaction: {
                            label: 'subscriberaction',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 11
                        },
                        changeaction: {
                            label: 'changeaction',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 12
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
                return new comVyomVyomlibVc10Model(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();