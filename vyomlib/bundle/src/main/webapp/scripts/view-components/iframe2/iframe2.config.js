(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.iframe2')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'iFrameDesign',
                    group: 'vyomlib',
                    icon: 'lines_vertical',
                    type: 'com-vyom-vyomlib-iframe2',
                    designType: 'com-vyom-vyomlib-iframe2-design',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        {
                            name: 'url',
                            label: 'Url',
                            isConfig: true,
                            isRequired: true,
                            enableExpressionEvaluation: true
                        },
                        {
                            name: 'containerWidth',
                            label: 'containerWidth',
                            isConfig: true,
                            isRequired: true,
                            defaultValue:'1196',
                            enableExpressionEvaluation: true
                        },
                        {
                            name: 'containerHeight',
                            label: 'containerHeight',
                            isConfig: true,
                            isRequired: true,
                            defaultValue:'500',
                            enableExpressionEvaluation: true
                        }
                        ,
                        {
                            name: 'iframeWidth',
                            label: 'iframeWidth',
                            isConfig: true,
                            isRequired: true,
                            defaultValue: '1214',
                            enableExpressionEvaluation: true
                        },
                        
                        {
                            name: 'iframeHeight',
                            label: 'iframeHeight',
                            isConfig: true,
                            isRequired: true,
                            defaultValue: '800',
                            enableExpressionEvaluation: true
                        },
                        
                        {
                            name: 'iframeTop',
                            label: 'iframeTop',
                            isConfig: true,
                            isRequired: true,
                            defaultValue:'-94',
                            enableExpressionEvaluation: true
                        },
                        
                        {
                            name: 'iframeRight',
                            label: 'iframeRight',
                            isConfig: true,
                            isRequired: true,
                            defaultValue:'10',
                            toolTip: 'Iframe Right Side',
                            enableExpressionEvaluation: true
                        }
                    ]
                }
            ]);
        });
})();