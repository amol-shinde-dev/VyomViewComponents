
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc9')
        .directive('comVyomVyomlibVc9',

                   function (rxRecordInstanceDataPageResource,rxRecordInstanceResource, $window,rxViewComponentEventManager,rxCurrentUser,$timeout,rxString,$document,rxNotificationMessage,$sce) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc9/com-vyom-vyomlib-vc9.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope) {
                var _config;

                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
                    $scope.subscribers=_config.subscribers;
                    $scope.incidents=_config.incidents;
                    $scope.changes=_config.changes;
                    $scope.incidentaction=_config.incidentaction;
                    $scope.subscriberaction=_config.subscriberaction;
                    $scope.changeaction=_config.changeaction;
                    $scope.IncidentRecDef=_config.IncidentRecDef;
                    $scope.url1=_config.url1;
                    $scope.url2=_config.url2;
                    $scope.url3=_config.url3;
                    $scope.url4=_config.url4;
//                    $window.HideIncident=_config.HideIncident;
//                    $window.HideChange=_config.HideChange;
//                    $window.HideSubscriber=_config.HideSubscriber;
                    
//                    
//                     $scope.trustSrc = function(chatwindowurl) {
//                        return $sce.trustAsResourceUrl(chatwindowurl);
//                    };
//                    $scope.chatwindowurl=_config.chatwindowurl;
                    
                   
                 //   $window.hideWidget();
                   
//                    $window.displayC=_config.displayC;
//                    
//                    
//                    //IFRAME
//                                       
//                    $scope.trustSrc = function(url) {
//                        return $sce.trustAsResourceUrl(url);
//                    };
//                    $scope.url = $scope.rxConfiguration.propertiesByName.url;
//                    
//                   
//                   $scope.containerWidth= $scope.rxConfiguration.propertiesByName.containerWidth;
//                    $scope.containerHeight= $scope.rxConfiguration.propertiesByName.containerHeight;
//                    $scope.iframeWidth= $scope.rxConfiguration.propertiesByName.iframeWidth;
//                    $scope.iframeHeight= $scope.rxConfiguration.propertiesByName.iframeHeight;
//                    $scope.iframeTop= $scope.rxConfiguration.propertiesByName.iframeTop;
//                    $scope.iframeRight= $scope.rxConfiguration.propertiesByName.iframeRight;
                    
                    
                    $scope.getIncidentRec();
//                    $window.display();
                   
                    $scope.mydata=[];
                    $scope.statusValue=[];
                   
                   
                  

                };

               
                

                // <!----------- buit in functions------------------>

                $scope.callAction=function(actionname)
                {
                    if(actionname == "Saction")
                        {
                            $scope.executeAction($scope.subscriberaction);
                            
                        }
                    else if(actionname == "Iaction")
                        {
                            $scope.executeAction($scope.incidentaction);
                            
                        }
                    else if(actionname == "Caction")
                        {
                            $scope.executeAction($scope.changeaction);
                            
                        }
                  
                    
                }
                //redirect to differnt url
                  $scope.redirecturl = function(redurl) {
       // $window.location.href=redurl;
                      $window.open(redurl, '_blank');
    };
                
                $scope.executeAction=function(guid)
                {
                    console.log("start process "+guid);
                     $timeout(function(){
                            var button;

                            
                                // We are looking for the rx-action-button with the given Guid and then the button embedded inside of it.
                                var buttonGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', guid);
                               // console.log("buttonGUID:"+buttonGuid);
                                button = $document.find(buttonGuid);
                            

                            if (button) {
                                button.click();
                            } else {
                                rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid);
                            }
                        });
                }
                
                $scope.getIncidentRec=function()
                {
                         var foo = rxRecordInstanceDataPageResource.withName($scope.IncidentRecDef);

                    foo.get(100, 0, { propertySelection:"2,179,1,7,8,"
                                    }).then(
                        function (allRecords) {
                            $scope.mydata = allRecords.data;
     

                        }
                    );
                    
                     foo.get(100, 0, { propertySelection:"2,179,1,7,8,",              queryExpression: "'7' == 0"
                                    }).then(
                        function (allRecords) {
                            $scope.statusValue[0] = allRecords.data.length;//New
     

                        }
                    );
                    
                    foo.get(100, 0, { propertySelection:"2,179,1,7,8,",              queryExpression: "'7' == 1"
                                    }).then(
                        function (allRecords) {
                           $scope.statusValue[1] = allRecords.data.length; // $window.Assigned 
     

                        }
                    );
                    
                    foo.get(100, 0, { propertySelection:"2,179,1,7,8,",              queryExpression: "'7' == 2"
                                    }).then(
                        function (allRecords) {
                           $scope.statusValue[2]  = allRecords.data.length;  //$window.Fixed
     

                        }
                    );
                     foo.get(100, 0, { propertySelection:"2,179,1,7,8,",              queryExpression: "'7' == 3"
                                    }).then(
                        function (allRecords) {
                          $scope.statusValue[3]  = allRecords.data.length;  //$window.Rejected
     

                        }
                    );
                    
                     foo.get(100, 0, { propertySelection:"2,179,1,7,8,",              queryExpression: "'7' == 4"
                                    }).then(
                        function (allRecords) {
                            $scope.statusValue[4] = allRecords.data.length; //$window.Closed
     

                        }
                    );
                    
                    
                    

                    
                }
                


                init();

            }

        };
    });
})();