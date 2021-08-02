(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.user-rating')
        .config(function (rxViewComponentProvider) {
            var starRatingClickDescriptor = {
                name: 'User Rating',
                group: 'vyomlib',
                icon: 'user_star',
                type: 'com-vyom-vyomlib-user-rating', // the name of runtime directive
                designType: 'com-vyom-vyomlib-user-rating-design', // register design directive
                designManagerService: 'comVyomVyomlibUserRatingDesign',
                bundleId: 'com.vyom.vyomlib',
                canBeEmbeddedInRecordEditor: true,

                // define component properties
                propertiesByName: [
                    {
                        name: 'mappingStarValue',
                        isConfig: true,
                        isRequired: true,
                        enableExpressionEvaluation: true
                    },
                    {
                        name: 'maxAmountOfStars',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: "5"
                    },
                    {
                        name: 'defaultValueStars',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: "2"
                    },
                    {
                        name: 'colorStarsSelected',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: '#ff9805'
                    },
                    {
                        name: 'colorStarsNotSelected',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: '#000000'
                    },
                    {
                        name: 'cssClasses',
                        isConfig: true,

                    },
                    {
                        name: 'readOnly',
                        isConfig: true,

                    },

                    {
                        name: 'selectedStarValue',
                        isProperty: true //Output parameter
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingClickDescriptor);
        });
})();
