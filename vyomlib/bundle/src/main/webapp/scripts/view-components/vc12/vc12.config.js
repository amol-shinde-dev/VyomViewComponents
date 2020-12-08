(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc12')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'onWindowsLoad-multipleprocess',
                group: 'vyomlib',
                icon: 'file_refresh',
                type: 'com-vyom-vyomlib-vc12',  
                designType: 'com-vyom-vyomlib-vc12-design',
                designManagerService: 'comVyomVyomlibVc12Design',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
                         
                {

                        name: 'processDefinitionName1',
                        isConfig: true,
                        type: "string"
                        


                    },
                    {

                        name: 'InputVariable1',
                        isConfig: true,
                        type: "string",
                        enableExpressionEvaluation: true


                    },
                     {

                        name: 'processDefinitionName2',
                        isConfig: true,
                        type: "string"
                       


                    },
                    {

                        name: 'InputVariable2',
                        isConfig: true,
                        type: "string"


                    }, {

                        name: 'processDefinitionName3',
                        isConfig: true,
                        type: "string"


                    },
                    {

                        name: 'InputVariable3',
                        isConfig: true,
                        type: "string"


                    }, {

                        name: 'processDefinitionName4',
                        isConfig: true,
                        type: "string"


                    },
                    {

                        name: 'InputVariable4',
                        isConfig: true,
                        type: "string"


                    }, {

                        name: 'processDefinitionName5',
                        isConfig: true,
                        type: "string"


                    },
                    {

                        name: 'InputVariable5',
                        isConfig: true,
                        type: "string"


                    }
                ]
            }
           
        ]);
    });
})();