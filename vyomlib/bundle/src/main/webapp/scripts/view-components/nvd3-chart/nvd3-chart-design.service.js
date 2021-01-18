(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.nvd3-chart')
        .factory('comVyomVyomlibNvd3ChartDesignManager',
            function (comVyomVyomlibNvd3ChartModel,
                rxGUID,
                RX_DEFINITION_PICKER) {
                function getRxConfig(componentDefinition, componentDescriptor) {
                    return {
                        id: componentDefinition.guid || rxGUID.generate(),
                        type: componentDefinition.type,
                        rxData: getRxData(componentDefinition, componentDescriptor),
                        rxInspector: getRxInspector()
                    };
                }

                function getRxData(componentDefinition, componentDescriptor) {
                    return {
                        recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                        title: componentDefinition.propertiesByName.title,
                        color: componentDefinition.propertiesByName.color,
                        height: componentDefinition.propertiesByName.height,
                        XPos: componentDefinition.propertiesByName.XPos,
                        YPos: componentDefinition.propertiesByName.YPos,
                        groupByFieldID: componentDefinition.propertiesByName.groupByFieldID,
                        expression: componentDefinition.propertiesByName.expression,
                        parentInstanceID: componentDefinition.propertiesByName.parentInstanceID,
                        AssociationName: componentDefinition.propertiesByName.AssociationName,
                        node: componentDefinition.propertiesByName.node
                    };
                }

                function getRxInspector() {
                    return {
                        inputs: {
                            rxData: {
                                title: {
                                    label: 'Title',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'general',
                                    index: 1
                                },
                                recordDefinitionName: {
                                    label: 'Record Definition Name',
                                    type: 'rx-inspector-definition-picker',
                                    definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type,
                                    group: 'general',
                                    index: 2
                                },
                                color: {
                                    label: 'Color',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'general',
                                    index: 3
                                },
                                height: {
                                    label: 'Pie_Height',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'general',
                                    index: 4
                                },
                                // XPos: {
                                //   label: 'X Position',
                                //   type: 'rx-inspector-expression-node-field',
                                //   group: 'general',
                                //   index: 5
                                // },
                                // YPos: {
                                //   label: 'Y Position',
                                //   type: 'rx-inspector-expression-node-field',
                                //   group: 'general',
                                //   index: 6
                                // },
                                groupByFieldID: {
                                    label: 'group By Field Id',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'general',
                                    index: 7
                                },
                                expression: {
                                    label: 'Filter Expression For Data',
                                    type: 'rx-inspector-expression-node-field',
                                    tooltip: {
                                        text: "Enter a condition in String Format eg.(\"'10740xxx'=\\\"IncidentManagment\\\"\")",
                                        placement: "left"
                                    },
                                    group: 'general',
                                    index: 8
                                },
                                AssociationName: {
                                    label: 'Association Name (optional)',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'association',
                                    index: 9
                                },
                                parentInstanceID: {
                                    label: 'parent Instance ID (optional)',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'association',
                                    index: 10
                                },
                                node: {
                                    label: 'node (optional: nodeA, nodeB)',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'association',
                                    index: 11
                                }
                            }
                        },
                        groups: {
                            general: {
                                label: 'General',
                                index: 1
                            },
                            association: {
                                label: 'Association',
                                index: 2
                            }
                        }
                    };
                }

                return {
                    getModel: function (componentDefinition, componentDescriptor) {
                        return new comVyomVyomlibNvd3ChartModel(getRxConfig(componentDefinition, componentDescriptor));
                    }
                };
            });
})();
