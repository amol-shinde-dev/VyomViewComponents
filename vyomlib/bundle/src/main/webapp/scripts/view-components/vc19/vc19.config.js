(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc19')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'icoană',
                group: 'vyomlib',
                icon: 'field_custom',
                type: 'com-vyom-vyomlib-vc19',  
                designType: 'com-vyom-vyomlib-vc19-design', 
                designManagerService: 'comVyomVyomlibVc19Design',
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
                        defaultValue:'home'
                    },
                    {
                        name: 'Title',
                        isConfig: true,
                        defaultValue: 'Home'
                    },
                    {
                        name: 'Size',
                        isConfig: true,
                        defaultValue: '4'
                    },
                    {
                        name: 'BGcolor',
                        isConfig: true,
                        defaultValue: '#f86e00'
                    }
                    



                ]
            }
        ]);
    });
})();