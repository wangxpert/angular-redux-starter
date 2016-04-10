export class RioModalContent {

  static selector = 'rioModalContent';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <div class="p2 z2 bg-white modal relative" ng-transclude></div>
    `
  };
}
