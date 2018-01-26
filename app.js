'use strict';

angular.module("mushroomMania", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
            .when("/", {
                templateUrl: "partials/searchMushrooms.html",
                controller: "MushroomCtrl"
            })
            .otherwise("/")
    });