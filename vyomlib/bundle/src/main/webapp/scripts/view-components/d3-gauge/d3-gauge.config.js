(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.d3-gauge')
    .config(function (rxViewComponentProvider) {
      rxViewComponentProvider.registerComponent([
        {
          name: 'd3 gauge chart',
          group: 'vyomlib',
          icon: 'speedometer',
          type: 'com-vyom-vyomlib-d3-gauge',
          designType: 'com-vyom-vyomlib-d3-gauge-design',
          bundleId: 'com.vyom.vyomlib',
          designManagerService: 'comVyomVyomlibD3GaugeDesignManager',
          canBeEmbeddedInRecordEditor: true,
          propertiesByName: [
            {
              name: 'id',
              type: 'string',
              isConfig: true,
              enableExpressionEvaluation: true
            }, {
              name: 'recordDefinitionName',
              type: 'string',
              isConfig: true
            }, {
              name: 'recordInstanceId',
              type: 'string',
              isConfig: true,
              enableExpressionEvaluation: true
            }, {
              name: 'fieldId',
              type: 'string',
              isConfig: true,
              enableExpressionEvaluation: true
            }, {
              name: 'name',
              type: 'string',
              isConfig: true,
              enableExpressionEvaluation: true
            }, {
              name: 'min',
              type: 'number',
              isConfig: true,
              enableExpressionEvaluation: true
            }, {
              name: 'max',
              type: 'number',
              isConfig: true,
              enableExpressionEvaluation: true
            }
          ]
        }
      ]);
    });
})();
