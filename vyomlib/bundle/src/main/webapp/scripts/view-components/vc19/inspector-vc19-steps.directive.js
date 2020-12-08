// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc19').directive('comVyomVyomlibInspectorVc19Steps', function (RX_RECORD_DEFINITION) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc19/com-vyom-vyomlib-inspector-vc19-steps.directive.html',

            link: function ($scope) {
                
                 $scope.data = {
                    fields: [],
                    selectedField: null
                };
            
   init();
                $scope.arr=[];
                $scope.existElement=false;

                function init() {
                    
                   intializelist()
                    
                   
                    $scope.$watch('cell.list', intializelist);
                    
                    initializeFields();

                    // reinitialize fields when user change Record Definition
                    $scope.$watch('cell.recordDefinitionFullName', initializeFields);
                    
                     
                    
                    
                    $scope.$watch('data.selectedField', function (newValue) {
                        if (newValue) {
                            // set field id to the model
                            $scope.cell.prop($scope.path, $scope.data.selectedField.id);
                            
                            
                            
                            
                        }
                    }, true);
                    
                    
                    
                }
                
                
                
              
                
                function intializelist()
                {   if($scope.cell.prop('rxData/list'))
                    {   var temp=$scope.cell.prop('rxData/list');
                        $scope.arr =angular.fromJson(temp);
         
                    }else
                    {
                        $scope.arr=[];
                    }
                }
                $scope.Add=function()
                {   
                   
                    $scope.arr.push({id:$scope.data.selectedField.id,name:$scope.data.selectedField.name});
                    
                    
                    $scope.cell.prop('rxData/list', angular.toJson($scope.arr));
                }
                
                //no duplicates
                $scope.nodup=function()
                {
                   
                   if($scope.arr.indexOf({id:$scope.data.selectedField.id,name:$scope.data.selectedField.name}) != -1)
                        {
                           
                            $scope.existElement=true;
                            return $scope.existElement;
                        }else{
                            
                           $scope.existElement=false; 
                            return $scope.existElement;
                        }
                }
                
                function initializeFields() {
                    if ($scope.cell.recordDefinitionFullName) {
                        $scope.data.fields = getFields();
                      

                        $scope.data.selectedField = _.find($scope.data.fields, {
                            id: Number($scope.cell.prop($scope.path))
                        });
                    } else {
                        $scope.data.fields = [];
                        $scope.data.selectedField = null;
                    }
                }

                // get all attachment fields from the selected Record Definition
                function getFields() {
                   // console.log($scope.cell.recordDefinitionFullName.fieldDefinitions);

                    return _($scope.cell.recordDefinitionFullName.fieldDefinitions)
                        .map(function (fieldDefinition) {
                            return {
                                id: fieldDefinition.id,
                                name: fieldDefinition.name
                            };
                        })
                        .value();
                }
            }
          
        };
    });
})();