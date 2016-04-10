export class RioAlert {

  static selector = 'rioAlert';

  static options: ng.IComponentOptions = {
    transclude: true,
    bindings: {
      'status': '@'
    },
    controller: RioAlert,
    controllerAs: 'alertCtrl',
    template: `
      <div class="p2 bold" ng-transclude
        ng-class="alertCtrl.componentColour">
      </div>
    `
  };

  status: String;

  componentColour = {
    'bg-blue': this.status === 'info',
    'bg-yellow': this.status === 'warning',
    'bg-green': this.status === 'success',
    'bg-red': this.status === 'error',
    'white': this.status === 'info' || this.status === 'error'
  };
}
