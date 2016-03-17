export class RioFormGroup {

  static selector = 'rioFormGroup';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <div class="p2" ng-transclude>
      </div>
    `
  };
}
