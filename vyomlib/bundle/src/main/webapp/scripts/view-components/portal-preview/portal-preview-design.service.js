(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.portal-preview').factory('comVyomVyomlibPortalPreviewDesign', function (comVyomVyomlibPortalPreviewModel, rxGUID, RX_DEFINITION_PICKER, $sce) {
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
            var defaultBannerHeight = _.find(componentDescriptor.propertiesByName, {
                name: 'BannerHeight'
            }).defaultValue;



            return {

                recordDefinitionFullName: componentDefinition.propertiesByName.recordDefinitionFullName,
                ApplicationName: componentDefinition.propertiesByName.ApplicationName,


                Description: componentDefinition.propertiesByName.Description,
                rateMeActionGuid: componentDefinition.propertiesByName.rateMeActionGuid,
                ratingCount: componentDefinition.propertiesByName.ratingCount,
                cardActionGuid: componentDefinition.propertiesByName.cardActionGuid,
                adminConfiguration: (componentDefinition.propertiesByName.adminConfiguration == 'true') ? true : false,
                adminConfigurationLabel: componentDefinition.propertiesByName.adminConfigurationLabel || defaultadminConfigurationLabel,
                cardVisible: componentDefinition.propertiesByName.cardVisible,
                cardErrorInformation: componentDefinition.propertiesByName.cardErrorInformation,
                cardStatusNamedList: componentDefinition.propertiesByName.cardStatusNamedList,
                userApplicationNamedList: componentDefinition.propertiesByName.userApplicationNamedList,

                cardBottomActionGuid: componentDefinition.propertiesByName.cardBottomActionGuid,
                perRowCardLength: componentDefinition.propertiesByName.perRowCardLength,
                cardSorting: componentDefinition.propertiesByName.cardSorting,
                cardOrder: componentDefinition.propertiesByName.cardOrder,
                cardStatus: componentDefinition.propertiesByName.cardStatus,
                cardFavourite: componentDefinition.propertiesByName.cardFavourite,
                cardScope: componentDefinition.propertiesByName.cardScope,
                Greetings: componentDefinition.propertiesByName.Greetings,
                titleColor: componentDefinition.propertiesByName.titleColor,
                search: componentDefinition.propertiesByName.search,
                cssClasses: componentDefinition.propertiesByName.cssClasses,

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
                BannerHeight: componentDefinition.propertiesByName.BannerHeight || defaultBannerHeight,


                Views: componentDefinition.propertiesByName.Views,
                CategoryField: componentDefinition.propertiesByName.CategoryField,
                CategoryNamedList: componentDefinition.propertiesByName.CategoryNamedList,
                CategoryColor: componentDefinition.propertiesByName.CategoryColor,

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
                        cssClasses: {
                            label: 'CSS Classes',
                            type: 'rx-inspector-tag-input',
                            tooltip: {
                                text: $sce.trustAsHtml("Published Fonts:<br>com-ericsson-hilda-regular<br>om-ericsson-hilda-light<br>com-ericsson-hilda-medium<br>com-ericsson-hilda-bold<br>Portal Fonts:<br>com-vyom-hilda-regular<br>om-vyom-hilda-light<br>com-vyom-hilda-medium<br>com-vyom-hilda-bold"),
                                placement: "left"
                            },
                            group: 'CardHeader',
                            index: 4
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
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
                            group: 'Card',
                            index: 2
                        },
                        Description: {
                            label: 'Description',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
                            group: 'Card',
                            index: 3
                        },

                        Icon: {
                            label: 'Icon',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
                            group: 'Card',
                            index: 4
                        },

                        Color: {
                            label: 'Color Class',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
                            group: 'Card',
                            index: 5
                        },
                        tooltipHeader: {
                            label: 'Tooltip Header',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
                            group: 'Card',
                            index: 6
                        },
                        tooltipDescription: {
                            label: 'Tooltip Description',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
                            group: 'Card',
                            index: 7
                        },
                        Views: {
                            label: 'Views',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-integer',
                            group: 'Card',
                            index: 8
                        },
                        ratingCount: {
                            label: 'Stars',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-integer',
                            group: 'Card',
                            index: 9
                        },
                        rateMeActionGuid: {
                            label: 'Rate Me (btn GUID)',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Card',
                            index: 10
                        },
                        cardStatus: {
                            label: 'Availability/Unavailability',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
                            tooltip: {
                                text: "This Field should contain stored value of namedlist. PATH:[CARD ACTION -> Application Status NamedList]",
                                placement: "left"
                            },
                            group: 'Card',
                            index: 11
                        },
                        cardFavourite: {
                            label: 'Favourite',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
                            tooltip: {
                                text: "Values should be either true or false",
                                placement: "left"
                            },
                            group: 'Card',
                            index: 12
                        },
                        cardScope: {
                            label: 'Card Scope',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
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
                            label: 'Action button Guid',
                            type: 'rx-inspector-expression-node-field',
                            group: 'cardAction',
                            index: 1
                        },
                        cardSorting: {
                            label: 'Sort By',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
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
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
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
                                text: $sce.trustAsHtml("*Tip: Make Sure Display Values should be <em>Color(LOWER CASE)</em> and Stored Values should be <em>Application Status</em>."),
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
                        perRowCardLength: {
                            label: 'Row Wise Cards',
                            type: 'rx-inspector-optional-select',
                            options: [{
                                value: "col-lg-4 col-md-5 col-sm-5",
                                content: "Three Cards"
                                }, {
                                value: "col-lg-3 col-md-4 col-sm-4",
                                content: "four Cards"
                                }],
                            defaultValue: "col-lg-3 col-md-4 col-sm-4",
                            group: 'cardAction',
                            index: 11
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
                        BannerHeight: {
                            label: 'Height (pixel)',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Banner',
                            index: 7
                        },
                        CategoryField: {
                            label: 'Category Field',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-fields',
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
                        CategoryNamedList: {
                            label: 'Category Named List',
                            type: 'rx-inspector-definition-picker',
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.namedList.type,
                            tooltip: {
                                text: $sce.trustAsHtml("*Tip: Make Sure Display Values should be <em>Catgory Label</em> and Stored Values should be <em>bakend value to filter the cards</em>."),
                                placement: "left"
                            },
                            group: 'Category',
                            index: 2
                        },

                        CategoryColor: {
                            label: 'Color',
                            type: 'com-vyom-vyomlib-inspector-portal-preview-bgcolor',
                            group: 'Category',
                            index: 3
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
                        label: 'Header',
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
                return new comVyomVyomlibPortalPreviewModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
