'use strict';

angular.module("mushroomMania").factory("MushroomFactory", function ($q, $http) {

    let getMushrooms = () => {
        return $q((resolve, reject) => {
            $http
                .get("https://tm-nss-jan8.firebaseio.com/mushrooms.json")
                .then((mushrooms) => {
                    let allShrooms = Object.values(mushrooms.data)
                    resolve(allShrooms);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    return { getMushrooms };

});
