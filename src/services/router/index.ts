export class RouterConfig {

  static $inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'
  ];

  constructor(
    $stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider,
    $locationProvider: angular.ILocationProvider
  ) {
    $urlRouterProvider.otherwise('/counter');
    $locationProvider.html5Mode(false);

    $stateProvider
      .state('counter', {
        url: '/counter',
        template: '<rio-counter-page></rio-counter-page>',
      }).state('about', {
        url: '/about',
        template: '<rio-about-page></rio-about-page>',
      });
  }
};
