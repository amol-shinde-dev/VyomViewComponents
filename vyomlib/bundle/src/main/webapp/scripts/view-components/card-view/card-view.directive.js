(function () {
  'use strict';
  angular.module('com.vyom.vyomlib.view-components.card-view')
    .directive('comVyomVyomlibCardView',

      function (rxRecordInstanceAttachmentResource, rxRecordInstanceDataPageResource, rxRecordInstanceResource, $window, rxViewComponentEventManager, rxCurrentUser, $timeout, rxString, $document, rxNotificationMessage, $sce) {
        return {
          restrict: 'E',
          templateUrl: 'scripts/view-components/card-view/com-vyom-vyomlib-card-view.directive.html',

          scope: {
            rxConfiguration: '='
          },

          link: function ($scope) {
            var _config;

            var init = function () {
              _config = $scope.rxConfiguration.propertiesByName;
              // $scope.recordDefinition = _config.recordDefinition;
              // $scope.fieldId = _config.fieldId;
              $scope.recordInstanceId1 = _config.recordInstanceId1;
              $scope.recordInstanceId2 = _config.recordInstanceId2;
              $scope.recordInstanceId3 = _config.recordInstanceId3;
              $scope.count1 = _config.count1;
              $scope.count2 = _config.count2;
              $scope.count3 = _config.count3;
              $scope.actionguid1 = _config.actionguid1;
              $scope.actionguid2 = _config.actionguid2;
              $scope.actionguid3 = _config.actionguid3;
              $scope.innerBlockWidth = _config.innerBlockWidth;
              $scope.note1 = _config.note1;
              $scope.note2 = _config.note2;
              $scope.note3 = _config.note3;
              $scope.Color1 = _config.Color1;
              $scope.Color2 = _config.Color2;
              $scope.Color3 = _config.Color3;
              $scope.header1 = _config.header1;
              $scope.header2 = _config.header2;
              $scope.header3 = _config.header3;

              $scope.tooltip1 = _config.tooltip1,
                $scope.tooltip2 = _config.tooltip2,
                $scope.tooltip3 = _config.tooltip3,

                $scope.pictureData1 = '';
              $scope.pictureData2 = '';
              $scope.pictureData3 = '';
              $scope.innerBlockWidthstyle = _config.innerBlockWidth + "px";

              var fetchPicture = function (instanceId, imageNumber) {
                var _configuration = $scope.rxConfiguration.propertiesByName;


                if (_configuration.recordDefinition && instanceId && _configuration.fieldId) {
                  var attachmentsResource = rxRecordInstanceAttachmentResource.withName(_configuration.recordDefinition);

                  attachmentsResource.get(instanceId, (_configuration.fieldId).toString())
                    .then(function (attachmentContent) {
                      // Creating an image object, reference:
                      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
                      if (attachmentContent) {
                        if (attachmentContent.headers('content-type') && attachmentContent.headers('content-type').split('/')[0].toLowerCase() === 'image') {
                          var arrayBufferView = new Uint8Array(attachmentContent.data),
                            urlCreator = window.URL || window.webkitURL;

                          var file = new Blob([arrayBufferView], {
                            type: attachmentContent.headers('content-type')
                          });

                          $scope.pictureData = urlCreator.createObjectURL(file);
                          if (imageNumber == "first") {

                            console.log("first Id" + instanceId);
                            $scope.pictureData1 = urlCreator.createObjectURL(file);
                            console.log("Picture data 1" + $scope.pictureData1);
                          } else if (imageNumber == "second") {

                            console.log("Second Id" + instanceId);
                            $scope.pictureData2 = urlCreator.createObjectURL(file);
                            console.log("Picture data 2" + $scope.pictureData2);
                          } else if (imageNumber == "third") {

                            console.log("Third Id" + instanceId);
                            $scope.pictureData3 = urlCreator.createObjectURL(file);
                            console.log("Picture data 3" + $scope.pictureData3);
                          }
                        } else {
                          $scope.pictureData1 = '';
                          $scope.pictureData2 = '';
                          $scope.pictureData3 = '';
                        }
                      }
                    });
                }
              };
              console.log("id 1:" + $scope.recordInstanceId1);
              $scope.$watch('rxConfiguration.propertiesByName.recordInstanceId1', fetchPicture($scope.recordInstanceId1, "first"));
              $scope.$watch('rxConfiguration.propertiesByName.recordInstanceId2', fetchPicture($scope.recordInstanceId2, "second"));
              $scope.$watch('rxConfiguration.propertiesByName.recordInstanceId3', fetchPicture($scope.recordInstanceId3, "third"));
            };

            // <!----------- buit in functions------------------>

            $scope.callAction = function (actionname) {
              if (actionname == "Saction") {
                $scope.executeAction($scope.actionguid1);

              } else if (actionname == "Iaction") {
                $scope.executeAction($scope.actionguid2);

              } else if (actionname == "Caction") {
                $scope.executeAction($scope.actionguid3);
              }
            }
            //redirect to differnt url
            $scope.redirecturl = function (redurl) {
              // $window.location.href=redurl;
              $window.open(redurl, '_blank');
            };

            $scope.executeAction = function (guid) {

              $timeout(function () {
                var button;

                // We are looking for the rx-action-button with the given Guid and then the button embedded inside of it.
                var buttonGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', guid);

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
