/*
This code is run at "design" phase, in Innovation Studio.
The factory is defined in the "config.js":
designManagerService: 'comVyomVyomlibStarRatingsDesign',
*/
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dynamic-star-rating')
        .factory('comVyomVyomlibDynamicStarRatingDesign', function (comVyomVyomlibDynamicStarRatingModel, rxGUID, RX_DEFINITION_PICKER) {
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
                var defaultStarCount = _.find(componentDescriptor.propertiesByName, {
                    name: 'stars'
                }).defaultValue;

                var defaultStarSize = _.find(componentDescriptor.propertiesByName, {
                    name: 'size'
                }).defaultValue;

                var defaultFontSize = _.find(componentDescriptor.propertiesByName, {
                    name: 'font'
                }).defaultValue;

                return {
                    recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                    ratingName: componentDefinition.propertiesByName.ratingName,
                    fieldId: componentDefinition.propertiesByName.fieldId,
                    stars: componentDefinition.propertiesByName.stars || Number(defaultStarCount),
                    size: componentDefinition.propertiesByName.size || Number(defaultStarSize),
                    font: componentDefinition.propertiesByName.font || Number(defaultFontSize),
                };
            }

            // Defining the parameters types with helper.
            function getRxInspector() {
                return {
                    inputs: {
                        rxData: {
                            recordDefinitionName: {
                                label: 'Record Definition Name',
                                type: 'rx-inspector-definition-picker', //  special editor for selecting definitions
                                definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                                group: 'general',
                                index: 1
                            },
                            ratingName: {
                                label: 'Rating Name Field',
                                type: 'com-vyom-vyomlib-inspector-dynamic-star-rating-field-select',
                                group: 'general',
                                index: 2
                            },
                            fieldId: {
                                label: 'Rating Count Field Id (Integer Type)',
                                // Type defined in "inspector-star-ratings-field-select-directive.js"
                                // directive('comVyomVyomlibInspectorStarRatingsFieldSelect')
                                type: 'com-vyom-vyomlib-inspector-dynamic-star-rating-intfield-select', //  set our directive as editor
                                group: 'general',
                                index: 3
                            },
                            stars: {
                                label: 'Number of Stars',
                                type: 'number', //  set number as editor for stars
                                min: 5, //  minimal value
                                group: 'general',
                                index: 4
                            },
                            size: {
                                label: 'Size of Stars',
                                type: 'com-vyom-vyomlib-inspector-dynamic-star-rating-size', //  set our directive as editor
                                group: 'general',
                                index: 5
                            },
                            font: {
                                label: 'Font size(in pixel)',
                                type: 'number', //  set number as editor for stars
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
                    return new comVyomVyomlibDynamicStarRatingModel(getRxConfig(componentDefinition, componentDescriptor));
                }
            };
        });
})();