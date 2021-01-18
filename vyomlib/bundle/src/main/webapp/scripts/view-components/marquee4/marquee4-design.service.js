/* This code is run at 'design' phase, in Innovation Studio.
The factory is defined in the 'config.js':
*/
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.marquee4').factory('comVyomVyomlibMarquee4Design', function (comVyomVyomlibMarquee4Model, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }


        function getRxData(componentDefinition, componentDescriptor) {

            var defaultSeparator = _.find(componentDescriptor.propertiesByName, {
                name: 'Separator'
            }).defaultValue;
            var defaultMWidth = _.find(componentDescriptor.propertiesByName, {
                name: 'MWidth'
            }).defaultValue;
            var defaultMHeight = _.find(componentDescriptor.propertiesByName, {
                name: 'MHeight'
            }).defaultValue;
            var defaultMAllignment = _.find(componentDescriptor.propertiesByName, {
                name: 'MAllignment'
            }).defaultValue;
            var defaultMDirection = _.find(componentDescriptor.propertiesByName, {
                name: 'MDirection'
            }).defaultValue;
            var defaultMSpeed = _.find(componentDescriptor.propertiesByName, {
                name: 'MSpeed'
            }).defaultValue;
            var defaultMBGColor = _.find(componentDescriptor.propertiesByName, {
                name: 'MBGColor'
            }).defaultValue;
            var defaultMBehavior = _.find(componentDescriptor.propertiesByName, {
                name: 'MBehavior'
            }).defaultValue;


            return {
                FieldID1: componentDefinition.propertiesByName.FieldID1,
                FieldID2: componentDefinition.propertiesByName.FieldID2,
                FieldID3: componentDefinition.propertiesByName.FieldID3,
                FieldID4: componentDefinition.propertiesByName.FieldID4,
                FieldID1Title: componentDefinition.propertiesByName.FieldID1Title,
                FieldID2Title: componentDefinition.propertiesByName.FieldID2Title,
                FieldID3Title: componentDefinition.propertiesByName.FieldID3Title,
                FieldID4Title: componentDefinition.propertiesByName.FieldID4Title,
                //ColourHeader: componentDefinition.propertiesByName.ColourHeader,
                MBGColor: componentDefinition.propertiesByName.MBGColor || defaultMBGColor,
                IncidentRecDef: componentDefinition.propertiesByName.IncidentRecDef,
                Separator: componentDefinition.propertiesByName.Separator || defaultSeparator,
                MWidth: componentDefinition.propertiesByName.MWidth || defaultMWidth,
                MHeight: componentDefinition.propertiesByName.MHeight || defaultMHeight,
                MAllignment: componentDefinition.propertiesByName.MAllignment || defaultMAllignment,
                MDirection: componentDefinition.propertiesByName.MDirection || defaultMDirection,
                MSpeed: componentDefinition.propertiesByName.MSpeed || defaultMSpeed,
                MBehavior: componentDefinition.propertiesByName.MBehavior || defaultMBehavior,
                FilterExp: componentDefinition.propertiesByName.FilterExp
            };

        }

        // Defining the parameters types with helper.
        // We "overwrite" the options from the config.js files with those ones.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        FieldID1: {
                            label: 'Field ID1',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector

                            group: 'general',
                            index: 2
                        },
                        FieldID1Title: {
                            label: 'Field ID1 Title',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector

                            group: 'general',
                            index: 3
                        },
                        FieldID2: {
                            label: 'Field ID2',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector

                            group: 'general',
                            index: 4
                        },
                        FieldID2Title: {
                            label: 'Field ID2 Title',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector

                            group: 'general',
                            index: 5
                        },
                        FieldID3: {
                            label: 'Field ID3',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector

                            group: 'general',
                            index: 6
                        },
                        FieldID3Title: {
                            label: 'Field ID3 Title',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector

                            group: 'general',
                            index: 7
                        },
                        FieldID4: {
                            label: 'Field ID4',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector

                            group: 'general',
                            index: 8
                        },
                        FieldID4Title: {
                            label: 'Field ID4 Title',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector

                            group: 'general',
                            index: 9
                        },
                        IncidentRecDef: {
                            label: 'Incident Record Definition',
                            //type: 'rx-inspector-expression-node-field', // Standard Inspector
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 1
                        },
                        FilterExp: {
                            label: 'Filter By Expression',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
                            tooltip: {
                                text: "Enter a condition in String Format eg.(\"'10740xxx'=\\\"IncidentManagment\\\"\")",
                                placement: "left"
                            },

                            when: {
                                and: [{
                                    ne: {
                                        "rxData/IncidentRecDef": void 0
                                    }
                                }, {
                                    ne: {
                                        "rxData/IncidentRecDef": ""
                                    }
                                }]
                            },
                            group: 'filter',
                            index: 1
                        },

                        MBGColor: {
                            label: 'Background Colour of Marquee Text',
                            type: 'com-vyom-vyomlib-inspector-marquee3-mbgcolor',
                            group: 'Marquee',
                            index: 1
                        },
                        Separator: {
                            label: 'Separator',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Marquee',
                            index: 2
                        },
                        MWidth: {
                            label: 'Width',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "Width Should be in % (eg. 60%)",
                                placement: "left"
                            },
                            group: 'Marquee',
                            index: 3
                        },
                        MHeight: {
                            label: 'Height',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "Height Should be in px (eg. 50px)",
                                placement: "left"
                            },
                            group: 'Marquee',
                            index: 4
                        },
                        MAllignment: {
                            label: 'Allignment',
                            type: 'com-vyom-vyomlib-inspector-marquee3-allignment',
                            group: 'Marquee',
                            index: 5
                        },
                        MDirection: {
                            label: 'Direction',
                            type: 'com-vyom-vyomlib-inspector-marquee3-direction',
                            group: 'Marquee',
                            index: 6
                        },
                        MSpeed: {
                            label: 'Speed',
                            tooltip: {
                                text: "Scroll Amount Should be integer (eg. slow=1,normal=7,fast=15,super=50)",
                                placement: "left"
                            },
                            type: 'rx-inspector-expression-node-field',
                            group: 'Marquee',
                            index: 7
                        },
                        MBehavior: {
                            label: 'Marquee Behavior',
                            type: 'com-vyom-vyomlib-inspector-marquee3-behavior',
                            group: 'Marquee',
                            index: 8
                        }


                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    },
                    filter: {
                        label: 'Filter',
                        index: 2,
                        closed: 1
                    },
                    Marquee: {
                        label: 'Marquee',
                        index: 3,
                        closed: 1
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibMarquee4Model(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
