import {loginUser, logoutUser} from '../actions/session';

export class RioApp {

  static selector = 'rioRoot';

  static options = {
    controller: RioApp,
    controllerAs: 'appCtrl',
    template: `
      <div class="col-12">
        <rio-login-modal
          on-submit="appCtrl.login(credentials)"
          has-error="appCtrl.session.get('hasError', false)"
          is-pending="appCtrl.session.get('isLoading', false)"
          ng-if="!appCtrl.isLoggedIn"
        ></rio-login-modal>
        <rio-navigator>
          <div class="flex flex-auto">

            <rio-navigator-item class="p1">
              <rio-logo></rio-logo>
            </rio-navigator-item>

            <rio-navigator-item class="p1" ng-if="appCtrl.isLoggedIn">
              <a ng-link="['Counter']" class="text-decoration-none">Counter</a>
            </rio-navigator-item>
            <rio-navigator-item class="p1" ng-if="appCtrl.isLoggedIn">
              <a ng-link="['About']" class="text-decoration-none">About</a>
            </rio-navigator-item>

          </div>
          <div class="flex flex-end"  ng-if="appCtrl.isLoggedIn">
            <rio-navigator-item class="p1 bold">
              {{
                appCtrl.session.getIn(['user', 'firstName'], '') + ' ' +
                appCtrl.session.getIn(['user', 'lastName'], '') }}
            </rio-navigator-item>
            <rio-navigator-item>
              <rio-button
                ng-click="appCtrl.logout()"
                classStyles="bg-red white"
              >
                Logout
              </rio-button>
            </rio-navigator-item>
          </div>
        </rio-navigator>
        <div class="mt3 p1" ng-show="appCtrl.isLoggedIn">
          <ng-outlet></ng-outlet>
        </div>
      </div>
    `,
    $routeConfig: [{
        path: '/counter',
        name: 'Counter',
        component: 'rioCounterPage',
        useAsDefault: true
      }, {
        path: '/about',
        name: 'About',
        component: 'rioAboutPage'
      }
    ]
  };

  static $inject = [
    '$ngRedux',
    '$scope'
  ];

  constructor($ngRedux, $scope: ng.IScope) {
    const unsubscribe = $ngRedux.connect(
      this.mapStateToThis, this.mapDispatchToThis)(this);

    $scope.$on('$destroy', unsubscribe);
  }

  mapStateToThis(state) {
    return {
      session: state.session,
      isLoggedIn: state.session.get('token', false)
    };
  }

  mapDispatchToThis(dispatch) {
    return {
      login: (credentials) => dispatch(loginUser(credentials)),
      logout: () => dispatch(logoutUser())
    };
  }
}
