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
              enableExpressionEvaluation: false,
            }, {
              name: 'fieldId',
              type: 'string',
              isConfig: true,
              isProperty: false,
              enableExpressionEvaluation: true
            }, {
              name: 'count',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true,
              defaultValue: '0'
            }, {
              name: 'actionguid',
              isConfig: true,
            }, {
              name: 'note',
              isConfig: true,
              type: "string",
              enableExpressionEvaluation: true
            }, {
              name: 'Color',
              isRequired: true,
              isConfig: true
            }, {
              name: 'header',
              isConfig: true,
              enableExpressionEvaluation: true,
            }, {
              name: 'perRowCardLength',
              isConfig: true,
            }, {
              name: 'CardInstanceId',
              isProperty: true,
            },
          ]
        }
      ]);
    });
})();