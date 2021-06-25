(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.topheader')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Top Header',
                group: 'vyomlib',
                icon: 'app',
                type: 'com-vyom-vyomlib-topheader', // the name of runtime directive
                designType: 'com-vyom-vyomlib-topheader-design', // register design directive
                designManagerService: 'comVyomVyomlibTopheaderDesign',
                bundleId: 'com.vyom.vyomlib',


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
