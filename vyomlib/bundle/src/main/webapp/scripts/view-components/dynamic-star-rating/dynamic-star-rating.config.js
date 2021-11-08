(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dynamic-star-rating')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Dynamic Star Ratings',
                group: 'vyomlib',
                icon: 'star',
                type: 'com-vyom-vyomlib-dynamic-star-rating', // the name of runtime directive
                designType: 'com-vyom-vyomlib-dynamic-star-rating-design', // register design directive
                designManagerService: 'comVyomVyomlibDynamicStarRatingDesign',
                bundleId: 'com.vyom.vyomlib',
                canBeEmbeddedInRecordEditor: true,
                // define component properties
                propertiesByName: [{
                    name: 'recordDefinitionName',
                    isConfig: true,
                    isRequired: true
                }, {
                    name: 'ratingName',
                    isConfig: true,
                    isRequired: true,
                    enableExpressionEvaluation: true //  the property will be automatically evaluated at runtime and passed to the runtime directive
                }, {
                    name: 'fieldId',
                    isConfig: true,
                    isRequired: true
                }, {
                    name: 'stars',
                    isConfig: true,
                    isProperty: true, // property will be available for building expressions
                    isRequired: true,
                    defaultValue: '5'
                }, {
                    name: 'size',
                    isConfig: true,
                    defaultValue: 'fa-3x'
                }, {
                    name: 'font',
                    isConfig: true,
                    defaultValue: '18'
                }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();