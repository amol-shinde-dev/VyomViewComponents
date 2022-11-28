(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.icona-v2')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'icoană V2',
                    group: 'vyomlib',
                    icon: 'octagon',
                    type: 'com-vyom-vyomlib-icona-v2',
                    designType: 'com-vyom-vyomlib-icona-v2-design',
                    designManagerService: 'comVyomVyomlibIconaV2Design',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [

                        {
                            name: 'icon',
                            isConfig: true,

                    },
                        {
                            name: 'tooltipText',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },
                        {
                            name: 'cssStyle',
                            isConfig: true,
                            enableExpressionEvaluation: true
                    },





                ]
            }
        ]);
        });
})();
