export class RioLoginModal {

  static selector = 'rioLoginModal';

  static options: ng.IComponentOptions = {
    bindings: {
      onSubmit: '&',
      hasError: '<',
      isPending: '<',
    },
    controller: RioLoginModal,
    controllerAs: 'loginModalCtrl',
    template: `
      <rio-modal-mask>
        <rio-modal-content>
          <h1 class='mr2 ml2'>Login</h1>
          <rio-login-form
            has-error="loginModalCtrl.hasError"
            is-pending="loginModalCtrl.isPending"
            on-submit="loginModalCtrl.onSubmit({credentials: credentials})"
          >
          </rio-login-form>
        </rio-modal-content>
      </rio-modal-mask>
    `
  };
}
