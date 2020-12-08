// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.landing-console').directive('comVyomVyomlibInspectorLandingConsolePermission', function (RX_RECORD_DEFINITION,rxRecordInstanceResource,rxRecordInstanceDataPageResource, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/landing-console/com-vyom-vyomlib-inspector-landing-console-permission.directive.html',

            link: function ($scope) {
                
                   $scope.data = {
                    fields: [],
                    selectedField: null
                };
 
                
                
      
            



                function getFunctionRole()

                {
                    
                    
                    var queryParams = {
							propertySelection:"1,2,3,4,5,6,7,8,179,1721"

                        };
                    rxRecordInstanceDataPageResource.withName('Functional Roles').get(100, 0, queryParams).then(
                        function (allRecords) {
                            $scope.data.fields = allRecords.data;//.slice()  
                          console.log($scope.data.fields);
                            
							$scope.data.selectedField = _.find($scope.data.fields, {
                            179: $scope.cell.prop($scope.path)
                        });
                            
                        }
                        );
                    
                       
                    
                     
             
                    
                }
                
                
                
                
        
                         
               function SaveFunctionalRole()
                {   
                    if($scope.data.selectedField){
                        $scope.cell.prop($scope.path, $scope.data.selectedField[179]);
                    }
                }

            

                
                  
                 $scope.$watch('data.selectedField', SaveFunctionalRole)
                getFunctionRole();
             
               
               
            }
          
        };
    });
})();