(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.topheader')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Top Header',
                group: 'vyomlib',
                icon: 'app',
                type: 'com-vyom-vyomlib-topheader',  // the name of runtime directive
                designType: 'com-vyom-vyomlib-topheader-design', // register design directive
				designManagerService: 'comVyomVyomlibTopheaderDesign',
                bundleId: 'com.vyom.vyomlib',

                // define component properties
                propertiesByName: [
                    {

                        name: 'text',
                        isConfig: true,
                        type: "string"
                },
                    
                
                    {
                        name: 'appname',
                        isConfig: true,
                        type: "string"
                   
                    },
                   {
                        name: 'hyperlink',
                        isConfig: true,
                        type: "string"
                   
                    },
					{
                        name: 'toggleicon',
                        isConfig: true,
                        isProperty: true,    // property will be available for building expressions
                        
						
                    },
					{
                        name: 'togglefont',
                        isConfig: true,
                        isProperty: true,    // property will be available for building expressions
                        
						
                    },
					{
                        name: 'bgcolor',
                        isConfig: true,
                        defaultValue: 'erric_default'
                           // property will be available for building expressions
                        
						
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();