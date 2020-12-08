// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dashboard1')
        .factory('comVyomVyomlibDashboard1Design',
            function (comVyomVyomlibDashboard1Model, rxGUID, RX_DEFINITION_PICKER) {
                function getRxConfig(componentDefinition, componentDescriptor) {
                    return {
                        id: componentDefinition.guid || rxGUID.generate(),
                        type: componentDefinition.type,
                        rxData: getRxData(componentDefinition, componentDescriptor),
                        rxInspector: getRxInspector()
                    };
                }

                // Getting configuration defined in Innovation Studio parameters.
                function getRxData(componentDefinition) {
                    return {
                        recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                        User: componentDefinition.propertiesByName.User,
                        trainingName: componentDefinition.propertiesByName.trainingName,
                        skillId: componentDefinition.propertiesByName.skillId,
                        CheckedTraining: componentDefinition.propertiesByName.CheckedTraining,
                        secondCardTitle: componentDefinition.propertiesByName.secondCardTitle,
                        attachmentFieldId: componentDefinition.propertiesByName.attachmentFieldId,

                        color1: componentDefinition.propertiesByName.color1,
                        text1: componentDefinition.propertiesByName.text1,
                        icon1: componentDefinition.propertiesByName.icon1,
                        url1: componentDefinition.propertiesByName.url1,
                        description1: componentDefinition.propertiesByName.description1,

                        color2: componentDefinition.propertiesByName.color2,
                        text2: componentDefinition.propertiesByName.text2,
                        icon2: componentDefinition.propertiesByName.icon2,
                        url2: componentDefinition.propertiesByName.url2,
                        description2: componentDefinition.propertiesByName.description2,

                        color3: componentDefinition.propertiesByName.color3,
                        text3: componentDefinition.propertiesByName.text3,
                        icon3: componentDefinition.propertiesByName.icon3,
                        url3: componentDefinition.propertiesByName.url3,
                        description3: componentDefinition.propertiesByName.description3,

                        color4: componentDefinition.propertiesByName.color4,
                        text4: componentDefinition.propertiesByName.text4,
                        icon4: componentDefinition.propertiesByName.icon4,
                        url4: componentDefinition.propertiesByName.url4,
                        description4: componentDefinition.propertiesByName.description4,

                        color5: componentDefinition.propertiesByName.color5,
                        text5: componentDefinition.propertiesByName.text5,
                        icon5: componentDefinition.propertiesByName.icon5,
                        url5: componentDefinition.propertiesByName.url5,
                        description5: componentDefinition.propertiesByName.description5,

                        color6: componentDefinition.propertiesByName.color6,
                        text6: componentDefinition.propertiesByName.text6,
                        icon6: componentDefinition.propertiesByName.icon6,
                        url6: componentDefinition.propertiesByName.url6,
                        description6: componentDefinition.propertiesByName.description6,

                        buttonGuid1: componentDefinition.propertiesByName.buttonGuid1,
                        buttonGuid2: componentDefinition.propertiesByName.buttonGuid2,
                    };
                }

                // Defining the parameters types with helper.
                function getRxInspector() {
                    return {
                        inputs: {
                            rxData: {
                                //------Block 1-----//
                                User: {
                                    label: 'User record',
                                    type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                                    definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type,
                                    group: 'block1',
                                    index: 1
                                },

                                // --------Block 2----------//
                                secondCardTitle: {
                                    label: 'Second Card Title',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'block2',
                                    index: 1
                                },

                                //-----tile 1---//
                                color1: {
                                    label: 'Color 1',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-bgcolor',
                                    group: 'tile1',
                                    index: 1
                                },
                                text1: {
                                    label: 'Text 1',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile1',
                                    index: 2
                                },
                                icon1: {
                                    label: 'Icon 1',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-icon',
                                    group: 'tile1',
                                    index: 3
                                },
                                url1: {
                                    label: 'Url 1',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile1',
                                    index: 4
                                },
                                description1: {
                                    label: 'Description For Url',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile1',
                                    index: 5
                                },

                                //-----tile 2---//
                                color2: {
                                    label: 'Color 2',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-bgcolor',
                                    group: 'tile2',
                                    index: 2
                                },
                                text2: {
                                    label: 'Text 2',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile2',
                                    index: 3
                                },
                                icon2: {
                                    label: 'Icon 2',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-icon',
                                    group: 'tile2',
                                    index: 4
                                },
                                url2: {
                                    label: 'Url 2',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile2',
                                    index: 5
                                },
                                description2: {
                                    label: 'Description For Url',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile2',
                                    index: 5
                                },

                                //-----tile 3---//
                                text3: {
                                    label: 'Text 3',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile3',
                                    index: 2
                                },
                                icon3: {
                                    label: 'Icon 3',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-icon',
                                    group: 'tile3',
                                    index: 3
                                },
                                url3: {
                                    label: 'Url 3',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile3',
                                    index: 4
                                },
                                description3: {
                                    label: 'Description For Url',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile3',
                                    index: 5
                                },

                                //-----tile 4----///
                                color4: {
                                    label: 'Color 4',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-bgcolor',
                                    group: 'tile4',
                                    index: 1
                                },
                                text4: {
                                    label: 'Text 4',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile4',
                                    index: 2
                                },
                                icon4: {
                                    label: 'Icon 4',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-icon',
                                    group: 'tile4',
                                    index: 3
                                },
                                url4: {
                                    label: 'Url 4',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile4',
                                    index: 4
                                },
                                description4: {
                                    label: 'Description For Url',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile4',
                                    index: 5
                                },

                                //------tile 5---//
                                color5: {
                                    label: 'Color 5',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-bgcolor',
                                    group: 'tile5',
                                    index: 1
                                },
                                text5: {
                                    label: 'Text 5',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile5',
                                    index: 2
                                },
                                icon5: {
                                    label: 'Icon 5',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-icon',
                                    group: 'tile5',
                                    index: 3
                                },
                                url5: {
                                    label: 'Url 5',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile5',
                                    index: 4
                                },
                                description5: {
                                    label: 'Description For Url',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile5',
                                    index: 5
                                },

                                //----tile 6-----//
                                color6: {
                                    label: 'Color 6',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-bgcolor',
                                    group: 'tile6',
                                    index: 1
                                },
                                text6: {
                                    label: 'Text 6',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile6',
                                    index: 2
                                },
                                icon6: {
                                    label: 'Icon 6',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-icon',
                                    group: 'tile6',
                                    index: 3
                                },
                                url6: {
                                    label: 'Url 6',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile6',
                                    index: 4
                                },
                                description6: {
                                    label: 'Description For Url',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'tile6',
                                    index: 5
                                },

                                // -------block 3 ----//
                                color3: {
                                    label: 'Color 3',
                                    type: 'com-vyom-vyomlib-inspector-dashboard1-bgcolor',
                                    group: 'tile3',
                                    index: 1
                                },

                                // ----- block 4----//


                                // ----block 5-----//
                                recordDefinitionName: {
                                    label: 'My Training Record',
                                    type: 'rx-inspector-definition-picker',
                                    definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type,
                                    group: 'block5',
                                    index: 1
                                },
                                buttonGuid1: {
                                    label: 'Button Guid To Add Technology',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'block5',
                                    index: 2
                                },

                                // -------block 6---//
                                CheckedTraining: {
                                    label: 'Selected Training Record',
                                    type: 'rx-inspector-definition-picker',
                                    definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type,
                                    group: 'block6',
                                    index: 1
                                },
                                buttonGuid2: {
                                    label: 'Button Guid To Remove Technology',
                                    type: 'rx-inspector-expression-node-field',
                                    group: 'block6',
                                    index: 2
                                },

                            }
                        },
                        groups: {
                            general: {
                                label: 'General',
                                closed: true,
                                index: 1
                            },
                            block1: {
                                label: 'Block 1',
                                closed: true,
                                index: 2
                            },
                            block2: {
                                label: 'Block 2',
                                closed: true,
                                index: 3,
                            },
                            tile1: {
                                label: 'Block 2 - Tile 1',
                                closed: true,
                                index: 4,
                            },
                            tile2: {
                                label: 'Block 2 - Tile 2',
                                closed: true,
                                index: 5,
                            },
                            tile3: {
                                label: 'Block 2 - Tile 3',
                                closed: true,
                                index: 6,
                            },
                            tile4: {
                                label: 'Block 2 - Tile 4',
                                closed: true,
                                index: 7,
                            },
                            tile5: {
                                label: 'Block 2 - Tile 5',
                                closed: true,
                                index: 8,
                            },
                            tile6: {
                                label: 'Block 2 - Tile 6',
                                closed: true,
                                index: 9,
                            },
                            block3: {
                                label: 'Block 3',
                                closed: true,
                                index: 10
                            },
                            block4: {
                                label: 'Block 4',
                                closed: true,
                                index: 11
                            },
                            block5: {
                                label: 'Block 5',
                                closed: true,
                                index: 12
                            },
                            block6: {
                                label: 'Block 6',
                                closed: true,
                                index: 13
                            },
                        }
                    };
                }

                return {
                    //  should return a model instance
                    getModel: function (componentDefinition, componentDescriptor) {
                        return new comVyomVyomlibDashboard1Model(getRxConfig(componentDefinition, componentDescriptor));
                    }
                };
            });
})();