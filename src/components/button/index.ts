export class RioButton {

  static selector = 'rioButton';

  static options: ng.IComponentOptions = {
    transclude: true,
    controllerAs: 'buttonCtrl',
    bindings: {
      qaid: '@',
      type: '@',
      className: '@',
      onClick: '&'
    },
    controller: RioButton,
    template: `
      <button
        ng-attr-id="{{buttonCtrl.qaid}}"
        type="{{buttonCtrl.type || 'button'}}"
        ng-transclude
        ng-click="buttonCtrl.onClick()"
        class="btn btn-primary {{ buttonCtrl.className }}">
      </button>
    `
  };
}
