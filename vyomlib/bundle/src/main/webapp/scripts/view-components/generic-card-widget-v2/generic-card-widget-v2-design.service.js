// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.generic-card-widget-v2')
        .factory('comVyomVyomlibGenericCardWidgetV2Design', function (comVyomVyomlibGenericCardWidgetV2Model, rxGUID, RX_DEFINITION_PICKER) {
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
                var defaultImageHeight = _.find(componentDescriptor.propertiesByName, {
                    name: 'imageHeight'
                }).defaultValue;
                var defaultImageWidth = _.find(componentDescriptor.propertiesByName, {
                    name: 'imageWidth'
                }).defaultValue;
                var defaultImagePosition = _.find(componentDescriptor.propertiesByName, {
                    name: 'imagePosition'
                }).defaultValue;
                var defaultHeaderFontSize = _.find(componentDescriptor.propertiesByName, {
                    name: 'headerFontSize'
                }).defaultValue;
                var defaultNoteFontSize = _.find(componentDescriptor.propertiesByName, {
                    name: 'noteFontSize'
                }).defaultValue;
                var defaultBorderRadius = _.find(componentDescriptor.propertiesByName, {
                    name: 'borderRadius'
                }).defaultValue;

                return {
                    recordDefinition: componentDefinition.propertiesByName.recordDefinition,
                    fieldId: componentDefinition.propertiesByName.fieldId,
                    description: componentDefinition.propertiesByName.description,
                    leftButtonActionGuid: componentDefinition.propertiesByName.leftButtonActionGuid,
                    leftButtonLabel: componentDefinition.propertiesByName.leftButtonLabel,
                    leftButtonColor: componentDefinition.propertiesByName.leftButtonColor,
                    leftButtonIcon: componentDefinition.propertiesByName.leftButtonIcon,
                    leftButtonIconPosition: componentDefinition.propertiesByName.leftButtonIconPosition,
                    rightButtonActionGuid: componentDefinition.propertiesByName.rightButtonActionGuid,
                    rightButtonLabel: componentDefinition.propertiesByName.rightButtonLabel,
                    rightButtonColor: componentDefinition.propertiesByName.rightButtonColor,
                    rightButtonIcon: componentDefinition.propertiesByName.rightButtonIcon,
                    rightButtonIconPosition: componentDefinition.propertiesByName.rightButtonIconPosition,

                    note: componentDefinition.propertiesByName.note,
                    Color: componentDefinition.propertiesByName.Color,
                    header: componentDefinition.propertiesByName.header,
                    filterExpression: componentDefinition.propertiesByName.filterExpression,
                    tooltipConfig: componentDefinition.propertiesByName.tooltipConfig,
                    tooltip: componentDefinition.propertiesByName.tooltip,
                    perRowCardLength: componentDefinition.propertiesByName.perRowCardLength,
                    recordInstanceId1: componentDefinition.propertiesByName.recordInstanceId1,

                    imageHeight: componentDefinition.propertiesByName.imageHeight || defaultImageHeight,
                    imageWidth: componentDefinition.propertiesByName.imageWidth || defaultImageWidth,
                    imagePosition: componentDefinition.propertiesByName.imagePosition || defaultImagePosition,
                    headerFontSize: componentDefinition.propertiesByName.headerFontSize || defaultHeaderFontSize,
                    descriptionFontSize: componentDefinition.propertiesByName.descriptionFontSize,
                    cssClasses: componentDefinition.propertiesByName.cssClasses,
                    noteFontSize: componentDefinition.propertiesByName.noteFontSize || defaultNoteFontSize,
                    borderRadius: componentDefinition.propertiesByName.borderRadius || defaultBorderRadius,
                };
            }

            // Defining the parameters types with helper.
            function getRxInspector() {
                return {
                    inputs: {
                        rxData: {

                            tooltipConfig: {
                                label: 'Tooltip',
                                type: 'com-vyom-vyomlib-inspector-generic-card-widget-v2-tooltip',
                                group: 'general',
                                inedex: 1
                            },
                            Color: {
                                label: 'Color',
                                type: 'com-vyom-vyomlib-inspector-generic-card-widget-v2-bgcolor',
                                group: 'general',
                                index: 2
                            },

                            perRowCardLength: {
                                label: 'Row Wise Cards',
                                type: 'rx-inspector-optional-select',
                                options: [{
                                    value: "col-lg-12 col-md-12 col-sm-12",
                                    content: "One Card"
                }, {
                                    value: "col-lg-6 col-md-6 col-sm-6",
                                    content: "Two Cards"
                }, {
                                    value: "col-lg-4 col-md-4 col-sm-4",
                                    content: "Three Cards"
                }, {
                                    value: "col-lg-3 col-md-3 col-sm-3",
                                    content: "Four Cards"
                }, {
                                    value: "col-lg-2 col-md-2 col-sm-2",
                                    content: "Six Cards"
                }, {
                                    value: "col-lg-1 col-md-1 col-sm-1",
                                    content: "Twelve Cards"
                }],
                                defaultValue: "col-lg-4 col-md-4 col-sm-4",
                                group: 'general',
                                index: 3
                            },
                            imageHeight: {
                                label: 'Image height (in px)',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 4
                            },
                            imageWidth: {
                                label: 'Image width (in px)',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 5
                            },
                            imagePosition: {
                                label: 'Image position (For mobile view)',
                                type: 'select',
                                options: [{
                                    value: "start",
                                    content: "Left"
                }, {
                                    value: "center",
                                    content: "Center"
                }, {
                                    value: "end",
                                    content: "Right"
                }],
                                defaultValue: "center",
                                group: 'general',
                                index: 6
                            },
                            headerFontSize: {
                                label: 'Header Font size (in px)',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 7
                            },
                            noteFontSize: {
                                label: 'Note Font size (in px)',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 8
                            },
                            borderRadius: {
                                label: 'Card Border Radius in px',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 9
                            },
                            filterExpression: {
                                label: 'Filter Expression',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 10
                            },
                            descriptionFontSize: {
                                label: 'Description Size in px',
                                type: 'rx-inspector-expression-node-field',
                                group: 'general',
                                index: 11
                            },
                            cssClasses: {
                                label: 'CSS Classes',
                                type: 'rx-inspector-tag-input',
                                group: 'general',
                                index: 12
                            },

                            //fields
                            recordDefinition: {
                                label: 'Record Definition Name',
                                type: 'rx-inspector-definition-picker',
                                definitionType: RX_DEFINITION_PICKER.definitionTypes.record.type,
                                group: 'fields',
                                index: 1
                            },
                            fieldId: {
                                label: 'Image',
                                type: 'com-vyom-vyomlib-inspector-generic-card-widget-v2-attachment',
                                tooltip: {
                                    text: "Attachment should be available in the field.",
                                    placement: "left"
                                },
                                group: 'fields',
                                index: 2
                            },
                            header: {
                                label: 'Header',
                                type: 'com-vyom-vyomlib-inspector-generic-card-widget-v2-fields',
                                group: 'fields',
                                index: 3
                            },
                            description: {
                                label: 'Description',
                                type: 'com-vyom-vyomlib-inspector-generic-card-widget-v2-fields',
                                group: 'fields',
                                index: 4
                            },
                            note: {
                                label: 'Note',
                                type: 'com-vyom-vyomlib-inspector-generic-card-widget-v2-fields',
                                group: 'fields',
                                index: 5
                            },

                            leftButtonActionGuid: {
                                label: 'Left Button Action Guid',
                                type: 'rx-inspector-expression-node-field',
                                group: 'buttonConfiguration',
                                index: 1
                            },
                            leftButtonLabel: {
                                label: 'Left Button Label',
                                type: 'rx-inspector-expression-node-field',
                                group: 'buttonConfiguration',
                                index: 2
                            },
                            leftButtonColor: {
                                label: 'Left Button Color',
                                type: 'com-vyom-vyomlib-inspector-generic-card-widget-v2-bgcolor',
                                group: 'buttonConfiguration',
                                index: 3
                            },
                            leftButtonIcon: {
                                label: 'Left Button Icon',
                                type: 'com-vyom-vyomlib-inspector-generic-card-widget-v2-icon',
                                group: 'buttonConfiguration',
                                index: 4
                            },
                            leftButtonIconPosition: {
                                label: 'Left Button Icon Position',
                                type: 'rx-inspector-optional-select',
                                options: [{
                                    value: "left",
                                    content: "Left"
                                }, {
                                    value: "right",
                                    content: "Right"
                                }],
                                group: 'buttonConfiguration',
                                index: 5
                            },
                            rightButtonActionGuid: {
                                label: 'Right Button Action Guid',
                                type: 'rx-inspector-expression-node-field',
                                group: 'buttonConfiguration',
                                index: 6
                            },
                            rightButtonLabel: {
                                label: 'Right Button Label',
                                type: 'rx-inspector-expression-node-field',
                                group: 'buttonConfiguration',
                                index: 7
                            },
                            rightButtonColor: {
                                label: 'Right Button Color',
                                type: 'com-vyom-vyomlib-inspector-generic-card-widget-v2-bgcolor',
                                group: 'buttonConfiguration',
                                index: 8
                            },
                            rightButtonIcon: {
                                label: 'Right Button Icon',
                                type: 'com-vyom-vyomlib-inspector-generic-card-widget-v2-icon',
                                group: 'buttonConfiguration',
                                index: 9
                            },
                            rightButtonIconPosition: {
                                label: 'Right Button Icon Position',
                                type: 'rx-inspector-optional-select',
                                options: [{
                                    value: "left",
                                    content: "Left"
                                }, {
                                    value: "right",
                                    content: "Right"
                                }],
                                group: 'buttonConfiguration',
                                index: 10
                            },
                        }

                    },
                    groups: {
                        general: {
                            label: 'General',
                            index: 1,
                            closed: true
                        },
                        fields: {
                            label: 'Fields Configuration',
                            index: 2
                        },
                        buttonConfiguration: {
                            label: 'Button Configuration',
                            index: 3,
                            closed: true
                        }
                    }
                };
            }

            return {
                //  should return a model instance
                getModel: function (componentDefinition, componentDescriptor) {
                    return new comVyomVyomlibGenericCardWidgetV2Model(getRxConfig(componentDefinition, componentDescriptor));
                }
            };
        });
})();
