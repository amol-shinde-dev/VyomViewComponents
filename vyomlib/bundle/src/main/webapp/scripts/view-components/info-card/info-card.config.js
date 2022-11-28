(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.info-card')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Info Card',
                    group: 'vyomlib',
                    icon: 'layout_circle',
                    type: 'com-vyom-vyomlib-info-card',
                    designType: 'com-vyom-vyomlib-info-card-design',
                    designManagerService: 'comVyomVyomlibInfoCardDesign',
                    bundleId: 'com.vyom.vyomlib',
                    canBeEmbeddedInRecordEditor: true,
                    propertiesByName: [
                        {
                            name: 'recordDefinition',
                            type: 'string',
                            isConfig: true,
                            isProperty: false
            }, {
                            name: 'imageId',
                            type: 'string',
                            isConfig: true,
                            isProperty: false
            }, {
                            name: 'descriptionId',
                            isConfig: true


            },
                        {
                            name: 'buttonVisibilityFlag',
                            isConfig: true

            },
                        {
                            name: 'filterExpression',
                            isConfig: true,
                            isProperty: false,
                            enableExpressionEvaluation: true,
            },
                        {
                            name: 'buttonActionGuid',
                            isConfig: true
            },
                        {
                            name: 'buttonLabel',
                            isConfig: true,
                            enableExpressionEvaluation: true
            },
                        {
                            name: 'buttonColor',
                            isConfig: true,

            },
                        {
                            name: 'headerFontSize',
                            type: 'number',
                            isConfig: true,
                            isProperty: false,
                            enableExpressionEvaluation: true,
                            defaultValue: 24
            }, {
                            name: 'perRowCardLength',
                            isConfig: true,
            },
                        {
                            name: 'imageHeight',
                            isConfig: true,
            },
                        {
                            name: 'descriptionContainerHeight',
                            isConfig: true,
            },


                        {
                            name: 'CardInstanceId',
                            isProperty: true,
            }

                                ]
                }]);
        });
})();
