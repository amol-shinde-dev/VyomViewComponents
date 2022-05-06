(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.dynamic-category')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Dynamic Category',
                    group: 'vyomlib',
                    icon: 'activity_feed_clock_o',
                    type: 'com-vyom-vyomlib-dynamic-category',
                    designType: 'com-vyom-vyomlib-dynamic-category-design',
                    designManagerService: 'comVyomVyomlibDynamicCategoryDesign',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [{
                        name: 'recordDefinitionName',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                    }, {
                        name: 'CategoryField',
                        isConfig: true,
                    }, {
                        name: 'CategoryColor',
                        isConfig: true
                    }, {
                        name: 'selectedCategory',
                        isProperty: true,
                    }, {
                        name: 'actionguid',
                        isConfig: true,
                    }, {
                        name: 'navHeight',
                        type: "number",
                        isConfig: true,
                        defaultValue: 28
                    },]
                }
            ]);
        });
})();
