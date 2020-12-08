// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc17').factory('comVyomVyomlibVc17Design', function (comVyomVyomlibVc17Model, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Innovation Studio parameters.
        // We can also setup default values.
        function getRxData(componentDefinition, componentDescriptor) {
            var defaultIcon1 = _.find(componentDescriptor.propertiesByName, {
                name: 'Icon1'
            }).defaultValue;
            var defaultIcon2 = _.find(componentDescriptor.propertiesByName, {
                name: 'Icon2'
            }).defaultValue;
            var defaultIcon3 = _.find(componentDescriptor.propertiesByName, {
                name: 'Icon3'
            }).defaultValue;
            var defaultIcon4 = _.find(componentDescriptor.propertiesByName, {
                name: 'Icon4'
            }).defaultValue;
            var defaultSlot1Title = _.find(componentDescriptor.propertiesByName, {
                name: 'Slot1Title'
            }).defaultValue;
            var defaultSlot1Notes = _.find(componentDescriptor.propertiesByName, {
                name: 'Slot1Notes'
            }).defaultValue;
            var defaultSlot2Notes = _.find(componentDescriptor.propertiesByName, {
                name: 'Slot2Notes'
            }).defaultValue;
            var defaultSlot2Title = _.find(componentDescriptor.propertiesByName, {
                name: 'Slot2Title'
            }).defaultValue;
            var defaultSlot2Followers = _.find(componentDescriptor.propertiesByName, {
                name: 'Slot2Followers'
            }).defaultValue;
            var defaultSlot1ClickBGColor = _.find(componentDescriptor.propertiesByName, {
                name: 'Slot1ClickBGColor'
            }).defaultValue;
            var defaultSlot2NotesBGColor = _.find(componentDescriptor.propertiesByName, {
                name: 'Slot2NotesBGColor'
            }).defaultValue;
            var defaultsubTitle = _.find(componentDescriptor.propertiesByName, {
                name: 'subTitle'
            }).defaultValue;
            var defaultTitle1 = _.find(componentDescriptor.propertiesByName, {
                name: 'Title1'
            }).defaultValue;
            var defaultTitle2 = _.find(componentDescriptor.propertiesByName, {
                name: 'Title2'
            }).defaultValue;
            var defaultTitle3 = _.find(componentDescriptor.propertiesByName, {
                name: 'Title3'
            }).defaultValue;
            var defaultTitle4 = _.find(componentDescriptor.propertiesByName, {
                name: 'Title4'
            }).defaultValue;
           

            return {
                Url1: componentDefinition.propertiesByName.Url1,
                Url2: componentDefinition.propertiesByName.Url2,
                Url3: componentDefinition.propertiesByName.Url3,
                Url4: componentDefinition.propertiesByName.Url4,
                Slot1ClickURL:componentDefinition.propertiesByName.Slot1ClickURL,
                Icon1: componentDefinition.propertiesByName.Icon1 || defaultIcon1,
                Icon2: componentDefinition.propertiesByName.Icon2 || defaultIcon2,
                Icon3: componentDefinition.propertiesByName.Icon3 || defaultIcon3,
                Icon4: componentDefinition.propertiesByName.Icon1 || defaultIcon4,
                Slot1Title:componentDefinition.propertiesByName.Slot1Title || defaultSlot1Title,
                Slot1Notes:componentDefinition.propertiesByName.Slot1Notes || defaultSlot1Notes,
                Slot2Notes:componentDefinition.propertiesByName.Slot2Notes || defaultSlot2Notes,
                Slot2Followers:componentDefinition.propertiesByName.Slot2Followers || defaultSlot2Followers,
                Slot1ClickBGColor:componentDefinition.propertiesByName.Slot1ClickBGColor|| defaultSlot1ClickBGColor,
                Slot2NotesBGColor:componentDefinition.propertiesByName.Slot2NotesBGColor||defaultSlot2NotesBGColor,
                subTitle:componentDefinition.propertiesByName.subTitle ||defaultsubTitle,
                Title1:componentDefinition.propertiesByName.Title1 || defaultTitle1,
                Title2:componentDefinition.propertiesByName.Title2 || defaultTitle2,
                Title3:componentDefinition.propertiesByName.Title3 || defaultTitle3,
                Slot2Title:componentDefinition.propertiesByName.Slot2Title||defaultSlot2Title,
                Title4:componentDefinition.propertiesByName.Title4 || defaultTitle4
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                       
                        Url1: {
                            label: 'Url1',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Blocks',
                            index: 1
                        },
                        Url2: {
                            label: 'Url2',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Blocks',
                            index: 2
                        },
                        Url3: {
                            label: 'Url3',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Blocks',
                            index: 3
                        },
                        Url4: {
                            label: 'Url4',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Blocks',
                            index: 4
                        },
                        Icon1: {
                            label: 'Icon1',
                            type: 'com-vyom-vyomlib-inspector-vc17-icon',
                            group: 'Blocks',
                            index: 5
                        },
                        Icon2: {
                            label: 'Icon2',
                            type: 'com-vyom-vyomlib-inspector-vc17-icon',
                            group: 'Blocks',
                            index: 6
                        }, 
                        Icon3: {
                            label: 'Icon3',
                            type: 'com-vyom-vyomlib-inspector-vc17-icon',
                            group: 'Blocks',
                            index: 7
                        },
                        Icon4: {
                            label: 'Icon4',
                            type: 'com-vyom-vyomlib-inspector-vc17-icon',
                            group: 'Blocks',
                            index: 8
                        },
                        Slot1Title: {
                            label: 'Slot1Title',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Slots',
                            index: 9
                        },
                        Slot1Notes: {
                            label: 'Slot1Notes',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Slots',
                            index: 10
                        },
                        Slot1ClickURL: {
                            label: 'Slot1ClickURL',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Slots',
                            index: 11
                        },
                         Slot1ClickBGColor: {
                            label: 'Slot1ClickBGColor',
                            type: 'com-vyom-vyomlib-inspector-vc17-bgcolor2',
                            group: 'Slots',
                            index: 12
                        },
                        Slot2Notes: {
                            label: 'Slot2Notes',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Slots',
                            index: 13
                        },
                        Slot2Followers: {
                            label: 'Slot2Followers',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Slots',
                            index: 14
                        },
                        Slot2NotesBGColor: {
                            label: 'Slot2NotesBGColor',
                            type: 'com-vyom-vyomlib-inspector-vc17-bgcolor2',
                            group: 'Slots',
                            index: 15
                        },
                        URL: {
                            label: 'URL',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Logo',
                            index: 16
                        },
                        subTitle: {
                            label: 'subTitle',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Logo',
                            index: 17
                        },
                        Title1: {
                            label: 'Title1',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Blocks',
                            index: 18
                        },
                        Title2: {
                            label: 'Title2',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Blocks',
                            index: 19
                        },
                        Title3: {
                            label: 'Title3',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Blocks',
                            index: 20
                        },
                        Title4: {
                            label: 'Title4',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Blocks',
                            index: 21
                        },
                        Slot2Title: {
                            label: 'Slot2Title',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Slots',
                            index: 22
                        },

                    }
                },
                groups: {
                    Blocks: {
                        label: 'Blocks',
                        index: 1
                    },
                    Slots: {
                        label: 'Slots',
                        closed:true,
                        index: 2
                    },
                    Logo: {
                        label: 'Logo',
                        closed:true,
                        index: 3
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibVc17Model(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();