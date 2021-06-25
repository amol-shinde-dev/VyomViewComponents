(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc11')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'Header Panel',
                group: 'vyomlib',
                icon: 'ellipsis_horizontal_bottom',
                type: 'com-vyom-vyomlib-vc11',  
                designType: 'com-vyom-vyomlib-vc11-design', 
                designManagerService: 'comVyomVyomlibVc11Design',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
                                {

                        name: 'count1',
                        isConfig: true,
                        type: "string",
                        enableExpressionEvaluation: true, 
                        defaultValue: '0'


                    },
                     {

                        name: 'count2',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true ,
                        defaultValue: '0'


                    },
                     {

                        name: 'count3',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true ,
                        defaultValue: '0'


                    },
                     {

                        name: 'actionguid1',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 
                    


                    },
                     {

                        name: 'actionguid2',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
                     {

                        name: 'actionguid3',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
                     {

                        name: 'innerBlockWidth',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },       
                    {

                        name: 'note1',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
                    {

                        name: 'note2',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
                    {
                        name: 'note3',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 

                    },
                    {
                        name: 'Color1',
                        isRequired:true,
                        isConfig: true
                        
                      
                    },
                    {
                        name: 'Color2',
                        isConfig: true,
                        isRequired:true

                    },
                    {
                        name: 'Color3',
                        isConfig: true,
                        isRequired:true

                    },
                    {
                        name: 'header1',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                        defaultValue:'"Manage Subscription"'
                      
                    },
                    {
                        name: 'header2',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                        defaultValue:'"Incident Management"'

                    },
                    {
                        name: 'header3',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                        defaultValue:'"Change Management"'

                    }

                ]
            }
        ]);
    });
})();