
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.topheader').factory('comVyomVyomlibTopheaderModel', function (rxViewComponentModel, rxRecordDefinitionResource) {
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
                    rxRecordDefinitionResource.get(this.prop('rxData/recordDefinitionName')).then(function (recordDefinition) {
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