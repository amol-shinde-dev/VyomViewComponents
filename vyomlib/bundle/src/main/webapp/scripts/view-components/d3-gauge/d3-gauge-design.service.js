(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.d3-gauge')
    .factory('comVyomVyomlibD3GaugeDesignManager',
      function (comVyomVyomlibD3GaugeModel,
        rxGUID,
        RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition) {
          return {
            id: componentDefinition.guid || rxGUID.generate(),
            type: componentDefinition.type,
            rxData: getRxData(componentDefinition),
            rxInspector: getRxInspector()
          };
        }

        function getRxData(componentDefinition) {
          return {
            recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
            recordInstanceId: componentDefinition.propertiesByName.recordInstanceId,
            fieldId: componentDefinition.propertiesByName.fieldId,
            title: componentDefinition.propertiesByName.title,
            id: componentDefinition.propertiesByName.id,
            name: componentDefinition.propertiesByName.name,
            min: componentDefinition.propertiesByName.min,
            max: componentDefinition.propertiesByName.max
          };
        }

        function getRxInspector() {
          return {
            inputs: {
              rxData: {
                id: {
                  label: 'Gauge chart Id',
                  type: 'rx-inspector-expression-node-field',
                  group: 'general',
                  index: 1
                },
                recordDefinitionName: {
                  label: 'Record Definition Name',
                  type: 'rx-inspector-definition-picker',
                  definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type,
                  group: 'general',
                  index: 2
                },
                recordInstanceId: {
                  label: 'Record Instance ID',
                  type: 'rx-inspector-expression-node-field',
                  group: 'general',
                  index: 3
                },
                fieldId: {
                  label: 'Field Id (Integer Type)',
                  type: 'com-vyom-vyomlib-inspector-d3-gauge-fied-select',
                  group: 'general',
                  index: 4
                },
                name: {
                  label: 'Chart label',
                  type: 'rx-inspector-expression-node-field',
                  group: 'general',
                  index: 5
                },
                min: {
                  label: 'Minimum scale',
                  type: 'rx-inspector-expression-node-field',
                  group: 'general',
                  index: 6
                },
                max: {
                  label: 'Maximum scale',
                  type: 'rx-inspector-expression-node-field',
                  group: 'general',
                  index: 7
                },
              }
            },
            groups: {
              general: {
                label: 'General',
                index: 1
              },
            }
          };
        }

        return {
          getModel: function (componentDefinition, componentDescriptor) {
            return new comVyomVyomlibD3GaugeModel(getRxConfig(componentDefinition, componentDescriptor));
          }
        };
      });
})();
