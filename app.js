var app = angular.module ("MyApp", ["ngRoute"]);

app.controller ("MainController", ["$scope", "pokedexService", function($scope, pokedexService) {
	
	$scope.searchInput = "";
	$scope.pokePic = "";
	
	$scope.findPoke = function () {
		pokedexService.findPoke($scope.searchInput) 
			.then(function(pokemon) {
				$scope.pokemon = pokemon;
				$scope.searchInput = null;
				console.log($scope.pokemon);
			})
		}
	$scope.test = "hello";
	}
	
])