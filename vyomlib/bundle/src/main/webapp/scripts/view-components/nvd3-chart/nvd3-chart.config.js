(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.nvd3-chart')
    .config(function (rxViewComponentProvider) {
      rxViewComponentProvider.registerComponent([
        {
          name: 'NvD3 Donut Chart',
          group: 'vyomlib',
          icon: 'chart_donut',
          type: 'com-vyom-vyomlib-nvd3-chart',
          designType: 'com-vyom-vyomlib-nvd3-chart-design',
          bundleId: 'com.vyom.vyomlib',
          designManagerService: 'comVyomVyomlibNvd3ChartDesignManager',
          canBeEmbeddedInRecordEditor: true,
          propertiesByName: [
            {
              name: 'title',
              type: 'string',
              isConfig: true,
              enableExpressionEvaluation: true
            },
            {
              name: 'color',
              type: 'string',
              isConfig: true, // Input parameter
              isRequired: true //  required
            },
            {
              name: 'height',
              type: 'number',
              isConfig: true,     // Input parameter
              isRequired: false,  //  required
              defaultValue: '300'
            },
            {
              name: 'recordDefinitionName',
              type: 'string',
              isConfig: true
            },
            {
              name: 'groupByFieldID',
              type: 'string',
              isConfig: true,
              enableExpressionEvaluation: true
            },
            {
              name: 'expression',
              isConfig: true,     // Input parameter
              isRequired: false,  //  required
              type: 'string',
              enableExpressionEvaluation: true
            },
            {
              name: 'testFlag',
              type: 'string',
              isProperty: true,
              enableExpressionEvaluation: true
            },
            {
              name: 'labeltype',
              type: 'string',
              isConfig: true,     // Input parameter
              defaultValue: 'number'
            }
          ]
        }
      ]);
    });
})();