(function () {
  'use strict';
  angular.module('com.vyom.vyomlib.view-components.generic-card-widget')
    .config(function (rxViewComponentProvider) {
      rxViewComponentProvider.registerComponent([
        {
          name: 'Generic Card Widget',
          group: 'vyomlib',
          icon: 'layout_preview',
          type: 'com-vyom-vyomlib-generic-card-widget',
          designType: 'com-vyom-vyomlib-generic-card-widget-design',
          designManagerService: 'comVyomVyomlibGenericCardWidgetDesign',
          bundleId: 'com.vyom.vyomlib',
          canBeEmbeddedInRecordEditor: true,
          propertiesByName: [
            {
              name: 'recordDefinition',
              type: 'string',
              isConfig: true,
              isProperty: false,
            }, {
              name: 'fieldId',
              type: 'string',
              isConfig: true,
              isProperty: false,
            }, {
              name: 'count',
              isConfig: true,
              type: "string",
              defaultValue: '0'
            }, {
              name: 'actionguid',
              isConfig: true,
            }, {
              name: 'note',
              isConfig: true,
              type: "string",
            }, {
              name: 'Color',
              isRequired: true,
              isConfig: true
            }, {
              name: 'header',
              isConfig: true,
            }, {
              name: 'tooltip',
              isConfig: true,
            }, {
              name: 'tooltipConfig',
              isConfig: true,
            }, {
              name: 'perRowCardLength',
              isConfig: true,
            }, {
              name: 'CardInstanceId',
              isProperty: true,
            }, {
              name: 'imageHeight',
              type: 'number',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: true,
              defaultValue: 100
            }, {
              name: 'imageWidth',
              type: 'number',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: true,
              defaultValue: 100
            }, {
              name: 'imagePosition',
              type: 'String',
              isConfig: true,
              isProperty: false,
              defaultValue: "center"
            },
            {
              name: 'headerFontSize',
              type: 'number',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: true,
              defaultValue: 24
            },
            {
              name: 'noteFontSize',
              type: 'number',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: true,
              defaultValue: 13
            }, {
              name: 'borderRadius',
              type: 'number',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: true,
              defaultValue: 0
            }, {
              name: 'categoryFilter',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: true,
            }
          ]
        }
      ]);
    });
})();