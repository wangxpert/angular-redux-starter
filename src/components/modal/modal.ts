import './modal.css';

export class RioModal {

  static selector = 'rioModal';

  static options: ng.IComponentOptions = {
    transclude: true,
    template: `
      <div class="fixed top-0 bottom-0 left-0 right-0 z1 bg-darken-3">
        <ng-transclude></ng-transclude>
      </div>
    `
  };
}
