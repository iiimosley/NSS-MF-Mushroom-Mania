'use strict';

angular.module("mushroomMania")
.controller("MushroomCtrl", function ($scope, MushroomFactory) {

    MushroomFactory.getMushrooms()
        .then((mushroomData) => {
            $scope.mushrooms = mushroomData;
            console.log("$scope shrooms?", $scope.mushrooms);
        });

});