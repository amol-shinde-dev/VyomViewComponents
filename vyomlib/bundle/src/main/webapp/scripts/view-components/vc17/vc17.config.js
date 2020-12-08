(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc17')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'Footer Panel',
                group: 'vyomlib',
                icon: 'ellipsis_horizontal_bottom',
                type: 'com-vyom-vyomlib-vc17',  
                designType: 'com-vyom-vyomlib-vc17-design', 
                designManagerService: 'comVyomVyomlibVc17Design',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [                             
                    {
                        name: 'Url1',
                        isConfig: true,
                        type: "string",
                        enableExpressionEvaluation: true
                    },
                     {
                        name: 'Url2',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 
                    },
                     {
                        name: 'Url3',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 
                    },
                     {

                        name: 'Url4',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 
                    },
                    {
                        name: 'Icon1',
                        isConfig: true,
                        defaultValue:'home'
                    },
                     {
                        name: 'Icon2',
                        isConfig: true,
                        defaultValue: 'asterisk'
                    },
                     {
                        name: 'Icon3',
                        isConfig: true,
                        defaultValue:'plus'
                    },
                    {
                        name: 'Icon4',
                        isConfig: true,
                        defaultValue: 'euro'
                    },
                    {
                        name: 'Slot1Title',
                        isConfig: true,
                        defaultValue: 'Ericsson Global Services'
                    },
                    {
                        name: 'Slot1Notes',
                        isConfig: true,
                        defaultValue: 'West Gate Business Park, Corp H3, Bulevardul Iuliu Maniu 197, București'
                    },
                    {
                        name: 'Slot1ClickURL',
                        isConfig: true
                        
                    },
                    {
                        name: 'Slot2Notes',
                        isConfig: true,
                        defaultValue: 'For more details and help on our services, you can visit our website'
                    },
                    {
                        name: 'Slot2Followers',
                        isConfig: true,
                        type: "String",
                        enableExpressionEvaluation: true,
                        defaultValue: '2892'
                    },
                    {
                        name: 'Slot1ClickBGColor',
                        isConfig: true,
                        defaultValue: 'orange'
                    },
                    {
                        name: 'Slot2NotesBGColor',
                        isConfig: true,
                        defaultValue: 'green'
                    },
                    {
                        name: 'URL',
                        isConfig: true,
                        enableExpressionEvaluation: true
                    },
                    {
                        name: 'subTitle',
                        isConfig: true,
                        defaultValue: 'Ericsson Global Services'
                    },
                    {
                        name: 'Title1',
                        isConfig: true,
                        defaultValue: 'Home'
                    },
                    {
                        name: 'Title2',
                        isConfig: true,
                        defaultValue: 'Visit'
                    },
                    {
                        name: 'Title3',
                        isConfig: true,
                        defaultValue: 'Open'
                    },
                    {
                        name: 'Title4',
                        isConfig: true,
                        defaultValue: 'Other'
                    },
                    {
                        name: 'Slot2Title',
                        isConfig: true,
                        defaultValue: 'Followers'
                    }



                ]
            }
        ]);
    });
})();