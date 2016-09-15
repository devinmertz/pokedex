var app = angular.module("MyApp");

app.service("pokedexService", function ($http) {

var _this = this;
	
	
	this.findPoke = function (searchInput) {
		return $http.get("http://pokeapi.co/api/v1/pokemon/" + searchInput)
			.then(function (response) {
				_this.pokemon = response.data;

				var picUrl = "http://pokeapi.co/" + response.data.sprites[0].resource_uri;
				return picUrl;
			})
			.then(function (picUrl) {
				return $http.get(picUrl)
			})
			.then(function (response) {
				_this.pokePic = response.data;
				return _this.pokemon;
			})
	}






})