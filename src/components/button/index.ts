export class RioButton {

  static selector = 'rioButton';

  static options: ng.IComponentOptions = {
    transclude: true,
    controllerAs: 'ctrl',
    bindings: {
      classStyles: '@',
      onClick: '&'
    },
    controller: RioButton,
    template: `
      <button
        ng-transclude
        ng-click='ctrl.onClick()'
        class='btn btn-primary {{ ctrl.classStyles }}'
        ng-style="ctrl.buttonStyles"
      >
      </button>
    `
  };
}
