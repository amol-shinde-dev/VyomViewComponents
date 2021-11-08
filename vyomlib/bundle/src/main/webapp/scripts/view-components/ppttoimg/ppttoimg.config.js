(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.ppttoimg')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'PPTToIMG',
                    group: 'vyomlib',
                    icon: 'slider',
                    type: 'com-vyom-vyomlib-ppttoimg',
                    designType: 'com-vyom-vyomlib-ppttoimg-design',
                    designManagerService: 'comVyomVyomlibPpttoimgDesign',
                    bundleId: 'com.vyom.vyomlib',
                    canBeEmbeddedInRecordEditor: true,
                    propertiesByName: [
                        {

                            name: 'recordDefinitionFullName',
                            isConfig: true,
                            isRequired: true

                    }, {

                            name: 'pptField',
                            isConfig: true,
                            isRequired: true

                    }, {

                            name: 'RecInstanceId',
                            isConfig: true,
                            isRequired: true,
                            enableExpressionEvaluation: true

                    }, {

                            name: 'slideNumber',
                            isConfig: true,
                            enableExpressionEvaluation: true

                    },






                ]
            }
        ]);
        });
})();
