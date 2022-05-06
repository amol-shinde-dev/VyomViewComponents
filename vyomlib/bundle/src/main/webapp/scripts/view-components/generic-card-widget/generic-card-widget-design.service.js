// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.generic-card-widget')
    .factory('comVyomVyomlibGenericCardWidgetDesign', function (comVyomVyomlibGenericCardWidgetModel, rxGUID, RX_DEFINITION_PICKER) {
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
        var defaultImageHeight = _.find(componentDescriptor.propertiesByName, {
          name: 'imageHeight'
        }).defaultValue;
        var defaultImageWidth = _.find(componentDescriptor.propertiesByName, {
          name: 'imageWidth'
        }).defaultValue;
        var defaultImagePosition = _.find(componentDescriptor.propertiesByName, {
          name: 'imagePosition'
        }).defaultValue;
        var defaultHeaderFontSize = _.find(componentDescriptor.propertiesByName, {
          name: 'headerFontSize'
        }).defaultValue;
        var defaultNoteFontSize = _.find(componentDescriptor.propertiesByName, {
          name: 'noteFontSize'
        }).defaultValue;
        var defaultBorderRadius = _.find(componentDescriptor.propertiesByName, {
          name: 'borderRadius'
        }).defaultValue;

        return {
          recordDefinition: componentDefinition.propertiesByName.recordDefinition,
          fieldId: componentDefinition.propertiesByName.fieldId,
          count: componentDefinition.propertiesByName.count,
          actionguid: componentDefinition.propertiesByName.actionguid,

          note: componentDefinition.propertiesByName.note,
          Color: componentDefinition.propertiesByName.Color,
          header: componentDefinition.propertiesByName.header,
          categoryFilter: componentDefinition.propertiesByName.categoryFilter,
          tooltipConfig: componentDefinition.propertiesByName.tooltipConfig,
          tooltip: componentDefinition.propertiesByName.tooltip,
          perRowCardLength: componentDefinition.propertiesByName.perRowCardLength,
          recordInstanceId1: componentDefinition.propertiesByName.recordInstanceId1,

          imageHeight: componentDefinition.propertiesByName.imageHeight || defaultImageHeight,
          imageWidth: componentDefinition.propertiesByName.imageWidth || defaultImageWidth,
          imagePosition: componentDefinition.propertiesByName.imagePosition || defaultImagePosition,
          headerFontSize: componentDefinition.propertiesByName.headerFontSize || defaultHeaderFontSize,
          noteFontSize: componentDefinition.propertiesByName.noteFontSize || defaultNoteFontSize,
          borderRadius: componentDefinition.propertiesByName.borderRadius || defaultBorderRadius,
        };
      }

      // Defining the parameters types with helper.
      function getRxInspector() {
        return {
          inputs: {
            rxData: {

              tooltipConfig: {
                label: 'Tooltip',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-tooltip',
                group: 'General',
                inedex: 1
              },
              Color: {
                label: 'Color',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-bgcolor',
                group: 'General',
                index: 2
              },
              actionguid: {
                label: 'Action Button Guid',
                type: 'rx-inspector-expression-node-field',
                group: 'General',
                index: 3
              },
              perRowCardLength: {
                label: 'Row Wise Cards',
                type: 'rx-inspector-optional-select',
                options: [{
                  value: "col-lg-12 col-md-12 col-sm-12",
                  content: "One Card"
                }, {
                  value: "col-lg-6 col-md-6 col-sm-6",
                  content: "Two Cards"
                }, {
                  value: "col-lg-4 col-md-4 col-sm-4",
                  content: "Three Cards"
                }, {
                  value: "col-lg-3 col-md-3 col-sm-3",
                  content: "Four Cards"
                }, {
                  value: "col-lg-2 col-md-2 col-sm-2",
                  content: "Six Cards"
                }, {
                  value: "col-lg-1 col-md-1 col-sm-1",
                  content: "Twelve Cards"
                }],
                defaultValue: "col-lg-4 col-md-4 col-sm-4",
                group: 'General',
                index: 4
              },
              imageHeight: {
                label: 'Image height (in px)',
                type: 'rx-inspector-expression-node-field',
                group: 'General',
                index: 5
              },
              imageWidth: {
                label: 'Image width (in px)',
                type: 'rx-inspector-expression-node-field',
                group: 'General',
                index: 6
              },
              imagePosition: {
                label: 'Image position (For mobile view)',
                type: 'select',
                options: [{
                  value: "start",
                  content: "Left"
                }, {
                  value: "center",
                  content: "Center"
                }, {
                  value: "end",
                  content: "Right"
                }],
                defaultValue: "center",
                group: 'General',
                index: 7
              },
              headerFontSize: {
                label: 'Header Font size (in px)',
                type: 'rx-inspector-expression-node-field',
                group: 'General',
                index: 8
              },
              noteFontSize: {
                label: 'Note Font size (in px)',
                type: 'rx-inspector-expression-node-field',
                group: 'General',
                index: 9
              }, borderRadius: {
                label: 'Card Border Radius in px',
                type: 'rx-inspector-expression-node-field',
                group: 'General',
                index: 10
              }, categoryFilter: {
                label: 'Category filter',
                type: 'rx-inspector-expression-node-field',
                group: 'General',
                index: 11
              },

              //fields
              recordDefinition: {
                label: 'Record Definition Name',
                type: 'rx-inspector-definition-picker',
                definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type,
                group: 'fields',
                index: 1
              },
              fieldId: {
                label: 'Image',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-attachment',
                group: 'fields',
                index: 2
              },
              header: {
                label: 'Header',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-fields',
                group: 'fields',
                index: 3
              },
              count: {
                label: 'Count',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-fields',
                group: 'fields',
                index: 4
              },
              note: {
                label: 'Note',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-fields',
                group: 'fields',
                index: 5
              },
              tooltip: {
                label: 'Tooltip',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-fields',
                group: 'fields',
                index: 5
              },
            }

          },
          groups: {
            general: {
              label: 'General',
              index: 1
            },
            fields: {
              lable: 'Fields Configuration',
              index: 2
            }
          }
        };
      }

      return {
        //  should return a model instance
        getModel: function (componentDefinition, componentDescriptor) {
          return new comVyomVyomlibGenericCardWidgetModel(getRxConfig(componentDefinition, componentDescriptor));
        }
      };
    });
})();