(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.landing-console').factory('comVyomVyomlibLandingConsoleDesign', function (comVyomVyomlibLandingConsoleModel, rxGUID, RX_DEFINITION_PICKER, $sce) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }


        function getRxData(componentDefinition, componentDescriptor) {


            var defaultadminConfigurationLabel = _.find(componentDescriptor.propertiesByName, {
                name: 'adminConfigurationLabel'
            }).defaultValue;

            return {

                recordDefinitionFullName: componentDefinition.propertiesByName.recordDefinitionFullName,
                ApplicationName: componentDefinition.propertiesByName.ApplicationName,
                Description: componentDefinition.propertiesByName.Description,


                cardActionGuid: componentDefinition.propertiesByName.cardActionGuid,
                adminConfiguration: (componentDefinition.propertiesByName.adminConfiguration == 'true') ? true : false,
                adminConfigurationLabel: componentDefinition.propertiesByName.adminConfigurationLabel || defaultadminConfigurationLabel,
                cardVisible: componentDefinition.propertiesByName.cardVisible,
                cardErrorInformation: componentDefinition.propertiesByName.cardErrorInformation,
                cardStatusNamedList: componentDefinition.propertiesByName.cardStatusNamedList,
                userApplicationNamedList: componentDefinition.propertiesByName.userApplicationNamedList,
                cardBottomActionGuid: componentDefinition.propertiesByName.cardBottomActionGuid,
                cardSorting: componentDefinition.propertiesByName.cardSorting,
                cardOrder: componentDefinition.propertiesByName.cardOrder,
                cardStatus: componentDefinition.propertiesByName.cardStatus,
                cardFavourite: componentDefinition.propertiesByName.cardFavourite,
                cardScope: componentDefinition.propertiesByName.cardScope,
                Greetings: componentDefinition.propertiesByName.Greetings,
                titleColor: componentDefinition.propertiesByName.titleColor,
                search: componentDefinition.propertiesByName.search,

                rateMeActionGuid: componentDefinition.propertiesByName.rateMeActionGuid,
                ratingCount: componentDefinition.propertiesByName.ratingCount,

                Icon: componentDefinition.propertiesByName.Icon,
                tooltipHeader: componentDefinition.propertiesByName.tooltipHeader,
                Color: componentDefinition.propertiesByName.Color,
                tooltipDescription: componentDefinition.propertiesByName.tooltipDescription,
                FilterExp: componentDefinition.propertiesByName.FilterExp,

                BannerRecordDefinition: componentDefinition.propertiesByName.BannerRecordDefinition,
                BannerInstanceId: componentDefinition.propertiesByName.BannerInstanceId,
                BannerImage: componentDefinition.propertiesByName.BannerImage,
                BannerURL: componentDefinition.propertiesByName.BannerURL,
                BannerCaption: componentDefinition.propertiesByName.BannerCaption,
                BannerSubCaption: componentDefinition.propertiesByName.BannerSubCaption,

                Views: componentDefinition.propertiesByName.Views,

                CategoryField: componentDefinition.propertiesByName.CategoryField,
                Category1: componentDefinition.propertiesByName.Category1,
                Category2: componentDefinition.propertiesByName.Category2,
                Category3: componentDefinition.propertiesByName.Category3,
                Category4: componentDefinition.propertiesByName.Category4,
                Category5: componentDefinition.propertiesByName.Category5,
                Category6: componentDefinition.propertiesByName.Category6,
                Category7: componentDefinition.propertiesByName.Category7,
                Category8: componentDefinition.propertiesByName.Category8,
                CategoryColor: componentDefinition.propertiesByName.CategoryColor,

                DataSet1Label: componentDefinition.propertiesByName.DataSet1Label,
                DataSet1: componentDefinition.propertiesByName.DataSet1,
                DataSet1Field: componentDefinition.propertiesByName.DataSet1Field,
                dataset1searchfield: componentDefinition.propertiesByName.dataset1searchfield,
                dataset1displayfield: componentDefinition.propertiesByName.dataset1displayfield,

                DataSet2Label: componentDefinition.propertiesByName.DataSet2Label,
                DataSet2: componentDefinition.propertiesByName.DataSet2,
                DataSet2Field: componentDefinition.propertiesByName.DataSet2Field,
                dataset2searchfield: componentDefinition.propertiesByName.dataset2searchfield,
                dataset2displayfield: componentDefinition.propertiesByName.dataset2displayfield,


            };
        }


        function getRxInspector() {
            return {
                inputs: {
                    rxData: {

                        Greetings: {
                            label: 'Greetings',
                            type: 'rx-inspector-expression-node-field',
                            group: 'CardHeader',
                            index: 1
                        },

                        titleColor: {
                            label: 'titleColor',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-bgcolor',
                            group: 'CardHeader',
                            index: 2
                        },
                        search: {
                            label: 'Search bar placeholder',
                            type: 'rx-inspector-expression-node-field',
                            group: 'CardHeader',
                            index: 3
                        },
                        recordDefinitionFullName: {
                            label: 'Record Definition Name',
                            type: 'rx-inspector-definition-picker',
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type,
                            group: 'Card',
                            index: 1
                        },
                        ApplicationName: {
                            label: 'Application Name',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            group: 'Card',
                            index: 2
                        },
                        Description: {
                            label: 'Description',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            group: 'Card',
                            index: 3
                        },

                        Icon: {
                            label: 'Icon',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            group: 'Card',
                            index: 4
                        },

                        Color: {
                            label: 'Color Class',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            group: 'Card',
                            index: 5
                        },
                        tooltipHeader: {
                            label: 'Tooltip Header',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            group: 'Card',
                            index: 6
                        },
                        tooltipDescription: {
                            label: 'Tooltip Description',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            group: 'Card',
                            index: 7
                        },
                        Views: {
                            label: 'Views',
                            type: 'com-vyom-vyomlib-inspector-landing-console-integer',
                            group: 'Card',
                            index: 8
                        },
                        ratingCount: {
                            label: 'Stars',
                            type: 'com-vyom-vyomlib-inspector-landing-console-integer',
                            group: 'Card',
                            index: 9
                        },
                        rateMeActionGuid: {
                            label: 'Rate Me (btn Guid)',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Card',
                            index: 10
                        },
                        cardStatus: {
                            label: 'Availability/Unavailability',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            tooltip: {
                                text: "This field should contain stored value of namedlist. PATH:[CARD ACTION -> Application Status NamedList]",
                                placement: "left"
                            },
                            group: 'Card',
                            index: 11
                        },
                        cardFavourite: {
                            label: 'Favourite',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            tooltip: {
                                text: "Values should be either true or false",
                                placement: "left"
                            },
                            group: 'Card',
                            index: 12
                        },
                        cardScope: {
                            label: 'Card Scope',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            tooltip: {
                                text: "Values should be either true or false",
                                placement: "left"
                            },
                            group: 'Card',
                            index: 13
                        },
                        FilterExp: {
                            label: 'Filter',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Card',
                            index: 14
                        },



                        cardActionGuid: {
                            label: 'Action Button Guid',
                            type: 'rx-inspector-expression-node-field',
                            group: 'cardAction',
                            index: 1
                        },
                        cardSorting: {
                            label: 'Sort By',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            group: 'cardAction',
                            index: 2
                        },
                        cardOrder: {
                            label: 'Order(Ascending/Descending)',
                            type: 'rx-inspector-optional-select',
                            options: [{
                                value: false,
                                content: "Ascending"
                                }, {
                                value: true,
                                content: "Descending"
                                }],
                            group: 'cardAction',
                            index: 3
                        },
                        adminConfiguration: {
                            label: 'Admins Only',
                            type: 'rx-inspector-toggle-field',
                            group: 'cardAction',
                            index: 4
                        },
                        adminConfigurationLabel: {
                            label: 'Admins Only - Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'cardAction',
                            index: 5
                        },
                        cardVisible: {
                            label: 'Card Visible',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            group: 'cardAction',
                            index: 6
                        },
                        cardErrorInformation: {
                            label: 'Error Information',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
                            group: 'cardAction',
                            index: 7
                        },
                        cardStatusNamedList: {
                            label: 'Application Status NamedList',
                            type: 'rx-inspector-definition-picker',
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.namedList.type,
                            tooltip: {
                                text: $sce.trustAsHtml("*Tip: Make Sure Display Values should be <em>Color(LOWER CASE)</em> and Stored Values should be <em>Application Status</ems>."),
                                placement: "left"
                            },
                            group: 'cardAction',
                            index: 8
                        },
                        userApplicationNamedList: {
                            label: 'User Application NamedList',
                            type: 'rx-inspector-definition-picker',
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.namedList.type,
                            tooltip: {
                                text: $sce.trustAsHtml("*Tip: Make Sure <br>Criteria: Current User <br>Display Value:  <em>Application Name</em><br>Stored Value: <em>Application Name</em>."),
                                placement: "left"
                            },
                            group: 'cardAction',
                            index: 9
                        },
                        cardBottomActionGuid: {
                            label: 'Action Button Guid (Bottom)',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "This button will be available in admin view (bottom of card).",
                                placement: "left"
                            },
                            group: 'cardAction',
                            index: 10
                        },
                        BannerRecordDefinition: {
                            label: 'Record Definition Name',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Banner',
                            index: 1
                        },
                        BannerInstanceId: {
                            label: 'Record Instance Id',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Banner',
                            index: 2
                        },
                        BannerImage: {
                            label: 'Image Field ID',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Banner',
                            index: 3
                        },
                        BannerURL: {
                            label: 'URL',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Banner',
                            index: 4
                        },
                        BannerCaption: {
                            label: 'Caption',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Banner',
                            index: 5
                        },
                        BannerSubCaption: {
                            label: 'Sub-Caption',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Banner',
                            index: 6
                        },

                        CategoryField: {
                            label: 'Category Field',
                            type: 'com-vyom-vyomlib-inspector-landing-console-fields',
                            when: {
                                and: [{
                                    ne: {
                                        "rxData/recordDefinitionFullName": void 0
                                    }
                                }, {
                                    ne: {
                                        "rxData/recordDefinitionFullName": ""
                                    }
                                }]
                            },
                            group: 'Category',
                            index: 1
                        },
                        Category1: {
                            label: 'Label1',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Category',
                            index: 2
                        },
                        Category2: {
                            label: 'Label2',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Category',
                            index: 3
                        },
                        Category3: {
                            label: 'Label3',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Category',
                            index: 4
                        },
                        Category4: {
                            label: 'Label4',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Category',
                            index: 5
                        },
                        Category5: {
                            label: 'Label5',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Category',
                            index: 6
                        },
                        Category6: {
                            label: 'Label6',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Category',
                            index: 7
                        },
                        Category7: {
                            label: 'Label7',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Category',
                            index: 8
                        },
                        Category8: {
                            label: 'Label8',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Category',
                            index: 9
                        },
                        CategoryColor: {
                            label: 'Color',
                            type: 'com-vyom-vyomlib-inspector-landing-console-bgcolor',
                            group: 'Category',
                            index: 10
                        },
                        DataSet1Label: {
                            label: 'Data Set 1-Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DataSet',
                            index: 1
                        },
                        DataSet1: {
                            label: 'Data Set 1',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DataSet',
                            index: 2
                        },
                        DataSet1Field: {
                            label: 'Field Ids',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "Enter custom field ids seprated by comma(,).",
                                placement: "left"
                            },
                            group: 'DataSet',
                            index: 3
                        },
                        dataset1searchfield: {
                            label: 'search by field id (Application Name)',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DataSet',
                            index: 4
                        },
                        dataset1displayfield: {
                            label: 'display value field id',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DataSet',
                            index: 5
                        },
                        DataSet2Label: {
                            label: 'Data Set 2-Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DataSet',
                            index: 6
                        },
                        DataSet2: {
                            label: 'Data Set 2',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DataSet',
                            index: 7
                        },
                        DataSet2Field: {
                            label: 'Field Ids',
                            tooltip: {
                                text: "Enter custom field ids seprated by comma(,).",
                                placement: "left"
                            },
                            type: 'rx-inspector-expression-node-field',
                            group: 'DataSet',
                            index: 8
                        },
                        dataset2searchfield: {
                            label: 'search by field id (Application Name)',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DataSet',
                            index: 9
                        },
                        dataset2displayfield: {
                            label: 'display value field id',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DataSet',
                            index: 10
                        },

                    }
                },
                groups: {
                    General: {
                        label: 'General',
                        closed: true,
                        index: 1
                    },
                    Card: {
                        label: 'Card',
                        closed: true,
                        index: 2
                    },
                    cardAction: {
                        label: 'Card Action',
                        closed: true,
                        index: 3
                    },
                    Banner: {
                        label: 'Banner',
                        closed: true,
                        index: 4
                    },
                    CardHeader: {
                        label: 'Card Header',
                        closed: true,
                        index: 5
                    },
                    Category: {
                        label: 'Category',
                        closed: true,
                        index: 6
                    },
                    DataSet: {
                        label: 'Data Set',
                        closed: true,
                        index: 7
                    }

                },

            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibLandingConsoleModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
