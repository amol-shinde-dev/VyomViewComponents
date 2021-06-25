// This code is run at "design" phase, in Lab2 Studio.
// used in "comBmcPredictivemodulelibDisplayDataDesign" factory.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc12').factory('comVyomVyomlibVc12Model', function (rxViewComponentModel, rxProcessDefinitionResource) {
        return rxViewComponentModel.extend({
            initialize: function () {
                // launch parent initialize method
                rxViewComponentModel.prototype.initialize.apply(this, arguments);

                // add listener for rxData
                this.listenTo(this, 'change:rxData', this._onChangeRxData);

                this._initProcessDefinition();
            },

            _initProcessDefinition: function () {
                if (this.prop('rxData/processDefinitionName')) {
                    var me = this;

                    // load Record Definition
                    rxProcessDefinitionResource.get(this.prop('rxData/processDefinitionName')).then(function (recordDefinition) {
                        me.processDefinitionName = processDefinitionName;
                        
                    //custom    
                        me.inputParam=recordDefinition.inputParams;
                    }).catch(function () {
                        me.processDefinitionName = null;
                    });
                } else {
                    this.processDefinitionName = null;
                }
            },
            _onChangeRxData: function (model, rxData, changedProperty) {
                if (changedProperty.propertyPath === 'rxData/processDefinitionName') {
                    this._initProcessDefinition();
                }
            }
        });
    });
})();