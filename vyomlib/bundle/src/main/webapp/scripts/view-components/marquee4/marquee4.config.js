(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.marquee4')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Simple Marquee V2',
                    group: 'vyomlib',
                    icon: 'arrow_right_square_input',
                    type: 'com-vyom-vyomlib-marquee4',
                    designType: 'com-vyom-vyomlib-marquee4-design',
                    designManagerService: 'comVyomVyomlibMarquee4Design',
                    bundleId: 'com.vyom.vyomlib',
                    propertiesByName: [
                        {
                            name: 'FieldID1',
                            isConfig: true,
                            type: 'string'

                    },
                        {
                            name: 'FieldID1Title',
                            isConfig: true,

                            type: 'string'

                    },
                        {
                            name: 'FieldID2',
                            isConfig: true,
                            type: 'string'

                    },
                        {
                            name: 'FieldID2Title',
                            isConfig: true,
                            type: 'string'

                    },
                        {
                            name: 'FieldID3',
                            isConfig: true,
                            type: 'string'

                    },
                        {
                            name: 'FieldID3Title',
                            isConfig: true,
                            type: 'string'

                    },
                        {
                            name: 'FieldID4',
                            isConfig: true,
                            type: 'string'

                    },
                        {
                            name: 'FieldID4Title',
                            isConfig: true,
                            type: 'string'

                    },
                        {
                            name: 'MBGColor',
                            isConfig: true,
                            defaultValue: 'gray'

                    },
                        {
                            name: 'IncidentRecDef',
                            isConfig: true,
                            //isRequired: true,
                            type: 'string'

                    },
                        {
                            name: 'MBehavior',
                            defaultValue: 'scroll',
                            isConfig: true


                    },
                        {
                            name: 'FilterExp',
                            isConfig: true,

                            enableExpressionEvaluation: true,


                    },
                        {
                            name: 'Separator',
                            isConfig: true,
                            type: 'string',
                            defaultValue: '"|||||||"'

                    },
                        {
                            name: 'MWidth',
                            isConfig: true,
                            defaultValue: '60%'

                    },
                        {
                            name: 'MHeight',
                            isConfig: true,
                            defaultValue: '50px'

                    },
                        {
                            name: 'MAllignment',
                            isConfig: true,
                            defaultValue: 'center'

                    },
                        {
                            name: 'MDirection',
                            isConfig: true,
                            defaultValue: 'right'

                    },
                        {
                            name: 'MSpeed',
                            isConfig: true,
                            defaultValue: '12'

                    }






                ]
            }
        ]);
        });
})();
