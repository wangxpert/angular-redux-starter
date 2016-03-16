export class RioCounter {

  static selector = 'rioCounter';

  static options: ng.IComponentOptions = {
    controllerAs: 'ctrl',
    bindings: {
      increment: '&',
      decrement: '&',
      value: '<'
    },
    controller: RioCounter,
    template: `
      <div class="flex">
        <rio-button
          class="flex items-center"
          on-click="ctrl.decrement()"
          class-styles=" bg-black">
          -
          </rio-button>
        <div class="flex-auto center h1">{{ ctrl.value }}</div>
        <rio-button
          class="flex items-center"
          on-click="ctrl.increment()">
          +
        </rio-button>
      </div>
    `
  };
}
