(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc5')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Productive Widget',
                    group: 'vyomlib',
                    icon: 'widget',
                    type: 'com-vyom-vyomlib-vc5',
                    designType: 'com-vyom-vyomlib-vc5-design',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        {

                            name: 'recordDefinitionName',
                            isConfig: true,
                            type: "string"


                    },


                        {
                            name: 'JobTitleField',
                            isConfig: true

                    },
                        {
                            name: 'LocationField',
                            isConfig: true

                    },


                        {
                            name: 'vmRecDef',
                            isConfig: true

                    },
                        {
                            name: 'vmNameId',
                            isConfig: true

                    },
                        {
                            name: 'vmDescId',
                            isConfig: true

                    }









                ]
            }
        ]);
        });
})();
