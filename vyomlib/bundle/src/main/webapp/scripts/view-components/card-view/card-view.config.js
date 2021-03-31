(function () {
  'use strict';
  angular.module('com.vyom.vyomlib.view-components.card-view')
    .config(function (rxViewComponentProvider) {
      rxViewComponentProvider.registerComponent([
        {
          name: 'Card View',
          group: 'vyomlib',
          icon: 'layout_preview',
          type: 'com-vyom-vyomlib-card-view',
          designType: 'com-vyom-vyomlib-card-view-design',
          designManagerService: 'comVyomVyomlibCardViewDesign',
          bundleId: 'com.vyom.vyomlib',
          canBeEmbeddedInRecordEditor: true,
          propertiesByName: [
            {
              name: 'count1',
              isProperty: true,
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true,
              defaultValue: '0'
            }, {
              name: 'count2',
              isProperty: true,
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true,
              defaultValue: '0'
            }, {
              name: 'count3',
              isProperty: true,
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true,
              defaultValue: '0'
            }, {
              name: 'innerBlockWidth',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true,
              defaultValue: '1500'
            }, {
              name: 'actionguid1',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true
            },
            {
              name: 'actionguid2',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true
            }, {
              name: 'actionguid3',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true
            },
            {
              name: 'tooltip1',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true,
            },
            {
              name: 'tooltip2',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true,
            },
            {
              name: 'tooltip3',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true,
            }, {
              name: 'note1',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true
            }, {
              name: 'note2',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true
            }, {
              name: 'note3',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true
            }, {
              name: 'Color1',
              isRequired: true,
              isConfig: true
            }, {
              name: 'Color2',
              isConfig: true,
              isRequired: true
            }, {
              name: 'Color3',
              isConfig: true,
              isRequired: true
            }, {
              name: 'header1',
              isConfig: true,
              enableExpressionEvaluation: true,
              defaultValue: '"Manage Subscription"'
            }, {
              name: 'header2',
              isConfig: true,
              enableExpressionEvaluation: true,
              defaultValue: '"Incident Management"'
            }, {
              name: 'header3',
              isConfig: true,
              enableExpressionEvaluation: true,
              defaultValue: '"Change Management"'
            }, {
              name: 'recordDefinition',
              type: 'string',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: false,
            },
            {
              name: 'fieldId',
              type: 'string',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: true
            },
            {
              name: 'recordInstanceId1',
              type: 'string',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: true
            },
            {
              name: 'recordInstanceId2',
              type: 'string',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: true
            },
            {
              name: 'recordInstanceId3',
              type: 'string',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: true
            },
          ]
        }
      ]);
    });
})();