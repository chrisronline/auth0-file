(function() {
	'use strict';

	angular.module('test', ['auth0'])
		.config(function(authProvider) {
			authProvider.init({
	      domain: 'barnstormingapps.auth0.com',
	      clientID: 'Iaf0VktNKSUjztkr34F9FaeqB1f2Xzv0',
	      loginState: 'login'
	    });
		})
		.controller('testCtrl', function($scope, auth) {
			$scope.test = function() {
				auth.signin(
					function(err) {
						if (err) {
							console.warn('Error', arguments);
						} else {
							console.log('Success', arguments);
						}
					},
					function() {
						console.warn('Error', arguments);
					}
				);
			};
		});
})();