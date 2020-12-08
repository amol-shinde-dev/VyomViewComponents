(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.menubaradv')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'menubaradv',
                    group: 'vyomlib',
                    icon: 'angle_up_square',
                    type: 'com-vyom-vyomlib-menubaradv',
                    designType: 'com-vyom-vyomlib-menubaradv-design',
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