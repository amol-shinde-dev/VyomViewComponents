
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.marquee3')
        .directive('comVyomVyomlibMarquee3',

                   function (rxRecordInstanceDataPageResource,rxRecordInstanceResource, $window,rxViewComponentEventManager,rxCurrentUser,$timeout,rxString,$document,rxNotificationMessage,$sce,rxRecordDefinitionResource,RX_RECORD_DEFINITION,$filter) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/marquee3/com-vyom-vyomlib-marquee3.directive.html',

            scope: {
                rxConfiguration: '='
            },

                 link: function ($scope) {
                var _config;

                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
                   
            
                    $scope.MBGColor = _config.MBGColor;
                    $scope.IncidentRecDef = _config.IncidentRecDef;
					$scope.FilterExp = _config.FilterExp;
                    $scope.Separator=_config.Separator;
                    $scope.MWidth=_config.MWidth;
                    $scope.MHeight=_config.MHeight;
                    $scope.MAllignment=_config.MAllignment;
                    $scope.MDirection=_config.MDirection;
                    $scope.MSpeed=_config.MSpeed;
                    $scope.MBehavior=_config.MBehavior;
         
                    
                    
			
                    
					$scope.FieldID1 = ((_config.FieldID1==null)||(_config.FieldID1==undefined)||(_config.FieldID1==''))?null:_config.FieldID1;
                    $scope.FieldID2 = ((_config.FieldID2==null)||(_config.FieldID2==undefined)||(_config.FieldID2==''))?null:_config.FieldID2;
					$scope.FieldID3 = ((_config.FieldID3==null)||(_config.FieldID3==undefined)||(_config.FieldID3==''))?null:_config.FieldID3;
                    $scope.FieldID4 = ((_config.FieldID4==null)||(_config.FieldID4==undefined)||(_config.FieldID4==''))?null:_config.FieldID4;
					
					$scope.FieldID1Title = ((_config.FieldID1Title==null)||(_config.FieldID1Title==undefined)||(_config.FieldID1Title==''))?null:_config.FieldID1Title;
					$scope.FieldID2Title = ((_config.FieldID2Title==null)||(_config.FieldID2Title==undefined)||(_config.FieldID2Title==''))?null:_config.FieldID2Title;
					$scope.FieldID3Title = ((_config.FieldID3Title==null)||(_config.FieldID3Title==undefined)||(_config.FieldID3Title==''))?null:_config.FieldID3Title;
					$scope.FieldID4Title = ((_config.FieldID4Title==null)||(_config.FieldID4Title==undefined)||(_config.FieldID4Title==''))?null:_config.FieldID4Title;
					

					$scope.mydata=[];
					$scope.fields=[];
                    $scope.mydatacopy=[];
					$scope.selectionFields=[];
					if($scope.IncidentRecDef)
						$scope.getIncidentRec();
                    
                    if($scope.IncidentRecDef)
					{
						rxRecordDefinitionResource.get($scope.IncidentRecDef).then(function (recordDefinition) {
							$scope.IncRecordDefinition = recordDefinition;
							$scope.fields=($scope.IncRecordDefinition.fieldDefinitions).map(function (fieldDefinition) {
								return {
									id: fieldDefinition.id,
									name: fieldDefinition.name,
									resourceType: fieldDefinition.resourceType
								};
							});
							
							for (var i in $scope.fields) {
								if(($scope.fields[i].resourceType == RX_RECORD_DEFINITION.dataTypes.selection.resourceType))
								{
									$scope.selectionFields.push({id:$scope.fields[i].id, name:$scope.fields[i].name, resourceType:$scope.fields[i].resourceType, optionNamesById:_.find($scope.IncRecordDefinition.fieldDefinitions, function(obj) { return obj.id == $scope.fields[i].id }).optionNamesById});
								}
							}
							
						}).catch(function (e) {
							console.log("Unable to retrieve "+$scope.IncidentRecDef+" RecordDefinition."+e);
						});
					}

                    
					$scope.mydata=[];
                    $scope.statusValue=[];
					
                };
             
			$scope.fromhtml=function(FieldID,FieldValue)
				{					
					if(!FieldID||($scope.fields==null||$scope.fields.length==0))return null;					
					
					if(FieldID) if(_.find($scope.fields, function(obj) { return obj.id == FieldID }).resourceType == RX_RECORD_DEFINITION.dataTypes.selection.resourceType)
						{
							return (_.find($scope.selectionFields, function(obj) { return obj.id == FieldID })).optionNamesById[FieldValue];
							
						}
						else return FieldValue;
						else return FieldValue?FieldValue:null;
				}
				
			 
           
  
            $scope.getIncidentRec=function()
                {
					console.log("$scope.IncidentRecDef: "+$scope.IncidentRecDef);
					var condition="";
					condition+=($scope.FieldID1==null||$scope.FieldID1=='')?"":($scope.FieldID1+",");
					condition+=($scope.FieldID2==null||$scope.FieldID2=='')?"":($scope.FieldID2+",");
					condition+=($scope.FieldID3==null||$scope.FieldID3=='')?"":($scope.FieldID3+",");
					condition+=($scope.FieldID4==null||$scope.FieldID4=='')?"":$scope.FieldID4;
					if(condition.charAt(condition.length-1)==",")
					{
						condition=condition.substring(0, condition.length - 1);						
					}				
					
                    var foo = rxRecordInstanceDataPageResource.withName($scope.IncidentRecDef);
					 var queryParams = {
							propertySelection:"1,"+condition,//+","
                            //propertySelection: "179,7," + $scope.cfg.fieldIdToDisplay,//, // ids of fields to fetch
                            queryExpression: $scope.FilterExp?$scope.FilterExp:""//"'7' != 3" //Status is not rejected
                        };

						foo.get(100, 0, queryParams).then(
                        function (allRecords) {
                            $scope.mydata = allRecords.data;//.slice()  
							
                        }
                    );
            
					
                    
                }
            
                     

                init();

            }

        };
    });
})();
























