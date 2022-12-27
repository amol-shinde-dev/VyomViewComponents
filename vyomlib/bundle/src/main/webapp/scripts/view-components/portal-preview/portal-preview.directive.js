(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.portal-preview')
        .directive('comVyomVyomlibPortalPreview',

            function (rxRecordInstanceDataPageResource, rxRecordInstanceResource, $document, $window, $timeout, rxCurrentUser, rxNotificationMessage, rxGUID, $sce, rxViewComponentEventManager, rxRecordInstanceAttachmentResource, rxString, rxNamedListDataPageResource) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/portal-preview/com-vyom-vyomlib-portal-preview.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope, $element) {
                        var _config,
                            applicationNamedListQuery,
                            eventManager = rxViewComponentEventManager.getInstance($scope);


                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;


                            //Card fields
                            $scope.cardList = [];
                            $scope.RecordDefinition = _config.recordDefinitionFullName;
                            $scope.ApplicationName = _config.ApplicationName;
                            $scope.Description = _config.Description;
                            $scope.Color = _config.Color;
                            $scope.tooltipHeader = _config.tooltipHeader;
                            $scope.Icon = _config.Icon;
                            $scope.tooltipDescription = _config.tooltipDescription;
                            $scope.rateMeActionGuid = _config.rateMeActionGuid;
                            $scope.ratingCount = _config.ratingCount;
                            $scope.createdDate = _config.createdDate;
                            $scope.starsobj = [];

                            //if admin then append query else nly filter
                            $scope.adminConfiguration = _config.adminConfiguration;
                            $scope.adminConfigurationLabel = _config.adminConfigurationLabel;
                            $scope.userApplicationNamedList = _config.userApplicationNamedList;

                            //$scope.getUserApplicationQuery();
                            //$scope.userapplicationlist = [];
                            $scope.applicationNamedListQuery = applicationNamedListQuery;
                            $scope.FilterExp = $scope.adminConfiguration ? _config.FilterExp ? "(" + $scope.applicationNamedListQuery + "AND(" + _config.FilterExp + "))" : $scope.applicationNamedListQuery : _config.FilterExp ? "(" + _config.FilterExp + ")" : "";

                            $scope.Views = _config.Views;
                            $scope.selectedValue = _config.Views; //SortBYApplicationDefaultValue
                            $scope.recordFlag = 'false';
                            $scope.cardVisible = _config.cardVisible ? _config.cardVisible : "";
                            $scope.cardErrorInformation = _config.cardErrorInformation ? _config.cardErrorInformation : "";
                            $scope.cardStatusNamedList = _config.cardStatusNamedList ? _config.cardStatusNamedList : "";
                            $scope.cardBottomActionGuid = _config.cardBottomActionGuid;


                            $scope.perRowCardLength = _config.perRowCardLength ? _config.perRowCardLength : "col-lg-3 col-md-4 col-sm-4";
                            $scope.limit = _config.perRowCardLength == "col-lg-3 col-md-4 col-sm-4" ? 8 : 6;
                            $scope.cardlimit = _config.perRowCardLength == "col-lg-3 col-md-4 col-sm-4" ? 8 : 6;

                            $scope.cardActionGuid = _config.cardActionGuid;
                            $scope.cardSorting = _config.cardSorting ? _config.cardOrder == "true" ? "-" + _config.cardSorting : _config.cardSorting : "";
                            $scope.cardOrder = _config.cardOrder;

                            $scope.cardStatus = _config.cardStatus;
                            $scope.cardFavourite = _config.cardFavourite;
                            $scope.cardScope = _config.cardScope;



                            //search

                            $scope.titleColor = _config.titleColor;
                            $scope.Greetings = _config.Greetings;
                            $scope.search = _config.search;
                            $scope.cssClasses = _config.cssClasses;
                            $scope.favouriteTooltipText = _config.favouriteTooltipText ? _config.favouriteTooltipText : "View all your favourites";
                            $scope.noSearchResultText = _config.noSearchResultText;

                            //Images fields
                            $scope.BannerRecordDefinition = _config.BannerRecordDefinition;
                            $scope.BannerInstanceId = _config.BannerInstanceId;
                            $scope.BannerImage = _config.BannerImage;
                            $scope.BannerURL = _config.BannerURL;
                            $scope.BannerCaption = _config.BannerCaption;
                            $scope.BannerSubCaption = _config.BannerSubCaption;
                            $scope.BannerHeight = _config.BannerHeight;


                            //Category
                            $scope.CategoryField = _config.CategoryField;
                            $scope.CategoryNamedList = _config.CategoryNamedList;
                            $scope.getCategoryNamedList();
                            $scope.CategoryData = [];
                            $scope.CategoryColor = _config.CategoryColor;

                            //DataSets
                            $scope.searchbox = {};

                            $scope.suggestionData = [];
                            $scope.dataSet1Label = _config.dataSet1Label;
                            $scope.dataset1 = _config.dataset1; // rec def
                            $scope.dataset1searchfield = _config.dataset1searchfield;
                            $scope.dataset1displayfield = _config.dataset1displayfield;
                            $scope.dataset1urlfield = _config.dataset1urlfield;
                            $scope.dataSet2Label = _config.dataSet2Label;
                            $scope.dataset2 = _config.dataset2; //recdef
                            $scope.dataset2searchfield = _config.dataset2searchfield;
                            $scope.dataset2displayfield = _config.dataset2displayfield;
                            $scope.dataset2urlfield = _config.dataset2urlfield;



                            //User
                            $scope.CurrentUserFullName = rxCurrentUser.get().fullName;
                            $scope.CurrentUserLoginName = rxCurrentUser.get().loginName;
                            $scope.RecDef = "com.bmc.arsys.rx.foundation:Person";



                            $scope.getCardList();
                            $scope.mydata = [];

                            $scope.getApplicationStatusNamedList();
                            $scope.cardStatusDefaultValue = []; //card status namedListValues 

                            $scope.show_hide_recordGrid('false');




                        };


                        $scope.trustSrc = function (url) {

                            return $sce.trustAsResourceUrl(url);
                        };

                        $scope.redirecturl = function (redurl) {
                            if (redurl) {
                                $window.open(redurl, '_blank');
                            }
                        };


                        //To get the application list/ cards from backend
                        $scope.getCardList = function () {
                            $scope.selectedCategory = "";
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
                        // get the dataset/enhanced serach/suggestion data based on the configuration
                        $scope.getDataSet = function (datasetrecname, datasetobjectname, datasetsearchfield) {

                            if (datasetrecname) {
                                var foo = rxRecordInstanceDataPageResource.withName(datasetrecname);
                                var queryParams = {};

                                foo.get(200, 0, {
                                    queryExpression: "'" + datasetsearchfield + "' LIKE " + '"%' + $scope.searchbox.query + '%"'
                                }).then(
                                    function (allRecords) {

                                        $scope.suggestionData[datasetobjectname] = allRecords.data;
                                        console.log($scope.suggestionData);

                                    }
                                );
                            }
                        }
                        //To get the data from the namedlist eg. "{'color1':'application status1','color2':'application status 2'}"
                        $scope.getApplicationStatusNamedList = function () {
                            rxNamedListDataPageResource.get($scope.cardStatusNamedList).then(function (data) {
                                $scope.cardStatusDefaultValue = data.data;
                            });

                        }
                        //To get the data from the namedlist eg. "{'category display name1':'category stored name1','category display name2':'category stored name2'}"
                        $scope.getCategoryNamedList = function () {
                            if ($scope.CategoryNamedList) {
                                rxNamedListDataPageResource.get($scope.CategoryNamedList).then(function (data) {
                                    $scope.CategoryData = data.data;
                                });
                            }

                        }

                        // Check the namedlist which has list of the applications assigned for current user & show those applications on UI.
                        $scope.getUserApplicationQuery = function () {
                            if ($scope.rxConfiguration.propertiesByName.adminConfiguration) {
                                if ($scope.rxConfiguration.propertiesByName.userApplicationNamedList) {
                                    var qualification = "";
                                    var userapplicationlist = [];
                                    rxNamedListDataPageResource.get($scope.rxConfiguration.propertiesByName.userApplicationNamedList).then(function (data) {
                                        userapplicationlist = data.data;
                                        for (var i in userapplicationlist) {
                                            for (var j in userapplicationlist[i]) {
                                                qualification += "'" + $scope.rxConfiguration.propertiesByName.ApplicationName + "'=" + '"' + userapplicationlist[i][j] + '"';
                                                qualification += userapplicationlist.length - 1 > i ? "OR" : "";
                                            }
                                        }

                                        return qualification ? "(" + qualification + ")" : "('1'=\"\")";
                                    }).then(function (qual) {
                                        applicationNamedListQuery = qual;
                                        init();
                                    });

                                }
                            } else {
                                init();
                            }
                        }
                        // Increased the views count on every click on the card.
                        $scope.updateViewsCounter = function (RecInstanceId, views) {
                            if ($scope.RecordDefinition) {
                                var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);
                                objectRecord.get(RecInstanceId).then(
                                    function (record) {
                                        record.setValue($scope.Views, views + 1);
                                        record.put();



                                    }
                                );
                            }

                        };
                        // To display the numbers as thousand as (k) or millions (m)
                        $scope.numFormatter = function (num) {
                            if (num > 999 && num < 1000000) {
                                return (num / 1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
                            } else if (num > 1000000) {
                                return (num / 1000000).toFixed(0) + 'M'; // convert to M for number from > 1 million 
                            } else if (num < 1000) {
                                return num; // if value < 1000, nothing to do
                            }
                        }





                        //set selected card instance or guid as output
                        $scope.setSelectedCardInstanceId = function (recInstanceID) {
                            // trigger the change property event
                            eventManager.propertyChanged({
                                property: 'CardInstanceId', // name of the property that changed
                                newValue: recInstanceID
                            });


                        }
                        // t trigger the action oadded on the ootb acion buttion
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


                        //filter the cards based upon the selected category/search
                        $scope.filterCurrentCategoryOrSearchText = function (filterinput, filtertype) {

                            // to make no result text container visible on category selection
                            $scope.selectedCategory = filtertype == "category" ? filterinput : "";

                            var cardQueryExpression = filtertype == "search" ? "'" + $scope.ApplicationName + "' LIKE \"%" + filterinput + "%\"" : "'" + $scope.CategoryField + "' LIKE \"%" + filterinput + "%\"";
                            var cardFilterExpression = $scope.FilterExp ? $scope.FilterExp + "AND (" + cardQueryExpression + ")" : cardQueryExpression;

                            var queryParams = {
                                propertySelection: "1,2,3,4,5,6,7,8,179," + $scope.ApplicationName + "," + $scope.Description + "," + $scope.Color + "," + $scope.tooltipHeader + "," + $scope.Icon + "," + $scope.tooltipDescription + "," + $scope.Views + "," + $scope.ratingCount + "," + $scope.cardStatus + "," + $scope.cardFavourite + "," + $scope.cardScope + "," + $scope.CategoryField + "," + $scope.cardVisible + "," + $scope.cardErrorInformation,
                                queryExpression: cardFilterExpression,
                                sortBy: $scope.cardSorting

                            };

                            if (filterinput == "ALL" || filterinput == "" || filterinput == null) {
                                $scope.getCardList();
                            } else {
                                rxRecordInstanceDataPageResource.withName($scope.RecordDefinition).get(100, 0, queryParams).then(
                                    function (allRecords) {
                                        $scope.cardList = allRecords.data;
                                        $scope.totalSize = allRecords.totalSize;

                                    }
                                );
                            }

                        }

                        $scope.hoverIn = function (item) {
                            if (item == "popover") {
                                $('[rel="popover"]').popover();
                            }
                            $('[rel="tooltip"]').tooltip();
                        }
                        $scope.getCardScopeCSS = function (storedvalue) {

                            if (storedvalue == "true") {
                                return "d-icon-internet";

                            } else {
                                return "d-icon-mapmarker";
                            }

                        }

                        // show the application status in differnt colors
                        $scope.getCardStatusCSS = function (storedStatus) {

                            //{color: status}
                            var NameListDisplayValue = _.find($scope.cardStatusDefaultValue, function (obj) {
                                var swappedObject = _.invert(obj);
                                var getcurrentkey = swappedObject[storedStatus];
                                return obj[getcurrentkey] == storedStatus;
                            });
                            var labelKey = _.keys(NameListDisplayValue);

                            return "w3-text-" + labelKey[0];

                        }

                        // ratings in the form of stars
                        $scope.generateRating = function (starCount, guid) {


                            $scope.stars = [];


                            $scope.starSelectedColor = "color:orange";
                            $scope.starNotSelectedColor = "";

                            for (var i = 1; i <= 5; i++) {
                                $scope.stars[i] = {
                                    icon: i <= starCount ? 'd-icon-star ' : 'd-icon-star_o ',
                                    style: i <= starCount ? $scope.starSelectedColor : $scope.starNotSelectedColor
                                };
                            }
                            $scope.starsobj[guid] = $scope.stars;



                        }
                        //change the favourite on click
                        $scope.updateCardFavourite = function (RecInstanceId, favObject) {
                            var isFavourite = angular.fromJson(favObject);


                            if (angular.isArray(isFavourite)) {
                                var currentUserFav = _.find(isFavourite, function (obj) {
                                    return obj.username == $scope.CurrentUserLoginName;
                                });
                                if (currentUserFav) {

                                    var favouriteValue = currentUserFav.isfavourite == 'true' ? 'false' : 'true';
                                    currentUserFav.isfavourite = favouriteValue;

                                    $scope.updatedbfav(RecInstanceId, isFavourite);
                                } else {
                                    isFavourite.push({
                                        username: $scope.CurrentUserLoginName,
                                        isfavourite: 'true'
                                    });
                                    $scope.updatedbfav(RecInstanceId, isFavourite);
                                }
                            } else {
                                isFavourite = [];
                                isFavourite.push({
                                    username: $scope.CurrentUserLoginName,
                                    isfavourite: 'true'
                                });
                                $scope.updatedbfav(RecInstanceId, isFavourite);
                            }





                        };

                        $scope.updatedbfav = function (RecInstanceId, isFavourite) {
                            if ($scope.RecordDefinition) {
                                var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);
                                objectRecord.get(RecInstanceId).then(
                                    function (record) {
                                        record.setValue($scope.cardFavourite, angular.toJson(isFavourite));
                                        record.put();
                                        $scope.getCardList();
                                        $scope.getCardList();
                                        rxNotificationMessage.success("Saved Successfully!!");



                                    });
                            }
                        }
                        //set true or false based upon the selected toggle in admin view
                        $scope.updateCardVisibility = function (RecInstanceId, isCardVisible) {

                            if ($scope.RecordDefinition) {


                                var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);
                                objectRecord.get(RecInstanceId).then(
                                    function (record) {

                                        record.setValue($scope.cardVisible, isCardVisible == "true" ? "false" : "true");
                                        record.put().then(function () {
                                            $scope.getCardList();

                                        });


                                        rxNotificationMessage.success("Saved Successfully!!");

                                    }
                                );
                            }


                        };


                        // switched the css of the faviourite "heart" based on the clicks
                        $scope.getCardFavouriteClass = function (currentfavcssobject) {

                            var FavouriteCardCSSObject = angular.fromJson(currentfavcssobject);
                            var favarray = angular.isArray(FavouriteCardCSSObject) ? FavouriteCardCSSObject : [];
                            var favObject = _.find(favarray, function (obj) {
                                return obj.username == $scope.CurrentUserLoginName
                            });
                            if (favObject != undefined) {
                                if (favObject.isfavourite == 'true') {
                                    return "d-icon-heart w3-text-red";
                                } else {
                                    return "d-icon-heart_o";
                                }
                            } else {
                                return "d-icon-heart_o";
                            }



                        }

                        // changed the order of the cards to be shhown on the view
                        $scope.sortByViews = function () {

                            var queryParams = {

                                queryExpression: $scope.FilterExp ? $scope.FilterExp : "",
                                sortBy: $scope.selectedValue

                            };

                            $scope.cardListDataPromise = rxRecordInstanceDataPageResource.withName($scope.RecordDefinition).get(-1, 0, queryParams).then(
                                function (allRecords) {
                                    $scope.cardList = allRecords.data;


                                }
                            );
                        }

                        var toggle = false;
                        $scope.sortByFav = function () {
                            toggle = toggle === false ? true : false;
                            var portalFavouriteApplicationQuery = "'" + $scope.cardFavourite + "' LIKE " + '"%{""username"":""' + $scope.CurrentUserLoginName + '"",""isfavourite"":""true""}%"';
                            var prefixFavouriteApplicationQuery = $scope.FilterExp ? $scope.FilterExp + "AND(" + portalFavouriteApplicationQuery + ")" : portalFavouriteApplicationQuery;

                            var queryParams = {
                                propertySelection: "1,2,3,4,5,6,7,8,179," + $scope.ApplicationName + "," + $scope.Description + "," + $scope.Color + "," + $scope.tooltipHeader + "," + $scope.Icon + "," + $scope.tooltipDescription + "," + $scope.Views + "," + $scope.ratingCount + "," + $scope.cardStatus + "," + $scope.cardFavourite + "," + $scope.cardScope + "," + $scope.CategoryField + "," + $scope.cardVisible + "," + $scope.cardErrorInformation,
                                queryExpression: prefixFavouriteApplicationQuery,
                                sortBy: $scope.cardSorting


                            };

                            if (toggle) {

                                $scope.cardListDataPromise = rxRecordInstanceDataPageResource.withName($scope.RecordDefinition).get(100, 0, queryParams).then(
                                    function (allRecords) {
                                        $scope.cardList = allRecords.data;


                                    }
                                );
                            } else {
                                $scope.getCardList();
                            }
                        }

                        //List-card
                        $scope.show_hide_recordGrid = function (gridflag) {
                            $scope.recordFlag = (gridflag == 'false') ? 'true' : 'false';
                            $scope.recordFlag == 'false' ? $(".hideme").hide() : $(".hideme").show();


                            eventManager.propertyChanged({
                                property: 'recordFlag',
                                newValue: $scope.recordFlag
                            });
                        };


                        // data set container UI
                        $scope.opensearchmodal = function (value) {
                            if ($scope.dataset1 || $scope.dataset2) {
                                if (value == "" || value == null) {
                                    $element.find(".portalmodalcontainer").hide();
                                } else if (value == "closed") {
                                    $element.find(".portalmodalcontainer").hide();
                                } else {
                                    $element.find(".portalmodalcontainer").show();
                                }
                            } else {
                                $element.find(".portalmodalcontainer").hide();
                            }
                        }

                        // reset the search text input field after clicking on the dataset value
                        $scope.intializesearch = function (searchtext, dataseturl) {
                            dataseturl ? window.open(dataseturl, '_blank') : "";

                            $scope.filterCurrentCategoryOrSearchText($scope.searchbox.query, 'Search');
                            $scope.opensearchmodal("closed");
                        }

                        $scope.filtersearchboxapplication = function (obj) {
                            return (obj[$scope.ApplicationName]).toLowerCase().match($scope.query.toLowerCase());
                        }


                        // refresh the vc by ootb refresh action
                        function refreshCards(params) {

                            $scope.getCardList();
                        }

                        // Overriding the view component refresh method to use our own
                        // to refresh the portal vc.
                        $scope.rxConfiguration.api = {
                            refresh: refreshCards.bind(null, true)
                        };

                        eventManager.propertyChanged({
                            property: 'api',
                            newValue: $scope.rxConfiguration.api
                        });
                        //ng-change="getDataSet(dataset1, 'first',dataset1searchfield);getDataSet(dataset2, 'second',dataset2searchfield);opensearchmodal(searchbox.query)"
                        $scope.getUserApplicationQuery();

                    }

                };
            });
})();
