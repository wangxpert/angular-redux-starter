export class RioLabel {

  static selector = 'rioLabel';

  static options: ng.IComponentOptions = {
    bindings: {
      qaid: '@'
    },
    controller: RioLabel,
    controllerAs: 'labelCtrl',
    transclude: true,
    template: `
      <label ng-attr-id="{{labelCtrl.qaid}}"
        ng-transclude>
      </label>
    `
  };
}
