(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.comment-box')
        .directive('comVyomVyomlibCommentBox',

            function (rxRecordInstanceDataPageResource, rxRecordInstanceResource, rxRecordInstanceAttachmentResource, rxCurrentUser, COM_VYOM_VYOMLIB_COMMENT_BOX) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/comment-box/com-vyom-vyomlib-comment-box.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope, $element) {
                        var _config;

                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;

                            $scope.recordDefinitionFullName = _config.recordDefinitionFullName;
                            $scope.CommentField = _config.CommentField;

                            $scope.ApplicationName = _config.CommentInstanceId ? _config.CommentInstanceId : _config.ApplicationName;
                            $scope.ApplicationNameField = _config.ApplicationNameField;


                            $scope.personRecord = "com.bmc.arsys.rx.foundation:Person";
                            $scope.personImageField = "304411861";
                            $scope.defaultImage = "/com.vyom.vyomlib/resources/commentBox/defaultFace.png";
                            $scope.personData = []; //DPQ
                            $scope.usersArray = []; //CDPQ
                            $scope.getCurrentUserImage();
                            $scope.afterEncodingImage = "";
                            $scope.CurrentUserFullName = rxCurrentUser.get().fullName;
                            $scope.CurrentUserLoginName = rxCurrentUser.get().loginName;
                            $scope.CurrentUserGuid = rxCurrentUser.get().personInstanceId;




                            $scope.getComments();
                            $scope.commentsArray = [];




                            $(function () {
                                var saveComment = function (data) {

                                    // Convert pings to human readable format
                                    $(Object.keys(data.pings)).each(function (index, userId) {
                                        var fullname = data.pings[userId];
                                        var pingText = '@' + fullname;
                                        data.content = data.content.replace(new RegExp('@' + userId, 'g'), pingText);
                                    });

                                    return data;
                                }
                                $('#comments-container').comments({
                                    profilePictureURL: $scope.defaultImage,
                                    currentUserId: $scope.CurrentUserGuid,
                                    roundProfilePictures: true,
                                    textareaRows: 1,
                                    enableAttachments: false,
                                    enableHashtags: true,
                                    enablePinging: true,
                                    scrollContainer: $(window),
                                    searchUsers: function (term, success, error) {
                                        setTimeout(function () {
                                            success($scope.usersArray.filter(function (user) {
                                                var containsSearchTerm = user.fullname.toLowerCase().indexOf(term.toLowerCase()) != -1;
                                                var isNotSelf = user.id != 1;
                                                return containsSearchTerm && isNotSelf;
                                            }));
                                        }, 500);
                                    },
                                    getComments: function (success, error) {

                                        setTimeout(function () {
                                            console.log($scope.commentsArray);
                                            success($scope.commentsArray);

                                        }, 6000);
                                    },
                                    postComment: function (data, success, error) {
                                        setTimeout(function () {
                                            data.fullname = $scope.CurrentUserFullName;
                                            success(saveComment(data));
                                            $scope.commentsArray.push(data);
                                            $scope.updateComments($scope.commentsArray);

                                            console.log(data);
                                        }, 500);
                                    },
                                    putComment: function (data, success, error) {
                                        setTimeout(function () {
                                            var currentCommentObj = _.find($scope.commentsArray, {
                                                id: data.id
                                            });
                                            var requiredKeys = _.pick(currentCommentObj, 'upvote_count', 'user_has_upvoted', 'users');
                                            var updatedComment = _.defaults(requiredKeys, data);
                                            console.log(updatedComment);
                                            for (var i in $scope.commentsArray) {
                                                if ($scope.commentsArray[i].id == data.id) {
                                                    $scope.commentsArray[i] = updatedComment;
                                                }
                                            }

                                            success(saveComment(data));

                                            $scope.updateComments($scope.commentsArray);
                                        }, 500);
                                    },
                                    deleteComment: function (data, success, error) {
                                        setTimeout(function () {
                                            success();
                                        }, 500);
                                    },
                                    upvoteComment: function (data, success, error) {
                                        setTimeout(function () {
                                            console.log(data);
                                            for (var i in $scope.commentsArray) {
                                                if ($scope.commentsArray[i].id == data.id) {
                                                    var previousUsers = $scope.commentsArray[i].users;
                                                    $scope.commentsArray[i] = data;
                                                    $scope.commentsArray[i]['users'] = previousUsers ? previousUsers : [];
                                                    if (_.find($scope.commentsArray[i].users, {
                                                            fullname: $scope.CurrentUserFullName
                                                        })) {

                                                        var existingUser = _.find($scope.commentsArray[i].users, {
                                                            fullname: $scope.CurrentUserFullName
                                                        });

                                                        existingUser.user_has_upvoted = data.user_has_upvoted;


                                                    } else {
                                                        $scope.commentsArray[i]['users'].push({
                                                            fullname: $scope.CurrentUserFullName,
                                                            user_has_upvoted: data.user_has_upvoted
                                                        });
                                                    }

                                                    console.log($scope.commentsArray);
                                                    $scope.updateComments($scope.commentsArray);
                                                }
                                            }


                                            success(data);
                                        }, 500);
                                    },
                                    validateAttachments: function (attachments, callback) {
                                        setTimeout(function () {
                                            callback(attachments);
                                        }, 500);
                                    },
                                });
                            });







                        };



                        $scope.getComments = function () {


                            var objectRecord = rxRecordInstanceResource.withName($scope.recordDefinitionFullName);
                            objectRecord.get($scope.ApplicationName).then(
                                function (record) {
                                    $scope.commentsArray = JSON.parse(record.getValue($scope.CommentField) ? record.getValue($scope.CommentField) : []);

                                    for (var i in $scope.commentsArray) {
                                        $scope.commentsArray[i].upvote_count = _.size(_.where($scope.commentsArray[i].users, {
                                            user_has_upvoted: true

                                        }));

                                        var getuserhasupvoted = _.find($scope.commentsArray[i].users, {
                                            fullname: $scope.CurrentUserFullName
                                        });
                                        $scope.commentsArray[i].user_has_upvoted = getuserhasupvoted ? getuserhasupvoted.user_has_upvoted : false;



                                        if ($scope.commentsArray[i].fullname != $scope.CurrentUserFullName) {
                                            $scope.commentsArray[i].created_by_current_user = false;

                                        } else {
                                            $scope.commentsArray[i].created_by_current_user = true;
                                        }


                                    }
                                }
                            );
                        }

                        $scope.updateComments = function (comment) {
                            var objectRecord = rxRecordInstanceResource.withName($scope.recordDefinitionFullName);
                            objectRecord.get($scope.ApplicationName).then(
                                function (record) {
                                    record.setValue($scope.CommentField, JSON.stringify(comment));
                                    record.put();


                                }
                            );
                        }





                        $scope.getCurrentUserImage = function () {
                            // var qualification = "'4'=$USER$";
                            var qualification = "1=1";
                            var foo = rxRecordInstanceDataPageResource.withName($scope.personRecord);
                            var queryParams = {
                                propertySelection: "1,2,3,4,5,6,7,179,1000000017,1000000048,304411861," + $scope.personImageField,
                                queryExpression: qualification

                            };

                            // fullname='1000000017',email='1000000048',personImage='304411861'
                            foo.get(100, 0, queryParams).then(
                                function (allRecords) {
                                    $scope.personData = allRecords.data; //.slice()

                                    $scope.usersArray = _.map($scope.personData, function (obj) {
                                        return _.assign({}, {
                                            id: obj[179],
                                            fullname: obj[1000000017],
                                            email: obj[1000000048],
                                            profile_picture_url: $scope.defaultImage
                                        })
                                    });

                                    //$scope.getEncodedImage();


                                }
                            );
                        }



                        $scope.getEncodedImage = function () {
                            var attachmentsResource = rxRecordInstanceAttachmentResource.withName($scope.personRecord);

                            attachmentsResource.get($scope.personData[0][179], ($scope.personImageField).toString()).then(function (fileStream) {
                                if (fileStream) {

                                    var arrayBufferView = new Uint8Array(fileStream.data);
                                    var file = new Blob([arrayBufferView], {
                                        type: fileStream.headers('content-type')
                                    });

                                    var reader = new FileReader();
                                    reader.readAsDataURL(file);
                                    reader.onloadend = function () {
                                        $scope.afterEncodingImage = reader.result;
                                        console.log($scope.afterEncodingImage);
                                    }



                                }
                            }, function (error) {
                                console.log(error);
                            });
                        }


                        init();

                    }

                };
            });
})();
