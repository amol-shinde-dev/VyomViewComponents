// This code is run at "design" phase, in Vyomlib Studio.
// The factory is declared in the "config.js".
(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.service-health-dashboard')
    .factory('comVyomVyomlibServiceHealthDashboardDesign',
      function (comVyomVyomlibServiceHealthDashboardModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
          return {
            id: componentDefinition.guid || rxGUID.generate(),
            type: componentDefinition.type,
            rxData: getRxData(componentDefinition, componentDescriptor),
            rxInspector: getRxInspector()
          };
        }

        // Getting configuration defined in App1 Studio parameters.
        // We can also setup default values.
        function getRxData(componentDefinition, componentDescriptor) {

          return {
            recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
            incidentRecordDefinition: componentDefinition.propertiesByName.incidentRecordDefinition,
            cardName: componentDefinition.propertiesByName.cardName,
            status: componentDefinition.propertiesByName.status,
          };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
          return {
            inputs: {
              rxData: {
                recordDefinitionName: {
                  label: 'Record Name',
                  type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                  definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                  group: 'general',
                  index: 1
                }, incidentRecordDefinition: {
                  label: 'Incident Record Name',
                  type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                  definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                  group: 'general',
                  index: 1
                },
                cardName: {
                  label: 'Card Name',
                  type: 'com-vyom-vyomlib-inspector-service-health-dashboard-fields',
                  group: 'general',
                  index: 2
                },
                status: {
                  label: 'Card status',
                  type: 'com-vyom-vyomlib-inspector-service-health-dashboard-fields',
                  group: 'general',
                  index: 3
                }
              }
            },
            groups: {
              general: {
                label: 'General',
                index: 1
              }
            }
          };
        }

        return {
          //  should return a model instance
          getModel: function (componentDefinition, componentDescriptor) {
            return new comVyomVyomlibServiceHealthDashboardModel(getRxConfig(componentDefinition, componentDescriptor));
          }
        };
      });
})();