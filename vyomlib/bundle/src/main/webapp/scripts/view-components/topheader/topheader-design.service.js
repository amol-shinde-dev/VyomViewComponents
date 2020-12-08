(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.topheader').factory('comVyomVyomlibTopheaderDesign', function (comVyomVyomlibTopheaderModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }


        function getRxData(componentDefinition, componentDescriptor) {


            return {

                text: componentDefinition.propertiesByName.text,
                appname: componentDefinition.propertiesByName.appname,
                hyperlink: componentDefinition.propertiesByName.hyperlink,
                toggleicon: componentDefinition.propertiesByName.toggleicon,
                togglefont: componentDefinition.propertiesByName.togglefont,
                bgcolor: componentDefinition.propertiesByName.bgcolor,
                headerSize: componentDefinition.propertiesByName.headerSize
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        text: {
                            label: 'text',
                            type: 'text',
                            group: 'general',
                            index: 1
                        },
                        appname: {
                            label: 'appname',
                            type: 'text',
                            group: 'general',
                            value: 'application',
                            index: 2
                        },
                        hyperlink: {
                            label: 'hyperlink',
                            type: 'text',
                            group: 'general',
                            index: 3
                        },
                        toggleicon: {
                            label: 'Hide Icon',
                            type: 'rx-inspector-optional-expression',
                            group: 'general',

                            index: 4
                        },
                        togglefont: {
                            label: 'Show Ericfont',
                            type: 'rx-inspector-optional-expression',
                            group: 'general',

                            index: 5
                        },
                        bgcolor: {
                            label: 'Header Background Color',
                            type: 'com-vyom-vyomlib-inspector-topheader-bgcolor',
                            group: 'general',
                            index: 6
                        },
                        headerSize: {
                            label: 'Size',
                            type: 'select',
                            options: [{
                                value: "tiny",
                                content: "Tiny"
                                }, {
                                value: "small",
                                content: "Small"
                                }, {
                                value: "medium",
                                content: "Medium (Default)"
                                }, {
                                value: "large",
                                content: "Large"
                                }, {
                                value: "xlarge",
                                content: "Extra Large"
                                }, {
                                value: "xxlarge",
                                content: "Extra Extra Large"
                                }, {
                                value: "xxxlarge",
                                content: "Extra Extra Extra Large"
                                }, {
                                value: "jumbo",
                                content: "Jumbo"
                                }],
                            group: 'general',
                            index: 7
                        }

                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            // should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibTopheaderModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
