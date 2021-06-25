(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.custom-blog')
        .directive('comVyomVyomlibCustomBlog',

            function (rxNotificationMessage, rxRecordInstanceDataPageResource, rxRecordInstanceResource, rxGUID, $window, rxCurrentUser, $sce, rxViewComponentEventManager) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/custom-blog/com-vyom-vyomlib-custom-blog.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope, $element) {
                        var _config,
                            eventManager = rxViewComponentEventManager.getInstance($scope);




                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName,

                                $scope.RecordDefinition = _config.recordDefinitionFullName;
                            $scope.HTMLField = _config.HTMLField;
                            $scope.RecInstanceId = _config.RecInstanceId;
                            $scope.enableEditButton = _config.enableEditButton;
                            $scope.headerNote = _config.headerNote;
                            $scope.tableWidth = _config.tableWidth;


                            $scope.staticHtml = "";
                            $scope.enableEditButton == 'true' ? $element.find('#edit').show() : $element.find('#edit').hide();

                            $scope.enableEditPane = _config.enableEditPane;
                            $scope.enableEditPane ? $element.find('.card-header').show() : $element.find('.card-header').hide();


                            $scope.CurrentUserFullName = rxCurrentUser.get().fullName;

                            //get unique instamce id for editor
                            $scope.editorID = _config.editorInstance.split("-").join("_");
                            $element.find(".card-footer").hide();


                            angular.element(document).ready(function () {

                                CKEDITOR.plugins.addExternal('codesnippet', '/com.vyom.vyomlib/resources/ckeditor-4.11.1/plugins/codesnippet_4.15.0/', 'plugin.js');
                                CKEDITOR.plugins.addExternal('chart', '/com.vyom.vyomlib/resources/ckeditor-4.11.1/plugins/chart_1.0.2/', 'plugin.js');
                                CKEDITOR.plugins.addExternal('tabletools', '/com.vyom.vyomlib/resources/ckeditor-4.11.1/plugins/tabletools/', 'plugin.js');
                                CKEDITOR.plugins.addExternal('table', '/com.vyom.vyomlib/resources/ckeditor-4.11.1/plugins/table/', 'plugin.js');
                                $scope.editor = CKEDITOR.inline($scope.editorID, {

                                    autoGrow_onStartup: false,
                                    resize_enabled: false,
                                    height: '500px',
                                    extraPlugins: ['image', 'find', 'sharedspace', 'base64image', 'wsc', 'imagepaste', 'codesnippet', 'chart', 'sourcedialog', 'tabletools', 'table'],
                                    startupFocus: false,
                                    disableAutoInline: true,

                                });
                                $scope.editor.on('instanceReady', function () {
                                    $scope.toggleReadOnly(true);


                                    getHTML();
                                })




                            });

                            $scope.mydata = [];





                        };

                        // Used to set default value in dialog
                        CKEDITOR.on('dialogDefinition', function (ev) {

                            try {
                                var dialogName = ev.data.name;
                                var dialogDefinition = ev.data.definition;
                                if (dialogName == 'link') {
                                    var informationTab = dialogDefinition.getContents('target');
                                    var targetField = informationTab.get('linkTargetType');
                                    targetField['default'] = '_blank';

                                }

                            } catch (exception) {

                                console.log('Error ' + ev.message);

                            }

                        });


                        // <!----------- buit in functions------------------>

                        $scope.updateHTML = function () {
                            $scope.editorData = $scope.editor.getData() == "" ? "<br>" : $scope.editor.getData();


                            if ($scope.editorData && $scope.RecordDefinition) {
                                var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);
                                objectRecord.get($scope.RecInstanceId).then(
                                    function (record) {

                                        record.setValue($scope.HTMLField, $scope.editorData);
                                        record.put();
                                        $scope.toggleReadOnly(true);

                                        rxNotificationMessage.info("Saving your data... Please click refresh icon to reload changes.");
                                        rxNotificationMessage.warning("Image or large data may take upto 5 seconds to load.");

                                    }
                                );
                            }
                        };

                        function getHTML() {
                            var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);
                            objectRecord.get($scope.RecInstanceId).then(
                                function (record) {
                                    $scope.staticHtml = $sce.trustAsHtml(record.getValue($scope.HTMLField));
                                    $scope.editor.setData(record.getValue($scope.HTMLField));
                                    angular.element(document).ready(function () {
                                        angular.element('#CustomBlogEditor_' + $scope.editorID).find('table').addClass($scope.tableWidth);
                                    })
                                }
                            );

                        }

                        $scope.onRefresh = function () {


                            rxRecordInstanceResource.withName($scope.RecordDefinition).get($scope.RecInstanceId).then(
                                function (record) {
                                    $scope.staticHtml = $sce.trustAsHtml(record.getValue($scope.HTMLField));
                                    $scope.editor.setData(record.getValue($scope.HTMLField));
                                    rxNotificationMessage.info("Refresh Complete");
                                    $scope.toggleReadOnly(true);
                                }
                            );


                        }

                        $scope.toggleReadOnly = function (isReadOnly) {

                            if (isReadOnly) {
                                $scope.editor.setReadOnly(isReadOnly);
                                $element.find("#" + $scope.editorID).hide();
                                $element.find('#CustomBlogEditor_' + $scope.editorID).show();
                                $element.find(".card-footer").hide();
                            } else {
                                $element.find('#CustomBlogEditor_' + $scope.editorID).hide();
                                $element.find("#" + $scope.editorID).show();
                                $scope.editor.setReadOnly(isReadOnly);
                                $element.find(".card-footer").show();
                            }



                        }



                        function refreshCustomBlog(params) {

                            $scope.onRefresh();
                        }

                        // Overriding the view component refresh method to use our own
                        // to refresh the custom blog.
                        $scope.rxConfiguration.api = {
                            refresh: refreshCustomBlog.bind(null, true)
                        };

                        eventManager.propertyChanged({
                            property: 'api',
                            newValue: $scope.rxConfiguration.api
                        });

                        $scope.$watch("rxConfiguration.propertiesByName.RecInstanceId", function (RecInstanceId) {
                            $scope.RecInstanceId = RecInstanceId;
                        });

                        $scope.$watch("rxConfiguration.propertiesByName.enableEditButton", function (flag) {
                            flag == 'true' ? $element.find('#edit').show() : $element.find('#edit').hide();
                        });

                        init();


                    }

                };
            });
})();
