export class RioFormGroup {

  static selector = 'rioFormGroup';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <div class="py2">
        <ng-transclude></ng-transclude>
      </div>
    `
  };
}
