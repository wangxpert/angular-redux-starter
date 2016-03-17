export class RioApp {

  static selector = 'rioRoot';

  static options: ng.IComponentOptions = {
    transclude: true,
    controller: RioApp,
    template: `
      <div class="col-12">
        <rio-navigator>
          <div class="flex flex-auto">
            <rio-navigator-item class="p1">
              <rio-logo></rio-logo>
            </rio-navigator-item>
            <rio-navigator-item class="p1">
              <a ui-sref="counter" class="text-decoration-none">Counter</a>
            </rio-navigator-item>
            <rio-navigator-item class="p1">
              <a ui-sref="about" class="text-decoration-none">About</a>
            </rio-navigator-item>
          </div>
        </rio-navigator>
        <div class="mt3 p1" ui-view></div>
      </div>
    `
  };
}
