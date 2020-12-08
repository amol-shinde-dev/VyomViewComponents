/*
This code is run at "design" phase, in Innovation Studio.
The factory is defined in the "config.js":
designManagerService: 'comExampleSamplelibraryStarRatingDesign',
*/
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.topheader').factory('comVyomVyomlibTopheaderDesign', function (comVyomVyomlibTopheaderModel, rxGUID, RX_DEFINITION_PICKER) {
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
           var defaultbgcolor = _.find(componentDescriptor.propertiesByName, {
                name: 'bgcolor'
            }).defaultValue;

            return {
             
				text: componentDefinition.propertiesByName.text,
				appname: componentDefinition.propertiesByName.appname,
				hyperlink: componentDefinition.propertiesByName.hyperlink,
				toggleicon: componentDefinition.propertiesByName.toggleicon,
				togglefont: componentDefinition.propertiesByName.togglefont,
                bgcolor: componentDefinition.propertiesByName.bgcolor || defaultbgcolor
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
						text: {
                            label: 'text',
                            type: 'text', //  special editor for selecting definitions                            
                            group: 'general',
                            index: 1
                        },
						appname: {
                            label: 'appname',
                            type: 'text', //  special editor for selecting definitions                           
                            group: 'general',
							value: 'application',
                            index: 2
                        },
						hyperlink: {
                            label: 'hyperlink',
                            type: 'text', //  special editor for selecting definitions                           
                            group: 'general',
                            index: 3
                        },
                        toggleicon: {
                            label: 'Hide Icon',
							type: 'rx-inspector-optional-expression', //'rx-inspector-toggle-field',
                            group: 'general',
							
                            index: 4
                        },
                        togglefont: {
                            label: 'Show Ericfont',
							type:  'rx-inspector-optional-expression',// //'rx-inspector-optional-expression',
                            group: 'general',
							
                            index: 5
                        },
                        bgcolor: {
                            label: 'Header Background Color',
							type:  'com-vyom-vyomlib-inspector-topheader-bgcolor',// //'rx-inspector-optional-expression',
                            group: 'general',
                            index: 6
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
            // should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibTopheaderModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();