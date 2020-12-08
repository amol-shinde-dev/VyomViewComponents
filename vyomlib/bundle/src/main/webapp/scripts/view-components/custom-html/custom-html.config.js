(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.custom-html')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'Custom HTML',
                group: 'vyomlib',
                icon: 'star',
                type: 'com-vyom-vyomlib-custom-html',
                designType: 'com-vyom-vyomlib-custom-html-design',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
                         
                {

                        name: 'customHTMLscript',
                        isConfig: true,
                        enableExpressionEvaluation: true


                    }
                ]
            }
           
        ]);
    });
})();