
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc7')
        .directive('comVyomVyomlibVc7',

                   function (rxRecordInstanceDataPageResource,rxRecordInstanceResource, $window,rxViewComponentEventManager,rxCurrentUser,$timeout,rxString,$document,rxNotificationMessage) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc7/com-vyom-vyomlib-vc7.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope) {
                var _config;

                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
//                    $scope.subscribers=_config.subscribers;
//                    $scope.incidents=_config.incidents;
//                    $scope.changes=_config.changes;
//                    $scope.incidentaction=_config.incidentaction;
//                    $scope.subscriberaction=_config.subscriberaction;
//                    $scope.changeaction=_config.changeaction;
//                    $scope.IncidentRecDef=_config.IncidentRecDef;
                    $window.displayC=_config.displayC;
                    
                    //$scope.getIncidentRec();
                    $window.display();
                    $scope.mydata=[];
                  

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
                            

                            //4:loginid
                            //1000000017:full name
                            //1000000048:email

                        }
                    );

                    
                }


                init();

            }

        };
    });
})();