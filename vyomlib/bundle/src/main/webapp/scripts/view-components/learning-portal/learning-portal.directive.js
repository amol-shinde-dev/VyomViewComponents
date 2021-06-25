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
                            $scope.costPerHoursSuffix = _config.costPerHoursSuffix ? _config.costPerHoursSuffix : "";
                            $scope.totalCostPerHoursSuffix = _config.totalCostPerHoursSuffix ? _config.totalCostPerHoursSuffix : "";
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
                            $scope.searchQuery = "";


                            //User
                            $scope.CurrentUserFullName = rxCurrentUser.get().fullName;
                            $scope.CurrentUserLoginName = rxCurrentUser.get().loginName;
                            $scope.RecDef = "com.bmc.arsys.rx.foundation:Person";



                            $scope.getCardList();
                            $scope.mydata = [];
                            $scope.getCardListResource();
                            $scope.mydataResource = [];



                            // dropdown
                            $scope.dropDownDataSet = {
                                "supplierData": [],
                                "regionData": [],
                                "deliveryData": [],
                                "supplierRating": [],
                                "courseRating": [],
                                "courseSorting": []
                            };


                            $scope.firstDropDownRecordDefinition = _config.firstDropDownRecordDefinition;
                            $scope.firstDropDownDisplayField = _config.firstDropDownDisplayField;
                            $scope.getDropDownData("supplierData", $scope.firstDropDownRecordDefinition, $scope.firstDropDownDisplayField);
                            $scope.secondDropDownRecordDefinition = _config.secondDropDownRecordDefinition;
                            $scope.secondDropDownDisplayField = _config.secondDropDownDisplayField;
                            $scope.getDropDownData("regionData", $scope.secondDropDownRecordDefinition, $scope.secondDropDownDisplayField);
                            $scope.thirdDropDownRecordDefinition = _config.thirdDropDownRecordDefinition;
                            $scope.thirdDropDownDisplayField = _config.thirdDropDownDisplayField;
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
                                rxRecordInstanceDataPageResource.withName(recordedef).get(200, 0, {
                                    queryExpression: "'" + fieldid + "'!=" + '""'
                                }).then(
                                    function (allRecords) {
                                        $scope.dropDownDataSet[typeofdata] = allRecords.data;


                                    }
                                );
                            }
                        }



                        $scope.getCardList = function () {
                            $scope.queryParams = {
                                queryExpression: $scope.FilterExp ? $scope.FilterExp : "",
                                sortBy: $scope.cardSorting

                            };


                            $scope.cardListDataPromise = rxRecordInstanceDataPageResource.withName($scope.RecordDefinition).get(200, 0, $scope.queryParams).then(
                                function (allRecords) {
                                    $scope.mydata = allRecords.data;
                                    $scope.cardList = $scope.mydata;

                                }
                            );



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



                        $scope.filterCurrentCategoryOrSearchText = function (searchtype, searchtext) {

                            var cardQueryExpression = "";
                            var cardQueryExpression2 = "";
                            var courseSorting = "";
                            courseSorting = $scope.selectedValue6 ? $scope.selectedValue6 : $scope.cardSorting;


                            if (searchtype == 'search') {
                                if (searchtext) {
                                    cardQueryExpression2 += "'" + $scope.courseName + "' LIKE \"%" + searchtext + '%"';

                                } else {
                                    $scope.getCardList();
                                }
                            } else {
                                cardQueryExpression += $scope.selectedValue1 ? "'" + $scope.supplierName + "'=\"" + $scope.selectedValue1 + '" AND' : "";
                                cardQueryExpression += $scope.selectedValue2 && $scope.selectedValue3 ? "'" + $scope.selectedValue2 + "-" + $scope.selectedValue3 + "" + $scope.totalCostPerHoursSuffix + "' != \"\" AND" : "";
                                cardQueryExpression += $scope.selectedValue4 ? "'" + $scope.supplierRating + "'" + $scope.selectedValue4 + ' AND' : "";
                                cardQueryExpression += $scope.selectedValue5 ? "'" + $scope.courseRating + "'" + $scope.selectedValue5 + ' AND' : "";

                                cardQueryExpression2 = cardQueryExpression.substring(0, cardQueryExpression.lastIndexOf("AND"));

                            }

                            var cardFilterExpression = $scope.FilterExp ? $scope.FilterExp + "AND (" + cardQueryExpression2 + ")" : cardQueryExpression2;

                            var queryParams = {

                                queryExpression: cardFilterExpression,
                                sortBy: courseSorting

                            };


                            rxRecordInstanceDataPageResource.withName($scope.RecordDefinition).get(100, 0, queryParams).then(
                                function (allRecords) {
                                    $scope.cardList = allRecords.data;


                                }
                            );


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
