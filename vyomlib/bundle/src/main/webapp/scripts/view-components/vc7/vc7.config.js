(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc7')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'HomePage',
                group: 'vyomlib',
                icon: 'internet_plus_circle',
                type: 'com-vyom-vyomlib-vc7',  
                designType: 'com-vyom-vyomlib-vc7-design', 
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
                 /*   {

                        name: 'recordDefinitionName',
                        isConfig: true,
                        type: "string"


                    }
                
                    
                    
                        
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


                    },
                     {

                        name: 'IncidentRecDef',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
*/ 
                     {

                        name: 'displayC',
                        label: 'display (1,2,3)',
                        isConfig: true,
                        defaultValue: '1,2,3' 
                     
                         


                    }
                    


                ]
            }
        ]);
    });
})();