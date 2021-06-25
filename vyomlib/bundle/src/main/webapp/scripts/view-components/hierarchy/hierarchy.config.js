(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.hierarchy')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Hierarchy',
                    group: 'vyomlib',
                    icon: 'word_square',
                    type: 'com-vyom-vyomlib-hierarchy',
                    designType: 'com-vyom-vyomlib-hierarchy-design',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [

                    ]
                }
            ]);
        });
})();
