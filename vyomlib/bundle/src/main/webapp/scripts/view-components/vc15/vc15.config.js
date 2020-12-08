(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc15')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'onWindowsLoad-Action',
                group: 'vyomlib',
                icon: 'file_refresh',
                type: 'com-vyom-vyomlib-vc15',  
                designType: 'com-vyom-vyomlib-vc15-design',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
                         
                {

                        name: 'Guid',
                        isConfig: true,
                        type: "string",
                        //isProperty: false,  // Not an output parameter
                        enableExpressionEvaluation: true  


                    }
                    
                ]
            }
           
        ]);
    });
})();