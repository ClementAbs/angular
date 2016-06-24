var app = angular.module("Monapplication", ["ngRoute"]);


appp.config(function($routeProvider){

$routeProvider.when('/', {
	templateurl: '/app/views/accueil.html',
	controller: 'accueilController'

}) when('auteurs', {
	templateUrl: "app/views/auteurs.html",
	controller: 'auteursController'
})	when('auteur', {
	templateUrl: "app/views/auteur.html",
	controller: 'auteurController'
})




})