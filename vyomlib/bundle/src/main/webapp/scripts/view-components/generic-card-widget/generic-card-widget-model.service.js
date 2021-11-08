// This code is run at "design" phase, in Innovation Studio.
// used in "comExampleSamplelibraryDisplayDataDesign" factory.
(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.generic-card-widget')
    .factory('comVyomVyomlibGenericCardWidgetModel', function (rxViewComponentModel, rxRecordDefinitionResource) {
      return rxViewComponentModel.extend({
        initialize: function () {
          // launch parent initialize method
          rxViewComponentModel.prototype.initialize.apply(this, arguments);

          // add listener for rxData
          this.listenTo(this, 'change:rxData', this._onChangeRxData);

          this._initRecordDefinition();
        },

        _initRecordDefinition: function () {
          if (this.prop('rxData/recordDefinition')) {
            var me = this;

            // load Record Definition
            rxRecordDefinitionResource.get(this.prop('rxData/recordDefinition')).then(function (recordDefinition) {
              me.recordDefinition = recordDefinition;
            }).catch(function () {
              me.recordDefinition = null;
            });
          } else {
            this.recordDefinition = null;
          }
        },
        _onChangeRxData: function (model, rxData, changedProperty) {
          if (changedProperty.propertyPath === 'rxData/recordDefinition') {
            this._initRecordDefinition();
          }
        }
      });
    });
})();