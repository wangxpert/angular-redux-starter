export class RioLabel {

  static selector = 'rioLabel';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <label ng-transclude>
      </label>
    `
  };
}
