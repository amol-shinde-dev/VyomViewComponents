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
                    canBeEmbeddedInRecordEditor: true,
                    propertiesByName: [
                        {

                            name: 'recordDefinitionFullName',
                            isConfig: true,
                            isRequired: true

                    }, {

                            name: 'HTMLField',
                            isConfig: true,
                            isRequired: true

                    }, {

                            name: 'RecInstanceId',
                            isConfig: true,
                            isRequired: true,
                            enableExpressionEvaluation: true

                    }, {

                            name: 'editorInstance',
                            isConfig: true,


                    },
                        {

                            name: 'enableEditButton',
                            isConfig: true,
                            type: 'string',
                            enableExpressionEvaluation: true,
                            defaultValue: '"true"'


                    },

                        {

                            name: 'enableEditPane',
                            isConfig: true,
                            type: 'boolean',
                            enableExpressionEvaluation: true,



                    },
                        {
                            name: 'headerNote',
                            isConfig: true,
                            enableExpressionEvaluation: true,
                  },
                        {
                            name: 'tableWidth',
                            isConfig: true,

                  },

                        {

                            name: 'isRefresh',
                            isProperty: true,


                        },





                ]
            }
        ]);
        });
})();
