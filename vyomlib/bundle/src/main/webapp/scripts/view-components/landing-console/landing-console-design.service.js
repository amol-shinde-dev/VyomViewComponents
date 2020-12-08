// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.landing-console').factory('comVyomVyomlibLandingConsoleDesign', function (comVyomVyomlibLandingConsoleModel, rxGUID, RX_DEFINITION_PICKER) {
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
                
                CardList:componentDefinition.propertiesByName.CardList,
               /* ApplicationName:componentDefinition.propertiesByName.ApplicationName,
                URL:componentDefinition.propertiesByName.URL,
                Description:componentDefinition.propertiesByName.Description,*/
                SearchColor:componentDefinition.propertiesByName.SearchColor,
               /* Icon:componentDefinition.propertiesByName.Icon,
                Color:componentDefinition.propertiesByName.Color,
                tooltipHeader:componentDefinition.propertiesByName.tooltipHeader,
                tooltipDescription:componentDefinition.propertiesByName.tooltipDescription*/
                
                
                
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        ApplicationName: {
                            label: 'Application Name',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Inputs',
                            index: 1
                        },
                         Description: {
                            label: 'Description',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Inputs',
                            index: 2
                        },
                         URL: {
                            label: 'URL',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Inputs',
                            index: 3
                        },
                         Icon: {
                            label: 'Icon',
                            type: 'com-vyom-vyomlib-inspector-landing-console-icon',
                            group: 'Inputs',
                            index: 4
                        },
                        
                         Color: {
                            label: 'Color Class',
                            type: 'com-vyom-vyomlib-inspector-landing-console-bgcolor2', 
                            group: 'Inputs',
                            index: 5
                        }
                        ,
                         tooltipHeader: {
                            label: 'Tooltip Header',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Inputs',
                            index: 6
                        },
                         tooltipDescription: {
                            label: 'Tooltip Description',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Inputs',
                            index: 7
                        },

                         permissions: {
                            label: 'permissions',
                            type: 'com-vyom-vyomlib-inspector-landing-console-permission',
                            group: 'Inputs',
                            isReadOnly:false,
                            index: 8
                        },
                       
                        Button: {
                            
                            type: 'com-vyom-vyomlib-inspector-landing-console-button',
                            group: 'Inputs',
                            index: 9
                        },
                        
                       
                        CardList: {
                            label: 'Card List',
                            type: 'com-vyom-vyomlib-inspector-landing-console-cards',
                            group: 'Cards',
                            index: 1
                        },
                        SearchColor: {
                            label: 'Search Icon Color',
                            type: 'com-vyom-vyomlib-inspector-landing-console-bgcolor',
                            group: 'General',
                            index: 1
                        }
                      
                    }
                },
                groups: {
                    General: {
                        label: 'General',
                        closed:true,
                        index: 1
                    },
                    Inputs: {
                        label: 'Inputs',
                        closed:true,
                        index: 2
                    },
                      Cards: {
                        label: 'Cards', 
                        closed:true,
                        index: 3
                    }
                },
                
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibLandingConsoleModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();