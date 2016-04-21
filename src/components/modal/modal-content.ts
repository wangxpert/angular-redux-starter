export class RioModalContent {

  static selector = 'rioModalContent';

  static options: ng.IComponentOptions = {
    controller: RioModalContent,
    controllerAs: 'modalContentCtrl',
    transclude: true,
    template: `
      <div
        ng-class="modalContentCtrl.styles.modal"
        class="p2 z2 bg-white modal relative"
        ng-transclude></div>
    `
  };

  private styles = require('./modal.css');
}
