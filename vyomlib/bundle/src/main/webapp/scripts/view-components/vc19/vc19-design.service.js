// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc19').factory('comVyomVyomlibVc19Design', function (comVyomVyomlibVc19Model, rxGUID, RX_DEFINITION_PICKER, RX_RECORD_GRID, rxAction, rxRecordGridUtils, rxDesignerCache) {
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


            var defaultdisplayIdFieldID = _.find(componentDescriptor.propertiesByName, {
                name: 'displayIdFieldID'
            }).defaultValue;

            var defaultCreatedDateFieldID = _.find(componentDescriptor.propertiesByName, {
                name: 'CreatedDateFieldID'
            }).defaultValue;

            var defaultViewReqColor = _.find(componentDescriptor.propertiesByName, {
                name: 'ViewReqColor'
            }).defaultValue;
            var defaultViewReqLabel = _.find(componentDescriptor.propertiesByName, {
                name: 'ViewReqLabel'
            }).defaultValue;




            return {
                enabledDownloadButton: (componentDefinition.propertiesByName.enabledDownloadButton == 'true') ? true : false,
                recordDefinitionFullName: componentDefinition.propertiesByName.recordDefinitionFullName,
                ApprovalFieldID: componentDefinition.propertiesByName.ApprovalFieldID,
                CreatedDateFieldID: componentDefinition.propertiesByName.CreatedDateFieldID || defaultCreatedDateFieldID,
                DueDateFieldID: componentDefinition.propertiesByName.DueDateFieldID,
                AdditionalField: componentDefinition.propertiesByName.AdditionalField,
                editActionGUID: componentDefinition.propertiesByName.editActionGUID,
                approveActionGUID: componentDefinition.propertiesByName.approveActionGUID,
                commentField: componentDefinition.propertiesByName.commentField,
                list: componentDefinition.propertiesByName.list,
                displayIdFieldID: componentDefinition.propertiesByName.displayIdFieldID || defaultdisplayIdFieldID,
                HiddenTargetAchievment: (componentDefinition.propertiesByName.HiddenTargetAchievment == 'true') ? true : false,
                ApprovalField: (componentDefinition.propertiesByName.ApprovalField == 'true') ? true : false,

                DueDateField: (componentDefinition.propertiesByName.DueDateField == 'true') ? true : false,
                displayIdField: (componentDefinition.propertiesByName.displayIdField == 'true') ? true : false,

                NewColor: componentDefinition.propertiesByName.NewColor,
                InProgressColor: componentDefinition.propertiesByName.InProgressColor,
                ClosedColor: componentDefinition.propertiesByName.ClosedColor,


                ViewReqGuid: componentDefinition.propertiesByName.ViewReqGuid,
                ViewReqColor: componentDefinition.propertiesByName.ViewReqColor || defaultViewReqColor,
                ViewReqLabel: componentDefinition.propertiesByName.ViewReqLabel || defaultViewReqLabel,
                FilterExp: componentDefinition.propertiesByName.FilterExp






            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        enabledDownloadButton: {
                            label: 'Enable Download Button',
                            type: 'rx-inspector-toggle-field',
                            group: 'TableHeader',
                            index: 1
                        },
                        recordDefinitionFullName: {
                            label: 'Record Definition Name',
                            type: 'rx-inspector-definition-picker',
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type,
                            group: 'TableBody',
                            index: 1
                        },
                        ApprovalFieldID: {
                            label: 'Approval Field',
                            type: 'com-vyom-vyomlib-inspector-vc19-fields',
                            group: 'TableBody',
                            index: 2
                        },
                        CreatedDateFieldID: {
                            label: 'Submitted Date Field',
                            type: 'com-vyom-vyomlib-inspector-vc19-fields',
                            group: 'TableBody',
                            index: 3
                        },
                        DueDateFieldID: {
                            label: 'Due Date Field',
                            type: 'com-vyom-vyomlib-inspector-vc19-fields',
                            group: 'TableBody',
                            index: 4
                        },
                        displayIdFieldID: {
                            label: 'Display ID Field',
                            type: 'com-vyom-vyomlib-inspector-vc19-fields',
                            group: 'TableBody',
                            index: 5
                        },
                        commentField: {
                            label: 'Comments',
                            type: 'com-vyom-vyomlib-inspector-vc19-fields',
                            group: 'TableBody',
                            index: 6

                        },
                        editActionGUID: {
                            label: 'Edit Action GUID (Display ID)',
                            type: 'rx-inspector-expression-node-field',
                            group: 'TableBody',
                            index: 7

                        },
                        approveActionGUID: {
                            label: 'Edit Action GUID (Reject btn)',
                            type: 'rx-inspector-expression-node-field',
                            group: 'TableBody',
                            index: 8

                        },
                        FilterExp: {
                            label: 'FilterExp',
                            type: 'rx-inspector-expression-node-field',
                            group: 'TableBody',
                            index: 9

                        },

                        ApprovalField: {
                            label: 'Hide Approval Field',
                            type: 'rx-inspector-toggle-field',
                            group: 'HideFields',
                            index: 1
                        },



                        DueDateField: {
                            label: 'Hide Due Date Field',
                            type: 'rx-inspector-toggle-field',
                            group: 'HideFields',
                            index: 2
                        },


                        displayIdField: {
                            label: 'Hide displayId Field',
                            type: 'rx-inspector-toggle-field',
                            group: 'HideFields',
                            index: 3
                        },
                        AdditionalField: {
                            label: 'Additional Field',
                            type: 'com-vyom-vyomlib-inspector-vc19-steps',
                            group: 'AdditionalFields',
                            index: 1

                        },
                        list: {
                            label: 'List',
                            type: 'com-vyom-vyomlib-inspector-vc19-list',
                            tooltip: {
                                text: "Select field name from dropdown and click on Add button",
                                placement: "left"
                            },
                            group: 'AdditionalFields',
                            index: 2

                        },

                        HiddenTargetAchievment: {
                            label: 'Hide Target Achievment',
                            type: 'rx-inspector-toggle-field',
                            group: 'HideFields',
                            index: 4

                        },
                        ViewReqGuid: {
                            label: 'Guid',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "Copy Paste Action button guid from {}Json tab",
                                placement: "left"
                            },
                            group: 'TableFooter',
                            index: 1

                        },
                        ViewReqColor: {
                            label: 'Color',
                            type: 'com-vyom-vyomlib-inspector-vc19-color',
                            group: 'TableFooter',
                            index: 2

                        },
                        ViewReqLabel: {
                            label: 'Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'TableFooter',
                            index: 3

                        },
                        NewColor: {
                            label: 'New',
                            type: 'com-vyom-vyomlib-inspector-vc19-bgcolor',
                            group: 'StatusColor',
                            index: 1

                        },
                        InProgressColor: {
                            label: 'In Progress',
                            type: 'com-vyom-vyomlib-inspector-vc19-bgcolor',
                            group: 'StatusColor',
                            index: 2

                        },
                        ClosedColor: {
                            label: 'Closed',
                            type: 'com-vyom-vyomlib-inspector-vc19-bgcolor',
                            group: 'StatusColor',
                            index: 3

                        }


                    }
                },
                groups: {

                    TableHeader: {
                        label: 'Table Header',
                        closed: true,
                        index: 1
                    },
                    TableBody: {
                        label: 'Table Body',
                        index: 2
                    },
                    AdditionalFields: {
                        label: 'Additional Fields',
                        closed: true,
                        index: 3
                    },
                    TableFooter: {
                        label: 'TableFooter',
                        closed: true,
                        index: 4
                    },
                    HideFields: {
                        label: 'Hide Table Body Fields',
                        closed: true,
                        index: 5
                    },

                    StatusColor: {
                        label: 'Status Color',
                        closed: false,
                        index: 6
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibVc19Model(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
