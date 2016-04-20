export class RioFormError {

  static selector = 'rioFormError';

  static options: ng.IComponentOptions = {
    bindings: {
      qaid: '@'
    },
    controller: RioFormError,
    controllerAs: 'errorCtrl',
    transclude: true,
    template: `
      <div
        ng-attr-id="{{errorCtrl.qaid}}"
        class="bold black" ng-transclude>
      </div>
    `
  };
}
