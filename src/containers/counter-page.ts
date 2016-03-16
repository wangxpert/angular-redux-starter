import * as CounterActions from '../actions/counter';

export class RioCounterPage {

  static selector = 'rioCounterPage';

  static options: ng.IComponentOptions = {
    transclude: true,
    controllerAs: 'ctrl',
    controller: RioCounterPage,
    template: `
      <div class="max-width-2 mx-auto">
        <h1 class="center">Counter</h1>
        <rio-counter
          increment="ctrl.increment()"
          decrement="ctrl.decrement()"
          value="ctrl.value">
        </rio-counter>
      </div>
    `
  };

  static $inject = [
    '$ngRedux',
    '$scope'
  ];

  constructor($ngRedux, $scope: ng.IScope) {
    const unsubscribe = $ngRedux.connect(
      this.mapStateToThis, CounterActions)(this);
    $scope.$on('$destroy', unsubscribe);
  }

  mapStateToThis(state) {
    return {
      value: state.counter.get('count')
    };
  }
}
