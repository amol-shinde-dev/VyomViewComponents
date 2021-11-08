(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.nvd3-barchart')
    .config(function (rxViewComponentProvider) {
      rxViewComponentProvider.registerComponent([
        {
          name: 'NvD3 Bar Chart',
          group: 'vyomlib',
          icon: 'chart_bar_3',
          type: 'com-vyom-vyomlib-nvd3-barchart',
          designType: 'com-vyom-vyomlib-nvd3-barchart-design',
          bundleId: 'com.vyom.vyomlib',
          designManagerService: 'comVyomVyomlibNvd3BarchartDesignManager',
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
            // {
            //   name: 'height',
            //   type: 'number',
            //   isConfig: true,     // Input parameter
            //   isRequired: false,  //  required
            //   defaultValue: '300'
            // },
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
              // You need at least one Output variable to have a custom
              // refresh method, even if this is not used later in the code.
              name: 'testFlag',
              type: 'string',
              isProperty: true,
              enableExpressionEvaluation: true
            }, {
              name: 'id',
              type: 'string',
              isConfig: true,
              enableExpressionEvaluation: true
            }
          ]
        }
      ]);
    });
})();
