export class RioNavigator {

  static selector = 'rioNavigator';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <nav
        ng-transclude
        class="flex flex-stretch flex-center p1 bg-white gray border-bottom\
               fixed top-0 left-0 right-0 z3">
      </nav>
    `
  };
}
