'use strict';

angular.module('myApp', [])
  .controller('lyricController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Ready Player One";

    function fetch(){

      // $http.jsonp("http://api.musixmatch.com/ws/1.1/track.search?q_track=" + $scope.search + "&page_size=1&page=1&s_track_rating=desc&apikey=17bd89d77738e1502ebc01e8eee8e029?callback=JSON_CALLBACK")
      // .then(function(response){ $scope.details = response.data; });

      $http.get("https://www.omdbapi.com/?apikey=655db6dd&s&y=&plot=short&t=" + $scope.search + "&tomatoes=true&plot=full")
      .then(function(response){ $scope.movieData = response.data; });

    }
  });
