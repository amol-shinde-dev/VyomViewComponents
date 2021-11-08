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

        return {
          recordDefinition: componentDefinition.propertiesByName.recordDefinition,
          fieldId: componentDefinition.propertiesByName.fieldId,
          count: componentDefinition.propertiesByName.count,

          actionguid: componentDefinition.propertiesByName.actionguid,

          note: componentDefinition.propertiesByName.note,
          Color: componentDefinition.propertiesByName.Color,
          header: componentDefinition.propertiesByName.header,
          perRowCardLength: componentDefinition.propertiesByName.perRowCardLength,
          recordInstanceId1: componentDefinition.propertiesByName.recordInstanceId1,
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
                group: 'General',
                index: 1
              },
              fieldId: {
                label: 'Attachment Field',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-attachment',
                group: 'General',
                index: 2
              },
              header: {
                label: 'header',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-fields',
                group: 'General',
                index: 3
              },
              count: {
                label: 'count',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-fields',
                group: 'General',
                index: 4
              },
              note: {
                label: 'note',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-fields',
                group: 'General',
                index: 5
              },
              Color: {
                label: 'Color',
                type: 'com-vyom-vyomlib-inspector-generic-card-widget-bgcolor',
                group: 'General',
                index: 6
              },
              actionguid: {
                label: 'Action Button Guid',
                type: 'rx-inspector-expression-node-field',
                group: 'General',
                index: 7
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
                }],
                defaultValue: "col-lg-4 col-md-4 col-sm-4",
                group: 'General',
                index: 8
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
        //  should return a model instance
        getModel: function (componentDefinition, componentDescriptor) {
          return new comVyomVyomlibGenericCardWidgetModel(getRxConfig(componentDefinition, componentDescriptor));
        }
      };
    });
})();