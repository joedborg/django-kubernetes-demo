var guestbookApp = angular.module('guestbook', ['ui.bootstrap']);


/**
 * Constructor
 */
function GuestbookController() {
}

GuestbookController.prototype.onSubmit = function () {
    this.scope_.messages.push({text: this.scope_.msg});
    this.http_.post('messages/', this.scope_.msg,
        function success() {
            console.log("updated!");
        });
    console.log(this.scope_.messages);
    this.scope_.msg = "";
};

guestbookApp.controller('GuestbookCtrl', function ($scope, $http, $location) {
    $scope.controller = new GuestbookController();
    $scope.controller.scope_ = $scope;
    $scope.controller.location_ = $location;
    $scope.controller.http_ = $http;
    $scope.messages = [];
    $scope.controller.http_.get("messages/")
        .success(function (data) {
            $scope.messages = _.pluck(data, 'fields');
            console.log($scope.messages);
        });
});
