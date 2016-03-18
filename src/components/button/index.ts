export class RioButton {

  static selector = 'rioButton';

  static options: ng.IComponentOptions = {
    transclude: true,
    controllerAs: 'buttonCtrl',
    bindings: {
      type: '@',
      classStyles: '@',
      onClick: '&'
    },
    controller: RioButton,
    template: `
      <button
        type="{{buttonCtrl.type || 'button'}}"
        ng-transclude
        ng-click='buttonCtrl.onClick()'
        class='btn btn-primary {{ buttonCtrl.classStyles }}'
        ng-style="buttonCtrl.buttonStyles"
      >
      </button>
    `
  };
}
