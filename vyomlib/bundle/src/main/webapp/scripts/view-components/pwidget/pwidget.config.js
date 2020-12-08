(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.pwidget')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Productive Widget',
                    group: 'vyomlib',
                    icon: 'star',
                    type: 'com-vyom-vyomlib-pwidget',
                    designType: 'com-vyom-vyomlib-pwidget-design',
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
