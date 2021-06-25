(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.actions.download-excel').config(function (rxActionProvider, RX_DEFINITION_PICKER) {
        rxActionProvider.registerAction({
            name: 'comVyomVyomlibDownloadExcel',
            label: 'Download Excel',
            bundleId: 'com.vyom.vyomlib',
            parameters: [

                {
                    name: 'Label',
                    label: 'Label',
                    enableExpressionEvaluation: true,
                    editor: 'rx-expression-field'

                },
                {
                    name: 'recordDefinitionName',
                    label: 'Record Definition',
                    editor: 'rx-action-definition-picker',
                    definitionType: RX_DEFINITION_PICKER.definitionTypes.dataRecord.type,
                    defaultValue: null
                },

                {
                    name: 'Records',
                    label: 'Records',
                    enableExpressionEvaluation: true,
                    editor: 'rx-expression-field'

                }
            ]
        });
    });
})();
