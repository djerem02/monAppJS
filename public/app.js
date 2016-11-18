angular.module('team', []).controller('TeamizerController', function($scope, $http) {
    $scope.team = '';
    $scope.error = null;
    $scope.teamCount = '1';
    $scope.createdTeams = [];


    $scope.removeTeam = function(index) {
        if($scope.players[index]) $scope.players.splice(index, 1);
    };

    $scope.playerPresent = function() {
        if(!$scope.team) return true;
        else if($scope.players.indexOf($scope.player) == -1) return false;
        else return true;
    };

    $scope.getTeam = function() {
        $http({
            url: '/listTeams',
            method: "GET",
            data: {'team': $scope.teamCount}
        })
            .then(function(response) {
                    $scope.createdTeams = response.data;
                },
                function(response) { // optional
                    $scope.error = 'La requête a échouée';
                });
    };
});