export class RioNavigatorItem {

  static selector = 'rioNavigatorItem';

  static options: ng.IComponentOptions = {
    transclude: true,
    controller: RioNavigatorItem,
    template: `
      <ng-transclude></ng-translucde>
    `
  };
}
