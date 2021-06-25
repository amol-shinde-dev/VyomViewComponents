(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.learning-portal').factory('comVyomVyomlibLearningPortalDesign', function (comVyomVyomlibLearningPortalModel, rxGUID, RX_DEFINITION_PICKER, $sce) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }


        function getRxData(componentDefinition, componentDescriptor) {



            var defaultBannerHeight = _.find(componentDescriptor.propertiesByName, {
                name: 'BannerHeight'
            }).defaultValue;


            return {

                recordDefinitionFullName: componentDefinition.propertiesByName.recordDefinitionFullName,
                courseName: componentDefinition.propertiesByName.courseName,
                supplierName: componentDefinition.propertiesByName.supplierName,
                supplierRating: componentDefinition.propertiesByName.supplierRating,
                courseRating: componentDefinition.propertiesByName.courseRating,
                costPerHoursSuffix: componentDefinition.propertiesByName.costPerHoursSuffix,
                totalCostPerHoursSuffix: componentDefinition.propertiesByName.totalCostPerHoursSuffix,

                cardActionGuid: componentDefinition.propertiesByName.cardActionGuid,
                perRowCardLength: componentDefinition.propertiesByName.perRowCardLength,
                cssClasses: componentDefinition.propertiesByName.cssClasses,
                cardSorting: componentDefinition.propertiesByName.cardSorting,
                cardOrder: componentDefinition.propertiesByName.cardOrder,
                FilterExp: componentDefinition.propertiesByName.FilterExp,

                BannerRecordDefinition: componentDefinition.propertiesByName.BannerRecordDefinition,
                BannerInstanceId: componentDefinition.propertiesByName.BannerInstanceId,
                BannerImage: componentDefinition.propertiesByName.BannerImage,
                BannerURL: componentDefinition.propertiesByName.BannerURL,
                BannerCaption: componentDefinition.propertiesByName.BannerCaption,
                BannerSubCaption: componentDefinition.propertiesByName.BannerSubCaption,
                BannerHeight: componentDefinition.propertiesByName.BannerHeight || defaultBannerHeight,
                greetings: componentDefinition.propertiesByName.greetings,
                searchPlaceholder: componentDefinition.propertiesByName.searchPlaceholder,

                firstDropDownRecordDefinition: componentDefinition.propertiesByName.firstDropDownRecordDefinition,
                firstDropDownDisplayField: componentDefinition.propertiesByName.firstDropDownDisplayField,
                secondDropDownRecordDefinition: componentDefinition.propertiesByName.secondDropDownRecordDefinition,
                secondDropDownDisplayField: componentDefinition.propertiesByName.secondDropDownDisplayField,
                thirdDropDownRecordDefinition: componentDefinition.propertiesByName.thirdDropDownRecordDefinition,
                thirdDropDownDisplayField: componentDefinition.propertiesByName.thirdDropDownDisplayField,
                fourthDropDownRecordDefinition: componentDefinition.propertiesByName.fourthDropDownRecordDefinition,
                fourthDropDownDisplayField: componentDefinition.propertiesByName.fourthDropDownDisplayField,
                fourthDropDownStoredField: componentDefinition.propertiesByName.fourthDropDownStoredField,
                fifthDropDownRecordDefinition: componentDefinition.propertiesByName.fifthDropDownRecordDefinition,
                fifthDropDownDisplayField: componentDefinition.propertiesByName.fifthDropDownDisplayField,
                fifthDropDownStoredField: componentDefinition.propertiesByName.fifthDropDownStoredField,
                sixthDropDownRecordDefinition: componentDefinition.propertiesByName.sixthDropDownRecordDefinition,
                sixthDropDownDisplayField: componentDefinition.propertiesByName.sixthDropDownDisplayField,
                sixthDropDownStoredField: componentDefinition.propertiesByName.sixthDropDownStoredField,
            };
        }


        function getRxInspector() {
            return {
                inputs: {
                    rxData: {


                        recordDefinitionFullName: {
                            label: 'Record Definition Name',
                            type: 'rx-inspector-definition-picker',
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.record.type,
                            group: 'Card',
                            index: 1
                        },
                        courseName: {
                            label: 'Course Name',
                            type: 'com-vyom-vyomlib-inspector-learning-portal-fields',
                            group: 'Card',
                            index: 2
                        },

                        supplierName: {
                            label: 'Supplier Name',
                            type: 'com-vyom-vyomlib-inspector-learning-portal-fields',
                            group: 'Card',
                            index: 3
                        },

                        supplierRating: {
                            label: 'Supplier Rating',
                            type: 'com-vyom-vyomlib-inspector-learning-portal-fields',
                            group: 'Card',
                            index: 4
                        },
                        courseRating: {
                            label: 'Course Rating',
                            type: 'com-vyom-vyomlib-inspector-learning-portal-fields',
                            group: 'Card',
                            index: 5
                        },
                        costPerHoursSuffix: {
                            label: 'Cost Per Hours Suffix',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "This suffix would be use for generating field name/label, After selecting Geography and Delivery Method Dropdown.(eg.<<MANA-ILT Open-Us Dollers>>...'-Us Dollers' would be suffix)",
                                placement: "left"
                            },
                            group: 'Card',
                            index: 6
                        },
                        totalCostPerHoursSuffix: {
                            label: 'Total Cost Per Hours Suffix',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "This suffix would be use for generating column name/label, After selecting Geography and Delivery Method Dropdown.(eg.<<MANA-ILT Open-Total Cost Per Hours>>...'-Total Cost Per Hours' would be suffix)",
                                placement: "left"
                            },
                            group: 'Card',
                            index: 7
                        },
                        FilterExp: {
                            label: 'Filter',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Card',
                            index: 8
                        },



                        cardActionGuid: {
                            label: 'Action button Guid',
                            type: 'rx-inspector-expression-node-field',
                            group: 'cardAction',
                            index: 1
                        },
                        cardSorting: {
                            label: 'Sort By',
                            type: 'com-vyom-vyomlib-inspector-learning-portal-fields',
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
                            index: 4
                        },
                        cssClasses: {
                            label: 'CSS Classes',
                            type: 'rx-inspector-tag-input',
                            tooltip: {
                                text: $sce.trustAsHtml("Published Fonts:<br>com-ericsson-hilda-regular<br>om-ericsson-hilda-light<br>com-ericsson-hilda-medium<br>com-ericsson-hilda-bold<br>Portal Fonts:<br>com-vyom-hilda-regular<br>om-vyom-hilda-light<br>com-vyom-hilda-medium<br>com-vyom-hilda-bold"),
                                placement: "left"
                            },
                            group: 'cardAction',
                            index: 5
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
                        greetings: {
                            label: 'Greetings',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Banner',
                            index: 8
                        },
                        searchPlaceholder: {
                            label: 'Search Placeholder',
                            type: 'rx-inspector-expression-node-field',
                            group: 'Banner',
                            index: 9
                        },

                        firstDropDownRecordDefinition: {
                            label: 'firstDropDownRecordDefinition',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 1
                        },

                        firstDropDownDisplayField: {
                            label: 'firstDropDownDisplayField',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 2
                        },
                        secondDropDownRecordDefinition: {
                            label: 'secondDropDownRecordDefinition',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 3
                        },

                        secondDropDownDisplayField: {
                            label: 'secondDropDownDisplayField',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 4
                        },
                        thirdDropDownRecordDefinition: {
                            label: 'thirdDropDownRecordDefinition',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 5
                        },

                        thirdDropDownDisplayField: {
                            label: 'thirdDropDownDisplayField',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 6
                        },
                        fourthDropDownRecordDefinition: {
                            label: 'Supplier Rating Record Definition',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 7
                        },
                        fourthDropDownDisplayField: {
                            label: 'Supplier Rating DisplayField',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 8
                        },
                        fourthDropDownStoredField: {
                            label: 'Supplier Rating StoredField',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 9
                        },
                        fifthDropDownRecordDefinition: {
                            label: 'Course Rating Record Definition',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 10
                        },

                        fifthDropDownDisplayField: {
                            label: 'Course Rating DisplayField',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 11
                        },
                        fifthDropDownStoredField: {
                            label: 'Course Rating StoredField',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 12
                        },
                        sixthDropDownRecordDefinition: {
                            label: 'Sort By RecordDefinition',
                            type: 'rx-inspector-expression-node-field',
                            group: 'DropDown',
                            index: 13
                        },

                        sixthDropDownDisplayField: {
                            label: 'Sort By DisplayField',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "List of the options to be displayed",
                                placement: "left"
                            },
                            group: 'DropDown',
                            index: 13
                        },
                        sixthDropDownStoredField: {
                            label: 'Sort By Stored Value Field',
                            type: 'rx-inspector-expression-node-field',
                            tooltip: {
                                text: "List of the options to be stored",
                                placement: "left"
                            },
                            group: 'DropDown',
                            index: 14
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

                    DropDown: {
                        label: 'DropDown',
                        closed: true,
                        index: 4
                    },
                    Banner: {
                        label: 'Banner',
                        closed: true,
                        index: 5
                    }


                },

            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibLearningPortalModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
