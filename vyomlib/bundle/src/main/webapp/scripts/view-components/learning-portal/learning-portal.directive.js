(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.learning-portal')
        .directive('comVyomVyomlibLearningPortal',

            function (rxRecordInstanceDataPageResource, rxRecordInstanceResource, $document, $window, $timeout, rxCurrentUser, rxNotificationMessage, rxGUID, $sce, rxViewComponentEventManager, rxRecordInstanceAttachmentResource, rxString, rxNamedListDataPageResource, rxRecordDefinitionResource) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/learning-portal/com-vyom-vyomlib-learning-portal.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope, $element) {
                        var _config,
                            eventManager = rxViewComponentEventManager.getInstance($scope);


                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;


                            //Card fields
                            $scope.cardList = [];
                            $scope.RecordDefinition = _config.recordDefinitionFullName;
                            $scope.courseName = _config.courseName;
                            $scope.supplierName = _config.supplierName;
                            $scope.supplierRating = _config.supplierRating;
                            $scope.courseRating = _config.courseRating;
                            $scope.country = _config.country;
                            $scope.userCountRatedForSupplier = _config.userCountRatedForSupplier;
                            $scope.userCountRatedForCourse = _config.userCountRatedForCourse;
                            $scope.costAvailableOnDemand = _config.costAvailableOnDemand;
                            $scope.costPerHoursSuffix = _config.costPerHoursSuffix ? _config.costPerHoursSuffix : "";
                            $scope.totalCostPerHoursSuffix = _config.totalCostPerHoursSuffix ? _config.totalCostPerHoursSuffix : "";
                            $scope.durationSuffix = _config.durationSuffix ? _config.durationSuffix : "";
                            $scope.FilterExp = _config.FilterExp ? _config.FilterExp : "";

                            //card layout
                            $scope.perRowCardLength = _config.perRowCardLength ? _config.perRowCardLength : "col-lg-3 col-md-4 col-sm-4";
                            $scope.limit = _config.perRowCardLength == "col-lg-3 col-md-4 col-sm-4" ? 8 : 6;
                            $scope.cardlimit = _config.perRowCardLength == "col-lg-3 col-md-4 col-sm-4" ? 8 : 6;

                            $scope.cardActionGuid = _config.cardActionGuid;
                            $scope.cssClasses = _config.cssClasses;
                            $scope.cardSorting = _config.cardSorting ? _config.cardOrder == "true" ? "-" + _config.cardSorting : _config.cardSorting : "";
                            $scope.cardOrder = _config.cardOrder;

                            //Images fields
                            $scope.BannerRecordDefinition = _config.BannerRecordDefinition;
                            $scope.BannerInstanceId = _config.BannerInstanceId;
                            $scope.BannerImage = _config.BannerImage;
                            $scope.BannerURL = _config.BannerURL;
                            $scope.BannerCaption = _config.BannerCaption;
                            $scope.BannerSubCaption = _config.BannerSubCaption;
                            $scope.BannerHeight = _config.BannerHeight;
                            $scope.greetings = _config.greetings;
                            $scope.searchPlaceholder = _config.searchPlaceholder;

                            //DATASET
                            $scope.searchObject = {};



                            //User
                            $scope.CurrentUserFullName = rxCurrentUser.get().fullName;
                            $scope.CurrentUserLoginName = rxCurrentUser.get().loginName;
                            $scope.RecDef = "com.bmc.arsys.rx.foundation:Person";



                            // $scope.getCardList();
                            $scope.mydata = [];
                            $scope.getCardListResource();
                            $scope.mydataResource = [];

                            $scope.courseRatingObj = [];
                            $scope.supplierRatingObj = [];

                            // dropdown
                            $scope.dropDownDataSet = {
                                "supplierData": [],
                                "regionData": [],
                                "deliveryData": [],
                                "supplierRating": [],
                                "courseRating": [],
                                "courseSorting": []
                            };
                            $scope.dropdown = {
                                selectedValue1: "", //supplier name
                                selectedValue2: "", //country OR Region
                                selectedValue3: "", //Delivery Method
                                selectedValue4: "", //Supplier Rating
                                selectedValue5: "", //Course Rating
                                selectedValue6: "", //Sort By
                                selectedDisplayValue2: "",
                                selectedDisplayValue4: "",
                                selectedDisplayValue5: "",
                                selectedDisplayValue6: "",
                            };

                            $scope.firstDropDownRecordDefinition = _config.firstDropDownRecordDefinition;
                            $scope.firstDropDownDisplayField = _config.firstDropDownDisplayField;
                            $scope.firstDropDownSortingField = _config.firstDropDownSortingField;
                            $scope.getSupplierDropDownData('');
                            $scope.secondDropDownRecordDefinition = _config.secondDropDownRecordDefinition;
                            $scope.secondDropDownDisplayField = _config.secondDropDownDisplayField;
                            $scope.secondDropDownStoredField = _config.secondDropDownStoredField;
                            $scope.secondDropDownSortingField = _config.secondDropDownSortingField;
                            $scope.getRegionDropDownData('');
                            $scope.thirdDropDownRecordDefinition = _config.thirdDropDownRecordDefinition;
                            $scope.thirdDropDownDisplayField = _config.thirdDropDownDisplayField;
                            $scope.deliveryMethodInfoGuid = _config.thirdDropDownInfoGuid;
                            $scope.getDropDownData("deliveryData", $scope.thirdDropDownRecordDefinition, $scope.thirdDropDownDisplayField);
                            $scope.fourthDropDownRecordDefinition = _config.fourthDropDownRecordDefinition;
                            $scope.fourthDropDownDisplayField = _config.fourthDropDownDisplayField;
                            $scope.fourthDropDownStoredField = _config.fourthDropDownStoredField;
                            $scope.getDropDownData("supplierRating", $scope.fourthDropDownRecordDefinition, $scope.fourthDropDownDisplayField);
                            $scope.fifthDropDownRecordDefinition = _config.fifthDropDownRecordDefinition;
                            $scope.fifthDropDownDisplayField = _config.fifthDropDownDisplayField;
                            $scope.fifthDropDownStoredField = _config.fifthDropDownStoredField;
                            $scope.getDropDownData("courseRating", $scope.fifthDropDownRecordDefinition, $scope.fifthDropDownDisplayField);
                            //sorting
                            $scope.sixthDropDownRecordDefinition = _config.sixthDropDownRecordDefinition;
                            $scope.sixthDropDownDisplayField = _config.sixthDropDownDisplayField;
                            $scope.sixthDropDownStoredField = _config.sixthDropDownStoredField;
                            $scope.getDropDownData("courseSorting", $scope.sixthDropDownRecordDefinition, $scope.sixthDropDownDisplayField);

                        };


                        $scope.getDropDownData = function (typeofdata, recordedef, fieldid) {
                            if (recordedef) {
                                rxRecordInstanceDataPageResource.withName(recordedef).get(800, 0, {
                                    queryExpression: ""
                                }).then(
                                    function (allRecords) {
                                        $scope.dropDownDataSet[typeofdata] = allRecords.data;


                                    }
                                );
                            }
                        }

                        $scope.getSupplierDropDownData = function (query) {
                            var supplierNameQuery = query ? "'" + $scope.firstDropDownDisplayField + "'LIKE \"%" + query + '%" AND \'' + $scope.firstDropDownDisplayField + "' != " + '""' : "";
                            if ($scope.firstDropDownRecordDefinition) {
                                rxRecordInstanceDataPageResource.withName($scope.firstDropDownRecordDefinition).get(800, 0, {
                                    queryExpression: supplierNameQuery,
                                    sortBy: $scope.firstDropDownSortingField
                                }).then(
                                    function (allRecords) {
                                        $scope.dropDownDataSet["supplierData"] = allRecords.data;


                                    }
                                );
                            }
                        }

                        $scope.getRegionDropDownData = function (query) {
                            var regionNameQuery = query ? "'" + $scope.secondDropDownDisplayField + "'LIKE \"%" + query + '%" AND \'' + $scope.secondDropDownDisplayField + "' != " + '""' : "";
                            if ($scope.secondDropDownRecordDefinition) {
                                $scope.RegionDropDownDataPromise = rxRecordInstanceDataPageResource.withName($scope.secondDropDownRecordDefinition).get(800, 0, {
                                    queryExpression: regionNameQuery,
                                    sortBy: $scope.secondDropDownSortingField

                                }).then(
                                    function (allRecords) {
                                        $scope.dropDownDataSet["regionData"] = allRecords.data;


                                    }
                                );
                            }
                        }

                        $scope.getCardList = function () {
                            $scope.queryParams = {
                                queryExpression: $scope.FilterExp ? $scope.FilterExp : "",
                                sortBy: $scope.cardSorting

                            };


                            $scope.cardListDataPromise = rxRecordInstanceDataPageResource.withName($scope.RecordDefinition).get(800, 0, $scope.queryParams).then(
                                function (allRecords) {
                                    $scope.mydata = allRecords.data;
                                    $scope.cardList = $scope.mydata;
                                    $scope.totalSize = allRecords.totalSize;

                                }
                            );



                        }

                        $scope.numFormatter = function (num) {
                            if (num > 999 && num < 1000000) {
                                return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
                            } else if (num > 1000000) {
                                return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
                            } else if (num < 1000) {
                                return num; // if value < 1000, nothing to do
                            }
                        }

                        $scope.getCardListResource = function () {
                            rxRecordDefinitionResource.get($scope.RecordDefinition).then(function (recordDefinitionResource) {
                                $scope.mydataResource = recordDefinitionResource.fieldDefinitions;

                            });
                        }

                        $scope.getFieldIdFromName = function (fieldlabel) {

                            var fieldObject = _.find($scope.mydataResource, {
                                name: fieldlabel
                            });

                            return fieldObject ? fieldObject.id : "";
                        }





                        $scope.setSelectedCardInstanceId = function (recInstanceID) {
                            // trigger the change property event
                            eventManager.propertyChanged({
                                property: 'CardInstanceId', // name of the property that changed
                                newValue: recInstanceID
                            });


                        }

                        $scope.setOutput = function (obj) {
                            // trigger the change property event

                            if ($scope.dropdown.selectedValue2 && $scope.dropdown.selectedValue3) {
                                eventManager.propertyChanged({
                                    property: 'costPerHours', // name of the property that changed
                                    newValue: obj[$scope.getFieldIdFromName($scope.dropdown.selectedValue2 + "-" + $scope.dropdown.selectedValue3 + "" + $scope.costPerHoursSuffix)]
                                });

                                eventManager.propertyChanged({
                                    property: 'totalCostPerHours', // name of the property that changed
                                    newValue: obj[$scope.getFieldIdFromName($scope.dropdown.selectedValue2 + "-" + $scope.dropdown.selectedValue3 + "" + $scope.totalCostPerHoursSuffix)]
                                });

                                eventManager.propertyChanged({
                                    property: 'duration', // name of the property that changed
                                    newValue: obj[$scope.getFieldIdFromName($scope.dropdown.selectedValue3 + "" + $scope.durationSuffix)]
                                });
                            } else {
                                eventManager.propertyChanged({
                                    property: 'costPerHours', // name of the property that changed
                                    newValue: ""
                                });

                                eventManager.propertyChanged({
                                    property: 'totalCostPerHours', // name of the property that changed
                                    newValue: ""
                                });

                                eventManager.propertyChanged({
                                    property: 'duration', // name of the property that changed
                                    newValue: ""
                                });
                            }
                            eventManager.propertyChanged({
                                property: 'countryName', // name of the property that changed
                                newValue: $scope.dropdown.selectedDisplayValue2
                            });

                            eventManager.propertyChanged({
                                property: 'deliveryMethod', // name of the property that changed
                                newValue: $scope.dropdown.selectedValue3
                            });

                            eventManager.propertyChanged({
                                property: 'costAvailableOnDemandFlag', // name of the property that changed
                                newValue: obj[$scope.costAvailableOnDemand]
                            });

                        }

                        $scope.executeAction = function (guid) {

                            $timeout(function () {
                                var button;


                                var buttonGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', guid);

                                button = $document.find(buttonGuid);


                                if (button) {
                                    button.click();
                                } else {
                                    rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid);
                                }
                            });
                        }

                        $scope.generateRating = function (starCount, guid, objecttype) {


                            $scope.stars = [];


                            $scope.starSelectedColor = "color:orange";
                            $scope.starNotSelectedColor = "";

                            for (var i = 1; i <= 5; i++) {
                                $scope.stars[i] = {
                                    icon: i <= starCount ? 'd-icon-star ' : 'd-icon-star_o ',
                                    style: i <= starCount ? $scope.starSelectedColor : $scope.starNotSelectedColor
                                };
                            }

                            objecttype == 'course' ? $scope.courseRatingObj[guid] = $scope.stars : $scope.supplierRatingObj[guid] = $scope.stars;



                        }

                        $scope.filterCurrentCategoryOrSearchText = function () {

                            var cardQueryExpression = "";
                            var cardQueryExpression2 = "";
                            var courseSorting = "";

                            courseSorting = $scope.dropdown.selectedValue6 ? $scope.dropdown.selectedValue6 : $scope.cardSorting;

                            cardQueryExpression += $scope.dropdown.selectedValue1 ? "'" + $scope.supplierName + "'=\"" + $scope.dropdown.selectedValue1 + '" AND' : "";
                            cardQueryExpression += $scope.dropdown.selectedValue2 && $scope.dropdown.selectedValue3 ? $scope.country ? "(('" + $scope.country + "'=\"" + $scope.dropdown.selectedDisplayValue2 + '") OR ' : "" : "";
                            cardQueryExpression += $scope.dropdown.selectedValue2 && $scope.dropdown.selectedValue3 ? $scope.country ? "('" + $scope.country + "' = $null$)) AND" : "" : "";
                            cardQueryExpression += $scope.dropdown.selectedValue2 && $scope.dropdown.selectedValue3 ? "'" + $scope.dropdown.selectedValue2 + "-" + $scope.dropdown.selectedValue3 + "" + $scope.totalCostPerHoursSuffix + "' != \"\" AND" : "";
                            cardQueryExpression += $scope.dropdown.selectedValue4 ? "'" + $scope.supplierRating + "'" + $scope.dropdown.selectedValue4 + ' AND' : "";
                            cardQueryExpression += $scope.dropdown.selectedValue5 ? "'" + $scope.courseRating + "'" + $scope.dropdown.selectedValue5 + ' AND' : "";

                            cardQueryExpression += $scope.searchObject.searchQuery ? "'" + $scope.courseName + "' LIKE \"%" + $scope.searchObject.searchQuery + '%" AND' : "";

                            cardQueryExpression2 = cardQueryExpression.substring(0, cardQueryExpression.lastIndexOf("AND"));



                            var cardFilterExpression = $scope.FilterExp ? cardQueryExpression2 ? "(" + $scope.FilterExp + ")AND (" + cardQueryExpression2 + ")" : $scope.FilterExp : cardQueryExpression2;

                            var queryParams = {

                                queryExpression: cardFilterExpression,
                                sortBy: courseSorting

                            };


                            $scope.cardListDataPromise = rxRecordInstanceDataPageResource.withName($scope.RecordDefinition).get(800, 0, queryParams).then(
                                function (allRecords) {

                                    $scope.cardList = allRecords.data;
                                    $scope.totalSize = allRecords.totalSize;
                                    $scope.ifNoSearchResult();

                                }
                            );


                        }



                        $scope.clearDropDowns = function () {

                            $scope.dropdown.selectedValue1 = "";
                            $scope.dropdown.selectedValue2 = "";
                            $scope.dropdown.selectedValue3 = "";
                            $scope.dropdown.selectedValue4 = "";
                            $scope.dropdown.selectedValue5 = "";
                            $scope.dropdown.selectedValue6 = "";
                            //extra
                            $scope.dropdown.selectedDisplayValue2 = "";
                            $scope.dropdown.selectedDisplayValue4 = "";
                            $scope.dropdown.selectedDisplayValue5 = "";
                            $scope.dropdown.selectedDisplayValue6 = "";
                            $scope.getRegionDropDownData("");
                            $scope.getSupplierDropDownData("");
                            $scope.cardList = [];

                            if ($scope.searchObject.searchQuery) {
                                $scope.filterCurrentCategoryOrSearchText();
                            }

                        }


                        $scope.ifNoSearchResult = function () {

                            if ($scope.searchObject.searchQuery) {

                                $element.find(".no-search-result").html('<span class="w3-xlarge">No courses are available for your search. Please refine your search further to view results.</span>');

                            } else if (($scope.dropdown.selectedValue1 == "" || $scope.dropdown.selectedValue1 == null) && ($scope.dropdown.selectedValue2 == "" || $scope.dropdown.selectedValue2 == null) && ($scope.dropdown.selectedValue3 == "" || $scope.dropdown.selectedValue3 == null) && ($scope.dropdown.selectedValue4 == "" || $scope.dropdown.selectedValue4 == null) && ($scope.dropdown.selectedValue5 == "" || $scope.dropdown.selectedValue5 == null) &&
                                ($scope.searchObject.searchQuery == "" || $scope.searchObject.searchQuery == null)) {
                                $scope.cardList = [];
                                $element.find(".no-search-result").empty();
                            }
                        }

                        $scope.onKeyDown = function (obj) {

                            if (13 === obj.keyCode) {
                                $scope.limit = _config.perRowCardLength == "col-lg-3 col-md-4 col-sm-4" ? 8 : 6;
                                $scope.filterCurrentCategoryOrSearchText();


                            }
                        }

                        $scope.getLimit = function () {

                            if ($scope.limit > $scope.totalSize) {
                                return $scope.totalSize;
                            } else {
                                return $scope.limit;
                            }
                        }



                        function refreshCards(params) {

                            $scope.getCardList();
                        }

                        // Overriding the view component refresh method to use our own
                        // to refresh the custom blog.
                        $scope.rxConfiguration.api = {
                            refresh: refreshCards.bind(null, true)
                        };

                        eventManager.propertyChanged({
                            property: 'api',
                            newValue: $scope.rxConfiguration.api
                        });

                        init()

                    }

                };
            });
})();
