(function () {
  'use strict';
  angular.module('com.vyom.vyomlib.view-components.generic-card-widget')
    .directive('comVyomVyomlibGenericCardWidget',

      function (rxRecordInstanceAttachmentResource, rxRecordInstanceDataPageResource, rxViewComponentEventManager, rxRecordInstanceResource, $window, $timeout, rxString, $document, rxNotificationMessage) {
        return {
          restrict: 'E',
          templateUrl: 'scripts/view-components/generic-card-widget/com-vyom-vyomlib-generic-card-widget.directive.html',

          scope: {
            rxConfiguration: '='
          },

          link: function ($scope) {
            var _config,
              eventManager = rxViewComponentEventManager.getInstance($scope);
            var init = function () {
              _config = $scope.rxConfiguration.propertiesByName;

              $scope.cfg = {};
              $scope.cfg.recordDefinition = _config.recordDefinition;
              // $scope.recordInstanceId1 = _config.recordInstanceId1;

              $scope.actionguid = _config.actionguid;

              $scope.count = _config.count;

              $scope.Color = _config.Color;

              $scope.note = _config.note;

              $scope.header = _config.header;

              $scope.perRowCardLength = _config.perRowCardLength ? _config.perRowCardLength : "col-lg-4 col-md-4 col-sm-4";

              $scope.pictureData = [];


              getData();
            };

            //Calling the javascript code that fetches data.
            function getData() {

              var queryParams = {
                propertySelection: "1,2,3,4,5,6,7,8,179," + $scope.count + "," + $scope.header + "," + $scope.note
              };

              var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinition);
              foo.get(100, 0, queryParams).then(
                function (allRecords) {
                  $scope.textData = allRecords.data;
                }
              );
            }

            $scope.fetchPicture = function (instanceId) {
              console.log("fetch picture called: " + instanceId);
              console.log($scope.pictureData);
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

                        // $scope.pictureData = urlCreator.createObjectURL(file);

                        $scope.pictureData[instanceId] = urlCreator.createObjectURL(file);

                        console.log("$scope.pictureData");
                        console.log($scope.pictureData);
                      } else {
                        $scope.pictureData = [];
                      }
                    }
                  });
              }
            };

            // <!----------- buit in functions------------------>
            $scope.setSelectedCardInstanceId = function (recInstanceID) {
              // trigger the change property event

              eventManager.propertyChanged({
                property: 'CardInstanceId', // name of the property that changed
                newValue: recInstanceID
              });


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
