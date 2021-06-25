(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc19')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Approvals',
                    group: 'vyomlib',
                    icon: 'approvals_change',
                    type: 'com-vyom-vyomlib-vc19',
                    designType: 'com-vyom-vyomlib-vc19-design',
                    designManagerService: 'comVyomVyomlibVc19Design',
                    bundleId: 'com.vyom.vyomlib',

                    propertiesByName: [
                        {
                            name: 'enabledDownloadButton',
                            enableExpressionEvaluation: true,
                            type: 'boolean',
                            isConfig: true
                    },
                        {
                            name: 'recordDefinitionFullName',
                            isRequired: true,
                            type: 'string',
                            isConfig: true
                    },
                        {
                            name: 'ApprovalFieldID',
                            isConfig: true,
                            isRequired: true,
                            type: 'string'
                    },
                        {
                            name: 'ApprovalField',
                            type: "boolean",
                            enableExpressionEvaluation: true,
                            isConfig: true

                    },
                        {
                            name: 'CreatedDateFieldID',
                            isConfig: true,
                            isRequired: true,
                            defaultValue: 3,
                            type: 'string'
                    },

                        {
                            name: 'DueDateFieldID',
                            isConfig: true,
                            isRequired: true,
                            type: 'string'
                    },
                        {
                            name: 'DueDateField',
                            type: "boolean",
                            enableExpressionEvaluation: true,
                            isConfig: true
                    }, {
                            name: 'commentField',
                            isConfig: true
                    },
                        {
                            name: 'AdditionalField',
                            isConfig: true,
                            type: 'string',
                            enableExpressionEvaluation: true


                    },
                        {
                            name: 'list',
                            isConfig: true



                    },
                        {
                            name: 'displayIdFieldID',
                            isRequired: true,
                            defaultValue: 1,
                            isConfig: true



                    },
                        {
                            name: 'displayIdField',
                            type: "boolean",
                            enableExpressionEvaluation: true,
                            isConfig: true



                    },
                        {
                            name: 'ViewReqColor',
                            isConfig: true,
                            defaultValue: 'orange'



                    },
                        {
                            name: 'ViewReqLabel',
                            type: "string",
                            isConfig: true,
                            defaultValue: '"View All Requests"',
                            enableExpressionEvaluation: true



                    },

                        {
                            name: 'HiddenTargetAchievment',
                            type: "boolean",
                            isConfig: true,
                            enableExpressionEvaluation: true



                    },
                        {
                            name: 'ViewReqGuid',
                            isConfig: true



                    },

                        {
                            name: 'FilterExp',
                            isConfig: true


                    }
                    ,
                        {
                            name: 'NewColor',
                            isConfig: true



                    },

                        {
                            name: 'InProgressColor',
                            isConfig: true



                    },

                        {
                            name: 'ClosedColor',
                            isConfig: true



                    }
                    ,

                        {
                            name: 'SelectedInstanceID',
                            isProperty: true



                    },

                        {
                            name: 'editActionGUID',
                            isConfig: true



                    },
                        {
                            name: 'approveActionGUID',
                            isConfig: true



                    },
                ]
            }
        ]);
        });
})();
