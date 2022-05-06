(function () {
	'use strict';
	angular.module('com.vyom.vyomlib.view-components.dynamic-category')
		.directive('comVyomVyomlibDynamicCategory',

			function (rxRecordInstanceDataPageResource, rxNotificationMessage, rxViewComponentEventManager, $timeout, rxString, $document) {
				return {
					restrict: 'E',
					templateUrl: 'scripts/view-components/dynamic-category/com-vyom-vyomlib-dynamic-category.directive.html',

					scope: {
						rxConfiguration: '='
					},

					link: function ($scope) {
						var _config,
							eventManager = rxViewComponentEventManager.getInstance($scope);

						var init = function () {
							_config = $scope.rxConfiguration.propertiesByName;

							$scope.recordDefinitionName = _config.recordDefinitionName;
							$scope.CategoryData = [];
							$scope.CategoryField = _config.CategoryField;
							$scope.CategoryColor = _config.CategoryColor;
							$scope.actionguid = _config.actionguid;
							$scope.cardHeight = _config.cardHeight;
							$scope.navHeight = _config.navHeight;

							$scope.getData();
						};

						//Calling the javascript code that fetches data.
						$scope.getData = function () {

							var queryParams = {
								propertySelection: $scope.CategoryField
							};

							var foo = rxRecordInstanceDataPageResource.withName($scope.recordDefinitionName);
							foo.get(100, 0, queryParams).then(
								function (allRecords) {
									$scope.textData = allRecords.data;
									console.log($scope.textData);
								}
							);
						}

						$scope.setSelectedCategory = function (category) {
							// trigger the change property event
							eventManager.propertyChanged({
								property: 'selectedCategory', // name of the property that changed
								newValue: category
							});
						}

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
