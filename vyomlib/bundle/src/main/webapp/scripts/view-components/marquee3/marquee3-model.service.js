// This code is run at "design" phase, in Innovation Studio.
// used in "comExampleSamplelibraryDisplayDataDesign" factory.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.marquee3').factory('comVyomVyomlibMarquee3Model', function (rxViewComponentModel, rxRecordDefinitionResource) {
        return rxViewComponentModel.extend({
            initialize: function () {
                // launch parent initialize method
                rxViewComponentModel.prototype.initialize.apply(this, arguments);

                // add listener for rxData
                this.listenTo(this, 'change:rxData', this._onChangeRxData);

                this._initRecordDefinition();
            },

            _initRecordDefinition: function () {
                if (this.prop('rxData/IncidentRecDef')) {
                    var me = this;

                    // load Record Definition
                    rxRecordDefinitionResource.get(this.prop('rxData/IncidentRecDef')).then(function (recordDefinition) {
                        me.IncidentRecDef = recordDefinition;
                    }).catch(function () {
                        me.IncidentRecDef = null;
                    });
                } else {
                    this.IncidentRecDef = null;
                }
            },
            _onChangeRxData: function (model, rxData, changedProperty) {
                if (changedProperty.propertyPath === 'rxData/IncidentRecDef') {
                    this._initRecordDefinition();
                }
            }
        });
    });
})();