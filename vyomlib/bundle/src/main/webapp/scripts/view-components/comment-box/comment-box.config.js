(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.comment-box')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Comment Box',
                    group: 'vyomlib',
                    icon: 'comments_o',
                    type: 'com-vyom-vyomlib-comment-box',
                    designType: 'com-vyom-vyomlib-comment-box-design',
                    designManagerService: 'comVyomVyomlibCommentBoxDesign',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [

                        {

                            name: 'recordDefinitionFullName',
                            isConfig: true,




                    },
                        {

                            name: 'CommentField',
                            isConfig: true,



                    },


                        {

                            name: 'ApplicationNameField',
                            isConfig: true,



                    },
                        {

                            name: 'ApplicationName',
                            isConfig: true,
                            isRequired: true,


                    }, {

                            name: 'CommentInstanceId',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },
                        {

                            name: 'CurrentUser',
                            isProperty: true

                    },
                        {

                            name: 'Operation',
                            isProperty: true

                    },
                        {

                            name: 'Ping',
                            isProperty: true

                    },
                        {

                            name: 'cssClasses',
                            isConfig: true,


                    },


                ]
            }

        ]);
        });
})();
