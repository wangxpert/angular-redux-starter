export class RioCounter {

  static selector = 'rioCounter';

  static options: ng.IComponentOptions = {
    bindings: {
      increment: '&',
      decrement: '&',
      value: '<'
    },
    controller: RioCounter,
    controllerAs: 'counterCtrl',
    template: `
      <div class="flex">
        <rio-button
          class="flex items-center"
          on-click="counterCtrl.decrement()"
          class-styles=" bg-black">
          -
          </rio-button>
        <div class="flex-auto center h1">{{ counterCtrl.value }}</div>
        <rio-button
          class="flex items-center"
          on-click="counterCtrl.increment()">
          +
        </rio-button>
      </div>
    `
  };
}
