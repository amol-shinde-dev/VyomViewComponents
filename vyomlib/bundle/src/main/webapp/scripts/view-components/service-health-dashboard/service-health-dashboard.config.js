(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.service-health-dashboard')
    .config(function (rxViewComponentProvider) {
      rxViewComponentProvider.registerComponent([
        {
          name: 'Service Health Dashboard',
          group: 'vyomlib',
          icon: 'word_square',
          type: 'com-vyom-vyomlib-service-health-dashboard',
          designType: 'com-vyom-vyomlib-service-health-dashboard-design',
          designManagerService: 'comVyomVyomlibServiceHealthDashboardDesign',
          bundleId: 'com.vyom.vyomlib',
          propertiesByName: [
            {
              name: 'recordDefinitionName',
              isConfig: true,
              type: "string",
              isRequired: true
            }, {
              name: 'incidentRecordDefinition',
              isConfig: true,
              type: "string",
              isRequired: true
            }, {
              name: 'cardName',
              isConfig: true,
            }, {
              name: 'status',
              isConfig: true,
            },
          ]
        }
      ]);
    });
})();