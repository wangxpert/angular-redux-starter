export class RioNavigator {

  static selector = 'rioNavigator';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <nav
        ng-transclude
        class="flex items-center p1 bg-white border-bottom">
      </nav>
    `
  };
}
