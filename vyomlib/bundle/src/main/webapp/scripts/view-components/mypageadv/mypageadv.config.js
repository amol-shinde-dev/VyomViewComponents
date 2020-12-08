(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.mypageadv')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'mypageadv',
                    group: 'vyomlib',
                    icon: 'angle_up_square',
                    type: 'com-vyom-vyomlib-mypageadv',
                    designType: 'com-vyom-vyomlib-mypageadv-design',
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