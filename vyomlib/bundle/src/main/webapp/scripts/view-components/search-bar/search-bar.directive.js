(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.search-bar').directive('comVyomVyomlibSearchBar',
        function (rxRecordInstanceDataPageResource,rxCurrentUser,$timeout) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/search-bar/com-vyom-vyomlib-search-bar.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;

                    //Getting parameters
                    function init() {
                        _config = $scope.rxConfiguration.propertiesByName;
                        $scope.cfg = {};
                        $scope.cfg.recordDefinitionName = _config.recordDefinitionName;
                        $scope.cfg.textFieldID = _config.textFieldID;
                        $scope.cfg.icon = _config.icon;
                        $scope.cfg.serviceRequestURL = _config.serviceRequestURL;
                        $scope.cfg.category = _config.category;
                        /*$scope.cfg.searchText = _config.searchText;*/
						
						$scope.cfg.articlerecordDefinitionName = _config.articlerecordDefinitionName;
                        $scope.cfg.articlename = _config.articlename;
						$scope.cfg.articleurl = _config.articleurl;
						$scope.cfg.articleIcon = _config.articleIcon;
						$scope.articleData = [];

                        $scope.user = rxCurrentUser.get();
                        $scope.userName = $scope.user['loginName'];
                        $scope.searchData = [];
                        $scope.textData = [];
						$scope.category="All";						
						
                        //$scope.cfg.userID = $scope.user['loginName'];
                        //Calling data fetch function (standard BMC OOTB Javascript APIs)
                        loadData();
						
						
						$scope.cfg.policyrecordDefinitionName = _config.policyrecordDefinitionName;
                        $scope.cfg.policyname = _config.policyname;
						$scope.cfg.policyurl = _config.policyurl;
						$scope.cfg.policyIcon = _config.policyIcon;
						$scope.policyData = [];
						$scope.searchPolicies="";		
						search_fun_policy();

                    }

                    //Calling the javascript code that fetches data.
                    /*function getData1() {
                        
                        var queryParams = {
                            propertySelection: $scope.cfg.textFieldID + "," + $scope.cfg.icon,//, // ids of fields to fetch
                            queryExpression: "" /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications
                       /* };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                    }*/
                    
					
					function loadData() {
                        $scope.textData = [];
						var c=$scope.category;
						/* if (c === 'Policy') {
							//articles();
							return;
						} */	
                        var queryParams = {
                            propertySelection: $scope.cfg.textFieldID + "," + $scope.cfg.category+ "," + $scope.cfg.icon+ "," + $scope.cfg.serviceRequestURL,//, // ids of fields to fetch
                            queryExpression: "" /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
                        };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                    }

					
                    $scope.getData1 = function () {
                        $scope.textData = [];
						var c=$scope.category;
						if (c === 'Policy') {
							//articles();
							return;
						}	
                        var queryParams = {
                            propertySelection: $scope.cfg.icon+ "," + $scope.cfg.serviceRequestURL+ "," + $scope.cfg.category + ","+$scope.cfg.textFieldID,//, // ids of fields to fetch
                            queryExpression: "'" + $scope.cfg.textFieldID + "' LIKE " + '"%' +$scope.searchText + '%"' /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
                        };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                    }

                    function search_fun() {
						$scope.textData = [];
						var c=$scope.category;
						if (c === 'Articles') {
							articles();
							return;
						}
						if (c === 'Policy') {
							//articles();
							return;
						}	
						
						$scope.textData = [];
						if (c === 'All') 
						{
							var queryParams = {
								propertySelection: $scope.cfg.serviceRequestURL+ ","+ $scope.cfg.textFieldID + "," + $scope.cfg.icon+ "," + $scope.cfg.category,//, // ids of fields to fetch
								queryExpression: "'" + $scope.cfg.textFieldID + "' LIKE " + '"%' +$scope.searchText + '%" AND' + "'" + $scope.cfg.category + "' != " + '"Articles"AND'+ "'" + $scope.cfg.category + "' != " + '"Policy"'  /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
							};
							

							var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
							foo.get(100, 0, queryParams).then(
								function (allRecords) {
									$scope.textData = allRecords.data;
								}
							);
							return;
						}	
						
                        var queryParams = {
                            propertySelection: $scope.cfg.serviceRequestURL+ ","+ $scope.cfg.textFieldID + "," + $scope.cfg.icon+ "," + $scope.cfg.category,//, // ids of fields to fetch
                            queryExpression: "'" + $scope.cfg.textFieldID + "' LIKE " + '"%' +$scope.searchText + '%" AND' + "'" + $scope.cfg.category + "' = " + '"'+$scope.category+'"AND'+ "'" + $scope.cfg.category + "' != " + '"Policy"'  /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
                        };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                        // $scope.showSearchInProgress = false;
                    }

                    $scope.$watch('searchText', search_fun);					
					
					
					
					$scope.getData2 = function(c) {
						 
						
						if (c === undefined||c === ' '||c === ''||c === 'Policy') {
							search_fun();
							return;
						} 
						if (c === 'All') {
							$scope.category= 'All';
							search_fun();
							return;
						} 
						$scope.category=c; 
                        $scope.textData = [];
                        var queryParams = {
                            propertySelection: $scope.cfg.textFieldID + "," + $scope.cfg.icon+ "," + $scope.cfg.serviceRequestURL+ "," + $scope.cfg.category,//, // ids of fields to fetch
                            queryExpression: "'" + $scope.cfg.textFieldID + "' LIKE " + '"%' +$scope.searchText + '%" AND' + "'" + $scope.cfg.category + "' = " + '"'+c+'"' /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
                        };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                    }
                    
					
					 $scope.getDatahr = function() {
						 $scope.category="HR";			
                        $scope.textData = [];
                        var queryParams = {
                            propertySelection: $scope.cfg.textFieldID + "," + $scope.cfg.icon+ "," + $scope.cfg.serviceRequestURL+ "," + $scope.cfg.category,//, // ids of fields to fetch
                            queryExpression: "'" + $scope.cfg.textFieldID + "' LIKE " + '"%' +$scope.searchText + '%" AND' + "'" + $scope.cfg.category + "' = " + '"HR"' /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
                        };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                    }
					
					
					 $scope.getDatapsc = function() {
                        $scope.category="P&SC";			
						$scope.textData = [];
                        var queryParams = {
                            propertySelection: $scope.cfg.textFieldID + "," + $scope.cfg.icon+ "," + $scope.cfg.serviceRequestURL+ "," + $scope.cfg.category,//, // ids of fields to fetch
                            queryExpression: "'" + $scope.cfg.textFieldID + "' LIKE " + '"%' +$scope.searchText + '%" AND' + "'" + $scope.cfg.category + "' = " + '"P&SC"' /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
                        };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                    }
					
					$scope.getDatapfinance = function() {
                        $scope.category="Finance";	
						$scope.textData = [];
                        var queryParams = {
                            propertySelection: $scope.cfg.textFieldID + "," + $scope.cfg.icon+ "," + $scope.cfg.serviceRequestURL+ "," + $scope.cfg.category,//, // ids of fields to fetch
                            queryExpression: "'" + $scope.cfg.textFieldID + "' LIKE " + '"%' +$scope.searchText + '%" AND' + "'" + $scope.cfg.category + "' = " + '"Finance"' /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
                        };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                    }
					
					$scope.getDatabso = function() {
                        $scope.category="BSO";	
						$scope.textData = [];
                        var queryParams = {
                            propertySelection: $scope.cfg.textFieldID + "," + $scope.cfg.icon+ "," + $scope.cfg.serviceRequestURL+ "," + $scope.cfg.category,//, // ids of fields to fetch
                            queryExpression: "'" + $scope.cfg.textFieldID + "' LIKE " + '"%' +$scope.searchText + '%" AND' + "'" + $scope.cfg.category + "' = " + '"BSO"' /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
                        };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                    }
					
					
					
					
                    $scope.getData3 = function() {
						$scope.category="Questions";	
                        $scope.textData = [];
                        var queryParams = {
                            propertySelection: $scope.cfg.textFieldID + "," + $scope.cfg.icon+ "," + $scope.cfg.serviceRequestURL+ "," + $scope.cfg.category,//, // ids of fields to fetch
                            queryExpression: "'" + $scope.cfg.textFieldID + "' LIKE " + '"%' +$scope.searchText + '%" AND' + "'" + $scope.cfg.category + "' = " + '"Questions"'  /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
                        };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                    }
					
					function articles() {
						$scope.category="Articles";	
                        $scope.textData = [];
                        var queryParams = {
                            propertySelection: $scope.cfg.textFieldID + "," + $scope.cfg.icon+ "," + $scope.cfg.serviceRequestURL+ "," + $scope.cfg.category,//, // ids of fields to fetch
                            queryExpression: "'" + $scope.cfg.textFieldID + "' LIKE " + '"%' +$scope.searchText + '%" AND' + "'" + $scope.cfg.category + "' = " + '"Articles"'  /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
                        };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                    }
					
					
					$scope.getArticleData = function () {
						$scope.category="Articles";	
                        $scope.textData = [];
                        var queryParams = {
                            propertySelection: $scope.cfg.textFieldID + "," + $scope.cfg.icon+ "," + $scope.cfg.serviceRequestURL+ "," + $scope.cfg.category,//, // ids of fields to fetch
                            queryExpression: "'" + $scope.cfg.textFieldID + "' LIKE " + '"%' +$scope.searchText + '%" AND' + "'" + $scope.cfg.category + "' = " + '"Articles"'  /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
                        };
                        

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.textData = allRecords.data;
                            }
                        );
                    }

					
					$scope.clickOnallServices = function ($event) {   
						//$event='click';
						//$event.stopPropagation(); // <-- this is important

						$timeout(function() {
							//location=location; 
							window.location.reload(false); 
							angular.element('allservices').trigger('click');
						}, 0);
					};

					
					
					$scope.$watch('searchPolicies', search_fun_policy);		
					
					function search_fun_policy() {
						//$scope.textData = [];
						
						//var x=$scope.category;
						if (x === 'Articles') {
							//articles();
							return;
						}	
						
						//c=$scope.category='Policy';
						var x='Policy';
						$scope.policyData = [];
						
						var queryParams = {
							propertySelection: $scope.cfg.policyname + "," + $scope.cfg.policyIcon+ "," + $scope.cfg.policyurl,//, // ids of fields to fetch
							//propertySelection: $scope.cfg.policyname + "," + $scope.cfg.policyurl + $scope.cfg.policyIcon ,//, // ids of fields to fetch
							queryExpression: ""  /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
							/*queryExpression: "'" + $scope.cfg.policyname + "' LIKE " + '"%' +$scope.searchPolicies + '%"' + "'"  /*+'" AND'+"'7'!="+'"Offline"'*/ //Qualifications textFieldID
						};
						

						var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.policyrecordDefinitionName);
						foo.get(100, 0, queryParams).then(
							function (allRecords) {
								$scope.policyData = allRecords.data;
							}
						);					
                       
                        // $scope.showSearchInProgress = false;
                    }

                    //Calling init function, only once.
                    init();


                }
            };
        });
})();