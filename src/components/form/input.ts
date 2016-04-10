export class RioInput {

  static selector = 'rioInput';

  static options: ng.IComponentOptions = {
    bindings: {
      'placeholder': '@',
      'type': '@',
      'ngModel': '=',
      'inputName': '@',
      'required': '@',
    },
    controller: RioInput,
    controllerAs: 'inputCtrl',
    template: `
      <input
        name="{{inputCtrl.inputName}}"
        class="block col-12 mb1 input"
        type="{{inputCtrl.type || 'text'}}"
        placeholder="{{inputCtrl.placeholder}}"
        ng-model="inputCtrl.ngModel"
        ng-required="{{inputCtrl.required}}"
      />
    `
  };
}
