(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.generic-card-widget-v2')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Generic Card V2',
                    group: 'vyomlib',
                    icon: 'app_arrows',
                    type: 'com-vyom-vyomlib-generic-card-widget-v2',
                    designType: 'com-vyom-vyomlib-generic-card-widget-v2-design',
                    designManagerService: 'comVyomVyomlibGenericCardWidgetV2Design',
                    bundleId: 'com.vyom.vyomlib',
                    canBeEmbeddedInRecordEditor: true,
                    propertiesByName: [
                        {
                            name: 'recordDefinition',
                            type: 'string',
                            isConfig: true,
                            isProperty: false,
            }, {
                            name: 'fieldId',
                            type: 'string',
                            isConfig: true,
                            isProperty: false,
            }, {
                            name: 'description',
                            isConfig: true,
                            type: "string",
                            defaultValue: '0'
            }, {
                            name: 'leftButtonActionGuid',
                            isConfig: true,
                            enableExpressionEvaluation: true
            },
                        {
                            name: 'leftButtonLabel',
                            isConfig: true,
                            enableExpressionEvaluation: true
            },
                        {
                            name: 'leftButtonColor',
                            isConfig: true,

            },
                        {
                            name: 'leftButtonIcon',
                            isConfig: true,

            },
                        {
                            name: 'leftButtonIconPosition',
                            isConfig: true,

            },
                        {
                            name: 'rightButtonActionGuid',
                            isConfig: true,
                            enableExpressionEvaluation: true
            },
                        {
                            name: 'rightButtonLabel',
                            isConfig: true,
                            enableExpressionEvaluation: true
            },
                        {
                            name: 'rightButtonColor',
                            isConfig: true,

            },
                        {
                            name: 'rightButtonIcon',
                            isConfig: true,

            }, {
                            name: 'rightButtonIconPosition',
                            isConfig: true,

            }, {
                            name: 'note',
                            isConfig: true,
                            type: "string",
            }, {
                            name: 'Color',
                            isRequired: true,
                            isConfig: true
            }, {
                            name: 'header',
                            isConfig: true,
            }, {
                            name: 'tooltip',
                            isConfig: true,
            }, {
                            name: 'tooltipConfig',
                            isConfig: true,
            }, {
                            name: 'perRowCardLength',
                            isConfig: true,
            }, {
                            name: 'CardInstanceId',
                            isProperty: true,
            }, {
                            name: 'imageHeight',
                            type: 'number',
                            isConfig: true,
                            isProperty: false,
                            enableExpressionEvaluation: true,
                            defaultValue: 100
            }, {
                            name: 'imageWidth',
                            type: 'number',
                            isConfig: true,
                            isProperty: false,
                            enableExpressionEvaluation: true,
                            defaultValue: 100
            }, {
                            name: 'imagePosition',
                            type: 'String',
                            isConfig: true,
                            isProperty: false,
                            defaultValue: "center"
            },
                        {
                            name: 'headerFontSize',
                            type: 'number',
                            isConfig: true,
                            isProperty: false,
                            enableExpressionEvaluation: true,
                            defaultValue: 24
            },
                        {
                            name: 'descriptionFontSize',
                            isConfig: true,
                            enableExpressionEvaluation: true,

            },
                        {
                            name: 'cssClasses',
                            isConfig: true,


            },

                        {
                            name: 'noteFontSize',
                            type: 'number',
                            isConfig: true,
                            isProperty: false,
                            enableExpressionEvaluation: true,
                            defaultValue: 13
            }, {
                            name: 'borderRadius',
                            type: 'number',
                            isConfig: true,
                            isProperty: false,
                            enableExpressionEvaluation: true,
                            defaultValue: 0
            }, {
                            name: 'filterExpression',
                            isConfig: true,
                            isProperty: false,
                            enableExpressionEvaluation: true,
            }
          ]
        }
      ]);
        });
})();
