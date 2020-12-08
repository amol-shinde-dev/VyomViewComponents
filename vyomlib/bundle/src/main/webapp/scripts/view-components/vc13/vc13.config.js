(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc13')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Custom Button',
                    group: 'vyomlib',
                    icon: 'action_button_cursor',
                    type: 'com-vyom-vyomlib-vc13',
                    designType: 'com-vyom-vyomlib-vc13-design',
                    designManagerService: 'comVyomVyomlibVc13Design',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [

                        {
                            name: 'buttonGuid',
                            isConfig: true, // Input parameter
                            isRequired: true // Not required

                        },
                        {
                            name: 'buttonlabel',
                            type: 'string',
                            isConfig: true, // Input parameter
                            isProperty: false, // Not an output parameter
                            isRequired: true, // Not required
                            enableExpressionEvaluation: true, // The expression will be evaluated.
                            defaultValue: '"ActionButton"'
                        },
                        {
                            name: 'buttonColor',
                            isConfig: true,
                            isRequired: true,
                            defaultValue: 'green'
                        },

                        {
                            name: 'buttonSize',
                            isConfig: true,
                            isRequired: true,
                            defaultValue: 'Small'
                        },
                        {
                            name: 'IconAllignment', //button Icon Allignment
                            isConfig: true,
                            isRequired: true,
                            defaultValue: 'Left'
                        },
                        {
                            name: 'buttonIcon',
                            isConfig: true,
                            defaultValue: "star"
                        },
                        {
                            name: 'fontFamily',
                            isConfig: true

                        }



                ]
            }
        ]);
        });
})();
