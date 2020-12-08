(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.landing-console')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'Landing Console',
                group: 'vyomlib',
                icon: 'field_autocomplete_search',
                type: 'com-vyom-vyomlib-landing-console',  
                designType: 'com-vyom-vyomlib-landing-console-design', 
                designManagerService: 'comVyomVyomlibLandingConsoleDesign',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
                    {

                        name: 'CardList',
                        isConfig: true,
 
                    },
                    {

                        name: 'SearchColor',
                        isConfig: true,
 
                    },
                    
                    

                ]
            }
        ]);
    });
})();