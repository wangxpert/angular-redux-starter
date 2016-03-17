export class RioFormLabel {

  static selector = 'rioFormLabel';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <label ng-transclude>
      </label>
    `
  };
}
