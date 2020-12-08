// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc9').factory('comVyomVyomlibVc9Design', function (comVyomVyomlibVc9Model, rxGUID, RX_DEFINITION_PICKER) {
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
//            var defaultHideIncident = _.find(componentDescriptor.propertiesByName, {
//                name: 'HideIncident'
//            }).defaultValue;
//            var defaultHideSubscriber = _.find(componentDescriptor.propertiesByName, {
//                name: 'HideSubscriber'
//            }).defaultValue;
//            var defaultHideChange = _.find(componentDescriptor.propertiesByName, {
//                name: 'HideChange'
//            }).defaultValue;
           

            return {
                IncidentRecDef: componentDefinition.propertiesByName.IncidentRecDef,
                subscribers: componentDefinition.propertiesByName.subscribers || defaultSubscriber,
                incidents: componentDefinition.propertiesByName.incidents || defaultIncident,
                changes: componentDefinition.propertiesByName.changes || defaultChange,
                incidentaction:componentDefinition.propertiesByName.incidentaction,
                subscriberaction: componentDefinition.propertiesByName.subscriberaction,
                changeaction: componentDefinition.propertiesByName.changeaction,
                url1: componentDefinition.propertiesByName.url1,
                url2: componentDefinition.propertiesByName.url2,
                url3: componentDefinition.propertiesByName.url3,
                url4: componentDefinition.propertiesByName.url4,
//                HideIncident: componentDefinition.propertiesByName.HideIncident || defaultHideIncident,
//                HideChange: componentDefinition.propertiesByName.HideChange || defaultHideChange,
//                HideSubscriber: componentDefinition.propertiesByName.HideSubscriber ||defaultHideSubscriber,
//                chatwindowurl:componentDefinition.propertiesByName.chatwindowurl,
//                containerWidth:componentDefinition.propertiesByName.containerWidth,
//                containerHeight:componentDefinition.propertiesByName.containerHeight,
//                iframeWidth:componentDefinition.propertiesByName.iframeWidth,
//                iframeHeight:componentDefinition.propertiesByName.iframeHeight,
//                iframeTop:componentDefinition.propertiesByName.iframeTop,
//                iframeRight:componentDefinition.propertiesByName.iframeRight
               
                
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
                        incidentaction: {
                            label: 'incidentaction',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 4
                        },
                        subscriberaction: {
                            label: 'subscriberaction',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 5
                        },
                        changeaction: {
                            label: 'changeaction',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 6
                        }, 
                        IncidentRecDef: {
                            label: 'IncidentRecDef',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 7
                        },
                        url1: {
                            label: 'url1',
                            type: 'rx-inspector-expression-node-field',
                            group: 'widgetConfiguration',
                            index: 8
                        },
                        url2: {
                            label: 'url2',
                            type: 'rx-inspector-expression-node-field',
                            group: 'widgetConfiguration',
                            index: 9
                        },
                        url3: {
                            label: 'url3',
                            type: 'rx-inspector-expression-node-field',
                            group: 'widgetConfiguration',
                            index: 10
                        },
                        url4: {
                            label: 'url4',
                            type: 'rx-inspector-expression-node-field',
                            group: 'widgetConfiguration',
                            index: 11
                        },
//                        HideIncident: {
//                            label: 'HideIncident',
//                            type: 'com-vyom-vyomlib-inspector-vc9-icheckbox',
//                            group: 'widgetConfiguration',
//                            index: 12
//                        },
//                        HideChange: {
//                            label: 'HideChange',
//                            type: 'com-vyom-vyomlib-inspector-vc9-ccheckbox',
//                            group: 'widgetConfiguration',
//                            index: 13
//                        },
//                        HideSubscriber: {
//                            label: 'HideSubscriber',
//                            type: 'com-vyom-vyomlib-inspector-vc9-scheckbox',
//                            group: 'widgetConfiguration',
//                            index: 14
//                        }
//                        ,
//                        chatwindowurl: {
//                            label: 'chatwindowurl',
//                            type: 'rx-inspector-expression-node-field',
//                            group: 'chatbotconfiguration',
//                            index: 15
//                        },
//                        containerWidth: {
//                            label: 'containerWidth',
//                            type: 'rx-inspector-expression-node-field',
//                            group: 'chatbotconfiguration',
//                            index: 16
//                        },
//                        containerHeight: {
//                            label: 'containerHeight',
//                            type: 'rx-inspector-expression-node-field',
//                            group: 'chatbotconfiguration',
//                            index: 17
//                        },
//                        iframeWidth: {
//                            label: 'iframeWidth',
//                            type: 'rx-inspector-expression-node-field',
//                            group: 'chatbotconfiguration',
//                            index: 18
//                        },
//                        iframeHeight: {
//                            label: 'iframeHeight',
//                            type: 'rx-inspector-expression-node-field',
//                            group: 'chatbotconfiguration',
//                            index: 19
//                        },
//                        iframeTop: {
//                            label: 'iframeTop',
//                            type: 'rx-inspector-expression-node-field',
//                            group: 'chatbotconfiguration',
//                            index: 20
//                        },
//                        iframeRight: {
//                            label: 'iframeRight',
//                            type: 'rx-inspector-expression-node-field',
//                            group: 'chatbotconfiguration',
//                            index: 21
//                        }
                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    },
                      widgetConfiguration: {
                        label: 'widget configuration',
                        closed: true, 
                        index: 2
                    },
//                      chatbotconfiguration: {
//                        label: 'chatbotconfiguration',
//                        closed: true,
//                        index: 3
//                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibVc9Model(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();