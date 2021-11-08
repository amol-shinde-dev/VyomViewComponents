(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.nvd3-barchart')
    .factory('comVyomVyomlibNvd3BarchartModel', function (rxDesignerCache,
      // rxRecordDefinitionResource,
      rxViewComponentModel) {
      return rxViewComponentModel.extend({
        initialize: function () {
          rxViewComponentModel.prototype.initialize.apply(this, arguments);
          this.listenTo(this, 'change:rxData', this._onChangeRxData);
          this._initRecordDefinition();
          this.recordDefinition = null;
        },

        _initRecordDefinition: function () {
          if (this.prop('rxData/recordDefinitionName')) {
            var me = this;
            me.recordDefinition = null;

            rxDesignerCache.getRecordDefinition(this.prop('rxData/recordDefinitionName')).then(function (recordDefinition) {
              me.recordDefinition = recordDefinition;
            });
          }
        },

        _onChangeRxData: function (model, rxData, changedProperty) {
          if (changedProperty.propertyPath === 'rxData/recordDefinitionName') {
            this._initRecordDefinition();
          }
        }
      });
    });
})();