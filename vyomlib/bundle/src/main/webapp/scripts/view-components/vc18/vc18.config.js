(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc18')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'icoană',
                    group: 'vyomlib',
                    icon: 'field_custom',
                    type: 'com-vyom-vyomlib-vc18',
                    designType: 'com-vyom-vyomlib-vc18-design',
                    designManagerService: 'comVyomVyomlibVc18Design',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        {
                            name: 'Url',
                            isConfig: true,
                            type: "string",
                            enableExpressionEvaluation: true
                    },
                        {
                            name: 'Icon',
                            isConfig: true,
                            defaultValue: 'home'
                    },
                        {
                            name: 'Title',
                            isConfig: true,
                            defaultValue: 'Home'
                    },
                        {
                            name: 'Size',
                            isConfig: true,
                            defaultValue: '50%'
                    },
                        {
                            name: 'BGcolor',
                            isConfig: true,
                            defaultValue: 'green'
                    }




                ]
            }
        ]);
        });
})();
