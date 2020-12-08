(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc9')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'HomePage2',
                group: 'vyomlib',
                icon: 'server_web_node',
                type: 'com-vyom-vyomlib-vc9',  
                designType: 'com-vyom-vyomlib-vc9-design', 
                designManagerService: 'comVyomVyomlibVc9Design',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
                 /*   {

                        name: 'recordDefinitionName',
                        isConfig: true,
                        type: "string"


                    }

*/                                     
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
                        type: "string"
                        


                    },
                    {
                        name: 'url1',
                        label: 'url1',
                        isConfig: true,
                        enableExpressionEvaluation: true 
                     
                        
                     
                     
                    },
                    {
                        name: 'url2',
                        label: 'url2',
                        isConfig: true,
                        enableExpressionEvaluation: true 
                     
                     
                    },
                    {
                        name: 'url3',
                        label: 'url3',
                        isConfig: true,
                        enableExpressionEvaluation: true 
                     
                     
                    },
                    {
                        name: 'url4',
                        label: 'url4',
                        isConfig: true,
                        enableExpressionEvaluation: true 
                     
                     
                    },
//                     {
//                        name: 'HideIncident',
//                        label: 'HideIncident',
//                        isConfig: true,
//                        tooltip: 'select options to hide incident detail',
//                        defaultValue:'false'
//                     
//                     
//                    },
//                     {
//                        name: 'HideChange',
//                        label: 'HideChange',
//                        isConfig: true,
//                        tooltip: 'select options to hide change detail',
//                        defaultValue:'false'
//                        
//                     
//                     
//                    },
//                     {
//                        name: 'HideSubscriber',
//                        label: 'HideSubscriber',
//                        isConfig: true,
//                        tooltip: 'select options to hide subsciber detail',
//                        defaultValue:'false'
//                        
//                     
//                     
//                    },
//                     {
//                        name: 'chatwindowurl',
//                        label: 'chatwindowurl',
//                        isConfig: true
//
//                     
//                    },
//                    
                    
//                     {
//
//                        name: 'displayC',
//                        label: 'display (1,2,3)',
//                        isConfig: true,
//                        defaultValue: '1,2,3' 
//                     
//                         
//
//
//                    },
                    //IFRAME
//                     {
//                            name: 'url',
//                            label: 'Url',
//                            isConfig: true,
//                            isRequired: true,
//                            enableExpressionEvaluation: true
//                        },
//                        {
//                            name: 'containerWidth',
//                            label: 'containerWidth',
//                            isConfig: true,
//                          
//                            enableExpressionEvaluation: true
//                        },
//                        {
//                            name: 'containerHeight',
//                            label: 'containerHeight',
//                            isConfig: true,
//                           
//                            enableExpressionEvaluation: true
//                        }
//                        ,
//                        {
//                            name: 'iframeWidth',
//                            label: 'iframeWidth',
//                            isConfig: true,
//                            
//                            enableExpressionEvaluation: true
//                        },
//                        
//                        {
//                            name: 'iframeHeight',
//                            label: 'iframeHeight',
//                            isConfig: true,
//                        
//                            enableExpressionEvaluation: true
//                        },
//                        
//                        {
//                            name: 'iframeTop',
//                            label: 'iframeTop',
//                            isConfig: true,
//                            enableExpressionEvaluation: true
//                        },
//                        
//                        {
//                            name: 'iframeRight',
//                            label: 'iframeRight',
//                            isConfig: true,
//                           
//                            enableExpressionEvaluation: true
//                        }
//                    


                ]
            }
        ]);
    });
})();