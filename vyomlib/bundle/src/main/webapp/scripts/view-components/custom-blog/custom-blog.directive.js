(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.custom-blog')
        .directive('comVyomVyomlibCustomBlog',

            function (rxNotificationMessage, rxRecordInstanceDataPageResource, rxRecordInstanceResource, rxGUID, $window) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/custom-blog/com-vyom-vyomlib-custom-blog.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope, $element) {
                        var _config;

                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName,

                                $scope.RecordDefinition = _config.recordDefinitionFullName;
                            $scope.HTMLField = _config.HTMLField;
                            $scope.RecInstanceId = _config.RecInstanceId;
                            $scope.editorID = _config.editorInstance.split("-").join("_");


                            angular.element(document).ready(function () {

                                //call editor from standardlib 
                                //inline is type for floting editor toolbar, we can use classic or bubble as well
                                // CKEDITOR can be directly acced from stdlib
                                // this automatically generates HTML and present on screen under div id (editor ID given in html file)
                                $scope.editor = CKEDITOR.inline($scope.editorID, {
                                    height: '500px',
                                    extraPlugins: ['image', 'find', 'sharedspace', 'base64image', 'sourcedialog', 'wsc'],
                                    startupFocus: false,
                                    disableAutoInline: true
                                });

                            });



                            $scope.mydata = [];


                            getHTML();



                        };




                        // <!----------- buit in functions------------------>

                        $scope.updateHTML = function () {
                            $scope.editorData = $scope.editor.getData();

                            if ($scope.editorData && $scope.RecordDefinition) {
                                var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);
                                objectRecord.get($scope.RecInstanceId).then(
                                    function (record) {
                                        record.setValue($scope.HTMLField, $scope.editorData);
                                        record.put();
                                        rxNotificationMessage.info("Successfully Saved!!");
                                    }
                                );
                            }
                        };


                        // this function is used to get the html formatted data back to the screen
                        function getHTML() {
                            var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);
                            objectRecord.get($scope.RecInstanceId).then(
                                function (record) {
                                    console.log(record.getValue($scope.HTMLField));
                                    $scope.editor.setData(record.getValue($scope.HTMLField));
                                }
                            );

                        }

                        // Getting user preferences.
                        function loadBootstrap(event) {
                            if (event.name == 'mode' && event.editor.mode == 'source')
                                return;

                            var jQueryScriptTag = $document.createElement('script');
                            var bootstrapScriptTag = $document.createElement('script');

                            jQueryScriptTag.src = 'https://code.jquery.com/jquery-1.11.3.min.js';
                            bootstrapScriptTag.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js';

                            var editorHead = event.editor.document.$.head;

                            editorHead.appendChild(jQueryScriptTag);
                            jQueryScriptTag.onload = function () {
                                editorHead.appendChild(bootstrapScriptTag);
                            };
                        }




                        init();

                    }

                };
            });
})();
