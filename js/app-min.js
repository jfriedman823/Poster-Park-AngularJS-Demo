"use strict";angular.module("myApp",[]).controller("lyricController",function(t,e){function n(){e.get("https://www.omdbapi.com/?apikey=9f68b70&s&y=&plot=short&t="+t.search+"&tomatoes=true&plot=full").then(function(e){t.details=e.data})}t.$watch("search",function(){n()}),t.search="Californication",t.update=function(e){t.search=e.Title},t.select=function(){this.setSelectionRange(0,this.value.length)}});