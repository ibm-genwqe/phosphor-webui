/**
 * A module for the login
 *
 * @module app/login/index
 * @exports app/login/index
 * @version 0.0.1
 */

window.angular && (function (angular) {
    'use strict';

    angular
        .module('app.login', [
            'ngRoute',
            'app.constants',
            'app.common.services'
        ])
        // Route configuration
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/login/:fake_login', {
                    'template': require('./controllers/login-controller.html'),
                    'controller': 'LoginController',
                    authenticated: false
                })
                .when('/login', {
                    'template': require('./controllers/login-controller.html'),
                    'controller': 'LoginController',
                    authenticated: false
                });
        }]);

})(window.angular);
