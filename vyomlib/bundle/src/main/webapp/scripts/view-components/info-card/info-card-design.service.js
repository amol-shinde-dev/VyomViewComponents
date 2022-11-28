// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.info-card')
        .factory('comVyomVyomlibInfoCardDesign', function (comVyomVyomlibInfoCardModel, rxGUID, RX_DEFINITION_PICKER) {
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

                var defaultHeaderFontSize = _.find(componentDescriptor.propertiesByName, {
                    name: 'headerFontSize'
                }).defaultValue;


                return {
                    recordDefinition: componentDefinition.propertiesByName.recordDefinition,
                    imageId: componentDefinition.propertiesByName.imageId,
                    headerId: componentDefinition.propertiesByName.headerId,
                    descriptionId: componentDefinition.propertiesByName.descriptionId,
                    buttonVisibilityFlag: componentDefinition.propertiesByName.buttonVisibilityFlag,
                    filterExpression: componentDefinition.propertiesByName.filterExpression,

                    buttonActionGuid: componentDefinition.propertiesByName.buttonActionGuid,
                    buttonLabel: componentDefinition.propertiesByName.buttonLabel,
                    buttonColor: componentDefinition.propertiesByName.buttonColor,
                    headerFontSize: componentDefinition.propertiesByName.headerFontSize || defaultHeaderFontSize,
                    perRowCardLength: componentDefinition.propertiesByName.perRowCardLength,
                    imageHeight: componentDefinition.propertiesByName.imageHeight,
                    descriptionContainerHeight: componentDefinition.propertiesByName.descriptionContainerHeight

                };
            }

            // Defining the parameters types with helper.
            function getRxInspector() {
                return {
                    inputs: {
                        rxData: {
                            //fields
                            recordDefinition: {
                                label: 'Record Definition Name',
                                type: 'rx-inspector-definition-picker',
                                definitionType: RX_DEFINITION_PICKER.definitionTypes.record.type,
                                group: 'fields',
                                index: 1
                            },
                            imageId: {
                                label: 'Image',
                                type: 'com-vyom-vyomlib-inspector-info-card-attachment',
                                tooltip: {
                                    text: "Attachment should be available in the field.",
                                    placement: "left"
                                },
                                group: 'fields',
                                index: 2
                            },
                            headerId: {
                                label: 'Header',
                                type: 'com-vyom-vyomlib-inspector-info-card-fields',
                                group: 'fields',
                                index: 3
                            },
                            descriptionId: {
                                label: 'Description',
                                type: 'com-vyom-vyomlib-inspector-info-card-fields',
                                group: 'fields',
                                index: 4
                            },
                            buttonVisibilityFlag: {
                                label: 'Button Visibilty Flag',
                                type: 'com-vyom-vyomlib-inspector-info-card-fields',
                                tooltip: {
                                    text: "flags should be available in field (button/text/none).",
                                    placement: "left"
                                },
                                group: 'fields',
                                index: 5
                            },
                            filterExpression: {
                                label: 'Filter Expression',
                                type: 'rx-inspector-expression-node-field',
                                group: 'fields',
                                index: 6
                            },
                            buttonActionGuid: {
                                label: 'Button Action Guid',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 1
                            },
                            buttonLabel: {
                                label: 'Button Label',
                                type: 'com-vyom-vyomlib-inspector-info-card-fields',
                                tooltip: {
                                    text: "Record definition must have selected",
                                    placement: "left"
                                },
                                group: 'general',
                                index: 2
                            },
                            buttonColor: {
                                label: 'Button Color',
                                type: 'com-vyom-vyomlib-inspector-info-card-bgcolor',
                                group: 'general',
                                index: 3
                            },
                            headerFontSize: {
                                label: 'Header Font Size',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 4
                            },
                            perRowCardLength: {
                                label: 'Row Wise Cards',
                                type: 'rx-inspector-optional-select',
                                options: [{
                                    value: "col-lg-14 col-md-14 col-sm-14",
                                    content: "One Card"
                }, {
                                    value: "col-lg-6 col-md-8 col-sm-14",
                                    content: "Two Cards"
                }, {
                                    value: "col-lg-4 col-md-6 col-sm-12",
                                    content: "Three Cards"
                }, {
                                    value: "col-lg-3 col-md-5 col-sm-11",
                                    content: "Four Cards"
                }, {
                                    value: "col-lg-2 col-md-4 col-sm-10",
                                    content: "Six Cards"
                }, {
                                    value: "col-lg-1 col-md-3 col-sm-9",
                                    content: "Twelve Cards"
                }],
                                defaultValue: "col-lg-4 col-md-4 col-sm-4",
                                group: 'general',
                                index: 5
                            },
                            imageHeight: {
                                label: 'Image Height(px)',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 6
                            },
                            descriptionContainerHeight: {
                                label: 'Description Container Height(px)',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 7
                            },

                        }

                    },
                    groups: {

                        fields: {
                            label: 'Fields Configuration',
                            index: 1,
                            closed: true
                        },
                        general: {
                            label: 'General',
                            index: 2,

                        },

                    }
                };
            }

            return {
                //  should return a model instance
                getModel: function (componentDefinition, componentDescriptor) {
                    return new comVyomVyomlibInfoCardModel(getRxConfig(componentDefinition, componentDescriptor));
                }
            };
        });
})();
