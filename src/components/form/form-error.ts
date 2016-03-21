export class RioFormError {

  static selector = 'rioFormError';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <div class="bold black" ng-transclude>
      </div>
    `
  };
}
