(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.nvd3-barchart')
    .factory('comVyomVyomlibNvd3BarchartDesignManager',
      function (comVyomVyomlibNvd3BarchartModel,
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
            title: componentDefinition.propertiesByName.title,
            color: componentDefinition.propertiesByName.color,
            height: componentDefinition.propertiesByName.height,
            groupByFieldID: componentDefinition.propertiesByName.groupByFieldID,
            expression: componentDefinition.propertiesByName.expression,
            id: componentDefinition.propertiesByName.id
          };
        }

        function getRxInspector() {
          return {
            inputs: {
              rxData: {
                title: {
                  label: 'Title',
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
                id: {
                  label: 'Chart Id',
                  type: 'rx-inspector-expression-node-field',
                  group: 'general',
                  index: 3
                },
                color: {
                  label: 'Color',
                  type: 'rx-inspector-expression-node-field',
                  tooltip: {
                    text: "You can give a hex colour values. For eg. hex value of orange is #ff9800",
                    placement: "left"
                  },
                  group: 'general',
                  index: 3
                },
                // height: {
                //   label: 'Pie_Height',
                //   type: 'rx-inspector-expression-node-field',
                //   group: 'general',
                //   index: 4
                // },
                groupByFieldID: {
                  label: 'Group By Field Id',
                  type: 'rx-inspector-expression-node-field',
                  group: 'general',
                  index: 5
                },
                expression: {
                  label: 'Filter Expression For Data',
                  type: 'rx-inspector-expression-node-field',
                  group: 'general',
                  index: 6
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
            return new comVyomVyomlibNvd3BarchartModel(getRxConfig(componentDefinition, componentDescriptor));
          }
        };
      });
})();
