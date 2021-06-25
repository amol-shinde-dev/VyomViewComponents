// This code is run at "design" phase, in App1 Studio.
// used in "comVyomVyomlibDisplayDataDesign" factory.
(function() {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.service-health')
        .factory('comVyomVyomlibServiceHealthModel', function(rxViewComponentModel, rxRecordDefinitionResource) {
            return rxViewComponentModel.extend({
                initialize: function() {
                    // launch parent initialize method
                    rxViewComponentModel.prototype.initialize.apply(this, arguments);

                    // add listener for rxData
                    this.listenTo(this, 'change:rxData', this._onChangeRxData);

                    this._initRecordDefinition();
                },

                _initRecordDefinition: function() {
                    if (this.prop('rxData/recordDefinitionName')) {
                        var me = this;

                        // load Record Definition
                        rxRecordDefinitionResource.get(this.prop('rxData/recordDefinitionName')).then(function(recordDefinition) {
                            me.recordDefinition = recordDefinition;
                        }).catch(function() {
                            me.recordDefinition = null;
                        });
                    } else {
                        this.recordDefinition = null;
                    }

                    if (this.prop('rxData/incidentRecordDefinition')) {
                        var me = this;

                        rxRecordDefinitionResource.get(this.prop('rxData/incidentRecordDefinition')).then(function(recordDefinition1) {
                            me.recordDefinition1 = recordDefinition1;
                        }).catch(function() {
                            me.recordDefinition1 = null;
                        });
                    } else {
                        this.recordDefinition1 = null;
                    }
                    if (this.prop('rxData/changeRecordDefinition')) {
                        var me = this;

                        rxRecordDefinitionResource.get(this.prop('rxData/changeRecordDefinition')).then(function(recordDefinition3) {
                            me.recordDefinition3 = recordDefinition3;
                        }).catch(function() {
                            me.recordDefinition3 = null;
                        });
                    } else {
                        this.recordDefinition3 = null;
                    }
                },
                _onChangeRxData: function(model, rxData, changedProperty) {
                    if (changedProperty.propertyPath === 'rxData/recordDefinitionName') {
                        this._initRecordDefinition();
                    }
                    if (changedProperty.propertyPath === 'rxData/incidentRecordDefinition') {
                        this._initRecordDefinition();
                    }
                    if (changedProperty.propertyPath === 'rxData/changeRecordDefinition') {
                        this._initRecordDefinition();
                    }
                }
            });
        });
})();