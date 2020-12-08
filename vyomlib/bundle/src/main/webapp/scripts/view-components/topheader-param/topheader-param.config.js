(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.topheader-param')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Top Header_Param',
                group: 'vyomlib',
                icon: 'app',
                type: 'com-vyom-vyomlib-topheader-param', // the name of runtime directive
                designType: 'com-vyom-vyomlib-topheader-param-design', // register design directive
                designManagerService: 'comVyomVyomlibTopheaderParamDesign',
                bundleId: 'com.vyom.vyomlib',


                propertiesByName: [
                    {

                        name: 'text',
                        isConfig: true,

                        enableExpressionEvaluation: true
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
                        isProperty: true,


                    },
                    {
                        name: 'togglefont',
                        isConfig: true,
                        isProperty: true,

                    },
                    {
                        name: 'bgcolor',
                        isConfig: true



                    },
                    {
                        name: 'headerSize',
                        isConfig: true



                    }

                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();
