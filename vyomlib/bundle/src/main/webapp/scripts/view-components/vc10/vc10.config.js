(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc10')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'HomePage3',
                group: 'vyomlib',
                icon: 'server_web_node',
                type: 'com-vyom-vyomlib-vc10',  
                designType: 'com-vyom-vyomlib-vc10-design', 
                designManagerService: 'comVyomVyomlibVc10Design',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [           
                    {

                        name: 'subscribers',
                        isConfig: true,
                        type: "string",
                        enableExpressionEvaluation: true, 
                        defaultValue: '0'


                    },
                     {

                        name: 'incidents',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true ,
                        defaultValue: '0'


                    },
                     {

                        name: 'changes',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true ,
                        defaultValue: '0'


                    },
                     {

                        name: 'country1label',
                        isConfig: true,
                         enableExpressionEvaluation: true ,
                        defaultValue: '"Hongkong"'


                    },
                    {

                        name: 'country1value',
                        isConfig: true,
                         enableExpressionEvaluation: true ,
                        defaultValue: '11'


                    },
                    {

                        name: 'country2label',
                        isConfig: true,
                         enableExpressionEvaluation: true ,
                        defaultValue: '"UK"'


                    },
                    {

                        name: 'country2value',
                        isConfig: true,
                         enableExpressionEvaluation: true ,
                        defaultValue: '14'


                    },
                    {

                        name: 'country3label',
                        isConfig: true,
                         enableExpressionEvaluation: true ,
                        defaultValue: '"USA"'


                    },
                    {

                        name: 'country3value',
                        isConfig: true,
                         enableExpressionEvaluation: true ,
                        defaultValue: '12'


                    },
                     {

                        name: 'incidentaction',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 
                    


                    },
                     {

                        name: 'subscriberaction',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
                     {

                        name: 'changeaction',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    }


                ]
            }
        ]);
    });
})();