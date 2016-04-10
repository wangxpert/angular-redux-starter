export class RioNavigatorItem {

  static selector = 'rioNavigatorItem';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <div class="mx1" ng-transclude>
      </div>
    `
  };
}
