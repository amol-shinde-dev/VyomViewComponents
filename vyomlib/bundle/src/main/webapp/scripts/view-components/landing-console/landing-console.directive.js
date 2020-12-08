
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.landing-console')
        .directive('comVyomVyomlibLandingConsole',

                   function (rxRecordInstanceDataPageResource,rxRecordInstanceResource, $document,rxRecordDefinitionResource,rxCurrentUser,rxNotificationMessage,rxGUID,$sce,rxString) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/landing-console/com-vyom-vyomlib-landing-console.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope) {
                var _config;

                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
                    
                   $scope.CardList=[];
                   $scope.CardList=angular.fromJson(_config.CardList);
                    $scope.SearchColor=_config.SearchColor;
                    console.log($scope.CardList);
                    
                    
                  
                    
                    
                    $scope.mydata=[];
                    $scope.permittedCards=[];
                    
                    $scope.CurrentUserFullName=rxCurrentUser.get().fullName;
                    $scope.CurrentUserLoginName=rxCurrentUser.get().loginName;
                    $scope.RecDef="com.bmc.arsys.rx.foundation:Person";
                    $scope.getUserRecord();
                    
                    
                    
                    
                    
                
                   
                    

                };
                
                    // <!----------- buit in functions------------------>
                
                
                
                $scope.setUrlTOModal=function(indexurl)
                {
                    $scope.modalUrl=indexurl;
                }
                
                $scope.trustSrc = function(url) {
                        return $sce.trustAsResourceUrl(url);
                    };

              
                $scope.getUserRecord=function()
                {   
                    
                    var n = "'4' == $USER$";
                    var foo=rxRecordInstanceDataPageResource.withName($scope.RecDef);
                    var queryParams = {
							propertySelection:"4,430000002,",
                           // queryExpression:"'4'="+'"'+$scope.CurrentUserLoginName+'"'
                            queryExpression:n

                        };
                    
                    foo.get(10, 0, queryParams).then(
                        function (allRecords) {
                            $scope.mydata = allRecords.data;//.slice() 
                            
                            for(var i in $scope.CardList)
                            {
                            
                                var userFunctionalRoles=$scope.mydata[0][430000002].split(';')
                                var cardPermissionAvail=_.contains(userFunctionalRoles, $scope.CardList[i].permissions);
                                if(cardPermissionAvail)
                                   {
                                       $scope.permittedCards.push($scope.CardList[i]);
                                   }
                            
                            }
                            
                            console.log($scope.mydata);
                        }
                        );
                    
                    
                    
                }
                
                function getFunctionalRole()  {
                    
                    var queryParams = {
							propertySelection:"1,2,3,4,5,6,7,8,179,1721"

                        };
                    rxRecordInstanceDataPageResource.withName('Functional Roles').get(100, 0, queryParams).then(
                        function (allRecords) {
                            $scope.functionalroles = allRecords.data;//.slice()                            
                        }
                        );
                    
                } 
                
                $scope.cardPermission=function()
                {   
                    
                    
                    /*if(obj.permissions)
                        
                    	$scope.cardPermissionNameToObject = _.find($scope.functionalroles, {
                            1721: obj.permissions
                        });*/
                        /*var temp=_.intersection($scope.functionalroles,$scope.CardList);
                        console.log(temp);*/
                      
                    
                   
                    
                
                    
                }


                init();

            }

        };
    });
})();