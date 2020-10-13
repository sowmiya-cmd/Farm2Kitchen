'use strict';

var storeApp = angular.module('AngularStore', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'partials/store.html',
        controller: storeController 
      }).
      when('/products/:productSku', {
        templateUrl: 'partials/product.html',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'partials/shoppingCart.html',
        controller: storeController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);


storeApp.factory("DataService", function () {

  
    var myStore = new store();

   
    var myCart = new shoppingCart("AngularStore");

    
    myCart.addCheckoutParameters("PayPal", "paypaluser@youremail.com");

   
    myCart.addCheckoutParameters("Google", "xxxxxxx",
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        }
    );

  
    myCart.addCheckoutParameters("Stripe", "pk_test_xxxx",
        {
            chargeurl: "https://localhost:1234/processStripe.aspx"
        }
    );

   
    return {
        store: myStore,
        cart: myCart
    };
});
