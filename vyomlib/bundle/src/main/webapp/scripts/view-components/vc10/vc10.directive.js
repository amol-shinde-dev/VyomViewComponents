
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc10')
        .directive('comVyomVyomlibVc10',

                   function (rxRecordInstanceDataPageResource,rxRecordInstanceResource, $window,rxViewComponentEventManager,rxCurrentUser,$timeout,rxString,$document,rxNotificationMessage,$sce) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc10/com-vyom-vyomlib-vc10.directive.html',

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
                    $scope.changeaction=_config.changeaction;
                    $scope.country1label=_config.country1label;
                    $scope.country1value=_config.country1value;
                    $scope.country2label=_config.country2label;
                    $scope.country2value=_config.country2value;
                    $scope.country3label=_config.country3label;
                    $scope.country1value=_config.country3value;
                    $scope.incidentaction=_config.incidentaction;
                    $scope.subscriberaction=_config.subscriberaction;
                    $scope.changeaction=_config.changeaction;

                };

               
                

                // <!----------- buit in functions------------------>

                $scope.callAction=function(actionname)
                {
                    
                    if(actionname == "Iaction")
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
                
  
                


                init();

            }

        };
    });
})();