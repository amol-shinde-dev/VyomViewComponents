
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc12')
        .directive('comVyomVyomlibVc12',

                   function (rxRecordInstanceDataPageResource,rxRecordInstanceResource, $window,rxCurrentUser,RX_RECORD_GRID, RX_RECORD_DEFINITION,rxDataPageResource,rxViewComponentEventManager,$http) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc12/com-vyom-vyomlib-vc12.directive.html',

            scope: {
                rxConfiguration: '='
            },

                 link: function ($scope) {
                var _config;

                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
                   
                     $scope.cfg = {};  
                 $scope.cfg.processDefinitionName1 = _config.processDefinitionName1;           
                 $scope.cfg.InputVariable1=_config.InputVariable1;
                    
                         $scope.cfg.processDefinitionName2 = _config.processDefinitionName2;
                 $scope.cfg.InputVariable2=_config.InputVariable2;
                    
                         $scope.cfg.processDefinitionName3 = _config.processDefinitionName3;            $scope.cfg.InputVariable3=_config.InputVariable3
                    
                         $scope.cfg.processDefinitionName4 = _config.processDefinitionName4;
                $scope.cfg.InputVariable4=_config.InputVariable4;
                    
                        $scope.cfg.processDefinitionName5 = _config.processDefinitionName5;
                $scope.cfg.InputVariable5=_config.InputVariable5;
                    
                    console.log($scope.cfg.processDefinitionName4);
                    
                    
                    if($scope.cfg.processDefinitionName1 != undefined && $scope.cfg.InputVariable1!= undefined)
                        {
                            
                            $scope.runprocess($scope.cfg.processDefinitionName1,$scope.cfg.InputVariable1);
                            
                        }
                       if($scope.cfg.processDefinitionName2 != undefined && $scope.cfg.InputVariable2!= undefined)
                        {
                            
                            $scope.runprocess($scope.cfg.processDefinitionName2,$scope.cfg.InputVariable2);
                            
                        }
                       if($scope.cfg.processDefinitionName3 != undefined && $scope.cfg.InputVariable3 != undefined)
                        {
                            
                            $scope.runprocess($scope.cfg.processDefinitionName3,$scope.cfg.InputVariable3);
                            
                        }
                       if($scope.cfg.processDefinitionName4 != undefined && $scope.cfg.InputVariable4 != undefined)
                        {
                            
                            $scope.runprocess($scope.cfg.processDefinitionName4,$scope.cfg.InputVariable4);
                            
                        }
                       if($scope.cfg.processDefinitionName5 != undefined && $scope.cfg.InputVariable5 != undefined)
                        {
                            
                            $scope.runprocess($scope.cfg.processDefinitionName5,$scope.cfg.InputVariable5);
                            
                        }
                    
                    
               /*     
                    undefined
                    $scope.runProcess = function () {

                        var requestData = {

                            "resourceType": "com.bmc.arsys.rx.application.process.command.StartProcessInstanceCommand",

                            "processDefinitionName": $scope.cfg.processDefinitionName,

                            "processInputValues": {
								
							}

                        };

                     
						$http.post('/api/rx/application/command', JSON.stringify(requestData)).then(function(data, status, headers, config){


                            $scope.headersData = headers('Location');

                            console.log($scope.headersData);
                            $scope.processInstanceID = $scope.headersData.substring($scope.headersData.lastIndexOf('/')+1);

                            console.log('ProcessInstanceID:'+$scope.processInstanceID + " " + $scope.Priority );
						
							
                        
							$http.get('/api/rx/application/process/processinstance/' + $scope.cfg.processDefinitionName + '/' + $scope.processInstanceID + '/processOutputVariables').then(function(data1, status1, headers1, config1){
                                $scope.connectorOutput = data1;

                                $scope.resultData = data1.processOutput;

                                var jsonData = $scope.resultData.replace(/[\\]/gi, '');
                                $scope.ExtractedJSON = JSON.parse(jsonData);

                           
								$window.alert("Priority="+$scope.Priority);
                            });
                        });
						
                    };*/
                    
                    
                    
                    

                };

                     $scope.runprocess=function(procDefName,inputVar)
                     {
                         
                         
                       var requestData = {

                            "resourceType": "com.bmc.arsys.rx.application.process.command.StartProcessInstanceCommand",

                            "processDefinitionName": procDefName,

                            "processInputValues": {
                                "InputVariable":inputVar
								
							}

                        };

                      $http.post('/api/rx/application/command', JSON.stringify(requestData)).then(
                         function successCallback(response) {
                                console.log("Successfully POST-ed data"+response);
                             
                            },
                                function errorCallback(response) {
                                    console.log("POST-ing of data failed"+response);
                                }
                      );
                    
                    
                     }




                init();

            }

        };
    });
})();