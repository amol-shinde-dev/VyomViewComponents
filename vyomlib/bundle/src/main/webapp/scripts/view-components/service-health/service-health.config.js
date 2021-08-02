(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.service-health')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([{
                name: 'Service Health',
                group: 'vyomlib',
                icon: 'indent_increase',
                type: 'com-vyom-vyomlib-service-health',
                designType: 'com-vyom-vyomlib-service-health-design',
                designManagerService: 'comVyomVyomlibServiceHealthDesign',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [{
                        name: 'recordDefinitionName',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                }, {
                        name: 'incidentRecordDefinition',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                }, {
                        name: 'changeRecordDefinition',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                }, {
                        name: 'cardName',
                        isConfig: true,
                }, {
                        name: 'status',
                        isConfig: true,
                }, {
                        name: 'CardInstanceId',
                        isProperty: true,
                }, {
                        name: 'cardActionGuid',
                        isConfig: true,
                }, {
                        name: 'incNumber',
                        isConfig: true,
                }, {
                        name: 'progressPercentage',
                        isConfig: true,
                }, {
                        name: 'incServiceName',
                        isConfig: true,
                }, {
                        name: 'changeNumber',
                        isConfig: true,
                }, {
                        name: 'changeProgressPercentage',
                        isConfig: true,
                }, {
                        name: 'changeServiceName',
                        isConfig: true,
                }, {
                        name: 'time',
                        isConfig: true,
                },
                    {
                        name: 'availablePercent',
                        isConfig: true,
                },

                                  ]
            }]);
        });
})();
