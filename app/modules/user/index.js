/* You'll need to import all 3 controllers and the service */
import angular from 'angular';

import config from './config';

import loginController from './controllers/login';
import profileController from './controllers/profile';
import registerController from './controllers/register';
import userService from './service';

let user = angular.module('tiy.user', []);

user.config(config);
user.controller('LoginController', loginController);
user.controller('ProfileController', profileController);
user.controller('RegisterController', registerController);
user.service('UserService', userService);

export default user;
