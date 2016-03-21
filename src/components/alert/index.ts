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
        ng-class="alertCtrl.componentColour[alertCtrl.status || 'info']">
      </div>
    `
  };

  private componentColour: Object = {
    info: 'bg-blue white',
    warning: 'bg-yellow black',
    success: 'bg-green black',
    error: 'bg-red white'
  };
}
