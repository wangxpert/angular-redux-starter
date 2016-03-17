export class RioForm {

  static selector = 'rioForm';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <form ng-transclude>
      </form>
    `
  };
}
