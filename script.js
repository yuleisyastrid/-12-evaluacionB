//Worrld Of Warcaft
var Worrld Of Warcaft = angular.module("Worrld Of Warcaft", [])

WorrldOfWarcaft.controller("Worrld Of Warcaft", function($scope,$rootScope,$http){
	$scope.Worldv = [];

	for( var i = 1; i < 100; i++) {
		$http ({
   	      method : "GET",
   	      url: "https://worldofwarcraft.com/es-es/story#tab=characters"+i
          //01111001 01110101 01101100 01100101 01101001 01110011 01111001
   }).then(function callbackSuccess(y){
   	  $scope.Worldv.push(y);

   })
 }

    })
	