(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.kanbanadv')
    .config(function (rxViewComponentProvider) {
      var starRatingDescriptor = {
        name: 'KanbanAdv',
        group: 'vyomlib',
        icon: 'table_2',
        type: 'com-vyom-vyomlib-kanbanadv',  // the name of runtime directive
        designType: 'com-vyom-vyomlib-kanbanadv-design', // register design directive
        designManagerService: 'comVyomVyomlibKanbanadvDesign',
        bundleId: 'com.vyom.vyomlib',

        // define component properties
        propertiesByName: [
          {
            name: 'recordDefinitionName',
            type: 'string',
            isConfig: true,     // Input parameter
            isRequired: false,  // required
          },
          {
            name: 'ID',
            isConfig: true, //input param
            isRequired: false,
            type: 'string'

          },
          {
            name: 'summary',
            isConfig: true, //input param
            isRequired: false,
            type: 'string'

          },
          {
            name: 'Status',
            isConfig: true, //input param
            isRequired: false,
            type: 'string'

          },
          {
            name: 'priority',
            type: 'string',
            isConfig: true,     // Input parameter
            isRequired: false,  // required
          },
          {
            name: 'dropcardworking_GUID',
            type: 'string',
            isConfig: true,     // Input parameter
            isProperty: false,  // Not an output parameter
            isRequired: false,  //  required
            enableExpressionEvaluation: true    // The expression will be evaluated.
          },
          {
            name: 'ViewGuid',
            type: 'string',
            isConfig: true,     // Input parameter
            isProperty: false,  // Not an output parameter
            isRequired: false,  // Not required
            enableExpressionEvaluation: true    // The expression will be evaluated.
          },
          {
            name: 'CreateTicket',
            type: 'string',
            isConfig: true,     // Input parameter
            isProperty: false,  // Not an output parameter
            isRequired: false,  // Not required
            enableExpressionEvaluation: true    // The expression will be evaluated.
          }

        ]
      };

      rxViewComponentProvider.registerComponent(starRatingDescriptor);
    });
})();