export class RioCounter {

  static selector = 'rioCounter';

  static options: ng.IComponentOptions = {
    bindings: {
      value: '<',
      increment: '&',
      decrement: '&'
    },
    controller: RioCounter,
    controllerAs: 'counterCtrl',
    template: `
      <div class="flex">
        <rio-button
          class-name="bg-black col-2"
          on-click="counterCtrl.decrement()">
          -
        </rio-button>

        <div class="flex-auto flex-center center h1">
          {{ counterCtrl.value }}
        </div>

        <rio-button
          class-name="col-2"
          on-click="counterCtrl.increment()">
          +
        </rio-button>
      </div>
    `
  };
}
