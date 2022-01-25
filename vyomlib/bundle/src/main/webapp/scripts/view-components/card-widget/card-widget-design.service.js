// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.card-widget')
    .factory('comVyomVyomlibCardWidgetDesign', function (comVyomVyomlibCardWidgetModel, rxGUID, RX_DEFINITION_PICKER) {
      function getRxConfig(componentDefinition, componentDescriptor) {
        return {
          id: componentDefinition.guid || rxGUID.generate(),
          type: componentDefinition.type,
          rxData: getRxData(componentDefinition, componentDescriptor),
          rxInspector: getRxInspector()
        };
      }

      // Getting configuration defined in Innovation Studio parameters.
      // We can also setup default values.
      function getRxData(componentDefinition, componentDescriptor) {
        var defaultcountSize = _.find(componentDescriptor.propertiesByName, {
          name: 'countSize'
        }).defaultValue;
        var defaultcount1 = _.find(componentDescriptor.propertiesByName, {
          name: 'count1'
        }).defaultValue;
        var defaultcount2 = _.find(componentDescriptor.propertiesByName, {
          name: 'count2'
        }).defaultValue;
        var defaultcount3 = _.find(componentDescriptor.propertiesByName, {
          name: 'count3'
        }).defaultValue;
        var defaultheader1 = _.find(componentDescriptor.propertiesByName, {
          name: 'header1'
        }).defaultValue;
        var defaultheader2 = _.find(componentDescriptor.propertiesByName, {
          name: 'header2'
        }).defaultValue;
        var defaultheader3 = _.find(componentDescriptor.propertiesByName, {
          name: 'header3'
        }).defaultValue;
        var defaultImageHeight = _.find(componentDescriptor.propertiesByName, {
          name: 'imageHeight'
        }).defaultValue;
        var defaultImageWidth = _.find(componentDescriptor.propertiesByName, {
          name: 'imageWidth'
        }).defaultValue;


        return {
          countSize: componentDefinition.propertiesByName.countSize || defaultcountSize,
          count1: componentDefinition.propertiesByName.count1 || defaultcount1,
          count2: componentDefinition.propertiesByName.count2 || defaultcount2,
          count3: componentDefinition.propertiesByName.count3 || defaultcount3,

          actionguid1: componentDefinition.propertiesByName.actionguid1,
          actionguid2: componentDefinition.propertiesByName.actionguid2,
          actionguid3: componentDefinition.propertiesByName.actionguid3,

          note1: componentDefinition.propertiesByName.note1,
          note2: componentDefinition.propertiesByName.note2,
          note3: componentDefinition.propertiesByName.note3,
          Color1: componentDefinition.propertiesByName.Color1,
          Color2: componentDefinition.propertiesByName.Color2,
          Color3: componentDefinition.propertiesByName.Color3,
          header1: componentDefinition.propertiesByName.header1 || defaultheader1,
          header2: componentDefinition.propertiesByName.header2 || defaultheader2,
          header3: componentDefinition.propertiesByName.header3 || defaultheader3,

          tooltip: componentDefinition.propertiesByName.tooltip,
          tooltip1: componentDefinition.propertiesByName.tooltip1,
          tooltip2: componentDefinition.propertiesByName.tooltip2,
          tooltip3: componentDefinition.propertiesByName.tooltip3,

          recordDefinition: componentDefinition.propertiesByName.recordDefinition,
          fieldId: componentDefinition.propertiesByName.fieldId,
          imageHeight: componentDefinition.propertiesByName.imageHeight || defaultImageHeight,
          imageWidth: componentDefinition.propertiesByName.imageWidth || defaultImageWidth,
          recordInstanceId1: componentDefinition.propertiesByName.recordInstanceId1,
          recordInstanceId2: componentDefinition.propertiesByName.recordInstanceId2,
          recordInstanceId3: componentDefinition.propertiesByName.recordInstanceId3

        };
      }

      // Defining the parameters types with helper.
      function getRxInspector() {
        return {
          inputs: {
            rxData: {
              recordDefinition: {
                label: 'Record Definition Name',
                type: 'rx-inspector-definition-picker',
                definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type,
                group: 'general',
                index: 1
              },
              fieldId: {
                label: 'Attachment Field',
                type: 'com-vyom-vyomlib-inspector-card-widget-attachment',
                group: 'general',
                index: 2
              },
              tooltip: {
                label: 'Tooltip',
                type: 'com-vyom-vyomlib-inspector-card-widget-tooltip',
                group: 'general',
                index: 3
              },
              countSize: {
                label: 'Count Size (in em)',
                type: 'rx-inspector-expression-node-field',
                group: 'general',
                index: 4
              },
              imageHeight: {
                label: 'Image height (in px)',
                type: 'rx-inspector-expression-node-field',
                group: 'general',
                index: 5
              },
              imageWidth: {
                label: 'Image width (in px)',
                type: 'rx-inspector-expression-node-field',
                group: 'general',
                index: 6
              },


              header1: {
                label: 'Header 1',
                type: 'rx-inspector-expression-node-field',
                group: 'Block1',
                index: 1
              },
              header2: {
                label: 'Header 2',
                type: 'rx-inspector-expression-node-field',
                group: 'Block2',
                index: 1
              },
              header3: {
                label: 'Header 3',
                type: 'rx-inspector-expression-node-field',
                group: 'Block3',
                index: 1
              },

              count1: {
                label: 'Count 1',
                type: 'rx-inspector-expression-node-field',
                group: 'Block1',
                index: 2
              },
              count2: {
                label: 'Count 2',
                type: 'rx-inspector-expression-node-field',
                group: 'Block2',
                index: 2
              },
              count3: {
                label: 'Count 3',
                type: 'rx-inspector-expression-node-field',
                group: 'Block3',
                index: 2
              },
              actionguid1: {
                label: 'Action Button Guid 1',
                type: 'rx-inspector-expression-node-field',
                group: 'Block1',
                index: 4
              },
              actionguid2: {
                label: 'Action Button Guid 2',
                type: 'rx-inspector-expression-node-field',
                group: 'Block2',
                index: 5
              },
              actionguid3: {
                label: 'Action Button Guid 3',
                type: 'rx-inspector-expression-node-field',
                group: 'Block3',
                index: 6
              },

              note1: {
                label: 'Note 1',
                type: 'rx-inspector-expression-node-field',
                group: 'Block1',
                index: 3
              },
              note2: {
                label: 'Note 2',
                type: 'rx-inspector-expression-node-field',
                group: 'Block2',
                index: 3
              },
              note3: {
                label: 'Note 3',
                type: 'rx-inspector-expression-node-field',
                group: 'Block3',
                index: 3
              },

              Color1: {
                label: 'Color 1',
                type: 'com-vyom-vyomlib-inspector-card-widget-bgcolor',
                group: 'Block1',
                index: 4
              },
              Color2: {
                label: 'Color 2',
                type: 'com-vyom-vyomlib-inspector-card-widget-bgcolor',
                group: 'Block2',
                index: 4
              },
              Color3: {
                label: 'Color 3',
                type: 'com-vyom-vyomlib-inspector-card-widget-bgcolor',
                group: 'Block3',
                index: 4
              },
              tooltip1: {
                label: 'Tooltip 1',
                type: 'rx-inspector-expression-node-field',
                group: 'Block1',
                index: 5
              },
              tooltip2: {
                label: 'Tooltip 2',
                type: 'rx-inspector-expression-node-field',
                group: 'Block2',
                index: 5
              },
              tooltip3: {
                label: 'Tooltip 3',
                type: 'rx-inspector-expression-node-field',
                group: 'Block3',
                index: 5
              },
              recordInstanceId1: {
                label: 'recordInstanceId for Image 1',
                type: 'rx-inspector-expression-node-field',
                group: 'Block1',
                index: 6
              },
              recordInstanceId2: {
                label: 'recordInstanceId for Image 2',
                type: 'rx-inspector-expression-node-field',
                group: 'Block2',
                index: 6
              },
              recordInstanceId3: {
                label: 'recordInstanceId for Image 3',
                type: 'rx-inspector-expression-node-field',
                group: 'Block3',
                index: 6
              },

            }
          },
          groups: {
            general: {
              label: 'General',
              index: 1
            },
            Block1: {
              label: 'Block1',
              closed: true,
              index: 2
            },
            Block2: {
              label: 'Block2',
              closed: true,
              index: 3
            },
            Block3: {
              label: 'Block3',
              closed: true,
              index: 4
            },

          }
        };
      }

      return {
        //  should return a model instance
        getModel: function (componentDefinition, componentDescriptor) {
          return new comVyomVyomlibCardWidgetModel(getRxConfig(componentDefinition, componentDescriptor));
        }
      };
    });
})();