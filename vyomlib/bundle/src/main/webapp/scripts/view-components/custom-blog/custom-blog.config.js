(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.custom-blog')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Custom Blog',
                    group: 'vyomlib',
                    icon: 'book_o',
                    type: 'com-vyom-vyomlib-custom-blog',
                    designType: 'com-vyom-vyomlib-custom-blog-design',
                    designManagerService: 'comVyomVyomlibCustomBlogDesign',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        {

                            name: 'recordDefinitionFullName',
                            isConfig: true,

                    }, {

                            name: 'HTMLField',
                            isConfig: true,

                    }, {

                            name: 'RecInstanceId',
                            isConfig: true,

                    }, {

                            name: 'editorInstance',
                            isConfig: true,
                            isDisabled: 0

                    }


                ]
            }
        ]);
        });
})();
