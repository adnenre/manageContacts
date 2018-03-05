var monApp = angular.module('monApp',['ngAnimate','ngRoute','ngResource']);


/*==============================
=            router            =
==============================*/

monApp.config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl : "./pages/allcontact.html",
        controller: 'mainController'
    })
      .when("/contact", {
        templateUrl : "./pages/contact.html",
        controller: 'contactController'
    })
    .when("/contact/:id", {
        templateUrl : "./pages/contact.html",
        controller: 'contactController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
/*=====  End of router  ======*/

/*=============================================
=            Section services            =
=============================================*/
monApp.service('contactService',[function(){
        
        
       this.contacts_list =[
	{id:1,name:'adnen',email:"adnen.rebai@gmail.com",img:'img1.jpg',img_header:'img1.jpeg',
       social:{
       	twitter:"https://twitter.com/adnen_rebai",
       	linkedin:"https://www.linkedin.com/in/adnen-rebai-65843263/",
       	codepen:"https://codepen.io/adnenrebai",
       	github:"http://adnenre.github.io"
       }},
	{id:2,name:'alex',email:"alex@email.com",img:'img2.jpg',img_header:'img2.jpeg',
       social:{
       	twitter:"",
       	linkedin:"",
       	codepen:"",
       	github:""
       }},
	{id:3,name:'Jhon',email:"Jhon@email.com",img:'img3.jpg',img_header:'img3.jpeg',
       social:{
       	twitter:"",
       	linkedin:"",
       	codepen:"",
       	github:""
       }},
	{id:4,name:'cristine',email:"cristine@email.com",img:'img4.jpg',img_header:'img4.jpeg',
       social:{
       	twitter:"",
       	linkedin:"",
       	codepen:"",
       	github:""
       }},
	{id:5,name:'emline',email:"emline@email.com",img:'img5.jpg',img_header:'img5.jpeg',
       social:{
       	twitter:"",
       	linkedin:"",
       	codepen:"",
       	github:""
       }},
	{id:6,name:'nikola',email:"nikola@email.com",img:'img6.jpg',img_header:'img6.jpeg',
       social:{
       	twitter:"",
       	linkedin:"",
       	codepen:"",
       	github:""
       }},
	{id:7,name:'christophe',email:"christophe@email.com",img:'img7.jpg',img_header:'img7.jpeg',
       social:{
       	twitter:"",
       	linkedin:"",
       	codepen:"",
       	github:""
       }},
	{id:8,name:'daniel',email:"daniel@email.com",img:'img8.jpg',img_header:'img8.jpg',
       social:{
       	twitter:"",
       	linkedin:"",
       	codepen:"",
       	github:""
       }},
	{id:9,name:'Jhonson',email:"Jhonson@email.com",img:'img9.jpg',img_header:'img9.jpg',
       social:{
       	twitter:"",
       	linkedin:"",
       	codepen:"",
       	github:""
       }},
	{id:10,name:'karin',email:"karin@email.com",img:'img10.jpg',img_header:'img10.jpeg',
       social:{
       	twitter:"",
       	linkedin:"",
       	codepen:"",
       	github:""
       }},
	]; 
			
		
		      
		   
	   
 
       
}]);


/*=====  End of Section services  ======*/

monApp.controller('mainController',['$scope','contactService','$location',function($scope,contactService,$location){
	    
	   $scope.contacts=contactService.contacts_list; 
       $scope.showDetail = function(id){
          return $location.path('contact/'+id);
       }

}])
monApp.controller('contactController',['$scope','$routeParams','contactService',function($scope,$routeParams,contactService){
      
      $scope.id_contact=$routeParams.id || 1;
      var allContact = contactService.contacts_list;
      $scope.getContact = function(id){
      	return allContact[id-1];
      }
      
      
}])


monApp.controller('displayContact',function($scope){

   $scope.class= "contact_galery";
   $scope.set_as_list=function(){
   		$scope.class = "contact_list";
   	};
   	 $scope.set_as_gallery=function(){
   		$scope.class = "contact_galery";
   	};
   


});
/*======================================
=            filter contact            =
======================================*/

monApp.filter('searchForContact', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(contact){

			if(contact.name.toLowerCase().indexOf(searchString) !== -1){
				result.push(contact);
			}

		});

		return result;
	};

});


/*=====  End of filter contact  ======*/
