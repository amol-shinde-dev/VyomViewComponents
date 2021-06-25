(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.iframe')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'iFrame',
                    group: 'vyomlib',
                    icon: 'layout_preview',
                    type: 'com-vyom-vyomlib-iframe',
                    designType: 'com-vyom-vyomlib-iframe-design',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        {
                            name: 'url',
                            label: 'Url',
                            isConfig: true,
                            isRequired: true,
                            enableExpressionEvaluation: true
                        }
                    ]
                }
            ]);
        });
})();